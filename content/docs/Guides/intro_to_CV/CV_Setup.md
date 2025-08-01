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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HAXAV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTO2bo0CIBATBYm1VPUrxsnNp6zMEjnwDPOt8rDddviAiA3VTMOWjlYUy68gWUZy%2BMIvKw%2FgFWUSqw9vJdGv6%2FjrCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpEQDsLK9%2FVhF9i%2F7KtwDL0K%2FVxEx%2BJmMzzqMPOopTANMQeaA6NTBj%2BldoUfSP6fKk6jmKOmgDDF6NxFT07ZYj5MCgwI%2BTvDS2TtP3n1dGzwQ3I23NQn1ADH9urnO5TuCD7YbYMQOBHgxruhc6L307J716pvD1p58wQ8dT%2FECEEVnR85PgV0VTUTnQ3PPZ2bp54rFBjl8NpJNHHqkol%2B70FqapeAJJn3ZVmTPzFmkiLfVIAFsg1x4ZJzN7hZnDp2zWdjVDj2uvkEpNLOZRzrAWjVSMyRmgryhfvRAp%2FOv4HzBGC5NugOozbDFisjR1A6Kt5r69RbuepWmHcRs83%2BahN%2Bq6Rqsa57vnhB4%2BDMYlDC8h48kgJgly6rXbjD%2F0hJh700ApYp4KSTmI8lI3f9YvUFh3irB21C%2BMkkCLdT1POSmO4TelgTcdt15W7xvEvDKTm4L1RnYmQuxyoMxTitHhoefVs3IqI5BiwYB2s9ZDHKs1rImoTEXJJb1elmRi4N%2F1dRoj3PZ7vieDeLeRDMlcsB8V22s0SK2nZD%2BQCRxeGqZsp1b2gNNdZk699W96JRFe1lPkJRKwMxH9kvHVdIb1N%2FVooF%2B7KnWLPFgIiE1Fqnn8wpnG2i%2B%2FJNmo7dPI8CjbjbwYJHaJNF504kwkOyxxAY6pgF6l1DGN5PzSnJW4CgDNyI3fmYu7erOQmHp3i00GkgCKBbk8%2Bt2qzSQKxPcYa49nC0gWdhE5teQ4DyIrDuscyp5BqOwSBEIQh0Fe5dslLu527BvdSwP43dk2YmGhCUP06ptX21CIRnV2apVWTlarkhCIvCbgkjHeP%2B00C55nPjl%2BVMkuk2p4i7NwtGt7eeK1r6LpVL72tGEr2QD%2B9uIQmmKOnFDjV1I&X-Amz-Signature=0666ab1e34ff93c9ba83f9e59d7c619a0c4f2382f89adaf4dfcb17fd53c3d498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4XZ5T7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDT0KzuYFWFM5l%2FS8i1On8M2GTFwi9r73AyjaaAyC7wIhALShpvuCVQ4FTS8O0jZnhUApfstlyXBujb9Oqn7XT%2FepKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjZNWhy70W5ctYjJYq3AO%2BMS1%2BhFXXBtSM5AmQsZYRbi6wZ3nYjmUTkZa9fmjJonIoj7SDWw8GP1KHGW6hIdSHdEyPZwlG3WqqwwVSrSBv0ddF9jmp8xU0DvHvTtN5MnNrBR28waaH0JziYRElWVD1GPodN6RVm4VN4GazEFZl3gibKYibm6rININUv1gSK%2FOIWoNijv5AwM0qH0HHrzYM3SRDtzYf44zTA9O1mxU7m3I%2BrTqvW3DZ4AlQrPXBxzWjgR0UV%2BqRXPZrZlBAYWBT49XCWum9KfJulsbT5YpsmpBradhwrB7T5u%2BIboZdFs%2FPevwZcXaTfdIjk0FBjCRAr8HoXFWRc8dmdrPHTDeqeCr%2B80139f5vNyHgBkTI6%2FjRJdxSuUhQpb5r8IFBv1bC0pX5vpSaDE%2FHWpzhvrum%2BYxux3ma2VXW%2F0j09769ku8ZtYnFsyxDTiphztul7BguQpIdyYBdeA83lP7AZb3oYzYd4R7M%2FwDV0O3pjY0OEknQ209kuCxj%2FeTS%2BMvkOo37wRscplIyUP8cNvOAoQspUuvSm6c6XAazoyrADZLGCIsYCROhDRQPRLDxtzagjWoLwIpdxjMoS40DGhVDotTdvYHq%2Bt%2FHxcJsmFSYitHe45pqD27AiuiYNFtw3DCp7LHEBjqkASaM8e%2BP69NOGMafSc5hm6hqYiKhs5xzWthl9e23aofWqbybg62W0mEZ1%2BPx%2FwAtXUk55h9tm44GtVSxY9EYl%2BeP0125hzALk56SE3F4HIV%2BaDy17xuwMerGCo6n1ym1QeLRk%2FiPiZZYWIgBpzW3NRaMrppQj%2FzFRw7J8RTRmFPkGaCRpm3B%2BvDuiO24iuB4MkpHltTn7VOJ%2F0AJDc8MqTOzsGYL&X-Amz-Signature=682c74a690a8f610b0a6746d766dc5149b9c1af8de26776fd1ccfe3c7d60c914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
