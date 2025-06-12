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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVHPFM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDNUla%2Bq1%2By%2F1ic6x7v2dzwJEhs96qA2wHVjAZylH6QMAIgIbEeYlN9nRsfZ9dr4axyvqWsNk%2Faa4USDQCtsDjoTRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCogG9WFVVloY2wMuircA%2BuQPYXZ6qLfxMjtZXlyWCRm7Vyow1bqf4VBPBNwPkoV%2Bmyg%2BsQ7%2FpgLyJCy4Cf4ZFr6gRmwW9Q9RkQ04wgr6KeY5S9ndrjzxceMPHghQYWemxL0sSpZVlCuP131cwJFZTB%2FiKVACfLie149FeOjMdRgPjuBjBHDr4A8nTvt%2F5p%2FXOEURY8pPdqWzExCpPvHLkGDU7oBISBz7MoWouzljyLSNK%2F%2FVBdEShlyStXNxvZ92RJD%2BtI7O6K8xRt7g2%2FbdbfBiu7dbSl9UtDxxeP%2BNXHIwjymkGP127A2gmd6uUeMAxAkzFsFbniSZjiznjbkZ988i8aL%2BuYGr%2F2o9bZ%2FR3MXcKT6ST0UKzx3VFCx0Y8d4v3F%2FYd2U6wPlIht%2F%2Fg8IPMAcjN8DDRiUL6NdyWTVjMLI%2BSJrub42yMQwKOKvadVTpUTchGxP27OT8SPWOCol%2B6MNFYY2qXDNh4NZqzPvbk7ccqrYmAjg0ij7ouDoz%2BZ04JNzpNihvP08aBKKeMqgNO76m3wKAI6cDLXBltZFEA3NY0w9LS8dk0TLZYbA1ksruKJPfDMmPalsxm%2FvTTaUTQxD82hd0M2LH%2BSePzrxq%2Bq7LpNYvog5C7%2F0IKkuAfWDMZYe4bQp7gAWbwJMJn8qsIGOqUBmIo1IqmyGzPwbC0pb3oLWToUjfoUmtisWGejWWz7BHXPnc0x%2Fh7mvEb1fdB50DgQaDshUAu5VKd3gl2GCeK4hm77GE4NPwC1M2xc6vzDtiX7U4ny3l5dd2JZaRb2LbfyZFgk9FG%2BylBu6Sl13NIWzrx0yW7bT%2BjFhenECgyg83L4X4cDlJvFdWThiJpncGmWbvNeV%2FVy7uZ9AVTDZnoI%2BiLYIjj4&X-Amz-Signature=540a63587e2596a1d91f881c9be1390fda0792594c566dfd978eab8a8dd2a743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVHPFM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDNUla%2Bq1%2By%2F1ic6x7v2dzwJEhs96qA2wHVjAZylH6QMAIgIbEeYlN9nRsfZ9dr4axyvqWsNk%2Faa4USDQCtsDjoTRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCogG9WFVVloY2wMuircA%2BuQPYXZ6qLfxMjtZXlyWCRm7Vyow1bqf4VBPBNwPkoV%2Bmyg%2BsQ7%2FpgLyJCy4Cf4ZFr6gRmwW9Q9RkQ04wgr6KeY5S9ndrjzxceMPHghQYWemxL0sSpZVlCuP131cwJFZTB%2FiKVACfLie149FeOjMdRgPjuBjBHDr4A8nTvt%2F5p%2FXOEURY8pPdqWzExCpPvHLkGDU7oBISBz7MoWouzljyLSNK%2F%2FVBdEShlyStXNxvZ92RJD%2BtI7O6K8xRt7g2%2FbdbfBiu7dbSl9UtDxxeP%2BNXHIwjymkGP127A2gmd6uUeMAxAkzFsFbniSZjiznjbkZ988i8aL%2BuYGr%2F2o9bZ%2FR3MXcKT6ST0UKzx3VFCx0Y8d4v3F%2FYd2U6wPlIht%2F%2Fg8IPMAcjN8DDRiUL6NdyWTVjMLI%2BSJrub42yMQwKOKvadVTpUTchGxP27OT8SPWOCol%2B6MNFYY2qXDNh4NZqzPvbk7ccqrYmAjg0ij7ouDoz%2BZ04JNzpNihvP08aBKKeMqgNO76m3wKAI6cDLXBltZFEA3NY0w9LS8dk0TLZYbA1ksruKJPfDMmPalsxm%2FvTTaUTQxD82hd0M2LH%2BSePzrxq%2Bq7LpNYvog5C7%2F0IKkuAfWDMZYe4bQp7gAWbwJMJn8qsIGOqUBmIo1IqmyGzPwbC0pb3oLWToUjfoUmtisWGejWWz7BHXPnc0x%2Fh7mvEb1fdB50DgQaDshUAu5VKd3gl2GCeK4hm77GE4NPwC1M2xc6vzDtiX7U4ny3l5dd2JZaRb2LbfyZFgk9FG%2BylBu6Sl13NIWzrx0yW7bT%2BjFhenECgyg83L4X4cDlJvFdWThiJpncGmWbvNeV%2FVy7uZ9AVTDZnoI%2BiLYIjj4&X-Amz-Signature=159e02d115420a367e0a5dcce5920b7a0206692f76948861f4eda190bef828df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVHPFM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDNUla%2Bq1%2By%2F1ic6x7v2dzwJEhs96qA2wHVjAZylH6QMAIgIbEeYlN9nRsfZ9dr4axyvqWsNk%2Faa4USDQCtsDjoTRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCogG9WFVVloY2wMuircA%2BuQPYXZ6qLfxMjtZXlyWCRm7Vyow1bqf4VBPBNwPkoV%2Bmyg%2BsQ7%2FpgLyJCy4Cf4ZFr6gRmwW9Q9RkQ04wgr6KeY5S9ndrjzxceMPHghQYWemxL0sSpZVlCuP131cwJFZTB%2FiKVACfLie149FeOjMdRgPjuBjBHDr4A8nTvt%2F5p%2FXOEURY8pPdqWzExCpPvHLkGDU7oBISBz7MoWouzljyLSNK%2F%2FVBdEShlyStXNxvZ92RJD%2BtI7O6K8xRt7g2%2FbdbfBiu7dbSl9UtDxxeP%2BNXHIwjymkGP127A2gmd6uUeMAxAkzFsFbniSZjiznjbkZ988i8aL%2BuYGr%2F2o9bZ%2FR3MXcKT6ST0UKzx3VFCx0Y8d4v3F%2FYd2U6wPlIht%2F%2Fg8IPMAcjN8DDRiUL6NdyWTVjMLI%2BSJrub42yMQwKOKvadVTpUTchGxP27OT8SPWOCol%2B6MNFYY2qXDNh4NZqzPvbk7ccqrYmAjg0ij7ouDoz%2BZ04JNzpNihvP08aBKKeMqgNO76m3wKAI6cDLXBltZFEA3NY0w9LS8dk0TLZYbA1ksruKJPfDMmPalsxm%2FvTTaUTQxD82hd0M2LH%2BSePzrxq%2Bq7LpNYvog5C7%2F0IKkuAfWDMZYe4bQp7gAWbwJMJn8qsIGOqUBmIo1IqmyGzPwbC0pb3oLWToUjfoUmtisWGejWWz7BHXPnc0x%2Fh7mvEb1fdB50DgQaDshUAu5VKd3gl2GCeK4hm77GE4NPwC1M2xc6vzDtiX7U4ny3l5dd2JZaRb2LbfyZFgk9FG%2BylBu6Sl13NIWzrx0yW7bT%2BjFhenECgyg83L4X4cDlJvFdWThiJpncGmWbvNeV%2FVy7uZ9AVTDZnoI%2BiLYIjj4&X-Amz-Signature=6217aeffa8e18e618744d7205e4fbc7daa772b5f834353aa6f5cf086ee86ece9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GG3LVJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD%2BVvZ93fB7Mt2U1H3vPQMmrqm6L%2FaXe5GX9dmAoqGc3wIgEtH%2FVRbSAN9B90KKNz%2FcCt%2FCFla0AjPRWO7N%2FgheSBsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBJ4JziqL2stESYUCrcAwpJAUCGofpDwzQAaEBQBzK48oor0hmwIJhvErLn2xGZD14D1OaAvOcGTUgGpWvVVJVhbv8SHB%2BjRVYaFewf%2BqLM%2FbqyFZ49vS0z%2FYBgs9tK4dAw8pUd0XWajef%2FpmrP%2FghkQdadQHovSv1Thfq%2FCWD3PNJxiA%2FjYnIeYw%2F9ujAtSJg3hiu1rpccs3CHCSA9uQD43bDqY%2FKELJL30REpl7pKVCycWH2zA1tFoySKvcsxeMTpap9nHhh8j6IGNY8NXuIw2YmQnQfqP84bKnoYwKj0ouXr2i6VoRUajPCOI4dbHA8b1BDTZ%2BfZqEIWXHyHrP9VokPjZAPfwmJU9a6KRJANfaIWPjoROih9opx92uOi09dgyTba30DnKi15%2BA5t%2BMAL0dohWMBtpHp%2BfFoNGyU2FnC8M25gJNu8OsZ3qxfN1QJghFNmm5DxqSXkb3wFgvY5%2BzRXSYrYGXnvrWXfhVccqTdLsMeDTlS%2FkG1JgCeF5dW5COZ5XHJxH1G6mEZz9jtaCamAeU4m%2FVXVjDfUeYwoisIGUL2OPga3pAQKNe3wiRaF7lRTW1qFZoL2rw5g3vkB5jKF6aDSWJytKAj7UIcJE%2FDK7sgVDrI49ia%2FP2nwHgBteArUhokSrngWMOyqq8IGOqUBmFoiv%2FgwjEEbZGzyM50%2Fe6S7RvXB6kew9jq6P3yb8U7AcVwIgiqDDAV%2FDCWHO5lbw6z96TKrXsjRDdB6X4LLnxhPf4dTkeVZuUJehnjHL9koCtgq5X3IP5CAH2X%2BdnM9AgQY0olENhZ3y7U9H%2F2c%2F6ys8GSI4QA39yq1VtTc3bTR1KzPcXTMsi5M6fiO8%2BhSFSRlKIbVJwAWy%2FXDkWBCVSBbdO7n&X-Amz-Signature=cc06d88bc71b1c8b25a56f04358e777b5c83576a496370bd5380a4f386bb000f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36LR4MV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD%2FuClJDgSNdIiUuPIx%2FoPsPLTYlqYLrFNEFFzblpFWlAIhAN4Wy7NNDbDwijBm7CwurxoyBHJ7jnen0hDcz3ydrATiKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbQ6sJrNI7yQT4dowq3APa2h8lS2kEDMfMiOS7FvlPjJlMJIBYJ59ONNhuXgkWEcxYLFbT4zpradlSgc%2FaX0C%2F2apADgRCytK608YSaSNWCUF4Ti5gos3NtalBCCGKpmqPI8asLtLe0mxsMGJDx4JPAqq4jV9mz3Q3a8lCj9hFHfYhay94zgKf2O8ms0Nlev0TVHgDI%2FgsHPnI7TjjJ12PQMXWFynN%2Bz0af1bo%2BP%2Fnui9DX0XydhH7IC8MxP0JOMQdAlb4vOYxrH8oFqcQGoUUAND5Y%2FBkMpYHkJIVeNxJNqrnMuJQAUYDYMb5UT0rqqktunYZfiUMyv97IEgudIdh0y7mdQxKtLIFti5aQDvDNS03TfIPoL54FYhSOBn3yUKvxw9qTOJHpfXiTgpjS6c8w8fcyXz1RT6osF%2BOnm3ZZcJQrRpO4QANQMcMgLoRJEbF%2BonqiwgrmQ3xRZ1edXHc09zWGJ47PfDzeepkXW35GY5QxiOrDJ%2BupOkLGs%2BhgbdPtL1zgyFTmwcGw28ukcVXW1%2FkTwe%2ByyBOwW1HJ97CvqL0pGgbkNBb5bCpYkgOACqHcpLIBPGR2JlYdw0xbacJLmXwhp2YeZvHd10m%2Fu%2BZn2FNJ1gx2JOzbshzrISMZTruO0uuyBucx%2F9bMjCVuqvCBjqkAbkLHTbMRC7hBRdVDiAeD6OMZ1LYoh6ekMnm8%2BVcl9R1FrCXnUkzETTXc9%2FcF%2FAo47Ocjps9p5qRN50dbMCLOOeiJ3%2BPH0qnxyGveRyxDhii3NPnDHS9RUzk41mERYNGd0Yqr4%2By7jvLr%2B3v%2B%2FySwF3jGl7K1Ry03%2BPU6xilHJ9FAwtCOkDMLdh2kC4R8t7C6kXTTz4RH7jBTHU7LocjAsjKLW4u&X-Amz-Signature=120db9959000293b8210849a53e19577cc5eda9a49205b3b2466f362192010a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVHPFM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDNUla%2Bq1%2By%2F1ic6x7v2dzwJEhs96qA2wHVjAZylH6QMAIgIbEeYlN9nRsfZ9dr4axyvqWsNk%2Faa4USDQCtsDjoTRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCogG9WFVVloY2wMuircA%2BuQPYXZ6qLfxMjtZXlyWCRm7Vyow1bqf4VBPBNwPkoV%2Bmyg%2BsQ7%2FpgLyJCy4Cf4ZFr6gRmwW9Q9RkQ04wgr6KeY5S9ndrjzxceMPHghQYWemxL0sSpZVlCuP131cwJFZTB%2FiKVACfLie149FeOjMdRgPjuBjBHDr4A8nTvt%2F5p%2FXOEURY8pPdqWzExCpPvHLkGDU7oBISBz7MoWouzljyLSNK%2F%2FVBdEShlyStXNxvZ92RJD%2BtI7O6K8xRt7g2%2FbdbfBiu7dbSl9UtDxxeP%2BNXHIwjymkGP127A2gmd6uUeMAxAkzFsFbniSZjiznjbkZ988i8aL%2BuYGr%2F2o9bZ%2FR3MXcKT6ST0UKzx3VFCx0Y8d4v3F%2FYd2U6wPlIht%2F%2Fg8IPMAcjN8DDRiUL6NdyWTVjMLI%2BSJrub42yMQwKOKvadVTpUTchGxP27OT8SPWOCol%2B6MNFYY2qXDNh4NZqzPvbk7ccqrYmAjg0ij7ouDoz%2BZ04JNzpNihvP08aBKKeMqgNO76m3wKAI6cDLXBltZFEA3NY0w9LS8dk0TLZYbA1ksruKJPfDMmPalsxm%2FvTTaUTQxD82hd0M2LH%2BSePzrxq%2Bq7LpNYvog5C7%2F0IKkuAfWDMZYe4bQp7gAWbwJMJn8qsIGOqUBmIo1IqmyGzPwbC0pb3oLWToUjfoUmtisWGejWWz7BHXPnc0x%2Fh7mvEb1fdB50DgQaDshUAu5VKd3gl2GCeK4hm77GE4NPwC1M2xc6vzDtiX7U4ny3l5dd2JZaRb2LbfyZFgk9FG%2BylBu6Sl13NIWzrx0yW7bT%2BjFhenECgyg83L4X4cDlJvFdWThiJpncGmWbvNeV%2FVy7uZ9AVTDZnoI%2BiLYIjj4&X-Amz-Signature=48a940826955ca78a503cfe5c4694cfc5dd7941898674806ef811aeecdb0ab47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
