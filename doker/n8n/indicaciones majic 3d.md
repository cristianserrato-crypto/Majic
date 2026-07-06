
01. Project Vision
02. Global Prompt for Codex
03. Tech Stack
04. General Development Rules
05. Visual Identity
06. Design System
07. Theme JSON
08. Folder Structure
09. Routing
10. Global Layout
11. Sidebar
12. Topbar
13. Reusable Components
14. Global State
15. Database Model (Frontend)
16. Dashboard
17. Customers
18. Quotations
19. Orders
20. Automations
21. Reports
22. Settings
23. Responsive Rules
24. Motion & Animations
25. UX Rules
26. Accessibility
27. Future Modules
28. Final Prompt for Codex
________________________________________
PARTE 1
Project Vision
# Majic 3D ERP CRM
## Frontend Specification v1.0

---

# Project Overview

Majic 3D ERP CRM is a modern SaaS platform focused on automating the commercial management of a small manufacturing business dedicated to 3D printing.

Unlike a traditional ERP, the platform is intentionally lightweight, visual and automation-driven. Every module has been designed to reduce repetitive administrative work while providing a clear overview of the company's commercial activity.

The system combines CRM, quotation management, order tracking, intelligent automations and business analytics into a single interface.

Artificial Intelligence is not presented as an independent product but as an assistant integrated throughout the entire application.

The objective is that a single entrepreneur can efficiently manage the entire commercial process without requiring additional administrative personnel.

---

# Main Goals

The interface must achieve the following objectives:

• Centralize all commercial information.

• Reduce manual administrative tasks.

• Improve customer follow-up.

• Organize quotations and production orders.

• Display business indicators in real time.

• Allow future scalability.

• Provide a premium SaaS experience.

---

# Product Philosophy

The application should never feel like a traditional ERP.

It should feel like:

✓ Modern

✓ Minimalist

✓ Intelligent

✓ Fast

✓ Clean

✓ Elegant

✓ Professional

Every screen should contain only the information necessary for the user's current task.

Large empty spaces are preferred over crowded interfaces.

The application must prioritize readability over information density.

---

# Target User

Primary User

Business Owner

Company

Majic 3D

Characteristics

• Works alone or with a very small team.

• Uses WhatsApp as the primary communication channel.

• Creates quotations daily.

• Needs to organize customers.

• Requires quick access to business information.

• Has limited time for administrative tasks.

• Values automation over manual work.

---

# Product Personality

If this software were a person it would be:

Professional

Calm

Minimalist

Highly organized

Intelligent

Reliable

Modern

Efficient

The interface should communicate confidence instead of complexity.

No unnecessary visual effects.

No decorative elements.

Everything must have a purpose.

---

# General UI Style

The visual language should be inspired by modern SaaS platforms such as:

Linear

Stripe Dashboard

Vercel

Raycast

Notion Calendar

Framer

Arc Browser

Notion AI

The overall feeling should be:

Dark Mode

Glassmorphism (subtle)

Rounded corners

Soft shadows

Premium typography

Generous spacing

Green neon accents

Minimal borders

Animated interactions

Modern cards

Professional dashboards

No skeuomorphism.

No glossy buttons.

No gradients everywhere.


________________________________________
# 02. AI Development Manifest

## ROLE

You are a Senior Staff Frontend Engineer with more than 20 years of experience building enterprise SaaS products.

You have worked on products comparable to Stripe Dashboard, Notion, Linear, Framer, Vercel Dashboard and Raycast.

You are also a Senior UX Designer specialized in Human Computer Interaction.

Your responsibility is not simply writing code.

Your responsibility is designing an exceptional product.

Every decision must improve:

• usability

• readability

• scalability

• accessibility

• maintainability

• consistency

You never build "demo interfaces".

Everything should feel production ready.

---

# PRIMARY OBJECTIVE

Your mission is to build the complete frontend of Majic 3D ERP CRM.

The objective is to reproduce exactly the visual style defined in this document.

Do not redesign.

Do not reinterpret.

Do not simplify.

Do not add creative elements.

Do not invent modules.

The provided specification is the source of truth.

Whenever uncertainty exists, follow the specification instead of making assumptions.

---

# DEVELOPMENT PHILOSOPHY

Everything must be component driven.

Never duplicate UI.

Never duplicate logic.

Every element should be reusable.

Every component should have a single responsibility.

The interface must feel extremely organized.

Every screen should have visual balance.

Whitespace is mandatory.

Minimalism always wins over information density.

The user should never feel overwhelmed.

---

# DESIGN PHILOSOPHY

The interface should transmit

Luxury

Technology

Innovation

Automation

Organization

Trust

Speed

Every screen must immediately communicate that the system is intelligent.

Artificial Intelligence should be integrated naturally.

Never expose technical complexity.

The software should feel effortless.

---

# VISUAL CONSISTENCY

Every page must look like it belongs to the same product.

Cards

Spacing

Margins

Buttons

Tables

Forms

Charts

Colors

Animations

Typography

Everything should follow one unique design language.

Never mix styles.

Never introduce new colors.

Never create new spacing values.

Never improvise.

Everything must follow the Design System.

---

# USER EXPERIENCE

The user should never need a tutorial.

Everything should be obvious.

Actions should require the minimum number of clicks.

The most important actions must always be visible.

Never hide primary actions inside menus.

Navigation should always feel predictable.

The interface must respond instantly.

Loading states should always exist.

Empty states should always exist.

Error states should always exist.

Success states should always exist.

---

# PERFORMANCE

Frontend performance is mandatory.

Avoid unnecessary renders.

Avoid large component trees.

Avoid deeply nested layouts.

Prefer composition over inheritance.

Avoid excessive dependencies.

Lazy load every page.

Only render what is visible.

---

# CODE QUALITY

Never generate temporary code.

Never generate placeholder components unless explicitly requested.

Avoid comments explaining obvious code.

Prefer self descriptive variable names.

Follow SOLID principles.

Follow Clean Code principles.

Follow Atomic Design.

Follow Feature Driven Architecture.

Use strict TypeScript.

No "any".

No duplicated interfaces.

No duplicated types.

Everything strongly typed.

---

# COMPONENT RULES

Every component must be reusable.

Every component must be independent.

Every component must support:

loading

disabled

hover

focus

active

error

success

responsive

Every component should expose clean props.

Avoid prop drilling whenever possible.

---

# RESPONSIVE DESIGN

Desktop First.

Then Laptop.

Then Tablet.

Then Mobile.

Do not simply resize.

Reorganize layouts.

Cards may become vertical.

Tables may become cards.

Sidebar becomes drawer.

Charts resize automatically.

No horizontal scrolling.

---

# ACCESSIBILITY

WCAG AA minimum.

Keyboard navigation.

Focus visible.

ARIA labels.

Semantic HTML.

Proper heading hierarchy.

Color contrast.

Screen reader compatibility.

Never use color as the only indicator.

---

# ANIMATIONS

Animations should feel natural.

Never flashy.

Use easing.

Short durations.

Animations should reinforce understanding.

Never distract.

Recommended duration

150ms

200ms

250ms

300ms

Avoid animations longer than 400ms.

---

# MICRO INTERACTIONS

Hover

Elevation increases.

Border becomes brighter.

Shadow softens.

Button slightly scales.

Cards subtly move upward.

Charts animate smoothly.

Notifications slide.

Dialogs fade.

Drawers slide.

Everything should feel alive.

Never static.

---

# DATA VISUALIZATION

Charts must be clean.

Minimal.

No unnecessary legends.

No 3D charts.

No saturated colors.

Rounded corners.

Thin grid lines.

Soft animations.

Readable labels.

Dark backgrounds.

---

# FORMS

Every form must provide:

real-time validation

clear errors

field descriptions

required indicators

keyboard navigation

success feedback

loading button

cancel action

submit action

---

# TABLES

Every table should support:

search

sorting

pagination

filters

responsive mode

empty state

loading state

hover state

row actions

status badges

---

# DASHBOARD PRINCIPLE

Dashboard is not an ERP.

Dashboard is not BI software.

Dashboard is a quick overview.

Maximum:

4 KPI cards

2 charts

1 activity panel

1 quick actions panel

Nothing else.

---

# CRM PRINCIPLE

CRM is customer centric.

Every customer should expose:

history

orders

quotations

files

notes

automation logs

communication timeline

Everything in one place.

---

# AUTOMATION PRINCIPLE

Automation is the heart of the platform.

Automation deserves the most premium experience.

The user should instantly understand

what is automated

what failed

what succeeded

what is pending

Never expose technical workflow details.

Everything should be translated into business language.

---

# REPORT PRINCIPLE

Reports should answer questions.

Not display numbers.

Every graph should tell a story.

Every KPI should help decisions.

No meaningless statistics.

---

# SETTINGS PRINCIPLE

Settings should be minimal.

Simple.

Organized.

Grouped.

Never overwhelming.

Advanced configuration belongs in future versions.

---

# IMPORTANT

The goal is NOT building software.

The goal is creating the best user experience possible for a small business owner that wants to automate his business.

Every decision must support that objective.
________________________________________

# 03. Technology Stack & Frontend Architecture

---

# GENERAL PRINCIPLE

This project focuses exclusively on the Frontend.

The Backend, APIs, authentication, AI integrations and automations will be implemented in a later phase.

The frontend must therefore simulate all data using local JSON or mock repositories while maintaining an architecture that allows replacing the data source without changing the UI.

Business logic must never depend on the data source.

The interface should remain identical whether the data comes from:

• Mock Data

• REST API

• GraphQL

• Local Database

• Firebase

• Supabase

• PostgreSQL

Changing the backend should require minimal frontend changes.

---

# TECHNOLOGY STACK

Framework

React 19

---

Language

TypeScript

Strict Mode Enabled

No "any"

No implicit types

---

Build Tool

Vite

Latest Stable Version

---

CSS Framework

Tailwind CSS v4

No Bootstrap.

No Material UI.

No Chakra UI.

Tailwind will be responsible for almost the entire visual layer.

---

UI Components

shadcn/ui

Only use shadcn components when they respect the project's visual identity.

If a component requires customization, extend it instead of replacing it.

---

Icons

Lucide React

No Heroicons.

No FontAwesome.

No Bootstrap Icons.

Every icon must come from Lucide.

Preferred icon size:

18px

20px

22px

Never larger than 24px.

---

Animations

Framer Motion

Use subtle transitions only.

Avoid exaggerated animations.

Animations should support usability.

Never distract.

---

Routing

React Router DOM

Latest Stable Version

Nested Routing Enabled

Lazy Loading Enabled

---

Forms

React Hook Form

Validation

Zod

---

Charts

Recharts

No ApexCharts.

No ChartJS.

Charts should remain lightweight.

---

State Management

Zustand

No Redux.

No MobX.

No Context abuse.

Keep stores small.

Split by feature.

---

Server State

TanStack Query

Although backend is not implemented yet, the architecture should already be prepared.

Mock repositories should behave like API calls.

---

Utilities

clsx

tailwind-merge

date-fns

uuid

---

Folder Naming

