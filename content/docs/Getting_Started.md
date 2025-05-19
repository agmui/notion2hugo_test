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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KADD466%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEik2WM%2FqJquFc4ltOiLeD3f89SFhxX%2BkioYASWeVGNoAiEAoKLg54H1VEfRQyuetZHipkgSwDFsvrlCOIqe4mDX0p4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQrRDQu%2B4kRZl3CPCrcA39TckCURNokEb%2B%2B9mpkBIHT36igOWKKbsBuDz6LUW9TxWhx1dDFoWQu0EHF0uW7cc8I3PPrLSeolcknPayKJLL98awwxLxepQAsvQ27xpjkeFg2vsbs0580LjqifoNcHAJkY%2BcepjjOO21mdy%2B6j4S7Q9BEg9wNc5uVvc8vvOT5RHRCw0iH%2BMDtjbw0SH3fHn8iMmGfTx944K5dVUpGhFzpvmgTjovvEzHMOZjhJjBbuODO1Wi%2FR14zyVJ6ADxHrP8CWuQvYw9SLCM%2Fezk1VqtoOkLL%2BllmH6HFiVsQ4OYS%2FoUxVRPUXTkgt0mInxoVuhqNlRJooTeJq13LGRBNZiuB6nWKF4%2BC0LjxRvmAvPDMiuRKSvM2%2B5DOGJ5NymZvegvj80LmBinXUa94wyuKb5nsNAPOAqeyNdvAGkrOWq7dfSPHTEOoRS%2BTmkLyLWd7h6YYr7CoezNFNZXw5os5aynCCOB6smkkuX71KAcH3aFO0SXxGePuB%2FJ5L%2BAWgrcpQ62IRvgpcDaRRuzJTda87FeM8oMVv4fKa62LaWYKxRZvmL0EWerYTwOIFN2SKQkDLjRKxuio%2BJskB3tgcqItWpkbpLYpbnaP%2B9KdX37I%2FJCcUAAwYh7mvv6%2BSUUYMMiyrMEGOqUBlvESZcKuT7RTXnqbyRsFQ4MR8vt2eCPCBH7sbd3HfTImJk8HNz6a%2B1lhCohY8WeFr41cQvCcR0ZI7duDWA7K2J9hNX2k%2FTG9ZP1F4ptK0Lv30Cudvq6grrz1HYokgYv84GYKNPfndiInd7I706XtHuFMevCjxhrEiIzRD7ncs%2Bw%2BiLlacWl7Dq2ChwmFmC5r65Eia%2FPL%2BRscFnvOqMfgc4cvo2Ah&X-Amz-Signature=b96d7d578b0ea996b6250c8de2dea6f1843eb61a7d6b434eaed7ca31d24beb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KADD466%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEik2WM%2FqJquFc4ltOiLeD3f89SFhxX%2BkioYASWeVGNoAiEAoKLg54H1VEfRQyuetZHipkgSwDFsvrlCOIqe4mDX0p4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQrRDQu%2B4kRZl3CPCrcA39TckCURNokEb%2B%2B9mpkBIHT36igOWKKbsBuDz6LUW9TxWhx1dDFoWQu0EHF0uW7cc8I3PPrLSeolcknPayKJLL98awwxLxepQAsvQ27xpjkeFg2vsbs0580LjqifoNcHAJkY%2BcepjjOO21mdy%2B6j4S7Q9BEg9wNc5uVvc8vvOT5RHRCw0iH%2BMDtjbw0SH3fHn8iMmGfTx944K5dVUpGhFzpvmgTjovvEzHMOZjhJjBbuODO1Wi%2FR14zyVJ6ADxHrP8CWuQvYw9SLCM%2Fezk1VqtoOkLL%2BllmH6HFiVsQ4OYS%2FoUxVRPUXTkgt0mInxoVuhqNlRJooTeJq13LGRBNZiuB6nWKF4%2BC0LjxRvmAvPDMiuRKSvM2%2B5DOGJ5NymZvegvj80LmBinXUa94wyuKb5nsNAPOAqeyNdvAGkrOWq7dfSPHTEOoRS%2BTmkLyLWd7h6YYr7CoezNFNZXw5os5aynCCOB6smkkuX71KAcH3aFO0SXxGePuB%2FJ5L%2BAWgrcpQ62IRvgpcDaRRuzJTda87FeM8oMVv4fKa62LaWYKxRZvmL0EWerYTwOIFN2SKQkDLjRKxuio%2BJskB3tgcqItWpkbpLYpbnaP%2B9KdX37I%2FJCcUAAwYh7mvv6%2BSUUYMMiyrMEGOqUBlvESZcKuT7RTXnqbyRsFQ4MR8vt2eCPCBH7sbd3HfTImJk8HNz6a%2B1lhCohY8WeFr41cQvCcR0ZI7duDWA7K2J9hNX2k%2FTG9ZP1F4ptK0Lv30Cudvq6grrz1HYokgYv84GYKNPfndiInd7I706XtHuFMevCjxhrEiIzRD7ncs%2Bw%2BiLlacWl7Dq2ChwmFmC5r65Eia%2FPL%2BRscFnvOqMfgc4cvo2Ah&X-Amz-Signature=81ad841b7fcadfbd0b2f52085883a743c4afef841866572d11226bfa8a64a595&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KADD466%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEik2WM%2FqJquFc4ltOiLeD3f89SFhxX%2BkioYASWeVGNoAiEAoKLg54H1VEfRQyuetZHipkgSwDFsvrlCOIqe4mDX0p4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQrRDQu%2B4kRZl3CPCrcA39TckCURNokEb%2B%2B9mpkBIHT36igOWKKbsBuDz6LUW9TxWhx1dDFoWQu0EHF0uW7cc8I3PPrLSeolcknPayKJLL98awwxLxepQAsvQ27xpjkeFg2vsbs0580LjqifoNcHAJkY%2BcepjjOO21mdy%2B6j4S7Q9BEg9wNc5uVvc8vvOT5RHRCw0iH%2BMDtjbw0SH3fHn8iMmGfTx944K5dVUpGhFzpvmgTjovvEzHMOZjhJjBbuODO1Wi%2FR14zyVJ6ADxHrP8CWuQvYw9SLCM%2Fezk1VqtoOkLL%2BllmH6HFiVsQ4OYS%2FoUxVRPUXTkgt0mInxoVuhqNlRJooTeJq13LGRBNZiuB6nWKF4%2BC0LjxRvmAvPDMiuRKSvM2%2B5DOGJ5NymZvegvj80LmBinXUa94wyuKb5nsNAPOAqeyNdvAGkrOWq7dfSPHTEOoRS%2BTmkLyLWd7h6YYr7CoezNFNZXw5os5aynCCOB6smkkuX71KAcH3aFO0SXxGePuB%2FJ5L%2BAWgrcpQ62IRvgpcDaRRuzJTda87FeM8oMVv4fKa62LaWYKxRZvmL0EWerYTwOIFN2SKQkDLjRKxuio%2BJskB3tgcqItWpkbpLYpbnaP%2B9KdX37I%2FJCcUAAwYh7mvv6%2BSUUYMMiyrMEGOqUBlvESZcKuT7RTXnqbyRsFQ4MR8vt2eCPCBH7sbd3HfTImJk8HNz6a%2B1lhCohY8WeFr41cQvCcR0ZI7duDWA7K2J9hNX2k%2FTG9ZP1F4ptK0Lv30Cudvq6grrz1HYokgYv84GYKNPfndiInd7I706XtHuFMevCjxhrEiIzRD7ncs%2Bw%2BiLlacWl7Dq2ChwmFmC5r65Eia%2FPL%2BRscFnvOqMfgc4cvo2Ah&X-Amz-Signature=ec88df4aa78f9892b4b1b99b168ca1020cf1d21613e387801527f43b4bc21855&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVBH5NN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8%2FHjWINLi3XVDooMGCQdQHICZhXxYUU9%2FNXIdp7tPAIhAJDPRSYKM131LqzRRKgve%2FoxJF%2F0RTCYeci2Mi8zttG6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw52N4YCrBxb3Szqfkq3APX40FWB6TvuS4T64%2BzVA%2Fcav0KxkLAY2eu8C%2BAa5p5MAGBT30BsR2hUEkAm3scMl7q%2BAsfZ%2F2Ti%2BlQJe0EvP7tHTyyp%2F%2FBL4rIztE4vgL5RZ3tQxJdOjiYbE2uQ0miDbanAaFtsG1eoheGNfpFhs0i9isoRm8npWpW4QWiUEpyEtBI96b1gGlW1L0qsXEzMyyQ7hBwn7T817OIpvxxRJxEJbwEDsYArYC%2BFNkFyfzYfFWDJzdJJq6UzehIv9b5UglxPptc2eATUZCMnaTkT2rKzoVe2gBjNf1Gq6fIIfqdgXkbGqFcfiKr%2FqrpOgHf%2BidS2bcyecmJE4C%2BhwJPQI1VvN4Jgk5vohaH1pOlERb%2BLzKz4Y7SgA9wHLB%2FNcHmg%2Fk5a1mH3Av1bmn%2Fz3p973%2BVnW%2F6FohSsUgcOxMu0QOB%2FwM0nAgtr5GgEh9fLd5hgn7ZdaujVboLT3RUX4RVY43lfYfisnrEuH3oK7Uaf7g%2F4RZnwGO3WkizNqMtAeKfZsz%2Bzsx%2B1%2BzxIjVhCk%2Bxwb%2FKnrI%2B%2BBfNKkJF7rJeHvb3RaHJwXSes%2B8DClgptX4ypN4atqBaSdVwJmwittDuuZE386GPDPT%2FRuFqfE6OlndQYY9ZIKLQ9FYuLpcszzDMsazBBjqkAVKHa2oUwURq13iehzKALFcaLg6nRjdiaxka6zc7QpeRXZmA7YBIXMJVLvu2qM%2FWUAEJg6n320B6Vfug4CD2DatnvWw2R7qcWzP2w7ii2GzQFL9kWoUyuu2P%2FKO3EVdUHt41RqxeVEin7Zi3hCzSC%2FEWhQrhAH%2BgI%2BcGPhEcspFfnzMQE4RE5190QQ8klxJwoSj20rt1rXwZWDKXVV1FW9FGQxhA&X-Amz-Signature=fdede7e052f530a9b483021a85a06c10d7c45fc66a18014247abe9c95368fe54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALMVZ3K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaazSpZfj5zyAWjndx1NjNG%2B3KfTIKG2aLrvKI%2F7n3uAIhAMVLfZGx%2F7rvbQp%2F7NxE32yWlztsoQ999XRdDt3ku7hYKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BN9tkj84%2B4KBN89cq3ANU9i4nOAcPVX2idg30FNcvNNxWdvEyhaaKwOirUQIiyepvkKZMIaQ8TILokoa0uTKF%2Fck8LXUopZrpZ0vhf3Mxjv%2F5mgBr2vKVVwkygie65CqINBaVEl4q2WU2uQakxgNXdmT9xWcoB6VKlz2LDFTTggD7G5b%2BSG31qSmhBNNtxX%2FGTgfSLhjclF%2Fv2Dx8bpyFe0AUSZMdttfThwJej15UYMH7VB5%2BaMdCB002Y6i9csi6%2Bzo7RzN1uPGks7msN%2F0FTlYOuEKoZJtLIeR7DP75LYYkgTh%2FabrdtioACIlLGsLlzgGbkl1c94GhKbWbBEegxA8NCtebNRItT0ILQS5pbYQIgmYhdyPx4UE%2Bf24nYFshDZ7WbaUACU3K2ex7j5IN0VXkQPaKeUW0ntThITRsKgSr%2FR1pQhn5tIB4hJYDmWsFv9lhVghcDMQ%2FvnqrCqGvU1BBmNzA2hkQNp6Tv2A67KLPsRHLnUaG7rM2vVnMSmDOPIJi%2BmQj4Z2S0v41NrKWmPsAWDKI9vzIJ4LvLhjyyIuXg5a3sypnzRs7iS64T5bqvhx8m%2FP%2Fe0a8A9%2FVRw6kTF53sdY0Kl6jsYwEaB18i00%2FOENv4IX8INbMr4Vw%2BcGvPcagjkSr7ML24zCmsazBBjqkAfv2CXQV%2F9hwG77l1jDZcDNcvtI5%2F5aSIEiTlnrUOh2XrEXo76GGaxBN62xX1fXY6RtYvQPJst3vhttHIMXsqZccr3NWmjxMkDAm6VDsezlbsdpZf7I%2FIXfOKTockYY0vT06fqiCWxWjIzFOnMrExYNuOEGm4lVq0fH9cYPs1tA%2BJ5x8OvldN8SszHB7Z5ZAM0nABMfipsHUWlqwG20g8tBStKju&X-Amz-Signature=a96f69e2313b3a782aa3d330110c49b68e35a2133806ad6668adf684b25ee203&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KADD466%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEik2WM%2FqJquFc4ltOiLeD3f89SFhxX%2BkioYASWeVGNoAiEAoKLg54H1VEfRQyuetZHipkgSwDFsvrlCOIqe4mDX0p4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQrRDQu%2B4kRZl3CPCrcA39TckCURNokEb%2B%2B9mpkBIHT36igOWKKbsBuDz6LUW9TxWhx1dDFoWQu0EHF0uW7cc8I3PPrLSeolcknPayKJLL98awwxLxepQAsvQ27xpjkeFg2vsbs0580LjqifoNcHAJkY%2BcepjjOO21mdy%2B6j4S7Q9BEg9wNc5uVvc8vvOT5RHRCw0iH%2BMDtjbw0SH3fHn8iMmGfTx944K5dVUpGhFzpvmgTjovvEzHMOZjhJjBbuODO1Wi%2FR14zyVJ6ADxHrP8CWuQvYw9SLCM%2Fezk1VqtoOkLL%2BllmH6HFiVsQ4OYS%2FoUxVRPUXTkgt0mInxoVuhqNlRJooTeJq13LGRBNZiuB6nWKF4%2BC0LjxRvmAvPDMiuRKSvM2%2B5DOGJ5NymZvegvj80LmBinXUa94wyuKb5nsNAPOAqeyNdvAGkrOWq7dfSPHTEOoRS%2BTmkLyLWd7h6YYr7CoezNFNZXw5os5aynCCOB6smkkuX71KAcH3aFO0SXxGePuB%2FJ5L%2BAWgrcpQ62IRvgpcDaRRuzJTda87FeM8oMVv4fKa62LaWYKxRZvmL0EWerYTwOIFN2SKQkDLjRKxuio%2BJskB3tgcqItWpkbpLYpbnaP%2B9KdX37I%2FJCcUAAwYh7mvv6%2BSUUYMMiyrMEGOqUBlvESZcKuT7RTXnqbyRsFQ4MR8vt2eCPCBH7sbd3HfTImJk8HNz6a%2B1lhCohY8WeFr41cQvCcR0ZI7duDWA7K2J9hNX2k%2FTG9ZP1F4ptK0Lv30Cudvq6grrz1HYokgYv84GYKNPfndiInd7I706XtHuFMevCjxhrEiIzRD7ncs%2Bw%2BiLlacWl7Dq2ChwmFmC5r65Eia%2FPL%2BRscFnvOqMfgc4cvo2Ah&X-Amz-Signature=b5007514234415e6a0a07cd7a10c1b636f620b27159b6290b93eaa5f570bc60a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
