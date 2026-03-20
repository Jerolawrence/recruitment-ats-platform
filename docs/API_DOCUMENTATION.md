# API Documentation for Recruitment ATS Platform

## Introduction
This document provides detailed information about the API for the Recruitment ATS (Applicant Tracking System) platform. It outlines the available endpoints, request/response examples, and potential error codes.

## Base URL
The base URL for the API is: `https://api.recruitment-ats-platform.com/v1`

## Authentication
The API uses token-based authentication. Include your token in the `Authorization` header for every request:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Endpoints

### 1. Job Postings
#### Create a Job Posting
- **POST** `/jobs`
- **Request Body:**  
```json
{
  "title": "Software Engineer",
  "description": "Job description goes here.",
  "location": "Remote",
  "company": "Company Name",
  "employment_type": "full-time"
}
```
- **Response:**  
```json
{
  "id": "123",
  "title": "Software Engineer",
  "status": "created"
}
```

#### Get All Job Postings
- **GET** `/jobs`
- **Response:**  
```json
[
  {
    "id": "123",
    "title": "Software Engineer",
    "location": "Remote"
  },
  {
    "id": "124",
    "title": "Product Manager",
    "location": "On-site"
  }
]
```

### 2. Applications
#### Submit an Application
- **POST** `/applications`
- **Request Body:**  
```json
{
  "job_id": "123",
  "applicant_name": "Jane Doe",
  "resume": "base64-encoded-resume"
}
```
- **Response:**  
```json
{
  "application_id": "456",
  "status": "submitted"
}
```

### 3. Interviews
#### Schedule an Interview
- **POST** `/interviews`
- **Request Body:**  
```json
{
  "application_id": "456",
  "interview_date": "2026-04-01T10:00:00Z",
  "interviewer": "John Smith"
}
```
- **Response:**  
```json
{
  "interview_id": "789",
  "status": "scheduled"
}
```

## Error Codes
- **400 Bad Request:** Invalid request format.
- **401 Unauthorized:** Invalid or missing authentication token.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** An unexpected error occurred.

## Conclusion
This API documentation serves as a guide for developers to integrate with the Recruitment ATS platform. For further assistance, please refer to the support team or the developer community.