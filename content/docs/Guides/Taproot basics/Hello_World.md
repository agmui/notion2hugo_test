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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UF4C6AV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ2J8mWeec6lL5H%2Fo6qpp5ipAuHZc3oH1Sd68KVpYSnQIgWQhyAmznHEudMRoea6VYpCTLGlw1LEJI5ZS0nNVLeL4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBHOeRp5AExDUDCT5CrcAwoM0sqkvj5R0%2Fd0xhWYOqC44X%2Fh8ua706hC3HMwM21HJJyQ%2Fstey1oy15qql%2F2uGRMMt%2FJcwJYTzNfB7MvlfC2KH2mVp8IOUu9ZpBIkXJvdxrenTKTCUuogSR4MHsBrmF89Byq2uTUQmLQ%2FjjX4%2FFt0oFoI%2B%2FEoSnk%2FxrAarqZCrTiViz14m86Xn12A%2Bq%2BQReI5oi4vLYSCKy%2BDqNeQdF31ie%2BQNuajjObt6aRfikAfkWoEIhrBS2RclbMznx%2BO%2B52WnRImmXKB4ZezWQOcgXe3%2BLofVbz3TqXFb6FNh6nbHRaVspgZ5q8cEpCmUT50E%2FGS8HIJWCoOtH%2F%2BPSSdoarmcr%2B1i12UvcpCnuQnkTwSD6xkhg3JPeXr4KDrNWGPzpL1QhXm%2FXRXLw2Qsbf4%2Bzkb4s0h1UxKznZB4JJzH47uQiWrz9bXvcDF1f58eDOpNZXrFbfjCJRXB9B0yzlVBikkU6ZLykh9jgy36SrI0Ay6fXf0X8Wbe1NQeKBrr4%2F25Z6ZY1hMSip%2FhiIkJ3aZJVM0zY6BEL0gBWV6hiOORLHBLxjNR7l5TpA9b08lRKp9ZlQQFMI542GpZeGaxZO1iCwDM8lv5XIPLuOhdnWfI%2FECvNElRhfLF1MAXvK%2FMNfTtsAGOqUBRCb8riGQGnzHS9JCYBtojcl0eN2CjtpHKOdF82kTi5cxR9mc34re9YoH4b2m%2Fp1c%2FadtXMJ2IdmeTse6k45zD5VPNWbiuuq8korLAdGtKtEWaXuVR1t3DV9wgnZBc1WXqpmoCj%2B2Gh3%2BeIhUqd2BeQUPERvCpWly2dCR0xyzGjZ5xAbQ8aMfpQcQguXGADRRajuFE9T6W9BuAtkUXuibq0qwCKZ%2F&X-Amz-Signature=b8fd2656a4d10b0638cdfec13711b8b8cb115ad47f56b0aab2b498cc3b2b84e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UF4C6AV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ2J8mWeec6lL5H%2Fo6qpp5ipAuHZc3oH1Sd68KVpYSnQIgWQhyAmznHEudMRoea6VYpCTLGlw1LEJI5ZS0nNVLeL4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBHOeRp5AExDUDCT5CrcAwoM0sqkvj5R0%2Fd0xhWYOqC44X%2Fh8ua706hC3HMwM21HJJyQ%2Fstey1oy15qql%2F2uGRMMt%2FJcwJYTzNfB7MvlfC2KH2mVp8IOUu9ZpBIkXJvdxrenTKTCUuogSR4MHsBrmF89Byq2uTUQmLQ%2FjjX4%2FFt0oFoI%2B%2FEoSnk%2FxrAarqZCrTiViz14m86Xn12A%2Bq%2BQReI5oi4vLYSCKy%2BDqNeQdF31ie%2BQNuajjObt6aRfikAfkWoEIhrBS2RclbMznx%2BO%2B52WnRImmXKB4ZezWQOcgXe3%2BLofVbz3TqXFb6FNh6nbHRaVspgZ5q8cEpCmUT50E%2FGS8HIJWCoOtH%2F%2BPSSdoarmcr%2B1i12UvcpCnuQnkTwSD6xkhg3JPeXr4KDrNWGPzpL1QhXm%2FXRXLw2Qsbf4%2Bzkb4s0h1UxKznZB4JJzH47uQiWrz9bXvcDF1f58eDOpNZXrFbfjCJRXB9B0yzlVBikkU6ZLykh9jgy36SrI0Ay6fXf0X8Wbe1NQeKBrr4%2F25Z6ZY1hMSip%2FhiIkJ3aZJVM0zY6BEL0gBWV6hiOORLHBLxjNR7l5TpA9b08lRKp9ZlQQFMI542GpZeGaxZO1iCwDM8lv5XIPLuOhdnWfI%2FECvNElRhfLF1MAXvK%2FMNfTtsAGOqUBRCb8riGQGnzHS9JCYBtojcl0eN2CjtpHKOdF82kTi5cxR9mc34re9YoH4b2m%2Fp1c%2FadtXMJ2IdmeTse6k45zD5VPNWbiuuq8korLAdGtKtEWaXuVR1t3DV9wgnZBc1WXqpmoCj%2B2Gh3%2BeIhUqd2BeQUPERvCpWly2dCR0xyzGjZ5xAbQ8aMfpQcQguXGADRRajuFE9T6W9BuAtkUXuibq0qwCKZ%2F&X-Amz-Signature=de822ef69c53df952e7fe03487c748aafdb3b3be0d787dc742405defb6a22a44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
