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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FJXNTW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD7BxJTcXbiVGTurUxD7%2F0%2BHG6%2FfB03V0RGth64R32UlwIgK2140wGzPhzqanyCcWeYya1JT%2FERhPzhImysBjnsuYEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX0oTbkncLllWBBpCrcA%2FpZs53Bj4hW2bNkkCthH99vqIKrBtivswCm03IvVcmcVc%2BvbH5tbWon8pU1aPyp9d553jjauOJ%2BIUNH2voKJ26g8MwElteARLMl3KPSXKL6prxHrqtCxvD4AeY%2F29sfWCDQQ0bmORORZvs66FwbE%2F5F4gF2%2BrkPqluNOctah%2FMvnxfXzVR2Y2qAr9j%2B0%2B9jqIlT4t2vg7tZP0twvKjRA5GlunpuyQXMup2ZR%2FiQsuXhSgWQ%2FcHJa41YkhnzZq1uk3zYbGJouJ3%2FTYve64wtCWPcL%2F2V%2FFhE2%2B2Pqt%2B4vze6PNdOw3IxkhXideCu0ETDIEKJjS3BUdTIV2raouhBpyLkvFsY0ouI%2BlEJVwi1hJDCvi4r0NO0oNykWI6PLpmEbZgNOb8fjLniZd3JJ%2BdxV1pyA%2BXhL%2BlVh%2FaOoPJE9HfFN5Yd6kzxuuziX%2BwDP3lI2wKMrD7VKe5Gzm%2FFSnywuOB7Gvvx2iU0ubFasvz%2BYGzfv6j9m2PummgSjs0QkZY4N2SGA%2Figffp6vCG4C3GRFbGb8lxJPvgOuneBClTNnsapwBBsaAfyQEHTXyrlasIEGEQkY7qeFqZk3Ow4%2Ft75362M1%2Fcxovi%2Fnr8fF9ToFzgVox%2Ft%2FKufs9J2Bud0MJuBx74GOqUBBFvAAX%2F3hydCfLe5ULp0j2nwf0wee6yTQxgEiTNuzgnBo3h2kEGyQum8wZRackP%2B%2BoNOLQAOLKOxACDyW2uHs9xLZcbS3m0uX1wZ68HIUeBl8WNxplXEDYYFpVEGiFDEjyrQOvFWHfDRN0sn7OeBSici1xv0aFqzaBy6SHuDzoHnVyXJstvl9D6%2FPtWH6a8bDzo8q56Xz5%2FDNsDLbXfD1SZjp00H&X-Amz-Signature=fdcd7454e2bd8ca7e59cfc6f338ec0e3218bdfe01bee2641c9932360da6717a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FJXNTW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD7BxJTcXbiVGTurUxD7%2F0%2BHG6%2FfB03V0RGth64R32UlwIgK2140wGzPhzqanyCcWeYya1JT%2FERhPzhImysBjnsuYEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX0oTbkncLllWBBpCrcA%2FpZs53Bj4hW2bNkkCthH99vqIKrBtivswCm03IvVcmcVc%2BvbH5tbWon8pU1aPyp9d553jjauOJ%2BIUNH2voKJ26g8MwElteARLMl3KPSXKL6prxHrqtCxvD4AeY%2F29sfWCDQQ0bmORORZvs66FwbE%2F5F4gF2%2BrkPqluNOctah%2FMvnxfXzVR2Y2qAr9j%2B0%2B9jqIlT4t2vg7tZP0twvKjRA5GlunpuyQXMup2ZR%2FiQsuXhSgWQ%2FcHJa41YkhnzZq1uk3zYbGJouJ3%2FTYve64wtCWPcL%2F2V%2FFhE2%2B2Pqt%2B4vze6PNdOw3IxkhXideCu0ETDIEKJjS3BUdTIV2raouhBpyLkvFsY0ouI%2BlEJVwi1hJDCvi4r0NO0oNykWI6PLpmEbZgNOb8fjLniZd3JJ%2BdxV1pyA%2BXhL%2BlVh%2FaOoPJE9HfFN5Yd6kzxuuziX%2BwDP3lI2wKMrD7VKe5Gzm%2FFSnywuOB7Gvvx2iU0ubFasvz%2BYGzfv6j9m2PummgSjs0QkZY4N2SGA%2Figffp6vCG4C3GRFbGb8lxJPvgOuneBClTNnsapwBBsaAfyQEHTXyrlasIEGEQkY7qeFqZk3Ow4%2Ft75362M1%2Fcxovi%2Fnr8fF9ToFzgVox%2Ft%2FKufs9J2Bud0MJuBx74GOqUBBFvAAX%2F3hydCfLe5ULp0j2nwf0wee6yTQxgEiTNuzgnBo3h2kEGyQum8wZRackP%2B%2BoNOLQAOLKOxACDyW2uHs9xLZcbS3m0uX1wZ68HIUeBl8WNxplXEDYYFpVEGiFDEjyrQOvFWHfDRN0sn7OeBSici1xv0aFqzaBy6SHuDzoHnVyXJstvl9D6%2FPtWH6a8bDzo8q56Xz5%2FDNsDLbXfD1SZjp00H&X-Amz-Signature=4d3e0fe0cd6241327842b42360b85e5677edb14d60ea0d9321c7174147182f65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDLHI66%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDZDZyQvOrvwr1qYF0oF%2Fiai8wBXlt2cOZnJ5e613EG5wIhAJiJIZKcTdZchDXJXOJeg82KJgZALvS0djidTL72m56sKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2Fv%2FnuMO8T1yCN20q3AOJdhe6sMX8iVD6hjpmgfqO0M08gHfV4FHd1MkzFo%2Fg1UOgAfdshW47alaxRlVmcrbc6%2BZzElsSGPcswZwr3l3KtsgAzQNy4eITacEnKmnPTr6T9s2esnUUvR7cdL1XMgB1afN5pqbvLMDYYMbchyKq9jroM2m0%2FrGi4wqIVKBrj2miWkJui9JS3B9PyhiCBW1kVg8l0OTcvfP%2F9g%2BOb3CJwpQql4UiYNwVVQfp2dUhMX4ZM0Y9OhgVQvbwrsWqyBwv9XvpGT006tLCiwUorSu8ftanMIVsFH5NeoGflyI9A9YVHiGgbkUUZIkS%2FjcZ0Yw27W11V7%2FxbkiM52G1nAabwZdl2RN5yD8MJKtJ6zsnLe7LvFXECAZUo%2BdfZ2lDYgIH1EF4zqrU0DEACH4V5ZhB1ES%2Bg3kJeio%2BkGZdDJLwGrgO4wGGV6Nl7aXHHpCcoitmVRPmDGRIe5vPLkm1E2EAw4%2BAuuxaMczVi1xbo4cV0d4RCO1ahFUvkRMP6ErPd%2BsYvnHP8OVK2BdfOZyfAu%2BCQY94y2STNftAtV9%2FqFd4XvB7BxsHZXGUL1SzxNoqrHxHFSoSzEAXXxjTLInq3RkGUxwwCl%2FQjDuO5VTD70bLdwZg56hcnE%2B3Q0hd%2FzDigMe%2BBjqkAbVcru7e6Zen5sGlldTRBqZ5PN5N2DBkwZdEt1%2BPh8J6jJvyXaH0RDmWlXiTaag5LNVmA9xknhNeZ%2Fs8N3vgqXA%2BslOIWzgqBBGqeyGUAqh18gifYeKlYD9PbvkipR%2Fu%2BlZJWj8mKtx2p7PyZiwXW8RpUEO%2B22t1OTGd63BD54AnQwXhyoOrty046Se7FCtkndb9LLptKJmPr7FufDu%2BbjRMW6oQ&X-Amz-Signature=27bf4ca3dafdbc407a214dca77bcf3f2ef997df8ed395f02cc904eaf21689d03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORE7F7L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD697vE8bF0mB5JfVuH1lOTpsqvJslDRk6WBra1MyeU1wIhAIoos5FRXXpvYktfmy75Pih2tGEh32nOxRGC8hYBx%2FkCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlf7hQLN8fBMM4i7Iq3AMXD2JF2aqLk1slO709S1nZfONHGyTwuDM8mXYZKrhEoG7ydLAHflW2d7%2BFzMEm1jfBzvKKSSpdE4VGKyXtfjVPeC51eWEKUTzAbFfzHhf7F97W%2BX0eq%2FSTkhBGKaawRv4NVTDm5esGtnxHbVcofFh2iFe18qqQb8vj%2FxnBHje%2Bt%2BokQr3XDbOLUWTEToa3tlTke7haDd9iDuLv0I3hh8bxIdPuH7F%2BHKe7JlORTDhHDpj4Gd3%2FIjxG23Rx5eVBmb%2Bcv9gqja%2F9G9Lg628b0RwCQoB9FGTClCQ9aZSDdn4T1Z69SghvdJu2wsoERPZd%2BA0B0KBu2hc4FqdsQUeKWXbYISzB6niIRU82BEI60xdUeZPn7lLFLCAhs0Zz2rlI5mDnmWwuuB11Y3N9eqdqeZH7hZ9bnnbhvJpfGQu%2BSmAiZXgTRT51YRBcWML%2FiizvDSUZ2ysN62oEhNMAyP%2BCS%2FYhBW0rSyfWNB8TCm1TymTKJpoFD04J20ajONlQ2DUDwUUvkXd4zk1PvyxF7FrcT7QsGwe8eN9%2F0jJ6nkDMayC6L0Hy0l5v16S5yufWMDKvbniXO9ToI4VEz4ns8snwYbmEgg5bJ1kZ3GfcI2sx7JNr4yA1p7Tl38Z0XadKkjD3gMe%2BBjqkAfn%2BZc8wGbOaD3Q%2F6Hi8Zen6BzV6ScxYSF5%2Fbo3TC0C8twtoj2p13qnq2kqxmrMTB5gAW43m52hVYuZDrxMb2EPwnMzXFcvNxIew5BIlZkp8UEy%2B1dMGUJEcsDWvr2wK7zpRtHfThRK2unokuIEE22iDrM0GLMGSWqVmhre%2FpFTvn6O5CEvsOd44Sv5wcnRMMiTwPJ1xG4pMVq5FOSlwWsxDM%2BH4&X-Amz-Signature=ae3270528cba670e3c89985b630317f0633fd4c11bf43eaa32b42c7d97c3f14e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FJXNTW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD7BxJTcXbiVGTurUxD7%2F0%2BHG6%2FfB03V0RGth64R32UlwIgK2140wGzPhzqanyCcWeYya1JT%2FERhPzhImysBjnsuYEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX0oTbkncLllWBBpCrcA%2FpZs53Bj4hW2bNkkCthH99vqIKrBtivswCm03IvVcmcVc%2BvbH5tbWon8pU1aPyp9d553jjauOJ%2BIUNH2voKJ26g8MwElteARLMl3KPSXKL6prxHrqtCxvD4AeY%2F29sfWCDQQ0bmORORZvs66FwbE%2F5F4gF2%2BrkPqluNOctah%2FMvnxfXzVR2Y2qAr9j%2B0%2B9jqIlT4t2vg7tZP0twvKjRA5GlunpuyQXMup2ZR%2FiQsuXhSgWQ%2FcHJa41YkhnzZq1uk3zYbGJouJ3%2FTYve64wtCWPcL%2F2V%2FFhE2%2B2Pqt%2B4vze6PNdOw3IxkhXideCu0ETDIEKJjS3BUdTIV2raouhBpyLkvFsY0ouI%2BlEJVwi1hJDCvi4r0NO0oNykWI6PLpmEbZgNOb8fjLniZd3JJ%2BdxV1pyA%2BXhL%2BlVh%2FaOoPJE9HfFN5Yd6kzxuuziX%2BwDP3lI2wKMrD7VKe5Gzm%2FFSnywuOB7Gvvx2iU0ubFasvz%2BYGzfv6j9m2PummgSjs0QkZY4N2SGA%2Figffp6vCG4C3GRFbGb8lxJPvgOuneBClTNnsapwBBsaAfyQEHTXyrlasIEGEQkY7qeFqZk3Ow4%2Ft75362M1%2Fcxovi%2Fnr8fF9ToFzgVox%2Ft%2FKufs9J2Bud0MJuBx74GOqUBBFvAAX%2F3hydCfLe5ULp0j2nwf0wee6yTQxgEiTNuzgnBo3h2kEGyQum8wZRackP%2B%2BoNOLQAOLKOxACDyW2uHs9xLZcbS3m0uX1wZ68HIUeBl8WNxplXEDYYFpVEGiFDEjyrQOvFWHfDRN0sn7OeBSici1xv0aFqzaBy6SHuDzoHnVyXJstvl9D6%2FPtWH6a8bDzo8q56Xz5%2FDNsDLbXfD1SZjp00H&X-Amz-Signature=ce59314e1553fedd7a494cb328ffd15ac0e432450bf77892082df263a4574847&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
