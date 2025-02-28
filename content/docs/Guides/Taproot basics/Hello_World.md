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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKTE44DJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCPWUitf9ULJ0H%2F357o7wtHcR5Cbky47MTG4CYSWDjcBwIgTFnT0e0ARB4O4UKFJm9SgaFQbV0xyPt%2FhT25cIeq%2BKUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtqu4iiyoR7Dszr0yrcA1FWFQcKjt4Sm0ycxLl3kmpdwvrRzGpixDp71H4kY2JhCS9NoOSm7J9y%2BiNRNFJNrX4D6%2FiNCWC8rLvRW3ssAa9I0oLvDcwdWm06FMSruIREpejYvynMOfr0plBCSuyMQhV7FflKLAeLW4JwM3lljPEDXu%2FNyRYYu8sctr%2B4K6cjoghU%2FGgcPbrhVH%2B8xcycOlf90ivHn3iIBnAUw4GZFpBpuSqreQPGWup5G0fOxtcuVCPRJUzysY1C7z94cNUyCwdh950DEil7laY6LDi3PumSwDjxYbBAZWdjQCZeGOfk01olhbd2EzWtTQ0zhgxa8sxbSx8iAF4B6jZanNXmawGTD3oXIR%2FUBJfHqNgbdoZ%2B9%2BoNq4wnPqru77vMYFYzSHPFy%2B9M38L6slYLHQSz3xJhSjORNoh95KcQ1i9TaKykrIPH5Pyyu5qOQvVD9XHP7kmVcQMvxoCU6iBPzi%2BofOEzeHGbl35D%2BKbLZ4EDpjOLhF%2FLqLT6RuNbsJ9S6POZEXOUvqwIyxCqwxUrT%2FqUQNCODfkdS5GsfecYj%2BwIV1Lg2g1HHXR8l7xOaxRZczRmYZ1kYeX03BBgiZVSVU4kAxTKPG%2Bd%2By7GxDdU9gpvMPhs1N%2BNg52b%2FOwHmInrMMuLiL4GOqUBSCor6QLFacyCr2ht1V4j3H8hsmain74mY76y4DEWDO%2BAUYXYeHQn5ogWXfxcZVWc2s%2BHZzja89BTI1SVmuj4T50Wyru8jW6C8kp1K7dvTVUygPgG81pkBSopH%2Fs1ToT2vv2F94datf8%2B559JyjYxNZZxnsrGEijlvA8LnfOyP22FT2IhRhYj0rQYR8p5qIuTiRuJnit3WkdjLSMQaGfywnivaa9Y&X-Amz-Signature=3ae7ef5139daa4692cf6aad612a77ffdae46826536c93ae84c8fcd5cad4bf488&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKTE44DJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCPWUitf9ULJ0H%2F357o7wtHcR5Cbky47MTG4CYSWDjcBwIgTFnT0e0ARB4O4UKFJm9SgaFQbV0xyPt%2FhT25cIeq%2BKUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtqu4iiyoR7Dszr0yrcA1FWFQcKjt4Sm0ycxLl3kmpdwvrRzGpixDp71H4kY2JhCS9NoOSm7J9y%2BiNRNFJNrX4D6%2FiNCWC8rLvRW3ssAa9I0oLvDcwdWm06FMSruIREpejYvynMOfr0plBCSuyMQhV7FflKLAeLW4JwM3lljPEDXu%2FNyRYYu8sctr%2B4K6cjoghU%2FGgcPbrhVH%2B8xcycOlf90ivHn3iIBnAUw4GZFpBpuSqreQPGWup5G0fOxtcuVCPRJUzysY1C7z94cNUyCwdh950DEil7laY6LDi3PumSwDjxYbBAZWdjQCZeGOfk01olhbd2EzWtTQ0zhgxa8sxbSx8iAF4B6jZanNXmawGTD3oXIR%2FUBJfHqNgbdoZ%2B9%2BoNq4wnPqru77vMYFYzSHPFy%2B9M38L6slYLHQSz3xJhSjORNoh95KcQ1i9TaKykrIPH5Pyyu5qOQvVD9XHP7kmVcQMvxoCU6iBPzi%2BofOEzeHGbl35D%2BKbLZ4EDpjOLhF%2FLqLT6RuNbsJ9S6POZEXOUvqwIyxCqwxUrT%2FqUQNCODfkdS5GsfecYj%2BwIV1Lg2g1HHXR8l7xOaxRZczRmYZ1kYeX03BBgiZVSVU4kAxTKPG%2Bd%2By7GxDdU9gpvMPhs1N%2BNg52b%2FOwHmInrMMuLiL4GOqUBSCor6QLFacyCr2ht1V4j3H8hsmain74mY76y4DEWDO%2BAUYXYeHQn5ogWXfxcZVWc2s%2BHZzja89BTI1SVmuj4T50Wyru8jW6C8kp1K7dvTVUygPgG81pkBSopH%2Fs1ToT2vv2F94datf8%2B559JyjYxNZZxnsrGEijlvA8LnfOyP22FT2IhRhYj0rQYR8p5qIuTiRuJnit3WkdjLSMQaGfywnivaa9Y&X-Amz-Signature=e179fac55812a4861cb4d7b974586fb97d05275438eb6ba29e62150c55b95b13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
