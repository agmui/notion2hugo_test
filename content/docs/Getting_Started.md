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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6U56B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE02dy4QelcpA6DnlFWhmZSBJ2T6oC0f%2B1zXcp1RdbeWAiA3kd87Zg0gx7hUIIVwsg7iEgz7gsyypttLSluocH4nxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOY9dtQO5HABId1MoKtwDhHAmAbE1ruMNMWWDH7WceEP8fKMxxL4wi5iQzbino76%2FLydYig89ud3ijV6hk7bKCctKKrg9GUi6vI2N9JtxkVaHlkZM5Rk%2FSLUNG%2BIvBzsR3nFBf3MOMoJctY6sB2Mi1orePF76ARu6a5VsqeWOkTBPxfVq5iy6HaaHtxj9fCLTvGTheMKB5DnceswMO881noE4ccktGJrPJTvpvGQwYMBCS7lIy5Qfo2oqsbO0kGCCWJY%2BgJd1gqwfCy0DphNL2zDbe78Ke96QwtYhBthPrEtKaMRBTPViH%2FMJFfkBAtlpwENK2l9spR6Q8NceqysSDKiQlJJyd07%2FS8I2Posk6sArsQEpUxmQ6MeSNneITIAMubLz3%2FjnNjXyv9mkTZp1pcvRX1bHrr%2FDXOQSqz%2FpC1YNxAxpebI%2BYY0tbrizxAtJGE3fT1SvDeWo%2BuCwLNrYqmmEwhA4l8Y939fZThfPX5ZJtLEY91dRA0cbYcxYX0%2F3lU6nj8FOXdVNWKe1EH0d7xia9A%2BCK2%2B7PXkMsL8ujRHpuJWyR7l86xu7sODhA6fKqXC7B2F51PsfC2Zm9Bui7yJ%2FI5Wcldkm21zvbklsYnnKV6izps6bFzYUT7NqLb2IEnKbXLoBiQzyw44wmMK%2FwQY6pgGfzYi7V%2Brw%2F0pSya4hfjG4CkAqTIPAbUl%2BUBf8a6Q%2FdkNHhTG5VuoiMJey7zKsAyhA69GSQVnucnRCXl%2FTewjUc54fjeSdcZqK5WiBEL1ZVDuWtp60m%2F6UsmVGoLMc0wr0VK9yarnRxH18Z17NQxsiHr2aU4aWcP6Fa2t0JNl9OYeBjfrWL49vdccJoOrygPKn045EvmOfQQTIIgxHkcCHKX%2B0UWWs&X-Amz-Signature=4561cd1a619392fb08a166f7c28f392709251abb977e7792fe3f7f0b48e8d7db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6U56B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE02dy4QelcpA6DnlFWhmZSBJ2T6oC0f%2B1zXcp1RdbeWAiA3kd87Zg0gx7hUIIVwsg7iEgz7gsyypttLSluocH4nxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOY9dtQO5HABId1MoKtwDhHAmAbE1ruMNMWWDH7WceEP8fKMxxL4wi5iQzbino76%2FLydYig89ud3ijV6hk7bKCctKKrg9GUi6vI2N9JtxkVaHlkZM5Rk%2FSLUNG%2BIvBzsR3nFBf3MOMoJctY6sB2Mi1orePF76ARu6a5VsqeWOkTBPxfVq5iy6HaaHtxj9fCLTvGTheMKB5DnceswMO881noE4ccktGJrPJTvpvGQwYMBCS7lIy5Qfo2oqsbO0kGCCWJY%2BgJd1gqwfCy0DphNL2zDbe78Ke96QwtYhBthPrEtKaMRBTPViH%2FMJFfkBAtlpwENK2l9spR6Q8NceqysSDKiQlJJyd07%2FS8I2Posk6sArsQEpUxmQ6MeSNneITIAMubLz3%2FjnNjXyv9mkTZp1pcvRX1bHrr%2FDXOQSqz%2FpC1YNxAxpebI%2BYY0tbrizxAtJGE3fT1SvDeWo%2BuCwLNrYqmmEwhA4l8Y939fZThfPX5ZJtLEY91dRA0cbYcxYX0%2F3lU6nj8FOXdVNWKe1EH0d7xia9A%2BCK2%2B7PXkMsL8ujRHpuJWyR7l86xu7sODhA6fKqXC7B2F51PsfC2Zm9Bui7yJ%2FI5Wcldkm21zvbklsYnnKV6izps6bFzYUT7NqLb2IEnKbXLoBiQzyw44wmMK%2FwQY6pgGfzYi7V%2Brw%2F0pSya4hfjG4CkAqTIPAbUl%2BUBf8a6Q%2FdkNHhTG5VuoiMJey7zKsAyhA69GSQVnucnRCXl%2FTewjUc54fjeSdcZqK5WiBEL1ZVDuWtp60m%2F6UsmVGoLMc0wr0VK9yarnRxH18Z17NQxsiHr2aU4aWcP6Fa2t0JNl9OYeBjfrWL49vdccJoOrygPKn045EvmOfQQTIIgxHkcCHKX%2B0UWWs&X-Amz-Signature=2a115a850857e4eea465d306e73a5697e0fd5e7a98aa3c5aebea7b26c7e14c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6U56B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE02dy4QelcpA6DnlFWhmZSBJ2T6oC0f%2B1zXcp1RdbeWAiA3kd87Zg0gx7hUIIVwsg7iEgz7gsyypttLSluocH4nxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOY9dtQO5HABId1MoKtwDhHAmAbE1ruMNMWWDH7WceEP8fKMxxL4wi5iQzbino76%2FLydYig89ud3ijV6hk7bKCctKKrg9GUi6vI2N9JtxkVaHlkZM5Rk%2FSLUNG%2BIvBzsR3nFBf3MOMoJctY6sB2Mi1orePF76ARu6a5VsqeWOkTBPxfVq5iy6HaaHtxj9fCLTvGTheMKB5DnceswMO881noE4ccktGJrPJTvpvGQwYMBCS7lIy5Qfo2oqsbO0kGCCWJY%2BgJd1gqwfCy0DphNL2zDbe78Ke96QwtYhBthPrEtKaMRBTPViH%2FMJFfkBAtlpwENK2l9spR6Q8NceqysSDKiQlJJyd07%2FS8I2Posk6sArsQEpUxmQ6MeSNneITIAMubLz3%2FjnNjXyv9mkTZp1pcvRX1bHrr%2FDXOQSqz%2FpC1YNxAxpebI%2BYY0tbrizxAtJGE3fT1SvDeWo%2BuCwLNrYqmmEwhA4l8Y939fZThfPX5ZJtLEY91dRA0cbYcxYX0%2F3lU6nj8FOXdVNWKe1EH0d7xia9A%2BCK2%2B7PXkMsL8ujRHpuJWyR7l86xu7sODhA6fKqXC7B2F51PsfC2Zm9Bui7yJ%2FI5Wcldkm21zvbklsYnnKV6izps6bFzYUT7NqLb2IEnKbXLoBiQzyw44wmMK%2FwQY6pgGfzYi7V%2Brw%2F0pSya4hfjG4CkAqTIPAbUl%2BUBf8a6Q%2FdkNHhTG5VuoiMJey7zKsAyhA69GSQVnucnRCXl%2FTewjUc54fjeSdcZqK5WiBEL1ZVDuWtp60m%2F6UsmVGoLMc0wr0VK9yarnRxH18Z17NQxsiHr2aU4aWcP6Fa2t0JNl9OYeBjfrWL49vdccJoOrygPKn045EvmOfQQTIIgxHkcCHKX%2B0UWWs&X-Amz-Signature=bef6f4b4201f12c579a6efc5759846cd2971e264ef34533c6c4bcd3194e32317&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AJWFWK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEaMc3KGWbj4CxvFMrIMmEZ4TYvJYXMigZD1UP78GcLJAiEA9m3T%2FVHF0mXvUGeCxlXIFtxlZBZrDE80ft4j1KHoPGEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTKm8FQXnCrRu1x8yrcAy9RdrDnistAU%2BHdsCsIQq9bRdR61lbnjbGWecU1Wa%2FyTN1mzN7z9ayWYwBEtzYsywBEQL3NoFSmp8FlR4PkdOMDpAHbkUL22DiMtt2np9cHXzW45CleJz7%2BCV4gjuTYBm4yCyjOuiou398PrBQ5mkKpzavtnzHLyCifExp9rtHKVVxD0WD3anaGqT4UreJwJ8Nh8MkkNjnbULa%2F5KGuhkv46yZPozPYDKDgiv1kimWp3%2Bl%2F%2FKqrFzOObtAqLsS3O4ueR21MLRHZPlGxNfHkzJzkMklx9nAsmqRFTK%2FyosEMQ4cHC1cumSYfV9KHdsOPrI9hbJ7P0qaEeLMdq5OTmz0beayge5M6TCz2jyVz9b7g0PjrMgQrW5ATD8NPYAuW0ddJB1qEk7ox6OL3kQaA2ERSpE2hbbMm0HYBfAaqbpF2nahtsOt46yDLLmeE2oTgU4rzQLNs9CW7cbD6lSCzTR78ZyeOo2x2AAjcan70XdTNeUlWUu09LqbQK%2BtLpECnYL2UXOjIzMDyE14s0KUkp%2F9hCVOsMENMtyzw9m%2FDp%2FlomZ621TMzzQrRoCmfGv0SfG4t8UNo99CKwwBC60VGOvNZuTRf7oQVLOerRrOu%2F241Lra%2BfjQTpnIEp6DrMPfBv8EGOqUBCidVIjbr9A%2Bw1ihJktKHza0pc80xIQc4AX%2B2CfxS%2BckRTXG2fMt57M55UKlJbG0qvLIhrkByREMSykMWPJU%2F%2BvnXwoLKp%2FFL6ytEngYIAKTxWvk74r1CdoTlN6fSkXOZdEDmHKl04bcSV8uZQV5B0fMJmV2jZHfhFR1GhwFGN%2Fw5blUK6Ymb2%2BVy1TT6a9GnqYaJDQK0fThOFgPJwWxzSe1Ok2NV&X-Amz-Signature=b28d753b171f71edc20968f1d57ba4a3f0a2b37e5e858f721beedbd08a328bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHR3RX3Z%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCAoeiMO5qIGRbxBfpYC7mb7hSIM9%2FQ0xqF9QalBiR0qwIgHA%2BzeOMopvlthIa3Fw2dmZQyOCz6qHJJGZdlOijkP0sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsTa6AqtcRfzHXh1ircA0QhvGiHYPeMNVUHC9alT3kPhtdJwS6hkZtpYbZacJKMIDfM2PMxbTbg9UmOZcdaHhL%2F%2B8iGS%2BY0V70firUPy6IMx1xyuLyx1%2BQTmjYvc3iMO%2FdSjLd%2BvTKm1o0nmhImRuhlOxc5cXZzm5jh4DkLcY%2BiFnfTwKJ%2Fsdh4xU%2B%2FJ3kvd8Qw2dszhwK0RalDaxoeDZ0s9rn0EMezEBjIiWg3%2F6IM1FeL3f%2BdEUBY67H8PQKTbR8HBPMWwc%2FQ9Tv%2FgcOu2%2BZtwRnliNi%2BLICLzIXu6aU%2BPqe%2BmxsMCzzNBr2OKmwd47KPx88Ape6M2oJCfYRPBWsZKBjGbITFjjDBxgUim%2BYkdyapzG297HKox%2BF081l9NPby%2BzdVQLhRtqvvVycPmUOHbcgRGGgNQGhE4hPlgc5a9h%2Fn8WH70Ph8wXOvr99S4t6pbg%2Fq8T6tXJXV0cpL7smWKHD3mRQ1KJCnJ7%2BjFh6POLeRVgBcyp6BxZxguEClSn2WpjZFveJIw2bAeq5XVwICoSlPJkdiakvSyjQLJMpe8TDzK%2BKl4E3QwW%2FgZQaepVWQntfdTZpSN%2BDKmlaRGjKJUQQAymH16pJ7UcBotJioFHha31so9AlvSKClQO39nnkw2T0WYVlO8s4uMPrCv8EGOqUBK8sfkGVwrO9zoNxJ3DqFvK%2FHQ8zhsv5MVShN2AnOH8cEB19WU32GlSiJod1Y%2B%2BfXhyyHeNvvenzBSjV2f8%2BzJj1smq%2FBu5wuTVtBtl3gvDsiM70%2BrhiU4GN%2FPji9IufDqIkX%2Ben7P67gUoU9dz%2BZhAlytUKpouzSJLs1tQFn9RpIFVbyHUMQCh7QDpLy2ht2Wmw1FQLeSljJUpskyltt646LPChO&X-Amz-Signature=1e72ed09a90561609e20a94e95a3defcb67184799b9bac33db5c92e903bf2b88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6U56B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE02dy4QelcpA6DnlFWhmZSBJ2T6oC0f%2B1zXcp1RdbeWAiA3kd87Zg0gx7hUIIVwsg7iEgz7gsyypttLSluocH4nxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOY9dtQO5HABId1MoKtwDhHAmAbE1ruMNMWWDH7WceEP8fKMxxL4wi5iQzbino76%2FLydYig89ud3ijV6hk7bKCctKKrg9GUi6vI2N9JtxkVaHlkZM5Rk%2FSLUNG%2BIvBzsR3nFBf3MOMoJctY6sB2Mi1orePF76ARu6a5VsqeWOkTBPxfVq5iy6HaaHtxj9fCLTvGTheMKB5DnceswMO881noE4ccktGJrPJTvpvGQwYMBCS7lIy5Qfo2oqsbO0kGCCWJY%2BgJd1gqwfCy0DphNL2zDbe78Ke96QwtYhBthPrEtKaMRBTPViH%2FMJFfkBAtlpwENK2l9spR6Q8NceqysSDKiQlJJyd07%2FS8I2Posk6sArsQEpUxmQ6MeSNneITIAMubLz3%2FjnNjXyv9mkTZp1pcvRX1bHrr%2FDXOQSqz%2FpC1YNxAxpebI%2BYY0tbrizxAtJGE3fT1SvDeWo%2BuCwLNrYqmmEwhA4l8Y939fZThfPX5ZJtLEY91dRA0cbYcxYX0%2F3lU6nj8FOXdVNWKe1EH0d7xia9A%2BCK2%2B7PXkMsL8ujRHpuJWyR7l86xu7sODhA6fKqXC7B2F51PsfC2Zm9Bui7yJ%2FI5Wcldkm21zvbklsYnnKV6izps6bFzYUT7NqLb2IEnKbXLoBiQzyw44wmMK%2FwQY6pgGfzYi7V%2Brw%2F0pSya4hfjG4CkAqTIPAbUl%2BUBf8a6Q%2FdkNHhTG5VuoiMJey7zKsAyhA69GSQVnucnRCXl%2FTewjUc54fjeSdcZqK5WiBEL1ZVDuWtp60m%2F6UsmVGoLMc0wr0VK9yarnRxH18Z17NQxsiHr2aU4aWcP6Fa2t0JNl9OYeBjfrWL49vdccJoOrygPKn045EvmOfQQTIIgxHkcCHKX%2B0UWWs&X-Amz-Signature=6f7240937c239b2eb765b44fb169b91eefc76c6dea7c8c6b443541901063537f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
