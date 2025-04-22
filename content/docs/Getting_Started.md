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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LKTVH3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICVNrQwOEc8cvHefFxA7E4KTZRsuGKSRudZVwLDMOPcNAiBfIKDbd6AK45LFqxhJcKKwMJ95RndHFzhjyafV%2FfIhSCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbdH7k5a5oBWml0tKtwD7LxBrsuRDtfKTEx2bc0CIZrO7QgPiGE1b0sSBVit4%2FaAQ7WpQjWac%2Beiu%2B3%2Bkwk7E5J5XVCzvCRGHCli8c0gEc0BmQYBTC4U6IV9az49afZu%2FLFT3IIw0CUEJC0yVwA%2FMf0Mzn0WOz2AN1dPI3C11Vu6ZEomwVeY1DtT%2FPlZipHKzxAV%2BaT1nmsLVfzQYcDkMaRsxTbXmU08t0uZBUmQqKL4mGvBZhB1xLh8EHEMtMhLOASMMWTbRt9qBLfOhTBKnc21CpVLzpm5a7PEEm5UxWO5WRUXw81yaCE5WWWTdH%2FCm3uvMvqAH2RKkiHPHzJBooeZC7hIErXju%2FK6ole7FOGFWpbz3B1%2FTv3U%2Fyhe38y6hkXZajX%2Bs56PWAIQOxPdORDlTO7kX%2FF5mC75RQSDYPNEMFIkJwrDpg9q2TwDj2ld4%2BMbWwk35pzSq7eb4rXmGJL23s9WeXWsn6g%2FJryWHamfQZK4sSsZIQJvE%2B5WSsHNCsohAp%2BzsKuosNxNToSxRlBz00aUk%2BzoT1u22mFXhnFe85kToLyc9ZYmJqEBR74nrcOHt%2BzHZvw57lv%2B843cFejDuSKDRdLrojiPMRVb0KKywRAR2cwQUXGM80flM%2FU4hXJPG9qFQ%2F4nbv0wqIqdwAY6pgGew5u%2Fl8cd7cUAj%2FpieepFwB4mnjKcLppyh9BvqUrzbPPg9qAHHRxjZh%2Bo%2BZyw8Uw21OhX9LasJDx5HFeOwjAxLj6Ww3crmOjV%2BUEYIXTUlnvY0y8PmMMCnHpq6ofDoSLBOkeU9hipgLPIPCVzxWMART4zHxnoRdiXdfATdVxJ%2BOPPFPVxE6xbpO5u3zgXNDGAnbg20BzoOfKN3td3cgCymSI7Tyyx&X-Amz-Signature=50ba1e32dc08cfd6b048d0c0468c89249b67b7b9e55076a16acd61c7406ef6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LKTVH3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICVNrQwOEc8cvHefFxA7E4KTZRsuGKSRudZVwLDMOPcNAiBfIKDbd6AK45LFqxhJcKKwMJ95RndHFzhjyafV%2FfIhSCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbdH7k5a5oBWml0tKtwD7LxBrsuRDtfKTEx2bc0CIZrO7QgPiGE1b0sSBVit4%2FaAQ7WpQjWac%2Beiu%2B3%2Bkwk7E5J5XVCzvCRGHCli8c0gEc0BmQYBTC4U6IV9az49afZu%2FLFT3IIw0CUEJC0yVwA%2FMf0Mzn0WOz2AN1dPI3C11Vu6ZEomwVeY1DtT%2FPlZipHKzxAV%2BaT1nmsLVfzQYcDkMaRsxTbXmU08t0uZBUmQqKL4mGvBZhB1xLh8EHEMtMhLOASMMWTbRt9qBLfOhTBKnc21CpVLzpm5a7PEEm5UxWO5WRUXw81yaCE5WWWTdH%2FCm3uvMvqAH2RKkiHPHzJBooeZC7hIErXju%2FK6ole7FOGFWpbz3B1%2FTv3U%2Fyhe38y6hkXZajX%2Bs56PWAIQOxPdORDlTO7kX%2FF5mC75RQSDYPNEMFIkJwrDpg9q2TwDj2ld4%2BMbWwk35pzSq7eb4rXmGJL23s9WeXWsn6g%2FJryWHamfQZK4sSsZIQJvE%2B5WSsHNCsohAp%2BzsKuosNxNToSxRlBz00aUk%2BzoT1u22mFXhnFe85kToLyc9ZYmJqEBR74nrcOHt%2BzHZvw57lv%2B843cFejDuSKDRdLrojiPMRVb0KKywRAR2cwQUXGM80flM%2FU4hXJPG9qFQ%2F4nbv0wqIqdwAY6pgGew5u%2Fl8cd7cUAj%2FpieepFwB4mnjKcLppyh9BvqUrzbPPg9qAHHRxjZh%2Bo%2BZyw8Uw21OhX9LasJDx5HFeOwjAxLj6Ww3crmOjV%2BUEYIXTUlnvY0y8PmMMCnHpq6ofDoSLBOkeU9hipgLPIPCVzxWMART4zHxnoRdiXdfATdVxJ%2BOPPFPVxE6xbpO5u3zgXNDGAnbg20BzoOfKN3td3cgCymSI7Tyyx&X-Amz-Signature=0f7cab8de47d72025abc980849db8e820edd639d62d0423a77fafa425fb6f788&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DL3HHY5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFJ%2Fe0zT3j%2BNIh6KjQGKLsIW8oyusTx991kvcVFCPD3SAiA638nXN0lk279eYO%2BwSFs9H5m4UJh10KSxh7d0vl76FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCt5om48luTrAmBPtKtwDglrfPNLQJpVXLD8vFFZApN4T9Wf6%2BiXBAuF1AIZGZ0zQbiwlChjs0TJgz5ncHMgdB%2FrZXhnhsaa1%2Fw4jh7iToND2saGt0xvPkGNV1UjIXXs1Z4W9OXRVl65j0DwnmrLmzJMgkRD6dm6e3GcSCmsWPethf%2BFdJsIRXCAB%2FuXnZP9IcIZvGXm0LX%2FW0z3jTKmzBvfwJswiPrM1BdEvzvEM%2Buc0Elum72cA3BAcEY7UnDdbllMWDSINbLXSDq6pfaFL6WbsC7eUOA8KkejT%2FNYEXZxl3I6lJJ%2Fk4u%2BKr4mzCc96hwx3N4FVobNfc6n2paFFhaMZwnJ%2FjQrcqDeQRuybp3ZwG0ups%2FOnUZuEkxN8o72LAb2dCntKyk6pvD%2FRb8wPKdFPuFSR6pAlNqt9OVm7mKtwui1x%2FY0o4lfRL8YzVgeyVunO4JWUsT87X7q5FYtmeIeqE%2BX9dfoZW7ezUfpfYNWalGq3cKE2hZaNU90Yoh0MypJBAMWAs7sCdY%2B%2BP0n6jAveysQiflnHFOlMGXfzRiAN14P3JlLd7aRft%2FBy9NfhWNf1ayuAl5h9ddrYfx2HqU2r84UBWM2K0ZJ7jtpSvDEy017jC5q9CPwAfB2CWURAhAF4IbVKR88bJVcwqIqdwAY6pgH0%2FJ2XT7ctjfaS6S7r%2B1TBc42V0HFN%2BBFKhs9XzTVkKzrShp9XEcNXzp1tdUdyRT7Ygl7gO8SrnUfl%2BM6iHp82zkRV2PyWhsqe35ajS3KwYHTR1l0NZWWotOkkt2r9A4%2BGRWvhI%2B%2FLWo6jjpr47o3wjNQFxS12iMdOgHJ5Dgtu4nGYNh84I%2BDdYdhV2uh5Y0oRQsKyatgl%2BHowmPH9faOtpBZtZpBZ&X-Amz-Signature=83266aad480d0059faa9dda52c51166b2fe8c83ffa43ee5c28d17288d828b9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VD36RZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCNrPhIvVVe0jp8ifG8Bxo9Z%2BGQ31fDeS8ZvvdsCFQAJQIhAK3zWXLFA3axVkFg5%2BDRlZtAOnp6ZQMYK2Ur6EIfm%2B0LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7QGxuk%2F%2FhrVgzEz8q3AOis9ILTp0JswtDMLYW5OvbfpE72AfwN7rqXdyGOZouNQjwNJZsNI8CrKni8qN6nOEIipZwSQqGEex0ec621nH2V7kt2ox7zHXTL96y2Ypnwnya0Jy7o%2F2Ttv%2BJ6zjXqb8mjICtanIecIcdVpK5gsQqEq%2B52m6zfsq2Dr%2BWoZ6PQ43TUpUrJ4ZiRMGCVFHEOCjR31ZIXBvq77ADKGHYGqg6J9JHs3q8AdDgamdeQrsJfICKBsudctV%2BYQG3sjZOp3QaeuGgmLBALfFZ%2BmHA32QDMe6CkBwapJ8YfGYrbqLzUZ3SASPRoUfNDQKNrJM5y00lpWLuUDHo78UGzoPzrDPcpaHgBm81yMTVtaFCObtYHseZuVy2oe3N1a6j5HMD%2Fx5OEPk2tWzywjwlLN4vtfgYuYqGpJEjp4HuflTlctSS0qoeyi8z3u2F2DJW43d6%2BiUtZaf8OUv60XqgadT8aDpr%2FqNl64QVHuOwR15dULFESQb73Sxj1nYfYNacFegniP4nFEBCkq4tvLsEKE%2BlG8bCvTvPO56wdViiScPol7Y9vO7%2FDktKeM1tZd4T3YcdMpZ3AohvjruZdHEjMnTP9AfR3K9UGPYuxT%2BXv2Y86QCIROvNQQMIeAoUUnutpDC5i53ABjqkAa5uUSAJPFSvxQ2XwBsMfigdbaZ5VWl9vEHsF4Wka8EIPW0rrVoQTPBPxb5x2o1beYcyeKKTZhEHMptSGF5IRRfjuc0%2B81mTzdFgG2FIan0roI8%2BiigkUnw9%2FgQRB7Oju7gUQEsAv%2F3WYcErBlehk8fO1Lc0wLaSWGz8H64dJw9DCm%2B8vnbA1DKJFBEL7WsaKOVnwnernjo9S2N4cYrxCOq6OQOY&X-Amz-Signature=c0af212b023ec01208f6838b5a8d83025718d3d33bfb8fb4b8a0e1c36f2defa9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LKTVH3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICVNrQwOEc8cvHefFxA7E4KTZRsuGKSRudZVwLDMOPcNAiBfIKDbd6AK45LFqxhJcKKwMJ95RndHFzhjyafV%2FfIhSCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbdH7k5a5oBWml0tKtwD7LxBrsuRDtfKTEx2bc0CIZrO7QgPiGE1b0sSBVit4%2FaAQ7WpQjWac%2Beiu%2B3%2Bkwk7E5J5XVCzvCRGHCli8c0gEc0BmQYBTC4U6IV9az49afZu%2FLFT3IIw0CUEJC0yVwA%2FMf0Mzn0WOz2AN1dPI3C11Vu6ZEomwVeY1DtT%2FPlZipHKzxAV%2BaT1nmsLVfzQYcDkMaRsxTbXmU08t0uZBUmQqKL4mGvBZhB1xLh8EHEMtMhLOASMMWTbRt9qBLfOhTBKnc21CpVLzpm5a7PEEm5UxWO5WRUXw81yaCE5WWWTdH%2FCm3uvMvqAH2RKkiHPHzJBooeZC7hIErXju%2FK6ole7FOGFWpbz3B1%2FTv3U%2Fyhe38y6hkXZajX%2Bs56PWAIQOxPdORDlTO7kX%2FF5mC75RQSDYPNEMFIkJwrDpg9q2TwDj2ld4%2BMbWwk35pzSq7eb4rXmGJL23s9WeXWsn6g%2FJryWHamfQZK4sSsZIQJvE%2B5WSsHNCsohAp%2BzsKuosNxNToSxRlBz00aUk%2BzoT1u22mFXhnFe85kToLyc9ZYmJqEBR74nrcOHt%2BzHZvw57lv%2B843cFejDuSKDRdLrojiPMRVb0KKywRAR2cwQUXGM80flM%2FU4hXJPG9qFQ%2F4nbv0wqIqdwAY6pgGew5u%2Fl8cd7cUAj%2FpieepFwB4mnjKcLppyh9BvqUrzbPPg9qAHHRxjZh%2Bo%2BZyw8Uw21OhX9LasJDx5HFeOwjAxLj6Ww3crmOjV%2BUEYIXTUlnvY0y8PmMMCnHpq6ofDoSLBOkeU9hipgLPIPCVzxWMART4zHxnoRdiXdfATdVxJ%2BOPPFPVxE6xbpO5u3zgXNDGAnbg20BzoOfKN3td3cgCymSI7Tyyx&X-Amz-Signature=db05e6efc19219ab87159e207bf8654f19714248238d6d18f5b40ef3a2f7d13a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
