---
sys:
  pageId: "3b7f0872-f00d-41cf-857e-646938c49bd0"
  createdTime: "2024-07-09T00:05:00.000Z"
  lastEditedTime: "2025-04-22T21:53:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Setting up taproot.md"
title: "Setting up taproot"
date: "2025-04-22T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 122
toc: false
icon: ""
---

### Offical setup guide: [https://gitlab.com/aruw/controls/taproot#development-guide](https://gitlab.com/aruw/controls/taproot#development-guide)

A guide made by a rose student:  [https://docs.google.com/presentation/d/1WCKfnT1pG3GdZT9Rh7dKZLlVS0-GOQzeXyLNWM2VdPk/edit?usp=sharing](https://docs.google.com/presentation/d/1WCKfnT1pG3GdZT9Rh7dKZLlVS0-GOQzeXyLNWM2VdPk/edit?usp=sharing)

Wiring ST-link

<details>
  <summary>{{< markdownify >}}what is an st-link??{{< /markdownify >}}</summary>
  
TODO:

</details>



## Flashing:

`ctrl+shift+B`

<details>
  <summary>{{< markdownify >}}what is flashing?{{< /markdownify >}}</summary>
  
TODO:

</details>



## Setting up Printing(Serial)

## Debugging with st-link: [https://gitlab.com/aruw/controls/taproot/-/wikis/Debugging-With-STLink](https://gitlab.com/aruw/controls/taproot/-/wikis/Debugging-With-STLink)

TLDR;

TODO:

## Debugging with J-link: [https://gitlab.com/aruw/controls/taproot/-/wikis/Debugging-With-JLink](https://gitlab.com/aruw/controls/taproot/-/wikis/Debugging-With-JLink)

TLDR;

TODO:

## Fixing some random Linux `No module named artifact` error:

while inside MCBV2

```shell
pip3 install pipenv
cd MCB-project
pipenv install
scons build
```

if you get this error:

```text
SConsEnvironmentError: No module named artifact:
```

run: (bc CRLF to LF, windows linux stuff)

```shell
rm -rf taproot
lbuild build
```
