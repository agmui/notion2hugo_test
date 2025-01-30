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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBQHUOC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYJVGsLVoAjGCVVHGnZUVKv3I4EmIR6LCRS5Oeu39PgIgdqLRdieF%2FP8Lm5LbLorWitx3qqI8jXyjxFavmMTbhdIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr%2FhKvj0yPnFYdhGSrcAyWRNq3INFAlM7swppNLBbqi2Y%2F%2FGlXr7sYmVCetyUKz1OJvz0Ysf7jP12kT4ZN8%2FawaERIHOrTVMWDourp39UH9970ON2meHRzJ58n4RAchaELSDMF8hhKJuIEjprr5rlXfd2hU%2BnHmNxxLfSlhOpq7hBXBZ4ZlCf2jrn37FFyAaEOfzw7IXJn5XJ5l7LC0VaH7vqXwXdv28fPggp6lXZ7EqaMbZOvwMKrrfl2w%2F4H%2FOsWeviZboE2xhAU3uB0fr%2FLaFisGKBk6xvze0%2Fs5w4x%2FY%2BMcK197volW7unylrpZW0PzBuSyr7muMF7ZIDM4GBA0bDD%2FqRWZ%2BuIEnXfKKe3AZhAdgRzvRdanspDMp68EDdNtfA9livAK1X23PWbIefKKd0QDY4fpae3IuidhVvDMOCBRi5zGgpQxmZ6tZwfzFfqugIuU5vKHcYvLDsUU5XqcczRqZoMsEvAbhlTtylMsaOHgQ4EdSSzBrVxhVKOliFCi06CUxhAz2YFYg3jeE5uS2TbAXKV31YSOSECtChHlOBL7Qf%2FAkQTyLrp%2B2IH3NekM43f%2BBMGnbjZmEYzXVAuM39mO1Zxb9JlNPyT2ZOpa%2F1Q1ZHAuqvTDa4h4CD%2FWgSwbOIcTB9kTHnF4MJyP77wGOqUB5gjd%2BWnYrXNW%2FEUG5UyggNhtqK2sGTgbKTuKezmiCFmZyFNl4USJN0Qsp1hO%2FE6sr9VH83huFkMCMtYi0jP4Q5TpWba52%2BTm6KoIjjhOJChS1bFZWXBbaySyIMmr51v%2BuL%2FBp0AE8gd3YGWdfYn9CtQPqCCy8o7V%2FjuNqrnRn2p3yZRKZF02ELTCf%2BAtLp6ioAXEB1ODVf%2BU112dNFErvu4YlYwt&X-Amz-Signature=fcad51be5bc10fc5d671c58e0e5da3ac510493dd80edcc28bfec3dbbb3da9559&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBQHUOC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYJVGsLVoAjGCVVHGnZUVKv3I4EmIR6LCRS5Oeu39PgIgdqLRdieF%2FP8Lm5LbLorWitx3qqI8jXyjxFavmMTbhdIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr%2FhKvj0yPnFYdhGSrcAyWRNq3INFAlM7swppNLBbqi2Y%2F%2FGlXr7sYmVCetyUKz1OJvz0Ysf7jP12kT4ZN8%2FawaERIHOrTVMWDourp39UH9970ON2meHRzJ58n4RAchaELSDMF8hhKJuIEjprr5rlXfd2hU%2BnHmNxxLfSlhOpq7hBXBZ4ZlCf2jrn37FFyAaEOfzw7IXJn5XJ5l7LC0VaH7vqXwXdv28fPggp6lXZ7EqaMbZOvwMKrrfl2w%2F4H%2FOsWeviZboE2xhAU3uB0fr%2FLaFisGKBk6xvze0%2Fs5w4x%2FY%2BMcK197volW7unylrpZW0PzBuSyr7muMF7ZIDM4GBA0bDD%2FqRWZ%2BuIEnXfKKe3AZhAdgRzvRdanspDMp68EDdNtfA9livAK1X23PWbIefKKd0QDY4fpae3IuidhVvDMOCBRi5zGgpQxmZ6tZwfzFfqugIuU5vKHcYvLDsUU5XqcczRqZoMsEvAbhlTtylMsaOHgQ4EdSSzBrVxhVKOliFCi06CUxhAz2YFYg3jeE5uS2TbAXKV31YSOSECtChHlOBL7Qf%2FAkQTyLrp%2B2IH3NekM43f%2BBMGnbjZmEYzXVAuM39mO1Zxb9JlNPyT2ZOpa%2F1Q1ZHAuqvTDa4h4CD%2FWgSwbOIcTB9kTHnF4MJyP77wGOqUB5gjd%2BWnYrXNW%2FEUG5UyggNhtqK2sGTgbKTuKezmiCFmZyFNl4USJN0Qsp1hO%2FE6sr9VH83huFkMCMtYi0jP4Q5TpWba52%2BTm6KoIjjhOJChS1bFZWXBbaySyIMmr51v%2BuL%2FBp0AE8gd3YGWdfYn9CtQPqCCy8o7V%2FjuNqrnRn2p3yZRKZF02ELTCf%2BAtLp6ioAXEB1ODVf%2BU112dNFErvu4YlYwt&X-Amz-Signature=05edbb2d26d92434905e29ada1fdf5128f17fd508c2d94e3f98cd964aab20cac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7VE7EJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLMLz%2FMmaUYT8Rw4qcZFlX3iOiSFtarwLA1YC5SrXGAIhANy7mCQgHLE1ddTeznD%2FCBELHGOkTc9bPMsBUdm%2FzSZkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGk9Hh2lz6yTz4Gbcq3ANdo80pvf7cjcaqqfyDUx%2B2%2BYMwk09kCSoipIqjNWnzlXq8utzFo1DsNTeRFGeY6gewPY76Y7dGdFCiyLzmkAziLuhJLYr8oWfZcYOqj41hmKN%2FJtBl%2BrAKNs%2FIomp2wnC8p222ETq99HPaZ3KkpjY2OllXX%2B7ecxQOFGMmGUJuF7ecKyPactF1tA%2FTWJLcCZZSOyVPu0%2BYcZ1%2BeGJPefQngII1ZD952uCaoqezTyMnng%2Bdfdr1B%2BPckVP7%2F44hnKMPUyl49iGO1ZH4If1qdaoF3De4ZvpZaEfnVcKsfQ3%2Fn9zRjm1JTsAqK7eaMnCpliIgP52uvD62ySHEchk%2BuW44WxXEiYBVYVtHfabnHUHr8jJccwnET2lfnDhSXeccpwM0aBqEuKB%2BJAnOcEu%2BhsWYZazb3SzW5bkTUfpn1zBKLgrvSL%2FOwCy0nrSGQum2Etp%2F2RUMfaxNGBK1ITCWBOM6pNaI2bkC9CDANysfbohmO7xY%2B1k67PVdjrO6JpI8rr3rpgmolDy%2BGS7k60ImvuUJirmPVPOubkRD2kzLHToFKKgD4x1gEnT2Y6hHiJIrDV6sfH5pu7ifidDKnF0rZCWj2HSGTGaKBim02rYipdEhaefv01nbYvWMvP0%2FZDCUkO%2B8BjqkATz0RuHUeHz0PHtoKPpMn%2FwGcdQCbxkHl%2Fk2LW1v7dyArFsgShp67GF1hWyfON1Gd4ANVbDsME8cAAjgF3aZH%2FxAAC8veb%2BYugvZ4kr88Ifwenw45eGm0KKDubHFeuJ4U5rEE4axYdPyELIEqwV4uYIN1g2jUSoW%2F0rhLqAotSwUyhfvZOJ3vg0iSaKvV0XH%2BIXuHpFj%2F98XdOMaI9A%2BhnG%2BY8wQ&X-Amz-Signature=437e0b6ef85c87d0d2d189948aaf2f0ca8010fae4db17699ef981125b4346168&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7FNXFG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE7PhK9uQ%2Fu20iSbeFRD2BUxklT%2BwMPDJnlUL43CMfqAIhAIMyIBAVQ3OwHgXja%2Fq507OsJ8eIeAjmLyKQ%2FuBnjo6eKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE9V1o1p6WJuH9DTUq3AM7NSnB8hw%2FbhblLpz9r7Sm%2BRgBIuMlFtux2ekDX8Hg7HjYqvhuCp8FSyHRhMbS4nwD8h1rNbLNsLaWHTDDmtXN2pt4I9klmp2Zn8AnvHX%2By4NURVYq6dtcnOAmhawEo8fPZCWIldQR1JRPqWa2dZ6Jdal5WFAiHag9%2FipmAc5RpXEziX8gdZk7KML6nE6vmV%2BGADuL%2FqbquF8Kb7Dv2VU%2FHGt%2FmMltfMu5eH8rqCq7H%2FRsa41B6B3rNgKcc0FEDYC83wiWm01mWtQf2cUiJNaQDc90U7L4FBqovHiintGvihjC4cKVIvNxt5gUziNHYS1E5ddl77yLxZ4h2FLPa4qovq%2B33XVRcXMbNRhc%2BQ2vbwKMRfGG6ah7OQvPGgasmfs6EDzwcaAE0GBXDCAgJ9Fyn9iWonfqC2jlp4EFJ5b7Sox1VBxvzuy3qUzw48fOYlo15VSGVBPgO9ZdBFIwd8FBybENl%2B2MLZDkXKZEXTodpj%2BSCj9yB%2BFsOmzi1Gn8%2F3CsLPDNsSEpmBdjSmvYWyTu0lUraVJbyHxCfQF3ud8e9Jb5CJ9bbjLlbYssc3DRK%2FVfHUFoOzAlruB27JwRY39S9BoUB15z08Che1FCQqnGacM%2BsDIvr405hntutTDFj%2B%2B8BjqkAXHXj3S3ch2gLTZpGoKL%2Fs%2Bsx4fNejWp617V6arPiZ8iBE3KV%2Bs2kybgv9YLaLf%2Blj4M2kWHa9KxBqtnoxYKZmP8sVJ0ew3qu7oGlIB3ayftr5LlUpmXCYNsAUShYfVIcEvjheA7omeQuppa0eJGFvk9ctUCZ48j2YS0rcMFsmwKlOnS4bO94r9Unon28JwpT2pwhb%2FIvb8ek0LNt5%2F82ZG6tlPE&X-Amz-Signature=701d5cb2e74c1ae2c76f424cd6b0579542d66ea047a1b326b1805e446683e05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBQHUOC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYJVGsLVoAjGCVVHGnZUVKv3I4EmIR6LCRS5Oeu39PgIgdqLRdieF%2FP8Lm5LbLorWitx3qqI8jXyjxFavmMTbhdIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr%2FhKvj0yPnFYdhGSrcAyWRNq3INFAlM7swppNLBbqi2Y%2F%2FGlXr7sYmVCetyUKz1OJvz0Ysf7jP12kT4ZN8%2FawaERIHOrTVMWDourp39UH9970ON2meHRzJ58n4RAchaELSDMF8hhKJuIEjprr5rlXfd2hU%2BnHmNxxLfSlhOpq7hBXBZ4ZlCf2jrn37FFyAaEOfzw7IXJn5XJ5l7LC0VaH7vqXwXdv28fPggp6lXZ7EqaMbZOvwMKrrfl2w%2F4H%2FOsWeviZboE2xhAU3uB0fr%2FLaFisGKBk6xvze0%2Fs5w4x%2FY%2BMcK197volW7unylrpZW0PzBuSyr7muMF7ZIDM4GBA0bDD%2FqRWZ%2BuIEnXfKKe3AZhAdgRzvRdanspDMp68EDdNtfA9livAK1X23PWbIefKKd0QDY4fpae3IuidhVvDMOCBRi5zGgpQxmZ6tZwfzFfqugIuU5vKHcYvLDsUU5XqcczRqZoMsEvAbhlTtylMsaOHgQ4EdSSzBrVxhVKOliFCi06CUxhAz2YFYg3jeE5uS2TbAXKV31YSOSECtChHlOBL7Qf%2FAkQTyLrp%2B2IH3NekM43f%2BBMGnbjZmEYzXVAuM39mO1Zxb9JlNPyT2ZOpa%2F1Q1ZHAuqvTDa4h4CD%2FWgSwbOIcTB9kTHnF4MJyP77wGOqUB5gjd%2BWnYrXNW%2FEUG5UyggNhtqK2sGTgbKTuKezmiCFmZyFNl4USJN0Qsp1hO%2FE6sr9VH83huFkMCMtYi0jP4Q5TpWba52%2BTm6KoIjjhOJChS1bFZWXBbaySyIMmr51v%2BuL%2FBp0AE8gd3YGWdfYn9CtQPqCCy8o7V%2FjuNqrnRn2p3yZRKZF02ELTCf%2BAtLp6ioAXEB1ODVf%2BU112dNFErvu4YlYwt&X-Amz-Signature=cf90cb35017e0306816bc5aa2c55343cbe6485a08ce9a3f08495d5594edd1db1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
