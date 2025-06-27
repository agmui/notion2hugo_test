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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3IT6EA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFd9sL6%2BIASMtgn8T6p9R3jLUmLNUcDLs3LpdBJCPznXAiBwsTkpYUXR%2FFYc0OWiVU%2BEpqL3gvx0UxVD056l3hbwOSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM6TL3OrPoHokMzojyKtwDwqtdZKll8aAZ30D8wz68iaMKIsj7BF1YxqRJ7Z34IF8sA3y44DXiz8ufjSH5QLPkqfJN6L7mrSZ4ffI%2FFaK89U7r1EM%2BxoF3NsmrmyH52o2P%2B%2Fg19ChdQDV%2B%2BaaOzQFQMhnq5DrAVzH9vcoWIUKSyqpZvsV9W30fXlO%2Bu1lguCwR7c%2B5p%2FL%2BrdQuAYaofQyxD812J6qWWxhI5RrcqckzyvRvGgV7VoJJIPedviB%2BNQ0J6nSkn1EI2A0nGNszuHm%2BZzAS5oofCE1bGeiMa4HJWnVvLNSXC99GE2B14N1YsMNPUQFGpcD6K2UIe7EQj9tgRDtrMJ8yTHEJGi8rzKKwNMvm%2BQhcLd2n1W2HSglyXLCeHtRUqLJN0MRoqaebFEBbvrJkcJ%2Bj1l7ondq5S6X9IY3SIFOEuotOkd02OGV5XsBWGr9bfpxCuBGL1I1ucIuycZIdxZUM3ZaxQF80wABVIsITvjlWEQ6LEvrj%2BxZ4Nc0TyIDqxbU3TCsOEm18FvXzwUJLpLEpMZiPqVVE%2FQE4%2B%2FixL2Q2zxqoUdZD1KqO%2FZReRVAvbBJGTfniMHIfqkkDkDoaDBGZ1dClpafpBj5ykxfcDfDMPz8TvrrSIL%2F62zrWhWLGmVymC5L2wNQw3cn4wgY6pgFB6B6Mcur0z6nd9cbFI4Ikews25HGuIqncQNgg4yB1Gv%2BMHaFhWe%2FtjqJKzjRzWFsseAbk4r5NsbToEObOYT4RHbQ2Own%2BzBLW8ZfVsZHnWcmhId35FJxSHRVVEkZBEuTYzYAXWPyF3Pscb9dH7SkiAxLf%2F4WatGN0uNeGqDPaFZbP9rmR0M5TwcOz%2B56yodwzpA8Tao21eSY9TfcdGBONUnhNvsYl&X-Amz-Signature=499d4efba781f11cc59ca23a4a0656e4952c33e603225ad21b0b71e3144d4158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3IT6EA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFd9sL6%2BIASMtgn8T6p9R3jLUmLNUcDLs3LpdBJCPznXAiBwsTkpYUXR%2FFYc0OWiVU%2BEpqL3gvx0UxVD056l3hbwOSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM6TL3OrPoHokMzojyKtwDwqtdZKll8aAZ30D8wz68iaMKIsj7BF1YxqRJ7Z34IF8sA3y44DXiz8ufjSH5QLPkqfJN6L7mrSZ4ffI%2FFaK89U7r1EM%2BxoF3NsmrmyH52o2P%2B%2Fg19ChdQDV%2B%2BaaOzQFQMhnq5DrAVzH9vcoWIUKSyqpZvsV9W30fXlO%2Bu1lguCwR7c%2B5p%2FL%2BrdQuAYaofQyxD812J6qWWxhI5RrcqckzyvRvGgV7VoJJIPedviB%2BNQ0J6nSkn1EI2A0nGNszuHm%2BZzAS5oofCE1bGeiMa4HJWnVvLNSXC99GE2B14N1YsMNPUQFGpcD6K2UIe7EQj9tgRDtrMJ8yTHEJGi8rzKKwNMvm%2BQhcLd2n1W2HSglyXLCeHtRUqLJN0MRoqaebFEBbvrJkcJ%2Bj1l7ondq5S6X9IY3SIFOEuotOkd02OGV5XsBWGr9bfpxCuBGL1I1ucIuycZIdxZUM3ZaxQF80wABVIsITvjlWEQ6LEvrj%2BxZ4Nc0TyIDqxbU3TCsOEm18FvXzwUJLpLEpMZiPqVVE%2FQE4%2B%2FixL2Q2zxqoUdZD1KqO%2FZReRVAvbBJGTfniMHIfqkkDkDoaDBGZ1dClpafpBj5ykxfcDfDMPz8TvrrSIL%2F62zrWhWLGmVymC5L2wNQw3cn4wgY6pgFB6B6Mcur0z6nd9cbFI4Ikews25HGuIqncQNgg4yB1Gv%2BMHaFhWe%2FtjqJKzjRzWFsseAbk4r5NsbToEObOYT4RHbQ2Own%2BzBLW8ZfVsZHnWcmhId35FJxSHRVVEkZBEuTYzYAXWPyF3Pscb9dH7SkiAxLf%2F4WatGN0uNeGqDPaFZbP9rmR0M5TwcOz%2B56yodwzpA8Tao21eSY9TfcdGBONUnhNvsYl&X-Amz-Signature=3e5774c7a7d312bcf265a11b40258d36ed62fe1a5d1bd70deb4727e465a08568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3IT6EA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFd9sL6%2BIASMtgn8T6p9R3jLUmLNUcDLs3LpdBJCPznXAiBwsTkpYUXR%2FFYc0OWiVU%2BEpqL3gvx0UxVD056l3hbwOSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM6TL3OrPoHokMzojyKtwDwqtdZKll8aAZ30D8wz68iaMKIsj7BF1YxqRJ7Z34IF8sA3y44DXiz8ufjSH5QLPkqfJN6L7mrSZ4ffI%2FFaK89U7r1EM%2BxoF3NsmrmyH52o2P%2B%2Fg19ChdQDV%2B%2BaaOzQFQMhnq5DrAVzH9vcoWIUKSyqpZvsV9W30fXlO%2Bu1lguCwR7c%2B5p%2FL%2BrdQuAYaofQyxD812J6qWWxhI5RrcqckzyvRvGgV7VoJJIPedviB%2BNQ0J6nSkn1EI2A0nGNszuHm%2BZzAS5oofCE1bGeiMa4HJWnVvLNSXC99GE2B14N1YsMNPUQFGpcD6K2UIe7EQj9tgRDtrMJ8yTHEJGi8rzKKwNMvm%2BQhcLd2n1W2HSglyXLCeHtRUqLJN0MRoqaebFEBbvrJkcJ%2Bj1l7ondq5S6X9IY3SIFOEuotOkd02OGV5XsBWGr9bfpxCuBGL1I1ucIuycZIdxZUM3ZaxQF80wABVIsITvjlWEQ6LEvrj%2BxZ4Nc0TyIDqxbU3TCsOEm18FvXzwUJLpLEpMZiPqVVE%2FQE4%2B%2FixL2Q2zxqoUdZD1KqO%2FZReRVAvbBJGTfniMHIfqkkDkDoaDBGZ1dClpafpBj5ykxfcDfDMPz8TvrrSIL%2F62zrWhWLGmVymC5L2wNQw3cn4wgY6pgFB6B6Mcur0z6nd9cbFI4Ikews25HGuIqncQNgg4yB1Gv%2BMHaFhWe%2FtjqJKzjRzWFsseAbk4r5NsbToEObOYT4RHbQ2Own%2BzBLW8ZfVsZHnWcmhId35FJxSHRVVEkZBEuTYzYAXWPyF3Pscb9dH7SkiAxLf%2F4WatGN0uNeGqDPaFZbP9rmR0M5TwcOz%2B56yodwzpA8Tao21eSY9TfcdGBONUnhNvsYl&X-Amz-Signature=bb7874df2a218b7ff9f999e0833a69b9c1107d7662bcf0cbdbea2d82c35a22d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4CIW3W%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDnRiZ3Oa2xpaxc0i7HH4pdnKTkaSisZuVVVcHBMAEgFAiArUmKwcRFpYDbHQur6dyUyPGZMrFmGbnh5RRlWGDavlCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMcmrTXAorH9gLiD%2FVKtwDFQu8dPj3xE5iIwKkF%2Bgin%2FQhvVnabvxT0yd%2FSrD8eaVRl8%2FV7IsYPRPCFAbDa1MRayaos9%2Bq9SydzqETh1dFp452Rk7cFpypkUirHDzRFVpIGMSTs9AoWevVAm3F8alwPSH25wqQX7yisH8zniUOfxsWIWfRBQ5UE3DDaE3DAkBjvnSnBa5%2FYzcW%2FiWkTipoceRqpcYLYkG2hAgH0iCACyjoJ3Q%2BNf8G8lusfqxwyXt0OMFGdiJfuRfPu9%2FU43RKFRnyw5QUJ0sOfsuV2CDKy6s%2ByOcF0dKLi%2Fh0tGWGUiM6i%2BeNe%2FGiNWoqwDF9axMr1sbl%2FaSPUJuwWWogL1BCSl5Ly4JJCUxCs57eyacF9zsfZa6yS76IFc9i6pm05fb0O3L9S9PDcbY4biMPe3itJPCWZiOPhrAhLEwM4aHz0hPVllnn2RyhTe0ZSfyFCfSxB1xQH0YTKDAgaD5f3fJOdCwdFSoBb8GELqM3Z%2BV83mC2upgsYyPheAahL9opnKmqkamApsSZhsSryGxE%2BpC4ESuzD5qmzIdz3QT%2BwmlfFCQQTAfE3yUlA7uw5uiCsaGGyDH%2BgpmYrXroU0x7G6sq%2BMaEopR83tP9BD0WDvUWtD4MmQfF3IXIKWEbH48wvcn4wgY6pgF4en5UQkrQRFSDTKVVedXoNTsJ%2Frt9rHLGDrwStZm3s88JnPwpsBS%2Bkqw%2F8A8r0SqvABMbVz%2Feiig%2FrvHmVli%2BPkHsCC4j%2FuPQt1qRMfaTk7nBRIhDxlDPYI52oEJTkYVx5hGCWLr3uMW9ECyGK1STdyxkkB3G8r%2FjPXYzsW6PLwsuYi7ADdcaBLv58HVuo5ds4miFKcKvEUFVAWFBeJlHRsXQkGQ%2F&X-Amz-Signature=dcf4a614a261a8e4b9d91fcc0db536d713c84e3ddd13daae655fb2b97bef786e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYUJWR6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAH8jBAwroueh2ZHL8%2FRIGxvyZ28WcglP%2BIz4VWo1EaeAiEA8wt2HzX0471QpDiixIfO%2FLkTDJOCMXnYPuA0jgxStaUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKde0u%2BaA1Qdm3ghiSrcA%2BN9gG%2F6Sk56GCT%2BXyOHT8gagu1t5gA0a1PjV%2F8vuVeuRRBztbQn%2FR90zQOlVt3SB4alBViufVlfwHGR0ALcJmJpdorfknqJnmF2%2B5d1vgPC1WaLWo90Js2eAZ%2FjGg98CkDn8xGAiJKh2tcl21qsHw4F7de2dYHQ2IZYP1IwGwoVr3c0pLDpkzxVmIyA6sYPRqewxnhegNGpHwQX2ewPW%2B%2B8Iz0iufp9%2BBlDfpDUWkUwZo6z4HmE%2B7rFJja7QibsKAEDV1jItWpfZdTy%2BUWqd1d5yGwEmGBsQHo9wTjAdo%2FY8IjqY%2BIX9H3j20X%2BiV6%2F9yKH65ydc6sFcqj2OTkyk6MKXZbr2%2BkE1JpwMeG8z97XjOEEGPfBGStRmxRquiCW3Pq4wwe%2Bty9pZ8VQLvVh5aCiVDxti2TuDHFyLjoHm0XWoiX%2BI0mAYPno%2B%2FheaEc3n6kfTtnyurROsmRERuftr7heEGGZXzLfnzzVepUWYLrRFnmlSuBzToouJFqWeg0UpMNyzS0jCAH5BInKjJGVaX231Waq7ClWzVlfJEzzOgHgXsK2lFY8dx762PvguQElW1E8%2FIdbAFuDi66dpeCBbbhxOQtEO5QfLejDvIBzRplOmLnE%2FMeeP6aUIy8%2FMOfK%2BMIGOqUBXsMUaoduuq730SazmzQYC77PAxh3hmsi%2BuxU4w3VtKEpYTQ2Fy9pBIw%2BQ8zyyAhX9TCsioZsVlloc0yEZEEDYw%2BgqsV5dEOvGx6GI%2Fit6TCocc%2FhgqYw2mdrOBA8kTNaeQbal7Q4yniISrCws0V3D4wmJFN1%2Biay%2FRynUh77rw9erDziSJnQTN1hCKQCeXRvu9%2BbZCEderYn%2F7t3wuOk6DJxd75a&X-Amz-Signature=76a44af3e8291baeb85eb3f865496f6730edcd859ef7c4f9f0d7f1e776c7ad45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3IT6EA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFd9sL6%2BIASMtgn8T6p9R3jLUmLNUcDLs3LpdBJCPznXAiBwsTkpYUXR%2FFYc0OWiVU%2BEpqL3gvx0UxVD056l3hbwOSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM6TL3OrPoHokMzojyKtwDwqtdZKll8aAZ30D8wz68iaMKIsj7BF1YxqRJ7Z34IF8sA3y44DXiz8ufjSH5QLPkqfJN6L7mrSZ4ffI%2FFaK89U7r1EM%2BxoF3NsmrmyH52o2P%2B%2Fg19ChdQDV%2B%2BaaOzQFQMhnq5DrAVzH9vcoWIUKSyqpZvsV9W30fXlO%2Bu1lguCwR7c%2B5p%2FL%2BrdQuAYaofQyxD812J6qWWxhI5RrcqckzyvRvGgV7VoJJIPedviB%2BNQ0J6nSkn1EI2A0nGNszuHm%2BZzAS5oofCE1bGeiMa4HJWnVvLNSXC99GE2B14N1YsMNPUQFGpcD6K2UIe7EQj9tgRDtrMJ8yTHEJGi8rzKKwNMvm%2BQhcLd2n1W2HSglyXLCeHtRUqLJN0MRoqaebFEBbvrJkcJ%2Bj1l7ondq5S6X9IY3SIFOEuotOkd02OGV5XsBWGr9bfpxCuBGL1I1ucIuycZIdxZUM3ZaxQF80wABVIsITvjlWEQ6LEvrj%2BxZ4Nc0TyIDqxbU3TCsOEm18FvXzwUJLpLEpMZiPqVVE%2FQE4%2B%2FixL2Q2zxqoUdZD1KqO%2FZReRVAvbBJGTfniMHIfqkkDkDoaDBGZ1dClpafpBj5ykxfcDfDMPz8TvrrSIL%2F62zrWhWLGmVymC5L2wNQw3cn4wgY6pgFB6B6Mcur0z6nd9cbFI4Ikews25HGuIqncQNgg4yB1Gv%2BMHaFhWe%2FtjqJKzjRzWFsseAbk4r5NsbToEObOYT4RHbQ2Own%2BzBLW8ZfVsZHnWcmhId35FJxSHRVVEkZBEuTYzYAXWPyF3Pscb9dH7SkiAxLf%2F4WatGN0uNeGqDPaFZbP9rmR0M5TwcOz%2B56yodwzpA8Tao21eSY9TfcdGBONUnhNvsYl&X-Amz-Signature=593a723c996c3c7a3feb8329ff66b0397e7a3559e75b607fd58c3a243d2b20be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
