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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDD2ICNW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKBxJumUlb7zDmlKDC9fqC955CPiIhos%2F0YdAePUQxgIgIKFX4FmUTCDSUlb92j4U0s9YelFx%2BbCngjU2CvbiRQkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsp9F%2BMeMbdcoc8hircAwODUjr6Q%2Bd0PsosJK7tQ43gS5SP8qWgGQaBCy8dkCYDUehTB23rvDoFlD1bGL3lVMgbtVsM8n2ngNOwQMtw3DQC1BpI4I%2Fb8ADjCZNgAInDgmgVUvhkJR%2FUpKqsTGJMYMhd4IScEp%2FKjdNEp82fW83vZUldDdvJf4DafWLsjvScLyq%2FsUc2kOkantuHv1LvP3E1BC8DtxVYYiJ5gYYr5NfjbsKWrww6iDO8xPaUgWNp4w0JJ7ups85tni%2FeawqY7d42cGKje%2BSgPQ9GiCVwBSMSdwc3XraVSgaiIKGXEn8kZcDBuF3mjjq9tbdA4YwqldaFZlfYHPcp65Dkfk3pTbV5LbSvVel0fYsQXu7mZVd76g3tzWC5dK%2Fpp%2BPtGvWFc%2FSEVVm4mfGat1LatG5XM90OSRin7ThUKsuCVEOoagvumYzzWEWSo35NrjHHjq3bPGCgmq0UN%2Fq%2FGI4z7JUU%2FzjAGWLPkiAJBH%2Bb9vfm6UUEgBs1JPbErGYgKYxGURuR4EHaPEWlg7ss7wR3YDw44b%2FC53mgUP%2Byq7tsJB%2BcpGEgVEsevlEpWEmZr%2FH%2FpdguvLiDAWCSHtJH2gW4%2F8P9IBbd%2BxRYGM6v9LxC%2FAywZkyoR4vk3yTf%2F70FHA%2F7MN%2B8hMMGOqUB8lue%2BvOTwDj57ex7USgzK6zcfbyANg05DlWudgfXBLedbUp21rBMTFXBvM%2FAZFE85wL%2B2BvOtII0Eqoa2zzJ0MztiAhlbsydxRsjvaAsEmNuhmnD%2FilrRxRfuCU5pahjkHCPcouaiR%2BKeQ6zl6EUM%2FsJcUPA0%2BtYOalWdw4Ympto8HJ2t9IRcsGKQLwhY%2FCIW7TEkYZ6qfx%2B4uZ5BHHEBqOk%2BFVG&X-Amz-Signature=6f7d14cb31988229e50d8d43549d2335c858bbf6668b4b913cc618212916af07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDD2ICNW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKBxJumUlb7zDmlKDC9fqC955CPiIhos%2F0YdAePUQxgIgIKFX4FmUTCDSUlb92j4U0s9YelFx%2BbCngjU2CvbiRQkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsp9F%2BMeMbdcoc8hircAwODUjr6Q%2Bd0PsosJK7tQ43gS5SP8qWgGQaBCy8dkCYDUehTB23rvDoFlD1bGL3lVMgbtVsM8n2ngNOwQMtw3DQC1BpI4I%2Fb8ADjCZNgAInDgmgVUvhkJR%2FUpKqsTGJMYMhd4IScEp%2FKjdNEp82fW83vZUldDdvJf4DafWLsjvScLyq%2FsUc2kOkantuHv1LvP3E1BC8DtxVYYiJ5gYYr5NfjbsKWrww6iDO8xPaUgWNp4w0JJ7ups85tni%2FeawqY7d42cGKje%2BSgPQ9GiCVwBSMSdwc3XraVSgaiIKGXEn8kZcDBuF3mjjq9tbdA4YwqldaFZlfYHPcp65Dkfk3pTbV5LbSvVel0fYsQXu7mZVd76g3tzWC5dK%2Fpp%2BPtGvWFc%2FSEVVm4mfGat1LatG5XM90OSRin7ThUKsuCVEOoagvumYzzWEWSo35NrjHHjq3bPGCgmq0UN%2Fq%2FGI4z7JUU%2FzjAGWLPkiAJBH%2Bb9vfm6UUEgBs1JPbErGYgKYxGURuR4EHaPEWlg7ss7wR3YDw44b%2FC53mgUP%2Byq7tsJB%2BcpGEgVEsevlEpWEmZr%2FH%2FpdguvLiDAWCSHtJH2gW4%2F8P9IBbd%2BxRYGM6v9LxC%2FAywZkyoR4vk3yTf%2F70FHA%2F7MN%2B8hMMGOqUB8lue%2BvOTwDj57ex7USgzK6zcfbyANg05DlWudgfXBLedbUp21rBMTFXBvM%2FAZFE85wL%2B2BvOtII0Eqoa2zzJ0MztiAhlbsydxRsjvaAsEmNuhmnD%2FilrRxRfuCU5pahjkHCPcouaiR%2BKeQ6zl6EUM%2FsJcUPA0%2BtYOalWdw4Ympto8HJ2t9IRcsGKQLwhY%2FCIW7TEkYZ6qfx%2B4uZ5BHHEBqOk%2BFVG&X-Amz-Signature=7ec2f74dbe51a0868c9803cabbb7e12d560d184bb65eec741e53b59ab77957bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDD2ICNW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKBxJumUlb7zDmlKDC9fqC955CPiIhos%2F0YdAePUQxgIgIKFX4FmUTCDSUlb92j4U0s9YelFx%2BbCngjU2CvbiRQkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsp9F%2BMeMbdcoc8hircAwODUjr6Q%2Bd0PsosJK7tQ43gS5SP8qWgGQaBCy8dkCYDUehTB23rvDoFlD1bGL3lVMgbtVsM8n2ngNOwQMtw3DQC1BpI4I%2Fb8ADjCZNgAInDgmgVUvhkJR%2FUpKqsTGJMYMhd4IScEp%2FKjdNEp82fW83vZUldDdvJf4DafWLsjvScLyq%2FsUc2kOkantuHv1LvP3E1BC8DtxVYYiJ5gYYr5NfjbsKWrww6iDO8xPaUgWNp4w0JJ7ups85tni%2FeawqY7d42cGKje%2BSgPQ9GiCVwBSMSdwc3XraVSgaiIKGXEn8kZcDBuF3mjjq9tbdA4YwqldaFZlfYHPcp65Dkfk3pTbV5LbSvVel0fYsQXu7mZVd76g3tzWC5dK%2Fpp%2BPtGvWFc%2FSEVVm4mfGat1LatG5XM90OSRin7ThUKsuCVEOoagvumYzzWEWSo35NrjHHjq3bPGCgmq0UN%2Fq%2FGI4z7JUU%2FzjAGWLPkiAJBH%2Bb9vfm6UUEgBs1JPbErGYgKYxGURuR4EHaPEWlg7ss7wR3YDw44b%2FC53mgUP%2Byq7tsJB%2BcpGEgVEsevlEpWEmZr%2FH%2FpdguvLiDAWCSHtJH2gW4%2F8P9IBbd%2BxRYGM6v9LxC%2FAywZkyoR4vk3yTf%2F70FHA%2F7MN%2B8hMMGOqUB8lue%2BvOTwDj57ex7USgzK6zcfbyANg05DlWudgfXBLedbUp21rBMTFXBvM%2FAZFE85wL%2B2BvOtII0Eqoa2zzJ0MztiAhlbsydxRsjvaAsEmNuhmnD%2FilrRxRfuCU5pahjkHCPcouaiR%2BKeQ6zl6EUM%2FsJcUPA0%2BtYOalWdw4Ympto8HJ2t9IRcsGKQLwhY%2FCIW7TEkYZ6qfx%2B4uZ5BHHEBqOk%2BFVG&X-Amz-Signature=50f09238a8df3692da77635dbc2103e4928a72d7b3ba51fd98905d319b8ed015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6EUB3OF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fgi6WXkCK2KsT5mh6%2B26mMeMi6GIuGlR8VDcrAJLnrAiEA44wAkGsCGl7TeHrbHeh7gjyhIthqJCnvg5WzKRpp26AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHseOmlr%2BFOxBIHMKCrcAww8pg9vPv9ry0MVhJ7vn0T1OG1VqjnkSqT1%2FYW8CiE5l29gj2b2T1fjf8y6fWOnHYy6QELG%2BaYc20wxtz%2BnlV4L3TIdhSmJh35GDfjalTR%2BNXAERu9NGQiW30Br4L2iuwwW6KLxFJpJhYpe47CcjWipqymUyHpSUMTBpiLmU48E07%2BuwAFaqMRAAj9UJLcz%2F9mQw6MDNV42UhzFgEkMDrN0VFSYJqr90mvVTZXJXqFF3khJN2gd1Z1Z3NM34C2E6VcOzi%2FgeYgCIFlzPis9Jlq9Z6hu3PStxuNoOLU6ex%2Bt13Nt0yAcdwBW7yY4nB7sR%2Fds4cFvGTD6XNoGvDhfOqiwAOOaG9cTzGAymCVfvFLuq7zdZK95fsrkBUnDnmY28sVpfS%2Fu2UfPf6ubREwtjH%2Bi8Mq21xfA1EuJyjOB2YSpzMgPeAiYpxiU59R0Xcu8gDSgYwr04h6JIlaLRjGCEzIH%2Bx6YsJxbbPNq7lOmAFgoqHg9GbCyh7mXt4AkGlv%2FOCjz5fmYhSBgVClzijHvOBZERWawtnCSsbK9YezezH3Jf12GJE3N9Xo5mv5cbgtJyO%2BavDBBVV9P%2FwCWpZZOyGqzYbWY5xSNIa%2FEjEPtkXqC3l%2BEwtfTaTUdQOcfMKi7hMMGOqUBaTuyBNLHpKHCTB2MjqrVzwS9ouOBLkyieC4HuRrOU3DXL%2FUpF4GhonKrMhw0qDojE0uy309MKoF6wjmuVn9YA%2BI%2FXd9ayLcyT6lNmcJRVgKJrhULFXEJTHL3Ra014FDMlmO3tVvwwPTiup6v32Gc7QlJHlKIYfTCso6gn5rXH4F3KVhUsY5vAFdst49wzBeYgHKr6%2B0S33UXaRdTz5i2mfpsVnmQ&X-Amz-Signature=cf6ffe90f122259e2b17873417ea0b12a7feccf44de84d8686648c985c62ecc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6W7I7M3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7d8VN6M0G0viTqlSOa3yMF3aqSZIfHyO5s42ZoBiVewIgGf6gTX0nSkxfgruVaJMRjqVrMxUsjLkT%2FoZ%2B8IhrUQoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwXUhRPVsfDbeYmvCrcAzlzb39rCXB3MCoT2WT483UbpSLlvgBqe4bRwILFKmBOGel4wYSUFHUbLNbuRZvlUwlH6mDSJYOh6VxkblZkaT0SggBfapb0jM917zhXT1QuLuo30pCpoQryXVa%2BfIh1oo1ClQaqss8cRUMV3JDFnDuXz7S7f5qxi2zvefOAN8QHkdGilOEuFGvQaOlFqD4eJRyYQoWDUGNVvKODFNVoCRbkL4KenVgSa0fUdHOgk8VM4oudtZaRW4NmpZDQ8AVZdSJNLJ8g9YUdW3ZnImI6OdTdl8TW7GntaAkLMF%2Fr5%2BpZ2AMyM%2FsLtGDE0UyJgp%2Fr11UHJ0kYrlO7Z2a5z5bhWFTLHN7H3bhdyuLECdbFApl4n92BHTWegMZPfcKtBf4%2BBqgOWBJNcDz8XyWFjNXKwWDq7UUL2JpnFqLvVOJO6tewBmmY382mW7qeDV9GiBU8dtiMIbTsmtlQtGwHl8ZD7Jhz6%2B3hIVTm8aeaCYpO4R5qRFehGf6GVilKRytHQ6znGF8prx8yGS1opu%2FF13E%2FN6yZrHBu7Z5TA1EfqsSUFN5wYYZwJPbhnzwQoGBREBdKc9vNmg1lqnhcJ1iiKQvHA6CxZ6jVsYcinCDUestzWa3LPPP6l3jb0yMtmFybMPi6hMMGOqUBmIhnTvK%2BZOxXnYMnxPHjm3hXW1LSkgaHQM6CYMWXpGZXvmAAMHXQBrI3lUKyxxTw5P3BQtV3LokHlL4oDCayS9X3maV%2BArjA0CESPez3hIEyaIS02WI8xsHwMGQru5jloQOcpHvS7BO9skJOHk89tAsJrROLika8ePP0M9MsjEz7VAkDmfyhgCsAk2YhFQu%2FT0%2BHgztD2XjHqCWXX%2ByF8Zo%2Fa7jL&X-Amz-Signature=462504228226dfa9b5c3ec510a038783ebf86cb88f84e83c2d0f65936fab3e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDD2ICNW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKBxJumUlb7zDmlKDC9fqC955CPiIhos%2F0YdAePUQxgIgIKFX4FmUTCDSUlb92j4U0s9YelFx%2BbCngjU2CvbiRQkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsp9F%2BMeMbdcoc8hircAwODUjr6Q%2Bd0PsosJK7tQ43gS5SP8qWgGQaBCy8dkCYDUehTB23rvDoFlD1bGL3lVMgbtVsM8n2ngNOwQMtw3DQC1BpI4I%2Fb8ADjCZNgAInDgmgVUvhkJR%2FUpKqsTGJMYMhd4IScEp%2FKjdNEp82fW83vZUldDdvJf4DafWLsjvScLyq%2FsUc2kOkantuHv1LvP3E1BC8DtxVYYiJ5gYYr5NfjbsKWrww6iDO8xPaUgWNp4w0JJ7ups85tni%2FeawqY7d42cGKje%2BSgPQ9GiCVwBSMSdwc3XraVSgaiIKGXEn8kZcDBuF3mjjq9tbdA4YwqldaFZlfYHPcp65Dkfk3pTbV5LbSvVel0fYsQXu7mZVd76g3tzWC5dK%2Fpp%2BPtGvWFc%2FSEVVm4mfGat1LatG5XM90OSRin7ThUKsuCVEOoagvumYzzWEWSo35NrjHHjq3bPGCgmq0UN%2Fq%2FGI4z7JUU%2FzjAGWLPkiAJBH%2Bb9vfm6UUEgBs1JPbErGYgKYxGURuR4EHaPEWlg7ss7wR3YDw44b%2FC53mgUP%2Byq7tsJB%2BcpGEgVEsevlEpWEmZr%2FH%2FpdguvLiDAWCSHtJH2gW4%2F8P9IBbd%2BxRYGM6v9LxC%2FAywZkyoR4vk3yTf%2F70FHA%2F7MN%2B8hMMGOqUB8lue%2BvOTwDj57ex7USgzK6zcfbyANg05DlWudgfXBLedbUp21rBMTFXBvM%2FAZFE85wL%2B2BvOtII0Eqoa2zzJ0MztiAhlbsydxRsjvaAsEmNuhmnD%2FilrRxRfuCU5pahjkHCPcouaiR%2BKeQ6zl6EUM%2FsJcUPA0%2BtYOalWdw4Ympto8HJ2t9IRcsGKQLwhY%2FCIW7TEkYZ6qfx%2B4uZ5BHHEBqOk%2BFVG&X-Amz-Signature=194310c5ee46e1f08f89a04c952febec242778a09dba7a869145f3d8cb38672d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
