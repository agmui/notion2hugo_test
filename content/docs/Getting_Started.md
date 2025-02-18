---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQVYPTI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGiZKxY2oaYESvMkjGsIZvsrRyFImZrL84wTHeFwqO1xAiEAwDiVm5lGD6S5vbqQt%2Bq%2BYuQpxmtz%2BZBM9381zIgEUM4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmv2dbRKdkVsoH2BircA8iv3X2c9PBW1hyhfccJiJ58HaFU7omYi8kl4NdJjaef3zsDQiIQ1Qkt%2FghbbXsp%2B0gOx%2F0epW6GnzMUUS54zvfxDdyp1uc3EL0AX8U8Kq4wmeZcs3jLz4J2Jfuk2TMd0A0iJ4HlaR4FdsS1BXm0Y3TiLNMzTaccWWt7KuKkYssAM2nD2bh%2Bfgzb5ByZx%2BsVXQIVngRz1ZKPPY7svl1xusWD1W57wYSDAamUvgtk3EltKzGtQqdj2%2B%2FI8t7By7zxRUUvHSMtp6iluA5083ah5rGitWXrRxjClifcglXCM9uQZruPfG5BG5349oD0dY%2B2XsVJh%2F5GMaVLT8KYtyfFNtg0taROQY1TcyZIuysK2dXOOEAAV0%2FrRjX6HLDveLhlKcKJzh%2FdcBeb4biFy4f8P3dD%2BKMvJJtzIuqYkR%2F9DEugweDPqHYD%2BiEW3WC8AQ%2Bv6Gn0a1pKyYhX%2Fgx231ud8s6TDn5gXWOXl9ca6ZoaYa2weW%2BQhQ0O6PmJr3mouqJwD6oDHzzj%2FOihcjXAKg577SBlvLVcEzfma8pF3bIZhVzcGD1wImqrGWBw%2BtnG3%2BMCXzeg3QCO%2FCxr517y5Adqf2YVKP3pYpvG9gxPd7PvApsXfyBw4YyfhKgpoRiqMOOx0r0GOqUBsCw4xshTB%2BI9%2FYw4atwto166D4Gm4CpKKOTdI3BmKBxDbzmcYOBXQ2Y93TiqvfUoO9p2kiYBVkQhZICBXd34Ma3VcMAk9MP3UlMRe3zHQI%2BrA7t%2B%2BV%2BBJ8mKeaTnoTBWAqYokyUpa%2BOYdUgHvtGSA2EIeOGUeP3W4jQ1lJUa3MvH0IzoHW8Lbwv7Zgcn99ZHCjA2lW9BEce0cNlun3Vj3gyRlgv%2B&X-Amz-Signature=87b4c3522acd926ea6ccc5710df6acc713c308fadf9c855dfb1b475caf67f92f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQVYPTI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGiZKxY2oaYESvMkjGsIZvsrRyFImZrL84wTHeFwqO1xAiEAwDiVm5lGD6S5vbqQt%2Bq%2BYuQpxmtz%2BZBM9381zIgEUM4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmv2dbRKdkVsoH2BircA8iv3X2c9PBW1hyhfccJiJ58HaFU7omYi8kl4NdJjaef3zsDQiIQ1Qkt%2FghbbXsp%2B0gOx%2F0epW6GnzMUUS54zvfxDdyp1uc3EL0AX8U8Kq4wmeZcs3jLz4J2Jfuk2TMd0A0iJ4HlaR4FdsS1BXm0Y3TiLNMzTaccWWt7KuKkYssAM2nD2bh%2Bfgzb5ByZx%2BsVXQIVngRz1ZKPPY7svl1xusWD1W57wYSDAamUvgtk3EltKzGtQqdj2%2B%2FI8t7By7zxRUUvHSMtp6iluA5083ah5rGitWXrRxjClifcglXCM9uQZruPfG5BG5349oD0dY%2B2XsVJh%2F5GMaVLT8KYtyfFNtg0taROQY1TcyZIuysK2dXOOEAAV0%2FrRjX6HLDveLhlKcKJzh%2FdcBeb4biFy4f8P3dD%2BKMvJJtzIuqYkR%2F9DEugweDPqHYD%2BiEW3WC8AQ%2Bv6Gn0a1pKyYhX%2Fgx231ud8s6TDn5gXWOXl9ca6ZoaYa2weW%2BQhQ0O6PmJr3mouqJwD6oDHzzj%2FOihcjXAKg577SBlvLVcEzfma8pF3bIZhVzcGD1wImqrGWBw%2BtnG3%2BMCXzeg3QCO%2FCxr517y5Adqf2YVKP3pYpvG9gxPd7PvApsXfyBw4YyfhKgpoRiqMOOx0r0GOqUBsCw4xshTB%2BI9%2FYw4atwto166D4Gm4CpKKOTdI3BmKBxDbzmcYOBXQ2Y93TiqvfUoO9p2kiYBVkQhZICBXd34Ma3VcMAk9MP3UlMRe3zHQI%2BrA7t%2B%2BV%2BBJ8mKeaTnoTBWAqYokyUpa%2BOYdUgHvtGSA2EIeOGUeP3W4jQ1lJUa3MvH0IzoHW8Lbwv7Zgcn99ZHCjA2lW9BEce0cNlun3Vj3gyRlgv%2B&X-Amz-Signature=69011394f2e69f9ba3c3bf0de922419da7db8b7c72079ef8b6b477622a374837&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCPGQQ2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEZWmZq4KgknJxq%2BuwFJNFeMuWPW%2BVwc22SCMsJPa7aRAiEAyMBIzeOLtDLeJPYHgyffMuG0yVMkU6ONn4X%2B5T%2FHL0MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw4y4TPaXxu2%2BWv%2BSrcA20K6znZjBvjO%2Bx8jATuF29cLQsHNG5RrKSJgfWnf96KwKcRcQ2A0Bxqg11pAlic%2F7AGsQwfQR77TlcVPW%2FAUmxQTpYmoGzUy%2BWlxI5J2OgknGN1U9LEK1DEKxFkaIBVdVlC4fdDVjQnMqzB4N4a6fWoc2ZPzNoh2TJzEOSk65FRyb2Jty0n5bKa4laNczDljWRMKvGFEDB%2Brj0hksxd4V49goU3tJjYXsRMl9kDFNWQjUFsXFb0SuK1JZQZ8FTSMsjcw9LnmWIqNyrak7IGZp43iHtZjmWIjMT7rQgqFp7JvRPFMsm6ImcOyYG8DsdUjIla3ip7ig7H96lg9KyLbEpZclw59Q6IPLjbJK%2Fog2nnAU%2BDXNXC8tzeEQOWOIWmeonGH7xkD4GyWyzZWzkqMjTTZyEJ09OFmw6AThfKHhRxl5mEc3xW5zqQ3uOMLsVGhnHQXVUaRT5cuDqMflu%2BSzM5zvO302YT3yrjf0XAU4Nv9Ne2S805CXfv8J%2FRdfaL6dmhzYrZWm2p6Zbagd3fqVBc6Owl6fvAT9k0u1ilc6Ewvs8tgCXshOfmDZ4%2BBlrU6eswVYpn0q6hgOJsA6rVLkFNEKky30JyMwJb6R5bZLxLdLI5sysfetQsT2TcMPGx0r0GOqUBadUtk9HD4W9weJtj0W4YvOrFJ00Nh3bEQ1LDe3bIGy91eDVmd8lYt8PnHnwPX4wDe8C19w3Hxhmh8eMFZAflO5t9GWy60%2BYJkpnXHEDqEkeRs%2BfuVxegD4mrMtBbu7Kj0dT%2BLBrnV5hhSVXybwupokbiVKpqKKd1Kcaad2NRD42jVfZ6lwlRPiDm2Cz%2B6%2BLfMAXfjPr%2Bg10%2Bhbdk8ULXk2%2FWRjZG&X-Amz-Signature=e596882150f926bf237004ba233398be168b4e091e6b1c29d28c9337d3fb1f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKO26TEG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDxufsseDEEtiVchWWIeuAaONZQQJ%2BTtHhyxUOhoBUUGAiEAl34yWkM8d5H3mu6JJjHpuZPrzmBaJ1pYDbESQII8f6UqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa%2FRyXhUiOo%2B8yh0ircA1%2BD2dK0b1uiFqXK1BhfievAqzd9c8j295PglHTv4q3es91y2WGMn3oIcy44wV04gb2wW4FWlWLFEvYCyjRQt8n60rD0AfB6rZEPR0yOX5K0Gu7cdZIf6WQFbzTPL%2FNX8z%2FhOUa68uwRGwmZguw6WC0W0whfKe2UbnEmONsQX8XfgQ1p802G2mFcBkpL%2BoSamNgJksWSH%2BGfALzh%2Fg1oe8UV0evSNZw5tZdVdvtvAdjjQ8tSZpzaFKJu4DDPShQuvQE7sTNbmaoVQ7sPInyhLVwAyIX8IKznuBB%2FCwYy%2BLHzTXcR8q4Rtg99FFOkBsdhj4MSaRmW7EXESF4u8P5NVrvc2X0OWFg3kl2KfBXdmcD%2FcgXZW5Ie3d3CjTHO7lABvSzfITQ3TFhEOMwmoLJ2y92vw0Y4H4As%2FFNnGCWeMQlBFwCR%2Fg7aaIZ4SrXemp2fiOhL904ZvTtosb2MnehFiPOHZ1Bpvl9LntTkyYaRk5y5PEXMqPVyHhNzUsodbWb%2FNQ2kljwTPNBomNg4wkfw%2BNzo7EycGQ2bWFnWW0ntmnwP7GxxrqdFkCuVgu71pRRWRpIP7cHvVB4jDaYpEU6dDqlj0%2B6xqpiFd4iXY3KAfNLA8opCeNXxj1ybliCyMK%2By0r0GOqUB1LHRilDzvIF8fSBMrGc%2BwrF7v1M9A38JBmmhi16ADXjy5Qn0BAxRNiNRb6Jb45gPEK%2BD%2FwZlHsWOu6x53%2FkmbOiGTspa5yeMaIo1M15bF6E2Jmo1LuguZAjZKKA8n8VSYnAwgcCT0ZjX9BQdnPFzSwc10opx8dRoUYhXq9bUfwehQDOD4Gurk3oDIfkOlHhbfOFiNwrbO34kK6NXivsP20NMUAY5&X-Amz-Signature=d8cfc1fb50ec65b01e6006d6bd3e84be69fd466f80ce5677b11f4cb3c25a092a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQVYPTI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGiZKxY2oaYESvMkjGsIZvsrRyFImZrL84wTHeFwqO1xAiEAwDiVm5lGD6S5vbqQt%2Bq%2BYuQpxmtz%2BZBM9381zIgEUM4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmv2dbRKdkVsoH2BircA8iv3X2c9PBW1hyhfccJiJ58HaFU7omYi8kl4NdJjaef3zsDQiIQ1Qkt%2FghbbXsp%2B0gOx%2F0epW6GnzMUUS54zvfxDdyp1uc3EL0AX8U8Kq4wmeZcs3jLz4J2Jfuk2TMd0A0iJ4HlaR4FdsS1BXm0Y3TiLNMzTaccWWt7KuKkYssAM2nD2bh%2Bfgzb5ByZx%2BsVXQIVngRz1ZKPPY7svl1xusWD1W57wYSDAamUvgtk3EltKzGtQqdj2%2B%2FI8t7By7zxRUUvHSMtp6iluA5083ah5rGitWXrRxjClifcglXCM9uQZruPfG5BG5349oD0dY%2B2XsVJh%2F5GMaVLT8KYtyfFNtg0taROQY1TcyZIuysK2dXOOEAAV0%2FrRjX6HLDveLhlKcKJzh%2FdcBeb4biFy4f8P3dD%2BKMvJJtzIuqYkR%2F9DEugweDPqHYD%2BiEW3WC8AQ%2Bv6Gn0a1pKyYhX%2Fgx231ud8s6TDn5gXWOXl9ca6ZoaYa2weW%2BQhQ0O6PmJr3mouqJwD6oDHzzj%2FOihcjXAKg577SBlvLVcEzfma8pF3bIZhVzcGD1wImqrGWBw%2BtnG3%2BMCXzeg3QCO%2FCxr517y5Adqf2YVKP3pYpvG9gxPd7PvApsXfyBw4YyfhKgpoRiqMOOx0r0GOqUBsCw4xshTB%2BI9%2FYw4atwto166D4Gm4CpKKOTdI3BmKBxDbzmcYOBXQ2Y93TiqvfUoO9p2kiYBVkQhZICBXd34Ma3VcMAk9MP3UlMRe3zHQI%2BrA7t%2B%2BV%2BBJ8mKeaTnoTBWAqYokyUpa%2BOYdUgHvtGSA2EIeOGUeP3W4jQ1lJUa3MvH0IzoHW8Lbwv7Zgcn99ZHCjA2lW9BEce0cNlun3Vj3gyRlgv%2B&X-Amz-Signature=855f907fc989f638b6a0ce1c97f1c55fc69242d14f45173c54121510daf64f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
