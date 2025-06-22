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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHXQPSF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKBGJHRkQwbr%2BxhNLMVOo%2BC4ssSykUwRbCXjEmUNx6kwIgedTEFKUVgTOFexHf8ZPVrsbnUSfeT3XhAw8BGBVAsUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuGvH%2BPmQ83GzYteCrcA8UAdUMpOZtCXL8oZQ1W0h2pTWxD4ytgG8BB4mrX%2FqHb7IsRTxdeF%2Bs%2FFXOYzWNJlAJh5%2FmhV0euOhE8Nzmey%2FrrN5TizPbDN1%2FEfeeS2Vsrk8MIHDCgyzlRwyETl5pbhjZja%2B%2FkYsw9KLjP8ect83iQaIPRoJwE0VZFe8SD0JnXAby4rF61si6UyxwgCevQeZRQ3FTVh9Cyk838lT%2FkQRpP3cMDSgceP6r8lgYWV7kwOXdurrwAK%2ByaEbJpYqDKPGosx%2FV351RZaqSenZ3E7vxkMBC4LU8OGGH4%2BC86scUeaBevdcDsCFy%2B%2Bh3X0Xy6cbFZPYL9m8muZMC9MIQBd4V%2BoKljH0XuulR2px%2BW9MUq%2FX6KPCwjMm8gMJLXhpTanzexynwt4LpKraAZPBNFz%2B8PMhjJ4mTSo9%2FZoTD4MALeITEDLYyREkIkAmCZj43%2B2NFhaACjPu7tWVzpvOTziJKKQ6XoJOliq8MEX7jsC8LbImVhKYpdbyPxZk56sa8cwj3MtGbxxx%2BTdOCQRlprB0wWgssXF5iGanmSbaz0o4HQkS%2B3LVFtODZfKZJy7Rg6XMdhRczaUpC1eR6K2geVHSJmvoMnmZ4b%2Fdg8wYOERfoSohpWRndWsdoTaurwMIGI3cIGOqUBGwuSoKfZo9LOleX9yLb56%2FcFB1TNdq9nL9g32D%2B6lOmJf468NrLMc4VRrVal4Z%2BQayMeBabbWPOpUykrDPVY2w9GgbTIdEcn1eLb9jR4MvGJBzwqxPCPRd7FVkBTwBTG1mpMU0U3o2yNvor1MwEDjuaQgyCnR9yMFvy8gJeYRYbA7KTs2rlq4Y1R1Ra3K5VTa2s3RijvlKECfp%2BhTxxfQ7qBtgZ1&X-Amz-Signature=71a3e5372ed7664c0e557ce99dd6989f6bd888e37e0afab6dbc79b1eae91f495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHXQPSF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKBGJHRkQwbr%2BxhNLMVOo%2BC4ssSykUwRbCXjEmUNx6kwIgedTEFKUVgTOFexHf8ZPVrsbnUSfeT3XhAw8BGBVAsUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuGvH%2BPmQ83GzYteCrcA8UAdUMpOZtCXL8oZQ1W0h2pTWxD4ytgG8BB4mrX%2FqHb7IsRTxdeF%2Bs%2FFXOYzWNJlAJh5%2FmhV0euOhE8Nzmey%2FrrN5TizPbDN1%2FEfeeS2Vsrk8MIHDCgyzlRwyETl5pbhjZja%2B%2FkYsw9KLjP8ect83iQaIPRoJwE0VZFe8SD0JnXAby4rF61si6UyxwgCevQeZRQ3FTVh9Cyk838lT%2FkQRpP3cMDSgceP6r8lgYWV7kwOXdurrwAK%2ByaEbJpYqDKPGosx%2FV351RZaqSenZ3E7vxkMBC4LU8OGGH4%2BC86scUeaBevdcDsCFy%2B%2Bh3X0Xy6cbFZPYL9m8muZMC9MIQBd4V%2BoKljH0XuulR2px%2BW9MUq%2FX6KPCwjMm8gMJLXhpTanzexynwt4LpKraAZPBNFz%2B8PMhjJ4mTSo9%2FZoTD4MALeITEDLYyREkIkAmCZj43%2B2NFhaACjPu7tWVzpvOTziJKKQ6XoJOliq8MEX7jsC8LbImVhKYpdbyPxZk56sa8cwj3MtGbxxx%2BTdOCQRlprB0wWgssXF5iGanmSbaz0o4HQkS%2B3LVFtODZfKZJy7Rg6XMdhRczaUpC1eR6K2geVHSJmvoMnmZ4b%2Fdg8wYOERfoSohpWRndWsdoTaurwMIGI3cIGOqUBGwuSoKfZo9LOleX9yLb56%2FcFB1TNdq9nL9g32D%2B6lOmJf468NrLMc4VRrVal4Z%2BQayMeBabbWPOpUykrDPVY2w9GgbTIdEcn1eLb9jR4MvGJBzwqxPCPRd7FVkBTwBTG1mpMU0U3o2yNvor1MwEDjuaQgyCnR9yMFvy8gJeYRYbA7KTs2rlq4Y1R1Ra3K5VTa2s3RijvlKECfp%2BhTxxfQ7qBtgZ1&X-Amz-Signature=1c6c17dca67e541b8d9914c1c883f2c23a999205b07d7ac717c369e641f6b854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHXQPSF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKBGJHRkQwbr%2BxhNLMVOo%2BC4ssSykUwRbCXjEmUNx6kwIgedTEFKUVgTOFexHf8ZPVrsbnUSfeT3XhAw8BGBVAsUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuGvH%2BPmQ83GzYteCrcA8UAdUMpOZtCXL8oZQ1W0h2pTWxD4ytgG8BB4mrX%2FqHb7IsRTxdeF%2Bs%2FFXOYzWNJlAJh5%2FmhV0euOhE8Nzmey%2FrrN5TizPbDN1%2FEfeeS2Vsrk8MIHDCgyzlRwyETl5pbhjZja%2B%2FkYsw9KLjP8ect83iQaIPRoJwE0VZFe8SD0JnXAby4rF61si6UyxwgCevQeZRQ3FTVh9Cyk838lT%2FkQRpP3cMDSgceP6r8lgYWV7kwOXdurrwAK%2ByaEbJpYqDKPGosx%2FV351RZaqSenZ3E7vxkMBC4LU8OGGH4%2BC86scUeaBevdcDsCFy%2B%2Bh3X0Xy6cbFZPYL9m8muZMC9MIQBd4V%2BoKljH0XuulR2px%2BW9MUq%2FX6KPCwjMm8gMJLXhpTanzexynwt4LpKraAZPBNFz%2B8PMhjJ4mTSo9%2FZoTD4MALeITEDLYyREkIkAmCZj43%2B2NFhaACjPu7tWVzpvOTziJKKQ6XoJOliq8MEX7jsC8LbImVhKYpdbyPxZk56sa8cwj3MtGbxxx%2BTdOCQRlprB0wWgssXF5iGanmSbaz0o4HQkS%2B3LVFtODZfKZJy7Rg6XMdhRczaUpC1eR6K2geVHSJmvoMnmZ4b%2Fdg8wYOERfoSohpWRndWsdoTaurwMIGI3cIGOqUBGwuSoKfZo9LOleX9yLb56%2FcFB1TNdq9nL9g32D%2B6lOmJf468NrLMc4VRrVal4Z%2BQayMeBabbWPOpUykrDPVY2w9GgbTIdEcn1eLb9jR4MvGJBzwqxPCPRd7FVkBTwBTG1mpMU0U3o2yNvor1MwEDjuaQgyCnR9yMFvy8gJeYRYbA7KTs2rlq4Y1R1Ra3K5VTa2s3RijvlKECfp%2BhTxxfQ7qBtgZ1&X-Amz-Signature=0968adb0d940764baedd4d847574c2895d3a6b151892d8549be6dcc7be27f1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYBWXVS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlf5k2x6bYzRvtfx1vHFWkJJ%2FWh0EkvCGf%2BoKH%2BnIB4wIgNILesktKp4XXPDLZelFTx2r%2FqJFuzJpK%2FbX8dWr89C0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyyBgkAPtH4vKvN4yrcA7USml4CVxYbRYyoCTbIpmBx4VCEoYqy5QgPzaYVZHHTvfvPNN%2BGYVjErbeaOu1UUZ8mW9CKozmJL4etlP0DyROWIrof1vUuqJ%2Bq%2FF6TUxXWcG8su9GeymH7A8CywcgiO88gYR9Kfclq0TOi1oruuCLjQuijg4RMI1y5mam3%2FoVewC6stI6jpRzrbXc%2Fw5SfWgcmddPm62Ughr9T7l224Y6s1t16H6kHCpgY7yTAzCgmHXmy%2FknRZlnFu0HkCbJOzOG8f5NQ6XLpcYliTTH%2Bb68iUCuYs7xB20L7SY8V0uHoemjFprMbAojq4yBK5L1igF8B3x3jjquyvhnhOl5Dh0Uien3Ag9rN2aq9Pnpn6rF3YCgvU%2Fk1xiiby7BghunNWHE51Zn5AXudkuhtgLbrgAnrorCFEsth0sREcA8wu78FnfMqhOKbguMs1L%2FmO%2F9ViY5SUwD%2B8eGk4TRokLh7Niz76hRdf22MgPNHqxulS3VnJ5ixYg1Df%2FPDo7K3YMcGqRWMlOLtbd%2Fm4Tcn49cRqMObSeaWktcQC1e27o9Zld0i5FzBKnsbyK9CTKmDx7V6G2hiv5NEBVBYBjhN9ggoj%2FnDAf51w%2FjkzPWFfMdkY%2BwCEtcslFAQYlzphYnEMKqI3cIGOqUBCE3dm6ph%2BfOJQf2Atwso0yuqgb1%2BbKE0ZPn%2FWz%2B4X5%2FuMF0RhrRtzbiSvn0C9oRLAi3KXN6g08DylAWxiIEA6SWaudGYWTRBAWHROBRJlD7X3ID8p909xEpPaYZMIaWmTbgheYHm1r2Jmsm1DyIOHgjpGfjifNL2ALB%2FIczfTQ%2BzbtwZgZrkhY%2Bjyss37iX6tfXjSIEVLLZ1wgKa8lB8trbZxgqE&X-Amz-Signature=5ddd43d577df29123c947f7ba779b1324c2e4c9fe44fafa54f543400fb95d5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIOYLUFR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyQII0Kh%2BwdR8tU%2FjJFCST97kQ8Uc6k2VHJvcZIx23kQIhALPVkgWDsztDQI7ph3UbuOnWk5qOeYfcP6Rhe5lCSiMUKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlrq38hy8HOLIMjoq3APavPWhkaZbBvJGrosUulnwPo1NrnsbT%2Bw%2Bvq2GErfNrc47hSZhhteJ%2FGCJoRTlihahyhUL1VCG5ucEaPe%2FB0O%2FOysnLURUBnXuyvAhvJ71RCzXfeN2QVWynKE81NZoDD3qxxQtmGlU4ShhAghBVOIO%2FgHT72laZXowZJjB2i84S2en3JL9YYMZ%2FLaPBw3%2B%2Flyh1rI%2F%2Bo6tGK4q%2BhvMdnPDUt8wZ8XcksPKRJnJmHFyynwSbF6cWcFjOj1rBRbvZu1GKa8QW6GG3rrHiyvcKNaYrfoihKaQdWdUiDx0AsJEoDSJkFxO0IuE%2BQwdumhZ%2FTybQwy0VU8sHZWWtIEXPdn1lD2EIYO3rO6eFPhk6Nz0ZSZdpS3nzk0YiItz0QUGukPTmg9YgfN%2FgPfOAJkr4cXHFJ6fcZopxot20VraboVImFzOxGjiLyhhiwrh%2F3EKIC3gHQTc10uvzBUqAax2Ihh5OmSMGKv%2FhZ4kG9tsCAoNJGphrsQC0mn%2Bb4Kaie0NwMGKqRRRQ9i01%2F5phJQRvxTVHD1r1BoDjgqF6ZWpXB3QjSgBWhrGx1WYVmsVWhr6mKECx1Gr4AJ%2F9UfVHUA3yozsQNPFwRnfjDv%2B%2BZtgm%2Br2KrSG1hIOORkASafBOTCQiN3CBjqkAar5A1ed1CcHSiTF4rH26dHRYBtR1ZUi8r0KsLcmI3H8I2PpWKFujBNM%2FFTb%2FJqgpjHT%2BUtMpmD4iy0b3l9lhfCDUq7Np5B1awNq3lacvpJOI%2FZzfxpQZj4tf5PeUeZ%2FE3BWFyzRzBAbBmsTFuoMCFGxE%2FuX3soo5dujSQkeFL7OgldgSbFbgx7XA0xkHmJTVQsT6quv7ekA%2F87MY2ol0jR6CLZt&X-Amz-Signature=c06aa7adb783da481b2425bccb0588d8335d7a69d2a12dfe7731a7e13b8e246b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHXQPSF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKBGJHRkQwbr%2BxhNLMVOo%2BC4ssSykUwRbCXjEmUNx6kwIgedTEFKUVgTOFexHf8ZPVrsbnUSfeT3XhAw8BGBVAsUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuGvH%2BPmQ83GzYteCrcA8UAdUMpOZtCXL8oZQ1W0h2pTWxD4ytgG8BB4mrX%2FqHb7IsRTxdeF%2Bs%2FFXOYzWNJlAJh5%2FmhV0euOhE8Nzmey%2FrrN5TizPbDN1%2FEfeeS2Vsrk8MIHDCgyzlRwyETl5pbhjZja%2B%2FkYsw9KLjP8ect83iQaIPRoJwE0VZFe8SD0JnXAby4rF61si6UyxwgCevQeZRQ3FTVh9Cyk838lT%2FkQRpP3cMDSgceP6r8lgYWV7kwOXdurrwAK%2ByaEbJpYqDKPGosx%2FV351RZaqSenZ3E7vxkMBC4LU8OGGH4%2BC86scUeaBevdcDsCFy%2B%2Bh3X0Xy6cbFZPYL9m8muZMC9MIQBd4V%2BoKljH0XuulR2px%2BW9MUq%2FX6KPCwjMm8gMJLXhpTanzexynwt4LpKraAZPBNFz%2B8PMhjJ4mTSo9%2FZoTD4MALeITEDLYyREkIkAmCZj43%2B2NFhaACjPu7tWVzpvOTziJKKQ6XoJOliq8MEX7jsC8LbImVhKYpdbyPxZk56sa8cwj3MtGbxxx%2BTdOCQRlprB0wWgssXF5iGanmSbaz0o4HQkS%2B3LVFtODZfKZJy7Rg6XMdhRczaUpC1eR6K2geVHSJmvoMnmZ4b%2Fdg8wYOERfoSohpWRndWsdoTaurwMIGI3cIGOqUBGwuSoKfZo9LOleX9yLb56%2FcFB1TNdq9nL9g32D%2B6lOmJf468NrLMc4VRrVal4Z%2BQayMeBabbWPOpUykrDPVY2w9GgbTIdEcn1eLb9jR4MvGJBzwqxPCPRd7FVkBTwBTG1mpMU0U3o2yNvor1MwEDjuaQgyCnR9yMFvy8gJeYRYbA7KTs2rlq4Y1R1Ra3K5VTa2s3RijvlKECfp%2BhTxxfQ7qBtgZ1&X-Amz-Signature=cc1ac3ddf854bcc6a509c6b68532135f6a6cf417eaef275357f3957a1b512c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
