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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HRJZQG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDfo7Tf6l92cVKUyzuRzsf7ig8AvQrBiIoJekn7vKuRLwIhAOVSIeQ%2F3XJFlRhQN%2FxszEpWPb%2BzMN8Et0w2C98ZW912KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo6txjjwXrYA3J8%2Fgq3AP1Dwz7w511cSAjrkPxDj2BFvT8Od3UmXJaQrJeoWiR%2BNmDCRIRd2bSPFRRy8ZBEhAAK%2BpewP2ApeDJObch6X9CLl%2Fz%2BzxAHGjOFfBeWwdZJ0uml6EnmUQDqyA3ZVKz%2BDY0y%2BFiskSkN6GEBKOYsdWgg3Byh4JDyUgogT0rE3MGIttBisQZrShRdVNGu%2BCZ89JQNyWFWnZxbek2w8JFhirOoEWbJlGf6savvFshnBSyyU4gvjbxKJBW02jnZJalnmKhmbdXzJ33cCYNIZcLDNBFnRPTW0ZQDzuq%2FHNzueNly%2FlwAuUqc3Sb%2BxeHgCrmh9r5INoeGTbvKKWj1w0NFHMGeiLvMZfjLUTv0Yf9ZL5gAK4DqoTKbR4WHT5AksmrG65lKOeU06epCJFHJRDMteMC%2FT%2BQQDh%2FcwsNvyjiaXtnwmubwWtTqt382IxtBkuHgkUC5UBB4JuMEIjd1Bz%2FY5eAX6WTl0aNouvuDt%2FsoEaiA9dhix1Vxy6%2BpEVGkehai4eO5v80urlUrsVactzBTnvwjorX%2FTyFxKt6gMLO0Nd0aStGP0oMTV2jBCATfOiJUv5%2BOU6YgAhraLr8kGAkumj91N8YScbcrmH7CsuzixUdMvHOaT5ZArb7VSgK6zD2oKLABjqkATDD1%2FvL1SrqcRzjWWEYHlmlEu%2Bs2VH%2FLJ9kIP%2FuaOb8XsGkNtBWDnoCbTi7NaLe%2BsITOnzSHACoFnb%2BywEyydv4ZKyNm2SD1hZL14iN1CLUTodmo1DT0lbCni5jTinCfAqM4iVn8xR1f3jONLszvKY5wAk7NBvOq64fSH0okxKxp3513Gr%2BEcwQca6UfbMmakouOMc09soDxtLXN3FnaIC8zW4D&X-Amz-Signature=d0730263e4b16a6f3757c2acecb192a9660b387948c475934046aeefd42f518b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HRJZQG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDfo7Tf6l92cVKUyzuRzsf7ig8AvQrBiIoJekn7vKuRLwIhAOVSIeQ%2F3XJFlRhQN%2FxszEpWPb%2BzMN8Et0w2C98ZW912KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo6txjjwXrYA3J8%2Fgq3AP1Dwz7w511cSAjrkPxDj2BFvT8Od3UmXJaQrJeoWiR%2BNmDCRIRd2bSPFRRy8ZBEhAAK%2BpewP2ApeDJObch6X9CLl%2Fz%2BzxAHGjOFfBeWwdZJ0uml6EnmUQDqyA3ZVKz%2BDY0y%2BFiskSkN6GEBKOYsdWgg3Byh4JDyUgogT0rE3MGIttBisQZrShRdVNGu%2BCZ89JQNyWFWnZxbek2w8JFhirOoEWbJlGf6savvFshnBSyyU4gvjbxKJBW02jnZJalnmKhmbdXzJ33cCYNIZcLDNBFnRPTW0ZQDzuq%2FHNzueNly%2FlwAuUqc3Sb%2BxeHgCrmh9r5INoeGTbvKKWj1w0NFHMGeiLvMZfjLUTv0Yf9ZL5gAK4DqoTKbR4WHT5AksmrG65lKOeU06epCJFHJRDMteMC%2FT%2BQQDh%2FcwsNvyjiaXtnwmubwWtTqt382IxtBkuHgkUC5UBB4JuMEIjd1Bz%2FY5eAX6WTl0aNouvuDt%2FsoEaiA9dhix1Vxy6%2BpEVGkehai4eO5v80urlUrsVactzBTnvwjorX%2FTyFxKt6gMLO0Nd0aStGP0oMTV2jBCATfOiJUv5%2BOU6YgAhraLr8kGAkumj91N8YScbcrmH7CsuzixUdMvHOaT5ZArb7VSgK6zD2oKLABjqkATDD1%2FvL1SrqcRzjWWEYHlmlEu%2Bs2VH%2FLJ9kIP%2FuaOb8XsGkNtBWDnoCbTi7NaLe%2BsITOnzSHACoFnb%2BywEyydv4ZKyNm2SD1hZL14iN1CLUTodmo1DT0lbCni5jTinCfAqM4iVn8xR1f3jONLszvKY5wAk7NBvOq64fSH0okxKxp3513Gr%2BEcwQca6UfbMmakouOMc09soDxtLXN3FnaIC8zW4D&X-Amz-Signature=a885887e9414bba0273a56c556bf25087d9888bb2acc4f233a7e528edc02e00d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2NKF5HD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCeMGqncFV8EZT88CufF3WpDd0EgsNWTnRp6GBZmnFpMwIhALLGVaVqphZ0RIAs6UCX3s8%2FYCUGFcTD3XPO9OIuOrJbKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb5Cwyf0gyNNO5d3Qq3AODzTl7IcB5Eg%2FV3211rdNkYG6bpjASl1c9KOrXF1e0yjl8XIHQUzKpPc7Ga4n1meADotL%2FA%2FqAJi7wV6rwiZkeo7OmGUfJ245B668hMm%2Bx61Eg3HU49qPCDLcrpHG0mYwl4Vl9t%2BlhnsgySHhGy34G7p8Tm52M%2FrGECiH8fjwesDVLPl9qSRfpZfaEX5hveELeEAGO5tBnma%2BNTlbV%2F83q5vauVbaP5QwRxpYiJK3RtND9yyQ%2BTldPHHvytpVwlgPuaLx9d%2B1dW80EbbGpt7eQKu8KjLlE3mI7Ye91PgP99GGQNo%2B4JgI1JegaJSSmB0EE58AvmiVahG%2Brbkn6AWFLHeZFMYkRTNmkAZI84Uj9w79MQfl7t0QK0vNu%2Fc7EOb1rqqCvnVcFnp3%2BI2Ivmwt9QszJkavHiCnJDH6T5quKXN4jqXKyNyXb9z%2FdKF8Wm1GcWgrRFHIoIHPfeHUI6uzMkRk9LgtGhdy0TK3jjsBhtyLph7AsM9ci7P7d6vYUJLutjIpnzSYoHuM2ecHfIPPp1x7Oq9nIxIn80y3u4fP3DIks4aPf1IGKihp%2BHTQmZFcaDRLWfCWplTwzJr4WPFEL8SttkWtefwzyoI%2Bgiwu0D4FWRNvxBHlZLtlNUjD9kqLABjqkAVinxXZgDGXNFDXzIFb7GMposM5yk5UpxwnpsEJgKNMmG63Cx95RNnB4eirAAPKE1kpfS5pSg0jfkEPnJEt%2Bk%2F69uyXe5lsXwIP%2FWa9lofN4oaGzSCN3EuRUH6ro6MtmycFBIVJTqJJ2PDKFGVnkxpxCqS2647Bhv89CL8kTaB9idi%2Fg33FgGL4oBlwTDf628YzU2jDMPHNFSgJHm9a4P3Al2j%2Fi&X-Amz-Signature=c2ce25907eed629a48d65dd208dbb92ca3df7e4a300cf31a174aedf30384f371&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APKTSLE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGQrpDMzpUWf2d%2F7fWMfEuRzVu3C6zW0CBPLmE7H9EvFAiEA5Iz6U%2FMJO9ohBIc99vlS%2Fty5FPOVYMMGOKUr42MKipIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIoe%2FsLTatMfHRfuircA3H%2B5cRCAw4UdsCurSEe7adPHfK6ZkBldGukDCvccxzR8JZS3TA60M1mqHNKacnzqzIoOyEkYqzpMvk0ELwkGsR6ld%2FIIqhkg5dwL3q6ZBqH2D6CJ9OiE364FFXsSo%2FvPRH9mPppFWtuw4xMF6dAt61KNKvOQbf4DUcyF7D9aqymcIrm8LT%2FNjs8HTPDXja0jsiu%2Fzr%2B3gcMGJK3dQELRxjYyC4qt6%2Fs4CFvUMav0pVJSn82rXJ9Q2kJtFP%2BjDjuZQujVttS%2BNDPwnOsavfSlXQ%2Fhc4g%2F17GTZEvBkp2e9d6DXObnU%2F0lyvP%2Bo68e7CW11b8qRlKZ9RBBStIkMzt5HPNb3b0oLuD%2BaTojGHoxflzFCfDSnpjXvIuA4BGgMjsu4baiMre7AKsyZW8%2FITZKw2smXw0kzdL%2BhCZXpthNdfgflUaF%2Bc810Soj5NNPgJVeUe1n5RjICEBEltwbFrAwcMbP0uZYLnY2z6H6nOmyYrBV745Mmvq3NjN0%2B8JDNO9VQ%2F6nTBrOiqhV39q2ByqaOze5xaHlDJbhv%2F87egSfWj1PYgCLTufVRbzIvdcVyqvcDUbys5dJ5bbNSUKdm0ZtWgqoRDJTZQkA4qy2ExH%2Fmrqyiu9XB0QpsX9AA2LMKCUosAGOqUB7HChDM1pKU%2Bf8qZNOlSpz%2FsFTvn88d8mI2SgY4giUZG7%2F8H8sxJUJ2w96EMRQoOsRg8YSsaRC5yKJ85dnwXeyThZEWdqq2ZBhyJqQ8I5l2hbQu%2B0PlOGleIOu8NikeUwPloBLFUFUijXrm4khTzkDoxMn2UWYee%2FERHqBPyKlHmflkEA1mWCESb3BV0LRS10JtGol%2FeSNQ0hzSBtEh42SgDO5wfo&X-Amz-Signature=1a18443e81891b01f01cf9183ac81c095f86ba3c70dfa3f2ba3f85a80405f3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HRJZQG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDfo7Tf6l92cVKUyzuRzsf7ig8AvQrBiIoJekn7vKuRLwIhAOVSIeQ%2F3XJFlRhQN%2FxszEpWPb%2BzMN8Et0w2C98ZW912KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo6txjjwXrYA3J8%2Fgq3AP1Dwz7w511cSAjrkPxDj2BFvT8Od3UmXJaQrJeoWiR%2BNmDCRIRd2bSPFRRy8ZBEhAAK%2BpewP2ApeDJObch6X9CLl%2Fz%2BzxAHGjOFfBeWwdZJ0uml6EnmUQDqyA3ZVKz%2BDY0y%2BFiskSkN6GEBKOYsdWgg3Byh4JDyUgogT0rE3MGIttBisQZrShRdVNGu%2BCZ89JQNyWFWnZxbek2w8JFhirOoEWbJlGf6savvFshnBSyyU4gvjbxKJBW02jnZJalnmKhmbdXzJ33cCYNIZcLDNBFnRPTW0ZQDzuq%2FHNzueNly%2FlwAuUqc3Sb%2BxeHgCrmh9r5INoeGTbvKKWj1w0NFHMGeiLvMZfjLUTv0Yf9ZL5gAK4DqoTKbR4WHT5AksmrG65lKOeU06epCJFHJRDMteMC%2FT%2BQQDh%2FcwsNvyjiaXtnwmubwWtTqt382IxtBkuHgkUC5UBB4JuMEIjd1Bz%2FY5eAX6WTl0aNouvuDt%2FsoEaiA9dhix1Vxy6%2BpEVGkehai4eO5v80urlUrsVactzBTnvwjorX%2FTyFxKt6gMLO0Nd0aStGP0oMTV2jBCATfOiJUv5%2BOU6YgAhraLr8kGAkumj91N8YScbcrmH7CsuzixUdMvHOaT5ZArb7VSgK6zD2oKLABjqkATDD1%2FvL1SrqcRzjWWEYHlmlEu%2Bs2VH%2FLJ9kIP%2FuaOb8XsGkNtBWDnoCbTi7NaLe%2BsITOnzSHACoFnb%2BywEyydv4ZKyNm2SD1hZL14iN1CLUTodmo1DT0lbCni5jTinCfAqM4iVn8xR1f3jONLszvKY5wAk7NBvOq64fSH0okxKxp3513Gr%2BEcwQca6UfbMmakouOMc09soDxtLXN3FnaIC8zW4D&X-Amz-Signature=d86a339d01d517e4c7611101eb820730a3ce6f110d72574aa46a6a51a7907c25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
