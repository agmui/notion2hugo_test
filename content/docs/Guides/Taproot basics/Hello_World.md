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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y32AYNN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8CB2BSE8E9ILMcZaBsZ9Hk4tmwRiZUkTE%2Fn2uUtIHAiAYjFzqevqYsE8b73JcusDtTwfwEmGJsA4tnRExL4VdIyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIQJLfLwV6aQA6NSKtwDRqbGLi7T7nbtCReyl3%2FeJapaa1V2%2B8JnWT7nsfmOdNsS43qkY65uL0P4VuVYDftqQVRXM6O1kfQR2uz1Jh8bYh6WS1lsv%2FNwK65%2FjlpYmUmR1oTN62e8jBf0AqLoJVNmnBxcENalT7ILAsd9aZPcC%2F7L3fv0RbDhfhnycZG3sgH0hK2YXPeQ%2FryH42qQboQy338QCyU0gxu6zjAmG4H2B6C3dAcXlgdInz1Rbf4Ke6ZgNU7ldssh9u18MsDyZcVEeEHlWTFDOXiPZcVbFKFuABFO10gk7Cs2RN%2B9Y9ImUZ14JY5a6bUbdqbbITpFDvtjJHE6dMRK2ZvLf8ZS6SN1jHOfBc7NMUAH8i46%2F1KjZcb7t8pMipRNfWpSIYLeJGNqFsO7AJo67ZJ8lNOnQ%2FWqAD08E6drDvXirInf1W0mzmxfL2rx%2F7OX6zfskxyyQf%2B9AUWj0a64z1ucUkVUC2N7sBk8PXiQfyuv1itPuMcaGGARB1ZFDvQxUpN%2Bgj89U9r9AHOfbaiwsiyQMZ%2B3sPTfTOcscZCIe0UfqXqRoWPUV6O0eX3ZwKO2jwkvFZGBSG%2Ff2Ubmo4hiUM8KAfabhkggiLEIY2%2BexaH0biLvXhwCl9g4aeAwwF2Cxoq3bs4wj6SbvgY6pgFFVONoWsZPK9ql%2FRiqcqGLKDWolK1o5yiASH3CQWFXWXyussZo%2BAL4yut%2BlGAeqIRnUV0zn%2BUktcTRKvXVD4yweQVeaDKuxxRCA6hswvNJJdm7FJM8Ut7q61vsl%2B6sT98oRsoQgPV7mwyraPcBmcGoIxwUJGDiies5mcI85DWVvXz6IX9Dvnx3KvMHuEk9MwefAIpykD6CahAcKsIJbn31XzKGAFLK&X-Amz-Signature=946d495bd6b0f80918050578f461dbf0511e23b368b91cccc3165d6d7d9edfa5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y32AYNN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8CB2BSE8E9ILMcZaBsZ9Hk4tmwRiZUkTE%2Fn2uUtIHAiAYjFzqevqYsE8b73JcusDtTwfwEmGJsA4tnRExL4VdIyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIQJLfLwV6aQA6NSKtwDRqbGLi7T7nbtCReyl3%2FeJapaa1V2%2B8JnWT7nsfmOdNsS43qkY65uL0P4VuVYDftqQVRXM6O1kfQR2uz1Jh8bYh6WS1lsv%2FNwK65%2FjlpYmUmR1oTN62e8jBf0AqLoJVNmnBxcENalT7ILAsd9aZPcC%2F7L3fv0RbDhfhnycZG3sgH0hK2YXPeQ%2FryH42qQboQy338QCyU0gxu6zjAmG4H2B6C3dAcXlgdInz1Rbf4Ke6ZgNU7ldssh9u18MsDyZcVEeEHlWTFDOXiPZcVbFKFuABFO10gk7Cs2RN%2B9Y9ImUZ14JY5a6bUbdqbbITpFDvtjJHE6dMRK2ZvLf8ZS6SN1jHOfBc7NMUAH8i46%2F1KjZcb7t8pMipRNfWpSIYLeJGNqFsO7AJo67ZJ8lNOnQ%2FWqAD08E6drDvXirInf1W0mzmxfL2rx%2F7OX6zfskxyyQf%2B9AUWj0a64z1ucUkVUC2N7sBk8PXiQfyuv1itPuMcaGGARB1ZFDvQxUpN%2Bgj89U9r9AHOfbaiwsiyQMZ%2B3sPTfTOcscZCIe0UfqXqRoWPUV6O0eX3ZwKO2jwkvFZGBSG%2Ff2Ubmo4hiUM8KAfabhkggiLEIY2%2BexaH0biLvXhwCl9g4aeAwwF2Cxoq3bs4wj6SbvgY6pgFFVONoWsZPK9ql%2FRiqcqGLKDWolK1o5yiASH3CQWFXWXyussZo%2BAL4yut%2BlGAeqIRnUV0zn%2BUktcTRKvXVD4yweQVeaDKuxxRCA6hswvNJJdm7FJM8Ut7q61vsl%2B6sT98oRsoQgPV7mwyraPcBmcGoIxwUJGDiies5mcI85DWVvXz6IX9Dvnx3KvMHuEk9MwefAIpykD6CahAcKsIJbn31XzKGAFLK&X-Amz-Signature=8f35beb99271a3d5baff146a7ca3e086b9188c8aade27917f2a8073a83c9d521&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
