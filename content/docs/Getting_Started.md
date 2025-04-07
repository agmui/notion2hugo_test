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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSY4I4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3Ssk%2F3hWXua%2FwnKDUV%2BCMvrdZX%2Ba4J8jeX%2FwtF1hJAiEAvRY8Mu5fdFv7O26h4XA%2FQ%2F4PyViUKrx5gJzBi5UbWH8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKoVt6F%2BRmrLjnKuMircAxbE4tVeFVSt6u4V%2FYk2n5pEfM3Kyc64zql3pEmP7k4PJDg%2FHyy6z3u259L%2BwEGd4XQkrBcG%2BnQ8wJKJ6FRdsmHJUfNrKL1Pe1OWkBuXadSIpbTHcElvx9uavNwwDX8Vf%2F81sRg2FP7WYn6EbQwzVvrywx0on31%2FEcoXI9Ueu2bCSY0m%2FPzQNR%2B%2BOPl8kvy4NcKeXDp9ZYLcEE4qlmSTGb6dkV3EqBVzNjkyUDSCNJL5h%2FPqcOVCgPDJjRxLMv1sXRgy7PCCrpFxxpDXaENWE4JRIjo8QkbuaCAS4jIX8txKAAuHkCF740pNMJnfz%2FMwaV35FegY%2BItElk9MrT7bJ7rHatrhInSwiDQ8iECnoEz5bI9MhkqxSEyCNZbnGvFSp1us6XLge2e1zHfGSen5DYz7f1ulL77CCg%2FADcqeC9Kjckd8q14YFohQa7j2sf5PXgfJudejBiSrUMVrS8ehhSlMoxOvgkgeuChzhoC4m3b06aIxkoIunenO2Awtx460Vq2nlXXvqRugY%2FZrJ29xsQvi5IRESdlY5e3wtouKEEbREKeRLQH6zQCNYl42nYV4mZnsZJs2YQCGH3Waqw4hsihxO8V40t3cdZ%2F6s2T0Ma72htBGF31hNqhpYkoKMNOFzr8GOqUBkMj1%2FXUoz0Pgc4KvTjj%2FLQXqy1ZkiYkj5heT2wQrax%2FRPPxCVjBSgcSlxbfpmkzgCTJ%2BXQC2mzUAg%2BFnid1j8KwV%2B6Yex5cJdf2lPQbFDD7Hn33F2v%2BSXE%2FOZ9n58JBIdm1u5n8h2n76q2SZWr76XC7is1INEpQJvVJLOUfgUpP87dfLiycyrgnu3%2FpWpGN3VZ%2FGQ3smEb7qA%2FtHGgOkCwgxnNer&X-Amz-Signature=6646bd9c25637d005397f7f8d35f187e2bd6dc8d479b11577c8a484d59f07eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSY4I4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3Ssk%2F3hWXua%2FwnKDUV%2BCMvrdZX%2Ba4J8jeX%2FwtF1hJAiEAvRY8Mu5fdFv7O26h4XA%2FQ%2F4PyViUKrx5gJzBi5UbWH8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKoVt6F%2BRmrLjnKuMircAxbE4tVeFVSt6u4V%2FYk2n5pEfM3Kyc64zql3pEmP7k4PJDg%2FHyy6z3u259L%2BwEGd4XQkrBcG%2BnQ8wJKJ6FRdsmHJUfNrKL1Pe1OWkBuXadSIpbTHcElvx9uavNwwDX8Vf%2F81sRg2FP7WYn6EbQwzVvrywx0on31%2FEcoXI9Ueu2bCSY0m%2FPzQNR%2B%2BOPl8kvy4NcKeXDp9ZYLcEE4qlmSTGb6dkV3EqBVzNjkyUDSCNJL5h%2FPqcOVCgPDJjRxLMv1sXRgy7PCCrpFxxpDXaENWE4JRIjo8QkbuaCAS4jIX8txKAAuHkCF740pNMJnfz%2FMwaV35FegY%2BItElk9MrT7bJ7rHatrhInSwiDQ8iECnoEz5bI9MhkqxSEyCNZbnGvFSp1us6XLge2e1zHfGSen5DYz7f1ulL77CCg%2FADcqeC9Kjckd8q14YFohQa7j2sf5PXgfJudejBiSrUMVrS8ehhSlMoxOvgkgeuChzhoC4m3b06aIxkoIunenO2Awtx460Vq2nlXXvqRugY%2FZrJ29xsQvi5IRESdlY5e3wtouKEEbREKeRLQH6zQCNYl42nYV4mZnsZJs2YQCGH3Waqw4hsihxO8V40t3cdZ%2F6s2T0Ma72htBGF31hNqhpYkoKMNOFzr8GOqUBkMj1%2FXUoz0Pgc4KvTjj%2FLQXqy1ZkiYkj5heT2wQrax%2FRPPxCVjBSgcSlxbfpmkzgCTJ%2BXQC2mzUAg%2BFnid1j8KwV%2B6Yex5cJdf2lPQbFDD7Hn33F2v%2BSXE%2FOZ9n58JBIdm1u5n8h2n76q2SZWr76XC7is1INEpQJvVJLOUfgUpP87dfLiycyrgnu3%2FpWpGN3VZ%2FGQ3smEb7qA%2FtHGgOkCwgxnNer&X-Amz-Signature=b4c74bd6175ee1d7add9ee0b0b23c169ff6ebdac8601ec02568690b8896940a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJT5APT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYSbNQ5%2F1IQdOrMqykSGreoVK29Nk52WrfvzD8wg%2FxCAiEAwJ4TZwinSvz4ef9WQNvwevjvYySB%2BE9niiHZCfC0iioq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNPgaoYF9YpjEsvrhCrcA%2BtTLPNorZUw8HX0UnMkvPIBuxk9SGW5tZUIYgWw2H%2BBsZUlgujgzUOoYkbyZYLltQqGA7gTyXUtB55qwgT1QU8wrvJMKsyYS8CB4%2BoRzIwQ3Rnl2VrqV1SilJzKpMEfO3ueFv2OLqAnI%2FgkQqHsKJd7zYljm7UnCC4%2Bi0FlVONvyqjxB%2BYquMdWQP9W%2BUoAOCkVEkUEGXYbqxs7CrHjRzq6YqR0SiNDETA6nWu7SyWkXunztDwhIF8GZ8oWxEacezPax57wLwfdLjSxid2NCE4QANrhS0F03qTr28%2BY23bWnf1MLy1utza5Z4XaPbuodYwMnSI1KzVnUKe8pMXhWQuvXXS9urRs%2FGo0wkx8MJeVbvMX9%2BHdWEJhk%2FwGXAxjplsWMCJi8Xs3e26gsk9MstMv%2FT%2Fu6jfT%2FOrq9M%2Bqle2H7H9hPTjU9%2FkvbnO9jbpS%2B9sA%2Ffpz3An%2BVveR7jaL6fcW1sK3E8DgHR%2FVrFR8bVFA8f4bvLBo9vul8HAxfUhDgGlnaO8NXxZoUBumwRzO1tFE1HHtdeDFPlbPXnQOmilUJ7mrcYG%2FiZpy%2F3WGWTWoaVYwdi%2Bl%2Fr8lm8Z3x7vb7CMVWaVHhhawf7A15mVaVyjX9qEqL2omp%2FmK4lmBMNaFzr8GOqUBokNJ%2BkRjuXvY64BlOh1MtBb1gHjyG2WmK%2F%2FPAQFq0wY%2BsMVZWgR3sYnojO6uwS%2B3ZP%2BnCLqp6Zrk9nW9wW1kXQdTUClpa52x%2BVgcWOiPzIJUTcaIjYipd3VYveg2rEAoDyVFAd5cvHIV8F65KYSapt3MGJrQphu55z8fkueca38wnFymju7qxTJ3VsODX1dh2r59HtHUf5XKg8eAc6O%2BycRO%2FWvS&X-Amz-Signature=90b0161e5f3d65c743eb634a220d40300ad378ad62b4a30149f1d38e1f9a4b70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDIUIP3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnnb%2BPSVW5C%2BJks5uE%2FOgotfecNFLzebym67uTeohhKAIgSbd3w5MunkOhhuBhcdKtQYJ8wB4Gte5%2BrxQjgPAr1j8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHNFVjVZSn%2F%2BKjDp0CrcA0gWUt9QAYBDpSmvEDws7822iDHciPVD3vCSyBhtjpO5j7A3vi0Mivu2RUSSIF8Mf2GEYcgQE6Hl%2FM2HtYQKzp8pHGpVtqkm878pLBPTfn6d8Z2NIgDEVya83spNknwaz%2FrhXlgUjEEGBNAtWcHNq08aC33G82XjWABguE6TNzFYJh4FjdbW5k%2BxWeD0PiqqpgX%2Fb1dkhHlmc2B%2FUVbNNw71y6Mb0YxMb1hSnm0R%2FfHVVpLnY%2FvRqcM2Vghd9uQ6%2B35jox%2FDjN5zxA8UQfNm8OzSOTZQB4L%2BZ9A2EeJl%2B%2FtLIMWyT3bG0kGpNQEPHNs5DxTI1p8GTjulOfRhLRCSldX8VP9CsLxok6xJxIBH8yf9MyTeYy2zW%2F7oRDmDAi4uNstQi6Bl8u1tkeHYUB%2BdRuvRJy8Xx1jP0dK0%2FqBdA6D4uAxvuza0HW8Auiqr2ChXzBRpesol0aYyrcIGmFAJA8y1NLXPI1p7oi3HrIq5JrRffIr5%2BOuVW2SxICaZxTZfeHCapnCF4T9SQkMX5NFyJ%2BZjZIkVlWLvADnw1g37gY1MQ0gVsfUlSsVsW5cUu6ddW2OeRWG9b1oPgBItSYJycvUtWAPtU%2B9AsiXcrRCJ8daqGzzbl4gOBWMgf7mHMNCFzr8GOqUBO5OOmkPmetj7wLKpZRgIA6PIUZbmAyPEtbtXdGiIdltDwhOnSZQ802LxFiTa3j0tD3QD8mIjoUvb7yPZNQhO02QvFgYHuqC%2BKHQf3DCOU9P15OaMWB1GRK9wr%2FCDatgza0MEhV99%2BlBlmTj0z02VixYXcm%2F6UNLpJtwXe%2FWwVS8TCuaCz%2BwPjNhTxEHC1umMqVLy2%2F8NO%2B4pEnAs1OuEtcDrbTY5&X-Amz-Signature=607c29c818ae6979ad2c0e83736f322e8305560f01fdf56b4d2904bde3f2736d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSY4I4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3Ssk%2F3hWXua%2FwnKDUV%2BCMvrdZX%2Ba4J8jeX%2FwtF1hJAiEAvRY8Mu5fdFv7O26h4XA%2FQ%2F4PyViUKrx5gJzBi5UbWH8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKoVt6F%2BRmrLjnKuMircAxbE4tVeFVSt6u4V%2FYk2n5pEfM3Kyc64zql3pEmP7k4PJDg%2FHyy6z3u259L%2BwEGd4XQkrBcG%2BnQ8wJKJ6FRdsmHJUfNrKL1Pe1OWkBuXadSIpbTHcElvx9uavNwwDX8Vf%2F81sRg2FP7WYn6EbQwzVvrywx0on31%2FEcoXI9Ueu2bCSY0m%2FPzQNR%2B%2BOPl8kvy4NcKeXDp9ZYLcEE4qlmSTGb6dkV3EqBVzNjkyUDSCNJL5h%2FPqcOVCgPDJjRxLMv1sXRgy7PCCrpFxxpDXaENWE4JRIjo8QkbuaCAS4jIX8txKAAuHkCF740pNMJnfz%2FMwaV35FegY%2BItElk9MrT7bJ7rHatrhInSwiDQ8iECnoEz5bI9MhkqxSEyCNZbnGvFSp1us6XLge2e1zHfGSen5DYz7f1ulL77CCg%2FADcqeC9Kjckd8q14YFohQa7j2sf5PXgfJudejBiSrUMVrS8ehhSlMoxOvgkgeuChzhoC4m3b06aIxkoIunenO2Awtx460Vq2nlXXvqRugY%2FZrJ29xsQvi5IRESdlY5e3wtouKEEbREKeRLQH6zQCNYl42nYV4mZnsZJs2YQCGH3Waqw4hsihxO8V40t3cdZ%2F6s2T0Ma72htBGF31hNqhpYkoKMNOFzr8GOqUBkMj1%2FXUoz0Pgc4KvTjj%2FLQXqy1ZkiYkj5heT2wQrax%2FRPPxCVjBSgcSlxbfpmkzgCTJ%2BXQC2mzUAg%2BFnid1j8KwV%2B6Yex5cJdf2lPQbFDD7Hn33F2v%2BSXE%2FOZ9n58JBIdm1u5n8h2n76q2SZWr76XC7is1INEpQJvVJLOUfgUpP87dfLiycyrgnu3%2FpWpGN3VZ%2FGQ3smEb7qA%2FtHGgOkCwgxnNer&X-Amz-Signature=1e68180e3c23934a7ea13ee09cf2e206b62afa1e88d68f461363e46e22df89e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
