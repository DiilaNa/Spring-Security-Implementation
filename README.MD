# 🛡️ Spring Security JWT - Authentication System

A robust implementation of **Spring Security** using **JSON Web Tokens (JWT)** with a dual-token system (Access & Refresh tokens). This project demonstrates secure stateless authentication, role-based access control, and token lifecycle management.



## 🚀 Features

* **Stateless Authentication**: Uses JWT to avoid server-side session storage.
* **Dual Token System**: 
    * **Access Token**: Short-lived (e.g., 15 mins) for API authorization.
    * **Refresh Token**: Long-lived (e.g., 7 days) used to issue new access tokens.
* **Role-Based Access Control (RBAC)**: Secure endpoints based on user roles (e.g., `USER`, `ADMIN`).
* **Password Encryption**: Utilizes `BCryptPasswordEncoder` for secure storage.
* **Global Exception Handling**: Custom filters to catch expired or malformed tokens.

---

## 🛠️ Tech Stack

* **Backend**: Java 17+, Spring Boot 3.x
* **Security**: Spring Security 6
* **Database**: MySQL / PostgreSQL (via Spring Data JPA)
* **Token**: `jwt` (Java JWT Library)
* **Documentation**: Swagger/OpenAPI

---

## 🔄 Authentication Flow

1.  **Login**: User sends credentials to `/api/v1/auth/authenticate`.
2.  **Issue**: Server validates and returns an `accessToken` and a `refreshToken`.
3.  **Access**: Client includes `accessToken` in the `Authorization: Bearer` header for API requests.
4.  **Expire**: If the `accessToken` expires (403 Forbidden), the client calls the refresh endpoint.
5.  **Renew**: Server validates the `refreshToken` and issues a brand new `accessToken`.

---

## 📂 Project Structure

```text
src/main/java/com/yourname/security/
├── config/             # SecurityFilterChain, PasswordEncoder
├── controller/         # Auth & Test Endpoints
├── dto/                # Request/Response payloads (Req/Res)
├── entity/             # User and Role entities
├── exception/          # Global Exception handler
├── repository/         # User JPA Repository
└── service/            # JWT & Authentication Logic 
├── util/             # JWT Authentication Filter

```

## 📡 API Endpoints

### Auth Controller
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Create a new user account |
| `POST` | `/api/v1/auth/authenticate` | Login and receive tokens |
| `POST` | `/api/v1/auth/refresh-token` | Exchange refresh token for new access token |

### Protected Endpoints
| Method | Endpoint | Access Level |
| :--- | :--- | :--- |
| `GET` | `/api/v1/user` | Authenticated Users |
| `GET` | `/api/v1/admin` | Admin Only |

---

## ⚙️ How to Run

1. **Clone the project:**
   ```bash
   git clone https://github.com/DiilaNa/Spring_Security.git 
   ```
2. **Configure Database:** Update src/main/resources/application.properties with your DB credentials.  

3. **Set Secret Keys:** Add these to your application.properties:
    ```
    application.security.jwt.secret-key=your_very_long_secret_key_here
    application.security.jwt.expiration=86400000 # 24 hours
    application.security.jwt.refresh-token.expiration=604800000 # 7 days
    ```

4. **Build and Run:**
    ```
    mvn clean install
    mvn spring-boot:run
    ```

## Author : Dilan Liyanaarachchi