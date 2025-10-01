import blockContent from './blockContent'
import client from './client'
import project from './project'
import projectCallout from './project/projectCallout'
import projectGallery from './project/projectGallery'
import proposal from './proposal'
import proposalCaseStudy from './proposal/proposalCaseStudy'
import proposalChallenge from './proposal/proposalChallenge'
import proposalExecutiveSummary from './proposal/proposalExecutiveSummary'
import proposalMotionDesignApproach from './proposal/proposalMotionDesignApproach'
import proposalNextSteps from './proposal/proposalNextSteps'
import proposalPeople from './proposal/proposalPeople'
import proposalPricing from './proposal/proposalPricing'
import proposalPricingTable from './proposal/proposalPricingTable'
import proposalSection from './proposal/proposalSection'
import proposalSolution from './proposal/proposalSolution'
import proposalStructure from './proposal/proposalStructure'
import proposalTimeline from './proposal/proposalTimeline'
import role from './role'
import vimeo from './vimeo'

export const schemaTypes = [
  // General
  blockContent,
  vimeo,

  // Project
  project,
  projectCallout,
  projectGallery,

  // Client
  client,

  // Proposal
  proposal,
  proposalChallenge,
  proposalMotionDesignApproach,
  proposalPricing,
  proposalSection,
  proposalSolution,
  proposalTimeline,
  proposalCaseStudy,
  proposalNextSteps,
  proposalPricingTable,
  proposalStructure,
  proposalPeople,
  proposalExecutiveSummary,

  // Role
  role,
]
