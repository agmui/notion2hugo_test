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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLB7HNB7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMKEkwfcJyTae%2FAq6YWR8zsbbOHetmEQy%2FefT4mLFN2QIgSlEWt31f2K4e4C4Ug0g4EaUlTRclKxFLzuYvo%2Fu0YP8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvm6U3gVGsoiXAUdyrcAxP50NeLE4Khqcv9IT8ajZmtrEDMPcIWQyKkWf%2BfNzSeOEcWUsn5lbMLLbytKbBhF5iB9J9j2MEOQHPml6rp2wuCh6IakGyDiWDKGiD%2F9Aq9JS%2BFrBlsN4r8d8WZ1Jua6OSaDVwHTr8Esgg9k%2Bdtl7MdZfqVhDqWNyLSxGQiyUOdtiDT7PkoEVplIYbNSFUXFkG7cbUwSdVn9qPaGp3fDu7CLckiRVpanYxdkB0ey5T6PmalCIeIib7P0TA%2BP32b%2Fi1%2FusD6AtXvv3Pi6%2FA5bTYugJe%2Bcb9%2Bf%2FPmlZeA5hwaqhQJjQn4%2F4WwYTwqpOPR8k30sGDaK38CJlJ19UGlNUHzPKilEHJKWSE8e8qZW4toXcfj%2BFC%2B%2F98IU7lL4bmxlDmSszH42xaEAhF1J4hvMU4E2b5%2FlsoYWIs04RR3dkuLFlnU5IZMgWtam%2F5vFBvEVB10fTDNlKQyt1uWJbfVk0otEhw%2BujhX3EIYNgAZlIRz9eRv2CvzgpKbRUYyNygEoJBgC32zr2lMIMqGQAl4LKvy5OISn3gm9Kmw43vgBxrfOLST1%2Fp3MzCh4tWj2cuEat6nalWbY4CIe5z0J3Kh%2F0m6U0FsNAwmKW3T8kp6YMYwujRZBAChYumqifnnMNWzlMIGOqUBSZyJPQ94B8VIYUAYdf9paYKHqsP0FofX9o4xtiEUZ2f%2FlyW5pnGkVSM65iJoT0GQK9uWqZ5ipmptKa2QyVmvTGZ7ybLqD6DB2jVUnsI6i2z5Fhuq%2Bdo6602RbNaVT8P3POeVoaCFZpiOXW8MpBv8kKv5eHNeQUGnwP4IPqio60ttVjT%2BaYMKmjLGTHK0gC8c7OCLhtFLc3oE3%2B3KgoNFmYkbN5ox&X-Amz-Signature=eb0e82acc55059560e1f8e568dfa6c1a977be51d674c6f33f29b668624367d27&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRJKCD2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOsn0l6LFwq1J7aFyTviqg413YCeV3Q9FBaAcrvnBVwAiEA3Ik1DsfXCHD6c1q44gnXdJ1hW7jTkxY9x%2BUJJtPz3UcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BobAoeIQG7RkzruCrcAy5Wd2sJ6SOEe6GLYf%2FQZl%2FiuZH%2Bbri49uZ3QhuBXBIx1R7CFMzIci1Mkh5iRifDJPPB%2FYaSGihi4UDBajzHx4y2b4vVDcrA6loSlP8fumOkgmSUhLuGe1vU%2BwbJ2EjMHq9scMfmUotLo4qKrcInvNbiRC2IqKQ%2FQ3Oj9u23CImd3%2Bkp7vQqZ35zQLvchpI%2BhUMp8Vke0WcCvLdEbfZGpKcae0Dn7W96khHE8eJ2vP51FV%2BK73gcuXNwHcKji6b0XYDbMEif5R%2B8XjxENqfEmwXatZWAUwW%2FouxNDGiXzfg%2FtXmLrW6MMI2DlUkzxUw7Wc3s9xKfSM0fe9A7usTHmjsaYvrYGXEgGAPXypfJAZQ5LgySB78La2NU6vRpgqRj0xQE1Je59Nw1b48N3UIzf3YIxolTt3idXh9CgpUfjDXib8seozN0HLxx0zWFeYWWswZ4ananntvOcdMfzPG7N0lPEjIWK8jBMq%2BFx616ZNkOTjBqDyKYGs9I0c9xEm5eentXWbprbkGB%2B8VXwHKRNVSSxGWEvtGIz%2Br8CUenPiiOeH15riMNBLEbq9J48HLcwKdY%2Bm4OqhnA96NTsxtrmoFqHWE7AB4qIGqcCzfolNcDyfHi62wvRdaTNZ2FMKmxlMIGOqUBaZPRFNe2FzCuOtiNAiZSwJNj4HEPA29asTMorvxkv3ZYzlM%2FhB1JTgtfnyq4IMpWGVRRY0WPFH75aX2ujvccfv%2Bv8%2BL%2BQd4nuF6wA1%2FrdzTB5ex99OtIN0yxLv%2BiW1DiSnDxjlHB8Owj31G%2Bz3zzOPa5o8tqZW6rf5u%2BG1JhruZDHBYCsMvzxfI6A75oHfLBTsxrmUNsPC7TnZjkti0FVa94iZVK&X-Amz-Signature=013f409a6d9606e1db50ddd99240ae7ba498f5c6637953be2b04fae1f66f0223&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
