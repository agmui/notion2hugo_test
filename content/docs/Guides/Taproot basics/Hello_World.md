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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHFIC2C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB8B5SuUvi5%2FsfNVotxXnwn8VwqMwNR0We2odR3ecm6AiAOAJgpPNBLnBwLSNUtkAAjeDZkEUd19U5C0IvPKaNusCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsJgWFmnCHaL1zh8KtwDtwHGTsgmTRIYEkVc%2FF%2F%2FxWyl%2B1zIz0nyIBs7EFRMv2svcmBFXhDsk3zO7VYtLMadwfwYhM0fTWdmx%2FmIookq69ANWqOWN07AASt4C88vO1LjsrS3r%2F8rOZnPX%2BqDT9rSvK4NIkkCx1T%2F8EytYkfICY21cTEFFf56sZ12oxBIB07YR3KvgpswUsg4ne%2FPlVyKq7AtaqcDeZPqGWKtGZAnQNELQyylW7F1K9I49BTyx0pRjNWaXJF8A9yL%2F5ABo%2FabYp9d8xW1s66%2FmHIxO%2B99s3%2BjghY4YOq%2Bna56lGjJNSsfaYI0Oh0322ipuTE%2BdqQcLNvRqkiWbU0CM8e5%2FtrNu9geQBtEhF%2BQTE4WYO0IK4ULHH6a%2FJwkxjEkRxNM82dP5jVWycvBuuez81PbapScmMs5vkagBDofBTNWTF6AOoNhBoNCx%2BYCTjZkhaCPRq%2F2XW76PejuUTYGfzzE8QrbA6KQJ%2FU45tNizc1tBvtyJ6T2hNTfQvMQhzUQeCzr5GSq5IPQlxx1zrLeLVajHYH85%2BWekJp13MowAt13rRyZAutFn0Whq0Alwe2Oyk1xhPjDeCGbal4sJYXS41qTdwS9tpz3XSrGL8Vl%2FTiHvUVIKcIvJOvSlQeA%2BX3%2F73gw1omfvgY6pgFk%2F8gMWI%2BnFN9YEZKF60DP7UBzOKNA7lcc4qy15AdNntc8x0w%2BvndxrKGVNqpnpaeSlFi81bBQf0Bj3uh1k6nEXksJTJn0VFJVDvQTniLsP%2FbLHKc4NhL5niFodAooLVuJew1u0yeIMsbyExtSsvICV5OUy60dnIrOtN%2BJht7zdoQsBwMYxM%2Fv7sHEAnPpFRlkUwM3E0QTxxI0ZrH6d%2FBEqhmN2efs&X-Amz-Signature=d9c04bfd7d5e4fc3f0986a33587f2ad087d07c6125916280aa02d0ba67b4a81c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHFIC2C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB8B5SuUvi5%2FsfNVotxXnwn8VwqMwNR0We2odR3ecm6AiAOAJgpPNBLnBwLSNUtkAAjeDZkEUd19U5C0IvPKaNusCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsJgWFmnCHaL1zh8KtwDtwHGTsgmTRIYEkVc%2FF%2F%2FxWyl%2B1zIz0nyIBs7EFRMv2svcmBFXhDsk3zO7VYtLMadwfwYhM0fTWdmx%2FmIookq69ANWqOWN07AASt4C88vO1LjsrS3r%2F8rOZnPX%2BqDT9rSvK4NIkkCx1T%2F8EytYkfICY21cTEFFf56sZ12oxBIB07YR3KvgpswUsg4ne%2FPlVyKq7AtaqcDeZPqGWKtGZAnQNELQyylW7F1K9I49BTyx0pRjNWaXJF8A9yL%2F5ABo%2FabYp9d8xW1s66%2FmHIxO%2B99s3%2BjghY4YOq%2Bna56lGjJNSsfaYI0Oh0322ipuTE%2BdqQcLNvRqkiWbU0CM8e5%2FtrNu9geQBtEhF%2BQTE4WYO0IK4ULHH6a%2FJwkxjEkRxNM82dP5jVWycvBuuez81PbapScmMs5vkagBDofBTNWTF6AOoNhBoNCx%2BYCTjZkhaCPRq%2F2XW76PejuUTYGfzzE8QrbA6KQJ%2FU45tNizc1tBvtyJ6T2hNTfQvMQhzUQeCzr5GSq5IPQlxx1zrLeLVajHYH85%2BWekJp13MowAt13rRyZAutFn0Whq0Alwe2Oyk1xhPjDeCGbal4sJYXS41qTdwS9tpz3XSrGL8Vl%2FTiHvUVIKcIvJOvSlQeA%2BX3%2F73gw1omfvgY6pgFk%2F8gMWI%2BnFN9YEZKF60DP7UBzOKNA7lcc4qy15AdNntc8x0w%2BvndxrKGVNqpnpaeSlFi81bBQf0Bj3uh1k6nEXksJTJn0VFJVDvQTniLsP%2FbLHKc4NhL5niFodAooLVuJew1u0yeIMsbyExtSsvICV5OUy60dnIrOtN%2BJht7zdoQsBwMYxM%2Fv7sHEAnPpFRlkUwM3E0QTxxI0ZrH6d%2FBEqhmN2efs&X-Amz-Signature=5019df152027a561d3864f0967f245a6a4fbc4faeee7e57ef0c0c4f86fd79fea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
