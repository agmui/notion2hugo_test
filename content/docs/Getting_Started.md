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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDHWXNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDROS2zTTBsLy0Aj8e95s87uMHvt%2BlhhohHwMadSn3WcAIgJtuX%2FyNtxu8RejcaQEuLqiBcLJxx1i7mY4JHUel6hiYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPajj4cp858mN2dqtCrcA1SxGD01ntUg4qO8dBhjcaBlGSy2a9VNh5dkOkPNHVcOBgNFir1IyUPI1hhMriltvpM66t1j3hxt5XoadE3Vxp0Y9z%2FDrBtwl4B0yD44j8zT5L4oBporQDXbEhcG1UcgzBFkKF%2FtcCX9LdObufivD571EmuhjUTWeJ7tJV7RFhrIFu1GCgR1GAHNkjiYDqAQz0zfSIVHEgOMqUzJzU7%2FuEVA7S7Y2jXCrwZG7Rdiv4vNUW6%2BFqN4cKH4YEfVV4D89Is5EsJn4PYJM4zhaTuXc0EOQzeLq%2BEUVQDngsthxBLPiUa48HYhWio5MAEXmKNUhZBPYb1yaiEYXhz9UwxnJLpWy8XJNNNbAranQxgtT%2Fq4wIVyxIqlF0Tw9Be32QInloxz8xXi1oAJbDSKLSVime4vM7kKb6VZRSrDk5tZ0rvG2SfQq70nc5bKgUyVR9iGSItC2dlChoNHx6qwwVoOvGpstWlZdKnCJlh2fX3V6wt%2Bzeneev6%2F%2BVgrnDHF%2Boy%2Bx2yvOlalyYoyI2YkM4S4JfWYIZRNk3cC8FPeEpCOBRLF1Vozhx8L2pKmrcYgzNjWLOnypwH0sN2ZATImxv7wIG9tnFexVhL9Xhf5OfP9EqNWwEFO9mQvJfSmbLxRMKOR3cMGOqUB3XJeietMZZQSN2P8z3nsV9gGcIotvOD2R7OeolteRKt0ikF%2BVO%2BqbxtAuoYPFuJLxq%2FEtxnn9L56F6EAYwgKmWMpZHsFk7w6FneCEPD%2BIUDKuAi%2BONPZ%2BxsuSed%2BpzG5F5P7vfXyFT7FHkhjpHwDczwOcjcMksd35frcANQSXE%2FxFNDgvgxTx%2BrXm8IYqe%2Fh7D67YnuP25mprN2ScSql8WXjdL7a&X-Amz-Signature=9c528f8c31c39a37231363febc4d5db564519f42df84a85d02b74a971ef671dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDHWXNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDROS2zTTBsLy0Aj8e95s87uMHvt%2BlhhohHwMadSn3WcAIgJtuX%2FyNtxu8RejcaQEuLqiBcLJxx1i7mY4JHUel6hiYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPajj4cp858mN2dqtCrcA1SxGD01ntUg4qO8dBhjcaBlGSy2a9VNh5dkOkPNHVcOBgNFir1IyUPI1hhMriltvpM66t1j3hxt5XoadE3Vxp0Y9z%2FDrBtwl4B0yD44j8zT5L4oBporQDXbEhcG1UcgzBFkKF%2FtcCX9LdObufivD571EmuhjUTWeJ7tJV7RFhrIFu1GCgR1GAHNkjiYDqAQz0zfSIVHEgOMqUzJzU7%2FuEVA7S7Y2jXCrwZG7Rdiv4vNUW6%2BFqN4cKH4YEfVV4D89Is5EsJn4PYJM4zhaTuXc0EOQzeLq%2BEUVQDngsthxBLPiUa48HYhWio5MAEXmKNUhZBPYb1yaiEYXhz9UwxnJLpWy8XJNNNbAranQxgtT%2Fq4wIVyxIqlF0Tw9Be32QInloxz8xXi1oAJbDSKLSVime4vM7kKb6VZRSrDk5tZ0rvG2SfQq70nc5bKgUyVR9iGSItC2dlChoNHx6qwwVoOvGpstWlZdKnCJlh2fX3V6wt%2Bzeneev6%2F%2BVgrnDHF%2Boy%2Bx2yvOlalyYoyI2YkM4S4JfWYIZRNk3cC8FPeEpCOBRLF1Vozhx8L2pKmrcYgzNjWLOnypwH0sN2ZATImxv7wIG9tnFexVhL9Xhf5OfP9EqNWwEFO9mQvJfSmbLxRMKOR3cMGOqUB3XJeietMZZQSN2P8z3nsV9gGcIotvOD2R7OeolteRKt0ikF%2BVO%2BqbxtAuoYPFuJLxq%2FEtxnn9L56F6EAYwgKmWMpZHsFk7w6FneCEPD%2BIUDKuAi%2BONPZ%2BxsuSed%2BpzG5F5P7vfXyFT7FHkhjpHwDczwOcjcMksd35frcANQSXE%2FxFNDgvgxTx%2BrXm8IYqe%2Fh7D67YnuP25mprN2ScSql8WXjdL7a&X-Amz-Signature=17fda7e6b8b48136d8b912d23296ee40969c782acfc99cfc3e5df852f877e4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDHWXNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDROS2zTTBsLy0Aj8e95s87uMHvt%2BlhhohHwMadSn3WcAIgJtuX%2FyNtxu8RejcaQEuLqiBcLJxx1i7mY4JHUel6hiYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPajj4cp858mN2dqtCrcA1SxGD01ntUg4qO8dBhjcaBlGSy2a9VNh5dkOkPNHVcOBgNFir1IyUPI1hhMriltvpM66t1j3hxt5XoadE3Vxp0Y9z%2FDrBtwl4B0yD44j8zT5L4oBporQDXbEhcG1UcgzBFkKF%2FtcCX9LdObufivD571EmuhjUTWeJ7tJV7RFhrIFu1GCgR1GAHNkjiYDqAQz0zfSIVHEgOMqUzJzU7%2FuEVA7S7Y2jXCrwZG7Rdiv4vNUW6%2BFqN4cKH4YEfVV4D89Is5EsJn4PYJM4zhaTuXc0EOQzeLq%2BEUVQDngsthxBLPiUa48HYhWio5MAEXmKNUhZBPYb1yaiEYXhz9UwxnJLpWy8XJNNNbAranQxgtT%2Fq4wIVyxIqlF0Tw9Be32QInloxz8xXi1oAJbDSKLSVime4vM7kKb6VZRSrDk5tZ0rvG2SfQq70nc5bKgUyVR9iGSItC2dlChoNHx6qwwVoOvGpstWlZdKnCJlh2fX3V6wt%2Bzeneev6%2F%2BVgrnDHF%2Boy%2Bx2yvOlalyYoyI2YkM4S4JfWYIZRNk3cC8FPeEpCOBRLF1Vozhx8L2pKmrcYgzNjWLOnypwH0sN2ZATImxv7wIG9tnFexVhL9Xhf5OfP9EqNWwEFO9mQvJfSmbLxRMKOR3cMGOqUB3XJeietMZZQSN2P8z3nsV9gGcIotvOD2R7OeolteRKt0ikF%2BVO%2BqbxtAuoYPFuJLxq%2FEtxnn9L56F6EAYwgKmWMpZHsFk7w6FneCEPD%2BIUDKuAi%2BONPZ%2BxsuSed%2BpzG5F5P7vfXyFT7FHkhjpHwDczwOcjcMksd35frcANQSXE%2FxFNDgvgxTx%2BrXm8IYqe%2Fh7D67YnuP25mprN2ScSql8WXjdL7a&X-Amz-Signature=e24ac268b8db99e79f18427e25867dcf83d2bc571ad1a052efa0aebab1aa4de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WNGUJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGz74HdPepR8FiY%2BRn2H5gVXWDuHlvP%2FFHjCRr1HhU1MAiEA0B622smia1%2FqbtxNNFS15xghv%2FEuf92yA7GJ7fzS3MMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDL%2FyKc3%2FHnaBpHMpUSrcA5r%2Bp0RNdB6p0N5kg8BmV%2BrAXOec2fFOStHj11iKFl%2FFk87toqR%2BkQRRJBk%2BmiRTKMKVG8YbroWZPjNr%2B06DemVxu84Mm4T12Y0%2Bqsq1B0ckAMoU6GVOLMkQ7N1VHX%2FiqJhezFqNho4YqmwN%2B3eQFoIqekhlxVXNQZMpEtashRXomS0KpE7SL4Xi1gAYexHk1jfyoxEZWWspbm3c7PiXKF29k%2B8qLOQp9EufjM0OUxAaHCqvYbrQq5fGvp%2B6F79MHG88OEcuRQ3dA30alyLXiLqDqwhYdaBq%2F0F3ZIaeom%2BCxeJi5iaXLHOr6sNcnkvlNfQFwgifH3ch9DnjyldXr%2BUkHd%2BQrppEXPCmLxDdw3kOLJB86X6tSWVjhXPGSD5bPIfrXzEfxxFRcuyt28VoFvtQDeIid7Pio4nZ4fm65%2BEEMAlnsHyfA3E%2FSY671TI%2F1ao94WyMcZ7SrTwkFZW6PPHTgrbRgKh4XcmCATCYPt4KlxERNjp9mtmKNIXUXLgr%2FC3Qtt6J%2FkaVdN6POgGZwsjGfSQOUwBejohgNUhryEFwljxmhK%2FKWGYdysxgrvOrsuA3kfA3n5Hp7a6yukl205iehDn7zUFviWaeTK7jSEFEYhtKf%2F%2FuBe%2F8sRcOMMyS3cMGOqUBDdxMcsZ33kR8GCsZkOHBv7sEjl%2Fk8azpa0SfJT%2B1wipOYMlNyMqqXggKNmPLP9UXNUp7BtmeRCs%2FAATzHgymUMzokobbUFAdWaZnthqEG689UpKF8EHFV8JJv319kB13w8km1SbGsB%2FldYiNIaGGM6xgjn0Sq7DzE85K85ZJbbRDQ%2B3f7xAiCE9NZUo80YMAOkOGP85bx6mrwaVlILGdaQTiC%2Fvq&X-Amz-Signature=6a1d27960768f403e588e0601a91841049030bd9d94eaec49ae057dffb9603f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSO2R2Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDnwhCm7urG6blOcMSWqgwbwVfGh8HgGxvKoJrZy3hAoQIhAPxubnlsQFVe%2F%2FdulGK7hufbs60iKCwDEyIJeJa1Bc0KKv8DCFgQABoMNjM3NDIzMTgzODA1IgwVT2vSY1eudJPBeTAq3AOL8zKnUOynSc1OfDF%2Bs3tLb%2BYnIQau%2F8WeoiSDTo%2Bo1YFJ9IuY%2FAPTQ6PRPH74i7A2zNTSm67pEkgCQQPE%2Fw4SmqCYGGR927DeVhlsF6ScelHnKZetvkUb29eSwortoLxrc33A58FrpngDFqYMN6H70VE%2Bp%2FZ64M7ix9oNMEM%2FEF08y1DQmr8OKjT1GJE2OV%2BoIBHPH1e53wi7k8o3B1a4lo6Co6R1yg9FDysWF5is9FZoE7XOdu34jRsmUZhWL71BcwOAo0DNQxe7rbIId4tfKV8HVpNltgVsExyTGOoCd5t0QfyxxqngTWMSllAQTpst6oS2tlyUEE1AIiwmXkGKVov2WwCEWxoDjPt5w9AWs4Jw0LVgTnsFPzOxpRyCNF1A53Ed4fpf%2FiC5sCawqZ3Sd3ehkBQBsItRz%2FVe4cHI%2BinZwkwRalcVEcShCV0OI4NDfuwZK1PcDviyY%2F0Dtagsmr7P%2FMIY5ehyX3nUvwaJUciGzq5PwqGu1UV5WZVB0dESYdsY9zmYEv431lErLBYc%2B64s9NJJjOvE5IE3R%2BGrBOixYiVfq1QKDqBJqZudvDrxmLQuKyJ4moK%2FhFbLdR7xHHYuIQnyibvMxSsay6JhnEjZI7s6uLIVfm53rTCjkd3DBjqkAaO4xeaXP9ygsNGt6weKrZ5XkaxDJiy15%2FsLLtZnJwE0ccNB4gsk2Ppjit9WkvKVB%2BYnt5Lgy%2BZ7ow1%2B%2BXu5k02WzSOaY8S5dNJFqLvyecdkLFZS5gyRgQQ%2FQfabkJasHF4xlh%2BqQaGr1BWaK%2FhU1vFbtRX6Ju9%2Fp9dyx9QGw1PWRjOIbXbOvVJA%2Fwf6nta1M%2FtrT%2FzpxGVFHJvgmu0diMtO2Usi&X-Amz-Signature=5ff0fe00939d5136782095ea8e6e9e92b1cbfcb493c4bf7f63c32a7dce49a977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDHWXNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDROS2zTTBsLy0Aj8e95s87uMHvt%2BlhhohHwMadSn3WcAIgJtuX%2FyNtxu8RejcaQEuLqiBcLJxx1i7mY4JHUel6hiYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPajj4cp858mN2dqtCrcA1SxGD01ntUg4qO8dBhjcaBlGSy2a9VNh5dkOkPNHVcOBgNFir1IyUPI1hhMriltvpM66t1j3hxt5XoadE3Vxp0Y9z%2FDrBtwl4B0yD44j8zT5L4oBporQDXbEhcG1UcgzBFkKF%2FtcCX9LdObufivD571EmuhjUTWeJ7tJV7RFhrIFu1GCgR1GAHNkjiYDqAQz0zfSIVHEgOMqUzJzU7%2FuEVA7S7Y2jXCrwZG7Rdiv4vNUW6%2BFqN4cKH4YEfVV4D89Is5EsJn4PYJM4zhaTuXc0EOQzeLq%2BEUVQDngsthxBLPiUa48HYhWio5MAEXmKNUhZBPYb1yaiEYXhz9UwxnJLpWy8XJNNNbAranQxgtT%2Fq4wIVyxIqlF0Tw9Be32QInloxz8xXi1oAJbDSKLSVime4vM7kKb6VZRSrDk5tZ0rvG2SfQq70nc5bKgUyVR9iGSItC2dlChoNHx6qwwVoOvGpstWlZdKnCJlh2fX3V6wt%2Bzeneev6%2F%2BVgrnDHF%2Boy%2Bx2yvOlalyYoyI2YkM4S4JfWYIZRNk3cC8FPeEpCOBRLF1Vozhx8L2pKmrcYgzNjWLOnypwH0sN2ZATImxv7wIG9tnFexVhL9Xhf5OfP9EqNWwEFO9mQvJfSmbLxRMKOR3cMGOqUB3XJeietMZZQSN2P8z3nsV9gGcIotvOD2R7OeolteRKt0ikF%2BVO%2BqbxtAuoYPFuJLxq%2FEtxnn9L56F6EAYwgKmWMpZHsFk7w6FneCEPD%2BIUDKuAi%2BONPZ%2BxsuSed%2BpzG5F5P7vfXyFT7FHkhjpHwDczwOcjcMksd35frcANQSXE%2FxFNDgvgxTx%2BrXm8IYqe%2Fh7D67YnuP25mprN2ScSql8WXjdL7a&X-Amz-Signature=2ac22ec44636f54735d33978de1d572894925145ddd79af5779b401395368161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
