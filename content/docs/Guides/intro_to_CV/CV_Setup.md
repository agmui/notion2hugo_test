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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP55K6FX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCGWZ%2BHggoMl8wXRWHkeG2N%2F07FLeNdY8q6%2FagZfZOL%2BAIhAMXUW%2FwIzJ8nvtQqK3fySWeWBZccbNDK10eRiAQS9H%2F2Kv8DCF4QABoMNjM3NDIzMTgzODA1IgzgB3HxZpKMUZgoBJQq3APEaWP1F8XgE1AkHVYomm9FVI3En%2FWkxIwKkXuvaEcHUqbw%2Bf1JOSU%2F47uF24ggXr26XULxOgaE6E0fEHK2I2yX9njqoSmlWE0ysyg1O%2B1CUsOcHkV5OcGCIMAK3dCeXj4UHoyRj4M8smdblgvrxc%2BRH1lX%2FfifHTREwhoDKi1gmXwJqF0MK2PMDT9%2BhrKPwdD0j1wvf3Psin%2BC2vC3CsOsScQQRqRq%2F7Y9hFALN8DuP32WlAuhWmduEqeKCIPzB5OsjwdlsKgOf8h54s0ktZ3sr9DvTQ8bdaOdxx1iqnyb2zGRuhVinzt6lunrws2PM0tWSWOegxFnywC2H09OPj1SFQRMPWDkxndyrwKsK3t2OVFquLrcNk8P3ZNe6bpWUlFPha9RNsxZlmyb%2Bs9zMc8mmp3fPcfIip0NYFLfs2ND7any%2F%2FYApfXTujiM3ZBEOqKxxyOY0cu0ZyuznCCbR0edtvapVhkvUiVb2gyV%2Bsqqtpx9ZLeGFMA0EFDyn5mJnh2t2pG%2FdMLTPCvj7%2FYoBeh9%2B2ue48jBbi9i9HZG54Ru0%2FrxtY%2BZscEIzzNqFTvCaWyfyMqL7ihnEdVLJNhMTmhV2uR3CO2h8eQWjNRhWtyTj9IM7F9csHxdhuM9pDDrg8jEBjqkARLdoqaDxxb3YAgSqpk8rdEczLfw5mSgDARrH1TQuD%2BpIKXD0gvQ6kDSsQBo7JbYxjuLEM21lhwYr1uuqPQW5G9ouwXgkyxthjk8DL%2B0kprYw%2FUjcuRECthgsw%2Fzky4s4QMzVHDLx2W6%2FhkmAR7iE416lArvSuABK6sBR86fQ%2FhfUebctZoq4QONRBwnIvSWcLAbhTK0ig%2F6Ltgkd0ZE%2B5SLP7II&X-Amz-Signature=c2da92fe16f4c81e4a44908e16ba0f711a9ad7a05a6909ecb63df24d7d8c0e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQTEKFRF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHjbw76zVwa33RQwGNsW34Vw8jln5BsLl5t2skzEqAFrAiEA0gktKIyA%2Bd7rRVimYwuExSviIcHZOtUTJeiRaiRlD3wq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDKtpx5jWPuy3cKNF5ircA4PNmz9L84kdVUoj3MjEaW8lUSwGhWpSsWUjXZ%2FpW4LHyXCZ2L3QZDekZmoq3uAdTshfROWHLxK9MpH2I2PrcP83HsJr%2BxWK8giJW3HcruNE1DPEWXUoCcqsdxwtCyzsSX8Xe109xrFKgIFSLKRlyHw3r%2BZZVKU8eczLoLZrzLRtpw5ef53UbYT%2B2h0xDQ1BJBkDbdBsmVFsAJnJ91%2BUrJYtK1YrEE9oYKwsLs3zGUJVC7Jtp9N12fbeuBAeyEdoaSl9Car91bRi2P3bdEM04AUqcZPDB0YAhT0285hrFB3udIBl8uzvnWtW84Zn9Mkv8azUTcGcmT4YvxchR%2FmjzHrtLcKL6uj2gKnBJCn5Fa2AvEWbrrrOQgUrcOcmAuzl3KmZP%2FIhB22z%2BVI8ePf%2BJAaxP9dAK1glX%2FZjHCYv6wWlRbXffCHON81Ldq%2B%2FNldFfN%2FiknH3a9GkgB%2BULJ%2BRuk9u5Ayyh9YU48q8r%2Bo7XnRVt7HjGX%2FJCC4bUEZW6zpvEYX%2BAi%2FjmEA9gFpgBL%2F%2B3AaGnUbbGp7SPd45oUZl%2B%2BGlFZQ7USLp6mFGf1phK5w2s2t9kqNMK3rJzt8xz9MOLPfNhgQJatODRwo5z7%2BA9R0ofR11D92YmlG2wG5jMK2DyMQGOqUBYxxNtxB5CErTsMmCYjy8%2FH5jlPM6CwLEhzcCQqRCOwHFB0jagXrgZlaFl88Vwo3aDQJ9O8o9m9ZZQh0JXADeQJ8Mi%2BY3xRy%2FYsfmbohTFnouO2zybM%2FweEKtupl5GnTAbc8XrGVdIyYm%2B8E76OylQEXMYkf6iVFbQN%2Bw7IvIRnVtttJHY3n9gmuZ31SvVKlaDkjOQO2nLw01%2BC4L13glQEV5FKbI&X-Amz-Signature=7e1abafc58e9e5b20381ab39d9f08fb832af25bd7c4aca70b9d992644538188d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
