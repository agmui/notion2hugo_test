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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHVMBEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzhMGqF1qjGwAQ6nNiiHkChGzVQHXBITeE6ZE5vGr4JAiEA5vDpKqQB9krCXgYLSukzOBexaRN1lZUd5gpejJbWsGwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID4eV5muA57v57mGyrcAx6ff8usqxdk5aiMJMeSa6jGFIicisd2S4IrH21y6O3EbeKJoFdnDgQW81c1cUgDJdD9lGdl7xbF03ktzB3OmJZm4Rg0VnoTJP4I6GjgGjXMg80UNjni%2Bi8PGJVaAODP2Wb5JEJXIHsPgxg%2B1xTWUzs8e%2B8fE%2B%2BW3oyvc%2FpqGAHpHBlONl5Kjvo7NbqD2G%2BK7HXLEHJDgNr7qWcNUQNwAWNE0zEon2VLknIYqZmU%2FDme2Q24oxMqbL%2FA3Xb2V6BWCNuM62Ow8HbOz3XaqqJuavQxjEFiqAzJOYSZ1mHjtrF%2B2KX0%2F4vBLbKf6DVWjcw3WaKZwA7UwxRuZGtLhKLn9rhb8ZHprkTWe%2Fny2Uwg3E70fCi2lunK4t4JXEcEtTcCSHzGzWfKRhG5iLm7nP8iaGFbdoverK44XATbWi4Ic1lx5Px%2FUCwJbKF7bglmQn2mP60B3tSCnggJhDHemzeGnFw27CPv92RtS2knTHmtee0k%2B%2BsSCZ0gGjzvYzoFB74W3nlkHwIDTkyC%2BgiA3UhSnq21e3yiMPR9S4AE0KZ4E5KmjKuu8ax0O4dQRMmYaUPRHmXm30W0%2FSIpRqtZxJJiIP06tnPkCUql%2BiLAQQdvFpy4yJMddbFnhgV%2BDaBWMN%2BctsQGOqUBQmFu19MHA93frqz5H1%2F7r4AQ%2Fr%2FkydjLAMDOQ2sjvhwdesjSb2UITHsnL3r1nmRfk%2BJvi8cJS82MfI%2BbyFJpvoaFvdpyKX3b5tbqxX7T%2BqPCbglNvSit3Vb%2B9Ub6PrbrRy8NkUMKL0qgqKTkAUw4%2B%2BxGsx324wO5TlW5jGuavRH%2FPUt9C6JVK7XhFLfGsTNWVSY%2BIg%2F2ewVHkjBzdadEjKWWP9a6&X-Amz-Signature=4b36bbb550692fd07c828d6e6c75438fdc7bf02187f58680a068282b21bc93ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHVMBEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzhMGqF1qjGwAQ6nNiiHkChGzVQHXBITeE6ZE5vGr4JAiEA5vDpKqQB9krCXgYLSukzOBexaRN1lZUd5gpejJbWsGwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID4eV5muA57v57mGyrcAx6ff8usqxdk5aiMJMeSa6jGFIicisd2S4IrH21y6O3EbeKJoFdnDgQW81c1cUgDJdD9lGdl7xbF03ktzB3OmJZm4Rg0VnoTJP4I6GjgGjXMg80UNjni%2Bi8PGJVaAODP2Wb5JEJXIHsPgxg%2B1xTWUzs8e%2B8fE%2B%2BW3oyvc%2FpqGAHpHBlONl5Kjvo7NbqD2G%2BK7HXLEHJDgNr7qWcNUQNwAWNE0zEon2VLknIYqZmU%2FDme2Q24oxMqbL%2FA3Xb2V6BWCNuM62Ow8HbOz3XaqqJuavQxjEFiqAzJOYSZ1mHjtrF%2B2KX0%2F4vBLbKf6DVWjcw3WaKZwA7UwxRuZGtLhKLn9rhb8ZHprkTWe%2Fny2Uwg3E70fCi2lunK4t4JXEcEtTcCSHzGzWfKRhG5iLm7nP8iaGFbdoverK44XATbWi4Ic1lx5Px%2FUCwJbKF7bglmQn2mP60B3tSCnggJhDHemzeGnFw27CPv92RtS2knTHmtee0k%2B%2BsSCZ0gGjzvYzoFB74W3nlkHwIDTkyC%2BgiA3UhSnq21e3yiMPR9S4AE0KZ4E5KmjKuu8ax0O4dQRMmYaUPRHmXm30W0%2FSIpRqtZxJJiIP06tnPkCUql%2BiLAQQdvFpy4yJMddbFnhgV%2BDaBWMN%2BctsQGOqUBQmFu19MHA93frqz5H1%2F7r4AQ%2Fr%2FkydjLAMDOQ2sjvhwdesjSb2UITHsnL3r1nmRfk%2BJvi8cJS82MfI%2BbyFJpvoaFvdpyKX3b5tbqxX7T%2BqPCbglNvSit3Vb%2B9Ub6PrbrRy8NkUMKL0qgqKTkAUw4%2B%2BxGsx324wO5TlW5jGuavRH%2FPUt9C6JVK7XhFLfGsTNWVSY%2BIg%2F2ewVHkjBzdadEjKWWP9a6&X-Amz-Signature=4b30bb2393eecffb7cd0fbc08e2b01c9d241df740757f25fec78e04310c29932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHVMBEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzhMGqF1qjGwAQ6nNiiHkChGzVQHXBITeE6ZE5vGr4JAiEA5vDpKqQB9krCXgYLSukzOBexaRN1lZUd5gpejJbWsGwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID4eV5muA57v57mGyrcAx6ff8usqxdk5aiMJMeSa6jGFIicisd2S4IrH21y6O3EbeKJoFdnDgQW81c1cUgDJdD9lGdl7xbF03ktzB3OmJZm4Rg0VnoTJP4I6GjgGjXMg80UNjni%2Bi8PGJVaAODP2Wb5JEJXIHsPgxg%2B1xTWUzs8e%2B8fE%2B%2BW3oyvc%2FpqGAHpHBlONl5Kjvo7NbqD2G%2BK7HXLEHJDgNr7qWcNUQNwAWNE0zEon2VLknIYqZmU%2FDme2Q24oxMqbL%2FA3Xb2V6BWCNuM62Ow8HbOz3XaqqJuavQxjEFiqAzJOYSZ1mHjtrF%2B2KX0%2F4vBLbKf6DVWjcw3WaKZwA7UwxRuZGtLhKLn9rhb8ZHprkTWe%2Fny2Uwg3E70fCi2lunK4t4JXEcEtTcCSHzGzWfKRhG5iLm7nP8iaGFbdoverK44XATbWi4Ic1lx5Px%2FUCwJbKF7bglmQn2mP60B3tSCnggJhDHemzeGnFw27CPv92RtS2knTHmtee0k%2B%2BsSCZ0gGjzvYzoFB74W3nlkHwIDTkyC%2BgiA3UhSnq21e3yiMPR9S4AE0KZ4E5KmjKuu8ax0O4dQRMmYaUPRHmXm30W0%2FSIpRqtZxJJiIP06tnPkCUql%2BiLAQQdvFpy4yJMddbFnhgV%2BDaBWMN%2BctsQGOqUBQmFu19MHA93frqz5H1%2F7r4AQ%2Fr%2FkydjLAMDOQ2sjvhwdesjSb2UITHsnL3r1nmRfk%2BJvi8cJS82MfI%2BbyFJpvoaFvdpyKX3b5tbqxX7T%2BqPCbglNvSit3Vb%2B9Ub6PrbrRy8NkUMKL0qgqKTkAUw4%2B%2BxGsx324wO5TlW5jGuavRH%2FPUt9C6JVK7XhFLfGsTNWVSY%2BIg%2F2ewVHkjBzdadEjKWWP9a6&X-Amz-Signature=d807ac90d72f20016b13bbfb1a510b5c695e84057ff115cd5edc6d4e5ad739d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPTM4JT6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMU4uDuXVNmwlow1nNq7D02ZHW3UsSNcxlzHrKZbencgIgGazCA0%2FK9gAGz5mlKZfMuMa3PnvbDVSM8nDB3pwFtGAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9dw2Mu7A1bgO9mByrcAy5M%2BRLLV8UxZ25AhYZGajrfUelgefh0xrJ4hfbJeU0DB0a8ILF28rnkzNuvJ26kaKos3nJtLjGjmLUwma5fJIkM1amo4Nq5wRCirbXwMGS3rrJqe7sBKQ%2Fj%2BPN8CFguuLY3WIxl32L5i3ok8m8myoWBC5korW8AAoicIpWRGOmXgJZRoGCuXe2%2B9OKG8w0A6FIswA%2B3TYoFSyCvatkDiD7si3%2B9OKYi25F3rbL520YnQgvnZZaxUWJs4R2gwQ4FITAkxIupl1%2Bmo4mTc8c%2FflBu%2BfZM4PFIz%2FjkxpfVSvCZLpWE%2B%2FD373AkG0285lZMfkM9u0pjmN9AUJqCvf04evguzr0kM7VgKoozVT%2FkrqrMvaCvkNoaWPwWTQdYXdsBnQ6b114bvh08E2vcE1zRqwxtVS7Q6LQ2riwtVy53sKotYPiXZcBKyeAgLxWAM%2Bf5E4Dpf8WkmZGhLm%2FNCiWQzxG5LT4RtXwQ3xKv78gCseD7jb8HLIsw7GvZX8IYZkuYDfjXG4ktxgDVvgzsXf1Xq8WL%2BSUUTnhWV1ggkXcj7Py087IYgNcz5lhWhxGmO6ojICrkfSg%2BeIfE9MViGTD5Do5NpN%2BxtgLdK7gAMph0dmDfmCv6knggfxUzIrvrMJudtsQGOqUBLoFqx%2BVqJm2yR3o%2FBUe5%2FxP%2BiHlSoK9IYuxKUvblN1Jaq3OntJpxM9ZKsmq9NNAG0LNphSgo8%2BktzhpRYFrj912v8pFq8k97yJ59Bvw4%2BXBOkRT4d75KyZQpVUgRIQxSGU2tHp8n1v1jzK5zFqZyiPVJbmo%2Fgxlf6dXGIYYV%2FQTgTds9eiE1gIwzOfs5TT3cuL1lgui1hjCfxN5VxwX%2BLsb%2FQRqf&X-Amz-Signature=e8988c73711b04fb5436b18dd9b1ae7e82115cd6e6d9adf2f9a152beff0561d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJDF2TJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbaTbZiLmldbxdJnxvV5EAPtE3DX7jyrDOvbMWW4CcXwIhAJNMmkstgTgGNzxh6jE1UGFfl3c3%2FsfYzy6vUz9gA9ngKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG5hq7soGTm6kfMRgq3AN6KlzwCwqNRfpIUW%2Fm7NjhaWIvkotqatVXXuqz0e8cC0A0QJdkiyoaZwiUOv01QGkSTJMHp24r2ygokkl3IRcYcpoGh%2FrsmrH3ecmCI0fDPvmZurxkTx1dYpuwHrCROU5S4wfJqPUHEB0R9NX6xVVGpxQJ5eAb7nJEI2sZZfRR8B95ihu8IRKpTHZu0DhtHjEFNfGUDvR3z1cJpERVdgSZGD5a0I%2FF9mPU%2BPw6rkxUFmdauthQAnyq08dWMn5cZEwluS7wK%2Bh9QAB95TGN8jdqFF5FeYnSYXqJFTMnwAdTTCNrB3TOIUlZXwKBLYpXNp%2FusVd96OGntJl%2BTIIR7DZCbBTJ%2FU8Hx%2BXqKeTTtKyLspMnQeVj6xRfD%2FApB50d%2B1N90a2PHhaTRYXFug1M1BsI7gqfo0X3kcdtoQcPX%2FgE%2BzqjAWo0Ch3Yb2Nzf3zWZyP2l1rophNVCSYZkPSk3XvGTPgADznUvbAHNtoqILT2%2FtqaLiGpGv2HjjT77RUVVbMiKAgUpEYYsE8Vwqk9bkbimHUt1cKMjhaxvzUwQycZUygce%2BD2ILerxmB%2BHfY4LdVYQHy7CjcBbBobj8wA6mge9Sw3oRMsfWiwO5JCk8fpKBT1V5cxmgTDmrRyyDD7nLbEBjqkAZnckL5FAbVgWJxN4XDJKZq%2BcKQFigEky%2BvYC6%2F8sfGHkxcEIB7mkpOOXl0coSAREMkfN%2FXr2AC%2B6LdcCDL%2B26%2FZcgDje05RMHq4UM8FXL8pMREiNrVB%2FP9qfOEQVKlkAgqcbazLuo79YzRG6WjcPfkllYW8aTz12mPvWQ9GWRj9cpy%2F1q%2BsPoww9C7bctGpSNpI0gcPLb3yyfjqv0icLCZYgLjr&X-Amz-Signature=caddf3a1acbbf7fcb1a991dbbf08cfcc6ffa05f3605077b293df20ca185a21d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHVMBEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzhMGqF1qjGwAQ6nNiiHkChGzVQHXBITeE6ZE5vGr4JAiEA5vDpKqQB9krCXgYLSukzOBexaRN1lZUd5gpejJbWsGwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID4eV5muA57v57mGyrcAx6ff8usqxdk5aiMJMeSa6jGFIicisd2S4IrH21y6O3EbeKJoFdnDgQW81c1cUgDJdD9lGdl7xbF03ktzB3OmJZm4Rg0VnoTJP4I6GjgGjXMg80UNjni%2Bi8PGJVaAODP2Wb5JEJXIHsPgxg%2B1xTWUzs8e%2B8fE%2B%2BW3oyvc%2FpqGAHpHBlONl5Kjvo7NbqD2G%2BK7HXLEHJDgNr7qWcNUQNwAWNE0zEon2VLknIYqZmU%2FDme2Q24oxMqbL%2FA3Xb2V6BWCNuM62Ow8HbOz3XaqqJuavQxjEFiqAzJOYSZ1mHjtrF%2B2KX0%2F4vBLbKf6DVWjcw3WaKZwA7UwxRuZGtLhKLn9rhb8ZHprkTWe%2Fny2Uwg3E70fCi2lunK4t4JXEcEtTcCSHzGzWfKRhG5iLm7nP8iaGFbdoverK44XATbWi4Ic1lx5Px%2FUCwJbKF7bglmQn2mP60B3tSCnggJhDHemzeGnFw27CPv92RtS2knTHmtee0k%2B%2BsSCZ0gGjzvYzoFB74W3nlkHwIDTkyC%2BgiA3UhSnq21e3yiMPR9S4AE0KZ4E5KmjKuu8ax0O4dQRMmYaUPRHmXm30W0%2FSIpRqtZxJJiIP06tnPkCUql%2BiLAQQdvFpy4yJMddbFnhgV%2BDaBWMN%2BctsQGOqUBQmFu19MHA93frqz5H1%2F7r4AQ%2Fr%2FkydjLAMDOQ2sjvhwdesjSb2UITHsnL3r1nmRfk%2BJvi8cJS82MfI%2BbyFJpvoaFvdpyKX3b5tbqxX7T%2BqPCbglNvSit3Vb%2B9Ub6PrbrRy8NkUMKL0qgqKTkAUw4%2B%2BxGsx324wO5TlW5jGuavRH%2FPUt9C6JVK7XhFLfGsTNWVSY%2BIg%2F2ewVHkjBzdadEjKWWP9a6&X-Amz-Signature=63da0cf380cc0bb51a3dee92b2bb199ebd583cbab4f45e5ee6f91bd10433a961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
