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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7MXGP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCMuJqNSvxSgkuvJhOe%2Fn%2B3aVliYE4WBuyScqNqpRUQQIgKAWxMKLLb1axwRUn6W0P268nsor6ZUaZfe%2FOxSPZdfEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDII3vmXTh%2Fz83HmD7ircA9QJvqCbhQY%2B8gjOqjmwVevYvqqhufe9k8x18Z418AE0kW6eiwfxX3wZTbZlPbx0qE2MsI694FCEdh%2F2pgM2ehs%2BOj6uoun%2FQY%2BnNz3j3htvF%2BcUFFghqBK%2BNnte9mVKQoqCVXSdOcpF8NP2LCcz4rNpvgaX1rkMI376u%2BH7CKKEJSEPhbDvskU57bVDUFwsD4gkl5GDL5GW8i%2BNi7jX7EsVAJzQWIsjow%2F%2FBp%2BW1GQfHobd5iHNofoxuXRCrshdTdW6q3uDDue90Af1LbYdbRh5i7JDJW7WvoLANpfeM085Hz%2BZrTZWxwlPPsGDLm5j%2BpRAZU0NGIu5RG3d6eL31qaZUyLksjIZ13c1Vi18L8g%2Bw%2BbvfrCRxbf91kIfKuUImyhPUctQv4Rt8Ml8mZo6mFzDWr5JKol7Y1XAn5atM9QmadnHF8Y2LYg84dlCQog9RCp5FmDbgBFOCO3gYgiuGkC97WKXEQ%2FTO0RoR2gHv%2BSuDz37ktbr%2F8Yo4R1HUMMAltnXcwwzcvYTnk9VtXtGyM0WnIUdvwPdhI2bHJRDcMFcSugr8AZ%2Bx1668mWpM%2BvUmwNEiB5uF5h8ArJCb9ejO0Tw2%2BD%2BuESFL2h2EnBuZumugKWCa1e5QS5iYhPcMN32t8IGOqUB665LKEV2HtYtu95iTUiIGnHXgqrZWC9Byt0tK2Vrv7GTTwyQBa7VqRXsuVPnl90i%2B8CCVWkobV%2BJcf%2BQPj8GUHsIel%2FAN2lL7wTPGhnS5Z7%2F4Y5waRSuRSoUiglzu3vHqV%2BEPLrqoOkvAczJ%2F72ttSlSTsxWebzrzUAvV%2BFHjDR4%2FaePd2hlaX0gylNei%2BJel5LBW9YDtSgwsYWKGVgjl4g6UIcf&X-Amz-Signature=ea79bc56a0cafd47dde649f69b4e2656a17f8fc6d6a50b0e15abc1c89aa86d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7MXGP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCMuJqNSvxSgkuvJhOe%2Fn%2B3aVliYE4WBuyScqNqpRUQQIgKAWxMKLLb1axwRUn6W0P268nsor6ZUaZfe%2FOxSPZdfEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDII3vmXTh%2Fz83HmD7ircA9QJvqCbhQY%2B8gjOqjmwVevYvqqhufe9k8x18Z418AE0kW6eiwfxX3wZTbZlPbx0qE2MsI694FCEdh%2F2pgM2ehs%2BOj6uoun%2FQY%2BnNz3j3htvF%2BcUFFghqBK%2BNnte9mVKQoqCVXSdOcpF8NP2LCcz4rNpvgaX1rkMI376u%2BH7CKKEJSEPhbDvskU57bVDUFwsD4gkl5GDL5GW8i%2BNi7jX7EsVAJzQWIsjow%2F%2FBp%2BW1GQfHobd5iHNofoxuXRCrshdTdW6q3uDDue90Af1LbYdbRh5i7JDJW7WvoLANpfeM085Hz%2BZrTZWxwlPPsGDLm5j%2BpRAZU0NGIu5RG3d6eL31qaZUyLksjIZ13c1Vi18L8g%2Bw%2BbvfrCRxbf91kIfKuUImyhPUctQv4Rt8Ml8mZo6mFzDWr5JKol7Y1XAn5atM9QmadnHF8Y2LYg84dlCQog9RCp5FmDbgBFOCO3gYgiuGkC97WKXEQ%2FTO0RoR2gHv%2BSuDz37ktbr%2F8Yo4R1HUMMAltnXcwwzcvYTnk9VtXtGyM0WnIUdvwPdhI2bHJRDcMFcSugr8AZ%2Bx1668mWpM%2BvUmwNEiB5uF5h8ArJCb9ejO0Tw2%2BD%2BuESFL2h2EnBuZumugKWCa1e5QS5iYhPcMN32t8IGOqUB665LKEV2HtYtu95iTUiIGnHXgqrZWC9Byt0tK2Vrv7GTTwyQBa7VqRXsuVPnl90i%2B8CCVWkobV%2BJcf%2BQPj8GUHsIel%2FAN2lL7wTPGhnS5Z7%2F4Y5waRSuRSoUiglzu3vHqV%2BEPLrqoOkvAczJ%2F72ttSlSTsxWebzrzUAvV%2BFHjDR4%2FaePd2hlaX0gylNei%2BJel5LBW9YDtSgwsYWKGVgjl4g6UIcf&X-Amz-Signature=63c7efda7172a7a93bcda8f6dd9979da39a646c7778d1b305b576262fccbe129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7MXGP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCMuJqNSvxSgkuvJhOe%2Fn%2B3aVliYE4WBuyScqNqpRUQQIgKAWxMKLLb1axwRUn6W0P268nsor6ZUaZfe%2FOxSPZdfEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDII3vmXTh%2Fz83HmD7ircA9QJvqCbhQY%2B8gjOqjmwVevYvqqhufe9k8x18Z418AE0kW6eiwfxX3wZTbZlPbx0qE2MsI694FCEdh%2F2pgM2ehs%2BOj6uoun%2FQY%2BnNz3j3htvF%2BcUFFghqBK%2BNnte9mVKQoqCVXSdOcpF8NP2LCcz4rNpvgaX1rkMI376u%2BH7CKKEJSEPhbDvskU57bVDUFwsD4gkl5GDL5GW8i%2BNi7jX7EsVAJzQWIsjow%2F%2FBp%2BW1GQfHobd5iHNofoxuXRCrshdTdW6q3uDDue90Af1LbYdbRh5i7JDJW7WvoLANpfeM085Hz%2BZrTZWxwlPPsGDLm5j%2BpRAZU0NGIu5RG3d6eL31qaZUyLksjIZ13c1Vi18L8g%2Bw%2BbvfrCRxbf91kIfKuUImyhPUctQv4Rt8Ml8mZo6mFzDWr5JKol7Y1XAn5atM9QmadnHF8Y2LYg84dlCQog9RCp5FmDbgBFOCO3gYgiuGkC97WKXEQ%2FTO0RoR2gHv%2BSuDz37ktbr%2F8Yo4R1HUMMAltnXcwwzcvYTnk9VtXtGyM0WnIUdvwPdhI2bHJRDcMFcSugr8AZ%2Bx1668mWpM%2BvUmwNEiB5uF5h8ArJCb9ejO0Tw2%2BD%2BuESFL2h2EnBuZumugKWCa1e5QS5iYhPcMN32t8IGOqUB665LKEV2HtYtu95iTUiIGnHXgqrZWC9Byt0tK2Vrv7GTTwyQBa7VqRXsuVPnl90i%2B8CCVWkobV%2BJcf%2BQPj8GUHsIel%2FAN2lL7wTPGhnS5Z7%2F4Y5waRSuRSoUiglzu3vHqV%2BEPLrqoOkvAczJ%2F72ttSlSTsxWebzrzUAvV%2BFHjDR4%2FaePd2hlaX0gylNei%2BJel5LBW9YDtSgwsYWKGVgjl4g6UIcf&X-Amz-Signature=68c9407aca9399843ee8c896ce59b555e2f96ad6bb9814f67f73ac6a3761085b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UTERNA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCnThcUIuoEYkmuZ%2Fmoedmf27cHeZWrVaeu6oe9KCoT2gIhAL1GPTNzexoQDeOptPxYzIxc0eeTNyEIgnVPsvUu9yS3Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwyduoHKGKBsoiA7scq3AOFi0SU3gWN%2B38vXslNtGRE76s%2B8TXAHgUCL3A%2FDLV7E0Ihmg2HfiXnpG0RHrUdXgAEqVbd9%2FbUcG4UdY3ztBO92jFHZB0nmHIBR1rv%2FnuyZwJDNp8KiPddNu8hhgcKwnlDe3GgSLlWuhl51kvX7W%2BVLpbRA4X7AYRueucGyO90h7XpYRCIF1YtFW3w%2BJ6mrWEwV1C98Mra%2F796h5uCg6j1kTqSI47UUyNSB166UYi0WY6uDlLjVkej%2FD0svuB5D0euuyhEgJvri8YRMCSaS%2F%2FUeZp3CTMl0qxOVBC%2Fi1sx%2FWHyIk7%2BKxlxfvZZUQdQjPmjRI5V1H1jfDZqwQA5mRZ3DhgLbJiFpDJ2ufg6I4LyA8gPR1qArxWXJ1x%2B7xnfIC7Wz8FIx4NkAmx1tL0IXdQJ%2FHFZwo5aagpeuT3faFm1gBPpm9Yyof7VlKZRedRr%2FRHT9AVuCOhPFUYxsdRwIzT%2FdVmOUFwD8Ou2TPQswOdAA0Bar1EKsk0xCg%2BMXT6i60E0dU6Nn2yyvqeOqto4PfzFvg7QUalZo1fREpljtB50mbpvrGa5L43miqcZ%2FKKzboeU4RgtGXgL8%2BZZ%2FkhaalmyzBBqVUb8tJF%2FwCQEQ6LJ9W9I2VSVrx4MW9dfHTCn9rfCBjqkASWfv7KvaQ4NaYU0Q0hd%2Fh%2F387q4dkGjBytMhD5KM%2F%2FPHfBhobxfp56KvTTFWs9khWtTUSaESxRwbiqsxWDftRozyOvKx6UdEZBI5pbeGmoEImJw9HMYmVLy6XmASyfDyzdhdufmw%2BVYdTeWNkevECZaLiQKaoXDBuz92%2FPrenouir3f2FGz2VTw5Snu%2FO9%2FNrIMfl7YHVo2GCykde6zd00CxkGj&X-Amz-Signature=7dbc10a8da4e28c2332a777908c1c6288c8ed266f3836d4f951f73421bf61f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLSX6T3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBKaKTOVKnqt%2BPGSBRfVzzZPJ1itl5NS1osfHCviHOmeAiEA3077Kz1RxKX0W6AFyI4Y1wTMvnAfkxFCvxbRNn0DWvUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKV2MhPrYUa5xJjHrCrcA%2BLYd1T%2B9m5J06Zm3nf3Pmz2QZ0D%2FfNjh%2B5QLo6h5MeLaHwO6olHtXihVdt4MArj4fAOouRT5FH1JRz3CQLr8eG9yFdDortA7s2lgt8Ynky2l6jzTybqSj0nWfqicc7%2BACljjQw%2FeyVclm2DfTDfWyKbRfP%2F7BFqEa%2Fd3H3sAbNcMyzBvqAjk5f9CDqi5mpw22fBdrrhO8rgItMZpz1LI7Z105s8tmIwyyStwFJsVGakXMfTCYXVYxOSIWZ4MZrX%2F4iqJ2Jg3p%2BccYjjeHfvRufo4efws3tMaxouLniBfUvirT95u64%2BuzB8WoWiCtrDr7Ocj8lxjkgSL4dSv0TGJdQs3N9efN4gf4OaScJ39cFj4k%2BnN4UnaQZr1dOzPmuv%2FBtAlq%2FBQUIl5ns9jVa53sTXCW92o5zcmKlKD%2BkoV6oI000BE5EAVxu0AWSMpA5UCryENXEL9sBt%2FkK5X7Pkja2bhYXce5pGChiXs%2BiMyktRDYUqMnBHtqL9K2qpod39Fw8s6T78Q95oLMTz89nna8DgOMg5ilZLq51H3PAVgPX0H6uIz7dPykPD%2BIzYwuxTJy4ciHPhuzPy2ozmDO8JB%2Fzk%2BUd7KEWD8MGzESb20ZpOo9XEr5ZY0SU8QGJVML32t8IGOqUBJWwtzt4lmrefdyfibJoZyQIGkVItUhF6UtvaBqwag%2FO8BOuSKa6DQPbkL8CF0xs%2BXQ9%2BYKNmpWN4B82CCIsYHYoDqHhnD%2FGPR%2ByT5PtsC%2BvzyQxceRQ12C%2BwlVkgaDqtiO3NjHE39wxOKl8KuLya5MKu3yssaDwHbUKDXGT%2FfvGeUyFpIeqfXtmaxsi%2FUGvTjnT0mjwmjht8nc%2B0LA1RfXowAS8p&X-Amz-Signature=61d3e0aa2e50d460a7165cee7e930c210c8ea4ee737a953c5aa8fabb92830202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7MXGP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCMuJqNSvxSgkuvJhOe%2Fn%2B3aVliYE4WBuyScqNqpRUQQIgKAWxMKLLb1axwRUn6W0P268nsor6ZUaZfe%2FOxSPZdfEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDII3vmXTh%2Fz83HmD7ircA9QJvqCbhQY%2B8gjOqjmwVevYvqqhufe9k8x18Z418AE0kW6eiwfxX3wZTbZlPbx0qE2MsI694FCEdh%2F2pgM2ehs%2BOj6uoun%2FQY%2BnNz3j3htvF%2BcUFFghqBK%2BNnte9mVKQoqCVXSdOcpF8NP2LCcz4rNpvgaX1rkMI376u%2BH7CKKEJSEPhbDvskU57bVDUFwsD4gkl5GDL5GW8i%2BNi7jX7EsVAJzQWIsjow%2F%2FBp%2BW1GQfHobd5iHNofoxuXRCrshdTdW6q3uDDue90Af1LbYdbRh5i7JDJW7WvoLANpfeM085Hz%2BZrTZWxwlPPsGDLm5j%2BpRAZU0NGIu5RG3d6eL31qaZUyLksjIZ13c1Vi18L8g%2Bw%2BbvfrCRxbf91kIfKuUImyhPUctQv4Rt8Ml8mZo6mFzDWr5JKol7Y1XAn5atM9QmadnHF8Y2LYg84dlCQog9RCp5FmDbgBFOCO3gYgiuGkC97WKXEQ%2FTO0RoR2gHv%2BSuDz37ktbr%2F8Yo4R1HUMMAltnXcwwzcvYTnk9VtXtGyM0WnIUdvwPdhI2bHJRDcMFcSugr8AZ%2Bx1668mWpM%2BvUmwNEiB5uF5h8ArJCb9ejO0Tw2%2BD%2BuESFL2h2EnBuZumugKWCa1e5QS5iYhPcMN32t8IGOqUB665LKEV2HtYtu95iTUiIGnHXgqrZWC9Byt0tK2Vrv7GTTwyQBa7VqRXsuVPnl90i%2B8CCVWkobV%2BJcf%2BQPj8GUHsIel%2FAN2lL7wTPGhnS5Z7%2F4Y5waRSuRSoUiglzu3vHqV%2BEPLrqoOkvAczJ%2F72ttSlSTsxWebzrzUAvV%2BFHjDR4%2FaePd2hlaX0gylNei%2BJel5LBW9YDtSgwsYWKGVgjl4g6UIcf&X-Amz-Signature=480a12cf910e6739693ff95071d9ed4d10a855ae6f9d07aa1d4bb718f212fd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
