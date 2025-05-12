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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRDXXEG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD40icA15ZPPcsTQNweIV%2BDsuhfSlzS1V5FFFfH0UV4IAIgftEERLiL2oMhdalXo8POmYqAjHDYeu6dwo6g4pTStNsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQpREolw7qPbNxOgSrcA8rpxHyD6LYEE%2Bar78NRHzBg7WDPtfjiDg2ZTvfdSTptEZPYwtC%2FhOM%2FARR7rgMo9vpniAwa3K%2BgEhc2ZyAahZtQgG9x39zB4%2BUBWeTZh4k%2B%2BL5hBlIDPXuHvzODSWavxGNyCHbK0bI3hTnzdP0Y3zMVwalzOFir3sCYsMhglACkmEW%2F1DRqS6izGgsqngxAQsD7qWFqSrrPwja%2FtbibpSp1sjaSTMf2G3L8cvbbUi75rMhuSIRexgA%2FET%2BUAAqjRpEMt3836ZxsL4ikVSUzBUIpj17sLEaAzGGOgk1k2KpnpUYeZzI%2FEZQ07JCgdvGIN3nu9XIbF1KDf8xsPzmKiadgLpCw3nIqROxb7eCWql%2B5OELvozEwGWgqFwUvXIx0BHJzGgJaWigxO8bWK3f%2Byw5HudqKjdAwL1yBR%2BE%2BrMVGSx1g%2B9Y%2FO%2BbbFQCwAOe1Q7mKHcg4JOsU6WzPjh3WLS9Xml%2BmNx%2FWjsGkuP8rWUmbEVBd6xSPcRmnuJX63OaH%2BAOOMleMjxnHPZMOKX4hV3BMytMSc3OcZSjdKi1Sl4Y5H1KmyhKLxZBSTWgliufc%2FCehl4pfFRWxjKiVVMthaBBqzlzHx61C47IbPp%2FjPuFc%2BJwTiWcf1jiQEqbIMOqEhcEGOqUBM3ZA%2FAuCxkHYL7OWPuLPbI%2BKbmaajtlrEZo5rIfL%2BUwyMdGzU0LgoESv9jQdp10xf3Hu2WiJQNFukv%2FkwF5i1rmLB4zdCGArByiVSjcbHSNo1i2UB8EsjioqocFwfmivG5GEIS%2BEtxKpCeXnoqf0AdXCbwKMuOCzKEHpJ7W2T6pzJl8OkEtcCTmVywqpkG32rOs%2FqkJtPtePBQuo%2FEY1yMfnWvBX&X-Amz-Signature=e110668508116d107576bf46e67293d9749e27e98f5886dfbe46fb3265f686ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRDXXEG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD40icA15ZPPcsTQNweIV%2BDsuhfSlzS1V5FFFfH0UV4IAIgftEERLiL2oMhdalXo8POmYqAjHDYeu6dwo6g4pTStNsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQpREolw7qPbNxOgSrcA8rpxHyD6LYEE%2Bar78NRHzBg7WDPtfjiDg2ZTvfdSTptEZPYwtC%2FhOM%2FARR7rgMo9vpniAwa3K%2BgEhc2ZyAahZtQgG9x39zB4%2BUBWeTZh4k%2B%2BL5hBlIDPXuHvzODSWavxGNyCHbK0bI3hTnzdP0Y3zMVwalzOFir3sCYsMhglACkmEW%2F1DRqS6izGgsqngxAQsD7qWFqSrrPwja%2FtbibpSp1sjaSTMf2G3L8cvbbUi75rMhuSIRexgA%2FET%2BUAAqjRpEMt3836ZxsL4ikVSUzBUIpj17sLEaAzGGOgk1k2KpnpUYeZzI%2FEZQ07JCgdvGIN3nu9XIbF1KDf8xsPzmKiadgLpCw3nIqROxb7eCWql%2B5OELvozEwGWgqFwUvXIx0BHJzGgJaWigxO8bWK3f%2Byw5HudqKjdAwL1yBR%2BE%2BrMVGSx1g%2B9Y%2FO%2BbbFQCwAOe1Q7mKHcg4JOsU6WzPjh3WLS9Xml%2BmNx%2FWjsGkuP8rWUmbEVBd6xSPcRmnuJX63OaH%2BAOOMleMjxnHPZMOKX4hV3BMytMSc3OcZSjdKi1Sl4Y5H1KmyhKLxZBSTWgliufc%2FCehl4pfFRWxjKiVVMthaBBqzlzHx61C47IbPp%2FjPuFc%2BJwTiWcf1jiQEqbIMOqEhcEGOqUBM3ZA%2FAuCxkHYL7OWPuLPbI%2BKbmaajtlrEZo5rIfL%2BUwyMdGzU0LgoESv9jQdp10xf3Hu2WiJQNFukv%2FkwF5i1rmLB4zdCGArByiVSjcbHSNo1i2UB8EsjioqocFwfmivG5GEIS%2BEtxKpCeXnoqf0AdXCbwKMuOCzKEHpJ7W2T6pzJl8OkEtcCTmVywqpkG32rOs%2FqkJtPtePBQuo%2FEY1yMfnWvBX&X-Amz-Signature=f4945f73ade272c0125fe5e3082e3ffcdaaacd4e8786b50a122a036c27e08a10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRDXXEG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD40icA15ZPPcsTQNweIV%2BDsuhfSlzS1V5FFFfH0UV4IAIgftEERLiL2oMhdalXo8POmYqAjHDYeu6dwo6g4pTStNsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQpREolw7qPbNxOgSrcA8rpxHyD6LYEE%2Bar78NRHzBg7WDPtfjiDg2ZTvfdSTptEZPYwtC%2FhOM%2FARR7rgMo9vpniAwa3K%2BgEhc2ZyAahZtQgG9x39zB4%2BUBWeTZh4k%2B%2BL5hBlIDPXuHvzODSWavxGNyCHbK0bI3hTnzdP0Y3zMVwalzOFir3sCYsMhglACkmEW%2F1DRqS6izGgsqngxAQsD7qWFqSrrPwja%2FtbibpSp1sjaSTMf2G3L8cvbbUi75rMhuSIRexgA%2FET%2BUAAqjRpEMt3836ZxsL4ikVSUzBUIpj17sLEaAzGGOgk1k2KpnpUYeZzI%2FEZQ07JCgdvGIN3nu9XIbF1KDf8xsPzmKiadgLpCw3nIqROxb7eCWql%2B5OELvozEwGWgqFwUvXIx0BHJzGgJaWigxO8bWK3f%2Byw5HudqKjdAwL1yBR%2BE%2BrMVGSx1g%2B9Y%2FO%2BbbFQCwAOe1Q7mKHcg4JOsU6WzPjh3WLS9Xml%2BmNx%2FWjsGkuP8rWUmbEVBd6xSPcRmnuJX63OaH%2BAOOMleMjxnHPZMOKX4hV3BMytMSc3OcZSjdKi1Sl4Y5H1KmyhKLxZBSTWgliufc%2FCehl4pfFRWxjKiVVMthaBBqzlzHx61C47IbPp%2FjPuFc%2BJwTiWcf1jiQEqbIMOqEhcEGOqUBM3ZA%2FAuCxkHYL7OWPuLPbI%2BKbmaajtlrEZo5rIfL%2BUwyMdGzU0LgoESv9jQdp10xf3Hu2WiJQNFukv%2FkwF5i1rmLB4zdCGArByiVSjcbHSNo1i2UB8EsjioqocFwfmivG5GEIS%2BEtxKpCeXnoqf0AdXCbwKMuOCzKEHpJ7W2T6pzJl8OkEtcCTmVywqpkG32rOs%2FqkJtPtePBQuo%2FEY1yMfnWvBX&X-Amz-Signature=957cda44c2efd939afc684ef42e14df97a1d1e45b7684f4106b297811acf8bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEH4LBU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2FmPFF2lKtZUGSoHqZh2VgZ4D9NdUrf3PW71YqpKTH7wIhALMimkkOSGwU5sEHBY755PgkE2I%2FDKzMr96FO7e4SrBaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu9KHjWpKeVNsSmLgq3AMkrPjQKG9Zn7yu%2FTTyI4U%2BnbAADpxaXhp%2Fa8Pj24dB%2BTx1QgKCwHKmJvOYT3f%2BC3Ce4N23lpCZX3JtM%2BNiJdkAAFZz4WYzXoLkMfJ4tmfhq%2Bew0nVJNkw3%2BF4%2F0gprZkKAmmt2t1jfVk6dn9%2FC3zuL0Fxe%2FfroPpCjV%2FjL%2BXd1iVQaX6mkEZq7kFLpYHO7UbzPjMh6SYk%2BoqtJ8e%2B8AsKRe7lcgyTryNKyqwJGOpAh0M6cnoQZXMMGsM%2BKffsvv%2BgOojVATr4DdRwaCDqO7ahb2WdCF93GaGR34nGyVEwUInmDpeVpQSm9RP7QhK1lz%2FmEbrb6ISdSng9GER8JJNzOPKIXhS%2FUpiZddLSUWFYD06B2tRxZNP8vXJtnbLBrlyc9k6uCBzFQvGOwctUroYC1TKRWDXUor1RTqIgnrp3JhR4DzWCKFQJpo82JiPdZsIdVlzMJmMeUHuvQmue4s8TPz5P10UrodQ9COqdn1%2F97er15vRMJZoTFPFCSsTTeCfRA%2BIp9rea%2BtlgV68M8goX7juID8IJNH3C%2FvgXPNTWk9EbTqSGkfjseckcvx26IPcL7bmlF8G5z%2FN8qj%2FpEdevxZYUUZjMxaxLOjhBrOrqnHquSf4FddqlxGNdxsTDHhYXBBjqkAalL%2FWvABvXhroIJbR8yGZ0GwuqvwW7vq5xKFytv%2FTaIsyHYOdpqD1PDNx62pfjQTzvE3NFTtm1uCDIMK7TSsBxUT7jF2sxkf4Kx9be2iTftB6xsTZJk25qDan%2FSF66grMxozgZ1xRIo4XyZDpnjP4GdxxJU3RTTmNmt4E0UvNvEYGzMXbo9NhH1yKmhkxia5s3KM6%2FbUymLQLjwkH5jnWtULwiV&X-Amz-Signature=167ab3efe0122a841549f518f44e2abf072b694ee0cc36567720b7963f1c08c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNVUKCW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFiVTMz6EcHkw%2B4g%2BDn3qDH8uM299Fxd6oYBlD6PQEYBAiBhQpndznbsOSxj9jl6fTZqP%2Bj6JvxJXVGrqzLOKXc2fSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5f3EqcKRBY2AslSqKtwD2MTGmbiDr%2Bi5xjejJh61QKm6gSabsUbKLvWD2h4ge588bl5h0QnBRSpmEGAXAU%2Bn2mdCgRNAfSzWi0bC6d%2BKzbE76n0d2tOaQb9MOowuhu2g%2F5X9RnAodxYVvzIdHBOrrsSB%2FFnvlC1PRlIRcPy1HNkr0%2F%2B4cQDOJnyJkHVRa0J8CE9fJ%2F0YEDDOEdGLB4zOj7ykhzgNvdLo5BZ9wIFCD1eW5dvqiIx7IhnIB3PSaBrDuPu8MLwEplnfGkt4Tnq1wXovvYOn3s5KXe7Iw%2FyvSdwCvckNSLm6DFw1ThRls0pD5wWjF3uEKZglut%2F4%2Bq%2BmxxlFGDP4hKMON5dJOGO37kKCiMErhI9xwA5%2BQBNcnoHmpb0X1Wdx5unpHVb4Ir5SrGWv628gO356J3%2BkLM8NdedXWnp0yLkD3wDw%2BkDKfJF4qMPXc15QusMOpgN2LT29FHhm2NYtPMocOK2IkZMW74%2BYw3uBjyve0Ox3z7ABXAUpMe14HgXgC4vcvxYNOWA2q4GKGlM2%2Br5%2BrT5UGeW7X4uq481r27pjkGE09HHD3wzZrD8agoWQ3MhsflXizOlWaQol4Tyo4HZWwQLxKQNHaF9kKn2%2Bnl4QaBZ%2BB%2FElhW%2ByyIdhDYQbD7DqAf0wh4WFwQY6pgE%2B7y2WIfqI%2BX1tktafhK6gkYI%2F0lybGTlwJ7iFaK3R1jrcPA%2FdNUjLi7IV%2F0S5GLaXtsljIBEcofWLBxNARyLjNFLlkTEagnV5lTLlIEHTQCsSNy8b136RzvrwCQ2TBobgq3hapCuXdwAMSfhXAMgBYH6OXnJNFoSoO6pa8Vr5VvC7TA6yCsrFon2UTvDtINqV96O65q0IdYXtjQFV0ywfT8wVGUzE&X-Amz-Signature=b2dc43b3c0a5b3b9ef6affca9164cbcd67814f9aad4f619f988129234ee0299f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRDXXEG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD40icA15ZPPcsTQNweIV%2BDsuhfSlzS1V5FFFfH0UV4IAIgftEERLiL2oMhdalXo8POmYqAjHDYeu6dwo6g4pTStNsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQpREolw7qPbNxOgSrcA8rpxHyD6LYEE%2Bar78NRHzBg7WDPtfjiDg2ZTvfdSTptEZPYwtC%2FhOM%2FARR7rgMo9vpniAwa3K%2BgEhc2ZyAahZtQgG9x39zB4%2BUBWeTZh4k%2B%2BL5hBlIDPXuHvzODSWavxGNyCHbK0bI3hTnzdP0Y3zMVwalzOFir3sCYsMhglACkmEW%2F1DRqS6izGgsqngxAQsD7qWFqSrrPwja%2FtbibpSp1sjaSTMf2G3L8cvbbUi75rMhuSIRexgA%2FET%2BUAAqjRpEMt3836ZxsL4ikVSUzBUIpj17sLEaAzGGOgk1k2KpnpUYeZzI%2FEZQ07JCgdvGIN3nu9XIbF1KDf8xsPzmKiadgLpCw3nIqROxb7eCWql%2B5OELvozEwGWgqFwUvXIx0BHJzGgJaWigxO8bWK3f%2Byw5HudqKjdAwL1yBR%2BE%2BrMVGSx1g%2B9Y%2FO%2BbbFQCwAOe1Q7mKHcg4JOsU6WzPjh3WLS9Xml%2BmNx%2FWjsGkuP8rWUmbEVBd6xSPcRmnuJX63OaH%2BAOOMleMjxnHPZMOKX4hV3BMytMSc3OcZSjdKi1Sl4Y5H1KmyhKLxZBSTWgliufc%2FCehl4pfFRWxjKiVVMthaBBqzlzHx61C47IbPp%2FjPuFc%2BJwTiWcf1jiQEqbIMOqEhcEGOqUBM3ZA%2FAuCxkHYL7OWPuLPbI%2BKbmaajtlrEZo5rIfL%2BUwyMdGzU0LgoESv9jQdp10xf3Hu2WiJQNFukv%2FkwF5i1rmLB4zdCGArByiVSjcbHSNo1i2UB8EsjioqocFwfmivG5GEIS%2BEtxKpCeXnoqf0AdXCbwKMuOCzKEHpJ7W2T6pzJl8OkEtcCTmVywqpkG32rOs%2FqkJtPtePBQuo%2FEY1yMfnWvBX&X-Amz-Signature=afc38be1a1997031db7ccdc5d0211afaf2eaa8046e14bf33086e36acd79b1b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
