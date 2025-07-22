# EduSpark - AI-Powered Educational Platform with Live Tutoring

EduSpark is a comprehensive educational platform that combines AI-powered task management with live tutoring capabilities. Students can break down complex goals into manageable steps using AI and connect with mentors for personalized guidance through integrated video sessions.

## 🚀 Core Features

### 🤖 AI-Powered Task Management
- **Smart Goal Breakdown**: Use Gemini AI to automatically break down large educational goals into step-by-step actionable plans
- **Subject-Specific Planning**: Generate tasks tailored to specific subjects (Math, Science, English, etc.)
- **Time Estimation**: Each generated task includes estimated completion time
- **Progress Tracking**: Mark tasks as complete and track your learning journey
- **Interactive Task Cards**: View detailed task information with categories and time estimates

### 👨‍🏫 Live Tutoring & Mentorship System
- **Dual Account Types**: Separate student and mentor profiles with role-based features
- **Live Video Sessions**: Built-in Google Meet-style video conferencing for real-time tutoring
- **Session Booking**: Easy scheduling system for mentor-student sessions
- **Subject Expertise**: Mentors can specify their areas of expertise
- **Session History**: Track past tutoring sessions and progress
- **Rating System**: Students can rate mentors and provide feedback

### 💬 Intelligent Chatbot
- **Context-Aware Assistance**: Get help with your tasks and educational questions
- **Real-Time Support**: Instant responses to queries about your work
- **Educational Guidance**: Receive study tips and learning strategies
- **Homework Help**: Guided assistance without giving direct answers

### 📊 Personalized Dashboards
- **Student Dashboard**: Track tasks, upcoming sessions, mentor connections
- **Mentor Dashboard**: Manage students, schedule sessions, track earnings
- **Analytics**: Progress reports and learning insights
- **Calendar Integration**: View all tasks and sessions in one place

## 🎯 User Roles & Features

### 👨‍🎓 Student Account Features
- **AI Task Generation**: Break down study goals into manageable steps
- **Mentor Discovery**: Browse and connect with qualified mentors
- **Session Booking**: Schedule tutoring sessions based on availability
- **Live Video Sessions**: Join video calls directly in the app
- **Progress Tracking**: Monitor learning progress and completed tasks
- **Resource Library**: Access shared study materials from mentors
- **Peer Connections**: Connect with other students in similar subjects

### 👨‍🏫 Mentor Account Features
- **Profile Management**: Showcase expertise, qualifications, and experience
- **Availability Setting**: Set available time slots for tutoring sessions
- **Student Management**: Track student progress and session history
- **Session Scheduling**: Accept/decline session requests from students
- **Live Teaching Tools**: Screen sharing, whiteboard, and file sharing during sessions
- **Earnings Dashboard**: Track tutoring income and payment history
- **Resource Sharing**: Upload and share study materials with students

## 🎥 Live Meeting & Video Features

### 📹 Integrated Video Conferencing
- **WebRTC Technology**: High-quality peer-to-peer video communication
- **Screen Sharing**: Share screens for better explanation and demonstration
- **Interactive Whiteboard**: Real-time collaborative whiteboard for problem-solving
- **File Sharing**: Share documents, images, and study materials during sessions
- **Session Recording**: Option to record sessions for later review (with consent)
- **Chat Integration**: Text chat alongside video for sharing links and notes

### 🔧 Meeting Controls
- **Camera/Mic Toggle**: Easy controls for audio and video
- **Meeting Invitation**: Send meeting links to participants
- **Waiting Rooms**: Mentors can control who joins the session
- **Session Timer**: Track session duration for billing purposes
- **Quality Settings**: Adjust video quality based on connection speed
- **Mobile Responsive**: Join sessions from mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Router** - Client-side routing and navigation
- **Axios** - HTTP client for API requests
- **Socket.IO Client** - Real-time communication for live features
- **WebRTC** - Peer-to-peer video conferencing
- **React Icons** - Comprehensive icon library

