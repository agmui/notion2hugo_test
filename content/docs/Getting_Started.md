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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RNKEFL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFNQ9vZWkYhkLs99trLm1tc2GaWeGfu25sBovRTgEvs5AiEA3B4w9qhHV9yuOHzj5BAQv7j5LfAa5tzSL2Dc5KlNAe0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FuqW15Dj6J1k02CSrcA%2Ff5TFESv6e7w6pjxe7L4vAcJQUlrlXw54ttzSbuK0zX77Mmk9mSWhmxUtq3NL%2FyNFKkpGCfAwer98a46nT2KPWJ71FRmLZzdt0nKbRe%2B48ECxqbcVfnvXq8GeakPA6Vs9t1nA50dAyM1PG8h4ayruKxj9lepUMSCdHfhiPyG%2BnbtVwPc1XQfz54s1V1SB9zGAu3hiCQfcTcaZjmTh%2FDQkAqlFf2RRrdpXH6PwuNmez4PjrWHFzbyhoVjc2u5blqXN1W%2FrAV3o717fqDwHrEbIIqenB6Jl6Roa7sDPqKCNNzYLhqbSLYxz0km2NELKjlr1aW4eodYN20pwUMDN9w7avTfuKCF2vKlyac7FuJ%2BDk2RNajHb7x%2FL73bXl7rZb%2B6rnCYiQwVRYHehIeMZnAXz8vdtobIr%2B6elXuRWI7IHL9CrnEIwkk5x4emwzQ0noO4Dyci9Ba%2BQGFfdNx3V0hz5N%2FDiL0ma5lS%2Bm7IM6N6yaRg3RzCU%2BSy8NpQfZMRgxJZY0kSXIDY1wXCNqkQyqAiHoQiqjh80qc0%2F8ikE6gj7%2FULXzBG4a%2FkQMZ5XLMjzz8Xnav2rnkzswUvXvKHElVzzKu24%2FTsUrg0IoWWMsomTSubFnbk5GSCWaygyJxMLaa2sAGOqUBXSZX0IDlfbEIzWmPNX7Ru4blndJ3el1odxcMXo7KVTsnVBBypZo4z7AmW%2FLRSD9MupmQB%2FlOnhXky%2FXc%2FDgj%2BZoaHVUKKiuT%2Bzjjy1lGOjtcfUeb7rgrWlmTFRqXFLY8FO%2B21mH4iw99r%2BKu7G3J1ye0z6%2BHyHqksaSBzQdpNOwmBnerdEzsixFzUrm4T6uqO6E4fJx50U%2FeXfVVbMvLLpqfkqVq&X-Amz-Signature=dbe87f7d4da66c95a5352d4a1ac1a08969bb94a4fb71510e31c45ffea42b8c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RNKEFL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFNQ9vZWkYhkLs99trLm1tc2GaWeGfu25sBovRTgEvs5AiEA3B4w9qhHV9yuOHzj5BAQv7j5LfAa5tzSL2Dc5KlNAe0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FuqW15Dj6J1k02CSrcA%2Ff5TFESv6e7w6pjxe7L4vAcJQUlrlXw54ttzSbuK0zX77Mmk9mSWhmxUtq3NL%2FyNFKkpGCfAwer98a46nT2KPWJ71FRmLZzdt0nKbRe%2B48ECxqbcVfnvXq8GeakPA6Vs9t1nA50dAyM1PG8h4ayruKxj9lepUMSCdHfhiPyG%2BnbtVwPc1XQfz54s1V1SB9zGAu3hiCQfcTcaZjmTh%2FDQkAqlFf2RRrdpXH6PwuNmez4PjrWHFzbyhoVjc2u5blqXN1W%2FrAV3o717fqDwHrEbIIqenB6Jl6Roa7sDPqKCNNzYLhqbSLYxz0km2NELKjlr1aW4eodYN20pwUMDN9w7avTfuKCF2vKlyac7FuJ%2BDk2RNajHb7x%2FL73bXl7rZb%2B6rnCYiQwVRYHehIeMZnAXz8vdtobIr%2B6elXuRWI7IHL9CrnEIwkk5x4emwzQ0noO4Dyci9Ba%2BQGFfdNx3V0hz5N%2FDiL0ma5lS%2Bm7IM6N6yaRg3RzCU%2BSy8NpQfZMRgxJZY0kSXIDY1wXCNqkQyqAiHoQiqjh80qc0%2F8ikE6gj7%2FULXzBG4a%2FkQMZ5XLMjzz8Xnav2rnkzswUvXvKHElVzzKu24%2FTsUrg0IoWWMsomTSubFnbk5GSCWaygyJxMLaa2sAGOqUBXSZX0IDlfbEIzWmPNX7Ru4blndJ3el1odxcMXo7KVTsnVBBypZo4z7AmW%2FLRSD9MupmQB%2FlOnhXky%2FXc%2FDgj%2BZoaHVUKKiuT%2Bzjjy1lGOjtcfUeb7rgrWlmTFRqXFLY8FO%2B21mH4iw99r%2BKu7G3J1ye0z6%2BHyHqksaSBzQdpNOwmBnerdEzsixFzUrm4T6uqO6E4fJx50U%2FeXfVVbMvLLpqfkqVq&X-Amz-Signature=80464fefd348167e52ef41c898df373c6f252902f4ea9da439c5d49a8055aed2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RNKEFL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFNQ9vZWkYhkLs99trLm1tc2GaWeGfu25sBovRTgEvs5AiEA3B4w9qhHV9yuOHzj5BAQv7j5LfAa5tzSL2Dc5KlNAe0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FuqW15Dj6J1k02CSrcA%2Ff5TFESv6e7w6pjxe7L4vAcJQUlrlXw54ttzSbuK0zX77Mmk9mSWhmxUtq3NL%2FyNFKkpGCfAwer98a46nT2KPWJ71FRmLZzdt0nKbRe%2B48ECxqbcVfnvXq8GeakPA6Vs9t1nA50dAyM1PG8h4ayruKxj9lepUMSCdHfhiPyG%2BnbtVwPc1XQfz54s1V1SB9zGAu3hiCQfcTcaZjmTh%2FDQkAqlFf2RRrdpXH6PwuNmez4PjrWHFzbyhoVjc2u5blqXN1W%2FrAV3o717fqDwHrEbIIqenB6Jl6Roa7sDPqKCNNzYLhqbSLYxz0km2NELKjlr1aW4eodYN20pwUMDN9w7avTfuKCF2vKlyac7FuJ%2BDk2RNajHb7x%2FL73bXl7rZb%2B6rnCYiQwVRYHehIeMZnAXz8vdtobIr%2B6elXuRWI7IHL9CrnEIwkk5x4emwzQ0noO4Dyci9Ba%2BQGFfdNx3V0hz5N%2FDiL0ma5lS%2Bm7IM6N6yaRg3RzCU%2BSy8NpQfZMRgxJZY0kSXIDY1wXCNqkQyqAiHoQiqjh80qc0%2F8ikE6gj7%2FULXzBG4a%2FkQMZ5XLMjzz8Xnav2rnkzswUvXvKHElVzzKu24%2FTsUrg0IoWWMsomTSubFnbk5GSCWaygyJxMLaa2sAGOqUBXSZX0IDlfbEIzWmPNX7Ru4blndJ3el1odxcMXo7KVTsnVBBypZo4z7AmW%2FLRSD9MupmQB%2FlOnhXky%2FXc%2FDgj%2BZoaHVUKKiuT%2Bzjjy1lGOjtcfUeb7rgrWlmTFRqXFLY8FO%2B21mH4iw99r%2BKu7G3J1ye0z6%2BHyHqksaSBzQdpNOwmBnerdEzsixFzUrm4T6uqO6E4fJx50U%2FeXfVVbMvLLpqfkqVq&X-Amz-Signature=8f9e37ca3c79b0f5b63baeeab8510e5c3fc46df813360eabcd2a3c7278352f96&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSEJAVY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCmutNb3LKcS%2FevhNDCEWeX5%2F7sF3tnffkJqOfWRNUvLAIgcK9WZqToDZu%2BF0ce27n6%2FHDoroqzMFuRjpS%2FRs26CsQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwoqCFYjr9Gbd%2BFjyrcA5zFZ%2FhBbNc47RvP4q6AOWZcyAXT3htxSj5RhKeXi56q89VKqlzURjgNJIhc57xQWMiWL4%2BTO2HIrf93UCwjGGHh6v0B80Olvs4nVrbx4BzYDubo6nvaskCrDVfiqRA46FXLeJIY5WZXg79ybq6R3hS96kwLxZub0IERPtunJ4fCM6UJNsI0jvaRgB%2Bn%2BojhPYKQbUqrK2k88FRUTzXaq9ytONoXJc8c%2B6OuWCeaD%2BctTUpcih6ntRur9d1vybfFMVOpR%2Fdv1oyvPau0S4%2FgnJkFIERsCew5mroV5yoVUTNg2uD2IGRfmX5lsiag1SM6OiYl7caEIIEvbHF0YUx3uIUuIBAXNhPmEunj0S9TeMM%2FZkEv2IIrFxt9bw8aVUgS2mzlhBvKSvY4CsLgj9cq%2BIsl62UoZHfwbAFr0MhB%2BUA1XyrvQxxvFQCf6VN8qQhTGrKQ%2FWbEVD6bXKwuCnbHTJbRoUR%2F3l1HhlFgkF2dzfokWAmVNRk4sztTObiZfSRxYqha7fYkUrKmkJ6VVZtl9Hc8iG9Rjz7PIGFA9lvPia%2F2XVGf7o0df38HyPjTnMmAdd5qXedoB0xPRuLYiCaMYVBWCT23RXhEcQ%2FqcxPK%2F3SrJMwOEOFg5E%2Fuuv1OMPCa2sAGOqUBrRtw7mCzswYvpq76HNcR8zRbtiqPcsvsVNGcKmko2u29wyTVW8L0U4Q90hVvYV%2BmEvrxJuG4O%2B6JZyDEydJ9Kz0v4iRe7wQJGK5PFBZsSg5vxAvseCOatBaPnDsehv2Ur9vG0sS2Xoq%2F2fQFNP0%2FCefbTeRywFkcWAZCDCpXnWfx%2B7V00Pwj2gi2Tw1PgxbmguwEa0t4EyfxZisDyRvO59tMk3Op&X-Amz-Signature=98675c91e94db11e0544a64457a189eb6a7daf33883494c11b7d2ce1f1c5c933&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VTBQGQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCDjsFt6GPshkYAqNyILpc%2BCQ4S8lEfQB9DuKHZlbZhewIhAOGBd7Rx78qhK4x8QqCMGOR%2B7khjQaddCyMYdpHyLKiMKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7VasLdgw9GcthT0kq3AOnHohPhKQvaFhRU9aiqaQdqLvUwGF%2FcWRpCLfJ%2F7%2Fw2salfrp22u%2BCkMna0MDoTVVV3MCxJAPU0WeMC8RNJN66llLGPyqLz7Y5wZmOXwMc987dR9TaulLeblsK4yld0L9KmzypscT2ToSe8xLmU9TgV2143dH1neT%2FqmXNsZOWVhscIeVzg7feB9d%2BOYbTLZfQpYPSYEa%2Bz5LhygAyJNTBpNoSkPwJabd976M%2Fnkc5J4V9yEehSoypnxJ3EpLbTd7948FYZkVwk9%2B991r5zgHiSnlcXir0Dizc8xfOGtrJknGt96XOGk6Kx%2B2PrLq95MsxtxFe6dHj5QoFzLwHf0C%2FvNB6Mh1w9srYbACa54rwaQgZMkvsvsnvHoZru6OZmcYq6MkP4sKlH2FdQikbvyph5gx94w1oQFtgPoD%2FSw%2BYeIrwNGeIsevh%2BQBsx42jka15UINqhRPyc%2FmxB5RgnGUzKUUa72D%2B83RYuBoDenupdvKX545imrfWKlkqniEGF1%2BKjKb43gT1DN7Q0kBF8BCL%2Bn5g56lf80HKOQeMSTdjdFMzMoNvrIs6YIj6XGtvIvemzKPXRAvgCjUAvFZCJW39GM0MaxEao98lKDdaZup%2F8znzgtzg06iDfrXmuDDEmtrABjqkAUaCgVvK7V30glkF1025bcyLeZ%2FycNUhYW9TEZEsJzqdHZVUFOAafNQLvh%2BZoYCyPyIGZa%2BQ8cTnUPQpu8mFZPxLyGSipO4Au%2BsOpSnxSST49pGPoCZszo7j8gj9ItaWSAbX5SCbqUnDJW0jutGyDTxJzTkAZx9zspwDD1NOS%2FRl5VHcR7DE%2Bk9iTMqm5TGI1oPWlN6oH%2BW9b7cZKRpkgHTHEpop&X-Amz-Signature=26fffd0ab0b64084bc53297ca41911f5ea5fcd391b76dc253188c6773631b781&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RNKEFL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFNQ9vZWkYhkLs99trLm1tc2GaWeGfu25sBovRTgEvs5AiEA3B4w9qhHV9yuOHzj5BAQv7j5LfAa5tzSL2Dc5KlNAe0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FuqW15Dj6J1k02CSrcA%2Ff5TFESv6e7w6pjxe7L4vAcJQUlrlXw54ttzSbuK0zX77Mmk9mSWhmxUtq3NL%2FyNFKkpGCfAwer98a46nT2KPWJ71FRmLZzdt0nKbRe%2B48ECxqbcVfnvXq8GeakPA6Vs9t1nA50dAyM1PG8h4ayruKxj9lepUMSCdHfhiPyG%2BnbtVwPc1XQfz54s1V1SB9zGAu3hiCQfcTcaZjmTh%2FDQkAqlFf2RRrdpXH6PwuNmez4PjrWHFzbyhoVjc2u5blqXN1W%2FrAV3o717fqDwHrEbIIqenB6Jl6Roa7sDPqKCNNzYLhqbSLYxz0km2NELKjlr1aW4eodYN20pwUMDN9w7avTfuKCF2vKlyac7FuJ%2BDk2RNajHb7x%2FL73bXl7rZb%2B6rnCYiQwVRYHehIeMZnAXz8vdtobIr%2B6elXuRWI7IHL9CrnEIwkk5x4emwzQ0noO4Dyci9Ba%2BQGFfdNx3V0hz5N%2FDiL0ma5lS%2Bm7IM6N6yaRg3RzCU%2BSy8NpQfZMRgxJZY0kSXIDY1wXCNqkQyqAiHoQiqjh80qc0%2F8ikE6gj7%2FULXzBG4a%2FkQMZ5XLMjzz8Xnav2rnkzswUvXvKHElVzzKu24%2FTsUrg0IoWWMsomTSubFnbk5GSCWaygyJxMLaa2sAGOqUBXSZX0IDlfbEIzWmPNX7Ru4blndJ3el1odxcMXo7KVTsnVBBypZo4z7AmW%2FLRSD9MupmQB%2FlOnhXky%2FXc%2FDgj%2BZoaHVUKKiuT%2Bzjjy1lGOjtcfUeb7rgrWlmTFRqXFLY8FO%2B21mH4iw99r%2BKu7G3J1ye0z6%2BHyHqksaSBzQdpNOwmBnerdEzsixFzUrm4T6uqO6E4fJx50U%2FeXfVVbMvLLpqfkqVq&X-Amz-Signature=a91df947675e92453904c749da623a0c9ef5006717e29cac10d3814eff507a07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
