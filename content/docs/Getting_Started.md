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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZAXOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkViLgK7OhPp2v7dXEoEdqhZ989wOU8Za317KPV95AbAiAx6j2%2BXTiqG4Ji4AGzmsxfxoTr7RIyEF09Elp446OgZyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHIsaLfBTBDk9rQYMKtwDgsLCkUT2xtPTAelAM5GngHFimDwSdlWe95vm9Ogtbf6GzIt7TXRT%2BDcd1V%2FSka95hRaLQbcxfG6bNIJE7j0f5ym4fnkn8sZIUE0dBQju8Izicq%2BpscGwijlZNwhqgOmZAY5lqiHcEMGaMVj7U9mD5M6H4kFf18EpnshFK8LjUa89i5NCqLX8oYCEtaURYzRpO9DyvseT03JymRnfJsobjdMNEl%2BIkOGkQvHSTm5OD47vwRlCu%2BsPcgT%2F2y9y8ba3%2Fwfb%2BzEyJKppbTEMab307XODjKV1%2BSMnKAdor5J7%2BYJ95jf3Me%2BgpwMEEOVUQMfosv9YVpMzFARkxDRWkG2sk3LEdoPJcawKl8phnP1iHosDQcN95756KONQrb398G5DMl3abkbHOqWTG83GAEVfAQOUH6bb%2Banuw7IXaOuMqMqnN7bJYlOYd0Yp3H2%2BciyZNjvtNi%2Frl9W1B%2FaSS4XFzvpWBrLdvQE0dRI6BIG6v6zwbuf7kP9gIpuoNqXCDxkKF%2FY8eTTpNDV9c9BGTeTQ0Wh%2BOauU4GzHCzKAl1MJ9ohoGLXAp%2FzNSHeGm3Z6ib2vF3UQxARiCS%2FVBiKl7hArXNWTTjic1s1VlHB4BVJ86v33wxP093T9f5f8EJUwlr%2B8xAY6pgGI6%2FRvLgpHTlc7Fb9fdeOZWgtGpBJE83RlspBZB%2Ba5AbkCrB8A5y6xn7go6mCtbnbdFnYVss3PORiuqCg42R9VMZqeif8LGq8QpQhQ%2FvTe2d97EJ7q3QFDckmsrEXThl7KIhIXQl7vwRKaVyCHcho4aCSWyuS1rkHJqQHQbGzEVXFKCccUM7u07r68KyBEuu5iBwX5fYch1EniR7cR6Nfc0W93F06G&X-Amz-Signature=549c9977bd6ebd651686628e9c01ebfb18342e8ad991679a0f2757c1f4cde07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZAXOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkViLgK7OhPp2v7dXEoEdqhZ989wOU8Za317KPV95AbAiAx6j2%2BXTiqG4Ji4AGzmsxfxoTr7RIyEF09Elp446OgZyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHIsaLfBTBDk9rQYMKtwDgsLCkUT2xtPTAelAM5GngHFimDwSdlWe95vm9Ogtbf6GzIt7TXRT%2BDcd1V%2FSka95hRaLQbcxfG6bNIJE7j0f5ym4fnkn8sZIUE0dBQju8Izicq%2BpscGwijlZNwhqgOmZAY5lqiHcEMGaMVj7U9mD5M6H4kFf18EpnshFK8LjUa89i5NCqLX8oYCEtaURYzRpO9DyvseT03JymRnfJsobjdMNEl%2BIkOGkQvHSTm5OD47vwRlCu%2BsPcgT%2F2y9y8ba3%2Fwfb%2BzEyJKppbTEMab307XODjKV1%2BSMnKAdor5J7%2BYJ95jf3Me%2BgpwMEEOVUQMfosv9YVpMzFARkxDRWkG2sk3LEdoPJcawKl8phnP1iHosDQcN95756KONQrb398G5DMl3abkbHOqWTG83GAEVfAQOUH6bb%2Banuw7IXaOuMqMqnN7bJYlOYd0Yp3H2%2BciyZNjvtNi%2Frl9W1B%2FaSS4XFzvpWBrLdvQE0dRI6BIG6v6zwbuf7kP9gIpuoNqXCDxkKF%2FY8eTTpNDV9c9BGTeTQ0Wh%2BOauU4GzHCzKAl1MJ9ohoGLXAp%2FzNSHeGm3Z6ib2vF3UQxARiCS%2FVBiKl7hArXNWTTjic1s1VlHB4BVJ86v33wxP093T9f5f8EJUwlr%2B8xAY6pgGI6%2FRvLgpHTlc7Fb9fdeOZWgtGpBJE83RlspBZB%2Ba5AbkCrB8A5y6xn7go6mCtbnbdFnYVss3PORiuqCg42R9VMZqeif8LGq8QpQhQ%2FvTe2d97EJ7q3QFDckmsrEXThl7KIhIXQl7vwRKaVyCHcho4aCSWyuS1rkHJqQHQbGzEVXFKCccUM7u07r68KyBEuu5iBwX5fYch1EniR7cR6Nfc0W93F06G&X-Amz-Signature=513422ed3dcf16894892baad1a9ba616695d1646bac10b040801d5087e20e14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZAXOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkViLgK7OhPp2v7dXEoEdqhZ989wOU8Za317KPV95AbAiAx6j2%2BXTiqG4Ji4AGzmsxfxoTr7RIyEF09Elp446OgZyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHIsaLfBTBDk9rQYMKtwDgsLCkUT2xtPTAelAM5GngHFimDwSdlWe95vm9Ogtbf6GzIt7TXRT%2BDcd1V%2FSka95hRaLQbcxfG6bNIJE7j0f5ym4fnkn8sZIUE0dBQju8Izicq%2BpscGwijlZNwhqgOmZAY5lqiHcEMGaMVj7U9mD5M6H4kFf18EpnshFK8LjUa89i5NCqLX8oYCEtaURYzRpO9DyvseT03JymRnfJsobjdMNEl%2BIkOGkQvHSTm5OD47vwRlCu%2BsPcgT%2F2y9y8ba3%2Fwfb%2BzEyJKppbTEMab307XODjKV1%2BSMnKAdor5J7%2BYJ95jf3Me%2BgpwMEEOVUQMfosv9YVpMzFARkxDRWkG2sk3LEdoPJcawKl8phnP1iHosDQcN95756KONQrb398G5DMl3abkbHOqWTG83GAEVfAQOUH6bb%2Banuw7IXaOuMqMqnN7bJYlOYd0Yp3H2%2BciyZNjvtNi%2Frl9W1B%2FaSS4XFzvpWBrLdvQE0dRI6BIG6v6zwbuf7kP9gIpuoNqXCDxkKF%2FY8eTTpNDV9c9BGTeTQ0Wh%2BOauU4GzHCzKAl1MJ9ohoGLXAp%2FzNSHeGm3Z6ib2vF3UQxARiCS%2FVBiKl7hArXNWTTjic1s1VlHB4BVJ86v33wxP093T9f5f8EJUwlr%2B8xAY6pgGI6%2FRvLgpHTlc7Fb9fdeOZWgtGpBJE83RlspBZB%2Ba5AbkCrB8A5y6xn7go6mCtbnbdFnYVss3PORiuqCg42R9VMZqeif8LGq8QpQhQ%2FvTe2d97EJ7q3QFDckmsrEXThl7KIhIXQl7vwRKaVyCHcho4aCSWyuS1rkHJqQHQbGzEVXFKCccUM7u07r68KyBEuu5iBwX5fYch1EniR7cR6Nfc0W93F06G&X-Amz-Signature=73930a2fdecc7a4a73321b4750658054137b5a700fa842ab5844f24482168a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTOU2QX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNcFjAvMHEHlcqGJOmBG52LaYWqA2lGtHcZI%2F5%2FRQ0SwIhAL4xPPLwZVXPwVVWVIQthGGjm2oaQgz%2B4GhEbuN6JGLcKv8DCCoQABoMNjM3NDIzMTgzODA1IgweFYfECFcCOMKiIjcq3ANHMf85iEzCNRX%2BrmTywE6nECKCXxENuaoDFR%2BWNsGIXvHZN%2Fdw5buB5uC9pDhXEK4qA5xDf0eu6mCuifrgoB4jlWvR4sblXHNuK6t2n7TbsS1a0mJMhJJR9XeU60oj2V0J8rifurKQC4I6%2FBPHXpbeSKzcd1avG9iLfZwIzm74gHY96O26O2ZU3xfoQqTIirl5RxWX7xKC56ApYVxLGB%2F4rBRTOXvFcGoA3JP3K7mb3rhkR8QsbHk8Jr8WQvhGeC7V43INBdCjIh%2F5knntjC5Laz64fYMfVwFqOrQjHo8SsGGhv7QAlF7B2qdvBJrfJI8GKtrav7c967XRttpQPtQEfpeZag3vYNVgehgj%2B8KYSyxfSdE4qZ%2BxXIl%2FoVV03cV3DZR7Ve5abgtRmzrZH6tudawXeE3lUaPoSwBEUdk0%2BuQ3q%2BzRuW3pwyBI%2Bvg5G4bCKtVpgPWJoBNn1jm%2Bnob9%2FSe6Fu8Nj%2BNe1XORZkJtXqfL%2FqFmq5gRpaUQhtbVsBpP6P34h4Y%2F5VVfM0nbVfbSGoX1nkNh0ErxWc3UaX%2BYiibFadcLIdXpYU%2B%2Fs69VGZOUaXofptP7oKmd5eRzF6pdz7fp9Zd%2BPQ%2B4tFdZgofbBGTKGD0%2Bj5GK%2BmfHojDfv7zEBjqkAYU2JrSD5E17qSkDnlJg%2FDcjEsNGRt9LMHYNYSjU9y4KnSI81mEMZZRORLJaLtFiCRG8Wl9YLqlCJgz%2B0QtHbMjsCz%2BtMAkPURXDa7ajQ1XPJS3G0W4js5Jyj75dk9F6Ot7ih8QGpuhqpSMxuPEZxvmRr18LRqKoVrSHwX5dQsrjYoa5uSTJtKA9Ns%2FK86HNbNN0TdlXrXFoAKEH%2F55nHImmTdLP&X-Amz-Signature=08544bb21cc4fc7f34e8379075284fc1713d2f1978c80437dfc8c40863c1cc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AD53F6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8pG02hQbD4CPsr2M39EJsuF%2ByEbv1%2BhPI4bIDmfX1hAiEA%2FBMhWFq%2BookWWHV2%2FHst8F3ltJCF302von%2Fp%2FJgyiN0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN4Y8JAl9YLPx9Bh4ircAxlW5MHUvdYVAcoS9H5IUzfz5TKTGbaFFpviI5ixSeyeOw7xT7e2780YhhWVDTAtbkTGdoh1mTjFiCqjhEFEdsgCF%2Fpk%2BKZ0zfxuGmIEtd5H8cW7U9LDQNb4Gpi%2B9%2F74qk8Y33QKzhkrCpZjc%2BzNhFT25hvZKf9bnNC1QI%2FvXSSWuMJ5iz6vToepRK1gS6YvCdtJi%2BbjUKb6uHSqjqN0GN%2B1lkSe1EebKlIjfIN3C32y%2FQM8v2FY5Y4cm57dLyzWUp0U9MPbshUMn7turX%2Bv%2FkXGAxS6aawE7PA1M8twdxP3MNYJfDQkLDdJrCoEkovwOVUlV4PqIrjad5nTjrPoF1sH6Pz2ge1PNO0Qxo2ydW%2B6jqSwJBtaYYUv5waCPKkgBGGMSkve3ay%2B6BMTto2nPa4wOb3E5L0Rc7GB2AyJFh8%2F93QF%2FFMz018H%2BzalR0Z3MtAIFXo7Kdmq7v%2B44kCQkdNMhPmQasXn8kHtq4%2BZiJW%2BSx3pIbWbZus43lRXl51EVNMCD8UAgCctRXViZ0w7A8hA2qngwv9sFMJm9BbnOBJYaBCQQZ%2F%2F1UDcGVTVDN4lolJ8jJa9Fy0ui%2BA%2B8DB8BYFiLSvjNz0UEzg%2B8XBR5i%2FTsM9VNQAB2UUV2KZ7MLjIvMQGOqUBnVLwWXaBnVEy2282qBpNERNakn2%2FHU5fig4HE1q7KO5LNvB8Th9mBeZGTkdwygc5%2Btj6srklzPoudq29Hftrsru5fqp2t1Ad6rsA%2BEqd1iEYaYxSgw04T5pHmYa6Lm5oypnuraG7O0iPq%2Fn8IDM1Lg7MzAb37KDRaufH93rlQxYzNy8m4v%2BtN%2FFQmgR4a3pxHxmJDd3vOSSrod3FcznTVAeDF5d5&X-Amz-Signature=42850683fc700a4c12bd5c8a8b89eae023743ff8851ada54ca8f9866518d62cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZAXOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkViLgK7OhPp2v7dXEoEdqhZ989wOU8Za317KPV95AbAiAx6j2%2BXTiqG4Ji4AGzmsxfxoTr7RIyEF09Elp446OgZyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHIsaLfBTBDk9rQYMKtwDgsLCkUT2xtPTAelAM5GngHFimDwSdlWe95vm9Ogtbf6GzIt7TXRT%2BDcd1V%2FSka95hRaLQbcxfG6bNIJE7j0f5ym4fnkn8sZIUE0dBQju8Izicq%2BpscGwijlZNwhqgOmZAY5lqiHcEMGaMVj7U9mD5M6H4kFf18EpnshFK8LjUa89i5NCqLX8oYCEtaURYzRpO9DyvseT03JymRnfJsobjdMNEl%2BIkOGkQvHSTm5OD47vwRlCu%2BsPcgT%2F2y9y8ba3%2Fwfb%2BzEyJKppbTEMab307XODjKV1%2BSMnKAdor5J7%2BYJ95jf3Me%2BgpwMEEOVUQMfosv9YVpMzFARkxDRWkG2sk3LEdoPJcawKl8phnP1iHosDQcN95756KONQrb398G5DMl3abkbHOqWTG83GAEVfAQOUH6bb%2Banuw7IXaOuMqMqnN7bJYlOYd0Yp3H2%2BciyZNjvtNi%2Frl9W1B%2FaSS4XFzvpWBrLdvQE0dRI6BIG6v6zwbuf7kP9gIpuoNqXCDxkKF%2FY8eTTpNDV9c9BGTeTQ0Wh%2BOauU4GzHCzKAl1MJ9ohoGLXAp%2FzNSHeGm3Z6ib2vF3UQxARiCS%2FVBiKl7hArXNWTTjic1s1VlHB4BVJ86v33wxP093T9f5f8EJUwlr%2B8xAY6pgGI6%2FRvLgpHTlc7Fb9fdeOZWgtGpBJE83RlspBZB%2Ba5AbkCrB8A5y6xn7go6mCtbnbdFnYVss3PORiuqCg42R9VMZqeif8LGq8QpQhQ%2FvTe2d97EJ7q3QFDckmsrEXThl7KIhIXQl7vwRKaVyCHcho4aCSWyuS1rkHJqQHQbGzEVXFKCccUM7u07r68KyBEuu5iBwX5fYch1EniR7cR6Nfc0W93F06G&X-Amz-Signature=947212d023861d258cd6fccd4550b4c31f5dc21658578dfb7b75dee489c65c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
