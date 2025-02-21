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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C53BAT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQd12Op5faerYOt94SaZBeS5DXHN9J2xxJt%2FoJQwjD8AIhAMniCXWSHxDLQhNwI1%2FQsU8W4lqF2iyrWGk2LVQQ0vKjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2BC0Q4QyJk8xTaW0q3ANUKLS6OCO3rjazPugUC7M5u%2BnoV%2B5Ky3aSMEzdxogysDyNxcXy1RX18O3OsgpEATkRseXthCriIEG96BvDP66IXmDAzeziwe9vpcyDvaLv0qeciIawPzfNIQev5YaggObVh4MIcTaWJlZsE77INBWQqqVVuymjUShMsRBG4pXc5iiWHcPN6COjBAD9abIVcC7M73R0mp4yDuG6F1ErCEuBABdjykrsHl6VCGDzDjxQmFF9eLFuvm93FrrI%2FB%2FQuvje1qjmhNM0qkuf8V8nvz89hYYcCVGPY3x3faWY2SFsAqcz%2BKAB4hwdKc25hghN40BmvFhSLXZZfBwFkxnYlEwDuGZHYICl0XyQXImJKpWLV0naIh6Nhq7sFQqeZQ8CosT012I4qAxuCQ0tOBQHwxKKJactGH%2Bq4xiMzfBbgzTsr3vLULv2LR6VbjSNcA3GymPzeS6RDxZfDqraz%2BcfZKT4msNZ1VzYbqWKozUOHc0muIXf4FWeAzMlDF8o4xAYcAd5077ZcxM%2BzyqRXjaFT5hL8rE9X6wBO8mX7aAnqaVSob3mlwiqnaufZVQt0CP1qonAPfj8RRw3kqJLyV7QepYrLfqKSIePLI3XuYlJgqHomj2wpOTUpbfl9gCQEDCzvOO9BjqkARFTq4lruPHZhA55e%2BEK8eoEDeqDrANosVz0v458ujTC4v6Vm%2BgHW3FBzzlZK8dFeZfn4bvRf44OEknUd9t5baXjoAMWEIs2TAnxgGGFTy7pGEtuu6gILecpadHovDNjffGk%2Bgka1393dCLnVMIoKod2lRELcuJPgNPKOkoWBUsvsVJpLw8QJkVQiR1UF8kBu9camSSOKKQcmXabIyTE0u8CsZID&X-Amz-Signature=b06a190e5a4dd7a26bd02ee925f7c05173075428872d51f77bf8db745c60223a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C53BAT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQd12Op5faerYOt94SaZBeS5DXHN9J2xxJt%2FoJQwjD8AIhAMniCXWSHxDLQhNwI1%2FQsU8W4lqF2iyrWGk2LVQQ0vKjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2BC0Q4QyJk8xTaW0q3ANUKLS6OCO3rjazPugUC7M5u%2BnoV%2B5Ky3aSMEzdxogysDyNxcXy1RX18O3OsgpEATkRseXthCriIEG96BvDP66IXmDAzeziwe9vpcyDvaLv0qeciIawPzfNIQev5YaggObVh4MIcTaWJlZsE77INBWQqqVVuymjUShMsRBG4pXc5iiWHcPN6COjBAD9abIVcC7M73R0mp4yDuG6F1ErCEuBABdjykrsHl6VCGDzDjxQmFF9eLFuvm93FrrI%2FB%2FQuvje1qjmhNM0qkuf8V8nvz89hYYcCVGPY3x3faWY2SFsAqcz%2BKAB4hwdKc25hghN40BmvFhSLXZZfBwFkxnYlEwDuGZHYICl0XyQXImJKpWLV0naIh6Nhq7sFQqeZQ8CosT012I4qAxuCQ0tOBQHwxKKJactGH%2Bq4xiMzfBbgzTsr3vLULv2LR6VbjSNcA3GymPzeS6RDxZfDqraz%2BcfZKT4msNZ1VzYbqWKozUOHc0muIXf4FWeAzMlDF8o4xAYcAd5077ZcxM%2BzyqRXjaFT5hL8rE9X6wBO8mX7aAnqaVSob3mlwiqnaufZVQt0CP1qonAPfj8RRw3kqJLyV7QepYrLfqKSIePLI3XuYlJgqHomj2wpOTUpbfl9gCQEDCzvOO9BjqkARFTq4lruPHZhA55e%2BEK8eoEDeqDrANosVz0v458ujTC4v6Vm%2BgHW3FBzzlZK8dFeZfn4bvRf44OEknUd9t5baXjoAMWEIs2TAnxgGGFTy7pGEtuu6gILecpadHovDNjffGk%2Bgka1393dCLnVMIoKod2lRELcuJPgNPKOkoWBUsvsVJpLw8QJkVQiR1UF8kBu9camSSOKKQcmXabIyTE0u8CsZID&X-Amz-Signature=56855da5c24a6ed68818f875719d56a357a0d90df4e4dbb8e9c9bb5ca7bb8161&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZWUZCU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCisMSxFzdql7Rfwq3484Zolc4A3afiXnAz0x9lxeElpQIgXNNBpY8NaH1TKFXSjhK7ucyqfSfFeWhXtnuoaIqF1ygqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUeSFt5KuJmVR16tSrcA52RRWbp6V6%2BihyhUh45a9H00TZMllWR7%2Bj%2BoDlpXs6Z%2BsKEHhXRWl3iNjUr%2FFtiPC7vUc%2Flm%2F%2FJvSxS39pqKP%2FzOiJrDOUQOS33HPt84q26OPLsoG3kquLV8t0p2rByACB50GreKVYM0vnIfziKIsyGhrHp%2FasWLe5CSDomjcGjik1xwGv1op7yNP1k1MwPgXNZJvxGXJzrBVpXOP39arwuAlwnyttczuto%2FrDmLz%2BPZ3CYFCwJjGcXcT9XMbrcBbYZHiBd4b%2B%2BxZqKDX2ceCjaeoqvPPfVJgkOet%2BYe9JlcgZVr1m3CLmjTl0uIV6Hdo%2BVTzUFIqndKHdpPk7nj%2BlXz1Cdp0JFpCcJ5y4vaIGJSlA45N3A7%2Fc4mFzKJRIpVIfl4b%2FabCuFYN1RjOTtQZcBEi0gs4I5x2KYSdqBtGdSg6ghuengTYgj1I%2FUk3%2BBhm%2FxOozuUBVe78BNeK6h9Ch4iNCr4suSbetoREQJI68hN9aIDukZda1DFPCWexvKjwnOBPjWhIT%2Bf1s7yYsC4%2BPotmp6rjMF1xsd90eKXIIrkrGLl5Mjva2PVIEjOQITcEN9s16QPtrLzXBbaod9SAF2aWm2RycQPJ1vmnG%2BFRWgn68BTdYt3FVEH1czMO%2B7470GOqUBRhiRDtxup8YruW5oUpUJMFGNJLzZ8eJETyKu4wuzor8Z05JMKr%2Fa7YEgc0ZKwfiVmPYFr8LB21UtahgQPeD5jVfj%2BNrBTjLBZZuGa5qdFswjKPpXis4dqbX%2BqDbmSE082aDF9nUDVIiV861Jo9Wil3pO1v96CeUvLEOCouu4br0cQSLrWd%2FyNszHx3GIwSTONogNHbuPY71GSekgDzce3jPXs61M&X-Amz-Signature=506fe0b45b43359fd77fee60807c0059a920c5bebe7f4a067181978852b85191&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5ZLG7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDalvTudvy8PKzkoo10RF%2FZ0C6TZX3Xx6FeT72nurNZtAIhAM60%2BSOa4tAsQblve4wUv45FHoOBeXgV%2Fc6Vk5s%2FsNm4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY0EP0RPEs5EagjrMq3AP5etELTnYTN8mj0avWlygd4zpBTNGX6CJXlSkItKrVffeiBbdFDBvY%2FMMNHkYfB%2FjT8iZ3qYizk53JQTJ%2FOMHfxUv9od8muzff2MOn8r2T3rDRpE6u8WW0W%2BPH2dC9C3hXb1L1hCgOcZIw55Hd1gCkgEvJtai7H6o%2FsFlxDtiAugKKLqFraCS8R8QFQAuKkcfsPTc20x%2FDuXVzb%2FHxie5W6RqDLbmt0A3PYjiOBV3YraDNygdfDpENGgmg%2F5wn3uO3DWP6I2ZoQWQieTSdk04oH0OnZ8AlgiP8onyIu8uleBWG3%2Ba%2FOdQvTDnkHzg8jjHygXktJK8jz8L%2FR85s66F1mxPJtjFSo26VLmAPJTRqGKVF%2FpQygjDKNm5iHhQMywPygbb5V9IdU276GZwJdCzawZu6Bz709efIx8zqotZYxSRqXyV8LpsvFvEzT4Vr7hTlrGkqAnAeWFw%2FkrtLVar637ZDUVjkekR9%2FVA9o407rx780RLm27FEaBW7KCyXRz7zd%2FawUE1ds%2BYsYT4Hz81VVcNAxE%2F2P7EEO6LHCsRdu6NLbYYlB14sAYNWmuXNz3Qu6CRR9o8k9D0PCY3ICtxCxTfcUkne9y5j0Ks8HH844Ni4AKqKtZjyiDmm%2FzC9vOO9BjqkAffVhdEyCd8j9Z44slIalSUnlrMyflQVigZ7VSc3a%2FwWOv3qearkVtQ596AbySVnypbWawvwIjOIHGMCsLdFYxUkZuFDKMTVOU3PAvhi4vr%2FQEbXZtvDv0uepkNHGDjxioJxu2LGK8EhhDKzWYm5QktgIQbbgEURZexbAR%2F05KNBRCxYs42nbmh0kespvqmUoLF47jTA2ig%2F5CjsIHj4bMu9H0Lz&X-Amz-Signature=4b7c0aba45a0afc4955409a9d62209d34f9f6a26900fa964f0ffd59d203f268c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C53BAT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQd12Op5faerYOt94SaZBeS5DXHN9J2xxJt%2FoJQwjD8AIhAMniCXWSHxDLQhNwI1%2FQsU8W4lqF2iyrWGk2LVQQ0vKjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2BC0Q4QyJk8xTaW0q3ANUKLS6OCO3rjazPugUC7M5u%2BnoV%2B5Ky3aSMEzdxogysDyNxcXy1RX18O3OsgpEATkRseXthCriIEG96BvDP66IXmDAzeziwe9vpcyDvaLv0qeciIawPzfNIQev5YaggObVh4MIcTaWJlZsE77INBWQqqVVuymjUShMsRBG4pXc5iiWHcPN6COjBAD9abIVcC7M73R0mp4yDuG6F1ErCEuBABdjykrsHl6VCGDzDjxQmFF9eLFuvm93FrrI%2FB%2FQuvje1qjmhNM0qkuf8V8nvz89hYYcCVGPY3x3faWY2SFsAqcz%2BKAB4hwdKc25hghN40BmvFhSLXZZfBwFkxnYlEwDuGZHYICl0XyQXImJKpWLV0naIh6Nhq7sFQqeZQ8CosT012I4qAxuCQ0tOBQHwxKKJactGH%2Bq4xiMzfBbgzTsr3vLULv2LR6VbjSNcA3GymPzeS6RDxZfDqraz%2BcfZKT4msNZ1VzYbqWKozUOHc0muIXf4FWeAzMlDF8o4xAYcAd5077ZcxM%2BzyqRXjaFT5hL8rE9X6wBO8mX7aAnqaVSob3mlwiqnaufZVQt0CP1qonAPfj8RRw3kqJLyV7QepYrLfqKSIePLI3XuYlJgqHomj2wpOTUpbfl9gCQEDCzvOO9BjqkARFTq4lruPHZhA55e%2BEK8eoEDeqDrANosVz0v458ujTC4v6Vm%2BgHW3FBzzlZK8dFeZfn4bvRf44OEknUd9t5baXjoAMWEIs2TAnxgGGFTy7pGEtuu6gILecpadHovDNjffGk%2Bgka1393dCLnVMIoKod2lRELcuJPgNPKOkoWBUsvsVJpLw8QJkVQiR1UF8kBu9camSSOKKQcmXabIyTE0u8CsZID&X-Amz-Signature=1eeec497c78edb66d93c850a222e36c207fb25ea408c163ce8c209d8b15fba0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
