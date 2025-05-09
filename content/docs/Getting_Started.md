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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLBUHNR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkhRRyDxQ8loylhWWECyUQBt7Pvy6xSNYFDpT4doVJKAiEAuDOvYIV%2FvmeLhvy6LomxsmT3ZUFBqsZ7zMFmFlLevYUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOl%2B6dXCgZOSCMMyCrcAzaP3uvveo%2FhB3BTIU8A1IQHz3ktFKVViRc44ZqtIKkpfQ5zs6v7YXerapELuNS3u7RReECHrSFBklSfkPofaXdC8MQB2nH6XehL9jkZBq2HIOHmdQZEgkAQ9Djk5WikqOiuen%2BS761%2By3cXfk5z%2FfOAqQ0rYZkQHP3YAu6VVktfFt7mAMeI%2FT4GM7I8TZvNahDr0tlYRe02eJ0aCl57Q0nCc6S6UIs33%2B3U2CLgtn0fmkHLuorc106bPvYU9GHY1drDDglfJbJ%2BC8VHnGvIiUHZhJGV58%2BsC3Dc02kC4BYgxbBbfTow40OBPMSHC8Xmpu4FXYFjuNzxsofH2MvMga%2Bow38TckUgsNxOvUqMRKYcj1%2BO2IjCBlM%2BxEvw6XYQfFB3Zq9RyGRxDIYpb4Tpsw7QI57CxCYSpwUOxyObu5C6ngFnCrTRr8z9P92JZPX8kwDdOdowFmq%2B%2BHeInfiQXyp1JppRujJbAX3ZIL1TL2Kol7GRRYZth7KL9jGlWdKaZ0PSf%2BVEHOfDmY%2FcTunK2t%2BVEjnLgPNnQYHXpq013XWDmsuNODXbjr2NCTPKYBk%2BpBYuESsbgvvUni%2B8Pwl%2B3Q3PF8y%2B%2F6pXZNUrFf0V1eb2rJORyOGT55ls9ZyvMOfV98AGOqUBvz64%2B9UN1JGdrl%2FCrmdSWBzfvoqwNLbUShl1LmAdgqNm4rkBMy2mtCMH2qhJjq9UuLbf2E1bUKFVPFChOAHOjZRLJLnL97gkOUuJ1qF4chV9IMCPfUtws78A4MIJNXyRvNWvoeIcMq6C%2FYefvA3zLlz9ZcczeUCWxFiXw1VKLhLyXF371gJ2qv2GMz1HL0IFsMcP9hEqosiExMHYvjkS%2BsUcPWrC&X-Amz-Signature=f12bdba1b050c0d56a220a11dbc031697182d107ca05588281909e6b3a6ee6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLBUHNR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkhRRyDxQ8loylhWWECyUQBt7Pvy6xSNYFDpT4doVJKAiEAuDOvYIV%2FvmeLhvy6LomxsmT3ZUFBqsZ7zMFmFlLevYUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOl%2B6dXCgZOSCMMyCrcAzaP3uvveo%2FhB3BTIU8A1IQHz3ktFKVViRc44ZqtIKkpfQ5zs6v7YXerapELuNS3u7RReECHrSFBklSfkPofaXdC8MQB2nH6XehL9jkZBq2HIOHmdQZEgkAQ9Djk5WikqOiuen%2BS761%2By3cXfk5z%2FfOAqQ0rYZkQHP3YAu6VVktfFt7mAMeI%2FT4GM7I8TZvNahDr0tlYRe02eJ0aCl57Q0nCc6S6UIs33%2B3U2CLgtn0fmkHLuorc106bPvYU9GHY1drDDglfJbJ%2BC8VHnGvIiUHZhJGV58%2BsC3Dc02kC4BYgxbBbfTow40OBPMSHC8Xmpu4FXYFjuNzxsofH2MvMga%2Bow38TckUgsNxOvUqMRKYcj1%2BO2IjCBlM%2BxEvw6XYQfFB3Zq9RyGRxDIYpb4Tpsw7QI57CxCYSpwUOxyObu5C6ngFnCrTRr8z9P92JZPX8kwDdOdowFmq%2B%2BHeInfiQXyp1JppRujJbAX3ZIL1TL2Kol7GRRYZth7KL9jGlWdKaZ0PSf%2BVEHOfDmY%2FcTunK2t%2BVEjnLgPNnQYHXpq013XWDmsuNODXbjr2NCTPKYBk%2BpBYuESsbgvvUni%2B8Pwl%2B3Q3PF8y%2B%2F6pXZNUrFf0V1eb2rJORyOGT55ls9ZyvMOfV98AGOqUBvz64%2B9UN1JGdrl%2FCrmdSWBzfvoqwNLbUShl1LmAdgqNm4rkBMy2mtCMH2qhJjq9UuLbf2E1bUKFVPFChOAHOjZRLJLnL97gkOUuJ1qF4chV9IMCPfUtws78A4MIJNXyRvNWvoeIcMq6C%2FYefvA3zLlz9ZcczeUCWxFiXw1VKLhLyXF371gJ2qv2GMz1HL0IFsMcP9hEqosiExMHYvjkS%2BsUcPWrC&X-Amz-Signature=8c5077c4542811557dc2d5f05e6120e68234063a2c8eb1f6cf341174c9bd95a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLBUHNR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkhRRyDxQ8loylhWWECyUQBt7Pvy6xSNYFDpT4doVJKAiEAuDOvYIV%2FvmeLhvy6LomxsmT3ZUFBqsZ7zMFmFlLevYUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOl%2B6dXCgZOSCMMyCrcAzaP3uvveo%2FhB3BTIU8A1IQHz3ktFKVViRc44ZqtIKkpfQ5zs6v7YXerapELuNS3u7RReECHrSFBklSfkPofaXdC8MQB2nH6XehL9jkZBq2HIOHmdQZEgkAQ9Djk5WikqOiuen%2BS761%2By3cXfk5z%2FfOAqQ0rYZkQHP3YAu6VVktfFt7mAMeI%2FT4GM7I8TZvNahDr0tlYRe02eJ0aCl57Q0nCc6S6UIs33%2B3U2CLgtn0fmkHLuorc106bPvYU9GHY1drDDglfJbJ%2BC8VHnGvIiUHZhJGV58%2BsC3Dc02kC4BYgxbBbfTow40OBPMSHC8Xmpu4FXYFjuNzxsofH2MvMga%2Bow38TckUgsNxOvUqMRKYcj1%2BO2IjCBlM%2BxEvw6XYQfFB3Zq9RyGRxDIYpb4Tpsw7QI57CxCYSpwUOxyObu5C6ngFnCrTRr8z9P92JZPX8kwDdOdowFmq%2B%2BHeInfiQXyp1JppRujJbAX3ZIL1TL2Kol7GRRYZth7KL9jGlWdKaZ0PSf%2BVEHOfDmY%2FcTunK2t%2BVEjnLgPNnQYHXpq013XWDmsuNODXbjr2NCTPKYBk%2BpBYuESsbgvvUni%2B8Pwl%2B3Q3PF8y%2B%2F6pXZNUrFf0V1eb2rJORyOGT55ls9ZyvMOfV98AGOqUBvz64%2B9UN1JGdrl%2FCrmdSWBzfvoqwNLbUShl1LmAdgqNm4rkBMy2mtCMH2qhJjq9UuLbf2E1bUKFVPFChOAHOjZRLJLnL97gkOUuJ1qF4chV9IMCPfUtws78A4MIJNXyRvNWvoeIcMq6C%2FYefvA3zLlz9ZcczeUCWxFiXw1VKLhLyXF371gJ2qv2GMz1HL0IFsMcP9hEqosiExMHYvjkS%2BsUcPWrC&X-Amz-Signature=746663ce082119eb69cd98c87791a7f98543f195c0bf6a6950aaa23173161d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQ7HYEP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3zkYhIMruHLPFQhMZMPdSFcdm%2BU2CZiVltA72PrHQFAiAzBbiTr0WmKTw6fxI%2FvhEMc%2FCsQLjNXkUk%2FVOKU6p8%2FSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERFo%2BJhTnripQGzXKtwDfSA1PceUMLS3BkazijycBI9DlHKBueiF5a6nsgjEdoNe3KWlU94E3urxvAdfxj22%2Fi4b9MjZ7fAT56EQsTABbIN3qIgLMIrxKUl9ue8Dll70sUK%2Fp2Gl3IywgJhF2AiAFth96vyhl%2FWzEY7k7eOV6lwudqetoTiOhF80RcFAcGmhj3qRK%2FTP1ZBqTHe37Qqjkox8m4aKUlvN%2FGlaMW7T3vir65utfZPqLObdBN6fEF%2BpirJpTcSllLYY2rL1y3vf8Y0wWG3uy3WdP%2F9xNpmmXUq%2FYViQzhmRp7SJMtecuF4t8uvNAjNFZKcKP5qHgycLqlyScVsnOfdgPNmO%2BJ0qXUWdxXrvdpUxcd5kpCkrYcJ3wlpcFdJNWYFaaZg7%2FZnDB88ODMcGCDfvURzMexGSfOyJ2TJFVYUY46iBiFijwHbXU7CGIL%2FrjiAuzniYiCTFtTB8YgkekuRlIEC3sMVVl%2Fcp5T4BwO9LmLFArRDRi0euVaOdlJYSxfzIMUcOaxb69a1UOrZY6wEJqhA0OCKogKkI%2F6u%2Fvf1nyp1zlw75WtPNKS6QDDLSw3suBuCaFv%2Bv3NW2eCIJgZ05PZCJMgo1dieUa7%2FioSQcz7m89JEFtSsPV%2FBnyQrzzzKLdpow59X3wAY6pgGHcy9KFmESNKVyjZX0L%2F4iMCH%2BoVUD%2F8m%2FEK%2B75dTnfPYZ8KTVIL2vDJpBG76WEQMr8UPNROKOcV67BotQ5%2F0nhiKdmiLhKkbT371P4axZbR2AcSQIA%2BFUGL%2BuCFCaJuV0eawS8xBPU0lWfhD1FCTL7Kg9R735ca1vax%2BAz%2BCrz%2FEy6mhVPTmU0fo4NF5wPLvnOzMu%2FtvngcdAJF4ZjF5zbOfuCYEc&X-Amz-Signature=6a37a71dcc9908bddd36194fed6eba7fc31ef78ddd00ca37695b79b756c0e15e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCWRQTMH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkhgN6Jr%2FttJk1M%2Fqf7SFQrXS3amwY%2Bd5AfI5BQxPliAiAJlKQlTSt4pnDbLjaRWp9G5s1N9oRvRukGFbhss0pj9CqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bj3J8%2Br2vYr2Ag1uKtwDG0pIiKs9umNF1gwJ3mJfWHt0CKmm2eDq8vV%2FLZ%2BNwk4TrPH3JANr2A%2BGeVLfkNdQeVs8FoFfW3ubVklm%2FrA6eMmvZ0ZhwbrUJwlw9Vqv9fvG5Tv2%2BOVGNDBsrTCaBlGNngfQ6TK0YLswLYNpapIJipjgQjRc7ajKR3oylptXte772VGjPmJkkpScAx4ya4alUw7in%2BEDzOBF32Bj8TrQ%2FXQwQHPFwB0nZcpzaaSofJsCwdU%2FTCJS7vJ9IRvBUqZnOwdhfgufMqIAGACtpBkydgUuYxnj4Eq0f03%2F%2Fq8us8v6uDue3G%2BdVlEvQHGIwbZYPbAEtfX8xv3BB8utaNeunEQFXhCsfMX1xNwwgB5ta8FTGw0yQuDoz0pecdQ%2BuJFsN5qL0S9vecLIj7DR9L9LMKcugzww7BRlM6%2BSDM5rXWWLUB%2FoaADE2PGpyttfzIRkhsIqT6kWB27smgR137gd%2BSZtqNio5lYslZdb%2B%2BrZyxuwiFDwjd27hk%2BbajHbphVS%2FaRnQwXfNxtfX5Xyf0RU9VLtTNFipWuXhAuLlSMga2Ezf5ri3ZRe4hDe2NLN40%2BOiCRKfpeihiStybQR4PU8sPRGhX3TsVi8x5tRpaFyOj7eG2NiIhKog5qIJ%2B0wnNX3wAY6pgH01%2BKag3jK%2F797ppYDv%2FblQVrVaTJ8mHNLfmFFtOEapYzmXU4dyvZJ3uiCjqI9FM%2Bje2Ok9nJ0pkQcOFc9z%2BQoCdl%2B2PTVNmX2svdriQkodG4E0Qc8dzBtHFOFBuEU6nl%2BIUClqpdnHRf%2F1fGsHnwz21bd0JjPc8SgTyPP%2B%2FB9NXjGszcrurNLrB0E3TA0Tdi9zYd6%2FnZZUH0og0M%2Br%2F1bNxRc%2Fra5&X-Amz-Signature=044fec5bae128c42a6a1a9454be2c594eeababf3b0a41bfb3174c1d7e45a4b21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLBUHNR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkhRRyDxQ8loylhWWECyUQBt7Pvy6xSNYFDpT4doVJKAiEAuDOvYIV%2FvmeLhvy6LomxsmT3ZUFBqsZ7zMFmFlLevYUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOl%2B6dXCgZOSCMMyCrcAzaP3uvveo%2FhB3BTIU8A1IQHz3ktFKVViRc44ZqtIKkpfQ5zs6v7YXerapELuNS3u7RReECHrSFBklSfkPofaXdC8MQB2nH6XehL9jkZBq2HIOHmdQZEgkAQ9Djk5WikqOiuen%2BS761%2By3cXfk5z%2FfOAqQ0rYZkQHP3YAu6VVktfFt7mAMeI%2FT4GM7I8TZvNahDr0tlYRe02eJ0aCl57Q0nCc6S6UIs33%2B3U2CLgtn0fmkHLuorc106bPvYU9GHY1drDDglfJbJ%2BC8VHnGvIiUHZhJGV58%2BsC3Dc02kC4BYgxbBbfTow40OBPMSHC8Xmpu4FXYFjuNzxsofH2MvMga%2Bow38TckUgsNxOvUqMRKYcj1%2BO2IjCBlM%2BxEvw6XYQfFB3Zq9RyGRxDIYpb4Tpsw7QI57CxCYSpwUOxyObu5C6ngFnCrTRr8z9P92JZPX8kwDdOdowFmq%2B%2BHeInfiQXyp1JppRujJbAX3ZIL1TL2Kol7GRRYZth7KL9jGlWdKaZ0PSf%2BVEHOfDmY%2FcTunK2t%2BVEjnLgPNnQYHXpq013XWDmsuNODXbjr2NCTPKYBk%2BpBYuESsbgvvUni%2B8Pwl%2B3Q3PF8y%2B%2F6pXZNUrFf0V1eb2rJORyOGT55ls9ZyvMOfV98AGOqUBvz64%2B9UN1JGdrl%2FCrmdSWBzfvoqwNLbUShl1LmAdgqNm4rkBMy2mtCMH2qhJjq9UuLbf2E1bUKFVPFChOAHOjZRLJLnL97gkOUuJ1qF4chV9IMCPfUtws78A4MIJNXyRvNWvoeIcMq6C%2FYefvA3zLlz9ZcczeUCWxFiXw1VKLhLyXF371gJ2qv2GMz1HL0IFsMcP9hEqosiExMHYvjkS%2BsUcPWrC&X-Amz-Signature=36d249edad912951ca844fc45cf57dba1e600e280fd8bf61b6f61047fa626f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