Always lowercase.

Never spaces.

Never Pascal folders.

Example

customers

dashboard

reports

automations

---

FILE NAMING

React Components

PascalCase

CustomerCard.tsx

OrderCard.tsx

Sidebar.tsx

Dashboard.tsx

AutomationCard.tsx

---

Hooks

camelCase

useCustomer.ts

useOrders.ts

useDashboard.ts

---

Stores

camelCase

customerStore.ts

dashboardStore.ts

themeStore.ts

---

Interfaces

PascalCase

Customer.ts

Order.ts

Automation.ts

---

Enums

PascalCase

OrderStatus.ts

CustomerStatus.ts

AutomationStatus.ts

---

# PROJECT STRUCTURE

src/

│

├── app/

│

├── assets/

│

├── components/

│

├── layouts/

│

├── pages/

│

├── features/

│

├── services/

│

├── repositories/

│

├── store/

│

├── hooks/

│

├── types/

│

├── utils/

│

├── constants/

│

├── mocks/

│

├── styles/

│

└── router/

---

# APP

Responsible for application initialization.

Contains

Theme

Providers

Router

Global configuration

App.tsx

main.tsx

---

# ASSETS

logos

illustrations

icons

backgrounds

images

fonts

No business logic.

---

# COMPONENTS

Reusable UI.

Button

Card

Badge

Table

Input

Modal

Avatar

Tooltip

Dropdown

SidebarItem

ChartCard

SearchInput

Pagination

EmptyState

LoadingSkeleton

Everything reusable.

---

# LAYOUTS

Application layout.

Sidebar

Topbar

Content

Floating AI Assistant

Notification Panel

Footer (future)

---

# PAGES

Each route.

Dashboard

Customers

Quotations

Orders

Automations

Reports

Settings

Each page should only compose components.

Never place business logic directly inside pages.

---

# FEATURES

Contains business modules.

dashboard/

customers/

orders/

quotations/

automations/

reports/

settings/

Each feature owns:

components

hooks

services

types

utils

---

# SERVICES

Future API communication.

Currently mocked.

Never accessed directly by components.

---

# REPOSITORIES

Responsible for data access.

Initially:

MockCustomerRepository

MockOrderRepository

MockDashboardRepository

Future:

ApiCustomerRepository

ApiOrderRepository

No UI should know where data comes from.

---

# STORE

Global Zustand stores.

Only truly global state.

Theme

Notifications

Sidebar

Current User

Search

Avoid storing page-specific data globally.

---

# HOOKS

Reusable hooks.

useDebounce

usePagination

useModal

useToast

useLocalStorage

useDarkMode

useBreakpoint

---

# TYPES

All interfaces.

Customer

Order

Quotation

Automation

Notification

User

Report

Dashboard

Settings

Never duplicate interfaces.

---

# CONSTANTS

Colors

Routes

Statuses

Permissions

Animation Durations

Sidebar Menu

API Endpoints (future)

Everything centralized.

---

# MOCKS

Temporary fake data.

dashboard.json

customers.json

orders.json

automations.json

reports.json

settings.json

Data should resemble production.

Avoid Lorem Ipsum.

Use realistic names.

---

# STYLES

Tailwind overrides

Global CSS

Scrollbar

Animations

Typography

Variables

---

# ROUTER

Centralized routing.

Every route lazy loaded.

Protected routes prepared.

404 page included.

Future authentication compatible.

---

# COMPONENT ARCHITECTURE

Pages

↓

Sections

↓

Widgets

↓

Reusable Components

↓

Primitive Components

Never skip levels.

Never create giant components.

Maximum recommended size:

250 lines

If larger

Split.

---

# STATE PRINCIPLE

Local state first.

Feature state second.

Global state last.

Avoid global state unless truly necessary.

---

# DATA PRINCIPLE

UI

↓

Hook

↓

Repository

↓

Mock/API

Never

UI

↓

API

---

# REUSABILITY PRINCIPLE

If a component is used twice

Make it reusable.

If used once

Keep local.

Avoid over abstraction.

---

# FRONTEND PHILOSOPHY

The codebase should feel as organized as the interface.

Every folder should have one purpose.

Every component should have one responsibility.

Every screen should be understandable in under five minutes by a new developer.

Scalability is mandatory.

Maintainability is mandatory.

Readability is mandatory.
________________________________________
La siguiente parte será una de las más importantes del documento:
04. Design System
Aquí vamos a definir absolutamente todo el diseño visual:
•	Paleta completa de colores (Dark Theme). 
•	Tipografía. 
•	Espaciados. 
•	Grid de 8 px. 
•	Bordes. 
•	Sombras. 
•	Radios. 
•	Iconografía. 
•	Tarjetas. 
•	Botones. 
•	Inputs. 
•	Tablas. 
•	Modales. 
•	Badges. 
•	Estados de color. 
•	KPIs. 
•	Gráficos. 
•	Sidebar. 
•	Topbar. 
•	Scrollbars. 
•	Hover. 
•	Focus. 
•	Elevaciones. 
•	Tokens de diseño. 
Será prácticamente un manual de identidad visual de la plataforma, similar al que utilizan empresas como Stripe, Notion o Linear para mantener una interfaz consistente. Esa sección será la base para que todas las pantallas que genere Codex se vean exactamente iguales.

Perfecto. Esta parte es probablemente la más importante de toda la documentación. Si el Design System está bien definido, Codex podrá construir toda la plataforma con una apariencia uniforme, sin inventar colores, tamaños o componentes. Yo iría incluso más allá que un simple sistema de diseño: crearíamos una identidad visual completa.
________________________________________
# 04. Design System

---

# DESIGN PHILOSOPHY

Majic 3D ERP CRM is a premium SaaS product.

The interface must immediately communicate:

Technology

Organization

Automation

Innovation

Professionalism

Minimalism

Confidence

It should never feel like a traditional ERP.

Instead, it should feel similar to:

• Linear

• Vercel Dashboard

• Notion

• Stripe

• Framer

• Arc Browser

• Raycast

The UI must remain elegant even with large amounts of data.

Every visual decision should prioritize readability.

Whitespace is part of the design.

Do not try to fill every empty area.

---

# VISUAL STYLE

Theme

Dark Mode Only

Modern

Premium

Minimal

Flat Design

Rounded Components

Soft Shadows

Subtle Glassmorphism

No glossy effects.

No gradients everywhere.

No neumorphism.

No skeuomorphism.

---

# COLOR PALETTE

## Primary

Majic Green

HEX

#A7F432

RGB

167 244 50

Usage

Primary buttons

Active icons

Charts

Selected menu

Links

Success indicators

Progress bars

AI indicators

Hover effects

Never use this color for large backgrounds.

---

## Background

Primary Background

#09090B

Application background.

---

Secondary Background

#111114

Cards

Panels

Sidebar

Dialogs

Tables

---

Elevated Background

#18181B

Dropdowns

Floating cards

Menus

Hover backgrounds

---

# TEXT COLORS

Primary Text

#FFFFFF

Secondary Text

#A1A1AA

Muted Text

#71717A

Placeholder

#52525B

Disabled

#3F3F46

---

# BORDER COLORS

Default

#27272A

Hover

#3F3F46

Active

#A7F432

---

# STATUS COLORS

Success

#22C55E

Warning

#FACC15

Danger

#EF4444

Information

#3B82F6

Neutral

#71717A

---

# TYPOGRAPHY

Primary Font

Inter

Fallback

System UI

Segoe UI

Helvetica

Arial

Sans-serif

Never use more than one font family.

---

# FONT SCALE

Display

40px

Bold

---

Heading 1

32px

Bold

---

Heading 2

28px

SemiBold

---

Heading 3

24px

SemiBold

---

Heading 4

20px

Medium

---

Card Title

18px

SemiBold

---

Section Title

16px

SemiBold

---

Body

14px

Regular

---

Caption

12px

Regular

---

Small Labels

11px

Medium

---

# FONT WEIGHTS

400

Regular

500

Medium

600

SemiBold

700

Bold

Never use Light.

Never use ExtraBold.

---

# GRID SYSTEM

8px Grid

Every spacing value must be multiple of 4.

Preferred

8

12

16

20

24

32

40

48

64

Never invent spacing values.

---

# BORDER RADIUS

Buttons

12px

Inputs

12px

Cards

18px

Dialogs

22px

Dropdowns

14px

Charts

18px

Tables

18px

---

# SHADOWS

Small

0 2px 6px rgba(0,0,0,.20)

Medium

0 10px 30px rgba(0,0,0,.30)

Large

0 20px 60px rgba(0,0,0,.45)

Hover

Increase opacity slightly.

Never use hard shadows.

---

# CARD DESIGN

Cards are the main building block.

Every card should contain:

Padding

24px

Rounded corners

18px

Soft shadow

Small border

Dark background

Optional icon

Optional badge

Optional actions

Cards should breathe.

Avoid dense content.

---

# BUTTONS

Primary Button

Green background

Dark text

Rounded

Medium shadow

Hover

Slight elevation

Scale 1.02

---

Secondary Button

Dark background

Gray border

White text

Hover

Border becomes green

---

Ghost Button

Transparent

No border

Hover background only

---

Danger Button

Red

Only for destructive actions.

---

# INPUTS

Rounded

12px

Dark background

Thin border

Placeholder gray

White text

Green border on focus

Smooth animation

Height

48px

---

# TABLES

Rounded container

Sticky header

Hover rows

Status badges

Search

Filters

Pagination

Row actions

Minimal borders

No vertical borders

---

# SEARCH BAR

Rounded

Full width

Search icon left

Shortcut hint right

Animated focus

Green border

---

# BADGES

Rounded pill

Height

26px

Small padding

SemiBold text

Green

Success

Yellow

Pending

Blue

Information

Red

Error

Gray

Inactive

---

# KPI CARDS

Every KPI card contains:

Small icon

Label

Large number

Percentage indicator

Small trend

Hover animation

Maximum width

320px

Minimum height

140px

---

# CHARTS

Use only:

Line Chart

Bar Chart

Donut Chart

Area Chart

Never use:

Pie 3D

Radar

Gauge

Polar

Bubble

Charts should always:

Animate

Rounded edges

Minimal grid

Dark background

Green accent

White labels

---

# SIDEBAR

Fixed

Width

260px

Dark background

Logo on top

Menu center

User profile bottom

Active menu

Green indicator

Rounded background

Hover

Gray background

Collapsed mode prepared.

---

# TOPBAR

Height

72px

Contains

Page title

Global search

Notifications

Quick Add

Profile

No breadcrumbs.

---

# SCROLLBAR

Thin

6px

Dark track

Green thumb on hover

Rounded

---

# DIVIDERS

1px

#27272A

Never thicker.

---

# ICONOGRAPHY

Lucide Icons only.

Size

20px

Stroke

2

Consistent throughout app.

---

# EMPTY STATES

Every module must have one.

Contains

Illustration

Title

Description

Primary Action

Never leave blank pages.

---

# LOADING STATES

Use skeleton loaders.

Never spinning circles alone.

