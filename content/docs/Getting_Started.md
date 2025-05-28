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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77ZNE2U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zPLsRmLp7zYZVdM2HLD9IgXFcWVaVGAlcIebBmObgwIhAIe03zTZL3kJTPomohaJ7ZxrpYIb4X7e4ZBVaIGIAWYwKv8DCHgQABoMNjM3NDIzMTgzODA1IgyPVxUt5uylvvjtv%2Bcq3APvicnznZNsjipb722SKFhUmjdk8ObHcA4C1dAyGN0QAYnr3LLk4zO7usPzSSEUJKGpnmUTPiOEIumTqmne%2BNngU5uvaXSFYFjV5dgREQlbimNMndrJ1pfBL1WQ2P%2B%2F9MZEcJV1wKNi7VEqaVjhlP3HJrfENXrcEya07LxftuW2LN%2BjZKYRbxA42frXxtYqn7fEfMN7LmJVpYDS3Z5%2FI2Y8prVvqklKNt0Lt%2FY0pUWZEEqcv%2FaHlVjby%2BzwHzEFgu2po1zl5HtJN9eJ6iCCxdq4%2FtR5zUkcsuKXcT%2FjzC5%2B3MEZjCxVi2a09rHAtotRQsazd1IzdFbGBbShsdraszy7IqLCx6HawMxOvA7UvBiml9E6zUcTfpVDtvqMBrsjWKBKqDEstigymu0Aa40WLaNGGEGVVR8cIkZs%2FKAk32vmOYQ3CApTphyBcGzh8lomL8lF5amNASCwJqXki%2BZlF0UjezxwzXCAnIqVtq1fjgiZaF3Atx8UlF3KhLatsDzOBdk2ulgCFQjHGxE1RjppinX%2F3s5vDWEYSYCRoo0yOcbyoeSXQvnM9EqCsuPJ7%2FxHSgFAnTZty1JiC4V8rcoOCCkwjf5K0gPjjTF9zlxEdMCRQ%2FCSRIpwxa5NPyIFWzDcxdzBBjqkAZQDOlnZuDK7lPyK3P8blBNuAGkF4DB9OuS1O%2FlfNhH7wKzTcZvTDA%2BHuZEtWjB5quHb8SMwaU7wchgMDu5lvQnp6UB3QbhsO3maUrPBPcu97NgWW0DE8H1rbvgxzuTlIkVUNvAFz4MhduTxzZyzZqlMWYrlluXr%2FZ9NL9iYk6frz5LXe9cfYwp%2BLrsm8zL2mRfPRhgAkp8kyXR9RAVkrE%2FKTnot&X-Amz-Signature=ed5e28ef6847759ff98b58f81badafbdb15c37810ad181f9ff83dab621cf2637&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77ZNE2U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zPLsRmLp7zYZVdM2HLD9IgXFcWVaVGAlcIebBmObgwIhAIe03zTZL3kJTPomohaJ7ZxrpYIb4X7e4ZBVaIGIAWYwKv8DCHgQABoMNjM3NDIzMTgzODA1IgyPVxUt5uylvvjtv%2Bcq3APvicnznZNsjipb722SKFhUmjdk8ObHcA4C1dAyGN0QAYnr3LLk4zO7usPzSSEUJKGpnmUTPiOEIumTqmne%2BNngU5uvaXSFYFjV5dgREQlbimNMndrJ1pfBL1WQ2P%2B%2F9MZEcJV1wKNi7VEqaVjhlP3HJrfENXrcEya07LxftuW2LN%2BjZKYRbxA42frXxtYqn7fEfMN7LmJVpYDS3Z5%2FI2Y8prVvqklKNt0Lt%2FY0pUWZEEqcv%2FaHlVjby%2BzwHzEFgu2po1zl5HtJN9eJ6iCCxdq4%2FtR5zUkcsuKXcT%2FjzC5%2B3MEZjCxVi2a09rHAtotRQsazd1IzdFbGBbShsdraszy7IqLCx6HawMxOvA7UvBiml9E6zUcTfpVDtvqMBrsjWKBKqDEstigymu0Aa40WLaNGGEGVVR8cIkZs%2FKAk32vmOYQ3CApTphyBcGzh8lomL8lF5amNASCwJqXki%2BZlF0UjezxwzXCAnIqVtq1fjgiZaF3Atx8UlF3KhLatsDzOBdk2ulgCFQjHGxE1RjppinX%2F3s5vDWEYSYCRoo0yOcbyoeSXQvnM9EqCsuPJ7%2FxHSgFAnTZty1JiC4V8rcoOCCkwjf5K0gPjjTF9zlxEdMCRQ%2FCSRIpwxa5NPyIFWzDcxdzBBjqkAZQDOlnZuDK7lPyK3P8blBNuAGkF4DB9OuS1O%2FlfNhH7wKzTcZvTDA%2BHuZEtWjB5quHb8SMwaU7wchgMDu5lvQnp6UB3QbhsO3maUrPBPcu97NgWW0DE8H1rbvgxzuTlIkVUNvAFz4MhduTxzZyzZqlMWYrlluXr%2FZ9NL9iYk6frz5LXe9cfYwp%2BLrsm8zL2mRfPRhgAkp8kyXR9RAVkrE%2FKTnot&X-Amz-Signature=727b845d65e2665b72e01e16597cc0c050b0d221bd4edabce17a636fbc2cd15e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77ZNE2U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zPLsRmLp7zYZVdM2HLD9IgXFcWVaVGAlcIebBmObgwIhAIe03zTZL3kJTPomohaJ7ZxrpYIb4X7e4ZBVaIGIAWYwKv8DCHgQABoMNjM3NDIzMTgzODA1IgyPVxUt5uylvvjtv%2Bcq3APvicnznZNsjipb722SKFhUmjdk8ObHcA4C1dAyGN0QAYnr3LLk4zO7usPzSSEUJKGpnmUTPiOEIumTqmne%2BNngU5uvaXSFYFjV5dgREQlbimNMndrJ1pfBL1WQ2P%2B%2F9MZEcJV1wKNi7VEqaVjhlP3HJrfENXrcEya07LxftuW2LN%2BjZKYRbxA42frXxtYqn7fEfMN7LmJVpYDS3Z5%2FI2Y8prVvqklKNt0Lt%2FY0pUWZEEqcv%2FaHlVjby%2BzwHzEFgu2po1zl5HtJN9eJ6iCCxdq4%2FtR5zUkcsuKXcT%2FjzC5%2B3MEZjCxVi2a09rHAtotRQsazd1IzdFbGBbShsdraszy7IqLCx6HawMxOvA7UvBiml9E6zUcTfpVDtvqMBrsjWKBKqDEstigymu0Aa40WLaNGGEGVVR8cIkZs%2FKAk32vmOYQ3CApTphyBcGzh8lomL8lF5amNASCwJqXki%2BZlF0UjezxwzXCAnIqVtq1fjgiZaF3Atx8UlF3KhLatsDzOBdk2ulgCFQjHGxE1RjppinX%2F3s5vDWEYSYCRoo0yOcbyoeSXQvnM9EqCsuPJ7%2FxHSgFAnTZty1JiC4V8rcoOCCkwjf5K0gPjjTF9zlxEdMCRQ%2FCSRIpwxa5NPyIFWzDcxdzBBjqkAZQDOlnZuDK7lPyK3P8blBNuAGkF4DB9OuS1O%2FlfNhH7wKzTcZvTDA%2BHuZEtWjB5quHb8SMwaU7wchgMDu5lvQnp6UB3QbhsO3maUrPBPcu97NgWW0DE8H1rbvgxzuTlIkVUNvAFz4MhduTxzZyzZqlMWYrlluXr%2FZ9NL9iYk6frz5LXe9cfYwp%2BLrsm8zL2mRfPRhgAkp8kyXR9RAVkrE%2FKTnot&X-Amz-Signature=6b2f889aaa360f7d838ff18bd3dc01d7d7bc08f9fa2f4bbe9eb7a6b28ff33719&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJU3IQJ3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9JG0cklWT2eIT3fI9R7qfPKatl%2F9h3I5Q91VayaChswIgRKovzw%2FQa0iiSsrs4IqDyWIOeBtSd%2BZ6YHPeZ5Nls3Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPr3mxm7ZL%2Br3lSuoCrcAwlV3u4EvThfqY%2FxBXUhzgSqFQwIVjqk2djvqepgITO38JZ7V68YsNohSxlePpBCOj7C2BpEyz8KCz7PmwtmCGov%2FJNzQtVYzsLLs6pU%2BKOMaOkdCr6Q%2FsIxBzOyB48AIDXvhiqL79Zo4YNdgNPp9IKdqJaYBCV0fEfNhNv6M2B6fhXP235gwoV%2FAIUkPwAlpT3Miumh6gV5AAacP5RyWUgQr2NIlLa1G3J4EOJG%2BiL6ucHFZeCM%2Fy8GPwRFvH1X%2FqSEXqEzGaRV8ZufKBpsavsbDDucE5pmLnhFHwa7jNyIqiyJ8x9J05ab3GXbDUT63Yf9Wep6vIs1fNSRJHKQZEAbdrnpe35z1rrrxDpeKKEnrd6D%2Fxihfo2cJYeKH%2FHBU%2BFJ3SD0uZFeEG1JEzZZ7j9O0IlPmevlIseiKaFi%2BZQ0yx8S1g%2F2baMeG9VfD0%2FjUSH%2BTMlUsIAMnHD8SVvwHX%2BC36k57fdaS3NsxnYep9rEgo5W5eAXoBcgi3e9RGScVQftc1irW54kiWRYLn02BraDuXm0QuvWCK7G%2B%2BrOelpexXmFHID2%2BD5xHKsNYysRANWWAGEYNZ79ZatRaY1bRrI8FipuT%2F5hwebSoEFjk4Xw5Qidy6KjpKjLLjP2MP%2FF3MEGOqUBPjvSjSp%2B%2F2GhjEIRRKkqVMNhxjZTDOd90LHDJZNcy1tfiapY3ilYxuiRfV%2Bla5hqEMkunwe0AU73edxczB2EG7Oo7%2FbGzwqu7RwaWcthNtAahwQwGydWR110x2ia%2BhT%2B8UCsz4Guk3BX%2FZJXGpI5DsdmRfa5HxsfRn5mzbu%2FOTmMKg1eSvtLsMObKNgrxXtE8O0H0hx5pTwP5bkaUQYrchjWldnd&X-Amz-Signature=8ff4d0b27009ad2cda60b892e5e6b25836fa8d1a7246e719f3059f54cd6d3a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZVNPWN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwDg9Ltb8KgZ7f1aYk%2BnQf4Hz8er27beiwlFmLtAJ6rgIgdoiXQnk2ZXaIKdJz79Q6fG%2Bk5He4FoW%2BO56sDVCPEX4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFEXyrn0%2BpFpoAmaCSrcAypYcEw%2BFNW4IxF60%2BtNXenV8W%2BBeMKqmsoaaSW0O4JlWTvd1uNp9yzHmG8%2BiHalr6AcfmEhtfTnjfuGX2%2BFlIYzn0A0FLGnyyWJwtq4mB8jLyFFjd4XjfaStQ4Fak%2BdNgZsKzRPs5zIaSt%2FnPiu1Q2Wd0fvqp9KfAYcrFL7z0Is5%2BtxrEdtkYu4KBGsmvHtLipc5NK5ENhtu3Ct6VnfCyvHR3p9sMBWyQUjyDOlpo%2F4eDd5FMh4oVKnU%2Fj6OEFHnlOfjH5lPDmWti94FK%2FEZnuVctMhL0Lgd5qTzbEGgRZZFAyYzem3RafVzq4AyESELrqsp6n1JGaOEc9yn02RQMEY2415SFJs%2BYehE493a0K%2FbSSMvy0ef4FX4Jxw26Kio1K2N%2BwADOzwvXyZHMs85%2BcCbM8NsBBAuyLmBUZrq04rWaXx2awg9UY597H%2BGnOiQrtrO6DiZYr2hC0kZGXXMi04oMdzEmwnnFaBlkwYiSNYqhwzYFLtTUyhIVgwcef0DLI9Wa8r3tkooyoVY%2Bl0eltrvbmuPc%2Bq4i5z7G%2BMkeIDxkfH4SZM4NgOlvTDKtQVixVLLAN3MoG9gw0R8IiocZXumAuAaYU0XfVGfq6yKafZvTtbp1BakjQY9K8rMPXF3MEGOqUB%2BeKwyl7QPT7xvIiwXUd1h3qWnram0YLbWJv0n9hmaOSbAXDBmkGDZGICuD4R0DXO9Ql6Udescr99xxHN8j9mcqOu56rO45NgDBd30R1PkVFWzc1ppgvdgLpnT6DA%2FAhmzAtNXGn%2F6r1MalR3mmLfXkf21xGFNnEhk%2FZBqkg9Rg1M6RRVxbxzKEDzgrh4VmJEkZd3%2FaxrSLmZMxirF23CQV9u60ZP&X-Amz-Signature=2c068bbeadfd675c9e89a3ad1525abe6d850b18ca0a70ceb5d266d3e08f45af3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77ZNE2U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zPLsRmLp7zYZVdM2HLD9IgXFcWVaVGAlcIebBmObgwIhAIe03zTZL3kJTPomohaJ7ZxrpYIb4X7e4ZBVaIGIAWYwKv8DCHgQABoMNjM3NDIzMTgzODA1IgyPVxUt5uylvvjtv%2Bcq3APvicnznZNsjipb722SKFhUmjdk8ObHcA4C1dAyGN0QAYnr3LLk4zO7usPzSSEUJKGpnmUTPiOEIumTqmne%2BNngU5uvaXSFYFjV5dgREQlbimNMndrJ1pfBL1WQ2P%2B%2F9MZEcJV1wKNi7VEqaVjhlP3HJrfENXrcEya07LxftuW2LN%2BjZKYRbxA42frXxtYqn7fEfMN7LmJVpYDS3Z5%2FI2Y8prVvqklKNt0Lt%2FY0pUWZEEqcv%2FaHlVjby%2BzwHzEFgu2po1zl5HtJN9eJ6iCCxdq4%2FtR5zUkcsuKXcT%2FjzC5%2B3MEZjCxVi2a09rHAtotRQsazd1IzdFbGBbShsdraszy7IqLCx6HawMxOvA7UvBiml9E6zUcTfpVDtvqMBrsjWKBKqDEstigymu0Aa40WLaNGGEGVVR8cIkZs%2FKAk32vmOYQ3CApTphyBcGzh8lomL8lF5amNASCwJqXki%2BZlF0UjezxwzXCAnIqVtq1fjgiZaF3Atx8UlF3KhLatsDzOBdk2ulgCFQjHGxE1RjppinX%2F3s5vDWEYSYCRoo0yOcbyoeSXQvnM9EqCsuPJ7%2FxHSgFAnTZty1JiC4V8rcoOCCkwjf5K0gPjjTF9zlxEdMCRQ%2FCSRIpwxa5NPyIFWzDcxdzBBjqkAZQDOlnZuDK7lPyK3P8blBNuAGkF4DB9OuS1O%2FlfNhH7wKzTcZvTDA%2BHuZEtWjB5quHb8SMwaU7wchgMDu5lvQnp6UB3QbhsO3maUrPBPcu97NgWW0DE8H1rbvgxzuTlIkVUNvAFz4MhduTxzZyzZqlMWYrlluXr%2FZ9NL9iYk6frz5LXe9cfYwp%2BLrsm8zL2mRfPRhgAkp8kyXR9RAVkrE%2FKTnot&X-Amz-Signature=03a69b7c9a29de4dabb03a7c63c91eecf14f9862377ae8505741dde0a2400cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
