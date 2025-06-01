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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOYTZMJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDvsBFvbkLapzKBq7VOVsRUkqUSkiB70v9APdN51P1atgIhAKXY6WOm84I%2BhpgKO2IM2eXS3QOOW257G3BYdKbNBm0SKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfzVRueHZcqfoOj3wq3AO7Guy1rdMBDfVVOZibhN9c9wX241tebm8XzuC5qkLiwIxBOvJpWsQyq94vBDDj4ZBc2MJNYRI2hVWEOTu6YtXt7GA6YTWVFUnLL1UMqxWZI2lccDqBVGOJUuR4yyQf0m9BZ2lX%2BUnPGPld1Oej%2BQW61pApvC3JUGKeRckV0R%2BZ9wn%2BRxC2eSUgy%2BI31FnjVCwyG37NMnLxqdoWrkc531%2BD4GDnPYB%2BhWc4upqWgzBSW9JGUV2jr%2F967Th8ba2a3yLATq6j8j8I61Asm56R8Xwm7PovspRs15YzRpEnj5rd1lh3jCBbqMBMCtRAJzSFHO21oFGkiLSBQkM6jU0KsjjJuB%2FDCGJygdkntfHDmVGJqpK5zuKRn5nEYYE%2BA3dr04XbYe%2F0chYxBwIcGMcQl4IQkcki0P%2BF6yQMEKIhTpf5hT8GPDeicSZygGZh%2BYES7MK%2FISWLskVz6LVtbiMJ%2Fek9HrMacqQ23vYmHOtjxisn72pZNFnTtEnGWFvshl3%2B2Jgt%2BCgQvalop6mRfX%2B64knHI7ZrqIXLUByXYxaGMrWOjBOwTeXLIXpedTkYKNlf1gCxVd%2B08DnhcBfIKK0eoQA0YAkJl9Ig8AoDjpiyfdLcBtyn%2FEWNtMtqFnVBdjCw3%2FDBBjqkAdOkMtMrqHAqv%2FWe05MX9d3mg5Ripd0Qu3rLe8THOo23y9dz9Mn80rlWxT9GUWIKcr3xkuyhxjF%2BKds2K%2Bvy1OS%2B%2Bpk8GqFAHDkvNhB%2FrfeUhyGjbi4rQF8w0h%2B6oZIdDlGp7FWIktyacc39R%2FahYL7uX7aaLaOUhlOz1vNV96Fnn6gqVFhunm0Y1VO5oaPAbmx%2BCbJX9o02fSCLm5TjIq%2FCPWmn&X-Amz-Signature=0bf6978b23530281130a959129846e7c353112933768b18da982f05d07a4c506&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOYTZMJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDvsBFvbkLapzKBq7VOVsRUkqUSkiB70v9APdN51P1atgIhAKXY6WOm84I%2BhpgKO2IM2eXS3QOOW257G3BYdKbNBm0SKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfzVRueHZcqfoOj3wq3AO7Guy1rdMBDfVVOZibhN9c9wX241tebm8XzuC5qkLiwIxBOvJpWsQyq94vBDDj4ZBc2MJNYRI2hVWEOTu6YtXt7GA6YTWVFUnLL1UMqxWZI2lccDqBVGOJUuR4yyQf0m9BZ2lX%2BUnPGPld1Oej%2BQW61pApvC3JUGKeRckV0R%2BZ9wn%2BRxC2eSUgy%2BI31FnjVCwyG37NMnLxqdoWrkc531%2BD4GDnPYB%2BhWc4upqWgzBSW9JGUV2jr%2F967Th8ba2a3yLATq6j8j8I61Asm56R8Xwm7PovspRs15YzRpEnj5rd1lh3jCBbqMBMCtRAJzSFHO21oFGkiLSBQkM6jU0KsjjJuB%2FDCGJygdkntfHDmVGJqpK5zuKRn5nEYYE%2BA3dr04XbYe%2F0chYxBwIcGMcQl4IQkcki0P%2BF6yQMEKIhTpf5hT8GPDeicSZygGZh%2BYES7MK%2FISWLskVz6LVtbiMJ%2Fek9HrMacqQ23vYmHOtjxisn72pZNFnTtEnGWFvshl3%2B2Jgt%2BCgQvalop6mRfX%2B64knHI7ZrqIXLUByXYxaGMrWOjBOwTeXLIXpedTkYKNlf1gCxVd%2B08DnhcBfIKK0eoQA0YAkJl9Ig8AoDjpiyfdLcBtyn%2FEWNtMtqFnVBdjCw3%2FDBBjqkAdOkMtMrqHAqv%2FWe05MX9d3mg5Ripd0Qu3rLe8THOo23y9dz9Mn80rlWxT9GUWIKcr3xkuyhxjF%2BKds2K%2Bvy1OS%2B%2Bpk8GqFAHDkvNhB%2FrfeUhyGjbi4rQF8w0h%2B6oZIdDlGp7FWIktyacc39R%2FahYL7uX7aaLaOUhlOz1vNV96Fnn6gqVFhunm0Y1VO5oaPAbmx%2BCbJX9o02fSCLm5TjIq%2FCPWmn&X-Amz-Signature=e29c37b42b8c05b6ef283f26e7ac64d5cb45a8ffd73e91f593ce0ac9bc230a84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOYTZMJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDvsBFvbkLapzKBq7VOVsRUkqUSkiB70v9APdN51P1atgIhAKXY6WOm84I%2BhpgKO2IM2eXS3QOOW257G3BYdKbNBm0SKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfzVRueHZcqfoOj3wq3AO7Guy1rdMBDfVVOZibhN9c9wX241tebm8XzuC5qkLiwIxBOvJpWsQyq94vBDDj4ZBc2MJNYRI2hVWEOTu6YtXt7GA6YTWVFUnLL1UMqxWZI2lccDqBVGOJUuR4yyQf0m9BZ2lX%2BUnPGPld1Oej%2BQW61pApvC3JUGKeRckV0R%2BZ9wn%2BRxC2eSUgy%2BI31FnjVCwyG37NMnLxqdoWrkc531%2BD4GDnPYB%2BhWc4upqWgzBSW9JGUV2jr%2F967Th8ba2a3yLATq6j8j8I61Asm56R8Xwm7PovspRs15YzRpEnj5rd1lh3jCBbqMBMCtRAJzSFHO21oFGkiLSBQkM6jU0KsjjJuB%2FDCGJygdkntfHDmVGJqpK5zuKRn5nEYYE%2BA3dr04XbYe%2F0chYxBwIcGMcQl4IQkcki0P%2BF6yQMEKIhTpf5hT8GPDeicSZygGZh%2BYES7MK%2FISWLskVz6LVtbiMJ%2Fek9HrMacqQ23vYmHOtjxisn72pZNFnTtEnGWFvshl3%2B2Jgt%2BCgQvalop6mRfX%2B64knHI7ZrqIXLUByXYxaGMrWOjBOwTeXLIXpedTkYKNlf1gCxVd%2B08DnhcBfIKK0eoQA0YAkJl9Ig8AoDjpiyfdLcBtyn%2FEWNtMtqFnVBdjCw3%2FDBBjqkAdOkMtMrqHAqv%2FWe05MX9d3mg5Ripd0Qu3rLe8THOo23y9dz9Mn80rlWxT9GUWIKcr3xkuyhxjF%2BKds2K%2Bvy1OS%2B%2Bpk8GqFAHDkvNhB%2FrfeUhyGjbi4rQF8w0h%2B6oZIdDlGp7FWIktyacc39R%2FahYL7uX7aaLaOUhlOz1vNV96Fnn6gqVFhunm0Y1VO5oaPAbmx%2BCbJX9o02fSCLm5TjIq%2FCPWmn&X-Amz-Signature=f66d9c71327134f8b3712d4ca7ccff119748eb59d44547683a278666ee133f69&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7ZYAO5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCID2sI1GaLQrghya0WsOiLTQBjE%2BFL7qvKEp5RPNfdmppAiEAs79q0fAPauLolHdS9V9ZxuhEavM4ichPZCM24tgrxsYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2fdQ5CzyAfEtHFRSrcA4jiYSFul8VeKTImjnVPw%2BzWwnnjm7SGLMo3AtjGbayE%2BB8ZntEq2fWWiHMk%2FmGwKFMKhjwscTJtbQzu%2BCtdS4tfdExUYacChEWzkihTl9i0Y3SwEEGd2KmqcpA9kH7rrllgFBMKdvJScUPXlQqnyIz8ROh%2FnwODDPEKdWmstEM%2FmgzNCm%2BVwAagep764872Hwfakc%2BGgWjJtNlprkp%2F%2Bjq6mu0WmDD%2BBYbw0XZCrQRuTZi8AcABqBSebwPi4TpHmfQm6cov%2FJrdSo%2FfUQPfyw%2FE8Nrh5ASdcA89A8SaC6qoFPu061Tt1092FZsHC3aH6S43kjAsp%2BBVDDHddRnk92NDzs4Dd2lcxfwLIRujzssqYeKrmCvnOk%2Fpc7ibWMz1feFkBmSJoH1I26twhl7jnH2SR%2FfCLn7dGK3K%2FrELChvtKCv9yQiO5VCc0MtTq6bNNb8oVwjGmznA6Ewm%2BlKMLajCjgnMqDH2PyXQSNIs%2F8CfN%2FDgUJQfyq8aCEdAkbZC3IFewHzsNHoUSbme7r%2F4Ia5rwDsiLVhM%2BJd4vHd%2FTz16Txml49AmhwZmHkqjes%2FdkF06860glSJSfOK69ct4VuAb3bG7n50SKtV0hrqKh8XjH%2Bgz9Bh3bAwN6jdxMMDf8MEGOqUBqzUpiuQAkxBISSIP%2BEydAQnIxWheHib4Boa7mPkHNVESOrRYqx4wX%2BcFzGA%2BxjeOh7wEwrvrKTU4ohXJaQ8YAs2IkaxNoRNV75whwGMDd%2FbiLCeT4wSPachTV59Ff1PxBtZDc1o8er4%2BXRLE%2B8nEQgiGPN9lrlaOIIZvBXBQgMZqr%2FExmCN4c0%2BjhOXJfCZZJiv4DOKa3QTmBqG4VgTaQnGMYoT6&X-Amz-Signature=bac74d9e4145690a4e87b302b429dc73de5a2f49f3e23dc51e5e0d7f0d34a8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U27D7QQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBcZe%2B%2BCzd56DNH1PfPsYDmAReJ5ZlD1jr5ZjWIbbNprAiAeKPOYeO7eZVI6AqelXny6AGRQctEVycAeEHftSBiDESqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvz3v9%2F5eflvM4OKKtwDTJu6hPNpR%2B0uPQeMYbp00HyFw9fNdcytFrdzXZJ0ldcb%2F3hrNPuMV9E7mykjB7sGAH1AnO9f2abA6zekpo%2BD2QonW56LQ4KA3zvQHzbplbjUL1halmcehvMhN%2Fdb%2FIU7sqfIJK4ttVV5avFeZ7iyZTHLBzZWgC10%2FMOTqijeC6L16XXJkDM8TQfoGsrA4bjrA60bMYnyaAUv69bkH1WQCwDedrTgEzTwpV53RyGTyCBtyq7HlrsnB8ivJimLO7UMwubVVnRMDNXVYwPCFH7HvjFaaoR%2F%2B9Ne2Y1153vbdwh8jghfx0yMuehQSJo%2BhWImsIIKQQpIHJQYSifJh%2B1Nu6vPRFv66Vb4YkIbkpAruS0z%2FwZKV7vj06DkYRO1N8hNXeZEPoXCGC13b6NtRN9fePLQN0igqhXRjSMiVVCwimIXqJJMYfo8KiAzfH%2BcPzQp3rdpj6R%2F0xD6GjpGwOk8T6OTew%2BpjpfNzrnMHcHuEf895pRuOpWqZZbqEBZoRnBEnaEds78uHjoeEyV6Fci0vvMBEZH%2BFHTufKDuBl581nTLwWfl%2F3J997Wzk9j9ITa3p%2F%2Bmd1IakjNhYwBIpIa%2BXHZRiGrH8OXecMZL5TqOgJwgpyMC5oC8O%2B1%2FpZEw2bnxwQY6pgG2NS4k6CkLd1bAHt9BL67AtU4UBjXYUr1BGCeMA%2FJBtuOUU9%2FGJH2%2Be64JDXxdYjx%2FvpLqj1F%2Bg2WAy%2BEthzp6vSydG4PsltA5UehXBWc7GB2hvvbTuXvMEY5fB4EBsJdMfqZ6TuS0n2k0c6clYQMMj%2FuOc%2FYE%2By1JYYKPpK5QqWjwu%2F0gw9xhcZxCS1oNtFcnMf64gOwFmX3mKtyk%2FukTfmvyDwSH&X-Amz-Signature=cc807ff1a21516e05897ac9107a82871c794caeab6a8a6497e399b50c3514535&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOYTZMJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDvsBFvbkLapzKBq7VOVsRUkqUSkiB70v9APdN51P1atgIhAKXY6WOm84I%2BhpgKO2IM2eXS3QOOW257G3BYdKbNBm0SKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfzVRueHZcqfoOj3wq3AO7Guy1rdMBDfVVOZibhN9c9wX241tebm8XzuC5qkLiwIxBOvJpWsQyq94vBDDj4ZBc2MJNYRI2hVWEOTu6YtXt7GA6YTWVFUnLL1UMqxWZI2lccDqBVGOJUuR4yyQf0m9BZ2lX%2BUnPGPld1Oej%2BQW61pApvC3JUGKeRckV0R%2BZ9wn%2BRxC2eSUgy%2BI31FnjVCwyG37NMnLxqdoWrkc531%2BD4GDnPYB%2BhWc4upqWgzBSW9JGUV2jr%2F967Th8ba2a3yLATq6j8j8I61Asm56R8Xwm7PovspRs15YzRpEnj5rd1lh3jCBbqMBMCtRAJzSFHO21oFGkiLSBQkM6jU0KsjjJuB%2FDCGJygdkntfHDmVGJqpK5zuKRn5nEYYE%2BA3dr04XbYe%2F0chYxBwIcGMcQl4IQkcki0P%2BF6yQMEKIhTpf5hT8GPDeicSZygGZh%2BYES7MK%2FISWLskVz6LVtbiMJ%2Fek9HrMacqQ23vYmHOtjxisn72pZNFnTtEnGWFvshl3%2B2Jgt%2BCgQvalop6mRfX%2B64knHI7ZrqIXLUByXYxaGMrWOjBOwTeXLIXpedTkYKNlf1gCxVd%2B08DnhcBfIKK0eoQA0YAkJl9Ig8AoDjpiyfdLcBtyn%2FEWNtMtqFnVBdjCw3%2FDBBjqkAdOkMtMrqHAqv%2FWe05MX9d3mg5Ripd0Qu3rLe8THOo23y9dz9Mn80rlWxT9GUWIKcr3xkuyhxjF%2BKds2K%2Bvy1OS%2B%2Bpk8GqFAHDkvNhB%2FrfeUhyGjbi4rQF8w0h%2B6oZIdDlGp7FWIktyacc39R%2FahYL7uX7aaLaOUhlOz1vNV96Fnn6gqVFhunm0Y1VO5oaPAbmx%2BCbJX9o02fSCLm5TjIq%2FCPWmn&X-Amz-Signature=9449f86080783be06e99e2d9cf61c7036677467f3daa27e525374bd2f434dc05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
