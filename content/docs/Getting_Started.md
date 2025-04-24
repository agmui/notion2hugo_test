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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLYCC66%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAftskyFe9WlTX4Vp6A%2Bq2q692r99RDZF2rFkjPNGRaHAiBtKuGioDqD53wlCIdPzSPvvtDJJjrqnT8Ce3pShnGJ2yr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM4IKiEv2rBLtZ2UHAKtwD4L3lNcA%2BqjWvoeg0ShXbgnj%2BzitbZXX%2BgRHDpbh%2BVZwrdHEnXhXHC3WZR0Sxktta0Pex2FW7tpfk3IfAwlrd91XVIQGaWWUXFDJIbJqlrRWefgqoosDn42YCOXmEpMyS4lsutHPiG%2Fo6FItWPPtsKZ5vtibNZyo78m%2FXw6yci0wM4SKTrKAMfivPbSaxTDrIB7n4qyzw5VS63g%2FOw9BAz6Ich7ORYA6wXVc%2FTRULT92Pq6gg9c3mZiOUnwRZ4WsvL%2B4djntsXTRzrtAfWBZ3340nm3vy2jMySjgkNkEm7%2FZUN364XfXcYM5TUCMlnrbpId8ZptoC%2FVIi4rZ0wkZaaE55PDArziKGd5olhPShvUc32rmYGVKModReXUMTlna0Bwc4M%2BpJ%2FlaoaDYlN2l3cy3NdCKQjMYqm1B9ulXGZt%2B5ZbCU5JsqVfCXW0aVk5jXtsReG4m9aEFaVdkJNrCq9BBLoSZN8Atct5aZIo4JDFhG368EmezPXICLUCPNUOHUG0YKUrXvTsAhVTElfh1xpS%2FmakaOaoB9BkGCP40Ox9b0IxdfxWrATYicEDPisfjXIXwb%2BEhnG3Jyn3xVg92x6cpdakubIH%2BpoyoYWwR%2BWwhCcEGD5ricASI2bbUw2pmowAY6pgHnBV0RTPynMr%2F%2FBEQp7YeQDl7QwN65pJNzyhhPtlRtDt4uGOIjg99V26Hd2Uds8bBrLhvmSMxCTsd1SM%2BwnKmMf%2F65lLV5MY0%2BGcaWFHHifhFpkUBVYWK%2Fb6cMyXwkVqjg7l%2FTvgcGPrtsJcAG0vNNGsuU1dOJdUTa9cfkJH8reoPnFgopOFClHFDc6RPQtUqApOv0wC2uv0lAoOD5OTdcCr5j2948&X-Amz-Signature=377861fdbebb479d253a1318579d52f1974da978ca9f8431439e347fad2133a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLYCC66%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAftskyFe9WlTX4Vp6A%2Bq2q692r99RDZF2rFkjPNGRaHAiBtKuGioDqD53wlCIdPzSPvvtDJJjrqnT8Ce3pShnGJ2yr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM4IKiEv2rBLtZ2UHAKtwD4L3lNcA%2BqjWvoeg0ShXbgnj%2BzitbZXX%2BgRHDpbh%2BVZwrdHEnXhXHC3WZR0Sxktta0Pex2FW7tpfk3IfAwlrd91XVIQGaWWUXFDJIbJqlrRWefgqoosDn42YCOXmEpMyS4lsutHPiG%2Fo6FItWPPtsKZ5vtibNZyo78m%2FXw6yci0wM4SKTrKAMfivPbSaxTDrIB7n4qyzw5VS63g%2FOw9BAz6Ich7ORYA6wXVc%2FTRULT92Pq6gg9c3mZiOUnwRZ4WsvL%2B4djntsXTRzrtAfWBZ3340nm3vy2jMySjgkNkEm7%2FZUN364XfXcYM5TUCMlnrbpId8ZptoC%2FVIi4rZ0wkZaaE55PDArziKGd5olhPShvUc32rmYGVKModReXUMTlna0Bwc4M%2BpJ%2FlaoaDYlN2l3cy3NdCKQjMYqm1B9ulXGZt%2B5ZbCU5JsqVfCXW0aVk5jXtsReG4m9aEFaVdkJNrCq9BBLoSZN8Atct5aZIo4JDFhG368EmezPXICLUCPNUOHUG0YKUrXvTsAhVTElfh1xpS%2FmakaOaoB9BkGCP40Ox9b0IxdfxWrATYicEDPisfjXIXwb%2BEhnG3Jyn3xVg92x6cpdakubIH%2BpoyoYWwR%2BWwhCcEGD5ricASI2bbUw2pmowAY6pgHnBV0RTPynMr%2F%2FBEQp7YeQDl7QwN65pJNzyhhPtlRtDt4uGOIjg99V26Hd2Uds8bBrLhvmSMxCTsd1SM%2BwnKmMf%2F65lLV5MY0%2BGcaWFHHifhFpkUBVYWK%2Fb6cMyXwkVqjg7l%2FTvgcGPrtsJcAG0vNNGsuU1dOJdUTa9cfkJH8reoPnFgopOFClHFDc6RPQtUqApOv0wC2uv0lAoOD5OTdcCr5j2948&X-Amz-Signature=ff5b4385ab77bc6288f843efc1579dbadd86f8c7c01c1073e66159ed16edf6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM5BS3OE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP0mAz4KkLvBkN1V1dNu8gLMjGhwCe4UXtpz4GGUbVfAiEAh9Cid%2FCZGqm5d%2BP9TghU82Tt01FnRrE09G7%2B8b%2FsSaYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFjBrs5u%2BIUgJpAu1yrcA%2B0G%2BX%2B0bgVpvUyHMVbS7U84R%2FsRMD%2Bu4D%2FfLUfEBHZkzAy3xrD4lSTFlR%2BHco94DbOg2qgINpGp2jLI%2FkBC5hKvoq6nBhqBzPl5yU4lQ0W0GYB44dTmwm93sThNbxqkZ74JoByEqm%2FbjKQY%2BA%2F%2BWwmDLm5UFmdpXk2T30%2BcCLmun7t29zvSM0zg96mQdCQ3RyEqg%2FY9uVCIlxDgWRtbRpO2wP6BLCn42wCp0PFaVlozG2gGyuE9Fivk26tJmG%2BinqEGvHDFGDK5AsuGLVGHvixTSQ7AZEl83arLbwHU8U1NEMii60Xm7VnVQ3GKg%2FBxb2gujArKuFTyk10DXCJ7wvlsvIC0hAPcRFk5TtV%2Fv0ncLiftKsD0Owphe%2FRU%2Fs3WhS5um7f9EGaRawfKfSHJf0yEF7tMAwiPgUJJqvV3MKil4VZv6Es4LCt7Ht23BOuD79AdvjERC2v4y%2FFfT5Lyg9tMWmQw8Nz6jDZ%2F0Q%2BdhiDdB54EpqlLeNt%2FsRiLubIROvwTXO2JtOEqijvPHKbN8Mn3cxa2mIb07pC6ebInH0eSYHyc9qXK7fg4mU0BAYAtRJIl%2FGH1cJMSd4TS0Cc9JS7LVbWG2Opn6bi0%2FB1MIxgXkUga7CIQIJ8QZ8c6MM2EqMAGOqUBcK1SPzMsFyX3WrjIK066%2BUGxCL%2BzYXpY5f0CAAZ62P7YwSYuN1Z3okjdxqM46OEmLcjejawCG3Bu6Spfuy3dpEoeznepW6SKn7O0eiR%2BQxhFv5OTAYW8utEJcHdIzHF8SyV90Qp%2BJ3Z275Hi3bRbRyXKkzJN1c3rga0B7Bk0IK7iKcgwc8oW8G5om0hCe36VmvVzbV2Nee9oK8wQi6SRM%2BAZh5vj&X-Amz-Signature=d78bc8a7a60299ce96a27f2e125509f3494ce10f63b752dedb8e44df7bf49005&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAT5NM4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCqb8G82qgIwhJtazfQi7gWZQ9ElDP4KO3y65lPK3ibLAIhAMgxL5QC1liDEDsXf%2Bd0xOqYzxweXCi8UQzkLrW7zHpMKv8DCBIQABoMNjM3NDIzMTgzODA1Igyl1iwVVC%2BM6VvPeQkq3APyMgGrxI2Eg3LvnQ1Nb4asvWss5qlVgoxa5lNe31wxW5neIdyI9sj3CXoNPXvemUNc6ZapNhctmVhrzL595Rt62L2uT%2FZDErF2Uhz41GCJ7DHYkGQ7fbMW8JXrIAnvZPlDOFwOWvcC1G68mEKi5VyHCKCKSzW1Iesp84snyjsI363oEU9uhw0hwjEIoeQZ9BmiX71aN2SWUHztUEhqkkD03lhnD0D%2FwnZQfj902CovYy1t3mOJfPDuoBdDiPDuJx%2B6VNOh5D8QFDycg2kjTVOXFtY7uiFC3cs7tPT8EC13u3rihgTfaRqAlUOEsMBJ4PXaBP42IkbguHf%2BUAafEFAy%2FYFIiTeYp0a%2BiyTr1sP%2BZ%2FTU2B1%2FGterwTM0wqjvcEtIOWHI4va8H8MiqAw2M%2BnjN%2Fro0FGpVn3SAdpA%2FrXwXr8auFRtBv5D9AOatflZWA7xxstqZ6ccAft%2Fs4UE%2BH1wdNjRKy%2Fv9fG6tX8Z1XF286qZ3Tp3H%2B6vCyPQTyHcaTa6efHU5vfXXgXWjWqwkDbOubgs%2FBXeJD8q4bGD8FUrjSln2Z7on43roM9cQu4SqPAc3se2z7GPG3oe9O96kry7h0Gp6OOccr1bOYDkzN7jCCbH0OBW780fafVgyDCnhajABjqkAWfp7pdebK3Rf7d7TI5SkQw3uSfMoeiVlzrn%2BDjpxkpEMYyl3Xq0Zeh3A%2F9a06FHJZadEWcduXGsLbtp6LjIbfHFfPmYDbeACVgeo2hrXfoL0HIiadtjtjT5QSMqkU5J%2FS5zWnvmYGJcBEwaUI5sV5EGMSUQLNpZRF7rQ9ra2AunN69PcWojtWo7W8ApBv5N69dbe4uRzF0v0akE7DgS%2B34BfBnn&X-Amz-Signature=b4e88ad62cfbbde28cc7ec86184195462357671ca5a9730d7e9d810dad26fd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLYCC66%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAftskyFe9WlTX4Vp6A%2Bq2q692r99RDZF2rFkjPNGRaHAiBtKuGioDqD53wlCIdPzSPvvtDJJjrqnT8Ce3pShnGJ2yr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM4IKiEv2rBLtZ2UHAKtwD4L3lNcA%2BqjWvoeg0ShXbgnj%2BzitbZXX%2BgRHDpbh%2BVZwrdHEnXhXHC3WZR0Sxktta0Pex2FW7tpfk3IfAwlrd91XVIQGaWWUXFDJIbJqlrRWefgqoosDn42YCOXmEpMyS4lsutHPiG%2Fo6FItWPPtsKZ5vtibNZyo78m%2FXw6yci0wM4SKTrKAMfivPbSaxTDrIB7n4qyzw5VS63g%2FOw9BAz6Ich7ORYA6wXVc%2FTRULT92Pq6gg9c3mZiOUnwRZ4WsvL%2B4djntsXTRzrtAfWBZ3340nm3vy2jMySjgkNkEm7%2FZUN364XfXcYM5TUCMlnrbpId8ZptoC%2FVIi4rZ0wkZaaE55PDArziKGd5olhPShvUc32rmYGVKModReXUMTlna0Bwc4M%2BpJ%2FlaoaDYlN2l3cy3NdCKQjMYqm1B9ulXGZt%2B5ZbCU5JsqVfCXW0aVk5jXtsReG4m9aEFaVdkJNrCq9BBLoSZN8Atct5aZIo4JDFhG368EmezPXICLUCPNUOHUG0YKUrXvTsAhVTElfh1xpS%2FmakaOaoB9BkGCP40Ox9b0IxdfxWrATYicEDPisfjXIXwb%2BEhnG3Jyn3xVg92x6cpdakubIH%2BpoyoYWwR%2BWwhCcEGD5ricASI2bbUw2pmowAY6pgHnBV0RTPynMr%2F%2FBEQp7YeQDl7QwN65pJNzyhhPtlRtDt4uGOIjg99V26Hd2Uds8bBrLhvmSMxCTsd1SM%2BwnKmMf%2F65lLV5MY0%2BGcaWFHHifhFpkUBVYWK%2Fb6cMyXwkVqjg7l%2FTvgcGPrtsJcAG0vNNGsuU1dOJdUTa9cfkJH8reoPnFgopOFClHFDc6RPQtUqApOv0wC2uv0lAoOD5OTdcCr5j2948&X-Amz-Signature=41fef9227e98be6450e093f2800f4aa97e76991afff0dc5add49c1ec3fec6870&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