Cards should preserve layout.

Avoid content jumping.

---

# ERROR STATES

Friendly message

Simple explanation

Retry button

Never expose technical errors.

---

# SUCCESS FEEDBACK

Green check icon

Short message

Auto dismiss

Subtle animation

---

# FLOATING AI ASSISTANT

Fixed

Bottom Right

Circular button

56px

Green glow

Smooth pulse

Chat opens as side panel.

Never intrusive.

---

# TRANSITIONS

Default

200ms

Ease In Out

Hover

150ms

Dialogs

250ms

Sidebar

300ms

Never exceed

400ms

---

# GLASSMORPHISM

Use sparingly.

Opacity

90%

Blur

12px

Only for:

Dialogs

Dropdowns

Notifications

Never for the entire interface.

---

# DESIGN RULES

Never place components too close together.

Always preserve whitespace.

Always align elements.

Cards should have equal heights whenever possible.

Never mix multiple visual styles.

Never use more than one accent color.

Every screen must feel like part of the same product.

The interface should communicate calmness, organization and intelligence.
________________________________________
La siguiente sección (05) será aún más poderosa.
Ya no hablaremos del diseño de forma general, sino que construiremos el Theme JSON completo que utilizará Codex como fuente de verdad.
Será un enorme objeto JSON con aproximadamente 300 a 500 propiedades, incluyendo:
•	Todos los colores. 
•	Espaciados. 
•	Tipografías. 
•	Sombras. 
•	Breakpoints. 
•	Botones. 
•	Tarjetas. 
•	Tablas. 
•	KPIs. 
•	Sidebar. 
•	Topbar. 
•	Badges. 
•	Formularios. 
•	Charts. 
•	Modales. 
•	Tooltips. 
•	Estados. 
•	Animaciones. 
•	Tokens reutilizables. 
Ese JSON será prácticamente el equivalente al archivo de tema de una aplicación profesional y permitirá que cualquier componente nuevo mantenga automáticamente la misma identidad visual sin necesidad de redefinir estilos.
# 05. Design Token System

---

# DESIGN TOKEN PHILOSOPHY

Every visual property inside the application must be controlled by design tokens.

Hardcoded values are prohibited.

Never write colors directly.

Never write spacing directly.

Never write border radius directly.

Never write shadows directly.

Everything should reference the Design Token System.

This allows changing the entire visual identity from one place.

---

# GLOBAL THEME

```json
{
  "application": {
    "name": "Majic 3D ERP CRM",
    "version": "1.0",
    "theme": "dark",
    "language": "es-CO",
    "currency": "COP",
    "timezone": "America/Bogota"
  }
}
```

---

# COLOR TOKENS

```json
{
  "colors":{

    "primary":"#A7F432",
    "primaryHover":"#B6FF45",
    "primaryPressed":"#8EDD26",

    "background":"#09090B",
    "backgroundSecondary":"#111114",
    "backgroundElevated":"#18181B",

    "surface":"#151518",
    "surfaceHover":"#202024",
    "surfacePressed":"#27272A",

    "border":"#27272A",
    "borderHover":"#3F3F46",
    "borderActive":"#A7F432",

    "text":"#FFFFFF",
    "textSecondary":"#A1A1AA",
    "textMuted":"#71717A",

    "success":"#22C55E",
    "warning":"#FACC15",
    "danger":"#EF4444",
    "info":"#3B82F6",

    "sidebar":"#101012",
    "topbar":"#101012",

    "card":"#141417",
    "dialog":"#18181B",

    "overlay":"rgba(0,0,0,.65)"
  }
}
```

---

# TYPOGRAPHY TOKENS

```json
{
  "font":{

    "family":"Inter",

    "display":40,

    "h1":32,

    "h2":28,

    "h3":24,

    "h4":20,

    "cardTitle":18,

    "sectionTitle":16,

    "body":14,

    "small":12,

    "caption":11
  }
}
```

---

# SPACING TOKENS

Every spacing inside the application must use multiples of four.

```json
{
 "spacing":{

  "xs":4,
  "sm":8,
  "md":12,
  "lg":16,
  "xl":24,
  "2xl":32,
  "3xl":40,
  "4xl":48,
  "5xl":64

 }
}
```

---

# BORDER RADIUS

```json
{
 "radius":{

   "button":12,
   "input":12,
   "card":18,
   "dialog":22,
   "dropdown":14,
   "badge":999
 }
}
```

---

# SHADOW TOKENS

```json
{
 "shadow":{

   "small":"0 2px 8px rgba(0,0,0,.20)",

   "medium":"0 10px 30px rgba(0,0,0,.30)",

   "large":"0 20px 60px rgba(0,0,0,.45)"
 }
}
```

---

# TRANSITIONS

```json
{
 "transition":{

   "fast":"150ms",

   "normal":"200ms",

   "medium":"250ms",

   "slow":"300ms"
 }
}
```

---

# BREAKPOINTS

```json
{
 "breakpoints":{

  "mobile":640,

  "tablet":768,

  "laptop":1280,

  "desktop":1536

 }
}
```

---

# ICONOGRAPHY

Only Lucide Icons.

Stroke

2

Size

20

Preferred

Rounded

Minimal

Never use filled icons.

---

# APPLICATION GRID

Desktop

12 columns

Gap

24 px

Max Width

1800 px

Page Padding

32 px

---

# CARD STANDARD

Every card must respect exactly the following structure.

```
┌──────────────────────────────┐

Icon              Action

Title

Description

Main Content

Footer

└──────────────────────────────┘
```

Cards should never contain unnecessary separators.

Cards should never feel crowded.

---

# KPI CARD

Height

140px

Width

100%

Padding

24px

Border Radius

18px

Contains

Small icon

Title

Large Value

Trend

Sparkline

Hover Effect

---

# PAGE HEADER

Every module starts with the same header.

```
------------------------------------------------

Page Title

Page Description

Primary Action Button

------------------------------------------------
```

This header must remain identical across every page.

---

# EMPTY STATE COMPONENT

Every module must include one.

Structure

Illustration

↓

Title

↓

Description

↓

Primary Action

↓

Secondary Action

Never leave blank pages.

---

# LOADING COMPONENT

Every module should preserve layout while loading.

Use Skeletons.

Never use empty screens.

Never use large centered spinners.

---

# STATUS BADGES

Status badges must always have the same dimensions.

Height

28px

Padding

12px

Rounded

999px

Colors

Success

Warning

Error

Neutral

Information

---

# BUTTON HIERARCHY

Primary

Green

Secondary

Gray

Ghost

Transparent

Danger

Red

Never create more button types.

---

# MODALS

Width

720px

Padding

32px

Rounded

22px

Dark Background

Soft Shadow

Animated Fade

Backdrop Blur

---

# DRAWERS

Used for

Customer Detail

Quotation Detail

Order Detail

Automation Detail

Slide from right.

Width

520px

---

# TABLE DESIGN

Header

Dark

Sticky

Rows

Hover

Green Left Border on Selection

No vertical borders.

Soft horizontal separators.

---

# FORM DESIGN

Every field

48px height

Rounded

12px

Dark background

Border

Green focus

Animated placeholder

---

# NOTIFICATIONS

Toast Position

Top Right

Width

360px

Auto Close

4 Seconds

Icons

Lucide

Animation

Slide Down

---

# FLOATING AI BUTTON

Diameter

56px

Bottom

32px

Right

32px

Green Glow

Floating Shadow

Pulse every 8 seconds.

---

# SCROLLBAR

Width

6px

Dark Track

Green Thumb

Rounded

Smooth Scroll Enabled

---

# GENERAL RULE

Every future component that does not exist inside this specification must visually inherit these Design Tokens.

Never invent new values.

Always reuse existing tokens.

The Design Token System is the single source of truth for the entire application.
# 06. Global Layout Specification

---

# APPLICATION LAYOUT

The application follows a fixed three-area layout.

┌────────────────────────────────────────────────────────────────────────────┐
│                             TOPBAR (72px)                                 │
├───────────────┬───────────────────────────────────────────────┬────────────┤
│               │                                               │            │
│               │                                               │            │
│   SIDEBAR     │             MAIN CONTENT AREA                 │   DRAWER   │
│    260px      │                                               │  (Dynamic) │
│               │                                               │            │
│               │                                               │            │
├───────────────┴───────────────────────────────────────────────┴────────────┤
│                     Floating AI Assistant Button                           │
└────────────────────────────────────────────────────────────────────────────┘

The layout must never change between modules.

Only the Main Content Area changes.

---

# APPLICATION SIZE

Desktop First

Minimum Width

1440px

Recommended Width

1720px

Maximum Width

1920px

The application should feel comfortable on ultrawide monitors.

Never stretch content across the full screen.

The main content should always have internal margins.

---

# SIDEBAR

Width

260px

Height

100vh

Fixed Position

Left Side

Never scroll independently unless menu exceeds viewport.

---

Sidebar Sections

Logo

↓

Navigation

↓

Favorites (future)

↓

Workspace

↓

User Profile

---

# SIDEBAR HEADER

Contains

Majic 3D Logo

Company Name

Current Workspace

The logo should remain visible at all times.

---

# SIDEBAR MENU

Dashboard

Customers

Quotations

Orders

Automations

Reports

Settings

Future modules should always be added before Settings.

---

# SIDEBAR ITEM

Each item contains

Lucide Icon

↓

Label

↓

Active Indicator

↓

Hover State

---

Normal State

Dark Background

White Icon

Gray Text

---

Hover

Slight Gray Background

Green Icon

White Text

Smooth transition

---

Selected

Green Left Indicator

Dark Green Background

Green Icon

White Text

Slight Elevation

---

Sidebar Icons

Dashboard

LayoutDashboard

Customers

Users

Quotations

FileText

Orders

Package

Automations

Workflow

Reports

BarChart3

Settings

Settings

---

# USER PROFILE

Always positioned at the bottom.

Contains

Avatar

↓

Name

↓

Role

↓

Online Status

↓

Quick Menu

---

# TOPBAR

Height

72px

Fixed

Always Visible

Transparent Dark Background

Blur Enabled

Bottom Border

---

Topbar Structure

------------------------------------------------------------

Page Title

↓

Page Description

↓

Global Search

↓

Notifications

↓

Quick Create Button

↓

Profile Menu

------------------------------------------------------------

---

# GLOBAL SEARCH

Width

420px

Rounded

Search Icon

Keyboard Shortcut

CTRL + K

Future AI Search Compatible

---

# QUICK CREATE BUTTON

Green Button

Always Visible

Dropdown Menu

Options

New Customer

New Quotation

New Order

Future Automation

---

# NOTIFICATION CENTER

Bell Icon

Badge Counter

Dropdown

Maximum

10 Recent Notifications

Each notification contains

Icon

↓

Title

↓

Description

↓

Time

↓

Status

Unread notifications highlighted.

---

# MAIN CONTENT

This is the largest area.

Contains

Header

↓

Content

↓

Footer (future)

Padding

32px

Maximum Width

1600px

Centered

Never touch screen edges.

---

# PAGE HEADER

