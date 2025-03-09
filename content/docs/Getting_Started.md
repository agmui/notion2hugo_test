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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPT25LS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIF9I7kvN1tiamKi6iiXuYijP9sEF24UlKF5H3vSgw%2FfNAiBEYmSINJjoQvc3d6HGmfVKcoRm0q%2FDC1HRBIg7Sh%2BTXyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMjnLyoBcqn%2B1gYtOxKtwDFFxazBMwRhYc4y%2Fw0jvSuO9QLR4uI%2F2yuYH1c1wTnQe7EkVTOgnM9E7MxXzlzGGMUySseWcrmupY1BgsyLfdhTaKDsCC0zmNYetS2yx%2Fou9EhKG7LjhCYMo2k6fGIyjPdHO%2BonpUfdSwj2boDrZMXB1SByRxErEdZGJXDZ8smKjPeUn6FMn5SZkOcAwNpKWejjbPKPi3c5XclvqX3Akge2%2F3xhecOuyWQETvZV7R7sD3AC4grjbm932NgJbnUuo4r%2Fp%2BC6B9pkgqLmwd3oS75sAMY6I222XtD6YQma4Zpiu%2BlnQuzP%2FsfcHoCmGkN5xzx4bqUp3%2F5sdX5ojAO%2FQnZi2oSB4gPAlnvz4p8Z4F7KHT6NThYizhePWuiELqW7VxZ%2FCAS0h57R5CMQchormGMzptFfGpY%2FMbWgOoLGBxcVilLDip6eqp9rP3rUR0q5SkRcAtxEXTJOaiqLyuYKGkT9LUEuRulRt1kP3MhqdAO3zoaWrbSdw7hC5YAMx0OyeY1y1ADs6T%2BYg3bVsSiHmxF2EjOMnQKrVAWF9Pgp2WIPiaRGITTd0OYyecphm%2FtdQGqiDIxgsu3EdtIWUNJvIiUx1OFz%2BoreYvjaHA480tw9BXRK7sjxojOfftXEkwmq63vgY6pgEr9E4TfeeY0eAj%2BMukg3gxuTp0v%2FZlFR%2BSCH88o0YPJ%2BVJsWhkZz8R1wZpIXTKdVqPsFi6gmDWWUj3z2ZlZAscOMcEOXCpHWihh%2FAy06y3ZcGYZTRjKXGeNBFzhIXfcTNaiGTPG3s7PUIYoD4WmosNhDKs4SmV7OvHw6W74%2BNh4vwHTAY1tWEKWPziXsnaolX1RItqGGkDi%2B23mSE1xw7RRxiFVEHO&X-Amz-Signature=d13cf37e594930774f9e38e3f5c73a386d471ec970df9bee5ea1a06ef4497ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPT25LS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIF9I7kvN1tiamKi6iiXuYijP9sEF24UlKF5H3vSgw%2FfNAiBEYmSINJjoQvc3d6HGmfVKcoRm0q%2FDC1HRBIg7Sh%2BTXyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMjnLyoBcqn%2B1gYtOxKtwDFFxazBMwRhYc4y%2Fw0jvSuO9QLR4uI%2F2yuYH1c1wTnQe7EkVTOgnM9E7MxXzlzGGMUySseWcrmupY1BgsyLfdhTaKDsCC0zmNYetS2yx%2Fou9EhKG7LjhCYMo2k6fGIyjPdHO%2BonpUfdSwj2boDrZMXB1SByRxErEdZGJXDZ8smKjPeUn6FMn5SZkOcAwNpKWejjbPKPi3c5XclvqX3Akge2%2F3xhecOuyWQETvZV7R7sD3AC4grjbm932NgJbnUuo4r%2Fp%2BC6B9pkgqLmwd3oS75sAMY6I222XtD6YQma4Zpiu%2BlnQuzP%2FsfcHoCmGkN5xzx4bqUp3%2F5sdX5ojAO%2FQnZi2oSB4gPAlnvz4p8Z4F7KHT6NThYizhePWuiELqW7VxZ%2FCAS0h57R5CMQchormGMzptFfGpY%2FMbWgOoLGBxcVilLDip6eqp9rP3rUR0q5SkRcAtxEXTJOaiqLyuYKGkT9LUEuRulRt1kP3MhqdAO3zoaWrbSdw7hC5YAMx0OyeY1y1ADs6T%2BYg3bVsSiHmxF2EjOMnQKrVAWF9Pgp2WIPiaRGITTd0OYyecphm%2FtdQGqiDIxgsu3EdtIWUNJvIiUx1OFz%2BoreYvjaHA480tw9BXRK7sjxojOfftXEkwmq63vgY6pgEr9E4TfeeY0eAj%2BMukg3gxuTp0v%2FZlFR%2BSCH88o0YPJ%2BVJsWhkZz8R1wZpIXTKdVqPsFi6gmDWWUj3z2ZlZAscOMcEOXCpHWihh%2FAy06y3ZcGYZTRjKXGeNBFzhIXfcTNaiGTPG3s7PUIYoD4WmosNhDKs4SmV7OvHw6W74%2BNh4vwHTAY1tWEKWPziXsnaolX1RItqGGkDi%2B23mSE1xw7RRxiFVEHO&X-Amz-Signature=9d463e7d31ad77e899f5d97c6c2735242a4c8f12f39a177023b3888f273588cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXI4RCKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIF1yXDG5VPgX7sqIez3wvVKIL6uW4LalFM5uga%2FCep7RAiAdeQPr54ZNzXeGIzKs9fw%2Fb6FOPhrO0PuiFPyssUn9kyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMotJJXRoxl2CMDUHvKtwDEsg5qc%2BEI6bxErIt6M1bYyoXMf4HR9e9aUKihDCh57gscoPtdlpceAXqZFqV%2BZVGjNwpGdT3AQxdtFPIK3EyeSEyxpjvLEbdS6CQha8LZfYGwK7qYCCbOD33671y9L%2FhuhtBgScZDzzrZdy0eMa4IsF5Xrt3jO28OKtPMbRqsHRI0n2x6eS0vQhadu%2F2EL99M49pUd7IfzifDO9Xh7BpINXxVU4DHnm27BX8PKWeZDe%2B%2FIC7DMP5BKBYIxHE%2BRWzlPsMLLenm1wJ52Os5KF9zCeZMbOTQY0ofxwYmcd9fEbEGlexPKI74gIazuHvNx%2F8mGqdGesFaOpqCvCuiRqGFYUNeeRsjKl5YkUnvcJQRaTPjlIRWahApnCuhJoBGNFuCAixTx8MJfq66QNC%2F9TQ2RorkN6R3XRYAgP7YnuTyiZJFppTGEit3y8TSpBRqJSd55qcRf43cCwERx8i0m9AYxRAeFwaNmsKUk5Ufv7wDYU00LN2ujxl0VjGcHWyu3jfhj9ycDR0683NpxJ3dyGA%2FW2EIENf5tBbWrEU%2BPQvztvMh7MAsdiH%2F%2Fs2S%2FvrH7G22V%2BqpLsuR%2FIZ%2FdAt%2BxvqWILktWcFPtYZGAgArUf21yYGYpTnfSC2o4wkjnowoKa3vgY6pgEh1ZsNCL%2FQa1ry51tLoFAK%2FfPXoA7KtvSMHr5wMUL%2FGifxtkU4vbd5MVCXFZNUmUekYgL7i99qPFHglD7n8jxb6vvXs6WdCia5iBQTeoqPp1rHJUN62ndSUYTRIqgIuQJRbksN3BFo1pcqeW6N%2B8K7rPdOMzVdUg80Yo3KN%2BGGWeaFMu2FFCxX7ksMntN2Ky6JdsbpEZhkA12aNHrRf42%2BEMexhyhu&X-Amz-Signature=77bb7edd9d1fa78fba32cc1c46b6431d80fd38a2c75795b3d2aa9973d113e485&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5RDP26%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5aKJ0Q1dKK2KirABZNw0brONw3LnmpJchHhL0gb9udwIhAJvHSjxHyZ2tlb8eFaUE1ORNr7yGohRDKVjGfhcyRfB8Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwHgeQf6h65pDYcul4q3ANVB2ABp1lBvn5d%2Fsm0GDeUDOLzw66pS7BU8bLk1l%2FxQHXQlS%2BXJZGxxL20vH1Qr1kZI3iPcfzq6Ykp5v25IL7bdk%2Frv7JejR28u5i8UJdLUZTcZvWAusWsAj7c4iGSAVf0m8OyQ2dv2sxLNQe%2BhG5Lii%2BbUYoY97vXekX%2Brq48e1DPkUhmCg99vcn6ftAQoy%2BsUQ%2B6zqOMQ2nMRJPdOpM0NtQVuhPZqn9L0RfKBaxVKeZ%2FL%2FR%2BfclA6%2FHSPq4vSca%2FPyPRwgC4Oa9Z4WD3nh3jFmjYwJdSOmN7ngZIy0pRvo%2B6Cpvy%2BrQMGjyyeXYLbEHCTJpR7LxJs7nwBJEpxmxD%2BbQk4ZimQRpA85XyhP0DrWDWsYQXFu77hRHavSGX%2FRsWvJysMf2w0Faf1s69FdPV1mQR2wHawEEUE4qoaKh%2FUYVgNGAHtsZV9wDsO3cp2fMLKUrB3rySznCZkjKOSjYlOODzsHm7enb5K%2FSu2sGXoeEG70Neps%2FH8x4iyk3QI5fa0waA2IZnnbOX6L2sJgV8XTHvaKApsJaBaHGMSlOm%2FkCPHTZIZdrX4NJrJMmgp9WR97Wg9OXyVaaseqcUUrEVEPQLlyUVw5a0eH%2BMuFv5%2B9THB1%2BBp05WtKR8sjDT77a%2BBjqkAXKhATnBP3BLOsbWJAvGtHoMKWyw8C8rfMoB%2FFKDJunEbT1RrZ2vw0ZEYXLb6yxow3JIB06KeK1691iZ5shFYiIW1kuzDK9v2yVwS7pUzrGg8fFElvtuRDI3VXNnSVbetcrw6rFHZ%2BexLyIo8m2dHTi8WQ4H2IRvjCc1NiYWDu8tkyNO%2FN2qxFXkEcT2ORbDb2kDcXQ1JH9ZLLCQdj6oBSDlzhaf&X-Amz-Signature=626e1c4cf1e643e8f7b6cd6ec21a9c48c98939b549738f1173ba03e1b40f19ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPT25LS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIF9I7kvN1tiamKi6iiXuYijP9sEF24UlKF5H3vSgw%2FfNAiBEYmSINJjoQvc3d6HGmfVKcoRm0q%2FDC1HRBIg7Sh%2BTXyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMjnLyoBcqn%2B1gYtOxKtwDFFxazBMwRhYc4y%2Fw0jvSuO9QLR4uI%2F2yuYH1c1wTnQe7EkVTOgnM9E7MxXzlzGGMUySseWcrmupY1BgsyLfdhTaKDsCC0zmNYetS2yx%2Fou9EhKG7LjhCYMo2k6fGIyjPdHO%2BonpUfdSwj2boDrZMXB1SByRxErEdZGJXDZ8smKjPeUn6FMn5SZkOcAwNpKWejjbPKPi3c5XclvqX3Akge2%2F3xhecOuyWQETvZV7R7sD3AC4grjbm932NgJbnUuo4r%2Fp%2BC6B9pkgqLmwd3oS75sAMY6I222XtD6YQma4Zpiu%2BlnQuzP%2FsfcHoCmGkN5xzx4bqUp3%2F5sdX5ojAO%2FQnZi2oSB4gPAlnvz4p8Z4F7KHT6NThYizhePWuiELqW7VxZ%2FCAS0h57R5CMQchormGMzptFfGpY%2FMbWgOoLGBxcVilLDip6eqp9rP3rUR0q5SkRcAtxEXTJOaiqLyuYKGkT9LUEuRulRt1kP3MhqdAO3zoaWrbSdw7hC5YAMx0OyeY1y1ADs6T%2BYg3bVsSiHmxF2EjOMnQKrVAWF9Pgp2WIPiaRGITTd0OYyecphm%2FtdQGqiDIxgsu3EdtIWUNJvIiUx1OFz%2BoreYvjaHA480tw9BXRK7sjxojOfftXEkwmq63vgY6pgEr9E4TfeeY0eAj%2BMukg3gxuTp0v%2FZlFR%2BSCH88o0YPJ%2BVJsWhkZz8R1wZpIXTKdVqPsFi6gmDWWUj3z2ZlZAscOMcEOXCpHWihh%2FAy06y3ZcGYZTRjKXGeNBFzhIXfcTNaiGTPG3s7PUIYoD4WmosNhDKs4SmV7OvHw6W74%2BNh4vwHTAY1tWEKWPziXsnaolX1RItqGGkDi%2B23mSE1xw7RRxiFVEHO&X-Amz-Signature=9b66b6e19825e3bfed67be90b4f0eebb5de7771100cd6f5f814483d44dab0bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
