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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLHOEXO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6j%2FvcVuCFC6%2F%2FVW2j%2FjlO8gz%2Fp80MCPF9LcTiovb68wIhAOuh%2BlqaAq6OjVszfr%2BA90rauJ%2BAkyqtB60eBq0pq5hIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6bsklyVkgzacl0Awq3AMTp%2FlbwkxL5fFL7aTFWCjqU%2FAGiCYaZZMyuSM29AZRWnHFF58N%2Fe8n%2FhWG%2FZVTqkbgrIcQLJSgm5aIIk7nWJFCJOYIuYUp7TKKj4l0PaGosvgSy4beM%2BCGrFoEVFMjXyILToxdCIqyLyDoz%2FCha7xKBz4ApwDzIsP5l9hCU%2Fw2MrjDT0gnu%2BxTUa4TnVqEgU6HjmFuD2JJTdpTqUARrPXK%2BvedE%2F3wvOQdCrjQUwdGTAn1IUf%2F2gfaEZrPD224FTCNtW1cSlDexotJf8xs846X3q%2BDmQ5abhnbI0J2ZFsv%2FbWrRS3c7zPCcX4GdiTB1GN9AZ8M%2FekD5%2BqkwZbtlsXENJGfiw5gE4EWTvP6wOhu%2FF6MaWPTED8MjW0To9hjM3cQUAqzlLj3sbUGCrbKDZENbxPqbsCSU4TGMZXpv4gG8pL6kiXdeDChst3YEiWWvjKoc8Pts9PCtTGhy8jBLx9WimAg4zEGuPq54bMnPDHXtfo5ET75yLq%2FrpjTZ12FQVq8MRToTuKOv8RUhWVzIfgCIBmX8m9SBUzIGlVSGDGYK5Awf8rDJ8hHAkluDQWI%2F2aFNpggHglxf2ujOtLS7Cf1C5Mftq2vC%2F09tmeCCycSptx80GTwhzdG%2BGywdzCGw7%2FBBjqkAbPMaDkrRqGQ3pfEqZycg8zA8hckE3KpP%2FGHQzXV2hDU%2BS4RVGAQ75hEGpxm2HHkz25oSZU0qcR5hfHbIIh9tKunjjRYiU7sr%2Bi0HfuX5GfKvNk2W%2BcGnNKA1TsoPBleQXo6v%2FIHCqtfpDTEmC5qntMan3Z%2Bbhu7M6PAkWFz1LxSJGOi6T50ij02jh0Ayrqga1Zl3rT20MRMYyKvvMSiRBUaUHez&X-Amz-Signature=8f833925a1df921f1fe80c3b180af79bb6b804bc19cea320baa459b4ab11c817&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPWPZ4B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJFMEMCICYQfMtdnw7G3FtGR0RJDmgqI0T5mbwKcFjrvUFwnm%2FjAh9M4GVCXOmtUqaAutpUyf3hg0jvhdio7woKso6XSuz%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdlI%2FYZKcOe%2F%2BzSxcq3AM6TpW2tbu75DnXu6fjR%2BLh0Xq8OJRRBoSXgOiSgPOF34x5JK79HTV1U7BGU0RuWxJZYTbSevnpzAn0mVqhTCyaPAbWwvSLWL3lfML20%2F3sNONeudus0nWY6R2mc0dEfA8fTUclalWuOzaNMiqYvMVftMeXR5PejbRpT8ovMG9EVwByHIIHfkPtfJLRe4l1Tibe4Z95wvNTxZ6n5VSD%2BxCWLaH9VDTRTw9K11KBfaY3fnFubUfIb4VJ8enG1LCfbduinLpc0krWIhy0rYisGSjA3v8GH5qeB6ZPd3N3NsDPNkL9XwE%2FhAIvpHL7WACdVK4tpZcsDf2HCQG0hdwqGfcaAZu77YEhaarhnCZT8T7LLsDO%2BSewWSphQ%2FEpXAFreX5jUml8%2FR2LNjn51SuLytWWbTTDvRlRwNwvggmpUdVD7UAVvlLWwgv%2BTR9dUONTM2JLeu4aDJSf02TsjFPbGAkS3a%2BF16ZCihBm%2F9%2FsSjYsr527pdNcjup5BFtHRZpE8ZV%2BmnK9cEc96TrybmILhkJH536dkKaJe3NAS8VvSCpheWJgPzYPXksSPTJiyuWuLhacEihzHxOlVv%2BUXyKmpDJCvhh33FSiqLRu4YGjyK4m%2BnBy1B9AMXJWR7ILpzCFwr%2FBBjqnAa7iESOLRX8cx5oK3%2FK6%2BmsH2I%2BQSOH3kmhJDd%2BiNDJoZuehB3FSOsQ4FKpmKGtlDfqWnWuzMXPBhjWToyJgfwlSw1O3WCu2tFZFO7aSUDhwv5Xvrbkz4D1vPOuXzewXZGU0yI%2FnHSPhVMEOmQacxPgd6Rh2lWX%2FjC5UpTA3fJpup9gClHkpArCpoZGhMWDW%2BSkc6vmXqtfJ8BkQelro00JHHDeR0CVw&X-Amz-Signature=20ad6454def93fa3bc89fccb2f31213966aad27305d05986ce0fc1f000866f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
