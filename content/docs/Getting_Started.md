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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MFIZWV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdyDr%2BKaLmgTtQe3YdzKiNzMmbd4btFKW9s2vycXJ1qQIhAOr2EBhBFdqG6DAaDqv6kDtdb%2FLkOibEq8sA2QNkA%2Fz6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYJ3KJnCP2l%2BbElDMq3APtKRDd51szAxUrI3qld%2FeH1Gonz28REnMmC7AZnsaU0Kgr7OA%2B3kr%2FRoYl%2BcHaPpH8s%2BJEnWvcQFIxJGq%2BMfCCslggU5EfxHllGNmXEl2ohMv2qfp8SM4NmqW2WJUim9uhq%2BcgtPGqaQo15JEt3%2FoqAqI1vc3jtHD62zhio%2B8Bh2GLe7xhSbOmK%2BPgFassNIEvo4h6Ialfgnb0RSrPRpxsjO3WmivWogD3JRG1aTaaTcBg8EBJSP7WgRzxQ0ATgM1H2VcraB6ehk7YjeOTyjXDLQ786nEaiKHFiK2EV%2BXU%2BBqAhm8gYeSEXEPie4YjIdqO%2BphzYae0uhPaLLGnYB0R1qkHQ%2BmMC3KR2Atrkt2yLWeifzAGJYzMQRtLULak3Uy1jjdCpXEFPraakEhRWWUI3QL%2FyZk%2Bje4uZvLx9wkZbRvYVJWV2Wf3pX0bu77hxacs0CcvAR%2BTkR0EV5iFgw2Ei5s%2FZZfpjNkEHXAvsTSU%2FxdFd2hIv9XT45pAMmEXEpDiu86gIaQcxAnKsaHYH8Clh%2Ba472DdHgP6BTtBwH7D7SLXdzYZznSPmvKS3%2BKiVhPtfWf2%2B3vuMHO0CjMImBBgvqQKOFZstC6JVMQ2udY%2FCOSe4A9nG8oK0UWJEzDq0c%2FCBjqkAS%2FnxxTwkRrbTfO%2BgB0f7ZnAhqJHa5%2Bxyu7l2W8MznsRvJoSFXJRsXmKPqul%2F%2FJsVoxi2nbzHkPf5XmyXWc%2Fq5LWv3KA8njp%2BLbSSxAAtZfebmQ3G9fW3yLIhSn9n%2Fyb12Gr3mHcw58F5%2B3A0A6rhuLAMP3M7aTOpfyJ4fGnO54NF4cVcelyYsTmTg9lpXjh40JThxGAwKco62pWYjlvrSYUUTjj&X-Amz-Signature=de909cd5a032044e14932cabd29f6bf240119c8c9795b49dbed9ace3e2a3e1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MFIZWV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdyDr%2BKaLmgTtQe3YdzKiNzMmbd4btFKW9s2vycXJ1qQIhAOr2EBhBFdqG6DAaDqv6kDtdb%2FLkOibEq8sA2QNkA%2Fz6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYJ3KJnCP2l%2BbElDMq3APtKRDd51szAxUrI3qld%2FeH1Gonz28REnMmC7AZnsaU0Kgr7OA%2B3kr%2FRoYl%2BcHaPpH8s%2BJEnWvcQFIxJGq%2BMfCCslggU5EfxHllGNmXEl2ohMv2qfp8SM4NmqW2WJUim9uhq%2BcgtPGqaQo15JEt3%2FoqAqI1vc3jtHD62zhio%2B8Bh2GLe7xhSbOmK%2BPgFassNIEvo4h6Ialfgnb0RSrPRpxsjO3WmivWogD3JRG1aTaaTcBg8EBJSP7WgRzxQ0ATgM1H2VcraB6ehk7YjeOTyjXDLQ786nEaiKHFiK2EV%2BXU%2BBqAhm8gYeSEXEPie4YjIdqO%2BphzYae0uhPaLLGnYB0R1qkHQ%2BmMC3KR2Atrkt2yLWeifzAGJYzMQRtLULak3Uy1jjdCpXEFPraakEhRWWUI3QL%2FyZk%2Bje4uZvLx9wkZbRvYVJWV2Wf3pX0bu77hxacs0CcvAR%2BTkR0EV5iFgw2Ei5s%2FZZfpjNkEHXAvsTSU%2FxdFd2hIv9XT45pAMmEXEpDiu86gIaQcxAnKsaHYH8Clh%2Ba472DdHgP6BTtBwH7D7SLXdzYZznSPmvKS3%2BKiVhPtfWf2%2B3vuMHO0CjMImBBgvqQKOFZstC6JVMQ2udY%2FCOSe4A9nG8oK0UWJEzDq0c%2FCBjqkAS%2FnxxTwkRrbTfO%2BgB0f7ZnAhqJHa5%2Bxyu7l2W8MznsRvJoSFXJRsXmKPqul%2F%2FJsVoxi2nbzHkPf5XmyXWc%2Fq5LWv3KA8njp%2BLbSSxAAtZfebmQ3G9fW3yLIhSn9n%2Fyb12Gr3mHcw58F5%2B3A0A6rhuLAMP3M7aTOpfyJ4fGnO54NF4cVcelyYsTmTg9lpXjh40JThxGAwKco62pWYjlvrSYUUTjj&X-Amz-Signature=bce33c12117ce8e609235f697ff50590e70d71bb50365d2bf3bb6f0e032019de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MFIZWV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdyDr%2BKaLmgTtQe3YdzKiNzMmbd4btFKW9s2vycXJ1qQIhAOr2EBhBFdqG6DAaDqv6kDtdb%2FLkOibEq8sA2QNkA%2Fz6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYJ3KJnCP2l%2BbElDMq3APtKRDd51szAxUrI3qld%2FeH1Gonz28REnMmC7AZnsaU0Kgr7OA%2B3kr%2FRoYl%2BcHaPpH8s%2BJEnWvcQFIxJGq%2BMfCCslggU5EfxHllGNmXEl2ohMv2qfp8SM4NmqW2WJUim9uhq%2BcgtPGqaQo15JEt3%2FoqAqI1vc3jtHD62zhio%2B8Bh2GLe7xhSbOmK%2BPgFassNIEvo4h6Ialfgnb0RSrPRpxsjO3WmivWogD3JRG1aTaaTcBg8EBJSP7WgRzxQ0ATgM1H2VcraB6ehk7YjeOTyjXDLQ786nEaiKHFiK2EV%2BXU%2BBqAhm8gYeSEXEPie4YjIdqO%2BphzYae0uhPaLLGnYB0R1qkHQ%2BmMC3KR2Atrkt2yLWeifzAGJYzMQRtLULak3Uy1jjdCpXEFPraakEhRWWUI3QL%2FyZk%2Bje4uZvLx9wkZbRvYVJWV2Wf3pX0bu77hxacs0CcvAR%2BTkR0EV5iFgw2Ei5s%2FZZfpjNkEHXAvsTSU%2FxdFd2hIv9XT45pAMmEXEpDiu86gIaQcxAnKsaHYH8Clh%2Ba472DdHgP6BTtBwH7D7SLXdzYZznSPmvKS3%2BKiVhPtfWf2%2B3vuMHO0CjMImBBgvqQKOFZstC6JVMQ2udY%2FCOSe4A9nG8oK0UWJEzDq0c%2FCBjqkAS%2FnxxTwkRrbTfO%2BgB0f7ZnAhqJHa5%2Bxyu7l2W8MznsRvJoSFXJRsXmKPqul%2F%2FJsVoxi2nbzHkPf5XmyXWc%2Fq5LWv3KA8njp%2BLbSSxAAtZfebmQ3G9fW3yLIhSn9n%2Fyb12Gr3mHcw58F5%2B3A0A6rhuLAMP3M7aTOpfyJ4fGnO54NF4cVcelyYsTmTg9lpXjh40JThxGAwKco62pWYjlvrSYUUTjj&X-Amz-Signature=0bc0dbb6aa9b29849455216feb7c287b1c347d749eeda615e7b3c9a851fa1f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2VMK2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyr0h6p1AO4SVPkNLh5gxllZXMVhxqjEQkyMViFM1mjAiEAy9tKZYqfccV%2F7951CZtmX5tP9ykGN1ImQca43EJ%2Fwx8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFuTUfbfXTyt16m7ircA3eyBFshJ5ZUqmmksLQsPd5kKYIvJoTIyq8u%2BKz5aPr5mIAT5ZI4Tq3hWo5qAnau3cPu9wuVHPhzqEKupCCvKL7sxQlRNE%2FMtQk5xL19Sf0O8srzOGibEbzvkyaLxxUb79SrUe%2BoJAXh3EPvwTbAl%2F0suadWYQ5iIPtuUBp4eXKlPs30iNreqDSd8lTx9f7W97ZHC34gq716PuVUMf9p24miDKXCCQNGTOlI8pxMKadn%2BSL9A15Bcv3W7YnyWUGV5dxycwchAxXEqmOZZgTVS3iPCdug%2FdVXKzwS4ECsC%2FgL2k%2B1%2B6xWu57zygZR6WVpbSvYoP8Cskp%2B6On9qkCIoIz9L4Qi10x5NNtukxwbSU0YR%2BeAIKDC0Hi3aTJ6h%2BFzIX9aGqxjr%2Bzw9pCmB1mp6kwSnncfMdsC2AAfAvc6rnluVJc0qFSZp8%2BmqrXw3em0h2Nl9SPvCfd0sQxGGCpx8H9%2FsT65zuKSyFjGaVnySftNDyqHEAOVrXnx4Ha8%2BIXPvEgDc5LWYs9nophs1xh%2B015LnhSvBerG9%2BLhFXZc5GWY6UPNbTi7iqpLIWv%2FNbVbjfzFLS1H8da3Z5D%2BQwzSsBVuKwcrosi63vu2WURRfq9jqp97GyzWCIA8u8lnMLj7z8IGOqUB3Te2ogqIHSi2sKzbKgrMO8wse%2BykcXI0tbqtXPqpWdmjrk6V%2BlMaseCB1Aqx0JwUTWyt39yd3WerW8LXxf%2BfmzzyIYpAyk5UcDz%2BIGCVrmhOEUqe%2FcEhuh4KAyr3RveI%2BowZZEyMgIKzND%2BCKWNej5uuEvFMjDiLkUxoPLURTHKXjrwN9%2BwsJoJMkOXZ3QhIZGYEL50NTBfbcpr8%2BidFPM8eFFJp&X-Amz-Signature=fb0d1dd83d2d5d51a2049ebc0fa2c6c6f8029b44f591c44b56db33dd2d366399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZKNZZG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm4K9xEbMHoi7UOu0%2Fvj%2FgNgLAvhoxKVnVXGSpFtAqrgIhAIW50ZG4p4yXziM09xPvScUiLMzNzhMjbi%2BfV8yg1zPeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BC7kioHXjnIUEU5sq3ANnmiK1mvF2ZSIINJBem1EE6GIXdEC5mbjdPj%2Bk30Y8my9HYq8l3SOTNXXyftxv5s91ueiUSDxx7vZCsSM4I9w4HyIzFwmEFd%2BkZchTBs83BsmJ3cF%2BWUCU5zRLsRO%2FXBAiurF5evtDjYmd%2F%2FG0ZmSh%2FCo3KM%2BxJQcGvc1DfYnJ%2Fw80qZDAf10KZ0JvP8l%2BFBx1uCESeoN4jx20rucUOB30eCN7f3PRCgbF1%2F%2BsWJWacL9u7CprciVbkmOg6Yj6fKkQHyvnQC41KgSt8673en8XO7eMFAkyWxKtoq67dpS41BWL1Mv1z5Z%2BVEGL4gdtiMII6dTftyrFI%2Fh3OwSmL8CfknO2C1pHEqsUqJbzPOXMdpaZIigb%2BlnrQqWRdDhczzzsqtjKUG8HSSBEL0aKuY8HHTw48tvpMqKidrtpYIGMTSSJWE5CzIUP8aahWMheCv6FBWIb02aof8Zz%2BxzzZxaQSRNA0%2BFY2hFFApcmly7ECmQvS%2FiWtYCARUhtmhvtBd9gBcvT3NClV1rJQSudG2%2FOt0M%2FdW%2Fl8Ax1yWK3e7d94ULRShjz7jRoYk5BPrLpHb5dW8ZmB9N756ssvLNAF1Ht2S4oSQQ40Glk2SgDWbmnUT6dtXe2FnNjt5E6tTDm0c%2FCBjqkAZZQkDrOWijOeEkXLJA%2BzN%2Fu%2BH%2BbmZIYJdxtxrx5eY9sf3m7bNXWWtgNg1o4udJicl5wsg9foTs1IC9HLq1FOOcJFoFODjvWUMyAQd6KDVf0i%2FR%2BFnXrkiNiEMjZyqMfk%2FhuUXSH3weQU8mGgfzmSu%2B%2F0QO10kCzQAZ%2FbxpqEzDYCYA0M4oMNR90c%2B95ABjtjamZ2V1%2F3tfxPHyFtLGRAcn33blb&X-Amz-Signature=a9ec162fef986a97c22c32dacdc8dc82a8208164cfa96e4e0f8f8f8c0d45733e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MFIZWV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdyDr%2BKaLmgTtQe3YdzKiNzMmbd4btFKW9s2vycXJ1qQIhAOr2EBhBFdqG6DAaDqv6kDtdb%2FLkOibEq8sA2QNkA%2Fz6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYJ3KJnCP2l%2BbElDMq3APtKRDd51szAxUrI3qld%2FeH1Gonz28REnMmC7AZnsaU0Kgr7OA%2B3kr%2FRoYl%2BcHaPpH8s%2BJEnWvcQFIxJGq%2BMfCCslggU5EfxHllGNmXEl2ohMv2qfp8SM4NmqW2WJUim9uhq%2BcgtPGqaQo15JEt3%2FoqAqI1vc3jtHD62zhio%2B8Bh2GLe7xhSbOmK%2BPgFassNIEvo4h6Ialfgnb0RSrPRpxsjO3WmivWogD3JRG1aTaaTcBg8EBJSP7WgRzxQ0ATgM1H2VcraB6ehk7YjeOTyjXDLQ786nEaiKHFiK2EV%2BXU%2BBqAhm8gYeSEXEPie4YjIdqO%2BphzYae0uhPaLLGnYB0R1qkHQ%2BmMC3KR2Atrkt2yLWeifzAGJYzMQRtLULak3Uy1jjdCpXEFPraakEhRWWUI3QL%2FyZk%2Bje4uZvLx9wkZbRvYVJWV2Wf3pX0bu77hxacs0CcvAR%2BTkR0EV5iFgw2Ei5s%2FZZfpjNkEHXAvsTSU%2FxdFd2hIv9XT45pAMmEXEpDiu86gIaQcxAnKsaHYH8Clh%2Ba472DdHgP6BTtBwH7D7SLXdzYZznSPmvKS3%2BKiVhPtfWf2%2B3vuMHO0CjMImBBgvqQKOFZstC6JVMQ2udY%2FCOSe4A9nG8oK0UWJEzDq0c%2FCBjqkAS%2FnxxTwkRrbTfO%2BgB0f7ZnAhqJHa5%2Bxyu7l2W8MznsRvJoSFXJRsXmKPqul%2F%2FJsVoxi2nbzHkPf5XmyXWc%2Fq5LWv3KA8njp%2BLbSSxAAtZfebmQ3G9fW3yLIhSn9n%2Fyb12Gr3mHcw58F5%2B3A0A6rhuLAMP3M7aTOpfyJ4fGnO54NF4cVcelyYsTmTg9lpXjh40JThxGAwKco62pWYjlvrSYUUTjj&X-Amz-Signature=2ae07b3d6139f0a9b80a1f823630cac06553c908cd4d64a11d5a882e31d1db79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