Every page begins exactly the same.

----------------------------------------------------

Page Title

Description

Primary Action Button

----------------------------------------------------

Example

Customers

Manage customer information and commercial history.

[ New Customer ]

---

# PAGE BODY

Each page is divided into Sections.

Every section uses Cards.

Never place content directly over the page background.

---

# CONTENT GRID

Use CSS Grid.

Desktop

12 Columns

Gap

24px

Every module should follow this grid.

---

# DRAWERS

Instead of navigating to another page,
details should open in a Drawer.

Drawer Width

520px

Slides from right.

Background Blur

Contains

Header

↓

Information

↓

Timeline

↓

Actions

↓

Footer

---

Drawers exist for

Customer

Quotation

Order

Automation

Report Details (future)

---

# FLOATING AI BUTTON

Always Visible

Bottom Right

32px Margin

56px Diameter

Soft Green Glow

Hover

Slight Scale

Click

Open AI Assistant

---

# AI ASSISTANT

Slides from right.

Width

420px

Contains

Conversation

↓

Suggestions

↓

Quick Actions

↓

Prompt Input

↓

Recent Questions

The AI panel never replaces the current page.

It works as a helper.

---

# BREADCRUMBS

Do NOT use breadcrumbs.

The interface should be simple enough that users always know where they are.

---

# FOOTER

Not implemented in Version 1.

Reserved for future.

---

# GLOBAL LOADING

While changing pages

Keep Sidebar

Keep Topbar

Only skeletonize Main Content.

Never blank the screen.

---

# EMPTY SPACE

Whitespace is mandatory.

Every major section should have at least

24px separation.

Every Card

24px internal padding.

Never compress information.

---

# RESPONSIVE BEHAVIOR

Desktop

Sidebar Fixed

Topbar Fixed

Drawer Right

---

Laptop

Sidebar Fixed

Reduced Margins

Cards reorganize

---

Tablet

Sidebar collapses

Drawer Full Width

Cards become vertical

---

Mobile

Sidebar Drawer

Topbar Compact

One Column Layout

Floating AI minimized

Tables become Cards

---

# LAYOUT PRINCIPLES

Never overload a screen.

Never exceed four major sections per page.

Never use nested cards inside cards.

Never create floating windows unless necessary.

Navigation should always require one click.

Every page should feel calm, clean and premium.

The layout should communicate organization before functionality.
# 07. Executive Dashboard Module

---

# MODULE OVERVIEW

The Dashboard is the first screen the user sees after opening the application.

Its purpose is NOT to manage information.

Its purpose is to answer one question:

"How is my business doing right now?"

The user should understand the current state of the company within five seconds.

This screen should be calm, clean and informative.

It should never become a Business Intelligence tool.

The Dashboard summarizes the business.

The remaining modules manage the business.

---

# PRIMARY OBJECTIVES

The Dashboard should allow the user to:

• Understand today's business performance.

• Identify pending work.

• Review the commercial pipeline.

• Access frequent actions.

• Detect important notifications.

• Open any workflow with one click.

No editing takes place on this screen.

The Dashboard is an executive overview.

---

# PAGE STRUCTURE

The page is divided into five sections.

1. Welcome Header

2. KPI Cards

3. Commercial Pipeline

4. Recent Activity

5. Quick Actions

Nothing else.

Avoid adding additional widgets.

---

# PAGE HEADER

Structure

--------------------------------------------------

Good Morning, Mary

Here is today's business summary.

Today's Date

Primary Button

New Quotation

--------------------------------------------------

The greeting changes according to the current time.

Morning

Afternoon

Evening

---

# KPI SECTION

Position

Top of page

Grid

4 Columns

Gap

24px

Height

140px

---

KPI CARD 01

Title

Monthly Sales

Icon

DollarSign

Value

COP $12.450.000

Trend

+18%

Footer

Compared to previous month

---

KPI CARD 02

Title

Active Customers

Icon

Users

Value

128

Trend

+12%

Footer

Customers with activity

---

KPI CARD 03

Title

Pending Orders

Icon

Package

Value

14

Trend

+3

Footer

Currently in production

---

KPI CARD 04

Title

Open Quotations

Icon

FileText

Value

22

Trend

5 expire this week

Footer

Awaiting customer response

---

# KPI CARD DESIGN

Each KPI Card contains

Small Icon

↓

Label

↓

Large Number

↓

Trend Indicator

↓

Footer Description

↓

Sparkline Chart

Hover Effect

The cards should never exceed one line of text.

Large numbers should dominate the card.

---

# COMMERCIAL PIPELINE

Below KPI Cards.

Occupies

65%

Page Width

Height

360px

Card Title

Commercial Pipeline

Subtitle

Current customer distribution

---

The pipeline is represented as six horizontal stages.

Prospects

↓

Contacted

↓

Quotation Sent

↓

Negotiation

↓

Production

↓

Delivered

Each stage displays

Stage Name

Customer Count

Colored Progress Bar

Percentage

Clicking a stage opens the corresponding filtered module.

---

# RECENT ACTIVITY

Position

Right Side

35%

Width

Height

360px

Card Title

Recent Activity

Subtitle

Latest business events

---

Every activity contains

Avatar

↓

Title

↓

Description

↓

Timestamp

↓

Status Icon

---

Examples

Quotation sent to Carlos Gómez

5 minutes ago

Customer accepted quotation

20 minutes ago

Payment confirmed

1 hour ago

Order moved to production

Yesterday

Automation completed

Today

---

Only the latest ten events are shown.

A button at the bottom

View Full Activity

opens the Activity module (future).

---

# QUICK ACTIONS

Position

Bottom Left

Card Width

50%

Height

220px

Contains

Four large buttons

New Customer

New Quotation

Create Order

Generate Report

Each button

Icon

Title

Description

Hover Animation

---

# BUSINESS INSIGHTS

Position

Bottom Right

Card Width

50%

Height

220px

This section contains AI-generated business insights.

Examples

Sales increased 12% this month.

Five quotations require follow-up.

Three customers have not responded in seven days.

Production workload is within normal range.

The insights should read naturally.

Avoid technical language.

---

# FLOATING AI ASSISTANT

Visible on this page.

The assistant should suggest actions.

Example

Would you like me to generate today's commercial report?

---

# DASHBOARD JSON MODEL

{
"dashboard":{

"monthlySales":12450000,

"customers":128,

"orders":14,

"quotations":22,

"pipeline":[

{
"stage":"Prospects",
"count":18
},

{
"stage":"Contacted",
"count":15
},

{
"stage":"Quotation",
"count":22
},

{
"stage":"Negotiation",
"count":9
},

{
"stage":"Production",
"count":14
},

{
"stage":"Delivered",
"count":61
}

]
}
}

---

# EMPTY STATE

If the company has no data.

Display

Friendly Illustration

↓

Title

Welcome to Majic 3D ERP CRM

↓

Description

Start by creating your first customer.

↓

Button

Create Customer

Never show empty KPI Cards.

---

# LOADING STATE

All cards display skeletons.

Charts animate after loading.

The page structure never changes.

---

# ERROR STATE

Friendly message.

Unable to load dashboard.

Retry Button.

Never expose technical information.

---

# MICROINTERACTIONS

Hover KPI

Slight elevation

↓

Hover Pipeline Stage

Green outline

↓

Hover Activity

Background becomes lighter

↓

Hover Quick Action

Scale 1.02

↓

Numbers animate when changing.

---

# RESPONSIVE

Desktop

4 KPI Cards

2 Columns

---

Laptop

2x2 KPI Grid

---

Tablet

One KPI per row

---

Mobile

Vertical Layout

Recent Activity below Pipeline

Quick Actions become two columns.

---

# UX PRINCIPLES

The Dashboard should answer:

What happened?

What needs attention?

What should I do next?

If those three questions are answered successfully, the Dashboard has achieved its objective.

Nothing should distract from these goals.
# 08. Customer Relationship Center

---

# MODULE OVERVIEW

The Customer Relationship Center is the core of the CRM.

Every commercial interaction begins here.

Customers are not simple records.

Each customer is a complete business profile.

The objective of this module is to centralize every interaction that the company has had with each customer.

When opening a customer profile, the user should never need to search in another module for additional information.

Everything must exist in one place.

---

# MODULE OBJECTIVES

The module should allow the user to:

• Register customers.

• Search customers.

• Filter customers.

• Edit customer information.

• View quotation history.

• View order history.

• View payment history.

• View communication timeline.

• View AI generated follow-ups.

• Open related documents.

• Contact customers quickly.

Everything should require a maximum of two clicks.

---

# PAGE STRUCTURE

The Customers page is divided into four sections.

------------------------------------------------

Header

↓

Statistics Cards

↓

Search & Filters

↓

Customer Table

------------------------------------------------

Selecting a customer opens a Detail Drawer.

The page itself never changes.

---

# PAGE HEADER

------------------------------------------------

Customers

Manage customer information and commercial activity.

[ New Customer ]

------------------------------------------------

Primary Button

Green

Top Right

Always Visible

---

# CUSTOMER KPIs

Immediately below the header.

Four KPI cards.

Card 01

Total Customers

Icon

Users

Shows

Total registered customers.

---

Card 02

Active Customers

Icon

UserCheck

Customers with activity in the last 30 days.

---

Card 03

Pending Follow-ups

Icon

Clock3

Customers requiring commercial follow-up.

---

Card 04

New This Month

Icon

UserPlus

Customers registered during the current month.

---

# SEARCH BAR

Position

Full Width

Above the table.

Placeholder

Search by customer, company, email or phone...

Shortcut

CTRL + K

Search must update instantly.

---

# FILTER BAR

Located below Search.

Contains:

Status

↓

Customer Type

↓

Last Contact

↓

Sales Representative (future)

↓

Reset Filters

Filters must combine.

Never replace one another.

---

# CUSTOMER TABLE

The table occupies the entire remaining page.

Columns

Avatar

Customer Name

Company

Phone

Email

Status

Last Contact

Orders

Actions

---

TABLE DESIGN

Rows

64px Height

Rounded Container

Sticky Header

Hover Background

Clickable Row

Status Badge

No vertical borders

Soft separators only

---

# STATUS TYPES

Lead

Gray

---

Contacted

Blue

---

Quotation Sent

Yellow

---

Negotiation

Orange

---

Customer

Green

---

Inactive

Red

Status must always be represented by both color and text.

Never rely on color only.

---

# ACTION BUTTONS

Each row contains:

View

↓

Edit

↓

Create Quotation

↓

More Options

Icons only.

Tooltips required.

---

# CUSTOMER DETAIL DRAWER

Clicking any row opens a Drawer.

The user never leaves the page.

Drawer Width

520px

Slide From Right

Animated

---

DRAWER STRUCTURE

Customer Header

↓

Customer Summary

↓

Timeline

↓

Current Quotations

↓

Current Orders

↓

Recent Files

↓

AI Suggestions

↓

Quick Actions

---

# CUSTOMER HEADER

Contains

Avatar

Customer Name

Company

Status Badge

Favorite Button

Edit Button

