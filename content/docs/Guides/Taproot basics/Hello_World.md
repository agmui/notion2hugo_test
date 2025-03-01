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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLQUKFJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDVVy7U1KcTwVQqx6tzKKWP25DktvbYH2xXiPQz0kdrWAiBIrv4S8srSStXAb3AB8AX4GNhVHfF1lH8qAn%2F9pFe%2FyyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BP0aMSIXBgjNvHmKtwDr%2Bu8t8%2BYvepWlEl0uhegATakIw2AVRLTNIpZVZ0h8prAT1RNIKPD5L%2FTztaxKe086rp2bF6YNihIPsJaGh7A9G4FcXXYabN1EfuWE44vDGYzeZxx4q9Y1jSLtMVL6YT6dESaOlS6tkbvYB884g0lesuAy4GiJysR6FuuW0t%2BM219I3ANllbrgw%2Ff5AaqvZ6%2BNXqBhemE8USfteo%2FYNK9UVc8AFpt8wpDMJvjs%2FJMn9baQ9mSZQ%2BzLrwqm1bVe5vOEDnf95kuNGnue6Z2poL%2FtbCoyRQjQVHQ2PlU08%2FmM%2Bk06aRMAc3zqOZImjP85yBHTuVXzbXiFaLAYw%2Bj3%2FT%2Bk1vd9yX9qYx4L1PizfyzIbiFDZ225%2FQjanrlwX%2F7mhj70lx%2FDLi6iUkfM3DOpx%2Fhd4%2BoroZZlsOKD7XyP0IytBpXcuoJZ3AzGyTuIpIoMUopBKy3DxHFZHGQ1kNUl%2Bg3%2B1ygwnMtQrs2Cx%2FSH%2B8UjL%2F%2FZxwRW1x%2FiUtjDs4dcm0j6M53HPjKYPIqS1UzULoli1T%2FcqViL%2F1jPKRDSsZCgjhppkr%2FYGp%2By84mfPcL3TGRlxzm8HMkEem4oUDjk7yhl2rzvAEiTBHdawOhFqsXSPHJ9O0RE%2FZDplzHr00wsJWMvgY6pgEXXPN1xlSwTi%2BxVRD1YMEGHwXzun%2BTHZAr%2FcUE8xlitPKVekzqqiEnqjsuf4kzrR0HlotXV9hR0KOXerRHB6X8pVsKmc%2F77yMg66XmEXRu2CzHpBwRjYbEyqtbGgDDn5HiJB3YwpvL2BE4D5R1V1SbfKxIYBzh4uE2I4YCNu5bICd4oFNUaVpTpGUlBSFphUKS84Ek%2F8WWExQIjBSFBq%2FHBMHlndV8&X-Amz-Signature=fb0cecda4db6c8191e4dec230504a084371f76139158caf96dbf86d39bc6ec1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLQUKFJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDVVy7U1KcTwVQqx6tzKKWP25DktvbYH2xXiPQz0kdrWAiBIrv4S8srSStXAb3AB8AX4GNhVHfF1lH8qAn%2F9pFe%2FyyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BP0aMSIXBgjNvHmKtwDr%2Bu8t8%2BYvepWlEl0uhegATakIw2AVRLTNIpZVZ0h8prAT1RNIKPD5L%2FTztaxKe086rp2bF6YNihIPsJaGh7A9G4FcXXYabN1EfuWE44vDGYzeZxx4q9Y1jSLtMVL6YT6dESaOlS6tkbvYB884g0lesuAy4GiJysR6FuuW0t%2BM219I3ANllbrgw%2Ff5AaqvZ6%2BNXqBhemE8USfteo%2FYNK9UVc8AFpt8wpDMJvjs%2FJMn9baQ9mSZQ%2BzLrwqm1bVe5vOEDnf95kuNGnue6Z2poL%2FtbCoyRQjQVHQ2PlU08%2FmM%2Bk06aRMAc3zqOZImjP85yBHTuVXzbXiFaLAYw%2Bj3%2FT%2Bk1vd9yX9qYx4L1PizfyzIbiFDZ225%2FQjanrlwX%2F7mhj70lx%2FDLi6iUkfM3DOpx%2Fhd4%2BoroZZlsOKD7XyP0IytBpXcuoJZ3AzGyTuIpIoMUopBKy3DxHFZHGQ1kNUl%2Bg3%2B1ygwnMtQrs2Cx%2FSH%2B8UjL%2F%2FZxwRW1x%2FiUtjDs4dcm0j6M53HPjKYPIqS1UzULoli1T%2FcqViL%2F1jPKRDSsZCgjhppkr%2FYGp%2By84mfPcL3TGRlxzm8HMkEem4oUDjk7yhl2rzvAEiTBHdawOhFqsXSPHJ9O0RE%2FZDplzHr00wsJWMvgY6pgEXXPN1xlSwTi%2BxVRD1YMEGHwXzun%2BTHZAr%2FcUE8xlitPKVekzqqiEnqjsuf4kzrR0HlotXV9hR0KOXerRHB6X8pVsKmc%2F77yMg66XmEXRu2CzHpBwRjYbEyqtbGgDDn5HiJB3YwpvL2BE4D5R1V1SbfKxIYBzh4uE2I4YCNu5bICd4oFNUaVpTpGUlBSFphUKS84Ek%2F8WWExQIjBSFBq%2FHBMHlndV8&X-Amz-Signature=d0b784e4e5cda9f3c135930a8d6300649d81a0b6267efa760f8865a0f873ad79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
