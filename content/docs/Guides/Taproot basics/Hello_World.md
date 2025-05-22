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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ABGVHNE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2Bj8iyzu%2BJ44FIvtufyqCpEslqLiPeeAPM8XKjXVX04gIhAPe97nTw6A3DywnPKQdp7VTBVMyMzFIf3BISai5cIAqKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy8XfEjPP%2B4OKtdskq3APzEoKXQ8DBht4XYlBy0eJUT%2BHMOZRIu37LRPp%2FtBqbuvjTyrLw5B3vaZhWga4mjD4wxxPnTZh5RvnHco4X6t9jqy3ltPkW97WqfSJC48%2FsKf%2BPKIFfMbw4byoYBq2ykTYzKmjxUyR8HBVj%2BLt%2BLL4HxUs%2FNKD25ODur5HfBZ3eEz8nLWGD4L4ZEMqo4t0B0Eend0eqbQuGb9Sr3YIMVc6GFYXNOri6uIow%2BxpyL3oX3KCCjQ%2B8ugGsh7u6RX%2Bwyct%2FQfEKXnD19yodHYHDyZ1qNLe%2BFxdSwvfoj2gMKAr2%2FvdGotrkGanEA16VOtECN%2FhWMBwUvNgp7KoaAtinFyG4jVRhltOmit%2BF19noNynctHfMQU9N6pdEXml1vmAL6NUG5KfV1GhJIpjsfeIVZ9OtHqEXM0GBT1d6lyjx6dEQSxRY2fWg6Lueak2LMU9odMJAuK9c8NGmtmN0E9tFREkaNMvtiZW%2FiedKQlLVK22HhOn3jNq1AuxmlampbY2OHPUDYVVVc6BCVVBDurnIb6ZCinkeEjK3Zp249vTy7d3YUpLUm%2BkvqzTaGlhh%2BpuBfBnsHynliS%2Bmz76Tuog3xjcuM4qI0ODbGM52ZOHpvj468WpglNxo%2Bx1mRGASQzCg%2Fb3BBjqkAVUHkW9dLHWQXcTGsTR77LbY2RffCK%2FGLLjr5dlLlkiJKSC48mN8%2B4VR56kqYvyDDAzpADaDuoT4PYxtoYvkPvHiCJmuA56Vsl4CVvnja2e%2FncCTYRlVWAP3uRei9XTSv9bnwVR358RR8CUor0EESFvU4iYCJs3VSC5RyD4RNZwlkm%2Fs6P2mkTSJtt5DOp%2BRJ9AS%2FQbZGi%2B8JcNMXGXrQLq3Hoqm&X-Amz-Signature=8f1bc82ecb1bec7d38df8c85a67be76d2b16f579a98dfe11a87703ae261200b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ABGVHNE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2Bj8iyzu%2BJ44FIvtufyqCpEslqLiPeeAPM8XKjXVX04gIhAPe97nTw6A3DywnPKQdp7VTBVMyMzFIf3BISai5cIAqKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy8XfEjPP%2B4OKtdskq3APzEoKXQ8DBht4XYlBy0eJUT%2BHMOZRIu37LRPp%2FtBqbuvjTyrLw5B3vaZhWga4mjD4wxxPnTZh5RvnHco4X6t9jqy3ltPkW97WqfSJC48%2FsKf%2BPKIFfMbw4byoYBq2ykTYzKmjxUyR8HBVj%2BLt%2BLL4HxUs%2FNKD25ODur5HfBZ3eEz8nLWGD4L4ZEMqo4t0B0Eend0eqbQuGb9Sr3YIMVc6GFYXNOri6uIow%2BxpyL3oX3KCCjQ%2B8ugGsh7u6RX%2Bwyct%2FQfEKXnD19yodHYHDyZ1qNLe%2BFxdSwvfoj2gMKAr2%2FvdGotrkGanEA16VOtECN%2FhWMBwUvNgp7KoaAtinFyG4jVRhltOmit%2BF19noNynctHfMQU9N6pdEXml1vmAL6NUG5KfV1GhJIpjsfeIVZ9OtHqEXM0GBT1d6lyjx6dEQSxRY2fWg6Lueak2LMU9odMJAuK9c8NGmtmN0E9tFREkaNMvtiZW%2FiedKQlLVK22HhOn3jNq1AuxmlampbY2OHPUDYVVVc6BCVVBDurnIb6ZCinkeEjK3Zp249vTy7d3YUpLUm%2BkvqzTaGlhh%2BpuBfBnsHynliS%2Bmz76Tuog3xjcuM4qI0ODbGM52ZOHpvj468WpglNxo%2Bx1mRGASQzCg%2Fb3BBjqkAVUHkW9dLHWQXcTGsTR77LbY2RffCK%2FGLLjr5dlLlkiJKSC48mN8%2B4VR56kqYvyDDAzpADaDuoT4PYxtoYvkPvHiCJmuA56Vsl4CVvnja2e%2FncCTYRlVWAP3uRei9XTSv9bnwVR358RR8CUor0EESFvU4iYCJs3VSC5RyD4RNZwlkm%2Fs6P2mkTSJtt5DOp%2BRJ9AS%2FQbZGi%2B8JcNMXGXrQLq3Hoqm&X-Amz-Signature=fbc549a2ab985a59f8f04bcbbda48403ab45586b2ff0640e6fd6ea692879c8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
