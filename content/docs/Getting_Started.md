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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEHO3SM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpOZqKjoqaSjukvKRZ%2F1WLOOy8uKXB1PkACzwasEGgNAiB8Q4lT8V03REbzgGBmIF6AnQ%2BWrDyYopYdxwtlG%2FvZySr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtOo%2Fln2hHAzZFwpQKtwDkI2GvQClPDN%2FYXLuVJTqTsQLu0ORdbPYm%2FggvUKQm4W9jRP0eCbtHAA%2B4x3tDd6alAQtJT6XWAFlmt8foW2IHP7eUDvSTdu%2F%2F93EAYKjhm5yIv7fdMQ7cS7Nj7vRT9R5fEJ3olYVmxHIun%2BKJAltAp2vvMbWcrnyhjbKzXHrlVZbyquC2NjU19aqgRGm5UqolrCGn2qJbh8AhSyjw3ZU0q7wXJwxlhLMy8utZ%2Bwaz8VBj4u6sYWQloza2jJYr0rXzaeniC7MuCBGA2VCuCggJoFFVrtS6nXWKZbSC7bRIZzmiwRtfPK%2FPqRmQB8cENCVTBoTTeY9qNaV5yXWPOiTBkbrKHQQPzmDVioZIdnlMN0gdiBeKR%2BpEo5BL9HGREyDrKNVL1%2B3eDJcnKfa%2FOunvG11xYZc1vAFHBCBFyKTkNPvs5fFI0GyLySDiEsnZn49yxv476WFQyhgC5Sn8Sih%2B5Dx6OC6PSQrXi2Qm90Dz2kR7wcp%2Bw69P1Jvx9X0ymK8N6bcCmiQuCUnLBkAxiN7pIBc4wuqeiTofXCAr6Lu1t%2BJaAo0KzjyYysbMMETBcRS92xyGeW1mSc5y2ebnEAMbwpfqEFc7YhpV7NB2h6DAkbhjK5V9Q7uxbnGh0Qws6vTwQY6pgGzqwoABrL%2B%2BuvOi9TBrmmk%2BAvnMZ0unxVce7f4903j4onM6qTX7BVzPebXlOQMbHdKRSNMQwEjKY0beiR43XbH6%2FNiq6rMhULwjEjA5B4yqM7JCONO1vNFCrs9wFcie0wjdevfwagYQSrFR%2Blx7MmrzfriMUpIzlRjAVicReRDnVZY%2BTeyRry4pkvv1dmej0Hv24rR6M2gDe3uX1NYzGqDp8I5OgOt&X-Amz-Signature=d47a734f297eb03f160ecb44fdfe7984df01edd304e189eeaf93c4ac3e04977a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEHO3SM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpOZqKjoqaSjukvKRZ%2F1WLOOy8uKXB1PkACzwasEGgNAiB8Q4lT8V03REbzgGBmIF6AnQ%2BWrDyYopYdxwtlG%2FvZySr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtOo%2Fln2hHAzZFwpQKtwDkI2GvQClPDN%2FYXLuVJTqTsQLu0ORdbPYm%2FggvUKQm4W9jRP0eCbtHAA%2B4x3tDd6alAQtJT6XWAFlmt8foW2IHP7eUDvSTdu%2F%2F93EAYKjhm5yIv7fdMQ7cS7Nj7vRT9R5fEJ3olYVmxHIun%2BKJAltAp2vvMbWcrnyhjbKzXHrlVZbyquC2NjU19aqgRGm5UqolrCGn2qJbh8AhSyjw3ZU0q7wXJwxlhLMy8utZ%2Bwaz8VBj4u6sYWQloza2jJYr0rXzaeniC7MuCBGA2VCuCggJoFFVrtS6nXWKZbSC7bRIZzmiwRtfPK%2FPqRmQB8cENCVTBoTTeY9qNaV5yXWPOiTBkbrKHQQPzmDVioZIdnlMN0gdiBeKR%2BpEo5BL9HGREyDrKNVL1%2B3eDJcnKfa%2FOunvG11xYZc1vAFHBCBFyKTkNPvs5fFI0GyLySDiEsnZn49yxv476WFQyhgC5Sn8Sih%2B5Dx6OC6PSQrXi2Qm90Dz2kR7wcp%2Bw69P1Jvx9X0ymK8N6bcCmiQuCUnLBkAxiN7pIBc4wuqeiTofXCAr6Lu1t%2BJaAo0KzjyYysbMMETBcRS92xyGeW1mSc5y2ebnEAMbwpfqEFc7YhpV7NB2h6DAkbhjK5V9Q7uxbnGh0Qws6vTwQY6pgGzqwoABrL%2B%2BuvOi9TBrmmk%2BAvnMZ0unxVce7f4903j4onM6qTX7BVzPebXlOQMbHdKRSNMQwEjKY0beiR43XbH6%2FNiq6rMhULwjEjA5B4yqM7JCONO1vNFCrs9wFcie0wjdevfwagYQSrFR%2Blx7MmrzfriMUpIzlRjAVicReRDnVZY%2BTeyRry4pkvv1dmej0Hv24rR6M2gDe3uX1NYzGqDp8I5OgOt&X-Amz-Signature=ce954876c81a5d79b244f38bd594ac523b705623f6e896f040776d04894040f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEHO3SM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpOZqKjoqaSjukvKRZ%2F1WLOOy8uKXB1PkACzwasEGgNAiB8Q4lT8V03REbzgGBmIF6AnQ%2BWrDyYopYdxwtlG%2FvZySr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtOo%2Fln2hHAzZFwpQKtwDkI2GvQClPDN%2FYXLuVJTqTsQLu0ORdbPYm%2FggvUKQm4W9jRP0eCbtHAA%2B4x3tDd6alAQtJT6XWAFlmt8foW2IHP7eUDvSTdu%2F%2F93EAYKjhm5yIv7fdMQ7cS7Nj7vRT9R5fEJ3olYVmxHIun%2BKJAltAp2vvMbWcrnyhjbKzXHrlVZbyquC2NjU19aqgRGm5UqolrCGn2qJbh8AhSyjw3ZU0q7wXJwxlhLMy8utZ%2Bwaz8VBj4u6sYWQloza2jJYr0rXzaeniC7MuCBGA2VCuCggJoFFVrtS6nXWKZbSC7bRIZzmiwRtfPK%2FPqRmQB8cENCVTBoTTeY9qNaV5yXWPOiTBkbrKHQQPzmDVioZIdnlMN0gdiBeKR%2BpEo5BL9HGREyDrKNVL1%2B3eDJcnKfa%2FOunvG11xYZc1vAFHBCBFyKTkNPvs5fFI0GyLySDiEsnZn49yxv476WFQyhgC5Sn8Sih%2B5Dx6OC6PSQrXi2Qm90Dz2kR7wcp%2Bw69P1Jvx9X0ymK8N6bcCmiQuCUnLBkAxiN7pIBc4wuqeiTofXCAr6Lu1t%2BJaAo0KzjyYysbMMETBcRS92xyGeW1mSc5y2ebnEAMbwpfqEFc7YhpV7NB2h6DAkbhjK5V9Q7uxbnGh0Qws6vTwQY6pgGzqwoABrL%2B%2BuvOi9TBrmmk%2BAvnMZ0unxVce7f4903j4onM6qTX7BVzPebXlOQMbHdKRSNMQwEjKY0beiR43XbH6%2FNiq6rMhULwjEjA5B4yqM7JCONO1vNFCrs9wFcie0wjdevfwagYQSrFR%2Blx7MmrzfriMUpIzlRjAVicReRDnVZY%2BTeyRry4pkvv1dmej0Hv24rR6M2gDe3uX1NYzGqDp8I5OgOt&X-Amz-Signature=bc1672510babbe0dc88ccb345f01be9cb6e1ea994beacfe0571fc0ee5ee65bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVOEYTA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAIUIptZAjNoBq2Pz0VOp4O83wciHtFLSJvCKFvQaWIAiAPBv7PVrDAUFmCJb%2BSzmRPWHODN7zw2pabE74%2BzpHG%2Fyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyzEftv1uNe3hQPFAKtwDuR3di%2BezujHW5pu%2B4hf8inOqOvq46bQWIQrSDQYQhnKkYoHQPL%2BFYJZhtnIaWvTdt2oRHERKUWwzXlRV0O%2B2dmsJgOHB73GmMuhmzmjdwsBArqTyOMy6x%2BnU%2FmQXG52PQR%2BD%2BDKJ%2BlnMPzFNaj%2BKUOvKg1cmmU8Soo9FTUCHX1UPo1oagh38vfWuXjk7DQ1%2FmE1J6zreDdFo3aXzARHziPrNC8zntESbfOpX4s8cGf8nrVxSemFOyiJetC7933SykBTu1D3c5LWfPzeQX0dRQWtwOpfTk6z7Ro6A6EpRK%2FomXy6Ob50O1W2i82msnf0ntn050znY89r8bBvHcxpBcdZSby3pxGz8K0XKH46FVqaXoDTj%2FMBNpnQ3YkCttKrczTGAbAH%2FX2k9tFNCsVkcEo3K2h7zMz9MOlOEgK2Dk01ezvupBMqzf0fb7j7g%2Bz%2FD5wctjqNYhBEAc2uWjUxAi00Mo4MBo%2B80o6g5w9K2JrGmsDvgtAdJBu696UMncqbS4UJqrmhGAzC3Kp7ziH7Xfeh7HqDJPYfERmtA2NO4aw0GHCZdUC0w1VkXaXj2YXVQ380RebTTkmCMxAGMh%2FamaYiXAEJhgPPzHIwdI4sSxKA8Zmpvj%2FVn4N4eVf8wu6vTwQY6pgF9VOgnLdbeQx1%2BTatwIckvVL%2FKbhnXHc0XxOCCqaJxJsHy%2FujHMCudU9u7SHloDO%2BQMkb6xkei3s2qYIzPzGd1dpBE0kp0VNIvZq8VtMHXh2%2FOULjxn1Psfevs6cQpGOaeb7AcKQW62DHppV4n2RbnZ7lNsVtrF50Fk%2FPkAY2u2PMvqUsPSWSLqhcdby5S%2BTuWe1qzaZnwu0ZfM9I5HJgQHPywJBIP&X-Amz-Signature=e88bb824bc50a7fbdbb08644882e9161e493d84f14b95f8ec27c3a69b4c6514d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGCVDVH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfjUvUXv8MjDi6lZO8F5Rx1j56%2Bn1reUPLQjZz%2FJKFyAIhANE5E24FmprP%2FVANI9mpgZIpIEJ2BfSbNgm%2BTeSSS5vvKv8DCE4QABoMNjM3NDIzMTgzODA1Igw6E6WluF4aT1jQGYsq3AMxZtHeaXtUCnN%2FOO5DD1dquApJ75oH3XOF2qPWgAVuh5zzHyoo%2FcQLZYi%2FrlOp9iMraJizf3ZgTLEYRNaG1LhOMqdsvvoL%2FJ7itoXPiYQY%2BfXrEp7bpydJywOkhfnN5CbSV65V9CopofoFg69caKcXfgEvZmaJDqvhredayx1DojhAO28IA36C6gb4iBEdHNbQo%2F9MLfLWDYS7w6vCc%2F%2FaFAqfWGLwAbbtYh1l3QJheIcVtDkeEOPNTWyBNtuuJm9oeERY6f%2FBbC0az2WupPd3Sa91KVjBtGzA7jEmIOPJAqR%2BfYa5%2BaJ5l0pxzEmkfgrD7aN5F6UPlNZwQjq1b4zE9xFD3oAon1VWWcn7bBEzACeulpkSQeweQ%2FdzDnJWE1PZjKLCzVGTUPGEYIKq%2FEddRWnR5dhL6fPQmj05HM6rLPSCcqi09W9X%2BQIEyPbrS1wJThyNQAbSkl0L5Z9dk8fjU%2FKLwZyKTbKpPJPqpMgPhC9UIgEDRSRDKOVN3eBwKtV7nw%2B0%2BUaOLdKBqL7Wr7NqbSMj3jEIP%2Bg%2FF8vqhfakUI552UNvQ9%2FIZ%2BrNHLE3ENw1gBnhLCJP%2FMjVZ9kJO7MkQGmPaj4XSdSeIW0k5%2FjSlNqRtZDYbQ9ZIsXygDDDq9PBBjqkAUdYQyp2tOzjVwRUKeePvzfT0JRGWL8gsUbcDj4%2FHNAoL4qo6eitTJ%2FoJ4g0JJssbGnaIfF6BGgslkR0ujEuTUCktXtIy2%2BFMobSc4GHAV3Wc9b08J92u9fD3emFwSF4c3MLbA2U9%2BinIzGBZaXEpd18%2FdSuNSqJWugzzeH40k76rMUQi4a3wFLqMUo2a0gFtDFeKHgtNqLZVbKDMdCA6i4GEEVk&X-Amz-Signature=5fe5aa4d29f7df176d7bf2fda83cfe8eb005850707325adba95f6f62856ecfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEHO3SM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpOZqKjoqaSjukvKRZ%2F1WLOOy8uKXB1PkACzwasEGgNAiB8Q4lT8V03REbzgGBmIF6AnQ%2BWrDyYopYdxwtlG%2FvZySr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtOo%2Fln2hHAzZFwpQKtwDkI2GvQClPDN%2FYXLuVJTqTsQLu0ORdbPYm%2FggvUKQm4W9jRP0eCbtHAA%2B4x3tDd6alAQtJT6XWAFlmt8foW2IHP7eUDvSTdu%2F%2F93EAYKjhm5yIv7fdMQ7cS7Nj7vRT9R5fEJ3olYVmxHIun%2BKJAltAp2vvMbWcrnyhjbKzXHrlVZbyquC2NjU19aqgRGm5UqolrCGn2qJbh8AhSyjw3ZU0q7wXJwxlhLMy8utZ%2Bwaz8VBj4u6sYWQloza2jJYr0rXzaeniC7MuCBGA2VCuCggJoFFVrtS6nXWKZbSC7bRIZzmiwRtfPK%2FPqRmQB8cENCVTBoTTeY9qNaV5yXWPOiTBkbrKHQQPzmDVioZIdnlMN0gdiBeKR%2BpEo5BL9HGREyDrKNVL1%2B3eDJcnKfa%2FOunvG11xYZc1vAFHBCBFyKTkNPvs5fFI0GyLySDiEsnZn49yxv476WFQyhgC5Sn8Sih%2B5Dx6OC6PSQrXi2Qm90Dz2kR7wcp%2Bw69P1Jvx9X0ymK8N6bcCmiQuCUnLBkAxiN7pIBc4wuqeiTofXCAr6Lu1t%2BJaAo0KzjyYysbMMETBcRS92xyGeW1mSc5y2ebnEAMbwpfqEFc7YhpV7NB2h6DAkbhjK5V9Q7uxbnGh0Qws6vTwQY6pgGzqwoABrL%2B%2BuvOi9TBrmmk%2BAvnMZ0unxVce7f4903j4onM6qTX7BVzPebXlOQMbHdKRSNMQwEjKY0beiR43XbH6%2FNiq6rMhULwjEjA5B4yqM7JCONO1vNFCrs9wFcie0wjdevfwagYQSrFR%2Blx7MmrzfriMUpIzlRjAVicReRDnVZY%2BTeyRry4pkvv1dmej0Hv24rR6M2gDe3uX1NYzGqDp8I5OgOt&X-Amz-Signature=a9892be1fc25fa8dc90bf18234112e2c3886359260578548b9d491f074aa627d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
