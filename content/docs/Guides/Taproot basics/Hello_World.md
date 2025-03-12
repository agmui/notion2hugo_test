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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MN3V5UI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrhrpxtw5j9T5COppmTVv60%2Bpry9MY9iJv0le8U1%2F21wIhAM85aiy1oj3z1CEUqNOj1FNEMdm9KCO70hDiNwCiKhyuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8viCcfqgpN6b3%2FQAq3AOEjorWRZkWXYPk6cSVjXTicfxIlRHsZxFxyWwmcKgh97mDcKexOTw9Bc%2FY%2Be0%2FD0ZvXSXHQLZkcVLkWNukkmW7hSaOWxNCn0gM8CamKxOZyFFbmnlccLb0NWoKVTkKxJHNhtLCKJ%2FB3kiBsYGrRh006m4cxQM%2FQao5jQ2lxb2S%2BGeVh%2F1uzjGD01%2BYDN0C6vkSs1zNPq8%2BFqk17zI1c5R6GaKqKqkgX2FaoNaTQzZdnZL%2Feosr1BmG8cPRRPPwAVSdi6dL97URZnLmpkP9lireEb2wg2mEa6Sxm7OKJWpRmHJvgtWDk89B2RSEtTYo6%2Fe716p%2FpACVqKIKGI8tBkwfvZKaerAAMdq9Z%2F1dOhfydesUtRO2qJN9DCc65pDSjNankJSy0h60wjC3arVX0E495KlfuQBcpD51bB6znKsib55%2B%2F3UGi3EwKCZZdj03C6Ew6PmtesZKbGET8eJrIr8Vk1qgKwA5QmeIKnnRB3901sdJRKTk6A77zFykhvxOz6B71nRtkXyTHYXLVSeya%2FYqv2i%2FNjNME9KxuwsJcnvM0Istm33wpIW%2F89Wd3ZPYP1RLGttctNfutGTOsRBzWeMMZORc%2BQW1Fdig8BNlSjo0Lr%2B101LDgKXpko0%2F7TDKw8e%2BBjqkAZ0%2F2E0MM55cvGqBJcsfjN%2BsBLiivRewBnz%2FCXvELNPCIqblirM%2FGc381gr8I5jsaoZeLKeELArJf4sYaV7UD25yys1vPFMmiE2SbQqsY6rcQDk7C%2FP1OpCH4TjBlfaedWX932mB2%2F2nFdU28jhSLhR5ToCvywb8siOJG9OH9cmddUkmuoLv0dARtImD73%2Fgbk4ie8qmIXzpO5YuHJp0kY0GtRbz&X-Amz-Signature=36d035a9cc0d89ea45652eae294c3f9764898a24413833ea6c9366e7269c1eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MN3V5UI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrhrpxtw5j9T5COppmTVv60%2Bpry9MY9iJv0le8U1%2F21wIhAM85aiy1oj3z1CEUqNOj1FNEMdm9KCO70hDiNwCiKhyuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8viCcfqgpN6b3%2FQAq3AOEjorWRZkWXYPk6cSVjXTicfxIlRHsZxFxyWwmcKgh97mDcKexOTw9Bc%2FY%2Be0%2FD0ZvXSXHQLZkcVLkWNukkmW7hSaOWxNCn0gM8CamKxOZyFFbmnlccLb0NWoKVTkKxJHNhtLCKJ%2FB3kiBsYGrRh006m4cxQM%2FQao5jQ2lxb2S%2BGeVh%2F1uzjGD01%2BYDN0C6vkSs1zNPq8%2BFqk17zI1c5R6GaKqKqkgX2FaoNaTQzZdnZL%2Feosr1BmG8cPRRPPwAVSdi6dL97URZnLmpkP9lireEb2wg2mEa6Sxm7OKJWpRmHJvgtWDk89B2RSEtTYo6%2Fe716p%2FpACVqKIKGI8tBkwfvZKaerAAMdq9Z%2F1dOhfydesUtRO2qJN9DCc65pDSjNankJSy0h60wjC3arVX0E495KlfuQBcpD51bB6znKsib55%2B%2F3UGi3EwKCZZdj03C6Ew6PmtesZKbGET8eJrIr8Vk1qgKwA5QmeIKnnRB3901sdJRKTk6A77zFykhvxOz6B71nRtkXyTHYXLVSeya%2FYqv2i%2FNjNME9KxuwsJcnvM0Istm33wpIW%2F89Wd3ZPYP1RLGttctNfutGTOsRBzWeMMZORc%2BQW1Fdig8BNlSjo0Lr%2B101LDgKXpko0%2F7TDKw8e%2BBjqkAZ0%2F2E0MM55cvGqBJcsfjN%2BsBLiivRewBnz%2FCXvELNPCIqblirM%2FGc381gr8I5jsaoZeLKeELArJf4sYaV7UD25yys1vPFMmiE2SbQqsY6rcQDk7C%2FP1OpCH4TjBlfaedWX932mB2%2F2nFdU28jhSLhR5ToCvywb8siOJG9OH9cmddUkmuoLv0dARtImD73%2Fgbk4ie8qmIXzpO5YuHJp0kY0GtRbz&X-Amz-Signature=a8685c17530aca64c1b2bee1a3c577e9d7d761dbdc209777588ea209886c646b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
