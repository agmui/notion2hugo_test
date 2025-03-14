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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6HNL3X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXX%2BRCy3BeEnrjBfEGDjHZVtSnxK9R5zYi3b%2B48O764AIgci23%2FP45QMAlmgBGEQVFPXmINtkJxkIOcnPzjngyM8EqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BmVgsGSLQ805R7AyrcAyK9r3rDYf1WPAMVq%2BtRuSRGoZQuOOzwPrA%2BHE2A4hOqKCZK1iDf2akrbfI5m5lMtKvEUgYbW7UTe5UQc7PQXdEIRQjAFr%2FRKrdUAOTLvWWHWSiAElmW6Rrot9A9PgM0h0Svny2xly8aku%2BTce3hcQBZrTINXv4s63BlJNAdQ4p%2Bn4reYSpOHfv9dZ7IGRP93KVMVhExYP7DT5Ms5BQDALQ0wxOp4aBvOAapxsu%2BcPkome3OILGz5Lepf1J397zRDDV4mOhQuzvKIulVPFUkcPrd2rC0J7iJw4RcfpjQojpBayWCJnxttNf1snvDX0GICrFqnyEBM8%2BfuiLOYMAEriUC14hps3pV0Cuhges9lRrD%2B3Yqy1V7ZaBbj%2BALuLKc6xD3jvA99qv5PM1c7%2BIjT2yL3F1Mp9gxVf5BFedK9tc3Btc4qlBXsMoo0dpxrb9QL9C9umLTbFc9idgGx9TyveLWKnt%2BDOC2bg7j%2Fq%2FIuqtRE0s3aX4jVrMKG7vVHdCTDEQspCXPjmT1ZEIet%2BYwAwEodNrWsdqTLojPzC1q1BnDjPVqYEfW16RBgyCbhtW%2B%2BgfByjrXQ9Of20mXj8xgfWPI8nqEzI4f%2B9b8Ia7V2B9bo9yZBADd4VS0nBmaMOa50L4GOqUBVrCOk%2FgEVBQvPnYWQQfEj9a1Rf4uXulEOx024EGUuk4BimWogHOUNFOKGgB5%2BND5fn7a1ZDevvfV4wLTUeyxj9sJllga08I0thHqe1TZ%2Be0puZyFiMSwYz%2BWPuOWPVclaj3CG0Czu1DZftpg9HnaHVtXduEc7gsiviTeVXVciZCfDtiW38%2BP7ZYutmGqdqsoNpGDvbB9HqG515iQQhmGg16nCXCo&X-Amz-Signature=60e67388ab4155a137648084ca4ee52079ba152d6d391ae25504d4b8c11cfa03&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6HNL3X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXX%2BRCy3BeEnrjBfEGDjHZVtSnxK9R5zYi3b%2B48O764AIgci23%2FP45QMAlmgBGEQVFPXmINtkJxkIOcnPzjngyM8EqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BmVgsGSLQ805R7AyrcAyK9r3rDYf1WPAMVq%2BtRuSRGoZQuOOzwPrA%2BHE2A4hOqKCZK1iDf2akrbfI5m5lMtKvEUgYbW7UTe5UQc7PQXdEIRQjAFr%2FRKrdUAOTLvWWHWSiAElmW6Rrot9A9PgM0h0Svny2xly8aku%2BTce3hcQBZrTINXv4s63BlJNAdQ4p%2Bn4reYSpOHfv9dZ7IGRP93KVMVhExYP7DT5Ms5BQDALQ0wxOp4aBvOAapxsu%2BcPkome3OILGz5Lepf1J397zRDDV4mOhQuzvKIulVPFUkcPrd2rC0J7iJw4RcfpjQojpBayWCJnxttNf1snvDX0GICrFqnyEBM8%2BfuiLOYMAEriUC14hps3pV0Cuhges9lRrD%2B3Yqy1V7ZaBbj%2BALuLKc6xD3jvA99qv5PM1c7%2BIjT2yL3F1Mp9gxVf5BFedK9tc3Btc4qlBXsMoo0dpxrb9QL9C9umLTbFc9idgGx9TyveLWKnt%2BDOC2bg7j%2Fq%2FIuqtRE0s3aX4jVrMKG7vVHdCTDEQspCXPjmT1ZEIet%2BYwAwEodNrWsdqTLojPzC1q1BnDjPVqYEfW16RBgyCbhtW%2B%2BgfByjrXQ9Of20mXj8xgfWPI8nqEzI4f%2B9b8Ia7V2B9bo9yZBADd4VS0nBmaMOa50L4GOqUBVrCOk%2FgEVBQvPnYWQQfEj9a1Rf4uXulEOx024EGUuk4BimWogHOUNFOKGgB5%2BND5fn7a1ZDevvfV4wLTUeyxj9sJllga08I0thHqe1TZ%2Be0puZyFiMSwYz%2BWPuOWPVclaj3CG0Czu1DZftpg9HnaHVtXduEc7gsiviTeVXVciZCfDtiW38%2BP7ZYutmGqdqsoNpGDvbB9HqG515iQQhmGg16nCXCo&X-Amz-Signature=3112c3e082dbdb59be4a55acb0d0b9ba9579278399f41740f216c35f346636e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5IITYJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmmGLP7Jnt%2BC9tOedLOXyfOpC78UoTNB3MEO3cHZccKgIhAJXWywNwZhGW0wxl%2FIJwxne1NXtIYUu7FhLmnHtX%2BCcrKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzHjfqqWXY4bqxeBwq3AOFlWQ3ZBqxg4wFrILwROQMqBpMzZyqgqqRDCJ2V6B54Cbx7%2FnL7xDsFl32lmuetItoS%2BBSl0wpzcc5nu018vMoto81SrNMs1KMNWgI6oCu%2Bz3BTB3D1E1jvx0ogA7d9R5JO4n13tG3RvMt1ZqqvH9ArC2YsgliI4M1a%2FyLV1Jw%2F2DQUQ788TSvnDdk%2F9e6y65kevXAZm5FTu6NAA%2BmUYPDsiioUNiBlQolcvqh1xUC3jZXlHcVlPk90bEFGkiCq5Gv%2F%2BC0q9DSB1BedP5lxBVGFHajmZy9mEG%2FoLbTsUdHVeGk6%2BdUtjD7bv1c0vF%2Bb6nxqbYhrkIghv7VYdb%2BNK8t47cgyZGXxpbvCju0u4QhjkjXmEm3vs0151gBO21NtwuAkYtAqDTqhi6QWelLO3Pumlxbi2LNpWX52r5oWJgyra9SZFZRqntYKnbar%2BEaZRGsCz8D6neI48hVaJ4NntqVjO1zRQTYjJix2H8TH3kwQ8%2FSb23Zf37Grg91QshvlVfTA4Fioe%2Fga01pk7ae3fhyWPknirjQp7j0FYZWrn4FGKD93Ua%2BNxjTEUBg%2BPvzq814v%2Bz1lTzltHVaplV4kzhsDEk4lDf0sGW9gL2y8KcDoQ%2BNpKViU41wVKOOZDDjudC%2BBjqkAa77qzDe%2BGG2neJ2pRWA0jvp4FR8TRH4vS30pYn9ncpEplnTiiU4O%2BMpFd5z4eClPNOZgDPgajt4%2Fo4ViPspDRKC%2B3e6QP6bwEm0XfRLI%2FulZDhZJLPATdFRphmRhONM3i9%2BEdjBvZdHLbrBuawNBYqQt8CI9hDV4tY0gUKoU5d4tcI%2BiVCVvbZWAugpS06OxyRnOktin%2FaPCnpOOxPYmTjaH0VX&X-Amz-Signature=5e2da75002d5d5b2cbb6261b59d7ee69e8d3297ed44fc63584033d80d9b98319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBN2CYKU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9V%2FBn5sTs3X%2FrKLiTFsgjRHiNPyXxBj3%2B9M8zQLG1KAiA6QEMyUcC5wt7Yuw9WH6CewJXI%2FRqNUmoOR4I4B3bpPyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gGrYRGMQ6NXO%2FxeKtwDZ0Ux4dRHVpWGUq5WKV4GSLHFhvQUmmOttnb1Gqsq0JVfnPl9memCLtdSoJGkXewnM45pz3PTnLKW0z%2Bkn7byXyJbgCRfayx%2B43yJRo5v%2BYFd6B7wWeVNwO0lk1mcKlfg5Akw7cyacHYLmgOJQCAzOdtqZALKfeLp6laeJJkcZ%2FWtWoV5ukXJL5iy%2FVdyX%2BslOEaqIl4aZo9syZoHEyk3txTRoAYzAyF0uyRDa8xXPal4nSjeeqq6J%2BfxXnwsfc%2F7aHq4YXRnZTQepdmg0F8xgZQn%2BSkHgDF7iP9FmWJxxnMXYplGgJK%2BGo1Lce0L7X3KavkdxzoFzngENZErAFr7vrYrhM7sLxB0PIpGqLbY67MWSv41Ue2G56rfbaQwhA5tmOFFtpES84xn2uJi6MEZBpILohqh5COVp0krJnFsEd9VXm1C8vGhsvXVl46zM6K2BNdh64lqVG%2B3LdUVjfJjdCTKZ5V6QeiOB4Z%2F4boDBQFs7RVkO%2BXfJVp3TTsHRay4p4QQzdN7vML%2FeTjcPjgqeYINpP95kSUCAlWFIRNWj7l9V8SMGQAMxHZbAdopcM9LFcvVX%2FJ8stczFEpgeQevUqAC%2FOlGHUrHLZ18WJImDzMFpk6sXJVRQa1hX%2FQw%2F7jQvgY6pgFW1Yje9iEH4mO2MlUaxo58mFQULFJaZoBFpwqucR%2BDdVHBxnaWVTKtUy04ZrVrHRQptcw9lIkS4rBvfxyBqztFarCE5AURq5Zls9EMaNNweSNKbg1bcRR%2BiPerYyppBJ0YqZ7w2N8ausVhSvdv8YU57y2f%2BT%2FbKAGNwVoya0jyt6LM6QEwZgLc59%2Fpo3Wx28fy3ZdjLOLAU324nXcOAk%2F81HNn8sBC&X-Amz-Signature=a7f2119fbe737032f8315f7eecd909853bf36a4cc484bfe2255dbec15e4b0019&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6HNL3X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXX%2BRCy3BeEnrjBfEGDjHZVtSnxK9R5zYi3b%2B48O764AIgci23%2FP45QMAlmgBGEQVFPXmINtkJxkIOcnPzjngyM8EqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BmVgsGSLQ805R7AyrcAyK9r3rDYf1WPAMVq%2BtRuSRGoZQuOOzwPrA%2BHE2A4hOqKCZK1iDf2akrbfI5m5lMtKvEUgYbW7UTe5UQc7PQXdEIRQjAFr%2FRKrdUAOTLvWWHWSiAElmW6Rrot9A9PgM0h0Svny2xly8aku%2BTce3hcQBZrTINXv4s63BlJNAdQ4p%2Bn4reYSpOHfv9dZ7IGRP93KVMVhExYP7DT5Ms5BQDALQ0wxOp4aBvOAapxsu%2BcPkome3OILGz5Lepf1J397zRDDV4mOhQuzvKIulVPFUkcPrd2rC0J7iJw4RcfpjQojpBayWCJnxttNf1snvDX0GICrFqnyEBM8%2BfuiLOYMAEriUC14hps3pV0Cuhges9lRrD%2B3Yqy1V7ZaBbj%2BALuLKc6xD3jvA99qv5PM1c7%2BIjT2yL3F1Mp9gxVf5BFedK9tc3Btc4qlBXsMoo0dpxrb9QL9C9umLTbFc9idgGx9TyveLWKnt%2BDOC2bg7j%2Fq%2FIuqtRE0s3aX4jVrMKG7vVHdCTDEQspCXPjmT1ZEIet%2BYwAwEodNrWsdqTLojPzC1q1BnDjPVqYEfW16RBgyCbhtW%2B%2BgfByjrXQ9Of20mXj8xgfWPI8nqEzI4f%2B9b8Ia7V2B9bo9yZBADd4VS0nBmaMOa50L4GOqUBVrCOk%2FgEVBQvPnYWQQfEj9a1Rf4uXulEOx024EGUuk4BimWogHOUNFOKGgB5%2BND5fn7a1ZDevvfV4wLTUeyxj9sJllga08I0thHqe1TZ%2Be0puZyFiMSwYz%2BWPuOWPVclaj3CG0Czu1DZftpg9HnaHVtXduEc7gsiviTeVXVciZCfDtiW38%2BP7ZYutmGqdqsoNpGDvbB9HqG515iQQhmGg16nCXCo&X-Amz-Signature=b67307742f96c9b8b4e8b78837a641a0a85befc4f84a0379117e11d4847f7dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
