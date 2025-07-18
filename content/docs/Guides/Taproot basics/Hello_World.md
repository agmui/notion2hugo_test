---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGDT36I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDO2Ps%2BiNCCKVTqBd7MQ9jQ8HPBpJ2Z%2FjRVgMM0QKhMBQIgalmvI5BAfHVrTTUuqAkTztYxDRtYy9KwXSB1sCsULwQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjXOThkJ%2BOX4Ed%2FeSrcAzII0v6hTR8cOLTbVl3fJ%2FEEQgil2gXkr6PDFBuy%2FCN0NyVs3VHoIpK%2BTVAMP70wbbIfxjLTQy1reRTvNe2hKJYGL0vI0z06Qq2Vk%2B6siBSSYhfZU4E0LTk11lxLBL7byqXhi8ju9M6CZIPJ1wzXPKFlvKq1DMpGsAm2NIEFUa1G1cmQQD4K4nVo%2Bm%2F2X%2B4QRkdLrFpfuetTmnk0zGTzalCatoSdvbFftWEM1cJJfnD4lf7noK%2B7DAkC%2FMDY2YJLJj7Cqy2cEoR2CbsgKZ%2Fv53qMlgd0QIYaSRlIOAcQt6Th14fSEdSMXpEoHckBGstRkHHf4hp1zAq9C%2BmWAYnJ6XP04nbH%2FmZc41hKRezPPDe8Ji3u66pQ6NhRbyQ95RAT5nv%2BWhb9oxLwTIt8tGP1C3IHfeAgP8JubwFO%2BUBAfvVkfkIYPWRxfGz0UsKfPauNoL%2BbG4l8sZTZk%2FeD8UHdAtg91fZb2b1QH6dr%2BvgYxega0u7r9Qm8axraTCjClVOM05VCsPRWbwdjLyiY%2FhT%2B7xV1K%2FQ0dGR4yKccxIsTki7EJGPoaO1JZhamBhaSkiiyTNV%2FUs%2B0yH5XnTifoWsWmHgSTBcrz5RQAPYEK%2BpdG2z1aYyHFsgew0X4eAgeMNfg5sMGOqUBOVwL4XVjc5umDKdL%2FBhxuGTJrGF7kDiv9TJJdGjKxsRHZyf8IhF0xYHfPzPvu8GM9CIXT2rmt2JgYGTmzJp%2Bcftvyqr2U0yKF6tI6NpZ7vuGtR0ifCgd4nhXy2Xn3is9105JT08a91jBN9WeX7KXL9rRWs2wSpisb%2FYcj%2BAX0ai8%2F6GmcqOqRCatdeGv%2FcKTun9B8%2B8B6y52vAeUX9r9Mzq1sBKI&X-Amz-Signature=c97700bcb63b5a7e7e6ff83ca8a4d9869825d639457a1e48e290c4cc59594f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGDT36I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDO2Ps%2BiNCCKVTqBd7MQ9jQ8HPBpJ2Z%2FjRVgMM0QKhMBQIgalmvI5BAfHVrTTUuqAkTztYxDRtYy9KwXSB1sCsULwQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjXOThkJ%2BOX4Ed%2FeSrcAzII0v6hTR8cOLTbVl3fJ%2FEEQgil2gXkr6PDFBuy%2FCN0NyVs3VHoIpK%2BTVAMP70wbbIfxjLTQy1reRTvNe2hKJYGL0vI0z06Qq2Vk%2B6siBSSYhfZU4E0LTk11lxLBL7byqXhi8ju9M6CZIPJ1wzXPKFlvKq1DMpGsAm2NIEFUa1G1cmQQD4K4nVo%2Bm%2F2X%2B4QRkdLrFpfuetTmnk0zGTzalCatoSdvbFftWEM1cJJfnD4lf7noK%2B7DAkC%2FMDY2YJLJj7Cqy2cEoR2CbsgKZ%2Fv53qMlgd0QIYaSRlIOAcQt6Th14fSEdSMXpEoHckBGstRkHHf4hp1zAq9C%2BmWAYnJ6XP04nbH%2FmZc41hKRezPPDe8Ji3u66pQ6NhRbyQ95RAT5nv%2BWhb9oxLwTIt8tGP1C3IHfeAgP8JubwFO%2BUBAfvVkfkIYPWRxfGz0UsKfPauNoL%2BbG4l8sZTZk%2FeD8UHdAtg91fZb2b1QH6dr%2BvgYxega0u7r9Qm8axraTCjClVOM05VCsPRWbwdjLyiY%2FhT%2B7xV1K%2FQ0dGR4yKccxIsTki7EJGPoaO1JZhamBhaSkiiyTNV%2FUs%2B0yH5XnTifoWsWmHgSTBcrz5RQAPYEK%2BpdG2z1aYyHFsgew0X4eAgeMNfg5sMGOqUBOVwL4XVjc5umDKdL%2FBhxuGTJrGF7kDiv9TJJdGjKxsRHZyf8IhF0xYHfPzPvu8GM9CIXT2rmt2JgYGTmzJp%2Bcftvyqr2U0yKF6tI6NpZ7vuGtR0ifCgd4nhXy2Xn3is9105JT08a91jBN9WeX7KXL9rRWs2wSpisb%2FYcj%2BAX0ai8%2F6GmcqOqRCatdeGv%2FcKTun9B8%2B8B6y52vAeUX9r9Mzq1sBKI&X-Amz-Signature=80fbf4e7e9f20d1b76fde69b183690f21f5aa17cdd09cb6c4bf6ed96e99094a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
