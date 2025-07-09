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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2MAL4S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfjJL2q2xl76ESjttk1n7lSsvlz4kG3rML70Vdb%2Be1MAiACF6kLv6Z84sUu9GkMCqinlAnxT3AlEoL7mDlMv%2BU%2FLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeyvbnX7eXyYwUftKtwDhEDNgu5ykFQZMQj%2FMZ%2Bw483Tnw6b7wQxnsjDf4PYA62dxSFAQLFmDvfhWGsa13oVgg%2F0l1bdLbG4umAQZJjr3O8fyRmW3a9%2F6q7uzyGjaNsDq4TYkL8eeWzFZLA3LXnID1exquu63V5E6JaTkgTBKhcEO4e3%2FvElKAEaoCq84PtuHbRXMq8TiV5AEVS0kmux9tQOeR4u8OOG2D5czVnWUc1iQIOj%2BUHoToKpAd%2FDhlqZU2LfWRhTUVUScbD75FA%2Bv8xjw6SowiZGAvEs%2BwmZc9rKp2Q4SR4BGn69i7ey1Y6D%2BPwiP9ND5VzRnK5YtN8qTmLVRur53FZXPzneqAey9ytC62q%2B2JTpyfAGmM5gZESUvjaUQJYlgualgbhgTsNaLKupXEyjDc%2Fz%2B9f7rrm%2FL8F8FUf2WEiXmOerszAzJhBJZ0Jin7D6PjmPFgkXyixK1rJxqdzKoxgIHAhGbNYyGUF%2FNNHHhNkLZ1B%2FHQKdNejzW7RWWdnLT12ATVH6%2BW2AIM%2F7GVmwEgldZvwBoMBs%2BGDgwtPCqa9rWHcL7LesHt6KxlxszOaTarMbEX4O2aY5tVuFXW5RrbqxZWA%2BUeMMnO3cFErpS9uVWf4mRr8a1JJ11GCLBooW9sG9GoUwz8W7wwY6pgHLkctRt6R%2FB3RQBjQZN1lAs4mS79iF%2BsiAEoDtG%2BM42c9vTi7%2F%2FbxVJZw0evUWzY0qNqM02HOdVQKOVljsABhAYVArU3g3wnXXDzY2C2r3ErhwhTEQw7uYQwTsI4L3e1%2F1Vkg4UZrLXOaQkvelaN3YNhqVioHtFBvrqth51Y4bTWQ%2Fg%2FzDku6zxWKLCgnAY1Ef5ifag8x4NwJwWVmE1uD4KPUc1q2j&X-Amz-Signature=e6fa8d7de03849e680e646d3d228820ca7b25a3ee339d571d1484abfff33536d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2MAL4S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfjJL2q2xl76ESjttk1n7lSsvlz4kG3rML70Vdb%2Be1MAiACF6kLv6Z84sUu9GkMCqinlAnxT3AlEoL7mDlMv%2BU%2FLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeyvbnX7eXyYwUftKtwDhEDNgu5ykFQZMQj%2FMZ%2Bw483Tnw6b7wQxnsjDf4PYA62dxSFAQLFmDvfhWGsa13oVgg%2F0l1bdLbG4umAQZJjr3O8fyRmW3a9%2F6q7uzyGjaNsDq4TYkL8eeWzFZLA3LXnID1exquu63V5E6JaTkgTBKhcEO4e3%2FvElKAEaoCq84PtuHbRXMq8TiV5AEVS0kmux9tQOeR4u8OOG2D5czVnWUc1iQIOj%2BUHoToKpAd%2FDhlqZU2LfWRhTUVUScbD75FA%2Bv8xjw6SowiZGAvEs%2BwmZc9rKp2Q4SR4BGn69i7ey1Y6D%2BPwiP9ND5VzRnK5YtN8qTmLVRur53FZXPzneqAey9ytC62q%2B2JTpyfAGmM5gZESUvjaUQJYlgualgbhgTsNaLKupXEyjDc%2Fz%2B9f7rrm%2FL8F8FUf2WEiXmOerszAzJhBJZ0Jin7D6PjmPFgkXyixK1rJxqdzKoxgIHAhGbNYyGUF%2FNNHHhNkLZ1B%2FHQKdNejzW7RWWdnLT12ATVH6%2BW2AIM%2F7GVmwEgldZvwBoMBs%2BGDgwtPCqa9rWHcL7LesHt6KxlxszOaTarMbEX4O2aY5tVuFXW5RrbqxZWA%2BUeMMnO3cFErpS9uVWf4mRr8a1JJ11GCLBooW9sG9GoUwz8W7wwY6pgHLkctRt6R%2FB3RQBjQZN1lAs4mS79iF%2BsiAEoDtG%2BM42c9vTi7%2F%2FbxVJZw0evUWzY0qNqM02HOdVQKOVljsABhAYVArU3g3wnXXDzY2C2r3ErhwhTEQw7uYQwTsI4L3e1%2F1Vkg4UZrLXOaQkvelaN3YNhqVioHtFBvrqth51Y4bTWQ%2Fg%2FzDku6zxWKLCgnAY1Ef5ifag8x4NwJwWVmE1uD4KPUc1q2j&X-Amz-Signature=91184e97d8e5a44b0d4eead69c171476371fc7e2cf42100a80c8fb159cd7e776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2MAL4S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfjJL2q2xl76ESjttk1n7lSsvlz4kG3rML70Vdb%2Be1MAiACF6kLv6Z84sUu9GkMCqinlAnxT3AlEoL7mDlMv%2BU%2FLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeyvbnX7eXyYwUftKtwDhEDNgu5ykFQZMQj%2FMZ%2Bw483Tnw6b7wQxnsjDf4PYA62dxSFAQLFmDvfhWGsa13oVgg%2F0l1bdLbG4umAQZJjr3O8fyRmW3a9%2F6q7uzyGjaNsDq4TYkL8eeWzFZLA3LXnID1exquu63V5E6JaTkgTBKhcEO4e3%2FvElKAEaoCq84PtuHbRXMq8TiV5AEVS0kmux9tQOeR4u8OOG2D5czVnWUc1iQIOj%2BUHoToKpAd%2FDhlqZU2LfWRhTUVUScbD75FA%2Bv8xjw6SowiZGAvEs%2BwmZc9rKp2Q4SR4BGn69i7ey1Y6D%2BPwiP9ND5VzRnK5YtN8qTmLVRur53FZXPzneqAey9ytC62q%2B2JTpyfAGmM5gZESUvjaUQJYlgualgbhgTsNaLKupXEyjDc%2Fz%2B9f7rrm%2FL8F8FUf2WEiXmOerszAzJhBJZ0Jin7D6PjmPFgkXyixK1rJxqdzKoxgIHAhGbNYyGUF%2FNNHHhNkLZ1B%2FHQKdNejzW7RWWdnLT12ATVH6%2BW2AIM%2F7GVmwEgldZvwBoMBs%2BGDgwtPCqa9rWHcL7LesHt6KxlxszOaTarMbEX4O2aY5tVuFXW5RrbqxZWA%2BUeMMnO3cFErpS9uVWf4mRr8a1JJ11GCLBooW9sG9GoUwz8W7wwY6pgHLkctRt6R%2FB3RQBjQZN1lAs4mS79iF%2BsiAEoDtG%2BM42c9vTi7%2F%2FbxVJZw0evUWzY0qNqM02HOdVQKOVljsABhAYVArU3g3wnXXDzY2C2r3ErhwhTEQw7uYQwTsI4L3e1%2F1Vkg4UZrLXOaQkvelaN3YNhqVioHtFBvrqth51Y4bTWQ%2Fg%2FzDku6zxWKLCgnAY1Ef5ifag8x4NwJwWVmE1uD4KPUc1q2j&X-Amz-Signature=72953f889f7bb521787d58d0486e8b5e489769e0e6df80cf1c978aa51d94638c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPO4IUFD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZG8DXq9WFNXooE1NA5uo3AF6jC0hPpftSNoeS5oH4JAiBjIVZB4D9hv%2BEwUu8J8ZKzhAlj6%2Ft5xoUD%2BtU2x6kWJCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl0TIATZ2%2FzDGzs1zKtwDuR8fuHVCDjYG0GhYISg0lEkZJ15jj9BanfL%2FJGuWxx%2Bu0vKk5RgnCbHYGnwpux1MfJxWpzeJ6%2FPBxGyJsPkNVqUFdRvpD1O52gDIn0MN1aLuv1TF%2Br0%2F6u24ejiS6K1D6LSxw%2BIOTVCHrn1sND0J%2FhZNXmNEvjCDZxDm%2BjW7hQ%2BMh9e1%2BpvowSFnakczLPpdaLyGVj%2BpPJJ5fW%2BQIs2LenpgM9jurSyo8bMvoaK1OCFm9ktzNpGSP7BODA%2BrwPFvZ26UIiML%2FIKMJN1BmfUMigLXnXgrGl18BKTeSSLwPNaOt9v6tmA2bu3qwIbs06bEXzj7w9wkiVfckpJeZD8Ga4UJv54Ecop8xpFaSwKS6TNTzce1R9dfuWyiIqz0PxzHNLs4ddfo9cAokBgEqoZpzcaiLuvJBxznn9YNt%2FjIs3jFrs2cboyVKGCWAa7CrmRm3amXDT%2FQmHO3VTmU3Ic0BBvBTZmBo2y764dG1yI64GQqF9JYLLFHqxF%2BSXPpgXSyqH12TJtvLHITQR79qbAW4gxxb27i6LlqhGPO1G77mTkZ4Vd7p1RqmY0CR4SjhDG03PK%2FpBLfavR%2FtO64N0dlZN4d9lHmdEWiHMQi681ok640AIvSqeaTpyhHEJcwncW7wwY6pgF9qv6MCOFzKjXGl9MAuwjFT7g56kbEs3aSbfj0XmlxZxRNNfozMx1B%2Bg%2BvIzfwt0ULQHu2aXEqYT9g22CLselJIyoNrKzkBTrS1fd4Q0WfRxRX3qc%2BpLax15%2FAVOnaWt1CzmZ7sdxuWzAgFuGdB2vIhvKd2hYGtWqz%2FahSvVO8Rg%2F3oSqPtvS35hST7LdWiOAS9R9pdoM3u1VwcPcr50ly%2Ftfcga3N&X-Amz-Signature=bad261325818daae03d636b41c97c4a315ff4d7fba4777b17bdda81c3d3bbd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYUY2XJ2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPR4OfFn3hWORsmuF%2BMAA4G5vbo%2FyT71XLpuW3HmbDQIhALIaZB2ihzWjmyjpb7uuAZNYzw2cesD1OveWujY5wnKXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEPYooaXz%2BLEgLRYq3AMzw3Y%2BXWfHQxCvQb%2BMFZpMYR7LEqG91raccMjXIBHMpDHd54aoA%2BK8skMDf2PVabUbV4sgVLcm78d9tf6UOcEa5Nh3PVbEovoN9F78rQGhKz7Qo8%2BdigSrZiGzNIJPKgL26G1iYThdv50CNgWSEvmNR%2FQI2HM1W%2FGt4V0QSCf4%2BzsNYYFfAHKc6y3XMDs1gMSUUkJecHgJVkbRIMCIXvNuyTCzI1fI9XbunpaChjei8AXAk7%2FTKk6NNXGyGWQ3nDhK9wqdSKbmX4xJtj7QAu7owyXyVpphS3q8KTjo0tIInH5P8Nsk0Hk%2FqZxTv%2BvhyErgzoKpneCajgUn4Wn6dCULyT4Ebm5WKU0d8smuP7xF1XXcxBIBCLAb5qew6UtN02k7nH8tqiI3e6wETLrVT0vvGddExbU2Gh%2Bd%2FHGr2yxdY0zFIqJD00dWIypPzYE5E%2BEQmHkeLtnWG3GDwqt55sutoFW8YnBgD1aLw0OgmbO%2BR6q%2FGJPw8hzQViKw%2B47cgdw0QrSyozsTzC9HrPKTcXmrxcbP215QXX5ZTqaqQdrp%2B9AIpnBX6043M%2FGXdMsvdI1vFWUApgVKVD1ruU%2F7Y2wY%2Fc5ws%2FlemPJVPSfUOH6a3u5nYwlTzqU%2BA6mDijCexbvDBjqkAU9uzdz9wUBPaeZlqcFSE6KeQfK1CR9uBNPDakvmhuUHsebIYDb7E7YqvY4x2WPjHVuovHwjDZvdSbw8wyb38nVBSCraEi0hJMJ%2F20HJFiiu053JQzrJ2MpzT38BwTbVninvrjYL1lHLnACXSjcAyiBdC44rqvYVhAuXMGQjj4tNkXdqUTMP7xa0HbVNymvLApdicBBKycqMPeKMV04%2FhFvKfGx%2F&X-Amz-Signature=8055dc3fc8d816f759f91c100023341bfda7c54e65585351a936f36b015caf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2MAL4S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfjJL2q2xl76ESjttk1n7lSsvlz4kG3rML70Vdb%2Be1MAiACF6kLv6Z84sUu9GkMCqinlAnxT3AlEoL7mDlMv%2BU%2FLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeyvbnX7eXyYwUftKtwDhEDNgu5ykFQZMQj%2FMZ%2Bw483Tnw6b7wQxnsjDf4PYA62dxSFAQLFmDvfhWGsa13oVgg%2F0l1bdLbG4umAQZJjr3O8fyRmW3a9%2F6q7uzyGjaNsDq4TYkL8eeWzFZLA3LXnID1exquu63V5E6JaTkgTBKhcEO4e3%2FvElKAEaoCq84PtuHbRXMq8TiV5AEVS0kmux9tQOeR4u8OOG2D5czVnWUc1iQIOj%2BUHoToKpAd%2FDhlqZU2LfWRhTUVUScbD75FA%2Bv8xjw6SowiZGAvEs%2BwmZc9rKp2Q4SR4BGn69i7ey1Y6D%2BPwiP9ND5VzRnK5YtN8qTmLVRur53FZXPzneqAey9ytC62q%2B2JTpyfAGmM5gZESUvjaUQJYlgualgbhgTsNaLKupXEyjDc%2Fz%2B9f7rrm%2FL8F8FUf2WEiXmOerszAzJhBJZ0Jin7D6PjmPFgkXyixK1rJxqdzKoxgIHAhGbNYyGUF%2FNNHHhNkLZ1B%2FHQKdNejzW7RWWdnLT12ATVH6%2BW2AIM%2F7GVmwEgldZvwBoMBs%2BGDgwtPCqa9rWHcL7LesHt6KxlxszOaTarMbEX4O2aY5tVuFXW5RrbqxZWA%2BUeMMnO3cFErpS9uVWf4mRr8a1JJ11GCLBooW9sG9GoUwz8W7wwY6pgHLkctRt6R%2FB3RQBjQZN1lAs4mS79iF%2BsiAEoDtG%2BM42c9vTi7%2F%2FbxVJZw0evUWzY0qNqM02HOdVQKOVljsABhAYVArU3g3wnXXDzY2C2r3ErhwhTEQw7uYQwTsI4L3e1%2F1Vkg4UZrLXOaQkvelaN3YNhqVioHtFBvrqth51Y4bTWQ%2Fg%2FzDku6zxWKLCgnAY1Ef5ifag8x4NwJwWVmE1uD4KPUc1q2j&X-Amz-Signature=cb2b97eee35a247a04819d858a902caba0984e0585804471702a57038b1094d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