Close Button

---

# CUSTOMER SUMMARY

Shows

Phone

Email

Address

Tax ID

Registration Date

Last Contact

Total Sales

Customer Lifetime Value

Preferred Contact Method

Everything grouped into two columns.

---

# TIMELINE

The Timeline is the heart of the CRM.

Every interaction appears here.

Newest first.

Timeline Events

Customer Created

↓

WhatsApp Conversation

↓

Email Sent

↓

Quotation Generated

↓

Quotation Accepted

↓

Payment Confirmed

↓

Order Started

↓

Order Delivered

↓

Follow-up Reminder

↓

AI Recommendation

Each event contains

Icon

Title

Description

Timestamp

Optional Attachment

Timeline should feel alive.

---

# CURRENT QUOTATIONS

Small Card

Displays

Quotation Number

↓

Date

↓

Amount

↓

Status

↓

Open Button

---

# CURRENT ORDERS

Small Card

Displays

Order Number

↓

Current Stage

↓

Estimated Delivery

↓

Priority

↓

Open Button

---

# RECENT FILES

Displays

Quotation PDF

↓

Design Files

↓

Images

↓

Invoices (future)

Each file

Icon

Filename

Date

Download Button

---

# AI RECOMMENDATIONS

Position

Bottom of Drawer.

Contains intelligent suggestions.

Examples

The customer has not replied in 8 days.

A follow-up message is recommended.

↓

Customer usually responds after 5 PM.

↓

Customer has accepted 90% of previous quotations.

↓

Suggest offering a 10% loyalty discount.

Recommendations must be written in natural language.

Never expose technical AI terminology.

---

# QUICK ACTIONS

Buttons

Send WhatsApp

↓

Call Customer

↓

Generate Quotation

↓

Register Order

↓

Schedule Follow-up

↓

Open History

---

# NEW CUSTOMER MODAL

Modal Width

720px

Sections

General Information

↓

Company Information

↓

Contact Information

↓

Notes

↓

Save

Only required fields marked.

Real-time validation.

---

# CUSTOMER JSON MODEL

{
"customer":{

"id":"CUS-0001",

"fullName":"Carlos Gómez",

"company":"Arquitectura CG",

"email":"carlos@email.com",

"phone":"+57 300000000",

"status":"Customer",

"lastContact":"2026-07-05",

"totalSales":12850000,

"orders":14,

"quotations":22,

"notes":"Prefers WhatsApp communication."
}
}

---

# EMPTY STATE

Illustration

↓

No customers found

↓

Create your first customer to begin managing your commercial activity.

↓

Create Customer Button

---

# LOADING

Skeleton Cards

↓

Skeleton Table

↓

Skeleton Drawer

No layout jumping.

---

# ERROR

Unable to load customer information.

Retry Button.

---

# MICROINTERACTIONS

Hover Row

Background Lightens

↓

Hover Avatar

Subtle Scale

↓

Hover Action Button

Green Border

↓

Drawer Opens

250ms

↓

Timeline

Fade Animation

↓

Status Badge

Soft Pulse

---

# RESPONSIVE

Desktop

Table View

---

Laptop

Reduced Padding

---

Tablet

Cards instead of Table

---

Mobile

Customer Cards

Drawer becomes Full Screen

Timeline Vertical

---

# UX PRINCIPLES

The user should never ask:

"Where is the quotation?"

"Where is the order?"

"Where is the last conversation?"

Everything related to the customer must be accessible from this module.

This module should become the company's single source of truth regarding customer relationships.
# 09. Quotations Module

---

# MODULE OVERVIEW

The Quotations module manages the entire quotation lifecycle.

A quotation is more than a PDF.

It is the starting point of the commercial workflow.

Every quotation should be easy to create, edit, duplicate, send and convert into an order.

The user should never need more than three minutes to generate a complete quotation.

The experience should feel fast, intuitive and professional.

---

# PRIMARY OBJECTIVES

The module allows the user to:

• Create quotations.

• Search quotations.

• Edit quotations.

• Duplicate quotations.

• Send quotations.

• Monitor quotation status.

• Convert approved quotations into orders.

• Review quotation history.

• Export quotations to PDF.

Everything should require the minimum number of clicks.

---

# PAGE STRUCTURE

------------------------------------------------

Header

↓

Quotation KPIs

↓

Search & Filters

↓

Quotation Table

------------------------------------------------

Selecting a quotation opens a Detail Drawer.

Creating a quotation opens the Quotation Editor.

---

# PAGE HEADER

------------------------------------------------

Quotations

Manage all commercial quotations.

[ New Quotation ]

------------------------------------------------

Primary Button

Green

Always Visible

---

# KPI CARDS

Four cards.

Card 01

Open Quotations

Icon

FileText

Shows quotations awaiting response.

---

Card 02

Approved Quotations

Icon

BadgeCheck

Shows quotations accepted.

---

Card 03

Rejected Quotations

Icon

XCircle

Shows rejected quotations.

---

Card 04

Quotation Value

Icon

DollarSign

Displays the total monetary value of active quotations.

---

# SEARCH BAR

Placeholder

Search quotation number, customer or company...

Real-time search.

Shortcut

CTRL + K

---

# FILTERS

Status

↓

Date

↓

Customer

↓

Amount Range

↓

Sort By

↓

Reset Filters

Filters must combine.

---

# QUOTATION TABLE

Columns

Quotation Number

Customer

Creation Date

Expiration Date

Amount

Status

Last Update

Actions

---

STATUS TYPES

Draft

Gray

Pending

Yellow

Approved

Green

Rejected

Red

Expired

Orange

Status should always be represented with badges.

---

# ACTION BUTTONS

Each quotation includes:

View

↓

Edit

↓

Duplicate

↓

Generate PDF

↓

Send

↓

More Options

Icons only.

Tooltips required.

---

# NEW QUOTATION FLOW

Click

New Quotation

↓

Open Full Screen Editor

The editor occupies the entire workspace.

The Sidebar remains visible.

---

# QUOTATION EDITOR

The editor is divided into five sections.

Customer

↓

Products

↓

Pricing

↓

Notes

↓

Summary

The user should complete the quotation from top to bottom.

---

# CUSTOMER SECTION

Contains

Search Existing Customer

↓

Customer Information

↓

Contact Information

↓

Company

↓

Delivery Address

Selecting a customer automatically fills the fields.

---

# PRODUCT SECTION

Displays a table.

Columns

Product

Quantity

Unit Price

Discount

Subtotal

The user can:

Add products.

Remove products.

Edit quantities.

Edit prices.

Duplicate rows.

Products update totals automatically.

---

# PRICING SECTION

Shows

Subtotal

↓

Discount

↓

Taxes (Future)

↓

Shipping (Future)

↓

Grand Total

Every value updates in real time.

---

# NOTES

Rich Text Area.

Used for

Observations

Terms

Delivery information

Special conditions

Character counter displayed.

---

# SUMMARY PANEL

Fixed on the right.

Always visible while scrolling.

Displays

Customer

↓

Number of Products

↓

Estimated Delivery

↓

Total Amount

↓

Quotation Status

↓

Save Draft

↓

Generate PDF

↓

Send Quotation

The Summary acts as the command center.

---

# DETAIL DRAWER

Clicking a quotation opens a Drawer.

Contains

General Information

↓

Quotation Timeline

↓

Products

↓

Customer

↓

Generated Documents

↓

AI Suggestions

↓

Quick Actions

---

# QUOTATION TIMELINE

Events

Quotation Created

↓

Edited

↓

PDF Generated

↓

Sent by Email

↓

Sent by WhatsApp

↓

Viewed

↓

Approved

↓

Rejected

↓

Converted to Order

Newest first.

---

# GENERATED PDF

Preview Card

Thumbnail

↓

Filename

↓

Generation Date

↓

Download

↓

Share

The preview should resemble the real PDF.

---

# AI SUGGESTIONS

Examples

Customer usually responds within two days.

↓

Quotation expires tomorrow.

↓

Suggested follow-up message available.

↓

Customer has accepted similar quotations before.

Recommendations should be business oriented.

---

# QUICK ACTIONS

Edit

↓

Duplicate

↓

Generate PDF

↓

Send

↓

Convert to Order

↓

Archive

---

# CONVERT TO ORDER

If the quotation is approved.

Display Dialog.

Message

"This quotation has been approved.

Would you like to create the production order?"

Buttons

Cancel

Create Order

The conversion should preserve all information.

---

# JSON MODEL

{
"quotation":{

"id":"QT-00024",

"customerId":"CUS-0008",

"status":"Pending",

"createdAt":"2026-07-05",

"expiresAt":"2026-07-12",

"subtotal":950000,

"discount":50000,

"total":900000,

"products":[

{

"name":"3D Printed Prototype",

"quantity":2,

"price":450000

}

]
}
}

---

# EMPTY STATE

Illustration

↓

No quotations yet.

↓

Create your first quotation.

↓

New Quotation Button

---

# LOADING

Skeleton KPIs.

↓

Skeleton Table.

↓

Skeleton Editor.

↓

Skeleton Drawer.

---

# ERROR

Unable to load quotations.

Retry Button.

---

# MICROINTERACTIONS

Hover Table Row

↓

Highlight

Hover Product

↓

Soft Border

Hover Summary

↓

Shadow Increase

Generate PDF

↓

Progress Animation

Send Button

↓

Loading State

Drawer

↓

Slide Animation

---

# RESPONSIVE

Desktop

Full Table

Editor with Right Summary

---

Laptop

Compressed Layout

---

Tablet

Cards instead of Table

Summary moves below Products

---

Mobile

Wizard

Step 1

Customer

↓

Step 2

Products

↓

Step 3

Summary

The quotation editor should never become unusable on small screens.

---

# UX PRINCIPLES

The quotation process should feel guided.

The interface should reduce decision fatigue.

The user should always know:

What is missing.

What is complete.

What happens next.

The quotation editor should behave like a modern SaaS application rather than a traditional ERP form.

Every interaction should reinforce speed, confidence and professionalism.

