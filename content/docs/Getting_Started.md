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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNGKE4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLuLHTJdPHPtVDoD9mGM5%2FL%2BJfCLcGmdY7X9Cu%2FXjTJAiBd0hnYsEzXw4JU94RzO7akGbADPbfB9aeS%2FoHFWBbMKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMllRdWvrMlyACFTsGKtwDgQ%2FHfNJW9nevwZQPAOnMJob6gZfyeaA4BL2UMrXKEJOay9L%2BFR96yCwAsY%2FqMrsstuLgs606AlGzNU6CykbMuBXxoW8a8%2BgmhO8FM3v0oSa9Krk6A1aqxegr3jOkTIqQ46jqLPo7GtfCdONaIsrQdLa%2F717uEUVPa0G%2BM3n3yjjWzmK8CEbXX5JUk%2FEraU39zPMchXXHty3sHMRP288Cp664BrExY3BS1UNSkI6sQ%2BEoMyD94oMLzstm%2BsPcnmfFuU2gvmv%2FwC6yCr7hvSijvhJdRcO9VLEtDx5ot7X3kwFB0QjNCzSJHFOeMTGzPlTVkyC3Nf0L0OcZldkKlLhZGz8%2FAohnMCCxga1p6wZlUrPk07i36%2B6fUz%2F9km%2Bk%2FwfRyk4I094%2BNLdfk5bdYJQ2ftzbJA0PYgTs907Q%2BkZ2YG6AfAq%2BUSm0H8sRYAkXcf0sxu2q1iZE816Lzk7U6IZHURgYxMG8IKDZQZyY%2FsIxxNoPQjZwJIvNOgkPXSWqN4m7c9p5j4o%2FksjPqKEf%2FWlfq2oewS%2BAdRQIc%2Fe%2FytBXWylyK1pqGw9TMlidRFcokRWO4GsYOdtF9CyN%2B0UsM%2BcMu%2FGuu23qvbEO0UTDUceVfQPW1eJmjZkJkTTSI3gwo9bmwAY6pgESk6ZF6aT3UH6CNxnMJgGacimzh9xZZ%2BEuVU0me1K%2FwgDnaedhamjE4EwnGm7%2FFilgPKR%2BJgyIEJIUGKQndbXKJ8DSlPtf8quvcgNdnhX8192%2FbMxR3xXsOnZZps4d3EsgSxM1WBx38aMztdIqPxNmIq%2F5K8mCvvrVhIHm5Mi3T%2F3gdhnirP72ZDzWXHPZlCXhobDDdUm6Ht8yCE0%2FWmhE%2B%2F9dLUHr&X-Amz-Signature=83aab21078e62ac5014e1be0094cc1663e7ee59d025b6f515a863baa26dee9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNGKE4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLuLHTJdPHPtVDoD9mGM5%2FL%2BJfCLcGmdY7X9Cu%2FXjTJAiBd0hnYsEzXw4JU94RzO7akGbADPbfB9aeS%2FoHFWBbMKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMllRdWvrMlyACFTsGKtwDgQ%2FHfNJW9nevwZQPAOnMJob6gZfyeaA4BL2UMrXKEJOay9L%2BFR96yCwAsY%2FqMrsstuLgs606AlGzNU6CykbMuBXxoW8a8%2BgmhO8FM3v0oSa9Krk6A1aqxegr3jOkTIqQ46jqLPo7GtfCdONaIsrQdLa%2F717uEUVPa0G%2BM3n3yjjWzmK8CEbXX5JUk%2FEraU39zPMchXXHty3sHMRP288Cp664BrExY3BS1UNSkI6sQ%2BEoMyD94oMLzstm%2BsPcnmfFuU2gvmv%2FwC6yCr7hvSijvhJdRcO9VLEtDx5ot7X3kwFB0QjNCzSJHFOeMTGzPlTVkyC3Nf0L0OcZldkKlLhZGz8%2FAohnMCCxga1p6wZlUrPk07i36%2B6fUz%2F9km%2Bk%2FwfRyk4I094%2BNLdfk5bdYJQ2ftzbJA0PYgTs907Q%2BkZ2YG6AfAq%2BUSm0H8sRYAkXcf0sxu2q1iZE816Lzk7U6IZHURgYxMG8IKDZQZyY%2FsIxxNoPQjZwJIvNOgkPXSWqN4m7c9p5j4o%2FksjPqKEf%2FWlfq2oewS%2BAdRQIc%2Fe%2FytBXWylyK1pqGw9TMlidRFcokRWO4GsYOdtF9CyN%2B0UsM%2BcMu%2FGuu23qvbEO0UTDUceVfQPW1eJmjZkJkTTSI3gwo9bmwAY6pgESk6ZF6aT3UH6CNxnMJgGacimzh9xZZ%2BEuVU0me1K%2FwgDnaedhamjE4EwnGm7%2FFilgPKR%2BJgyIEJIUGKQndbXKJ8DSlPtf8quvcgNdnhX8192%2FbMxR3xXsOnZZps4d3EsgSxM1WBx38aMztdIqPxNmIq%2F5K8mCvvrVhIHm5Mi3T%2F3gdhnirP72ZDzWXHPZlCXhobDDdUm6Ht8yCE0%2FWmhE%2B%2F9dLUHr&X-Amz-Signature=6d1ae3b4fa769345c168f0612b8691daf9d7c83c9d18cbcb13c044770e0ab5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNGKE4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLuLHTJdPHPtVDoD9mGM5%2FL%2BJfCLcGmdY7X9Cu%2FXjTJAiBd0hnYsEzXw4JU94RzO7akGbADPbfB9aeS%2FoHFWBbMKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMllRdWvrMlyACFTsGKtwDgQ%2FHfNJW9nevwZQPAOnMJob6gZfyeaA4BL2UMrXKEJOay9L%2BFR96yCwAsY%2FqMrsstuLgs606AlGzNU6CykbMuBXxoW8a8%2BgmhO8FM3v0oSa9Krk6A1aqxegr3jOkTIqQ46jqLPo7GtfCdONaIsrQdLa%2F717uEUVPa0G%2BM3n3yjjWzmK8CEbXX5JUk%2FEraU39zPMchXXHty3sHMRP288Cp664BrExY3BS1UNSkI6sQ%2BEoMyD94oMLzstm%2BsPcnmfFuU2gvmv%2FwC6yCr7hvSijvhJdRcO9VLEtDx5ot7X3kwFB0QjNCzSJHFOeMTGzPlTVkyC3Nf0L0OcZldkKlLhZGz8%2FAohnMCCxga1p6wZlUrPk07i36%2B6fUz%2F9km%2Bk%2FwfRyk4I094%2BNLdfk5bdYJQ2ftzbJA0PYgTs907Q%2BkZ2YG6AfAq%2BUSm0H8sRYAkXcf0sxu2q1iZE816Lzk7U6IZHURgYxMG8IKDZQZyY%2FsIxxNoPQjZwJIvNOgkPXSWqN4m7c9p5j4o%2FksjPqKEf%2FWlfq2oewS%2BAdRQIc%2Fe%2FytBXWylyK1pqGw9TMlidRFcokRWO4GsYOdtF9CyN%2B0UsM%2BcMu%2FGuu23qvbEO0UTDUceVfQPW1eJmjZkJkTTSI3gwo9bmwAY6pgESk6ZF6aT3UH6CNxnMJgGacimzh9xZZ%2BEuVU0me1K%2FwgDnaedhamjE4EwnGm7%2FFilgPKR%2BJgyIEJIUGKQndbXKJ8DSlPtf8quvcgNdnhX8192%2FbMxR3xXsOnZZps4d3EsgSxM1WBx38aMztdIqPxNmIq%2F5K8mCvvrVhIHm5Mi3T%2F3gdhnirP72ZDzWXHPZlCXhobDDdUm6Ht8yCE0%2FWmhE%2B%2F9dLUHr&X-Amz-Signature=3195300066237e67ef639a5ca66db4ca01e60848ca1523d458a4abc2c714fd89&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6D35KN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDryli6slVzyiZUIEN7r7fEK2Pw5maQ4i4ErO67C2dvbAiEA8VIFoYHy%2BmdL%2Be7v3ihIaMAAz4%2BcfhSRNG8L6Soo%2FWUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE5M%2FgXhzvT5q0YkOCrcA87HC0HnuG1zbxVtO2GSii2LtvHZWlncF%2FdAU%2B2BHEc2xE7QBzlkafOcS1tDgdkGmt%2BUBxGDJUtNvTALgb553TgrNnKcnKsdiE%2BALkn%2BuZTeohaBRgJTWS%2BStzyBBIWhJREkY6L8%2BAqWHQT7pivfU5ieauzsfj0D9JXIq%2BNK%2F7Onf26LIputTrtU6oAo3xWI2E1xjzNssgyFk3pxgUh2yoxqhxLiKRIdn49tDrQNmiFNgJvHq7kKPMj7Jo3LpinUv28zSJkc8mi0%2FeYavMmtpz7ZVNKEPaAkmSqQ0FNuOlZgQ9fgb1FsQEJ%2F4L90qv6Ax7GSZaHeiGFrhm%2FCy0Am0ZFIIG6ktqIWid7U6%2FBzMsQSXSATTgS%2BZp5y4GAjPtgaAjCqhpMCG3PnS2wq7jtCrxFkx7Zdx87pcOruCmZIvCnhEP0vgxe8XGyin3JjSuI9rEw%2BgBqbmkXEQbV93Kypzn01rC1mwOjZu6sLDbuuv%2FI3f885afLQuYFnd3gMD8NqJHJQVjhMDFATFcrAk6J5XcRBlAsThKhtt09zCZOl04OwPSB1iJwIhCwCPLd%2B%2B7YE09%2Bj8xvkg20BuscfhLV1G5EzeYsm%2F3wx%2FHk6Lscdssio2ohN3oAOBx%2F192CMMNDV5sAGOqUB2C%2Bq%2BYhTCx%2FrRDcYBHhIuLQr3X%2F29CmnnbcNtVwi%2BJvMoKxj7FjHXQn5HO%2B%2FVS0xv8s2vd%2BnmYH6e01cLBBYbC12YRmQ9e2MA15BMUicyJL2%2BBOXQj0QlQePTlasJSa8vuCmGWIGnpjzjSwoqFvGYQCjZPm36ZguGAPyLzsqB59gi3lEnPO9VLc4Ix6Xvm3bgE9GIj22PF4F4tUcXUT3%2BwQ8IaNe&X-Amz-Signature=0b04e271000a342dd6fc7c29ab454ddc25000540b03bb2210ad37a97ce74529d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW64US6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADYTW5L11ZB%2BR%2BsR4s0eeLxrUpljkOJQUBMzrFzTSpdAiA%2Bn2IqEMPG%2FfLKG5z%2FY1z7SttBAJAunJLMcGhvVlC1hyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5F5wB%2BAnEFqOGHOyKtwDq1rEwhdr5okAb6V05Q6AT6f6qDsKgBsUwzs8DLmoYx%2Fqru1JzUul3QFi6ZUO5roYIpj5EuJGz%2BCIjvTDZjHTZDy%2Bcb9R8MNZxSE8RyneDk2swiasw6BsVLDmEX%2Bbnht1OonhvEvkOHwpIw%2FWNOZefHM5%2FWePE41Sc2NjliROFwk2WC9fUVAJBqu5tljsW%2BDo11u61ZVv%2FdV3VK6PuqvAhA1pwoObE4glc2GcPZz%2F%2BT5pKTbMN7A46atD0ssyHoqwOe%2By%2BQg0My6COnkn%2B6thdn%2F%2FZgQbK6u48NgN4WUZ4Ce7RKnRA6qA%2Bt6CBrxam0j9pe92rrAWvEPlgdAgVThXm3quFjwlOIj0KZ2Lyy14EMjF8HI7gGDd8KUVthL48%2FFALswU0%2F03e92TUtLub%2BcTPMimQ0Nik%2B049BKadGUBG7C5lgi1ViWSnkjqKRVPvpyzG6MzS3G8YoHpdtVHjtqsqBVOxqiX15AHcSvgf308V3va9eF3o0G3h5BXREUoNlyRubyqvfvzRjIVpaktN2nHkPtgmkEncGfrbKCDGaaOJTQ4XUamS3YixONOxukknvPqUSkJtZqSUk1F9Knp%2FCBepIkz3LlyJKg8Rh2nmlHtwCdPo4z4K6Sfu%2F4CMa8wm9XmwAY6pgGKmF0wvTZgqwaDa%2FKEp2aNwxSfMgvzK4BpBKe7gSalswH5P%2BKdRhpInaqe4zHSHxVRLZ6xaFs8NeF69yCMvLm32RgWufh9irhgS7vbgUSW7HKLbS4FChDWI0E9qP0OThmy8ChnBy2Bj6iXxgbWlGMLIGwl6nT%2F8Wh2KHS3cxIHdM3EztTG0z0HPqaihS0jAEljX2y6RjL9BkKe02H7WJVlNOCVYXVT&X-Amz-Signature=70a727806e3d9903964a84b465a3600ac01b10eb14f2e07db306e717d128af04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNGKE4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLuLHTJdPHPtVDoD9mGM5%2FL%2BJfCLcGmdY7X9Cu%2FXjTJAiBd0hnYsEzXw4JU94RzO7akGbADPbfB9aeS%2FoHFWBbMKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMllRdWvrMlyACFTsGKtwDgQ%2FHfNJW9nevwZQPAOnMJob6gZfyeaA4BL2UMrXKEJOay9L%2BFR96yCwAsY%2FqMrsstuLgs606AlGzNU6CykbMuBXxoW8a8%2BgmhO8FM3v0oSa9Krk6A1aqxegr3jOkTIqQ46jqLPo7GtfCdONaIsrQdLa%2F717uEUVPa0G%2BM3n3yjjWzmK8CEbXX5JUk%2FEraU39zPMchXXHty3sHMRP288Cp664BrExY3BS1UNSkI6sQ%2BEoMyD94oMLzstm%2BsPcnmfFuU2gvmv%2FwC6yCr7hvSijvhJdRcO9VLEtDx5ot7X3kwFB0QjNCzSJHFOeMTGzPlTVkyC3Nf0L0OcZldkKlLhZGz8%2FAohnMCCxga1p6wZlUrPk07i36%2B6fUz%2F9km%2Bk%2FwfRyk4I094%2BNLdfk5bdYJQ2ftzbJA0PYgTs907Q%2BkZ2YG6AfAq%2BUSm0H8sRYAkXcf0sxu2q1iZE816Lzk7U6IZHURgYxMG8IKDZQZyY%2FsIxxNoPQjZwJIvNOgkPXSWqN4m7c9p5j4o%2FksjPqKEf%2FWlfq2oewS%2BAdRQIc%2Fe%2FytBXWylyK1pqGw9TMlidRFcokRWO4GsYOdtF9CyN%2B0UsM%2BcMu%2FGuu23qvbEO0UTDUceVfQPW1eJmjZkJkTTSI3gwo9bmwAY6pgESk6ZF6aT3UH6CNxnMJgGacimzh9xZZ%2BEuVU0me1K%2FwgDnaedhamjE4EwnGm7%2FFilgPKR%2BJgyIEJIUGKQndbXKJ8DSlPtf8quvcgNdnhX8192%2FbMxR3xXsOnZZps4d3EsgSxM1WBx38aMztdIqPxNmIq%2F5K8mCvvrVhIHm5Mi3T%2F3gdhnirP72ZDzWXHPZlCXhobDDdUm6Ht8yCE0%2FWmhE%2B%2F9dLUHr&X-Amz-Signature=2ccb576af7eac646fb5233815f26dfabd987450b0c8ff8231179449ce4c0ad43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
