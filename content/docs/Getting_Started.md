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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=8e5089de92075b602475a9b50dd7bcb86241dac1e423d32127811242ed55c8b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=3adfe8553a920a052c370d3b1d462b9c8fb227a4f5ea9c867f6b3d4c329e885c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZEGQJU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyQMeexJT6xjL8ht12IxVT%2B%2B2098Sw3NU16Hnbu0affAiEAtddvtFRc%2Fbl0znLnCjTQ26108K%2BVIXKiW%2BZQCLMR2%2BEqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoBhv67%2FUmCw%2FTP%2BircAyQAh%2BvBxV0pj1Rc8cF%2FiCp8ahehCdEjl%2BN7e%2FlIajMdipwo9zToPWKrTdF8S5GpRHBSMYH%2B7012Z83kE8YcdRJholh3MWlB7alToXv4Ec%2BPO8pFH%2BYgoHayAckk34lAzTuQHPDzMmVKjVz2CilosbUjnhliQclzt4LySArY%2BejjzJF78sAFsqVSvNVcqI64Lemu1t2xkmgwZ5aFkX2nPYdyW48bfQemF4rPMkkyJfRaHjdamlyVQbF%2BpgPnfDNQ5rrOooMuf8%2FoXvnqunCzURU1evZbJ%2BMn4a9sqTDp0oAqJ%2BJ7ieLiwaOOgvV1YqAgdgzUz%2B4suf6fwr7xXNE8vl80CZdtOCiydN1qBBFhWNDSgoKmds8%2Bd46TI9ZQ%2B2I48aIoB7MEdWTaAKf%2BSlsqnv81rFBZJo70h6K4mSsXRC8CkolKpXEPw%2BM5nB8bcInxgT0fqtDlg2jcIkAJKNCkOuqHLXFiIEkLLJajAHUwLRyV%2FaTjySNF7FBYQOhd7LkM9uEWlEOn%2Bv9HKNLhnBM0X7WlicXesJYkFVoRq3zL%2B3HOmfqILuOo7RIE7xCvvBzzL5B0MBmOonzndWOjjTEuJ9Q6e5WnRV%2Bm%2FS7pXRiluY2DhOyBoTGlzgchMwqbMM%2FF6rwGOqUBnCDQKDz2T4zUtcFohP1pe6exXM5G7prXznjbOy9oJ2ZPZ7TNQln9%2B%2BKNuN%2BMCsQH%2B6dR5ZdrWEnrVh9EhracuWB%2F6uT792BMaAdKEFrM8kl%2Bbz3%2FeIWjnqHj2r0%2B6%2BfHfGSb%2F%2BkI6UdGjHllyWz7BmQgOzSCLI8PlafxhiSnLd80XmdHMghtAl%2BeANdEsXGkk%2BeVOjWWlfz5iO5B1Jkbg8ZcNAQ0&X-Amz-Signature=5a00df855719a7c4b5e219f12dbc5c24b27c4c3bbc2b5129bffdad1ddfa2812f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZYJ5PL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHQub1ynKTbGh9GlR1LaKaSlk6d%2FX7wF3mtODU7HZJOAIgEK2mGaW8LN1iQJiEFn6JatIQjWjNJLCXJ3BhOZlvbzAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvVfqOpmdw0aN82QyrcA4ga%2B48Azp27d62nif5waPVSUCdIIDDY%2BOAez0KNH%2FPfBdF6rp5mzgeOcDOLEA4qV%2FMfv7QR87jLKuimJjQDxJwlPzqTpdumSP3c4MvHCStfcLY9WSctQIXPCSC9nioujrriyvips2fU8UVd2NdYJCxf36jIyfesB42eY%2F%2BthP52hEOiait9BVLWKpCHGiXNUCrQJJuFZWupItBCWehl8KRPZwof2pYN%2F2MmWLLCH7hIzRjpekFMncmffgQtGmnFR6be2xXzxKZbq5EFgtjQBG0ZU6JU2fdfQXrTbjOKE%2F50q2ZmzBf%2B%2FHRt8XCCsNitya0R%2B73%2Ba%2FEL4t6%2ByRqpnEy6dJ1ligaCAQU3ajPbdeHiGNvkREKEDBi3cMz0iErevHTaL%2BjTASg%2BB5MoX5ERRp0iG05aDHrCGPPvlobSsT%2BEcNGoFdD3eZlwuoY4L2uqtjOtYX1TzEmJUY9rC14W6tESo7x9AGlV81iSyZUgMq6m6wP7lkaC3p%2FIn6v4DcwtGIMS%2FMzPvKNaU7YwzBHyZlE3Gnc5xoksc4T4jqnutMouv8BA%2B%2B1wW5bJT%2FAaY5lgkOz6su%2BeEz9tAUzXxIBkcA%2BWVYk21G3Sih4IKloLoeuQ0ZYPjcxkMLOtdPLgMIfG6rwGOqUBXRw1sqMKHEnQhNJNffZJXDB41vblsKNjv1FeX5FCnIFNcU06sV6ygv3uoZt1la5w6LeDbDjVSqj6iEB5cxcWN46UojuSqvAhUk4E5wnQxOnCwqOyz4%2Bh5x8xqSNdylGdvZI4uV9to7aUaI26phGPxWNpEgsMPgpLhCcC6Ee5XDeSmN%2BK6wL%2BWTQlq3Ckx2nCUo8iul5tF3YPbYzSDu9Ye09S1PsO&X-Amz-Signature=2862634dff62f3614b7cb7ae81475556853d3f8f49b58c5c038465446e5b6c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=67356df29ae4fab0f9e4127fdda2e3eca75cbb4dc01781d30622164a454470a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
