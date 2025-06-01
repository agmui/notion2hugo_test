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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYNN632%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZsVfRGwC4mEJ92o6u2TsQmQNUA%2Bj%2BDW2xEDkqBPmg%2BgIgb6PhFwcg%2FMyJ0CTTrsKtkiH2NnkeNpf%2FF%2FExsv6m2vUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnZB%2F7B7wD6Ww6%2BGyrcAxw5hTB8ArF1VIlC8OMUHkv63EtuBuUsptLFCF7Nyyk7GpsP94mJXr1hqNWOTExeqUr8xUCm1vjv89TKcJk4cJLRut6yhgXfn24K0Y5meASNU85HwLpoRPY9S5q6DLnzCHVQHfXQFeFUarT%2FeMsOKOlWMZSP9IKjw%2F%2B9H%2Boliv7Hw1OwBqWOUtKybz68zDo8Q0OLnwYhKB5HHgR7UNW8sn3dRRIfwvmFQ6GbPR7HcVrzmeZ1ePFdk0%2BL0UlLVqT3ymzBtrLufNnhhbitPNzHeq1abH69QS8u%2FreSNU9nDCqdz7JwZtXIGxp5WmAO3EDl6Qq4tbPo6jfUWJQhTqPVYWYm29moIRJQx77I0Bb4Kk2oynMIvOIHNpPnC0sndOCx3uytoMBYEYRZE6DpdDVhKvj%2F6dpfyZW7ZeB012Xe7b3GOZNVIuUzdH2CDOoqnIW0IcyyC%2FG4O2aig4g9W9povf4xb2AG9kdX9FZfUmQIyx9b3fkLTA%2FtbH3UewJCoaUurKs%2F%2BfXNPc3yHuS7NUfYglSbVW3ysxPC1CJnl73k0YkPJeMpxjZ9bGbf%2F0JFQIEK265XVI8aTblN0jBSulA2f3LVqvTv8SakykT6NN6HYfIWbk8%2FVmmMwJD1VLgHMJy08sEGOqUBd96st7N%2Bouzzb%2FkinBIuRZdPG1unXPzzCsntVSKryoHqlnOyCivAHBH3O5UlFLQ70xTRbQ6UQOaBRnmCZUrmrzwqI%2F67mCEXtUMX5XgIjJF0YpTcTQdgQk4BKRGkrtVunZlBNKv4odSKiKbSVRW8lXs%2FqpzP3Y74Up%2BHF1dxr8RDS8FOKuAHU0fJU2QhzHMe232m16QxSG2tVO4X0S2nveLzHXqu&X-Amz-Signature=6c99b21beff497a475357997f0d40bbaed24f419c9b6a253146792becfd8475a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYNN632%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZsVfRGwC4mEJ92o6u2TsQmQNUA%2Bj%2BDW2xEDkqBPmg%2BgIgb6PhFwcg%2FMyJ0CTTrsKtkiH2NnkeNpf%2FF%2FExsv6m2vUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnZB%2F7B7wD6Ww6%2BGyrcAxw5hTB8ArF1VIlC8OMUHkv63EtuBuUsptLFCF7Nyyk7GpsP94mJXr1hqNWOTExeqUr8xUCm1vjv89TKcJk4cJLRut6yhgXfn24K0Y5meASNU85HwLpoRPY9S5q6DLnzCHVQHfXQFeFUarT%2FeMsOKOlWMZSP9IKjw%2F%2B9H%2Boliv7Hw1OwBqWOUtKybz68zDo8Q0OLnwYhKB5HHgR7UNW8sn3dRRIfwvmFQ6GbPR7HcVrzmeZ1ePFdk0%2BL0UlLVqT3ymzBtrLufNnhhbitPNzHeq1abH69QS8u%2FreSNU9nDCqdz7JwZtXIGxp5WmAO3EDl6Qq4tbPo6jfUWJQhTqPVYWYm29moIRJQx77I0Bb4Kk2oynMIvOIHNpPnC0sndOCx3uytoMBYEYRZE6DpdDVhKvj%2F6dpfyZW7ZeB012Xe7b3GOZNVIuUzdH2CDOoqnIW0IcyyC%2FG4O2aig4g9W9povf4xb2AG9kdX9FZfUmQIyx9b3fkLTA%2FtbH3UewJCoaUurKs%2F%2BfXNPc3yHuS7NUfYglSbVW3ysxPC1CJnl73k0YkPJeMpxjZ9bGbf%2F0JFQIEK265XVI8aTblN0jBSulA2f3LVqvTv8SakykT6NN6HYfIWbk8%2FVmmMwJD1VLgHMJy08sEGOqUBd96st7N%2Bouzzb%2FkinBIuRZdPG1unXPzzCsntVSKryoHqlnOyCivAHBH3O5UlFLQ70xTRbQ6UQOaBRnmCZUrmrzwqI%2F67mCEXtUMX5XgIjJF0YpTcTQdgQk4BKRGkrtVunZlBNKv4odSKiKbSVRW8lXs%2FqpzP3Y74Up%2BHF1dxr8RDS8FOKuAHU0fJU2QhzHMe232m16QxSG2tVO4X0S2nveLzHXqu&X-Amz-Signature=a7249c894dde328e247aef967165dfa887a38a95ccc9ff028187d8f1e93b6572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYNN632%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZsVfRGwC4mEJ92o6u2TsQmQNUA%2Bj%2BDW2xEDkqBPmg%2BgIgb6PhFwcg%2FMyJ0CTTrsKtkiH2NnkeNpf%2FF%2FExsv6m2vUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnZB%2F7B7wD6Ww6%2BGyrcAxw5hTB8ArF1VIlC8OMUHkv63EtuBuUsptLFCF7Nyyk7GpsP94mJXr1hqNWOTExeqUr8xUCm1vjv89TKcJk4cJLRut6yhgXfn24K0Y5meASNU85HwLpoRPY9S5q6DLnzCHVQHfXQFeFUarT%2FeMsOKOlWMZSP9IKjw%2F%2B9H%2Boliv7Hw1OwBqWOUtKybz68zDo8Q0OLnwYhKB5HHgR7UNW8sn3dRRIfwvmFQ6GbPR7HcVrzmeZ1ePFdk0%2BL0UlLVqT3ymzBtrLufNnhhbitPNzHeq1abH69QS8u%2FreSNU9nDCqdz7JwZtXIGxp5WmAO3EDl6Qq4tbPo6jfUWJQhTqPVYWYm29moIRJQx77I0Bb4Kk2oynMIvOIHNpPnC0sndOCx3uytoMBYEYRZE6DpdDVhKvj%2F6dpfyZW7ZeB012Xe7b3GOZNVIuUzdH2CDOoqnIW0IcyyC%2FG4O2aig4g9W9povf4xb2AG9kdX9FZfUmQIyx9b3fkLTA%2FtbH3UewJCoaUurKs%2F%2BfXNPc3yHuS7NUfYglSbVW3ysxPC1CJnl73k0YkPJeMpxjZ9bGbf%2F0JFQIEK265XVI8aTblN0jBSulA2f3LVqvTv8SakykT6NN6HYfIWbk8%2FVmmMwJD1VLgHMJy08sEGOqUBd96st7N%2Bouzzb%2FkinBIuRZdPG1unXPzzCsntVSKryoHqlnOyCivAHBH3O5UlFLQ70xTRbQ6UQOaBRnmCZUrmrzwqI%2F67mCEXtUMX5XgIjJF0YpTcTQdgQk4BKRGkrtVunZlBNKv4odSKiKbSVRW8lXs%2FqpzP3Y74Up%2BHF1dxr8RDS8FOKuAHU0fJU2QhzHMe232m16QxSG2tVO4X0S2nveLzHXqu&X-Amz-Signature=011fc6451b7f6b17075cc18b8022a1fabed4c0a73eb1cd743d0c1a522e50c984&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFA4MFK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCsGNc3iFtvnSLfFtqf3P74Cl5Ll1D82%2Fyqh91KgKX%2BCQIgMxEfCvyIhCC8DcRc83oq1dVbJ5RTrDka1%2FL4YX%2Fy7GUqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfWxFb3nxkHm5eiRCrcA%2F8bOrRkLxgPOkP9493XIDYXull%2FcKiRRt2ubtiPk5Jj1KncBJ%2F1V0qlVJObxnmA4dYYrP934z1rAICJSHZrc7MfPlZ4Kaphaqx06QaHkN87Rddy%2Feuko4GWws8qX0cOUtXL0nyIuZTCQZisd3A0k2OuMJTsUzkVajLsJGmxbNlhcTmllfY1dyBndLaM%2Fxy%2ByIJAl6pr37AfbUV6tJHTJK3QQNyEQfLaABKMXidGySCQku1iFVv%2FwZHT%2Fbbou9qpS7I3I6yQNcw9PNmL4ypWcV2S8z7C12L2RcrTGW8gt90H8QgUzLfpTAnzpgKly%2Fc3RFJAz1Kol6NjLDyH%2FH%2FrqlX8AyKCqeGDSFRbFtzQ3nyVshjv5T2xe8knl9fAT1TLMQNmxqS7rCZJKh1WdVThqSKjz2u%2FocZTTz1xXKUGieoW5OpR1%2B%2FehTOQPXKMsiyBzBfMN%2BHrbcfieN2R4c3ApE4bU723I4nShLaBOB9UcDiZki5RGLOgsWAIGOHEkOhw02cgZbAu0lbCZm4m%2FrTBb008%2F1uHB%2FOMggXV%2F6xjyYVRjOxfVg3x7TuxEO9lvFr6R%2FGk4QnKBEOlli18nAHQznzjC6tghgXzR2SWKpQdRj9aFGZacpoNDzqYOzHsMOfo8cEGOqUB7FoJTKWMdFOYnZ9GWcJiKtl8sgXxtaKCnQZxe87%2FnWw1vm5G20CJytqorK%2BOJe2uNoH7dlJkvlDF0EnEYrij81mnnAZPrxg%2BxPsHTXi2cAh9axvU7C0pQFyf9rjeBBF98tPJby1yX0Qks5qC%2Fu6M9reY8xqDfaoc8A1vEyU%2BzaPV29qSzlu7D0EUohwcIw9%2F9SlUsGmtj0KW6a7%2FUdhK%2BmfILmhp&X-Amz-Signature=13d2b402e5a6a98ec044563d30d76f22877a8b81a3fa2ac22e94e5abb1725a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDI2USHE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBH0XeHa%2BRDVMDVGXQUkloexteGWTI2IGxeNHwVwtMwSAiAVH2eLBA6BcVnx%2BqYyWSGRaQBO%2BR2l3JSPyx9aY5Jy3iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQSu9MY%2FlI4SnUZHKtwDu4aeHfP8BohddyB7i7h5PlPhVQwpEk%2FcGs6Ht3GSGMrqHPpyxoFtEwMtBE4Ar4%2BWodI%2FuFQ45ae6%2BSmOn1nXScEGbW7Ib%2FiHddZqzyJ%2FWUFTrQsBE38BW%2FWDp8NBO%2F75cZJ4RRTnULXgnjkisHnelopLJielqzOKR6rou5Ybszn%2BXGwKwx2cXRgINP5y7XJDX3BJEuzezwbOjJa%2FL%2B%2FIUHIU2V7URS2cdeQjYAXohMheI1ZbfOrQk5fJ2dMLxglNmJWpPd52oBPGDFGEhsbrKgQ127VdMfR%2BJK%2FAvrZ8rDpBYg9IA5RTCWtgyag%2Bs7g6vzDngcSyPUD2shCwpEv46phTLNRZ2zBOpnGIFXtczHWM3PF%2FL6PxR6hxQHdPme6L4qVhY0YOz1A4Nmh0Lu17uF2v3GlYLFSJBjalmqPbYfMO3PxVN0SLoeM3Q80NaQjxLm2KJwfN4qPDaopay3UGGuILU0zkq8mtjv5uA6ckWVQavrCCORcxw6tG7TZ%2F5DpPSgx870rJoslHeFRO5pZn40ykqZJqp5AiN2EY3FKCoypRwi5Od%2BGYe2gWx9D5%2BqkwY8hSIO1ThilfJGqBcPBJ57tVYmv6geCgrOwPcVZqK67z%2FwuJS%2F3b3FADcwIw5YLywQY6pgHtECXF3BBJ21%2BWGkI0yNuYIe98oXtTceuMrcun6DwIYsKhjsRlFiweYDGasAzXmqy%2F%2B6NPskdwZ0Wug9I61%2BNQSURHRXVih6Tw2L2xawUm5krJThZjW3k%2FC0SEg4a9aKE9sFVvSkDk0Oxcr6%2B21QXTvzlHFCMAXw9yUlKQJFCKXv2AX7CctY0epzuNU9L3NpjAgDl1g2OMvslxckO5Ynu78L5z2glI&X-Amz-Signature=8fc874d9637ffa10ad7ce1d3df88ad3eff88316240a9139a825535b8a585db86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYNN632%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZsVfRGwC4mEJ92o6u2TsQmQNUA%2Bj%2BDW2xEDkqBPmg%2BgIgb6PhFwcg%2FMyJ0CTTrsKtkiH2NnkeNpf%2FF%2FExsv6m2vUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnZB%2F7B7wD6Ww6%2BGyrcAxw5hTB8ArF1VIlC8OMUHkv63EtuBuUsptLFCF7Nyyk7GpsP94mJXr1hqNWOTExeqUr8xUCm1vjv89TKcJk4cJLRut6yhgXfn24K0Y5meASNU85HwLpoRPY9S5q6DLnzCHVQHfXQFeFUarT%2FeMsOKOlWMZSP9IKjw%2F%2B9H%2Boliv7Hw1OwBqWOUtKybz68zDo8Q0OLnwYhKB5HHgR7UNW8sn3dRRIfwvmFQ6GbPR7HcVrzmeZ1ePFdk0%2BL0UlLVqT3ymzBtrLufNnhhbitPNzHeq1abH69QS8u%2FreSNU9nDCqdz7JwZtXIGxp5WmAO3EDl6Qq4tbPo6jfUWJQhTqPVYWYm29moIRJQx77I0Bb4Kk2oynMIvOIHNpPnC0sndOCx3uytoMBYEYRZE6DpdDVhKvj%2F6dpfyZW7ZeB012Xe7b3GOZNVIuUzdH2CDOoqnIW0IcyyC%2FG4O2aig4g9W9povf4xb2AG9kdX9FZfUmQIyx9b3fkLTA%2FtbH3UewJCoaUurKs%2F%2BfXNPc3yHuS7NUfYglSbVW3ysxPC1CJnl73k0YkPJeMpxjZ9bGbf%2F0JFQIEK265XVI8aTblN0jBSulA2f3LVqvTv8SakykT6NN6HYfIWbk8%2FVmmMwJD1VLgHMJy08sEGOqUBd96st7N%2Bouzzb%2FkinBIuRZdPG1unXPzzCsntVSKryoHqlnOyCivAHBH3O5UlFLQ70xTRbQ6UQOaBRnmCZUrmrzwqI%2F67mCEXtUMX5XgIjJF0YpTcTQdgQk4BKRGkrtVunZlBNKv4odSKiKbSVRW8lXs%2FqpzP3Y74Up%2BHF1dxr8RDS8FOKuAHU0fJU2QhzHMe232m16QxSG2tVO4X0S2nveLzHXqu&X-Amz-Signature=d34d756692812dc6e417943857875aee34e9ae2190dba7f944d60aaf95fec1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
