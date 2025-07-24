---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLLZOH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIA%2B48RkjFzl6noKtTUVW9KFRkv%2FbgQJ2wJA1hBI1l93gAiEAzUeOatEFEcVJdHywR0Uz5BBzieN0UWPc7a2wF7u46yYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLIJ%2BQ8OQV%2BC468g0SrcA7RvExZjxEJnY7Qu6sFgj8FBuC51hkPtfkLJMmdnLNLjDknNHH9Yw4BYuXCj6UIZCEGqmdmOxaWdP%2FcaSbZH48dvufEDxwzyK0HIOup4cdmOslemI6LYp%2FLmXF%2FdtNBCRiv1TdEB29pQzI1I9T5OSnsKcj7hZCuAR0Mv6S5M7U7Y2YEINDAnMDM6NhNHs41lq5UhZe%2FKnsSGprV4JA6kQ8W4BkPhGTzGLGoCJx9TcTkeAYTa36ECRjFxfxORJ1g5yVjrs6dPNBf6BiU9cVlkPESx7HrcKa8%2F%2Fd29uCRveXul1SOf8Lq%2BEV5rD%2FPh2TLxfRkbd42x%2BB03QIZ49sFP1wK3%2BsH7vT2NMVZO6PYh0jVCJk71u%2F2IH%2BRf2vvAAM%2BlHMoJL4fsafJdOtLmUqqeLFDXXj65RANRr9xPYimY7nLfYw3gkoKbIz8i34QxfH9syIepPFWfnpM1ity83kEcIELq9cHYak6Syzr%2BIbc6F%2FPIhWR7FNSv2kYM4tDXx5nrckTy6JhehzP32CuvtmwNKpHOt%2BavfLdTLqT7LHWfeYcQZjSqgEeL261ZV8rxoOvsTGEljaGegRAWxdTv8SZtIljn4TkpCYlZf1skQuyBTb6YzvukORyBVS8ZcazIML3TicQGOqUBczADpszV0Jr2yv5Or0CfX23IpI1VanVABOlGOTonkOY3Q%2Fegl9xachyqC2bD86nwpiTiJir4FjsAKWdbndLYV%2BFB9dyaGo1OWgPDAA8CVLV46%2Bkp1FGJTr8f0BQBtBbkQVLPqK%2BL1tk%2FamRCHLx5Sp34x8jqtGGa8UsV%2B9v1DkG%2B4T2pWIiuGsGTDxVBEXul8X35nSimVoiuGZI4lovLCkIzSeQn&X-Amz-Signature=a6cd71d8a229c0f9862f0831ca0f7085307a0de34edcf646dda21055d21baef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLLZOH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIA%2B48RkjFzl6noKtTUVW9KFRkv%2FbgQJ2wJA1hBI1l93gAiEAzUeOatEFEcVJdHywR0Uz5BBzieN0UWPc7a2wF7u46yYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLIJ%2BQ8OQV%2BC468g0SrcA7RvExZjxEJnY7Qu6sFgj8FBuC51hkPtfkLJMmdnLNLjDknNHH9Yw4BYuXCj6UIZCEGqmdmOxaWdP%2FcaSbZH48dvufEDxwzyK0HIOup4cdmOslemI6LYp%2FLmXF%2FdtNBCRiv1TdEB29pQzI1I9T5OSnsKcj7hZCuAR0Mv6S5M7U7Y2YEINDAnMDM6NhNHs41lq5UhZe%2FKnsSGprV4JA6kQ8W4BkPhGTzGLGoCJx9TcTkeAYTa36ECRjFxfxORJ1g5yVjrs6dPNBf6BiU9cVlkPESx7HrcKa8%2F%2Fd29uCRveXul1SOf8Lq%2BEV5rD%2FPh2TLxfRkbd42x%2BB03QIZ49sFP1wK3%2BsH7vT2NMVZO6PYh0jVCJk71u%2F2IH%2BRf2vvAAM%2BlHMoJL4fsafJdOtLmUqqeLFDXXj65RANRr9xPYimY7nLfYw3gkoKbIz8i34QxfH9syIepPFWfnpM1ity83kEcIELq9cHYak6Syzr%2BIbc6F%2FPIhWR7FNSv2kYM4tDXx5nrckTy6JhehzP32CuvtmwNKpHOt%2BavfLdTLqT7LHWfeYcQZjSqgEeL261ZV8rxoOvsTGEljaGegRAWxdTv8SZtIljn4TkpCYlZf1skQuyBTb6YzvukORyBVS8ZcazIML3TicQGOqUBczADpszV0Jr2yv5Or0CfX23IpI1VanVABOlGOTonkOY3Q%2Fegl9xachyqC2bD86nwpiTiJir4FjsAKWdbndLYV%2BFB9dyaGo1OWgPDAA8CVLV46%2Bkp1FGJTr8f0BQBtBbkQVLPqK%2BL1tk%2FamRCHLx5Sp34x8jqtGGa8UsV%2B9v1DkG%2B4T2pWIiuGsGTDxVBEXul8X35nSimVoiuGZI4lovLCkIzSeQn&X-Amz-Signature=f040b9b6e597a5757382d698501accd336f9c288f3e0b8555a1ac88262bb17ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLLZOH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIA%2B48RkjFzl6noKtTUVW9KFRkv%2FbgQJ2wJA1hBI1l93gAiEAzUeOatEFEcVJdHywR0Uz5BBzieN0UWPc7a2wF7u46yYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLIJ%2BQ8OQV%2BC468g0SrcA7RvExZjxEJnY7Qu6sFgj8FBuC51hkPtfkLJMmdnLNLjDknNHH9Yw4BYuXCj6UIZCEGqmdmOxaWdP%2FcaSbZH48dvufEDxwzyK0HIOup4cdmOslemI6LYp%2FLmXF%2FdtNBCRiv1TdEB29pQzI1I9T5OSnsKcj7hZCuAR0Mv6S5M7U7Y2YEINDAnMDM6NhNHs41lq5UhZe%2FKnsSGprV4JA6kQ8W4BkPhGTzGLGoCJx9TcTkeAYTa36ECRjFxfxORJ1g5yVjrs6dPNBf6BiU9cVlkPESx7HrcKa8%2F%2Fd29uCRveXul1SOf8Lq%2BEV5rD%2FPh2TLxfRkbd42x%2BB03QIZ49sFP1wK3%2BsH7vT2NMVZO6PYh0jVCJk71u%2F2IH%2BRf2vvAAM%2BlHMoJL4fsafJdOtLmUqqeLFDXXj65RANRr9xPYimY7nLfYw3gkoKbIz8i34QxfH9syIepPFWfnpM1ity83kEcIELq9cHYak6Syzr%2BIbc6F%2FPIhWR7FNSv2kYM4tDXx5nrckTy6JhehzP32CuvtmwNKpHOt%2BavfLdTLqT7LHWfeYcQZjSqgEeL261ZV8rxoOvsTGEljaGegRAWxdTv8SZtIljn4TkpCYlZf1skQuyBTb6YzvukORyBVS8ZcazIML3TicQGOqUBczADpszV0Jr2yv5Or0CfX23IpI1VanVABOlGOTonkOY3Q%2Fegl9xachyqC2bD86nwpiTiJir4FjsAKWdbndLYV%2BFB9dyaGo1OWgPDAA8CVLV46%2Bkp1FGJTr8f0BQBtBbkQVLPqK%2BL1tk%2FamRCHLx5Sp34x8jqtGGa8UsV%2B9v1DkG%2B4T2pWIiuGsGTDxVBEXul8X35nSimVoiuGZI4lovLCkIzSeQn&X-Amz-Signature=1ad5e7f9627b1a80c3490d44549444bbc1deb21396cc06e3b3006543655016f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NYMWGJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGjfO4JHBvsvW8hSqL%2FZelyDebedQ9EcJSWtlgMZC2aPAiBVfbwWHo9JVx7CV%2B5wl2%2BMSbyqrJ54bBtqGIQyzEP6eSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMpDs%2FcJMuBFCtPw3HKtwDl1mICVUuQg%2FKbIM1lbJG%2BK4lSIGwiUEOK3oB%2BnuFmDfiCjrPc3bdHzIq3vTbuuTokeylUFsYz63I%2FV738tUwGl82QNp3eTe4zQ0R3wbX%2FpS7AqUsrBh7wFRyf2DZyGAFAOKYT%2FBA4Ams7XQ9WeOsf%2ByjWXw0KWSbIC0nBYru3FdkHvEQ62saQZ5ulPKMcrlOaZNF17O0fcJlM7lWDYnVkM0ZNRVc9rwvfDRw3awsscanzdf8oHYweQYD0TkvI6qAQC4IGFjjQ%2B3Ewju3kN%2B7y0Tpb7FnmzSkbyGkZtsskUDr85mEt7R2fkhLs5eikKoOWnzwt27g7EQ2Zyz41EYwIGPvpmLXUwU9HxSpJ9%2FHWaZr9SWQ5toiLRUAN0YhT7c8ssTVC1RPVzMhAQ8N0cEEWzk9o3R5vdlJu9%2FeMwT8TuGPVe6sohoqFGkEAe9Dn9R71oCsxzeGuhm6F5zNMXJ1bmQztb%2F0Hlr3u7uTmItS7dXve%2BOWzJ88EAZPz14nNXmk6cS3latsJShS%2FV5EwxXeDCOb3tWMjXfW0tHg9HY5YZD42KqMmlqXmacR543SCM96exWhlZPxRq56qIQAuECBgxbUMmB8mNbLeQ%2Fc0n5OBbS5HjWvYUu25Px7VO0w%2BdOJxAY6pgEC%2Bsqq0%2FYTDpzY7cT7Pvhqowl3S4ikTFnna17p3wp4IjtpJI9rTGSXIshl6vR5iUkbHAbPUcWC1iXOiNhagtTtOosqEL9aCAXKv%2FNs2X0a2u4r6eM00WMgJpfp%2BoOIO6%2FYeOYVBRzRsoSuHCIDU0vZzJ24rs1XROJUeZD6GZ0bFl583wWP%2BVLyl2mXflMAIaIQCyjIgmG76UnZio3lOgM%2F3Kd55nwR&X-Amz-Signature=9ba576eec0a8f8a5fbb85a1b931774e0420a29f61bf20e5fb1345d41b15da1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ5STKYB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAIjvuHf5f7QLGaLarKqrEy7wpa9ggua1aNIStfhFTvSAiBOGH%2FC4e%2BqRqiSNqHEGamd8gDZYCnip2ZszwPTUnoutCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtV9AUdWJprqBqJdtKtwDIS85j1ZXerUdzu0ZZwO68PF%2Bz2kbezjRJy%2F8hikAx0XDNW5BN8eBTJ7WsTmJ4Qji8u872xxBknHyEwyY5BUTR83PC4GEEDuLhONCXfyeZdmbJSa%2BGok1Ct13O2TqM0lYSImydRMR04zrLaA8XTmHvbRyD3Py%2BuG%2B%2FejNgeZrkTEvNMqXwUBqt1BwDnDWwHXPtBbBC96yjtXrEb0Kxd%2B%2FTI1PN9bIGofvSQnckTpzu0RH8Mn9sWM0HS6Ouh7oPo9djSGC%2BZ7%2BSeMBJRJgh1EvuMeACLkUKgam85jSzUyp8AwiMbjxTR9fKNtswmMMgZqrkKs25tHIPb1VNuGNBZSWMccP1BuojBkYv%2BlX3Ve10%2FFiTLZHUCU4FPD%2Fnxka73aQloNu0gi%2BSiih5ykufGRjVyQ%2FG3NsPY7QffVnaSLTfQzTl4PYwyFaK%2FWNOm7WzdUEX2%2BQXwOdqqeLUwBns8nrfQuX5YRcaeYb1tixN%2F7fgtJQaOj7rzyH4ewwkFgMA32DDPIXHUlDdYMTyqMwKNzwfJFz04U3wjijVW%2Bmd7lSgZFrt8lbq6qL5S9kgP1ERwJj%2Fu2OLLfBmwxZ8SKN4guN%2FZSE%2BlsLOKOjSBfpD0I3MlHu3nfYV4usgflkwP4wmtSJxAY6pgE%2Fc1R2fneHURaYm7zyuJDgfbXgc9tkfoHZp3weoagvuZwu35VEkhzT5WYRwkSr1RYRpCF%2BP1jYiOOz5MLGLI841pjXPe2AYxEunqnwhGo3ZnTv04I3gn93fb3G%2BXR9BEKFHm%2FySbIRfdObqLRPxBFgwAPXc1CaQVqMP1W%2Fjkc3KuScS20RmIAef5wbIjeSGLuy1ujRCXyAKGYedlzL6Nlyd8a9Qo9s&X-Amz-Signature=234b0efa5f24b8638c00859c58f58d5aeb74ec1152bca433f509c7e3822f5876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLLZOH6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIA%2B48RkjFzl6noKtTUVW9KFRkv%2FbgQJ2wJA1hBI1l93gAiEAzUeOatEFEcVJdHywR0Uz5BBzieN0UWPc7a2wF7u46yYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLIJ%2BQ8OQV%2BC468g0SrcA7RvExZjxEJnY7Qu6sFgj8FBuC51hkPtfkLJMmdnLNLjDknNHH9Yw4BYuXCj6UIZCEGqmdmOxaWdP%2FcaSbZH48dvufEDxwzyK0HIOup4cdmOslemI6LYp%2FLmXF%2FdtNBCRiv1TdEB29pQzI1I9T5OSnsKcj7hZCuAR0Mv6S5M7U7Y2YEINDAnMDM6NhNHs41lq5UhZe%2FKnsSGprV4JA6kQ8W4BkPhGTzGLGoCJx9TcTkeAYTa36ECRjFxfxORJ1g5yVjrs6dPNBf6BiU9cVlkPESx7HrcKa8%2F%2Fd29uCRveXul1SOf8Lq%2BEV5rD%2FPh2TLxfRkbd42x%2BB03QIZ49sFP1wK3%2BsH7vT2NMVZO6PYh0jVCJk71u%2F2IH%2BRf2vvAAM%2BlHMoJL4fsafJdOtLmUqqeLFDXXj65RANRr9xPYimY7nLfYw3gkoKbIz8i34QxfH9syIepPFWfnpM1ity83kEcIELq9cHYak6Syzr%2BIbc6F%2FPIhWR7FNSv2kYM4tDXx5nrckTy6JhehzP32CuvtmwNKpHOt%2BavfLdTLqT7LHWfeYcQZjSqgEeL261ZV8rxoOvsTGEljaGegRAWxdTv8SZtIljn4TkpCYlZf1skQuyBTb6YzvukORyBVS8ZcazIML3TicQGOqUBczADpszV0Jr2yv5Or0CfX23IpI1VanVABOlGOTonkOY3Q%2Fegl9xachyqC2bD86nwpiTiJir4FjsAKWdbndLYV%2BFB9dyaGo1OWgPDAA8CVLV46%2Bkp1FGJTr8f0BQBtBbkQVLPqK%2BL1tk%2FamRCHLx5Sp34x8jqtGGa8UsV%2B9v1DkG%2B4T2pWIiuGsGTDxVBEXul8X35nSimVoiuGZI4lovLCkIzSeQn&X-Amz-Signature=69e4f2d1d6f4db011bfe02ff7c3b7adcfe26c6f6042fb877db97f827f0556630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
