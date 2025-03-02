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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVI2EXB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDR2U0phVOwWkEa%2BSHPIQPdJb2rY8spPW%2Bbl6lUW3FADAiEA3u2Br6rSs5qBCzW671EFkun29zAKg5hu23IHhxJ84f4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXljvxxrAbK3iaKIyrcAx5drCQBzI9wJhFTlkKiuSetDiai2y0Oo9UqbQI9qTzOli5obd37fQvJIyeKuN3w1gA1HiVmy2mPl%2BoqtzSmEnzQWUIJxNXDw3SopbT9%2FblE7E%2BCd7%2BMnpOfclhPBjZsolGg5i0nYDMnzijUYwUyWX%2BGK4Q3JMhhIvjRiP5RbXCXBFYZX6odcsg5qrk3cJKzIBPZHl83BlDq6amd4zTPF7kOkAEWZtH%2BD20qKCxb91U1jtx%2B7vJjlyDA1nmJQ%2FfU877v8%2B1FajLNQxTuyj%2BmEW%2BA%2BsvlK4ivlAWxMZh0buWMNAtDUBEkORsHBtC9JKE4KGNSfoBm4oeTEUf0poFguKrEUbBQ3JlV5HRkV5LB8eeQnC6GItmuwp0vyP6D%2BNk9peXwtQBKjf3R0GWJQ0mn0HPOOgf5GqASIhaQUXMkVMwXamiwnpY1Ue7aVkTEoVbM2P5RQbfvZ1l68UiJhUg4LRpHRXJpWzQSO51ZWaDFI8WRYvSbroVFk2i7D9%2FKJ6fDk0U2GSAKKJP2kPLfgjCKWod3qsX3yY788685oyygh6dHAEcvQRZSlGcY8ldgmO6sklQ5BKpw4KDKsD9TCHeprTEb3xZno1j5oZptLXFHU0%2Fj1UcJL2M%2BGlszLASLMJLYj74GOqUB5LlljqOGMNOx3MwhrcbaTe10pOHSt80P7QCdqYNayT1VonnITnTLT6XlSuQvwGM9CloBmfrcWsN18vkO2Qvga%2By8iULBr7Bz%2FxSKB5CJpTsEEJs21JaVFI62uI%2FlXMyz0OoJTWykI1vFDRP0fOuKchJR%2BBpJLDKlIFlswWT99VSjIhk0sL65GBQLvnYXddIDrEGuw%2BDlNM1cgufIXdBlBVu75osM&X-Amz-Signature=f6d885b56fdbb9bebec011eca6d3818a319e92a68948ee5077f08518da34e45e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVI2EXB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDR2U0phVOwWkEa%2BSHPIQPdJb2rY8spPW%2Bbl6lUW3FADAiEA3u2Br6rSs5qBCzW671EFkun29zAKg5hu23IHhxJ84f4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXljvxxrAbK3iaKIyrcAx5drCQBzI9wJhFTlkKiuSetDiai2y0Oo9UqbQI9qTzOli5obd37fQvJIyeKuN3w1gA1HiVmy2mPl%2BoqtzSmEnzQWUIJxNXDw3SopbT9%2FblE7E%2BCd7%2BMnpOfclhPBjZsolGg5i0nYDMnzijUYwUyWX%2BGK4Q3JMhhIvjRiP5RbXCXBFYZX6odcsg5qrk3cJKzIBPZHl83BlDq6amd4zTPF7kOkAEWZtH%2BD20qKCxb91U1jtx%2B7vJjlyDA1nmJQ%2FfU877v8%2B1FajLNQxTuyj%2BmEW%2BA%2BsvlK4ivlAWxMZh0buWMNAtDUBEkORsHBtC9JKE4KGNSfoBm4oeTEUf0poFguKrEUbBQ3JlV5HRkV5LB8eeQnC6GItmuwp0vyP6D%2BNk9peXwtQBKjf3R0GWJQ0mn0HPOOgf5GqASIhaQUXMkVMwXamiwnpY1Ue7aVkTEoVbM2P5RQbfvZ1l68UiJhUg4LRpHRXJpWzQSO51ZWaDFI8WRYvSbroVFk2i7D9%2FKJ6fDk0U2GSAKKJP2kPLfgjCKWod3qsX3yY788685oyygh6dHAEcvQRZSlGcY8ldgmO6sklQ5BKpw4KDKsD9TCHeprTEb3xZno1j5oZptLXFHU0%2Fj1UcJL2M%2BGlszLASLMJLYj74GOqUB5LlljqOGMNOx3MwhrcbaTe10pOHSt80P7QCdqYNayT1VonnITnTLT6XlSuQvwGM9CloBmfrcWsN18vkO2Qvga%2By8iULBr7Bz%2FxSKB5CJpTsEEJs21JaVFI62uI%2FlXMyz0OoJTWykI1vFDRP0fOuKchJR%2BBpJLDKlIFlswWT99VSjIhk0sL65GBQLvnYXddIDrEGuw%2BDlNM1cgufIXdBlBVu75osM&X-Amz-Signature=9e8fb33741674b8ab8b7b0f2f95db4db21aac0086f2d271e05a37e02a37656d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQOVPSG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYJK0udmshCuc77txVndwdTi%2FlWCsfRQ2SPmMbkXozzwIhAOMfUgRGcIayV0sHJJKqz63yZS7jJUo%2B8DY0SW2qbVItKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlL0%2BqUQ4BVZb%2FwsYq3AMaBLPEBXiSonpH2pSmwCKutASWTwHBUD%2BIqiPG0cTeST1%2BJSne%2FDaMJuPjLCEiEk8%2FZgoF95mVpiNAXLMUaOCLCfCxsx%2FBKTb3Qlj6ReNYMMy0HRxeJ6zRzIS4P54OaIZ5qy58OC40dIaJrObyEvVMUvz%2BMWb8tbSq2BpHNu984mDvRQ7aTvfUHRHqzZwmmZ7%2BYMTzMgB7vgOksVWhtT3%2F8jLnCJUVFh38mHmRASH%2ByThUIql%2BnyxWVIDiDHqA32%2F0TRjdve1uC8s6unj2H7a%2F5l1kYBP%2FN92pPrtRO%2B5ZZzmY14l8YnIlDO%2BLBsnreP7pJfDDpoZ84gjJOtrTFcJS8flNJapvKkCxBV6H0sQDLilkZmfKrCZ9KNdM%2BfcRitT4KupRt%2FxFyAt98aOntEH6c%2FkjEJxG%2BOAoOOH66SroPMl%2BFlzDFz6mZBIy8EcSnyGS7KsNRNkfguU7Oi2HSAsCsDsxYVJBsRP53Bqd8VMDkha4EkSJJtm%2BVAO%2F%2Fci%2BNIpWSGayVWzhDIriSejFYsk5omWgVU3FkMBfpzbsP6eWbmpkbQeT6L7%2FmfDf3E2363FLZVoVDhiob%2BPNxUUyIK7mawn3GmX8xY9A%2Fbh2KhCD9wFp3Hr%2BzX4eMkT%2FKzC%2F14%2B%2BBjqkAST22XnKOOZiHwERoiQlOPy4ry4U6ALIs0PCLb9GxO0xeffNjXCuvue6obuNsB%2BRe0jHwGxKiPgx7OfD96GzoOOj28QT%2F1ZTQGkFCZq%2FzMIae%2BMuJpnyMRhgtdLkIV017%2Br%2BfRkJds1w433q3HXUUPlM6LUmqq4VxWkn%2BO1rZqMjazut4AMnial6ALngXi0nCVZF9qb6IqY83KDNsb3y%2FYlH1UUJ&X-Amz-Signature=7f8b98173a98fa7b60eaef8162bde1a304e11379775663220de1aeb17648bb67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVZB5XX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBkUJkR9gfRpOnwFvnXx5JcVvPaHhrbtPBdvqgykdPwkAiBuHz6bRSP1Vi7ea4llEZ7xoed9lXaAgrUuLDD9O1Tg9iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2FkiNiXnSqAVtY%2FWKtwDHNkwK9RUXfAM31m2XGmFEMikzQwO07nxk9%2Bkuw0E290dVFpoM0TrQhgW9oM0Jv5CSfynL5YkWU1UbWzQfqa%2BPf1emgimVM2Y1Wq3EbIsHqw4PEQPXD8g7P7o%2BiL7%2B9TTKdeJIoXpctpeA%2FbFYGEN6SFv7%2BwDO0kio7Y3GKm9hAeLhaAVbOthFl3r0rQ5pK3eICxgGOmmdd4lBZXVdy2%2BmwysPOJIrrKxl0hRZu7iC5ZfP59FbzyoLHKOC%2FdauNaNNyRPhdgD4riBiSr5dqp6ONM%2FvdJqo%2FG%2BvSsg96A%2BQiLfztlrvaVbTLrp7g66F7BCKBkt5mdR1Yhv8hSGmYXUQxEQaIF5BncvkGI5RJ%2Bhj%2FSnqejkFITsJX6UwqxwnCsrhPaVBtu%2FZnkW2JegiFa5rHNmXxDMTNHqbj9VGwLszC6CEgIj8zNX0nDh%2BDbsD%2FluWvlehFrVdHBvYljTRcSaf8I2wkm%2B8S3yE4MEUrTjIPH6HSomUd1QaHIhgXGW0GM2iwmKBlRuuYOYQMizK4ReSwIJ7p%2F5omx6VmnqX7sR9EIhb88ZF3XF5dz3l9U9yY6ChFFXGf3HGhx6zdEUSCIGUD5%2BBvJaw4eT5hyV%2FKOe4cpVOrEJE7RfEWbVrOMw3dePvgY6pgHIwJ6BuhTapSphE4ynvTJu8fXKOI0V0DzaIfk41AwpiO8LtSdeRuC2N2OGqo7hnFtEAEmWA1gWjd9DkE%2BgKIvC0L0I0jCi48g2XsdcICAJdh0Cv9MAQpcl88F29GQJOU%2FZn4%2FiEgd97CoFwRJSFYMJYTsf%2F0JAFkqoa2jCgcf58cGLCtcMYmlPZnqFBxTtGsV0GcaIkhu%2F%2FRi5JhJ3HQhMhojLHdWw&X-Amz-Signature=999ec8cf1c327ea77f11ca2456090ac10d1876f6a066f6df8892421a6a566163&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVI2EXB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDR2U0phVOwWkEa%2BSHPIQPdJb2rY8spPW%2Bbl6lUW3FADAiEA3u2Br6rSs5qBCzW671EFkun29zAKg5hu23IHhxJ84f4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXljvxxrAbK3iaKIyrcAx5drCQBzI9wJhFTlkKiuSetDiai2y0Oo9UqbQI9qTzOli5obd37fQvJIyeKuN3w1gA1HiVmy2mPl%2BoqtzSmEnzQWUIJxNXDw3SopbT9%2FblE7E%2BCd7%2BMnpOfclhPBjZsolGg5i0nYDMnzijUYwUyWX%2BGK4Q3JMhhIvjRiP5RbXCXBFYZX6odcsg5qrk3cJKzIBPZHl83BlDq6amd4zTPF7kOkAEWZtH%2BD20qKCxb91U1jtx%2B7vJjlyDA1nmJQ%2FfU877v8%2B1FajLNQxTuyj%2BmEW%2BA%2BsvlK4ivlAWxMZh0buWMNAtDUBEkORsHBtC9JKE4KGNSfoBm4oeTEUf0poFguKrEUbBQ3JlV5HRkV5LB8eeQnC6GItmuwp0vyP6D%2BNk9peXwtQBKjf3R0GWJQ0mn0HPOOgf5GqASIhaQUXMkVMwXamiwnpY1Ue7aVkTEoVbM2P5RQbfvZ1l68UiJhUg4LRpHRXJpWzQSO51ZWaDFI8WRYvSbroVFk2i7D9%2FKJ6fDk0U2GSAKKJP2kPLfgjCKWod3qsX3yY788685oyygh6dHAEcvQRZSlGcY8ldgmO6sklQ5BKpw4KDKsD9TCHeprTEb3xZno1j5oZptLXFHU0%2Fj1UcJL2M%2BGlszLASLMJLYj74GOqUB5LlljqOGMNOx3MwhrcbaTe10pOHSt80P7QCdqYNayT1VonnITnTLT6XlSuQvwGM9CloBmfrcWsN18vkO2Qvga%2By8iULBr7Bz%2FxSKB5CJpTsEEJs21JaVFI62uI%2FlXMyz0OoJTWykI1vFDRP0fOuKchJR%2BBpJLDKlIFlswWT99VSjIhk0sL65GBQLvnYXddIDrEGuw%2BDlNM1cgufIXdBlBVu75osM&X-Amz-Signature=e8fab88ca62a520c771f380a4e8602541b048649020e3ffb895d565b0f4f39a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
