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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OEQY2D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDCu9yA%2BJZOOGa0nB3Edx0uzk67S7N9JI9DAkyZblDYuAIgD4gYfhLX8gKyjXVTYDOB%2FllZMwBNh0AwjSIExeyL0NgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGWp0jWPvC3Y0nvACrcAxjzYZwDQOt6YNnhYkUfvfykt0Z8UOZziJHtiGPOORYxEd2nG%2FiYBkNbunMwFw86cUpDJu6eXd%2Fcw86E6iG07v8KQgq8OWIsc3xXAoIejXGE5QNXHlp6tdAI0TF714DIpGoIgb%2B2395iivHm8loHKasOAKdcMg6U0GTddQxtMf%2B4siQ38O7p4wYIuvOEFk4gxeqImw77yZ82Bsakb1DQWrKePns1mV8AmIhvt0JpDUx7twVtcJiuENRKv5fyNUXhUl7Eu6JL9psGmrwHAocq%2BesA6TtaOwGowS4W8hwge99Pkc03W2LEFzn5wCkCwC%2FqtPE%2FwIJAIjFmVkO6Q9zd9QYCuL6SHoP8F4KI4%2FGy%2FjP%2BTlk%2BWZXv3CDpVmejE%2Fgfi4x2F%2FEm%2BwYY303gpuejoC3BvyVvfxNJ2Txzt6v6G5ELtBmnbvV3W%2Bu3fqq%2F70Ev5exkS1hWl5yKQFdg9Fkc6AOXGX3gnceg%2Bb6kAt5dIJbHVo4pW3t99Yj0Y7pVs%2FCpIMMlBYtP4ygecR22BI1A%2BncG3yeouZcIDXML3g1uLvOLVrKwuIeTHF6Axs6amT2LtAKJgPaHsmcAy7YGHOK4LSm6e%2FuJMQCe5DVOvKw00dl9PtUq1IxD89fZH6LaMKai1b0GOqUB5QBQdUAn5dorU3006iYFm7SEVwaReK7%2BxZ0QjuN8vpZDwkp1peYyuSSFZa%2F7OVDx3fEJfxotGODD0L3M0HxXWwDlilGgA0PiWWqZJ0w2Gumwv%2FF02IWpj8X%2BKFhwbk7SzDQeWwK4h7Si4cXPJC7blf9phcpOAE8J%2BOJV3HLT4%2BQvvx7Y2K%2FgUaLrrXDd87cCAQ%2BJkm2sqaV3sFlA856bjTeAls%2Bs&X-Amz-Signature=5dbbbe984f1b469b269c0e6c53bb6531eaedf25d735e1f9305762424bcbdaf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OEQY2D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDCu9yA%2BJZOOGa0nB3Edx0uzk67S7N9JI9DAkyZblDYuAIgD4gYfhLX8gKyjXVTYDOB%2FllZMwBNh0AwjSIExeyL0NgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGWp0jWPvC3Y0nvACrcAxjzYZwDQOt6YNnhYkUfvfykt0Z8UOZziJHtiGPOORYxEd2nG%2FiYBkNbunMwFw86cUpDJu6eXd%2Fcw86E6iG07v8KQgq8OWIsc3xXAoIejXGE5QNXHlp6tdAI0TF714DIpGoIgb%2B2395iivHm8loHKasOAKdcMg6U0GTddQxtMf%2B4siQ38O7p4wYIuvOEFk4gxeqImw77yZ82Bsakb1DQWrKePns1mV8AmIhvt0JpDUx7twVtcJiuENRKv5fyNUXhUl7Eu6JL9psGmrwHAocq%2BesA6TtaOwGowS4W8hwge99Pkc03W2LEFzn5wCkCwC%2FqtPE%2FwIJAIjFmVkO6Q9zd9QYCuL6SHoP8F4KI4%2FGy%2FjP%2BTlk%2BWZXv3CDpVmejE%2Fgfi4x2F%2FEm%2BwYY303gpuejoC3BvyVvfxNJ2Txzt6v6G5ELtBmnbvV3W%2Bu3fqq%2F70Ev5exkS1hWl5yKQFdg9Fkc6AOXGX3gnceg%2Bb6kAt5dIJbHVo4pW3t99Yj0Y7pVs%2FCpIMMlBYtP4ygecR22BI1A%2BncG3yeouZcIDXML3g1uLvOLVrKwuIeTHF6Axs6amT2LtAKJgPaHsmcAy7YGHOK4LSm6e%2FuJMQCe5DVOvKw00dl9PtUq1IxD89fZH6LaMKai1b0GOqUB5QBQdUAn5dorU3006iYFm7SEVwaReK7%2BxZ0QjuN8vpZDwkp1peYyuSSFZa%2F7OVDx3fEJfxotGODD0L3M0HxXWwDlilGgA0PiWWqZJ0w2Gumwv%2FF02IWpj8X%2BKFhwbk7SzDQeWwK4h7Si4cXPJC7blf9phcpOAE8J%2BOJV3HLT4%2BQvvx7Y2K%2FgUaLrrXDd87cCAQ%2BJkm2sqaV3sFlA856bjTeAls%2Bs&X-Amz-Signature=be3a3b3f3d36607f35112aa470d1d7b1a3fc84028bdf0c5b6508b023edcd2c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZM53S6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbKJI6yGC9f8bDV17Afx03f0MLemUn%2FA6byrQuAychPAIgAl36O7fp8KIWrUCbEM0%2BF787Trl6NYeDIYxq%2Fe0K8I0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe2TI3O8j9tCJ7QLyrcA90Yqo0dnM%2BFtCuy95gLZ6%2BQ4tVymlv8IjJrjfFoPI3YouH7UgVQDTUcsMUkBWGyfsppw%2F8uZxqETQ41JnS23nn7afyeKt%2B7kKGjlL81xyjIAz7%2FeS9Zu39lL1ycQD47%2F9MCNQSHo7mDoMuJY8b25ScmoFtQMn1UD4FDJ5J8Nj13lL3O0ZWUAj6WkxsEZbWELXa2u6CdbOk4RA5ZJbGuM4y4ADXSaXgd4TwHBz3JMPTBNaFK9wyvxO%2Fo8AM0ZC5UjzIJ1hziYZmvbm4qsb8hrsAr7ItWvmuogz0EaNshIjHmSwlZxMItZx3GzcSYkyWrXTkK8qx4G%2B73Xgx1FrZD7m0xlHkUxcaQjfys5w6MoleDaE7TAqRtEjHd4ykqxXk321%2Fi7KCBe2PxSJ4mQWYF6GV%2FtNl8Y0rV9b6ivx8wPkRMHw0FZHkT0pS0kMX0fJQsD0cLlvztjzoBqd6pwMk5kzluMHreP0%2FnNQ4JJAw6SZztHvONfw0O02WJXl%2BGTptRpTlUUkeHwsiYQIn3boZ6aRc8A5Jo0WKhI4GvZLbkpFf1TFvu4a1CrQt4yOzya%2Bpp7k%2F2h1FogFL6Aui3UjbNvcqQUxgMHs%2Fa5Sddr52zEr0%2FM34SUYLQ83odqhOwMJOj1b0GOqUB6uqig9Ik0dQZfHlvw5nfntNfxpkFEdhESfdDHAJt3yIb9bDaa51I1R7FqblHo5g6lxM0QMd4%2FJ11hUEnyYXXkTY3%2BrvyUNlwAzHmNv1Yoj7qcJK%2FIlFUgKl0xBUUIqQCav3mfsMea%2FsUVjv46Ym88A%2Bt%2BABoQCP%2FnylrtG5YmqijgNdI%2FNqT7PPyJw2yp1y4rOwx0r27nj6gvyIiOrRjrC4RsfC2&X-Amz-Signature=bcb660b532f4b834404af16be4764af9e33ce0cbf9036faa9315bd9268daa2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VXSPQEB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEBfRB1VReLXodW0X5FC0wdZw4YtMgG1diy%2FXC%2BpMjuuAiEAx05Oldd4M1GpooAzu4qvgyqEAncCGv%2BLnf%2BF7y9LkpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI6ttFoqH%2BJm3teKyrcA0ZDg%2BQzPCwnoFHLPZTUqwBU020aadjqmLAKJ14j2T%2BR1vjKWmjBkkhQWop4gRousvAFemlioz1e877fBqSuA8RJfKg4JyP6fNUM%2B9RJnc7D3OfJoa1qq9yLGJcxiTUe0BnvsS8D5acxSXKKEHJOgTdJ8kejJomWZyAtC3HCjhm2dBNyCranZiszOSb7fPGNFBFryzb3EHf074p6yjKZG%2F2BDxBYyXbE8af%2FIlWsl85f8JQNugqv%2F6isTCmwWaIV7ziI3xNNQs8rwRtjxzG78IvJSNFK00nIEL%2B8F14KOTc4J4FJplwhDjL7jkPKix3YpRbVlmA2Xq587Bu9hDUExEjp5zm5tTTDcqVUoMo2lXmgbC0aqnl%2BxQhQlv4NXKs5ZBVQo%2BItxFxYzK2dKIzFLorpmuMUrC4BC6DlS%2FxG303DgomC6M5WJucu%2BgkrWt30gsDErxv9hZkB4J3T0JwPXvAnK1AVOlui1Iq%2B7PAqc1kw91BQZ9GVh6bOXyus9D2vGHgR3dvJgPwSZG3DiPNDE7SZ8EMjr4%2FBSYJ%2B6tAanW7u16RYXQ9iO6a6rxjWPUu76P3yW6gPRiiyd9FPOrEM1UnZapN1GCUUww1ywHqjkXXZxCdhizRS5yocVPrbMMOi1b0GOqUBGiei%2B3Y%2Baf21keymqs12ZcdR%2FvoYWiFkClntyp%2FAAmH0Duvqmez%2FaRnlJotXyyv9ap%2BYo3Ribm1jW8d4IUjmrcXuTMBuiCOiMryG1fwoCsUUx16vJLxoNOQo2KF6F9vfVwfqyVQPJovmk9M0e5a0AeDSEjDD9qHCag0rLQtXrLpmKqLr2RiMXC5PMyxgabJFtRYTich4zAgpXXdcg58AspQeaBiy&X-Amz-Signature=ba9823fa3564541e5a550ebf871e4cc99c81129b844268c5e63f9d94a91e979f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OEQY2D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDCu9yA%2BJZOOGa0nB3Edx0uzk67S7N9JI9DAkyZblDYuAIgD4gYfhLX8gKyjXVTYDOB%2FllZMwBNh0AwjSIExeyL0NgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGWp0jWPvC3Y0nvACrcAxjzYZwDQOt6YNnhYkUfvfykt0Z8UOZziJHtiGPOORYxEd2nG%2FiYBkNbunMwFw86cUpDJu6eXd%2Fcw86E6iG07v8KQgq8OWIsc3xXAoIejXGE5QNXHlp6tdAI0TF714DIpGoIgb%2B2395iivHm8loHKasOAKdcMg6U0GTddQxtMf%2B4siQ38O7p4wYIuvOEFk4gxeqImw77yZ82Bsakb1DQWrKePns1mV8AmIhvt0JpDUx7twVtcJiuENRKv5fyNUXhUl7Eu6JL9psGmrwHAocq%2BesA6TtaOwGowS4W8hwge99Pkc03W2LEFzn5wCkCwC%2FqtPE%2FwIJAIjFmVkO6Q9zd9QYCuL6SHoP8F4KI4%2FGy%2FjP%2BTlk%2BWZXv3CDpVmejE%2Fgfi4x2F%2FEm%2BwYY303gpuejoC3BvyVvfxNJ2Txzt6v6G5ELtBmnbvV3W%2Bu3fqq%2F70Ev5exkS1hWl5yKQFdg9Fkc6AOXGX3gnceg%2Bb6kAt5dIJbHVo4pW3t99Yj0Y7pVs%2FCpIMMlBYtP4ygecR22BI1A%2BncG3yeouZcIDXML3g1uLvOLVrKwuIeTHF6Axs6amT2LtAKJgPaHsmcAy7YGHOK4LSm6e%2FuJMQCe5DVOvKw00dl9PtUq1IxD89fZH6LaMKai1b0GOqUB5QBQdUAn5dorU3006iYFm7SEVwaReK7%2BxZ0QjuN8vpZDwkp1peYyuSSFZa%2F7OVDx3fEJfxotGODD0L3M0HxXWwDlilGgA0PiWWqZJ0w2Gumwv%2FF02IWpj8X%2BKFhwbk7SzDQeWwK4h7Si4cXPJC7blf9phcpOAE8J%2BOJV3HLT4%2BQvvx7Y2K%2FgUaLrrXDd87cCAQ%2BJkm2sqaV3sFlA856bjTeAls%2Bs&X-Amz-Signature=8521e68fdd3b1268792da4788d7b15575abea21f75a111112e18a00d93b9f6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
