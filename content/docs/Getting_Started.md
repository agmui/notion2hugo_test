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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEQ5ZXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs2ByxfFPRKILnZKhNpb0%2F88JtG2nNJHuGt6FTWOKSmAiEAu%2BoXEf97K7jS%2FN1ud7mixWLOf%2FwDsWDsRc3QWhy9K%2BkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx6%2Fr77kAY%2F4N6UhCrcA%2BCuhawK4jMYXJVZjPwJlDaE2xTgmlu1ZpcEYm5vNYh8ah3WxqXIqx9XWtL08D%2BZ%2B8CGY6HLHBZcTEdZ7rNVPA2%2FnxAFNWDwzd6WEcup4CTfxfXL88axFDsF2PZQkv5V9qRKgqVSSzUGx%2BYvI%2Fevv0bOTKCm6Cf5033GrcX0xdn%2Bz9CSSyZWdIMtmH4cvFeCujn7CkM3WeN9uoZCDUpiY4OH5JK82dcBMI9xOwh4my7HSZYbEMDAqkkadS4YDgHqlSQPg%2B5XNQUau1lLbBR7L86e5U%2FKTuboEDkF8LfMVAdTkxA5AXKGjnQ2LQn%2BIhgeAYkQgyuG5OBI2jVsgq4C8Dk0JvNA%2FYxjA%2FjB9YlY8PuvuVd5FnrAIeXv716bZAq540H938QZDL4W6usPQ2vzkuZGO50AF%2B547GV6%2FxDINiD2SByZ%2BOUbxlFyQsr%2FyjcrIcCsmR3W6ra%2FJdw9Zw%2FAOVoZjEkIrV9L0%2BeohDRCrqi%2BWUg6zdCP0jHQ9UuXO8OC7T2gyQOiZx2J5%2BFD6OAnom%2F%2Bv1KaKTEPq1sl9T7aeFhSuI4bbq4tckYKG8TafjgRFg762tXkkJvtF3X%2FVgEOAya2ZNN2Yi0%2Bdsyo9CobNY%2BUY7CiG%2BV%2F35mY6QsYMNb8wsAGOqUBBdubgRSG6heoe7h385E%2BoadsD%2BD4KGkmKoSndAtrqrMZ8JmRtnxYyUsHwNSc7BhOWb9U%2BKDaz9ebBesXzxvot26FKLmw01ikf%2BFPpd2s96BjOgXmVPinzGS8ogztCOgMBfTGlrVnz31bDYf%2Fpgzv5pw1QW0n99fukUM%2BVc4Ean2m1xQ%2BrqZz1oPneDZtFcCySDdrJNner6aLAIGD333GBKS7MgSN&X-Amz-Signature=a8a24c3cdcb1acdaaf96429a2bec0925cb5dd86558f7fe72d2edd8a7eb022342&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEQ5ZXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs2ByxfFPRKILnZKhNpb0%2F88JtG2nNJHuGt6FTWOKSmAiEAu%2BoXEf97K7jS%2FN1ud7mixWLOf%2FwDsWDsRc3QWhy9K%2BkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx6%2Fr77kAY%2F4N6UhCrcA%2BCuhawK4jMYXJVZjPwJlDaE2xTgmlu1ZpcEYm5vNYh8ah3WxqXIqx9XWtL08D%2BZ%2B8CGY6HLHBZcTEdZ7rNVPA2%2FnxAFNWDwzd6WEcup4CTfxfXL88axFDsF2PZQkv5V9qRKgqVSSzUGx%2BYvI%2Fevv0bOTKCm6Cf5033GrcX0xdn%2Bz9CSSyZWdIMtmH4cvFeCujn7CkM3WeN9uoZCDUpiY4OH5JK82dcBMI9xOwh4my7HSZYbEMDAqkkadS4YDgHqlSQPg%2B5XNQUau1lLbBR7L86e5U%2FKTuboEDkF8LfMVAdTkxA5AXKGjnQ2LQn%2BIhgeAYkQgyuG5OBI2jVsgq4C8Dk0JvNA%2FYxjA%2FjB9YlY8PuvuVd5FnrAIeXv716bZAq540H938QZDL4W6usPQ2vzkuZGO50AF%2B547GV6%2FxDINiD2SByZ%2BOUbxlFyQsr%2FyjcrIcCsmR3W6ra%2FJdw9Zw%2FAOVoZjEkIrV9L0%2BeohDRCrqi%2BWUg6zdCP0jHQ9UuXO8OC7T2gyQOiZx2J5%2BFD6OAnom%2F%2Bv1KaKTEPq1sl9T7aeFhSuI4bbq4tckYKG8TafjgRFg762tXkkJvtF3X%2FVgEOAya2ZNN2Yi0%2Bdsyo9CobNY%2BUY7CiG%2BV%2F35mY6QsYMNb8wsAGOqUBBdubgRSG6heoe7h385E%2BoadsD%2BD4KGkmKoSndAtrqrMZ8JmRtnxYyUsHwNSc7BhOWb9U%2BKDaz9ebBesXzxvot26FKLmw01ikf%2BFPpd2s96BjOgXmVPinzGS8ogztCOgMBfTGlrVnz31bDYf%2Fpgzv5pw1QW0n99fukUM%2BVc4Ean2m1xQ%2BrqZz1oPneDZtFcCySDdrJNner6aLAIGD333GBKS7MgSN&X-Amz-Signature=0a0e44eb149163fdc2e31e1e677f5bda0cd8fef5f91801b5b98133ffb32eb415&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSR3NT4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT9sGjtgQ1PFgqElvMhEAN6w2lpvKHj3r%2BE%2FOwl0MxgIhAKXQzh21de%2B30q7ZLIwXgqmUpj5My7xOu8C8OJJWusIhKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF0uslHunGEOa6xn8q3APo9W86ySnWuAxxVrb8CvgK0zXlzkYUIZ1dk6oBg3NhLADS95so33H3HeqXXdgKE8uxA0rj8OdpOgcVylzCtaWDA84x1BvgAFu8fJDGGa4fLhDX%2BvI9cBWOkUMzTftV%2BvBPlOeR7SwaVvgd7%2Fc95tKQt7kCyA10Vr8liuQia7O85j8EEiqOsQHKhkQY4p78f70QJZyg3jkOOCmryEFMtsn85M%2FR7%2Fw42%2F2zRfPrksyfhnpeRZmpWHRCHXD6DXLpf8EOig5iUNzEcSxZFsDC1FC4x9ShJfBDhSWWiC5HJXXOMiOBmqBz70Pq%2FM8ZsYAZIw2JjhpSqY9clDSCa0CvUBYotdCPEIHfRfRNaDfwyzENEgiuAajk%2BnScECXt4XjESi9qdG3GmBiskhW7r1mU8oD%2BPjQfyx2bQKF2wN0psBCGCEKBNZ%2FUFmQf0IZ8LS2MLJjLuqgKrFVxjBHQ1MCq5wi36dawxoREH%2FKMkcMaGPVK6alh5RPuwqj5ihN8To1dZU77atNA%2BPiOLWgzFklHJoHa8WDjG18pXhm%2Fui3zaTwm594Hg8wtLapmBE78aZoCxpNfNIb2kN7P%2Fctk943fnB4ZGcJRH04CdwyNs1PfADHlAvcqPk%2B4BviaQ48zNjDP%2FMLABjqkAScfHTYy1kqn9PKkSaWMGYfCoUGTJ42pYn3YDRY%2FzKLiq%2BtY%2FxfqBY0hYkTi%2FG%2FNVYQeF0UeyZJ%2ByUV%2BSsFJZBKC0oJvCzNnKqV2kcrcJT8BKDLOisPVuF88npjoo3Z%2BEu%2FSNpY8Sv7GHTAJN0IG9zck8ScWu5V4z2EaP%2BsfYb1KysMb38Q46v90KB2gNCCsFBGpAhkkm5mKaWpigvsrAhgj70vL&X-Amz-Signature=dcd1346ff3be1740b68104bb8c6f54ffbbcaf005ae70cef8523abf93a5cbabb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4TCKJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMNE%2Fc5h0wl09T6z%2BoLs8cujK6aq16saG%2F5QcnKwLYVAIgblguj0RALPPhOffFfO5foWAAlvo2ZpIXn3ozbGq2x6gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORrcJW1pNjIsSW9qyrcAxDYh5hdtU%2BIBsP4uA0vItKUG1reue4IcKk%2ByGIBD364J72SxGqtiTfIOu%2FB8evTa3QgumF2iDSP6MyCE%2BTY5nUyVOUHqz03uwbxC1P5BOnEfCZ5GEwZ3Mz8kqY2cslhfLEgjZ00OeAnnuXSDt%2FQcQzRwbpC98DMVo2q%2FF%2FyK0XXuwyT%2F2p9cRlLVSf6iol20TVOBU%2F3CfGRYuIsFEJ9PohND1JDCpLcNFjhF5fBG3CK3fRrHkGQ07S3zK8xtHwFRXcVJ%2FJuNR%2FcRIfdgjNpjMfcXjgTPvjAYVcoBdgnxaki7A2iOhkiTEx0%2FD8TR%2FNpIgzo8%2FhwfSuQRj9hEQHZRx%2BVBIxT8Q5zt1yUFMLMLoERpaEuy77vozO9YpTMBtffm5mfvVO0iEV1BeoOSadbEbp6eDlyK8ncnAkxi%2Fore3gezSn6p8bCGB0OGqRDjKN%2FTie4shGsOklB6OxKC4xfK%2BrhOs1aeY%2FWIP9AgV1ClKCBOpD2owrjc%2B4MQr6g0A1bDNVnMRFojVO1lgHIOvf587n9PA%2B0kjgRAOm0ODtu1bhtTPCK%2FHP4B9Ug17EPsKPhJ0SOZ0BDjVL3%2F%2FWZ4HW6D51P5WdonswtSMHWBpd%2FKNOPszzlExqgQuo%2FvTN3MID8wsAGOqUBzmu%2Fk3GsGTybwAO4p93umHygtnkIoQ2Qz4POiugAEjXJHZAjqKzKynETpKTH4EyMT0o2SE5IckJNjZDmJLtkMDHXi8uaCbENtYsZ7TX7iVqtacWugpPlRTwSgu1p9TEWz8f0RNK0EGu6SrC5eeKSDSEiuIFXwUC8E0i47%2FEDqCpbQdI0VOBtRvkDH8vvi81nK7%2FZuQ%2BBMhdCOu0JGqsnT2mc5R1M&X-Amz-Signature=366e2165dd1fbdc43777c65a24bc87eeb953190b1de687c8eb8250671090fc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEQ5ZXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs2ByxfFPRKILnZKhNpb0%2F88JtG2nNJHuGt6FTWOKSmAiEAu%2BoXEf97K7jS%2FN1ud7mixWLOf%2FwDsWDsRc3QWhy9K%2BkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx6%2Fr77kAY%2F4N6UhCrcA%2BCuhawK4jMYXJVZjPwJlDaE2xTgmlu1ZpcEYm5vNYh8ah3WxqXIqx9XWtL08D%2BZ%2B8CGY6HLHBZcTEdZ7rNVPA2%2FnxAFNWDwzd6WEcup4CTfxfXL88axFDsF2PZQkv5V9qRKgqVSSzUGx%2BYvI%2Fevv0bOTKCm6Cf5033GrcX0xdn%2Bz9CSSyZWdIMtmH4cvFeCujn7CkM3WeN9uoZCDUpiY4OH5JK82dcBMI9xOwh4my7HSZYbEMDAqkkadS4YDgHqlSQPg%2B5XNQUau1lLbBR7L86e5U%2FKTuboEDkF8LfMVAdTkxA5AXKGjnQ2LQn%2BIhgeAYkQgyuG5OBI2jVsgq4C8Dk0JvNA%2FYxjA%2FjB9YlY8PuvuVd5FnrAIeXv716bZAq540H938QZDL4W6usPQ2vzkuZGO50AF%2B547GV6%2FxDINiD2SByZ%2BOUbxlFyQsr%2FyjcrIcCsmR3W6ra%2FJdw9Zw%2FAOVoZjEkIrV9L0%2BeohDRCrqi%2BWUg6zdCP0jHQ9UuXO8OC7T2gyQOiZx2J5%2BFD6OAnom%2F%2Bv1KaKTEPq1sl9T7aeFhSuI4bbq4tckYKG8TafjgRFg762tXkkJvtF3X%2FVgEOAya2ZNN2Yi0%2Bdsyo9CobNY%2BUY7CiG%2BV%2F35mY6QsYMNb8wsAGOqUBBdubgRSG6heoe7h385E%2BoadsD%2BD4KGkmKoSndAtrqrMZ8JmRtnxYyUsHwNSc7BhOWb9U%2BKDaz9ebBesXzxvot26FKLmw01ikf%2BFPpd2s96BjOgXmVPinzGS8ogztCOgMBfTGlrVnz31bDYf%2Fpgzv5pw1QW0n99fukUM%2BVc4Ean2m1xQ%2BrqZz1oPneDZtFcCySDdrJNner6aLAIGD333GBKS7MgSN&X-Amz-Signature=c21866b53aac658e9d143292527d6c364dedacc6f563196da0807989681a6ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
