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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4IZUML%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKuYSpEqTcGK8kD1lUX11cQX0NaxM6RriXAdELIIJWoAiEAq8rjOMReHEOXbkCZODbbW2eA1AGftCxyvnDWMWEGpPgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9IZMbVMpy7yteAdSrcA2F3HTYjMtG3dsL6H28gwqhw2LB7yuk8KtVVCsbTXuZrV2wOR5keuwiDPpTtEkxD6u16e5p131DrHHbwlA83jiUGKjbW2yn%2BR9K4%2B6LpVisY7UpGOOo69PGtXdtlcxhXoup5Ypi1Ppi2gHW%2FgTQvK1eBua1Gsb%2FUPegQ7NBc2ZcWBwcVWMyfRgHrOTIROZtFWUc6uJ5ryP5E7HLSJxMh87BbfRV2pVIhP3aS8BtcgeE7iqeNz%2BPzrz6Hi5KI9S3e3PoJ2zUGP2LBnGSMX52k%2FjLdVkFEo%2F3CK7TGQPXhmZUqFGUlhjeLPoD26xcELhhl63PsY%2B%2BViScM1U%2B4v9u%2FqmOrp1JCy72G1xrq0DE2xyS9GvnO34%2F8QIrg6AXAWtPyu5lVzg3BrVkFD%2BVe3FVWYwJIiAKlCGp8U2%2BL%2B5p6q4FJ5lrZgon5R%2FrP%2BJcagKBe5NIJkm12RLDv5d%2BEnQ7oYdv3dLL4JmtzaQGpCqcezfY6PhgeqwMWdoW0eQI56aFT46DS9%2BufaKdHDfcNOV5oS3adjcszTQolBQoYHzUO78BOglBBWGO4F9ci%2FEvnlwagOArnF8C%2B2ZcIMezxv%2Bbano74bqlLzn7v0D%2F3uXQFCPNmFe4p4dHLRFzYIpAHMM%2Fu2L0GOqUBBvkpCajYSdofCudZeJtcMgo94Aevin2RRHG8y6XgxnHq95P8MF0aq1OXXAXRNO73420CFN0YxMisIjJw489vArJjU6ML%2FZ2QSEn0rzLNt54QiUEub8Sd%2BxylJXROjaFTFRfnIwzjeVueTDmV8hojWi0r1NQwK7qybcgbR%2Frh81QsW8U3P%2BIw1po31oG0QhwCRrwlLaxY7%2FScDDxeWiz5JiwRBT7y&X-Amz-Signature=7748578e521cc664a478cee2d0becc5d922b1d7031095e5247c5246d18aff689&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4IZUML%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKuYSpEqTcGK8kD1lUX11cQX0NaxM6RriXAdELIIJWoAiEAq8rjOMReHEOXbkCZODbbW2eA1AGftCxyvnDWMWEGpPgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9IZMbVMpy7yteAdSrcA2F3HTYjMtG3dsL6H28gwqhw2LB7yuk8KtVVCsbTXuZrV2wOR5keuwiDPpTtEkxD6u16e5p131DrHHbwlA83jiUGKjbW2yn%2BR9K4%2B6LpVisY7UpGOOo69PGtXdtlcxhXoup5Ypi1Ppi2gHW%2FgTQvK1eBua1Gsb%2FUPegQ7NBc2ZcWBwcVWMyfRgHrOTIROZtFWUc6uJ5ryP5E7HLSJxMh87BbfRV2pVIhP3aS8BtcgeE7iqeNz%2BPzrz6Hi5KI9S3e3PoJ2zUGP2LBnGSMX52k%2FjLdVkFEo%2F3CK7TGQPXhmZUqFGUlhjeLPoD26xcELhhl63PsY%2B%2BViScM1U%2B4v9u%2FqmOrp1JCy72G1xrq0DE2xyS9GvnO34%2F8QIrg6AXAWtPyu5lVzg3BrVkFD%2BVe3FVWYwJIiAKlCGp8U2%2BL%2B5p6q4FJ5lrZgon5R%2FrP%2BJcagKBe5NIJkm12RLDv5d%2BEnQ7oYdv3dLL4JmtzaQGpCqcezfY6PhgeqwMWdoW0eQI56aFT46DS9%2BufaKdHDfcNOV5oS3adjcszTQolBQoYHzUO78BOglBBWGO4F9ci%2FEvnlwagOArnF8C%2B2ZcIMezxv%2Bbano74bqlLzn7v0D%2F3uXQFCPNmFe4p4dHLRFzYIpAHMM%2Fu2L0GOqUBBvkpCajYSdofCudZeJtcMgo94Aevin2RRHG8y6XgxnHq95P8MF0aq1OXXAXRNO73420CFN0YxMisIjJw489vArJjU6ML%2FZ2QSEn0rzLNt54QiUEub8Sd%2BxylJXROjaFTFRfnIwzjeVueTDmV8hojWi0r1NQwK7qybcgbR%2Frh81QsW8U3P%2BIw1po31oG0QhwCRrwlLaxY7%2FScDDxeWiz5JiwRBT7y&X-Amz-Signature=bc2490e2105d092d4306143494caa73adc674cc60b188dc89c0f033ae57113ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AE7GJQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1FDa%2By8HIunrf319ke8XvFqkM6uw0ki%2FDMqjLz6ZtbAIgfDRg8fJ%2BtXW4bwIO0s5e1vGT%2FKO5QSW2%2Fr67bO5F0akqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN1gaTOuxDL%2FyrScircAy3oW%2BVp7NeaObXOHaAhJ1w12Cyz87oHt8mpf6Sih3BgyYfJUODC7RWoH6fRD4BD8PCwBIz7rw%2FQwt%2FZYbuC9nXZNAWhZRUO0uuNLrqfF4i8YKMImpKN0FX%2BmThQmSqwkoOM0ZT5O4QNQVE%2FVZ%2B1N9aFUPyv2DNWwySZwwaldqSa0BMF7T%2BKZjYQqXIEs%2BA%2F0MNNJp911cErYUv8JLgCapvqFImj1rD2gTD4GKf6bRSTkcSIeGmgtLCLH47M29sgzRkVTeXuFF2F1wzRPkK0ZmTwDnkkz2tGWmy0b3TocvPgEDGbCGN4q3lArP7M9lIhQGLAWxr6u2sGhyMen0QZM8IGjk3kt%2FZW7Jp2vihkxA89%2FN%2Fhn6cU%2F6pyZlqTr1qyw0xkOQcVGHR6HreuCTYAlslqRJ2t%2FX6O2q966uHEjivFagC4hE%2F9gVTJLXy6njnKxDz83MBSZuocYdN23sTHk81J3uEwqJ6L%2B%2BdKtTGm1Y%2FtKU1KO0G7V0SbNaVliX35CL8Q5TOF%2F6f1cO5uxX7v2hot44KV6l6W6XEvmuyvoWZtj6sQb4S7KDwGJf5tgK0Pghnhszf%2B9p2Zb4uoFK%2B78gSiRkVqp0izdfe2VBlVG48echipaOaBuSF46qyVMKXv2L0GOqUBPtAOFz5wnd8gst46xinjaCVX07rbad%2F7g%2B%2B1J%2BuHyQBI%2Fu2Md5HT%2BJl0rzDmcaWSko%2BFmnmN0ID%2BEoZgMDyy%2Fn6Oo1Fx0gqkoXFEa5ghC12q9EdKIccQnujRZMG7RptvZqoIft0DkYg9TNFjOlFZqu5HtgWA0Gk82xLaTsmO%2BC6hQK2zT5qXBqsWjLDuEbGuJkZgT%2BmVKMfUfcujA%2B8c6zrpMlJQ&X-Amz-Signature=bf85097f45511f7d00d729698a6f39c3a18814b0e3d22dda801e52232d794436&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOWNLOA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYDqYAuD%2BOSL2iGM4LIj%2FaX0iIlgwY2K9ezfdCBQBPCAiBFNTnDaWFtsY9bKvV%2BFUNP680aHDRi%2FnbIiz4IxSET1iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvBQsF%2BWa3RW31YUpKtwDhCXE0K8o%2BQPTbUhadcGJuEdp%2BwO2M63BliHdLKTZcy0WnVH0LXbB6zoot62a0n%2BJkXnIoKa9x6zkhlg0nJEFyFer0xEYFWg2V89Lr1Uuau6IeY4nl%2FFg2vUB469qlwDjzwl5b8aKapfRWkiC5%2BQ9H%2Foo298SW37D2%2F6WhrcsU69tHU%2BMSTMMmfsp3EAZ%2FOeEKaUba91NoElW%2ByhkPZNOHqDbE6kehi%2FsFkAcxw0cimTIaa7BlkM77BmQg%2FTkLXzyW7649FovNyo6P1NdE6cEWU4E0EkwUWbtGtG1oL8GtyjBuo81qkTXsLjtsLSYWEBogJL65SfMwocq5Fe7QtnrpD2dYTZCQI3CRVdcCFmFzKIjIcFydc7b3D6IG4yPfPLNC7KiDyK3HKKBuHjOS5pNM%2FQ98IGrXJAZgoOB43a6qOieV6fOLN6ktgbzOwiMqZd8iEanaQQ4C%2B0gpe%2FF4pdUhUf%2BwkUTvPnsukMSeG%2F4OWB%2FTZ4JhsFUN61TEre61RP254qXuVTcggjwQ3k5ggpDqrOy5O8jyqX%2F7qPFHRJZ%2FWFIo71bwwYtv9Wl3%2B0T1rRkeOuKVqJdptRgHphV9sJDS1kJOK2RHpZm%2F%2B2PNyfh2t8HD5icb9Vf%2FXIFrOMwxO%2FYvQY6pgFsT5c8fqmT4V3tVgYdkfNzGhWROtz%2FVuVeGhKezqGXzC8MitLjH5e5WQBlrksz7YjBLMVyV04TjWDdKzbJfOHTx9Q%2BCRGl3ikgvRMtpK3UhMhRI9PHCZU2z3FXE54N9p46oxHmjrCDfuoJamdkzQrUYGVJbOhI4YY4J5j22h2gcYUs5yPztNK3eDNv1%2Fu05JQm1dvqNhGxgyhv7yS4yKPpF2MrSFy5&X-Amz-Signature=9478686abec649c5c26f96af2b2b0715439854987772c754a0c0c6da07a34daf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4IZUML%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKuYSpEqTcGK8kD1lUX11cQX0NaxM6RriXAdELIIJWoAiEAq8rjOMReHEOXbkCZODbbW2eA1AGftCxyvnDWMWEGpPgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9IZMbVMpy7yteAdSrcA2F3HTYjMtG3dsL6H28gwqhw2LB7yuk8KtVVCsbTXuZrV2wOR5keuwiDPpTtEkxD6u16e5p131DrHHbwlA83jiUGKjbW2yn%2BR9K4%2B6LpVisY7UpGOOo69PGtXdtlcxhXoup5Ypi1Ppi2gHW%2FgTQvK1eBua1Gsb%2FUPegQ7NBc2ZcWBwcVWMyfRgHrOTIROZtFWUc6uJ5ryP5E7HLSJxMh87BbfRV2pVIhP3aS8BtcgeE7iqeNz%2BPzrz6Hi5KI9S3e3PoJ2zUGP2LBnGSMX52k%2FjLdVkFEo%2F3CK7TGQPXhmZUqFGUlhjeLPoD26xcELhhl63PsY%2B%2BViScM1U%2B4v9u%2FqmOrp1JCy72G1xrq0DE2xyS9GvnO34%2F8QIrg6AXAWtPyu5lVzg3BrVkFD%2BVe3FVWYwJIiAKlCGp8U2%2BL%2B5p6q4FJ5lrZgon5R%2FrP%2BJcagKBe5NIJkm12RLDv5d%2BEnQ7oYdv3dLL4JmtzaQGpCqcezfY6PhgeqwMWdoW0eQI56aFT46DS9%2BufaKdHDfcNOV5oS3adjcszTQolBQoYHzUO78BOglBBWGO4F9ci%2FEvnlwagOArnF8C%2B2ZcIMezxv%2Bbano74bqlLzn7v0D%2F3uXQFCPNmFe4p4dHLRFzYIpAHMM%2Fu2L0GOqUBBvkpCajYSdofCudZeJtcMgo94Aevin2RRHG8y6XgxnHq95P8MF0aq1OXXAXRNO73420CFN0YxMisIjJw489vArJjU6ML%2FZ2QSEn0rzLNt54QiUEub8Sd%2BxylJXROjaFTFRfnIwzjeVueTDmV8hojWi0r1NQwK7qybcgbR%2Frh81QsW8U3P%2BIw1po31oG0QhwCRrwlLaxY7%2FScDDxeWiz5JiwRBT7y&X-Amz-Signature=9b144cc7bdadca261b4a3ec7a0dc7b5d5939010580c1499e94ac13f978f29c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
