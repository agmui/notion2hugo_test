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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGB67UXC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpEHnZCkhc7bRjynzikR0SsMAsyIl5ydGfKmJ%2B2EVI%2FAiEAjSoWELd48CyZplqLo6fi%2F6huJpQr86cj22fzM0fMsCAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA6kmIOQdlW2L8MhPircA4XoyidB50vZO%2FB3WFUAiP%2BOttoUu2HsnhPrdiolpxMtFCBGsW0ESbWoBuZietjSLnLu%2BFrZG7tv9VorzYiXdiaWZMGblB2iBat1crz8NkPqjo0s8MUaJa0RXiDohM%2B6pENDEjPOcyTZcINqLcZ0l%2Figao0eeRXVVNgtzFiFAkVBJ78XbjniemZgshaxhQ9xIkL%2BpqzSqJtQiLwXfvm4asfkdyiE%2ByAuZzojPAtWnPG2oEvzKFIOdPpHp0Q8FcTh5qoeYX5Uora%2FrZAQkDp11%2BYW0Ys%2FPV2w2mYM1Kmrs1FhOfttoZbNdNaeNxkxziZfyi0kJxW5GUAzBfaCBq3RD3HCoso4oPFrzq0wGxgyxvPpFzRlXjuksL%2FesVGl0OK5FlnanDhk8T2CkxchT9re5Dy71O1V9Pdz02jFbk6aefI1MT0fcADrZHvNDivkiZ2dlh7jbiE4iaPp5lvewgdTs26D1%2FcDfNCO%2BnQcaW9KtadW4YyPJAlH1u7qcFpJDlTpX%2FhOBul5AF2Wqh4KjVHAk1n5jw5yUbdRLyzDKOwfy%2Bc%2BAuLrp7KhsfetoIRXRaAulFB0LhmhqF8DRpcUlkmvsJOXUodz187iKcSp2WfN9TcIEZP6dVc9%2F2uAwjPBMJqr%2Fr8GOqUBVo7tgUgrarCZ4zEeJNQM6pDbw8kHeFUTBl6G2OZ5Meb9ptjtv5P5HWmj%2BLu98oO2jL7Y%2FLiLu%2BsKA9m8sd1WygLU36FfYdNnP6v4yxyESKLs2qHmJMl20f%2BgT7eW%2BCag65LELDjB4QhkPo2uJXo9aiCbKISDGyaMllpUnfKuavG7tPwWLulkiRl%2BQxcbPygpjCCpjGaBSdIGRCaRwWgr8MS9QwOv&X-Amz-Signature=9fa96c6192f3ec9f335f398f22a2c311d4d5b1d4540bfab92555a92fb6e9f2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGB67UXC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpEHnZCkhc7bRjynzikR0SsMAsyIl5ydGfKmJ%2B2EVI%2FAiEAjSoWELd48CyZplqLo6fi%2F6huJpQr86cj22fzM0fMsCAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA6kmIOQdlW2L8MhPircA4XoyidB50vZO%2FB3WFUAiP%2BOttoUu2HsnhPrdiolpxMtFCBGsW0ESbWoBuZietjSLnLu%2BFrZG7tv9VorzYiXdiaWZMGblB2iBat1crz8NkPqjo0s8MUaJa0RXiDohM%2B6pENDEjPOcyTZcINqLcZ0l%2Figao0eeRXVVNgtzFiFAkVBJ78XbjniemZgshaxhQ9xIkL%2BpqzSqJtQiLwXfvm4asfkdyiE%2ByAuZzojPAtWnPG2oEvzKFIOdPpHp0Q8FcTh5qoeYX5Uora%2FrZAQkDp11%2BYW0Ys%2FPV2w2mYM1Kmrs1FhOfttoZbNdNaeNxkxziZfyi0kJxW5GUAzBfaCBq3RD3HCoso4oPFrzq0wGxgyxvPpFzRlXjuksL%2FesVGl0OK5FlnanDhk8T2CkxchT9re5Dy71O1V9Pdz02jFbk6aefI1MT0fcADrZHvNDivkiZ2dlh7jbiE4iaPp5lvewgdTs26D1%2FcDfNCO%2BnQcaW9KtadW4YyPJAlH1u7qcFpJDlTpX%2FhOBul5AF2Wqh4KjVHAk1n5jw5yUbdRLyzDKOwfy%2Bc%2BAuLrp7KhsfetoIRXRaAulFB0LhmhqF8DRpcUlkmvsJOXUodz187iKcSp2WfN9TcIEZP6dVc9%2F2uAwjPBMJqr%2Fr8GOqUBVo7tgUgrarCZ4zEeJNQM6pDbw8kHeFUTBl6G2OZ5Meb9ptjtv5P5HWmj%2BLu98oO2jL7Y%2FLiLu%2BsKA9m8sd1WygLU36FfYdNnP6v4yxyESKLs2qHmJMl20f%2BgT7eW%2BCag65LELDjB4QhkPo2uJXo9aiCbKISDGyaMllpUnfKuavG7tPwWLulkiRl%2BQxcbPygpjCCpjGaBSdIGRCaRwWgr8MS9QwOv&X-Amz-Signature=316f4ea27a254bbbcadb5e7364e3c2dd9f6e33bdc25e2b99319c91446fbf52ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLI3H6IU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIhnK0wyd18vjRG1zgcc8fJX2GAVwMbcfDyfx8I9XvZQIhAJO5PsK52WbrUHXYSL1wOAf8Hbdy6wFN7jOjis3i4mSNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwK1O%2FfcZuLgtbOgj0q3AMMv5AEm7LPWI92JnGlBnbIyRdUjK6I5ahWV84OB0AA8Pc%2FTrIMjFA0SP62df9pSaQTsjDKW92QIaZvDdzix70cZOcfd0Jpzy3H%2FT55bYTJGO1mYjSNOXpqawCGU3PCrEfYb%2F6enYvdd005arFDcEXg3d2WSy9%2BdqW5tQJ6EtZda3lmtDka%2Fk9ZdDyeHzgG%2FRWSlj431eEAXU2lai%2F9VJD%2BNDxeOIB5JG%2F3MjSUN7EYBrC39DnYEjCdSoXMEhg%2Bgk1wy4zYM5bHRzfJkO4iNf0Fq9DBi7LVzJmTD5pUSiAOsu%2FWByEX2lFP74pZTtzBQKokk%2B5zlVly9NUMOQ7tRyb3DD59aqN7tA2L1YIFJgQuVk7YWNbaanou318yJp%2BPL8WWwRhQPYVwAOAaaCfIt1mv7RfN3a%2BvQLjwqxHhUhNVt%2FCOBiRGM8MZHpOjlyd9giCu0QSLHbo9iFyAAjwe9kCb%2B1LhBd2UhcsB%2FiGiik3HYduvGu9i3IkV9ceCvVT3P8EWKQJBDiwK5uYd062EiFC2KrONNsi%2BpfNTwy5Pgvwm52GEAr7mZusJKiN5ubG3IcfrZGMUHB3LOBvOndhDjRyho01mddrPNQLA3wRuPvfg%2FGF7Z5voR%2Fq4SKavIjCAq%2F6%2FBjqkAYz%2BhSbX9S9Z9lGmlATi1ViwHdAXVisro05v0qZEa%2BtYbLR1ppbPiIxg%2FsB8HAsUZK1cma0FpXzaliITeWJmDJuLW%2FVWNeZdZPC4lLvlLga4T4h44qJxvzo8vXNoWx%2BeOTFYeSqb1YFQQtJ5FfoTGjcpBCWVo45ueaLIujFIGr64zMyuhxn90AaYbSXZM1BclaeIjHRuJOXAO%2F67PY0KN3L57c7h&X-Amz-Signature=f55dd1e765a4c060ca2e6b8dfaf0bbd14d2afcd6f819aa09a175f3ea1558f392&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEASMJRZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0vFSIKeR1EAGUGhqq%2FZmyKP15KcFjfjd6VxFwSamg%2FAiBN06G3%2FiPFya66ih1GzSGtlaE9wu%2BcVI9oSqcHwLV9ZSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMZfsw7N0lIH0y1A0kKtwDpfCjM5OhEYjiwvf3tuWozfjT3%2FAGz%2BizPMMQuZDcJpmstHMxD%2BH0mYWKGRu95yujI0oirZ9kwtBedBJYxPZNI%2Fr0LPZxtXPm9eoI1gPo%2BP3GJGkX4sdyb0tBVilQHd%2Bji%2BBKHFoSZ6Z6afuY8V0OQ6tFxYaJvpaU6FAkkXTFWSPh0do%2BGczSrDPYr0IdRBvTUVisRFmjoEpoLL%2F5w2ELzWlVnr%2BGNtYwRGkUmxsSWwwIc4jqoqamQYxLtiYWelcakjSQZyjGNj1YQArUKiPBeQTDtSO%2FGe0u%2BgJfB45WoQySS4tC28Gf77W0mSsn2n%2FaiVgYDOtIR424gV7gOwgmAhM6cCziufDsVu05cSF0DZmSIiYvmaK0UBwaWu0HCUrHcJ%2Fv8PG%2BWJa5un%2BYpADsZkmjxFGS8mAIolhEpgJcWBqGJgsvWHXPFZPyh9bU7DO99bogzowKksrJTD0x2GbDQFADIjfM78CPbf7O9kc2NO280i6og3nuftaKW6sc0P4LbJ3JvygSdxfTEFZ9K7W2PkKkJl%2BWI7b3tJJrxkCBsIJEhLQYzsrrB5iE6CcrQBgssRtYiaq018oJJ6SRbUV4NsXTdLaln1jePTdk8uWCzAx0icLWBKdtc8h7sX8w4bf%2BvwY6pgEdmxOK5qd7Xu6sPVi9JSJpGbXDop3DAdrWFo5O092gaDSwlmYFvONG5yhL3hHutZhCRgUZBSb06GQTAaSxxOL1WCB3XB42MwOEZW3vlVMzQwGIt5x0P5akoLnLEocqOTDEI0%2Fo%2FAB3MGhWtSdQsxYI3eGPal4ybX0LYBIRuC3L709DS2NK%2FzMkwXfX1bApIDyrZerXM8HfK8l34wPVGwd3zWGMIU01&X-Amz-Signature=8435143391c8f3c359e664e52890031446fd75b976165754bb82c8b7abab8a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGB67UXC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpEHnZCkhc7bRjynzikR0SsMAsyIl5ydGfKmJ%2B2EVI%2FAiEAjSoWELd48CyZplqLo6fi%2F6huJpQr86cj22fzM0fMsCAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA6kmIOQdlW2L8MhPircA4XoyidB50vZO%2FB3WFUAiP%2BOttoUu2HsnhPrdiolpxMtFCBGsW0ESbWoBuZietjSLnLu%2BFrZG7tv9VorzYiXdiaWZMGblB2iBat1crz8NkPqjo0s8MUaJa0RXiDohM%2B6pENDEjPOcyTZcINqLcZ0l%2Figao0eeRXVVNgtzFiFAkVBJ78XbjniemZgshaxhQ9xIkL%2BpqzSqJtQiLwXfvm4asfkdyiE%2ByAuZzojPAtWnPG2oEvzKFIOdPpHp0Q8FcTh5qoeYX5Uora%2FrZAQkDp11%2BYW0Ys%2FPV2w2mYM1Kmrs1FhOfttoZbNdNaeNxkxziZfyi0kJxW5GUAzBfaCBq3RD3HCoso4oPFrzq0wGxgyxvPpFzRlXjuksL%2FesVGl0OK5FlnanDhk8T2CkxchT9re5Dy71O1V9Pdz02jFbk6aefI1MT0fcADrZHvNDivkiZ2dlh7jbiE4iaPp5lvewgdTs26D1%2FcDfNCO%2BnQcaW9KtadW4YyPJAlH1u7qcFpJDlTpX%2FhOBul5AF2Wqh4KjVHAk1n5jw5yUbdRLyzDKOwfy%2Bc%2BAuLrp7KhsfetoIRXRaAulFB0LhmhqF8DRpcUlkmvsJOXUodz187iKcSp2WfN9TcIEZP6dVc9%2F2uAwjPBMJqr%2Fr8GOqUBVo7tgUgrarCZ4zEeJNQM6pDbw8kHeFUTBl6G2OZ5Meb9ptjtv5P5HWmj%2BLu98oO2jL7Y%2FLiLu%2BsKA9m8sd1WygLU36FfYdNnP6v4yxyESKLs2qHmJMl20f%2BgT7eW%2BCag65LELDjB4QhkPo2uJXo9aiCbKISDGyaMllpUnfKuavG7tPwWLulkiRl%2BQxcbPygpjCCpjGaBSdIGRCaRwWgr8MS9QwOv&X-Amz-Signature=8c9080ab4ac7eed56bfb0cb16904e7a87497b66f9ebd8be7b57f4b70348c54a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
