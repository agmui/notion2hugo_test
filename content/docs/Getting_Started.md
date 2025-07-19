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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWJGW3Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEurUwJdWSJBj1XnJFtaXqgc2rHBP6crrB%2BVSJBDvljgIgFveIwNSLQsGn9bpKNESytI8qBshbeY1wfTEHDxSQeFoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxTPaX6eaIRFbVDASrcA7qX%2Bko47djae5EVKSyyVD%2Fc3EtE7UoXXrM%2B01XugPWpQfZVrwCFkJ3553%2B2vwwkjH%2Bqn5zFQ7FJtE7MV2PE8uDAAztaj9byu5SJ%2BX0a0FThHpIRv4hExIxRf%2F2SgS3N2aDs5xJps76CLlNeL0w8bk%2BU5lMP755o1osisyp3P85cxQCHp%2F0Orq%2BI%2FjcmKmOQzWS%2FLKuXPb6GItL19cJaJuIt57FFLoVve7aK%2F%2BeFsKE7GWbasbuAuiCWihsrQ2twXfk%2BH2eSxnyyZHREXBCiMtf9P6qPQEgeQMOQIFPuq%2F1CtdqmODQK5Q8u1MsruMIgy8c8MIi6BOYsIEvwp8nT7BSnsv7F0Oj0sZVcjjkdNCNZHancG3iN6keLHQsH8XwfdMNG04ksIf3%2Bh1cpmuROqv2%2FoHa%2B5ApE%2BmPBPikqCvaiw0sYfwlTdCeqQOJBUfPDheP7KuvN0Ws7jVqejUOA17BTj2nmzDp7qOB4M3NE1tkYO8nIykxmEFZfFukqnFkdGe8EtmIWa%2FOIgZXEtOBVRoHf6nNlqoyvg7WwQNFr1pILgi84lAE23xwe9p6q8OQ1q0C1xgcqfV%2Bj%2BeTs04KmTPQnVhf06RMlwEfZpiFo9C0TXLK8dPbl%2BNuMpiBXMO637sMGOqUBh37%2Baxr6DQXGG26xFKcn1bbB4VOe09hQfBL%2Bcun4ASA1HR%2BmeVvIZttzEyPqq0vsPimuX06409CeYSGs23L6JeRUKFg8RL3cpehVIN91p7G%2BR8WCCkXWLxoz%2FJdP3MrFMtvO9fqBpWSdMc0zngB3q0IvS%2BCmQKZ9A1iJ9p%2Ftyt3rIibq%2FLpxlT8rpPHb0IRPZHybquERgl2N7idENT%2Bo91in2Uwh&X-Amz-Signature=8541a55426103ffca5e7814e505d614f36e1143edd1050a978be93f4b7490b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWJGW3Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEurUwJdWSJBj1XnJFtaXqgc2rHBP6crrB%2BVSJBDvljgIgFveIwNSLQsGn9bpKNESytI8qBshbeY1wfTEHDxSQeFoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxTPaX6eaIRFbVDASrcA7qX%2Bko47djae5EVKSyyVD%2Fc3EtE7UoXXrM%2B01XugPWpQfZVrwCFkJ3553%2B2vwwkjH%2Bqn5zFQ7FJtE7MV2PE8uDAAztaj9byu5SJ%2BX0a0FThHpIRv4hExIxRf%2F2SgS3N2aDs5xJps76CLlNeL0w8bk%2BU5lMP755o1osisyp3P85cxQCHp%2F0Orq%2BI%2FjcmKmOQzWS%2FLKuXPb6GItL19cJaJuIt57FFLoVve7aK%2F%2BeFsKE7GWbasbuAuiCWihsrQ2twXfk%2BH2eSxnyyZHREXBCiMtf9P6qPQEgeQMOQIFPuq%2F1CtdqmODQK5Q8u1MsruMIgy8c8MIi6BOYsIEvwp8nT7BSnsv7F0Oj0sZVcjjkdNCNZHancG3iN6keLHQsH8XwfdMNG04ksIf3%2Bh1cpmuROqv2%2FoHa%2B5ApE%2BmPBPikqCvaiw0sYfwlTdCeqQOJBUfPDheP7KuvN0Ws7jVqejUOA17BTj2nmzDp7qOB4M3NE1tkYO8nIykxmEFZfFukqnFkdGe8EtmIWa%2FOIgZXEtOBVRoHf6nNlqoyvg7WwQNFr1pILgi84lAE23xwe9p6q8OQ1q0C1xgcqfV%2Bj%2BeTs04KmTPQnVhf06RMlwEfZpiFo9C0TXLK8dPbl%2BNuMpiBXMO637sMGOqUBh37%2Baxr6DQXGG26xFKcn1bbB4VOe09hQfBL%2Bcun4ASA1HR%2BmeVvIZttzEyPqq0vsPimuX06409CeYSGs23L6JeRUKFg8RL3cpehVIN91p7G%2BR8WCCkXWLxoz%2FJdP3MrFMtvO9fqBpWSdMc0zngB3q0IvS%2BCmQKZ9A1iJ9p%2Ftyt3rIibq%2FLpxlT8rpPHb0IRPZHybquERgl2N7idENT%2Bo91in2Uwh&X-Amz-Signature=a2b108ecce4c06be3f8c3c9064cb676146f42df572c5250bbb71b9b8ca595a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWJGW3Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEurUwJdWSJBj1XnJFtaXqgc2rHBP6crrB%2BVSJBDvljgIgFveIwNSLQsGn9bpKNESytI8qBshbeY1wfTEHDxSQeFoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxTPaX6eaIRFbVDASrcA7qX%2Bko47djae5EVKSyyVD%2Fc3EtE7UoXXrM%2B01XugPWpQfZVrwCFkJ3553%2B2vwwkjH%2Bqn5zFQ7FJtE7MV2PE8uDAAztaj9byu5SJ%2BX0a0FThHpIRv4hExIxRf%2F2SgS3N2aDs5xJps76CLlNeL0w8bk%2BU5lMP755o1osisyp3P85cxQCHp%2F0Orq%2BI%2FjcmKmOQzWS%2FLKuXPb6GItL19cJaJuIt57FFLoVve7aK%2F%2BeFsKE7GWbasbuAuiCWihsrQ2twXfk%2BH2eSxnyyZHREXBCiMtf9P6qPQEgeQMOQIFPuq%2F1CtdqmODQK5Q8u1MsruMIgy8c8MIi6BOYsIEvwp8nT7BSnsv7F0Oj0sZVcjjkdNCNZHancG3iN6keLHQsH8XwfdMNG04ksIf3%2Bh1cpmuROqv2%2FoHa%2B5ApE%2BmPBPikqCvaiw0sYfwlTdCeqQOJBUfPDheP7KuvN0Ws7jVqejUOA17BTj2nmzDp7qOB4M3NE1tkYO8nIykxmEFZfFukqnFkdGe8EtmIWa%2FOIgZXEtOBVRoHf6nNlqoyvg7WwQNFr1pILgi84lAE23xwe9p6q8OQ1q0C1xgcqfV%2Bj%2BeTs04KmTPQnVhf06RMlwEfZpiFo9C0TXLK8dPbl%2BNuMpiBXMO637sMGOqUBh37%2Baxr6DQXGG26xFKcn1bbB4VOe09hQfBL%2Bcun4ASA1HR%2BmeVvIZttzEyPqq0vsPimuX06409CeYSGs23L6JeRUKFg8RL3cpehVIN91p7G%2BR8WCCkXWLxoz%2FJdP3MrFMtvO9fqBpWSdMc0zngB3q0IvS%2BCmQKZ9A1iJ9p%2Ftyt3rIibq%2FLpxlT8rpPHb0IRPZHybquERgl2N7idENT%2Bo91in2Uwh&X-Amz-Signature=cd29b57dc3c9f46a30d50afa2046a603c175ecd433d2fa1096996232d04308bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSX3IZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa8Vo6BFBKPRKo6oZMy7vqzEuROGjtSD1vHIhm0koZQwIgCWo7MIl1N14Gr91r70jtYfuLk%2Fxxgk%2F%2FN4uY2apKByYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1noyPjQ5x3etkRircA5uOdKVTC3nBbJCu0MYO2Yn78NfFlwd7ilunpe5QXysC1vs%2B3XfsbOLHBspFp0%2FBPTKo96mUQH45ntXPzAEq8AKBUK3QUhZJYMXudWVqt0i7LK%2FRDocFgoc1VV2gubSHEzWAHSWvlYcH7chzi%2Fekjl1tjHt4H1lw1Rg9%2B64Q7sdqyx1k7qKbKQ5cgGQQJ3J%2BaBQBjka2dJ9XNU7Fte%2B24yEcUXClF3Kz2o%2BYnf%2F2ZsFIHSEE6v3n2qs5%2FOi02jrJTLsLM0bL2esajCLaAXbH3Q5rWGgjMIVZDLUqRsvkORlxeujHpGWaba6uNQtBm3doIZvAljlGN%2FutoVhR3lMGAiRA2pc6yxK1ygwUDIZDNZ%2F1KqSWHnkqhM1UFF3jZjS1jm2JCCP3T3hp4DKOwTaFFMNKg63UhDehF547q0pZRzCRsqjOJ8Y2pXfyiJNmAlIXddycN3QS%2BeX%2F0QUcMwgMfFiF9lN%2B9cXugNz1aZXI3cZoHV4XowZLMRHw2BCFT6Oe2QCLd2Ckjuna1gMQ4mbjBi%2Fopn%2FuzdqF8DbNuWGyLMQZP1SplDPvPdi8ZjIe2Fw40y0KIcZs1fX6nw8E310U4jFf%2B8sOnsxeLX6pK0mMnWGTkfsVGVt9pLQI74ahMNK37sMGOqUB1fAYOyBdw6CYqt8BgjsLsYdZkaB%2B9qIJJm64YH4Tbq4wDtGFX5VJkAGi%2B0PbbK4xO%2BfrL02s3dSnsi%2BdDj07AaOqO4BM8MnXrT9AQGP4wdtZ7vtUqXw4WEcfr%2BbkEHCmltIP7BU9qdkslI2etX%2F7htzzpc1D%2BqSYV%2BUCX3M89UNGz2sq%2B2qUnDYaW4mz2eOO%2BLMag6AfW5RKlYPLwBFQnYDbInfW&X-Amz-Signature=02387bb8096ec697d00ed6618327fa3b451538206f531e0c79926e686212d6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JO7EB7F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp0THR%2BqVuw1plAzKipDhNN%2BZ695Wdg1m56L43Zxei9wIhAMsRPiZeIRVp2hUKtHsS93KWc%2FPAkmj35Lf%2BaL8WrWKjKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmf9EA3NAi7DtTCIMq3AOHwBASUk55A8cvhMrgCRuLj2yn26EgBTDe9hvXpPoeNR2GeH0KMgMDetAqqx3zKzH6dLXxN4v9cbErXLvuSXAR1vIaBo0cIdgKl4xnOCJmlVmUR7JWjME%2FCMSSOBlNcykXt3szgZX4SDx69%2BFme0Ra4a44hIeQ%2FEiUhtE39vyykPsdBmq75%2FK6OwwKeK6MDJy4NYSWn8Apu4qDrKNj42GnN1tjjG6Om0M9uSwv%2FNrA2QRHos2FZWn1NfUHsrxyZ%2FrFc%2BIE1JXm%2FR37fjisnRBSyOcmrqVAHCZaT6udBgZQZgwlT2Kkxevnvi9oJOSPFM6Jtynhcm8DmrtGetgzsKXTx6v2yYWm%2B%2BZB7nAMxYi%2FMFA9x5RBiKtDgto%2FGNboVeciD%2BHVcHWERgbQHBLDn1yLaAKpFzbT8wSdxuvazxx2dnEHv0%2FuH%2F727bmIqJxVDfGXcuKdSfndvoNvh4e1ft5gsItRnvCho1DpILh5PjmovuoY7SokBNjwiHC%2B2LZ9V55NJr5974DsgRSQRq%2FBUdJqKMeF3JM4vkkgkAj5p80mVD0mq2amrvrR98NaY4HVt3tW37O6ZjQaFvEs8I7EPvqFEDrYsMCVoK4ytDk2VaPPP5AZ8QQTjXULU0umVzDFt%2B7DBjqkAUTRh6gvPIAnon4c7bd%2Fr%2F7fMRt1vJraUpRM320LtyJCaaraQZeyVWuQxWqmlHRc7dhCGOQdX%2B1vO4KD%2BjMBrR720UEBnbEc7Wl5k5Ex1bXlOfwoO1ofdfumq%2Bdx89fD2GJ82ILjYcqTD2fKyIMToFq2XUCbHj5E8uIEmR1e79Eb5PaEG20YUI71CkUTr5MDvfUhe6vE78jeDzcdDmrKqeg0MYBl&X-Amz-Signature=7a4d92429d48deba6a65705ab397fad6f58def52331887ff731f6650cda27e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWJGW3Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEurUwJdWSJBj1XnJFtaXqgc2rHBP6crrB%2BVSJBDvljgIgFveIwNSLQsGn9bpKNESytI8qBshbeY1wfTEHDxSQeFoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxTPaX6eaIRFbVDASrcA7qX%2Bko47djae5EVKSyyVD%2Fc3EtE7UoXXrM%2B01XugPWpQfZVrwCFkJ3553%2B2vwwkjH%2Bqn5zFQ7FJtE7MV2PE8uDAAztaj9byu5SJ%2BX0a0FThHpIRv4hExIxRf%2F2SgS3N2aDs5xJps76CLlNeL0w8bk%2BU5lMP755o1osisyp3P85cxQCHp%2F0Orq%2BI%2FjcmKmOQzWS%2FLKuXPb6GItL19cJaJuIt57FFLoVve7aK%2F%2BeFsKE7GWbasbuAuiCWihsrQ2twXfk%2BH2eSxnyyZHREXBCiMtf9P6qPQEgeQMOQIFPuq%2F1CtdqmODQK5Q8u1MsruMIgy8c8MIi6BOYsIEvwp8nT7BSnsv7F0Oj0sZVcjjkdNCNZHancG3iN6keLHQsH8XwfdMNG04ksIf3%2Bh1cpmuROqv2%2FoHa%2B5ApE%2BmPBPikqCvaiw0sYfwlTdCeqQOJBUfPDheP7KuvN0Ws7jVqejUOA17BTj2nmzDp7qOB4M3NE1tkYO8nIykxmEFZfFukqnFkdGe8EtmIWa%2FOIgZXEtOBVRoHf6nNlqoyvg7WwQNFr1pILgi84lAE23xwe9p6q8OQ1q0C1xgcqfV%2Bj%2BeTs04KmTPQnVhf06RMlwEfZpiFo9C0TXLK8dPbl%2BNuMpiBXMO637sMGOqUBh37%2Baxr6DQXGG26xFKcn1bbB4VOe09hQfBL%2Bcun4ASA1HR%2BmeVvIZttzEyPqq0vsPimuX06409CeYSGs23L6JeRUKFg8RL3cpehVIN91p7G%2BR8WCCkXWLxoz%2FJdP3MrFMtvO9fqBpWSdMc0zngB3q0IvS%2BCmQKZ9A1iJ9p%2Ftyt3rIibq%2FLpxlT8rpPHb0IRPZHybquERgl2N7idENT%2Bo91in2Uwh&X-Amz-Signature=886f7a27081d2d2cd549ff0d68393d5b3c1ac9afbce431489543a00c08ddf43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
