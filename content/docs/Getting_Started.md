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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5QREYW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEwYhmk3AO5CoM3yXsiSdELcjIautTeszj0JRF1ttuzuAiEAtDKb2RIQRp6kPwNWHhjwz%2BiXFuzw0eYe%2B%2FjChVhhM9oqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3c1q1o5QyK4D6loSrcA9gd%2FGy%2F1VBr3mYC155KTXyBrc5S%2FQpPkGhhN%2FPLz0T%2Bv2%2FUh8MmYCvhZH7wlFtUY9Oolc%2FyxC61qUzWg4qBkR8lGSu%2BoCkbQGHvjqjgUEiuZUEn1mzCxN6T%2FGMBZxAcmPVeCrgM9vkd0aSJY%2BpxryjlJPkQla4x%2Bdm5yotFav%2Bd%2BwUHqndVgPqfZs4pvZ6qLLYBKEItrrB8F6wBh1DLLliCcbi08o%2BJ02XC7dx9OX4VqvLLIBIKoutNMK6VmtaTEUhEDE5rBiC6btPgji396zuS1jfUN%2BXoCQ0kgVidRYZo9p8uSNeL5jZaAztRWIP9GYgFiz1PGa6Rw9ZtLOV%2BaaauXa1LKk3dy1Mt3leSllcHP23RMc89PCrOuSJRzhbT6WmcHjVWHQem5IFbobsH8dbiTICd84BqUJlUN0HBqZFex0ZORckT0sCmvgBvvBnWZ51BzLG355no3RITQfOJx0wt%2BqTRVOSD1Rr3GpLWpV7H3QvsFp%2BuanNM4D%2BUZeu3hk1s003yHE6KX5rsFtGWJwlg4jomFv09Q251mY5BslT5Jq%2FmUD8%2Fb58Wf24LgcGs%2FbyymxyJM1X5nm7eQosi305ICKheQwPTqVWbCi%2FTAEQCeqZYbDevTWdlf9LtMJDj278GOqUBRhUZko7skNW1Bc3iKUxhjMPz8J8MSY2xoo0IMAGXr5FFPP%2Fb7gNL8qGwHeZ%2BdGxsA61WIovz4O9yMwVks%2BnFcvE4kwyX%2FK4zecDaWCQxUJZuRFhj%2BAna0RHRyijfwSG8YxF2lB90irY6ZQl4iuI5024VuzEyUkFb96ayFnc%2Bur0R9cYDzzl4LBK5fqElcng4S0yrWIbLkeVvVmtb689HZ1kaLs8W&X-Amz-Signature=c8b6fc1b1af130b27886f1e91b4f168982189260875c8d0ea138dee40f6fdaf3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5QREYW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEwYhmk3AO5CoM3yXsiSdELcjIautTeszj0JRF1ttuzuAiEAtDKb2RIQRp6kPwNWHhjwz%2BiXFuzw0eYe%2B%2FjChVhhM9oqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3c1q1o5QyK4D6loSrcA9gd%2FGy%2F1VBr3mYC155KTXyBrc5S%2FQpPkGhhN%2FPLz0T%2Bv2%2FUh8MmYCvhZH7wlFtUY9Oolc%2FyxC61qUzWg4qBkR8lGSu%2BoCkbQGHvjqjgUEiuZUEn1mzCxN6T%2FGMBZxAcmPVeCrgM9vkd0aSJY%2BpxryjlJPkQla4x%2Bdm5yotFav%2Bd%2BwUHqndVgPqfZs4pvZ6qLLYBKEItrrB8F6wBh1DLLliCcbi08o%2BJ02XC7dx9OX4VqvLLIBIKoutNMK6VmtaTEUhEDE5rBiC6btPgji396zuS1jfUN%2BXoCQ0kgVidRYZo9p8uSNeL5jZaAztRWIP9GYgFiz1PGa6Rw9ZtLOV%2BaaauXa1LKk3dy1Mt3leSllcHP23RMc89PCrOuSJRzhbT6WmcHjVWHQem5IFbobsH8dbiTICd84BqUJlUN0HBqZFex0ZORckT0sCmvgBvvBnWZ51BzLG355no3RITQfOJx0wt%2BqTRVOSD1Rr3GpLWpV7H3QvsFp%2BuanNM4D%2BUZeu3hk1s003yHE6KX5rsFtGWJwlg4jomFv09Q251mY5BslT5Jq%2FmUD8%2Fb58Wf24LgcGs%2FbyymxyJM1X5nm7eQosi305ICKheQwPTqVWbCi%2FTAEQCeqZYbDevTWdlf9LtMJDj278GOqUBRhUZko7skNW1Bc3iKUxhjMPz8J8MSY2xoo0IMAGXr5FFPP%2Fb7gNL8qGwHeZ%2BdGxsA61WIovz4O9yMwVks%2BnFcvE4kwyX%2FK4zecDaWCQxUJZuRFhj%2BAna0RHRyijfwSG8YxF2lB90irY6ZQl4iuI5024VuzEyUkFb96ayFnc%2Bur0R9cYDzzl4LBK5fqElcng4S0yrWIbLkeVvVmtb689HZ1kaLs8W&X-Amz-Signature=1a8b6391e80ca371dfe18e5d7e2d3e2fb18e8ad50ec94bd2730481d8219afd10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2WAY5Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICDmcYlhjJPDK06Vv%2BaOnoSTOhY1xbkPGUK6VX0%2BfAM1AiB6QRKTlIPDwueGbOTB1C%2BsjPtttxDhpYQizNgje1bG%2FiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrz7QmKlgq%2B6AB5MQKtwDGg%2FV5uQBW14ev48lw3vf6pLLXIuXOjvCZZwvaXsrFJE%2Bf3HgmLH0gPUN3po8ApNrfwQ6g6yG2wKM8MNLQimHbaOJCPIuVArmkkduffVUBvZSz8P%2FPiTJffilYeJ5xig3Rh%2FCnjeYqPdK7hCblld9iV3pUnBZggiM%2Ftcstm0TWt4fsH%2B75QGMBaZGDKPFvefnbq0HQtVPkG%2FZlZqV7oFeqVqMTuiu92gNUcNwKD4ezFzGdQyX1mi7cnsdnT7ZuuOE27rfyJePCM7Ekyq%2BSYHQ%2FI0aw33Gq4l6LAWw1hFrZuAOX9kVioxgTl%2FesSGEWoJ%2BJS5dVfuVldm7Uc9iGfLCnTIgiVTCmjuyadRqBht4vZPcMMTUFLryig6dqfKMm9rY5jjMQc9CiHMBm%2FmQB2Z6NoTjG7YWfZUhd%2Fog2NnbaDqd61HOZOpZW%2BjqNQ2%2FtwatPqv%2FLdR9u9oV5g2Huvph%2FYZZ2J7WiavvZNNEG6kvtDCZH1RX2zVSmgkVtRnzhdAIKWWT4h%2FvXo1F3hyUysAPV848FAlGHEFz2SVq17VtG7sS%2BUqaDnSbRjWLiH2Ss8kTBpBbBABMGjQmlyBcLusw5aZuKdJVFr8VCPmUJrcpxxHmRiBhejBuf1FdkgMw0ePbvwY6pgHKbCkRg6FcLPqz18%2BVYvawcNFhSB0Yd%2F3ptAIMw6HBroG52h4QSB3VVnhQDz32lpu6xiPfZLPvYpdtaIyA2AZSxwVa%2Bp4Ny82fS%2Bv3SEJ05IXKqUi%2FpYZI6zI3B1AG6RtEswIbeGJa6M05RdvTWG%2FtQRitqglpiYWr3EAVH5JRsIawKyRpnrO7DiMt4NZlt7QxY7knjfEp96FNZiRz%2BLGIb0e8NLJt&X-Amz-Signature=af86e18ef106f89bf8a39e81bcda4e182f461158735e278dca0e57fc28106a48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6AVRNV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCyPxcC9ViSJBcn2c7LOJAJ5o3rGmKCer535Lz4jSIWlgIhAJAPdqbY1BD2l53AjMeVcyN5g8K3YfBZiK7BS%2FVpmwk2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmFGe3cxlCnX3munIq3APiGR3%2FUDFb6ZmdqvWQyCM%2BEps5iBioDetjIUrP7gnSrK2bmWCetzvZZC%2F7pCw%2FCMg6y4q3OQHuOVkK7krNpuhxzyk9dG%2Fxjxf%2BoF%2FZnwJRsI2NvbnpIDXXcaYnbEpJUoODjlSiOR%2FNK6mu0uJ9yt568Df85hR%2FaysiRHE%2Bzj%2Fcc0q3aL2UrKB7R%2Bul%2BcxrFLn3RK1q5hucAB9IYs5Xs044oke7Q56T7YcMlJ%2FD50LoiGp6bQi5gypTCCWlpnLYgK50wY%2BHfzFPw6Y9FiTG7WJDs0tHpN66fQ8mf7GCcOITBsqTIb4Rzkmx356ffqJu3Ixe8dgSf2puLltbG6MpZ2qZhakB47SjWPANFU%2FSrVByTM8zMkmhokeyg1WIUtUEN6TfqxVpX6C4EwArBXt8akJ5X1TP%2F65JO4qSFtnXTnpei4TZiBGIIVLLKxNYkXboJ%2FUZWR9Mon4lLDYPtQ51udBo5hObGmP7hn6%2FOqS1A0Hv4Sp4XOwbOPHn%2By9bprr5HjJgrHvy7AGO5Q8zvlIngFkZxRSN2AyoQP5hp97nxJI2nmDFtdl2Ewez6UmvLyH9TI8BuFrYcGOWnO8Le6rThhdjWk9qk0xW8jcnk77H8%2F6g0XFLVcpmz3uzcQItPzCd49u%2FBjqkASjQj42lwA3aD72MFt19luPFTkYEb%2F829YU93swm%2BZ2ElHopIsY2RIMuNTdhTxmAcIEdO6azYAUk%2FrwgllfECOEAXI2MtkGZZmbefSckak715NnA9ZkngzEEyv21%2B6nP%2FYvkC5BanuAQiPsfwb1rNcms6%2F1OvGrJ6da1iGg9v%2FNqtEltA7%2BZmVTmvhAMtogRqyS5gUeNvp%2FrEKM1y4qub9Fod3RP&X-Amz-Signature=cfc2852c94164dbedbf97e6a0cc90ba47a79865c95c6dec08b62da5c61a481d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5QREYW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEwYhmk3AO5CoM3yXsiSdELcjIautTeszj0JRF1ttuzuAiEAtDKb2RIQRp6kPwNWHhjwz%2BiXFuzw0eYe%2B%2FjChVhhM9oqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3c1q1o5QyK4D6loSrcA9gd%2FGy%2F1VBr3mYC155KTXyBrc5S%2FQpPkGhhN%2FPLz0T%2Bv2%2FUh8MmYCvhZH7wlFtUY9Oolc%2FyxC61qUzWg4qBkR8lGSu%2BoCkbQGHvjqjgUEiuZUEn1mzCxN6T%2FGMBZxAcmPVeCrgM9vkd0aSJY%2BpxryjlJPkQla4x%2Bdm5yotFav%2Bd%2BwUHqndVgPqfZs4pvZ6qLLYBKEItrrB8F6wBh1DLLliCcbi08o%2BJ02XC7dx9OX4VqvLLIBIKoutNMK6VmtaTEUhEDE5rBiC6btPgji396zuS1jfUN%2BXoCQ0kgVidRYZo9p8uSNeL5jZaAztRWIP9GYgFiz1PGa6Rw9ZtLOV%2BaaauXa1LKk3dy1Mt3leSllcHP23RMc89PCrOuSJRzhbT6WmcHjVWHQem5IFbobsH8dbiTICd84BqUJlUN0HBqZFex0ZORckT0sCmvgBvvBnWZ51BzLG355no3RITQfOJx0wt%2BqTRVOSD1Rr3GpLWpV7H3QvsFp%2BuanNM4D%2BUZeu3hk1s003yHE6KX5rsFtGWJwlg4jomFv09Q251mY5BslT5Jq%2FmUD8%2Fb58Wf24LgcGs%2FbyymxyJM1X5nm7eQosi305ICKheQwPTqVWbCi%2FTAEQCeqZYbDevTWdlf9LtMJDj278GOqUBRhUZko7skNW1Bc3iKUxhjMPz8J8MSY2xoo0IMAGXr5FFPP%2Fb7gNL8qGwHeZ%2BdGxsA61WIovz4O9yMwVks%2BnFcvE4kwyX%2FK4zecDaWCQxUJZuRFhj%2BAna0RHRyijfwSG8YxF2lB90irY6ZQl4iuI5024VuzEyUkFb96ayFnc%2Bur0R9cYDzzl4LBK5fqElcng4S0yrWIbLkeVvVmtb689HZ1kaLs8W&X-Amz-Signature=d7d8f1313963e73cdd68ae3d54c48c1b76cbf0155a579fbe907aa4671d40d01b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
