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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K42Y6ZE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDYs00qvo%2BxRdxEg%2F86fedt5gBv2qIpjYgpKm65gwvC4wIhAJSVz%2BRlTxJOpHmR6TXWb5AvZfT2EWCpp8k%2F7LJ7OATgKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoxsv9KdQyeRA%2BdAEq3ANpolkMWIE8wT98uTxGkM1MBPOgZP2g0tdnrTOZpjHXvGUyrj97L7NehZGND3MEl%2B7VJtYGdWhy97hUYNvrlhrTcixbs0NqmXcWu6ztxjzX12E8W2%2BT1A%2BqfEgrc2bE711TE57y7c%2BErKahBNmZ3Bsm5JJJMcANLenAs3Gab%2BciqtK%2BcmUbza92huD%2B4sDn0iTSmjQPsdTNr2T2w24QMP382ACRXOufdf7UxOOPm3CeV4uPGpVAMWRQwT%2Fw6YXBMP14rw4EvfaI5oIaytJ5dIXh2EOZBlZa9oOI1M6krON6ok4a0PSXV%2FaZR18qeUTseZhvw2jCojnq19HhDsD9GQUEqJN3r1YqAuJCvB1UPde%2BWbyHCP8dQEUVaItEwPV3ZE4%2BgefXClH2aS1l9VWhnebYC7PqAmqXv6fEmjXgNYTgRd%2FCws9UdXB8AybjGgTFwwh%2F61JZUiIQhNCY5ZkI5IYUbCtxguKGe4paDJqvepFyyaN%2BWL1232CqOZ8TdJhNLDluLrQ13VrxQHnAme5h9C50lmAxbMA642Iexp%2B%2F8nTeobuTV34BNqletQzeDtOSpIS1Ep%2FhTKZT1jQHyuU58AcrrGNHRyq1mmMj%2BT9phW9f1jz4YkAPTSWjshmPTzDkkrHDBjqkAfydm9AmUD%2FpnZlhatzITRvBnGMV3gQt95h%2BDDK427GJYlIgjnQw4hBdhvXG7OrBuchq1cE%2B0ciWRJhE8cDzhSWhZXOUlgJXvMSyt4IAA13wGInVHQN6RgCl3wQe47qB%2B0ZnXfE57XF4K8E1G6hPIFbDrg3fXTSb7ENk4m1pOtkRzQVd0wSFzHuyOwFNlhSCYqd%2FkTJ%2BvvPLxumCf%2B3hKRrwkqRa&X-Amz-Signature=d24b68a312bac5e9f477950267b86216af440c4896c17bb44141df9216ea9d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K42Y6ZE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDYs00qvo%2BxRdxEg%2F86fedt5gBv2qIpjYgpKm65gwvC4wIhAJSVz%2BRlTxJOpHmR6TXWb5AvZfT2EWCpp8k%2F7LJ7OATgKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoxsv9KdQyeRA%2BdAEq3ANpolkMWIE8wT98uTxGkM1MBPOgZP2g0tdnrTOZpjHXvGUyrj97L7NehZGND3MEl%2B7VJtYGdWhy97hUYNvrlhrTcixbs0NqmXcWu6ztxjzX12E8W2%2BT1A%2BqfEgrc2bE711TE57y7c%2BErKahBNmZ3Bsm5JJJMcANLenAs3Gab%2BciqtK%2BcmUbza92huD%2B4sDn0iTSmjQPsdTNr2T2w24QMP382ACRXOufdf7UxOOPm3CeV4uPGpVAMWRQwT%2Fw6YXBMP14rw4EvfaI5oIaytJ5dIXh2EOZBlZa9oOI1M6krON6ok4a0PSXV%2FaZR18qeUTseZhvw2jCojnq19HhDsD9GQUEqJN3r1YqAuJCvB1UPde%2BWbyHCP8dQEUVaItEwPV3ZE4%2BgefXClH2aS1l9VWhnebYC7PqAmqXv6fEmjXgNYTgRd%2FCws9UdXB8AybjGgTFwwh%2F61JZUiIQhNCY5ZkI5IYUbCtxguKGe4paDJqvepFyyaN%2BWL1232CqOZ8TdJhNLDluLrQ13VrxQHnAme5h9C50lmAxbMA642Iexp%2B%2F8nTeobuTV34BNqletQzeDtOSpIS1Ep%2FhTKZT1jQHyuU58AcrrGNHRyq1mmMj%2BT9phW9f1jz4YkAPTSWjshmPTzDkkrHDBjqkAfydm9AmUD%2FpnZlhatzITRvBnGMV3gQt95h%2BDDK427GJYlIgjnQw4hBdhvXG7OrBuchq1cE%2B0ciWRJhE8cDzhSWhZXOUlgJXvMSyt4IAA13wGInVHQN6RgCl3wQe47qB%2B0ZnXfE57XF4K8E1G6hPIFbDrg3fXTSb7ENk4m1pOtkRzQVd0wSFzHuyOwFNlhSCYqd%2FkTJ%2BvvPLxumCf%2B3hKRrwkqRa&X-Amz-Signature=474c370fad385e2924d8a7004564bec4b44724cb2e4d5accd29e3f1a6aeecb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
