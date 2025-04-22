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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3MJXWY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDT5WD2ZgZdxGMfds2tg3GKJA90vUWAd7DToqeheV9H5AiEAwYTVNn%2BjsZV8%2FlCNKNImunb1NT0xWy3HbMhT%2B2zttLUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGudi7iIVKUG4%2BMY8CrcA%2FLV4r6VwnIvwBQYOJveKzYtI3Fmg0Mfo43CkbrIVCEZNAgb34SiAd9u0EAbOrJTYZqyjasUttpu%2Bl9u8evJszt18CdNQw%2F8yNQXztI%2BA3inAD2iJgfh56%2F6z1X54frFIXLEGNj9g8JI0KbulgX2y4i6aqWgqxp5U8PN39DInJJmoRBpRNYZz9I6v1Lcq0ZA4kduuopExsUibWHnUNbmo%2BMQUKLJYEdH5mKm7LbxT3jJwnX1rRGu%2FibZ6jV%2F1RF6N9BATM9wfItpa3SgXNrY8fX1zDV5WyDrNRXwBRLKpLFy1mBTlyQOIlkfXzUHULZIH1aBBrXDbNNudRkJZ0q7uX4cTL09PyqCF7wraLCHaG3pEABl1wbKEFz%2FRG%2FgIn5kJZJ%2FD3NiNpxbbJibMPd8KrunudVS%2FGorozRnlpKHkB95EfMNbL6yQnJOWLK%2BgwRvUpPXuf6LYJLIOLXjVzf0FifzM4SAPP4khqh%2Bdvi9BoEWPh%2F%2F3R2GutkBVrlcEwGMJp2aG1PljxOXF6FD7CR4%2Bz9pkIUM2AjFNvnP6ZZoGs6HOAzYFEbxe5oNb1ZPzTyxeOYLWSg0iLVW8VSbPdvNChu%2FA%2BGV7I9dqh7zOzAj4EqBHc0PkPVgZJWOH%2FSmMMvwnMAGOqUBBACwqlE43t2O%2FyNj5eC32ssBHrDgaco%2B2%2FDTb2mfdmKCsgfvQ5t6pzJGJVCHRQKvkB9CmT52XQhqGWv3XrH7xZjivxJbjO3oaqR4rqjTXC9Fm0K%2FuuqGbi6CWToSlnqgJ%2FrIhB15LsGKe6R8Tupqxe99SpdZewEVlDy%2F0cH%2BuWI3uIScN5I%2BDyKGV53qmEgIoYsp1fK0nq4YePsL617nOxyd3QfL&X-Amz-Signature=8ed81db23c0a22bf42d510125ad5771dcc434f01cc32e08dbad41d0f2a0290da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3MJXWY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDT5WD2ZgZdxGMfds2tg3GKJA90vUWAd7DToqeheV9H5AiEAwYTVNn%2BjsZV8%2FlCNKNImunb1NT0xWy3HbMhT%2B2zttLUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGudi7iIVKUG4%2BMY8CrcA%2FLV4r6VwnIvwBQYOJveKzYtI3Fmg0Mfo43CkbrIVCEZNAgb34SiAd9u0EAbOrJTYZqyjasUttpu%2Bl9u8evJszt18CdNQw%2F8yNQXztI%2BA3inAD2iJgfh56%2F6z1X54frFIXLEGNj9g8JI0KbulgX2y4i6aqWgqxp5U8PN39DInJJmoRBpRNYZz9I6v1Lcq0ZA4kduuopExsUibWHnUNbmo%2BMQUKLJYEdH5mKm7LbxT3jJwnX1rRGu%2FibZ6jV%2F1RF6N9BATM9wfItpa3SgXNrY8fX1zDV5WyDrNRXwBRLKpLFy1mBTlyQOIlkfXzUHULZIH1aBBrXDbNNudRkJZ0q7uX4cTL09PyqCF7wraLCHaG3pEABl1wbKEFz%2FRG%2FgIn5kJZJ%2FD3NiNpxbbJibMPd8KrunudVS%2FGorozRnlpKHkB95EfMNbL6yQnJOWLK%2BgwRvUpPXuf6LYJLIOLXjVzf0FifzM4SAPP4khqh%2Bdvi9BoEWPh%2F%2F3R2GutkBVrlcEwGMJp2aG1PljxOXF6FD7CR4%2Bz9pkIUM2AjFNvnP6ZZoGs6HOAzYFEbxe5oNb1ZPzTyxeOYLWSg0iLVW8VSbPdvNChu%2FA%2BGV7I9dqh7zOzAj4EqBHc0PkPVgZJWOH%2FSmMMvwnMAGOqUBBACwqlE43t2O%2FyNj5eC32ssBHrDgaco%2B2%2FDTb2mfdmKCsgfvQ5t6pzJGJVCHRQKvkB9CmT52XQhqGWv3XrH7xZjivxJbjO3oaqR4rqjTXC9Fm0K%2FuuqGbi6CWToSlnqgJ%2FrIhB15LsGKe6R8Tupqxe99SpdZewEVlDy%2F0cH%2BuWI3uIScN5I%2BDyKGV53qmEgIoYsp1fK0nq4YePsL617nOxyd3QfL&X-Amz-Signature=8f4e7fd44672e14d0a75ccc75ec45f1068941ca1509bac07b45ded423124d3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUEXNVOL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC4ypfh%2BHRTSi%2FkEkkBckVLUz9mRzzaB4GEH1IpWlVYuQIgdzqeeblAsSK6Ebr53%2B7OQ2aJ7yKVZGT1UGjkbQWfySUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ6YxFbcIvhRTgd3ircAwTrQwkjnryap4l0Jsx8zTDL2kb%2FAQjq%2FBdmUjuC0NIB3CvOXH8cZqgbBtZSLIj10DEBj1BwHvjSIUA2a7a8nQWiWJLTcqXH7lolnjo%2BDX0qHmFO6kcxfKAkJ%2Bewk3ufV2dCpZSfPSUJSiHl84VQMg1ehqMFbHorUt9CsU%2FX8KAe15Ff06wxQ5kgzsVSaVUv9bUjb2nmRYgnhEDiQdaOGDfWP1X0a846ZXFHxU8IqCuqy3%2FvEyIQBZR%2BazUjYCXce0y6wFaoYvvrCRwKJ7CyUibmjMKfHKpsJ9hgH2mx3Wv9PmFz6t2F%2B3MRFv7cHZlwrLyw5cx37ZAU%2BiF3CxzeJEn7ZOT2mUKcVYiLrcTNnv%2FW%2FbwYJ6WE7SmMKXU1Fray0HpUfw34ip819VDICfE2O9OOSdsKAW2bAzFDBG985j5wLfhlm%2FZAbEWkIZj0x1gRM4hJv7p%2BDgkGJ0i1VuwU7TDW%2B%2B3R9FwnJeQFNfy0uQm1JBtQuBM%2Fwv4V6Zjn4tk7ZX4H2yG44%2B%2B7MlOldPb574tjwnV58qnaM7fo3vvt4uaVwNvjMH6aqAqvVGLLuLdLND4Nwjbsj8bL%2BECLdsfT25DqMOF5arOrY9YxJEswETVfhp9hNeqJC0V1Rg4XMP%2FvnMAGOqUBPKuWI58sti5bnNc2Vf1TmEzODHe6PQBtZ%2B0xeSGImkoIUILSJB2fSbSAQ5TB57o464v7V3mMKo1AKc0d6vxjWr4kovbFFarCS60j8nGD95wp%2BwZHwy9ALcZcc6FiE%2F1RoQOae3Fc67fQ6uYVYORtQUE0%2FRMCCdNRW3XsWGez2yiTjrYa80GOO3eD2%2FRNczKG8pBAgB2hCGdPj%2BYG4S3kzw%2BKJp2Z&X-Amz-Signature=16a69144a3e599d4ad6df4ee64fc8c6f829e8488f6ece1447ac1d4c1c7193bce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXZZGHX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDNuzD65PTkt%2B2LBl818GbCurH9ZwUvOiSHjJYAZFl0EAiEA%2FaNEpV%2BGTiI4Ej395U7sNlICmwllCGvPZMnPE30Qrj4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwxeMYKEfeBZWgqtCrcAz0%2BfjXUHsbr2GPkbl3vfuTI8IzCm0tHGQY6d9TMDrCbfO1C9Tvtxr3G4uctam281PUQhpWjYKuai44uXREFm5J4GUQ4QrjCXLu2%2B%2F62qOPYqbHLbIoqS40bou8dDsea5dbTyBlBNPY7lM4KNL%2FKKaSeHeM5zWePiJ7IUYm6MlPe3YTutwPYDquIzld1CultOg2h18j3dPPjXOFfpbu3%2FbhvjAhSbWbkSr2qp0kIcYOYQJbjS9L0ec4BEm6kU75hQQc5ZNJlAxpw0c7GUADShEX4Mw3ntSmsPDDmu%2FrddEcXG2dtxzob%2Bs9QJLyI7%2FHszAaxxj50myFYLKyosNbS7zqkrlES44DyhsObIsIMzolrjd5jpjdyn0eynkBs2XiVJju2pzLEnTRPF1PxpqUOHFMagxrJL5YBv5Y0xbSqky9s9igtNwMDgtYi0A1pIQe4cKOf8xU7p8Y7%2BJv%2B5f3m%2FVFiap2CXPORd3WuSyGL3R4Q%2FazGSD%2F42S3K3%2BdLMoIDXHrzZMJcUBMLEB5VbPvPpSi0at%2FsQ7ollvIRXQN6JA%2FMST0y2CX7lXxMcRt6vGn%2FGkObcZspbDWhmubHZw%2Bo%2BUK5hGuImNYimJ60%2FX04lyw2ZMx7mSIo5itytM0NMIbwnMAGOqUBKrn3FW0Ug8r8cM%2BHnxT%2BLBslJvN3J9wTYY1ee%2F008iYgDomqdPmjMkcDAHKvGXyGAbgjAtVtLnvEYPAFjGSMKrSx%2BoSkCgkj4Gi%2FjXDuxEUKStPMKZDYkGHf%2Btb4kkPzgJkAJB%2BNcVd25OMr%2FxSk2BbXLGu%2FqaFTBQicd7aEnddIfpty15H%2BEx3RngvC6%2B4MWgMcDk92cLRYH%2BTlg50ojJkhPcCG&X-Amz-Signature=bb36c27dc269193790cad5861a54982b49e679a73cd32fcfa8703ebc95f65247&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3MJXWY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDT5WD2ZgZdxGMfds2tg3GKJA90vUWAd7DToqeheV9H5AiEAwYTVNn%2BjsZV8%2FlCNKNImunb1NT0xWy3HbMhT%2B2zttLUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGudi7iIVKUG4%2BMY8CrcA%2FLV4r6VwnIvwBQYOJveKzYtI3Fmg0Mfo43CkbrIVCEZNAgb34SiAd9u0EAbOrJTYZqyjasUttpu%2Bl9u8evJszt18CdNQw%2F8yNQXztI%2BA3inAD2iJgfh56%2F6z1X54frFIXLEGNj9g8JI0KbulgX2y4i6aqWgqxp5U8PN39DInJJmoRBpRNYZz9I6v1Lcq0ZA4kduuopExsUibWHnUNbmo%2BMQUKLJYEdH5mKm7LbxT3jJwnX1rRGu%2FibZ6jV%2F1RF6N9BATM9wfItpa3SgXNrY8fX1zDV5WyDrNRXwBRLKpLFy1mBTlyQOIlkfXzUHULZIH1aBBrXDbNNudRkJZ0q7uX4cTL09PyqCF7wraLCHaG3pEABl1wbKEFz%2FRG%2FgIn5kJZJ%2FD3NiNpxbbJibMPd8KrunudVS%2FGorozRnlpKHkB95EfMNbL6yQnJOWLK%2BgwRvUpPXuf6LYJLIOLXjVzf0FifzM4SAPP4khqh%2Bdvi9BoEWPh%2F%2F3R2GutkBVrlcEwGMJp2aG1PljxOXF6FD7CR4%2Bz9pkIUM2AjFNvnP6ZZoGs6HOAzYFEbxe5oNb1ZPzTyxeOYLWSg0iLVW8VSbPdvNChu%2FA%2BGV7I9dqh7zOzAj4EqBHc0PkPVgZJWOH%2FSmMMvwnMAGOqUBBACwqlE43t2O%2FyNj5eC32ssBHrDgaco%2B2%2FDTb2mfdmKCsgfvQ5t6pzJGJVCHRQKvkB9CmT52XQhqGWv3XrH7xZjivxJbjO3oaqR4rqjTXC9Fm0K%2FuuqGbi6CWToSlnqgJ%2FrIhB15LsGKe6R8Tupqxe99SpdZewEVlDy%2F0cH%2BuWI3uIScN5I%2BDyKGV53qmEgIoYsp1fK0nq4YePsL617nOxyd3QfL&X-Amz-Signature=00421c39e83ced6c82a4ba3228c1599bb652aee594d41b4dca0af100737398a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
