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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOC74K7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76M7yVYYzP2B%2FrRbNBfmp0NuEB7SPDVpdkJYa%2BYiwyAiAQ5Mwb4VDsCJb6KWLFJb%2Bf9HQKCn632bCu3%2BGfND0qKyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUrUk4km6bSAm3%2FQKtwDyFmWgVPpcYvijHFwKCJ9i%2BYnBaSvv8wH6p1hf9epGewADCpIqShKuTuve3Z9QRVvyT7j0Pa%2FlK2b9rlJ78Nlkp1HLYtmVubF3ioNVZMpES4N2E7Z6rmnxOPPHczPHNxIpo5f0LGLumGpE%2BImVn0lqUegqiu%2BZSMAmRWIuJFPHEZiwIS%2Bb4XAh1M2BTTWcDqG9nY5KFe4TXds1XP5VERgEBDiO%2B9ozYW%2FgjYwDiFKsAHbS5ueioucaM0aiFud5J1uFMrge9sW9cGiqFXuzGcEw3gLS%2B5fCtBfMCp00Uny8Q8k50KB%2B17cfcoOAOEgb336Afpw%2BkglK6ix3ZjscCc9BCetJWjmM3QR1Nvld2QzyLKKfXZ7yjINftZ0Z2mBLBe%2Fr1eDGY6OpbxMyr%2FVd19h6WTr2HNjCQywt5gJowE74JhQ1N%2FLPEExlvbTXWBiQazs2noe5qE%2F2t631hPRX%2BQLOO%2FiUWN2ow1YbrO0Rt2%2Frgxw96ygd%2Ft3MJn8E8iEMcqJAzO6g37fkuq13T6%2BSegakeDt4qvIJoZZRqT2NH665tEnXtkcM54Rq2D7FaEaifLNpyCpyGeuP0jpDmETMfoQBdft2v3ZjnRc79%2BkoF8yi0mcp990A6HvzeILIPwwl4vrwQY6pgE8skU9vLP2Y2hk5IMIThIm%2FCVHw4zMJOc9HEhdDobdgfyMbWNhz7W9Py03Foz4rq2dvN5t03%2FOV%2F14wPVNZHR%2FoAWmM%2F4FU9U2cKdsDwMBwpfEeRq6CV%2FJxkNBxTUXGcu9Y9S2dO7aklHtzQ0tXcan1X%2BnKGIlwghu5dEc19U%2BcnTzXzAnz%2Bh5kT6hu6vGLmTSDKlzfbiW%2BE8kE8hUutrOuehbsm76&X-Amz-Signature=631180f8527710619d2596788fd339031596f97d67aaa25733c2cfb0a6781a02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOC74K7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76M7yVYYzP2B%2FrRbNBfmp0NuEB7SPDVpdkJYa%2BYiwyAiAQ5Mwb4VDsCJb6KWLFJb%2Bf9HQKCn632bCu3%2BGfND0qKyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUrUk4km6bSAm3%2FQKtwDyFmWgVPpcYvijHFwKCJ9i%2BYnBaSvv8wH6p1hf9epGewADCpIqShKuTuve3Z9QRVvyT7j0Pa%2FlK2b9rlJ78Nlkp1HLYtmVubF3ioNVZMpES4N2E7Z6rmnxOPPHczPHNxIpo5f0LGLumGpE%2BImVn0lqUegqiu%2BZSMAmRWIuJFPHEZiwIS%2Bb4XAh1M2BTTWcDqG9nY5KFe4TXds1XP5VERgEBDiO%2B9ozYW%2FgjYwDiFKsAHbS5ueioucaM0aiFud5J1uFMrge9sW9cGiqFXuzGcEw3gLS%2B5fCtBfMCp00Uny8Q8k50KB%2B17cfcoOAOEgb336Afpw%2BkglK6ix3ZjscCc9BCetJWjmM3QR1Nvld2QzyLKKfXZ7yjINftZ0Z2mBLBe%2Fr1eDGY6OpbxMyr%2FVd19h6WTr2HNjCQywt5gJowE74JhQ1N%2FLPEExlvbTXWBiQazs2noe5qE%2F2t631hPRX%2BQLOO%2FiUWN2ow1YbrO0Rt2%2Frgxw96ygd%2Ft3MJn8E8iEMcqJAzO6g37fkuq13T6%2BSegakeDt4qvIJoZZRqT2NH665tEnXtkcM54Rq2D7FaEaifLNpyCpyGeuP0jpDmETMfoQBdft2v3ZjnRc79%2BkoF8yi0mcp990A6HvzeILIPwwl4vrwQY6pgE8skU9vLP2Y2hk5IMIThIm%2FCVHw4zMJOc9HEhdDobdgfyMbWNhz7W9Py03Foz4rq2dvN5t03%2FOV%2F14wPVNZHR%2FoAWmM%2F4FU9U2cKdsDwMBwpfEeRq6CV%2FJxkNBxTUXGcu9Y9S2dO7aklHtzQ0tXcan1X%2BnKGIlwghu5dEc19U%2BcnTzXzAnz%2Bh5kT6hu6vGLmTSDKlzfbiW%2BE8kE8hUutrOuehbsm76&X-Amz-Signature=3fa09a7b4159ce37ce494fb528115cfd233ee10c3fc5d38a2e7349af7945b839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOC74K7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76M7yVYYzP2B%2FrRbNBfmp0NuEB7SPDVpdkJYa%2BYiwyAiAQ5Mwb4VDsCJb6KWLFJb%2Bf9HQKCn632bCu3%2BGfND0qKyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUrUk4km6bSAm3%2FQKtwDyFmWgVPpcYvijHFwKCJ9i%2BYnBaSvv8wH6p1hf9epGewADCpIqShKuTuve3Z9QRVvyT7j0Pa%2FlK2b9rlJ78Nlkp1HLYtmVubF3ioNVZMpES4N2E7Z6rmnxOPPHczPHNxIpo5f0LGLumGpE%2BImVn0lqUegqiu%2BZSMAmRWIuJFPHEZiwIS%2Bb4XAh1M2BTTWcDqG9nY5KFe4TXds1XP5VERgEBDiO%2B9ozYW%2FgjYwDiFKsAHbS5ueioucaM0aiFud5J1uFMrge9sW9cGiqFXuzGcEw3gLS%2B5fCtBfMCp00Uny8Q8k50KB%2B17cfcoOAOEgb336Afpw%2BkglK6ix3ZjscCc9BCetJWjmM3QR1Nvld2QzyLKKfXZ7yjINftZ0Z2mBLBe%2Fr1eDGY6OpbxMyr%2FVd19h6WTr2HNjCQywt5gJowE74JhQ1N%2FLPEExlvbTXWBiQazs2noe5qE%2F2t631hPRX%2BQLOO%2FiUWN2ow1YbrO0Rt2%2Frgxw96ygd%2Ft3MJn8E8iEMcqJAzO6g37fkuq13T6%2BSegakeDt4qvIJoZZRqT2NH665tEnXtkcM54Rq2D7FaEaifLNpyCpyGeuP0jpDmETMfoQBdft2v3ZjnRc79%2BkoF8yi0mcp990A6HvzeILIPwwl4vrwQY6pgE8skU9vLP2Y2hk5IMIThIm%2FCVHw4zMJOc9HEhdDobdgfyMbWNhz7W9Py03Foz4rq2dvN5t03%2FOV%2F14wPVNZHR%2FoAWmM%2F4FU9U2cKdsDwMBwpfEeRq6CV%2FJxkNBxTUXGcu9Y9S2dO7aklHtzQ0tXcan1X%2BnKGIlwghu5dEc19U%2BcnTzXzAnz%2Bh5kT6hu6vGLmTSDKlzfbiW%2BE8kE8hUutrOuehbsm76&X-Amz-Signature=e73dc6a81e7dc9d006202f67770731df92db56df471e4f12ef2d7fc6a85ee326&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757NB6J2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV856WOBx3K8sMYz6Z09Q%2Bnn5ubwaxE5uxYeuM%2B5%2FhkAiBXpQA7K%2FcyHgERdAI6tWpZdQ7%2BujuMvw1ip9DhhRjUniqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRDvAXq3VA34YypqKtwDP3OJvOSUSSjEckbiCUT7KMh13OswFGAAEJZ1Ij9v17DAFvpEUzGrY5pT%2FaijGy4zDg9TNMBF%2BGWF8gSN3CBryb8JCip%2BRS0x7PK12F017BwlPrsIFHiYX2pw4Un5YqLiCVS23dP3uODasxP5qFWjXIxGhah%2F1iKqhyTT8arNL9Xh0C8E6W47ViyUWZ3a1vAAjEcVpJfJcn0nlxgUUj2j%2BloWfUmKFLAOzXFTH0uy7GaxGS%2FwWVbaC%2Fnmwj0m1p29VoGmsUaNmCjI9Ttg%2FDndHDq8sm97euHVg7VtZYU2hSMSv8chxmh6OLLMv8s7RuhECkDoOcdTYvuHMDiA%2BtjXsDeDIBM3EZdQmFO43NQlzQ34eIRU6v99eb9SXR7pXuzKYhRX3lL1TMwoMpZ30CsNHMLHBEmZdOUFLZ9uFmudawETNd%2B0uoigG7l4rNFLhcgM1L6Of1HSnpy1ncuiVfobCjnkuuA5%2F3%2B0pxoMYUGhlwTZ2gZqlXmr4ttCO7wCSo1ZRIS%2BFwkg%2BUP8L0FDc0fE2MvqGxnCfZfnVpDuZoDcOAhKyxc8zNIcyvSZyAh4HHFFvnTHemH%2BYujf2Jsu%2BzRs7lSTh0tJu5DocjAdI21ZMhX%2BG1LHU%2FZFqaVOopQwwoTrwQY6pgHtYv%2FBaUtqywDWOu83Eo4JNft53HFKnCwJMbtn%2F9nqcOGiCPAGDiA9jArWODw4Rs0m3WLaZZ1tjycdLC9kYEUhybRFwotjbJ5ZT573fuPlN4MnKsD25uZ6OycwUEfGgDFq0UOgqyC1ngs4eIfUPh8feLZUx2xtDfI2Hx0UToLXGEY%2FD1vLMxzF0gN07BEnMUUPWrrbq7BLVIRmjCgvV6uhChTBLIxK&X-Amz-Signature=f3b1b4838d4f29f09445f2887126575533c704f8819c6c5f03af1b8ca5e1aa4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCFSFQE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZo%2BUnZO0ZWC9KGlim3nejbkeE2FP8tMATIjLoMuUYRAiATVQ8lXqvUpDAA8rAIsiEQIloKDHGcQC0khEXQqhcwoCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEt4rJ1ujcKzb%2BlFQKtwDwfz8P5VtB1wrfMXXcurjSkMtAk0OAZspKqFAUMGX%2BWD7Re6i9pdHMxA4j4Z0xD%2B26zInIbhHBq7fnETXajtTLWVbuIaqOv9dG%2F2zFZVFPNED3triID7JoKGOHO%2BUwgfCesc8Jg%2FRvNtAIZzMCt5neASr9dvt2SIIhcEmVMz%2FPfseFr59Ok8YTdBHh20yWiJRl4fJinQ5qUH3QxFxBjNfYCtZvTBDAoBNW0OLolExrDFVq%2B2WkhxD8UXIa6aQlHdE4VCOLc9icHO9IzZEzpa2X%2FcKoHv18vX%2BOtCwAeFq5WoYA1FkSFZDBbHY6Rz8oY6Zm0l4HQ6%2F905FYpjKsxM9H6zdkqGpM7UyzDpXwswFg0FgSycBEZO9W6jmW5Ls2bxS5oyAxIbxhKA84i0DOiasvB8vf4EvDaejKttNHFiqJuYEgFE5NtXzzgd4URY%2BV97Dfc2iq0Y1DmlTS3OhA3XnB85Qa2pumTNmS4iEqL%2BvyMhhH3dg%2F1AkEQMSDCgoyswor0rXwcsL5J7YDbJxI51aLxUGIAisgo4Xffj5S1pEavAQl76opT6HymqisMZNH2YXCufAyATs%2Bt03VIgBUN7YDpZ3f%2FCYzPv0swuN%2BDyPfrIS%2FW6O%2BY1Yj3JNrJUwm8DrwQY6pgHo2%2Fqiet3wBuoTeGPBJaKL3zrw%2FDpiljJCP3ZRWu3tg64fkorWteghI22HRAQyVqn0%2BYIXISSavUaooZhAGGkQGgVd9FGomWdmR8g70RO2jTfQ1tzN6cIK6h%2BHcFh%2Fik4p9D9dAwzM%2B0%2BH8wXZ3cNisNE5fMUn9Juyx3EhF%2B%2FGYty%2FgOdmUi07Ao1HFCOhrQI2Owx3Y%2FzwRcepyDnzylkGhmIdy0YG&X-Amz-Signature=cb317ac5046e114c69eb228899f57ac07ad4dc95d3d37254337c926f7aad5e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOC74K7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76M7yVYYzP2B%2FrRbNBfmp0NuEB7SPDVpdkJYa%2BYiwyAiAQ5Mwb4VDsCJb6KWLFJb%2Bf9HQKCn632bCu3%2BGfND0qKyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUrUk4km6bSAm3%2FQKtwDyFmWgVPpcYvijHFwKCJ9i%2BYnBaSvv8wH6p1hf9epGewADCpIqShKuTuve3Z9QRVvyT7j0Pa%2FlK2b9rlJ78Nlkp1HLYtmVubF3ioNVZMpES4N2E7Z6rmnxOPPHczPHNxIpo5f0LGLumGpE%2BImVn0lqUegqiu%2BZSMAmRWIuJFPHEZiwIS%2Bb4XAh1M2BTTWcDqG9nY5KFe4TXds1XP5VERgEBDiO%2B9ozYW%2FgjYwDiFKsAHbS5ueioucaM0aiFud5J1uFMrge9sW9cGiqFXuzGcEw3gLS%2B5fCtBfMCp00Uny8Q8k50KB%2B17cfcoOAOEgb336Afpw%2BkglK6ix3ZjscCc9BCetJWjmM3QR1Nvld2QzyLKKfXZ7yjINftZ0Z2mBLBe%2Fr1eDGY6OpbxMyr%2FVd19h6WTr2HNjCQywt5gJowE74JhQ1N%2FLPEExlvbTXWBiQazs2noe5qE%2F2t631hPRX%2BQLOO%2FiUWN2ow1YbrO0Rt2%2Frgxw96ygd%2Ft3MJn8E8iEMcqJAzO6g37fkuq13T6%2BSegakeDt4qvIJoZZRqT2NH665tEnXtkcM54Rq2D7FaEaifLNpyCpyGeuP0jpDmETMfoQBdft2v3ZjnRc79%2BkoF8yi0mcp990A6HvzeILIPwwl4vrwQY6pgE8skU9vLP2Y2hk5IMIThIm%2FCVHw4zMJOc9HEhdDobdgfyMbWNhz7W9Py03Foz4rq2dvN5t03%2FOV%2F14wPVNZHR%2FoAWmM%2F4FU9U2cKdsDwMBwpfEeRq6CV%2FJxkNBxTUXGcu9Y9S2dO7aklHtzQ0tXcan1X%2BnKGIlwghu5dEc19U%2BcnTzXzAnz%2Bh5kT6hu6vGLmTSDKlzfbiW%2BE8kE8hUutrOuehbsm76&X-Amz-Signature=c9849787e24f43c637b4958d592e38080fa3f9dafbe179bae9f1ff8385d945e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
