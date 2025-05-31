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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHKRI7A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXHnE67B7JH2aw1qB3xj5ZiSK5p6kJT8SV3NQ2zuZllAIhALPdtDlG4hnAwF5kFFPeak%2BOivvBL3IAd1nhZY%2FaCwSHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfJRGFpKqphYlKfCAq3AOhUK2Kj9VkMmMNByrhvtjqviSeTc2PiukZy497aAkN5idSWPPK9jCmGBuLwoVsRMKhaXpw9MJ6iIRzlqvSAvrnvl6oEzrjiaSK5x66esNoz5uSH9y6kqhtwekOVjDnqJEitV6yK7rh07NmiAjSH9SP54SePMncEcfhhlSn%2FQvEvJr4mfHTGAYoJZDAe%2FwJqpa%2F0LDEVIPYHPk6p3s0J60iL03x7E6cL25KPn9FRYwjZdjonArzI1I5Z2BVzPcqE%2B9tSz6XgW0rHBKJeRoEVxM5p%2F3vk%2FpqMU8BpdYrQxi7KiqQ8Q5R4c3%2FTpH422BXlKXtF9q7vIw%2FWshZf8pFLyIcEGBIA5fOshLQpD1Kqc7cuFWGxrDbq7VaAkEbaWetT9ds78FO3CDfF6K0QccE0%2Biot7mhOqaEsLQquGqD7kZh%2FOt3RzxbunHU8A3LoHlc%2Fpn%2B4z1tS3YUu7DsS1r84upua%2Bw0zkvMnjCukSxHwCiiuJ%2BKbfgih%2Btb9mwGksC2K%2BzXgzriBD%2BoLBeP6F91o2%2Be8Lfwf0Z8L4AHVw6OmXw30vTObXvL0lq1B8U7AyUB4yyf%2BXbW9ZvYnrXm4z%2FMjtmi%2BqxDLkWDb9e32%2FvnEuAP722FjccF0B0cXQySgjDq2%2BzBBjqkAcqu4hHh3YeUsdH3iknxNdKH3LR2rwq8AdXijYKFa20qU71b%2BF%2B9EEIBoScrTG0J4IFJSc3jh1H69NlEL4ZOlkdgh9SqxZRb4984GYqtRLQS53Xx2KU1xCReMUw2Na%2BGA6DT%2BROTUj6%2BUw9s5WY%2F%2BrlZK3PZDnrQTehkWEhALJYYA%2Flx5VM8Yfd3ZSqAEMDNToLlTJGT6VfjJ5QwnO0ZRXG%2FkaN7&X-Amz-Signature=4689892a76a1258276b8e240779bac489f2c1a8dcefdb0ec1b412fffeb290752&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHKRI7A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXHnE67B7JH2aw1qB3xj5ZiSK5p6kJT8SV3NQ2zuZllAIhALPdtDlG4hnAwF5kFFPeak%2BOivvBL3IAd1nhZY%2FaCwSHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfJRGFpKqphYlKfCAq3AOhUK2Kj9VkMmMNByrhvtjqviSeTc2PiukZy497aAkN5idSWPPK9jCmGBuLwoVsRMKhaXpw9MJ6iIRzlqvSAvrnvl6oEzrjiaSK5x66esNoz5uSH9y6kqhtwekOVjDnqJEitV6yK7rh07NmiAjSH9SP54SePMncEcfhhlSn%2FQvEvJr4mfHTGAYoJZDAe%2FwJqpa%2F0LDEVIPYHPk6p3s0J60iL03x7E6cL25KPn9FRYwjZdjonArzI1I5Z2BVzPcqE%2B9tSz6XgW0rHBKJeRoEVxM5p%2F3vk%2FpqMU8BpdYrQxi7KiqQ8Q5R4c3%2FTpH422BXlKXtF9q7vIw%2FWshZf8pFLyIcEGBIA5fOshLQpD1Kqc7cuFWGxrDbq7VaAkEbaWetT9ds78FO3CDfF6K0QccE0%2Biot7mhOqaEsLQquGqD7kZh%2FOt3RzxbunHU8A3LoHlc%2Fpn%2B4z1tS3YUu7DsS1r84upua%2Bw0zkvMnjCukSxHwCiiuJ%2BKbfgih%2Btb9mwGksC2K%2BzXgzriBD%2BoLBeP6F91o2%2Be8Lfwf0Z8L4AHVw6OmXw30vTObXvL0lq1B8U7AyUB4yyf%2BXbW9ZvYnrXm4z%2FMjtmi%2BqxDLkWDb9e32%2FvnEuAP722FjccF0B0cXQySgjDq2%2BzBBjqkAcqu4hHh3YeUsdH3iknxNdKH3LR2rwq8AdXijYKFa20qU71b%2BF%2B9EEIBoScrTG0J4IFJSc3jh1H69NlEL4ZOlkdgh9SqxZRb4984GYqtRLQS53Xx2KU1xCReMUw2Na%2BGA6DT%2BROTUj6%2BUw9s5WY%2F%2BrlZK3PZDnrQTehkWEhALJYYA%2Flx5VM8Yfd3ZSqAEMDNToLlTJGT6VfjJ5QwnO0ZRXG%2FkaN7&X-Amz-Signature=f5c5fbce9ef5ffd38d0c2ea84ead90da2a9396563b76f956268366e61ee3e293&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
