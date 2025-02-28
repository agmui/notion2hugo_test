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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENCU3UP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDj%2BNdBexpwHnSJHktFs0K5y0QxRDtxQYdTtv2Zj9J3oAIgbpbXvef9OjHwbrD6oMVFq5R2B3sEpXqtgS79j5iDHmsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkJ1lsQFMxFmeigsCrcA275553K3TfBaWfRhn6%2Fi%2FZwKcnQb61DI0M4L7ur25JYgMBm32PNz%2FwAFnfhonReJfcq8lrdPLB9dHC1SzIqP5WLXLPWONniSawz3l%2FPoYt%2FYpVxoq6eX6Lxt44odlXnF5uwbALRzYf7BRjgb8xomUeQHxGK4o5ar0n8q3CeoVonEBo63EkPFWi6%2BDw%2B7SoFH0apBdtAyOYwzCpGGT0HnJ5n0xuyPDM%2BhDLioCpcmWUhV1995oUxBLBQiUAeYVLUY%2BDaBgMS89Cn8XeNj4kaPdxm15RvRIVPJr5%2BKqmEnCQm13XrS3wmpDLtcYvfMg5IQ1JeATxMESWe3qnIuoo68EQKwLB1ZvLxMaO9TwFXZgX%2F8hbYg2z4eQ%2BC4SqzDe%2BdwtOe%2FeYErzJsHirfX3ITrJNmUSs3zl0v5gGS%2BXk8B3othvmcz3UHqU6UT%2B9hhmzJ%2F5eLh6PqcxTEZMtHGjpLurrN%2FcZkfoIaVAZVb9JJa0OwGZu%2BKbeffsIw2X3Lo0JJECyOyK8kIdimPpoQvpOIFsm37SBc%2F4zeqLbxB5TRjdKuMEI%2BKrIvY73tsMmeKCf17bN1mUqVKeQcT42JS0buxr%2BpJNWeu%2FtL45yt9%2B6fsiihBRt3CTNJ598khwtLMIrsh74GOqUBZzbrM7DR3%2BnlBOUlhOZ3eMiUuPEyoEWxsNICQtkCLgpHUlQIELm2LHnBzUgS8%2BB29qrbtQ5%2BgNQUnhjodUHnDBz%2FBiOl77pdn25voobJzOR8mAQWLQZzxTe%2BKZQdBpbWmFdF8lcupCjj8rlUZ1%2Fu%2B9bvBr652xVvipX57g7o%2Bx3MGX%2BMxBPQBcJc%2BvspJEaPDHH2kXoDCnRL60T6CBsUKeJT71mX&X-Amz-Signature=890a659a64de5bdc4f84c631544b56ef3a80902ebeef0028bd424ffbe4eae79f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENCU3UP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDj%2BNdBexpwHnSJHktFs0K5y0QxRDtxQYdTtv2Zj9J3oAIgbpbXvef9OjHwbrD6oMVFq5R2B3sEpXqtgS79j5iDHmsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkJ1lsQFMxFmeigsCrcA275553K3TfBaWfRhn6%2Fi%2FZwKcnQb61DI0M4L7ur25JYgMBm32PNz%2FwAFnfhonReJfcq8lrdPLB9dHC1SzIqP5WLXLPWONniSawz3l%2FPoYt%2FYpVxoq6eX6Lxt44odlXnF5uwbALRzYf7BRjgb8xomUeQHxGK4o5ar0n8q3CeoVonEBo63EkPFWi6%2BDw%2B7SoFH0apBdtAyOYwzCpGGT0HnJ5n0xuyPDM%2BhDLioCpcmWUhV1995oUxBLBQiUAeYVLUY%2BDaBgMS89Cn8XeNj4kaPdxm15RvRIVPJr5%2BKqmEnCQm13XrS3wmpDLtcYvfMg5IQ1JeATxMESWe3qnIuoo68EQKwLB1ZvLxMaO9TwFXZgX%2F8hbYg2z4eQ%2BC4SqzDe%2BdwtOe%2FeYErzJsHirfX3ITrJNmUSs3zl0v5gGS%2BXk8B3othvmcz3UHqU6UT%2B9hhmzJ%2F5eLh6PqcxTEZMtHGjpLurrN%2FcZkfoIaVAZVb9JJa0OwGZu%2BKbeffsIw2X3Lo0JJECyOyK8kIdimPpoQvpOIFsm37SBc%2F4zeqLbxB5TRjdKuMEI%2BKrIvY73tsMmeKCf17bN1mUqVKeQcT42JS0buxr%2BpJNWeu%2FtL45yt9%2B6fsiihBRt3CTNJ598khwtLMIrsh74GOqUBZzbrM7DR3%2BnlBOUlhOZ3eMiUuPEyoEWxsNICQtkCLgpHUlQIELm2LHnBzUgS8%2BB29qrbtQ5%2BgNQUnhjodUHnDBz%2FBiOl77pdn25voobJzOR8mAQWLQZzxTe%2BKZQdBpbWmFdF8lcupCjj8rlUZ1%2Fu%2B9bvBr652xVvipX57g7o%2Bx3MGX%2BMxBPQBcJc%2BvspJEaPDHH2kXoDCnRL60T6CBsUKeJT71mX&X-Amz-Signature=7667f7c4fb4ced46f21bd19ac94f8509ce3fd5d4fe5da09747a1ce10fe266180&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
