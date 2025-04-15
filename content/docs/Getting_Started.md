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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWBDMZRG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1LPE14wPDAA%2FRfIOuHRZ41TP7K%2F02d9OWgk%2FyQQCBLwIgJyKofh6zwwbaywmfgkrcmiE05UcKnlYlU2ean8eWHNMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDH05oYDjreM4k5EOIyrcAy2x8Ng%2BVJWvpHV5r1sjb8nLQaWJnT0VGeYrorgeaPdWQE8wWQjTFo%2BUkc2KoQpkWOinNSIHCSlsGgG0zfDpHO3USuY%2B6lOeF%2BHdk61NHm17nd48wdsVdxKRvJKCYCaVgPBlotpFcygfArP234LnApP2pk%2Ft2W31OUSNdQKESnw%2F0zbpIzoqohhF10wAnuhzfI4c%2BL6rK9OfFIaiOpALoTtPwDRr6rwFWzUpPTUw10Tt4tMBHX%2FcTk0ofoXXV9sPFGa%2BMjJ53xjcVLF1Fyfg8pBGGnNmYaiDH6kx0OCwgKxfZ9Z386EqdjjAq735WtJOpxyBYj1%2F0ew04Bb7IMhoDueq1nAmeEIUkkxeZ6GL0ARp8mji4ichJ9yQYbnTNzCIya7bEg5Y0IV1AkFmNcAUZoiP8lmgmckgABPKIY0Lk%2FiTXLji8GfJ9LRDXcYOcbtvu%2BVI5xZoGzERTy%2BZuBca43o5a0MKZxZXTnGE2MR3tAGoQjqae90T51fr2Uavh%2Fks3%2F4KTDQRmfBoXOB73P0b0MuekfaIqwSEXxEd1rSMin%2FXXpVXiLRbbQoFEEG89TxTxDFtaiSeVjZ3NTOZIdUOZPWs1V8ghS5Kv00gZHuwghqnpqWJyEGyRpEn%2Bnl8MMf59r8GOqUBnwQ3y%2FRpnqQgTHf%2BZnmwIK%2Fkb6HK2E0WKHv4xC%2Fb1Q0V3tFRLJ2jj2MkrAit%2FtlXtoHs7g1OaaJGa%2FzNxCoQbCFoOEuKPg4yI8%2BNm0kktePBIZo7LctikEK2YmFqVgL%2FAPD7PUSG0wBdQlQvHe1pMa2OHKtI6eKt40TLKLBFkdIo9a%2FTsRkmYnfAZuKkb2HxdvEOvkgQmLKaXKaOAeg7iblE3C7L&X-Amz-Signature=17203e439b218e7061a040392c1f8136816e2cb769f16268cf5d5882ca5b20e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWBDMZRG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1LPE14wPDAA%2FRfIOuHRZ41TP7K%2F02d9OWgk%2FyQQCBLwIgJyKofh6zwwbaywmfgkrcmiE05UcKnlYlU2ean8eWHNMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDH05oYDjreM4k5EOIyrcAy2x8Ng%2BVJWvpHV5r1sjb8nLQaWJnT0VGeYrorgeaPdWQE8wWQjTFo%2BUkc2KoQpkWOinNSIHCSlsGgG0zfDpHO3USuY%2B6lOeF%2BHdk61NHm17nd48wdsVdxKRvJKCYCaVgPBlotpFcygfArP234LnApP2pk%2Ft2W31OUSNdQKESnw%2F0zbpIzoqohhF10wAnuhzfI4c%2BL6rK9OfFIaiOpALoTtPwDRr6rwFWzUpPTUw10Tt4tMBHX%2FcTk0ofoXXV9sPFGa%2BMjJ53xjcVLF1Fyfg8pBGGnNmYaiDH6kx0OCwgKxfZ9Z386EqdjjAq735WtJOpxyBYj1%2F0ew04Bb7IMhoDueq1nAmeEIUkkxeZ6GL0ARp8mji4ichJ9yQYbnTNzCIya7bEg5Y0IV1AkFmNcAUZoiP8lmgmckgABPKIY0Lk%2FiTXLji8GfJ9LRDXcYOcbtvu%2BVI5xZoGzERTy%2BZuBca43o5a0MKZxZXTnGE2MR3tAGoQjqae90T51fr2Uavh%2Fks3%2F4KTDQRmfBoXOB73P0b0MuekfaIqwSEXxEd1rSMin%2FXXpVXiLRbbQoFEEG89TxTxDFtaiSeVjZ3NTOZIdUOZPWs1V8ghS5Kv00gZHuwghqnpqWJyEGyRpEn%2Bnl8MMf59r8GOqUBnwQ3y%2FRpnqQgTHf%2BZnmwIK%2Fkb6HK2E0WKHv4xC%2Fb1Q0V3tFRLJ2jj2MkrAit%2FtlXtoHs7g1OaaJGa%2FzNxCoQbCFoOEuKPg4yI8%2BNm0kktePBIZo7LctikEK2YmFqVgL%2FAPD7PUSG0wBdQlQvHe1pMa2OHKtI6eKt40TLKLBFkdIo9a%2FTsRkmYnfAZuKkb2HxdvEOvkgQmLKaXKaOAeg7iblE3C7L&X-Amz-Signature=a08f8aa8830b145897b68babb0738fe6ee68a66bacce53427ffaf980924c1c23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUZW22X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD08ZqYJqnlOJgGzHtuZjoaVtF8NgPG7VpWuWLgF9fbdQIhANM2ef%2B6yeNJ7%2F46XLaIXBijkDIaPF1oLEaKuSir8DbfKv8DCCIQABoMNjM3NDIzMTgzODA1IgxY9m2BdASQEj5fFk0q3AMBNvVxWcpjfqSUAzKUx7k%2FuZtICoFmA88B35lCt46rF6%2Bqp6O7DKylYBDRFWdl0TZa7%2BC%2FmpC1UQfSrVky5MPO7e%2BnXJ0boR4HHz0l8rgirBRVodmklrY4xYKGpUd3Y40TxaE05ndosKOyDFnueHYX6WUL1OOSPH%2BXxowtzgsbG4F6jDy2VUNLd0s3Q%2BZgz8P8PS7sPCaxlHvmJ3fTma%2FLPf4Lrp%2B4hXSAO%2BDKCyYMqwNesyUQmTPpjlZMlCEmtMEHD0eeviegGQHUerYspJeh36IA30o%2BNagmVQXIsgpV3GU18%2BPZ7NU23nWOXarCzzAhaNaUqdDZ4K%2BhY2pGn4pgEfr%2FplAzygwR23ylLvJDjgrzAl%2FM%2Bs2P%2Bda3W1K0G2DWVgVBJYbLtuJvrIMc1blqtgmOCf%2F726SEJX68zNBzB2DH1Yc0zhxr8T6paqOEf3OmREpfBhIkKpC4ZRn9T2dx%2B27ogKa8VldG552uT0K5woMHLgtWiLTMwtUj1joqdvZdfnojmknloV7lHUw92XGNf8o%2FviuccQfdNKnrrvgImGRsHBhXmdsqDil64hZpn5cF3K4oatROlVsPLAMuvNvqf%2B3n7qQ8RpvEt4DFE6kDWxSYMxsRF6%2BZnNnxtzCP6%2Fa%2FBjqkAfUtcaqlD%2BcTZKrEfjHBwNZpFxk0IJGd7b3g5MVYJG2HGCSkhVlUg6BHiVxwaJOPTgmUS8yrfjEyq%2BUnnUn%2BouwYLezErIfWSg56aCKm5sn54JHTIPualGcQTXLO8ae0oD7BWnG7tuUCItJAk3ujMBtc8pABPYkCjxvhchnSuPCKcWcX6oU5F5Dmjz0xmkG0j%2FOYXktoyl0PvwXiVhKDH%2BZrahjj&X-Amz-Signature=d109f81484eabc68bc067fb55d0e12290bed2bf88d47c7e9b25e1fc69e72bc95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2WXQM5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyTV1OmobSFTsTdjgo23qHsjnoKkANRn0CkH7oSeRftAiAKdpasAF8ZV0VKaysliFVS6%2FOYPdv5G77qp9eLnhvPECr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMISXggXwL%2BJTf%2BpoZKtwD46wBW4qnw%2BoaN3GjoMf1c7pj%2F9TTknew7nsN3hhoy4Wgl6r33gWO05zrQxRrTcfy9l29wceEXxKUk6CuUnZ1Z4x6%2FEWwcAy2OQqgTQ7SXfz3qZ8AQVMJ1ogi5Uwa90dg7JsSwUdIbdQjmxvG7S3RxYLxjpl8FaoHmX%2BSRJsGFrcPnFuUE6DVOTe4ieZlJCoZUVWCdlk3gxi1MxstNCSX4JY3uBu11IOYg3%2FVZ9D1looCQdmUKMItZJeiyAA5xA9omlRDQezsGdS5SKS%2BC%2FMSysTb7MZrBZxXmqFJij6HEYVw3v2htQosii3Il6%2FuxMEp5Wrmx6Z7HqK79SPxUVZRvaKJIYptyhIibzKJI6Difm%2FM%2B0vVlEQFTzjZ8pCFQ7fGhNa8KzGEMmDnOPQ%2BKImQKjuV9qrjCW5N9Xdg5seHb0MSYIY6jdVJ%2FHle72cTl33pt2gOJna5HckedgkC%2F1a98v6ge8FOprbxEH2A2TVIBMoFftu41Ho4qeD6HTgl0lVW2aMDFpZajTBnthkA8GO3OfAdnWGFLRMa6gGGQHr6y%2FYb46zRjZoJiCsoeUVJcaqDbL5T6uUN86k1XypL097sTwdEL7UexuR9gBOAEqtSi1lPDBdkpowrFlQbJCEwv%2Bz2vwY6pgEfDXyjUGCiZ6i9sTE0LFsL4EQvSznYeBzXkVPLNcXaty5WEDdl%2Bm2lVKc%2Bja1s8vO%2F%2BcULKcrrtBluxlpQgKR7clih%2Bw6jrXNvjt5l0Q1T2B2g3exi85iJ21l06rLg9x39LHn1N4zPe29MGQntda82rITAnnU6RCcZ1mjDy%2BM8ldtARD%2BI3op4Ci545J9lQBzWstJcX%2F%2F1TpF5HL7BituMYWB9eqkv&X-Amz-Signature=784aa0b2dab3e51b79fda18984904a274a475f3912fec157ac193ccf43b6d343&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWBDMZRG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1LPE14wPDAA%2FRfIOuHRZ41TP7K%2F02d9OWgk%2FyQQCBLwIgJyKofh6zwwbaywmfgkrcmiE05UcKnlYlU2ean8eWHNMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDH05oYDjreM4k5EOIyrcAy2x8Ng%2BVJWvpHV5r1sjb8nLQaWJnT0VGeYrorgeaPdWQE8wWQjTFo%2BUkc2KoQpkWOinNSIHCSlsGgG0zfDpHO3USuY%2B6lOeF%2BHdk61NHm17nd48wdsVdxKRvJKCYCaVgPBlotpFcygfArP234LnApP2pk%2Ft2W31OUSNdQKESnw%2F0zbpIzoqohhF10wAnuhzfI4c%2BL6rK9OfFIaiOpALoTtPwDRr6rwFWzUpPTUw10Tt4tMBHX%2FcTk0ofoXXV9sPFGa%2BMjJ53xjcVLF1Fyfg8pBGGnNmYaiDH6kx0OCwgKxfZ9Z386EqdjjAq735WtJOpxyBYj1%2F0ew04Bb7IMhoDueq1nAmeEIUkkxeZ6GL0ARp8mji4ichJ9yQYbnTNzCIya7bEg5Y0IV1AkFmNcAUZoiP8lmgmckgABPKIY0Lk%2FiTXLji8GfJ9LRDXcYOcbtvu%2BVI5xZoGzERTy%2BZuBca43o5a0MKZxZXTnGE2MR3tAGoQjqae90T51fr2Uavh%2Fks3%2F4KTDQRmfBoXOB73P0b0MuekfaIqwSEXxEd1rSMin%2FXXpVXiLRbbQoFEEG89TxTxDFtaiSeVjZ3NTOZIdUOZPWs1V8ghS5Kv00gZHuwghqnpqWJyEGyRpEn%2Bnl8MMf59r8GOqUBnwQ3y%2FRpnqQgTHf%2BZnmwIK%2Fkb6HK2E0WKHv4xC%2Fb1Q0V3tFRLJ2jj2MkrAit%2FtlXtoHs7g1OaaJGa%2FzNxCoQbCFoOEuKPg4yI8%2BNm0kktePBIZo7LctikEK2YmFqVgL%2FAPD7PUSG0wBdQlQvHe1pMa2OHKtI6eKt40TLKLBFkdIo9a%2FTsRkmYnfAZuKkb2HxdvEOvkgQmLKaXKaOAeg7iblE3C7L&X-Amz-Signature=08572548209095e65e1cc1c23e4897eb48ffa669979c94d16bb0a8cd3844b57a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
