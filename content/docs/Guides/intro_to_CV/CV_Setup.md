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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNWJKCH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFiJcPY7hnltt5P%2BAFQFVITyZL%2FPHi3rZKcMmjUrQjqpAiEAs17ws0YeH0TCQ4C%2B9xRCzgtgDypVO8wtnT38CQsFBzcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJHTa9CWE9W%2FQjm2oSrcA9rypiITy8aUiV0tJvgZatueaP9S%2FphATLDtcruUQlSgWjA2ns%2BfeNGJVBWvSNaIUCgiQ8RT2rSvFeSoteEsA%2Fosz46GhZZjeCNquRDfF5bDOY32bevIJrNxB0kBeXrzU3j%2BkbiU9bOtgYOKa0MeKEsjx6yuPMN57jJaIlq6Ug%2BtiFrXEmDklb9616DjYc%2Bf8jpHrFxuzd0AUCCpX3lZdithF2q5cy5PR1Ztjnqp2nlszSzo%2Fynp59%2FN33iEBpucfX8m8zfDwee%2Fb%2BkLOpTWsl55q6h2ACxDichslGeVAX%2FGlDjEWx%2F%2FSGfUHh%2BWjyujEpVqJctA5oLDMM3WGWQYLVs6mIxX2s%2BloYa8NHc4hvjaDZCOH2mIYV5izZB4EB%2BSxG%2F%2FyQaCbXNhyRjJbdXB%2BNR2kcRtF7QsY5yIKAHdNUdJ39BLwooiTFArEQS4pjak9acY8v8LHhGzK9cltLsSGnJjhij5h0nsX4PAmw6T0E%2FUnKuOQb%2BXtrlYFJllWIBtRbpBctwPfwxeM7T%2Bxu%2FN1GQjCGOQZR2QQfMTlykkOlzAx%2BNTi341E7YCGmtcZGMlpJxwHjsbVvqOLgj9Hq1uhDk9CEyR6eDVRn4E32SaeHQ6DmhRvz%2Bbob%2B4z74LMJ7nhsIGOqUBqXBL%2BXH6VrXMOAi5undIw9cQASIFScv0QObBcTJyrWTQpYyu1LIySUX0MWTFEiqnbtnIBV%2FvS1JSBOBRXhH5faNE8nc60ZVz%2BdTNnQVtkbLvhwHdVedTq6wchEOSroQ9vTdJrwh9zc6lQp5uLukB1bhdd31jtOR7uQUhPqKars%2FurEhBoRRLL1T7TJUyAOw9tY4ugX%2Betw1n9WJ7K9W%2FAiR7LSIE&X-Amz-Signature=ace202d6877e9f92a4a020eb10450d4c30888c8b5de7341e2721d737fbe0295b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBNTU4M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFgne1KiP5z8zDJ%2BbA%2BOQRUxDU6nM2OVmiVnF9g727CrAiBfgI%2Fs8GtL9Yl7YBxfMExGldLCWbLiAtFYcPxhJz%2BoaSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMdtfHCR0pEufxWMD8KtwD%2BskZzTw0wwLu6D1pWHBJt5rKVd1OM2o56ojL8cNWCg3Ztm5ecIO2uXCZaIlELNocnrpi7dG6n93DdOqKMdOaASxibE%2FsGloysTiFYG%2Bw%2F9Af678PAlyC54Em%2F3jqhxg%2FCowSdly8oSBPb%2B21Lw2asX17760n%2FADY02nX2LnkDZS5B0IstT1YlKNsZP7UH4wSSVAcdsMyTkyWY8T02rWYA8C7gElP0Zpj7rG5gAwV3kqd4jb7GZTqFraB39X%2Bpur3%2F6PSSqQ1nBPqz9kpxZkxutZuDTeyD9dcV%2F10bW3jlB51fbX2UKnKoNcrxhGvP%2B4aSWszX3bRYQoV46rXHOYmIoe5XZzuCWRQNrPwWQ%2BlC1VN9mFEx3%2F6eKRGeYyMWBHmWzDIEwXAfneWwmjauM4yFXiZeIgthc8t%2FXnjIc9M3sYN2L1NnqWeWMVh3TtDBqmPhIeawgMUYpq3qajTccVyJgbpBaUpcl%2BNBuUs2tc6AEoC8vy5RI7e2oAh2DK8rlzurDeixVllxYjzMXnYgtouzl%2B1IV12JCN1yX5CMcFuXNfQunjUG9ATVZB2vBGAltZaJfbjS2shhqTmxZlJKGPEujtxr1rkOjbTu%2BTIsiA3Nb%2FPbHYAiUuYBZwkJjAwoOeGwgY6pgFe%2FCz1nZcIOJiZ2fVxmqUtWTkBYdaFc2w2hkE67NJjAaK5YodBj9Di8SDp7cim7gTsADaQzTBV%2BaaMuNQ84CtmOSFZZhHZMq8eiV3lGdH9UxA53Ww%2B%2BzlzjzdXsx93lj102iNTScF7zS5bNjZMl8QlJnl7IKcMKMl0u54Ft%2FvE7TQCyckCpShs4gX2gXs1uWkpmLXfaL%2B46elQ%2F7vxZxLgc87cBrZX&X-Amz-Signature=51c6830b2b2ae415ce50611afdd909277f7e9566de00efa2d560bd7b5d3a4752&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
