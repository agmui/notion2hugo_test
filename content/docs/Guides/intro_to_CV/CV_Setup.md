---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I54CPX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIGkyQuL%2Bws0gV0hYv1G82G3D%2FSNBmoXC65GthrOXY97RAiBhBp0dQe9kTut%2BzuKPe96%2F%2F7%2B1610sWeSBaqidxwCIiir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMoZ%2F4Kp3LI3XlMkZAKtwDGc1rgEdx%2F%2F%2FgJUTMicOeIzFIGNBqcwhpW9M4kpBsdXCtlg3OP3YmzowxdzSxRRfkJyOk1IM63muj177P23RkupyzUGTOxSXwCFPSAr%2FrsPYSltLs%2FFVQDeSTB6Csgp%2BwUi9Cu7J8olEZHNOK3NizYwJL3O9Mev%2F%2FZAbons60Ge8wkhWpdBt%2FLTFwAMeR%2BXaNMciBPZ7Z2kxhCYocs%2FwJenaZlqh1b9mWXaQDhi9BZlMuqdZkISTwMuFYfkdz7Aialdo%2BKy1BCQuy1w3sJxdvM2Qd41xN%2BRSLxXYj%2BEI6mDbXOjJWu%2BsGgRxkysA%2B16TlfpphCAVIuFfiXKsaKRyeKkCxtf4%2BcPJU8ITi%2BR09eZuQ1NuajOeZxiXX9zBynKTcyL3YDPA%2FyC18wZlA9%2Butr%2FFc3%2BqPXdtlAaNlN9RJoLSbqgO%2BAaaBq62IRUWVFjurXtchETmgzkZrCdeM4GqkWhBkM%2B6H3DnbCMaEpGghskIwotNFLp3hCY0aRyBr3%2BBwVd671MYuL8XW2etl%2BcknEK9SKFuCkqyfxCnmifhcBFXjvy6pAdtgIQtOXwwOwK9MF0KKm3QEXTWr%2FjKV%2BoKDs2lHGETi5U7RD00HznAWMCXp17TzADeBTpRy%2FtEwyvuSvQY6pgEwAO7elJKIFw2k98iUQB6dPZZK4NiHzBfkYN%2FroRZ5r5vsU07d7NQXx7eiLrYzxlESOJXEtpEPpySO8TH0s4SWYGWlgrmWuFj0W3Vme2s9MOBOo97k8%2FtnIBdyw2TRYFcK20FkGSaQABYcJdQIEk5ce5XJ1cN%2BibVmsayz72sGFDFS%2BnQqWzulbjUdhy2Jr9emCOI0B9P2kX65vr29izTxoah2uRwo&X-Amz-Signature=d376555860b564f601329f8e5cb6569357fc0e29cacd6c5e2b57c4ac6f58ed4d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQWTAD4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAg1NoyGPnH3XcyIzq7bq4YAnqK%2Fx9mGK9gbo3BY3vWtAiBHjWUUe35utFPydWxs%2FvznY3UqOEjW4CpraqQuetA95Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMYaNSTGCxKCIaBeMYKtwDGbIb158LzeV%2FwjRLpSv5Q886RoHzTC6sVYo5OEHghx4b92C861QQMx49%2BKP7v4KCzfnbBUzYuAMrrIOBo9pZ1PSP%2B7B1Ay3Bumnw11S83grWLEWzGxBgEhJ5peVYHumqrF8F5AgTAm%2FrqzAfgwQhIU6g0DvDBaaIFYruYekRvNX54zhsrphrUUFw5yvJW9T4Fv4jqFl7QffmBmSrgfgW8gQEVw%2F46FNtk1gAOwBwkLYd1WxJunKN%2FPrQnHhPoDrYrxO3MVuC%2B2%2B0A35qrXg1zxiZ3k%2BFuRqMN1jE8Kt91NIP559J2tv5LYd5RcrxzEykMIzmsE7Uvd%2FmMGQMsrTXH82jAIO0R2Qrsn353aeZGWliHoeI7RaeiWG%2Bz27D2RhusnqVEMdyPh4vBJCl1ARhHVuMxcZSXb76yRajdi1QjAays15qYo4oJXF0J5TZt60mTm54lAHweM7Zls9g0X1Ju7n%2BUIN9YgTPyYtrBBq8ZUavNhTDFeClyXrklAvq90d0EkmaO2oUzl18kzI82L7c8qO5RL%2FajhNOsErHSuUHaqLNTKcvUuRt889MaMoBBLlKZNhdPYmUTqQ%2B21GOo6HSL8gZKofPYrRpS0hDqerSTFSCve2kcP9WQtlUR8gw9fqSvQY6pgHZqfMOhTu%2BfJd%2BYHrBcL0KlTDf78wvCpdFxRE050M0B4GWQCraZLSYs5zkIR8VNDE2y35v8u18y%2BEUW%2FldnTFmJS3nAJk53Q3BbnNxner2Yc2vjGKl9AYtVrLC55LWCyCRfZS86U7dOtFR3nVt6I4npIR%2BzfvQKngQF9JbPYB1pe7ObZKDEkasCwkk%2BfGRAU39zKUdHNEphf%2BGU3pDZXJERECg0k8W&X-Amz-Signature=94e2df671fddb711dd041de4e85c04336de069bfe321b4ab4c24b2adecdb7170&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
