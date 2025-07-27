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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=e85c4bf52399bcc57323da16142b92bffc667d9d763cc83f28253f0d879066d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=a7eff9302fe2f8e1d052c40ad22da5e8d0cf81997259fefbdc0cb2896f681913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=b49ba39523581ac30d58b7944b8a575beb41486667c1c60f5d4324a8b82eebcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JR2XL2U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEALiHfpqXYS9ZQ%2FNwKi1K3iDsv8By1N7FgZ33%2BpJaUnAiEAvY4cNy32CjoeeIjEHcE02KFmqhYwSVplBzUEens1G3gq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPzCoOaWiyT5OrNDLircA6XERwgk6gtAQ63mhRugMCI8paAAg8iq23qNP6A5tSV8v8eDE%2Ft0hhcwKDJfBZmpodHNme13hMtfj8MTD11wBERrfSdaqR4zWQcYMzZ973%2FaTBYfI5XyM8B2M4PRFXV4SvIwrGyFWP2tdjpQ5vNPSvittieAsW43qZjIdgjYzZvMgwdwENzG7nIYjAdHPqqU2jcT4TLswMDhMlwMbo7NIqeymIX1TLd8RU72dzLsDSceUJuCtLEPgXVF1uUrSK2s8btpG%2Ftwh2row1l3fK3vleJimnvWV1MQv6aiMuGRqygeMPjQX%2F6j8%2B6jHCWtTNzgaSNjXJtpYtDeH5NQttcyIkP0cORfeBsm99MSZak9ZtJpsLw4qrZQjW6AoDAWB%2BMEmCU%2BN9YAiO4mjB12SXB4M0wylbIbe7k3yyKL6CPa8YfbxuNbCmm2O5kELL4rlT1s6AJxLQCxEjUQP7g6XdWZCjr48529Gcg6rMr1DcQJ0AyypO8oUk9aZumny1BHYqWOzNdJ%2B%2FNTHRSn49fAGCgiW0rzIqZk1R51kXF9VhS0g2cwcy%2Fe9vnrC76A57ToZQS829FPbJaCe6pxg%2FCHzSHteUUFkZburTkOh8U1IrjY3geyKl0q5hYp4IrO4K5UMIW7lsQGOqUBfyx%2FEFD9%2Fd8cps0aNkYbuLTWRWy%2Ft0wZhlB9804ciWd5D59vcl6CyUXO43W77cgyUNIA%2Bc%2FBEEJlsHNsVP%2BA7eNi5DDhOVPEov01NYaTksI3I9f5Wo5xzI4WaGzWo8LS5qKGfEhPSnqVHycUZnHMfXpwa8qU3nVPFeT5hA%2B%2BnKCJX8w%2BmsTwHueE5TGLQlGuM00FJM0YXXhyP5m%2BJEwgZA1Nrr0n&X-Amz-Signature=e5e2e74bae17cda543a4773810372816cdc34621dbcb26758b0447248156c42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLADTD2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEohviopYnUeExZlbnPTIHCDaOUTYpd4XUlGwxGfnBzeAiEA3Bk6nrK%2FrP8p2h9%2FC8BBKK6BgYGP2tMKAJ%2BsihdjN18q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEoXwv%2FjsSo7a74w4SrcA%2BpE%2FNcY22qqWjMNiLo7MM7zqCQH5gywEj%2Bk3WG7tOMwsSQyfQHJyhnuGpMkRFD59WkKm%2B%2BLBLIkJojHBqLOXpBIeqgz%2FTwQvJuEVs6gVrVWxVRVpmRfnTp3O9rksA5DPVaD%2B%2BD4t3JfhAdH0eIaS9asm%2F%2BtEHhzzAKFAVs3%2B4y8yyBlUmtlbWDj1pNWkSQUwQwLZHY1wmAioy3sH5TsLqf49mkJlj8wSZQVV8fDWnhiCeV9BPvkPjT5ilZNbFSIS%2B68D1NUJVALmH0SMZooU6iXHbxdWlTSQbzUbR3VdsFmiDWDeq7IQz6TDToGtyDVgb9s9ERK8Nln17DP2jgD7rFICsEL4AUkcScBmv5BX741ZR4DYF98dR4OGAIs8gL%2BeszeoLjCM0gYno4%2BE6I0pCegMMeYH30crWR07qDcHPx%2Bs5nGVTofNfQvtP%2BShPUxkmPuXyTtsS2ayv7CUwvETEaRjRfRwzYMb32DZiWsxBlk9MZj2R8Yj%2FXM2HmvVWeH%2F5f3o8JgDRAgkZkAjJcn0jkt%2F%2B4ZeriEdUfUBxMOSPmQoF1lX0JrdBomQHAg8RUC2F6K8zU0rXdUeD6bdU27vcOMzDiIctkIELPIetT9Q5Oiv1d3%2B9GjfEugDp9%2BMM%2B6lsQGOqUBSLCf6Yqmt2MQal%2FvfYo88Eq5%2F0F81jMmSlQJyAfxTaQrvb%2Bcokan5Vs%2Bb0jLA%2B9AdBF%2BkhajbSDOBKpR52YtczYTEQ03sG%2F4IR2ZzOQttc7cb2xv7iD4gnuWkw%2BkkUDTXFQMVbnO521kHB8M9WXkYD%2B%2FmjF1fSkd172SX5uWcAvJFqU1iPyVzb9OMqOwbSwDXH7R5WuEcurY3nknJ5o4egPQysBw&X-Amz-Signature=78853e5cee603802dbb4dc057218ae8b2fd59343f64dbb67804d0a05dcadc6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=ca4d5b40a85ec8c20859ff382370fc515a2a9f94bf0805a7b996db24c213eb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
