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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6YPB3T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfLk02t9O%2B%2BdvhBQ1QYUB4TfT8wbDLWh0I1GLstM%2BXpAiEAs34HauvQrcAtluAiA9g98%2FkVprZBUJ9kUoSOqqgY4m0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTNfITQQmN0PhqA8yrcAwALXwAaWwwk0SJTgYauB1wppy%2BftIPbNGNb6HkhDxCGTCuxByfeuc5F1gF5MI4p8aBaLuHSgGfCI48wSEgJ1q3ccsVgjG1a2bOgo0g%2FAqN9OEo5CIQdaMyyblJ2RLWD0Hf7mbKqMqvBGMKI7%2B%2FlB44KGEWTMcuzZHCaA0snARqfKSGpCybxEmcD%2FftS2UA8EMAVK8lfi%2FsMYbA6XCWzs3EVjWPesyib3EgAH2yYMX8CUqh9S9qtwLRvtMU2cQmxjA4m7RDojb%2Bfe0Rf4SjSM95LFZN%2FrDjp%2F2qxT9Z8L2PAPKN4pKjYlR9wJbWGq9GduSQ5EgC58sOx%2BG42%2FWZESR00Utq0UzyE8GV84XbTtBoTIKKpNPJNugE4LFORJaaGId5ZYkgpQrEr2q00KchpukpSBJ3x7axUCcI5RjiUjc1Wkgjab%2FMHEJHlzh%2BkLI2WCDTVdN7dX%2B4ou%2BLP343I9GCrSNVmbWRxcwen380l5Q6%2Fz9GVhlbvZZRlof5EyXUm6uvST3WHK23ezFRezogTKWSgGVO9PLD62KXBrpJCq6FJzzSe6PjFSnFBcBBqFvBbjvRQ1UmHAui3lf3HjJyQzYyWuXn%2BZFhwMjd0JEP6xqv817JRO5MONsyL8YQ0MOaZ9MAGOqUBHeEpBdM3Lo2gK%2Bt7BJAeodrvjP9XxruSpCb8bEu%2FONWEP8jVnqiop5En64rHwvOuGYUQdHZXVLZ5anPJLV%2FYh%2B%2FThxWM9ogQ5F2kctLEwIWIbsiHN2qsX8QK%2BGlPCwnvATJpp%2Fm1hPFUCbsxePeQGgP9iuoma71rEy7x7yoHtYN2aSlmUUt8tE2PHnMeAIayXRo54%2ByW7s0UPIcTBIq84eVSdI7e&X-Amz-Signature=229bd71e0cccc21603ae6cfebcc310339c5ca7d7e4de25ed60fe0a0c8b913148&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6YPB3T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfLk02t9O%2B%2BdvhBQ1QYUB4TfT8wbDLWh0I1GLstM%2BXpAiEAs34HauvQrcAtluAiA9g98%2FkVprZBUJ9kUoSOqqgY4m0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTNfITQQmN0PhqA8yrcAwALXwAaWwwk0SJTgYauB1wppy%2BftIPbNGNb6HkhDxCGTCuxByfeuc5F1gF5MI4p8aBaLuHSgGfCI48wSEgJ1q3ccsVgjG1a2bOgo0g%2FAqN9OEo5CIQdaMyyblJ2RLWD0Hf7mbKqMqvBGMKI7%2B%2FlB44KGEWTMcuzZHCaA0snARqfKSGpCybxEmcD%2FftS2UA8EMAVK8lfi%2FsMYbA6XCWzs3EVjWPesyib3EgAH2yYMX8CUqh9S9qtwLRvtMU2cQmxjA4m7RDojb%2Bfe0Rf4SjSM95LFZN%2FrDjp%2F2qxT9Z8L2PAPKN4pKjYlR9wJbWGq9GduSQ5EgC58sOx%2BG42%2FWZESR00Utq0UzyE8GV84XbTtBoTIKKpNPJNugE4LFORJaaGId5ZYkgpQrEr2q00KchpukpSBJ3x7axUCcI5RjiUjc1Wkgjab%2FMHEJHlzh%2BkLI2WCDTVdN7dX%2B4ou%2BLP343I9GCrSNVmbWRxcwen380l5Q6%2Fz9GVhlbvZZRlof5EyXUm6uvST3WHK23ezFRezogTKWSgGVO9PLD62KXBrpJCq6FJzzSe6PjFSnFBcBBqFvBbjvRQ1UmHAui3lf3HjJyQzYyWuXn%2BZFhwMjd0JEP6xqv817JRO5MONsyL8YQ0MOaZ9MAGOqUBHeEpBdM3Lo2gK%2Bt7BJAeodrvjP9XxruSpCb8bEu%2FONWEP8jVnqiop5En64rHwvOuGYUQdHZXVLZ5anPJLV%2FYh%2B%2FThxWM9ogQ5F2kctLEwIWIbsiHN2qsX8QK%2BGlPCwnvATJpp%2Fm1hPFUCbsxePeQGgP9iuoma71rEy7x7yoHtYN2aSlmUUt8tE2PHnMeAIayXRo54%2ByW7s0UPIcTBIq84eVSdI7e&X-Amz-Signature=4b1b59f9354f127e09b23ccd4dd79151f81eeea3ecaa3dc0540b5aeaa74d7ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
