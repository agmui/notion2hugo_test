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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMYSI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCmOYKgaS8tpz9rWI9CAPZgp%2BVQ26kIxWALLhCNd%2FGTeAIhAMdiboPTrzBv0Mw04p23ISAMx%2B4PIoExoAEnYmRuTxQ5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGF2PCzmYtU%2BdZwQwq3AOCBM9RamrmEgQwPfjU3piEctEMz6tOF58%2FcHO7DY8e%2BRK3APP0mfaiuevQZqNE6raDY5zPNfTHlKgqdBCHae%2BVAi3bl2%2BW0ZD8E9RJFxN3SMcxVolfPCJyCdS6lq87B%2BNcOil%2FwKggDqi8FLbR0YB1vm6zvYm0NZ3CqJNESfocUlyvFtIh84l5n7kU7FaAxoUuZMXDwrpB%2BR83mTA%2B1tIWtQPoIYXd1t0cvAvOh43GER02PN%2FMBAFKYrNCoEPuENwdOVkOGtErZTVsilKH%2F%2BlCF37DTDk1F6gQLvecOxgSd8JyFR5zTfAf%2FI%2FBT86E%2F2JuS2RZYXtqooASRmnkVc1qR4McfryI8MU%2FibX6RIOdPVz22Hv%2FU8Ttw4tFTz5RiCxa%2FXCTChTSlvX5OO5PZFagNB86b9OKoGb5uYhtduqBNnyDxUuVZljfGgsYnblslK26ahZtszENs%2FRnjqhebI2IFjIVNHAYJ3tHpZd%2BFnx%2B1l%2B%2BsQrgdUFupEpUZif%2BATwyzt%2BcDYxeiHyBN3fQbaVC7IAoCVYff1GtEq4%2F4ibx7fdvu%2FUFbv0aBZs2CYYtBqa0fgB%2BAoLetI%2FM1zZMxZPbcDD6gfTmMfBk3WkecjbEE3swfyUvSKP%2FvxxqKDCOkKXABjqkAZQ3M9re8lOuUOYxfikauGK4wZQvFRIDvOc0odlXxQwcOMk6hHHOPdbeM91PEF2yzZbIHTyCKvSeh0WE1NS9MMHU0r0UOaFBJtddZ4WfbAUeQ5%2F24IgxUe22N0LdcV7gIDqiBX16dyi009Qp7Dj%2BZQXXNatB8UTrE7lt9HaitTGGFOwDNz1FRxTqIA5%2F5NNo5ivsc0X7oahb7MJKKmD1MHA1g91%2B&X-Amz-Signature=a11a858e6f66357d9a473617b5123d7b32b113801ed3d6c6685fe55cfd14b347&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMYSI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCmOYKgaS8tpz9rWI9CAPZgp%2BVQ26kIxWALLhCNd%2FGTeAIhAMdiboPTrzBv0Mw04p23ISAMx%2B4PIoExoAEnYmRuTxQ5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGF2PCzmYtU%2BdZwQwq3AOCBM9RamrmEgQwPfjU3piEctEMz6tOF58%2FcHO7DY8e%2BRK3APP0mfaiuevQZqNE6raDY5zPNfTHlKgqdBCHae%2BVAi3bl2%2BW0ZD8E9RJFxN3SMcxVolfPCJyCdS6lq87B%2BNcOil%2FwKggDqi8FLbR0YB1vm6zvYm0NZ3CqJNESfocUlyvFtIh84l5n7kU7FaAxoUuZMXDwrpB%2BR83mTA%2B1tIWtQPoIYXd1t0cvAvOh43GER02PN%2FMBAFKYrNCoEPuENwdOVkOGtErZTVsilKH%2F%2BlCF37DTDk1F6gQLvecOxgSd8JyFR5zTfAf%2FI%2FBT86E%2F2JuS2RZYXtqooASRmnkVc1qR4McfryI8MU%2FibX6RIOdPVz22Hv%2FU8Ttw4tFTz5RiCxa%2FXCTChTSlvX5OO5PZFagNB86b9OKoGb5uYhtduqBNnyDxUuVZljfGgsYnblslK26ahZtszENs%2FRnjqhebI2IFjIVNHAYJ3tHpZd%2BFnx%2B1l%2B%2BsQrgdUFupEpUZif%2BATwyzt%2BcDYxeiHyBN3fQbaVC7IAoCVYff1GtEq4%2F4ibx7fdvu%2FUFbv0aBZs2CYYtBqa0fgB%2BAoLetI%2FM1zZMxZPbcDD6gfTmMfBk3WkecjbEE3swfyUvSKP%2FvxxqKDCOkKXABjqkAZQ3M9re8lOuUOYxfikauGK4wZQvFRIDvOc0odlXxQwcOMk6hHHOPdbeM91PEF2yzZbIHTyCKvSeh0WE1NS9MMHU0r0UOaFBJtddZ4WfbAUeQ5%2F24IgxUe22N0LdcV7gIDqiBX16dyi009Qp7Dj%2BZQXXNatB8UTrE7lt9HaitTGGFOwDNz1FRxTqIA5%2F5NNo5ivsc0X7oahb7MJKKmD1MHA1g91%2B&X-Amz-Signature=3cf53cd4a954d2678d3d0ce436568547b3b93a4b9844b46dfbd555988b387b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HE5YYZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDZFDCW4XTrOeAfgODdEQ7F28u%2Fo7kNdV4WaymVe3yZiQIhANniY1cAE2M%2BwIpKXZ6chFyY%2FoyDSV%2BiR37g9P8GlTfGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2BdJ1fESW7LT1XWcq3AOpiQer3IBTVmUAXODvTjwcAaKXRHlAYwqdlbtZOSvYDEMSyyprmI8WxvBFnqu1mFWjT1wupElLfnqo6AhtrUTYv6hiyJMaOpsQDkM6js93YUIO736NivzUxSWNvrhE2JcbzHPiTXmPJLcXhUALwJLWYRd5xP%2B5dfTbKAq%2BI5foRhLhA68YSsREFP0WeXbEWO5H7xl%2BClJ5alFqQxPP4hmW%2BfFEvPqTsvR7qATguamw%2FDYOWJGJSjIKwtzRqlUPx1%2B7ve4QAQVwh1%2F2C2fn1eqHHVj9f%2FCKppFvDkQ3E%2F3ZAwe6ju0%2BJ8fj060t7qrDJstcU3iSqlG9FcqvEMkFGIGoH2woH6Zz5%2FT3EalbMRlYfPfV7gppMx9Rb8I%2FKhGYo8s9NURHMeMvfYjqyEJJaZeOGEx7410JnNJZ2Bv3A4Jnbt%2BQlaGDiL%2Fe8nY%2BFoTvKk%2FuZGSEDlxp4Q0e1e4Xh%2FehHMIIjNA9jodW8IWfzjhmtS3SZ1HpuJCdZ6qqwtkTCMwlzLAzTyOvLEVZtoHty%2FpSIyBwx2KpSLq9zY1cDorsD4KKAFkVhs7TSq3KXb3B0RrSKCllDa6TV%2FKdR4egoyOY4oklFllMdpTATEjQz84wq6WWUwfy08526%2F27dzDWkqXABjqkASk8b94zdW75VcPOoT5RczxgZO9X4j9t209BQmnG7okomj9QwMpTXCmErnwGr1JxCvJTswS4tgebv5OSteeAXcRzOMpzizPIpiftBvq4Yk3yk%2FzBRIBDNl2nJzD4peIMNmSueUU1u5PYNsftCRUOQF3wkGR7CGmieQ0yDt092%2Fc744mrmmQ6g2VuCa%2B%2Bn7Ri36YuhRptAkrp5cFO%2B83%2BJG9mvFw0&X-Amz-Signature=3796242aa1db1e7c802e5ab36b7da49819674fe5714bdfd55ddcd3affa5cebbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524G7AIW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC86Z658gzUKitJiv8m%2BjTARTKkXfsgWTysLsP8bTu7lwIhAP1ya4XHgnHwplNzrkvqL1VZtCgbejEKAenYVKLInGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEtlZpwzNIShjj0esq3AO4G7rGJFwnonQ3h54GKFkxcoU5qhtjdgEwaPv%2BGMH3DXg2sjQDrXQqGk3dlX%2BGtbm%2Fv7L750Prl4JeYD1yaSeqV7SjFH0HebgE7Du15Ci3Zk6YhGVli0%2B%2FVUSrZp57C%2BOps3Aju3JVGiQc0e7xoVqSA9ciIN0Mis%2FlOh0Lgf4nIZQbmbPM4KiJa1w%2BAt0CMj67kah5KdpxZKlHvdEQKiDl5eCykEZDFqWdq1eqw34FFCgZsbQ02%2FUE4jl4nngvGGy%2FNK2M5bZTGhsggAjP7P3YFve96U6vmVpBGK%2FrLpx6M5E4u%2FUDfEvGNf9ZfBZ6%2BavNS0jGJqOwsRWyvXcX4QRWRKbzUHoXYj0hQCsSbU6e%2BPBfHfHbCNxVk%2FTYUCU81OLkSaf8MSzKfpqnDq5LPTW1fAAqrq%2FHraKrwBjGeMaZDWLOzEHW5pKU7o8RwL64vCrAebN9pXXGCMu6FJ02R2Grj%2BF0Y%2Blk7xeqbsHkKPbs%2B2im7hMr3drBmRQyfcbL%2FSITFxzwt6%2FfCqDOlzaIoShjftwsTkpCflNU%2BXc45KrdRIU%2B4CAlEocRgnR%2FPwAAT1UDwzZyzx40Mj6CMZdBkiLKCaj0JLVQF%2F5qYpcEJy2WTsvxKGHqK1QwDYIv6jCZkKXABjqkAazDQVAaIodlPRxtyScIMYipZr9Xi1ObVDLRZMqQ%2FjP%2BAypBnDrP3IBAPwbz3%2BGDT6NJxOVZUTTRE2YQIBx3RWVHFtQELibXgd3IKclw5WEmt8oNY5AD9O8D8gwb7RvBYPL0xE95g26AiTqFXrd0PUQ4OlHw0NiJwZxFshDgTq70%2B01ubXGeoIRUoZ9tOsKSlXrd7DEmG3%2F8h4bu3EcbXO3e4wOv&X-Amz-Signature=3d5d2f5f56c8a5abb98ca17f6a50b9a81ffe5fa1cfe52837d785068433172a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMYSI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCmOYKgaS8tpz9rWI9CAPZgp%2BVQ26kIxWALLhCNd%2FGTeAIhAMdiboPTrzBv0Mw04p23ISAMx%2B4PIoExoAEnYmRuTxQ5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGF2PCzmYtU%2BdZwQwq3AOCBM9RamrmEgQwPfjU3piEctEMz6tOF58%2FcHO7DY8e%2BRK3APP0mfaiuevQZqNE6raDY5zPNfTHlKgqdBCHae%2BVAi3bl2%2BW0ZD8E9RJFxN3SMcxVolfPCJyCdS6lq87B%2BNcOil%2FwKggDqi8FLbR0YB1vm6zvYm0NZ3CqJNESfocUlyvFtIh84l5n7kU7FaAxoUuZMXDwrpB%2BR83mTA%2B1tIWtQPoIYXd1t0cvAvOh43GER02PN%2FMBAFKYrNCoEPuENwdOVkOGtErZTVsilKH%2F%2BlCF37DTDk1F6gQLvecOxgSd8JyFR5zTfAf%2FI%2FBT86E%2F2JuS2RZYXtqooASRmnkVc1qR4McfryI8MU%2FibX6RIOdPVz22Hv%2FU8Ttw4tFTz5RiCxa%2FXCTChTSlvX5OO5PZFagNB86b9OKoGb5uYhtduqBNnyDxUuVZljfGgsYnblslK26ahZtszENs%2FRnjqhebI2IFjIVNHAYJ3tHpZd%2BFnx%2B1l%2B%2BsQrgdUFupEpUZif%2BATwyzt%2BcDYxeiHyBN3fQbaVC7IAoCVYff1GtEq4%2F4ibx7fdvu%2FUFbv0aBZs2CYYtBqa0fgB%2BAoLetI%2FM1zZMxZPbcDD6gfTmMfBk3WkecjbEE3swfyUvSKP%2FvxxqKDCOkKXABjqkAZQ3M9re8lOuUOYxfikauGK4wZQvFRIDvOc0odlXxQwcOMk6hHHOPdbeM91PEF2yzZbIHTyCKvSeh0WE1NS9MMHU0r0UOaFBJtddZ4WfbAUeQ5%2F24IgxUe22N0LdcV7gIDqiBX16dyi009Qp7Dj%2BZQXXNatB8UTrE7lt9HaitTGGFOwDNz1FRxTqIA5%2F5NNo5ivsc0X7oahb7MJKKmD1MHA1g91%2B&X-Amz-Signature=2cb4c117dc2f36b8f3ae87ee152bffd5e712827fea29fb2f472a233b6b6e1447&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
