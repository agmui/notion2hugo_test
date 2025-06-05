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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZRYU3M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH4uuWtSmKiIMwtIEC9d2m9hTs%2B7KZwfWn15NlEjsivkAiBC41B6eeBlLmRtb2%2BM1nzXEMn3jK840xHFIL0nfESl6ir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMRH66anjEShKA9YROKtwDwcaHlZopwU7DOrJcm3%2F5nApva99y7yMlvoqcyWX7tH958Z2y3xv3alBLIsY2guHOolmsPb91AnknW0UjgOlOr361DuB3090%2Bw1HcUL01fXJy%2FjwduRF0jGiZFt3Sx%2BUUZ0IwF%2Fni4zY3l04lt0wDkW1SVTyN7Pw98ci008%2F5etSzsi0mblqHjOt5DYGZmiQc7Yc81tiqTvOOEH8DaysvkTKt5ulwYg%2BtFsM9BcN7cfvP6gO%2BFm7%2F4Cq3abstiP2nDhtNuAO0GNJIthULE6kBBuG6pINuHxlBt73k2tqW6wunIMnAJ5oBFvlM7ZpkKuqpKSPzHOiY%2Ft581dPEm8UDXD%2F5q1cf3wuwz0zD0RDG1pGz5KjfzFazEeoQit6v0jPm8rX71yirTTwXPuB1eR%2BhKv3tkxTKRmQ4G1ALF5PZW6k8u6Nfml20MgLoBw4XmLzSkAbEt5UGNGkG07IRcRtGQLMSM0UXsyW5DDhx66yWqeMXTUBuy%2FDfEZuE2ep6QInE7ZSEw63YG3lx7t98mOW%2BshGKs85XUW%2BXwx0p4JG2OzaWilYQKAHkjC20YIl0YDqdVBOeMne8LFhvKfpLJyv7qybgNzOTFahrErjb5%2BOda8Y7B0%2FYUzG3OLpTiDswrOWEwgY6pgEMdGUPQecOfEXPOVWtaNrlXmA4v28SBOqrzTTU%2BR7YgZUnpZPXjRMGWIDUrFYbSwU1d%2F8CtnKbzNCsvxs8BB%2Fb1jdVSA%2BEwRsfRbTtkuSQFI1qGTWjk1K946cSJym2li8QBmQcASxrpMZbq1i8HfDhUx5DoBCSqJauw7nRc4rCVSz%2FAmdB88o9T8M8fICsr4iovrs7S2lR4e9vlnEdssBBkfjGwuUW&X-Amz-Signature=2c049822a08c7cc2e0352e77a8f6fd80bb04c157ee6338d76200ef90714b693d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZRYU3M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH4uuWtSmKiIMwtIEC9d2m9hTs%2B7KZwfWn15NlEjsivkAiBC41B6eeBlLmRtb2%2BM1nzXEMn3jK840xHFIL0nfESl6ir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMRH66anjEShKA9YROKtwDwcaHlZopwU7DOrJcm3%2F5nApva99y7yMlvoqcyWX7tH958Z2y3xv3alBLIsY2guHOolmsPb91AnknW0UjgOlOr361DuB3090%2Bw1HcUL01fXJy%2FjwduRF0jGiZFt3Sx%2BUUZ0IwF%2Fni4zY3l04lt0wDkW1SVTyN7Pw98ci008%2F5etSzsi0mblqHjOt5DYGZmiQc7Yc81tiqTvOOEH8DaysvkTKt5ulwYg%2BtFsM9BcN7cfvP6gO%2BFm7%2F4Cq3abstiP2nDhtNuAO0GNJIthULE6kBBuG6pINuHxlBt73k2tqW6wunIMnAJ5oBFvlM7ZpkKuqpKSPzHOiY%2Ft581dPEm8UDXD%2F5q1cf3wuwz0zD0RDG1pGz5KjfzFazEeoQit6v0jPm8rX71yirTTwXPuB1eR%2BhKv3tkxTKRmQ4G1ALF5PZW6k8u6Nfml20MgLoBw4XmLzSkAbEt5UGNGkG07IRcRtGQLMSM0UXsyW5DDhx66yWqeMXTUBuy%2FDfEZuE2ep6QInE7ZSEw63YG3lx7t98mOW%2BshGKs85XUW%2BXwx0p4JG2OzaWilYQKAHkjC20YIl0YDqdVBOeMne8LFhvKfpLJyv7qybgNzOTFahrErjb5%2BOda8Y7B0%2FYUzG3OLpTiDswrOWEwgY6pgEMdGUPQecOfEXPOVWtaNrlXmA4v28SBOqrzTTU%2BR7YgZUnpZPXjRMGWIDUrFYbSwU1d%2F8CtnKbzNCsvxs8BB%2Fb1jdVSA%2BEwRsfRbTtkuSQFI1qGTWjk1K946cSJym2li8QBmQcASxrpMZbq1i8HfDhUx5DoBCSqJauw7nRc4rCVSz%2FAmdB88o9T8M8fICsr4iovrs7S2lR4e9vlnEdssBBkfjGwuUW&X-Amz-Signature=a2f393b51982734ab85de66e395e3a914776d2d5c0698dd98b64447af8d92dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
