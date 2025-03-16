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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5PFNHC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BxiNXDyGDXss5k7WFqYhpVYf%2Fyg6fuO62ddSwxDw%2B1QIgcry5tldfcmxIhvVGwmrIVZpjN%2BY8Th6c0S2H0onp7Xcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFewrZcBLDE9cpuLFyrcA2OFseNAq6V1TbwES1hL2T3qJTU5nc2lKtR9cZLW7wKFzSzkEu8D0%2FsHTSpgrZ%2BOpF72Jkca8xnMWtpA%2FRy%2F5ATQNFrYqJeAzhXFo5EhPvpXEs2jQczLGevr4KtnkpSZV%2Fn9AaDmBXZGBDeqw9aeR%2FEaJhspPOthdxNYwBOr32oEoRHTl0%2Fk7uU0fns9CIS8l8b85YoWrAqXUi1lusuug36jMMFSJ22C4Z4OGBxGpGaZnqOUFNYt5fRtRG3F3qXZULApMiRn2K%2FCj%2BZQ0ODX78XAuPQLrANp2z1Zm2UA5xp1lrmn32xcfu8a8fUkRmfb5v2ygciVWLTm6ze9CyWaEF1fQET3DA%2BjXPkubX2s48%2B0SjK7gMqb7VTOvyjb0Y0vocMbrFTnzuiZ0J8pLvov40qgiuZDgsTTB2UgFc3rv4WetNucQUeMl5EV8yIEql%2FjL5vvwVBoKHCznZ9luob0w2njgS5J5kKn0MGC2NYG68uUOr23l3mceaLOifUWL7GwKTy48Phy9s021BRo3aXIYSInVoSUJQg9Bc6VC%2BLBl1y%2Bfduq%2FeUFmiJXM3NY7FzkE2UVaWh6%2BsmuOLfQNSuszLzzsiVx251%2BJ4SLCEcU3NBh1SStUeG%2FifUPcJT%2BMKuT2r4GOqUBD9uY7jlcUZMJGrx0UR8%2Bfge%2BLkEiJ%2BRK6LVCyCzev0i57VfpLx0TmAiZocmUFLn819nn3zloHNEx6AVt2VNPqSqSYWjujZHUnFaVIdojRWLJa1jniTdL2oz9Hbj8kt2aSg1h7fT9Q38mWcYFCwsmurT8Rg4P4Ss0O5LhbK5U1Zk7rCRdN4aJ%2BXKGC8%2BOOPTmpXCl32JjdTnMRFrFAiTNFcWFfLfG&X-Amz-Signature=c6707270372ecff3098c3a42aa9bde57e2b28f63e7d3609c5d0e19272481685d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5PFNHC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BxiNXDyGDXss5k7WFqYhpVYf%2Fyg6fuO62ddSwxDw%2B1QIgcry5tldfcmxIhvVGwmrIVZpjN%2BY8Th6c0S2H0onp7Xcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFewrZcBLDE9cpuLFyrcA2OFseNAq6V1TbwES1hL2T3qJTU5nc2lKtR9cZLW7wKFzSzkEu8D0%2FsHTSpgrZ%2BOpF72Jkca8xnMWtpA%2FRy%2F5ATQNFrYqJeAzhXFo5EhPvpXEs2jQczLGevr4KtnkpSZV%2Fn9AaDmBXZGBDeqw9aeR%2FEaJhspPOthdxNYwBOr32oEoRHTl0%2Fk7uU0fns9CIS8l8b85YoWrAqXUi1lusuug36jMMFSJ22C4Z4OGBxGpGaZnqOUFNYt5fRtRG3F3qXZULApMiRn2K%2FCj%2BZQ0ODX78XAuPQLrANp2z1Zm2UA5xp1lrmn32xcfu8a8fUkRmfb5v2ygciVWLTm6ze9CyWaEF1fQET3DA%2BjXPkubX2s48%2B0SjK7gMqb7VTOvyjb0Y0vocMbrFTnzuiZ0J8pLvov40qgiuZDgsTTB2UgFc3rv4WetNucQUeMl5EV8yIEql%2FjL5vvwVBoKHCznZ9luob0w2njgS5J5kKn0MGC2NYG68uUOr23l3mceaLOifUWL7GwKTy48Phy9s021BRo3aXIYSInVoSUJQg9Bc6VC%2BLBl1y%2Bfduq%2FeUFmiJXM3NY7FzkE2UVaWh6%2BsmuOLfQNSuszLzzsiVx251%2BJ4SLCEcU3NBh1SStUeG%2FifUPcJT%2BMKuT2r4GOqUBD9uY7jlcUZMJGrx0UR8%2Bfge%2BLkEiJ%2BRK6LVCyCzev0i57VfpLx0TmAiZocmUFLn819nn3zloHNEx6AVt2VNPqSqSYWjujZHUnFaVIdojRWLJa1jniTdL2oz9Hbj8kt2aSg1h7fT9Q38mWcYFCwsmurT8Rg4P4Ss0O5LhbK5U1Zk7rCRdN4aJ%2BXKGC8%2BOOPTmpXCl32JjdTnMRFrFAiTNFcWFfLfG&X-Amz-Signature=911845314aad94a1ccb0a52550dad8cb0c6eaa5260b97f083bf2f8bf08592563&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FBJES7Z%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnMaLEUBzKMWtA5kIcJgtEqpPoKKTVPc5kradcqVyj6AIhAPKxubpZP49ybehB%2FQh%2FWC3jb0EUVgRp1NXva91%2BeLTdKv8DCCkQABoMNjM3NDIzMTgzODA1Igzu0wegpB53srvAGV8q3APtLTfyduukTcR6Z52UKfeLKW0LFSEx2bjNgpzmp1JOv6n93Byi4%2BuKFYM3eAuIhtuynoj9iVPMxRRSluapQywQaWMRVW34Ewje%2BzBMWHnJ1aBGIqbFD65Q5kA8Ik6y3sIcnu1Lim65QssYWNMwS1aGYM%2FAxn82OiIK5Eyz5YgVPcmGoMHxUExzvA2Ybr4%2Bdas38ahs%2B%2FcvoCOaB4JVK18Vh2wRKmq5dhk7w%2FR8BE%2FOza6NeImvTJyjanZxWrvhdl7PiAdibQxgq68u%2Bt7O7%2Fo%2FhlsAhKpIvHUm0QkgloBWQqpq7JGgT4JAUth2mQMX4UxkNDBfdWjI9mYhFE4s%2FulL6Fx8z6zSbx0joiUgHEgAhQKCxyUysuFrfxzjct%2Fse%2BCbV5COSfWQTzf88gHqde0i0FT%2BMTH%2Faa7L8ff6%2BaoYn%2FRgxY9jaR4PhgozAZYCDnaR%2FHAIB4BpyHumToRsW%2BAlx4tbfQ5mUSesB2noSR6x8K3a47c9s2RcLl3HCBWkOaCprUg8rc46%2BDDYcC3bhgyfAHspZNYthQPtcBQW89tbpxNMG18vJolo8ulYOaELDJ2zcEJ6RF2llRJU85bTmf5AHUxIGUnpjgu07HHze3D8xnjzBrEvtFUm5OeuFTD1k9q%2BBjqkATs2qPz2hwc2uSH7HHprBLNy%2BSypJfmPIL%2FMJj0Q7mTekynVkpVsz60VVIJJqYDva5vhB3k5fqQcTQIszK9W2O2g6AkgdlUVOh13%2BoAETG2zfM5Qb4DEPcPxAgbA2V43wdDqrc5P9imwh02sYkKAZ2s58Dw3gOmfnovIw7uw7JgeXA2uJO3tQhhJlzVkFVmE%2FFtjsE1gidEDVn632rtpkEfyvOmt&X-Amz-Signature=a1a1688c926ae9f9c50bbd0386d3299872c3fd35e11b8256f7f0b6e290d934da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAPPH7G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFo1sE9lkQGGLnS7wVMWGFREwkn5ARbCd1KtZdlCuth6AiEAx5m9llcow4tl81YoRQJt9UhhjHfLE9WH4fAmshdzjcsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMlN6t4y1nJ%2BgjDzpyrcA8AfhrjEnwqOTyCfWzKgB2%2FekoRHfSXzNKRBkBL9cGJp6mPqNhRJMHRThrmqI3lCNbeVtKfbWLvymvS%2BtQmAsKpLEp%2BHd4VwCpaqXZXwHcAET%2FqeKDL5DXEU87%2FP8Q0EJ%2FBsE7tSbzaWqQwhpJ8Dg3%2Fs9ZobQsX6R3Orisf78CRVTJaOPNz7X4Xc72O0vk0kQ2W4NvFo0%2Ft2%2Bx5iJqZf16YOKDXdKuxu8RQS6arYeIo3RUuYiJZKClAOMuSnuoSrLVaIO8PcUYQkmRz7a5BhKWUa3meP6BtLj9d69MWrKM2YmkAxdV6M3RnzqcN00ENYDL3mGAlE%2BRgwr6Id47Ajo8tDtFdEhXCYyxMsgb6wdEhjn1PuXtBm4eC5y6g6ewb48ZCVS23T0wcpFpNfAb1gh8WEbe7oz%2B7rZnqx5Kbw%2BPPSNVCYo3fFVd6rAEzpxxTDlX1gITt3rFFL0%2FcoZOiaOw4TT0m8Ai4nsq02ZOt8ITGTUXddTJqokt6VhCBiN6ZNtkITIgFJUPT%2B2B3uIbcbe97SiQIzZYRQ%2FBba5I8xBOL%2F8iKucckOQJcnxkIu0eP4nOI5J%2FOCR2zUCBiKRj63ygcblVAodVwrNPxJxjsOyW97O2E3PB%2FH9jHtNF8wMKuT2r4GOqUBxZD7uTj3DPsndcAmMDENFzmSplD3wcCp%2FrOcdQ3jtjTOg6W0GJXFn85CiUCKeNQmw75oT4ZraPAsvPhiLxeCC0HsVhyfleT1bC7AUrzy3TrJFGsoImT9aUJyhe1wyw1LY33NBZV4J4AW9QkPTOKYOraUZopCMiIZ%2FxviXiEihbZrVJm2kBKwfkBmAVBFJQI%2BjCcxklo%2BMTG7fHASL%2BDX1F4GorJU&X-Amz-Signature=1d2db4af1147b49e80455e330c113e2452d8e44ada8c888575330ad0dc5cc682&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5PFNHC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BxiNXDyGDXss5k7WFqYhpVYf%2Fyg6fuO62ddSwxDw%2B1QIgcry5tldfcmxIhvVGwmrIVZpjN%2BY8Th6c0S2H0onp7Xcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFewrZcBLDE9cpuLFyrcA2OFseNAq6V1TbwES1hL2T3qJTU5nc2lKtR9cZLW7wKFzSzkEu8D0%2FsHTSpgrZ%2BOpF72Jkca8xnMWtpA%2FRy%2F5ATQNFrYqJeAzhXFo5EhPvpXEs2jQczLGevr4KtnkpSZV%2Fn9AaDmBXZGBDeqw9aeR%2FEaJhspPOthdxNYwBOr32oEoRHTl0%2Fk7uU0fns9CIS8l8b85YoWrAqXUi1lusuug36jMMFSJ22C4Z4OGBxGpGaZnqOUFNYt5fRtRG3F3qXZULApMiRn2K%2FCj%2BZQ0ODX78XAuPQLrANp2z1Zm2UA5xp1lrmn32xcfu8a8fUkRmfb5v2ygciVWLTm6ze9CyWaEF1fQET3DA%2BjXPkubX2s48%2B0SjK7gMqb7VTOvyjb0Y0vocMbrFTnzuiZ0J8pLvov40qgiuZDgsTTB2UgFc3rv4WetNucQUeMl5EV8yIEql%2FjL5vvwVBoKHCznZ9luob0w2njgS5J5kKn0MGC2NYG68uUOr23l3mceaLOifUWL7GwKTy48Phy9s021BRo3aXIYSInVoSUJQg9Bc6VC%2BLBl1y%2Bfduq%2FeUFmiJXM3NY7FzkE2UVaWh6%2BsmuOLfQNSuszLzzsiVx251%2BJ4SLCEcU3NBh1SStUeG%2FifUPcJT%2BMKuT2r4GOqUBD9uY7jlcUZMJGrx0UR8%2Bfge%2BLkEiJ%2BRK6LVCyCzev0i57VfpLx0TmAiZocmUFLn819nn3zloHNEx6AVt2VNPqSqSYWjujZHUnFaVIdojRWLJa1jniTdL2oz9Hbj8kt2aSg1h7fT9Q38mWcYFCwsmurT8Rg4P4Ss0O5LhbK5U1Zk7rCRdN4aJ%2BXKGC8%2BOOPTmpXCl32JjdTnMRFrFAiTNFcWFfLfG&X-Amz-Signature=121219c103de93c6809225817c99b943cca6a2f722889de44053c3280191ae9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
