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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMBRTTJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGP72ZSfTCz1CZQpnbS1uB5OEd4FY38vBOzlvh8%2B5qo%2BAiEAt60Qj5J%2FrVDuGVtljjPdvyPRa1e%2Bi10oXSORmn%2FQHQ8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcPd47na0o6J%2BHvsyrcA2dGpVhzviYWpSFIxlyx2sebqrTzj1h2JiIj1LG3KVCLIZJN%2Fdax7uEtsHcHoerpjU7a4U%2BvN4XO9IRyM2J1qN8%2FGeGdhoRhUrP1KpRwDUv%2BGUMC9E6LTy3LZRtYu%2FzQGNeQziZNjB0rOeu%2FqQ53gVl8jHthf%2Bnl8UGwUgAanTcAZ3fX2LFD0fF410IuiqzA8TEfGxl1HegFVq7zTewJ2X96GJyptEM1ttbR0fCw2EgPqsAW2zvthE42Du1SX4yI0zWjQuxeFR3h7bDDY54ILJbontzoovZSLc77iOum7VCStDDUmppCd%2Be24bRvZdUcSLZY0n4CgnsMYK359ccF03iJkYJrxBSfujckjurxR%2F887Yf1Yg7ST9AHS4BFcjQKPSkugY3CgJRDLvXSbUb69RNsT9ICbKC101jNjYYPEUk%2F6GH0el7FiG36B6%2FXAzk%2FK3fa88s51JNsdcbSLTrI0xKS0AFw9j7DzApe%2FnmwaffRSSY2UY%2BSPuN7Qxa%2FbUw%2BDmB%2F0VN5rHBbNkjhJEUwfeMkFAtIocNfglZv8vXblOh8bWT1MO7kEzwnEqJZlky9NYQl2v5gFBt5BEQQaEE3Y%2FVcwmvErRSIEdj8HknIDYlRHkJtkbnDqaT8svuGMLuzm70GOqUBje%2BeLLm1yzabEQ2%2BccB0xjzdGhU1aFN3pzSFWkPS7qYBmtolmurFw%2Bg0cdPwo%2FpzdT1buILPiqlZpZGyGLRlLKXv4ZoPxSlzLlE0ye4rBAPL1alhmqBGAbwHb7gfxlgh7hPYylMhXhXXAJxRo4LPcfQdjmhCPAXjrukDVBRJ%2Fjj%2BfnyUT8ZXqXX5mQ3b0jqOaTTgklJZHCa7azsUe0Nt5eCgxMwS&X-Amz-Signature=4c59a11aaa95e0a491c3e74e2c63e86de8c2650b4f2b1796251dd7d4de7ed12b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMBRTTJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGP72ZSfTCz1CZQpnbS1uB5OEd4FY38vBOzlvh8%2B5qo%2BAiEAt60Qj5J%2FrVDuGVtljjPdvyPRa1e%2Bi10oXSORmn%2FQHQ8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcPd47na0o6J%2BHvsyrcA2dGpVhzviYWpSFIxlyx2sebqrTzj1h2JiIj1LG3KVCLIZJN%2Fdax7uEtsHcHoerpjU7a4U%2BvN4XO9IRyM2J1qN8%2FGeGdhoRhUrP1KpRwDUv%2BGUMC9E6LTy3LZRtYu%2FzQGNeQziZNjB0rOeu%2FqQ53gVl8jHthf%2Bnl8UGwUgAanTcAZ3fX2LFD0fF410IuiqzA8TEfGxl1HegFVq7zTewJ2X96GJyptEM1ttbR0fCw2EgPqsAW2zvthE42Du1SX4yI0zWjQuxeFR3h7bDDY54ILJbontzoovZSLc77iOum7VCStDDUmppCd%2Be24bRvZdUcSLZY0n4CgnsMYK359ccF03iJkYJrxBSfujckjurxR%2F887Yf1Yg7ST9AHS4BFcjQKPSkugY3CgJRDLvXSbUb69RNsT9ICbKC101jNjYYPEUk%2F6GH0el7FiG36B6%2FXAzk%2FK3fa88s51JNsdcbSLTrI0xKS0AFw9j7DzApe%2FnmwaffRSSY2UY%2BSPuN7Qxa%2FbUw%2BDmB%2F0VN5rHBbNkjhJEUwfeMkFAtIocNfglZv8vXblOh8bWT1MO7kEzwnEqJZlky9NYQl2v5gFBt5BEQQaEE3Y%2FVcwmvErRSIEdj8HknIDYlRHkJtkbnDqaT8svuGMLuzm70GOqUBje%2BeLLm1yzabEQ2%2BccB0xjzdGhU1aFN3pzSFWkPS7qYBmtolmurFw%2Bg0cdPwo%2FpzdT1buILPiqlZpZGyGLRlLKXv4ZoPxSlzLlE0ye4rBAPL1alhmqBGAbwHb7gfxlgh7hPYylMhXhXXAJxRo4LPcfQdjmhCPAXjrukDVBRJ%2Fjj%2BfnyUT8ZXqXX5mQ3b0jqOaTTgklJZHCa7azsUe0Nt5eCgxMwS&X-Amz-Signature=5647b36237c87568a5d56c64ef61df70803b8de5888ebd3bd8bc484ce84a228f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
