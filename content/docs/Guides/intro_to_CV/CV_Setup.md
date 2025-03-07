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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUKGUA5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC9wfNFvoo%2B5w0e0N%2BePMNncynfmiXxvsJm%2FYIVtpX6TAIhAIqFw8Js4h3LfwlXfMsZTOJhHN8baSda7DwCqmgvovvoKv8DCE0QABoMNjM3NDIzMTgzODA1IgylOoHEtt5muWxj2CMq3AOZLap9I%2BpwySfSPhHsYn5eQIXdYP%2FRQN7oTyiQETPuWbgDJFqDqXF5yPcH5C9FxHw9MY8%2BnYDRfHLvQqHXsBNK%2FewHBYVNiupLYxyzJzbRniS9hyNXtH5MrtmMmin5CjSWWvxwSo5KpN4b8cVgiPjIU5cxU2qc7Peyw%2FTVWpVSJaf5rlwKFAS0AbvZKMP65xY1M%2BZZxKksibu%2FLUSRqsRhR641XuqseudUKdN8v7Klc8dJWnqP0RPoQVLtspyXwouJv5ORC40%2BRgGQY8mSgaYreAnrJQjnRSFvANcfI4LM9V4H2SOIXoVuxD8GdAI5PHAYTyfK5wr3OnY24aCOpaa4iHrOypy5tliRJKP%2FcJ%2By03stkTcoNXtaROCbNE9Z1P43R2qnkoRseI1z%2F2HtazJNSavpCOzfanlaCtjqOvSVirHtIbvOz0RxShNuoP3qduf%2FHTfepDU8H2IC5DI3m0U%2F%2FFs%2FwWuYzf8TJW2oFi7lEdgX41nA9idrUZBGiBshTHfBISzj46kfXOC06Mt4N6GIY8H7HsjBbEbiMpIckWtSRi5rw%2BVyyGNANW4fGHbxUlkW%2BGKGu8Dbvqau43ChzBaKiFyhsPg%2FCXphEQ7r%2FqK1yrH3n3W8IIlvWIq5OzD%2FoK2%2BBjqkARFwAIuAgrFN6A%2FwQcGlP3c9vPXJi0O07tb67rKnUp4BHfxHuibJP%2FTv8gFP1VGrVYiaXcIZaU3FdqfgVoYrXarZvk1TLB3mj3WKa%2F%2FLCNhln4AyeGpxQVZwhHHl5YIelSnJP6Ppmnm2lPxSIq8oeuKByTRavaJuoqd3V7Kjg3Y7BSpLVCkgyUwOR5xyj2BfHSZtnTDk0nQPk248LTfEFxr%2FN8C%2F&X-Amz-Signature=478fb725e25a701d5484a3ef101017b818ee13b480a1bf8aa2aac90a576d8cf3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDTUVYV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCscMWyu5XjTauSvGL%2BnS%2Fo96bawGvuZNWLbpDiKAt6iAIgCcbeWUkO4Ug4dzXvv0Rt54M%2F4xiBgResy5iIgsjwDTMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDN7LL2b%2FO0MGekwO1yrcA7cjmWMs%2Bb1OTekQ5X7uFyiNbRFrRbWPMjNzAlD122yEL1swmpZRDp6%2B%2F8XBroOWb03VkRWKTIAA43CE%2BkUgoh%2B8WNVeKOMV8cWEj5Jbn%2Ffm%2BPYuBu%2BZEVEdQLNU%2BgTL4lI1nEuHOpW1A6qmpfbRKGY17vbTbkKbYD1CtPeWDGISwCPTkh5Ik0EI9v8wayxiKCJVSPmvz56vapU21ZYkURdwkWdhlQUl7md5TcILL2UQ6dgizGvpuaxGhyMKDMLHPWRLM0KZVF5HhOUWZ6e5e%2BMDG%2BzL1VrfYRzj%2Fqqo4HhHT6%2FR4I%2F45YDQg7MrWjyunizKmgEqnkgqXUIEnWGF72vUrSD5nu62wyd725eBiWHYNvXzpsaOHkT2xltPfi44g8J%2FTAPWSzm3rEnycHyitGXyU7G3IgeqA0H4ZKHjI0z2yKPYumhmcZjV4%2BCzUvkwg%2B3QzV7RcniR941KpDFqe7dUQui%2B5k3HdajSH05mmEXeaLdAU%2BO7rkJDpnVuy6guddmVsPkqcYEc1MYw2zwwiLJ1DzgKNi2o%2BG0DTdRfLqo%2BMZTNo7Y%2BtdkM%2F89Zj%2Fz3ReZJaLAkVbXtaEmnuAQi9q1sYojTAQPqlTtEqNXy261v0UqhuD01WCOIvSVRMKKgrb4GOqUBeocnEiAteEOzaybdA6lr1QgM237TL%2F2KxcMHo0l%2BbxpONVcnUGGQ8nxARSWx0TH1ayTRpm7ep%2Bd2V4cy%2BQy7O%2FIveKR8OSou%2BFGa57bc3Ln0fkICX8xVA0XYOZh%2BgaU9huFLSTo1hwQQAPH3LaxDqBsEdOxGU3MwIC%2BBQlph9zav%2BccSO6PMc6Ef0PoiD2h9uWgeC231HvH%2BX%2B2WgxoknkS0lLnZ&X-Amz-Signature=b3014cab49ae8cc156bc5b8be4b210adcd903abdc8b735bf274a1f3298a1ba51&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
