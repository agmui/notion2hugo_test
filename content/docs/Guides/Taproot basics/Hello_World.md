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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTEO62PB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpef7MpHTKly%2FZumvaZAI9mV2IQcHe8qanu0isICwNYwIhALUY6C1R4mY8ceBcST3wdELoxrWFvRz4pxJm3N7LLpssKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjwkCMJTgtPx0HNngq3AOrW1ip8C7tYveVMvF74K8FDOYSSQa7BRj7p4JqbgQ4EMOE7%2BXC6NgaBCSildCc34W71Gn0J4xNWlP1Ds09xOSjYZK%2B8CXu%2B43qtVS%2BMR6i7%2BzI%2FLSUe4RA1wpLAG6AVtBXG2Z5DZle7sGXrhnhjHMd3UkX5NVe7r89Q5BNUtBiRDIiHIh8cN5PvNHM2Ae8IqRlHroNEBcqd3ks8b4Fqq5sMrECM9MD4tA%2F78%2FUqZeD%2BAFLTXLzzpya0Akvs5%2Bx2y7jVvqRnSFy1uVt1qihFqiyp1fkpESIERwUKOegBi%2BUU6U0R5xxJaIp0MwmAqcRkkpDkPeIJ1dFtSsNs0benUrKbmb8HP%2B1pvZLnZywmhFz4oxG7EF154MWvJgyyz8gRVhrcycDNzYWlTntJxY30d6e5km9ZQagWuWu1QvwgbW%2FRl4JVViwrMM5PR6XSpdLYc0zKwJWvh7J5EfV9b%2FMwanV%2FT4eyZJD8BlVPVEfizVBQbJ7mKhmUhGyokW9TPOU7r1xc3pOj2EJio7QIydiaM5k9bgMMoi7B2dSJy8P6K3efbr70MTPD4s7yz2v56WIpcG5lOqLrmuaG6IkB%2B%2FnI9WbT3AgxocSZY1FWpvkt%2F0Vg4XGJbRIeANDf6urszDWlbjEBjqkATPxL1NM4Y6KcaNjPzpwmIf7icgJ5XxCxn2ROH4%2BoYoMmS0Jz4RYTq6Ski0C6QJZ87VLyPIw2sNnJBBaUDlaG1ntsI3dbASK4N%2FZiasG8Z1RdyzoWB6MQOuT9BxBRCJOyRUPCOBlC%2FvgwGtRYAvyoANQ9UMlKXyJs5Fm%2BiVbrk2nGIumCx%2FOnH7asbRJJtRYeoKyfIm%2Fd7WJGmO0ZhmeAeDh4f%2Fb&X-Amz-Signature=19057f2a710a09b0341d01a97b134d061b6c8c6f9a0f48a74fad001e38f1997e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTEO62PB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpef7MpHTKly%2FZumvaZAI9mV2IQcHe8qanu0isICwNYwIhALUY6C1R4mY8ceBcST3wdELoxrWFvRz4pxJm3N7LLpssKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjwkCMJTgtPx0HNngq3AOrW1ip8C7tYveVMvF74K8FDOYSSQa7BRj7p4JqbgQ4EMOE7%2BXC6NgaBCSildCc34W71Gn0J4xNWlP1Ds09xOSjYZK%2B8CXu%2B43qtVS%2BMR6i7%2BzI%2FLSUe4RA1wpLAG6AVtBXG2Z5DZle7sGXrhnhjHMd3UkX5NVe7r89Q5BNUtBiRDIiHIh8cN5PvNHM2Ae8IqRlHroNEBcqd3ks8b4Fqq5sMrECM9MD4tA%2F78%2FUqZeD%2BAFLTXLzzpya0Akvs5%2Bx2y7jVvqRnSFy1uVt1qihFqiyp1fkpESIERwUKOegBi%2BUU6U0R5xxJaIp0MwmAqcRkkpDkPeIJ1dFtSsNs0benUrKbmb8HP%2B1pvZLnZywmhFz4oxG7EF154MWvJgyyz8gRVhrcycDNzYWlTntJxY30d6e5km9ZQagWuWu1QvwgbW%2FRl4JVViwrMM5PR6XSpdLYc0zKwJWvh7J5EfV9b%2FMwanV%2FT4eyZJD8BlVPVEfizVBQbJ7mKhmUhGyokW9TPOU7r1xc3pOj2EJio7QIydiaM5k9bgMMoi7B2dSJy8P6K3efbr70MTPD4s7yz2v56WIpcG5lOqLrmuaG6IkB%2B%2FnI9WbT3AgxocSZY1FWpvkt%2F0Vg4XGJbRIeANDf6urszDWlbjEBjqkATPxL1NM4Y6KcaNjPzpwmIf7icgJ5XxCxn2ROH4%2BoYoMmS0Jz4RYTq6Ski0C6QJZ87VLyPIw2sNnJBBaUDlaG1ntsI3dbASK4N%2FZiasG8Z1RdyzoWB6MQOuT9BxBRCJOyRUPCOBlC%2FvgwGtRYAvyoANQ9UMlKXyJs5Fm%2BiVbrk2nGIumCx%2FOnH7asbRJJtRYeoKyfIm%2Fd7WJGmO0ZhmeAeDh4f%2Fb&X-Amz-Signature=1294f0ea90244935e1ebe088572ac6368113d61e890fabb5cb1192eac9f23bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
