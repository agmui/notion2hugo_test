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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTMUONR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvOFuo2SI9Sr7ztNWvodInT0yLXeigwQHhdEGg5nLjwIhAL%2B4vQBDC1FKSYSwvn92MKqqZrI3lPrwfOuQaWpBfs8MKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUsYXjMtHlfg%2Fl22gq3APiJ0icHcy0r%2BaeaQi3ywhwM%2BNbASWXYrwY%2FyyYeqCmpJp0IBt1iukLfEbJgrnK5SFFeZ%2B%2B61uRKnHne5nV76NRCdTqP%2FeLqwVPzhI9K2eiYoNboc9r%2BKBcaj9BjDclCtiSnUY8t30O%2Fj%2BAVS%2FOUHpbBslRGgbgSpOuJNR%2Fvw2sHov4zfReUXH66xBsmtlHMz4MILT7gJnqn327UOY%2F1x58bXp1ehQh0EFnvuVbp%2FwAMqTcvQru%2Bzv6a57r93muzWVszYclN5sPp85daFIIIkss6SA6mCtKqordwwlS0pkQnwqIiUogRo0TIO2RvTItff88l7rarYDJFNl%2FjW5kewdIO1DTZdNPLIPyyN771vb%2FMWgHrZrZupLBcHKiocgH7OsauRXKnDEpBeR0ADIQg76MOrl5EMlv4TTNQA019TvbboPcCQOT%2FffFGkCGpDZTrzhKy46IgwEx0TEIFZcVNFkJuW6YuRfxDtFrfBqpYDp6Whg3msq2%2FnFTcYvYDa%2BUzs%2BzQmrHznfMxiDeVPyroKkx%2Bf0Tuz68PMIAC8sZPDiJIXq%2FTtBu0qxSRM7ul%2B1RocL%2Fc3lIwW887GBApfJK0TwKJgtV%2FxOqwt4bi1Mc2Nyq8C448Jm4D4faV2N8oDCUrqe9BjqkAdHk5A1hHab0g1vfU3VxZky8Qw8HxWWI0BBPy2e6AEQW7N%2Fvg%2FaVrUSHL%2FPZOZM9YOy5PtAdRcyy28IMNN49400CNgdFssZo8vXkFRfeeI1Q7hsxCq8obNwNtoiubxxc3OM49VZmKasUpBssWVZ4JaeQ2ghUFrZtZOOcPheHDv45B2YbK0gN9HOdkqPTNYbOhb%2F67NHEmqXulOjAtIvKtTeZKgxv&X-Amz-Signature=671b08a8198131ea292eaeb4af68c6252993923417460aadcf64bcc81e836707&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTMUONR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvOFuo2SI9Sr7ztNWvodInT0yLXeigwQHhdEGg5nLjwIhAL%2B4vQBDC1FKSYSwvn92MKqqZrI3lPrwfOuQaWpBfs8MKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUsYXjMtHlfg%2Fl22gq3APiJ0icHcy0r%2BaeaQi3ywhwM%2BNbASWXYrwY%2FyyYeqCmpJp0IBt1iukLfEbJgrnK5SFFeZ%2B%2B61uRKnHne5nV76NRCdTqP%2FeLqwVPzhI9K2eiYoNboc9r%2BKBcaj9BjDclCtiSnUY8t30O%2Fj%2BAVS%2FOUHpbBslRGgbgSpOuJNR%2Fvw2sHov4zfReUXH66xBsmtlHMz4MILT7gJnqn327UOY%2F1x58bXp1ehQh0EFnvuVbp%2FwAMqTcvQru%2Bzv6a57r93muzWVszYclN5sPp85daFIIIkss6SA6mCtKqordwwlS0pkQnwqIiUogRo0TIO2RvTItff88l7rarYDJFNl%2FjW5kewdIO1DTZdNPLIPyyN771vb%2FMWgHrZrZupLBcHKiocgH7OsauRXKnDEpBeR0ADIQg76MOrl5EMlv4TTNQA019TvbboPcCQOT%2FffFGkCGpDZTrzhKy46IgwEx0TEIFZcVNFkJuW6YuRfxDtFrfBqpYDp6Whg3msq2%2FnFTcYvYDa%2BUzs%2BzQmrHznfMxiDeVPyroKkx%2Bf0Tuz68PMIAC8sZPDiJIXq%2FTtBu0qxSRM7ul%2B1RocL%2Fc3lIwW887GBApfJK0TwKJgtV%2FxOqwt4bi1Mc2Nyq8C448Jm4D4faV2N8oDCUrqe9BjqkAdHk5A1hHab0g1vfU3VxZky8Qw8HxWWI0BBPy2e6AEQW7N%2Fvg%2FaVrUSHL%2FPZOZM9YOy5PtAdRcyy28IMNN49400CNgdFssZo8vXkFRfeeI1Q7hsxCq8obNwNtoiubxxc3OM49VZmKasUpBssWVZ4JaeQ2ghUFrZtZOOcPheHDv45B2YbK0gN9HOdkqPTNYbOhb%2F67NHEmqXulOjAtIvKtTeZKgxv&X-Amz-Signature=1244318af08ccc6d854ec8ae4d6a5ea4b3f1740f764f16b59775ac9c7448ab0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJEMK7CX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKktuUroPs2LbNSaoks2YyhgsjdYb67i65JUEYYo7VgIgT8oXMLpcBG8%2FaNyY6M2rZe9gNuQpZi2d5J9kWXVvdv0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjt0Q5pwKezenonNyrcA1Bv9942RY0K9fKnkIkLcUqqRuTm4O3hz9ojMOEHjfqf0HxKYAzNPfDf7ekEwLboDDLvwPcxNbZS%2BdH%2FlorwRETatO0J%2FN%2F3Yc%2FaVWla3xpCxJJuTFFq6RSH%2BLKP9btSPMK2T0i1vD8O3TDPH5oMEW9HsHwrp8Sxw3v3Q8D668BkOTzGUvEjCfkbSFJnvMVy3W%2FUIeKRctx6uyeSOcD4v6hX84zupL2DaHjwrkngD3FH34LvB%2B6IKCzMB5frbSqP%2FBwMrNfSrK5vovciyfvPWg7AC9lGBKFobf91FEH1lh5249nbrd42zgJ2bOukeyR5ylbVx%2Bfgv6MIX4WJvMgpxDznCPbeOCv%2F6s%2BozhNZRiT1T5SmzAtpA%2BC1OVFbJU1VaMCf90TgmgyrKgVIZr8JKawgNDIIsGoON69UyoM75qg1Ac5J3gm39CifCz542WnNFCCq6REp9kIqhWvPED%2BMzlr7lDVfKEKOvqikqYQPkYElLq65CAdIL84KA8AnJgzBxdRlHLmBKJwqkgVCz74qx%2FHw5j20QaWcHBHHKesDbAaJgVev5%2BYwLJQsjwzD%2F5YGdaMTGuSR20P%2BYJUb3pWWs1dtRuBfdMmucuVPqiOsG7ZjDYP5oUtEOWws6ueEMMaup70GOqUBa8Tdcceu7zX7%2FjFTdqhN8ssrgTmReIG3dFbAqOVgVzrxemu02p7LJQpwBt67RJ7TOwembFpMSmbdDYnjzSMuMw%2F%2FO9rm8fnLUdk%2FJVm5t6qAm%2BCAiftI9lgAOcuTnbRFw5IYE0ZZhMr%2BjPnBNupKfzI61Dt%2B5mj0yYe5nzJLU2rL2w4qWdZTEvDFlRHmNtrZVi3UGuVpboYuIspeByHm9tcmK8rE&X-Amz-Signature=8790ec345c5dfbe913af72bd99c11ec21b3256393cda4c011032aca1cd5f0a04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGXWWDK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBESNlqiTqqOEI1tzy2vkdjBm6yQ9nnhlZY%2FQ1MGkC2ZAiEAxUQk3GrNJgVdv0ffDL8ML8KSAKs%2FGBQV1tDu7a%2FeHn4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB%2BwyEe1o0oqZpwSyrcA3QfuctFkIXa41wbgDMJf%2BEzCLCVJwERaWMcdDc79LYmFpiEYy%2B83tcbzxttk5VTGt5HAHbUqrI0NHxyGv1oLRvNCIjAVGSjIxYAIW00azWxs7ENImoaiOwVBnXqS21kWFCrb3Y6JYqXew08AtU2aiYaVi7Kn%2FHfZ3abf6ipZoWgEDnta02fFoesmaTnonidTknXNBFac5awl0YvDiliCcAPjBKMujZexjJS6v3BT5aHvMnRDx2HWJ8t%2BCg5nFzSpLisVXErN1lK0imleRED07QlzbgXf%2BEe%2FukqQjRwW5BoYPi8stBlvUiQdlkFesMK1rIm03hywMPFIrs2iz7zMPVgmPbXIpi0iVmlIG0cAeZ06e%2BvuE4lQxFli%2F7vskb1uAr5GzEgBirMLuo33aadzGl6fkWycWC8CxxhM1CYz%2BhrS2fN83Iar%2FMjw7FVsFK9qHL6FfEKqTXkUoZmFB6vTx1P51IjF%2Bxe%2Fwy23Dgkt9%2BU76Hg%2FycfolFdqKjPEJy0wTSFCExOltAWlON7SvcVRn6bG5Ni3OfkdyKT8cGK2AQ0THWy2kBv%2Bs2ZSZc%2FhYAuHa4%2FNCRF%2B8zrlHs%2F9y9INpKgrA5wXfy%2B3k8CLBlzOyNkuc4JfMbpuR1y0qqpMLqup70GOqUBOF7xV5HzUUEaNLnlqp7sNvNg8mG6uhSkJf3d6DgcrKxIr7Vl0v0pgdoWg1rsjsNDIqIrsSW65IHN9XxsctzCrWLkZT0M%2Bh8XolGmSZ%2FPaUWQEiK8HMKLTVbC2OWkZGGfw2gkGDquasN5A0RlC0BP%2FMicaUf6%2Fi1ex4D8tJuUxGqzds0vJDb0ClkEW3j%2FwPwlLJgU27b5plXU%2FRe1SgH20Gt73FCE&X-Amz-Signature=630be68b96bcf5a1819e1af0239285721e19252bd60c33506fca228556223658&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTMUONR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvOFuo2SI9Sr7ztNWvodInT0yLXeigwQHhdEGg5nLjwIhAL%2B4vQBDC1FKSYSwvn92MKqqZrI3lPrwfOuQaWpBfs8MKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUsYXjMtHlfg%2Fl22gq3APiJ0icHcy0r%2BaeaQi3ywhwM%2BNbASWXYrwY%2FyyYeqCmpJp0IBt1iukLfEbJgrnK5SFFeZ%2B%2B61uRKnHne5nV76NRCdTqP%2FeLqwVPzhI9K2eiYoNboc9r%2BKBcaj9BjDclCtiSnUY8t30O%2Fj%2BAVS%2FOUHpbBslRGgbgSpOuJNR%2Fvw2sHov4zfReUXH66xBsmtlHMz4MILT7gJnqn327UOY%2F1x58bXp1ehQh0EFnvuVbp%2FwAMqTcvQru%2Bzv6a57r93muzWVszYclN5sPp85daFIIIkss6SA6mCtKqordwwlS0pkQnwqIiUogRo0TIO2RvTItff88l7rarYDJFNl%2FjW5kewdIO1DTZdNPLIPyyN771vb%2FMWgHrZrZupLBcHKiocgH7OsauRXKnDEpBeR0ADIQg76MOrl5EMlv4TTNQA019TvbboPcCQOT%2FffFGkCGpDZTrzhKy46IgwEx0TEIFZcVNFkJuW6YuRfxDtFrfBqpYDp6Whg3msq2%2FnFTcYvYDa%2BUzs%2BzQmrHznfMxiDeVPyroKkx%2Bf0Tuz68PMIAC8sZPDiJIXq%2FTtBu0qxSRM7ul%2B1RocL%2Fc3lIwW887GBApfJK0TwKJgtV%2FxOqwt4bi1Mc2Nyq8C448Jm4D4faV2N8oDCUrqe9BjqkAdHk5A1hHab0g1vfU3VxZky8Qw8HxWWI0BBPy2e6AEQW7N%2Fvg%2FaVrUSHL%2FPZOZM9YOy5PtAdRcyy28IMNN49400CNgdFssZo8vXkFRfeeI1Q7hsxCq8obNwNtoiubxxc3OM49VZmKasUpBssWVZ4JaeQ2ghUFrZtZOOcPheHDv45B2YbK0gN9HOdkqPTNYbOhb%2F67NHEmqXulOjAtIvKtTeZKgxv&X-Amz-Signature=45e6d8b10507f36db86d52308b3ad0803914fd214479888e5ad1b8027f1aaef7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
