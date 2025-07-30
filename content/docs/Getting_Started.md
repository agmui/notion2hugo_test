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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4B5IS2L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm%2FmRLILd6viV6tDflv0p2o9pqqL%2F8emZ3UzDkYTEg5AiAK1k9qfp0SMVz1rponxWIAA8SQ6kOaSMWWk1UNzbxNYyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDqOJmTtn9yUYG5bKtwDUeJKE8Qv2VweRKkUvCjc0R%2Bf5vX0Oy2IadYgqatzMKkQ%2BmMUkUZEEwNJeDbQ4XgsGYt2Mq4qGjsBA6kKYoqwAo7Z40wi4qTIZKbGGO%2Bn3PSlIUfwllGEyWpV9agM4Rzlx%2BRuG2rscIW3mX8PA0maiHTAScIqdnXozHHNVhZJ%2BlvR%2F5WpoUL55Njkq5vydnSpR8jx021L1Z8Cijf%2BaBXG6czMCrvDWlQ7yqlayqveunDrIqjnf9FYZN56o6Z8OdwEK3mxKO6Rvaf8PB5%2B0cM5C4vXzmBqQ9Rb2piK2%2FJZorJXBa7IBfTnlrxGoytKbHaa9uWASyR%2F6ivTlMZnxxyOh1WpdDveojkAA9du2kMyNKGdCD0gk0ZlVTYKb6Uopj9JUL0x8RJCpQaYz%2FxR%2BEpKX7gTiSbbOI6G4VVJm180x2%2BXJ%2BRmfK26CQtdohRxw1DK6vHn0xUaM%2F%2B3yuRTH%2BPGxmFE3yuPb6eDO5tih4rPO9MhirZr0JWZWC1BTFxTcY6mDZkt1Uo0sB7SFhAxSJFE6QKF5AEUGLqDgy8c5G27OsnJ34FZsEe3l50BHKKLmdSF71B28f0myEBqfI824pcAq%2BAKXIHaYARlSPzVLZErcNYokAeQCAMAH7K7q3Iwm%2FKlxAY6pgGcLZZnuNFXdgXW8HyLHELsn%2BpEa7UuBgW6jFExbllLRMFIiDLGKC8vFB2g33J9IaSAHpdfHVYEXL0xolXsDGlDqEI841HuTLcNtU3xCmGGt3qL2gPWlLgbaIypE2rnHIGKvOtq2jV4pMC7b7tYMoK29UP747WEcGYDm2Xa2KMMzudkR7hJ2ZG1GN7mnwXBoCWJNiWkBSwh1dkS3q4R4yi%2Fj7vtCtUQ&X-Amz-Signature=465dc9ce65127b68a3730f2741bd9ca25d855c25b0598cc9e9506b4e017c46a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4B5IS2L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm%2FmRLILd6viV6tDflv0p2o9pqqL%2F8emZ3UzDkYTEg5AiAK1k9qfp0SMVz1rponxWIAA8SQ6kOaSMWWk1UNzbxNYyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDqOJmTtn9yUYG5bKtwDUeJKE8Qv2VweRKkUvCjc0R%2Bf5vX0Oy2IadYgqatzMKkQ%2BmMUkUZEEwNJeDbQ4XgsGYt2Mq4qGjsBA6kKYoqwAo7Z40wi4qTIZKbGGO%2Bn3PSlIUfwllGEyWpV9agM4Rzlx%2BRuG2rscIW3mX8PA0maiHTAScIqdnXozHHNVhZJ%2BlvR%2F5WpoUL55Njkq5vydnSpR8jx021L1Z8Cijf%2BaBXG6czMCrvDWlQ7yqlayqveunDrIqjnf9FYZN56o6Z8OdwEK3mxKO6Rvaf8PB5%2B0cM5C4vXzmBqQ9Rb2piK2%2FJZorJXBa7IBfTnlrxGoytKbHaa9uWASyR%2F6ivTlMZnxxyOh1WpdDveojkAA9du2kMyNKGdCD0gk0ZlVTYKb6Uopj9JUL0x8RJCpQaYz%2FxR%2BEpKX7gTiSbbOI6G4VVJm180x2%2BXJ%2BRmfK26CQtdohRxw1DK6vHn0xUaM%2F%2B3yuRTH%2BPGxmFE3yuPb6eDO5tih4rPO9MhirZr0JWZWC1BTFxTcY6mDZkt1Uo0sB7SFhAxSJFE6QKF5AEUGLqDgy8c5G27OsnJ34FZsEe3l50BHKKLmdSF71B28f0myEBqfI824pcAq%2BAKXIHaYARlSPzVLZErcNYokAeQCAMAH7K7q3Iwm%2FKlxAY6pgGcLZZnuNFXdgXW8HyLHELsn%2BpEa7UuBgW6jFExbllLRMFIiDLGKC8vFB2g33J9IaSAHpdfHVYEXL0xolXsDGlDqEI841HuTLcNtU3xCmGGt3qL2gPWlLgbaIypE2rnHIGKvOtq2jV4pMC7b7tYMoK29UP747WEcGYDm2Xa2KMMzudkR7hJ2ZG1GN7mnwXBoCWJNiWkBSwh1dkS3q4R4yi%2Fj7vtCtUQ&X-Amz-Signature=8f515b833ad795b173735ee15bae7ec4fb94a0b9b770a468192bff394ce5ddbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4B5IS2L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm%2FmRLILd6viV6tDflv0p2o9pqqL%2F8emZ3UzDkYTEg5AiAK1k9qfp0SMVz1rponxWIAA8SQ6kOaSMWWk1UNzbxNYyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDqOJmTtn9yUYG5bKtwDUeJKE8Qv2VweRKkUvCjc0R%2Bf5vX0Oy2IadYgqatzMKkQ%2BmMUkUZEEwNJeDbQ4XgsGYt2Mq4qGjsBA6kKYoqwAo7Z40wi4qTIZKbGGO%2Bn3PSlIUfwllGEyWpV9agM4Rzlx%2BRuG2rscIW3mX8PA0maiHTAScIqdnXozHHNVhZJ%2BlvR%2F5WpoUL55Njkq5vydnSpR8jx021L1Z8Cijf%2BaBXG6czMCrvDWlQ7yqlayqveunDrIqjnf9FYZN56o6Z8OdwEK3mxKO6Rvaf8PB5%2B0cM5C4vXzmBqQ9Rb2piK2%2FJZorJXBa7IBfTnlrxGoytKbHaa9uWASyR%2F6ivTlMZnxxyOh1WpdDveojkAA9du2kMyNKGdCD0gk0ZlVTYKb6Uopj9JUL0x8RJCpQaYz%2FxR%2BEpKX7gTiSbbOI6G4VVJm180x2%2BXJ%2BRmfK26CQtdohRxw1DK6vHn0xUaM%2F%2B3yuRTH%2BPGxmFE3yuPb6eDO5tih4rPO9MhirZr0JWZWC1BTFxTcY6mDZkt1Uo0sB7SFhAxSJFE6QKF5AEUGLqDgy8c5G27OsnJ34FZsEe3l50BHKKLmdSF71B28f0myEBqfI824pcAq%2BAKXIHaYARlSPzVLZErcNYokAeQCAMAH7K7q3Iwm%2FKlxAY6pgGcLZZnuNFXdgXW8HyLHELsn%2BpEa7UuBgW6jFExbllLRMFIiDLGKC8vFB2g33J9IaSAHpdfHVYEXL0xolXsDGlDqEI841HuTLcNtU3xCmGGt3qL2gPWlLgbaIypE2rnHIGKvOtq2jV4pMC7b7tYMoK29UP747WEcGYDm2Xa2KMMzudkR7hJ2ZG1GN7mnwXBoCWJNiWkBSwh1dkS3q4R4yi%2Fj7vtCtUQ&X-Amz-Signature=1cb9746d63e9d9c73ed29fc22201e77362b31ff87644f7a6e9d8bf49a6c83a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRDNI7P%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz5jTUFsLA2E3sqdl8DvdU40Zhj5LA5otnYBMBabfsiAiADonVQcNl6rjd8L7ZaGAFEjU1K0yyDiPJIpRZ8ZfHKxiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHCF9FN62qIfrGz2KtwDnjNlw6N1s%2Fst97%2BUtTVYWvjn8xKfFma6eeRLWskoknoj5BXae7n6qcM4axhOAJuGhi12hwLyRcPyBuHl82c3edvYmdsPJHo1UC6%2Bz04MEYroPTs3XEJPl%2FYcOZIqUIpvwOUQuM0LUdogk9XsuPt9SErGlhM1cGZxSOam41lgFVmbTp3tavirMPnhz5ImMMikVjZK86fcFiXqD6rrYNmL1yxT5%2FVbek0%2Fi3E8GpqjM6gXiqotaw7xyMEnBCBMT7alymdmQ2aqq3rFCeNlmymnIAhYDi3vEF48syWcMHhaTjRoiZbk7wdvwmTQteAA2%2FQGmAd2goFPefl7dkJQ%2FXFeV6v8Ha3BN8Y%2FMv3oXYkrmhUbjMf%2BfchxNL4nXr1kZ2oA%2F1CQPTZjJPvtvMPkZ7fqrVpc9jWL3PTi7kSftyK%2BrNXiISxzNDGX%2BTk1U7tt28jOM5%2Bt8CHQsOPjYrfCynvsNKQCW8A3TOSdaS5mbxsEvL4pD2m6LV8x9Kn0b7pKA9qfKXSgLSMNlFG54j8kAlGOlTrwCBgJv1gzJwkvFvOFcucfJroEtwBiJWAN5w597gOvl%2Fufnj833keUxK63XYMNQEneJZA5OqaqvexXt2zyxavy7uoge6iLgcpwrHww9pqmxAY6pgHD1BCuIL6jdmSmFycU8Pi%2FHLm3nC8HVsUBVKidMH%2F%2BBA%2FuDJ8GN6t1isYTyOT6M685HpEDw0oThcCWLzKC5ZyEE%2FCT5Bl5n8k9jt47F%2B70OnlR%2B9G9ccpuz6EbVil06cLP%2Ba38sLHiJXafJcFPj0sxIBZCmxW2Ck0O5BWpQDbPCeo%2FbhpQoUQur7q1G4bM7tn3hPLipfs9WdZINBejjwhqqahA3Wv8&X-Amz-Signature=5b7172bedbf185ee89480b6831d4f439fba10721351d83302f9e7699bfd3a701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2FMK3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ6yA0UTpUtqz7TWWEY02TwVp0HY2E2kBJ8O8NyolZBAIgWPEzaxx7ysRKr8v%2F6b08gW9QPbm05883h3n0hgmOLXQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfsyD87U2G2UdpnYircA%2BV%2FyUK1iQHwRU45v8ANi%2BhPS0Mcf4KnpD9NLfjmw0urEYhbAjAmikWC7KgLqq6zKmONyJHogrN5pVHis5l0H3Uny4awmHVyvK52kOsIW96MezkV4U%2FqGoI1aL3fVtQQdYQ%2BI%2F1Jb7i2i3abBXGlhdRybQZo2NIfxSoPZiZ5h%2Bp4%2Brc6L%2BxZJViQhCy19NIOdqd0eeFq0ULkHNY%2FwYtLtATMNGKnAvOmx7jEZZq79kJ5%2Bj%2BioEdN6t0L8RWoA3HFXqjcAMMD%2F3NE0YHye9rdxlGu77JkSStrUwKqnzVp6L0luxf271aMCQ%2B5T2Q3x2g3EC71pHzjY%2BwyM6n2549Kh8ED2E6paDMlgbWKwySQ4NDWiMmR0QawvbTqOTmsB%2BLnoHvsPrKrH8eebZf8eLU4X7aKQTaBtoqxjIJs40SoAptnzI3RSPczzlEnieBbpJOTSZSEWXTjYTgblj%2BwWmtYTWoPJwzLfQKiKEDl3k%2BRdqqnQoiktxT7P21MsAiixLoex2AoMS4yEae9DALU3evfSm5c8nPDOMoLXnuBpD1q41bGQKNPRI3x6h6w3fxeH6M7l5NsbLcR4yLjWbz3BkL7eMpayXqU2m06%2FBHODi2ouOIlvJ8Oiz35OlM5nFRRMOLypcQGOqUBSg5UpCI4Og9UVWMs4Wo8QCsFJDZZHuRwfMHzGMkS47agrzMYCfkPwVVvTcmYafJ7QGNlu16lE%2BFTw4JnROmGuyXmdJgffL%2F5Smtl6JQjIJ6RvTwAQAEMVDZmu27a1xtiRjzPRX9folwn2Zf3J2SvE1S3nPfCMHwxW98z3MAzziexeunSjJLA9RVt8swhQIRTNn8qX1cRTp53TqTR9GvtthjrSimb&X-Amz-Signature=9dee8dcaad89bf3cf6745fc5d50e18c4a5e167bbaccc279099048b1d3cd40502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4B5IS2L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm%2FmRLILd6viV6tDflv0p2o9pqqL%2F8emZ3UzDkYTEg5AiAK1k9qfp0SMVz1rponxWIAA8SQ6kOaSMWWk1UNzbxNYyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDqOJmTtn9yUYG5bKtwDUeJKE8Qv2VweRKkUvCjc0R%2Bf5vX0Oy2IadYgqatzMKkQ%2BmMUkUZEEwNJeDbQ4XgsGYt2Mq4qGjsBA6kKYoqwAo7Z40wi4qTIZKbGGO%2Bn3PSlIUfwllGEyWpV9agM4Rzlx%2BRuG2rscIW3mX8PA0maiHTAScIqdnXozHHNVhZJ%2BlvR%2F5WpoUL55Njkq5vydnSpR8jx021L1Z8Cijf%2BaBXG6czMCrvDWlQ7yqlayqveunDrIqjnf9FYZN56o6Z8OdwEK3mxKO6Rvaf8PB5%2B0cM5C4vXzmBqQ9Rb2piK2%2FJZorJXBa7IBfTnlrxGoytKbHaa9uWASyR%2F6ivTlMZnxxyOh1WpdDveojkAA9du2kMyNKGdCD0gk0ZlVTYKb6Uopj9JUL0x8RJCpQaYz%2FxR%2BEpKX7gTiSbbOI6G4VVJm180x2%2BXJ%2BRmfK26CQtdohRxw1DK6vHn0xUaM%2F%2B3yuRTH%2BPGxmFE3yuPb6eDO5tih4rPO9MhirZr0JWZWC1BTFxTcY6mDZkt1Uo0sB7SFhAxSJFE6QKF5AEUGLqDgy8c5G27OsnJ34FZsEe3l50BHKKLmdSF71B28f0myEBqfI824pcAq%2BAKXIHaYARlSPzVLZErcNYokAeQCAMAH7K7q3Iwm%2FKlxAY6pgGcLZZnuNFXdgXW8HyLHELsn%2BpEa7UuBgW6jFExbllLRMFIiDLGKC8vFB2g33J9IaSAHpdfHVYEXL0xolXsDGlDqEI841HuTLcNtU3xCmGGt3qL2gPWlLgbaIypE2rnHIGKvOtq2jV4pMC7b7tYMoK29UP747WEcGYDm2Xa2KMMzudkR7hJ2ZG1GN7mnwXBoCWJNiWkBSwh1dkS3q4R4yi%2Fj7vtCtUQ&X-Amz-Signature=814dfb26acfefa73901feaf848810d8d9c020fbef62a94992e31b5e1b456dff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
