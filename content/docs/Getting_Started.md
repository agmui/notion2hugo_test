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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNCANAP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDWVis5PureJJJwKPNGgT6PyY0lJuviE5sLuH108ci6gwIgETZ64Wx6AV0NSW5vgdPsn%2FEc6x2Ov2OtDLwR1C7Ch3gqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeSdXkYoa1X4pvkgyrcAztzwjx%2B79V9SX8iKXZ0CKPHMwtNxWx4B5oP6ofVNq4maeXgkEmrJukpFjB%2BDcEpicqsegMqNn8sBL98k0fzkpH%2Fp2tjtO0J%2Bza7POQop746fsbYiLFOMIvhjb6jwmAlMJkmayg460cgS8MUuRXEBGEU5%2FiAtsCUd6fZY5jpcr6xkKsCZV9CBBY0vJFWc8CEbY5oNTSSkGmHrjqsrJiihdEb6PyER5TRoIJV7YVAf%2BJxGDSTgxTaTOoFjvOFgWXRFjYFDib60KT4srqJrt3exZWgT40l4MpbVU2L0hvnUfTgX%2FFNoxtXWKBduZel4FrT9ofae6TwUfP0dcbWpf066477cYQ%2F%2FWLcAqIHkZzD2tV821WJOM3XKrbVFPB8Y%2BJYTPrey%2FZVdopA9zI7oiUcAr0hw6wGUT59FMsIqEx0C8qlWuLwo5lcYjKcKnJodiqICTIrtT%2BfjtsUW9iLT1nVwLDAQ2gA8ZRN8zJR1sv55oK%2Bw%2BoKGbAARCvt9yBElRRnLHVgiblJzNopZvZ0c1GyDqXgfhjLO%2FkblRxtqS7pmTkAQZ15jGrBm745evXN0hGYJyGb%2BynqZ5Rgs2nuAdajPZIxo4o7qpyUsGVibzOxcZgYXhSWMmaraxcfFsB7MM7o7sEGOqUBfAaBmmTN8I5QndLaC2P0sePn%2FXcLBTYpod0AYAfUX0IJL8g72o0krYg2RujquwzqSCROW1e7WwDdELiHqChx3WkqyYa3XjgKAAdsxLOrKmxQlGjzsxG2mqQ4T4sxJODaiKz%2BHr3QJ7lP3GkH5KPX2RX0Wo35f4uLMHd1sr6M92%2FDvHJTDorMrIkJRHpmUmFAEfgJkT9T2NyBluCNxZefqPtArOKD&X-Amz-Signature=af0d3c22c3c0c2f6063a5b552fc33a004e748ba80e9eb95be88d0d237804ef32&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNCANAP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDWVis5PureJJJwKPNGgT6PyY0lJuviE5sLuH108ci6gwIgETZ64Wx6AV0NSW5vgdPsn%2FEc6x2Ov2OtDLwR1C7Ch3gqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeSdXkYoa1X4pvkgyrcAztzwjx%2B79V9SX8iKXZ0CKPHMwtNxWx4B5oP6ofVNq4maeXgkEmrJukpFjB%2BDcEpicqsegMqNn8sBL98k0fzkpH%2Fp2tjtO0J%2Bza7POQop746fsbYiLFOMIvhjb6jwmAlMJkmayg460cgS8MUuRXEBGEU5%2FiAtsCUd6fZY5jpcr6xkKsCZV9CBBY0vJFWc8CEbY5oNTSSkGmHrjqsrJiihdEb6PyER5TRoIJV7YVAf%2BJxGDSTgxTaTOoFjvOFgWXRFjYFDib60KT4srqJrt3exZWgT40l4MpbVU2L0hvnUfTgX%2FFNoxtXWKBduZel4FrT9ofae6TwUfP0dcbWpf066477cYQ%2F%2FWLcAqIHkZzD2tV821WJOM3XKrbVFPB8Y%2BJYTPrey%2FZVdopA9zI7oiUcAr0hw6wGUT59FMsIqEx0C8qlWuLwo5lcYjKcKnJodiqICTIrtT%2BfjtsUW9iLT1nVwLDAQ2gA8ZRN8zJR1sv55oK%2Bw%2BoKGbAARCvt9yBElRRnLHVgiblJzNopZvZ0c1GyDqXgfhjLO%2FkblRxtqS7pmTkAQZ15jGrBm745evXN0hGYJyGb%2BynqZ5Rgs2nuAdajPZIxo4o7qpyUsGVibzOxcZgYXhSWMmaraxcfFsB7MM7o7sEGOqUBfAaBmmTN8I5QndLaC2P0sePn%2FXcLBTYpod0AYAfUX0IJL8g72o0krYg2RujquwzqSCROW1e7WwDdELiHqChx3WkqyYa3XjgKAAdsxLOrKmxQlGjzsxG2mqQ4T4sxJODaiKz%2BHr3QJ7lP3GkH5KPX2RX0Wo35f4uLMHd1sr6M92%2FDvHJTDorMrIkJRHpmUmFAEfgJkT9T2NyBluCNxZefqPtArOKD&X-Amz-Signature=a4d6740aeac68e1ab7f6c1aed3e94b0b7277fc58be1d00c60198a437e8e0526e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNCANAP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDWVis5PureJJJwKPNGgT6PyY0lJuviE5sLuH108ci6gwIgETZ64Wx6AV0NSW5vgdPsn%2FEc6x2Ov2OtDLwR1C7Ch3gqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeSdXkYoa1X4pvkgyrcAztzwjx%2B79V9SX8iKXZ0CKPHMwtNxWx4B5oP6ofVNq4maeXgkEmrJukpFjB%2BDcEpicqsegMqNn8sBL98k0fzkpH%2Fp2tjtO0J%2Bza7POQop746fsbYiLFOMIvhjb6jwmAlMJkmayg460cgS8MUuRXEBGEU5%2FiAtsCUd6fZY5jpcr6xkKsCZV9CBBY0vJFWc8CEbY5oNTSSkGmHrjqsrJiihdEb6PyER5TRoIJV7YVAf%2BJxGDSTgxTaTOoFjvOFgWXRFjYFDib60KT4srqJrt3exZWgT40l4MpbVU2L0hvnUfTgX%2FFNoxtXWKBduZel4FrT9ofae6TwUfP0dcbWpf066477cYQ%2F%2FWLcAqIHkZzD2tV821WJOM3XKrbVFPB8Y%2BJYTPrey%2FZVdopA9zI7oiUcAr0hw6wGUT59FMsIqEx0C8qlWuLwo5lcYjKcKnJodiqICTIrtT%2BfjtsUW9iLT1nVwLDAQ2gA8ZRN8zJR1sv55oK%2Bw%2BoKGbAARCvt9yBElRRnLHVgiblJzNopZvZ0c1GyDqXgfhjLO%2FkblRxtqS7pmTkAQZ15jGrBm745evXN0hGYJyGb%2BynqZ5Rgs2nuAdajPZIxo4o7qpyUsGVibzOxcZgYXhSWMmaraxcfFsB7MM7o7sEGOqUBfAaBmmTN8I5QndLaC2P0sePn%2FXcLBTYpod0AYAfUX0IJL8g72o0krYg2RujquwzqSCROW1e7WwDdELiHqChx3WkqyYa3XjgKAAdsxLOrKmxQlGjzsxG2mqQ4T4sxJODaiKz%2BHr3QJ7lP3GkH5KPX2RX0Wo35f4uLMHd1sr6M92%2FDvHJTDorMrIkJRHpmUmFAEfgJkT9T2NyBluCNxZefqPtArOKD&X-Amz-Signature=fd86e40c61f54a24192102cb9cdf98fef302f75f336c5ae4827c706c2a7cd281&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766BQAQN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICwJbpf6dXctK9HOJ7ZDwBnmTQCsnyxEQ%2Brj%2Bgn36RSBAiEAoHut2kWysvBjcfbik6PpGxhXt9PHRkoxR%2FIx9Njs3j0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0lJP%2BMRBK%2FeMbPVSrcAy8RbuPZwQg4xaYf%2Fxwh%2F9vv%2FKbEljjGqtV0s3ptTGj1ZF55SfVqDSAUOAq6CRUpFf6mPUq564K67sgN6c84aSlSAFWpVYqcekhAh%2FEbNAqWWa5VJYNmWcNW9n4b2PPcoAWjwEPTY%2B6pqu8boq1NTvxm2ut021SurE%2B0CNvpPs3gll8Ifufq7V03r0jDbth2zOZscCHzCLIDHk13ZRHbarq2Tyo%2B1vYQrOwDNkkRDtEf7c%2FGPY%2BRJoUbzN%2Bwa%2Fse8CIW0mugiBlq0PLqGaP5c00nal79VjvXqPtDxYLRU9i9gcxNYLdY6pGDjolUYmQ4MRsaTGCdQ3%2BJHB7Wk5v0ZLaZSn%2FjvTNGCVetRIb06Lo7OnOJDI2dxQ58qyZSUcNG1VJ22HbLJxQdsG%2BChkwcL36pKhf1X3jauN03FZ7WPdnoK2R9BFcjV1uxz2TdUVp9yia4KQxyaTXGcZISmu90FNePKH495TogAEpRQbkSKIDU3vHtHKEy7sKvUba4Ab1OpQUQ%2FUmW%2BfujXcpLVxbJAU2C2t5wuaJMICRWCUfPT61FGQTgLcHtCUO6G0fClTcPx7CxQUmA2LMcT0t65js1mvUSGfXFOJVXCEV0s2zfi5%2Bx9wD9jcoJf1cQelVRMJPu7sEGOqUBeAo4%2FQ1IGtCkTDrVzpYwxGapcorc4uUVtp2t8SDRI8zQ0c6S03VATKX82kwTawHpoYBeBdYCPCEMBCfC1HeODE%2FkYdoVKAepOAzx9XyCjGisvQlqsRl1jVqsCTu333akhAf5Kp4f2pVFTgCyYqVKM5NfsP9%2B4t%2F9Kb1JN3SewaaiGR195NzNikKCzd5L38XA4jj4qMozd5utfzb06M1rueAj9P9J&X-Amz-Signature=17229d408c3383774d84e7f2e60c8409b6547f0339c6076672e50108b6799b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHFKAZJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBcCdvRJl8nQCWnvrwequl4CKj%2BdLKSMnodO0dRstvbNAiEAmnpEOW7V%2FMdq%2BwqpwvhaQ27c9fzQYRADNnrfahLnB1wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCemxewecTVKORYoCrcA%2BrEvnsXYObCJDKPfTb14ZK58v16ODkPfoNvkp2%2Fg7A%2FgchDumBUEgVvdzx8xZ2wZEvENNiFzGWUB5Xu8ca0CHFdoa82labBLdMYwWRYSl%2F86yRjor7xZpX%2BPr2KhP519R6AN7bnWWZw0qe73w%2FJ2ePVjZC8G3Yf01zM3l7rUMLW6D1sVHceVuEz7tL4wuJfvjtcVaeAFcJhK8D10wYUVrE0OaEL02Mx6dqNx6NLMfwt1mAuyEA8rsw3RAxsDtDGriFLnIxQ900Tvs8CHjo%2BcZQ2aFuEbihjmku1m5Aod%2FGO5ImnYvSdWI5ILoNkaGGhzxMBoXHdrSkrJMFLlSzxuwSi%2BggOkoRMbdWSmHAtMNUYEIK3RpXV4PBTaTRDR9jvJMftIVIaWoZ1wOAblMoDqRdcfhn%2FYFFnIAskJErV8oRmvz8c5OmqoH2EJTytEBvtPUOZsPwCqKKyKwyUz4bymliGdAm1QJd3RS1X8C3%2FS8FnmTUnfATjYbCr1VEA8CX6ytOE8XEFqqATZLnGaJGjFfaz9ByTbi1Gu4A2MATDAB4%2FEtSmfoCXVlxA6z0sLWzJ2p2cb5ntb9A1Bpq%2FT%2Blf%2FkO657%2BqWggnnkiyhOyBkZ%2FHn%2B20zOu6dwrYjc5jMOmM78EGOqUBOwE%2FfqQEoYr1uWt9UU2%2B0pMA2CqNha5j7LbPk1UzTV3uqtaG2wlgGP9O5BSsAiDDkQ5j%2BRlQkthdza0raVxk%2BBzUm0756Bwd7xeS45p1P2x7s%2BwPIr0XElljUK9GkbNzKbmc3Ej1Gymn1rsFi3t1TwFrzlzETwH7w27P6N9yMO0lqWGhqtfpQQDK3Sud6HvfKB3VyHaE5TjMhX0lnBrk07Y4efhw&X-Amz-Signature=99147ca86bf3a1638d0c42dc3eec3b55b95f55cbe5407b44bd5348acb9e449a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNCANAP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDWVis5PureJJJwKPNGgT6PyY0lJuviE5sLuH108ci6gwIgETZ64Wx6AV0NSW5vgdPsn%2FEc6x2Ov2OtDLwR1C7Ch3gqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeSdXkYoa1X4pvkgyrcAztzwjx%2B79V9SX8iKXZ0CKPHMwtNxWx4B5oP6ofVNq4maeXgkEmrJukpFjB%2BDcEpicqsegMqNn8sBL98k0fzkpH%2Fp2tjtO0J%2Bza7POQop746fsbYiLFOMIvhjb6jwmAlMJkmayg460cgS8MUuRXEBGEU5%2FiAtsCUd6fZY5jpcr6xkKsCZV9CBBY0vJFWc8CEbY5oNTSSkGmHrjqsrJiihdEb6PyER5TRoIJV7YVAf%2BJxGDSTgxTaTOoFjvOFgWXRFjYFDib60KT4srqJrt3exZWgT40l4MpbVU2L0hvnUfTgX%2FFNoxtXWKBduZel4FrT9ofae6TwUfP0dcbWpf066477cYQ%2F%2FWLcAqIHkZzD2tV821WJOM3XKrbVFPB8Y%2BJYTPrey%2FZVdopA9zI7oiUcAr0hw6wGUT59FMsIqEx0C8qlWuLwo5lcYjKcKnJodiqICTIrtT%2BfjtsUW9iLT1nVwLDAQ2gA8ZRN8zJR1sv55oK%2Bw%2BoKGbAARCvt9yBElRRnLHVgiblJzNopZvZ0c1GyDqXgfhjLO%2FkblRxtqS7pmTkAQZ15jGrBm745evXN0hGYJyGb%2BynqZ5Rgs2nuAdajPZIxo4o7qpyUsGVibzOxcZgYXhSWMmaraxcfFsB7MM7o7sEGOqUBfAaBmmTN8I5QndLaC2P0sePn%2FXcLBTYpod0AYAfUX0IJL8g72o0krYg2RujquwzqSCROW1e7WwDdELiHqChx3WkqyYa3XjgKAAdsxLOrKmxQlGjzsxG2mqQ4T4sxJODaiKz%2BHr3QJ7lP3GkH5KPX2RX0Wo35f4uLMHd1sr6M92%2FDvHJTDorMrIkJRHpmUmFAEfgJkT9T2NyBluCNxZefqPtArOKD&X-Amz-Signature=d9937298ef141a2882a9c54a0601bba2d1edda10dd5ca570f18e87bf451aaa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
