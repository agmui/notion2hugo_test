---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEJBTEF%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCZYj0p0lcH3cfe%2FypEOCQG0dkSzrwKZ0GW3bzD1dJd8QIge9UVZNwno6d%2FMLJJ5cHADeUOeOFcCmuAF%2BFvcAMHhzEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDE%2FvnRMvp%2BraWN%2B6ayrcA6JTJywpdN9Oqokw2T0fia%2BtgmwYSwqs0bP5QHtai8twxPcDbWpskQp%2FYfw0Fo9E4qha%2BVwWCWq4keVdIkMQJn06l2Pl9b6mS%2BWjuGBI7rkDkkR2XR6iW5XbAXGnXKaae%2BVURQXJCr6EDXQhvQV5xNYzBAGoArIyLnass8L3b1Eb6%2F3NnI4slywc%2B3d22Wg1LSUt%2FRJ3cUcDei8QmIFgw1kKKc8xhx68qx4SFXj8F1hovG4De6KeYqm0SotlPrHWHgq%2Fw8ng6ZcplEbkTeq4r%2B55BZGuv%2B8FKljCeVQuUe%2BJjXAR6KckpGUxsWt0OgkDHsl%2F9LTwduBuBI%2F9AUhrzqu4MhMrM1YcdvuHotOCsfIDVOjLZGW8eTtw7YLYKUfcDkDUeIDjDwNf1BTj6vpJg7z6xGUiTPGiMXCe7mO%2FfDrMphvF35Ik7FTnkZgrxJF1QDD1drS%2Fm%2FIPAZGAgT0htZq14evGpnTNXp9ouisbPzTmSirILq1Gnm8ryqM66rFIMElE%2B%2BjdpARce897PRwG7qWwZdTvdB7Xi36sQpw04nf%2BUW37AxqcaCZw%2B%2BJkVMvxXVWnKiy5OTjwxPQWzVj6A7WfaxLsXePJ%2F3HVgu7wxYrEDho%2FwvqOdERt7c%2FvMMTpldMGOqUBB6dk0h%2BxOQwlWka9wpLymxPAPmGSDoydO2NHwbIXhJCzAAr5MRI9UCYD57Tqlp8cozXOsg0ueWvoRP6caZmA29pSzrlakdpwjsnxF2GxY35srdIXVAUyRF0IPf47MNKE3BptF%2FWdqNTmkTHxmzZcvwUow43%2FesgYBtnxxNTfSyUGq3cKHDX8YB6Vh3J2eBo1IMFbSiz74cNtHMbAaEc1oFNHM96F&X-Amz-Signature=9cec594c1a5754c1a833527167b1be78cc28fcd36cfa5ed122400aa2212b21e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YLSVXZ%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrweXNHw2zRNKmt5%2FT9GpLKin8cBHbzUhjxIHG%2ByztfgIgE%2FCha%2FQ05ygReA3Ce2ogF%2Fa%2FWfimXz7SAC%2F7l02KYOgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDE1BcOHsrC6WFgg%2F3ircA813GDl4LXDA%2F5qgDS4uefVTGsRU995zfUhAKYa8TUrOu%2Ba%2BmpOhxF49%2FzAh5Cym7qR7notOoIrFPLQLJErnkt0FAsRLnp3DHDSG2mdgFazaGAOpTOKXZO0Z14WuCDMKwGo5Jaf5bFZGXjFuMok8z7Zni%2FuvfvC4UH67VvqvLnaloR5l1DHK2phxNAlDuZ1L%2B4sfHM64CmudEtjCxI6Z9TUjoH2r9b8eGDzPKk7F3v6laWZqzlMtK%2FJ2FqhYlwVc9Zf7is2B%2FAAbpDQGCmJDL5%2BwWo%2FugRaOJGP%2F9v4lePkaO0OM8OtMT9OAYXbKZtqGPVEHZrTQSYGxpotpqMAzr9zpmStBh24Mi1peGaqm%2BAHZYZ5WW%2Bm4Ubq60ObpeGrL3BhaZsaOIRiUShebDIK4ecFwC1HGG%2BYe2WdX0xJUiQIn4KQB0exsnKsu0WVpAqHkBHYp4mdTJ%2F3PMbfvTLyJt3wb2NnKgJ8eJ7SQq2NVz3Lag9JVNHRRGqA3XB%2BT5%2Fu3RFcjSLQ6Vlr8wnuck0wz1G%2BqGJ%2FO8lCykOz1TCc8%2BaeE%2F0XpwmpVY9UFJCZ0VlEYpOU2Mb9Yn43gXjb6X59H0GjfliZomxJRe3CRsSubx1zZ5hIlYb%2BpDzFPWsxaMM7nldMGOqUBMImWcsTKfhU0IlJJLRwqmfc0QC0axg4vZNwOrOmmgJlTI%2F8uBA89i3CWw%2Fkw9%2Fu%2FXN6IATKmeVHdYBDJT9%2F%2F0mhQGNP%2FOxW2mDYbSNtPS9PXu8%2F6bjo63tR47mvDqnCHNkzCEDzZRSJ%2B%2BUrGXOjdC4%2B5sPAQdy2rNpb4oKICcXncI%2F1nNfyDaAkziAXri1yzPKH6AlGlcu0Zw3rVorFq9y9hiYiT&X-Amz-Signature=1755f6756b97d651aebfbbfc2499c3a1a78ec30e8fa917895378ee257dfc2507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
