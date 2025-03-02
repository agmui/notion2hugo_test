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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM6PDV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2Fy5ZePU9iV4o6S35cdeDlL2LwUTDWpdveiOS4VQfnwIhAILBLNsivg4g2vQ%2BOlBtNVKhd4rKXYf2w29C2rAKexZ9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0md18YwTlsx6SNcoq3APIHY3H7Qb2X8d%2BzdBHb6k%2FVneXwMtuS%2Frko3797E7P4t%2BA55Kgoq3KtUGIaj9ifx5mC%2Bf51qJy%2F61bjA3pYRwTMTs%2FIg8nPCXeof%2B266xwwoBeV63NnSUbBq5w8Cl8VnUZIxbzpqo9q3K6QcwFFuTOAIN0UQnMDM05%2BQbfAUILSOarHwXu13vMiTgQqTR4%2FylNq3m%2BbRRZoV5oTgKVIvbxvxZM6p5Fods8%2FCKG0vRyKltBWTDimNXa%2FPz4TpkWqiMTm%2F7AaeJ7qJBj6FOERqMinxssZhiE3iiyZj4cASZXh1%2BkeC0S2RlzuHn%2F%2FQZF6%2Bs3BjAOZ3qBN5udMd%2B7R%2BJ70W48ytP5iW0Negvq%2FB%2Fcby5rjrbiGKd%2F8gWN0efPUvZo%2FJ8fcdlmFL38KGlSlLhNFg8Ok7TBf4b3F6nwVwwVTA2610uCaX8lXWKzJUvSqv8hrT2gYdN31eNSYRmej5qyuTHJJwbFw8CYLPhHrUw2JOkAZ%2BOPcs4z2sD4TaHRaDUQU%2Bwg1BOS9tGmcECyAC7KQvYBT3GOlPV8SvJNn2Z%2FY0O6mpP1He209wDqLy5LaNTK%2BRdKOeU8kMTCC8ESmtCQMBpEDMy9UOlBd4IFbzwBNjIqd46aXB7%2FVOA%2BfDCd95C%2BBjqkAbLhwHUO4pn5RmWsDf5mACPu9bFsU2g2EvLA0%2FLV%2FWZ2X%2FTdSCRrZhPUFY9QvEi%2F2rOnOhqM2i4z4vKc3qNsqS77fAANNv0Pb4rg0dxrDBwDtCovmWsFtWooa3s1rL8bGZ95qmmPWce%2BZiTNFIcl6mET0WL3D3ktxAx8MUNt5e%2F44pl8n%2FTGnG7iS6zQvp0MrO8OkTp2kKq23i89wzxVAAcCGpC%2B&X-Amz-Signature=d3507448b1abb7d16bd5d45a18848276f773200faa9471e55ddaa2235e8c55a6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM6PDV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2Fy5ZePU9iV4o6S35cdeDlL2LwUTDWpdveiOS4VQfnwIhAILBLNsivg4g2vQ%2BOlBtNVKhd4rKXYf2w29C2rAKexZ9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0md18YwTlsx6SNcoq3APIHY3H7Qb2X8d%2BzdBHb6k%2FVneXwMtuS%2Frko3797E7P4t%2BA55Kgoq3KtUGIaj9ifx5mC%2Bf51qJy%2F61bjA3pYRwTMTs%2FIg8nPCXeof%2B266xwwoBeV63NnSUbBq5w8Cl8VnUZIxbzpqo9q3K6QcwFFuTOAIN0UQnMDM05%2BQbfAUILSOarHwXu13vMiTgQqTR4%2FylNq3m%2BbRRZoV5oTgKVIvbxvxZM6p5Fods8%2FCKG0vRyKltBWTDimNXa%2FPz4TpkWqiMTm%2F7AaeJ7qJBj6FOERqMinxssZhiE3iiyZj4cASZXh1%2BkeC0S2RlzuHn%2F%2FQZF6%2Bs3BjAOZ3qBN5udMd%2B7R%2BJ70W48ytP5iW0Negvq%2FB%2Fcby5rjrbiGKd%2F8gWN0efPUvZo%2FJ8fcdlmFL38KGlSlLhNFg8Ok7TBf4b3F6nwVwwVTA2610uCaX8lXWKzJUvSqv8hrT2gYdN31eNSYRmej5qyuTHJJwbFw8CYLPhHrUw2JOkAZ%2BOPcs4z2sD4TaHRaDUQU%2Bwg1BOS9tGmcECyAC7KQvYBT3GOlPV8SvJNn2Z%2FY0O6mpP1He209wDqLy5LaNTK%2BRdKOeU8kMTCC8ESmtCQMBpEDMy9UOlBd4IFbzwBNjIqd46aXB7%2FVOA%2BfDCd95C%2BBjqkAbLhwHUO4pn5RmWsDf5mACPu9bFsU2g2EvLA0%2FLV%2FWZ2X%2FTdSCRrZhPUFY9QvEi%2F2rOnOhqM2i4z4vKc3qNsqS77fAANNv0Pb4rg0dxrDBwDtCovmWsFtWooa3s1rL8bGZ95qmmPWce%2BZiTNFIcl6mET0WL3D3ktxAx8MUNt5e%2F44pl8n%2FTGnG7iS6zQvp0MrO8OkTp2kKq23i89wzxVAAcCGpC%2B&X-Amz-Signature=af8a2acd04400c525b70da50ab98c562de46975f654ae963f59bd1cb706d51d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
