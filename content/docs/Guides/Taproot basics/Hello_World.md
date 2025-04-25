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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBF2J5Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGL%2F9ia1OF5eFD%2B5Ite6G1ypKE78Ah0LsEkWQ%2FuEsXRQIhAIYwF6uxDHvui%2BRzVkMEBmveWvkegNMNo5egtspZ8QrOKv8DCCgQABoMNjM3NDIzMTgzODA1IgwDy5H%2FFzaVqpQrbIcq3APCT1QdM33Nj6OLTJxP8Ms%2BPEnhWEhsY7xIaw0DlWFg0JqFkExRR38AmrB9SVBZUEVRgpSFEzChxVY9Wl3SnJ6bQyUWqV9Bm8ST%2B5nklEtfKvgg1BAAfXl6bd6te2sg1ubSP5jRWHepEtgR6t4rjzcliURbW0B1DooGN6kCqU2CQ1WpJJGgNZHbYcFsnfOmg7%2BHMHdSUqb66RykqZihgS3RKwuaU%2Fh3KVpnl8nlJfkk74JZozjGAArmzbgOqbu5isLBGgF2SyIfScEBvBXIgzkDTndgPWLLvxMdWCHsC36HQnbEh8olL3XWVyQKXt8GKIyYtWDsWorA0LT2Y8ZAlz5dIKsVueOlTVdlFEfZMeseFcfpTv%2BpbBILx1skHrNpbG3LXA0m%2BAw0PZoTPiBXifByCr8mSARiVEJGrKuvrwCgxqtZWXQwRwkYtJKq6HqgseIAFY6aLOAHe3OQ8gauNrcgb4%2B0%2FCVABOfHXP%2FrOELXTXLmUiXbSWNulvDJqdc5dsESflHXnLv0TWdFlzdZcUwCPHZxG42MhYanEAtn4WQfpqJqHV0Km7iu8b%2FZFjzu473S07ThIwDyEROeOTt4HXMPwpsshoZLBUFgSUscxRBV%2FfiVKD%2BsRKmr1aYkBTD85azABjqkAWLZ3%2Bi3QmOvQ2%2Bb%2BPL%2FSxmIAaprvIie72MBybaILCGv%2BZSHWj1A0pY1jqIp6lQHxReiBY5LhKdMIRuE2AUEMrO3SFmPq4Sz0sDOUr5JRRXXMC9upRCe0%2BCxG1ymWlZi9qQSgpua0yivdKr5U822KJkyPfOw4sDLVAmV2Y9oUbx3zy%2FT3glDAZAf48A3sMnxXRvDgmZAo2I8uWaAEpEihZAfQcY%2F&X-Amz-Signature=c97c51600e953f7f01a0f1223a3871a957b814225e8c777d09037981ae5865dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBF2J5Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGL%2F9ia1OF5eFD%2B5Ite6G1ypKE78Ah0LsEkWQ%2FuEsXRQIhAIYwF6uxDHvui%2BRzVkMEBmveWvkegNMNo5egtspZ8QrOKv8DCCgQABoMNjM3NDIzMTgzODA1IgwDy5H%2FFzaVqpQrbIcq3APCT1QdM33Nj6OLTJxP8Ms%2BPEnhWEhsY7xIaw0DlWFg0JqFkExRR38AmrB9SVBZUEVRgpSFEzChxVY9Wl3SnJ6bQyUWqV9Bm8ST%2B5nklEtfKvgg1BAAfXl6bd6te2sg1ubSP5jRWHepEtgR6t4rjzcliURbW0B1DooGN6kCqU2CQ1WpJJGgNZHbYcFsnfOmg7%2BHMHdSUqb66RykqZihgS3RKwuaU%2Fh3KVpnl8nlJfkk74JZozjGAArmzbgOqbu5isLBGgF2SyIfScEBvBXIgzkDTndgPWLLvxMdWCHsC36HQnbEh8olL3XWVyQKXt8GKIyYtWDsWorA0LT2Y8ZAlz5dIKsVueOlTVdlFEfZMeseFcfpTv%2BpbBILx1skHrNpbG3LXA0m%2BAw0PZoTPiBXifByCr8mSARiVEJGrKuvrwCgxqtZWXQwRwkYtJKq6HqgseIAFY6aLOAHe3OQ8gauNrcgb4%2B0%2FCVABOfHXP%2FrOELXTXLmUiXbSWNulvDJqdc5dsESflHXnLv0TWdFlzdZcUwCPHZxG42MhYanEAtn4WQfpqJqHV0Km7iu8b%2FZFjzu473S07ThIwDyEROeOTt4HXMPwpsshoZLBUFgSUscxRBV%2FfiVKD%2BsRKmr1aYkBTD85azABjqkAWLZ3%2Bi3QmOvQ2%2Bb%2BPL%2FSxmIAaprvIie72MBybaILCGv%2BZSHWj1A0pY1jqIp6lQHxReiBY5LhKdMIRuE2AUEMrO3SFmPq4Sz0sDOUr5JRRXXMC9upRCe0%2BCxG1ymWlZi9qQSgpua0yivdKr5U822KJkyPfOw4sDLVAmV2Y9oUbx3zy%2FT3glDAZAf48A3sMnxXRvDgmZAo2I8uWaAEpEihZAfQcY%2F&X-Amz-Signature=0d2b41104937f05652c78c7ad8a496801fbfd397093d84a1d38f96833e84eb07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
