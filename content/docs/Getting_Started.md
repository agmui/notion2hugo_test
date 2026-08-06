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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNY55NZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCqnhtOQhInEKqfd0u4alKBMjXbIuciNaHzFpzTHzMAlgIgNXVh5j3Kmqz7uxG2qFFLa5x3%2F71iS9fXXtnCALrc8Hcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGKk%2BrzLnU6%2BiW4s6yrcA2YJZ%2BzVFajLbtzgcb5yjCdIeAkhZ0aRvE3u3rpjPaQh8IonfqWq2mr%2BuCiewZATLS66CqzyJyWBPNosl0FWtSq6HS8YkABmZk9tdIjCibZtO4hzk4yCezdjIPF6Uu8kiW9KxUNeAcF6VAeg32cdO1PbxV1Xh3FQNgReuf2%2FtDOHqTnYBad5ih3r%2BeOQyvnvpWTr5PlvEO4aI%2BDO34pQxLXl7YRHU1XC12aW4%2FObhe%2FiDE3WoWbZ3dLZKP0hgCpp5rq4nG4lF%2FGJwrZbWeBtOCkEP9ZsGdgafK6C4FhTWpO7WT5tXyjqXisWJRXD7xkwy1VpTJP74hIwpEJ0TwF1ncEO%2B4rg1xVf9a6sylNHZnL9fpc8YjkfoMzZ8yNkM3QGh%2FvnkD%2FaLJMZ0bOFO9HfYjr2U0PRlniaa2WeJZJ7d%2F6YxrPCV%2BxQczEtLFBz4dvu%2BjzySMAe9RRtwleqKiNAJlK3jgTr4uTrb8%2F43Bv4oIJ0dRBT9UgQzXkx8%2BKYu21e9gvQRL1LD6aq2msza3RCNzJ%2BSETSIuTVgSovUOROd5qQSs8aOt6bcIR08KHzZBQSW15cFbQhyOM%2FCd7qJGGGaeEaKnjDQvbZ6SL51qP5463OaDJESbpYUV5XMUqHMMPUz9MGOqUB6KQiAY4m6jDK2%2Ff7zwb88SzuT9%2FfhTh20PFvBr7VPjaE%2BQkS1VTt1arA0K4sc8CCi%2B9mJqQ5F5I4KBZseRXEEOLJA%2FuN1Hz%2B8CtnF3rPA%2BarAp5yvJIeHRumKPKBQ6EPRZ4OGtT41z1KNNDmiJICJTKUCyYXnn6NRFa1iF892tAtFDYvfFr4tVAeIZxQxNKhHoCFBk09wWc31s%2Fos6iLgmNCd3Lg&X-Amz-Signature=4edd2f93f11479577a27c3d193ee71a00a62e7822e3db2e308d4ef008fc228af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNY55NZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCqnhtOQhInEKqfd0u4alKBMjXbIuciNaHzFpzTHzMAlgIgNXVh5j3Kmqz7uxG2qFFLa5x3%2F71iS9fXXtnCALrc8Hcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGKk%2BrzLnU6%2BiW4s6yrcA2YJZ%2BzVFajLbtzgcb5yjCdIeAkhZ0aRvE3u3rpjPaQh8IonfqWq2mr%2BuCiewZATLS66CqzyJyWBPNosl0FWtSq6HS8YkABmZk9tdIjCibZtO4hzk4yCezdjIPF6Uu8kiW9KxUNeAcF6VAeg32cdO1PbxV1Xh3FQNgReuf2%2FtDOHqTnYBad5ih3r%2BeOQyvnvpWTr5PlvEO4aI%2BDO34pQxLXl7YRHU1XC12aW4%2FObhe%2FiDE3WoWbZ3dLZKP0hgCpp5rq4nG4lF%2FGJwrZbWeBtOCkEP9ZsGdgafK6C4FhTWpO7WT5tXyjqXisWJRXD7xkwy1VpTJP74hIwpEJ0TwF1ncEO%2B4rg1xVf9a6sylNHZnL9fpc8YjkfoMzZ8yNkM3QGh%2FvnkD%2FaLJMZ0bOFO9HfYjr2U0PRlniaa2WeJZJ7d%2F6YxrPCV%2BxQczEtLFBz4dvu%2BjzySMAe9RRtwleqKiNAJlK3jgTr4uTrb8%2F43Bv4oIJ0dRBT9UgQzXkx8%2BKYu21e9gvQRL1LD6aq2msza3RCNzJ%2BSETSIuTVgSovUOROd5qQSs8aOt6bcIR08KHzZBQSW15cFbQhyOM%2FCd7qJGGGaeEaKnjDQvbZ6SL51qP5463OaDJESbpYUV5XMUqHMMPUz9MGOqUB6KQiAY4m6jDK2%2Ff7zwb88SzuT9%2FfhTh20PFvBr7VPjaE%2BQkS1VTt1arA0K4sc8CCi%2B9mJqQ5F5I4KBZseRXEEOLJA%2FuN1Hz%2B8CtnF3rPA%2BarAp5yvJIeHRumKPKBQ6EPRZ4OGtT41z1KNNDmiJICJTKUCyYXnn6NRFa1iF892tAtFDYvfFr4tVAeIZxQxNKhHoCFBk09wWc31s%2Fos6iLgmNCd3Lg&X-Amz-Signature=07458b853f7349a63b635b6ed3b9c70b0426989708a1e27c394a9480e14fb6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNY55NZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCqnhtOQhInEKqfd0u4alKBMjXbIuciNaHzFpzTHzMAlgIgNXVh5j3Kmqz7uxG2qFFLa5x3%2F71iS9fXXtnCALrc8Hcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGKk%2BrzLnU6%2BiW4s6yrcA2YJZ%2BzVFajLbtzgcb5yjCdIeAkhZ0aRvE3u3rpjPaQh8IonfqWq2mr%2BuCiewZATLS66CqzyJyWBPNosl0FWtSq6HS8YkABmZk9tdIjCibZtO4hzk4yCezdjIPF6Uu8kiW9KxUNeAcF6VAeg32cdO1PbxV1Xh3FQNgReuf2%2FtDOHqTnYBad5ih3r%2BeOQyvnvpWTr5PlvEO4aI%2BDO34pQxLXl7YRHU1XC12aW4%2FObhe%2FiDE3WoWbZ3dLZKP0hgCpp5rq4nG4lF%2FGJwrZbWeBtOCkEP9ZsGdgafK6C4FhTWpO7WT5tXyjqXisWJRXD7xkwy1VpTJP74hIwpEJ0TwF1ncEO%2B4rg1xVf9a6sylNHZnL9fpc8YjkfoMzZ8yNkM3QGh%2FvnkD%2FaLJMZ0bOFO9HfYjr2U0PRlniaa2WeJZJ7d%2F6YxrPCV%2BxQczEtLFBz4dvu%2BjzySMAe9RRtwleqKiNAJlK3jgTr4uTrb8%2F43Bv4oIJ0dRBT9UgQzXkx8%2BKYu21e9gvQRL1LD6aq2msza3RCNzJ%2BSETSIuTVgSovUOROd5qQSs8aOt6bcIR08KHzZBQSW15cFbQhyOM%2FCd7qJGGGaeEaKnjDQvbZ6SL51qP5463OaDJESbpYUV5XMUqHMMPUz9MGOqUB6KQiAY4m6jDK2%2Ff7zwb88SzuT9%2FfhTh20PFvBr7VPjaE%2BQkS1VTt1arA0K4sc8CCi%2B9mJqQ5F5I4KBZseRXEEOLJA%2FuN1Hz%2B8CtnF3rPA%2BarAp5yvJIeHRumKPKBQ6EPRZ4OGtT41z1KNNDmiJICJTKUCyYXnn6NRFa1iF892tAtFDYvfFr4tVAeIZxQxNKhHoCFBk09wWc31s%2Fos6iLgmNCd3Lg&X-Amz-Signature=876bee3dcf511e25f22390a553b5a116b442317306867ba2c0294f941f444807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQUFGMF%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEunzD552BPttgrPP5Z9MX1OqaNJ5ql7nzHRHkhrNfzUAiAm7yiiplpcVPNXHhkBro%2FHwqQVDlhM54CKjkzxT6OG2Sr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMZEY3oug5QsxXGHpCKtwDSnkjtOpsJETWK9NOCjgAogXC9EUCGa%2F8TT%2BWoeV8EIYd5iHHqsK6hK7GkbPxG%2FEN0CJPg9gm3IxyDfGU2VgdlktCxVAKgbhIpalTGDRS4XO10X2D2EU2A8Sr6ES0fTm6xPrbMVNIAMfRcqGA3oBrHRNxMSphCfmjCGwXxc3k2byb98%2BwkIPg6LyMUxYycWDT4F956THFCJhW%2FcHsLeTxUu3DKTzlUGQoBRKdMH%2FfpidQnAwJ%2BUNtW%2FStldf3DTtCXYQmyDXWyt3LjSPgvQ%2B5QdfPn5kqw0pNP0%2BHUERmT4I4e%2B%2F%2FGqyolfyMxDLOqvEymZ3WKi%2Fo%2Bjw0eGolfw2VlugVhgDapNFfh6gPkYJalxnE12mG6COIMcnL0XBqn42V%2BQE2jP2uDvZ33nh%2F7OJD%2FLP9RqI5a2PCUjb%2BrUBC7hYfoyhbhs0XY%2B6PKDZv3WU6DSd8vWjbc47kbhH%2F7I5Q%2FmJMSrp9tixO3%2FnF3KITUMaR46B1oZRh%2FuC7c8hfyylMlGH7B2bmk0PaI0aqdLengrm8A4TmuISu2DfClTML08hItDfB3ISO5SzrW5R4IQzCtFHCLDn1qgGegeieis75zKCl6PcLeAydG644ruYKHeGiUVdcv9REiOzCswkwldbP0wY6pgGgCjUtOSwG9elF7C3XmJyH38zFHOfItE5QSIGYgPwahaoQHXX8mZoKxgAB8bc4E%2B4PXMrgcWUP3F%2BAJ1pEViLi65fOkyGAPDbBQ4u%2B9SFISRTFCkUKuh2D9xNDYSiamwdn5j8pCO9aCKevCCUKS3T0%2BLaco8fxpFcUSmpuAAKz2RF4CN%2FAs2TvNAbgpl9JD7XSVelqy5qNiMUX8MXA%2BrF3gscllFvE&X-Amz-Signature=418b81f90f48492ab55bcf28610e2611e08e0edeff9d4958550eb8e83db61eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SXZASF%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB2nLE9td9Fg%2FtgAf3R7VnYFfKlO0L6IemaKKCdnln%2FTAiAJdokdKWzvzyOtjENMqTOVAyrgu4AcH8lD4DDtjEmXuir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMD8HBs9WRf100tx77KtwDJ%2Bkh8SdFsL%2BIYKXGnrc2GuhasW3novNql32E2ceg7htHPMWKxVNZmnoU6ankSI2ylH7fFtlGMSudgj8TkMYKu4ayhl5%2FQblA9wlP6bgcRUYaTLb6hOOUQkygZGjskCiwF0CFG5QYrNwSw1osmkP8g2eCBDdhysgZymqjvKhbRRwaETm8dCYTCopHbIzyISkkMvMkdzZAUQhnm1HT93tfoyJPQ4jCBZcKpWts%2Bgn9yGigr13AK1I6NWU2mLxcY7RqQ%2Fun%2BHhmb2YcQW1NZJspou7FP7EDWxqO%2BuaXZ%2FiH3EfTmSRQ8mGcVaHtM%2B1o6PoPeNRzk0WOHrI6xvVyUdgaYD%2F1AQPwmGkdiPGGQCm927P18AEzDioGu%2FEFNgCOSk2rbQCHwZwjEv%2FbGszo55TnaZ%2Bd9PMksGdVEyRKlqVyrTXfOUzX5XzBEnkENlTjMOxLDV%2FlyD7pxm5wTr0UXkq%2Bqs9sAbMxVZG75ForHOJwpx875Bjp%2ByQ9vntSz2SPVqxG8N1ETIex6selB3cdnNIF84AaKoZgtjkJcxLv2YcOcds244MrUS%2BVqdfgABRsva50CtGJiF3IeDhGo7j7K3Ncjx4k1CRTfj00bZX7DE0FtKhkGP78P2DewLnef74wwNbP0wY6pgHkBcTSsgWCnJ5ZA7678GWD8Wpx%2BYD72EOs8sxwed8hPwIhbP7%2FeqVcMKTARDd%2F%2B1jX5eJY4Q%2FUgSHkZcy7R8U%2BCvI1309SKsS9zMTsfSksmJERV4YdjIgH3xq6gA1lqgUXL5hh2fkhf3YkDcpJfFGeBSs6KwdOY2vk%2FjYV%2FsIy0l40X%2F0%2FGf30MljEWrhqjePIY4L0pk4vUHOXhHS5VqicVrl5cv0a&X-Amz-Signature=10ec498b5eaa2a727afeea15b82551231624142d9864199c333238490559517a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNY55NZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCqnhtOQhInEKqfd0u4alKBMjXbIuciNaHzFpzTHzMAlgIgNXVh5j3Kmqz7uxG2qFFLa5x3%2F71iS9fXXtnCALrc8Hcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGKk%2BrzLnU6%2BiW4s6yrcA2YJZ%2BzVFajLbtzgcb5yjCdIeAkhZ0aRvE3u3rpjPaQh8IonfqWq2mr%2BuCiewZATLS66CqzyJyWBPNosl0FWtSq6HS8YkABmZk9tdIjCibZtO4hzk4yCezdjIPF6Uu8kiW9KxUNeAcF6VAeg32cdO1PbxV1Xh3FQNgReuf2%2FtDOHqTnYBad5ih3r%2BeOQyvnvpWTr5PlvEO4aI%2BDO34pQxLXl7YRHU1XC12aW4%2FObhe%2FiDE3WoWbZ3dLZKP0hgCpp5rq4nG4lF%2FGJwrZbWeBtOCkEP9ZsGdgafK6C4FhTWpO7WT5tXyjqXisWJRXD7xkwy1VpTJP74hIwpEJ0TwF1ncEO%2B4rg1xVf9a6sylNHZnL9fpc8YjkfoMzZ8yNkM3QGh%2FvnkD%2FaLJMZ0bOFO9HfYjr2U0PRlniaa2WeJZJ7d%2F6YxrPCV%2BxQczEtLFBz4dvu%2BjzySMAe9RRtwleqKiNAJlK3jgTr4uTrb8%2F43Bv4oIJ0dRBT9UgQzXkx8%2BKYu21e9gvQRL1LD6aq2msza3RCNzJ%2BSETSIuTVgSovUOROd5qQSs8aOt6bcIR08KHzZBQSW15cFbQhyOM%2FCd7qJGGGaeEaKnjDQvbZ6SL51qP5463OaDJESbpYUV5XMUqHMMPUz9MGOqUB6KQiAY4m6jDK2%2Ff7zwb88SzuT9%2FfhTh20PFvBr7VPjaE%2BQkS1VTt1arA0K4sc8CCi%2B9mJqQ5F5I4KBZseRXEEOLJA%2FuN1Hz%2B8CtnF3rPA%2BarAp5yvJIeHRumKPKBQ6EPRZ4OGtT41z1KNNDmiJICJTKUCyYXnn6NRFa1iF892tAtFDYvfFr4tVAeIZxQxNKhHoCFBk09wWc31s%2Fos6iLgmNCd3Lg&X-Amz-Signature=a574a641a14dbda7711388e65b0e30d6828f1025d6835c343e839892af2a6637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
