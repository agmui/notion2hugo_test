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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYO2KSX3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSuL3Cg2knqWkfvDR34955QILPL2HdXtd3dhL5F5SkhAiEAx3cToWHrQh9nJWVrbcZ63FvZEdmgtRwuUpUmipwaE3YqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWqUBYGP3uhORV3%2BircA3BRLSz2UmLNe%2B7uPLAs2%2Bk6%2BCw%2FsNN07tQj7R4TxIy9zftvPSfPMFNjmgh0KXiFk5U7EHoSjPNwhOIm%2F5eR3Xv3nZVw%2FDBIYbHYQXEOYrKne7mYeBnEdKBrdxhYmMq10LDd%2BNQXOzZPOcazW5Ba5v5yoRLOxwBCAlNAXqjBwSgjIILIbCE8Ulv3aMWoYkgtsEs6maysj0GK%2FnTv6IeRZWDw94%2BVfEQxVFP3pKAcBE6EZCOCzBbsoQ6OlG0l3RT0UoTssb1pOkZxeso5x9uN2v6gY0JbehuZLJhAlJ1GjKqWeScsrFeHWZy6gm2o6ObnQOabt%2BM8r1AeegrSXgr7QWa2YZuRDjO8SKVIpTW06DqMllqNcLM9cwIOBEdqx3wzD0kC%2B6X1EnmN2fsrLSWVB8yCT0pwVL3hWylCiNnIDSmpuPAy1M5EC7Gl1DAIajFp0X%2BQsR23VVg0XLmgiW4PevCrVWmRW0mbBZP819%2BJNX%2BkGhEXvSvniRHv0GRWmxdass4zIYe0MewpjhIwkDukR%2BjVSWfBrhSZMh4wCsbETPAX6CKwbIy2B6Kzi6JPWpeoECJ6xHfKlqtCr6D6%2FM9s%2FSu4L97B1a2S3S5JsNJs%2FleVNDzYWhUpXy7UT4OsMM3ZysMGOqUBMBr000WaneqtEiZiYXGgp4A8E4Y7Ni%2BBlenR3%2BxqfhIx%2F%2FUb9ospNvArEOHfzFO7epkxK0NzUSqoDVDToPw0yNVVunuBF1mwzRNMO12UpmQbizC%2BTRvHJEWgKoh40YCtP7%2BJ9Iw%2BZSdg64heXhcW9pv%2BD1oy4yV3VjxxpzmLxhg2rtpVzoOoJCXD9rxVA%2BbOMWmgn1lLmdCl2G8iQwUp5BN8ySX%2B&X-Amz-Signature=8ae4b3fabf735759bd407e6c01b7ca00812aa19ed856f9eef27ef26008903a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYO2KSX3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSuL3Cg2knqWkfvDR34955QILPL2HdXtd3dhL5F5SkhAiEAx3cToWHrQh9nJWVrbcZ63FvZEdmgtRwuUpUmipwaE3YqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWqUBYGP3uhORV3%2BircA3BRLSz2UmLNe%2B7uPLAs2%2Bk6%2BCw%2FsNN07tQj7R4TxIy9zftvPSfPMFNjmgh0KXiFk5U7EHoSjPNwhOIm%2F5eR3Xv3nZVw%2FDBIYbHYQXEOYrKne7mYeBnEdKBrdxhYmMq10LDd%2BNQXOzZPOcazW5Ba5v5yoRLOxwBCAlNAXqjBwSgjIILIbCE8Ulv3aMWoYkgtsEs6maysj0GK%2FnTv6IeRZWDw94%2BVfEQxVFP3pKAcBE6EZCOCzBbsoQ6OlG0l3RT0UoTssb1pOkZxeso5x9uN2v6gY0JbehuZLJhAlJ1GjKqWeScsrFeHWZy6gm2o6ObnQOabt%2BM8r1AeegrSXgr7QWa2YZuRDjO8SKVIpTW06DqMllqNcLM9cwIOBEdqx3wzD0kC%2B6X1EnmN2fsrLSWVB8yCT0pwVL3hWylCiNnIDSmpuPAy1M5EC7Gl1DAIajFp0X%2BQsR23VVg0XLmgiW4PevCrVWmRW0mbBZP819%2BJNX%2BkGhEXvSvniRHv0GRWmxdass4zIYe0MewpjhIwkDukR%2BjVSWfBrhSZMh4wCsbETPAX6CKwbIy2B6Kzi6JPWpeoECJ6xHfKlqtCr6D6%2FM9s%2FSu4L97B1a2S3S5JsNJs%2FleVNDzYWhUpXy7UT4OsMM3ZysMGOqUBMBr000WaneqtEiZiYXGgp4A8E4Y7Ni%2BBlenR3%2BxqfhIx%2F%2FUb9ospNvArEOHfzFO7epkxK0NzUSqoDVDToPw0yNVVunuBF1mwzRNMO12UpmQbizC%2BTRvHJEWgKoh40YCtP7%2BJ9Iw%2BZSdg64heXhcW9pv%2BD1oy4yV3VjxxpzmLxhg2rtpVzoOoJCXD9rxVA%2BbOMWmgn1lLmdCl2G8iQwUp5BN8ySX%2B&X-Amz-Signature=d69d8a5f6f002d0cfe358c9ad2fe0540064a1b10a18e424e7acc3b011fd7aff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
