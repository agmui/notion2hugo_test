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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJ66WZU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBUhhUK6XvVYlbWwIrbcsF0Z0en%2Ba8w1CBMuka0ZsCnkAiEA8A1zEz%2BhfvyQvxVtM4iAoTsuUmj%2Bm2bY1mQ7qMr%2FzmYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1mRpRkWFBLbWbzIyrcA66Q3jW%2BJNudDCKkciJmZKUKn4B7ZdqLtpcubQ%2Fm%2FnClHvsRL7r4B1nMwGcUEMAXQgYCCJWiRkJHpi6X7f1GkSVtiiNFrSLH0OJo%2Bt74TO%2FRfxhJCF8erl5vz00QA6IURUEZ7mGBZPDGHuEDu7naVE7mO7m2hbKkm1V%2Fb7HRUt1z2%2FpOaKTyWOFG7XitdsVqZ%2BcqMOL4yTfOfNPdc14Z5bMKA5e6AoB%2BbLX9Xdd7svpojM3cYe5%2Fg3b%2Fb6wG3pDSrhzC4DHyhUFQfmnNv6pQ1SqPB4oOko9yb9fUkxfgcODt%2BRK83xgaTgx%2FNr5oHv6buuXFcPJdLMm6Tf75Uqc3yowQv%2BHMs8FFMgNWKeKki%2ByrHx8ePJIp8PoZK8dNHt5%2BfKrjHnoOhMkOBTq%2Fa9KXNqM942MT8f0Z8nKjUtM%2BsYoxB9jhRfYJiCn65fDKVTJczacI5erbtcSdRPbIxAbSTgYoiJC0ROOh5xJt21ndloTHJxenHwmEi9j2B3qvUgh6BXgSpKHdK5h4KqpfNllg9oA5m%2FSgWjaEJGgUQwqBmFslu1cDLdGQc8GsaV0pX6wxXXoYo0%2B362LE%2BU1q6ChDvjXQIFUlfq%2B%2BvrcZmxKrlAu6Iz8mk2io8tKBUy2cMI2ywr4GOqUBSbRvcMXGqX%2BdA3izqm2%2FHURAEMhoTtQTGzxdq%2BowU8HYX4OvM8nBtGJnS%2B7omCJsgPZDSRWCZRFGN2aNdGhjPdmJiMqHN4CinXokmWGBJ%2Bt%2FYp7y7jUSV3V6ZPv7yV%2Bt7B4kZHL36eG3mFYnIYunQVH%2F%2FpwFXCWgy40JJuSv09bb%2BpO2ZBouezmIV8sZj101ZJNQl7vyKS%2FwWX5RNbxFMOr1uqDm&X-Amz-Signature=c44b8af6571b044434072c84cea04d3da7f474069240e7c4d6cf26621dc2f716&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJ66WZU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBUhhUK6XvVYlbWwIrbcsF0Z0en%2Ba8w1CBMuka0ZsCnkAiEA8A1zEz%2BhfvyQvxVtM4iAoTsuUmj%2Bm2bY1mQ7qMr%2FzmYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1mRpRkWFBLbWbzIyrcA66Q3jW%2BJNudDCKkciJmZKUKn4B7ZdqLtpcubQ%2Fm%2FnClHvsRL7r4B1nMwGcUEMAXQgYCCJWiRkJHpi6X7f1GkSVtiiNFrSLH0OJo%2Bt74TO%2FRfxhJCF8erl5vz00QA6IURUEZ7mGBZPDGHuEDu7naVE7mO7m2hbKkm1V%2Fb7HRUt1z2%2FpOaKTyWOFG7XitdsVqZ%2BcqMOL4yTfOfNPdc14Z5bMKA5e6AoB%2BbLX9Xdd7svpojM3cYe5%2Fg3b%2Fb6wG3pDSrhzC4DHyhUFQfmnNv6pQ1SqPB4oOko9yb9fUkxfgcODt%2BRK83xgaTgx%2FNr5oHv6buuXFcPJdLMm6Tf75Uqc3yowQv%2BHMs8FFMgNWKeKki%2ByrHx8ePJIp8PoZK8dNHt5%2BfKrjHnoOhMkOBTq%2Fa9KXNqM942MT8f0Z8nKjUtM%2BsYoxB9jhRfYJiCn65fDKVTJczacI5erbtcSdRPbIxAbSTgYoiJC0ROOh5xJt21ndloTHJxenHwmEi9j2B3qvUgh6BXgSpKHdK5h4KqpfNllg9oA5m%2FSgWjaEJGgUQwqBmFslu1cDLdGQc8GsaV0pX6wxXXoYo0%2B362LE%2BU1q6ChDvjXQIFUlfq%2B%2BvrcZmxKrlAu6Iz8mk2io8tKBUy2cMI2ywr4GOqUBSbRvcMXGqX%2BdA3izqm2%2FHURAEMhoTtQTGzxdq%2BowU8HYX4OvM8nBtGJnS%2B7omCJsgPZDSRWCZRFGN2aNdGhjPdmJiMqHN4CinXokmWGBJ%2Bt%2FYp7y7jUSV3V6ZPv7yV%2Bt7B4kZHL36eG3mFYnIYunQVH%2F%2FpwFXCWgy40JJuSv09bb%2BpO2ZBouezmIV8sZj101ZJNQl7vyKS%2FwWX5RNbxFMOr1uqDm&X-Amz-Signature=60eba607ca7c877618b084b509468a04ac8f50b7e830b5fd5eab14750f6d33f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUMKLSD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICNwUL0E9va5dlvyDWAYEV1vlPp1HzTxfcgu%2BZ411I61AiAeQf34brNzg6gnvPveUgDLEdGRQAn4fJ5cCTEypfkHcyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDR3QSoOoYhpVzaEQKtwDLo95%2FW74f%2FUingVbkZHxSEXI%2BLSpTmEi9EbgkPxDcl%2B5kecWSlqVrfKhzTAaCq7OhEfTY%2FFOIJ9%2FV0WQy5mzbjpems18PLVMnqhTSorkxB6AjlcbvWSR87XXIsY9lTdaqSyqUFm4P2LKRMnfMr508QFHetHgbNVfQTfvUOE5P6mUkqSo%2BMMuFOTSQP5RgjUqys%2FK6PuBCteJ%2Bu6%2Bd%2B4pnw0E3u9MTRgOWt58Y0w7S9zccpKNvnRjghyJvhB0djKoLaFJCXGOU8eHQLp9DGLw%2FvobbGjpKR9BdhLKgmGoBDlmFwd94%2B9Efm%2BmUSBxwpNtZk%2FGDALPYbkg9lfTQe%2BAQ3XthqwjM70dMGk2LGgydrdrp0fIbUlEy2PsdWwB2oxgnIrjWolC9E1Z1e4cXbDjja%2B4XueYHKYIWo9JSB%2FtwJX%2BbBkWq3zX%2Bi%2FxuavYYQdjl2WwqdCdy%2F0K3rczgtSOn1H6tBQFmIJ4q2SvmwbvzDGgc5Hp%2BANhV06uIxLPMF9oetSi6RbOhcA%2B4bXK%2FROiJeNh7P9d1XQ2e4QqilK0dkvLfJBdHoSNG6xcGQz2%2BESdDTTijlCzu%2B5zqUPDXkL0vmJ%2FIqt7RH0tyaR%2BySfytZa35KLpc4fpy0qxaq8w3LHCvgY6pgGKHAKulrc7C1ZrMPCPK8fvA2Pq%2F0QKvts3exz9Y%2F7xD%2FP1BULsvwjYnPUXC9bq5TIBTfYyZAF58HGX2Flgd9grM%2BJpfCAbZH9TdTw1i%2FjREM86cMZiCE9j5X5myVI2vwugdQ%2BsNxuLR2gYDI%2FSlixNVMiZ6EOHtpunBu0Y6VOOOsBFgbmI0%2B1%2F%2Bn4VWUAoY2ej48rJ9fVzCUdYQrw%2FxJmE8ML5XWd1&X-Amz-Signature=69ee4f4d3055f4dc29797da3e7489b98b3c9c558569e3633124c6044559a672a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF7HI5Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBD1WQiSrBz7dNq9vq7HayHMM5%2BEaHzDRX82kRLYQztSAiBt3WE86d8%2FHPIobAm0648HYbe0TJp4wQD5R85opBH8YSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMBVZycgHEoFx8vN0KtwDArF1iT%2FGvoGAixWsOXA1rK2mRdE7reEA1MtZ8i4WoeopsMmp%2FMPryA1zIjlVPijCC%2F%2FYC996iDZA5Zv1ZpWlLbIc1J2NSXOgkH1lYEuZ0TrRcYc8Fd894BLF5cAx2yxhn%2FCOzyfTfkWCE%2FngIq4DvRT00DV3WpMLK06QfOiWTQiFsreDH%2FqpRIQuKXkAEjuLKCLtNUpn4BXT8ztuP4sVdZhkQV04utSSdo0HFRyasK6INDEijrVCFzgKdDslcCFlVUCzvBy3uy9p5yEL7FZl3oQgdkJ6d7IZhwiPS%2Bc9C7MSviHAjKrCJhNlVNFlt6S1Hx9mfP1e%2FLYb%2F%2FYuEiYcZIKHBWIDSTWbxhyG45Au4G%2FvxCPW1RfYiTZ5ACMrJb%2FhOoqBMZRFMovd0iPIwsg%2B6H5Khxo2HTEO4G6%2BGYbzy5BpOj9jvTsHC%2FVgrmfu1JzSUaZrqTCOM5mq%2BN%2BZXyj3Hi1Iu6y95E4sw2Mlr5s8Q4%2B39cMyfw8NHvaM7vLSDQ88Xxb8JVhxXPcr4FTsVFczdnL5YaU7tntZUAz2BDH0OEusr4G7LTYkLcjnciasnG2fkK04Ci9tXqcKhLmJ%2BMrGzzGrUAPqNTKMkKzV%2Bzr1%2BTERGxsY7hDM%2B40d9H8w0rHCvgY6pgHnz7nx1zOdfTN3O0VCbdPbVc%2BGUdstw8KOImeiVmfjwoIohArSpiFiVDJAj7aQaXpDxPtLq5%2B4u80anOFqPr43oku72EiJa78mw1hfeZA3KXmqh2vdBkb71DzLmxmQPZHPxBdnWJ5UgKGdwolz2iame6Di6T2Bk2jW8OnWVO%2B0t7VT7CtTuEj1AdzpoceK2iRAUmnGacF8TCJFi9DSwPLkC4ZEsoWO&X-Amz-Signature=646b40e3f73b5f27fdfe983e69b5acf120714db15b36c53d8a101a34af97ba86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJ66WZU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBUhhUK6XvVYlbWwIrbcsF0Z0en%2Ba8w1CBMuka0ZsCnkAiEA8A1zEz%2BhfvyQvxVtM4iAoTsuUmj%2Bm2bY1mQ7qMr%2FzmYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1mRpRkWFBLbWbzIyrcA66Q3jW%2BJNudDCKkciJmZKUKn4B7ZdqLtpcubQ%2Fm%2FnClHvsRL7r4B1nMwGcUEMAXQgYCCJWiRkJHpi6X7f1GkSVtiiNFrSLH0OJo%2Bt74TO%2FRfxhJCF8erl5vz00QA6IURUEZ7mGBZPDGHuEDu7naVE7mO7m2hbKkm1V%2Fb7HRUt1z2%2FpOaKTyWOFG7XitdsVqZ%2BcqMOL4yTfOfNPdc14Z5bMKA5e6AoB%2BbLX9Xdd7svpojM3cYe5%2Fg3b%2Fb6wG3pDSrhzC4DHyhUFQfmnNv6pQ1SqPB4oOko9yb9fUkxfgcODt%2BRK83xgaTgx%2FNr5oHv6buuXFcPJdLMm6Tf75Uqc3yowQv%2BHMs8FFMgNWKeKki%2ByrHx8ePJIp8PoZK8dNHt5%2BfKrjHnoOhMkOBTq%2Fa9KXNqM942MT8f0Z8nKjUtM%2BsYoxB9jhRfYJiCn65fDKVTJczacI5erbtcSdRPbIxAbSTgYoiJC0ROOh5xJt21ndloTHJxenHwmEi9j2B3qvUgh6BXgSpKHdK5h4KqpfNllg9oA5m%2FSgWjaEJGgUQwqBmFslu1cDLdGQc8GsaV0pX6wxXXoYo0%2B362LE%2BU1q6ChDvjXQIFUlfq%2B%2BvrcZmxKrlAu6Iz8mk2io8tKBUy2cMI2ywr4GOqUBSbRvcMXGqX%2BdA3izqm2%2FHURAEMhoTtQTGzxdq%2BowU8HYX4OvM8nBtGJnS%2B7omCJsgPZDSRWCZRFGN2aNdGhjPdmJiMqHN4CinXokmWGBJ%2Bt%2FYp7y7jUSV3V6ZPv7yV%2Bt7B4kZHL36eG3mFYnIYunQVH%2F%2FpwFXCWgy40JJuSv09bb%2BpO2ZBouezmIV8sZj101ZJNQl7vyKS%2FwWX5RNbxFMOr1uqDm&X-Amz-Signature=3c784ee577fdfb6eeae597ffc80f4ae296cd0328f6b74ad14526a4cd2886fb23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
