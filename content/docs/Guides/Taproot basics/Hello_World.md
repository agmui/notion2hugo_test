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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242QHI5O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAkaVzUgQah69MJaOwLZoQsGvaCyMsEtlHq3vxEwJQwAiAf%2BMdeZSIzVFbgQUti9eg2MOyObW%2F4mC4H6JSpqkAdiyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfN8SPQF486O47nmbKtwDJzf%2B9KIcSiqS660l9p%2B9EYY69n08EfoRe50rFZ4vcTz5OQEy6fRqvlgIDwfwH1KLipilKvlHmuvq6q0iC95hZmv48dLbFTwiOmetHvMC2XDqR1bUlyhbs9IDEe%2Bo4yotey2pTWzyQJNerCXopw2cRLeoukLGL2ZNZe543bjW5xsx3p%2FehMDC0YCeYhYKh2TNurfHIuyd7A0KDYYA44EgbaZLWRqk2jgxlTAwqj%2FMJEZzRVpv4IWXt4je5P3vvIQ6YgLb6dSWEoNnJC5JjUegl65MbqsMP67itujVlvnpfvyrQnX8BemGV%2BQ1nr8ghqV0pOYF7vIm7ZuR55eGOm6aXLCR%2FQov7hl9Abe5BEurpe3QB6Gz1fO1nO7odsmyksRXo22pFGln%2FB0c8bEWxoPyT04jHini5wsRZ0mzO8sYdy8BLTMLnjrZ1FTPSBI3J%2FTgwl2uE76r4jJIXY8vFVImqKMM9BKwcacT3L5cxQOofK0DZ2ffA6e9uD4104ejMXd6jwcDZEBKT323Sur81hB9naj1%2FDHMK%2FS7ci85G7A1W6MiDUFNFM66dG6olD5dovLVXwt2zs%2FlYPR7tzOE8H4UPngU0oLRDCh6nNTy0O3QRSXamwFtGXphD2UzT0Mwov%2BtwAY6pgEWwDufsgBCY9BmmNFP1OTc9Cnsa8JXynwJwFLaTZzfnOniYFjjNFHflnjWet3Mjh%2B8tTnv1830v%2BUtiBT%2FH3wcwle4IfJMUKY6a73rg7tjp5dzc9k6j2HxAIQ%2Bf8Fu18z1XOm6jFOQc9fScK82GjC3gssGMv6%2F0n4B2%2FsvWIX5s8nOfd1vnY0Y10l1f2ArNz%2FYSuMQTRtSrw%2BCarkpFsB3mv7oScFR&X-Amz-Signature=890112be06bc4964c9767300f3035b013d67667ce4e8d4eb0fdab1de0799caa4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242QHI5O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAkaVzUgQah69MJaOwLZoQsGvaCyMsEtlHq3vxEwJQwAiAf%2BMdeZSIzVFbgQUti9eg2MOyObW%2F4mC4H6JSpqkAdiyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfN8SPQF486O47nmbKtwDJzf%2B9KIcSiqS660l9p%2B9EYY69n08EfoRe50rFZ4vcTz5OQEy6fRqvlgIDwfwH1KLipilKvlHmuvq6q0iC95hZmv48dLbFTwiOmetHvMC2XDqR1bUlyhbs9IDEe%2Bo4yotey2pTWzyQJNerCXopw2cRLeoukLGL2ZNZe543bjW5xsx3p%2FehMDC0YCeYhYKh2TNurfHIuyd7A0KDYYA44EgbaZLWRqk2jgxlTAwqj%2FMJEZzRVpv4IWXt4je5P3vvIQ6YgLb6dSWEoNnJC5JjUegl65MbqsMP67itujVlvnpfvyrQnX8BemGV%2BQ1nr8ghqV0pOYF7vIm7ZuR55eGOm6aXLCR%2FQov7hl9Abe5BEurpe3QB6Gz1fO1nO7odsmyksRXo22pFGln%2FB0c8bEWxoPyT04jHini5wsRZ0mzO8sYdy8BLTMLnjrZ1FTPSBI3J%2FTgwl2uE76r4jJIXY8vFVImqKMM9BKwcacT3L5cxQOofK0DZ2ffA6e9uD4104ejMXd6jwcDZEBKT323Sur81hB9naj1%2FDHMK%2FS7ci85G7A1W6MiDUFNFM66dG6olD5dovLVXwt2zs%2FlYPR7tzOE8H4UPngU0oLRDCh6nNTy0O3QRSXamwFtGXphD2UzT0Mwov%2BtwAY6pgEWwDufsgBCY9BmmNFP1OTc9Cnsa8JXynwJwFLaTZzfnOniYFjjNFHflnjWet3Mjh%2B8tTnv1830v%2BUtiBT%2FH3wcwle4IfJMUKY6a73rg7tjp5dzc9k6j2HxAIQ%2Bf8Fu18z1XOm6jFOQc9fScK82GjC3gssGMv6%2F0n4B2%2FsvWIX5s8nOfd1vnY0Y10l1f2ArNz%2FYSuMQTRtSrw%2BCarkpFsB3mv7oScFR&X-Amz-Signature=340d9acc2599abae6bee6c3b8819a9749c5e52386152d78c2be9e14d39ccdb75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
