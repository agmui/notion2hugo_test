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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IYE2DN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCwLox2hnnXT%2Fptyma3smPIcwy6FAaXhfwrTjjvF35MgIgXId9zUhrbgjHE7UqQZ96XvuBOSkuwwFfHHlm%2Bl3uDcYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCuqrzTBx2ewN5sCeCrcA99oHyjrSUnyfDMCK3MJ5J7BDTRCSjkYZ19jjl77kjI9qqnBSpLrdx%2F%2BIvPH0o6Ys1BDrei1a6XtJ7cxL0zVl9oEURsmsFvfmbRQJshz99h%2BePj261D9hzTcK3idCKww3kNeheHA6y1sp5Jh1oZe0X%2Bvq2l0oKpD4aRPVEy75ZHFbVLVgv4rEQJZugltj9Mt4SBvMl3A6GzbMaqJUeOyhIyTnQ5jMZWFK4WOI0cJLOkcDNHWgFezz6Cx8E9k33Re3ktyIkSuexEOmzMaEVaB%2FeZxtrz3f9LmlZ%2FWohSzam%2BtRMsE6FNgeEe%2FdWliSfcZzhSKE%2F%2FJ9d1i0YdbGD%2FTp8qhrtiigK66jIKjoDNF7JDDnB3HpvCzsdHcRXJGK3HFnwIcF%2FDP%2BhqgiPi6tqY2SmT0WzHYLTWwTQOGC8stzvLfq5kGaL7ywAARc0zK7TUIv9iUgfj4RCdqKaSdmqkKMJNDTEEzgQ2nqBJAzOk1wbgrNZXGeOnmY2%2BD%2FBgrjXCxFl1dVG2%2BrR9L76Uylnx4Dcby0t9WBzOvUQuFWBMRSLELQ1Wd9AptgBeIrYXPAmzMPTMh2r390A3YkWX5hbUCTcTMDOZn9aZvLin7WSP%2Bhzz72dxjEP52LAarQ1xgMMPBtcIGOqUB8qNj1%2BcTvFjKFGnIiYvGJN%2B613RGqmVXEjeLmGh2XmFB53X8Gwe2U4g3n3SUt%2BnGMkyFqWFuM8T2ombbUMO2%2Bj5lkvXvZR%2FB0B3glO38usKdN5YT6oa%2BQ%2BZlOTJD5loo4J%2FKN7l3rH9bwnIsiPtfpu1C9hz49ptUSe%2BUqC3YcEhhn7N7PwlZHt0MCGc2qTkrEaXIpn%2FuL7BRkXxkt3bWUwWi2sAq&X-Amz-Signature=b0d8dae46933db7e210c6a24be1a05474662eb7b6e16b8969435023f962b1142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VKGGK5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFdFlDBypCrQtff3Qa1VZ3d0%2FLbI9Zo5aVA82k76NMVOAiEAp0udsZFarWgvfuJNt1bjpdVGFMlU9o0zvDSLIXy0ynkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJX%2BCdHmrXiIlomPxSrcA00YB6dbKZ4%2F%2FobTEUSJhwzX9hf6t5onWDsq%2FABoI4LL0WBPSpWh1SMaTVKohX8Qemvz3EVOyku8iHlinAD9VwtmpylUMwYvu2p%2BthlaifYsOq%2F2po9ebRK9a18SnWzGvs4FCscswt%2BxXKWvcepRkJWFavxKEm6pskU7%2BqMnU%2BWEtQaUjR8Ul%2FNHcm1iGZA9yFpxNpiPtcXpZ5CAPfiHdEZpAq1hV%2F2N%2Fh7P6j2Ia2GxHiBkM8OAHQ%2FcVGZKQHj6E%2FvWsvVB8Bk4CZg8oQ1zLUkRmPM5FAGUkQFGsSK4xbFSMvlb4cRhQfbah2Tulg1%2BeQQb%2FjyvOMhwdxvvn8ceMwPXhWKYc2ZDnct20C4UK42w39t0S%2B0rnToxa%2BHxDUIlGU4dldQD34snQzXcZ5%2BrkKaC%2FhPrrD4g94wTjgbr7Xo%2FR%2B%2BqVbSwom%2BiotLWp2gOzFIQhaH2oskobAS5Mha0hDgCjXzOF3V1lG7idlP%2BDiIdM6ZfC%2FJ4h2qVmHLk56vayqN%2Bwdt8PBDZc964i%2BRU7xAAVWoYZmjo5xmLu9M3JFPsHZhyfLPnNibAhcp9yPgYjDnUo1N%2B8PTsZ56ggW7XiEemNsxJgM%2BDz6vWqneMk7LjCfySad%2FAyZ4cBQUzMNDBtcIGOqUBCC3sYd8R%2Bp%2FS3UzFGPPeyDpiokWgmr6gPdUnrdCkXXwOYyW3GyllRGBvfD%2BibXCbPbCp6oKBkxX28IvZ%2BYhEvJfOGiNYcwR1dhD94Y7urlzTivOWtlH498OvhKb28P4H3AxrROA4sBHqr9mKSzSfxI92CZUnwj45NWus99syg8I5YoRJB%2BMeqkRuTnzRILNvfCYc5bjvAzniJzk2bfbAZ6mmyO%2BT&X-Amz-Signature=d004e0490766ed957a243ee15a236e80a871d9415021e2c54421f06cd7c11407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
