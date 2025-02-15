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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663Q6F5GN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCoOsi2rxhtVyjo%2FnBisPWpvQ5PJYy4ARNuTdwAQAFDMgIgEGmT6YvgxCKg8A2XrcKZ3orQxtgtq8E5op5tVMAkU9Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOOTd3eK0wbcikvkWSrcA%2BbOGItlafs3PFBRbI2We5kw%2Bzxd%2FOpByXThasoOyVlv9u6ZYOr4%2FeE747HcIxU9yt67fStgodpqgXJMBawLwWGJxlU1hyuw3oeY%2Fq03ZmuW7vqrdDU6O27Cqp3gkdRQQgyge%2BzIXBTUtPA9tznKAS1Q7ofPVAsdPSxd8YHhXtqAib0KK4B4PnrlgUe7nXkM%2FlP%2FAoxHu7SEB3ubkN89Ts0E%2FKvreKXJhvG7wCvzZx77Jn0HVtYzG6HpnLTsZ%2F6%2FJsDIFO2ZBd%2Br7XodQKpHXcpQmD7RRKpw0Aks88uU6amTss8zZ%2F%2BlMI%2BlImBI6f7K2kwsNiNaDgQPgQOYGXHdUfUnEbw3rsbaWzOjtFqiZCILJCF6CwNIr4W1pszpPDXbLMhk3QJo5F3l5EPRAIPv7wU43iU61Qs6TtXmSV%2FcXq3TZy8yZ1K%2FRd%2F0a2wUXQtFA9Qt%2BeS04to8PgTN6CHesS6ZF95HSghW6Qr4eJBxftXDfUnaYcFbAz23PsC9l7fNecW2Fd1FdmTgbRqHSSgcj558ul5uPrGmHgR5zm7gVhIKeN0RR1ueRnYyyFrGDMY5oqKpm1HV9HsdtnBYIx9sLr4qG9ay2s22lpD7kD1wnx6itL32YiFZCMypT97PMLm7w70GOqUB2rMyuOOBf4CG8tRTPyo9ixN6YjVpmlojL4R5Y365Hr459HxU3xChxyBinAlbDHAqhNjv6GPzifwQDL6T9egSRPNSXNB3B51JZgv1hNDRUKD%2FVXx%2Fc655dl4iIT7fxYjeZHbp49jaUp8ole8i8VEbv6GLtsGLJEmvASTqOosMLiyDv%2FViSzcWZUvvA%2F%2FWJcPOatR%2FTqH38RUJczH8HwoUN3rZF26b&X-Amz-Signature=ddfe196fec437d097173414fae8df6c54934cb7ca76894534f8ab439e1fa8908&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663Q6F5GN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCoOsi2rxhtVyjo%2FnBisPWpvQ5PJYy4ARNuTdwAQAFDMgIgEGmT6YvgxCKg8A2XrcKZ3orQxtgtq8E5op5tVMAkU9Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOOTd3eK0wbcikvkWSrcA%2BbOGItlafs3PFBRbI2We5kw%2Bzxd%2FOpByXThasoOyVlv9u6ZYOr4%2FeE747HcIxU9yt67fStgodpqgXJMBawLwWGJxlU1hyuw3oeY%2Fq03ZmuW7vqrdDU6O27Cqp3gkdRQQgyge%2BzIXBTUtPA9tznKAS1Q7ofPVAsdPSxd8YHhXtqAib0KK4B4PnrlgUe7nXkM%2FlP%2FAoxHu7SEB3ubkN89Ts0E%2FKvreKXJhvG7wCvzZx77Jn0HVtYzG6HpnLTsZ%2F6%2FJsDIFO2ZBd%2Br7XodQKpHXcpQmD7RRKpw0Aks88uU6amTss8zZ%2F%2BlMI%2BlImBI6f7K2kwsNiNaDgQPgQOYGXHdUfUnEbw3rsbaWzOjtFqiZCILJCF6CwNIr4W1pszpPDXbLMhk3QJo5F3l5EPRAIPv7wU43iU61Qs6TtXmSV%2FcXq3TZy8yZ1K%2FRd%2F0a2wUXQtFA9Qt%2BeS04to8PgTN6CHesS6ZF95HSghW6Qr4eJBxftXDfUnaYcFbAz23PsC9l7fNecW2Fd1FdmTgbRqHSSgcj558ul5uPrGmHgR5zm7gVhIKeN0RR1ueRnYyyFrGDMY5oqKpm1HV9HsdtnBYIx9sLr4qG9ay2s22lpD7kD1wnx6itL32YiFZCMypT97PMLm7w70GOqUB2rMyuOOBf4CG8tRTPyo9ixN6YjVpmlojL4R5Y365Hr459HxU3xChxyBinAlbDHAqhNjv6GPzifwQDL6T9egSRPNSXNB3B51JZgv1hNDRUKD%2FVXx%2Fc655dl4iIT7fxYjeZHbp49jaUp8ole8i8VEbv6GLtsGLJEmvASTqOosMLiyDv%2FViSzcWZUvvA%2F%2FWJcPOatR%2FTqH38RUJczH8HwoUN3rZF26b&X-Amz-Signature=17987f260bdd7f54830c9a033c69129aab08c5bf5d03be4fbc4d7907f58c5235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETNDHNQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCMZ6teXMmEMYA3GAs07HlRA9UCYpz56YLVWC2modeqggIhAJ7wTSYzlYKvDnvQJhvPK%2BpUMGLx407CpxD7z1p2H8UwKv8DCEwQABoMNjM3NDIzMTgzODA1Igw6iFFpMWFr1jW9pvUq3AMDaXXZdkUxkVGSZ9%2BRdlpYffVyU59yanXtR2rIXYv4UuPj0czUp2c9eXFEbVSaYkJ7hKIhhGA1iDer3giIUDyajlkhaOuxt417d9XLNkYew6SlVRzJuCueMvvAAWJ%2FmpWauo9OYuc3%2BK5wFKKbrSM%2FFfr4pfWE1zvPRZWDwnQo6clIlT9pgofLf2EXrRPkFi5Vkgz4wE2eHMYZQYUJBFBlKfS1zs2g8444Ar67sTrH%2Fsx0pghelKDuwCjzVGX5im16nRMDhsonjR2GfUX30xZidFxrixArr3wiX%2BSkg45Ewu5ZqYwdEF%2FK1MS52bt1o4tjqYfpJ%2BTa5SHeX18JuVcEqoHRNSwXBPBmSluugdsWcoplhb1w4rgFoQA0Tu317l6e0Vc4FAKC6evg5Cd4cpbJC%2BfckztZCCDv5lUSfLoUJNeraeNi9lzUC976M%2F8LxE8UCIIas8NzWWMiemy0jjHxrD9PQiuBDej6gBe%2B1SRnLM2shJ53SdMt%2FCd26UPK7qNWkyX%2FX1n2m62mj81cS%2BaC%2FFl1wNaKxHroDncU5WjxtiXP6ON5TwikUfb5jW08ZM6Exhx%2F6%2FwW0avdXFNIeajqC7ld2l2R%2F6VFkjCAJyPmEKOCPWXM6RIb63ChkjDNusO9BjqkAdz%2FNkXjF8A0yZLEyRukjxprKPhpnQm4X9cOYWbFYfHVsrxJ0TuBjMf62r5ZlW7BG9jnEThKJSyoXj4IsinBW%2F%2F7Z8SY7pnlXnoDjonDspnxtT33MXZYVkCDeES%2BvXNhzfakxh4V5XUkui7HkZQvrExkfGiOxPbAj2hYrIyrP5Wdx6XyUBxFQgkpCj9uBQhJ0tTTPFGD%2BNaAF9Jdj1I%2FdRivx4CP&X-Amz-Signature=e5cbf5a893974a51bdbd08ca28ba73d9c469354d6dcd87aadc2e177393610ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYNFSXJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDMAsoHJU11yPd%2Bm7EUm3kBWEbMzijy%2Fc%2FTqeBshxNFggIhAJj9ocxVl6MRys4XaBHY6UBXEA1RZJYkOylalkaUGBWAKv8DCEwQABoMNjM3NDIzMTgzODA1Igy4qT2BcIYgQyGi7cUq3APSowuxboyMmMzuCPy7E0NtudGx4k0YY4sEL%2B6XPwifXlduIF176bQ2Q3kmEQPqKBVVZAWk6MjFM7n1zgLCrLwMVjAVt9WQH9jSAnqmd3ExC%2BUaLWjWclwN3zSDFzPiwT5C6zXOdrt6PGRAxF8Wr3Wud%2FgWD0mMVDwS94HMthm6lAVFeIzwhZhHacn59BsjzB7N74rXhQuRLgz5y52G2vjB5M0bEOlVHVVwH6vZ11%2FXIHj1vJj%2FWnWNHtMR9LYp97Bn6zdLlHNf4ZL2I4ByD%2Fftep2EMzqwHQb%2FExQcILHX5luRZE8%2BihlQNf9O3F310aiRcD5ULOvGG4jl4cdx%2FolK6AuCdyWGBDWZ8YnFpU%2FpjX8IbrvPwUklEnmmSOyPGyVfNYflYFLqA78EI1a5P7ucj6xDUhn6fUbRgJQHNAKyeUXju7fn0JCJCEG55p8zTlVUfs3hJkUgRbD8Q47dtlCBOL9HFsb4zcMGqSov0FqWKBaDw%2FtahRoLVSuf5KpSJbC4aOgNhewvi2yzlTZNy05htbO6MzsPiLhW7UULMpwd9p%2BFBJUXmhuBW0PrqRNXlcfiV5rK%2FsT1spib6QHZlN1TM57219qqIUplui8kPuGNNtlcEWiJp67t7zwt5zCIu8O9BjqkAVZ1eT5JOXoDj%2FZ%2FtpXeje5QkHrkj2XnefrrIC1HM52RacsLOMWqzbPGcXNw1A2zpZdJ9n%2F7KQH%2F5onjqBUu1muI%2BWfichgGDA2Cct3O%2FRpTf%2FvwfWl6cocO1mdrbfgjM1uSzMq%2FzC7XDhSiswCWx7w9He1qwC2vweXw74Xt9LbvVZYNBTnByKQGuXVPwrCfh84UAhmqxieNXEGFafp6OnrHLPYM&X-Amz-Signature=70f6ffea957cae9230426109d3497267e0f323c86c1447b6b0390fee7d8e5469&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663Q6F5GN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCoOsi2rxhtVyjo%2FnBisPWpvQ5PJYy4ARNuTdwAQAFDMgIgEGmT6YvgxCKg8A2XrcKZ3orQxtgtq8E5op5tVMAkU9Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOOTd3eK0wbcikvkWSrcA%2BbOGItlafs3PFBRbI2We5kw%2Bzxd%2FOpByXThasoOyVlv9u6ZYOr4%2FeE747HcIxU9yt67fStgodpqgXJMBawLwWGJxlU1hyuw3oeY%2Fq03ZmuW7vqrdDU6O27Cqp3gkdRQQgyge%2BzIXBTUtPA9tznKAS1Q7ofPVAsdPSxd8YHhXtqAib0KK4B4PnrlgUe7nXkM%2FlP%2FAoxHu7SEB3ubkN89Ts0E%2FKvreKXJhvG7wCvzZx77Jn0HVtYzG6HpnLTsZ%2F6%2FJsDIFO2ZBd%2Br7XodQKpHXcpQmD7RRKpw0Aks88uU6amTss8zZ%2F%2BlMI%2BlImBI6f7K2kwsNiNaDgQPgQOYGXHdUfUnEbw3rsbaWzOjtFqiZCILJCF6CwNIr4W1pszpPDXbLMhk3QJo5F3l5EPRAIPv7wU43iU61Qs6TtXmSV%2FcXq3TZy8yZ1K%2FRd%2F0a2wUXQtFA9Qt%2BeS04to8PgTN6CHesS6ZF95HSghW6Qr4eJBxftXDfUnaYcFbAz23PsC9l7fNecW2Fd1FdmTgbRqHSSgcj558ul5uPrGmHgR5zm7gVhIKeN0RR1ueRnYyyFrGDMY5oqKpm1HV9HsdtnBYIx9sLr4qG9ay2s22lpD7kD1wnx6itL32YiFZCMypT97PMLm7w70GOqUB2rMyuOOBf4CG8tRTPyo9ixN6YjVpmlojL4R5Y365Hr459HxU3xChxyBinAlbDHAqhNjv6GPzifwQDL6T9egSRPNSXNB3B51JZgv1hNDRUKD%2FVXx%2Fc655dl4iIT7fxYjeZHbp49jaUp8ole8i8VEbv6GLtsGLJEmvASTqOosMLiyDv%2FViSzcWZUvvA%2F%2FWJcPOatR%2FTqH38RUJczH8HwoUN3rZF26b&X-Amz-Signature=fa0a87c757d5c45233849ee91173adcecacf43449bfbcefe763dd6824324cdda&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
