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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDC4EHF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0mKI4Ne%2FL96IGgVFUbURT%2FQ0dWTYr3lZH2yUmJyzIIAiEAii7WnbA0dEzNaiuem1tNKAOUl5OPUp1azIiW9Kjj08sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCxMklgMJ84%2BANZyFyrcAzW9hmLJyhWXQenxIuLjxgC3z00QodsrsQGa8DeNLvG%2FBjf69ghWiV%2FIQNB7CW%2FDYnse7kty3NRnJhI6SogfMH26UAZucRbev1l%2BMnYuhZ4P6uAtS7oOI7tID57kTq7HhjXKW1T1Sb5kD2QF9PipvACffbH8zLe20vmmtTwsZWnXnIBdvqv0agHOK4RTm6niSnqAX6YsYJ7rrpZBBg3lprTTWTtO2IdUPtWgQN7UBBPsyPlb3gkPybFCs1TUK%2FCl66JuX6MuOzKLMjlSYi8JkJDokHZd8rT3ABZrbNiFov3SD0xE%2BmiSdy8hefHNwv5DTBFLDjZClcST2NlCf88Gz4tT9exBdU8RKmL0Xk8jrysyO77ppC1WJIbm8MSJByTUUacom2WCMOhxgRE3pH0gF5OtOG34t%2FtCaRwaFm6KEPAx6w2%2BwMS52uPu5xf5VVe%2Fy%2FFOE25hdfBXWUWqpaZ2ynO5N07VZ0nMSJ3h0Ti6zEABL2%2Be4P5mHihxq9xPwMxcDu8nK4CWb4pnDGeRa1xbgF8uJDMbriIvK3Zaoz%2FHj6FHeIc0iGAvQeDOdjQIWB10MBlsPLM8%2B2tZKr4cmaq1BpUNOTae4KkHkohRG1mo7U8ZOYr56Vx%2FwcmjwwpUMNTv1b4GOqUBQVdhzupiRjUIQkyU4b8VUqFXG5BxiBGugK9Vtx8DLCZIH2tzdgnL1Y5ChR7tX5wDWH%2BopyDIgug23srn0m3fmbWDFKaTLRfwBtLG8AZc5i%2FmxIZuvDeIGdWC7En5Z5QxR%2FoepKxvssMAI76z6JghUpA7gGkLvPwXxdGxB0QawIFPy8egA25925edhdOiZmfto3UUV5fEQW5%2BynWZrh8QW%2BTnIrqm&X-Amz-Signature=72d173aee6a0958685e254ec4face38077e328e5a1dd47bf591d9d1a32707c11&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDC4EHF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0mKI4Ne%2FL96IGgVFUbURT%2FQ0dWTYr3lZH2yUmJyzIIAiEAii7WnbA0dEzNaiuem1tNKAOUl5OPUp1azIiW9Kjj08sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCxMklgMJ84%2BANZyFyrcAzW9hmLJyhWXQenxIuLjxgC3z00QodsrsQGa8DeNLvG%2FBjf69ghWiV%2FIQNB7CW%2FDYnse7kty3NRnJhI6SogfMH26UAZucRbev1l%2BMnYuhZ4P6uAtS7oOI7tID57kTq7HhjXKW1T1Sb5kD2QF9PipvACffbH8zLe20vmmtTwsZWnXnIBdvqv0agHOK4RTm6niSnqAX6YsYJ7rrpZBBg3lprTTWTtO2IdUPtWgQN7UBBPsyPlb3gkPybFCs1TUK%2FCl66JuX6MuOzKLMjlSYi8JkJDokHZd8rT3ABZrbNiFov3SD0xE%2BmiSdy8hefHNwv5DTBFLDjZClcST2NlCf88Gz4tT9exBdU8RKmL0Xk8jrysyO77ppC1WJIbm8MSJByTUUacom2WCMOhxgRE3pH0gF5OtOG34t%2FtCaRwaFm6KEPAx6w2%2BwMS52uPu5xf5VVe%2Fy%2FFOE25hdfBXWUWqpaZ2ynO5N07VZ0nMSJ3h0Ti6zEABL2%2Be4P5mHihxq9xPwMxcDu8nK4CWb4pnDGeRa1xbgF8uJDMbriIvK3Zaoz%2FHj6FHeIc0iGAvQeDOdjQIWB10MBlsPLM8%2B2tZKr4cmaq1BpUNOTae4KkHkohRG1mo7U8ZOYr56Vx%2FwcmjwwpUMNTv1b4GOqUBQVdhzupiRjUIQkyU4b8VUqFXG5BxiBGugK9Vtx8DLCZIH2tzdgnL1Y5ChR7tX5wDWH%2BopyDIgug23srn0m3fmbWDFKaTLRfwBtLG8AZc5i%2FmxIZuvDeIGdWC7En5Z5QxR%2FoepKxvssMAI76z6JghUpA7gGkLvPwXxdGxB0QawIFPy8egA25925edhdOiZmfto3UUV5fEQW5%2BynWZrh8QW%2BTnIrqm&X-Amz-Signature=59073126735b8215c0a492828d6ed7c968edc22ecfd24841ef1304ba7423d705&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX7GKN7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETQPZuq7xyGzZnxlzWKXmd0ztkNetmbJSWO%2B1HPAGRNAiEAhnIdSC7lFdKU%2B78nvmVd0ElT%2FEBQX9ul4blOt%2FYEmooq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCLL%2Fvb%2BxWCWAkMfUircAxaijEB5Z4Jkdz7u4AISzsvQk9DBS8FbTTK3FaFhP5wX267bs%2BkLmxIsT5hKrar0BvCMKP50InE1oBRd7ETMqhmUSNsfxj5tiuJdD7z2lYT9eexz1V4lupsc9A14mkOnK7E1yNkyoDEmfjImfbDLETcbtbz%2FkRqTFiRlIKZCHYJrknC0a7g%2BdSD6zzz8eltV1LqtfqAz%2Bd17UmvNUhXhwB714XwGZYvTIPletGRYurpusn9o8AmxMXHYM%2BT21xHlRMVrPbXLZT1fXkVaVBpMHDlK7n9pV89JYDEdM0M8dErU0qubalDaxdy7szfYl5ATFgnvCWbPqMmOT2oVon9Ow9YGsuGTFuooog54oHo2ONecBf92dzgcApbQkv3KUpOK9k3hm0R10KNqDU4YSXGakz6pZHgNViKOq0nLMPtYY3pIvDU9lvA3cMh2lsAU162TD4RT9t3tJ0TbUXOMLuWISAJoSOZaB1saVk%2BRmNqGQ2iAyMFVVtzK4KqlaoRkowBWtp56MLcZLEZwv1S0HQB6eekHmae06%2FdJqpw%2BV4BWnSuLT6uYDherSXj7T2MR4VJZVXgNZTa7dZqO3yH6vHK9NkJfLHzwY7P6t9Lj%2FQG2ER3aoaPUie77eCqxCQOfMI7v1b4GOqUBk3Qy5Ipb0VdTMYV8RgEud%2BCxsjZDjEM91EkDfbJkugAHYPCgkitCXrc3s92Q%2F632Ms6pUF72HthRhXVhBYJ5gz13pSYKDH9XySs4h1tbHRYsGkNFvGMMtd9wSP%2Fa3HyHr8OLiqmu1m1QvMyqUgj%2F3f7pb4m13Ur3EoSego9L7fZIj0TYaCVysMZAhgAOKp7i25lgRVO7jDa9%2BhZl37dwPo4zIRfq&X-Amz-Signature=6b47950c33f6a421d5afe712ab74f7b8365c8f2083ae97d7b850be68644b2cde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EMIEZE6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlMqIHPIfIeoAYcAvisAdPj3fhIsqbUOj3uqbx682xAIgPSyi5RmAoLisTThJedwjTh0t%2Ft%2BWT7keY4%2Fv9MGL5scq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAVBEaM9cMAZ3CAHPSrcA78qnSB2VPnnRvyuPqS%2B%2FEOWOWTyToj2uZr50f04Zwfj%2BkzY5t65O91xptAhBwm%2FB3mv2PJDgS5JhCcrHcjXZQ1X5TY7cdz%2FcS0Uc9yFLMaj1qO6977LyldKPI8fRKdQrptj4aVLzP7fAMl8e%2FuJkiKvk3GnMmijh6HCyIEymv1jrGlCnCuk%2B8Xr%2B1VXSq9fR5WPGPe%2BfZish349OxpGO%2FVAijN3ZdO7gN4wyOikCPiYTWACG68Dg8Roi6ufTRqvxRUGBkxvF7HcWxviSxYJU8hKEgo2bwCpiI2bqiB3mpk2l5M6QILd8VYz9bzP%2BswE%2BJWH0vsa4H9tfdhTMJL64ce3FhNlSSMwikPxVe%2F5mJMf73S7d5JZBCU0Y8VI5wEujtdzmiCOevHeHUGHCuqOCluDcrb32U2VCUO0cX3lJqn8AQLOJoM4ItSovZokeAglB9bKK4T4lw8pC6N02TQlTpdVQeQIaN4rFK8pNTHYRyK3NNWouUye620FmXY0T0H%2B8vW0svc%2FG%2FJcijVW%2FgZsT8mVi118ixpRAF4DFHwWchhUCll2UqaAzlC6qrLdMMsi0OsQn%2F%2Bntfo0wMf8YypryVaCuICgwfC8gga5Sa893Ls2dWL8d4pAbzlgGAhVML7v1b4GOqUBaqxHo3yKiwqD75cuy6S42FXo%2FkpaOCPB74Szdazk9VlN7d61zmKIZCa0FfrWXGvQTjbLgY9s%2BlM8bSoGoSz5X7wmzq7ydhYbp7AM4l6qsCDr4HQG0bjq5WiRVIXWr5XN4TMATeSD16PIrYtk11Jdiv7tlHBit4ObjX4keEslPx33yUMTFmie0exHyN2dXIrkSbFPR1jvJDATUE%2BoNyG6CFui6EPm&X-Amz-Signature=da9fc6182ab6889c91f8b64ae2b69835aeffdc67e5c1f0f3066cf8eef1f58776&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDC4EHF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0mKI4Ne%2FL96IGgVFUbURT%2FQ0dWTYr3lZH2yUmJyzIIAiEAii7WnbA0dEzNaiuem1tNKAOUl5OPUp1azIiW9Kjj08sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCxMklgMJ84%2BANZyFyrcAzW9hmLJyhWXQenxIuLjxgC3z00QodsrsQGa8DeNLvG%2FBjf69ghWiV%2FIQNB7CW%2FDYnse7kty3NRnJhI6SogfMH26UAZucRbev1l%2BMnYuhZ4P6uAtS7oOI7tID57kTq7HhjXKW1T1Sb5kD2QF9PipvACffbH8zLe20vmmtTwsZWnXnIBdvqv0agHOK4RTm6niSnqAX6YsYJ7rrpZBBg3lprTTWTtO2IdUPtWgQN7UBBPsyPlb3gkPybFCs1TUK%2FCl66JuX6MuOzKLMjlSYi8JkJDokHZd8rT3ABZrbNiFov3SD0xE%2BmiSdy8hefHNwv5DTBFLDjZClcST2NlCf88Gz4tT9exBdU8RKmL0Xk8jrysyO77ppC1WJIbm8MSJByTUUacom2WCMOhxgRE3pH0gF5OtOG34t%2FtCaRwaFm6KEPAx6w2%2BwMS52uPu5xf5VVe%2Fy%2FFOE25hdfBXWUWqpaZ2ynO5N07VZ0nMSJ3h0Ti6zEABL2%2Be4P5mHihxq9xPwMxcDu8nK4CWb4pnDGeRa1xbgF8uJDMbriIvK3Zaoz%2FHj6FHeIc0iGAvQeDOdjQIWB10MBlsPLM8%2B2tZKr4cmaq1BpUNOTae4KkHkohRG1mo7U8ZOYr56Vx%2FwcmjwwpUMNTv1b4GOqUBQVdhzupiRjUIQkyU4b8VUqFXG5BxiBGugK9Vtx8DLCZIH2tzdgnL1Y5ChR7tX5wDWH%2BopyDIgug23srn0m3fmbWDFKaTLRfwBtLG8AZc5i%2FmxIZuvDeIGdWC7En5Z5QxR%2FoepKxvssMAI76z6JghUpA7gGkLvPwXxdGxB0QawIFPy8egA25925edhdOiZmfto3UUV5fEQW5%2BynWZrh8QW%2BTnIrqm&X-Amz-Signature=f104b0257a65844cc65efa75853660f49e29f8d48b710b81f65be630a28b88db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
