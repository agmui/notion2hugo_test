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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VG3BNW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDDJDUt2yf4k5R6vtnqUH8U%2FIJR1skXAZpbC%2B%2BEDft7dwIhAL4EPq2fSlO7Y8IYWeygfSmrrRycWNYHycezdpti8XaoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKGIfN47CLGPjb6fQq3ANQ3HJIDVmwV%2Bbmaf6Az8O1W%2BKZaNuXsHcRctALLODQIK51KYMCOwcmxpt4w1GXxWiF21jP7Xzbjk3YdFbc9yE7%2BLsmqPQAxYX1Ipo24fmRFD0fd%2Bjy4W2S6YKWhdOk3%2BKJ63nmtTEvuvFhnpcMVDfErNY5OegBP5eLv4WSomj6l1r8qZTUlRH95qD7EGwo5zQBZVs5uv9%2BEi40sIM0EdF842MzIQBzpYLMt3d3pj3edsA9B6xmeNHOwe4ypPDi%2FCVto%2FJySMdZS3bmdvzYjVmG3SSLzkylaoWC6rn2P2pceZJE%2FADhDqJuAIx1sWUXv62las%2BMxj7iItdFDll5zNM24OJhlC4e%2Fyg%2FMCiY9FpJC%2FsHXurxvktjaifD4JFFfKZYSYEQjq3ljcLArABhFAIHBi8GjunyFM1hIiNSNQ1WSKG90OcFPJ6lGcKGK9h95oY0ZAyAEJ8vV5wov2aP9mL9tYwdHIkpSct7wFvmHYnD3PIuEXKb4u%2F1zvtAL8EJVv%2BabYmuD0%2BAERJyiW8sV6kKic9uiqz2AZpJ%2FsozZklHkSUWF9yl9S7M5rWNaugrpIqZFadSbKqS19n%2FuxmCkLyOWz%2FwmnX3Q3vjMJvt15pg3RH8ztPBXnFwd00%2BgTCr3qrCBjqkAVXZyra9pll8rAwK7N%2BVmfaA92G4tjtsq4%2Ff7vTAA%2By52lwYtpvvMX4JVxZtnkp%2ByYyVfVaIMmxFT8x%2Fozl0s3aPCtSPEbv6%2FWEBVfqj543x7Huf07uewT%2BlSoxGO7uFR7w8aQHn7gKKosOmP%2FXx02PX0GZvPxKk4joxfYH8R2axCQg0RLxOQr3X%2FOmaWXhIh3GSMgQ4TYPXF8ZRu3AO3fT1y0WT&X-Amz-Signature=f29a48cf2f2477597dd15f2521a7ea747249cf75bfc2b3cc66d2f99661f09119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VG3BNW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDDJDUt2yf4k5R6vtnqUH8U%2FIJR1skXAZpbC%2B%2BEDft7dwIhAL4EPq2fSlO7Y8IYWeygfSmrrRycWNYHycezdpti8XaoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKGIfN47CLGPjb6fQq3ANQ3HJIDVmwV%2Bbmaf6Az8O1W%2BKZaNuXsHcRctALLODQIK51KYMCOwcmxpt4w1GXxWiF21jP7Xzbjk3YdFbc9yE7%2BLsmqPQAxYX1Ipo24fmRFD0fd%2Bjy4W2S6YKWhdOk3%2BKJ63nmtTEvuvFhnpcMVDfErNY5OegBP5eLv4WSomj6l1r8qZTUlRH95qD7EGwo5zQBZVs5uv9%2BEi40sIM0EdF842MzIQBzpYLMt3d3pj3edsA9B6xmeNHOwe4ypPDi%2FCVto%2FJySMdZS3bmdvzYjVmG3SSLzkylaoWC6rn2P2pceZJE%2FADhDqJuAIx1sWUXv62las%2BMxj7iItdFDll5zNM24OJhlC4e%2Fyg%2FMCiY9FpJC%2FsHXurxvktjaifD4JFFfKZYSYEQjq3ljcLArABhFAIHBi8GjunyFM1hIiNSNQ1WSKG90OcFPJ6lGcKGK9h95oY0ZAyAEJ8vV5wov2aP9mL9tYwdHIkpSct7wFvmHYnD3PIuEXKb4u%2F1zvtAL8EJVv%2BabYmuD0%2BAERJyiW8sV6kKic9uiqz2AZpJ%2FsozZklHkSUWF9yl9S7M5rWNaugrpIqZFadSbKqS19n%2FuxmCkLyOWz%2FwmnX3Q3vjMJvt15pg3RH8ztPBXnFwd00%2BgTCr3qrCBjqkAVXZyra9pll8rAwK7N%2BVmfaA92G4tjtsq4%2Ff7vTAA%2By52lwYtpvvMX4JVxZtnkp%2ByYyVfVaIMmxFT8x%2Fozl0s3aPCtSPEbv6%2FWEBVfqj543x7Huf07uewT%2BlSoxGO7uFR7w8aQHn7gKKosOmP%2FXx02PX0GZvPxKk4joxfYH8R2axCQg0RLxOQr3X%2FOmaWXhIh3GSMgQ4TYPXF8ZRu3AO3fT1y0WT&X-Amz-Signature=e1e5a03a5ff8d29aca9f2472fa7d55c2181c07f1439db25def584dbf118351d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
