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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEPDNEO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICmehoCm8GuD9r9eswZpbzvFRUK6LGOdlZMqFUfVPv7dAiEAsF18eKwtPy8gOv1YB2qk0QxIIbqHgGJXTR%2FCxGoX6p8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMPbBItYcXGV4JfSYyrcA%2FtijBMT6NtgjdqvomJVOe30j663nXO%2B8lFawE2MoKkKYd%2BwWpeOWECY7q9n9oMDxJyXv6Os7YEGGI37t9wcUNTSi5cTOgQ48GaVgLzPkNZxwtZqmrvYfV0Q8N%2FrFbcw5OewZIxTM8k2zbO3yZRKoOqJhYrtQAuVicbe1ZWQZkL9C5QkVif%2FWrQmxLbr0Tx5rgO6inVUyu37zjPbqeZFzfvh2fm189nF3YGktw0OJbs3Kgc2EzgWpwqxUh%2Bb%2BWjSHwwOkFBzkikLQQ4Pga9uW%2BFuezz4WjDQ%2BhjY5YVzI0NrKa1PwUK0RH3HdhJERvP7AoYdBFJQy8l7V2RzrLtL9ONuSpdm7djoRC20WiCX8iNd8ELYnwGg41kqtUoavBly0ppEFJbOKRF7vFNkPwQ0ktsI2JIRfzAQnSGqnpnxSl8mOWgLB8%2F%2BctHL3jZVeh6ZOC9VnL5a9GP6g7FmVIIgSnqpJIoosinqYqw%2Fcq1%2Ft7Zhk%2FfYlsJ9HZPmbaYX3YvYylHkYm6SGB42Ppyv%2B%2FFYW7Wjcb6KVTTNLa98wa174IzlQ8i%2FNU%2BOmwE0ifKYh3ICc%2BcKeNNRQ4fbiLilhmFp2bTMC3YM6dzGEjQVEGfqYIjt3zdeHtAXLiO448XIMKGQ78IGOqUBJBMQ0I1Xa7rk7wiRjtdt8hIYNwXwuc31eYpqnxs7Y%2FfW4arOB6JzKI8qcqIW85uyOX8GQD9Ovc0QNkQNy8dlGfgmgVDZZSXKvKKlg87DIDbq5IYiIf1aObLMrju4Qr2IsBhayjQgF8CXzGHXMYwnmOyUd7EgHG82hnHUlu7My%2BuLw%2BUUrsILfvpVUkEoRi%2FbtCLLjY7%2BnH1Y7ADwjrH9ScF%2FUCD0&X-Amz-Signature=68d1cdb376044c650daf51befaa74026f98aaf937e546aee6fa97fee1b368ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEPDNEO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICmehoCm8GuD9r9eswZpbzvFRUK6LGOdlZMqFUfVPv7dAiEAsF18eKwtPy8gOv1YB2qk0QxIIbqHgGJXTR%2FCxGoX6p8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMPbBItYcXGV4JfSYyrcA%2FtijBMT6NtgjdqvomJVOe30j663nXO%2B8lFawE2MoKkKYd%2BwWpeOWECY7q9n9oMDxJyXv6Os7YEGGI37t9wcUNTSi5cTOgQ48GaVgLzPkNZxwtZqmrvYfV0Q8N%2FrFbcw5OewZIxTM8k2zbO3yZRKoOqJhYrtQAuVicbe1ZWQZkL9C5QkVif%2FWrQmxLbr0Tx5rgO6inVUyu37zjPbqeZFzfvh2fm189nF3YGktw0OJbs3Kgc2EzgWpwqxUh%2Bb%2BWjSHwwOkFBzkikLQQ4Pga9uW%2BFuezz4WjDQ%2BhjY5YVzI0NrKa1PwUK0RH3HdhJERvP7AoYdBFJQy8l7V2RzrLtL9ONuSpdm7djoRC20WiCX8iNd8ELYnwGg41kqtUoavBly0ppEFJbOKRF7vFNkPwQ0ktsI2JIRfzAQnSGqnpnxSl8mOWgLB8%2F%2BctHL3jZVeh6ZOC9VnL5a9GP6g7FmVIIgSnqpJIoosinqYqw%2Fcq1%2Ft7Zhk%2FfYlsJ9HZPmbaYX3YvYylHkYm6SGB42Ppyv%2B%2FFYW7Wjcb6KVTTNLa98wa174IzlQ8i%2FNU%2BOmwE0ifKYh3ICc%2BcKeNNRQ4fbiLilhmFp2bTMC3YM6dzGEjQVEGfqYIjt3zdeHtAXLiO448XIMKGQ78IGOqUBJBMQ0I1Xa7rk7wiRjtdt8hIYNwXwuc31eYpqnxs7Y%2FfW4arOB6JzKI8qcqIW85uyOX8GQD9Ovc0QNkQNy8dlGfgmgVDZZSXKvKKlg87DIDbq5IYiIf1aObLMrju4Qr2IsBhayjQgF8CXzGHXMYwnmOyUd7EgHG82hnHUlu7My%2BuLw%2BUUrsILfvpVUkEoRi%2FbtCLLjY7%2BnH1Y7ADwjrH9ScF%2FUCD0&X-Amz-Signature=1d5be78cd1cb97a0e7caa421b9dce4d0a20a8b36aec0a802978cabee8c1c65b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEPDNEO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICmehoCm8GuD9r9eswZpbzvFRUK6LGOdlZMqFUfVPv7dAiEAsF18eKwtPy8gOv1YB2qk0QxIIbqHgGJXTR%2FCxGoX6p8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMPbBItYcXGV4JfSYyrcA%2FtijBMT6NtgjdqvomJVOe30j663nXO%2B8lFawE2MoKkKYd%2BwWpeOWECY7q9n9oMDxJyXv6Os7YEGGI37t9wcUNTSi5cTOgQ48GaVgLzPkNZxwtZqmrvYfV0Q8N%2FrFbcw5OewZIxTM8k2zbO3yZRKoOqJhYrtQAuVicbe1ZWQZkL9C5QkVif%2FWrQmxLbr0Tx5rgO6inVUyu37zjPbqeZFzfvh2fm189nF3YGktw0OJbs3Kgc2EzgWpwqxUh%2Bb%2BWjSHwwOkFBzkikLQQ4Pga9uW%2BFuezz4WjDQ%2BhjY5YVzI0NrKa1PwUK0RH3HdhJERvP7AoYdBFJQy8l7V2RzrLtL9ONuSpdm7djoRC20WiCX8iNd8ELYnwGg41kqtUoavBly0ppEFJbOKRF7vFNkPwQ0ktsI2JIRfzAQnSGqnpnxSl8mOWgLB8%2F%2BctHL3jZVeh6ZOC9VnL5a9GP6g7FmVIIgSnqpJIoosinqYqw%2Fcq1%2Ft7Zhk%2FfYlsJ9HZPmbaYX3YvYylHkYm6SGB42Ppyv%2B%2FFYW7Wjcb6KVTTNLa98wa174IzlQ8i%2FNU%2BOmwE0ifKYh3ICc%2BcKeNNRQ4fbiLilhmFp2bTMC3YM6dzGEjQVEGfqYIjt3zdeHtAXLiO448XIMKGQ78IGOqUBJBMQ0I1Xa7rk7wiRjtdt8hIYNwXwuc31eYpqnxs7Y%2FfW4arOB6JzKI8qcqIW85uyOX8GQD9Ovc0QNkQNy8dlGfgmgVDZZSXKvKKlg87DIDbq5IYiIf1aObLMrju4Qr2IsBhayjQgF8CXzGHXMYwnmOyUd7EgHG82hnHUlu7My%2BuLw%2BUUrsILfvpVUkEoRi%2FbtCLLjY7%2BnH1Y7ADwjrH9ScF%2FUCD0&X-Amz-Signature=f19c02b90f8d6afc1b39877572d9105b583a6db13df789fa758511668d2ce9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IO5VCYA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIC%2Fy94NjKrrDJxl%2FkDyMa3hYAYm%2Fng05BhcBn3pwiVqoAiBL7IfWR%2BDoouHbu%2F1joebpIzShMqxZNpvs3yMPdgytuir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM6mdrBsmVuxnx71J7KtwDCduhnGn%2F0b6oGaqtbX3uTTTXJkz8rXlm%2BQSjLUx8zOCwraAHzzcqZA4qlac4F%2Btnrc7YD0cqbukE%2Bj7oEqdccxB8%2BIXu5IDKyoXm1e9LlL%2BhkXyIBpfDFjoufc7iaGN%2BaCU9iJIO4PEdSgzD7qPZHq7xFBfGzOn7hTPs5dwKY3S5XlxQOLuWe4vHHsJuC30n2rwZuy%2Bm%2FVwB4sIaLxdGGZED6lBQWk0ViCBXsGot5QDVooCwtq%2FzZs8665IwamcMv4IG1S0Csd%2FZ6IHcnoTBLJTCXv98sA7AX2B9EXuppX4Ro9asybU9bBpfpF5718pLxR0Pk1egRWlynR4vpgGMnbcFrloROGNxldSUCGyCjCMoyZgUcp5kvpUG21%2BtG%2FG0imi8ZgkTfCuHSEsLNzYRnobTQD6VBnqP%2BJtr5wK04XIvViIU0GLNXvHLl5VuXv5JxxK%2FNfIYpt097erirUqheRhqnEQZ%2Bdteq7jLaISvhAJzpOdzThIjxu1mjrLSNusIRYGz%2FhHs%2B4McF%2B7Exqnk%2BRKE20gMGn5qEi94oVlz4H5xFBLSQ5PPIOibjqjJrHELobr4v83OgQ6AtbyPLsUrALiAUlTkFHTNdDg7YBZmR3LOkcqQAsRLwNWfix4wv4%2FvwgY6pgG%2FlN5Jas%2BCgDcEEVaGA4%2FiWiVZXD22LNakty%2FB4Xv75Kena06myarG42JAbSfweGFtoTGYUeVbkpsW1cJtdkXkIjO1f%2FXFIpl4mY1VUkXfSIwJUHanKJtZwq3V6zV27YYFP7rOGlKdT89PN8vtRP4yrtA%2Bk1RuQ9KdgbsTyBwN9HTshPSUrgQ3cFOwUK1J2MfmLz2t3BWhgwPAcou8nJKo2rZtQA7z&X-Amz-Signature=bb368f4f7043b5623d0542e82052d1b95ebb2c9c6ea35c93ee7d00816c507cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S37IVWW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC4w%2BsCmHsQJQ%2F8Wff%2FFjwMaVI%2Br44M1%2FlJ%2B%2B2IqmFwwwIhAMNawVWWnY050MnR2C07XvXjs4OodZecGPbpkRRLldosKv8DCEMQABoMNjM3NDIzMTgzODA1IgwZ0TNcJRbEc%2F9eEjQq3AMHLccRu6uNsAdn2DdcPu24dGXZYnz%2BHlco9UUi6RP%2FX6okfsJbGhwH4f9v4XGwzFr0CTxxgUqQko%2BakOX1Qc3BSvDuQLD5XmJlW59IWTXLb%2BDB%2F%2F85SLgHUVNTX%2FU2%2BaZ%2BtPo1I65EgUB2OUoWPyk8s73bUo6bMysRtlNQtxzwnnALEvZemUMa74bkHmmekV1XItWfMrAsPhiVmAGCf4SJPM%2BmXwKkCHNzr8UDc182vd8tux8ygQyRFp6q1XMIiDjC2WHtw1mlNkU4K28hjdx1Cu8h8nEbRTsxwB1D9XZaiyxXiV%2BGhEtZkPbHwE2NpGK8cNavl0L7mkSAb9aZushszjZNlKrlqWPelK9VdDYa%2FfQ1ws2jDOa5s46q1pu9BfUzpWUzXLA6OWwgxxqtfIffRwABlXoQzCpjqkkyCZPqrGlr95skM%2BQqQel1UC5eZFDn2ca8mswxC4HuZnhC4uovoRD0qmTIgkpfJLm3lJBNpK0O2T9g1bcTg2tz8IiioecoKDnNGD4khc9jGYWMTvXSK9LHiZwllt58cteN2C9jg5PBcj9zTCFLEeCwFMRMiYFdS5qPXox9xzb%2BqEgvDRs3Kz0fMUSZLoeC74vglUqk11zX1Xcft6uLDWMcxTC9j%2B%2FCBjqkAfS7WoBgcGgQ8u11R2b1dATncbgrQzbyIBBjiBll2HDyV4ApJBzwPIDsZiHGjcuoCtS8WHA3yXlWKZ5hSPmq1ZqCQH2NkCcWH2eXUUrMkWb6%2Fmiv9i7GGnOXza4rs6r9zJFkeFiXNpncuyJQVyVZZAWqv57hysVVPJ7X9SUkMgE4QIYeFfQ%2BVViSFQQKZjm%2BvkNYNXL7Bk1M%2BW4VMLI1L4u0JZ9g&X-Amz-Signature=d17cf53f3fec7d3c677557ee11e260cc7400bd8d8ce6636441ec2f152cf3f488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEPDNEO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICmehoCm8GuD9r9eswZpbzvFRUK6LGOdlZMqFUfVPv7dAiEAsF18eKwtPy8gOv1YB2qk0QxIIbqHgGJXTR%2FCxGoX6p8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMPbBItYcXGV4JfSYyrcA%2FtijBMT6NtgjdqvomJVOe30j663nXO%2B8lFawE2MoKkKYd%2BwWpeOWECY7q9n9oMDxJyXv6Os7YEGGI37t9wcUNTSi5cTOgQ48GaVgLzPkNZxwtZqmrvYfV0Q8N%2FrFbcw5OewZIxTM8k2zbO3yZRKoOqJhYrtQAuVicbe1ZWQZkL9C5QkVif%2FWrQmxLbr0Tx5rgO6inVUyu37zjPbqeZFzfvh2fm189nF3YGktw0OJbs3Kgc2EzgWpwqxUh%2Bb%2BWjSHwwOkFBzkikLQQ4Pga9uW%2BFuezz4WjDQ%2BhjY5YVzI0NrKa1PwUK0RH3HdhJERvP7AoYdBFJQy8l7V2RzrLtL9ONuSpdm7djoRC20WiCX8iNd8ELYnwGg41kqtUoavBly0ppEFJbOKRF7vFNkPwQ0ktsI2JIRfzAQnSGqnpnxSl8mOWgLB8%2F%2BctHL3jZVeh6ZOC9VnL5a9GP6g7FmVIIgSnqpJIoosinqYqw%2Fcq1%2Ft7Zhk%2FfYlsJ9HZPmbaYX3YvYylHkYm6SGB42Ppyv%2B%2FFYW7Wjcb6KVTTNLa98wa174IzlQ8i%2FNU%2BOmwE0ifKYh3ICc%2BcKeNNRQ4fbiLilhmFp2bTMC3YM6dzGEjQVEGfqYIjt3zdeHtAXLiO448XIMKGQ78IGOqUBJBMQ0I1Xa7rk7wiRjtdt8hIYNwXwuc31eYpqnxs7Y%2FfW4arOB6JzKI8qcqIW85uyOX8GQD9Ovc0QNkQNy8dlGfgmgVDZZSXKvKKlg87DIDbq5IYiIf1aObLMrju4Qr2IsBhayjQgF8CXzGHXMYwnmOyUd7EgHG82hnHUlu7My%2BuLw%2BUUrsILfvpVUkEoRi%2FbtCLLjY7%2BnH1Y7ADwjrH9ScF%2FUCD0&X-Amz-Signature=bd725cd4c1d824bb3615e866570f15ab3a8fbb2563ea72347c23aab056ee2127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
