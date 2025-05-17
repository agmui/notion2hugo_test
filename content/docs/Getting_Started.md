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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEGKUUW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQADWj8iH1uHIRASuSPCT9XWHNKIUhLS4CkbGDVgoULAIgJNNVgvHFTU4mUnrsp5B29PlCfEhUlvm7hwwKahFRYooq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO4lkdMi%2BqDRcfKqrircA76Tj2RDiJ1D%2BUtTnRJkf3kBrr%2FaVhDLipWNWvjx0IntYroCwR7ZS9SGlvW1DF7ljTiBNKrFTC%2BSNRIpOOzpfSrcMme%2BAVUfJwwuD2%2B7PKQYvxwnH5pTY3PrLgB%2FLXxb%2BQav%2FamWk%2FiZZJBQmAZly2F%2FDL%2FVtkOoxPDvmhg%2Fk0Yx4pSSzfosnUFByraxQkYbgnx7F0gofG1N1%2B9Wx3LbSqcs5OoOrikel9R1ChHcxSAONjBo733KbSQ1KOjMBhs0ZKCjXxx48SpJlFNmdBi4PDCOVeGa3JlfCZG6jiegZzupUqruRrqjNrtAFobyJUEGA%2BSXmB26ci0PwZqOCqY8fk%2FXx7fJEIg1ViRN%2BYt2ccq2cj1qjV4RDapOxMfRF8YBSYQtnBHaA3jYA05fgoSGPgjLe%2Bgmg6RDBMQtst9yXcmmttcjFhv7Ci%2FGdbVcjPy5QOVhAQuXpv%2FaJ9mqH4djBFkfP7MRa2cu%2BUlvdhhMXWHunZ1zctZDw0lnnAIzcwzLdv0xs3JXBFrbT%2BdYGQggpHvIPfBQD4Cjrpp5vHDoZDtb1VIB1%2FPAJAgjc%2BUYgmBFU8xHTcz4iQHGmRG8AjpeguFMBYfiCgJu%2B1Ir9vGb%2FkqW%2BuXjI89zya3Vb18fMMW2osEGOqUBPBk0VC0%2B9x06jsLB8K8Tf3V3FGH9LSFmCocxG36Fx6zTvP11oq6UTNzNPlscmiikhPp3ootG09%2FPToLcXTeSk5ORMWojOMPvxs%2F3pVCg5f8SUqmf3mcY2PMg9fj%2F8TnueVlq1Dw0hqsisW5ng6Vn4bLQznIwFJ7pjX2yiL7npAh7TOEpZylKj1pnKoImaN5T9JOAd35ds2Y68A9K83f9W2mlzx%2Ff&X-Amz-Signature=e87bcb73b72068ddbf23d3a03944cd488d3bb4357781cd2678a5da3158e572a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEGKUUW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQADWj8iH1uHIRASuSPCT9XWHNKIUhLS4CkbGDVgoULAIgJNNVgvHFTU4mUnrsp5B29PlCfEhUlvm7hwwKahFRYooq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO4lkdMi%2BqDRcfKqrircA76Tj2RDiJ1D%2BUtTnRJkf3kBrr%2FaVhDLipWNWvjx0IntYroCwR7ZS9SGlvW1DF7ljTiBNKrFTC%2BSNRIpOOzpfSrcMme%2BAVUfJwwuD2%2B7PKQYvxwnH5pTY3PrLgB%2FLXxb%2BQav%2FamWk%2FiZZJBQmAZly2F%2FDL%2FVtkOoxPDvmhg%2Fk0Yx4pSSzfosnUFByraxQkYbgnx7F0gofG1N1%2B9Wx3LbSqcs5OoOrikel9R1ChHcxSAONjBo733KbSQ1KOjMBhs0ZKCjXxx48SpJlFNmdBi4PDCOVeGa3JlfCZG6jiegZzupUqruRrqjNrtAFobyJUEGA%2BSXmB26ci0PwZqOCqY8fk%2FXx7fJEIg1ViRN%2BYt2ccq2cj1qjV4RDapOxMfRF8YBSYQtnBHaA3jYA05fgoSGPgjLe%2Bgmg6RDBMQtst9yXcmmttcjFhv7Ci%2FGdbVcjPy5QOVhAQuXpv%2FaJ9mqH4djBFkfP7MRa2cu%2BUlvdhhMXWHunZ1zctZDw0lnnAIzcwzLdv0xs3JXBFrbT%2BdYGQggpHvIPfBQD4Cjrpp5vHDoZDtb1VIB1%2FPAJAgjc%2BUYgmBFU8xHTcz4iQHGmRG8AjpeguFMBYfiCgJu%2B1Ir9vGb%2FkqW%2BuXjI89zya3Vb18fMMW2osEGOqUBPBk0VC0%2B9x06jsLB8K8Tf3V3FGH9LSFmCocxG36Fx6zTvP11oq6UTNzNPlscmiikhPp3ootG09%2FPToLcXTeSk5ORMWojOMPvxs%2F3pVCg5f8SUqmf3mcY2PMg9fj%2F8TnueVlq1Dw0hqsisW5ng6Vn4bLQznIwFJ7pjX2yiL7npAh7TOEpZylKj1pnKoImaN5T9JOAd35ds2Y68A9K83f9W2mlzx%2Ff&X-Amz-Signature=548c7408deac01a554072195ba44c62bf3a4539b6089ff9c52f26fc6640eb86e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEGKUUW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQADWj8iH1uHIRASuSPCT9XWHNKIUhLS4CkbGDVgoULAIgJNNVgvHFTU4mUnrsp5B29PlCfEhUlvm7hwwKahFRYooq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO4lkdMi%2BqDRcfKqrircA76Tj2RDiJ1D%2BUtTnRJkf3kBrr%2FaVhDLipWNWvjx0IntYroCwR7ZS9SGlvW1DF7ljTiBNKrFTC%2BSNRIpOOzpfSrcMme%2BAVUfJwwuD2%2B7PKQYvxwnH5pTY3PrLgB%2FLXxb%2BQav%2FamWk%2FiZZJBQmAZly2F%2FDL%2FVtkOoxPDvmhg%2Fk0Yx4pSSzfosnUFByraxQkYbgnx7F0gofG1N1%2B9Wx3LbSqcs5OoOrikel9R1ChHcxSAONjBo733KbSQ1KOjMBhs0ZKCjXxx48SpJlFNmdBi4PDCOVeGa3JlfCZG6jiegZzupUqruRrqjNrtAFobyJUEGA%2BSXmB26ci0PwZqOCqY8fk%2FXx7fJEIg1ViRN%2BYt2ccq2cj1qjV4RDapOxMfRF8YBSYQtnBHaA3jYA05fgoSGPgjLe%2Bgmg6RDBMQtst9yXcmmttcjFhv7Ci%2FGdbVcjPy5QOVhAQuXpv%2FaJ9mqH4djBFkfP7MRa2cu%2BUlvdhhMXWHunZ1zctZDw0lnnAIzcwzLdv0xs3JXBFrbT%2BdYGQggpHvIPfBQD4Cjrpp5vHDoZDtb1VIB1%2FPAJAgjc%2BUYgmBFU8xHTcz4iQHGmRG8AjpeguFMBYfiCgJu%2B1Ir9vGb%2FkqW%2BuXjI89zya3Vb18fMMW2osEGOqUBPBk0VC0%2B9x06jsLB8K8Tf3V3FGH9LSFmCocxG36Fx6zTvP11oq6UTNzNPlscmiikhPp3ootG09%2FPToLcXTeSk5ORMWojOMPvxs%2F3pVCg5f8SUqmf3mcY2PMg9fj%2F8TnueVlq1Dw0hqsisW5ng6Vn4bLQznIwFJ7pjX2yiL7npAh7TOEpZylKj1pnKoImaN5T9JOAd35ds2Y68A9K83f9W2mlzx%2Ff&X-Amz-Signature=d281efb3c014e105dd22a2df49b883acd622f88da8d00181f92d8c6caf31b92c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QPZ4FO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N%2F9he%2FZzuNAWyyqDlU79BNHi0VNXln0SLtQINqxeYgIgN7DOcefl5726xW4ip5Wo%2BmBlrw1E1FcO0rBy2IpJZqQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGpNVmWr0gPPcv0GJyrcA%2B%2FQP%2BrNglkhw%2ByVkiK8cskPvdI1RxbWI5grQ%2FRNWQum8EGhuTEs09ZKWOHwtccTq23%2BPVkPJaI9C0po2CmcnYa7ek3YGw3HVX4LtX6gpdiP58WazIuhVVN33BR3wFsC75NJAIBTUdqRYgfu4KQQrQxbsiXlwzXDL8vc34kspjy8H233fQxFEoJzvxS28UZ9os5iioKvqwFjpj6CNceVM%2Bj3Qv66AjdJEke1d%2Fzcnzo03vPrZKGl7bFv83vifJGR%2FiM7p59jE5%2FU5bdM2JNLNziLsYkoLGozc5drjzHfAKFbUaQmJdyT4mdNPoFwujqWPt8gIBoiph07soR5xYSjIoAS1MSuHA6a53v6%2B8Y2Qrtt26eHPn3KUWGcgLqYYjvxDMkF0LFXIythsg%2BrXMe8idHhKNI8WqpRYFxtlrrQsYXQTxNMPLEjfa9bByedhhSMxragy8%2B0pfQRhs6P2daMZK4HO9wuHowUXJwX5LZum3DgTVZhvkT0ofJwi9PaFRCjJr9ZtLrXQ1Yx1m4ZG%2Bp1U3J5sr32YMpPmH5oB7h1O5Qn2xYDkHbReAHEezM7faL0OdCgnEZCSc3erxNYdHwajcecfeV0DRq10vUXF6%2BbnpA%2FPFiN%2BPO6HjDGTETtMIvwosEGOqUBDdfquFKI61833%2Fk3G63csWjz3uXUMptmRWS6m64kndYlppG6onZMwa8hQDhP4gtLKhRvE9LE42Fx3ue2KnU%2FmO0d%2B2L2c0GKrm6knOzXt7U6UKCPOR2QAVlup7b8AOw9gnKQcCnTDZk8pTWusDGvw74V5rlZqicEox8i7cwJd45Q%2Bk65FHB%2FjW6jLpIYCrqp5nyQLNsrOXJJ8lhVPQ0tDQYyihxW&X-Amz-Signature=5a70e1c59d2babceb187f50022d6fc73e34c5108809965f76853acc8c3388964&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=74b9321787ed9b473207be1ecb69f0f194481e500a7f2bda9cd2e28490282c82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEGKUUW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQADWj8iH1uHIRASuSPCT9XWHNKIUhLS4CkbGDVgoULAIgJNNVgvHFTU4mUnrsp5B29PlCfEhUlvm7hwwKahFRYooq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO4lkdMi%2BqDRcfKqrircA76Tj2RDiJ1D%2BUtTnRJkf3kBrr%2FaVhDLipWNWvjx0IntYroCwR7ZS9SGlvW1DF7ljTiBNKrFTC%2BSNRIpOOzpfSrcMme%2BAVUfJwwuD2%2B7PKQYvxwnH5pTY3PrLgB%2FLXxb%2BQav%2FamWk%2FiZZJBQmAZly2F%2FDL%2FVtkOoxPDvmhg%2Fk0Yx4pSSzfosnUFByraxQkYbgnx7F0gofG1N1%2B9Wx3LbSqcs5OoOrikel9R1ChHcxSAONjBo733KbSQ1KOjMBhs0ZKCjXxx48SpJlFNmdBi4PDCOVeGa3JlfCZG6jiegZzupUqruRrqjNrtAFobyJUEGA%2BSXmB26ci0PwZqOCqY8fk%2FXx7fJEIg1ViRN%2BYt2ccq2cj1qjV4RDapOxMfRF8YBSYQtnBHaA3jYA05fgoSGPgjLe%2Bgmg6RDBMQtst9yXcmmttcjFhv7Ci%2FGdbVcjPy5QOVhAQuXpv%2FaJ9mqH4djBFkfP7MRa2cu%2BUlvdhhMXWHunZ1zctZDw0lnnAIzcwzLdv0xs3JXBFrbT%2BdYGQggpHvIPfBQD4Cjrpp5vHDoZDtb1VIB1%2FPAJAgjc%2BUYgmBFU8xHTcz4iQHGmRG8AjpeguFMBYfiCgJu%2B1Ir9vGb%2FkqW%2BuXjI89zya3Vb18fMMW2osEGOqUBPBk0VC0%2B9x06jsLB8K8Tf3V3FGH9LSFmCocxG36Fx6zTvP11oq6UTNzNPlscmiikhPp3ootG09%2FPToLcXTeSk5ORMWojOMPvxs%2F3pVCg5f8SUqmf3mcY2PMg9fj%2F8TnueVlq1Dw0hqsisW5ng6Vn4bLQznIwFJ7pjX2yiL7npAh7TOEpZylKj1pnKoImaN5T9JOAd35ds2Y68A9K83f9W2mlzx%2Ff&X-Amz-Signature=44421d1c60558d8433077623605a3f19ce9f3c2cc6fe6b985c43e19dff146794&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
