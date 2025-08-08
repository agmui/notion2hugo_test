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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNQFZ7Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLsn9jdiXSogGbWsDn48R28PbLIMCz8Te3ALEA30L94gIhAPXKZVsfnX4Jfplrw9qJ591TJAk4X6ccS12bOp2C6BjwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHafjaLp1t8%2BH%2FLFIq3AMS9AJjiBJ0TxRYK%2BYdikuckucmZnOPGavSEQDl%2Bg%2BJDDTp0tTpDdWtWliiOsMabkYzhsDQADfkwdOseiHHLXOWVxQIvMR3m6kp4sg4ANLsMMRE7EoxCkp62zQ4meSXpg%2BhDvJQv%2FHodS3thL3r32OlGqMBg8OeI9laiXbvkk9Ec%2B6RLljKUJoCMreoRnBUuFxAzerSORXDPPVDn8yRfpNNtdxVCqiYZyyVjd85PHKBdeW%2F6ZBoLfpJy0QwZykFruYBUb4KQL4rcXvDHVg%2BUYXD1C4OjSy%2FsBopktMOV3MmtwbFZS2%2FCKfpxjnKNtuFiqNcnCnhcenvqxucwAo%2BVt%2F5FIsX8wdfC4V5vE4m2ciDsgJNq24Hv3wbWlajvNuMRLmE6t8Ftbb4X1lvUvDZicVhiTn%2BlfzjTlUj4KWUfGw8ztwDaREEpVot2734RLCRNU2A5uixVv99YCYx5PMKDYtauTJPUJvbyBWyhDHBNEFF0kFmX753OtBJaBwhwxrQev8SWmsWDScSfiRa3L6R0bml%2FIi6ViXhlLMz36G1mkNLV5F9RzHG9ZBb%2Bf3mU97Vc8bDBPo1fnOHc4VD9qWjwswzVHF165wQ3%2Fg0pH0WxL6X78tW50bfRaKc0Co3izCD7dbEBjqkAYilhTglEk7jj6%2BTtnjaVlrUHThZp%2FLL0ZbPSKEcSHjL%2FlRjtTAe88w0q7hoQd6iJm5NOcWjPM%2F7YGD6ikrchmOAtHzSEWOKydL3veDIDn5EjWTXFt8PHY6TUS6rY2WrlYjdbbkpWGt2O5v2d95PIFijbkIdtgsh860Q94nCfvqPhrK3bzbZX01lLZenAq5eQcn4faaldfoZTfi4OGkVqBkKDIsH&X-Amz-Signature=636cb8c7267517bc1c952394c0deb4b572fdea4a343f19a69e49cbd1ef9d45ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNQFZ7Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLsn9jdiXSogGbWsDn48R28PbLIMCz8Te3ALEA30L94gIhAPXKZVsfnX4Jfplrw9qJ591TJAk4X6ccS12bOp2C6BjwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHafjaLp1t8%2BH%2FLFIq3AMS9AJjiBJ0TxRYK%2BYdikuckucmZnOPGavSEQDl%2Bg%2BJDDTp0tTpDdWtWliiOsMabkYzhsDQADfkwdOseiHHLXOWVxQIvMR3m6kp4sg4ANLsMMRE7EoxCkp62zQ4meSXpg%2BhDvJQv%2FHodS3thL3r32OlGqMBg8OeI9laiXbvkk9Ec%2B6RLljKUJoCMreoRnBUuFxAzerSORXDPPVDn8yRfpNNtdxVCqiYZyyVjd85PHKBdeW%2F6ZBoLfpJy0QwZykFruYBUb4KQL4rcXvDHVg%2BUYXD1C4OjSy%2FsBopktMOV3MmtwbFZS2%2FCKfpxjnKNtuFiqNcnCnhcenvqxucwAo%2BVt%2F5FIsX8wdfC4V5vE4m2ciDsgJNq24Hv3wbWlajvNuMRLmE6t8Ftbb4X1lvUvDZicVhiTn%2BlfzjTlUj4KWUfGw8ztwDaREEpVot2734RLCRNU2A5uixVv99YCYx5PMKDYtauTJPUJvbyBWyhDHBNEFF0kFmX753OtBJaBwhwxrQev8SWmsWDScSfiRa3L6R0bml%2FIi6ViXhlLMz36G1mkNLV5F9RzHG9ZBb%2Bf3mU97Vc8bDBPo1fnOHc4VD9qWjwswzVHF165wQ3%2Fg0pH0WxL6X78tW50bfRaKc0Co3izCD7dbEBjqkAYilhTglEk7jj6%2BTtnjaVlrUHThZp%2FLL0ZbPSKEcSHjL%2FlRjtTAe88w0q7hoQd6iJm5NOcWjPM%2F7YGD6ikrchmOAtHzSEWOKydL3veDIDn5EjWTXFt8PHY6TUS6rY2WrlYjdbbkpWGt2O5v2d95PIFijbkIdtgsh860Q94nCfvqPhrK3bzbZX01lLZenAq5eQcn4faaldfoZTfi4OGkVqBkKDIsH&X-Amz-Signature=48fd97f2217e276a0f8f314375528b3307c14ac90f6c77e5f1d21a648e9038eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNQFZ7Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLsn9jdiXSogGbWsDn48R28PbLIMCz8Te3ALEA30L94gIhAPXKZVsfnX4Jfplrw9qJ591TJAk4X6ccS12bOp2C6BjwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHafjaLp1t8%2BH%2FLFIq3AMS9AJjiBJ0TxRYK%2BYdikuckucmZnOPGavSEQDl%2Bg%2BJDDTp0tTpDdWtWliiOsMabkYzhsDQADfkwdOseiHHLXOWVxQIvMR3m6kp4sg4ANLsMMRE7EoxCkp62zQ4meSXpg%2BhDvJQv%2FHodS3thL3r32OlGqMBg8OeI9laiXbvkk9Ec%2B6RLljKUJoCMreoRnBUuFxAzerSORXDPPVDn8yRfpNNtdxVCqiYZyyVjd85PHKBdeW%2F6ZBoLfpJy0QwZykFruYBUb4KQL4rcXvDHVg%2BUYXD1C4OjSy%2FsBopktMOV3MmtwbFZS2%2FCKfpxjnKNtuFiqNcnCnhcenvqxucwAo%2BVt%2F5FIsX8wdfC4V5vE4m2ciDsgJNq24Hv3wbWlajvNuMRLmE6t8Ftbb4X1lvUvDZicVhiTn%2BlfzjTlUj4KWUfGw8ztwDaREEpVot2734RLCRNU2A5uixVv99YCYx5PMKDYtauTJPUJvbyBWyhDHBNEFF0kFmX753OtBJaBwhwxrQev8SWmsWDScSfiRa3L6R0bml%2FIi6ViXhlLMz36G1mkNLV5F9RzHG9ZBb%2Bf3mU97Vc8bDBPo1fnOHc4VD9qWjwswzVHF165wQ3%2Fg0pH0WxL6X78tW50bfRaKc0Co3izCD7dbEBjqkAYilhTglEk7jj6%2BTtnjaVlrUHThZp%2FLL0ZbPSKEcSHjL%2FlRjtTAe88w0q7hoQd6iJm5NOcWjPM%2F7YGD6ikrchmOAtHzSEWOKydL3veDIDn5EjWTXFt8PHY6TUS6rY2WrlYjdbbkpWGt2O5v2d95PIFijbkIdtgsh860Q94nCfvqPhrK3bzbZX01lLZenAq5eQcn4faaldfoZTfi4OGkVqBkKDIsH&X-Amz-Signature=e81308d7ae946dc81b586fd2630657a22063e7bf7831c55bc86b41b2ecaa2cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3B7T6B6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDWMTCOBY%2BVATcs3kDc63VqdAP8xlUxomgbmjUhvDJ14wIhANG8LEFAJaXM2FL6uz4VBrVV2VsQ76VbUntFsNrdZbaYKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzusXdHT3lk7PhLunQq3AMPCsNzjGorDEJ4CkWSdMEM1iv49nq0Q2WVgDw7BaqIk1HEIif5NNHBBQNEa3NtETb0b%2BKyk8CLFjiFgn9ujzAvjRMsw0hDUC3sHFdjbz2Kr5xRM93WiUXI9HnHc9Dd86grrAjFtteLoy%2FR8nW1tQI4KtObrwv%2FemV1j%2FwM%2Fd8tf4UTrfcSVgaEBOzsf2VkQA2hmAtmE8RW44GlORlrRznCqGBg08hP6SuyqtbvvU1v56wv6aM3NyNmPlwD%2FAVI6LLaBdLXYYVEIeWduP4pb%2BAiadVoVzXQ2XM2xRicw%2B5Y1h17YBHQfO%2FIK6khHo8N9%2Bip59mcsiCFlHit4O3s6ktLYWCyS6vEO8sq5DWAvbkShuZAMrTvWSV4YJUXjoVl2Eyh4o7dOwm62QfOCqxi9ut%2FPKiNnFFbXyjyxhjTDWuZIipjrcNtwdaMAYAdQp6FbRt3UUPAkq4KwaIgToDYBj7949hPl6RNHqupKL2dliIm2I4vmHQM0sL%2FabmJ2JSLkyYUf7YOw4HBkCxtQfimxy%2BQ7HUCOA3YrrqIfDs%2BYz%2FFHvZhNNRvqn6LWk4dD%2BuHMQPM%2FtX6DER4fGCsiC9LneIg7QA2a%2FujxAaPfN%2BTPGhO%2BXQ3yi4pOfeR6noD7DCw7NbEBjqkASz%2FpR37A7xS5MqzylxgvlQLvqxES6KTbWvZup4gnCwtgHQHAcP4JJAuaoM%2BQ7d8c4M6ixDNhXdOfLTulu%2FL5MaWr020CflkReRMlqzCQYGP8ET%2BL2pLzJU9TLhaR6l6Zk%2BNBd5yFB5JfO%2FdnhaWXOcmBa53b9cFCWCCyLqPU0efCVDy%2FoNMJMF2vUamc%2FmN55FPg4SoEAzYm5RFngO9Nq%2FmpM4C&X-Amz-Signature=f6e09ca7dd0d6285a19ddae534aafdc8518afbe268209ea3ee6b662c57fdc36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644A65LZL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD72sA6gv6J%2Bn3tcs3xjBfRGqKk8GfsUFExt3CPKnd6wQIgYnEAlLEoBffeuhOmMIzsZN1GlHjQWriVw3Y4mqUhCzsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmdVRQAF5yKvqLx9CrcA84m9jCfojpvrIzTJJr0EHk%2FHaTIhWkm8KEMdlxJcDmPIIo0MXXr6FbY8tKgXwzbNXEZnEZME4n6TApMJqbib%2BcPNO0isspeEckCMnYYOFqUtawMPELZVBomSmJJ5nO9lZIYDlrNSCGZM2IaEs%2Ba9wP%2FnGxBdI8b1hxTp4lkNDw1zGwCqcNaFbysch2IVCopTKbRifQh4d2HFtIa9PQqpGVYEmKiKj%2Bn6hfn8%2BJdfaZ5b%2BFAG8zaUMQExiRxWpm7NAkEcNpBGduIiP7AwtmTrcsvBu4oPVoYMNyEc5%2Bg9bcvWHo6w4HmpmTMwIMcLPhZA7lvr9scaT08ff8ny54Ul5qHi0%2B7R%2Fd%2BG3pbKxrIh3t8r%2F88sE0FYu4di2S4Ro28P994qj7NKoudp8KFmcJqqlMwQ3e3bVP977yVQLiSN7k43gl5SCXWyiuLoetqB0oL%2FooaCXQhZWCnojdJWgPQ1jRaX%2B1wkKaj9PC%2BzMorKWJDuEi6uU1n7mBWWxWTXesGmO6ndRXy5O1Lh%2FtOD6VLfVA76cjDQ6T3ZXewkaApJE2EynmPQrmTCWsDfTXS4M%2Bsqm4wiqlG6I%2FZ22ywmU6EZddbaLMNMzqHjXGcix9mtKPYLt9Ctkj%2FKyNxTh1rMLrs1sQGOqUBGOamYJkN1wmMnaRyApd1568L50FqTgFrX7amxs87cWwo4hmafoqUCOGBXDP2b1DrmVIQykqeChbnJrc%2BuI%2Bvyt%2B9A2DAHHVhG4RA%2FEqTwtbQPWfW%2FBZB3IFBd%2FXH6mNsLM8YSy0NJ2UyTchUjNoJGG0TwiKsTTaTALWZ%2Bj%2FFOMJOzGxGQ5r9EbxyRrcIOmxdjC3ZHZYiTQnSONZJct7fF%2BIOzEJy&X-Amz-Signature=807d2fc188da8e2d1f6ced06158c65fb508036d367788b15d545b47dde3f7030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNQFZ7Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLsn9jdiXSogGbWsDn48R28PbLIMCz8Te3ALEA30L94gIhAPXKZVsfnX4Jfplrw9qJ591TJAk4X6ccS12bOp2C6BjwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHafjaLp1t8%2BH%2FLFIq3AMS9AJjiBJ0TxRYK%2BYdikuckucmZnOPGavSEQDl%2Bg%2BJDDTp0tTpDdWtWliiOsMabkYzhsDQADfkwdOseiHHLXOWVxQIvMR3m6kp4sg4ANLsMMRE7EoxCkp62zQ4meSXpg%2BhDvJQv%2FHodS3thL3r32OlGqMBg8OeI9laiXbvkk9Ec%2B6RLljKUJoCMreoRnBUuFxAzerSORXDPPVDn8yRfpNNtdxVCqiYZyyVjd85PHKBdeW%2F6ZBoLfpJy0QwZykFruYBUb4KQL4rcXvDHVg%2BUYXD1C4OjSy%2FsBopktMOV3MmtwbFZS2%2FCKfpxjnKNtuFiqNcnCnhcenvqxucwAo%2BVt%2F5FIsX8wdfC4V5vE4m2ciDsgJNq24Hv3wbWlajvNuMRLmE6t8Ftbb4X1lvUvDZicVhiTn%2BlfzjTlUj4KWUfGw8ztwDaREEpVot2734RLCRNU2A5uixVv99YCYx5PMKDYtauTJPUJvbyBWyhDHBNEFF0kFmX753OtBJaBwhwxrQev8SWmsWDScSfiRa3L6R0bml%2FIi6ViXhlLMz36G1mkNLV5F9RzHG9ZBb%2Bf3mU97Vc8bDBPo1fnOHc4VD9qWjwswzVHF165wQ3%2Fg0pH0WxL6X78tW50bfRaKc0Co3izCD7dbEBjqkAYilhTglEk7jj6%2BTtnjaVlrUHThZp%2FLL0ZbPSKEcSHjL%2FlRjtTAe88w0q7hoQd6iJm5NOcWjPM%2F7YGD6ikrchmOAtHzSEWOKydL3veDIDn5EjWTXFt8PHY6TUS6rY2WrlYjdbbkpWGt2O5v2d95PIFijbkIdtgsh860Q94nCfvqPhrK3bzbZX01lLZenAq5eQcn4faaldfoZTfi4OGkVqBkKDIsH&X-Amz-Signature=c6d3164fefe165277ee26e5a30fa489eafb3d20b626414c52e580f85027b3825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
