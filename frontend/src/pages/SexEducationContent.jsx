import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

const contentData = {
  '9-12': {
    title: "Growing Up & Changes",
    description: "Understanding the changes that happen during puberty and early adolescence.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800",
    sections: [
      {
        title: "Understanding Puberty",
        content: "Learn about the physical and emotional changes that occur during puberty, including growth spurts, body changes, and mood variations."
      },
      {
        title: "Physical Changes",
        content: "Explore the natural changes your body goes through, including height, weight, and other developmental changes."
      },
      {
        title: "Personal Hygiene",
        content: "Important tips and practices for maintaining good personal hygiene during puberty and beyond."
      },
      {
        title: "Emotional Well-being",
        content: "Understanding and managing emotions, building self-esteem, and maintaining healthy relationships with family and friends."
      }
    ]
  },
  '13-15': {
    title: "Teen Health & Relationships",
    description: "Navigate the complexities of teenage years with confidence and knowledge.",
    image: "https://t4.ftcdn.net/jpg/03/15/87/35/360_F_315873518_3DpsHxRea2S9zncyypJE2DMiluLGLPVF.jpg", // Updated image URL
    sections: [
      {
        title: "Body Image & Self-esteem",
        content: "Developing a healthy relationship with your body and building confidence in yourself."
      },
      {
        title: "Healthy Relationships",
        content: "Understanding the foundations of healthy friendships and relationships, including respect and communication."
      },
      {
        title: "Digital Safety",
        content: "Staying safe online, understanding privacy, and managing social media responsibly."
      },
      {
        title: "Understanding Consent",
        content: "Learning about personal boundaries, respect, and the importance of consent in all relationships."
      }
    ]
  },
  '16-plus': {
    title: "Sexual Health & Responsibility",
    description: "Comprehensive information about sexual health, relationships, and making informed decisions.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800",
    sections: [
      {
        title: "Reproductive Health",
        content: "Understanding reproductive systems, menstrual cycles, and maintaining reproductive health."
      },
      {
        title: "Safe Practices",
        content: "Information about protection, prevention, and maintaining sexual health responsibly."
      },
      {
        title: "Emotional Well-being",
        content: "Managing relationships, emotional health, and making decisions that align with your values."
      },
      {
        title: "Healthcare & Support",
        content: "Accessing healthcare services, finding support, and maintaining overall well-being."
      }
    ]
  }
};

function SexEducationContent() {
  const { ageGroup } = useParams();
  const content = contentData[ageGroup];

  if (!content) {
    return <Navigate to="/sex-education" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#6a1b9a] p-4">
        <div className="container mx-auto">
          <Link to="/sex-education" className="text-white flex items-center gap-2 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back to Age Groups
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-[#e61f93]" />
          <h1 className="text-3xl font-bold text-[#6a1b9a]">{content.title}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={content.image}
              alt={content.title}
              className="rounded-xl shadow-lg mb-4 h-96 w-full object-cover" // Adjusted height to h-80
            />
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <p className="text-gray-600">{content.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-[#6a1b9a] mb-2">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SexEducationContent;