### Backend
- **Node.js + Express** - RESTful API server
- **MongoDB + Mongoose** - Database for user data and sessions
- **Socket.IO** - Real-time communication server
- **JWT Authentication** - Secure user authentication
- **Stripe Integration** - Payment processing for tutoring sessions
- **Multer** - File upload handling for resources

### Real-Time & Video
- **Socket.IO** - Real-time messaging and notifications
- **WebRTC** - Peer-to-peer video communication
- **STUN/TURN Servers** - NAT traversal for video calls
- **MediaStream API** - Camera and microphone access

### AI Integration
- **Google Gemini 2.5 Flash** - Advanced language model for task generation
- **Custom Prompting** - Engineered prompts for educational task breakdown
- **JSON Response Processing** - Structured data processing from AI responses

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git

### Clone Repository
```bash
git clone https://github.com/your-username/eduspark.git
cd eduspark
```

### Frontend Setup
```bash
cd frontend
npm install

# Create .env file
echo "REACT_APP_GEMINI_API_KEY=your_gemini_api_key" > .env
echo "REACT_APP_API_BASE_URL=http://localhost:5000" >> .env
echo "REACT_APP_SOCKET_URL=http://localhost:3001" >> .env

npm start
```

### Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=5000" > .env
echo "MONGODB_URI=mongodb://localhost:27017/eduspark" >> .env
echo "JWT_SECRET=your_jwt_secret_key" >> .env
echo "STRIPE_SECRET_KEY=your_stripe_secret_key" >> .env

npm run dev
```

### Socket Server Setup
```bash
cd socket-server
npm install

# Create .env file
echo "PORT=3001" > .env
echo "CORS_ORIGIN=http://localhost:3000" >> .env

npm start
```

### Environment Variables

#### Frontend (.env)
```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:3001
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

#### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eduspark
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
GEMINI_API_KEY=your_gemini_api_key
CORS_ORIGIN=http://localhost:3000
```

#### Socket Server (.env)
```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

## 🎮 Usage Guide

### Getting Started
1. **Create Account**: Choose between Student or Mentor account type
2. **Complete Profile**: Add bio, subjects, availability (for mentors)
3. **Verify Account**: Email verification for security
4. **Explore Features**: Generate study plans or browse mentors

### For Students
1. **Generate Study Plans**: Use AI to break down complex learning goals
2. **Find Mentors**: Browse mentors by subject and rating
3. **Book Sessions**: Schedule tutoring sessions at convenient times
4. **Join Video Calls**: Click on session links to join video meetings
5. **Track Progress**: Monitor completed tasks and session history

### For Mentors
1. **Set Up Profile**: Add qualifications, subjects, and hourly rates
2. **Set Availability**: Define when you're available for tutoring
3. **Accept Requests**: Review and accept student session requests
4. **Conduct Sessions**: Use built-in video tools for effective tutoring
5. **Track Earnings**: Monitor income and payment history

### Live Meeting Features
1. **Start/Join Meeting**: Click session link to enter video call
2. **Screen Sharing**: Share your screen for better explanation
3. **Whiteboard**: Use collaborative whiteboard for problem-solving
4. **File Sharing**: Upload and share study materials in real-time
5. **Chat**: Use text chat for sharing links and quick notes

## 🏗️ Project Structure

```
eduspark/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Auth/        # Authentication components
│   │   │   ├── Tutoring/    # Tutoring system components
│   │   │   ├── Meeting/     # Video meeting components
│   │   │   ├── Dashboard/   # User dashboards
│   │   │   └── Common/      # Shared components
│   │   ├── contexts/        # React contexts for state
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles
│   └── package.json
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── services/      # Business logic services
│   │   └── utils/         # Backend utilities
│   └── package.json
├── socket-server/          # Socket.IO server for real-time features
│   ├── src/
│   │   ├── handlers/      # Socket event handlers
│   │   └── services/      # Socket services
│   └── package.json
└── README.md
```

