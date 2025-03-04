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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHII52U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDglXHlGpQESUKMEEuJHxitlO1hAnkaptXbiY0uH6eyTAIgFLM%2FxH6elRDpnAtPxdvad9D%2BlLDzTtA1aZVKzW8lFCQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYS%2FT%2BHJhneCxS%2FrCrcA3NMmKbeYfLHyEJko1e8IUxkFCJzhkBnigvag5y0BRBzEAKLFLC62%2BUDCBXZ6qGs0dyk84MOKBYUNBtMBiZuUvNCODlmcUY3yLFAi3Abq4YOcG%2BRzObOPt9el5Sk53PgAGBO4PT2Rh%2BzDB60fOWThf0Aip4ok1agk%2B2Dh%2FsV0oEGkj32azCZrCP0cAhCGpuBdePSZXJOxbv1MhHfAMmJfMyCjc9vCFVtq5aKIAx%2B6JOH0wSqWnuMwXiRLX9kzGFe2m1nHul%2BLurGqXamo73SM00U%2BRJuFTIp0aNV4Ek9jq4IsYwziw0D%2BRUE1rpJasr6FxTGaBn7GEUT%2F6%2BGgbzINbJjMW8J3wqy9qV%2FksgV59sUaO6H2JYBBrXkmRI49bp2CN%2BhQv8C2zSccy0ln2NX5djViofv58LOgIseTslGkJ9tc8UL3BN6MJjCWMl0F25s77zpWuE8e9oJ13nR7R8r7lByoa0%2BOtwijrFyD6hAKCQg8LDSaA3vo9EeT336A9yRDXcKxn9xoBwI%2B67fo1OUdeDnVcTlTSmaa%2FqEIhTAtiCm6DQSdrpqKQU4WFBb7AGJ6FgyAiHukmJImdQWZsdjDH8RreHV6H5EFZj0kxOcDsCsm%2FFHS2u2GB33cdoSMJXcnb4GOqUBS9g6fb6IaA7UojZZ8r48p7bnpdaeJ64R%2BlEIHP8n%2BBLv0zQsq5rxQRCjtcMjG%2BJyyll6Qmrpa%2Bd53R%2F9V6vES6%2BTrxMD8yQOLWN6K9TsGW42uNqZEcARu%2Bd1lKvkynWTLGYcjy5W5Te2LhcdGH8%2FD4XeqNhgED5ZqzrVrJ3WQlio2aqpG%2F6yYxzHYmhmNGGYjZXBINUfzJ3W35COLCnpbBf0bjLv&X-Amz-Signature=623d322a0ee3869bcb5a0c1542f1751bc8def100df6eaf90d13b5ec1d80d357d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHII52U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDglXHlGpQESUKMEEuJHxitlO1hAnkaptXbiY0uH6eyTAIgFLM%2FxH6elRDpnAtPxdvad9D%2BlLDzTtA1aZVKzW8lFCQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYS%2FT%2BHJhneCxS%2FrCrcA3NMmKbeYfLHyEJko1e8IUxkFCJzhkBnigvag5y0BRBzEAKLFLC62%2BUDCBXZ6qGs0dyk84MOKBYUNBtMBiZuUvNCODlmcUY3yLFAi3Abq4YOcG%2BRzObOPt9el5Sk53PgAGBO4PT2Rh%2BzDB60fOWThf0Aip4ok1agk%2B2Dh%2FsV0oEGkj32azCZrCP0cAhCGpuBdePSZXJOxbv1MhHfAMmJfMyCjc9vCFVtq5aKIAx%2B6JOH0wSqWnuMwXiRLX9kzGFe2m1nHul%2BLurGqXamo73SM00U%2BRJuFTIp0aNV4Ek9jq4IsYwziw0D%2BRUE1rpJasr6FxTGaBn7GEUT%2F6%2BGgbzINbJjMW8J3wqy9qV%2FksgV59sUaO6H2JYBBrXkmRI49bp2CN%2BhQv8C2zSccy0ln2NX5djViofv58LOgIseTslGkJ9tc8UL3BN6MJjCWMl0F25s77zpWuE8e9oJ13nR7R8r7lByoa0%2BOtwijrFyD6hAKCQg8LDSaA3vo9EeT336A9yRDXcKxn9xoBwI%2B67fo1OUdeDnVcTlTSmaa%2FqEIhTAtiCm6DQSdrpqKQU4WFBb7AGJ6FgyAiHukmJImdQWZsdjDH8RreHV6H5EFZj0kxOcDsCsm%2FFHS2u2GB33cdoSMJXcnb4GOqUBS9g6fb6IaA7UojZZ8r48p7bnpdaeJ64R%2BlEIHP8n%2BBLv0zQsq5rxQRCjtcMjG%2BJyyll6Qmrpa%2Bd53R%2F9V6vES6%2BTrxMD8yQOLWN6K9TsGW42uNqZEcARu%2Bd1lKvkynWTLGYcjy5W5Te2LhcdGH8%2FD4XeqNhgED5ZqzrVrJ3WQlio2aqpG%2F6yYxzHYmhmNGGYjZXBINUfzJ3W35COLCnpbBf0bjLv&X-Amz-Signature=d1d8df557f07fead2774c3696ae73dbcf9c5dd36a512d7be7bf9e47e7021449c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7A3YNM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUIgy0bcbA8GOR%2FanlX%2FZeBMStOYUgjsNaPRFY8rU9VwIhAM0Jm6lEkVplKilbjm5%2BuWuKZpzR6lRXlVI744jlsu7vKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xCnR0kFuh5LDmk4q3AMxl0JR21bwyupwqeHFHELFrj1joRm4DmKNd88SJuFgh9D9%2Bl2VWsX1xStZFaWOyui1IdvEeEWbVO%2BtK2YiFftuySyYOV1noxBWhW6Vc%2F%2FwIQfI0NdxB6kohooz5pWBuXiGdK6eOzlp9qdBTFC6BabN53R6HXT2h1ahfxF2qyaojiaDj7IrrfhDCj5MTDv34LOElZmLNciHUbq3%2BdOzjTogfvg1FT84hKklbzKWU6KG0ODsVOgj22OqvoKlUXulySrD59rzfRrEQquHuyYXPhhORg86Pp%2FCFI7zFWoaMbTROHr6zq%2FXRMI5i%2F6wJnLbtCt0ACDCcagxybn8lV15ysK3ydfy2uJLRJpQRu5fRH3wwrN7C3hX2ZRMcZbRFabKOMYM%2BgCZs9TLs8iEYLRP9%2BDj0y%2Bc8a5NZeuT2v3Q6JY9oSo36wcsqBZk%2F36T6prEbnXgnX7wavKeDLSY2EDpHSoQKRAu1xBx3uvsVa8BU%2BanOU%2BPE0a%2F1bEopsr2CuXUM8zVhAi3LNE3gw3Q1zyaoZ%2FescfydZ6sVGXDr8skVUbABw2Uaz%2FbIN8ytdKS8J1uE9GoP73Rmz6sOnrCtHqwGvDgBLjFiBmMuRl53YgTe6z%2FwgLUKBDCEjs6%2Bx6kwTDH3J2%2BBjqkAQb1yuYG5Py%2BG1MfLXMU0bv1BZ0CmniYwVoIv96ZaOarZ4Ew5n7hLIxJwSFPVO3IjPnz%2FfK%2F2hRDGvQ4v8IknL5RQAU26j958%2F8t89nxFnWY6%2F1mIozKsJhA4NB5MFbVtgfBJ25P%2FDZPyMfY%2Fb%2B882GOyZRwnI%2B%2BA39JNQhzZDC6rX9Pm6bCxZUDOx7iAj%2FEfKR3HWoAlHONmttYJxK16%2F%2FFcwtp&X-Amz-Signature=cbb71108d4cc92cb3f0ac41a66b7592d95005200b82e860abdb03d5d3040828b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV26N24P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO7Xrxxzd%2BJxpxMOXgng5%2Bv7iVB6dYcKyYkmHib2y3IQIhAK3yivo%2FzzY2mpqtcOqoKSBHRK2gDbGAv2JB%2FJkEwPJvKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPoqpPuDOLHoQvsFAq3APxxKP0tbXxCjBJwTH6PJpFqRPuk2mZsQOhHVApMrYwGL237z%2B48PCCytCUHy3Ag0c5TMc%2FK0C5FKHL5D4GHeesPv7hzzdaUZUxT4hlJj5zuohp3cHXDE6V1Kr%2Fw9rmtYJV6Sy6GQf%2Fk%2Fn5g25cUusOq6Xx2oW3cfhe9Z1CAvSe7GxJFNUxBQa8qOypYL7%2BVW08qKTi2o9TWiB3C44PaGuROUnk8SQP8mkxkspkgY1mXlRAcNzWvgpWklw3lQFh4BjWZdSoMTvdvk%2Fwmw94mja8QOMXUsrNd7p%2BypwsvISzAcavddNeLzVDxXbey4BRG758AgR%2FV9o7uy2dMhrr8nPvjd%2BXEhPLbNzoX1jVwjssQfVYrZMzikFPQZhSOmxMhQxc7DC%2BAPZeqc8H%2BulOqMG4VilkvIO707RPvNo8BJBmCrGMFRfYkbFdZKWrplumZcjIchkompV3YwAtnrtpWmcal4fKF6Fk8hYQ3%2BDrmy3UAUOpgQgvBbKl%2BHQwxjnkTehvAMxhTH2TOAlKtUicHbCj%2BpTYRW3DXB%2Flrob7DFr148JOzTu6Nz3XXyYgmxLF8JXZ5wIAF7Nqb%2BYHne1C40sGkxmWxhKMBazGkcXLMAdeQU9myFcKgGuwKQhTSDDd3J2%2BBjqkARtgeVGwyfIy3vEh4KCjTyQ6ct2iFKnyUvJGoS0v8vbona3cEjcHNjisEkR1qJ8H3%2BGtm9nEsIl7l%2BIjDieIIZQ%2FW6QoBzsCskd0jMcHkkLBxpnn0IHQLHxNBNhhl%2BLikvDcbNudO0qZK2uy%2FiLmh9%2FgpIOl7%2FWPHL1CN8%2FqlOTLPK%2BQBVpjrjI8P8a8%2FE%2FO8Fb4zjMCl1lErZzuD8ufZMv54tz5&X-Amz-Signature=0e5b07be437c3f3e9f71535c36ac83ec88e8b28ef5e9dbfb6dd66548dd513df2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHII52U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDglXHlGpQESUKMEEuJHxitlO1hAnkaptXbiY0uH6eyTAIgFLM%2FxH6elRDpnAtPxdvad9D%2BlLDzTtA1aZVKzW8lFCQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYS%2FT%2BHJhneCxS%2FrCrcA3NMmKbeYfLHyEJko1e8IUxkFCJzhkBnigvag5y0BRBzEAKLFLC62%2BUDCBXZ6qGs0dyk84MOKBYUNBtMBiZuUvNCODlmcUY3yLFAi3Abq4YOcG%2BRzObOPt9el5Sk53PgAGBO4PT2Rh%2BzDB60fOWThf0Aip4ok1agk%2B2Dh%2FsV0oEGkj32azCZrCP0cAhCGpuBdePSZXJOxbv1MhHfAMmJfMyCjc9vCFVtq5aKIAx%2B6JOH0wSqWnuMwXiRLX9kzGFe2m1nHul%2BLurGqXamo73SM00U%2BRJuFTIp0aNV4Ek9jq4IsYwziw0D%2BRUE1rpJasr6FxTGaBn7GEUT%2F6%2BGgbzINbJjMW8J3wqy9qV%2FksgV59sUaO6H2JYBBrXkmRI49bp2CN%2BhQv8C2zSccy0ln2NX5djViofv58LOgIseTslGkJ9tc8UL3BN6MJjCWMl0F25s77zpWuE8e9oJ13nR7R8r7lByoa0%2BOtwijrFyD6hAKCQg8LDSaA3vo9EeT336A9yRDXcKxn9xoBwI%2B67fo1OUdeDnVcTlTSmaa%2FqEIhTAtiCm6DQSdrpqKQU4WFBb7AGJ6FgyAiHukmJImdQWZsdjDH8RreHV6H5EFZj0kxOcDsCsm%2FFHS2u2GB33cdoSMJXcnb4GOqUBS9g6fb6IaA7UojZZ8r48p7bnpdaeJ64R%2BlEIHP8n%2BBLv0zQsq5rxQRCjtcMjG%2BJyyll6Qmrpa%2Bd53R%2F9V6vES6%2BTrxMD8yQOLWN6K9TsGW42uNqZEcARu%2Bd1lKvkynWTLGYcjy5W5Te2LhcdGH8%2FD4XeqNhgED5ZqzrVrJ3WQlio2aqpG%2F6yYxzHYmhmNGGYjZXBINUfzJ3W35COLCnpbBf0bjLv&X-Amz-Signature=9db60575d947dee6d36b08faefa0512f977025ae18a4a51ee8181699828d3cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
