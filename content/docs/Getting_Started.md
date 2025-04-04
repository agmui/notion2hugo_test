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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7VYL7YF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKz0TMElUJ7w%2BgtkxJxCBLuZWlYqSOUuVzDeDbQkVRvAiASvueMDcykKreRi6D0Xun%2BCiup5ZE0hzufE6HJahSjsCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnuaYiF%2FPFQSQZQ%2BKtwDJTEzroNLQHCiMnbQWYqwORBGDKQkVCWHFOIBB4w6NXtxqsSvHPWXtEczQqo4KHrFqn8YefWVmI1jXkweu8IxFpRGeNzvLCZNeuY2kvJUIOD6w73UeZQV49u8eTHT2KlAC0pK6RO8QGpyEIO6jpZ4%2BBvHo%2By4NTAu9LJ5ba3AkWkrEgFocORNczt%2BJKLOwxP4qzZXbiA1GmPupSxN2rEtmlw9f4Qo%2Bfle9Ymg33WnUCCPH7zqMBKVXub0b%2FfdQuoJjs0mUmarhCTnS6EQ1DFxLz6tWL8AB1u5xBXkJzMgZfLIcQpC0%2FALXG81JG3FDiJCb3gJTz4k31SXZ2DryHAUdOjJ2t0NVf%2BOAansi%2FTfNXYZAjQjlXFE6hGxCMEF4wvFbTBoH9f2zFGaNj8yWCiRx7xvsrCItrvKecFK%2FMq8aDiR2aHd3i8NvpbYI%2Fed%2FH5MvPpSGA4yGswyAjUFo2UW4CsRV%2Bv%2FVFfBFJlnvhpFXFV5bofl2Ogu25h9YSM1FVtheRMqbTCQlEINbyg3tcdo1amqIGGqXR7A4NDLx%2FuokhWgwHSDCBX7VzRWr4E35feRPkZTopEjjEjx0um8x9%2FwVpnuvaF0wcawKMts799OZeQTFFGrVF6QaztCO0sw5%2Bi8vwY6pgFKQQpNXBW7K77Do3hLEx%2BgwbctBIRnKQ74wLW77UOR0IeQ0KPAN3SQMJMpB8MTW0PgXK1YhllRc1NCladb5%2FyFYEaa2Kgy9%2BsVcOVnkE0JNOEivfsUHWGz7Z6IVh3wr1Q4FMbiafNFSNKtklLjIeLe6G%2FjWbJWkpRCSVLd4f3mGXcJ9prqGBEDFSeKEXDEcRyFI%2FQk6mkI%2BI3NLoznZ0Rx6ZHlAivb&X-Amz-Signature=02d30517c689d20685f65e85a8f101d266a4d9a11b2dc42df367f2f77b189d84&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7VYL7YF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKz0TMElUJ7w%2BgtkxJxCBLuZWlYqSOUuVzDeDbQkVRvAiASvueMDcykKreRi6D0Xun%2BCiup5ZE0hzufE6HJahSjsCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnuaYiF%2FPFQSQZQ%2BKtwDJTEzroNLQHCiMnbQWYqwORBGDKQkVCWHFOIBB4w6NXtxqsSvHPWXtEczQqo4KHrFqn8YefWVmI1jXkweu8IxFpRGeNzvLCZNeuY2kvJUIOD6w73UeZQV49u8eTHT2KlAC0pK6RO8QGpyEIO6jpZ4%2BBvHo%2By4NTAu9LJ5ba3AkWkrEgFocORNczt%2BJKLOwxP4qzZXbiA1GmPupSxN2rEtmlw9f4Qo%2Bfle9Ymg33WnUCCPH7zqMBKVXub0b%2FfdQuoJjs0mUmarhCTnS6EQ1DFxLz6tWL8AB1u5xBXkJzMgZfLIcQpC0%2FALXG81JG3FDiJCb3gJTz4k31SXZ2DryHAUdOjJ2t0NVf%2BOAansi%2FTfNXYZAjQjlXFE6hGxCMEF4wvFbTBoH9f2zFGaNj8yWCiRx7xvsrCItrvKecFK%2FMq8aDiR2aHd3i8NvpbYI%2Fed%2FH5MvPpSGA4yGswyAjUFo2UW4CsRV%2Bv%2FVFfBFJlnvhpFXFV5bofl2Ogu25h9YSM1FVtheRMqbTCQlEINbyg3tcdo1amqIGGqXR7A4NDLx%2FuokhWgwHSDCBX7VzRWr4E35feRPkZTopEjjEjx0um8x9%2FwVpnuvaF0wcawKMts799OZeQTFFGrVF6QaztCO0sw5%2Bi8vwY6pgFKQQpNXBW7K77Do3hLEx%2BgwbctBIRnKQ74wLW77UOR0IeQ0KPAN3SQMJMpB8MTW0PgXK1YhllRc1NCladb5%2FyFYEaa2Kgy9%2BsVcOVnkE0JNOEivfsUHWGz7Z6IVh3wr1Q4FMbiafNFSNKtklLjIeLe6G%2FjWbJWkpRCSVLd4f3mGXcJ9prqGBEDFSeKEXDEcRyFI%2FQk6mkI%2BI3NLoznZ0Rx6ZHlAivb&X-Amz-Signature=80adcd804c0271914fa9b902334728048b12bb9462abdfc3ba64bd4fc486ae33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAM7GZIN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC12kluYY5VgCTahUP9kAhLKCZtBhm27ikpxx2Pit5vmwIhALV5t8OEg%2FLIPHvPbwiCheArZOHvtCXyPlgMYT7VigywKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfbVcveJm8%2F6OBwGkq3ANM%2BvCt%2FHzMYMtxUuVBf8MNxNQ5iHdDIVAP61ywq7Qc3Gn2DryrKZBaKf0vsVbK67o5C6Yisf96xSTGFhIFfvFYNg%2BlV%2BLsBQI6oOrn0m9WumVROZ22l6yTEjtsN5uHME%2BYUSlZ6LJIL6w6nQ8mbVBVMFzJq7wnPcDNLmXnjY77QCQiAqulFI6edzV%2F%2FaUZwDl9xRpmZyR4BScdsoDAXnk%2BGAlPJk9O%2BswuaFhOIPeicUEkyp8uv5vTNqZTe3SYDpbgToqQnrEvZtOXSZPDlFTR0ecf5dNC3qiB3uCH9mV6W6vKrOb%2BPbv%2BjtQj2lqmerPgNI%2Fd2CNpkW4qjOlVHIrctftnQ7jFGKlzPjmb6Jjs%2B4T166vZDKdVyetvXIzV73g3Q1cp3KxcWJLR8kZCs9nWy9EcXWMRTwkfzLe6lm60xiQ5RHmvLcQxL%2Bd3Vx0IbIibgFp7kuA3BJBifg0KOiSoT6rfb34uiowr39Blvw%2FlboKgj28gfw6ZlLkxexz4cH9bInqbed5ktS94lZbxlS3jcGebiytWS1F%2F7Z6ZJsUEjtJxj%2Bw0donaBQhcKZZYI5DlQUmmh2vlH9wbid1TzdoW2cwAk0MFvkNYjRijg68RjWB3%2B3fh7SU%2Fhc%2BPJDD3gb2%2FBjqkARbZsaOKi1gAXRHO0Rgb4FmVGMPabtqWSm%2Bag5rsBtTT5HS3fl0ZMlQCwo3FoUuemdOBLw4ox9e9WQQq3J5G89nFBmGoXJLKJ9wTRM2Vyo245feVxwqNRKpILJbEVWEIM%2F08jdxzvLaUqZAtVSAmgCd257eElgejtT361yNuS65K1kkAp6BKMGulEmBRYT1huIOM16vcCr8nnol8KV%2Bpg6DV7JpP&X-Amz-Signature=1a11cbdc148bcef504623a826fd6330d43cdbfba4cdbd4a8fdc8583ff5d008c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DH7LDGH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC55OoJ9knCMguPivTx3o1NyzDaqWaDcLTjtZDJQd7HOQIgDc%2BDOxy9T84QcrpAss568dRKoK6Q4j9l0aoXEwHNiNsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAezp6l6OD%2FurV0G7ircA%2BQ1irSDDfHxuO5awU1gJ0Fuk2E4%2BYhJAb3f2kPDVkBHZbobE5AKd6GALSPD788whigTDQDlCypUW5jFJweyZ1af7gRcS5Rv%2BHGZvS1KjVfEO11VaOsmogayQHQ6gXByzB7jvIAYs76EfzKn9a10Ir2st7s71MDAbS8IBb%2BOFLuPl1t03OQmJhHOkuOX%2F%2FF15yc8jYoicI2aef4sY4cV865pjccE%2BKEcowbJ8p2VJ50lpCf9Th%2B2QVXrdZ1y9gvUAYvl2%2FH9sLVSa%2FoPlQFQjrcxWNJRP7dwTq%2Fm3jfEp05dGGsUCVdxoUx7YGYi6Mp0bDko3tplw5UBvLm4rluqWv75wP%2BMGwYCWK8vV6rj6xKan39DU4wLVRM5GBqoNdLwoU12wIWBWeDNsI0%2FgReI4osKUqeBxtwjj%2B2J%2BWBiFSl0ewmXipFp0jqaw6dwP6tIgE8S9jroji9tHaDcO83qX%2Bn0%2BhFZS2aR1BPfTQ4tqtN5y3CosQFnyxAaWJ2%2Fx2cEOjsbb6dp2W7FltXMCeQbw1tywe0RHrJSQa5nfUud8ooXdA2zJXaJAobqN%2Fbne9z4laiKMdansdM1lwFLsC4SQ%2FFgMbVh8kl%2FLgaPI%2FG4O%2BS3fjTQzIclZI38vQY7MICCvb8GOqUBnHlxRksS3Ft4VqrfcSEB2Ju6gkm3HeJmCV3DKs6TYQ3f9CfrqnTZG9ZZHhiCqij5e6KH17mWa%2F%2B6sXdIjsUf5RbDy7WZa%2F1R2mkSoafquyV1MW0%2Bnjv4%2B9PTBJ39Jy0F7POo3ixBF%2Fk%2BvMH3bxhtyhN3gWebxczYJYxGqhaulBrxUf3nsAcnqJt44bkNsYw19P%2BGwXbA%2BEp8WtTJ8955GN6ACgAB&X-Amz-Signature=ebdcb0c804849eaed642a8da096e5f89b083f581c2afbd89bee57b478c3ff164&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7VYL7YF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKz0TMElUJ7w%2BgtkxJxCBLuZWlYqSOUuVzDeDbQkVRvAiASvueMDcykKreRi6D0Xun%2BCiup5ZE0hzufE6HJahSjsCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnuaYiF%2FPFQSQZQ%2BKtwDJTEzroNLQHCiMnbQWYqwORBGDKQkVCWHFOIBB4w6NXtxqsSvHPWXtEczQqo4KHrFqn8YefWVmI1jXkweu8IxFpRGeNzvLCZNeuY2kvJUIOD6w73UeZQV49u8eTHT2KlAC0pK6RO8QGpyEIO6jpZ4%2BBvHo%2By4NTAu9LJ5ba3AkWkrEgFocORNczt%2BJKLOwxP4qzZXbiA1GmPupSxN2rEtmlw9f4Qo%2Bfle9Ymg33WnUCCPH7zqMBKVXub0b%2FfdQuoJjs0mUmarhCTnS6EQ1DFxLz6tWL8AB1u5xBXkJzMgZfLIcQpC0%2FALXG81JG3FDiJCb3gJTz4k31SXZ2DryHAUdOjJ2t0NVf%2BOAansi%2FTfNXYZAjQjlXFE6hGxCMEF4wvFbTBoH9f2zFGaNj8yWCiRx7xvsrCItrvKecFK%2FMq8aDiR2aHd3i8NvpbYI%2Fed%2FH5MvPpSGA4yGswyAjUFo2UW4CsRV%2Bv%2FVFfBFJlnvhpFXFV5bofl2Ogu25h9YSM1FVtheRMqbTCQlEINbyg3tcdo1amqIGGqXR7A4NDLx%2FuokhWgwHSDCBX7VzRWr4E35feRPkZTopEjjEjx0um8x9%2FwVpnuvaF0wcawKMts799OZeQTFFGrVF6QaztCO0sw5%2Bi8vwY6pgFKQQpNXBW7K77Do3hLEx%2BgwbctBIRnKQ74wLW77UOR0IeQ0KPAN3SQMJMpB8MTW0PgXK1YhllRc1NCladb5%2FyFYEaa2Kgy9%2BsVcOVnkE0JNOEivfsUHWGz7Z6IVh3wr1Q4FMbiafNFSNKtklLjIeLe6G%2FjWbJWkpRCSVLd4f3mGXcJ9prqGBEDFSeKEXDEcRyFI%2FQk6mkI%2BI3NLoznZ0Rx6ZHlAivb&X-Amz-Signature=d0602bf77f4161d957fdbd9e91c30cdba24830364f10a7cc046278b86702e343&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