## 📊 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  role: String (student/mentor),
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String,
    subjects: [String], // for mentors
    hourlyRate: Number, // for mentors
    availability: [Object] // for mentors
  },
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Session Model
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: User),
  mentor: ObjectId (ref: User),
  subject: String,
  scheduledAt: Date,
  duration: Number, // minutes
  status: String, // pending/confirmed/completed/cancelled
  meetingLink: String,
  notes: String,
  rating: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Meeting Model
```javascript
{
  _id: ObjectId,
  sessionId: ObjectId (ref: Session),
  participants: [ObjectId],
  startTime: Date,
  endTime: Date,
  recordingUrl: String,
  chatHistory: [Object],
  sharedFiles: [Object],
  createdAt: Date
}
```

## 🔧 API Endpoints

### Authentication
```
POST /api/auth/register     # Register new user
POST /api/auth/login        # Login user
POST /api/auth/logout       # Logout user
GET  /api/auth/verify       # Verify email
POST /api/auth/reset        # Reset password
```

### Users
```
GET    /api/users/profile   # Get user profile
PUT    /api/users/profile   # Update profile
GET    /api/users/mentors   # Get all mentors
GET    /api/users/students  # Get mentor's students
```

### Sessions
```
GET    /api/sessions        # Get user sessions
POST   /api/sessions        # Book new session
PUT    /api/sessions/:id    # Update session
DELETE /api/sessions/:id    # Cancel session
GET    /api/sessions/history # Get session history
```

### Meetings
```
POST /api/meetings/start    # Start video meeting
POST /api/meetings/join     # Join meeting
PUT  /api/meetings/end      # End meeting
GET  /api/meetings/history  # Get meeting history
```

### Tasks (AI Integration)
```
POST /api/tasks/generate    # Generate AI study plan
GET  /api/tasks             # Get user tasks
PUT  /api/tasks/:id         # Update task status
DELETE /api/tasks/:id       # Delete task
```

## 🔒 Security Features

### Authentication & Authorization
- **JWT Tokens**: Secure authentication with refresh tokens
- **Role-Based Access**: Different permissions for students and mentors
- **Email Verification**: Prevent fake accounts
- **Password Hashing**: bcrypt for secure password storage
- **Rate Limiting**: Prevent API abuse and brute force attacks

### Video Meeting Security
- **Meeting Passwords**: Optional passwords for sensitive sessions
- **Waiting Rooms**: Mentors control who joins meetings
- **End-to-End Encryption**: Secure video and audio transmission
- **Session Timeout**: Automatic meeting termination after inactivity
- **Recording Consent**: Both parties must consent to recording

### Data Protection
- **Input Validation**: Prevent XSS and injection attacks
- **CORS Configuration**: Secure cross-origin requests
- **File Upload Limits**: Prevent abuse of file sharing features
- **Data Encryption**: Sensitive data encrypted at rest

## 💳 Payment Integration

### Stripe Integration
- **Secure Payments**: PCI-compliant payment processing
- **Mentor Payouts**: Automatic payments to mentors
- **Session Billing**: Automatic billing based on session duration
- **Refund System**: Easy refunds for cancelled sessions
- **Payment History**: Track all financial transactions

### Billing Features
- **Hourly Rates**: Mentors set their own rates
- **Session Packages**: Bulk session discounts
- **Automatic Billing**: Charge after session completion
- **Payment Methods**: Support for cards and digital wallets
- **Tax Handling**: Automatic tax calculation where applicable

## 🚀 Deployment

### Production Environment
```bash
# Build frontend
cd frontend
npm run build

# Set production environment variables
export NODE_ENV=production
export MONGODB_URI=your_production_mongodb_uri
export JWT_SECRET=your_production_jwt_secret

# Deploy to your preferred hosting service
# (Vercel, Netlify, AWS, Google Cloud, etc.)
```

