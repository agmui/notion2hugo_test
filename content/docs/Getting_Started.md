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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQK6QPCH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLP7ITc6HHpD0lcVocZU9vjKfJN79KKTI8ywKdUU6mCAiEA5%2B%2FXB%2Fvy2Kbq7VKS6%2BrjBK5owTC2AffzODvocVllXXEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMNEw5KkMuWntXnPKCrcAw%2FUIPHiMfqL%2FxBg1TKDKxq%2FFkLUi1lW9q%2FrY2o8QCCBG%2BEf6xSFNdpI5YkTUfvT9R4XrsdV03jACQSm8bm6FiGM7utBK2L%2BXZW9qETsm2aVHB0GjIzeUPp6kKxvR3Nm4ef26wPwgCqJDegTUEZKXw5tk%2BfPz6lSpQz6hW8HKsEF2b9XKNebu2bR3o3eWGrvfsTTSH5bplhREaYcsAar6BafSTSlmrxVWSuhi2ZHKr7Lwp5N%2F3G6nQuPIZ3FI3DaGrII9NRM1vOdVVocr2HFRUjy24mF1Mfz%2BjYZT7qBDR8WQh%2FRT56AuBRY1sYWDkgJ0A5slIO1Js%2B%2BvNuAzkNZ8p9sgEyj3OzIdTMm2Spr6sOlQOehlQppzt64Ecteh7UI4uXJUCWgeKbRGcRX3FVTp%2Bs2GIE0xz4kvdKhQapL%2BE1M9wUCuwhiqQbRmfJpfW7Khht125NuC4L6g4CiUtEEgL1TRWCTivX%2BFZVNdMF%2B%2F8ppvTjFcjgujwjPDN%2F2NB%2BDdbDsOmVnt68sIFcCymy70VS%2FYUQ0pYCqWWySau87YUQbVrIn53qqYlM25Br9xEf4x0z8eD8l6RebB3PSfEC0rmvMb935gyIzNM%2BtWiYNFwlpEa3LuYYaLBSzU4tVMKzYhsAGOqUB92Q0EWDVP8zXu5%2FGTn%2FF6kJmPpky3cp2QBqOcxZXo7eTMEXf15Ol80SMJ9yAmcZP3qEgwGQ8kCdPKMoCEX0koI4wfAGPHCpIMrlD4YwwNHInqfD0FSusO91IlU6L1zZjijYOnMLsQFiBxC7TogfSbXp0OYwvwT6UXKoQ3EkALqcIzAxGELWNIuE%2Bsf1hmsO03I2wVtpDVC0A9R9Zzg%2B7kk3kk0Io&X-Amz-Signature=78fc52b123d56f477e8b441fafeeb0d89f5d3768c81b6b24104ea7b8609e034e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQK6QPCH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLP7ITc6HHpD0lcVocZU9vjKfJN79KKTI8ywKdUU6mCAiEA5%2B%2FXB%2Fvy2Kbq7VKS6%2BrjBK5owTC2AffzODvocVllXXEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMNEw5KkMuWntXnPKCrcAw%2FUIPHiMfqL%2FxBg1TKDKxq%2FFkLUi1lW9q%2FrY2o8QCCBG%2BEf6xSFNdpI5YkTUfvT9R4XrsdV03jACQSm8bm6FiGM7utBK2L%2BXZW9qETsm2aVHB0GjIzeUPp6kKxvR3Nm4ef26wPwgCqJDegTUEZKXw5tk%2BfPz6lSpQz6hW8HKsEF2b9XKNebu2bR3o3eWGrvfsTTSH5bplhREaYcsAar6BafSTSlmrxVWSuhi2ZHKr7Lwp5N%2F3G6nQuPIZ3FI3DaGrII9NRM1vOdVVocr2HFRUjy24mF1Mfz%2BjYZT7qBDR8WQh%2FRT56AuBRY1sYWDkgJ0A5slIO1Js%2B%2BvNuAzkNZ8p9sgEyj3OzIdTMm2Spr6sOlQOehlQppzt64Ecteh7UI4uXJUCWgeKbRGcRX3FVTp%2Bs2GIE0xz4kvdKhQapL%2BE1M9wUCuwhiqQbRmfJpfW7Khht125NuC4L6g4CiUtEEgL1TRWCTivX%2BFZVNdMF%2B%2F8ppvTjFcjgujwjPDN%2F2NB%2BDdbDsOmVnt68sIFcCymy70VS%2FYUQ0pYCqWWySau87YUQbVrIn53qqYlM25Br9xEf4x0z8eD8l6RebB3PSfEC0rmvMb935gyIzNM%2BtWiYNFwlpEa3LuYYaLBSzU4tVMKzYhsAGOqUB92Q0EWDVP8zXu5%2FGTn%2FF6kJmPpky3cp2QBqOcxZXo7eTMEXf15Ol80SMJ9yAmcZP3qEgwGQ8kCdPKMoCEX0koI4wfAGPHCpIMrlD4YwwNHInqfD0FSusO91IlU6L1zZjijYOnMLsQFiBxC7TogfSbXp0OYwvwT6UXKoQ3EkALqcIzAxGELWNIuE%2Bsf1hmsO03I2wVtpDVC0A9R9Zzg%2B7kk3kk0Io&X-Amz-Signature=30539c5b8d3ae6f7d3becd4d62b7813e230a783df32c6cd6194754971af14eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5YJ7A2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi8wjBH8vvoyAnmbEk%2BwFINn%2Fl7Momt2h8zfFpet1jFAiEA5GmGe8fARRkY5Y5ohSlXlDWiqcMx06hThFKwkI7ghoUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFiPMR2c2AkRHH%2BpzSrcAzMHgNtyeeDlk23lWlglYzBisX1VS0h4hQAdDuRtdxapRVXOsxseLU6nl9PuERhckpEp7U856DZBxWFWnvJjzZwlJHGCM4FfuKn%2BPTAOVofwruCwBzJ0wgO9t%2FULAYVRilA8t7KL5R%2BCTUtuE84OZXn06GdQLozZs1obKbTvrQoxIrwibLHKeLMDlMgSJAuEsqInu1P8uCm4BFflV3CFW5VxBM%2FXkartEjv9BvE%2BGFHrHuaZuGbc0ROioy%2BsTrV3waKVY9%2Bh1DDtCL6CAhIG05dg7CLnvXiKHy7p7YI%2F%2FLq7zjbhog1Db1Y3heQuOk5UzEa0iqTmdGPnO92vH1ZA5sfzywSghEyNtZT6k2rfjq4cgsD0cfC8TzUKanbGwBOHzOCpnEwIYqhiWvWIc3OYPa9aqZF4C56jJbLynAAd%2F22rQCpTvmpS7CbLHYaTfdpaEWMmCIe%2FgR3vDWpru%2B6VsvRNWPBIxcGz0tSfmUDlVO9GL3sLiPZCWA6tRhyruDXJqy8jB0Hwa%2BW7kJh1BPDI1UD3eZ%2BMM4%2F%2Bkmp7W1a%2FJ3XuIihDhEq5V%2BsvQ37zt2VJiodFBmMAXAqs5DI2%2BirIIHGuPQd08rCsDhu2fQO%2FJaB8XCCGgQmkdIiWSLq2MOTYhsAGOqUB5MpI8CKZYAIKHUzQy3AWvNYFdywzlL%2Fmw%2BxCAZVMYjIcIxaxFYRc1iLzBgeJnXDR39ESrM3lESfh6TEI11VXqkJkilMj%2BBe22k%2FgwMcwsWoz3cgoqD3xD81Dty%2FiuU%2Fcr4f02MASlx8C2ZAjisEM6dfClkTvAzFLpu4lUVHHIQHz6HI2r24TZW%2BMvgw7kMEEDZ3gPPYzLU95yQxXwuJZIMYlXdmL&X-Amz-Signature=8d4de0ff1d671398b10b4de22e77ee7e511849f51d81cbd65e7ffb4d1d21a114&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2Y2Y3TZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYO8a18%2FSbufPpXm6hWMg7TCut1LMjze6jnpgXSXF%2B2AiBpxsOM%2Bvd88d9c%2B2Q%2BeBwPuy6cBuEzLBhjFyaPDt3vUSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMmbCPcIQwCV%2Bbh6PNKtwDZUDn9KMC3vmGqteTpDu3Bu8qVG6p8UY%2FphSvSxM2azJjTHZ7FDVF6%2BOIGQQwk6trqFVs%2FBWCCaw%2FY%2FNisHGp6QffjpIf0m%2FflypQgUgYeCZySWxMVFpMw0w4wVrP7NDgSEKP3YLc7dm8fGNRThTJR%2B92NJJyEw0oykbqXiJF2wEq8KNHQMwhugYW8qsdw3pR85AmaMtGz4QfWcblJN8DkuhScFnl9HxHYiq%2Bel%2B2R%2F6ruEgDeF2Q%2FzXIqUnw9tPIXM4PGGN8yZymuGVzgARGZZoGdJ%2FygpnTW4kL3xgPvOE0c59ojJXN0BTFKGkwoOLNta%2B7OsSjkWRIwupM%2B%2FiPIWv0r4HylPmkhxnEHnH8yoXdqcxfHqeXzi31jRJbbuDcJ4NEwQEvyhH%2FFpacoBpfi7N3yKY63lip5YzKq0DtTpVQIKo89KBusRj%2Fir%2FWMY%2FQG%2B%2BNmDelJg8YLOe8qwg%2B5TlOg8Z0ujZ505eqZ0T41iZAuY7PMBEInhz0%2B%2FY0eQeWtwWzs2pQJWLRXYVuGwmp9y1z4G6kVZ0UiWcSe%2F9Vj0MECuKPA1SHX5kUQKS8rnbsPs5cTXkWJhWn%2BL3F8J7RwAMvLnh%2BrY%2FAm1h2byCEZmcpemTwT2yjcvwbtg0wpNiGwAY6pgF7Diayq8m3uuaZjtsJczSnJZ%2FAFEg%2FMuSN%2FU6On%2Bsy4wQijL5rFNtlLt%2BcyCZMcL%2FrQZWMcZucY8d5QJf%2Ft6dBHPzSWOhmSkT%2BSAu58xNDQzzxLAUI8LBcqPZF171nbX7WBzjS4xekoZisX7tl60uFGNvqQEOSnkrceHoprIcfI9Xna%2B%2FTTZVyuACFM92DxgI8T2D44YxeKZ%2BKotABe4OHkkUfsCXr&X-Amz-Signature=829ddf65386651d257825fcc1fd9c846fd5c73cbcf594b58d7ef106aae6d320a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQK6QPCH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLP7ITc6HHpD0lcVocZU9vjKfJN79KKTI8ywKdUU6mCAiEA5%2B%2FXB%2Fvy2Kbq7VKS6%2BrjBK5owTC2AffzODvocVllXXEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMNEw5KkMuWntXnPKCrcAw%2FUIPHiMfqL%2FxBg1TKDKxq%2FFkLUi1lW9q%2FrY2o8QCCBG%2BEf6xSFNdpI5YkTUfvT9R4XrsdV03jACQSm8bm6FiGM7utBK2L%2BXZW9qETsm2aVHB0GjIzeUPp6kKxvR3Nm4ef26wPwgCqJDegTUEZKXw5tk%2BfPz6lSpQz6hW8HKsEF2b9XKNebu2bR3o3eWGrvfsTTSH5bplhREaYcsAar6BafSTSlmrxVWSuhi2ZHKr7Lwp5N%2F3G6nQuPIZ3FI3DaGrII9NRM1vOdVVocr2HFRUjy24mF1Mfz%2BjYZT7qBDR8WQh%2FRT56AuBRY1sYWDkgJ0A5slIO1Js%2B%2BvNuAzkNZ8p9sgEyj3OzIdTMm2Spr6sOlQOehlQppzt64Ecteh7UI4uXJUCWgeKbRGcRX3FVTp%2Bs2GIE0xz4kvdKhQapL%2BE1M9wUCuwhiqQbRmfJpfW7Khht125NuC4L6g4CiUtEEgL1TRWCTivX%2BFZVNdMF%2B%2F8ppvTjFcjgujwjPDN%2F2NB%2BDdbDsOmVnt68sIFcCymy70VS%2FYUQ0pYCqWWySau87YUQbVrIn53qqYlM25Br9xEf4x0z8eD8l6RebB3PSfEC0rmvMb935gyIzNM%2BtWiYNFwlpEa3LuYYaLBSzU4tVMKzYhsAGOqUB92Q0EWDVP8zXu5%2FGTn%2FF6kJmPpky3cp2QBqOcxZXo7eTMEXf15Ol80SMJ9yAmcZP3qEgwGQ8kCdPKMoCEX0koI4wfAGPHCpIMrlD4YwwNHInqfD0FSusO91IlU6L1zZjijYOnMLsQFiBxC7TogfSbXp0OYwvwT6UXKoQ3EkALqcIzAxGELWNIuE%2Bsf1hmsO03I2wVtpDVC0A9R9Zzg%2B7kk3kk0Io&X-Amz-Signature=577a9c071578c7d4298a6b2bbfb3984eaec9bb7443c9fdd4c01357857b1af8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
