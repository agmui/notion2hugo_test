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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7H3623K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGKhPHxw6MIERdkJbTWMKke%2B3JRZOuV1wUrufud4wRAIhALgH%2FYinhEQHyZ5H4R7rve%2FNxlGt9cQa9FEfqsD74XOJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKRBi3FFWJFeB6gr8q3AMqpbMKkqBJujfZSJyuRdUJvu9x88FUdwqv8Y7FTxNHmBtpAt%2BfQae0RTCq7NzcHsjEC2ZZ1t1ytVq2JyFTAqZ0JAaczfhPVxenERMaTMcw1myrkhmEmP4MlSDU9cGYZ%2FGPd3hAshBAVlHjFH4be8TRiFCBiz2Lpa8xmsFztjwx2jGlgp6QcQaPY9royucsVANhBU%2FkGiM3ZvG47w8UY0%2Bx0u1vB3aykXG2mZGJ%2FBKypve1ltV0Guqf8l439jFlZLJ%2BYew7ywOlxFkjYIf%2FKVtGH3UnQkKDRrMai3m2ZYRMUSyRmbA9X2UuUTckHVBZsq7MIMTAbjlTfB%2BbZF2Zv%2BT5LCk%2FukcvEk4ZCn9n1yfo02kFkC5ZQxr0znAEdN%2BH2ZSD3aRp1PRUGMJWlG1YfrMkApMcU7Uq7%2BlaoT2PSo6TQsAUApfJL5Bj6IHFlwLIPvwL%2FTRCWCctC4LoETooLyDtFzI28yyj6vIsjgzEi1hMhXenViG%2F3sDhvYBeo2drBcMWd%2FfGN5WsCIBcYUcDtZSfv1JITy2jfWlOLSe%2FBp3clsXtOY26eJdKlWeXetKU%2FdsFSPG7TDYCNs6QdI7SDjXGpTdsiWkK4PheiOXgNUlsxj6hg8Zb7l%2FGwepwyTDX%2BObEBjqkAelMV6VJmFAeRXp6JmcusenTahjAJlCoYqNZe5MR37avZG6fWbx6jWYjTJ58Nt8YPdZhWP0Kn3zoOaF3x1x5zYTu1hW6WhkYPOztaX1IDGqbk%2BgZdrEtiuZIgjNqDEMnQ10CaN0Qk0n35v3PhCPAYNzgiG2rRCglmBTBMoGwwR4qbuvzyKVvApWtrY4SfWMkmSa6GfqYFwnfaXsvjtmhzZDuMT%2BF&X-Amz-Signature=b60053782d3e37428694b7f7e4c0a26a684689485645ef3d52ae6755eabcfe19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7H3623K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGKhPHxw6MIERdkJbTWMKke%2B3JRZOuV1wUrufud4wRAIhALgH%2FYinhEQHyZ5H4R7rve%2FNxlGt9cQa9FEfqsD74XOJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKRBi3FFWJFeB6gr8q3AMqpbMKkqBJujfZSJyuRdUJvu9x88FUdwqv8Y7FTxNHmBtpAt%2BfQae0RTCq7NzcHsjEC2ZZ1t1ytVq2JyFTAqZ0JAaczfhPVxenERMaTMcw1myrkhmEmP4MlSDU9cGYZ%2FGPd3hAshBAVlHjFH4be8TRiFCBiz2Lpa8xmsFztjwx2jGlgp6QcQaPY9royucsVANhBU%2FkGiM3ZvG47w8UY0%2Bx0u1vB3aykXG2mZGJ%2FBKypve1ltV0Guqf8l439jFlZLJ%2BYew7ywOlxFkjYIf%2FKVtGH3UnQkKDRrMai3m2ZYRMUSyRmbA9X2UuUTckHVBZsq7MIMTAbjlTfB%2BbZF2Zv%2BT5LCk%2FukcvEk4ZCn9n1yfo02kFkC5ZQxr0znAEdN%2BH2ZSD3aRp1PRUGMJWlG1YfrMkApMcU7Uq7%2BlaoT2PSo6TQsAUApfJL5Bj6IHFlwLIPvwL%2FTRCWCctC4LoETooLyDtFzI28yyj6vIsjgzEi1hMhXenViG%2F3sDhvYBeo2drBcMWd%2FfGN5WsCIBcYUcDtZSfv1JITy2jfWlOLSe%2FBp3clsXtOY26eJdKlWeXetKU%2FdsFSPG7TDYCNs6QdI7SDjXGpTdsiWkK4PheiOXgNUlsxj6hg8Zb7l%2FGwepwyTDX%2BObEBjqkAelMV6VJmFAeRXp6JmcusenTahjAJlCoYqNZe5MR37avZG6fWbx6jWYjTJ58Nt8YPdZhWP0Kn3zoOaF3x1x5zYTu1hW6WhkYPOztaX1IDGqbk%2BgZdrEtiuZIgjNqDEMnQ10CaN0Qk0n35v3PhCPAYNzgiG2rRCglmBTBMoGwwR4qbuvzyKVvApWtrY4SfWMkmSa6GfqYFwnfaXsvjtmhzZDuMT%2BF&X-Amz-Signature=84083a977b1dc3dce40de476893402808b7219fc2e2a3527c59a532ed7975dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7H3623K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGKhPHxw6MIERdkJbTWMKke%2B3JRZOuV1wUrufud4wRAIhALgH%2FYinhEQHyZ5H4R7rve%2FNxlGt9cQa9FEfqsD74XOJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKRBi3FFWJFeB6gr8q3AMqpbMKkqBJujfZSJyuRdUJvu9x88FUdwqv8Y7FTxNHmBtpAt%2BfQae0RTCq7NzcHsjEC2ZZ1t1ytVq2JyFTAqZ0JAaczfhPVxenERMaTMcw1myrkhmEmP4MlSDU9cGYZ%2FGPd3hAshBAVlHjFH4be8TRiFCBiz2Lpa8xmsFztjwx2jGlgp6QcQaPY9royucsVANhBU%2FkGiM3ZvG47w8UY0%2Bx0u1vB3aykXG2mZGJ%2FBKypve1ltV0Guqf8l439jFlZLJ%2BYew7ywOlxFkjYIf%2FKVtGH3UnQkKDRrMai3m2ZYRMUSyRmbA9X2UuUTckHVBZsq7MIMTAbjlTfB%2BbZF2Zv%2BT5LCk%2FukcvEk4ZCn9n1yfo02kFkC5ZQxr0znAEdN%2BH2ZSD3aRp1PRUGMJWlG1YfrMkApMcU7Uq7%2BlaoT2PSo6TQsAUApfJL5Bj6IHFlwLIPvwL%2FTRCWCctC4LoETooLyDtFzI28yyj6vIsjgzEi1hMhXenViG%2F3sDhvYBeo2drBcMWd%2FfGN5WsCIBcYUcDtZSfv1JITy2jfWlOLSe%2FBp3clsXtOY26eJdKlWeXetKU%2FdsFSPG7TDYCNs6QdI7SDjXGpTdsiWkK4PheiOXgNUlsxj6hg8Zb7l%2FGwepwyTDX%2BObEBjqkAelMV6VJmFAeRXp6JmcusenTahjAJlCoYqNZe5MR37avZG6fWbx6jWYjTJ58Nt8YPdZhWP0Kn3zoOaF3x1x5zYTu1hW6WhkYPOztaX1IDGqbk%2BgZdrEtiuZIgjNqDEMnQ10CaN0Qk0n35v3PhCPAYNzgiG2rRCglmBTBMoGwwR4qbuvzyKVvApWtrY4SfWMkmSa6GfqYFwnfaXsvjtmhzZDuMT%2BF&X-Amz-Signature=877a7e0ed2b573a3156753fb58bd71d0b43db3a4767bbafc863fa78dd574f480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4Q5C53%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWt8MbiZmAbLLDo3XhutTtdPocXTU8OinEAhBQRCV88AiAJ6DVjae%2BY2Z0N6%2FE8zLZH%2BDbNQ80q19AxfF2SqrBzDCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5Wdc09XmGNkfyGsKtwD7YmUo9rQTIM9ANUuVMcl9Bbn54jkaayOJvQbIrbZYo%2B53dToLJN5UrI%2FdkCfuZL6kpLdHpUe0AJ1rbok1ZUPljrf%2BvNeT9E4AHTVqI81JPTbHqImW%2BPwdq6TMslIrumWMYBgjPzWC404HX5wGjBTQNT5Wdju34RkgoX3sbD6K7FBTSKCpVmFE6SjmcWa6NEmWt7Jmt9o%2BVk6O2g0SN%2F3OfkAF37YzOrtLF%2FKU6WxzVUu%2BB96NsQM%2BUi4T9DZk6zWk34qGgrvA5AdHV%2BkczUtre4YtrY1CULS7n5Mfhujp6GAtbo%2Bu0GxpufBeb%2B74qwgsJTog0Yvdy%2FmXO5yqUdzDeL3E6Eixn36WEMoZG0xaQb9E7P%2Bc95vEtsCz7l%2BmYB5VddilwF5EVbhC2IXwl1Atv3C1xzOGDDFu1rsr7R3ItmgZVCEq5k6Sb4UmUmmc2v%2BB340DziLTYElMGVvSfp2lK5zVnBs%2B93Z0wwF7Hn3U%2FsL2CB6cYK0xdeoSBm27UtxHC%2BHxYZDISiNhmULd03O0tb6xZ0vF8EwA1gtYXZpyxxUT7sWR%2FvFnSwQXIB1WLT6HFApXTkWpMy%2BlkmLjs98siGolcjaEh7GTzHSRPV%2Bl4%2BvQHHg7nneN8SXTnQw5vfmxAY6pgFRpNPaHuf%2Bw5LIdgjScINkFSS81bLO5MuCUtJNLDIs5v4fidL4RYJzNlTsQ3NEfs%2FGypabYsC0oovITcXy0PGOndV9UmfRqnzXCZcpFWjHDXhJ3mebPLeOaOkeInMo7X7kzR%2B9XoHxuY7PQVYEWsAw0G1b0PMNJ%2BSoNjVRQ82tL%2FtIEzohJv40RRBemDcbv47gvEKYVDvuKvN2ztA8NUAXwAobXN41&X-Amz-Signature=06ef3a0a87c2f2015d52b429e40023adf197005a4f451666b361ce5f25bc8411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRUCEHK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrKbf6RT%2FEW4yEFVYTJpOcZRpYOYOjJ9adwp4iqEuozwIhAOb3HGMUXRcIm3P0I%2FHhiz%2FC3Ibw5Q64D%2Bm5qfGfz693KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFOzy56KIejVRLVdwq3ANQsT07Lb7%2FVnMb5qzO2%2FPJ0%2Byo9rnoi2jV9PEhQPUsZOY%2BEqjcpC3QXRteefxFnq9G03BJ44%2Btqj47k6lAY5mUwgWoMhNnlT%2FcVpoOs%2BbzX%2BJqIdqKrzx62hwnpyBfR%2FRGl1VQBPQKL17hGNK6USm2oYyc2pD1jE2GTKbjiHraBG%2BUfnLfg24%2FIGHAneV3brbjp4QIKoVQbVrmoH2olyuKyUJoM%2Buk9VwmZ8qEVvBKyV0oVataYCqL%2FHgFPhOk2AJ%2BjcDpFrrTrCg3zMXbItBvL24w5Dz4Tdft9umbDkloC9hj0VYKzXqWNrZm3NkrRDIvWa5zDHL1495mBhI6hDtkx0hToeA1i%2FKz0yQVkOUBW2181Ey3qDebxJ9PqKjyJF%2F08lGmWneJd4eCOYHLSadYKn4bOGDaY4FDKk%2FjJY9DLdJkBhr%2FNPsDnScjnNHerVvera3TZHFnzklynFAO2UANanlf5OPw%2F%2BBxKqJqIZfAfimQtmkQrfQmrC9QR1ZuBxJaiq3w%2F4X%2FHhSG10D8z%2BW4GVAJChHa11ky7QTlUkOoRIFx56QiZyiHclPQrHIdgtIPPxScCZLlOBih6du9PC4IaZO0ruSTYYU0Tle%2FslaoJB%2F35kVpK1gShlWDKDDH%2BObEBjqkAbmdwoZtMnrqu4fJtPA5BplCQ1q8nV139JcawfDAddwflao2rSK4eJxtzY64yNOzDoBVf8YX%2BL01%2FvQkNTAxyOl%2Fnj63ClabdNOWdAfz3R%2F2%2Bw3BvzfcunGPgSWsvW6Z6jadrj1kdHjU1Z5zMBgpeIUC03V6gp2lgaZ%2Fimo0AY82VXBNLk3kaW2svdZDcUB9J57g3rTHWg5UJ1mvovafgdh8T9pl&X-Amz-Signature=6c89f98f8cba70347ffa1bb41dcf664ac5e05ebd46527a91276b45c5c7db7547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7H3623K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGKhPHxw6MIERdkJbTWMKke%2B3JRZOuV1wUrufud4wRAIhALgH%2FYinhEQHyZ5H4R7rve%2FNxlGt9cQa9FEfqsD74XOJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKRBi3FFWJFeB6gr8q3AMqpbMKkqBJujfZSJyuRdUJvu9x88FUdwqv8Y7FTxNHmBtpAt%2BfQae0RTCq7NzcHsjEC2ZZ1t1ytVq2JyFTAqZ0JAaczfhPVxenERMaTMcw1myrkhmEmP4MlSDU9cGYZ%2FGPd3hAshBAVlHjFH4be8TRiFCBiz2Lpa8xmsFztjwx2jGlgp6QcQaPY9royucsVANhBU%2FkGiM3ZvG47w8UY0%2Bx0u1vB3aykXG2mZGJ%2FBKypve1ltV0Guqf8l439jFlZLJ%2BYew7ywOlxFkjYIf%2FKVtGH3UnQkKDRrMai3m2ZYRMUSyRmbA9X2UuUTckHVBZsq7MIMTAbjlTfB%2BbZF2Zv%2BT5LCk%2FukcvEk4ZCn9n1yfo02kFkC5ZQxr0znAEdN%2BH2ZSD3aRp1PRUGMJWlG1YfrMkApMcU7Uq7%2BlaoT2PSo6TQsAUApfJL5Bj6IHFlwLIPvwL%2FTRCWCctC4LoETooLyDtFzI28yyj6vIsjgzEi1hMhXenViG%2F3sDhvYBeo2drBcMWd%2FfGN5WsCIBcYUcDtZSfv1JITy2jfWlOLSe%2FBp3clsXtOY26eJdKlWeXetKU%2FdsFSPG7TDYCNs6QdI7SDjXGpTdsiWkK4PheiOXgNUlsxj6hg8Zb7l%2FGwepwyTDX%2BObEBjqkAelMV6VJmFAeRXp6JmcusenTahjAJlCoYqNZe5MR37avZG6fWbx6jWYjTJ58Nt8YPdZhWP0Kn3zoOaF3x1x5zYTu1hW6WhkYPOztaX1IDGqbk%2BgZdrEtiuZIgjNqDEMnQ10CaN0Qk0n35v3PhCPAYNzgiG2rRCglmBTBMoGwwR4qbuvzyKVvApWtrY4SfWMkmSa6GfqYFwnfaXsvjtmhzZDuMT%2BF&X-Amz-Signature=8b12553322804cc23a8e9ab4f448e3186583615ec2d2f7b3803f002d637e1a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
