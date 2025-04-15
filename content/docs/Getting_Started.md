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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSXG4NP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKuZ18ia%2Fs8UBB7gOHP4d3IDRoWAx5wFAEJoyD2sqIwIgUa0KCoiZwEXKE%2BEhdRQJDGB4CIrHoMfmOIMODJxrjesq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFggjoVSgTT5S7kdrSrcA7bLaO0LRjoK74wRG7Yv%2BVeTnBOiqcRkv2W2glOf5hClVOW93JscV53ZkDs69t2bUFrEZH5qVau567tlYbGntCzNWuBGwHS8YdVcjETK%2BHb%2Fy6K%2FpPkLfDtSG2tQWQ0zwnjCRT6QcoZNCeQL2AFdNiDcHxJwkfmkiGeIgoxMOLknkDE%2BHcq5sgtYimj8CqaMh%2F17JugX7BCen%2BGtBsPe14NsYWqHU9SA705JoY6l1OGStUCKteoB0sDp3mqxtD5sLay74xEtZYb%2FBbcLDUmrg7cR9FjrP4UENUiAeBrXH4yNGm90pRdFAX8wxuBDTSvE79KeL8YPKNiVzPcxKufwA1aAzVxcfcFPfRPVKCQ%2B3xnV37muS3N6OddmUAWZEs5eU%2FIwSatB9RcdaYNuWH%2BS%2FuR8ezSELK1n3mFEyOM4ATDXugteJlVydC6yeph2cP%2FXgRyGVtZHWJ3caWFUWVGp2KAvESf7bQHYjwPNG6DwUjXZfTovFpYdlQFu%2BJOy69wh9m2zt1I996naJifmFkDnomfWH829rtGa5%2Fs8fWoiNerjQ2ttobz7uNY%2Fz6ayug5sUNWy%2FAP3S%2B%2FNE7UcnakHTjeNMokWlvVilFHjCiuPH7wqm7C8wnfNSTQiPN17MLXp978GOqUBNPDuPS2vgk6a9icAmkqd7R61DprWLK0Bz%2B4Q19zjAHPtJo4rBWtgGwWsi2x935EXxtfeuUE0MfMjqzmsUSodOeh9PJv%2FIumU2AwmBCiNYhV6Z%2FTPsEYJ7WxawYZ1TQwuOBG9tTjXMD9GqdAQbh2r%2FIzukM%2BwKDnouG6%2FFOVRYopwYHrto1CrP0Ew8tW%2FpH5azJ69JyAwU6bg%2B2WAmIlE%2FfcxEsdM&X-Amz-Signature=4d17fe7202ff10c04737c930da1400abcaadc4814b557d94e01076153b815b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSXG4NP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKuZ18ia%2Fs8UBB7gOHP4d3IDRoWAx5wFAEJoyD2sqIwIgUa0KCoiZwEXKE%2BEhdRQJDGB4CIrHoMfmOIMODJxrjesq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFggjoVSgTT5S7kdrSrcA7bLaO0LRjoK74wRG7Yv%2BVeTnBOiqcRkv2W2glOf5hClVOW93JscV53ZkDs69t2bUFrEZH5qVau567tlYbGntCzNWuBGwHS8YdVcjETK%2BHb%2Fy6K%2FpPkLfDtSG2tQWQ0zwnjCRT6QcoZNCeQL2AFdNiDcHxJwkfmkiGeIgoxMOLknkDE%2BHcq5sgtYimj8CqaMh%2F17JugX7BCen%2BGtBsPe14NsYWqHU9SA705JoY6l1OGStUCKteoB0sDp3mqxtD5sLay74xEtZYb%2FBbcLDUmrg7cR9FjrP4UENUiAeBrXH4yNGm90pRdFAX8wxuBDTSvE79KeL8YPKNiVzPcxKufwA1aAzVxcfcFPfRPVKCQ%2B3xnV37muS3N6OddmUAWZEs5eU%2FIwSatB9RcdaYNuWH%2BS%2FuR8ezSELK1n3mFEyOM4ATDXugteJlVydC6yeph2cP%2FXgRyGVtZHWJ3caWFUWVGp2KAvESf7bQHYjwPNG6DwUjXZfTovFpYdlQFu%2BJOy69wh9m2zt1I996naJifmFkDnomfWH829rtGa5%2Fs8fWoiNerjQ2ttobz7uNY%2Fz6ayug5sUNWy%2FAP3S%2B%2FNE7UcnakHTjeNMokWlvVilFHjCiuPH7wqm7C8wnfNSTQiPN17MLXp978GOqUBNPDuPS2vgk6a9icAmkqd7R61DprWLK0Bz%2B4Q19zjAHPtJo4rBWtgGwWsi2x935EXxtfeuUE0MfMjqzmsUSodOeh9PJv%2FIumU2AwmBCiNYhV6Z%2FTPsEYJ7WxawYZ1TQwuOBG9tTjXMD9GqdAQbh2r%2FIzukM%2BwKDnouG6%2FFOVRYopwYHrto1CrP0Ew8tW%2FpH5azJ69JyAwU6bg%2B2WAmIlE%2FfcxEsdM&X-Amz-Signature=4dd71ffe75618273657ef21ea422ec87442783747cdad47c30ba3c1b81e038e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZ3V3M4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuBgfuiyEekfPJ%2BpwfZzkvi2BkJCCHWfQv8rhEoaZ7RwIhAOFsyAIvwSZKVMaFzOIG1jiABf7l6%2FKg3eflBnqlboy1Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxavWS1ggZQGGI%2Fxb4q3AOBFXuysJh5copd2iX5WGSKJb%2FAIkSAlQVZJ%2FyRfeAxZcX5sbOGpK31zzlltSZTQteo6webJ2s%2BzNFg5CnDV214oSTJ5UTilx0jQijJteHaXJAfiXUKrfKxqtR%2FEQSaUh4wvhFWPPvIis9gybYioIAmMxuEwhov1ZBlO0fHWIF1s4am8c%2FHKlch9XJDzwp4m6W4P3P5VS5tGQrrmyoiST0G4tgX4G5g9n75WIZI3ax0rPAKsuFPtXG5AIMNpOVU3b3SaEVlCQoEyPQfxaTSp2N%2FuEM52DR7glGkk%2BJsaVjNyVgSJYieaAwzotxn2fDvO8AUSkSzIIFoU0OW92lyZpNSn6JZ68Tzdr4eQpk1OQHxAjE49cgCTWeeiOuElyiYy%2BaaiJfuJK6KLO0lIe1YRnNrJO8LYZZuqjyer98qAR64VId8SB56%2FZvepcYhDOE5qfN%2ByLTynlsu9IeYam82YgYKvGq1a%2FFOudoGH%2BDvMBeBbqc7jS%2B1JI3qNJ7j6rjdNwdxjf8sxchwCQt0oBHVvzfslMBqBi6JlJtrXQSbahchxTD01XhEcQWCzl1sPtTjizWxPbDue8YpJ7HF9WW0aritoejKZj7xefroLWzYUb0HCZdqVTo4NGAoEOaGWDC56ve%2FBjqkAUwV7xL161fohq0FW0THYyNgMDRUx%2FZ6P64AJzCijeKNDNOQq6s18bO%2BStkJBqkZsHisBdXomkh5v3%2ByYntTGhIHQuvqW5Km8rBuXD5gUlK1BAe1IadQHa29rfTBQi9InMM6Zlsj%2Bz6tcRovKH4q1tkG3q72TdhdaBcHV2HvjTanIPnk07F3pRhvG%2BJywQJATk8TP%2FZEMC5M%2FJHPeH3KUDoAeNfA&X-Amz-Signature=ac5e10d5ba19446b03df1d8c89133f997e813f726c852952f83c0e2ac9a32d84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHDT374%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEz5mLe1ewI5iZUcmYO4QsmkkLkMwCxm1XzMeeuLIwwAiEAnmOjy9A052HMR7U7z%2BayxTvzkRSkiISpBtE37JIjh8cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE8%2F7aSg7NgqfRmVTSrcA46xyJCP8czy39AZjqM2q%2FgHVdsrGLVcJFlAY1M89BRAnDBVkH%2FKXmiRvCJuZNmcr7%2FMPmTE1VVO0PpJl7Dq4U%2BrzoplAcTzKRqTm7n8ImX5%2F5FJKSybJP6z6IwveJjKLTIN%2BeXRTcsLSaBLnBmc4U4rF5vkBF7SPo1vUphevcWzdj4gDgxFNDNVcr05IAlXyIUQbjtsviHR93YB6BM5BPOQA4EZXRMo3kqXOUMJijmZsxObE2L43c0i12N1IYnM29PLYe%2F8A6WRR%2BkYqmeXoMcqw%2FFAaGxb0qDndEEf1e7AWh3%2FHlm3a0INnpASaYfqjqet10O6timDQ%2BYo8BjtpHVDx9NcYBtqIR7%2BLeInioPXRmZC0FLJsqChRhSorpnHaICK%2B99eDMBaqLtMubMpnxr%2Bk3vhIoJW7mRerRGqdTJmcJH0lUjfmcphvrUp83Qv0nO9swEacXkykHlg0Q6J%2BgPuO7dAe93vnfo1Wo%2FRRbmYUyvzvV1Et%2FWoi6cOsUhrFMnv%2B1zqc1f%2B%2FpWFvxp39NbkFXX8TgnKKXC3avySsWsaZvoasWbFWvp0EOm2ZKRltjOSDSF71ajuSU0X8o4%2BSkS%2F5DX%2FBC0S5o%2F5Q7e9NXphramGdBJ2HMyrfNfCMK3q978GOqUB%2BUHpoBUQiOJmr1rPrTeg4xhizIjmDaR2ax9u0s8T%2BVFplsjfdlkByR41NeZi3LYcn8%2BSTZ3VFvdwg3%2Fhf0sobw3ssnFp0NcdLFyH9q7DjdXvVo53MNJURIZ3sqv5lVbNDYf6Vyxiij7q4NNjbHmBXsSl155eI32Jk%2Fiv%2FwY54DfLedenBd31lYYEHwwB2mdxAEIpL40mQsOKSu4zPnYJMgRRDHAo&X-Amz-Signature=6d2065f85ab1c0ffa2158811bb27be19847e1789081b7cad5be5650fd017922c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSXG4NP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKuZ18ia%2Fs8UBB7gOHP4d3IDRoWAx5wFAEJoyD2sqIwIgUa0KCoiZwEXKE%2BEhdRQJDGB4CIrHoMfmOIMODJxrjesq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFggjoVSgTT5S7kdrSrcA7bLaO0LRjoK74wRG7Yv%2BVeTnBOiqcRkv2W2glOf5hClVOW93JscV53ZkDs69t2bUFrEZH5qVau567tlYbGntCzNWuBGwHS8YdVcjETK%2BHb%2Fy6K%2FpPkLfDtSG2tQWQ0zwnjCRT6QcoZNCeQL2AFdNiDcHxJwkfmkiGeIgoxMOLknkDE%2BHcq5sgtYimj8CqaMh%2F17JugX7BCen%2BGtBsPe14NsYWqHU9SA705JoY6l1OGStUCKteoB0sDp3mqxtD5sLay74xEtZYb%2FBbcLDUmrg7cR9FjrP4UENUiAeBrXH4yNGm90pRdFAX8wxuBDTSvE79KeL8YPKNiVzPcxKufwA1aAzVxcfcFPfRPVKCQ%2B3xnV37muS3N6OddmUAWZEs5eU%2FIwSatB9RcdaYNuWH%2BS%2FuR8ezSELK1n3mFEyOM4ATDXugteJlVydC6yeph2cP%2FXgRyGVtZHWJ3caWFUWVGp2KAvESf7bQHYjwPNG6DwUjXZfTovFpYdlQFu%2BJOy69wh9m2zt1I996naJifmFkDnomfWH829rtGa5%2Fs8fWoiNerjQ2ttobz7uNY%2Fz6ayug5sUNWy%2FAP3S%2B%2FNE7UcnakHTjeNMokWlvVilFHjCiuPH7wqm7C8wnfNSTQiPN17MLXp978GOqUBNPDuPS2vgk6a9icAmkqd7R61DprWLK0Bz%2B4Q19zjAHPtJo4rBWtgGwWsi2x935EXxtfeuUE0MfMjqzmsUSodOeh9PJv%2FIumU2AwmBCiNYhV6Z%2FTPsEYJ7WxawYZ1TQwuOBG9tTjXMD9GqdAQbh2r%2FIzukM%2BwKDnouG6%2FFOVRYopwYHrto1CrP0Ew8tW%2FpH5azJ69JyAwU6bg%2B2WAmIlE%2FfcxEsdM&X-Amz-Signature=e6203201e375a6ae47c6d75f691f3244ec0842bc912918cd138ee2747d009b93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
