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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNN6TF3%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9UMjZjdq1kPTBFA1muWoJe0E39V2Hp4reikkSuLbz9gIgQmG5piaDDVyXp6Tjf3hu%2FTe%2F7bbye1DZRMCVUj6xddEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ2KEsn5%2BbrQVAI9yrcA9L4LbnBlDkpwgMBUT6hpCvinTXXNsEgtbX1woRBA4%2F%2BJiotcsmHgk2GMS1WNTk8%2FuEmtkP4n147F%2FczvzESkvnd7d%2BAzOCIal59u6jQ9jRLWMe3wQZ6hXlziErOkvwFfnPRKurc9eI2hpK%2B7s%2FtruIIpsVAuwSmSugp8Hw05lYPVF8M92ZSzD4vp9vnxdcFaw4AlhtRG5yjozfPp%2F10xB0brp11FBiVwbBlnIKWZrrSOALUlSRxc7uvIw6it6TVHcMEYkFbYTUaJDOwpvZbaSuKW%2FgkRSmjjEw0vlFa%2BwWoexx9Jq%2FpCLtALukyJOpqK0R9HBubrwDfAqduySU2i1U%2FQ2JhRgmhtpCEt9v2mmWmXGCG1C0fAbwgCQPPYf6YFwB20e4sqaWzU%2BTgkMD0yMd41L3E%2FURh7otzen%2FpXkD1S9jO4S7STnsMfsjArQ2B2oF%2F%2BnI%2BtQpJxHk%2BI4PUJX%2BU3sxbUKVFhJ9RXXVIFtI6C%2BC99I4RpVI4aprceZRMkMjMzIVQDKPkX4w%2BTZG1eeCYv96zlg14jxwVgaxG7AKPT1iF9k91YWKyhK0lKuJGVUxjWDikm%2F%2BSCV4vDO2X7eBbxL5%2Fq9EsN0hvZ20QSascOFbiz6wAqglOUf3jMJCq9ccGOqUB%2FQo6FmCncmQJx7BYf5eS77y9HSAal0%2Bojq%2BKOUXpogfZ39cTMSpzEJ6q%2FlaGf3wVAJbECQkJbq16gS1iX6I28tmPXYU%2FNEjgHyYicsBMC9kQU2Xc%2Fa0SJs0kyflhM%2F2L1e%2BMzNYZ7X6VLMeoj1%2BgCngLbDsyNEVU2Eq63ZtO7oEI4e60doYOaYc7KEIi%2BZt4lKC5fhtv8CsvYk9v9Bm%2B%2Bn8z2kCo&X-Amz-Signature=ced4e69ff05796ed0260a1182e6fc41164ca5c8807c3d42b2b1b11832e8e84cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNN6TF3%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9UMjZjdq1kPTBFA1muWoJe0E39V2Hp4reikkSuLbz9gIgQmG5piaDDVyXp6Tjf3hu%2FTe%2F7bbye1DZRMCVUj6xddEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ2KEsn5%2BbrQVAI9yrcA9L4LbnBlDkpwgMBUT6hpCvinTXXNsEgtbX1woRBA4%2F%2BJiotcsmHgk2GMS1WNTk8%2FuEmtkP4n147F%2FczvzESkvnd7d%2BAzOCIal59u6jQ9jRLWMe3wQZ6hXlziErOkvwFfnPRKurc9eI2hpK%2B7s%2FtruIIpsVAuwSmSugp8Hw05lYPVF8M92ZSzD4vp9vnxdcFaw4AlhtRG5yjozfPp%2F10xB0brp11FBiVwbBlnIKWZrrSOALUlSRxc7uvIw6it6TVHcMEYkFbYTUaJDOwpvZbaSuKW%2FgkRSmjjEw0vlFa%2BwWoexx9Jq%2FpCLtALukyJOpqK0R9HBubrwDfAqduySU2i1U%2FQ2JhRgmhtpCEt9v2mmWmXGCG1C0fAbwgCQPPYf6YFwB20e4sqaWzU%2BTgkMD0yMd41L3E%2FURh7otzen%2FpXkD1S9jO4S7STnsMfsjArQ2B2oF%2F%2BnI%2BtQpJxHk%2BI4PUJX%2BU3sxbUKVFhJ9RXXVIFtI6C%2BC99I4RpVI4aprceZRMkMjMzIVQDKPkX4w%2BTZG1eeCYv96zlg14jxwVgaxG7AKPT1iF9k91YWKyhK0lKuJGVUxjWDikm%2F%2BSCV4vDO2X7eBbxL5%2Fq9EsN0hvZ20QSascOFbiz6wAqglOUf3jMJCq9ccGOqUB%2FQo6FmCncmQJx7BYf5eS77y9HSAal0%2Bojq%2BKOUXpogfZ39cTMSpzEJ6q%2FlaGf3wVAJbECQkJbq16gS1iX6I28tmPXYU%2FNEjgHyYicsBMC9kQU2Xc%2Fa0SJs0kyflhM%2F2L1e%2BMzNYZ7X6VLMeoj1%2BgCngLbDsyNEVU2Eq63ZtO7oEI4e60doYOaYc7KEIi%2BZt4lKC5fhtv8CsvYk9v9Bm%2B%2Bn8z2kCo&X-Amz-Signature=8dba40ae6fc0e154e16766196f207da7a62baa8a965d2b0f5f7816b6445a1d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
