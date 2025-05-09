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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHFUTRV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRIE0Yx21iWbrNJhWA%2Flx70TZnXTAp2U8GEjKp4DCp5AiBdIgbXYPrKAd2uNY3K3mPQSkGKx4SzXXd8IiG5E3A5IiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8L0wAKx1UhRWHOLKtwDODAEU7%2FkJs0g2T%2F5Vr9S3dXLzt7EEn4YBFjOrk83Pxa0oytgmMZkfoInz0p0sYXTfCvj0BjudLiayQTa7bHrKBCJgLC2tFTY1%2FOopCSIIPUNH2%2BeRGkB51mTw7%2BDxNcVw2JJOd7XjPY0LOSaA8xtXzimfPGKOoKTEPCWPJSKHFHN74KHz0V0a%2B%2B%2FnrU0PcYdRLH1FtOQX3tMR69tyvxO2ZE4UPzSIcdESkICKXBz9fd6o%2FX7u1nW3MyW26dsxlt56LCVZVIOLiZU%2B90Oz2oH%2FFDS0WWG8vK2%2F8Jhx1jRhwtEuWxt8sbyjwsrnRJyJ2%2Fqnx3jtYADiIYCdhoUEd43eSFG9ysOiGAePagkue3MN7zi4pmC5toqS53eXgzewrAooOsMXaf%2FEKcIvQ2SRluiaSrSLUY68wGpxlslAAF4%2BHKz9dLTT82MwOumin0puLgKUx49eq%2FDx5kmno%2BNQTwZhruCLHNfgtAtRFflFdeEMDZVevs%2FgRCAxP6zGYM3IzxLCL%2BEHloYQ9LLYg9KBOYKQEUgEoZ9nUEX9G5wXXQJX73TX2%2FnEd9h7nVxfrOf9N7uj5xFb4V5ydrLykTvjNwYtJlWiA2hwQ3ykFXnvRpx52m3R0s%2BMG8CtrLbJx8wyMT5wAY6pgGTT8HpFb9wpFYHaE7ihNdR65ARX%2BVJG8Xv9jxQ9ku6JfwQ3w6bBeER9nVdKTP%2BiCOK%2FmcXadg9R3u9Q18spxZLofBoEEFM%2BLlomZvSS%2BSLdXfdQdaon0pBFzydcqDQNlnY8AShOwx91afRjEeRZXhrOJLRlv9afih%2BJOemYQrm%2BCKL8w5Is4g0ypPxDLY%2FNVJdMwA42Pv%2FBWgoa3vnEg0Ir1b6gDII&X-Amz-Signature=f2d3f7a85d55dd4081b8616906a549c697b64bf2c6993685a4fcb4fe8ba57a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHFUTRV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRIE0Yx21iWbrNJhWA%2Flx70TZnXTAp2U8GEjKp4DCp5AiBdIgbXYPrKAd2uNY3K3mPQSkGKx4SzXXd8IiG5E3A5IiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8L0wAKx1UhRWHOLKtwDODAEU7%2FkJs0g2T%2F5Vr9S3dXLzt7EEn4YBFjOrk83Pxa0oytgmMZkfoInz0p0sYXTfCvj0BjudLiayQTa7bHrKBCJgLC2tFTY1%2FOopCSIIPUNH2%2BeRGkB51mTw7%2BDxNcVw2JJOd7XjPY0LOSaA8xtXzimfPGKOoKTEPCWPJSKHFHN74KHz0V0a%2B%2B%2FnrU0PcYdRLH1FtOQX3tMR69tyvxO2ZE4UPzSIcdESkICKXBz9fd6o%2FX7u1nW3MyW26dsxlt56LCVZVIOLiZU%2B90Oz2oH%2FFDS0WWG8vK2%2F8Jhx1jRhwtEuWxt8sbyjwsrnRJyJ2%2Fqnx3jtYADiIYCdhoUEd43eSFG9ysOiGAePagkue3MN7zi4pmC5toqS53eXgzewrAooOsMXaf%2FEKcIvQ2SRluiaSrSLUY68wGpxlslAAF4%2BHKz9dLTT82MwOumin0puLgKUx49eq%2FDx5kmno%2BNQTwZhruCLHNfgtAtRFflFdeEMDZVevs%2FgRCAxP6zGYM3IzxLCL%2BEHloYQ9LLYg9KBOYKQEUgEoZ9nUEX9G5wXXQJX73TX2%2FnEd9h7nVxfrOf9N7uj5xFb4V5ydrLykTvjNwYtJlWiA2hwQ3ykFXnvRpx52m3R0s%2BMG8CtrLbJx8wyMT5wAY6pgGTT8HpFb9wpFYHaE7ihNdR65ARX%2BVJG8Xv9jxQ9ku6JfwQ3w6bBeER9nVdKTP%2BiCOK%2FmcXadg9R3u9Q18spxZLofBoEEFM%2BLlomZvSS%2BSLdXfdQdaon0pBFzydcqDQNlnY8AShOwx91afRjEeRZXhrOJLRlv9afih%2BJOemYQrm%2BCKL8w5Is4g0ypPxDLY%2FNVJdMwA42Pv%2FBWgoa3vnEg0Ir1b6gDII&X-Amz-Signature=62094c7c340e78d5ea101336356353d0e45e6e09c84554569b82146012dfd179&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
