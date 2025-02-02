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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBBKKZJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWyfZuxPaRf9n%2FYbLC8ljKMbsAAqVoEPs4C78dIYmnMQIhAKFBlXK%2BztK7356%2BtgkT4sCgn5%2FNx7MT4013gZ9NcJSNKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaByS99O3ygBMKT4gq3AMlDKzLmmuqhpK2FeEuKnqDytYcdEbkhMyv%2BviXzZeOp68%2BC%2BMwL7iq3fO1ypUAzTzgmazMGTTKxI78nHKQXpeJpssEO95KEynxejeTQ%2BQZyPSsTNkIb1ZkcJMBeaAR%2FHRQp21ZAxSPjhaYyrAygeFdTjaltPv%2Ba4dZx%2FF%2Fjjd4wXG3suDe%2BFxs039GbRV0LsPX%2BLBbrmfN1esyDD03bXbV7P5SFNoN%2B0CG%2F%2BRTxGc9fKDgQt76CFMu3P80ei4PDsfk4M8a1bQYbC2lZ1prYmyQgoOQobbfr1MJotY91mZjqKmgQWKnzPYL5zHYvxSVT5916Aj9h5Xmb%2BabczMXrqtN73clJ2BoYBrV54PUsWIoiuBVpFBTkQ47SC2uVPEu5IDmeAV62r17HFrX%2BagzhQrLrbJIsspIWxSm2w1yspEq58JJ7YMOSyFJGVQrp40jPbzzRhO3Wf61h80sOTpgXzM9w1Yo%2BBl15tFS5zxXdpCjieKIrJtPLfhMUim%2FMZWpsio4PlblneusPpFkB4SwiDo4MJd60LFT9NdVLngAvNbIW4gSfpvIpPbZRld%2FF4fZOQaB0IhpaNtzX9dqXzzJdOUKOcowwhKc%2BcOxjXB1EgbsHugenS3eTzdGqZExoTCanfy8BjqkAU1pA%2B3vddvS%2FUzbfxeaxdrRee7MkVDcV3IVTzua%2BDpAl5bJfKWQST7sdHi3pTOoMjCpkgH6PsdS1MGtn%2BtayO8%2BxxEzWRTcji2iuTc46psEFDbGzAyhH5O6MXx0yyzvdFsI%2B8IZq31q%2FIwShMjO8Nx5P1lrA76M9QOPK3X74V5n4iFJAe%2Bms79q3eNftUApNx7%2Fb7tjA8NEO3aqkCFq7VUwZvrp&X-Amz-Signature=6bfed82cfe6494b3bc35c02190784ed4690a0816a0cda3b6ae20ba37401d12d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBBKKZJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWyfZuxPaRf9n%2FYbLC8ljKMbsAAqVoEPs4C78dIYmnMQIhAKFBlXK%2BztK7356%2BtgkT4sCgn5%2FNx7MT4013gZ9NcJSNKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaByS99O3ygBMKT4gq3AMlDKzLmmuqhpK2FeEuKnqDytYcdEbkhMyv%2BviXzZeOp68%2BC%2BMwL7iq3fO1ypUAzTzgmazMGTTKxI78nHKQXpeJpssEO95KEynxejeTQ%2BQZyPSsTNkIb1ZkcJMBeaAR%2FHRQp21ZAxSPjhaYyrAygeFdTjaltPv%2Ba4dZx%2FF%2Fjjd4wXG3suDe%2BFxs039GbRV0LsPX%2BLBbrmfN1esyDD03bXbV7P5SFNoN%2B0CG%2F%2BRTxGc9fKDgQt76CFMu3P80ei4PDsfk4M8a1bQYbC2lZ1prYmyQgoOQobbfr1MJotY91mZjqKmgQWKnzPYL5zHYvxSVT5916Aj9h5Xmb%2BabczMXrqtN73clJ2BoYBrV54PUsWIoiuBVpFBTkQ47SC2uVPEu5IDmeAV62r17HFrX%2BagzhQrLrbJIsspIWxSm2w1yspEq58JJ7YMOSyFJGVQrp40jPbzzRhO3Wf61h80sOTpgXzM9w1Yo%2BBl15tFS5zxXdpCjieKIrJtPLfhMUim%2FMZWpsio4PlblneusPpFkB4SwiDo4MJd60LFT9NdVLngAvNbIW4gSfpvIpPbZRld%2FF4fZOQaB0IhpaNtzX9dqXzzJdOUKOcowwhKc%2BcOxjXB1EgbsHugenS3eTzdGqZExoTCanfy8BjqkAU1pA%2B3vddvS%2FUzbfxeaxdrRee7MkVDcV3IVTzua%2BDpAl5bJfKWQST7sdHi3pTOoMjCpkgH6PsdS1MGtn%2BtayO8%2BxxEzWRTcji2iuTc46psEFDbGzAyhH5O6MXx0yyzvdFsI%2B8IZq31q%2FIwShMjO8Nx5P1lrA76M9QOPK3X74V5n4iFJAe%2Bms79q3eNftUApNx7%2Fb7tjA8NEO3aqkCFq7VUwZvrp&X-Amz-Signature=aa3a244b361b4ae8a24581be7e89914c4ca7a077127b5ce6cd89cfb1f8ccc6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
