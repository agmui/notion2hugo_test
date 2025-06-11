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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQVCO4X%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHRfMhveKGnCRZdrjQZ87maYt3kJBAqMgOHNEq6s6hnuAiEA9oFIYWWCcbFvKWNvZv%2FWbJfO7pfpcQg26PyoStFIBAcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLInYWJUaIiGkKWSdCrcAw%2FvqW3xjOYPm6LiP9jej7XxNvC27Uy3P9CN5w9ArX93odQCs%2Fj6ufCyBvq3JKNP3ueekQf7c9TiWqVD7TmBaUc%2Ft2Ya1FSCLXdzDyMKE%2BuIab80nVpvS4MjAQtiFysleGxPr5A3qKR9vhKutqBotekLqVPokKQVpCt41COoTFGSvUBA5Ohl3dlkkkRHx2EbQ1%2FgEXQLiGKridilhOk1qcwwEyue8dzcZ4cuJHEGT38NiUDFRC2RaL5IaamIVDq55wBRgd1%2FyYynimQalSIUlZH2l6D3YItQd0CnBRWvKvsJPZOGWxSShCATlKQIF%2FEiaYmZ0TCNRwF845e1XSEXbN2q0KZ3bcHbg%2BUBa4Y4DTg762e6s24jnmycWqHJl6nMFyWhX7elcyz6Ns%2FA7EQCcAPaxysnGNS0HSxTYbUZqnb3%2B%2Fu03yzhSFcD%2FaRfdU5RNPaNTz5Sr%2FqRTNFqCJc%2FEfQHViuu%2B5C2vbGuAwmOwb0H8I5wgh5AwDfjrNjD7zxKKvaeP%2F3wgmb92Zf84VG%2BXVy7F1neEI%2BZNW78CHydVaHJ9Chunfeq3bS9cUPFRkcZQPQdg5O45VxITBZHXDWuy6TxMOj0UtICTeMWgBqAizgzWE32YCmOpkmvihjyMLSap8IGOqUBzSSkBK0ucpgE6lsnEUX%2BHPjcYxppwQKFlYSaqsMXQRsu14z9H0%2FGf6%2Fgr5RS8JzgygpQ35gp2gElvu4jNGj2XFXhCWiqUpCRbHZ0uQRnGwtYb8prdcIZq9o6WHZKYk76l1sEAEuTDXGEP%2Bcr1EOV54M4XaCZSxgTC%2Fk%2Bmm5D%2Bcj%2FJ56q%2FpQYlPRHQb89ukFS%2FrVVIRyqD5zujp1MLNCPBQmuZs2Q&X-Amz-Signature=9bebe245524d6437b237ba1a5f657db541350fe0cf77454441a75a953e47b8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQVCO4X%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHRfMhveKGnCRZdrjQZ87maYt3kJBAqMgOHNEq6s6hnuAiEA9oFIYWWCcbFvKWNvZv%2FWbJfO7pfpcQg26PyoStFIBAcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLInYWJUaIiGkKWSdCrcAw%2FvqW3xjOYPm6LiP9jej7XxNvC27Uy3P9CN5w9ArX93odQCs%2Fj6ufCyBvq3JKNP3ueekQf7c9TiWqVD7TmBaUc%2Ft2Ya1FSCLXdzDyMKE%2BuIab80nVpvS4MjAQtiFysleGxPr5A3qKR9vhKutqBotekLqVPokKQVpCt41COoTFGSvUBA5Ohl3dlkkkRHx2EbQ1%2FgEXQLiGKridilhOk1qcwwEyue8dzcZ4cuJHEGT38NiUDFRC2RaL5IaamIVDq55wBRgd1%2FyYynimQalSIUlZH2l6D3YItQd0CnBRWvKvsJPZOGWxSShCATlKQIF%2FEiaYmZ0TCNRwF845e1XSEXbN2q0KZ3bcHbg%2BUBa4Y4DTg762e6s24jnmycWqHJl6nMFyWhX7elcyz6Ns%2FA7EQCcAPaxysnGNS0HSxTYbUZqnb3%2B%2Fu03yzhSFcD%2FaRfdU5RNPaNTz5Sr%2FqRTNFqCJc%2FEfQHViuu%2B5C2vbGuAwmOwb0H8I5wgh5AwDfjrNjD7zxKKvaeP%2F3wgmb92Zf84VG%2BXVy7F1neEI%2BZNW78CHydVaHJ9Chunfeq3bS9cUPFRkcZQPQdg5O45VxITBZHXDWuy6TxMOj0UtICTeMWgBqAizgzWE32YCmOpkmvihjyMLSap8IGOqUBzSSkBK0ucpgE6lsnEUX%2BHPjcYxppwQKFlYSaqsMXQRsu14z9H0%2FGf6%2Fgr5RS8JzgygpQ35gp2gElvu4jNGj2XFXhCWiqUpCRbHZ0uQRnGwtYb8prdcIZq9o6WHZKYk76l1sEAEuTDXGEP%2Bcr1EOV54M4XaCZSxgTC%2Fk%2Bmm5D%2Bcj%2FJ56q%2FpQYlPRHQb89ukFS%2FrVVIRyqD5zujp1MLNCPBQmuZs2Q&X-Amz-Signature=b30d161cf504496b21d4eb8d3063b66e92df2e37f0e15a5b9de932b5dee59d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQVCO4X%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHRfMhveKGnCRZdrjQZ87maYt3kJBAqMgOHNEq6s6hnuAiEA9oFIYWWCcbFvKWNvZv%2FWbJfO7pfpcQg26PyoStFIBAcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLInYWJUaIiGkKWSdCrcAw%2FvqW3xjOYPm6LiP9jej7XxNvC27Uy3P9CN5w9ArX93odQCs%2Fj6ufCyBvq3JKNP3ueekQf7c9TiWqVD7TmBaUc%2Ft2Ya1FSCLXdzDyMKE%2BuIab80nVpvS4MjAQtiFysleGxPr5A3qKR9vhKutqBotekLqVPokKQVpCt41COoTFGSvUBA5Ohl3dlkkkRHx2EbQ1%2FgEXQLiGKridilhOk1qcwwEyue8dzcZ4cuJHEGT38NiUDFRC2RaL5IaamIVDq55wBRgd1%2FyYynimQalSIUlZH2l6D3YItQd0CnBRWvKvsJPZOGWxSShCATlKQIF%2FEiaYmZ0TCNRwF845e1XSEXbN2q0KZ3bcHbg%2BUBa4Y4DTg762e6s24jnmycWqHJl6nMFyWhX7elcyz6Ns%2FA7EQCcAPaxysnGNS0HSxTYbUZqnb3%2B%2Fu03yzhSFcD%2FaRfdU5RNPaNTz5Sr%2FqRTNFqCJc%2FEfQHViuu%2B5C2vbGuAwmOwb0H8I5wgh5AwDfjrNjD7zxKKvaeP%2F3wgmb92Zf84VG%2BXVy7F1neEI%2BZNW78CHydVaHJ9Chunfeq3bS9cUPFRkcZQPQdg5O45VxITBZHXDWuy6TxMOj0UtICTeMWgBqAizgzWE32YCmOpkmvihjyMLSap8IGOqUBzSSkBK0ucpgE6lsnEUX%2BHPjcYxppwQKFlYSaqsMXQRsu14z9H0%2FGf6%2Fgr5RS8JzgygpQ35gp2gElvu4jNGj2XFXhCWiqUpCRbHZ0uQRnGwtYb8prdcIZq9o6WHZKYk76l1sEAEuTDXGEP%2Bcr1EOV54M4XaCZSxgTC%2Fk%2Bmm5D%2Bcj%2FJ56q%2FpQYlPRHQb89ukFS%2FrVVIRyqD5zujp1MLNCPBQmuZs2Q&X-Amz-Signature=31028f55e19e2af44e22541dad5c8fa97f79459eabf535d64ec06c19d21d5554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3SWWMF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDPLLImk9%2BUUIb2GDcO6wMp0N%2Bgrgl8DxcFQ6IqgRCZmAIgFMeko6HB7rsNnCcHn2nXgS%2FVQPswEiGCmZk8acErBm0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvz7bLvzu32QmcHICrcA3RK7gEqd5pnbGSq5FTlWL2Eaey0RyGw4zyMmMZLOLeLVViie0rJ72kXeetO3Aw%2F5mTiDihC3%2B%2F%2FN%2BpodLgleMMGAe09rLTsdq3n9b9Vr7ywu0aKtIWhgQeF7URIAYTA9K37EUilTrFrNb2rEjDUFIeQFyJQm11yihmC3wrtfSUlklHekwwV7DbXEV5MXyDovTVhGHVXXATGi7RPBBJEsTBhJnJkKKps97L1P59azNcwJGZkaGnB%2F0fTUc8HxOlaejQaa34msd1yZPAk7zOf5e5yVRarTuw8puijkFi7Q61xBJTa7yPpG4%2FZDB0S1R7G2ScMsBSLhqGxB6LE1SW6z4RHW%2Bz5DfhouYfXNhO6IcgBsRkvfSFYjKkQ1NNR%2FKyPUIVYSfjHmOp4zwnTJc4rg%2FPDt5lqieVJYjkWOWepBvVStp0KvN7piBQBG%2BA9bVhL619XtU0eYCkitBSGRIV7F5EUPoNZx06xTGddZ%2BFw3c4U5CjYnjieTfWDj907%2BkSFvHIq2j6W40H2W%2BE3evTeyzWOVgcoTmBsgOYqBnuuHRbJmbpZS2p5%2BQ%2BsQIZPdOsHSZHt5cV7CdJRv6%2FDmx9KzFQPXpwi%2FJMmpjZQald1QiyyPTB6VU5qvfF75pXNMKGap8IGOqUBH8d%2BJ3bg6PHRYl70THi9lggPXqV1FC5zm4fKlsVHafWRp%2F09ZYXbUC%2B3Zay0TBzRco9v11e4xy%2BPr4V%2FD5lM8a5tw1poQMZ93PGEN8dscohs0A%2B6r0oPhXzEKOmmtcsjmj9OneDIldHqZiGPhvoWJAKxujwDVDtOrV3TYS81RmCBlz%2FkDiGcj4ADmfe1zQSLExNCCcWDRSKSR%2FluSmJ7ZTC8mDcI&X-Amz-Signature=97a4a0575da6c703ff7c24522208980d6213de363a3f1d96db2ad55ac9e540f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAIX5TI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEAoYNrYmvLbIzsuwAmKm4U4%2Fn53IS0AePiCrSzRleS2AiEAznr4ggPj7644eq71z6YJaEUh0Sn63aBIOzNsqNMlxssqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWs1mLHVIxy5wVM3yrcA5xMdLHXp5YpnrFi%2F4GTELy5gi7AMs1J%2BJncydijEXUe5zae0BasdtKwol5wOAb%2FYoTUwPw0MbCxWBP2IfRnnVaCWKdg%2BnsJrMbyObYepcRSYh%2Bo9hG30avGUOQq1VIK3ycK4taz%2Fyy1Ld4bU5%2B%2BgBqGZ%2FYqaV1lxEuxrMZZl7SSjVu5vau4uujPCtYDJ52KKZubC5DN1l8BRwIzZOE7Q%2F4%2BJYgPXVYZn7N9fvNXgxM3Zur2HAR9cHWNnpSPWeWI9HauD%2FKGFu5mzbpWcvub52W%2F8Abgi8O1eMF%2Fi%2B0gXnmMVOAs3K22z9KjzsU5FffqiIBZkbi2lm6nQOxWTiGxa23fcEQ1qImO0tLA0vLhaT%2FYduu%2F60R5B3cQBRSN9LdcvEcnyf18yHc9TRarocYZjJRGY0alUEaiW9CNOqUzWwMxOmxqeodmydiQ0%2FIBeOTyzXpFnmn%2F726Zsr18c2b4Yaskk1Sp%2BILJ%2BzvNMVaiK%2F43WsbIroYDvKLHzxT8K%2Fqye9t6G8ZdJqZUrIz5zd6zTtxsVBc%2BJtzqhtSla6hqSUajulAcG2S%2FM3a8BsvRzpRqMMVAsZcD%2FCBOY8yYmXrU1nDNb%2Bhi36VR2CC202TJaWJhBy%2BYP5lngl0AXGMmMLCap8IGOqUBH2ILHh5hgfILJkmTQ1Hek%2BNk6X3922ZP4UMW%2BW6YYf34sCvRP%2BtHT3Ssp7aUDF0CkKjMrUdRDGJ%2FM98p8CBma2Gj7wP7%2FjqeJ6SMAS%2BdWehyup8Xf%2BwRmQgrZlFPmPJYPlW2I3ja7Q%2B3DKL7PJeTe6WODNf4gRf4U3XrAFwSAmkan34Ev7LKffi%2BWj1KZrUZTt4Ov4TCIe8N4sJOxrE8W93o7QGq&X-Amz-Signature=49741fe2d5b87e29b5ed55fea21dadf7a77da83458240c23d38fe889bc4dd79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQVCO4X%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHRfMhveKGnCRZdrjQZ87maYt3kJBAqMgOHNEq6s6hnuAiEA9oFIYWWCcbFvKWNvZv%2FWbJfO7pfpcQg26PyoStFIBAcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLInYWJUaIiGkKWSdCrcAw%2FvqW3xjOYPm6LiP9jej7XxNvC27Uy3P9CN5w9ArX93odQCs%2Fj6ufCyBvq3JKNP3ueekQf7c9TiWqVD7TmBaUc%2Ft2Ya1FSCLXdzDyMKE%2BuIab80nVpvS4MjAQtiFysleGxPr5A3qKR9vhKutqBotekLqVPokKQVpCt41COoTFGSvUBA5Ohl3dlkkkRHx2EbQ1%2FgEXQLiGKridilhOk1qcwwEyue8dzcZ4cuJHEGT38NiUDFRC2RaL5IaamIVDq55wBRgd1%2FyYynimQalSIUlZH2l6D3YItQd0CnBRWvKvsJPZOGWxSShCATlKQIF%2FEiaYmZ0TCNRwF845e1XSEXbN2q0KZ3bcHbg%2BUBa4Y4DTg762e6s24jnmycWqHJl6nMFyWhX7elcyz6Ns%2FA7EQCcAPaxysnGNS0HSxTYbUZqnb3%2B%2Fu03yzhSFcD%2FaRfdU5RNPaNTz5Sr%2FqRTNFqCJc%2FEfQHViuu%2B5C2vbGuAwmOwb0H8I5wgh5AwDfjrNjD7zxKKvaeP%2F3wgmb92Zf84VG%2BXVy7F1neEI%2BZNW78CHydVaHJ9Chunfeq3bS9cUPFRkcZQPQdg5O45VxITBZHXDWuy6TxMOj0UtICTeMWgBqAizgzWE32YCmOpkmvihjyMLSap8IGOqUBzSSkBK0ucpgE6lsnEUX%2BHPjcYxppwQKFlYSaqsMXQRsu14z9H0%2FGf6%2Fgr5RS8JzgygpQ35gp2gElvu4jNGj2XFXhCWiqUpCRbHZ0uQRnGwtYb8prdcIZq9o6WHZKYk76l1sEAEuTDXGEP%2Bcr1EOV54M4XaCZSxgTC%2Fk%2Bmm5D%2Bcj%2FJ56q%2FpQYlPRHQb89ukFS%2FrVVIRyqD5zujp1MLNCPBQmuZs2Q&X-Amz-Signature=23184a8a6a70a95f8ca2b140edf882a499bac2b7c39a42c08c20af9dc635184d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
