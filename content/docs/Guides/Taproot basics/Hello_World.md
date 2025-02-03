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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6LCBWXY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf8skNLXTfV%2BkdRMm%2BssTFBYdzckENkV6LCOJTbtV6fwIhAIHyFPjCQ%2Bhw7O2WRPOGYR2e5Pewg8PQRp%2BglvziBxO0KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhjYoMBNENu%2Bl2QNwq3APvvWObhL62WPRFxZht%2B5tqswb2ynW5%2FpC1JdUL3nRhc%2BsYrU6R5hCFBFwxJdFzp8VDxOIgD3ZZ9xhzpXrgQKp%2Btylkle17eqOIXNexrmBef%2BnRAkBk1daJbQMbRGhaR65KVHAHfZAqBIYe4pS2dOLltE2Mwp1AziO7Q8nGhYDogk4DFC%2FBVpmfVzsjWRKIvkGEw3L%2BKE%2FqS5MUS3nHRAtBYuQbjV6M7ixXgKCRxc3QoIscsDF5R4CNK8pWop5Z%2B0ydYht4ssF0iVoXn3frn%2BO4taTAHwHtP4VXUA0voeaeZwRgLdyZLDhypi3PMU1mBeltpP25Wu2xiBrqTu7cGE6EQaIEhbPkFnbILLp1ZzROnGdpXwRjtQcl20VkkXnGFh6N4VMDBq1q5h4kCzEX5XpRGC%2F2Yz%2BOwDM6Eb6Y6vuo8cAbxxav%2B58boXfqMWNR5uELF%2BbMbnV1ofHG2M2SVv2A0fa4VwjaZ2IuaL%2FBtV4eA8tHUbF36ncbwOtncjXOqDxk17WBne6n3F1R7h8zA3UDrFJXGgHTnFstMa9O1w%2BBNcQHXbXg%2F%2FfabrSo34ThwgRT9tO9DCIlw7tivGWohU3%2FDyE%2B2FyTyIe5qfvRqvGmb1peu9jmjoCwntH1mDDowIC9BjqkATXX7jsILcww%2BHT%2FnzyX%2Fpe36yy9ZjIX5QnCzWyDhuviBOzxySeEntytEzz2jNtNHSvaayf8M0sRmIh6eOBAGj6Bl9nbjj6jHxiqjxb7lNTio68tYnhvJa87sSf3HEerAlw9VU0Ff0xBO50FgW7ldl2ngsk4ze0eme6ljGMSaoofxh7ctMvLTTU4LoNon29OXL4qgQcInEZpuWPbXXz1homrg7tC&X-Amz-Signature=d1a0275fd37a047ee7a50d0b419a773c478c1adacc431103407be773675d1489&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6LCBWXY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf8skNLXTfV%2BkdRMm%2BssTFBYdzckENkV6LCOJTbtV6fwIhAIHyFPjCQ%2Bhw7O2WRPOGYR2e5Pewg8PQRp%2BglvziBxO0KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhjYoMBNENu%2Bl2QNwq3APvvWObhL62WPRFxZht%2B5tqswb2ynW5%2FpC1JdUL3nRhc%2BsYrU6R5hCFBFwxJdFzp8VDxOIgD3ZZ9xhzpXrgQKp%2Btylkle17eqOIXNexrmBef%2BnRAkBk1daJbQMbRGhaR65KVHAHfZAqBIYe4pS2dOLltE2Mwp1AziO7Q8nGhYDogk4DFC%2FBVpmfVzsjWRKIvkGEw3L%2BKE%2FqS5MUS3nHRAtBYuQbjV6M7ixXgKCRxc3QoIscsDF5R4CNK8pWop5Z%2B0ydYht4ssF0iVoXn3frn%2BO4taTAHwHtP4VXUA0voeaeZwRgLdyZLDhypi3PMU1mBeltpP25Wu2xiBrqTu7cGE6EQaIEhbPkFnbILLp1ZzROnGdpXwRjtQcl20VkkXnGFh6N4VMDBq1q5h4kCzEX5XpRGC%2F2Yz%2BOwDM6Eb6Y6vuo8cAbxxav%2B58boXfqMWNR5uELF%2BbMbnV1ofHG2M2SVv2A0fa4VwjaZ2IuaL%2FBtV4eA8tHUbF36ncbwOtncjXOqDxk17WBne6n3F1R7h8zA3UDrFJXGgHTnFstMa9O1w%2BBNcQHXbXg%2F%2FfabrSo34ThwgRT9tO9DCIlw7tivGWohU3%2FDyE%2B2FyTyIe5qfvRqvGmb1peu9jmjoCwntH1mDDowIC9BjqkATXX7jsILcww%2BHT%2FnzyX%2Fpe36yy9ZjIX5QnCzWyDhuviBOzxySeEntytEzz2jNtNHSvaayf8M0sRmIh6eOBAGj6Bl9nbjj6jHxiqjxb7lNTio68tYnhvJa87sSf3HEerAlw9VU0Ff0xBO50FgW7ldl2ngsk4ze0eme6ljGMSaoofxh7ctMvLTTU4LoNon29OXL4qgQcInEZpuWPbXXz1homrg7tC&X-Amz-Signature=a5f38c70f12f1227bcd4acfd910ce2fd21a5d310ad5964cf54b916863d36bd89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
