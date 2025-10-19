---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVPHW46%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGSlp7gXfN0iISwJfhStpMjBA8f0Pc7GfeLa6OWO3Uf7AiBIsOtFemaFy5RuQI6nxqRv%2FQSyq6QZdVwtoJhptOI2qSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBsMTmLA%2FYlSpnedbKtwD%2F80OxtyuVvP0BiNTHMOQ%2FKTRhyvRR%2BfnW6Cu2bMH1t%2BLA7B4iGV5y7EcGcIjIZp%2BtEIN9K1Ipii8wSDHf6toRuH6%2B9EeU0I9uHSxV8lGspVRH5amrnT3TBw3kxcAPl18weJfg9P1%2BRypt9i1WHP7taNamuCCG7kaf44Hv4ZSM35p%2FWTE6InMbY%2BY4Guxj4T03M%2BIuv%2BsxXg54O60f%2FojS%2B%2FVhzGSZOk2uNYZQLc%2B6hH4uqfFnl9tSuirhGun1UR%2FZLqcwdZ4VyC30iP1Ga%2BFb2t6VWDHAx%2F0S2j1MIy6KEPfQiTWOMAVDpMO4ohmdPuN0mtzMncvQ26m8ARTRZewcK3BiUezz1pogIrM9yP7ZQ3%2BO7ZXZQ0WTuN1%2FpCGaw7iMjUeVy3AhHhKSfj1F2%2Fp9xNoO08s%2FO%2FzT%2BWXwG1e1AwfdqrgqIfOWmKk8gcZX93pP9maNjU5aIYWISqcYUutS2D9W%2FS3jW%2F%2FXwCb18yc2pyI75omxke0OCsafT%2BVzxOfU8qd%2BMyz4SjtMUgObo4UV0C1pZJvJL2tquQ8%2F21hx6HI%2BApoGYngqmEeIPZB%2FEhuzHlv5jypPKAMhzSA%2B9kQ4p4m6vuV3bpj84Xd0W0oCLYp8flK7nqk7bGi510w2ILRxwY6pgHkvKREul3eMwK926dcvelmozZL6Re%2B2%2FgeOaLfvNVGRdb1DFmuZBg2NLlT7aMU7n%2FiNlI3R%2FwWAosuSWAiwhrQ4r9uUm4SbhV7HngJaDGN%2FFJwzRWA0P5KBUWYeAKcCkjWGsRLSqbIB3T%2F5%2F98H3BH61dBbJdP%2FZHsmfgrXOlsOCGk8qTaZJd563PpexdCg4ocgn85SgpJUOyUqjvESX%2F3FJJNx37x&X-Amz-Signature=0715436f83d636309fbc7b243120d8eaf69b3ecf214f995b15339d033f3da0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVPHW46%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGSlp7gXfN0iISwJfhStpMjBA8f0Pc7GfeLa6OWO3Uf7AiBIsOtFemaFy5RuQI6nxqRv%2FQSyq6QZdVwtoJhptOI2qSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBsMTmLA%2FYlSpnedbKtwD%2F80OxtyuVvP0BiNTHMOQ%2FKTRhyvRR%2BfnW6Cu2bMH1t%2BLA7B4iGV5y7EcGcIjIZp%2BtEIN9K1Ipii8wSDHf6toRuH6%2B9EeU0I9uHSxV8lGspVRH5amrnT3TBw3kxcAPl18weJfg9P1%2BRypt9i1WHP7taNamuCCG7kaf44Hv4ZSM35p%2FWTE6InMbY%2BY4Guxj4T03M%2BIuv%2BsxXg54O60f%2FojS%2B%2FVhzGSZOk2uNYZQLc%2B6hH4uqfFnl9tSuirhGun1UR%2FZLqcwdZ4VyC30iP1Ga%2BFb2t6VWDHAx%2F0S2j1MIy6KEPfQiTWOMAVDpMO4ohmdPuN0mtzMncvQ26m8ARTRZewcK3BiUezz1pogIrM9yP7ZQ3%2BO7ZXZQ0WTuN1%2FpCGaw7iMjUeVy3AhHhKSfj1F2%2Fp9xNoO08s%2FO%2FzT%2BWXwG1e1AwfdqrgqIfOWmKk8gcZX93pP9maNjU5aIYWISqcYUutS2D9W%2FS3jW%2F%2FXwCb18yc2pyI75omxke0OCsafT%2BVzxOfU8qd%2BMyz4SjtMUgObo4UV0C1pZJvJL2tquQ8%2F21hx6HI%2BApoGYngqmEeIPZB%2FEhuzHlv5jypPKAMhzSA%2B9kQ4p4m6vuV3bpj84Xd0W0oCLYp8flK7nqk7bGi510w2ILRxwY6pgHkvKREul3eMwK926dcvelmozZL6Re%2B2%2FgeOaLfvNVGRdb1DFmuZBg2NLlT7aMU7n%2FiNlI3R%2FwWAosuSWAiwhrQ4r9uUm4SbhV7HngJaDGN%2FFJwzRWA0P5KBUWYeAKcCkjWGsRLSqbIB3T%2F5%2F98H3BH61dBbJdP%2FZHsmfgrXOlsOCGk8qTaZJd563PpexdCg4ocgn85SgpJUOyUqjvESX%2F3FJJNx37x&X-Amz-Signature=de30b0338c7916733de4f49611954c4fc02882954e296fa52e98d829d8bb40dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVPHW46%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGSlp7gXfN0iISwJfhStpMjBA8f0Pc7GfeLa6OWO3Uf7AiBIsOtFemaFy5RuQI6nxqRv%2FQSyq6QZdVwtoJhptOI2qSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBsMTmLA%2FYlSpnedbKtwD%2F80OxtyuVvP0BiNTHMOQ%2FKTRhyvRR%2BfnW6Cu2bMH1t%2BLA7B4iGV5y7EcGcIjIZp%2BtEIN9K1Ipii8wSDHf6toRuH6%2B9EeU0I9uHSxV8lGspVRH5amrnT3TBw3kxcAPl18weJfg9P1%2BRypt9i1WHP7taNamuCCG7kaf44Hv4ZSM35p%2FWTE6InMbY%2BY4Guxj4T03M%2BIuv%2BsxXg54O60f%2FojS%2B%2FVhzGSZOk2uNYZQLc%2B6hH4uqfFnl9tSuirhGun1UR%2FZLqcwdZ4VyC30iP1Ga%2BFb2t6VWDHAx%2F0S2j1MIy6KEPfQiTWOMAVDpMO4ohmdPuN0mtzMncvQ26m8ARTRZewcK3BiUezz1pogIrM9yP7ZQ3%2BO7ZXZQ0WTuN1%2FpCGaw7iMjUeVy3AhHhKSfj1F2%2Fp9xNoO08s%2FO%2FzT%2BWXwG1e1AwfdqrgqIfOWmKk8gcZX93pP9maNjU5aIYWISqcYUutS2D9W%2FS3jW%2F%2FXwCb18yc2pyI75omxke0OCsafT%2BVzxOfU8qd%2BMyz4SjtMUgObo4UV0C1pZJvJL2tquQ8%2F21hx6HI%2BApoGYngqmEeIPZB%2FEhuzHlv5jypPKAMhzSA%2B9kQ4p4m6vuV3bpj84Xd0W0oCLYp8flK7nqk7bGi510w2ILRxwY6pgHkvKREul3eMwK926dcvelmozZL6Re%2B2%2FgeOaLfvNVGRdb1DFmuZBg2NLlT7aMU7n%2FiNlI3R%2FwWAosuSWAiwhrQ4r9uUm4SbhV7HngJaDGN%2FFJwzRWA0P5KBUWYeAKcCkjWGsRLSqbIB3T%2F5%2F98H3BH61dBbJdP%2FZHsmfgrXOlsOCGk8qTaZJd563PpexdCg4ocgn85SgpJUOyUqjvESX%2F3FJJNx37x&X-Amz-Signature=a5b7df9e9e2227d9d4baa1844232447be3a50a40428c8c9b75a726f2b4c2586b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4MKYEP%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC17k9EU9bVVsdb9mXDAkgHGKiMyZxJBz%2BPBn8JfwveYAiAnVgZfy98vSAKr4%2FxAZEtSPzMw9%2BPyEdB9ZIRSbU0rkiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOM8hHjvvkT0BbJ9NKtwDzVzZqiYLp7rNDK0YwXDoSpPL18EJRyiSxIdw45NdUCD%2FQ9EZuKnknpJhWIwdvV4LhJYcUxN%2FmfYZdvzqtmWnmwgeiq1ShA%2BSalSoDWN4ntq%2FbBHhb1u7me%2B3XqDti204t0H40Gm3ZBwlvhfGf5%2BuCahYAPunfh6A1v5LdOP%2ByKZnposdIFL3bW4jSdpnd8uvjHbTbui8vwxVA1Jo0k880V2F0g800QROuEV8CiCNeL55nvHjzLjO31ydlT9S6OC16UexQDzxduz1AhEGs2tR83nFOD%2B74rmdmbgIgLbBQE%2F1ZOUNN27sgYyNVLoMeziiob%2FiETHUGxq2kOcD9a9QU%2FZrA5z5661ZXi6WKdWeeF%2Bd5ozqZVtKglM6T7tA3O2b38Iwa6yFWtyoFt3AMyGk7H2%2F1cIdknrJOywVKTsK9M9417N0dW4rQSLpu90OaR9JzrLyA%2FcliqVrDlyMHbBu%2FJJ0o7KF5fH2%2FVc448UJlTxTZDNtOHXJRR3ExIubzLytQHzggN3xgOFk%2BoIYTMY4XQeb9MeopV4D4FW38Vy47cOUiZNQt9nWE1pFpBwtgkzH%2F0VJ4qf2sIJPWwJphrVEQ4mRckc7WePm7cnvX3OIbiJtQYZpIdz59ds4pQQw8vrQxwY6pgFfMoxYThnNe6kZT0%2B0YU6%2BHCQcdUutXLD%2FzJ6BwXlohJyh0FYOSBh1VJthxa%2FUYbJrmeZtanJzTinW%2BG%2F9GTo6ghYX5UrUvB1X7hUwfBsaRBUwqsHTLi6U9V%2BK31DgKoCEdVniY%2Fd7IW6EvrWqZl0u7YqSAOUeLgYeQg0wp%2BsKt1%2BBbE7lXQZsnf3OSAQHyXnKEZrFyd1m3e1QRXQKl6CAQ6ygL2ai&X-Amz-Signature=b661970715fa01d50c86657d6fffe6b7b90fd18910c9baff30fe87bae9a6fe6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHN75KS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCPH%2F9EulvGwhbF7W7w6J7Jtao5M5y46Jt9feE%2BuwfSlgIhAO6bu8v6B7rkE7aTTdvF1tqc9RduJ5dZWX7uSMGZrt9IKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvOZlsR0igRfVwggkq3APImMaO%2BhvDn33RgpYE5R13L3B9IleR70is0WCQR8%2BftqwtYMQpp88ONFHLdTLB660G%2BeAY7HClc%2Fkms2AqFaVtvaRymI4WQz6p6v2l8KFiRXqHdNZIxUSv26jY6tJbTFtqzISpJfutI76YcraeVVpk9XSIweGC431Vaqcf6fRhwlK%2Fjrgi5a%2FKMUbHZ2k0Xa6c7O7Ses7w%2BIAugvibeit8cH5TpakEnB%2BX3uJ%2BEQagdpYflNcfDR%2BcI9mhR8bo2lNHOface6rlNY9Rvker9KLpyR5MQ6p%2BgKISxisd9RjleCxcLyOmsYCZkd6A6tJPpMhEGsbkUFEtRKDWZR3avfBt02jVKU1NS9Hflo3KQ66pW2WvUxKArC7jwC8ZsfcQC1O23peTwWwODVK0daRHa5iEz6Er%2FCA%2BAclGncXntz2NFLCARrSaZXI5AuAAYG0yfReA%2FRGA0g9kIUYdiGJw%2FSrJ9ulrugUoQJNQjlQAy5LsY%2FtxMkqDHBWaJ5HIOUfCdtg1UbF39V58JwfpbeULYP7wYZ3ZK8Oeh4rOtRsS9ijRu2MbLh5RHjnfuBEPb4eh93DlyXEKRkqotkQQDbPWpwzAU9l%2BURmRDj6RFz%2BiAz7tlz2GPxkWsUuMn6usZDDGg9HHBjqkAdcPAMqO%2FHhN1tvon7NmMg9FHRhOO76NRyRnvWeSn7huLM2CxLXY6HKfiJLxnitn%2FM4miQXVCBmln2M8yiPDGVch72d2IE23G29A6cguWDuaFD2pw4IGZ3dshGAdSs8QO%2BFOnXfnGZ3J2zs7FHVxseXyxs7Orwok9%2Fc4flZf8CSTtHO9pxUYUN8TXurVavOS%2F5kgEHFu8%2BCigOQGDnGIawtO1i8g&X-Amz-Signature=935a3c701f5450d09579f2ed9f8d0c8a282917ec535d09f6aab62138cd717c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVPHW46%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGSlp7gXfN0iISwJfhStpMjBA8f0Pc7GfeLa6OWO3Uf7AiBIsOtFemaFy5RuQI6nxqRv%2FQSyq6QZdVwtoJhptOI2qSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBsMTmLA%2FYlSpnedbKtwD%2F80OxtyuVvP0BiNTHMOQ%2FKTRhyvRR%2BfnW6Cu2bMH1t%2BLA7B4iGV5y7EcGcIjIZp%2BtEIN9K1Ipii8wSDHf6toRuH6%2B9EeU0I9uHSxV8lGspVRH5amrnT3TBw3kxcAPl18weJfg9P1%2BRypt9i1WHP7taNamuCCG7kaf44Hv4ZSM35p%2FWTE6InMbY%2BY4Guxj4T03M%2BIuv%2BsxXg54O60f%2FojS%2B%2FVhzGSZOk2uNYZQLc%2B6hH4uqfFnl9tSuirhGun1UR%2FZLqcwdZ4VyC30iP1Ga%2BFb2t6VWDHAx%2F0S2j1MIy6KEPfQiTWOMAVDpMO4ohmdPuN0mtzMncvQ26m8ARTRZewcK3BiUezz1pogIrM9yP7ZQ3%2BO7ZXZQ0WTuN1%2FpCGaw7iMjUeVy3AhHhKSfj1F2%2Fp9xNoO08s%2FO%2FzT%2BWXwG1e1AwfdqrgqIfOWmKk8gcZX93pP9maNjU5aIYWISqcYUutS2D9W%2FS3jW%2F%2FXwCb18yc2pyI75omxke0OCsafT%2BVzxOfU8qd%2BMyz4SjtMUgObo4UV0C1pZJvJL2tquQ8%2F21hx6HI%2BApoGYngqmEeIPZB%2FEhuzHlv5jypPKAMhzSA%2B9kQ4p4m6vuV3bpj84Xd0W0oCLYp8flK7nqk7bGi510w2ILRxwY6pgHkvKREul3eMwK926dcvelmozZL6Re%2B2%2FgeOaLfvNVGRdb1DFmuZBg2NLlT7aMU7n%2FiNlI3R%2FwWAosuSWAiwhrQ4r9uUm4SbhV7HngJaDGN%2FFJwzRWA0P5KBUWYeAKcCkjWGsRLSqbIB3T%2F5%2F98H3BH61dBbJdP%2FZHsmfgrXOlsOCGk8qTaZJd563PpexdCg4ocgn85SgpJUOyUqjvESX%2F3FJJNx37x&X-Amz-Signature=5df7ea51714c49ca3d51f664c7bd0afc7246d96e2e001dd3ca6117cc9c7dba5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
