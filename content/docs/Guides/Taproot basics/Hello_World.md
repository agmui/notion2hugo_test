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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHUIBJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt0rnZyN44oEE9XCb6%2BPeEem9ORuyOMYNImy%2BAuAL%2BtAiEA2Mj3iPF4zJFBfh67nlQl9Wz35JPPL5WAOpajlfi6PP0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO%2FeObFJzVXhMJqcUyrcA71h2vphYa3YhjeRA3UBd7kdnau%2BjD8Ab9ExuQJv32DH7cRSSACcjyZLxRVwD2pbx5kSJRNMpax0RdFNt3Ti7dShkP%2B0bxpvXA8vBa2oW0vJ6SIDEQPIeujasbV3H2krn6vgnQlT%2FiZ8KMim9Bmt89XCgmVP0oK%2FgMSFPcMz958FRjwDweTIDLc1BN%2FvZMsVkYNyO0yiOz266Xeq0gvYjTdtzK7rCE201954apwUMXSPv6O9bbpWAmwHTfdiUtvoI9b8063BTMdZYoXzgURjkmFUKSes8BaQXHXRBGxUOfLojeMvUYZ4HZ%2BpX135l4MWlKvvo%2BpiWvrNzDBH3nTywd%2B0AazUvlGtJv%2BJSg7%2BaQ19uyjHEhYKDDwqaZdclvF%2FRosw%2B01vE7a1RCWL1kdjv37nPNhbXQfTmmDU9jfZVpSWkMhGkM1%2FlisS3%2FuD4FPDicLT3WquTo8HkwHGKPZ9puaiqmANQ3KPdYDmBNHhQYMihqNq77DkbufVWK%2FRLWUMrOPJgMM%2FX0Oa7ni3sMvvTRKfLV%2F1VJtH71F2zdQr6siJAU7IbnQ4jq2HKPJ1wrh685q6KMGCDL%2FSxS1nreWcBZuJhWdlFhj0LRDf1h4DBwZI%2BZjEEBqXBae0JztJMKbIrcAGOqUBRrkb9bASLBcXjc9WQgWVY%2BkXrHKlqQsIoupioRiywoC3h6OPfQrWmkMLPtL0r90dh3smMw4OSkdlAKay%2BGGyYzrhP9cunb4ElAA%2BkIW1kh1m20smn2BV9R1xA0o%2BJ5%2FWSzwYyK5gm1EHR%2BHo5hkEg82kmxXywDAM7xPb6I5oV7PjZnEywxGIpYTRjRTGmPnV9d%2BCPm0KcgwQfegtQScbjpyWovxO&X-Amz-Signature=129692d94fe0494e0d4444cba43fd625649bf66e1cb62d951597c9fd048c3c24&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHUIBJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt0rnZyN44oEE9XCb6%2BPeEem9ORuyOMYNImy%2BAuAL%2BtAiEA2Mj3iPF4zJFBfh67nlQl9Wz35JPPL5WAOpajlfi6PP0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO%2FeObFJzVXhMJqcUyrcA71h2vphYa3YhjeRA3UBd7kdnau%2BjD8Ab9ExuQJv32DH7cRSSACcjyZLxRVwD2pbx5kSJRNMpax0RdFNt3Ti7dShkP%2B0bxpvXA8vBa2oW0vJ6SIDEQPIeujasbV3H2krn6vgnQlT%2FiZ8KMim9Bmt89XCgmVP0oK%2FgMSFPcMz958FRjwDweTIDLc1BN%2FvZMsVkYNyO0yiOz266Xeq0gvYjTdtzK7rCE201954apwUMXSPv6O9bbpWAmwHTfdiUtvoI9b8063BTMdZYoXzgURjkmFUKSes8BaQXHXRBGxUOfLojeMvUYZ4HZ%2BpX135l4MWlKvvo%2BpiWvrNzDBH3nTywd%2B0AazUvlGtJv%2BJSg7%2BaQ19uyjHEhYKDDwqaZdclvF%2FRosw%2B01vE7a1RCWL1kdjv37nPNhbXQfTmmDU9jfZVpSWkMhGkM1%2FlisS3%2FuD4FPDicLT3WquTo8HkwHGKPZ9puaiqmANQ3KPdYDmBNHhQYMihqNq77DkbufVWK%2FRLWUMrOPJgMM%2FX0Oa7ni3sMvvTRKfLV%2F1VJtH71F2zdQr6siJAU7IbnQ4jq2HKPJ1wrh685q6KMGCDL%2FSxS1nreWcBZuJhWdlFhj0LRDf1h4DBwZI%2BZjEEBqXBae0JztJMKbIrcAGOqUBRrkb9bASLBcXjc9WQgWVY%2BkXrHKlqQsIoupioRiywoC3h6OPfQrWmkMLPtL0r90dh3smMw4OSkdlAKay%2BGGyYzrhP9cunb4ElAA%2BkIW1kh1m20smn2BV9R1xA0o%2BJ5%2FWSzwYyK5gm1EHR%2BHo5hkEg82kmxXywDAM7xPb6I5oV7PjZnEywxGIpYTRjRTGmPnV9d%2BCPm0KcgwQfegtQScbjpyWovxO&X-Amz-Signature=396348a93076259a876d102183c2c604f68ef993ebb022638f0a06cde216d6db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
