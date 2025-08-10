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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP5JR2A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFz0%2BDYV8r%2Ft1PI%2FoKnTba5UUj7ksdRyWB%2Fk2JJy0RCQAiAS08szAw8Cn13TamKhIB6LPpBQ1bIf%2BSHNytakIap5uSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8kOYDKdsgQM3OTPYKtwDhj9w0sYLu61mdeNMlDN7ORi%2FRoA5KLvF7SGuM4GF4os2WBoXVd8ZLtlVzDjyXrxNSG2JB2cHAu8M6rUHi4gRT76UQufD6TXgzzAIYVEdFjktkJjsVlyxaDIdkuaddpNlHcCKRhcMOYgos0%2FiaRNPoOl0B40usBMLYj%2BhJuhdwNTaM8x2hjaeezgi0IM72MTvPrnvjlvUGXGUEa70NHZqVBnqt9lwj7JJ9HXGGsM8GcHa30QQI2IKbq7wbQ7m8MDnqV7jiAq1NtzIitE032ekpee%2B2pmK3lV92uHakV0kxJaXiFE%2FYfqKdtIgBHlQb1CWS6pyGSm8EhmzhSW9BAHtpdRYHLzHQtm6PKUaoPLpGw27321fBDNwErJ94hZkERacCltdPvGDvBvSpy12H7%2FPfwk6taEgRLmuB0Rs95H75DSFQ87J3GAPMLWVrpqYz67lM%2BJKU3Y7HhN3i0Kj2IEVx%2FvSOQxvTvXNLT6L3QSw10IQqfWxsmKcVXymYbvl8Hay9F6hbVn4M%2Fmoa2V6eMAgs9pauXeuYGQZfpdRo50m9ui%2FeHUBerah5qQUUtBM8auGi0iKN0bhFuMXioluiDP5n%2F5F2We5hppZOzRFC9NbVlDT3%2BxaWe48QT8CGkMwpe%2FhxAY6pgEDrwcxcgwvDl9bttIUNKqDRJ1Q4Ov2ZBvTHQUu8b6%2FWee9dzfqvY6kkpxS7ZYTXASlE0CnTb1yhC9J7ZgzFRCL%2FIjxo%2BfBbCFoJUBXKfTWW0c3tZzs9SafFuMePYLQL%2Fe%2FoITufIDLcjMs82aEg258Z9orBxAZmTwv9xlP%2B%2BKlZqHjz6zLXnMVdfp58rwlPuT1SnUXHaoHDPiQdocB3cHBGO4dAwXm&X-Amz-Signature=b459da32d3cc1ce9d8158e976786b374738b58767488a01abc5489fe8909e6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP5JR2A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFz0%2BDYV8r%2Ft1PI%2FoKnTba5UUj7ksdRyWB%2Fk2JJy0RCQAiAS08szAw8Cn13TamKhIB6LPpBQ1bIf%2BSHNytakIap5uSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8kOYDKdsgQM3OTPYKtwDhj9w0sYLu61mdeNMlDN7ORi%2FRoA5KLvF7SGuM4GF4os2WBoXVd8ZLtlVzDjyXrxNSG2JB2cHAu8M6rUHi4gRT76UQufD6TXgzzAIYVEdFjktkJjsVlyxaDIdkuaddpNlHcCKRhcMOYgos0%2FiaRNPoOl0B40usBMLYj%2BhJuhdwNTaM8x2hjaeezgi0IM72MTvPrnvjlvUGXGUEa70NHZqVBnqt9lwj7JJ9HXGGsM8GcHa30QQI2IKbq7wbQ7m8MDnqV7jiAq1NtzIitE032ekpee%2B2pmK3lV92uHakV0kxJaXiFE%2FYfqKdtIgBHlQb1CWS6pyGSm8EhmzhSW9BAHtpdRYHLzHQtm6PKUaoPLpGw27321fBDNwErJ94hZkERacCltdPvGDvBvSpy12H7%2FPfwk6taEgRLmuB0Rs95H75DSFQ87J3GAPMLWVrpqYz67lM%2BJKU3Y7HhN3i0Kj2IEVx%2FvSOQxvTvXNLT6L3QSw10IQqfWxsmKcVXymYbvl8Hay9F6hbVn4M%2Fmoa2V6eMAgs9pauXeuYGQZfpdRo50m9ui%2FeHUBerah5qQUUtBM8auGi0iKN0bhFuMXioluiDP5n%2F5F2We5hppZOzRFC9NbVlDT3%2BxaWe48QT8CGkMwpe%2FhxAY6pgEDrwcxcgwvDl9bttIUNKqDRJ1Q4Ov2ZBvTHQUu8b6%2FWee9dzfqvY6kkpxS7ZYTXASlE0CnTb1yhC9J7ZgzFRCL%2FIjxo%2BfBbCFoJUBXKfTWW0c3tZzs9SafFuMePYLQL%2Fe%2FoITufIDLcjMs82aEg258Z9orBxAZmTwv9xlP%2B%2BKlZqHjz6zLXnMVdfp58rwlPuT1SnUXHaoHDPiQdocB3cHBGO4dAwXm&X-Amz-Signature=9d2a5ae04415eddfe7b9a7ea25e5e79a0dc8c7725529c5bcedc064472d7db650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
