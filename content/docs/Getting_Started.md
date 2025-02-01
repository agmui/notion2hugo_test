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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNIIW2E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1PUM6ch%2B%2BjNRAN8QlGURXp%2FC4fRt7MCW35oJiGmtLnQIhAK8NzsKF5QoJ5lUSoADd2DozDLpp7rhjxmbEB7XOyRf2KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywPxpTtN1LEZnsuzgq3AMZ9E78EBiTT3%2BTgoH1B3Nb6LKm%2FEUm8CY5Lxvf%2Bl74uT4ou4exJd5KKZZfxiaOmm82QoKNgxykeR3md%2FLgXKhu4dv2cwqGaMAtLF%2FboL7jfnPGkl6kH1PTl8V2IswXstlEPE0COmruS9taH14iygXOtPqOWTwaYjwb0Zx9BW5KQ6D3VrbL5qsjDL%2BDKvamFzaVUmwiyvr1U0xUVtW%2ByQoPPS%2FqoJ1Aw4BUGQyjWTXAh8Z9qvJF3WIUpGzS%2FiVi63Q1BghKXwhSY%2BpsZSNhvp1Ef2LzUoFQnPlEQQ5ge6EiIqz%2BpRIPqeQPLlgtdj4RmtE0R2gQqtaI7hIs4FY3j7X9hgeMFCVgp9R1JUClc%2Bn2fhntAPDaHakmCjFpDo8DuozjzeryucvqYJ0WK1PAxYN8TElIahsv0jBY2K74vEzViOJwEvmZMUHAz8sl%2FGi5pKTZAf%2FNUoFiRkk8ll7%2Bz5Ol3XGzPdMLa97tp%2BqALmZkvIsIqj91gtZVtO3t%2FnygbgR3vJrlSYtefUaOHRm%2FXZSdMyJ1sMUOXCnWoTCbu7OCIW4PRFXZHEjo06tCBlacfA33lQBumhOprKE5tHBQnNGkTb%2FQInnwecpaSIH1V9JNTWaJkcusnv3fCTtwHTCizvW8BjqkAS%2FrYdfrSO9GKOJmh5ieEejKF3KXHY4ReSZn46S0R9GaB%2F9fNfJL2LEOh7NzFYvxE7s3miIsAUzdEdze5QzmGt3WjQ07O%2FSSzZnOZghunf7sK5FsWi9KOwmMBbhx97g4SUImeFD%2B44U0YJgwbiwA1Se2CSZDXus5g7eDoTwhxLaCIAt6LRLTC4KkUeq8A4QL61ipxFnAxqncxLMdHrjCpZAzwgA5&X-Amz-Signature=164c778618773de539d26a05c56a3e608fb9aa16dea05a53e8ebb8723d757e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNIIW2E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1PUM6ch%2B%2BjNRAN8QlGURXp%2FC4fRt7MCW35oJiGmtLnQIhAK8NzsKF5QoJ5lUSoADd2DozDLpp7rhjxmbEB7XOyRf2KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywPxpTtN1LEZnsuzgq3AMZ9E78EBiTT3%2BTgoH1B3Nb6LKm%2FEUm8CY5Lxvf%2Bl74uT4ou4exJd5KKZZfxiaOmm82QoKNgxykeR3md%2FLgXKhu4dv2cwqGaMAtLF%2FboL7jfnPGkl6kH1PTl8V2IswXstlEPE0COmruS9taH14iygXOtPqOWTwaYjwb0Zx9BW5KQ6D3VrbL5qsjDL%2BDKvamFzaVUmwiyvr1U0xUVtW%2ByQoPPS%2FqoJ1Aw4BUGQyjWTXAh8Z9qvJF3WIUpGzS%2FiVi63Q1BghKXwhSY%2BpsZSNhvp1Ef2LzUoFQnPlEQQ5ge6EiIqz%2BpRIPqeQPLlgtdj4RmtE0R2gQqtaI7hIs4FY3j7X9hgeMFCVgp9R1JUClc%2Bn2fhntAPDaHakmCjFpDo8DuozjzeryucvqYJ0WK1PAxYN8TElIahsv0jBY2K74vEzViOJwEvmZMUHAz8sl%2FGi5pKTZAf%2FNUoFiRkk8ll7%2Bz5Ol3XGzPdMLa97tp%2BqALmZkvIsIqj91gtZVtO3t%2FnygbgR3vJrlSYtefUaOHRm%2FXZSdMyJ1sMUOXCnWoTCbu7OCIW4PRFXZHEjo06tCBlacfA33lQBumhOprKE5tHBQnNGkTb%2FQInnwecpaSIH1V9JNTWaJkcusnv3fCTtwHTCizvW8BjqkAS%2FrYdfrSO9GKOJmh5ieEejKF3KXHY4ReSZn46S0R9GaB%2F9fNfJL2LEOh7NzFYvxE7s3miIsAUzdEdze5QzmGt3WjQ07O%2FSSzZnOZghunf7sK5FsWi9KOwmMBbhx97g4SUImeFD%2B44U0YJgwbiwA1Se2CSZDXus5g7eDoTwhxLaCIAt6LRLTC4KkUeq8A4QL61ipxFnAxqncxLMdHrjCpZAzwgA5&X-Amz-Signature=49e4e8b1f5b9f03260a3c9cd57797779a2c17005ab3bd62af9cef15da662597d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UCRJUO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCifkse0u69bz4P8F%2FkoQQrdQ95SlfiTe%2BKvwOGIs8wpAIgU%2FG2Tx1%2BOTZ5QkXUyBNmzCwQo89k0yNkJ1HOP4aBbxsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAArmp2xKGgIzlGVhircA%2FayFz8g7jejb28PEvP%2FtlXMOhLbXVxmJbzXHC9skszQid2cKzxIw9K8wqT6tB1EhQwmFK8wqMpOlLzchqSNHIhKs7dfTlSDL%2FUzghVxuw42SpyqemKYrZbFO8sZf4VAFdYOGzRC5vb%2BtJP4DrWBUWuW2i7L9OdDpS295nV7%2BzltdFBG0OYUby32n35nlin9ZyijpAV6n1iTU4F1Y1zGgXDYqOwBpc6b9Ucv8ew5udpZsgKJqowIRbn9qlrSbX1bGEv0vZXZJRmyJ7RcnTEXs5On%2BaP0CLaEf16J3wOs9AfgJZfJC3VFAbruo3XYZCWNnVym2cYLeCiG2WqYKyptTRBu0EwROza41Sq7RWJfjZu4UcoTYFDOmYqdcKxmhFYeZZaV4QnT29SQb%2FU8tz%2FU8kW2XRQl2e8astwErg5rtYVEPKWRlElih3pTbbn%2B%2BThfCG%2BEmSM%2Fmo5xH7I98xoafbu4SeiH855BFzeJQUB%2B9hMZxLmS4h7uwU63%2FHtILvIcnKqR1aFlkY30BY101r75%2FTBiXefn8nY1j0b6SNVuqzohApJPdY9S6K2pBNlUkfQQ1kY91qcXupxgyPDsNlwXRKswj9SFEVYOtK0MrluciKGBahGGRoTwDizUA%2Bu7ML%2FO9bwGOqUBSkKpzIUfQ%2BvVhC7VDANFBlIqzwe8C35E088O6TLKUUnw62OL4gdlD87wQtM6FtU5XOgyOcA30txYYWaC6Koiz6hkQdRIJorlswr9qXdkI8Ppp8NnVa6u6yuSHY4vuAfwttoSYlwI2s3%2B3w5yG0kyVDVC8JyD7qmfQ3nGFxDTzpVLwhZs3w12Z3oe321x80wW1QtcHjGH2CQiWH%2BGdlB3yqErUrEd&X-Amz-Signature=a87eca2cc16af66d58aeb2c37d6fbc684adfe749ceeade6fb01bfd58d601df08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7O4HQ4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1wRkztKNf4XrfxzoGoGIS1ZIZUOeQc59Fv9OgyiUaQAiBVKEcFG%2FsZ8ROpOmS3xsvsC3SZ6xWsSAs18ro7rT0dwyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbwobp6Z67TbmkpuKtwDSvoypZhFd%2BtMqGAQri1IvmjSQutj9yJ470%2BPbNFQHaY%2F%2Fd3jL55pQ%2FGJqLHQ8IL3BmZw9%2BA%2FbetIdIs8oxGnTVtOYO%2FZIL%2FxJZHRIZfTOHlGPkrCfSl1YbpzcVcQr3qV23yXM0y4ejQd%2F%2FK6JY6yKWgx4XLms7eiK2skKzMZ7hkK9gbiYCJ4Sqd6gUJySoNCUtqyGz8lydd60zGPDiIwCKTTIYzymlwEL1bmAJotaYZVeUxgAWOgUdvPe1Y9UrnKEtBPnE6ik6eWmZXRpU9VNoqNB2LuoZCLfKOGbLSLriLqnV6KA8P%2F0gu61qJ8B%2FunmiDoyHAId9G%2BZ7XT%2BS9Rd4OqFkmHz2rX2vmhZsHkkXbLDrMjWnHQupvrCtyw9fmnHAET0Gky6z8QAFP4w6yCm4wq9d57fRSBg%2FREOOb%2BhC%2BbBW4mS5f5dgmLHjijs3LETcQS8RCyEqgnx1Yes2CvzrZdrF4yA5ziAEZh9Z3l6w3A0jh72OmYE%2BQU4qboJ7X2dw%2Bjuaxu%2FATqMvKaItgED12QIMIIYWbnkvN3FPEcIFyow9IaDFZmBiOU%2FytVjk4xP%2FyttckoTR0EX6%2FyXPleHs%2FwGSukgC%2B4bUE%2B7gGVEc0mAPDWDEOuMI972T0w%2BM31vAY6pgHsEwdX4A52K7dLlSEdlxbtgq7qLyitksjCZWa16aiOU4jWrWSgvwlMXZLBqSSip92UbOGnPpIlGFdfFiSi%2FFgXtlq46x0lT%2FtDWshV9A85ScikM08hLH4lQR79HgAmLJTtxEf8O6y7I0kDHQ3OzDgBQc%2Be8VvG2yULtEDxAC3WLPoIdiwgpquah%2FGw5rhlpY17XYSSrmjHPz3%2BGTnuRvfH93vwm6gP&X-Amz-Signature=0d2d28ce5d81a8ad4a703ec5d5fe91a2c62d8a852b7e4c1a0468350cfc959db0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNIIW2E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1PUM6ch%2B%2BjNRAN8QlGURXp%2FC4fRt7MCW35oJiGmtLnQIhAK8NzsKF5QoJ5lUSoADd2DozDLpp7rhjxmbEB7XOyRf2KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywPxpTtN1LEZnsuzgq3AMZ9E78EBiTT3%2BTgoH1B3Nb6LKm%2FEUm8CY5Lxvf%2Bl74uT4ou4exJd5KKZZfxiaOmm82QoKNgxykeR3md%2FLgXKhu4dv2cwqGaMAtLF%2FboL7jfnPGkl6kH1PTl8V2IswXstlEPE0COmruS9taH14iygXOtPqOWTwaYjwb0Zx9BW5KQ6D3VrbL5qsjDL%2BDKvamFzaVUmwiyvr1U0xUVtW%2ByQoPPS%2FqoJ1Aw4BUGQyjWTXAh8Z9qvJF3WIUpGzS%2FiVi63Q1BghKXwhSY%2BpsZSNhvp1Ef2LzUoFQnPlEQQ5ge6EiIqz%2BpRIPqeQPLlgtdj4RmtE0R2gQqtaI7hIs4FY3j7X9hgeMFCVgp9R1JUClc%2Bn2fhntAPDaHakmCjFpDo8DuozjzeryucvqYJ0WK1PAxYN8TElIahsv0jBY2K74vEzViOJwEvmZMUHAz8sl%2FGi5pKTZAf%2FNUoFiRkk8ll7%2Bz5Ol3XGzPdMLa97tp%2BqALmZkvIsIqj91gtZVtO3t%2FnygbgR3vJrlSYtefUaOHRm%2FXZSdMyJ1sMUOXCnWoTCbu7OCIW4PRFXZHEjo06tCBlacfA33lQBumhOprKE5tHBQnNGkTb%2FQInnwecpaSIH1V9JNTWaJkcusnv3fCTtwHTCizvW8BjqkAS%2FrYdfrSO9GKOJmh5ieEejKF3KXHY4ReSZn46S0R9GaB%2F9fNfJL2LEOh7NzFYvxE7s3miIsAUzdEdze5QzmGt3WjQ07O%2FSSzZnOZghunf7sK5FsWi9KOwmMBbhx97g4SUImeFD%2B44U0YJgwbiwA1Se2CSZDXus5g7eDoTwhxLaCIAt6LRLTC4KkUeq8A4QL61ipxFnAxqncxLMdHrjCpZAzwgA5&X-Amz-Signature=c206a5340b4efbcabc54effe26597f844d8d9c0c63623c6df32d9744aef97273&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
