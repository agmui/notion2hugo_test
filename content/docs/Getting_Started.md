---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FFFOLF%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCV55KJ1Ho9NFp3nNHrynRadfAEqU4Jy0FDeCiK%2FMdPBAIhAI%2FH48%2BlBXWR3XsXXc1NBXGGpWz1tA6%2Fi9FCSgWsVvCbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJqu%2FnkR64aM0CwOwq3ANiheUN5h9DKKyqBti%2BcoLQTz5j30tYITgOwCBCwd8oqdt%2BbW3Yr6HRcupMWf4fHySbpKUnNatnZHhFN19DHUy9%2FyQ08r%2BIhIm9mCLzanmt7ESlPzRoi2mlzyAyfqMWYO%2FR2%2FUTPhMwHWq8l%2FY%2BWFnmJ329KF6DZxzmm4qId%2BjM0yszAAKqM4nyApWr3CMFMvF2UYwRr8wgjNqbjXWMyln4jgy75y%2FJDfccvRmb9Rnryf4ulmBz%2FHF1pXCdrzABTl29UH%2FqpGHT79TeoXAf9iA0ozJt7sJIh6fHg%2BRWxZtsbYYF8NSnJJj3jcfKTrS1OtrsBCUti7lywQWdsRY5UgS5VmYfqnLgFr0M3nwW%2BPkOrkJnOCXFGSjmfHVw8foaYNqqbymqCtcNoO65e%2FKcfYLCfw7BAPPms%2Fp%2FVqp3VVf7hMIIowiO817d6Bw0C%2FR5z807aR%2FSf44utCTCveYzAWA7S4%2FbcsirTUIGdcmBx977eOjnBlk65PUEGeaZoV9mhY1lsQqFnx%2Fp4TuHL1mWjSJ6oJRFvnsUkDmvJ08narv7670NjCp%2BwO0bGKSWAvRrPSFgEIXimJQ8yeMaZa3NmJ6l1SGyoX1eWzQmzhA0mwiC0IHa6gZZn9ca0IhRADDnzbTMBjqkAQFTUVjZfKnoe8DU%2FNXhf%2F3heRUvnGBYeULw9WNoXhMT6MuWWB7D4aJ%2B0%2F%2BG%2BSDB1ba6JDI04Xher%2B9RiqY0wpc9d3Soib5YA2oYkR40rX%2FHwVHCuV1bediPUWdtnk7QGzps%2F54dtKLh1UUnhyRCHbyKIuEYw1yR3qqXVv5NLuY5SOAG7nLmoJOax9PiSG3UVn1y5QYDYx4m0%2FIlfjZJ8lkcoHy3&X-Amz-Signature=bb0cb15db4e9d4725e9ea9a9ddad9fb6a10998990e8bbff7417b084d114fa631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FFFOLF%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCV55KJ1Ho9NFp3nNHrynRadfAEqU4Jy0FDeCiK%2FMdPBAIhAI%2FH48%2BlBXWR3XsXXc1NBXGGpWz1tA6%2Fi9FCSgWsVvCbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJqu%2FnkR64aM0CwOwq3ANiheUN5h9DKKyqBti%2BcoLQTz5j30tYITgOwCBCwd8oqdt%2BbW3Yr6HRcupMWf4fHySbpKUnNatnZHhFN19DHUy9%2FyQ08r%2BIhIm9mCLzanmt7ESlPzRoi2mlzyAyfqMWYO%2FR2%2FUTPhMwHWq8l%2FY%2BWFnmJ329KF6DZxzmm4qId%2BjM0yszAAKqM4nyApWr3CMFMvF2UYwRr8wgjNqbjXWMyln4jgy75y%2FJDfccvRmb9Rnryf4ulmBz%2FHF1pXCdrzABTl29UH%2FqpGHT79TeoXAf9iA0ozJt7sJIh6fHg%2BRWxZtsbYYF8NSnJJj3jcfKTrS1OtrsBCUti7lywQWdsRY5UgS5VmYfqnLgFr0M3nwW%2BPkOrkJnOCXFGSjmfHVw8foaYNqqbymqCtcNoO65e%2FKcfYLCfw7BAPPms%2Fp%2FVqp3VVf7hMIIowiO817d6Bw0C%2FR5z807aR%2FSf44utCTCveYzAWA7S4%2FbcsirTUIGdcmBx977eOjnBlk65PUEGeaZoV9mhY1lsQqFnx%2Fp4TuHL1mWjSJ6oJRFvnsUkDmvJ08narv7670NjCp%2BwO0bGKSWAvRrPSFgEIXimJQ8yeMaZa3NmJ6l1SGyoX1eWzQmzhA0mwiC0IHa6gZZn9ca0IhRADDnzbTMBjqkAQFTUVjZfKnoe8DU%2FNXhf%2F3heRUvnGBYeULw9WNoXhMT6MuWWB7D4aJ%2B0%2F%2BG%2BSDB1ba6JDI04Xher%2B9RiqY0wpc9d3Soib5YA2oYkR40rX%2FHwVHCuV1bediPUWdtnk7QGzps%2F54dtKLh1UUnhyRCHbyKIuEYw1yR3qqXVv5NLuY5SOAG7nLmoJOax9PiSG3UVn1y5QYDYx4m0%2FIlfjZJ8lkcoHy3&X-Amz-Signature=e5cacf711921a060633acd152f98ee11a36feaafc194c25e65162f7122c745b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FFFOLF%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCV55KJ1Ho9NFp3nNHrynRadfAEqU4Jy0FDeCiK%2FMdPBAIhAI%2FH48%2BlBXWR3XsXXc1NBXGGpWz1tA6%2Fi9FCSgWsVvCbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJqu%2FnkR64aM0CwOwq3ANiheUN5h9DKKyqBti%2BcoLQTz5j30tYITgOwCBCwd8oqdt%2BbW3Yr6HRcupMWf4fHySbpKUnNatnZHhFN19DHUy9%2FyQ08r%2BIhIm9mCLzanmt7ESlPzRoi2mlzyAyfqMWYO%2FR2%2FUTPhMwHWq8l%2FY%2BWFnmJ329KF6DZxzmm4qId%2BjM0yszAAKqM4nyApWr3CMFMvF2UYwRr8wgjNqbjXWMyln4jgy75y%2FJDfccvRmb9Rnryf4ulmBz%2FHF1pXCdrzABTl29UH%2FqpGHT79TeoXAf9iA0ozJt7sJIh6fHg%2BRWxZtsbYYF8NSnJJj3jcfKTrS1OtrsBCUti7lywQWdsRY5UgS5VmYfqnLgFr0M3nwW%2BPkOrkJnOCXFGSjmfHVw8foaYNqqbymqCtcNoO65e%2FKcfYLCfw7BAPPms%2Fp%2FVqp3VVf7hMIIowiO817d6Bw0C%2FR5z807aR%2FSf44utCTCveYzAWA7S4%2FbcsirTUIGdcmBx977eOjnBlk65PUEGeaZoV9mhY1lsQqFnx%2Fp4TuHL1mWjSJ6oJRFvnsUkDmvJ08narv7670NjCp%2BwO0bGKSWAvRrPSFgEIXimJQ8yeMaZa3NmJ6l1SGyoX1eWzQmzhA0mwiC0IHa6gZZn9ca0IhRADDnzbTMBjqkAQFTUVjZfKnoe8DU%2FNXhf%2F3heRUvnGBYeULw9WNoXhMT6MuWWB7D4aJ%2B0%2F%2BG%2BSDB1ba6JDI04Xher%2B9RiqY0wpc9d3Soib5YA2oYkR40rX%2FHwVHCuV1bediPUWdtnk7QGzps%2F54dtKLh1UUnhyRCHbyKIuEYw1yR3qqXVv5NLuY5SOAG7nLmoJOax9PiSG3UVn1y5QYDYx4m0%2FIlfjZJ8lkcoHy3&X-Amz-Signature=a477273fc390d51901f22ff5f3d9fe5f2fe8214fc1a9f16199bdcd77e4c7e087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L2C6VCQ%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICXAth5%2FtckbgPOj8jpJsZcWSNYT8MaWOKRjdp%2FTaF11AiAlNfO4V%2B1fohJpC9mQ849qURzyKqKQ2XzW7sAsEQqkVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwahDyZywo1O3cgq1KtwDSXtE5w%2Fl6g1yvYcW2TKm8NGawatGaCt%2BP1CtYLkQVUdzz9ajNQMy7v1ClrfHNNOESuoroMoSkIkOLHO2QpW0dT2pF8EcDGRqMtZAtucjySrwgXU0gU5Y5DsiB%2FHcoFe4fZ6Lzj0eccgBMaQJYMzsHY4xeYhhuUYMrJko1ZAgyFgrqCd6eXVoJ%2F9nAbs3OfjtcSCPPwso9Re1ui3BgGeWKtcldOf3798cCgI9E32lWPfpIdnCKpNcSEpYbWDNVC%2BbOcZM%2BRtvccU9xZb3R53w41ku%2FngqkOk7wxqRTHPnYKLf9n8xiv667ygzABZNzHdB%2FmMBDSqxzcg76NtGt1%2BmXvyDfsUbQRj8sIRqa0DzQelZB7IjImR7TSHGDj%2FCUjQK3a7n%2FqJr2ifegorkiR5oZgpR5MdNq0cgbl7OCll48BLPCfWLN0keRZna3cTfftUjOI8WZDm6ZeLOkttZmVl6D5bj%2BR1X%2BKQCJAXZmvYWcTuIPoepiR5jqi1KViTorY%2B0vS1b3oojy%2B2ssdMjbkyhLGV0joFKhXqqYLsZTT4U%2BJZJeP42cNmts%2FeayIFUr8TWMlz7jtazXYeaeM2GHtGhU4xWFhqbbfBZIVT4tsZFuq3IfuoPPC4af%2F%2FS888w3NK0zAY6pgGmLH15tbW41MeA%2F2RSaDzKEKJsppXnHeh2hsL14YhS%2FL9zXqeGBE3VUzUu3mAakLa6%2BHooiuMIgnILohvAMpodENhRzMmq%2FyOsv4%2FPsHJBaBJs0xmjUq0k%2FhJdlYJAYQwWiTqI8iLRHF4ApmmrjzUXG1KesXp%2BLUD8%2BfIL3rS2RaKdhl3ur73nF0KijeKQuYgjU87YURe3cYpeWRQPcQbrlGTvoiW9&X-Amz-Signature=c9d817a590a4019cd63fe34dd0adde425990630d085d134f3c72fe5db60e2f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6DAQN%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBiib2OKP7VZMLm2QPQEsCjshXZhNX7dnE7kI3Td5iIyAiEAmQjoxSfpdilZYkMESFRtdm0Uj0cjUkWI53he3diBQV4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHX%2BeSW4EnSwjYQwCrcAyY68z2aaRcXQl515hOzK2cNIO6OCvQ8S6Ju0zempBbstIJCLvfmx%2B2zjiYyyvdR4ueXqMd9Towx9dHDeP1zQ92v%2FvNz6Gmd8F7MSmA8W5PTHLWrkdg7wQSAvgbQKi4QoG7PlgtAMviNNOBpvrPyo4ijame0GxD7K2vPC1CD0kZlWZ3v%2BYVojpAyPgEgyiqDlMSfsYGOqK33rUMgHtWJDTSJQPA2YTnUMOzK%2FtE7e7Ci942iVNE5JU5d9p9v7DMH0eIQQla4kZfXRp6pPY4Q%2FIslRAypxv7cQUpumMJAkrrmHRZnahO33Yod8OtbGTeKgsbNpLcjDNEUjeVh%2Ft4gDKmV346QQgV8KTOF40ZwdAkHyHMVH5XNuuZ8M%2BggbFLaLDMQ5yDN3p%2FjagI95xzh2%2Bvq5oUvTBwCGRkV%2FhTPAPqhXswOijrG%2FYzu3C8gph%2B2BRMoK3FFXYoNrvOOBnfW%2F80svhJmftIAo%2FShSwVzgWIRB62ghfk9Co7IKfhAp5%2FDGZASLV87VdLIloCPMaZPjDAjqXlwW3L6phlOIR1697%2B1w8p%2BbiBlGScgnTlFN1Sx3IeNtxMDWaNCP%2F0%2BqO3npf7D47DA2M%2BjdqVzbAWrSzmcTHEAlAM8DQxVVElBMKzVtMwGOqUBVaTkktJpwyvZQjO02TixNkARHn3xAxlmiOKmIYLX5%2FvZ7AxNamKiPphdhGv8JOP5fQV0tv3cQT%2BT58sDabN056Tx3famIaI6rHuRFdiz0Ko0gYgqGhIofeBBcZMRfI6tohVAdEMBysC4fsad2pmwnNp1U50CpbfZcyMFxr8Lc1bkrMc30bpbW8X3oRta4FjO0j3PWgGjfFIEnpHCyeHtMtWWhaIi&X-Amz-Signature=142edad7edb6afac6266b8c3f2ce2d5cf38e2538db4eec7bca7fbb625877e74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FFFOLF%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCV55KJ1Ho9NFp3nNHrynRadfAEqU4Jy0FDeCiK%2FMdPBAIhAI%2FH48%2BlBXWR3XsXXc1NBXGGpWz1tA6%2Fi9FCSgWsVvCbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJqu%2FnkR64aM0CwOwq3ANiheUN5h9DKKyqBti%2BcoLQTz5j30tYITgOwCBCwd8oqdt%2BbW3Yr6HRcupMWf4fHySbpKUnNatnZHhFN19DHUy9%2FyQ08r%2BIhIm9mCLzanmt7ESlPzRoi2mlzyAyfqMWYO%2FR2%2FUTPhMwHWq8l%2FY%2BWFnmJ329KF6DZxzmm4qId%2BjM0yszAAKqM4nyApWr3CMFMvF2UYwRr8wgjNqbjXWMyln4jgy75y%2FJDfccvRmb9Rnryf4ulmBz%2FHF1pXCdrzABTl29UH%2FqpGHT79TeoXAf9iA0ozJt7sJIh6fHg%2BRWxZtsbYYF8NSnJJj3jcfKTrS1OtrsBCUti7lywQWdsRY5UgS5VmYfqnLgFr0M3nwW%2BPkOrkJnOCXFGSjmfHVw8foaYNqqbymqCtcNoO65e%2FKcfYLCfw7BAPPms%2Fp%2FVqp3VVf7hMIIowiO817d6Bw0C%2FR5z807aR%2FSf44utCTCveYzAWA7S4%2FbcsirTUIGdcmBx977eOjnBlk65PUEGeaZoV9mhY1lsQqFnx%2Fp4TuHL1mWjSJ6oJRFvnsUkDmvJ08narv7670NjCp%2BwO0bGKSWAvRrPSFgEIXimJQ8yeMaZa3NmJ6l1SGyoX1eWzQmzhA0mwiC0IHa6gZZn9ca0IhRADDnzbTMBjqkAQFTUVjZfKnoe8DU%2FNXhf%2F3heRUvnGBYeULw9WNoXhMT6MuWWB7D4aJ%2B0%2F%2BG%2BSDB1ba6JDI04Xher%2B9RiqY0wpc9d3Soib5YA2oYkR40rX%2FHwVHCuV1bediPUWdtnk7QGzps%2F54dtKLh1UUnhyRCHbyKIuEYw1yR3qqXVv5NLuY5SOAG7nLmoJOax9PiSG3UVn1y5QYDYx4m0%2FIlfjZJ8lkcoHy3&X-Amz-Signature=24c8090ceceeef7f60d0045c7082b904f29db86addda60855126494002b8ea3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
