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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYCCHSC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEBhiFolECgz0hA%2FtzWCJ4Rt1lBuGzpFq7xKAUWH63guAiBxB9%2BNYuueNE04HPeCFDJCHboJDo%2FPbYSvoUA8LO1mYir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdcjiugWH4K7VoPHkKtwDbFQMk8iI7uw72dPXjNlcYrmsefYeSdXxJs2Yw7YC4YEsYfzCpG%2Bbwf2BDo9pBg3ReRSSsu%2FR8pBTT2YZOmw0Cx9IvH6hRpmWhi4GSkvOH38%2B3OhkuRxag9IWfQlfnb9eFMx1Ddrrug8EH3il1hzz5UX8s6I%2F3U%2BsjyziRkpjOCoAtGxXDkGdTl04anH1soHxaSvzHIMwmNvk4NSrpHyAwY1V%2BIsL8ZKQatlEJ9CNrM2chlttFmUPIoBTzKlUknqGchAzvvCihFVbaWNDCVmrUGvPWVUn7vuQpcYd3ZjT8Rj5CY5cqChQap4pnXwkC1xelmA0GY5x%2FqUzD6bFClXfCNE8L3zbbOZEB9ijwmlrsgrSYUWpgQzYH%2FBlRb2yt0F9HS%2BLR5OVs7TA7dDNrWvibXrUaobLDWBbr%2BDMcHlxfomoAJy7IX%2FCk9SYNzgwZ%2FRMFlt%2B%2BnxJSZwSkSTBbFq%2FiK6m6i1YekWD4Z7DN2X5gBO7G8uyoTkFPPe%2Fp6aM15r7JBr5EW46i9H8WI5DxntXV9CBkT02VLVC1f6%2Bvz6eTtiQSCiOWZ%2BIXh2SA1CHzjIr%2FX7qu0lPwj6vtgdyyipdWCYvJHGyDLaS%2FP7isqwJ%2BgIM%2FXPZGkPI1e049sYwy%2Br%2BwQY6pgHj4tKg5%2B5GPxjr4oPl15a2FR%2BPityH11wKwUU2RjjUGyhC5F4v2pNcI8IS4Rwt0BNlgY43j8UGV1tYTNKJPEzbf7QC37mSG0atG23jhasytUh5754dzhEZuWpdqMXVj%2FGLG4L%2BVRmv%2BGmLnxiCNXS9yYtAHBn%2BSC3XgFhR6hryOzuh%2F1BJZRNMzOinW4r%2BrDefO%2FdjrkfET6uOf2TViCxcKJAzg77c&X-Amz-Signature=4f1005484ff289c571c606af796797d1d1b92f2643257e891d7d1e584c57db1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYCCHSC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEBhiFolECgz0hA%2FtzWCJ4Rt1lBuGzpFq7xKAUWH63guAiBxB9%2BNYuueNE04HPeCFDJCHboJDo%2FPbYSvoUA8LO1mYir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdcjiugWH4K7VoPHkKtwDbFQMk8iI7uw72dPXjNlcYrmsefYeSdXxJs2Yw7YC4YEsYfzCpG%2Bbwf2BDo9pBg3ReRSSsu%2FR8pBTT2YZOmw0Cx9IvH6hRpmWhi4GSkvOH38%2B3OhkuRxag9IWfQlfnb9eFMx1Ddrrug8EH3il1hzz5UX8s6I%2F3U%2BsjyziRkpjOCoAtGxXDkGdTl04anH1soHxaSvzHIMwmNvk4NSrpHyAwY1V%2BIsL8ZKQatlEJ9CNrM2chlttFmUPIoBTzKlUknqGchAzvvCihFVbaWNDCVmrUGvPWVUn7vuQpcYd3ZjT8Rj5CY5cqChQap4pnXwkC1xelmA0GY5x%2FqUzD6bFClXfCNE8L3zbbOZEB9ijwmlrsgrSYUWpgQzYH%2FBlRb2yt0F9HS%2BLR5OVs7TA7dDNrWvibXrUaobLDWBbr%2BDMcHlxfomoAJy7IX%2FCk9SYNzgwZ%2FRMFlt%2B%2BnxJSZwSkSTBbFq%2FiK6m6i1YekWD4Z7DN2X5gBO7G8uyoTkFPPe%2Fp6aM15r7JBr5EW46i9H8WI5DxntXV9CBkT02VLVC1f6%2Bvz6eTtiQSCiOWZ%2BIXh2SA1CHzjIr%2FX7qu0lPwj6vtgdyyipdWCYvJHGyDLaS%2FP7isqwJ%2BgIM%2FXPZGkPI1e049sYwy%2Br%2BwQY6pgHj4tKg5%2B5GPxjr4oPl15a2FR%2BPityH11wKwUU2RjjUGyhC5F4v2pNcI8IS4Rwt0BNlgY43j8UGV1tYTNKJPEzbf7QC37mSG0atG23jhasytUh5754dzhEZuWpdqMXVj%2FGLG4L%2BVRmv%2BGmLnxiCNXS9yYtAHBn%2BSC3XgFhR6hryOzuh%2F1BJZRNMzOinW4r%2BrDefO%2FdjrkfET6uOf2TViCxcKJAzg77c&X-Amz-Signature=ae101d9151043df023793f3195aa78447051617a9c1d0afe7cd9768102c15969&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYCCHSC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEBhiFolECgz0hA%2FtzWCJ4Rt1lBuGzpFq7xKAUWH63guAiBxB9%2BNYuueNE04HPeCFDJCHboJDo%2FPbYSvoUA8LO1mYir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdcjiugWH4K7VoPHkKtwDbFQMk8iI7uw72dPXjNlcYrmsefYeSdXxJs2Yw7YC4YEsYfzCpG%2Bbwf2BDo9pBg3ReRSSsu%2FR8pBTT2YZOmw0Cx9IvH6hRpmWhi4GSkvOH38%2B3OhkuRxag9IWfQlfnb9eFMx1Ddrrug8EH3il1hzz5UX8s6I%2F3U%2BsjyziRkpjOCoAtGxXDkGdTl04anH1soHxaSvzHIMwmNvk4NSrpHyAwY1V%2BIsL8ZKQatlEJ9CNrM2chlttFmUPIoBTzKlUknqGchAzvvCihFVbaWNDCVmrUGvPWVUn7vuQpcYd3ZjT8Rj5CY5cqChQap4pnXwkC1xelmA0GY5x%2FqUzD6bFClXfCNE8L3zbbOZEB9ijwmlrsgrSYUWpgQzYH%2FBlRb2yt0F9HS%2BLR5OVs7TA7dDNrWvibXrUaobLDWBbr%2BDMcHlxfomoAJy7IX%2FCk9SYNzgwZ%2FRMFlt%2B%2BnxJSZwSkSTBbFq%2FiK6m6i1YekWD4Z7DN2X5gBO7G8uyoTkFPPe%2Fp6aM15r7JBr5EW46i9H8WI5DxntXV9CBkT02VLVC1f6%2Bvz6eTtiQSCiOWZ%2BIXh2SA1CHzjIr%2FX7qu0lPwj6vtgdyyipdWCYvJHGyDLaS%2FP7isqwJ%2BgIM%2FXPZGkPI1e049sYwy%2Br%2BwQY6pgHj4tKg5%2B5GPxjr4oPl15a2FR%2BPityH11wKwUU2RjjUGyhC5F4v2pNcI8IS4Rwt0BNlgY43j8UGV1tYTNKJPEzbf7QC37mSG0atG23jhasytUh5754dzhEZuWpdqMXVj%2FGLG4L%2BVRmv%2BGmLnxiCNXS9yYtAHBn%2BSC3XgFhR6hryOzuh%2F1BJZRNMzOinW4r%2BrDefO%2FdjrkfET6uOf2TViCxcKJAzg77c&X-Amz-Signature=841f0876ef192b2697c455d4cb3ab88ca648942906e9061d57db9813f8b40388&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXWUIZW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD4q1y%2B8QE9pBAZaB%2BZC%2BN%2BgFvuWog%2BHQIQlN4J4TmlZQIhAIPbuiE9HOJMcyHHxGEO%2FyJCo3Iz4MVyPIFTQJEhKNcNKv8DCCQQABoMNjM3NDIzMTgzODA1Igz%2F7P2MC7cvbBIftkkq3AMQLBpyfmPP0OuChpy%2BDcJPVPlEiSHw%2FQx8Q4QVDskk4pagkWZt2cJVPad03BLOPkos6PYLcDqC6FuoH%2B2N7yvHgtG6AbRODKDzWMjHpkz%2BW%2BOz%2B31dWBIAsjKtj%2Fjaai%2BCUA6l1Yz1o5ICa3RhELTGjm%2BKJI7mK6OnsJ2lByWCgWV7N1oerkqYy8JThkz9t5791jc8B79p8W5sPUaMsxx5cPhvYVZbfQINPMZ2NEDGezADp8IoQEDh6UVM03UegoNdpR8UP7orw9Al08pzRXx2Y2WeoDBi4ZIBsRjBn2bODqL3Fgojd%2F0tyN7QUGqzjf%2Bj7BXRgb6YylAeVFeBy%2FZuSVEUj8g4WByLqcGStgKId1bJAPIqt%2BDOJfo%2Fb9xWJpYNMKT118Zlohap%2F9tKWXt99bDKUpIc%2FvrLd%2BJ7M1SKQxG3Ke5Mthh4RU3qJ2XCXVtjIwRh6Zgo%2BMsNNNbSEy5fwU1c%2FGRkNhVOHE4wcpZG2SigtdiOl7tUPL97Bo7r8KX4qq9hQfaeuk7JCV8X6MH6BvRvA4XTT8u5%2BR16Q0HiPHWUmGLNqqJkIy8gOcPv6LQd1nXRpCV6nczkmuEDRGwxjchhid06Zgb0VttbTPhOGEX1sIT%2Bz5SPiFBcCTD98P7BBjqkATFQl2xWyXMduJfSM%2BPwekyidVfhtJu4YgwlR%2BFhH2cV0PZWTEVE4PMx2T9h%2FJnI%2FrdzKdhUkjBEXOL%2BtcZsFK4WF3VgOPIu4SAEXfMP3tiATtGeLyqiQKsHeh%2BbZfXKoR6184mEiZtw6iNsoyGZz1%2FJVilh43H%2FXyhl15Cn4n61OC3c42fHRWeSwvNWU1DoQN27QlOu6a%2FqICuVour2GQlZ%2Fyd9&X-Amz-Signature=929ebff26bb50a24fc5be6c6dac9960cc61ee08428b95d6777195a3bbaf38796&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIOOQIX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FakEEyeDzBOTBYZWEGVaUrWUPQuYqpKWS1YqQz4FMZAIgLu0UDjtN4E1eMgioTlZC%2Fh1B%2Fk8zfaKZg%2FEojO7OmEEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHGOsAcMbM6WyQclAyrcAxYyKO1gavUtlEIbK4pPm0qKQqvIdiBnAdpgOlyuaepbQoBCQIJRvJi4fB5Y%2FLu01yGZhnSMv7C%2Bgb%2FeP1lEF6pdWMlVPQRl6JooiTAcXGJ8uHfYOUgNjYNpTP5YNBNCn9OqwCBmsPgkmUeT7KD4%2BFfa5COlbVAJry4IGZU5WdDcFoxwVg2eIqQi8B42iO%2BCdG5r67hw5VoBqxDEG%2FdIc4HbcZy87EMcVBC7hi6dgrW7vlaqH5qSi7xL5IaWHcKLlD4fN5vLDrm1kr3XYZJARySNr1w1SjYeyxeRa%2FKf6uq6GfPBADW9Z%2F6ydj5j6dzR0E9utwMhBbgozfrUjXP1R6Z1r0mXjWhrPLqyr29f6QMXzC1ydRjvA3Bkx6oTkBQmiLbB9rWx9nCKo4U1egY3e5zaABi8dV%2Bote3KJZxCr5skvjNzpKLojcCysODmmQeUBiLifYEGYeNNusK8MRWG%2BxFgG1n55w0RTHFk4QXQ4zX48WATYA6s0y0sgA0i5uqvlV6mY%2BpIrl49TBSVTTE236MAM0ioGGx36nf6HBapU4t%2BPsCCOTZ2n6b8M5%2Fu7fIBpse8xWYWkIFjDumVNqg99djUuBt20m84ic64tu%2F6QW85WA57U%2B4TW%2B27DLbTMMnh%2FsEGOqUB%2BeJLoZnMzxHDqW1bDJctlfULpoM8jYt1Q4NcMpn9%2Bf98EAx5HxoPSWbRGzvrdMcYd0plRUOSmxrhM%2BkqSPfMA1AYFdmKgcwxLT1LkkrEVubnZfATyBI0cdyUxIQRoUSHWVs9RBPw1aLrsWdul9EPzLGd%2BZrxcpQVxsPsQVHZoUTxUiIc4kcjIdzz9coPURNfRZC%2B%2Fz5cU9iB2yaMpskzo0WC97h8&X-Amz-Signature=64edf8ae173cbc68024252c1a2b2e440b622dec4d06f150b719a540b19e7ea11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYCCHSC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEBhiFolECgz0hA%2FtzWCJ4Rt1lBuGzpFq7xKAUWH63guAiBxB9%2BNYuueNE04HPeCFDJCHboJDo%2FPbYSvoUA8LO1mYir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdcjiugWH4K7VoPHkKtwDbFQMk8iI7uw72dPXjNlcYrmsefYeSdXxJs2Yw7YC4YEsYfzCpG%2Bbwf2BDo9pBg3ReRSSsu%2FR8pBTT2YZOmw0Cx9IvH6hRpmWhi4GSkvOH38%2B3OhkuRxag9IWfQlfnb9eFMx1Ddrrug8EH3il1hzz5UX8s6I%2F3U%2BsjyziRkpjOCoAtGxXDkGdTl04anH1soHxaSvzHIMwmNvk4NSrpHyAwY1V%2BIsL8ZKQatlEJ9CNrM2chlttFmUPIoBTzKlUknqGchAzvvCihFVbaWNDCVmrUGvPWVUn7vuQpcYd3ZjT8Rj5CY5cqChQap4pnXwkC1xelmA0GY5x%2FqUzD6bFClXfCNE8L3zbbOZEB9ijwmlrsgrSYUWpgQzYH%2FBlRb2yt0F9HS%2BLR5OVs7TA7dDNrWvibXrUaobLDWBbr%2BDMcHlxfomoAJy7IX%2FCk9SYNzgwZ%2FRMFlt%2B%2BnxJSZwSkSTBbFq%2FiK6m6i1YekWD4Z7DN2X5gBO7G8uyoTkFPPe%2Fp6aM15r7JBr5EW46i9H8WI5DxntXV9CBkT02VLVC1f6%2Bvz6eTtiQSCiOWZ%2BIXh2SA1CHzjIr%2FX7qu0lPwj6vtgdyyipdWCYvJHGyDLaS%2FP7isqwJ%2BgIM%2FXPZGkPI1e049sYwy%2Br%2BwQY6pgHj4tKg5%2B5GPxjr4oPl15a2FR%2BPityH11wKwUU2RjjUGyhC5F4v2pNcI8IS4Rwt0BNlgY43j8UGV1tYTNKJPEzbf7QC37mSG0atG23jhasytUh5754dzhEZuWpdqMXVj%2FGLG4L%2BVRmv%2BGmLnxiCNXS9yYtAHBn%2BSC3XgFhR6hryOzuh%2F1BJZRNMzOinW4r%2BrDefO%2FdjrkfET6uOf2TViCxcKJAzg77c&X-Amz-Signature=fd743c8a33a40999d7dbd1548cf395347d2c602c0c65cfc69a678ebc886263a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
