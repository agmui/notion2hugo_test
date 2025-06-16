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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3E54UW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGq%2F8uJWM9uob5WyQw6jZDVYUDjy8RQxqpAMQYvvlt8vAiEAvxbwFuQXuvp9BdGUWmLD19gLebUHxUcH%2FDvNkHdXWrQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIlZsw6Y%2Fa1TLWcBSrcA5hhYUFjl%2FzVxTn35YGZN9v4znuqcBwt3cqzqlVJJp5lqxsfTV7DvP4%2Bf4u7ikMZn5wVgwj2isra1DI7O0sDvGWDjjk2XNXHnqdUefq3fDooHL%2Bie6QMS7Pvxb%2B%2Bv49s7w7V%2Bema3kpVynoar%2F0BhufvH3qWcVKS9jwNzr6rp8AN0Idggk5fiZmxGOZl280TCciI12eR62gQXcorC38CS9zsqxHsy%2FraXrnmt1dBVIhCigidjPRiGg32eB6mzJZ6g3a0WS8DXGcdXyPlk6oOFFyiEZFU429E0cmOQAhFrlXZaSZC3roDQLVlBfXm8gJBxQaIjcd9Aphe8jJ%2Bnkr%2FRvZAWN9NcPzA3%2F16OWx5gwAtDf%2FzRBY%2FxyAkEpQUgqpai3Hq4AmG9P9heH1y7Vk4g3j99ZT9GYu06K1RDRTXMT0dnc7%2BVhFtdj38BfV4JoqTTsDaxiVj%2B%2FVe8o6%2F3rJxPPCeZVXcLO2AMu3M%2BzKdcprnmgjArGqkD9T1I3R9WDHzNTLTn%2B01wI%2BW8Wq%2FUXjgiq4m6mewtM3xRhB9fWw0hbbPV0fNTvYf8Mt%2FpkMKCwuQ2H34PVh6niTHPrr0BTB3iJ9hzP5ObTUheLjGEOLZkS4NFK%2BnEouiOPL3DcORMIv%2FvcIGOqUB6HuKjW6EflIkKwMQaXCyrYYnfWR9Tr0%2B6wiORJx7lv6zVQ7HQjBYDl4REYuUTvPMQKi6nkC%2FyJmq83o3%2FlltbBJtYpkHl2C2ylkJb44tkymqLa%2FcDSrjzy%2F2WOu6n8dm%2BlrRhWzHNSgPTl0Mynf4sxTXMY2oprqjar4v%2FkduU2NpswwkHF6ZgjqbossRZP26hpH2C9kXSuJ8424o5hDckmtsvSlQ&X-Amz-Signature=0f2fd9c0ba9b3f798a449c6deed4ef3489bdb826d5c0bda567c8dd80f7746ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3E54UW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGq%2F8uJWM9uob5WyQw6jZDVYUDjy8RQxqpAMQYvvlt8vAiEAvxbwFuQXuvp9BdGUWmLD19gLebUHxUcH%2FDvNkHdXWrQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIlZsw6Y%2Fa1TLWcBSrcA5hhYUFjl%2FzVxTn35YGZN9v4znuqcBwt3cqzqlVJJp5lqxsfTV7DvP4%2Bf4u7ikMZn5wVgwj2isra1DI7O0sDvGWDjjk2XNXHnqdUefq3fDooHL%2Bie6QMS7Pvxb%2B%2Bv49s7w7V%2Bema3kpVynoar%2F0BhufvH3qWcVKS9jwNzr6rp8AN0Idggk5fiZmxGOZl280TCciI12eR62gQXcorC38CS9zsqxHsy%2FraXrnmt1dBVIhCigidjPRiGg32eB6mzJZ6g3a0WS8DXGcdXyPlk6oOFFyiEZFU429E0cmOQAhFrlXZaSZC3roDQLVlBfXm8gJBxQaIjcd9Aphe8jJ%2Bnkr%2FRvZAWN9NcPzA3%2F16OWx5gwAtDf%2FzRBY%2FxyAkEpQUgqpai3Hq4AmG9P9heH1y7Vk4g3j99ZT9GYu06K1RDRTXMT0dnc7%2BVhFtdj38BfV4JoqTTsDaxiVj%2B%2FVe8o6%2F3rJxPPCeZVXcLO2AMu3M%2BzKdcprnmgjArGqkD9T1I3R9WDHzNTLTn%2B01wI%2BW8Wq%2FUXjgiq4m6mewtM3xRhB9fWw0hbbPV0fNTvYf8Mt%2FpkMKCwuQ2H34PVh6niTHPrr0BTB3iJ9hzP5ObTUheLjGEOLZkS4NFK%2BnEouiOPL3DcORMIv%2FvcIGOqUB6HuKjW6EflIkKwMQaXCyrYYnfWR9Tr0%2B6wiORJx7lv6zVQ7HQjBYDl4REYuUTvPMQKi6nkC%2FyJmq83o3%2FlltbBJtYpkHl2C2ylkJb44tkymqLa%2FcDSrjzy%2F2WOu6n8dm%2BlrRhWzHNSgPTl0Mynf4sxTXMY2oprqjar4v%2FkduU2NpswwkHF6ZgjqbossRZP26hpH2C9kXSuJ8424o5hDckmtsvSlQ&X-Amz-Signature=001076472313bbd1eb1f4c837fdb4a7c3aea9f9f7742aaf21a647d7981749b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3E54UW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGq%2F8uJWM9uob5WyQw6jZDVYUDjy8RQxqpAMQYvvlt8vAiEAvxbwFuQXuvp9BdGUWmLD19gLebUHxUcH%2FDvNkHdXWrQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIlZsw6Y%2Fa1TLWcBSrcA5hhYUFjl%2FzVxTn35YGZN9v4znuqcBwt3cqzqlVJJp5lqxsfTV7DvP4%2Bf4u7ikMZn5wVgwj2isra1DI7O0sDvGWDjjk2XNXHnqdUefq3fDooHL%2Bie6QMS7Pvxb%2B%2Bv49s7w7V%2Bema3kpVynoar%2F0BhufvH3qWcVKS9jwNzr6rp8AN0Idggk5fiZmxGOZl280TCciI12eR62gQXcorC38CS9zsqxHsy%2FraXrnmt1dBVIhCigidjPRiGg32eB6mzJZ6g3a0WS8DXGcdXyPlk6oOFFyiEZFU429E0cmOQAhFrlXZaSZC3roDQLVlBfXm8gJBxQaIjcd9Aphe8jJ%2Bnkr%2FRvZAWN9NcPzA3%2F16OWx5gwAtDf%2FzRBY%2FxyAkEpQUgqpai3Hq4AmG9P9heH1y7Vk4g3j99ZT9GYu06K1RDRTXMT0dnc7%2BVhFtdj38BfV4JoqTTsDaxiVj%2B%2FVe8o6%2F3rJxPPCeZVXcLO2AMu3M%2BzKdcprnmgjArGqkD9T1I3R9WDHzNTLTn%2B01wI%2BW8Wq%2FUXjgiq4m6mewtM3xRhB9fWw0hbbPV0fNTvYf8Mt%2FpkMKCwuQ2H34PVh6niTHPrr0BTB3iJ9hzP5ObTUheLjGEOLZkS4NFK%2BnEouiOPL3DcORMIv%2FvcIGOqUB6HuKjW6EflIkKwMQaXCyrYYnfWR9Tr0%2B6wiORJx7lv6zVQ7HQjBYDl4REYuUTvPMQKi6nkC%2FyJmq83o3%2FlltbBJtYpkHl2C2ylkJb44tkymqLa%2FcDSrjzy%2F2WOu6n8dm%2BlrRhWzHNSgPTl0Mynf4sxTXMY2oprqjar4v%2FkduU2NpswwkHF6ZgjqbossRZP26hpH2C9kXSuJ8424o5hDckmtsvSlQ&X-Amz-Signature=94421cd8c3fd2beefd34c12e4f26e059230b709ab8dfd80681fde31b92c0de7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4NJILH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCpZbs5MjHqkK8oWJ80sfdfINRA1VtEuByB0oBlzfY%2FywIhAI2X4YaDsMsnEcMb16HrAFPxmwB0AxRzk2VbW9x4KAzBKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPngVAjCO%2BLIdZaKMq3AO5gKaj5P%2BHPCHa4Zg7aschzMSxcol37bNTd%2Fi6tVZLLuXbKEs04be3QyIak6qqvYk%2BOt%2F4x3BQprbRpMmJV2os4m2CNjCU74T7EDcTyLS6FsTj1t%2Bv2KficwlSUIUQevGIQWtfoIUcMecx%2FGJVxXXw2Kc9pzMPsYNKkn6Ie%2FLqOa3BQUOc2NLV9kZXnB%2FVUuyX7iOGaq6wT65fh9cz%2BLDvWrnE3eTVMhrkpeBWqtrWy4y7r4qkc4ixfosKWEHSG9sw7cNlF56Y4o%2FTlOkZPAuuZrHItFGQtVnfwkVHT6BldkQbaCuNYrwGdHHAV4bBeb9Tx6PNgmbKBWyG6t2RbjyHfCXyD3mVpchC6xJ7SNO3oUc77eFfzPioFmUHfoUQJ6BzWEQMABA%2FAk1Cr24Au7R%2BvQOw2AM9l9qky2UVT7kQUJJeuAaOnHoUOXH6tjWuCse9wiGv3trSI1ApHUxGu%2FcEx3dk3EpyVQZpc8%2BxKoDiJMAlNFB9yYsluJap4efcInKMNsiJzZ%2F%2BfqWUZBUpBsRBTooGAbJRNJvBc%2FPrzcggYe9rKzSv%2BkMVSwRJh6WEcYXWIoG2uUzHxvDYUxrMBNnikOTOo6O0BYZd7qqI59%2B6GBTNP7vgN4nmy6%2FuLDDOwL7CBjqkAb2O0u8uvjxt%2BrzwespYVxCQqwyR4bm1QX9fAtcAr%2BIInlLbmuTQGXcCWw0J8fueHOIk99qxQFh3nbGN2Vp5vAcs2wgJjMrui3mq%2Fs2AHtNBQ7n%2Bq1eqp5Z0MrE9t0OgeeuOrOKLPt4CuTo54Apo2%2FrMhRXD6GI%2F1XsbHmY6z8azg2l8jgNhqZScdidg1dyMi%2B2xxGUVLHsBZhpClZLmlj0O8aFw&X-Amz-Signature=70f959648cdb9f84c94a1846f479d838508977e4232212a4562e287518f13872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QUUOCFO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBkMzHJ9xwMcy9M%2BY3vCOkw1WdODN1UGvOawqa4GOK4xAiEApv7PfrxK1g9g9QgB9Bp1hLaD0XeOIzuf0FTtnQIghfUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFb8z8SnOtC8hMoCdyrcA5czouwjJppYLSivjD%2FQz2wiWsOhKwvNB7nUIDE6ZbTqcodWY1Lh2YbX4PXy9Jm9SsCVddUbP8Mnx4Sg5zPYwJJamV5n35fwk87V7QHIQzQ88ZKKd%2BixmY62I1AgAl1FtcGbj2Ufqa30%2FVD3%2B4grwP9FVJ9noQDTFziIcUtR72zLYc%2BM96ZFChmcU05P8CRIYcli1bbzgsTeESKuns2oILnV3F9Ram70KUnngkfuJACmh2WUPmE1k6ITtLhThmVJEaQnfV1ZqCO8txTvRg4ZaeCGQkVK2j1MB%2FHoVi%2Bp3L3WAYySTi1slVhcX66NYUVlQZfdcknKWSA8Sc9sTXjLD2OvBZeu%2BZ9xwrm2Xh1bu2OxdUzmKlDhB9mwQhA99W2REYi9QW5VzSq87jLN3VWignYftN8kl1yMvki%2B6V7e5pRPpe%2BGlkORcFb6LLlIEIpJyw04Rtsjar60LIPPRT75VPyb8ieUnPbqCPdVfsI7V6WfHcBnP%2B4Ohzb%2Fb9s4tbab2Uj9IWJiJlUgIq9QFP8G0t2Gd9Y8SyfegbVQdKUgtQibZ5FdCt8BNv2uWYWN%2BxT2NZ41%2FnweUef7gqKUG1MweoS%2BOOCD15%2Frkjq3FdJB2X5yZw074Stl3VVgOZRIMJ7%2FvcIGOqUBrGV7t5mSbalG%2FzD2twtc%2BTQ8ZiC%2B615T2tMCfcL%2FmFSrXf4sQKXZbimiaY1aLMrW2zX%2FKFXFPHyqfVhCseAU2k77YHIHnHigGTacoaZTHbnBPtOKP8b%2BUtpjxsp8xgB8p8MYzC6aFTLfUQdnzW5%2BImWGKPG%2BCmcgDLt%2BV3eEnSALBQr7YjlQ%2Bs%2BfgpFFpdQqjBZxXaZPyNDjrpKsB0qU1xKDKnf0&X-Amz-Signature=eed54dcb2ad77ca8976d1760ebc820b20f5617172cb3681119c03b4f5b5727ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3E54UW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGq%2F8uJWM9uob5WyQw6jZDVYUDjy8RQxqpAMQYvvlt8vAiEAvxbwFuQXuvp9BdGUWmLD19gLebUHxUcH%2FDvNkHdXWrQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIlZsw6Y%2Fa1TLWcBSrcA5hhYUFjl%2FzVxTn35YGZN9v4znuqcBwt3cqzqlVJJp5lqxsfTV7DvP4%2Bf4u7ikMZn5wVgwj2isra1DI7O0sDvGWDjjk2XNXHnqdUefq3fDooHL%2Bie6QMS7Pvxb%2B%2Bv49s7w7V%2Bema3kpVynoar%2F0BhufvH3qWcVKS9jwNzr6rp8AN0Idggk5fiZmxGOZl280TCciI12eR62gQXcorC38CS9zsqxHsy%2FraXrnmt1dBVIhCigidjPRiGg32eB6mzJZ6g3a0WS8DXGcdXyPlk6oOFFyiEZFU429E0cmOQAhFrlXZaSZC3roDQLVlBfXm8gJBxQaIjcd9Aphe8jJ%2Bnkr%2FRvZAWN9NcPzA3%2F16OWx5gwAtDf%2FzRBY%2FxyAkEpQUgqpai3Hq4AmG9P9heH1y7Vk4g3j99ZT9GYu06K1RDRTXMT0dnc7%2BVhFtdj38BfV4JoqTTsDaxiVj%2B%2FVe8o6%2F3rJxPPCeZVXcLO2AMu3M%2BzKdcprnmgjArGqkD9T1I3R9WDHzNTLTn%2B01wI%2BW8Wq%2FUXjgiq4m6mewtM3xRhB9fWw0hbbPV0fNTvYf8Mt%2FpkMKCwuQ2H34PVh6niTHPrr0BTB3iJ9hzP5ObTUheLjGEOLZkS4NFK%2BnEouiOPL3DcORMIv%2FvcIGOqUB6HuKjW6EflIkKwMQaXCyrYYnfWR9Tr0%2B6wiORJx7lv6zVQ7HQjBYDl4REYuUTvPMQKi6nkC%2FyJmq83o3%2FlltbBJtYpkHl2C2ylkJb44tkymqLa%2FcDSrjzy%2F2WOu6n8dm%2BlrRhWzHNSgPTl0Mynf4sxTXMY2oprqjar4v%2FkduU2NpswwkHF6ZgjqbossRZP26hpH2C9kXSuJ8424o5hDckmtsvSlQ&X-Amz-Signature=430e773267ad6441724982e743324b49292a737d298bbe7f793696790e686faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
