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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XJHCJQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrbSchVtZXpya80BxyesTBp3Z7qcxQ5oAC0xWUz%2BM7CAIhAMeG0mXuouW3sKRIM59MZaGY6KfpmIKtGr7jmnYjAy7FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h6cfjmxvq6yLUpQq3AOOy7%2F6gIKWuHSDo8n%2ByVpzCzEbkWAenUjYiqKkPFBVNNxgeL2Ug5nDS39gVrHmcMc%2FpurXF40wHXYkl0DWiLo3t0rV6%2Fr%2FGs69ZNwAM6qnYHwnLB7Ic%2B0HvNF8qbsasrHXW%2Fcquu7bFGgs1JGjjso3kBR%2BQdLFU8Jp%2FW6zwtrcg0FbWN82k0K%2FPlUmdR5dkL8vbtse8TpnMnAYbVg0hjThD6kTr2gqvZQ0%2FPq4IGjaPydca1b9d%2Bxm%2FV5IABDtDKFmBS2CZNofcPlByYY9hw4rjdIK2q7g0EXyN7zy%2FWAuuLXKYC08fuOGzsGL2Dk0RU64t%2FbjAfJQ97sMCrGIfypkiowdHKjk%2BXjacXCLEFPRTwYhd6hKwgIVd0RJ%2F6l58PUvlfdnKQF0s7sXpb5B7SlP7XpFuT5up8mqAk88kpHzeoOIxfw3Cz1EePp5GcfZ3f7S%2BsU3be6X5aTizIWuwQYLGO3YHkbgJh8DjzyOlHsTAPLdgrMi7mDwNvn1RRlFjb2JrOjQGXI55%2BZAhhHTUN4l4j%2Bb5%2BDizUIwLlrBmAlsOUn3P%2FJiCh%2B%2FeXAjiMm57ccHqb4RRhINBeSwOqB5WsboSC0Ehe9O%2BkOWG30aRchfdiHWUNpLUUBKaKvoLjCf1%2FPDBjqkAeTQC2BgdNQCK4TLqUPKGjKO42VzjgEFKFPcjnaT%2BHacFLeqcEd7f%2BvcPmAILJIDi9igijFo%2B762cWwQ7guzCPj7vWzIlGHKV2KyCkOE%2Fm%2B8IItDiEebV2Bx2dH9KASzz0KqCHN8BeRdiV85JScAoxMN5HBh%2B527gIrWdaZuWhwS0f%2FA7vni%2Fqey11AVaMtFclfSrmkPWJDrmJrQ%2FHHxr0EvPhHP&X-Amz-Signature=1752b009cfe9c7819b0b1b4e132b8d5bb76267d6dacc447dce40e24df75b9b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XJHCJQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrbSchVtZXpya80BxyesTBp3Z7qcxQ5oAC0xWUz%2BM7CAIhAMeG0mXuouW3sKRIM59MZaGY6KfpmIKtGr7jmnYjAy7FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h6cfjmxvq6yLUpQq3AOOy7%2F6gIKWuHSDo8n%2ByVpzCzEbkWAenUjYiqKkPFBVNNxgeL2Ug5nDS39gVrHmcMc%2FpurXF40wHXYkl0DWiLo3t0rV6%2Fr%2FGs69ZNwAM6qnYHwnLB7Ic%2B0HvNF8qbsasrHXW%2Fcquu7bFGgs1JGjjso3kBR%2BQdLFU8Jp%2FW6zwtrcg0FbWN82k0K%2FPlUmdR5dkL8vbtse8TpnMnAYbVg0hjThD6kTr2gqvZQ0%2FPq4IGjaPydca1b9d%2Bxm%2FV5IABDtDKFmBS2CZNofcPlByYY9hw4rjdIK2q7g0EXyN7zy%2FWAuuLXKYC08fuOGzsGL2Dk0RU64t%2FbjAfJQ97sMCrGIfypkiowdHKjk%2BXjacXCLEFPRTwYhd6hKwgIVd0RJ%2F6l58PUvlfdnKQF0s7sXpb5B7SlP7XpFuT5up8mqAk88kpHzeoOIxfw3Cz1EePp5GcfZ3f7S%2BsU3be6X5aTizIWuwQYLGO3YHkbgJh8DjzyOlHsTAPLdgrMi7mDwNvn1RRlFjb2JrOjQGXI55%2BZAhhHTUN4l4j%2Bb5%2BDizUIwLlrBmAlsOUn3P%2FJiCh%2B%2FeXAjiMm57ccHqb4RRhINBeSwOqB5WsboSC0Ehe9O%2BkOWG30aRchfdiHWUNpLUUBKaKvoLjCf1%2FPDBjqkAeTQC2BgdNQCK4TLqUPKGjKO42VzjgEFKFPcjnaT%2BHacFLeqcEd7f%2BvcPmAILJIDi9igijFo%2B762cWwQ7guzCPj7vWzIlGHKV2KyCkOE%2Fm%2B8IItDiEebV2Bx2dH9KASzz0KqCHN8BeRdiV85JScAoxMN5HBh%2B527gIrWdaZuWhwS0f%2FA7vni%2Fqey11AVaMtFclfSrmkPWJDrmJrQ%2FHHxr0EvPhHP&X-Amz-Signature=9176a61a5fd195244bcf6869f1fbed7c4ce6ba68d53b13f8e90aaa6c8059e86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XJHCJQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrbSchVtZXpya80BxyesTBp3Z7qcxQ5oAC0xWUz%2BM7CAIhAMeG0mXuouW3sKRIM59MZaGY6KfpmIKtGr7jmnYjAy7FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h6cfjmxvq6yLUpQq3AOOy7%2F6gIKWuHSDo8n%2ByVpzCzEbkWAenUjYiqKkPFBVNNxgeL2Ug5nDS39gVrHmcMc%2FpurXF40wHXYkl0DWiLo3t0rV6%2Fr%2FGs69ZNwAM6qnYHwnLB7Ic%2B0HvNF8qbsasrHXW%2Fcquu7bFGgs1JGjjso3kBR%2BQdLFU8Jp%2FW6zwtrcg0FbWN82k0K%2FPlUmdR5dkL8vbtse8TpnMnAYbVg0hjThD6kTr2gqvZQ0%2FPq4IGjaPydca1b9d%2Bxm%2FV5IABDtDKFmBS2CZNofcPlByYY9hw4rjdIK2q7g0EXyN7zy%2FWAuuLXKYC08fuOGzsGL2Dk0RU64t%2FbjAfJQ97sMCrGIfypkiowdHKjk%2BXjacXCLEFPRTwYhd6hKwgIVd0RJ%2F6l58PUvlfdnKQF0s7sXpb5B7SlP7XpFuT5up8mqAk88kpHzeoOIxfw3Cz1EePp5GcfZ3f7S%2BsU3be6X5aTizIWuwQYLGO3YHkbgJh8DjzyOlHsTAPLdgrMi7mDwNvn1RRlFjb2JrOjQGXI55%2BZAhhHTUN4l4j%2Bb5%2BDizUIwLlrBmAlsOUn3P%2FJiCh%2B%2FeXAjiMm57ccHqb4RRhINBeSwOqB5WsboSC0Ehe9O%2BkOWG30aRchfdiHWUNpLUUBKaKvoLjCf1%2FPDBjqkAeTQC2BgdNQCK4TLqUPKGjKO42VzjgEFKFPcjnaT%2BHacFLeqcEd7f%2BvcPmAILJIDi9igijFo%2B762cWwQ7guzCPj7vWzIlGHKV2KyCkOE%2Fm%2B8IItDiEebV2Bx2dH9KASzz0KqCHN8BeRdiV85JScAoxMN5HBh%2B527gIrWdaZuWhwS0f%2FA7vni%2Fqey11AVaMtFclfSrmkPWJDrmJrQ%2FHHxr0EvPhHP&X-Amz-Signature=6c99ce7d759a4d9c5e178a51a0707f131254a5f2f294c5531342d3b8ab010410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3HVNXC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNjBrOGuDMAeRG%2BzC5FXxLl6UQIaqJEv9Jy76oA0q9AAiEA2i2tMvONz%2FWlPygVVyOZh6jAcLae5qu7cFG2HQ769scqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2JHG2XlPQ3HTTqFSrcA7riwrLLcgVMGrh4c35bI7K%2Fozt1Al7faZ5Rmz0PwzEEudHQjATrD7PG7U%2BsqmsEWG1P%2BLav6axsW91n6UqciW9V3E49kY3K0oB21HMBhgeqCjcyP1xKJNn60zsK%2FDifoA46we6eg0BaIGeRv5TJAehTkeJ8SOCKc%2FFJwSc%2Fc3agdusvb99lLm4gQtl5WU5FMtb%2F9SXgpkDcBAqeALUmcfClV9Ri3OkmeO3uBMoNkOnLglttYQkTwc97CN1SoUdQIXXdNumPy1VudIINXZMSBR9%2FnGwlL3qk5McElm8Lh%2Bcf4ti%2FHrEF8IrgnqfulnUmF5BO4f8Z9AVKqD%2BUe2Zd05mUefBVqzg6PN012rIx94ZM%2BveZdkiPHBLZ1cbai7%2FPUqxpD7Nhdi0gz51XdQaPR7EkEABwZsyNcOzHqqGVV18CL5MRJHdPNJdhr8jCDpH3Y2fsiGze%2B4clYEOgnKi8ewnkMvYJ37iUnyneOrG5Sh3nty5wA%2FIRaKssOe2kyQaELKggmPoprunNqa9%2B17%2Fmoh1JccZDExvdyj5tDrcu5TeyGbGqwu3XwURBhBCeYbOzp5NkNJRkvCLTyw0gLA8Um6B%2BgeURuQTtfvAMLHMOCBML7OT4Xn38xfrUmRfpMMHS88MGOqUB%2FiYFmyYlbRNho3k1fiy01qAOs%2BPBBa9JQ7fRBAjPzf8l9vMOnwMQifMy2Fq7Qhh3iUG8WkuBO7eXgNbFNabSxTuXHzQnfuRHmC24%2Fyaqfo61i5rpX1GgA5inITdorvqJZ%2BsKccTS2QQBcsT0fVJKqJW6RjjUzthJ6RR1W6aEg165fE4jhZhKzG%2F7TIzyDGyouNSZ312lSArHdEpq7YroSAq1fC%2BI&X-Amz-Signature=e0c47a432bec53ce4c220673b44cb3c386774321365405c5560838cfa3fdaccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQ6YCZQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJrjFEfEF54B2p5q4EyoEcljG2euQFqocbi6xWv7g45gIhAKUdOkCQHoqaTJQHmHIRUVBq25%2Feed8m1A9p4kOeJkWuKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeihes9U%2F%2B6NTtKigq3AMd0cXEhlHDp%2FW3r7MkyUXHcSPsvAHdjKgD7oKcTisiZC8ifHcnx1600eX6fm9udY1YGcS6CH5UuICPiKK5uXI0ocJxgbOYLdI%2FC1oKHVWY%2BP4I3xynZeCCyP9h7vnSb5Rrnyf%2FYtffSwn8Wz1%2FiT7fvpHKx9Fc2Ja4DJiSUk6ce4P9AKLTSZb0HviTbIHxFhjUBjbNcAl1ZOpXLU0jcXwYVYraXdOdB8VYyYarJO6jdAQ4GmXN2vTgu0%2Bf9QFafYEUmQIrRlMYJpmoZ%2BiVQkmDjwDKJX%2BjcDveGYvM%2FgSWtH2FJ2fkm5GNl6qe%2BJ3qFQ8U%2BkgKpJ%2BA10vsAb6asPBnnCJh7jIjKNCeiuC2T54VBCaLIJ9u9Pk3MJNgbPMSn4mk9BJ9D20x46nk6l1hDv2gMEVA9be5kV1EHarj2WQj%2F9%2BzJS7mT2aKis3aGNmpgMOoci5NWNykptjaJly5X3r%2Fx24E7nAEhY8jsNOIJAT85rBsvzR51aBHgZGYV5mG3IM6HZE%2BmiFMnNz9ONQ2QSv%2FwnZzfCjiS%2B9d7PfTVkTemEDzvC1ubbKI0pY7TB0PiNem0pgLsQdNT6nu97RY1XjxHcbwtHhKh7KPbMjI0V6wQctXOWieDg9zcgZAYDDD2PPDBjqkAek0RJ9t6mikz%2Fklqqnk678kgMyRSYIy8YgRmxNqEwuRjulX56bw47nBCWyXlB9TBbChKr2kz24pFczMTMABtOkSbFv%2BIZ%2BXCWVLrXqlkxbMjYjg2eHakx80sR6RGk64sONEgZmPjqmBdzlAjJ4VYsuVmbJWyklYO3K0nYFY5Bi1LgPOWQ5q6WEj4P62G0pkjaujjRpudnVmjFUA86AWWqRvXBPS&X-Amz-Signature=1465c3adf465731f2ae9fd6d6fa6ce17ecb5766d1eaec5e5cb4d334429e21b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XJHCJQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrbSchVtZXpya80BxyesTBp3Z7qcxQ5oAC0xWUz%2BM7CAIhAMeG0mXuouW3sKRIM59MZaGY6KfpmIKtGr7jmnYjAy7FKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h6cfjmxvq6yLUpQq3AOOy7%2F6gIKWuHSDo8n%2ByVpzCzEbkWAenUjYiqKkPFBVNNxgeL2Ug5nDS39gVrHmcMc%2FpurXF40wHXYkl0DWiLo3t0rV6%2Fr%2FGs69ZNwAM6qnYHwnLB7Ic%2B0HvNF8qbsasrHXW%2Fcquu7bFGgs1JGjjso3kBR%2BQdLFU8Jp%2FW6zwtrcg0FbWN82k0K%2FPlUmdR5dkL8vbtse8TpnMnAYbVg0hjThD6kTr2gqvZQ0%2FPq4IGjaPydca1b9d%2Bxm%2FV5IABDtDKFmBS2CZNofcPlByYY9hw4rjdIK2q7g0EXyN7zy%2FWAuuLXKYC08fuOGzsGL2Dk0RU64t%2FbjAfJQ97sMCrGIfypkiowdHKjk%2BXjacXCLEFPRTwYhd6hKwgIVd0RJ%2F6l58PUvlfdnKQF0s7sXpb5B7SlP7XpFuT5up8mqAk88kpHzeoOIxfw3Cz1EePp5GcfZ3f7S%2BsU3be6X5aTizIWuwQYLGO3YHkbgJh8DjzyOlHsTAPLdgrMi7mDwNvn1RRlFjb2JrOjQGXI55%2BZAhhHTUN4l4j%2Bb5%2BDizUIwLlrBmAlsOUn3P%2FJiCh%2B%2FeXAjiMm57ccHqb4RRhINBeSwOqB5WsboSC0Ehe9O%2BkOWG30aRchfdiHWUNpLUUBKaKvoLjCf1%2FPDBjqkAeTQC2BgdNQCK4TLqUPKGjKO42VzjgEFKFPcjnaT%2BHacFLeqcEd7f%2BvcPmAILJIDi9igijFo%2B762cWwQ7guzCPj7vWzIlGHKV2KyCkOE%2Fm%2B8IItDiEebV2Bx2dH9KASzz0KqCHN8BeRdiV85JScAoxMN5HBh%2B527gIrWdaZuWhwS0f%2FA7vni%2Fqey11AVaMtFclfSrmkPWJDrmJrQ%2FHHxr0EvPhHP&X-Amz-Signature=4ad0d555bc27e11ffea0a2e1b9263e36230586bd7d0e526ba2050ce20c17959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
