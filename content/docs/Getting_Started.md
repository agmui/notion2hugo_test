---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK5NHCW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF4UDVU1TpWYadvBqP%2BWTo8uxNd01zAhE3pKNyTz9qZ9AiBdtDdLSzuJEiP4O5imlJwQ%2FIwPfI6NgXdj4yk8LpvToCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Hksd4Bqb2D4FbMwKtwDYsaIl0aXFoc0dS3p4j2uSWMGcJMUOqfFvv%2B3MUL6zK9PxeoV1%2Bm792ZDkpaCYntTao%2B2Ty2tRjDOUkRdk13kzbPXPmelZmVAbPuNnC32eUORLEeUXuCqm%2Fm5hnwJFZxLaSDwmQCrPd7hr30yndFuVkAFic9dujPiM1FB%2FKM28bOph9VDO1fVT%2BdhUd0RQBHqhZPZwkoUXd4xMGhcAISmx5z8gOwzLeJinenyIu8NwAyFHLvAy7kTJiANugnGKm2MGsW8he6RLHNoGvUpIrPjjs6KZA%2FvoeuoJksCXwHt7Z5e1pzCNm88LsxbjpHkqGHWgCdoUEakdOftPda9zw11BIzzqEFdkmIMAROG9ZrGy0W7PrlOzDXJa0bgcnVNFxSMbU23obXfqSGb8DkTWx8g4gFl%2BWS9JYf9j%2BGpjdXbTktjDd8Eb5deWvGRO7aXtqFIRZ45zodz4Y1GW4RNcMMuWw81rsACg9sigBP3vTBj26fqg8e8ZnnMpSpdU8VD2cdoRC%2B03lrZVuAkbnGKb8nasFbXAyHkFXOOsW2cp1sI1S%2Fgd85kaRWckZqYmGHn6xFPTsNFNPX8YopPy4TIRbWRVdnYzMdElvHdG4IOe18EgiNqq72hGIhcQjfKd90wrL%2FGvgY6pgGvShjVsTgaVda1XxH%2FeEFKHSFaJI2vV4BVmgIVWg0YDT3rJ%2FsXRMc9LEyihoBRBPG8Nq9pu%2BK%2FvdobGyGL65cBfV302Wsj62kGdFhT0ZUf0DTfNcXjxWbCj8QZxVcqRedlxNDOeV2YkvO%2FuxFzV6iuPobhteJuCCKFJz7xsx%2F0b73ekfp6m99vLgX9%2BDqDYjAdWp80ccnPsPBXednzsNqqxuMqeS2p&X-Amz-Signature=b282e31bffc305122866154212a4a4f63ca97702d3b4258ab0adead45240beb8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK5NHCW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF4UDVU1TpWYadvBqP%2BWTo8uxNd01zAhE3pKNyTz9qZ9AiBdtDdLSzuJEiP4O5imlJwQ%2FIwPfI6NgXdj4yk8LpvToCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Hksd4Bqb2D4FbMwKtwDYsaIl0aXFoc0dS3p4j2uSWMGcJMUOqfFvv%2B3MUL6zK9PxeoV1%2Bm792ZDkpaCYntTao%2B2Ty2tRjDOUkRdk13kzbPXPmelZmVAbPuNnC32eUORLEeUXuCqm%2Fm5hnwJFZxLaSDwmQCrPd7hr30yndFuVkAFic9dujPiM1FB%2FKM28bOph9VDO1fVT%2BdhUd0RQBHqhZPZwkoUXd4xMGhcAISmx5z8gOwzLeJinenyIu8NwAyFHLvAy7kTJiANugnGKm2MGsW8he6RLHNoGvUpIrPjjs6KZA%2FvoeuoJksCXwHt7Z5e1pzCNm88LsxbjpHkqGHWgCdoUEakdOftPda9zw11BIzzqEFdkmIMAROG9ZrGy0W7PrlOzDXJa0bgcnVNFxSMbU23obXfqSGb8DkTWx8g4gFl%2BWS9JYf9j%2BGpjdXbTktjDd8Eb5deWvGRO7aXtqFIRZ45zodz4Y1GW4RNcMMuWw81rsACg9sigBP3vTBj26fqg8e8ZnnMpSpdU8VD2cdoRC%2B03lrZVuAkbnGKb8nasFbXAyHkFXOOsW2cp1sI1S%2Fgd85kaRWckZqYmGHn6xFPTsNFNPX8YopPy4TIRbWRVdnYzMdElvHdG4IOe18EgiNqq72hGIhcQjfKd90wrL%2FGvgY6pgGvShjVsTgaVda1XxH%2FeEFKHSFaJI2vV4BVmgIVWg0YDT3rJ%2FsXRMc9LEyihoBRBPG8Nq9pu%2BK%2FvdobGyGL65cBfV302Wsj62kGdFhT0ZUf0DTfNcXjxWbCj8QZxVcqRedlxNDOeV2YkvO%2FuxFzV6iuPobhteJuCCKFJz7xsx%2F0b73ekfp6m99vLgX9%2BDqDYjAdWp80ccnPsPBXednzsNqqxuMqeS2p&X-Amz-Signature=ea99205a538d120233afb6e29dd401b2700fb80ce64d8403c884cb3b7d5a4e38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH6FYFQS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBocC358aygHUW2t%2B7QnFyPmVISzN%2FpchonzGjdMoZ7UAiAP4yVUnI4hsoVV291EKxzEvmxGIOabtupAA9Yq%2FqxryiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92FxYE%2FhYnxVh0QAKtwDNpkMvqHysOrmCte%2FeG8yWrqEVu1ooIEpOQMRd9OLdBIJrsb0zFRgOq78OmFJPhAvs7d706QVBx5Dy20J1rGBSXNWeHTvpOBreiSJYJGSMHVP5SXAFiBQemJY5Jpg1I5gLYL03UZV8LA7qBiBBIfCbh%2FZVNu5WJuzNy803UR%2Fs4GNLqCHI20AOILaNIbhWyLnC5v9LRrTJm2giUsK3SejOOn6I%2BJIlGBrC0GkHbxlpTDKKe6gENhlyzoBa9ubgHXvwmvtPgDDbtPGFRDGhJ5%2FOrSwevFowxWt2C2%2FTCtEydo7R9UWrSItMJdr4W9W%2BWXUNR75xYI0XJwJJF43UlhiEv%2F4ul9iaQ1Sz0GoqOK8BwoP4kwIwBApuQdz64ud6mkmkHKkXSN6%2FaGscLnAOzLZZZRjd3vxvsNkE%2FDeoSFcHkrSM6Ziqk84hQOW7FAb4MAmPYQB5UnecIvF850b5iUm1BT9Ms4LJ6pzcKBLU8ws86WfLN8TvyIH%2BVfcppbbnNaq4FKEvTxUl54yeJ83R0d7IcH0ar2AFtxW7%2Fp8AY5b1I3WRRKROm0eRM4AjALhPq751DAUbab2CkmLim1m4HUeEI6Xh8yWElT0V%2Bg8Ey2tPOE9hygGzPWZTvIcYuswo7%2FGvgY6pgE3ilhFgEo3Ai2cNifT37Sp1MidP85MPWah%2BrYxM5%2B6iQWR5aYKzIvJ0WWLAfEpheWKRODnnbV8Hy7itJ0k%2B0QUN9U5QNt8vL1tZuqjNNlOi5pYe0Ujc1zp2XT2unS9ve6HEgxb0XigFfhquj%2F3hK2prFUghs23qAKZ7OtRitaJ9jNhq1FCoxaNIbSxdziv%2B2eTalL3griJKX5xEAJNV3R0PLDvyffl&X-Amz-Signature=7fae47b0e15646d3812d2d0577f7d08a5525791834a9cbb83339347ab32eb08f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DQW4FS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHigOJDKwsj1fD%2FWAPuZ%2FGWw2s1fzFw%2FVk0fu1dxZqIUAiEAnTAskCILKyKm31vE8oWEy0OejBMqW5LDImge9Z3i9wgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B9HiLtZW%2FhZZT9vircA%2Bc5E6lRKRWS9xfjlYBImhUY0IDvl9VY5uqRIXOuI4WZHi1zOMH4cXNyikT9W3Aeoe%2F3s8ZwHYWvnJvvJuxJKNZp6ZajznHBAXn06pQAfePLOASvRDuqPWgdE%2BcIjaM5naHAmrkLd3xeBJstvM45K1D28%2BFy8hwN7fv3ZZ%2BInRPw6NK3K4h%2BGC0I3V0U%2BJnm5Xkv%2FcYO1i3wMLD1WXlkv9O9wJmBxgd44b5EUIuDWE2GA5nCg3Vhybc0WBPWE0AgqWCMNFpf722zCkM%2BVI0Sf7oHziqCu6njwLx3B3tUaQZC6sSDRSFsfxTZBPvC%2BZprMkQKKeAr5M99TeuBPb66dM5qEmS9tuDg0euyRWu83lkK5kyz4EnZhS2lSTK6NO%2BjDIg1XXKrh0IkXvMMM%2BceHEgTdn0HE3c84rO3i4JaEp8e3ev8kmOcE9oIm5b%2BKiPdFwwP6nQpB0mecebjgUUmU72%2Bm3y2RLIfIiX45DIuYQA3DVqc8ROGNqOmVapV4Cnx1%2Bbau2SvEriTlmDd7pHg%2Feye2RiQA5EWMO2tyojpJymVY7BdoDz3nPs%2BbKp3bfH8wPo5YnbvnfZNNtOnFmvcBgB5eXfny2sXqm1MlxUIfg11Bclg2cROowXjGBRhMIfAxr4GOqUBPpqPqsTV2uzO5WEiQChT7jyQCLsfThLgZbEJoH9oazFTqhP3UFXSz0bCDDJcLPZpwWHcxM6vDv%2Fnv4PkHVv3t4N7TsoY3INutMBX6%2F5BysZNNe5HY6U9N32b3l3KooWfRrdZuUJBk2iL7Ue5AvLOalrsF3izM8xYspv73E%2Fm1PyyUVf8XCzgP1W73IVdvDuO5hMNywC5Qd1sGX4unGLixOqaSTd5&X-Amz-Signature=7470009178b7bf97bb49b5c376ee604ea4b96a40e7bfadf8a3ceed7fd9984add&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK5NHCW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF4UDVU1TpWYadvBqP%2BWTo8uxNd01zAhE3pKNyTz9qZ9AiBdtDdLSzuJEiP4O5imlJwQ%2FIwPfI6NgXdj4yk8LpvToCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Hksd4Bqb2D4FbMwKtwDYsaIl0aXFoc0dS3p4j2uSWMGcJMUOqfFvv%2B3MUL6zK9PxeoV1%2Bm792ZDkpaCYntTao%2B2Ty2tRjDOUkRdk13kzbPXPmelZmVAbPuNnC32eUORLEeUXuCqm%2Fm5hnwJFZxLaSDwmQCrPd7hr30yndFuVkAFic9dujPiM1FB%2FKM28bOph9VDO1fVT%2BdhUd0RQBHqhZPZwkoUXd4xMGhcAISmx5z8gOwzLeJinenyIu8NwAyFHLvAy7kTJiANugnGKm2MGsW8he6RLHNoGvUpIrPjjs6KZA%2FvoeuoJksCXwHt7Z5e1pzCNm88LsxbjpHkqGHWgCdoUEakdOftPda9zw11BIzzqEFdkmIMAROG9ZrGy0W7PrlOzDXJa0bgcnVNFxSMbU23obXfqSGb8DkTWx8g4gFl%2BWS9JYf9j%2BGpjdXbTktjDd8Eb5deWvGRO7aXtqFIRZ45zodz4Y1GW4RNcMMuWw81rsACg9sigBP3vTBj26fqg8e8ZnnMpSpdU8VD2cdoRC%2B03lrZVuAkbnGKb8nasFbXAyHkFXOOsW2cp1sI1S%2Fgd85kaRWckZqYmGHn6xFPTsNFNPX8YopPy4TIRbWRVdnYzMdElvHdG4IOe18EgiNqq72hGIhcQjfKd90wrL%2FGvgY6pgGvShjVsTgaVda1XxH%2FeEFKHSFaJI2vV4BVmgIVWg0YDT3rJ%2FsXRMc9LEyihoBRBPG8Nq9pu%2BK%2FvdobGyGL65cBfV302Wsj62kGdFhT0ZUf0DTfNcXjxWbCj8QZxVcqRedlxNDOeV2YkvO%2FuxFzV6iuPobhteJuCCKFJz7xsx%2F0b73ekfp6m99vLgX9%2BDqDYjAdWp80ccnPsPBXednzsNqqxuMqeS2p&X-Amz-Signature=5395e1399c42cadec0feabebda5c752e881de244d256f72063e8746a4feef6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
