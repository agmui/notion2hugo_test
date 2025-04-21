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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCOKWKUW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDMXu4GS%2FvnXWYBcRIhkYjq0Driznu6Lr34ENkVOPhRTwIhANqKYePqUAAiQEqxvwpKw7vl1sbcRvJK1A1WEapPL5gFKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeCFotjMhfCuficywq3AOLDQqFuCD5rolTmVVBPruiwzjJWS64kLwai8tEKr6IswfaNhqB1D3n01ClElvUTJw3mN3i%2F0IO39IJLCdfDaa8oN2MR2KZ%2FjOhIJGH%2FSPg6GDgEHMuzVWiSakovd74N%2BLyjXiPpMeB8IobkJGKTazT7E1hOj4oPhErglvUCVK%2FlWp9DpRtq0VB%2BKllrVUGR2k4VYeYJiE1ox1NBuRx%2B0hjVKVqYf2FUqM3GoRY1eDjBMdDFJ%2BRW0hr12Gdr7wfzkaiVYbpmaKnxkVtkcqmADyM%2FlUYmKON7ofgwWk3mJf7lfAqAl7h%2BSAaxwSsG1zc3Xj5cp1UckhOYCxU1gOIQx%2Bv7h0Hv3923WBfxArM93hdiEXV8MQox%2BtXGGy9GWw28vM%2FTsr3zvn34JNqgruQNQAc4WYnZq0bpkBg%2FoPqlbwEfYTO8%2B7J%2FRGwz9b1V2C9hYaZaWDbP7EC%2FRBFSRZmx%2Fmmjf2%2FXVlJBoIT8xyW3dzhBU1zI8PbBVa02AB%2BwNZQK%2Bcsj0LQGxyleeXxHkvXffrdgL1FTo840rqy23xLDgzU9RH96UsPDk%2BcBSECFlu6O0Xeaod%2FvYygjBrj%2BDg%2FRZPkyPNCtM%2BnbW%2FndOSnNXJx89OJW2AIEyHP%2BBw1%2BzDXopjABjqkAQOW%2B2zrDCrG88cDR4f3gK7oOff8fu3T8oVlJPOUrgnALjicFSAhnDbZGTWF8HSdRUCTB8TntYVTuoEdsQcga%2BtdxlWGvYW%2FUBb7fPgu2BYDAZFHJ8yXqBdbyXYruUeaiSiRL30uz%2FD6o2JOZfGRhoy0tDYc87CJ9iFRASXVQo25Xeht1XJS75%2BoKyqn%2B4XGfFUelG6MGkeDiCdn8vkyLpG2UwQ3&X-Amz-Signature=70b0c22e01d19accb310c81c292ff0cc38cd5a24ba57e1648fff37305f7feef0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCOKWKUW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDMXu4GS%2FvnXWYBcRIhkYjq0Driznu6Lr34ENkVOPhRTwIhANqKYePqUAAiQEqxvwpKw7vl1sbcRvJK1A1WEapPL5gFKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeCFotjMhfCuficywq3AOLDQqFuCD5rolTmVVBPruiwzjJWS64kLwai8tEKr6IswfaNhqB1D3n01ClElvUTJw3mN3i%2F0IO39IJLCdfDaa8oN2MR2KZ%2FjOhIJGH%2FSPg6GDgEHMuzVWiSakovd74N%2BLyjXiPpMeB8IobkJGKTazT7E1hOj4oPhErglvUCVK%2FlWp9DpRtq0VB%2BKllrVUGR2k4VYeYJiE1ox1NBuRx%2B0hjVKVqYf2FUqM3GoRY1eDjBMdDFJ%2BRW0hr12Gdr7wfzkaiVYbpmaKnxkVtkcqmADyM%2FlUYmKON7ofgwWk3mJf7lfAqAl7h%2BSAaxwSsG1zc3Xj5cp1UckhOYCxU1gOIQx%2Bv7h0Hv3923WBfxArM93hdiEXV8MQox%2BtXGGy9GWw28vM%2FTsr3zvn34JNqgruQNQAc4WYnZq0bpkBg%2FoPqlbwEfYTO8%2B7J%2FRGwz9b1V2C9hYaZaWDbP7EC%2FRBFSRZmx%2Fmmjf2%2FXVlJBoIT8xyW3dzhBU1zI8PbBVa02AB%2BwNZQK%2Bcsj0LQGxyleeXxHkvXffrdgL1FTo840rqy23xLDgzU9RH96UsPDk%2BcBSECFlu6O0Xeaod%2FvYygjBrj%2BDg%2FRZPkyPNCtM%2BnbW%2FndOSnNXJx89OJW2AIEyHP%2BBw1%2BzDXopjABjqkAQOW%2B2zrDCrG88cDR4f3gK7oOff8fu3T8oVlJPOUrgnALjicFSAhnDbZGTWF8HSdRUCTB8TntYVTuoEdsQcga%2BtdxlWGvYW%2FUBb7fPgu2BYDAZFHJ8yXqBdbyXYruUeaiSiRL30uz%2FD6o2JOZfGRhoy0tDYc87CJ9iFRASXVQo25Xeht1XJS75%2BoKyqn%2B4XGfFUelG6MGkeDiCdn8vkyLpG2UwQ3&X-Amz-Signature=961204c9e7ca68652139e3966cab08d280c6bfd7aa1dfd6185abb84cc65fc93f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
