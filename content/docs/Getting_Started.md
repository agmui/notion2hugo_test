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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI7UVUR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDyNWDGomJAsUww436USwif4%2FbrARkyNz0HCOt%2B7Dce2AiBzVGjcFXzYW7K3ShKh6k%2FmH1CFhBUz%2BFPmmD8Vz3eTVyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5nDNK0hP4E44UHv%2BKtwDOPnK1UDzU%2FF1AJ95YqwfBQsWCeFfD6Zo4aU16GePc0te8LqRTUQcqAxOSSqtO2XpjZoQOG29OEYHedrplGgiPKlGOLxR8dFzbypb%2FCV%2B4RPD7ZBx7MIKBxrwuY1JpdNx2rCFZyNmZrmH8gTsIpgP8zQjehTlwp2CkUmv%2BdTmZT7fC7HQ1DunS5VU2NvafPaY0cIu9E5Nr5NaVZ7Y%2B0PrMUGyvmoPq%2Fb6TGub4qv4I1gKuQZSTQlE200YxBMtochpS0glBRJJQMl%2Btj%2B%2BBQi3g7x4j6Y1KHr298CNQv1fXd45kuKfv5gBX4Mz7yG4oCXpY1svqXUnGPzKLG8FI1L7EBksxULIcK3K6EHJWMqbCoC0KPxzIsIw4SmaLVT2Q4Bp0J%2BFeDQ8cruOLvi%2BHf1p%2BW%2BRbU8sTjRukXqpWGlwhgkPhTuHjAdN8db2RznS3v96QLYtd680vBe6%2BIj2eqyB6Yq2gq63wGYoORQ1BLmlg6JNMmZfwL5s91Ihq6rf6Hm9cyK6oTrFVjSeT81CyB2w4ZROaG5hcTK4Qx9cTRHqhfP6DJUuRm1rPmkpKCnTyZMlvJ2425VwkePNFeaY%2B5y2g2jPuCIKAGQb8j4DR0bn0%2FA6mB5Vw7V6rr982cYw3buDvgY6pgFX0bco0BPQJo56Za%2BqRmSQzpJfeCuaarT24SUtIbIwF8DtYRVCGwHwd%2BPYqy7SgXa389t1bU%2BPPnGpbA9zUNds9ODhFJKxHSLTH24ntPG1fvtuIFEMNA5y%2FHY%2BtxiuABmev20oWTdjslzUyNm8uBNx485h1DwEIPBALYvdM8B1yppVAyQp3yqGPzpY%2B8AsO875LrF9BbIcUuskV%2BPdCnJ8LnABebei&X-Amz-Signature=eb95f47c2d1645b306d6abda95cb19b248352903c9986c89545657efe281c196&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI7UVUR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDyNWDGomJAsUww436USwif4%2FbrARkyNz0HCOt%2B7Dce2AiBzVGjcFXzYW7K3ShKh6k%2FmH1CFhBUz%2BFPmmD8Vz3eTVyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5nDNK0hP4E44UHv%2BKtwDOPnK1UDzU%2FF1AJ95YqwfBQsWCeFfD6Zo4aU16GePc0te8LqRTUQcqAxOSSqtO2XpjZoQOG29OEYHedrplGgiPKlGOLxR8dFzbypb%2FCV%2B4RPD7ZBx7MIKBxrwuY1JpdNx2rCFZyNmZrmH8gTsIpgP8zQjehTlwp2CkUmv%2BdTmZT7fC7HQ1DunS5VU2NvafPaY0cIu9E5Nr5NaVZ7Y%2B0PrMUGyvmoPq%2Fb6TGub4qv4I1gKuQZSTQlE200YxBMtochpS0glBRJJQMl%2Btj%2B%2BBQi3g7x4j6Y1KHr298CNQv1fXd45kuKfv5gBX4Mz7yG4oCXpY1svqXUnGPzKLG8FI1L7EBksxULIcK3K6EHJWMqbCoC0KPxzIsIw4SmaLVT2Q4Bp0J%2BFeDQ8cruOLvi%2BHf1p%2BW%2BRbU8sTjRukXqpWGlwhgkPhTuHjAdN8db2RznS3v96QLYtd680vBe6%2BIj2eqyB6Yq2gq63wGYoORQ1BLmlg6JNMmZfwL5s91Ihq6rf6Hm9cyK6oTrFVjSeT81CyB2w4ZROaG5hcTK4Qx9cTRHqhfP6DJUuRm1rPmkpKCnTyZMlvJ2425VwkePNFeaY%2B5y2g2jPuCIKAGQb8j4DR0bn0%2FA6mB5Vw7V6rr982cYw3buDvgY6pgFX0bco0BPQJo56Za%2BqRmSQzpJfeCuaarT24SUtIbIwF8DtYRVCGwHwd%2BPYqy7SgXa389t1bU%2BPPnGpbA9zUNds9ODhFJKxHSLTH24ntPG1fvtuIFEMNA5y%2FHY%2BtxiuABmev20oWTdjslzUyNm8uBNx485h1DwEIPBALYvdM8B1yppVAyQp3yqGPzpY%2B8AsO875LrF9BbIcUuskV%2BPdCnJ8LnABebei&X-Amz-Signature=3e8ce1fcdb24c2b3e2194a17a763ff6e96e26726655287a4e0712b79beabd241&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH7ZNTD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDxyR6c23XTcjceeC%2FEw7c3JZ7wqJccW9WfkGbJY%2F6eSAIhAOphfNninkC7%2FUdGl1TdcRqXgJTE968gUOVj7E9pcSbgKv8DCH8QABoMNjM3NDIzMTgzODA1IgwS3FSg7qPbMbc2pgsq3AMn8Trs%2Fe6YTv3w0eTbVDDyQ%2FGaqDWJ8UBdScjLXtcI216VFW%2BfjQ8Q1MG014THHgqrGaWV2toW1nnR4t2dse1Z8MD0ZmYYLoVhSfz2PPayUL2WrCVyepiDg5uWjNCZO5ssXHrqm8IUGHmV25KFNvrKF8Xc50mDHLSHUl5QT0LMEeAR5RDwcpZSbVSx0XUj2paNZFxr%2FzjTRpOSErhpaHc%2B1U%2FRTLOq7UfmPT002xMikhRMaAsEekMFTID30iphelSsCXQ0IGYkyVdnAyG%2FLxq8%2B%2FEhYJcR%2BMwok%2FIw8qRR%2Fl7pr1L0jESymbe7UaKfjInNwROjH50o5d5Aj%2Bn36KnvEM79GU9%2Bk494be6GwB%2Fhq2yDnf65WWMO52t649fFK0XxwtPNzZ4FeIw2AHF%2FARg0hDtekbFcDAcOaOv5s4%2F2YDZ9ZG6ciBOYiau0VFK9ieJ3TIEDociN786YZ8PuxKLpF7%2FE%2BJrd78oTd%2FY9bSlPlquWVXiEJ%2F3IiZr9wjzeMzHeuFDvA%2FxcvvRtH0w13YltXKpd%2F4mn%2B5ped3AAIh3GFFC%2BUJB%2FG%2BKVkf9JlqIjIkXrXDmZ5i7GoOp9IcqYK%2FeUGkibUe1XxF6OEGop%2FWezbaIBfwrPRGwrfuqoEzDHu4O%2BBjqkAaZSov4lO11eK4wZT0AoaTCXjzAoIsh0BToEcdcMLd4lUArTs%2FzcUqahSTKLkjmk24SukHZSZDYHgt8kZ8uzcrncKWLR4kPiVrW5RUsilWXA8ZLsr34CFe5q7yqIAGLnFhGrAD%2FlaYVmwfiLlmlFiJEAAnM%2BLI5Vcsa7voy%2FuhBapbxJE4%2FTjwuiPmXYlE3QHnHf7hKGrwLJyAusPABYe3NxJ50r&X-Amz-Signature=af4754dd17148bbd73311b4b50a2a742e90138d11ca8c056934a5ec4c9e19541&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXM5IYW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCd7GCpDmEYknCxjf4ZZXgdF6zPZeYbdckJMliqQtDcWwIhALfU6Wy4btQJZCBeoRx8l8APBcbjAY%2BN2g59JWxaqnHAKv8DCH8QABoMNjM3NDIzMTgzODA1IgzMcazGc8t9KLqPDVYq3AOx6OqfiWbWzdZ3iEDz1LYCeQqS2r9bNh4EaT6kGIV1cqD1hgnakK5v6qwz3mSEoZt8kxpWXIMq43WCcwMT4kghI9ukqqgM2vKm6SF0JnUpWWVjJRDfiKMBmLjroGmYhQjDjjRdGtON%2Fv5TmFM%2Fl2q1ld7sumQ9fkp5JZz%2Fcf4V3LD0YRDPnRkUkFFClymagxUgTnGOVHx4P7dqAkyq2j5Ppwyj4SGax6EojYXPf7xSe3PXGUfnm1VhysnwTxOoVoZ988ZgV8zBPCGjo3fvNCKNKNdKxiucqTPw01s%2Fw2oHtrK4Qirbx4vQG4vLEOo8mdgu6x%2FB2aAaj7zLDxMAuWP8A8XI%2FYkZTQFhxfEmNpvspSmYITctK0zDTdcLhFvmbTNm1TqiKzojiDl6dur%2FXQF5NaPbO7pHpLJJsLWwQenL8Ehz7GjXhoARM5Gr%2B56uCLOE6NOa5TneTSEFYRf4FW8Gq0aRPYJPKg%2B4kVRo01hjY6XKvcQ6Bh6vj0hcu3urmK6YQT4GciR4D13rTsIXHftgoBpfYkG%2FmLVtZF2lpqyS7CIjw82gKJfc7TXeo61Romz%2BYCCKXBnhMdkwVTmQHsYnIwYRvGuA4OQFzf%2BGd%2F9SrYyX4Rs2CPQ24YdrvzCPvIO%2BBjqkAbvpNF%2Fg0ch8HAAbEW7qt33WrGnTYaKqZbNXj92EuHkXH9wHQkd18m7nLa3zVvU43bquQGUkCA5Animyfkas%2FwE7%2FR8FRiENwXk%2B8PAiXL2iEnu9KukkVnw%2FH6fqG66dkwRWAb6jA82ap6yfjYNqIrJLyFv%2B4YRCm%2F3wXr1FtWMe4IowWi7K5HKeXvpLSVXRaI1Rw6%2Fn4gBWqLUwYlAgE1dLOuUa&X-Amz-Signature=b408fd4b6b5aa434c8f2ad6c0d1065962c6be7ff429f1947c6f4f91687697395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI7UVUR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDyNWDGomJAsUww436USwif4%2FbrARkyNz0HCOt%2B7Dce2AiBzVGjcFXzYW7K3ShKh6k%2FmH1CFhBUz%2BFPmmD8Vz3eTVyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5nDNK0hP4E44UHv%2BKtwDOPnK1UDzU%2FF1AJ95YqwfBQsWCeFfD6Zo4aU16GePc0te8LqRTUQcqAxOSSqtO2XpjZoQOG29OEYHedrplGgiPKlGOLxR8dFzbypb%2FCV%2B4RPD7ZBx7MIKBxrwuY1JpdNx2rCFZyNmZrmH8gTsIpgP8zQjehTlwp2CkUmv%2BdTmZT7fC7HQ1DunS5VU2NvafPaY0cIu9E5Nr5NaVZ7Y%2B0PrMUGyvmoPq%2Fb6TGub4qv4I1gKuQZSTQlE200YxBMtochpS0glBRJJQMl%2Btj%2B%2BBQi3g7x4j6Y1KHr298CNQv1fXd45kuKfv5gBX4Mz7yG4oCXpY1svqXUnGPzKLG8FI1L7EBksxULIcK3K6EHJWMqbCoC0KPxzIsIw4SmaLVT2Q4Bp0J%2BFeDQ8cruOLvi%2BHf1p%2BW%2BRbU8sTjRukXqpWGlwhgkPhTuHjAdN8db2RznS3v96QLYtd680vBe6%2BIj2eqyB6Yq2gq63wGYoORQ1BLmlg6JNMmZfwL5s91Ihq6rf6Hm9cyK6oTrFVjSeT81CyB2w4ZROaG5hcTK4Qx9cTRHqhfP6DJUuRm1rPmkpKCnTyZMlvJ2425VwkePNFeaY%2B5y2g2jPuCIKAGQb8j4DR0bn0%2FA6mB5Vw7V6rr982cYw3buDvgY6pgFX0bco0BPQJo56Za%2BqRmSQzpJfeCuaarT24SUtIbIwF8DtYRVCGwHwd%2BPYqy7SgXa389t1bU%2BPPnGpbA9zUNds9ODhFJKxHSLTH24ntPG1fvtuIFEMNA5y%2FHY%2BtxiuABmev20oWTdjslzUyNm8uBNx485h1DwEIPBALYvdM8B1yppVAyQp3yqGPzpY%2B8AsO875LrF9BbIcUuskV%2BPdCnJ8LnABebei&X-Amz-Signature=13217b269270d3b1ac5c8e6aa6cbc5ae2da1690a753c39290c9b7203596e262b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
