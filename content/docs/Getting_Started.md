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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMZDBFL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGVHbHgrrdYALaQFoFcBuePb9LQiZ5igl3RBrBsasbPeAiEAr9mDzVWnzOqgR0SjYXO7Q4eYQHEjLyLwzOvJcpNyT0Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPPnIdKBHf8rTLzFbyrcAyRVcKeXkq76XF7SLyeaGo283kD9KZBeAZaK9hW8L5%2FosR2bZ%2F4wbLrxoyB6kCPrOPa4mJkWFfkTbntCDTG%2B0kcgXUM059Cuzi%2BEvKUwMGiXQ8Wd1X6GucNoQUT4hlmkJggngTVyer566f18Kb5sFwS8qPwtHmMXO9jCNqsb%2BLV%2FE3qQslqnCen7Ot7dcZmDN9HULtZtxHebyQ3IJuQa%2BCVMiF8rkibNsPgbJD4HGzETtO%2B%2FX1Kjhcw5wRPf859SiMIY754CrMHuTzr2s9YCkSxsa1K2a1V9FszibTdPCt2M%2FplhHSEOSc91TTxr3pwug8hGI9Ay0mqx8YzHyccPpOKbvVQDtVPF6nJZ8M6qGFR0z0nMf0pMtpWK3L3f9I5%2FdoriyV8BcdE%2BUYa9JItVMrnsu7wU4UCd%2BObaUYtwG30JeADF2upk0Yi8eW2Szp0RFL3dI1vD6Ai6MNjX27CgGCqkhtXF03JK5G4IlLQBvEnIschmBem7BpaeGit01bPJ8fHLG9XuGVzrzVUHEFPuXpC7vDit4tsYvaWfHzoxtUfru93mWLtCjbg%2FAYy6QcIzBE71xf8mlUYXaNcGWIDnNc%2BvEs5zQqUA0uEo1mbWGOlvz5v82jvkhA4WBbDoMK%2BAgcIGOqUByZYVXPjRXkb6fdZjwxiC2JDvM6XlEB1dlO0JPQB9i3YYvM4JhleiuJ%2ByPTpXqFxnWzZCynb%2FCVbiSdZAZG53kP%2F5Y5s42n6M7lP8c3VVYjTmUavqhbcdYKqzrn52nnIXgOtzLj00ChKWrLN825Vxlv%2BnGGoApgHpfX9YA5YiejfOdhfI7yt1dugWBn57IoN1NynuMeNLnpxHDCiyTuLNn0RJT2PE&X-Amz-Signature=06f4c351d278f31426468b9391acffe63d2a9417a9472fab524202d13e5af18d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMZDBFL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGVHbHgrrdYALaQFoFcBuePb9LQiZ5igl3RBrBsasbPeAiEAr9mDzVWnzOqgR0SjYXO7Q4eYQHEjLyLwzOvJcpNyT0Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPPnIdKBHf8rTLzFbyrcAyRVcKeXkq76XF7SLyeaGo283kD9KZBeAZaK9hW8L5%2FosR2bZ%2F4wbLrxoyB6kCPrOPa4mJkWFfkTbntCDTG%2B0kcgXUM059Cuzi%2BEvKUwMGiXQ8Wd1X6GucNoQUT4hlmkJggngTVyer566f18Kb5sFwS8qPwtHmMXO9jCNqsb%2BLV%2FE3qQslqnCen7Ot7dcZmDN9HULtZtxHebyQ3IJuQa%2BCVMiF8rkibNsPgbJD4HGzETtO%2B%2FX1Kjhcw5wRPf859SiMIY754CrMHuTzr2s9YCkSxsa1K2a1V9FszibTdPCt2M%2FplhHSEOSc91TTxr3pwug8hGI9Ay0mqx8YzHyccPpOKbvVQDtVPF6nJZ8M6qGFR0z0nMf0pMtpWK3L3f9I5%2FdoriyV8BcdE%2BUYa9JItVMrnsu7wU4UCd%2BObaUYtwG30JeADF2upk0Yi8eW2Szp0RFL3dI1vD6Ai6MNjX27CgGCqkhtXF03JK5G4IlLQBvEnIschmBem7BpaeGit01bPJ8fHLG9XuGVzrzVUHEFPuXpC7vDit4tsYvaWfHzoxtUfru93mWLtCjbg%2FAYy6QcIzBE71xf8mlUYXaNcGWIDnNc%2BvEs5zQqUA0uEo1mbWGOlvz5v82jvkhA4WBbDoMK%2BAgcIGOqUByZYVXPjRXkb6fdZjwxiC2JDvM6XlEB1dlO0JPQB9i3YYvM4JhleiuJ%2ByPTpXqFxnWzZCynb%2FCVbiSdZAZG53kP%2F5Y5s42n6M7lP8c3VVYjTmUavqhbcdYKqzrn52nnIXgOtzLj00ChKWrLN825Vxlv%2BnGGoApgHpfX9YA5YiejfOdhfI7yt1dugWBn57IoN1NynuMeNLnpxHDCiyTuLNn0RJT2PE&X-Amz-Signature=be7cf3e31cc7fd222708f0b20e040834b8044777bbf063484e88792df9511ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMZDBFL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGVHbHgrrdYALaQFoFcBuePb9LQiZ5igl3RBrBsasbPeAiEAr9mDzVWnzOqgR0SjYXO7Q4eYQHEjLyLwzOvJcpNyT0Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPPnIdKBHf8rTLzFbyrcAyRVcKeXkq76XF7SLyeaGo283kD9KZBeAZaK9hW8L5%2FosR2bZ%2F4wbLrxoyB6kCPrOPa4mJkWFfkTbntCDTG%2B0kcgXUM059Cuzi%2BEvKUwMGiXQ8Wd1X6GucNoQUT4hlmkJggngTVyer566f18Kb5sFwS8qPwtHmMXO9jCNqsb%2BLV%2FE3qQslqnCen7Ot7dcZmDN9HULtZtxHebyQ3IJuQa%2BCVMiF8rkibNsPgbJD4HGzETtO%2B%2FX1Kjhcw5wRPf859SiMIY754CrMHuTzr2s9YCkSxsa1K2a1V9FszibTdPCt2M%2FplhHSEOSc91TTxr3pwug8hGI9Ay0mqx8YzHyccPpOKbvVQDtVPF6nJZ8M6qGFR0z0nMf0pMtpWK3L3f9I5%2FdoriyV8BcdE%2BUYa9JItVMrnsu7wU4UCd%2BObaUYtwG30JeADF2upk0Yi8eW2Szp0RFL3dI1vD6Ai6MNjX27CgGCqkhtXF03JK5G4IlLQBvEnIschmBem7BpaeGit01bPJ8fHLG9XuGVzrzVUHEFPuXpC7vDit4tsYvaWfHzoxtUfru93mWLtCjbg%2FAYy6QcIzBE71xf8mlUYXaNcGWIDnNc%2BvEs5zQqUA0uEo1mbWGOlvz5v82jvkhA4WBbDoMK%2BAgcIGOqUByZYVXPjRXkb6fdZjwxiC2JDvM6XlEB1dlO0JPQB9i3YYvM4JhleiuJ%2ByPTpXqFxnWzZCynb%2FCVbiSdZAZG53kP%2F5Y5s42n6M7lP8c3VVYjTmUavqhbcdYKqzrn52nnIXgOtzLj00ChKWrLN825Vxlv%2BnGGoApgHpfX9YA5YiejfOdhfI7yt1dugWBn57IoN1NynuMeNLnpxHDCiyTuLNn0RJT2PE&X-Amz-Signature=739511347c9c5cf87c99cff0ebfbdcefe46527575724885d62ed2661e34b8601&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UWVMKZR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGMOGFwOTtJS4BQjlzLbQ%2FYQakfNz%2BSwdCL1FFj7HtCvAiAOViJFzZdkmpRXjyN6PWBn1VPQt5ehElmfmkGSrHQq6yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMkkLe5KX6BwerkthcKtwD21iCHwRc%2F0gYZQayjvhAxS4hvxu0%2FR3WEoBgp178HtTwO2UEvqTE5dnkES7mPEaY1yZ0s6MQubpjYz34DxvptuuyuG4KWzTI4dur%2B3gmwZm7ED%2BCwnVHKpeIAT686Hi9GSP933MqCqOMDY9q9ASmpceH9AL5cHny4vk9dg0%2FuCIj1okb8e06IAWMhZW7PtooCzsWlwBNlMUPv3ql29vM1LIoKk%2FhMyYIivlpq9REeXQSdObW9zRxxrbCSh2%2FVPCQFS8QOGTMqdbn1L419nGyH%2FXPzSEqIWzJ4E%2FnEJTz6T8R%2BZQZHVBwpSJfDdTDo2YMXWA572q7EuC6JNgedKnTuJayAAev2EAwThgAZVrWJYwJyKzk77KGrEavAE%2FbR5Qngol8W5pwq8d0Ot3WrH3VudFrT5rbw%2BL%2FbuuwtB6z93oajS5HHIswks%2Fs39T9Sq%2Bj1PbmSnFg1LqFWF2dQfUPq%2F59Mehs1AdGMJHxs7zwiayQ6ilF5ZzUBRrAWE5DPUT9VRNB20Mlx3J7SrTVXkFB3SvXFcCt1RV6ghNxT95X8ujUdPThTdjsHJZ1Oji8U3%2F6hMrfv4pKPHClp7uI0Z4RVfM8LluCKRtXT1h3kmgokJ6tgWEfaG2FjIci6QAw3oCBwgY6pgGcEoOVlpC%2F2WX4G0QfT95vpGTkbZo2GOG3aw74p9G7waXxVRzjlCnYXi0TPrp5ro1xByympNCM0g0mawfuZrNEzy4h7MguR5oepROZDteEYS3cGcYXDcMUQuPX6m6oMve6SJdA%2FcJdQGQ2ePaz97HLBRgiKHdz%2F%2FwdMEDerNC5OIXEI2zzb2K%2B05OgJ5Pi3YVODsaH3dWsSeF39istxtnMhO8VjVEo&X-Amz-Signature=377a1bfe958d894331b2f73ee6475f2b4dadc80bde7051d0f5155a20cb4b554d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZJFD7M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDLCtL%2F6sHZFmEhcKDyYztMil3HbugiGaiTX95uBnFz3wIgcw9Jld9rxL%2BFzqWPzhNnrFvpvEReJ%2FXxktZJx19m240q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIAe8YfcUmwG39CYfCrcA3Bh%2F6fmkeVnQvU809%2Bgimrrv4J8BJZcgCfCJSjnKhskLtYVWbio7Q8OseMXUXBVnRWjPlOEKaR%2FfTOEa8ZtcLT5QU3RacVUbMymmuWK78txAZo1Dm%2FWaUE2WmNAPA3KUY1BzMMj48ASPL3bCbjxJ5bNDyMXhcqWyZ4kC77IS4FMgWV%2FjSjkmM8G%2FQiV76Hcv6ZB7KOAImfMgLUwLbM93xj%2BCOrCt%2FmYTYfoTVfIFh1CXq21nTeYJ5oIkkyDWUoi2sklftJvtr2W%2F48L%2BgHSmAVu2bZf3beZ4s2afaXUb1qpW5n%2BygNJ8ItOQ%2FkBTdlqxq5NlSB9oOO73ik%2FcW5Loe4UEKjrjSlqb3k9yxdKJYmgJOY4C0HGr7aD6B52Dn4HHAnbAUoHN02UdWn9sR59yrKo9oTKrZojjyCbYmMADdXw%2FGZ2oYyAHkD32VcpGVsp8bpVfA2wq3LWMr5I9QHhIgQqCpZPjLG%2BU7drG6aizHohkCjjpWHyOpb5SYsSRr8UGSWhVeBuwwn2sAjwfSqE%2FwYNRw6CRCXVuKc4CJ7G%2BEsXZVpdCR6QLXM%2Fiv5W8dOEO53AVKBj3FV8Q2WfW7E1fjgENSNPKkjUq1Q2MKzR5BtzCcKTMFESifdQEzteMK6AgcIGOqUBZ2%2B8LYQ9i7K%2FsrrHInbByJtr9tzJjSHSYyoewcNCpqLBkp5o7L5XYmf5jBY2MaYPzTJxtN9G16tQBxotJHHXeIU5VVnGsSL382EqwiDAUAsoQDQjfKMO7AqFaBaK659Rci%2BGyZmvqUHOKw1JgqVzdqCeLSlUapM7w30WQn0MkUg9K4wjBOZpcwAlvTJcpfV29%2FRELDLPsJ6JZebb8sHA6fvhxSRq&X-Amz-Signature=a79ce4ea33e6e8a291f89682237fce08e13d32655c70b50e1658aa37aecff2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMZDBFL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGVHbHgrrdYALaQFoFcBuePb9LQiZ5igl3RBrBsasbPeAiEAr9mDzVWnzOqgR0SjYXO7Q4eYQHEjLyLwzOvJcpNyT0Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPPnIdKBHf8rTLzFbyrcAyRVcKeXkq76XF7SLyeaGo283kD9KZBeAZaK9hW8L5%2FosR2bZ%2F4wbLrxoyB6kCPrOPa4mJkWFfkTbntCDTG%2B0kcgXUM059Cuzi%2BEvKUwMGiXQ8Wd1X6GucNoQUT4hlmkJggngTVyer566f18Kb5sFwS8qPwtHmMXO9jCNqsb%2BLV%2FE3qQslqnCen7Ot7dcZmDN9HULtZtxHebyQ3IJuQa%2BCVMiF8rkibNsPgbJD4HGzETtO%2B%2FX1Kjhcw5wRPf859SiMIY754CrMHuTzr2s9YCkSxsa1K2a1V9FszibTdPCt2M%2FplhHSEOSc91TTxr3pwug8hGI9Ay0mqx8YzHyccPpOKbvVQDtVPF6nJZ8M6qGFR0z0nMf0pMtpWK3L3f9I5%2FdoriyV8BcdE%2BUYa9JItVMrnsu7wU4UCd%2BObaUYtwG30JeADF2upk0Yi8eW2Szp0RFL3dI1vD6Ai6MNjX27CgGCqkhtXF03JK5G4IlLQBvEnIschmBem7BpaeGit01bPJ8fHLG9XuGVzrzVUHEFPuXpC7vDit4tsYvaWfHzoxtUfru93mWLtCjbg%2FAYy6QcIzBE71xf8mlUYXaNcGWIDnNc%2BvEs5zQqUA0uEo1mbWGOlvz5v82jvkhA4WBbDoMK%2BAgcIGOqUByZYVXPjRXkb6fdZjwxiC2JDvM6XlEB1dlO0JPQB9i3YYvM4JhleiuJ%2ByPTpXqFxnWzZCynb%2FCVbiSdZAZG53kP%2F5Y5s42n6M7lP8c3VVYjTmUavqhbcdYKqzrn52nnIXgOtzLj00ChKWrLN825Vxlv%2BnGGoApgHpfX9YA5YiejfOdhfI7yt1dugWBn57IoN1NynuMeNLnpxHDCiyTuLNn0RJT2PE&X-Amz-Signature=1d7c4ea51695c784c4200655a014a65bce69f8b5effb47ebaba371c1491a9232&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
