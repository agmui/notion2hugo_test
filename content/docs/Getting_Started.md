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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEWI7KU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiCOnTKsxn1bj7X7hqo%2F0Kfikul0rq8rGo1iXODufzwIhAL%2FTN6YutkMatVVW8xv0Cfml4hfHJA0D5nZtHC0IbF%2BfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2Yp9MqtofDCz7JIq3APcGGEcy1pxiv7%2F4JhC587pGV1JiP8DCJswg9G5RJruiWc8NNZHvdiSnlEjIiqqqFheqIBfFD52YMtehshWdusYh2LzDqPoB48fk2BarJIsoxILkB%2F%2BXR5Mf5Ulixh0v%2Fr8kXztei8CBCpgIiJD6UVbRZnX9Nj9XaKasSV32SVVLy5ojKCQhVDRubWGqGm1pMgnj6QuLn8k286%2F%2BFjUtKk3IgIy%2FOLEy1nEyHCCupdLiy9BFit%2BB11tGKdaQPHg2vQ4gnQ%2BBH%2BpTkTjSUDmd%2FLjU4A0b4LrcY0ThiBSIoEsjDT8hylMlErQDhme6H0Kt0YDr4ww%2B365kIwoD5Dog486WwKlrijaODMcfvQGZ9i2OGq7yX9sWXLT6i0U0cCdWkx2dhZB39f419i7cVxixWsW940I%2FkTosBud8Ny9FmiVEY6hfEga9kqBeIHHoq5JOQ2P85rHdrkqPusQsl7%2F9ifZze20WMnx1%2FNWRmnwKslAdJf%2BbT3clbgyKKpk1Q5W9Biq0g7yjExuZeMzFBd4k612Jq%2FjLX06l9%2B7d1d5RSDg29Blpc0SOApUpvdCnLtQs%2BtxsrEyoWOLt%2BSQm9My3CYO085Daa3Xf1dBOrzoqFIM1mDvxNhMQWSWbMRVCjCHuO7DBjqkARH3VMQzlAQE1ELuoPpMOyUfzuoS05SOywYqEIPtnBKlf9Ajx0tpzPsxD7aU04Gn5prZKaIteMQ1%2FTf%2FX0x%2FKnkVR7XV1gj7cxvzxOpBKkjrGZoH87mOESi86FDi2N0imDozZBfAG0yPz%2BMmbFNGA2rqHfFtGF%2FOkQ1jHLnzuKD1mN9Ue0GOd1Z6faUm5tIK6czvIxk6r9sHruRP3OekB50D6%2Bmr&X-Amz-Signature=d8fb1b2cea10f176f52526aaaabd4232d7512964d878f06fab5279624a06d885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEWI7KU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiCOnTKsxn1bj7X7hqo%2F0Kfikul0rq8rGo1iXODufzwIhAL%2FTN6YutkMatVVW8xv0Cfml4hfHJA0D5nZtHC0IbF%2BfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2Yp9MqtofDCz7JIq3APcGGEcy1pxiv7%2F4JhC587pGV1JiP8DCJswg9G5RJruiWc8NNZHvdiSnlEjIiqqqFheqIBfFD52YMtehshWdusYh2LzDqPoB48fk2BarJIsoxILkB%2F%2BXR5Mf5Ulixh0v%2Fr8kXztei8CBCpgIiJD6UVbRZnX9Nj9XaKasSV32SVVLy5ojKCQhVDRubWGqGm1pMgnj6QuLn8k286%2F%2BFjUtKk3IgIy%2FOLEy1nEyHCCupdLiy9BFit%2BB11tGKdaQPHg2vQ4gnQ%2BBH%2BpTkTjSUDmd%2FLjU4A0b4LrcY0ThiBSIoEsjDT8hylMlErQDhme6H0Kt0YDr4ww%2B365kIwoD5Dog486WwKlrijaODMcfvQGZ9i2OGq7yX9sWXLT6i0U0cCdWkx2dhZB39f419i7cVxixWsW940I%2FkTosBud8Ny9FmiVEY6hfEga9kqBeIHHoq5JOQ2P85rHdrkqPusQsl7%2F9ifZze20WMnx1%2FNWRmnwKslAdJf%2BbT3clbgyKKpk1Q5W9Biq0g7yjExuZeMzFBd4k612Jq%2FjLX06l9%2B7d1d5RSDg29Blpc0SOApUpvdCnLtQs%2BtxsrEyoWOLt%2BSQm9My3CYO085Daa3Xf1dBOrzoqFIM1mDvxNhMQWSWbMRVCjCHuO7DBjqkARH3VMQzlAQE1ELuoPpMOyUfzuoS05SOywYqEIPtnBKlf9Ajx0tpzPsxD7aU04Gn5prZKaIteMQ1%2FTf%2FX0x%2FKnkVR7XV1gj7cxvzxOpBKkjrGZoH87mOESi86FDi2N0imDozZBfAG0yPz%2BMmbFNGA2rqHfFtGF%2FOkQ1jHLnzuKD1mN9Ue0GOd1Z6faUm5tIK6czvIxk6r9sHruRP3OekB50D6%2Bmr&X-Amz-Signature=9086638818d40f5ecce966ce6e9a9402ed992d66048763e2037229c14265ee20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEWI7KU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiCOnTKsxn1bj7X7hqo%2F0Kfikul0rq8rGo1iXODufzwIhAL%2FTN6YutkMatVVW8xv0Cfml4hfHJA0D5nZtHC0IbF%2BfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2Yp9MqtofDCz7JIq3APcGGEcy1pxiv7%2F4JhC587pGV1JiP8DCJswg9G5RJruiWc8NNZHvdiSnlEjIiqqqFheqIBfFD52YMtehshWdusYh2LzDqPoB48fk2BarJIsoxILkB%2F%2BXR5Mf5Ulixh0v%2Fr8kXztei8CBCpgIiJD6UVbRZnX9Nj9XaKasSV32SVVLy5ojKCQhVDRubWGqGm1pMgnj6QuLn8k286%2F%2BFjUtKk3IgIy%2FOLEy1nEyHCCupdLiy9BFit%2BB11tGKdaQPHg2vQ4gnQ%2BBH%2BpTkTjSUDmd%2FLjU4A0b4LrcY0ThiBSIoEsjDT8hylMlErQDhme6H0Kt0YDr4ww%2B365kIwoD5Dog486WwKlrijaODMcfvQGZ9i2OGq7yX9sWXLT6i0U0cCdWkx2dhZB39f419i7cVxixWsW940I%2FkTosBud8Ny9FmiVEY6hfEga9kqBeIHHoq5JOQ2P85rHdrkqPusQsl7%2F9ifZze20WMnx1%2FNWRmnwKslAdJf%2BbT3clbgyKKpk1Q5W9Biq0g7yjExuZeMzFBd4k612Jq%2FjLX06l9%2B7d1d5RSDg29Blpc0SOApUpvdCnLtQs%2BtxsrEyoWOLt%2BSQm9My3CYO085Daa3Xf1dBOrzoqFIM1mDvxNhMQWSWbMRVCjCHuO7DBjqkARH3VMQzlAQE1ELuoPpMOyUfzuoS05SOywYqEIPtnBKlf9Ajx0tpzPsxD7aU04Gn5prZKaIteMQ1%2FTf%2FX0x%2FKnkVR7XV1gj7cxvzxOpBKkjrGZoH87mOESi86FDi2N0imDozZBfAG0yPz%2BMmbFNGA2rqHfFtGF%2FOkQ1jHLnzuKD1mN9Ue0GOd1Z6faUm5tIK6czvIxk6r9sHruRP3OekB50D6%2Bmr&X-Amz-Signature=bed808ba38a4a75cde432c120b4ca583a41c39e56938a26f62d8ff376497ec96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OCNTGXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv%2BazKx9BDKzqnVhOXzVtNG%2Bf0oEHv1XbzQDEvEtoCEAiBxFvgrLelS%2FGZdpVqKEqn4v6zyWhykvRQdDNilLUVEziqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUysFWBiPQMElKjXRKtwDjiP2KtXUL7dqemee5ddZOirn94YvN0PdAiLTyhxVdrTfs1AWdx5UkwdcVRq14hPgHx1Uvau33J%2BiJTGHhtbwCx4pSQwFufVcuV3iJ7vES2mr2D%2F5syu4w1uK9LQIvMeaJfKS5wqGg3Zxze8Y5exCtBrkVZF%2BAoQA1mKRO0K3LvnOaEUB9PaeqqKm3Cp%2BNX0aKkLxc4SuxIMI5%2BaHszQM7ISxqU8vtWsUltMuRA4UOQX9z%2Fh5dZDs690vruytbst38YxeGbmlz2hnOxA1nM0vEqxSDyzEoYanqGmeBD3mqKXW%2BUn8X2S4TERqNt42F1lGGSQpzAe1b23GNQOp43SeMg0VhCraYZ9%2BVZirM8ssG2pI1DEVhLrb6eXPjtxwUFi4PNTPxzVXfU4ImjNMY4TwxkvhTiF2Xq6%2FYVbPCo5V8u%2FWVEe%2BFsDkwOqIfoTMNaabYJsDGtN7xelEUqhA3IYg00tuiU6S4FBexaT80Z87RK0Obv2d12YcqImQqfutbqXYK%2Bj1eN2Ky6O3jo5KSaeEI%2Fo0ElhoKfRaTa9fKtcDkGBCAtzNvSNWhyvMsW0%2BIsu4OkmvdbjekBbcpF50YT3MJlgIQKOB4CZLkOafSoeu5E9MX%2FWTI3rcojpsJs8wxbfuwwY6pgFIOq2KjB4v%2Fo5ZRllg%2BWMsjOLu11XVQYHBscS6PIjJGujGe4MyDUbyS%2BuQlUjRra%2FfOk1cM5%2BOSTpfw3KZbpWAmvpnLgoQIkmRPDTsDbmizHmRKQsSEsK%2BMtJN7TbeVjrVTJIftSpbfuvEcLuoPn5C6B1eQ3iC9T5LiIpHh9ufxv4BUFKK4CB8lNnn3zs87APFhqfmGL%2FO5QU65sy8JaWohfI3OWGa&X-Amz-Signature=ea57af0d87f37054e78442a460a07cd0cf5af1cda9c161baa2d2fd25cb272af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYSNO7K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnu3R7dXwo1jYuwcg%2B%2B3PJtjYZAJ9pWT72rdWhxMaTiAIhAI4KkbIKHNlJKmExUqfJcwgEJNoxlsxrls4aRKryDLLpKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5csxtISQmcmcyVt4q3AM83mjTVjdsZ6hZ7hzk8Wyld1xf%2BW8Udgw8gR5pl%2F4O2z%2Fn7%2FRvH0F8gCcSnESE29FWXrimGJcEKSQ61SiHTdYa8fkigT2iquh5ZR1lUWDaY4Gh2uQL05rpbFchOnklJbIt1%2BGi3tSJjHVNzZKphwfhPpDqARQtaipSez6K4fCqoWmurhvPxXtuJQxYntx6bDtiVaV8ax04qDPxFY%2B5JlurcnXIqZOMk8AqtTjsyAZXXSHjLfZUeHnyVbj%2BENC8xgxwmzMF%2FtcAXl9Kc0bVTK%2Fy39ME6ziUC5nCdB7nyYnbalclbRiQkPHprV2RxMYONHwPtlbFDLPg6DMQi8dO5qq57jZUijotjrjWR8ZQr%2Fs%2BKRhyd8u%2Bf8TYQDwEKbxUOgPhFwbNBhWadFnTdo%2Bz0WjFXTUdjVSD6%2FLgG5H6UtTMu9FHt9J%2BmulCQK6SmS9WZ2NrRBt7GpTbX7n77IvYgWddNIhF0WhjjkzB6GYRFKoRLoCjW0MDhciiO1OnGWV4Y43YGrfLJlM9syWdlCQG0ZPPXs711WHcAbtC5gfHVWTMf5aDhTwa2mF%2BGt%2FNSkTCUNMFSB8B58djPtJZLWIyp4AzfML%2FAAvLLouwvq4KDTuS%2BEo8%2BUQuPCcsfC7zNTCcuO7DBjqkAdaOG7xm4IMhjtyd6w5oJhplVBXL52MdX90rOdbuRWmGKAZl%2FlOv2mQ%2F7bRXRmv8fTII2hLkWRFeBmSd7xKIluHkEZvFEsyKudh2MiWUFtuG1ch6zWpCu4SAeGoXEeZjNrUSWrBiAbJTVJ5FfC9dcBs86D1psMB342jgxK7rV5k82PPvQO2%2FXnRNAY37D0owduAKKylHQG3dLKl%2BqOQ9ZaYmHpcy&X-Amz-Signature=94e2388a0a108ced40df75b12abbcdf50c70aad1ce1219620885ee314583e521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEWI7KU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiCOnTKsxn1bj7X7hqo%2F0Kfikul0rq8rGo1iXODufzwIhAL%2FTN6YutkMatVVW8xv0Cfml4hfHJA0D5nZtHC0IbF%2BfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2Yp9MqtofDCz7JIq3APcGGEcy1pxiv7%2F4JhC587pGV1JiP8DCJswg9G5RJruiWc8NNZHvdiSnlEjIiqqqFheqIBfFD52YMtehshWdusYh2LzDqPoB48fk2BarJIsoxILkB%2F%2BXR5Mf5Ulixh0v%2Fr8kXztei8CBCpgIiJD6UVbRZnX9Nj9XaKasSV32SVVLy5ojKCQhVDRubWGqGm1pMgnj6QuLn8k286%2F%2BFjUtKk3IgIy%2FOLEy1nEyHCCupdLiy9BFit%2BB11tGKdaQPHg2vQ4gnQ%2BBH%2BpTkTjSUDmd%2FLjU4A0b4LrcY0ThiBSIoEsjDT8hylMlErQDhme6H0Kt0YDr4ww%2B365kIwoD5Dog486WwKlrijaODMcfvQGZ9i2OGq7yX9sWXLT6i0U0cCdWkx2dhZB39f419i7cVxixWsW940I%2FkTosBud8Ny9FmiVEY6hfEga9kqBeIHHoq5JOQ2P85rHdrkqPusQsl7%2F9ifZze20WMnx1%2FNWRmnwKslAdJf%2BbT3clbgyKKpk1Q5W9Biq0g7yjExuZeMzFBd4k612Jq%2FjLX06l9%2B7d1d5RSDg29Blpc0SOApUpvdCnLtQs%2BtxsrEyoWOLt%2BSQm9My3CYO085Daa3Xf1dBOrzoqFIM1mDvxNhMQWSWbMRVCjCHuO7DBjqkARH3VMQzlAQE1ELuoPpMOyUfzuoS05SOywYqEIPtnBKlf9Ajx0tpzPsxD7aU04Gn5prZKaIteMQ1%2FTf%2FX0x%2FKnkVR7XV1gj7cxvzxOpBKkjrGZoH87mOESi86FDi2N0imDozZBfAG0yPz%2BMmbFNGA2rqHfFtGF%2FOkQ1jHLnzuKD1mN9Ue0GOd1Z6faUm5tIK6czvIxk6r9sHruRP3OekB50D6%2Bmr&X-Amz-Signature=75408e3ae04edea5c89d9879f3840a7063a63d9c79e34992ac5b512bf4438ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
