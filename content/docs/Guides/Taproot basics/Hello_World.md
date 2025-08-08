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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJ6OEMR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDo90X%2FjMosEo1DrtZnGi6eeLMsogRNR1nVgiM8Vri%2FqAIgNsOqXo%2B0KzPL58HxO7JnefRX2XvkjkIN4y8aDwsxIZwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeNoVyBogf%2FNx%2FgryrcA5b79eA%2F3cMuLeZeFRbK7%2BSU7cVOxfmq7Wj6Q0yWvy6FiQWSRhMVwOLLXZ43%2Bco1%2FuOMTt3c0iD4cDQmamhC%2FVWMBHyF%2B1BKyVKUcfhs6zx%2FqaXp9L1CEnKY2XDoX3FDvPPemJXMTsauAhMayZR8es4y%2F8g1Trhyahb99ba1BMFV8AVNOkWdqgYhZNXSYCJvm1UvLI56s3L2mThmDc4QPcLlXP%2BCW%2B5H0E0jTJZf2cMG06JORPyUVR%2Fs%2B3bv37miZjUt69aS5rCfwfP8BDLNAozQ2693fQJkuU7XbsKCqHTikzHAg7nJDksXByk9iQmls5hPSi24UG4tNj0ZbOXblA06ma72buBTsktCLcslet5tSPQ2e3VeGQseQ%2BenCJt25VbEQHxx68PsuXROD5X5rqNEvD%2FxIlZg%2Bsm84Qq5F9sHTkCpwDMaT6ps2boCgqPLMoHxxiZIMG7d%2B7Z4G4kIq7qJnKbnNHHIkNti29YyOSk4uAGBIzdE6x8LKOmbyPvYn05tfkaf09h9oKjE7nyivDwQ9kVZMqijr7tyu3JpQiY4oZMMt3qP0kTz9TCSkceEXtxwTXI9Tz8nh7rKyOphPJMnxxyG%2FZnXpTF443rcJ3GLHjyHypUFd0sRiAGoML%2Fq2MQGOqUBMpeEdiL4TGlqUE39LAB6wrKBPHg96QultY38M%2Bd8%2FRQBkKAMNsVANziTd9tWrIEHb4oaU6mjB8fKPZDMRqfbYtbRtukELJE36Rj1QJpkgl0JLYgJfej%2B8flXbGY6tqyzB072mNjH7X3%2FPN7wHx74f7XDecSEiAzkOAa5jB8xS0siq400VBbvLq%2BADK7YJiMwFlS6cheCRAj56z4G3LBB6cCoaEIG&X-Amz-Signature=9fd712da98f3b8efa0a757fb8127e5a40e3bf045a05a9e0c5abaa2ceb6c8e169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJ6OEMR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDo90X%2FjMosEo1DrtZnGi6eeLMsogRNR1nVgiM8Vri%2FqAIgNsOqXo%2B0KzPL58HxO7JnefRX2XvkjkIN4y8aDwsxIZwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeNoVyBogf%2FNx%2FgryrcA5b79eA%2F3cMuLeZeFRbK7%2BSU7cVOxfmq7Wj6Q0yWvy6FiQWSRhMVwOLLXZ43%2Bco1%2FuOMTt3c0iD4cDQmamhC%2FVWMBHyF%2B1BKyVKUcfhs6zx%2FqaXp9L1CEnKY2XDoX3FDvPPemJXMTsauAhMayZR8es4y%2F8g1Trhyahb99ba1BMFV8AVNOkWdqgYhZNXSYCJvm1UvLI56s3L2mThmDc4QPcLlXP%2BCW%2B5H0E0jTJZf2cMG06JORPyUVR%2Fs%2B3bv37miZjUt69aS5rCfwfP8BDLNAozQ2693fQJkuU7XbsKCqHTikzHAg7nJDksXByk9iQmls5hPSi24UG4tNj0ZbOXblA06ma72buBTsktCLcslet5tSPQ2e3VeGQseQ%2BenCJt25VbEQHxx68PsuXROD5X5rqNEvD%2FxIlZg%2Bsm84Qq5F9sHTkCpwDMaT6ps2boCgqPLMoHxxiZIMG7d%2B7Z4G4kIq7qJnKbnNHHIkNti29YyOSk4uAGBIzdE6x8LKOmbyPvYn05tfkaf09h9oKjE7nyivDwQ9kVZMqijr7tyu3JpQiY4oZMMt3qP0kTz9TCSkceEXtxwTXI9Tz8nh7rKyOphPJMnxxyG%2FZnXpTF443rcJ3GLHjyHypUFd0sRiAGoML%2Fq2MQGOqUBMpeEdiL4TGlqUE39LAB6wrKBPHg96QultY38M%2Bd8%2FRQBkKAMNsVANziTd9tWrIEHb4oaU6mjB8fKPZDMRqfbYtbRtukELJE36Rj1QJpkgl0JLYgJfej%2B8flXbGY6tqyzB072mNjH7X3%2FPN7wHx74f7XDecSEiAzkOAa5jB8xS0siq400VBbvLq%2BADK7YJiMwFlS6cheCRAj56z4G3LBB6cCoaEIG&X-Amz-Signature=810e023e5ef66c430b5f1096f96859e8f9d86e274e36fca1062832ba1649fe58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
