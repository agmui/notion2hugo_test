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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DREIKA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDTO8Aj1EMUmp0cy%2Frps980AVZbeA31Bf3B537nS4CSdAiB991kQ2JsEiCKek1L4stunMe7KpxYhnLBWchBxPa5BkyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx8ikmFwlhzrEUw4mKtwDapx1IRgtdI9dg3q8%2BevEQEf6DgNILliXwN1NLWxHAg7iz%2BUd2tbIHWPTCvFsAtg7cHxawGsE90ch8Ei6Aitj7hKqa10aPGNNeswA9lxFJJ3fFcyKdtDE0F4lzs2gRMjZtxAaWARCZJkh89jLGHcnFXSG2K7299J39iP1FzslS2J8%2BEV21cvPLvk%2BG5cSOp03P7Qcve460ZHaUC5BkEtn6qiqCvYPBzqRBtILNLKwYXxaFkZvJuRnnl3q1HKDBbFojc1WzggOiLbgZaAZEw4k7TZ2CUqaZwZ0dqWCIpBdPqBjivulkgjyoqsz7kKC%2FI6ni267EV5RdlOWufDS8MDSD7oXlcKDgTQS0rK5D9dMQt0O5v8QQv%2FrY9AsuKAtpV2n1Kv%2B2eWx70XYcNUTgPfTQwn%2FeHcZs%2F1a%2BJw8flsIvRsKNGMToPQckIy6NHuKp28m%2BD3KIlcyZhEeVh0nN%2FQuISVNCjMDisJcHSykbW62RMVm9uOgYTKSfLQPr%2FgrwRWb5765KHGzTnhV7pO%2FLVeHeyasoIPR9WqGAZ%2BIn037cRQVdGWnwmBlsnizIltdvogB2hRwEGyeMNFxo8A0xkEc6leM0nuIB6x%2BcQQXL8XebvDE624gWdJUjrlGWC0wreHIwAY6pgHpuEqsOubLxkMThLHGgrxO%2BPd42FKJFDMcfBj7qv2kGyrFBxcDF4QglwW5PYLP%2BUAI6TxRiX6vWuHQ9kRr652g1oZJXWoTeKMMAititZCWrYLDhldqSDh1VhjbuJEF6Gzzu3gMtD4h56tUen%2FhN3Nhdq68%2F1iHlYgH42wsJQLt%2FVAn%2F65TgRjBjthaV6KN%2F%2Bz3fC6EgZRdNitFtgyxH3CVdOXQl4ur&X-Amz-Signature=e6030261a95bee8707741aa2a971f3fa32c00f1a1e8106c85d592d72146e9614&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DREIKA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDTO8Aj1EMUmp0cy%2Frps980AVZbeA31Bf3B537nS4CSdAiB991kQ2JsEiCKek1L4stunMe7KpxYhnLBWchBxPa5BkyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx8ikmFwlhzrEUw4mKtwDapx1IRgtdI9dg3q8%2BevEQEf6DgNILliXwN1NLWxHAg7iz%2BUd2tbIHWPTCvFsAtg7cHxawGsE90ch8Ei6Aitj7hKqa10aPGNNeswA9lxFJJ3fFcyKdtDE0F4lzs2gRMjZtxAaWARCZJkh89jLGHcnFXSG2K7299J39iP1FzslS2J8%2BEV21cvPLvk%2BG5cSOp03P7Qcve460ZHaUC5BkEtn6qiqCvYPBzqRBtILNLKwYXxaFkZvJuRnnl3q1HKDBbFojc1WzggOiLbgZaAZEw4k7TZ2CUqaZwZ0dqWCIpBdPqBjivulkgjyoqsz7kKC%2FI6ni267EV5RdlOWufDS8MDSD7oXlcKDgTQS0rK5D9dMQt0O5v8QQv%2FrY9AsuKAtpV2n1Kv%2B2eWx70XYcNUTgPfTQwn%2FeHcZs%2F1a%2BJw8flsIvRsKNGMToPQckIy6NHuKp28m%2BD3KIlcyZhEeVh0nN%2FQuISVNCjMDisJcHSykbW62RMVm9uOgYTKSfLQPr%2FgrwRWb5765KHGzTnhV7pO%2FLVeHeyasoIPR9WqGAZ%2BIn037cRQVdGWnwmBlsnizIltdvogB2hRwEGyeMNFxo8A0xkEc6leM0nuIB6x%2BcQQXL8XebvDE624gWdJUjrlGWC0wreHIwAY6pgHpuEqsOubLxkMThLHGgrxO%2BPd42FKJFDMcfBj7qv2kGyrFBxcDF4QglwW5PYLP%2BUAI6TxRiX6vWuHQ9kRr652g1oZJXWoTeKMMAititZCWrYLDhldqSDh1VhjbuJEF6Gzzu3gMtD4h56tUen%2FhN3Nhdq68%2F1iHlYgH42wsJQLt%2FVAn%2F65TgRjBjthaV6KN%2F%2Bz3fC6EgZRdNitFtgyxH3CVdOXQl4ur&X-Amz-Signature=809e03277e742b08e9466526f0271e21e6bf4549b0b8064c23379860c471a631&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
