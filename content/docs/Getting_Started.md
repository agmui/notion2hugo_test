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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOX52R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIAk8isUFqBpvJUbsukUBNQamGFSwbzXrglWsIUIQOLAsAiBGdR1EndwaSbyr7WioYGwBq%2BcBe2919nbU7OgvXGZaRSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY5u6wFQ0pToCleTHKtwD%2F6685NPg4ju2YosyUutLATu9CgcACS0QemOCVMM6g60bhQYWWHeU%2FZZqpJ%2F2Grn%2BM90pFCv7fFmJJD25BlVkySjTPC16uCd2ohNzdRkrkBxFu%2B8%2FKWLD1BSWg3LP%2BeY9sGeZrikSJ2lRkD27XHMF%2BiQoEzA8jst3fIO1F4ut%2BERST095WB6TWExWrAwnCQWecHEje8MRmCLMLKVxJcsvHql2olGKmd5Bths7uPCBrSP8c36EyzI%2BriywvOhy8RAB7SKxhcfp1M3TOAwL1YunfedqNtnQfdH36xjTkc%2BykCUehrE2bvEkg9FsLlSnIqvV4POqAv88kO8ge02u4gh%2FELxJq90EqwnD2u%2B5UlCIdMV8JTHSC0%2BwyTlf91QZ8j%2F7VAJ%2Bg9QTiTJXZurKW1sVHSdF%2Fn67TOJJZdwoqleHtI8JcD3agWXUWSutKayLe1Vknv2qLy9teCHQa0afr%2FD3GTT%2B%2BMZcU0Nf65bMrl9Shz1rMccjh9139KKjpceFIFHG5XV8RLMRA8Nv4T3C0Z%2FWRzDejz7y24Arj9CDC2Day83NQdHdkcIBpCQCHqqpF%2BjZA%2FKylzq9htLymFcXeECfrTkx3kSupA2T4ecXGK2dZ0L45i8V%2FMKjRX9LPJMwuvHkvwY6pgFzHjhsicZBKB8ZfPx3AGJd0mfn3B6s%2FZpE9fSGoGHJnb4eieJ2GVznhxZsdNupIf9mCoiLVmBkEOZej646paen%2B3wHOECpXA1BvEIJOEB2oD4HruTZK%2B604UpgjP4wHKZMYHpnYGTh5vkOsk0IQAQmzVk6DPi2sP4LY472t%2BqIQ%2BqaRdNHYbKjJ1ahXKmVFecFsD67eaZfs%2FWKGS6B42zEfZY7Cgjs&X-Amz-Signature=c4f5792095a706f7c1c448a1a903c6b82a20853262564af8a9065b041f706ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOX52R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIAk8isUFqBpvJUbsukUBNQamGFSwbzXrglWsIUIQOLAsAiBGdR1EndwaSbyr7WioYGwBq%2BcBe2919nbU7OgvXGZaRSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY5u6wFQ0pToCleTHKtwD%2F6685NPg4ju2YosyUutLATu9CgcACS0QemOCVMM6g60bhQYWWHeU%2FZZqpJ%2F2Grn%2BM90pFCv7fFmJJD25BlVkySjTPC16uCd2ohNzdRkrkBxFu%2B8%2FKWLD1BSWg3LP%2BeY9sGeZrikSJ2lRkD27XHMF%2BiQoEzA8jst3fIO1F4ut%2BERST095WB6TWExWrAwnCQWecHEje8MRmCLMLKVxJcsvHql2olGKmd5Bths7uPCBrSP8c36EyzI%2BriywvOhy8RAB7SKxhcfp1M3TOAwL1YunfedqNtnQfdH36xjTkc%2BykCUehrE2bvEkg9FsLlSnIqvV4POqAv88kO8ge02u4gh%2FELxJq90EqwnD2u%2B5UlCIdMV8JTHSC0%2BwyTlf91QZ8j%2F7VAJ%2Bg9QTiTJXZurKW1sVHSdF%2Fn67TOJJZdwoqleHtI8JcD3agWXUWSutKayLe1Vknv2qLy9teCHQa0afr%2FD3GTT%2B%2BMZcU0Nf65bMrl9Shz1rMccjh9139KKjpceFIFHG5XV8RLMRA8Nv4T3C0Z%2FWRzDejz7y24Arj9CDC2Day83NQdHdkcIBpCQCHqqpF%2BjZA%2FKylzq9htLymFcXeECfrTkx3kSupA2T4ecXGK2dZ0L45i8V%2FMKjRX9LPJMwuvHkvwY6pgFzHjhsicZBKB8ZfPx3AGJd0mfn3B6s%2FZpE9fSGoGHJnb4eieJ2GVznhxZsdNupIf9mCoiLVmBkEOZej646paen%2B3wHOECpXA1BvEIJOEB2oD4HruTZK%2B604UpgjP4wHKZMYHpnYGTh5vkOsk0IQAQmzVk6DPi2sP4LY472t%2BqIQ%2BqaRdNHYbKjJ1ahXKmVFecFsD67eaZfs%2FWKGS6B42zEfZY7Cgjs&X-Amz-Signature=be786389af6d7eed58c1f7da1fd299fb83678b576d82ef2c0d70548a6d6fb14a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EG4ZI6N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDArSV5ySZWSt7v0SHn%2Bh5wb6bQHreTrxw%2BlCMBLus1rAiEAuhiqkZA5eW9zW9A2TJCbIkQM28%2BWVTD4955CBE9xCVMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyVoz2HzlaN46sEgSrcA3Gg08fQuc7WToKTFE%2FJV1M2u7GZ2KhI9FYRigDUfhSBIC1LfG7kSUik5lWlNLpQZDrqlQtKOZ8w%2FN68L3u8zwFhSCBA07YmQ18JN96aoIVOfshOUZZoGuIRpWj%2FC02ZyxJ1OOiCVLAZ81N52u2LKJbjoD3%2BIMZvmHXgTtcp4v9HOifiZsN6NKqp%2B6%2F8DXNhZqp72%2B1k7jJ%2Fco3%2BdIcGGXklFo8KfGjaXA5f6%2FWz0ViDrpj7zSBuQUOOs2De%2F%2BX0RF5DKJGAB9qA3KLm3Nbax5qQLvA2%2BvrhOgakjJKNjyhouMW8miiJ4Bay9HasydEspEq8mbwJHhM%2BUCtgiSW4RQP3EXgs1bpQQIGmF5qojGR3KfCe2ff8tW4wRZBXdEiqP45BtPGapPh4%2FdQwnAzRv2edURcXssY%2FVT8PxRkLykAJkgIibc%2F5WWH5muGanUotM1vRJugEomnTkwpottnKszAY5%2B4sSwyzZEkEa4o3j6p6EtiiPrPB4%2F1BGcY4hsiOAA%2Bjr9o6UfUvzpEjq47goKpFiWRx%2Fp%2B8pCVc0YYSwYTQfggptysT%2BDEC6VQYQDy1gPJlVWVeO%2BjdksS7i3sdhGEIqgR16X5hKV7Yuj7KlYPMvx106pKZCjaIEpxAML7y5L8GOqUBD9ADPC%2FbaM%2FgewqeQ7Y4ecm3TpvL2cs44Dw%2BOEESBzMU0DyIbQV7F5TcEHg7tIxYOb6poY9FarLIZQf8qDv%2F3MgaRAi8rbYOkvr%2B2EOpuyO48h0XEQeTWXADatwU0LYR%2BpqsN0J6aPdhELdI2XkKENC9aEmidKrSw511i9oobJJi4GUwNHzg%2BPIXIwrcQf5PE1F%2BoZMBYWmZBsha69xWTAF5cKhx&X-Amz-Signature=09d1274fb82c4fea813df6c0e0da6580b365a961b69b96aacbcee1540e2e89d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSO76B6J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBM0WlO3MiITN0WDASp2yu4gJQwvZ7KWK8IkYcjn1HIjAiEAg9dIs4JutOECbEdrr8KMDJ3ePqq5ADyPhAsjDUAVRJUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLjOcIk%2Bn6LXjxJ7CrcAwdWkS6Rr5RrdpA90Yzsc%2FNQCMhLB8caKAPOtJbD1vMgI3Ji5ZKz7ADj%2Bnrs20cx8ph3TDrNrJTpl5txW7xaMydTd4E7MFDdl2NyYbeKJy46fNkvqnV6Bpj6OnYE4gwipn6F08DojWQIgYgPTgA0%2FOBpPqTSRifZAxE8jA39AEqLTAExR5W1YjYB4UAeIY4VsBR%2FBG0xRxNP%2BvYR84qKg0ENW2q%2BItMrtdZxjfCmSsvHLnnPQXEkNS2mJ31plFlhV4%2BcfTIh%2FDm8IEzp3Jvj7dupeDNeIiFi4WHkfRKAsLBUDRnWoIemqQ%2FEOtkXO9QLZN1LyUnYzaWFQ5S6IxKGsfYFlLm1ncadixe0BcdqODkf2Y6i3AYKYvzXm3OPGejcdQQySiZ7yZnU4D6rKHb2p6vJLvij3O1HUhXof7AMEZie00wCREhIwlf1OD643h2BP02PwoIVbCcY0jnLsVwA9blp9HNr0qR6hICpTAbnVAf1S8OSuNPQG%2FRYLemKtz2FqYCiXemw5NKYGkkA%2FI33ZdjkU%2F%2BTOlb1b6%2B67oV%2BhGkotdFswuxiexDDUWJMoFtj0DVptdb6xHgCmrpNs26zLW24nkjls1ckU1HFfswlA2e618ssGJY3IG4vTnfqMLPx5L8GOqUBY6trOh3k%2FXzBSbf5H1AaIngRb%2FFZq6AUVSg8lGMcWfsE%2Fb8nlQadzXQFWD3lmXM%2FpLf0zDhEKorhUFEsTHwKJzldnJLU10uHSCawNktaN5E%2BfodQ2G94hpyHmZGC%2B6XmaJ0Ow83tKOo6Vzr92iyim0pjmkNFZIGiiUR7ol8BmWo6b7IMTjAUncmp7J6W0GniEHuOHZg5H%2F4e4nvZsic4QdXtVYTi&X-Amz-Signature=d7140245b9256e45044035aaab6b0407c9b7ac5cbdb5ac70cbab76a40a8b3f31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOX52R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIAk8isUFqBpvJUbsukUBNQamGFSwbzXrglWsIUIQOLAsAiBGdR1EndwaSbyr7WioYGwBq%2BcBe2919nbU7OgvXGZaRSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY5u6wFQ0pToCleTHKtwD%2F6685NPg4ju2YosyUutLATu9CgcACS0QemOCVMM6g60bhQYWWHeU%2FZZqpJ%2F2Grn%2BM90pFCv7fFmJJD25BlVkySjTPC16uCd2ohNzdRkrkBxFu%2B8%2FKWLD1BSWg3LP%2BeY9sGeZrikSJ2lRkD27XHMF%2BiQoEzA8jst3fIO1F4ut%2BERST095WB6TWExWrAwnCQWecHEje8MRmCLMLKVxJcsvHql2olGKmd5Bths7uPCBrSP8c36EyzI%2BriywvOhy8RAB7SKxhcfp1M3TOAwL1YunfedqNtnQfdH36xjTkc%2BykCUehrE2bvEkg9FsLlSnIqvV4POqAv88kO8ge02u4gh%2FELxJq90EqwnD2u%2B5UlCIdMV8JTHSC0%2BwyTlf91QZ8j%2F7VAJ%2Bg9QTiTJXZurKW1sVHSdF%2Fn67TOJJZdwoqleHtI8JcD3agWXUWSutKayLe1Vknv2qLy9teCHQa0afr%2FD3GTT%2B%2BMZcU0Nf65bMrl9Shz1rMccjh9139KKjpceFIFHG5XV8RLMRA8Nv4T3C0Z%2FWRzDejz7y24Arj9CDC2Day83NQdHdkcIBpCQCHqqpF%2BjZA%2FKylzq9htLymFcXeECfrTkx3kSupA2T4ecXGK2dZ0L45i8V%2FMKjRX9LPJMwuvHkvwY6pgFzHjhsicZBKB8ZfPx3AGJd0mfn3B6s%2FZpE9fSGoGHJnb4eieJ2GVznhxZsdNupIf9mCoiLVmBkEOZej646paen%2B3wHOECpXA1BvEIJOEB2oD4HruTZK%2B604UpgjP4wHKZMYHpnYGTh5vkOsk0IQAQmzVk6DPi2sP4LY472t%2BqIQ%2BqaRdNHYbKjJ1ahXKmVFecFsD67eaZfs%2FWKGS6B42zEfZY7Cgjs&X-Amz-Signature=884a56587c10486ac1ac782825aa421994fb0a6d9b4758b024ecf21781929af8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
