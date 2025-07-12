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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOF542K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElVIT8DqAZUd6UY0C0avW3g1IlBRkCk1yKiuIjjSLXSAiEAqrsqw3mgY7Ie0bPHde457ovyJSmrZeHyJ210LpGqpw8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBx96PYB%2BvqpL46gTyrcA2T6qrdEks6A540X7M76RwkssSBAhIlRzX%2F2BWvgFtId4VDhv74BhjOAu2XpFs3ZC4uiwMIWSdPNKpTwZwYw1byl5WNjiOMK5%2BMjaqSlb4T6St5RuwzfQE809VtEWjGijysdJbyMxzTnCxtUSqFLZuW4wbktd8qHm3sm28Xe9OpYxNfReh0%2FD4rzCB7MdrtV7mHXwWDVe3ZBMJAf5SRoCRwJOT5PZkzzHtn%2FGARR2CcUxcq6RaTQGVyrRWceY7N5PLc6BT8gcdpUyO7QemKGSExk1i4CCd51aEtVoJnOFzGgXh3JPmZMBXbVtLXH947nwRY5TWAa3nKFIzeTiCQX2gigfHWvasiIZGGWsgLeXBZ2NTJioUxvLay9QYJLLLFG475AJPuoJpONZ72powK3A5MX9m4TbA1xOkIeVJj%2Fo67ypUKCRKLeFRD3tgbVqrQgtpj5U%2F%2B2gD4y%2Fo%2Fi4a7tHIvaIE17i91pZA0W9iiGUrQY4Iwv1rbUHmxGz2DgTqL357FnO%2B5RSpneQRwPuAaybHNx81pTWnpeH2lM3il%2Fi8niM6Iw19n5Nmnvw1CNi%2BufhxSMd357616H47KQWAwigiazhH9tlpNGjnjvtaqlNuOsAz%2Fz%2BGLQTjUPKH4vMNv8yMMGOqUBTDs%2BcnLRSwJklfH6XWIDKOdpgpGssZ0oj5Mkp2BKoGs5lFO35NscMTU4y3MI%2BKiD3dNyhMF395OZ5mRgWXSIo9Qn2nVJsLKDy0cUpbAgfi319QcjtR%2FNpZq0uzGkqhcnYqOTYHH%2BdSnO1uu1KsRxAM6c05nIkBhdooQSpet6N%2Bz%2B4EJN2KxWKY17DLZELHj0X2e%2FiU4%2BhIQVAGcd4LjAsMVwPwo7&X-Amz-Signature=68e5d55ea79e40f29f7496327bc70d30f7eac21ac4bc1edcb6752d6cc616bbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOF542K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElVIT8DqAZUd6UY0C0avW3g1IlBRkCk1yKiuIjjSLXSAiEAqrsqw3mgY7Ie0bPHde457ovyJSmrZeHyJ210LpGqpw8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBx96PYB%2BvqpL46gTyrcA2T6qrdEks6A540X7M76RwkssSBAhIlRzX%2F2BWvgFtId4VDhv74BhjOAu2XpFs3ZC4uiwMIWSdPNKpTwZwYw1byl5WNjiOMK5%2BMjaqSlb4T6St5RuwzfQE809VtEWjGijysdJbyMxzTnCxtUSqFLZuW4wbktd8qHm3sm28Xe9OpYxNfReh0%2FD4rzCB7MdrtV7mHXwWDVe3ZBMJAf5SRoCRwJOT5PZkzzHtn%2FGARR2CcUxcq6RaTQGVyrRWceY7N5PLc6BT8gcdpUyO7QemKGSExk1i4CCd51aEtVoJnOFzGgXh3JPmZMBXbVtLXH947nwRY5TWAa3nKFIzeTiCQX2gigfHWvasiIZGGWsgLeXBZ2NTJioUxvLay9QYJLLLFG475AJPuoJpONZ72powK3A5MX9m4TbA1xOkIeVJj%2Fo67ypUKCRKLeFRD3tgbVqrQgtpj5U%2F%2B2gD4y%2Fo%2Fi4a7tHIvaIE17i91pZA0W9iiGUrQY4Iwv1rbUHmxGz2DgTqL357FnO%2B5RSpneQRwPuAaybHNx81pTWnpeH2lM3il%2Fi8niM6Iw19n5Nmnvw1CNi%2BufhxSMd357616H47KQWAwigiazhH9tlpNGjnjvtaqlNuOsAz%2Fz%2BGLQTjUPKH4vMNv8yMMGOqUBTDs%2BcnLRSwJklfH6XWIDKOdpgpGssZ0oj5Mkp2BKoGs5lFO35NscMTU4y3MI%2BKiD3dNyhMF395OZ5mRgWXSIo9Qn2nVJsLKDy0cUpbAgfi319QcjtR%2FNpZq0uzGkqhcnYqOTYHH%2BdSnO1uu1KsRxAM6c05nIkBhdooQSpet6N%2Bz%2B4EJN2KxWKY17DLZELHj0X2e%2FiU4%2BhIQVAGcd4LjAsMVwPwo7&X-Amz-Signature=4d96cd74cf7a9b0d666c52ee92f36d13b39eef1ade512a73d42c866ea779ed0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOF542K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElVIT8DqAZUd6UY0C0avW3g1IlBRkCk1yKiuIjjSLXSAiEAqrsqw3mgY7Ie0bPHde457ovyJSmrZeHyJ210LpGqpw8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBx96PYB%2BvqpL46gTyrcA2T6qrdEks6A540X7M76RwkssSBAhIlRzX%2F2BWvgFtId4VDhv74BhjOAu2XpFs3ZC4uiwMIWSdPNKpTwZwYw1byl5WNjiOMK5%2BMjaqSlb4T6St5RuwzfQE809VtEWjGijysdJbyMxzTnCxtUSqFLZuW4wbktd8qHm3sm28Xe9OpYxNfReh0%2FD4rzCB7MdrtV7mHXwWDVe3ZBMJAf5SRoCRwJOT5PZkzzHtn%2FGARR2CcUxcq6RaTQGVyrRWceY7N5PLc6BT8gcdpUyO7QemKGSExk1i4CCd51aEtVoJnOFzGgXh3JPmZMBXbVtLXH947nwRY5TWAa3nKFIzeTiCQX2gigfHWvasiIZGGWsgLeXBZ2NTJioUxvLay9QYJLLLFG475AJPuoJpONZ72powK3A5MX9m4TbA1xOkIeVJj%2Fo67ypUKCRKLeFRD3tgbVqrQgtpj5U%2F%2B2gD4y%2Fo%2Fi4a7tHIvaIE17i91pZA0W9iiGUrQY4Iwv1rbUHmxGz2DgTqL357FnO%2B5RSpneQRwPuAaybHNx81pTWnpeH2lM3il%2Fi8niM6Iw19n5Nmnvw1CNi%2BufhxSMd357616H47KQWAwigiazhH9tlpNGjnjvtaqlNuOsAz%2Fz%2BGLQTjUPKH4vMNv8yMMGOqUBTDs%2BcnLRSwJklfH6XWIDKOdpgpGssZ0oj5Mkp2BKoGs5lFO35NscMTU4y3MI%2BKiD3dNyhMF395OZ5mRgWXSIo9Qn2nVJsLKDy0cUpbAgfi319QcjtR%2FNpZq0uzGkqhcnYqOTYHH%2BdSnO1uu1KsRxAM6c05nIkBhdooQSpet6N%2Bz%2B4EJN2KxWKY17DLZELHj0X2e%2FiU4%2BhIQVAGcd4LjAsMVwPwo7&X-Amz-Signature=9ad61cd823fbf3a819c844ca3259158ae6964b1bf68739d3d24909d04682bb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YXMRNY3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjseB9aiHYm38rCXoixkgxBALdxAxRUpBxA4CGQeOEPAiEAg%2FOkpXrFAHe3ykZlsgHVo4r7Bv50AzQj5hrH1K6OqogqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1yQBjLJaoPCxLuSyrcA6v%2F6KaAAIHaktFJDFiKXpY4EbPOJksSGZejXW6LlyXBp8svJP9KioGhwqN4jo%2BU%2BtPjs9lDb1jY%2FWjNDfzUS3RKOR%2Bhkk%2F5McWDgs7ezgWAjQPcgAj4%2B8CScvryRIKxYW82yljBqm5kCNCa8cm%2Bh16GEPRVQ5IqMbfv6yPwWbBNEJ%2FoKgRcysdWuHXwJDfL3BdxfBPT%2BYdiaS1fgHgQQo1ptmxbr0iLNunlMd4M4v9NYVUU2Oy9vtgSvDEKAIIOXdYYLG9xcbgne1ZvrJfFfW9r9a%2FhEhS7aB1d%2FiQbJwrPd9a6pa%2Bc7ZxTmjxJ1Gm1O3JLDfIFAtV76bwjVYF18ZRno8fQy93UXRUUbohvs%2FMElqvGp12vXw301JbtkybybG%2FInmN2v8mo8nbfNoL86S8Vqj3ua92rXXnQJ5Hq07VfL9KHHhEbBiZK8RqBVo3GWH7PmCQ6e582sqFWV2fiyyj9vz3YVQcTop%2BvWgFIN4zNEcnhNupg2miZhnXmiT2j9nQsRrR1Hn41rhbPaN7%2FznH0RJl765TmrjhPrZYFop7rcIjzY7gGCdrVU%2FL5v5RPlGBxpZmF3USxmoD1YcNLlsQnIKJjS0%2BlwDbDYcCwaf6WONevPAQwglYxt7U7MMj8yMMGOqUBP41SKZFe4Bibc8ZSvVK7jS9YnwTKEwEdL%2ByF7qskTlYI8Vjq4ojtCG3HDLmgn7kzPA2avUnpxdbrRQeN3ptavzPSsrlCbqYgSKvWU4iYDi2L%2BbhgCJO2JnWz8O5aOR01HDOd3%2BCc5CoHQqnb2n%2B8OtRvHfx6HMLI0RCVhv5hnUMWbzVrqOmtFVcbVMG1GmtWhwyxzHrffC621SB0W7XoGcOjV8mZ&X-Amz-Signature=aecfbb428d8c9b3dc5db8a103a98b0595e770ff2bfda07f8021eaaa09e61b8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLLZLU3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBku825bQQz7yox5c2tzTDr72T6p68GLqVKeYOt5XwtAiB60xZpMWomJ1gxwiFzmsVZcyNDldor7JTboh%2BF84E7zCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt3l7qYgBrrxNwi%2BKtwDaUy2G5s%2BlGvwK%2FeVoJari%2FREVXhKdsWVaeY87YOwz3nD22KMOK9v%2BoxeQmYcINzB8hEpdhI%2BEx%2FUGXfeAnq3QpcnSnFrdipiz%2FIYddbnUB4H4stq7XKg%2Ft%2Fdgz%2BJImxG0r14FxNd%2BjN%2FblXKuOClJ30jTsFV8XZiUt6qvCwuwAF3OLkQmtljI%2FuH9VAedo7Z%2F0xtBOXW3Qfs%2BssqmjIPPrPH6lQUKwxRy1UBZKe2QE6Nwq68%2F7yW23ADCokZtveVL3yC30kNZVyfuo3MkP2Va6MIi5J5V122ejreDbUAip%2Fe8DFbUiwMLOUAZ9SqlIEjc3pWUUGNO%2FEthkCXnloLwk6zsOVtvpNnIxd42aYpCcapo4wBx733K%2Fn%2FbyLkugYdsF47o%2B6Yy7jQxF5MaNBxoCwYgvjBKgBmawIFuiprc7bq%2FCFj27uUqYlUvM8ECHE80YcgJ6gVLQ9fovIJ%2B9IeMrnQSYRE4C8o4cS%2BhMV3nWb%2FV1W7lPL6FHaac0Zkp2emjRYoWYTPWkpP7A%2F%2Bmde9gmZLglKP6KLNDu8%2F4HaQnjuJcEt%2FH3ffLwg8lHP3AcgtlZ45QCDr0%2B2H7GuHaTtw4FixAAsX1M56XdHN2PpZhzRJoAh%2FtlTQ322pT8sw8vzIwwY6pgHGul%2FLRHQS0rlW6a62Z8WEVmwLFtf5TJnpB4WfQTC2Tu0E02q8Pz3GMXbR2le89HESsWvfyIICLwCHXJekOqsG67AFWl4BGqJzqraOGZNdCjAZq9KPOFrjOHFZLGtftw8UnAC3KkbuoCfhkY97VJMWNU1oXh%2F%2BXDZTqW3gid3khhpYAP%2FIle7asDT5ZiBAe8demTYUlPDHotqWnSRTUiDq%2FcmN0vT7&X-Amz-Signature=2daba957c7b3f72f674d73b145f986577f4696e1f76c2386068355c8df0df6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOF542K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElVIT8DqAZUd6UY0C0avW3g1IlBRkCk1yKiuIjjSLXSAiEAqrsqw3mgY7Ie0bPHde457ovyJSmrZeHyJ210LpGqpw8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBx96PYB%2BvqpL46gTyrcA2T6qrdEks6A540X7M76RwkssSBAhIlRzX%2F2BWvgFtId4VDhv74BhjOAu2XpFs3ZC4uiwMIWSdPNKpTwZwYw1byl5WNjiOMK5%2BMjaqSlb4T6St5RuwzfQE809VtEWjGijysdJbyMxzTnCxtUSqFLZuW4wbktd8qHm3sm28Xe9OpYxNfReh0%2FD4rzCB7MdrtV7mHXwWDVe3ZBMJAf5SRoCRwJOT5PZkzzHtn%2FGARR2CcUxcq6RaTQGVyrRWceY7N5PLc6BT8gcdpUyO7QemKGSExk1i4CCd51aEtVoJnOFzGgXh3JPmZMBXbVtLXH947nwRY5TWAa3nKFIzeTiCQX2gigfHWvasiIZGGWsgLeXBZ2NTJioUxvLay9QYJLLLFG475AJPuoJpONZ72powK3A5MX9m4TbA1xOkIeVJj%2Fo67ypUKCRKLeFRD3tgbVqrQgtpj5U%2F%2B2gD4y%2Fo%2Fi4a7tHIvaIE17i91pZA0W9iiGUrQY4Iwv1rbUHmxGz2DgTqL357FnO%2B5RSpneQRwPuAaybHNx81pTWnpeH2lM3il%2Fi8niM6Iw19n5Nmnvw1CNi%2BufhxSMd357616H47KQWAwigiazhH9tlpNGjnjvtaqlNuOsAz%2Fz%2BGLQTjUPKH4vMNv8yMMGOqUBTDs%2BcnLRSwJklfH6XWIDKOdpgpGssZ0oj5Mkp2BKoGs5lFO35NscMTU4y3MI%2BKiD3dNyhMF395OZ5mRgWXSIo9Qn2nVJsLKDy0cUpbAgfi319QcjtR%2FNpZq0uzGkqhcnYqOTYHH%2BdSnO1uu1KsRxAM6c05nIkBhdooQSpet6N%2Bz%2B4EJN2KxWKY17DLZELHj0X2e%2FiU4%2BhIQVAGcd4LjAsMVwPwo7&X-Amz-Signature=726975ae9d7b36715058598fe9681e8054d0d1898d1abd839cd8d19e9a1691d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
