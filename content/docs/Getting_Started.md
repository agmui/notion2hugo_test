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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANV7FIU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSWGn1ywEUnZ1sYVu3yiny3VBERQegNm%2BO5q4tOudWAIhAMVq003%2FvaygnSy2qwSbZVnwXL0nXdz1Vn5pIG6ApjLgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlJ1kUE%2F9FSqlILkq3AM9w1eqW08sqzepWOAPjyhMKKvPOhYIhJjec2xJfHcVFyYr%2Fl0gk8cBUrx9lBS6RGIVQXWhV9xBsz8546Euf4Gv7UD0ijiWMobKwr12BS0DkFr2HM%2Btzbk5Y4lXJhucA0nrSdk4VMx%2FTos0nbgXl3PA3AKSy1Za7RQoH1hvbPVc%2FJcQhy%2BzY1FSz%2BRK4E9mWj4VD4o7%2BEoCYD5y57PVfhtoaHUY3vGwqqIpRDDvKNQheef4EZUfCXlec%2FHsC420lzmGPiqtEgVIVIv7u8Zh0YcUfs0iFV9x4Yrb6jAa0J6bEBhjwTUdUOGH4uWBIXh%2F4ZAbK9iuYeyS4jX1uROkCMBjmbdMpQpnGjxXoxOVer4ZW9sMRYpIwKIUsV2re3ciKMT1I%2BTDRGGj7GBRtO19TaN3cmkbrZ8xAQqNRVhDOWE1vSqcjCqO6OWQ9sZYQmHGJVFvMSIKBseVliBLWIwhV3KAjpg45WHfbjyctet%2BuwUTjSzg6Zbnlf5TDDRimbHMn0a3k4UlTlT4CJBPsU3tJQ8Nz4DFPesA9dPyeYohdLZwURGwnQmysaxiaO7S7wdGpnIOdyIxx9ZYlYc1jLhytFGsBq4%2BZyD8R66E4Y0IABRYtsTHIDuuLyLkrZ96OzDD5u3DBjqkAXdqLZtktc%2Fp7LtptlJlGjSgRqMcR0VcumBMLYkISLIQDLPP24aSOpyHDZ6EDjbfyvu0QVFQP6%2FHBFKMKRbBGPeIH4FRR3VhCzTux6kfu5RgobNipIVkoWSHOU48GjrC1RBnCeQocZSot4NNGxrNS6vzH8PfjTaTV9ZI2lefTQc02XuN9UfkzfpW88JYLy0u71M1JGrX2LnttgEbRhjTrgsIM4ZB&X-Amz-Signature=97bfadeca71edf14c632850e697701d771e1f4bf2a18329d2bc0322a71993b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANV7FIU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSWGn1ywEUnZ1sYVu3yiny3VBERQegNm%2BO5q4tOudWAIhAMVq003%2FvaygnSy2qwSbZVnwXL0nXdz1Vn5pIG6ApjLgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlJ1kUE%2F9FSqlILkq3AM9w1eqW08sqzepWOAPjyhMKKvPOhYIhJjec2xJfHcVFyYr%2Fl0gk8cBUrx9lBS6RGIVQXWhV9xBsz8546Euf4Gv7UD0ijiWMobKwr12BS0DkFr2HM%2Btzbk5Y4lXJhucA0nrSdk4VMx%2FTos0nbgXl3PA3AKSy1Za7RQoH1hvbPVc%2FJcQhy%2BzY1FSz%2BRK4E9mWj4VD4o7%2BEoCYD5y57PVfhtoaHUY3vGwqqIpRDDvKNQheef4EZUfCXlec%2FHsC420lzmGPiqtEgVIVIv7u8Zh0YcUfs0iFV9x4Yrb6jAa0J6bEBhjwTUdUOGH4uWBIXh%2F4ZAbK9iuYeyS4jX1uROkCMBjmbdMpQpnGjxXoxOVer4ZW9sMRYpIwKIUsV2re3ciKMT1I%2BTDRGGj7GBRtO19TaN3cmkbrZ8xAQqNRVhDOWE1vSqcjCqO6OWQ9sZYQmHGJVFvMSIKBseVliBLWIwhV3KAjpg45WHfbjyctet%2BuwUTjSzg6Zbnlf5TDDRimbHMn0a3k4UlTlT4CJBPsU3tJQ8Nz4DFPesA9dPyeYohdLZwURGwnQmysaxiaO7S7wdGpnIOdyIxx9ZYlYc1jLhytFGsBq4%2BZyD8R66E4Y0IABRYtsTHIDuuLyLkrZ96OzDD5u3DBjqkAXdqLZtktc%2Fp7LtptlJlGjSgRqMcR0VcumBMLYkISLIQDLPP24aSOpyHDZ6EDjbfyvu0QVFQP6%2FHBFKMKRbBGPeIH4FRR3VhCzTux6kfu5RgobNipIVkoWSHOU48GjrC1RBnCeQocZSot4NNGxrNS6vzH8PfjTaTV9ZI2lefTQc02XuN9UfkzfpW88JYLy0u71M1JGrX2LnttgEbRhjTrgsIM4ZB&X-Amz-Signature=1e482e70fdf94dd4bda98eff02271972879017243ee13403e75c7762094d1553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANV7FIU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSWGn1ywEUnZ1sYVu3yiny3VBERQegNm%2BO5q4tOudWAIhAMVq003%2FvaygnSy2qwSbZVnwXL0nXdz1Vn5pIG6ApjLgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlJ1kUE%2F9FSqlILkq3AM9w1eqW08sqzepWOAPjyhMKKvPOhYIhJjec2xJfHcVFyYr%2Fl0gk8cBUrx9lBS6RGIVQXWhV9xBsz8546Euf4Gv7UD0ijiWMobKwr12BS0DkFr2HM%2Btzbk5Y4lXJhucA0nrSdk4VMx%2FTos0nbgXl3PA3AKSy1Za7RQoH1hvbPVc%2FJcQhy%2BzY1FSz%2BRK4E9mWj4VD4o7%2BEoCYD5y57PVfhtoaHUY3vGwqqIpRDDvKNQheef4EZUfCXlec%2FHsC420lzmGPiqtEgVIVIv7u8Zh0YcUfs0iFV9x4Yrb6jAa0J6bEBhjwTUdUOGH4uWBIXh%2F4ZAbK9iuYeyS4jX1uROkCMBjmbdMpQpnGjxXoxOVer4ZW9sMRYpIwKIUsV2re3ciKMT1I%2BTDRGGj7GBRtO19TaN3cmkbrZ8xAQqNRVhDOWE1vSqcjCqO6OWQ9sZYQmHGJVFvMSIKBseVliBLWIwhV3KAjpg45WHfbjyctet%2BuwUTjSzg6Zbnlf5TDDRimbHMn0a3k4UlTlT4CJBPsU3tJQ8Nz4DFPesA9dPyeYohdLZwURGwnQmysaxiaO7S7wdGpnIOdyIxx9ZYlYc1jLhytFGsBq4%2BZyD8R66E4Y0IABRYtsTHIDuuLyLkrZ96OzDD5u3DBjqkAXdqLZtktc%2Fp7LtptlJlGjSgRqMcR0VcumBMLYkISLIQDLPP24aSOpyHDZ6EDjbfyvu0QVFQP6%2FHBFKMKRbBGPeIH4FRR3VhCzTux6kfu5RgobNipIVkoWSHOU48GjrC1RBnCeQocZSot4NNGxrNS6vzH8PfjTaTV9ZI2lefTQc02XuN9UfkzfpW88JYLy0u71M1JGrX2LnttgEbRhjTrgsIM4ZB&X-Amz-Signature=96db177d31d7429d4064320a26dc5f7afd69ff0ee2c90c9620ef49364071a0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3XMKJQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlOMRYo6ESVLaEsnnlXx94hOxG7pzeKnlrNSMKFwX%2FWAIgZaLkgIIPhrO10gGknAHAqpM%2BJ3Flu2Dyrd2%2BkL7%2FRsgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BVEKkwIiKwueoPIyrcA%2BsZWP6g6jqC0LzUouppPbF5EIXpdiR5Ct2WH524bimGLblq3JgdVvckl4T6UhtaeL2%2BRzn85%2B90ze1YWsVA9VaZz4sfjW%2BWYl%2Fqv4ZOq8%2BB6zbMw1l%2FB98sGOV0HndRdNSun1V0jzE0pyfsO12qKCSBb1X%2Bw5Ag0TWbDHR7Mg4izJHgOBU26eTlCMl0MPTkGVW65LHnTwyEqnaeF8KBzoMq0K4MYgAfXe6OZ2FARU6ev79jeFH7WfAu31Nbcchnkn1GJWowFK5j5IHvfCnqtsxKFPc4aRiJVRhvfRoLWO3XckPV2iQzYuRPI5clXQQ%2FW4ckUl8xgfvD6Fq2qt7Wcm1%2Bz7y1Qw4RQBjNMZV5aD8TL3cODtKQPZwMJnyvhmpFqSn6qv4KVjGtlJhBI1wrWY6Av1exUvVq43%2BgbP64te9F3W55GQC6LzFSJ614PQTBj6zfl5Sb2KcWyFb%2BXwu7FWWvBtl5vBqlzvNI9cZPx6lDvH4Mt2CS8NOgfcTLAso4zFMJJfVG8aq3qfQ9aa5ePZ8aSVKl%2BquRGh0XLZOAaXKZuQNdbQ9nn829b3%2B970NhtucnbbkN%2BeeGmh5g%2BRmUeB8K0oa0Zk1lU4I4y9YwXSDwj9n7A4w53nG4rLSlMJfo7cMGOqUBTONGduZ993vv2xVRJGOyVDNlwS4BKdRcSMiX9Y3v4%2Bk1Z9DFwdP38RDiXGhAjGB7j%2Bthf5LE2GzI%2F7T76qKDz%2FqDb8nTPVccgFU3zij%2F%2F2QUu%2FJ22FMJ1Nk9rEEgJ9nTFa83W%2BOhdQNXEBjVOYRZBKA1vNupFab%2BpPN51aiTJxQGS2iuY8aRwGWjSU%2BtOjWMQgoyBACFXAjGZI3Hht32d8%2F3mywj&X-Amz-Signature=8e751385585190cf7ad40c0ab99be47f3a4ab0bb8bcdf4db619377285b60d48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD7JUPO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXgwvu0PiHathgTL8lqnRY%2FyEmL7ARbBaYoTJQ%2BwgzzQIhAKP9uIrcR23%2BH5pF6MZpQiXK0Fh%2FaXgTo3n6bLyDiThKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK73S9G%2FZzXmyStWoq3AOtc0jshVHl3cM3O1Hdv3uLESmEGi5Dol69RLtDOfGoVEHW%2Fwd1DN332HoY8Bx28cb9mjz75TkMtP0BrDfQduP%2FbwfidPn8Uko7xHoTDIdOX3ti0nCnhW2DL1sj5FGWfkmp8ooG7n7FMDv2VVQ9UDLYfXWxkhwCX31cVhdjv%2BjOCpjrAHRnMb%2Bf66u5xD0aoPcyQb2YzuDGg60obsrflNmHLIZo%2BjseXcpJdLIjg4CbhSG5XfxeU%2BMZgEXMpCnZYA6fJzYjCVlMFp%2FtBF%2FRaTWWQeYXNddaVKdoUZWYCbPpn0%2Fe9us7Xr1xlyxEv%2Bbc2g74h5ea4V%2BwCLxsf0wKf0QsNSXKht7hi8O5OVT1cN%2Fe7mYCs0QklCo8LxbyE34uDfLNFdZPPrPiGl1KE%2BIxbQYEemSmTg279mLRirHNAZUBVfFYSpIuhu6LNwaIW4Yw%2FJWt31aKFc8VDcEUPAb2w4aoG6RDZt1JQXKren7zOsSdJjWdZMNbJSOrpy9jCNbG%2F%2BmbSm%2BL%2FliNHTlc9V4uptIVQJ94ijDz8hct2vPosll5BU9D6FRBkk3a%2BndVuXY93a0WoHcl97548whjMSl%2FhjWKO0ADf5H2OnEj1%2FJIcKLj4Qfc9XdyQ6Iv8NKSojDk3%2B3DBjqkAU%2FyghlPDSzht04hYobneQ6uo4pD9wGcvpXX5LO77RXcn39rj4H70cdAbx8Fps825%2Bfe296btOFcLcpPZv7ACUViHjdnJ7kBWzdou6Lb9WcHm%2FtLZCyzB4EbQcGUef29tjFdbdGrxZRZ0A8nGkKVqKfRvBIeB8bWqSD%2BYYt71ULMVX1pYXHWnDMxtsA6K9U8pyn%2BjMcAVw710GNnNohRBSz3QBnn&X-Amz-Signature=b91601bb7397a22153c812b4d76b1057ccd43196471c9efded04636e6077fe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANV7FIU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSWGn1ywEUnZ1sYVu3yiny3VBERQegNm%2BO5q4tOudWAIhAMVq003%2FvaygnSy2qwSbZVnwXL0nXdz1Vn5pIG6ApjLgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlJ1kUE%2F9FSqlILkq3AM9w1eqW08sqzepWOAPjyhMKKvPOhYIhJjec2xJfHcVFyYr%2Fl0gk8cBUrx9lBS6RGIVQXWhV9xBsz8546Euf4Gv7UD0ijiWMobKwr12BS0DkFr2HM%2Btzbk5Y4lXJhucA0nrSdk4VMx%2FTos0nbgXl3PA3AKSy1Za7RQoH1hvbPVc%2FJcQhy%2BzY1FSz%2BRK4E9mWj4VD4o7%2BEoCYD5y57PVfhtoaHUY3vGwqqIpRDDvKNQheef4EZUfCXlec%2FHsC420lzmGPiqtEgVIVIv7u8Zh0YcUfs0iFV9x4Yrb6jAa0J6bEBhjwTUdUOGH4uWBIXh%2F4ZAbK9iuYeyS4jX1uROkCMBjmbdMpQpnGjxXoxOVer4ZW9sMRYpIwKIUsV2re3ciKMT1I%2BTDRGGj7GBRtO19TaN3cmkbrZ8xAQqNRVhDOWE1vSqcjCqO6OWQ9sZYQmHGJVFvMSIKBseVliBLWIwhV3KAjpg45WHfbjyctet%2BuwUTjSzg6Zbnlf5TDDRimbHMn0a3k4UlTlT4CJBPsU3tJQ8Nz4DFPesA9dPyeYohdLZwURGwnQmysaxiaO7S7wdGpnIOdyIxx9ZYlYc1jLhytFGsBq4%2BZyD8R66E4Y0IABRYtsTHIDuuLyLkrZ96OzDD5u3DBjqkAXdqLZtktc%2Fp7LtptlJlGjSgRqMcR0VcumBMLYkISLIQDLPP24aSOpyHDZ6EDjbfyvu0QVFQP6%2FHBFKMKRbBGPeIH4FRR3VhCzTux6kfu5RgobNipIVkoWSHOU48GjrC1RBnCeQocZSot4NNGxrNS6vzH8PfjTaTV9ZI2lefTQc02XuN9UfkzfpW88JYLy0u71M1JGrX2LnttgEbRhjTrgsIM4ZB&X-Amz-Signature=3b508177cd0049e22166050cf9c677ada0710fe31d28be0c37a54b5ab111631a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
