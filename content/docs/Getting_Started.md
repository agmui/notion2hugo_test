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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TW4NRYW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC1lcnWEOzIQ63M5rUr5upw%2FXnJSAAiEYeW2Xd1f8vZ%2FAiA0KSX8tqxPGCLUvqQz1zjR%2FjA9GZVpV5uh19U6t1WI8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvlpFMyTVMxg2MXZ%2FKtwDQNR7vvojB3tNUkuq7QcIcuZ%2BWxEz0hkVqIT%2BFv6xngAf7ZVtNHRZO3q2HbV8Askker8U3IyxBSMpjaFKWS4zRHTL6vJiMehWngUy1Cehrh3kZbPv6afwgJQ4cexI4Uu312LznOrAWm3XMZb8bz2F4TJZm%2BKklBwZ8RP%2BX208aprxeKQEpcI7n9HoTM4DYdq7nIwKpWIWgF8lIetRIMseNVO5vo2N1GsE541OyMTBZSRRB7xSAxo247ik7h%2FZf67SVqbJvdL7KjKFSEaITL0g1NB5bD4sGVbTm4Fz96%2FQTQ9DHngPLs%2F6fnaQNfZU%2BZpfAMpdYlGQHSVcNSIhxx1s3ojfq2DJ8unv5LI0sxXrXMDlJg90XR6ZXQ0vtTYGaN4Gu4bCOFeZXvGtMCQ45zTYpwG7sZkyggkvSaOg92%2FtdfGxmmMA8jubeuCXerT5qBj8yWn5z6ytu3MTEJ4GUsS%2BJQAzWt15%2B4X405ocQ7tkw%2FYhwlD4jJS5wedmsPrfd%2BK9pWsOxPJEqkUtLNfC2LVd2T74IlJ0CbGeYWqbfAxZAWTIQiXSAW%2BfsrzNoSwr%2BWI3cvEa3KlJ1ylLiPSazT2CexNqNMAPoX4%2BzPyuj1s930KswL3xYTaUVrjeeK8wuNaAwgY6pgEYSQFNuFOo4g3LPFeksWbOA95O58qFJBYspqDoMoNJ1zD9xB9f%2Bt3UyfjaPyZkNhs%2Fs65xaengU0ITSAAb3ub4bU9Dy7PmxNc1VPn7PPanEDdecOiuTohJYWT2Pudb9rO84NhIYgD%2FsRTthy%2B001VbE0z1iyW1aLJ8ayGiiTSC0ksjbgI7Q4qpbsBTZz3gBR2Xl71rqy4ZVV%2FtNERtw4DW8Mw2ofnd&X-Amz-Signature=597d9aadb5b7dd14a516fe9761478feafb23be58ecc1295ba74d1f640e110333&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TW4NRYW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC1lcnWEOzIQ63M5rUr5upw%2FXnJSAAiEYeW2Xd1f8vZ%2FAiA0KSX8tqxPGCLUvqQz1zjR%2FjA9GZVpV5uh19U6t1WI8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvlpFMyTVMxg2MXZ%2FKtwDQNR7vvojB3tNUkuq7QcIcuZ%2BWxEz0hkVqIT%2BFv6xngAf7ZVtNHRZO3q2HbV8Askker8U3IyxBSMpjaFKWS4zRHTL6vJiMehWngUy1Cehrh3kZbPv6afwgJQ4cexI4Uu312LznOrAWm3XMZb8bz2F4TJZm%2BKklBwZ8RP%2BX208aprxeKQEpcI7n9HoTM4DYdq7nIwKpWIWgF8lIetRIMseNVO5vo2N1GsE541OyMTBZSRRB7xSAxo247ik7h%2FZf67SVqbJvdL7KjKFSEaITL0g1NB5bD4sGVbTm4Fz96%2FQTQ9DHngPLs%2F6fnaQNfZU%2BZpfAMpdYlGQHSVcNSIhxx1s3ojfq2DJ8unv5LI0sxXrXMDlJg90XR6ZXQ0vtTYGaN4Gu4bCOFeZXvGtMCQ45zTYpwG7sZkyggkvSaOg92%2FtdfGxmmMA8jubeuCXerT5qBj8yWn5z6ytu3MTEJ4GUsS%2BJQAzWt15%2B4X405ocQ7tkw%2FYhwlD4jJS5wedmsPrfd%2BK9pWsOxPJEqkUtLNfC2LVd2T74IlJ0CbGeYWqbfAxZAWTIQiXSAW%2BfsrzNoSwr%2BWI3cvEa3KlJ1ylLiPSazT2CexNqNMAPoX4%2BzPyuj1s930KswL3xYTaUVrjeeK8wuNaAwgY6pgEYSQFNuFOo4g3LPFeksWbOA95O58qFJBYspqDoMoNJ1zD9xB9f%2Bt3UyfjaPyZkNhs%2Fs65xaengU0ITSAAb3ub4bU9Dy7PmxNc1VPn7PPanEDdecOiuTohJYWT2Pudb9rO84NhIYgD%2FsRTthy%2B001VbE0z1iyW1aLJ8ayGiiTSC0ksjbgI7Q4qpbsBTZz3gBR2Xl71rqy4ZVV%2FtNERtw4DW8Mw2ofnd&X-Amz-Signature=170debc4d3556bcb8f5e4d80f268076611bda4b911921dd721bfe1e1348a1965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TW4NRYW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC1lcnWEOzIQ63M5rUr5upw%2FXnJSAAiEYeW2Xd1f8vZ%2FAiA0KSX8tqxPGCLUvqQz1zjR%2FjA9GZVpV5uh19U6t1WI8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvlpFMyTVMxg2MXZ%2FKtwDQNR7vvojB3tNUkuq7QcIcuZ%2BWxEz0hkVqIT%2BFv6xngAf7ZVtNHRZO3q2HbV8Askker8U3IyxBSMpjaFKWS4zRHTL6vJiMehWngUy1Cehrh3kZbPv6afwgJQ4cexI4Uu312LznOrAWm3XMZb8bz2F4TJZm%2BKklBwZ8RP%2BX208aprxeKQEpcI7n9HoTM4DYdq7nIwKpWIWgF8lIetRIMseNVO5vo2N1GsE541OyMTBZSRRB7xSAxo247ik7h%2FZf67SVqbJvdL7KjKFSEaITL0g1NB5bD4sGVbTm4Fz96%2FQTQ9DHngPLs%2F6fnaQNfZU%2BZpfAMpdYlGQHSVcNSIhxx1s3ojfq2DJ8unv5LI0sxXrXMDlJg90XR6ZXQ0vtTYGaN4Gu4bCOFeZXvGtMCQ45zTYpwG7sZkyggkvSaOg92%2FtdfGxmmMA8jubeuCXerT5qBj8yWn5z6ytu3MTEJ4GUsS%2BJQAzWt15%2B4X405ocQ7tkw%2FYhwlD4jJS5wedmsPrfd%2BK9pWsOxPJEqkUtLNfC2LVd2T74IlJ0CbGeYWqbfAxZAWTIQiXSAW%2BfsrzNoSwr%2BWI3cvEa3KlJ1ylLiPSazT2CexNqNMAPoX4%2BzPyuj1s930KswL3xYTaUVrjeeK8wuNaAwgY6pgEYSQFNuFOo4g3LPFeksWbOA95O58qFJBYspqDoMoNJ1zD9xB9f%2Bt3UyfjaPyZkNhs%2Fs65xaengU0ITSAAb3ub4bU9Dy7PmxNc1VPn7PPanEDdecOiuTohJYWT2Pudb9rO84NhIYgD%2FsRTthy%2B001VbE0z1iyW1aLJ8ayGiiTSC0ksjbgI7Q4qpbsBTZz3gBR2Xl71rqy4ZVV%2FtNERtw4DW8Mw2ofnd&X-Amz-Signature=17c4085708c1f97b8256beebf1824a7fdca97abf52983a608d339283024bc051&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2F7PKZQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIANxyNYC%2FDoJrfDPIem1%2FLf26DueIz2QYQJ7Li4fjXUiAiEAkHOW0cEAbjXBBxXu6auT22myzLp82ui77psKXVLApeIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPHBlt1K%2F5eiLdyWDSrcA892e8tkqqs%2FNIBAyv8bTL6%2F8j3BP3UCUywNDAHx7SCtomfvAqruUxKwufiegK46iwBQKRAGHzkvNG7wk7DTCvM4wJdwriJjgFAB9nFbq6pbLaj6oA0kl90os2IBblw5niCPs%2BwqhmOwqev3FESlCoEn%2BJY%2F8LiYSpltmVC5RrZEyNy1n3VU6vnmnHIVJvDufGQjA9GYBdvPYPU8%2BnMB5BZeLUGvFUtQFI%2FIkyyp0r21ZaCxrDIIZIqeyd0mTXE8sTAhBgk%2B13bkN2P%2FAi0lAKeU60akQhVyfYwqPDvDXWn1vfNYh3rRgdtPoG2e%2FTGVNIRTSY6RMzP2kyDGwoXgjWhxmlFzFm%2BApgyRPNillnMf%2F9OK1Rjf8l6FlGxqaRuH%2FguLJU6y8LfHRDjnrJFnJ4GSuaq3hoF0wCHrvMMEUaso1jTet0sM0k5s4JhseZV0OJQL3%2FhHq8oKGI5gjkHEsjF0XOBwf4quddrXDdMTSnus%2Fvc1yV%2B47Bf1QtaokIsoE3fi%2FtFFLOOodnUWrtpQDm88xixzR%2Ff2lZIvwHRqCngWemAEUffRsBXK1cIM6Cp3y9y5yOxgEmO4thJ9cft7w3S5N13gH3YCbe0Awrbdi5SjKPcnzIxMjOo6BS0LMMXQgMIGOqUBPTdOuWAZDjJamp1p5k5ecvh2V7DabuH3fJ9Ft%2BSeGs8zWvxKCeQ%2FhgvibA9goBWnad9G%2F3%2FBwBhgtqRhNJvGJGYKMFS%2F9FsPRSKXtXMKz0eEqpdButb6KjgZLBzv8v2UP9olvhzSlroAokXHL4m4lJv21nJ2uoG1tqvJgGI1d1sLjEq9NGskxDiZ%2FTyGE48v1WXWWD3ccE0%2BCyNWUJ5FVGe0z7q3&X-Amz-Signature=eb935512c9c7c019e0fd71a2a09211b19747166ad0390ecce30ff3b92c554821&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBJDVEI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD35AiA9IvCo%2FVpqslLWz%2FuGsBEvGr4vg1eA%2Fyf0Xn%2FMQIgJAVbjwguoKP%2BkLVzG9hftsQC74oZAn8sOoQSIoc4uMsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBztWgX0MjUnEX52lCrcA0sLrH%2Fz8nxrmhsL1AvtqwdRJGkRvA9J%2FSZTZyEda10tFof0VOK%2FGxiVjhEHoyWhcp9j8GZojLllbxozRvNuR8MVYMgtiXtQPGcsPJxugUBj9xH1G4eSU7Gyv1nEOCwsb1ZExjriJx69TKT2s5%2BM3GIzZg9li05LnwgilgPOsvYcxdDWmdVpa7UFrw1xdxYS9frNZHIBBHsOmW4eaazzFDQobTxq3SPzDRk4vAZbMYrnEinKIO%2FDBra4x1%2FaMjVRXXDBZ%2BwrwwjPBkd1n4rJAt4ltrgeYvYn3B0YCUcNoYTgKyWBV%2FC7lWd0Oe%2BOfX3ehBbYHR1ouM%2Bq%2FOW1%2FkDtXqDl%2F7bwmuFdiJk5AA9fXBS1WMOdWNR4DBUpz6Yu9XtELRKVF9BlhTw73fhb4dO8UEIJ%2Bp9qIEItvO7RVxS%2BGUSxC9VOm2PYtEs%2Bo5%2BF5e3M4N2uPGwaWF0YlBDcc5RN2H09mcStWnUfBqhRu6uHh%2F6S0QbHWSvVxgz2RP4rrmLo8V1sHIBe4XKkKgFTim1tPrA3WtCgLmkuRFgEVuE4Alk5DzYpWQi7CQYVGvGsqhthoXZyBKIw1rSCgdh%2BFLJjMmdNYCC51hmILfVRB%2Bef%2B6NblVNuwuj4kfXxnBfgMPbPgMIGOqUBImPi3yO6rYoAcNnXMzgydp6hzQSEf%2Fq4JJFBugqZclM8Siw4kKkE5qRVw9kDQfSwpi0EH0oYnzr1OTaKFBqKuv%2BoLUdyt64tua4g5flw4NLXkj4ESSFQ4vKBTRxNjpPr3O52L4Sdoz7QoNtSxu%2Fz38PEn3UsjGJLUepETccpJNnNjotxNInDw2QITr%2FyHHa3eJu%2FVj4KKdmfuBmdVAeZVdXPgTIH&X-Amz-Signature=a0d81ce89ffb456e3f8114f67147a4bd2e574518ad97e3f58dc73f926e0c1a39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TW4NRYW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC1lcnWEOzIQ63M5rUr5upw%2FXnJSAAiEYeW2Xd1f8vZ%2FAiA0KSX8tqxPGCLUvqQz1zjR%2FjA9GZVpV5uh19U6t1WI8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvlpFMyTVMxg2MXZ%2FKtwDQNR7vvojB3tNUkuq7QcIcuZ%2BWxEz0hkVqIT%2BFv6xngAf7ZVtNHRZO3q2HbV8Askker8U3IyxBSMpjaFKWS4zRHTL6vJiMehWngUy1Cehrh3kZbPv6afwgJQ4cexI4Uu312LznOrAWm3XMZb8bz2F4TJZm%2BKklBwZ8RP%2BX208aprxeKQEpcI7n9HoTM4DYdq7nIwKpWIWgF8lIetRIMseNVO5vo2N1GsE541OyMTBZSRRB7xSAxo247ik7h%2FZf67SVqbJvdL7KjKFSEaITL0g1NB5bD4sGVbTm4Fz96%2FQTQ9DHngPLs%2F6fnaQNfZU%2BZpfAMpdYlGQHSVcNSIhxx1s3ojfq2DJ8unv5LI0sxXrXMDlJg90XR6ZXQ0vtTYGaN4Gu4bCOFeZXvGtMCQ45zTYpwG7sZkyggkvSaOg92%2FtdfGxmmMA8jubeuCXerT5qBj8yWn5z6ytu3MTEJ4GUsS%2BJQAzWt15%2B4X405ocQ7tkw%2FYhwlD4jJS5wedmsPrfd%2BK9pWsOxPJEqkUtLNfC2LVd2T74IlJ0CbGeYWqbfAxZAWTIQiXSAW%2BfsrzNoSwr%2BWI3cvEa3KlJ1ylLiPSazT2CexNqNMAPoX4%2BzPyuj1s930KswL3xYTaUVrjeeK8wuNaAwgY6pgEYSQFNuFOo4g3LPFeksWbOA95O58qFJBYspqDoMoNJ1zD9xB9f%2Bt3UyfjaPyZkNhs%2Fs65xaengU0ITSAAb3ub4bU9Dy7PmxNc1VPn7PPanEDdecOiuTohJYWT2Pudb9rO84NhIYgD%2FsRTthy%2B001VbE0z1iyW1aLJ8ayGiiTSC0ksjbgI7Q4qpbsBTZz3gBR2Xl71rqy4ZVV%2FtNERtw4DW8Mw2ofnd&X-Amz-Signature=7da695aed4aea1957b8978bf268615e38b2397b1310fd660ff22a5bedc9f1907&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
