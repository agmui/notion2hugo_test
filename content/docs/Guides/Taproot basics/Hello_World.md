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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBW4NMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSptkTv%2FW%2FD2eKR2jO%2Ba3ERgHSxgRVaw2%2F%2FUYoZLb%2ByAiAfLP2OZmLwaw3%2Fwk7S6Nayszhv2K5gf3nnbF%2BzteIubyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryS4zkcQgSR1qb8GKtwD%2BcivqObrc09BBQqUni5%2FV2kiYoZ0FjF3Gt24jmKUzSZByFUHA7sFsSadWVy0RHycWV14NCXujIFWzx936K0wYJanaEZG0P2xXRyFrIcUvkRTj8e%2FDJlpJe4hxeA49zf4Xk86BpDIt7SA1ToLWN7mSEnhAOy7oZyU9HcdAxUt2YCzAE6Ug08F73E77LHu7XYhtMrygMSFpeCjVz3%2BYM%2FiQt1C7zST6663sZD%2B%2F%2FyQmzcIFWxSEVZiCdHi2qXSQ0knKEzRhM9J8z5VCeKv%2BNxvWiWeDNFCDylj1wSNNNHYFDHkImOBMNH%2FaunEBb4niApp8YVXOzbt4DBiSexW9txLS0wW%2BH%2F2k5QBZwTgPwoq76dJR%2BH22wK8FR0fKvlbtleBSSH%2FyN%2FZk3zsYjm3%2BTBWFQhBeYp5c13RQmMuc4yoDCY%2F9Y7kPtQgJ9TDvuWffoZgPicGMP8%2BlEyVY%2FV4FSViLC0pz1Loh80QbITBsTfkwjY%2FujWfu%2FaQOJphRXXVyjVpWsRwWnksmn7uaw2F9A3sDgbVdzfMe6du4YcmZ7rQHR9XZZXPBOfSg6y5m63nSnL6efXAOmeR%2FRqP92uo3i4Zr42wQhLgn0z94HmIC6GGIzW26DYOHwjvjiFqNpIw%2FLCUwgY6pgHb3NJw2c5qPwoib%2B%2B9ITvMR6CDTPht6fCCKr75a9tWC3vp7hQ1jRlwMP4W77uKpywQJz6EE2tDP7ScdRzbtUGDT6NA%2FyXVYtyu8a3jYtjKUdXTYBsIqoPMohBQGzidUW7m1rVztwM%2FL%2FofRorrjN8pKXSd%2BB8bXxnhVLlMG%2FBawDQ3kixUFjelGe7Od9BBvSclnNC%2BLhudCWMHFGdkSz10P0ayCE9a&X-Amz-Signature=08e90ea809c8ca8e3e4368402c572db7fc453f532d29108ed9fba3c451d4a504&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBW4NMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSptkTv%2FW%2FD2eKR2jO%2Ba3ERgHSxgRVaw2%2F%2FUYoZLb%2ByAiAfLP2OZmLwaw3%2Fwk7S6Nayszhv2K5gf3nnbF%2BzteIubyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryS4zkcQgSR1qb8GKtwD%2BcivqObrc09BBQqUni5%2FV2kiYoZ0FjF3Gt24jmKUzSZByFUHA7sFsSadWVy0RHycWV14NCXujIFWzx936K0wYJanaEZG0P2xXRyFrIcUvkRTj8e%2FDJlpJe4hxeA49zf4Xk86BpDIt7SA1ToLWN7mSEnhAOy7oZyU9HcdAxUt2YCzAE6Ug08F73E77LHu7XYhtMrygMSFpeCjVz3%2BYM%2FiQt1C7zST6663sZD%2B%2F%2FyQmzcIFWxSEVZiCdHi2qXSQ0knKEzRhM9J8z5VCeKv%2BNxvWiWeDNFCDylj1wSNNNHYFDHkImOBMNH%2FaunEBb4niApp8YVXOzbt4DBiSexW9txLS0wW%2BH%2F2k5QBZwTgPwoq76dJR%2BH22wK8FR0fKvlbtleBSSH%2FyN%2FZk3zsYjm3%2BTBWFQhBeYp5c13RQmMuc4yoDCY%2F9Y7kPtQgJ9TDvuWffoZgPicGMP8%2BlEyVY%2FV4FSViLC0pz1Loh80QbITBsTfkwjY%2FujWfu%2FaQOJphRXXVyjVpWsRwWnksmn7uaw2F9A3sDgbVdzfMe6du4YcmZ7rQHR9XZZXPBOfSg6y5m63nSnL6efXAOmeR%2FRqP92uo3i4Zr42wQhLgn0z94HmIC6GGIzW26DYOHwjvjiFqNpIw%2FLCUwgY6pgHb3NJw2c5qPwoib%2B%2B9ITvMR6CDTPht6fCCKr75a9tWC3vp7hQ1jRlwMP4W77uKpywQJz6EE2tDP7ScdRzbtUGDT6NA%2FyXVYtyu8a3jYtjKUdXTYBsIqoPMohBQGzidUW7m1rVztwM%2FL%2FofRorrjN8pKXSd%2BB8bXxnhVLlMG%2FBawDQ3kixUFjelGe7Od9BBvSclnNC%2BLhudCWMHFGdkSz10P0ayCE9a&X-Amz-Signature=0e8c39fcaa84e92a6b14d976f620ed9f440ecf035aa70221c683525181465b97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