### Docker Deployment
```dockerfile
# Dockerfile example for backend
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Environment-Specific Configs
- **Development**: Local MongoDB, test Stripe keys
- **Staging**: Cloud MongoDB, test environment
- **Production**: Production databases, live Stripe keys

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Follow Code Style**: Use ESLint and Prettier configurations
4. **Add Tests**: Write tests for new features
5. **Update Documentation**: Update README and code comments
6. **Submit Pull Request**: Provide clear description of changes

### Development Guidelines
- Follow React best practices and hooks patterns
- Use TypeScript for type safety (if migrating)
- Write meaningful commit messages
- Test video features across different browsers
- Maintain responsive design principles
- Follow accessibility standards (WCAG 2.1)

## 🐛 Troubleshooting

### Common Issues

**Video Calls Not Working**
- Check browser permissions for camera/microphone
- Verify STUN/TURN server configuration
- Test WebRTC compatibility in browser console
- Check firewall settings for WebRTC traffic

**AI Generation Failing**
- Verify Gemini API key is valid and has quota
- Check API endpoint availability
- Review request format and prompt structure
- Monitor API rate limits

**Socket Connection Issues**
- Verify Socket.IO server is running
- Check CORS configuration for real-time features
- Test WebSocket connection in browser dev tools
- Review proxy settings if behind corporate firewall

**Payment Processing Errors**
- Verify Stripe API keys (test vs. live)
- Check webhook endpoint configuration
- Review payment method restrictions
- Monitor Stripe dashboard for detailed error logs

### Performance Optimization
- **Code Splitting**: Implement lazy loading for heavy components
- **Image Optimization**: Compress images and use modern formats
- **Bundle Analysis**: Regular bundle size monitoring
- **CDN Integration**: Serve static assets from CDN
- **Database Indexing**: Optimize MongoDB queries with proper indexes

## 📈 Analytics & Monitoring

### Built-in Analytics
- **User Engagement**: Track session duration and frequency
- **Learning Progress**: Monitor task completion rates
- **Mentor Performance**: Rating and booking statistics
- **Platform Usage**: Most popular subjects and features
- **Revenue Tracking**: Payment and earning analytics

### Monitoring Tools
- **Error Tracking**: Integrate Sentry for error monitoring
- **Performance**: Use New Relic or similar for performance tracking
- **Uptime Monitoring**: Set up alerts for service availability
- **User Feedback**: In-app feedback collection system

## 🎯 Future Enhancements

### Planned Features
- **Mobile Apps**: Native iOS and Android applications
- **Advanced Analytics**: Detailed learning progress insights
- **Group Sessions**: Multi-student tutoring sessions
- **AI Tutoring**: AI-powered tutoring assistant
- **Offline Support**: Work without internet connectivity
- **Integration APIs**: Connect with popular learning platforms
- **Gamification**: Points, badges, and leaderboards
- **Voice Messages**: Audio messages in chat
- **Calendar Sync**: Google Calendar and Outlook integration
- **Advanced Search**: AI-powered mentor recommendation

### Scalability Improvements
- **Microservices**: Break down monolithic backend
- **Load Balancing**: Handle increased user traffic
- **CDN Integration**: Global content delivery
- **Database Sharding**: Scale database horizontally
- **Caching Strategy**: Redis for improved performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## 👥 Team & Support

### Core Team
- **Full-Stack Developers**: Building robust frontend and backend systems
- **DevOps Engineers**: Ensuring scalable and reliable infrastructure
- **UI/UX Designers**: Creating intuitive and accessible user interfaces
- **Educational Consultants**: Ensuring pedagogically sound features
- **QA Engineers**: Comprehensive testing across devices and browsers

### Support Channels
- **Email**: support@eduspark.com
- **GitHub Issues**: [Create an issue](https://github.com/your-username/eduspark/issues)
- **Documentation**: [Wiki pages](https://github.com/your-username/eduspark/wiki)
- **Community Forum**: [Discussion board](https://github.com/your-username/eduspark/discussions)
- **Live Chat**: Available 9 AM - 6 PM EST

### Acknowledgments
- Google Gemini AI for intelligent task generation
- WebRTC community for video conferencing capabilities
- Open-source contributors who made this possible
- Beta testers and early adopters for valuable feedback

---

**EduSpark** - Bridging the gap between AI-powered learning and human mentorship! 🎓✨

*Transform your learning journey with intelligent task management and personalized tutoring.*