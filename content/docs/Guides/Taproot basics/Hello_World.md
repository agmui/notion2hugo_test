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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBPMNYH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGtW%2F7SCdD2FZQ%2Bgf3jUcCMchJU3FTooboGmcfDas1frAiAz0FYbmPxbE03pRCDDhx0KAgs5FP54lh6OLCX5SJvzaCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMNC8d82jEQiLSriA5KtwDmX4vv7JRhamplmI2EUBUzVZ2YSFGWjSRSFqo4OQvx5JWquUUq1UZcKHeVcE%2F46SShjKCy2Kw8RA49Jv0Rw%2BWW3k83jPd3%2FE%2FFlghUGKdf8%2BnIFtlMX8Ig2TI0VAMC10HEdIOV2nF05adkrxI0i1qTZiyDeCgMb2ak9uhv%2F3N2SORyrPOstxTNuhbyBznJCLbwTZu5YjrO1jAoeExMm4n7Np7EZkfuaIQhvQwH%2BAbBBmJpsWkYJByTrOBbaK07Lz7EJ0drNbovj22jzxFt902LX%2FRBRW%2Fhs5cMzeLV4kTFdd6iPBa1BRKyjAprbNU1WLMBw4iMYokwEFuJzZ%2B9OpDKmW%2FSQKE%2FYxH2nrLqZgnVhThh0CNzYFNz8XPOVbzHb2WWWkSejIR3LA5AfIAiDNBPWLs8rajuweebGlvJ0iWMeCjn1NNDdWcAWfiWr%2BZuNVIkBodbm9bJKDAqhjIa2URhSUjJhweLeP8SlUStGZhgFEWlGFcse0CDKggdd8eMuqAO8jqw1sk74n%2Fk0XhCnCz3TliIrfj5SoBjsRibjHJ3%2FsH1oET%2FLx5t4yjvpaLVa%2FwAyIEL5KY1JX88nunYF0b8dRDOIbzXxj8CqP8VTvZJtF1Jz1Uk0G%2FW25o5yIwpauSxAY6pgH4hpC1qQVYbuGAfFGvRtBXOgeUhtMdwLp14sle5Mx86hOv%2FtzyGejidLVaaFpAFJq1ovhm92OwIomv8GC%2Fg4wXli7rkJc08%2FKyju%2FP5%2BB%2FEucogghUyfd77Y4Stlzdu7QmyTgwX0VnT9jM47keTSSw08A5%2FwkKNjgcLTlQJhLV1yHcMORTK9Rda1Hi0wAPVB7XQwAbelxnWZkK8uY%2Fe9IL%2F4Y1iywi&X-Amz-Signature=0005443757d9ae6e8424eaf50fd83c52250c3fc1b20c76ed9402ac52227cc5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBPMNYH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGtW%2F7SCdD2FZQ%2Bgf3jUcCMchJU3FTooboGmcfDas1frAiAz0FYbmPxbE03pRCDDhx0KAgs5FP54lh6OLCX5SJvzaCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMNC8d82jEQiLSriA5KtwDmX4vv7JRhamplmI2EUBUzVZ2YSFGWjSRSFqo4OQvx5JWquUUq1UZcKHeVcE%2F46SShjKCy2Kw8RA49Jv0Rw%2BWW3k83jPd3%2FE%2FFlghUGKdf8%2BnIFtlMX8Ig2TI0VAMC10HEdIOV2nF05adkrxI0i1qTZiyDeCgMb2ak9uhv%2F3N2SORyrPOstxTNuhbyBznJCLbwTZu5YjrO1jAoeExMm4n7Np7EZkfuaIQhvQwH%2BAbBBmJpsWkYJByTrOBbaK07Lz7EJ0drNbovj22jzxFt902LX%2FRBRW%2Fhs5cMzeLV4kTFdd6iPBa1BRKyjAprbNU1WLMBw4iMYokwEFuJzZ%2B9OpDKmW%2FSQKE%2FYxH2nrLqZgnVhThh0CNzYFNz8XPOVbzHb2WWWkSejIR3LA5AfIAiDNBPWLs8rajuweebGlvJ0iWMeCjn1NNDdWcAWfiWr%2BZuNVIkBodbm9bJKDAqhjIa2URhSUjJhweLeP8SlUStGZhgFEWlGFcse0CDKggdd8eMuqAO8jqw1sk74n%2Fk0XhCnCz3TliIrfj5SoBjsRibjHJ3%2FsH1oET%2FLx5t4yjvpaLVa%2FwAyIEL5KY1JX88nunYF0b8dRDOIbzXxj8CqP8VTvZJtF1Jz1Uk0G%2FW25o5yIwpauSxAY6pgH4hpC1qQVYbuGAfFGvRtBXOgeUhtMdwLp14sle5Mx86hOv%2FtzyGejidLVaaFpAFJq1ovhm92OwIomv8GC%2Fg4wXli7rkJc08%2FKyju%2FP5%2BB%2FEucogghUyfd77Y4Stlzdu7QmyTgwX0VnT9jM47keTSSw08A5%2FwkKNjgcLTlQJhLV1yHcMORTK9Rda1Hi0wAPVB7XQwAbelxnWZkK8uY%2Fe9IL%2F4Y1iywi&X-Amz-Signature=805296c32828a476580b6f5e55a2d697849185ff85facfcf0f73b37bdeb0ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