(10. Orders Module
# 10. Orders Module

---

# MODULE OVERVIEW

The Orders module is the operational center of the platform.

Once a quotation has been approved, it becomes an Order.

Unlike quotations, orders represent real work.

This module allows the business owner to monitor production, organize priorities and control every active project.

The interface should feel visual rather than administrative.

The Kanban Board is the primary interface.

Tables are secondary.

The objective is allowing the owner to understand the entire production workload with a single glance.

---

# PRIMARY OBJECTIVES

The Orders module allows the user to

• View all production orders.

• Organize production.

• Track progress.

• Assign priorities.

• View customer information.

• Access quotation details.

• Register production notes.

• Monitor estimated delivery dates.

• Archive completed orders.

---

# PAGE STRUCTURE

------------------------------------------------

Header

↓

Order KPIs

↓

Search & Filters

↓

Kanban Board

------------------------------------------------

The Kanban occupies almost the entire page.

---

# PAGE HEADER

------------------------------------------------

Orders

Track production and delivery status.

[ Create Order ]

------------------------------------------------

Primary Button

Green

Always Visible

---

# KPI CARDS

Four KPI cards.

Card 01

Total Orders

Icon

Package

Description

All active orders.

---

Card 02

In Production

Icon

Factory

Description

Orders currently being manufactured.

---

Card 03

Ready For Delivery

Icon

CheckCircle2

Description

Finished orders awaiting delivery.

---

Card 04

Delayed Orders

Icon

AlertTriangle

Description

Orders exceeding estimated completion.

Delayed KPI uses Warning color.

---

# SEARCH BAR

Placeholder

Search order number, customer or product...

Search updates instantly.

---

# FILTERS

Status

↓

Priority

↓

Customer

↓

Estimated Delivery

↓

Newest

↓

Oldest

↓

Reset

Filters combine.

---

# KANBAN BOARD

This is the main component.

Columns

Pending

↓

Production

↓

Quality Review

↓

Ready

↓

Delivered

Each column contains Order Cards.

Cards can be dragged between columns.

The movement should animate smoothly.

---

# COLUMN HEADER

Each column contains

Title

↓

Order Counter

↓

Progress Bar

↓

Column Menu

Example

Production

12 Orders

68%

---

# ORDER CARD

Every card contains

Priority Indicator

↓

Customer Name

↓

Order Number

↓

Product

↓

Estimated Delivery

↓

Progress

↓

Quick Actions

Card Height

180px

Rounded

18px

Hover Elevation

Soft Shadow

---

# PRIORITY

Critical

Red

High

Orange

Medium

Blue

Low

Gray

Priority appears as a colored vertical bar on the left.

---

# ORDER STATUS

Pending

Gray

Production

Blue

Review

Purple

Ready

Green

Delivered

Dark Gray

---

# PROGRESS BAR

Located at the bottom.

Animated.

Green.

Represents production completion.

Example

65%

---

# QUICK ACTIONS

Each card

View

↓

Edit

↓

Open Customer

↓

Production Notes

↓

More Options

Icons only.

---

# ORDER DETAIL DRAWER

Clicking an order opens a Drawer.

Width

560px

Slides from Right.

Contains

Order Header

↓

Customer

↓

Quotation

↓

Production Progress

↓

Timeline

↓

Attachments

↓

AI Recommendations

↓

Quick Actions

---

# ORDER HEADER

Contains

Order Number

↓

Status Badge

↓

Priority Badge

↓

Estimated Delivery

↓

Edit Button

↓

Close Button

---

# CUSTOMER SECTION

Displays

Customer

Company

Phone

Email

Open Customer Button

Everything links directly to CRM.

---

# PRODUCT SECTION

Displays every product included.

Each product contains

Thumbnail

↓

Product Name

↓

Quantity

↓

Material

↓

Color

↓

Observations

Future

Estimated Production Time

---

# PRODUCTION TIMELINE

Displays

Order Created

↓

Materials Confirmed

↓

Production Started

↓

Quality Inspection

↓

Packaging

↓

Ready

↓

Delivered

Newest at top.

Timeline uses vertical layout.

Each event contains

Icon

↓

Title

↓

Description

↓

Timestamp

---

# ATTACHMENTS

Displays

Quotation PDF

↓

Reference Images

↓

STL Files

↓

Production Files

↓

Customer Documents

Each file contains

Preview

↓

Filename

↓

Download

↓

Open

---

# AI RECOMMENDATIONS

Examples

Production is progressing normally.

↓

This order should be prioritized.

↓

Customer has requested urgent delivery.

↓

Estimated completion may be delayed.

↓

Suggested production sequence available.

The AI always speaks in business language.

---

# QUICK ACTIONS

Move Stage

↓

Edit Order

↓

Register Progress

↓

Generate Delivery Report

↓

Archive Order

---

# MOVE BETWEEN STAGES

Dragging a card automatically updates its status.

Animation

250ms

Cards slightly rotate while dragging.

Drop zones glow green.

Movement should feel natural.

---

# JSON MODEL

{
  "order":{

    "id":"ORD-00018",

    "customerId":"CUS-0012",

    "quotationId":"QT-00045",

    "status":"Production",

    "priority":"High",

    "progress":65,

    "estimatedDelivery":"2026-07-12",

    "products":[

      {

        "name":"3D Printed Prototype",

        "quantity":3,

        "material":"PLA",

        "color":"Black"

      }

    ]
  }
}

---

# EMPTY STATE

Illustration

↓

No active orders.

↓

Approved quotations will automatically appear here.

↓

Go to Quotations

---

# LOADING

Skeleton Columns

↓

Skeleton Cards

↓

Skeleton Drawer

Layout never changes.

---

# ERROR

Unable to load orders.

Retry Button.

---

# MICROINTERACTIONS

Hover Card

Lift

↓

Drag

Rotation 2°

↓

Drop

Soft Bounce

↓

Progress

Animated Width

↓

Timeline

Fade

↓

Drawer

Slide

Everything should feel fluid.

---

# RESPONSIVE

Desktop

Five Columns

---

Laptop

Horizontal Scroll

---

Tablet

Three Columns

---

Mobile

Each stage becomes a separate page.

Cards become vertical.

Drawer becomes Full Screen.

---

# UX PRINCIPLES

The user should immediately know

What is waiting.

↓

What is in production.

↓

What is almost finished.

↓

What is delayed.

The board should reduce production stress.

The owner should never need to read dozens of rows to understand the current workload.

The Kanban should become the operational command center of Majic 3D.
# 11. Automation & AI Center

---

# MODULE OVERVIEW

The Automation & AI Center is the intelligence hub of the platform.

This module is responsible for displaying every automated process running inside the business.

The user should never configure technical workflows.

Instead, the interface translates complex automations into simple business actions.

The system should feel like having a virtual employee working continuously.

The objective is allowing the business owner to understand:

• What is automated.

• What happened today.

• How much time has been saved.

• Which automations require attention.

The interface should never expose API calls, nodes, webhooks or technical concepts.

Everything must be expressed using business language.

---

# PRIMARY OBJECTIVES

The module allows the user to

• View active automations.

• Enable or disable workflows.

• Review execution history.

• Monitor automation performance.

• View AI recommendations.

• Identify failed automations.

• Understand business impact.

---

# PAGE STRUCTURE

------------------------------------------------

Header

↓

Automation KPIs

↓

Automation Categories

↓

Automation Cards

↓

Execution History

------------------------------------------------

The page should feel visual.

Avoid large tables.

---

# PAGE HEADER

------------------------------------------------

Automation Center

Manage intelligent business automations.

[ Create Automation ]

------------------------------------------------

Primary Button

Green

Reserved for future versions.

Version 1 only enables predefined automations.

---

# KPI SECTION

Four KPI Cards.

Card 01

Active Automations

Icon

Workflow

Displays

Number of enabled workflows.

---

Card 02

Executions Today

Icon

PlayCircle

Displays

Successful executions.

---

Card 03

Hours Saved

Icon

Clock3

Displays

Estimated administrative time saved.

Example

18.5 Hours

---

Card 04

Success Rate

Icon

BadgeCheck

Displays

Successful executions percentage.

Example

98.4%

---

# AUTOMATION CATEGORIES

Displayed below KPIs.

Each category is represented as a rounded card.

Categories

Commercial

↓

Customers

↓

Orders

↓

Notifications

↓

Reports

↓

Artificial Intelligence

Selecting a category filters the automations below.

---

# AUTOMATION GRID

Instead of a table, use cards.

Desktop

3 Columns

Laptop

2 Columns

Tablet

2 Columns

Mobile

1 Column

---

# AUTOMATION CARD

Every automation is represented by a premium card.

Structure

Automation Icon

↓

Automation Name

↓

Short Description

↓

Status Badge

↓

Execution Counter

↓

Last Execution

↓

Toggle Switch

↓

View Details

Card Height

260px

Rounded

20px

Hover

Soft Elevation

Green Border

---

# AUTOMATION STATUS

Running

Green

Paused

Yellow

Stopped

Gray

Error

Red

The status badge should animate softly.

---

# PREDEFINED AUTOMATIONS

Version 1 includes

Automatic Customer Follow-up

↓

Quotation Reminder

↓

Payment Confirmation

↓

Order Status Notification

↓

Weekly Report Generator

↓

Inactive Customer Detection

↓

AI Sales Recommendation

↓

Monthly KPI Report

Each automation has its own card.

---

# AUTOMATION DETAIL DRAWER

Clicking a card opens a Drawer.

Width

560px

Contains

Automation Header

↓

Description

↓

Current Status

↓

Execution Timeline

↓

Statistics

↓

AI Suggestions

↓

Execution Log

↓

Quick Actions

---

# AUTOMATION HEADER

Displays

Automation Icon

↓

Automation Name

↓

Category

↓

Status Badge

↓

Enable Switch

↓

Edit Button (Future)

---

# DESCRIPTION

Explains the automation in business language.

Example

"When a quotation has not received a response within five days, the system automatically reminds the customer through WhatsApp."

Never mention

Webhook

Node

Trigger

API

LLM

Workflow Engine

Business language only.

---

# EXECUTION STATISTICS

Displays

Executions Today

↓

Executions This Week

↓

Average Duration

↓

Success Rate

↓

Failures

Represented using small KPI cards.

---

# EXECUTION TIMELINE

Displays every execution.

Newest first.

Each event

Status Icon

↓

Description

↓

Timestamp

↓

Duration

Examples

Reminder sent successfully.

↓

Customer responded.

↓

Payment confirmed.

↓

Weekly report generated.

Timeline should feel alive.

---

# EXECUTION LOG

Simplified.

Never technical.

Examples

Customer notified successfully.

↓

Quotation updated.

↓

Report generated.

↓

No action required.

Avoid displaying stack traces.

---

# AI RECOMMENDATIONS

Examples

This automation saved approximately 4 hours this week.

↓

Three quotations require immediate follow-up.

↓

Customer response rate increased by 18%.

↓

Consider enabling automatic payment reminders.

Every recommendation should explain business value.

---

# QUICK ACTIONS

Enable

↓

Disable

↓

Run Now

↓

View History

↓

Duplicate (Future)

---

# AUTOMATION HEALTH

Small indicator.

Healthy

Green

Warning

Yellow

Attention Required

Red

Displayed on every card.

---

# EXECUTION HISTORY

Located at the bottom.

Timeline format.

Shows

Automation

↓

Result

↓

Execution Time

↓

Duration

↓

Status

Maximum

20 executions

Button

View Full History

Future module.

---

# JSON MODEL

{
"automation":{

"id":"AUTO-001",

"name":"Quotation Reminder",

"category":"Commercial",

"status":"Running",

"executionsToday":12,

"successRate":99.2,

"lastExecution":"2026-07-05T09:45",

"estimatedTimeSaved":3.5
}
}

---

# EMPTY STATE

Illustration

↓

No automations configured.

↓

Enable your first intelligent workflow.

↓

Browse Automations

---

# LOADING

Skeleton KPI Cards.

↓

Skeleton Automation Cards.

↓

Skeleton Timeline.

---

# ERROR

Unable to load automations.

Retry Button.

---

# MICROINTERACTIONS

Hover Card

Lift

↓

Status Badge

Pulse

↓

Toggle

Smooth Animation

↓

Drawer

Slide Right

↓

Timeline

Fade In

↓

KPI Values

Count Animation

---

# RESPONSIVE

Desktop

3 Cards

Laptop

2 Cards

Tablet

2 Cards

Mobile

Single Column

Drawer becomes Full Screen.

---

# UX PRINCIPLES

The user should never feel intimidated.

The system should communicate

Automation

↓

Confidence

↓

Simplicity

↓

Productivity

The owner should finish this page thinking:

"My business is working even when I am not."

This module must become the emotional center of the application.

It should reinforce the perception that Majic 3D is supported by intelligent technology rather than manual processes.

# 12. Executive Analytics Center

---

# MODULE OVERVIEW

The Executive Analytics Center provides strategic business insights.

This module is not intended to display large amounts of raw data.

Its purpose is helping the business owner answer questions quickly.

Examples

How much did I sell this month?

↓

Which customers generate the highest revenue?

↓

How many quotations became orders?

↓

Which automation saved the most time?

↓

What should I improve?

Every chart should answer a business question.

If a visualization does not help decision making, it should not exist.

---

# PRIMARY OBJECTIVES

The Analytics Center allows the user to

• Monitor business growth.

• Evaluate commercial performance.

• Identify sales opportunities.

• Measure automation impact.

• Compare historical periods.

• Export executive reports.

The experience should feel like reading an executive summary rather than a spreadsheet.

---

# PAGE STRUCTURE

------------------------------------------------

Header

↓

KPI Summary

↓

Sales Analytics

↓

Commercial Analytics

↓

Automation Analytics

↓

Executive Summary

------------------------------------------------

Maximum

Six visual sections.

Avoid dashboard overload.

---

# PAGE HEADER

------------------------------------------------

Reports & Analytics

Business performance and strategic insights.

[ Export Report ]

------------------------------------------------

Primary Button

Green

Dropdown

Export PDF

↓

Export Excel (Future)

↓

Schedule Report (Future)

---

# KPI SUMMARY

Four KPI Cards.

Card 01

Monthly Revenue

Icon

DollarSign

Description

Current month sales.

---

Card 02

Quotation Conversion

Icon

TrendingUp

Description

Approved quotations percentage.

---

Card 03

Average Response Time

Icon

Clock3

Description

Average customer response.

---

Card 04

Hours Saved

Icon

Sparkles

Description

Estimated automation savings.

---

# SALES ANALYTICS

Large Card.

Occupies

70%

Page Width.

Chart Type

Area Chart.

Shows

Monthly Sales

Previous Month

Current Month

Comparison

Hover displays exact values.

Smooth animation.

---

# SALES BY CATEGORY

Small Card.

Chart

Donut Chart.

Displays

3D Printing

↓

Design Services

↓

Accessories

↓

Other

Each section uses consistent colors.

No legends outside the card.

---

# COMMERCIAL PERFORMANCE

Large Card.

Chart Type

Vertical Bar Chart.

Displays

Prospects

↓

Quotations

↓

Negotiations

↓

Orders

↓

Deliveries

The chart should visually represent the commercial funnel.

---

# TOP CUSTOMERS

Ranking Card.

Displays

Top 5 customers.

Each row contains

Avatar

↓

Customer Name

↓

Revenue

↓

Orders

↓

Growth Indicator

Clicking a customer opens the Customer Drawer.

---

# AUTOMATION ANALYTICS

Card Title

Automation Performance

Chart Type

Horizontal Bars

Displays

Executions

↓

Success Rate

↓

Hours Saved

↓

Failed Runs

The objective is measuring business impact.

Not technical performance.

---

# PRODUCTIVITY ANALYTICS

Displays

Orders Completed

↓

Average Production Time

↓

Pending Orders

↓

On-Time Deliveries

Represented as KPI Cards.

---

# AI EXECUTIVE SUMMARY

This section is unique.

Instead of graphs, it displays natural language.

Examples

Sales increased 18% compared to last month.

↓

Customer acquisition remains stable.

↓

Quotation conversion improved after enabling automatic follow-ups.

↓

Production workload is within normal limits.

↓

Consider contacting three inactive customers.

The summary should feel like advice from a business consultant.

---

# FILTER BAR

Period

↓

This Week

↓

This Month

↓

Last Month

↓

Quarter

↓

Year

↓

Custom Range

Filters affect every chart simultaneously.

---

# REPORT EXPORT

Clicking Export generates

Professional PDF

Includes

Logo

↓

Charts

↓

KPIs

↓

Executive Summary

↓

Date

↓

Generated Automatically

Future

Company Branding.

---

# JSON MODEL

{
  "analytics":{

    "monthlyRevenue":28450000,

    "quotationConversion":68,

    "averageResponseHours":5.3,

    "hoursSaved":26.5,

    "topCustomers":[

      {

        "name":"Arquitectura CG",

        "revenue":9500000

      },

      {

        "name":"Innovate Studio",

        "revenue":6200000

      }

    ]
  }
}

---

# EMPTY STATE

Illustration

↓

Not enough information yet.

↓

Business reports will appear after your first quotations and orders.

↓

Go to Dashboard

---

# LOADING

Skeleton KPI Cards.

↓

Skeleton Charts.

↓

Skeleton Summary.

Charts animate after loading.

---

# ERROR

Unable to load analytics.

Retry Button.

---

# MICROINTERACTIONS

Hover Chart

Tooltip

↓

KPI

Count Animation

↓

Ranking

Highlight Row

↓

Export Button

Progress Animation

↓

Summary

Fade In

Everything should feel responsive.

---

# RESPONSIVE

Desktop

2 Column Layout

Large Charts

---

Laptop

Reduced Margins

---

Tablet

Charts stacked vertically.

---

Mobile

One Card per Row.

Charts resize automatically.

Ranking becomes Cards.

---

# UX PRINCIPLES

The Analytics Center should answer four questions.

Where am I?

↓

How am I performing?

↓

What needs attention?

↓

What should I do next?

If the owner can answer those questions in less than one minute, the module has achieved its objective.

The Analytics Center should feel like having a business consultant available at any moment.

# 13. Settings Center

---

# MODULE OVERVIEW

The Settings Center is the administrative control panel of the application.

Its purpose is allowing the business owner to personalize the platform without exposing unnecessary technical complexity.

Settings should feel organized.

Simple.

Modern.

Safe.

Every configuration should be understandable even by non-technical users.

Advanced options remain hidden until required.

The interface should communicate confidence.

Never overwhelm the user.

---

# PRIMARY OBJECTIVES

The Settings Center allows the user to

• Manage company information.

• Update personal profile.

• Configure notifications.

• Configure appearance.

• Manage integrations.

• Configure AI preferences.

• Configure automation defaults.

• Manage security.

• Manage future users.

---

# PAGE STRUCTURE

------------------------------------------------

Header

↓

Settings Navigation

↓

Configuration Panels

------------------------------------------------

The left side contains categories.

The right side contains settings.

The navigation never disappears.

---

# PAGE HEADER

------------------------------------------------

Settings

Configure your workspace and preferences.

------------------------------------------------

No Primary Button.

Changes save automatically whenever possible.

---

# SETTINGS SIDEBAR

Width

280px

Contains

Profile

↓

Company

↓

Workspace

↓

Notifications

↓

Appearance

↓

Artificial Intelligence

↓

Integrations

↓

Security

↓

System

Future

Users

Permissions

Billing

API

Audit Logs

---

# PROFILE

Displays

Avatar

↓

Full Name

↓

Email

↓

Phone

↓

Role

↓

Password

↓

Language

↓

Timezone

↓

Save

Avatar upload supports drag & drop.

---

# COMPANY

Contains

Company Logo

↓

Company Name

↓

Tax ID

↓

Address

↓

Phone

↓

Email

↓

Website

↓

Business Description

↓

Default Currency

↓

Save

The company logo is used throughout the application.

---

# WORKSPACE

Allows

Workspace Name

↓

Date Format

↓

Number Format

↓

Default Dashboard

↓

Sidebar Preference

↓

Compact Mode

Workspace changes affect all modules.

---

# NOTIFICATIONS

Grouped by category.

Commercial

↓

Orders

↓

Reports

↓

Automations

↓

AI

Each setting contains a Toggle.

Examples

Receive quotation reminders

Receive order updates

Receive weekly reports

Receive AI recommendations

Receive automation alerts

All enabled by default.

---

# APPEARANCE

Current Version

Dark Theme Only

Future

Light Theme

Options

Accent Color

↓

Sidebar Density

↓

Card Density

↓

Font Size

↓

Animations

↓

Reduced Motion

Every change updates immediately.

---

# ARTIFICIAL INTELLIGENCE

Displays

AI Status

↓

Preferred Language

↓

Suggestion Level

↓

Automatic Recommendations

↓

Conversation History

↓

Delete History

↓

Reset AI

Descriptions should use business language.

Never expose model configuration.

Never mention tokens.

Never mention API Keys.

---

# INTEGRATIONS

Each integration appears as a Card.

Cards

WhatsApp Business

↓

Email

↓

OpenAI

↓

n8n

↓

Google Drive (Future)

↓

Google Calendar (Future)

Each card contains

Logo

↓

Status

↓

Description

↓

Connect Button

↓

Last Sync

↓

Configuration

The visual language should resemble modern SaaS integration pages.

---

# SECURITY

Displays

Change Password

↓

Two Factor Authentication (Future)

↓

Last Login

↓

Trusted Devices

↓

Active Sessions

↓

Log Out Everywhere

Sensitive actions require confirmation.

---

# SYSTEM

Contains

Current Version

↓

Storage Usage

↓

Database Status

↓

System Health

↓

Updates

↓

Backup Status (Future)

This section is informational.

---

# SAVE BEHAVIOR

Small changes

Auto Save

Major changes

Confirmation Dialog

Dangerous changes

Double Confirmation

Never require saving an entire page.

---

# SEARCH SETTINGS

Search bar.

Placeholder

Search settings...

Typing filters categories instantly.

---

# SETTINGS JSON MODEL

{
  "settings":{

    "theme":"dark",

    "language":"es",

    "currency":"COP",

    "timezone":"America/Bogota",

    "notifications":{

      "commercial":true,

      "orders":true,

      "reports":true,

      "automation":true

    },

    "appearance":{

      "density":"comfortable",

      "animations":true

    }

  }

}

---

# EMPTY STATE

Not applicable.

Every category should always display configurable content.

---

# LOADING

Skeleton Panels

↓

Skeleton Cards

↓

Skeleton Forms

The layout remains visible.

---

# ERROR

Unable to load settings.

Retry Button.

---

# MICROINTERACTIONS

Toggle

Smooth Slide

↓

Cards

Lift on Hover

↓

Avatar

Scale

↓

Save

Success Check

↓

Dialogs

Fade Animation

---

# RESPONSIVE

Desktop

Sidebar + Content

---

Laptop

Smaller Sidebar

---

Tablet

Sidebar collapses

---

Mobile

Categories become Tabs

Panels occupy full width.

---

# UX PRINCIPLES

The Settings Center should never intimidate users.

Every option should answer

"What does this setting do?"

before the user needs to ask.

Descriptions should be concise.

No technical jargon.

Configuration should feel effortless.

The Settings Center should communicate simplicity and control.

# 14. Design Component Specification

---

# COMPONENT PHILOSOPHY

Every visual element inside the application must be a reusable component.

Components are the building blocks of the platform.

A component should never be created for a single page.

Every component must solve one problem only.

Small components compose larger components.

Never duplicate UI.

Never duplicate styles.

Never duplicate animations.

If two modules require similar elements, reuse the same component.

The objective is creating a scalable Design System.

---

# COMPONENT HIERARCHY

The component library is divided into five levels.

Primitive Components

↓

Layout Components

↓

Business Components

↓

Analytics Components

↓

AI Components

Never skip hierarchy levels.

---

##############################################################

# 1. BUTTON COMPONENT

##############################################################

Purpose

Trigger user actions.

Variants

Primary

Secondary

Ghost

Danger

Icon Button

Text Button

Loading Button

Sizes

Small

Medium

Large

Properties

label

icon

loading

disabled

onClick

fullWidth

tooltip

Loading State

Spinner replaces icon.

Text remains visible.

Hover

Elevation increases.

Focus

Green outline.

Disabled

50% opacity.

Cursor not allowed.

Animation

150ms.

Never exceed 200ms.

---

##############################################################

# 2. KPI CARD

##############################################################

Purpose

Display important business metrics.

Structure

Icon

↓

Title

↓

Main Value

↓

Trend

↓

Footer

↓

Sparkline

Height

140px

Padding

24px

Border Radius

18px

Shadow

Medium

Hover

Lift 4px

Trend Colors

Positive

Green

Negative

Red

Neutral

Gray

The entire card is clickable.

---

##############################################################

# 3. INFORMATION CARD

##############################################################

Purpose

Display summarized business information.

Examples

Customer

Order

Automation

Report

Contains

Header

↓

Content

↓

Footer

↓

Actions

Cards should never contain more than six visual elements.

---

##############################################################

# 4. STATUS BADGE

##############################################################

Purpose

Represent entity state.

Height

28px

Rounded

999px

Padding

12px

Variants

Success

Warning

Error

Info

Neutral

Every badge includes

Color

↓

Icon

↓

Text

Never use color alone.

---

##############################################################

# 5. SEARCH INPUT

##############################################################

Purpose

Global search.

Contains

Search Icon

↓

Placeholder

↓

Shortcut Indicator

↓

Clear Button

Focus

Green Border

Shadow

Small

Height

48px

Rounded

12px

---

##############################################################

# 6. TABLE COMPONENT

##############################################################

Purpose

Display structured information.

Supports

Sorting

Filtering

Pagination

Selection

Hover

Empty State

Loading

Responsive

Every table includes

Sticky Header

↓

Hover Rows

↓

Actions Column

↓

Status Badge

↓

Pagination

Never use vertical borders.

---

##############################################################

# 7. KANBAN CARD

##############################################################

Purpose

Represent production orders.

Contains

Priority

↓

Customer

↓

Order Number

↓

Progress

↓

Estimated Delivery

↓

Actions

Supports

Drag

Hover

Selection

Context Menu

Height

180px

---

##############################################################

# 8. TIMELINE

##############################################################

Purpose

Display chronological events.

Structure

Icon

↓

Title

↓

Description

↓

Timestamp

↓

Optional Attachment

Timeline grows automatically.

Newest first.

---

##############################################################

# 9. DRAWER

##############################################################

Purpose

Display entity details without leaving the page.

Width

560px

Animation

Slide Right

Sections

Header

↓

Body

↓

Footer

Close Button always visible.

ESC closes Drawer.

---

##############################################################

# 10. MODAL

##############################################################

Purpose

User confirmation.

Rounded

22px

Blur Background

Auto Focus

Maximum Width

720px

Never use full-screen modals unless necessary.

---

##############################################################

# 11. ACTIVITY ITEM

##############################################################

Purpose

Represent business activity.

Contains

Avatar

↓

Title

↓

Description

↓

Time

↓

Status

Hover

Background Highlight.

---

##############################################################

# 12. AI INSIGHT CARD

##############################################################

Purpose

Display AI recommendations.

Contains

AI Icon

↓

Recommendation

↓

Business Value

↓

Suggested Action

↓

Run Button

Should always sound conversational.

Never technical.

---

##############################################################

# 13. CHART CARD

##############################################################

Purpose

Display business metrics.

Contains

Title

↓

Chart

↓

Legend

↓

Summary

Supports

Area

Line

Bar

Donut

Maximum Height

360px

---

##############################################################

# 14. FILE CARD

##############################################################

Purpose

Display attached files.

Contains

Thumbnail

↓

Filename

↓

Date

↓

Actions

Download

Open

Delete

---

##############################################################

# 15. NOTIFICATION CARD

##############################################################

Purpose

Display notifications.

Contains

Icon

↓

Title

↓

Description

↓

Timestamp

↓

Read Status

Hover

Light Background

Unread

Left Green Border

---

##############################################################

# 16. CUSTOMER CARD

##############################################################

Purpose

Represent customers.

Contains

Avatar

↓

Customer

↓

Company

↓

Status

↓

Last Contact

↓

Actions

Used in Mobile View.

---

##############################################################

# 17. AUTOMATION CARD

##############################################################

Purpose

Represent business workflows.

Contains

Workflow Icon

↓

Title

↓

Description

↓

Status

↓

Executions

↓

Time Saved

↓

Toggle

Hover

Green Border

---

##############################################################

# 18. REPORT CARD

##############################################################

Purpose

Display executive reports.

Contains

Chart

↓

Summary

↓

Export

↓

Details

---

##############################################################

# 19. FLOATING AI BUTTON

##############################################################

Purpose

Open AI Assistant.

Position

Bottom Right

56px

Pulse every 8 seconds.

Green Glow.

Hover

Scale

Click

Open Drawer.

---

##############################################################

# 20. EMPTY STATE

##############################################################

Purpose

Avoid empty pages.

Contains

Illustration

↓

Title

↓

Description

↓

Primary Button

↓

Secondary Button

Every module has its own Empty State.

---

##############################################################

# 21. LOADING SKELETON

##############################################################

Purpose

Preserve Layout.

Supports

Cards

Tables

Charts

Drawer

Forms

Never replace pages with spinners.

---

##############################################################

# 22. PROGRESS BAR

##############################################################

Purpose

Represent progress.

Rounded

Animated

Green

Supports

0%

↓

100%

Smooth Transition.

---

##############################################################

# COMPONENT RULES

Every component must support:

Hover

Focus

Disabled

Loading

Success

Error

Responsive

Dark Theme

Accessibility

Animation

Every component must expose clean props.

Every component must remain independent.

Every component must follow the Design Tokens.

No exceptions.

---

# DESIGN CONSISTENCY

Future components that do not yet exist must inherit the same visual language.

If a developer creates a new component six months later, it should look like it has always belonged to the application.

Consistency is more important than creativity.

The Design Component Specification is the visual foundation of Majic 3D ERP CRM.

15. Navigation Flow (Muy importante ⭐⭐⭐⭐⭐)
Este capítulo define qué ocurre cuando el usuario interactúa con la aplicación.
Ejemplo
Dashboard

↓

Click en Clientes

↓

Carga módulo Clientes

↓

Click en Carlos Gómez

↓

Abre Drawer

↓

Click Crear Cotización

↓

Abre Editor

↓

Guardar

↓

Estado Pendiente

↓

Enviar

↓

Esperando respuesta

↓

Aceptar

↓

Crear Pedido
Aquí documentaríamos todos los flujos.
________________________________________
16. UX Writing ⭐⭐⭐⭐⭐
Aquí definimos todos los mensajes.
Por ejemplo
No escribir
Error
Sino
No fue posible guardar los cambios.

Intenta nuevamente.
________________________________________
No escribir
Success
Sino
La cotización fue creada correctamente.
________________________________________
También
Botones
Confirmaciones
Tooltips
Empty States
Todo.
________________________________________
17. Motion System ⭐⭐⭐⭐☆
Ya hablamos de animaciones.
Pero aquí las documentaríamos completamente.
Ejemplo
Hover
150ms
↓
Drawer
250ms
↓
Sidebar
300ms
↓
Toast
Slide Down
↓
Modal
Fade
↓
Cards
Lift
↓
Progress
Ease In Out
________________________________________
Codex respetará todas las animaciones.
________________________________________
18. Mock Database ⭐⭐⭐⭐⭐
Aunque no exista backend.
Aquí documentaríamos completamente
Cliente
Cotización
Pedido
Automatización
Reporte
Usuario
Actividad
Empresa
Configuración
con todas sus relaciones.
________________________________________
19. Mock API ⭐⭐⭐☆
No backend.
Solo los endpoints que el frontend consumirá.
Ejemplo
GET

/customers

POST

/customers

PATCH

/customers/:id
________________________________________
Así el backend se hace después.
________________________________________
20. Error Handling ⭐⭐⭐⭐☆
Muy importante.
¿Qué pasa si?
No hay internet.
↓
La IA no responde.
↓
No existen clientes.
↓
No hay pedidos.
↓
No existe información.
↓
El PDF falla.
↓
No carga un gráfico.
Todo documentado.
________________________________________
21. Permissions ⭐⭐⭐⭐☆
Aunque hoy solo exista un usuario.
Preparar
Administrador
↓
Ventas
↓
Operaciones
↓
Consulta
Para futuras versiones.
________________________________________
22. Performance Rules ⭐⭐⭐⭐⭐
Esto casi nadie lo documenta.
Pero ayuda muchísimo.
Ejemplo
No renderizar listas completas.
↓
Lazy Loading.
↓
Memo.
↓
Virtualización.
↓
Suspense.
↓
Code Splitting.
↓
Optimización de imágenes.
↓
Prefetch.
________________________________________
23. Accessibility ⭐⭐⭐⭐☆
ARIA
↓
Keyboard
↓
Focus
↓
Contraste
↓
Screen Readers
________________________________________
24. Testing ⭐⭐⭐⭐☆
No pruebas backend.
Solo frontend.
Qué debe probarse.
Qué no.
________________________________________
25. Roadmap ⭐⭐⭐⭐☆
Versione futuras
v1
CRM
Cotizaciones
Pedidos
IA
________________________________________
v2
Inventario
Facturación
Usuarios
Permisos
________________________________________
v3
App móvil
Calendario
Producción
Analytics IA
________________________________________
26. Final Prompt ⭐⭐⭐⭐⭐
Este sería el documento que realmente leerá Codex.
Algo como
You are a Staff Frontend Engineer...

Read the entire specification.

Never redesign.

Never simplify.

Never change spacing.

Never change colors.

Never create new components.

Never invent workflows.

Everything must follow the Product Specification.

