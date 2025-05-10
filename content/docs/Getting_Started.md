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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D73WTTB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi4z1YjXlq%2F7ybNB5tqW9b8E7Cy20T7Yx95efleiyDSAiAU5uDv41bEv0%2FgmFXe6OPGAo3FDm3txgkjZjc4%2FmswkCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmrWZ8KFg9JaALqMKtwDPadhgsvlH%2BlyB4dCgHcvvNrkgmqRkNmbU21m0J7bWOUCMHnQ9LDZ9%2BNlzeoKBjpSHN5b8URBnVz9TNkQOI2NzmvcKXVPguS5qFpM%2F7QUhGZYG04qt3wgyFkkaYBHNhgwlqj4xfbXpxdkpbx%2FxMIHb2phD%2B9jcQWNicyVsrpnXe0iVn6ULDQW7JnEnu6416hgZdtrM54Fq8X%2FwJ9UTVeDefXDQGKYogryL3xQNHLyJ3Hx7NNAGtUr30n1lJ6l3D%2F0XZrRTB44%2FQcwGnRsSDzgQinRAKwfZ55SHLj6kXGHySrAMQup6I1sDULAr8ela8neKSXvz6KvZBvFWw5rB38vzhoGXt8cC90sg%2F6P149VFLz5mVWecU4sWThM49SaD71UlpcDvoKMxAAbiXyn%2BGxrnOlvKaer2YWN83Q6wcJTK9w2ZneCQy6GdVYXlqfKRJ%2FFljEVNTWheb0fySJ77qjZApGBoFGGXSTp%2FHNy4lUu0A0GpCpYIS33%2FjeQNDnu3Hrm%2Ff5DWlb%2BxkRrCDyRnBb%2F56wZXkFtTztehs0BfCUk5a0sNms5MMxqw1cwi1sFFhpD2ip%2FqC8x0xXDyJ0lDzR8Cd%2FByWBtdbKILCFTYhUj7qx9C709PWNGiseMUHQwvY%2F8wAY6pgGQ78zMDgywVVq6RsRltzjxn0QrhX38qNHN9KXhsG%2F9jYMqLtDBUy7mM6pzDCbj%2F5B%2BokCqo9QqFUQtBwEaI30lzNJV56q1S4vz1bUi6RuQnxhBBAzHGNCqsQexER7qII45Ovvvj7D0GX%2BzmyIu%2Fm8669I7nB9dYhfp4D%2BGKpVsVjnuwOdarrggw0DP10eAl8H%2BcKRHflvBfbwtI5lVMBQ1sz9gDBSr&X-Amz-Signature=9a137b025b3552547c2fdc6587b1fd576fe2d429029d1566ab08cb90ca6342d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D73WTTB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi4z1YjXlq%2F7ybNB5tqW9b8E7Cy20T7Yx95efleiyDSAiAU5uDv41bEv0%2FgmFXe6OPGAo3FDm3txgkjZjc4%2FmswkCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmrWZ8KFg9JaALqMKtwDPadhgsvlH%2BlyB4dCgHcvvNrkgmqRkNmbU21m0J7bWOUCMHnQ9LDZ9%2BNlzeoKBjpSHN5b8URBnVz9TNkQOI2NzmvcKXVPguS5qFpM%2F7QUhGZYG04qt3wgyFkkaYBHNhgwlqj4xfbXpxdkpbx%2FxMIHb2phD%2B9jcQWNicyVsrpnXe0iVn6ULDQW7JnEnu6416hgZdtrM54Fq8X%2FwJ9UTVeDefXDQGKYogryL3xQNHLyJ3Hx7NNAGtUr30n1lJ6l3D%2F0XZrRTB44%2FQcwGnRsSDzgQinRAKwfZ55SHLj6kXGHySrAMQup6I1sDULAr8ela8neKSXvz6KvZBvFWw5rB38vzhoGXt8cC90sg%2F6P149VFLz5mVWecU4sWThM49SaD71UlpcDvoKMxAAbiXyn%2BGxrnOlvKaer2YWN83Q6wcJTK9w2ZneCQy6GdVYXlqfKRJ%2FFljEVNTWheb0fySJ77qjZApGBoFGGXSTp%2FHNy4lUu0A0GpCpYIS33%2FjeQNDnu3Hrm%2Ff5DWlb%2BxkRrCDyRnBb%2F56wZXkFtTztehs0BfCUk5a0sNms5MMxqw1cwi1sFFhpD2ip%2FqC8x0xXDyJ0lDzR8Cd%2FByWBtdbKILCFTYhUj7qx9C709PWNGiseMUHQwvY%2F8wAY6pgGQ78zMDgywVVq6RsRltzjxn0QrhX38qNHN9KXhsG%2F9jYMqLtDBUy7mM6pzDCbj%2F5B%2BokCqo9QqFUQtBwEaI30lzNJV56q1S4vz1bUi6RuQnxhBBAzHGNCqsQexER7qII45Ovvvj7D0GX%2BzmyIu%2Fm8669I7nB9dYhfp4D%2BGKpVsVjnuwOdarrggw0DP10eAl8H%2BcKRHflvBfbwtI5lVMBQ1sz9gDBSr&X-Amz-Signature=eb2a19ffe01f70de4efde4d5fe305ed321a710ce3fe73e0d662193b2e3362c96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D73WTTB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi4z1YjXlq%2F7ybNB5tqW9b8E7Cy20T7Yx95efleiyDSAiAU5uDv41bEv0%2FgmFXe6OPGAo3FDm3txgkjZjc4%2FmswkCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmrWZ8KFg9JaALqMKtwDPadhgsvlH%2BlyB4dCgHcvvNrkgmqRkNmbU21m0J7bWOUCMHnQ9LDZ9%2BNlzeoKBjpSHN5b8URBnVz9TNkQOI2NzmvcKXVPguS5qFpM%2F7QUhGZYG04qt3wgyFkkaYBHNhgwlqj4xfbXpxdkpbx%2FxMIHb2phD%2B9jcQWNicyVsrpnXe0iVn6ULDQW7JnEnu6416hgZdtrM54Fq8X%2FwJ9UTVeDefXDQGKYogryL3xQNHLyJ3Hx7NNAGtUr30n1lJ6l3D%2F0XZrRTB44%2FQcwGnRsSDzgQinRAKwfZ55SHLj6kXGHySrAMQup6I1sDULAr8ela8neKSXvz6KvZBvFWw5rB38vzhoGXt8cC90sg%2F6P149VFLz5mVWecU4sWThM49SaD71UlpcDvoKMxAAbiXyn%2BGxrnOlvKaer2YWN83Q6wcJTK9w2ZneCQy6GdVYXlqfKRJ%2FFljEVNTWheb0fySJ77qjZApGBoFGGXSTp%2FHNy4lUu0A0GpCpYIS33%2FjeQNDnu3Hrm%2Ff5DWlb%2BxkRrCDyRnBb%2F56wZXkFtTztehs0BfCUk5a0sNms5MMxqw1cwi1sFFhpD2ip%2FqC8x0xXDyJ0lDzR8Cd%2FByWBtdbKILCFTYhUj7qx9C709PWNGiseMUHQwvY%2F8wAY6pgGQ78zMDgywVVq6RsRltzjxn0QrhX38qNHN9KXhsG%2F9jYMqLtDBUy7mM6pzDCbj%2F5B%2BokCqo9QqFUQtBwEaI30lzNJV56q1S4vz1bUi6RuQnxhBBAzHGNCqsQexER7qII45Ovvvj7D0GX%2BzmyIu%2Fm8669I7nB9dYhfp4D%2BGKpVsVjnuwOdarrggw0DP10eAl8H%2BcKRHflvBfbwtI5lVMBQ1sz9gDBSr&X-Amz-Signature=590b58e41f900cd86945f96beaf0a331616ace1e84c9d805b11716d4af9c398f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCYOO4I%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu%2BhwWLH8O2WJefKfhY1ZrkIf0hRnVayExrfoRP43o0AiBzvfpAm%2FuTB2dVLIBi8IGeVSalW4MRoLFjzYrw1sPR%2FyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUX2EjI4TgfWjelxpKtwD5M31D6R5oSEoN%2BklNeAZwLPbeFAGsmfdihRzhmDQ874YbBKuXoGl8VsVgwHAcdQcRLQMLJMonsKdiZ3Q5c9bKHIr5gzXE6Qik4Cc5yOlC%2FvxzKsCzE2QCg3gUFsSqlgNI9MzTPKs6RVdmHy9iiQy%2FgU02ULXcMa%2F3exkO0dKZN3BsXkpJNROiTETI93xv%2BN1Vm8doujyjjpb%2BEqEWNzqixSaNqN%2B2hF%2BBDfOtH7EbNW8bLylu3V3699xO%2BCFgquPPLI5xedD5GtdvZt9dTGTepOeMxP3C1rjCy8HCsmgwIhRjs%2B%2BPJBHvkMqvnDRLUqtI7QwLaBiUxlMijUzCxQKJcadIQ%2FH5e4gLzggmiQaraZArQG37HP%2BvqWBEPyqxal73LbG9HrLx9Hza8feZXCQAQG2R8rGNBxOfmVcEcTXEwvJSR7v5sjrTrU9MlFVb%2BbFsADap9VEY4ImD%2FWQMpmC4qtEWTOTjbT9HlSQZygZsE428SnK5xLKZL1TVdchroTMoUo88EPsjVp%2ByK3UHeaHKaJMOQzXBZo6mR%2FGJSPEZ28Q71BiEBXVAehfdzMU%2BHzwpfTk6Qgla7MGFBJNeXRceGH7uyH3ZYtM08JhL4acnCTxQxpgHIe5FlSIobUwwY%2F8wAY6pgEFKLkzq8SI5%2BA3rcAIbv7AJN%2F63%2FQLTNR3ddfSdkS361kB1PaYNgxrWWZYiyIYr7n2%2B7NQHL6RKhO4JBGC8Ka8iGOJcpWGgQL6Fm8Kd9%2BRXEZfXuwdOCwIIbE8lMWtKZB2jZuyfuX0e7e3jSGYJ98v53qrF71jsvtOrGPWLqVy3u2PdSpf2eKPUIFPV53IiwtVHPfcSyJRN3LE6Wu3mOWgIUnYbGoz&X-Amz-Signature=9892e493b9445930a8ef7cfd2c45f8e0620cb624ecd4ce091a23bf7abf047a00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7JTCP5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7c0kM2jG6ZbcOJXFV2HYKjlNsVD0kkok%2FZXfcfSeMJwIhALYTazWIsAyoQBl2TaVXu8zaHdiOmd0uzl%2BVcvnLj2%2B5KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx43Pv%2BMo7AnS4qu0Qq3AM7AfTNk8juwMnf2msFeSrIvnZqGGqWb9kVsxeU1x8GntMH4l2dMFSH%2BIi%2BGDvXVm6pCys7%2F6x5TJxPE37K9tPshX538NsZRpvQi5Ca%2FmBVURrdBvM%2FA%2B3hMmPDisyyR3SBmJ4nMTB5BYZV6OPmE6tVShbQnRGjiidy3xHiQ1crP220bV9ngvn9hs3fL8gE9H9VKONG%2FwVA66jpqRyNeZZZS9%2F4VVD4jt5dW5hmZM9EcSggQIrzC2ZyL8PLwvQL2fkPQlG5NI0litJ%2FVFSYfVi%2FrQCMv2aq4Y5wdBdUn6FfOWL1OhN%2BsFP1YntEIu1VDrnACl1i3tBbaY8Mf8Gr6vNnSzfzXngB0YLB75cjJ9rU%2B6d6yqUZCaSNclV9mYXdJyyD%2FxoIdrB8JOT20GpDD1QQvWQ6lRg1070dhjWY1O9hZYEx%2FAY1xyCkzHUMdTK1hop4MP7mCjGLcRYvPmi0p2%2FNWp5wo%2B2ZulIU5BQ3IWTHm2RU%2BHfOgHEw5yvikKMl46vjNseeDKCcJ07XHqPHB10bhApeV9T3FJdG3Ax4EOV1BJP9l9FOvHMkoJvTDRKhAl%2Bkqf6JE1ijl7ycFDHjKf5KaA0o53v4uSEcWaPzgcr2XqThzkjBcDBdEMNO%2FTDkj%2FzABjqkAWous4LW9qnqRPmF4ex%2F0jj0XXqPglVeFopD0MM4BVj2rJ%2BEtUPrTrpJ9n%2Bmc2fZlEL9wIf4ET7dyCzoukjfIRQl3bMrJRIR2VsUtIHldjgIA3ve7Ep9dzxt9J8kd%2FDI8Ga32UBhfMa2Hf9ddT5%2FcjC1QZlbXKS2dpT0aEVUT8pdRpT35Xy%2B3v%2Bu41gTXVoNPxLsYDZb9x9itx%2FaRkODLbZQWwCt&X-Amz-Signature=c7bef19550a8f03f5f3036e8675ba44e2558630408acd849012b90ac6fc689bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D73WTTB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi4z1YjXlq%2F7ybNB5tqW9b8E7Cy20T7Yx95efleiyDSAiAU5uDv41bEv0%2FgmFXe6OPGAo3FDm3txgkjZjc4%2FmswkCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmrWZ8KFg9JaALqMKtwDPadhgsvlH%2BlyB4dCgHcvvNrkgmqRkNmbU21m0J7bWOUCMHnQ9LDZ9%2BNlzeoKBjpSHN5b8URBnVz9TNkQOI2NzmvcKXVPguS5qFpM%2F7QUhGZYG04qt3wgyFkkaYBHNhgwlqj4xfbXpxdkpbx%2FxMIHb2phD%2B9jcQWNicyVsrpnXe0iVn6ULDQW7JnEnu6416hgZdtrM54Fq8X%2FwJ9UTVeDefXDQGKYogryL3xQNHLyJ3Hx7NNAGtUr30n1lJ6l3D%2F0XZrRTB44%2FQcwGnRsSDzgQinRAKwfZ55SHLj6kXGHySrAMQup6I1sDULAr8ela8neKSXvz6KvZBvFWw5rB38vzhoGXt8cC90sg%2F6P149VFLz5mVWecU4sWThM49SaD71UlpcDvoKMxAAbiXyn%2BGxrnOlvKaer2YWN83Q6wcJTK9w2ZneCQy6GdVYXlqfKRJ%2FFljEVNTWheb0fySJ77qjZApGBoFGGXSTp%2FHNy4lUu0A0GpCpYIS33%2FjeQNDnu3Hrm%2Ff5DWlb%2BxkRrCDyRnBb%2F56wZXkFtTztehs0BfCUk5a0sNms5MMxqw1cwi1sFFhpD2ip%2FqC8x0xXDyJ0lDzR8Cd%2FByWBtdbKILCFTYhUj7qx9C709PWNGiseMUHQwvY%2F8wAY6pgGQ78zMDgywVVq6RsRltzjxn0QrhX38qNHN9KXhsG%2F9jYMqLtDBUy7mM6pzDCbj%2F5B%2BokCqo9QqFUQtBwEaI30lzNJV56q1S4vz1bUi6RuQnxhBBAzHGNCqsQexER7qII45Ovvvj7D0GX%2BzmyIu%2Fm8669I7nB9dYhfp4D%2BGKpVsVjnuwOdarrggw0DP10eAl8H%2BcKRHflvBfbwtI5lVMBQ1sz9gDBSr&X-Amz-Signature=49e1efe3f6b3e76491416f4e2177955c4e3d1b87fcc16cce28066876184f510b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
