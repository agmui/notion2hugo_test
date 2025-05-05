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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=5040c8eb4418a4d587c4a3f3ed2148c0faa423f0e048835d26f2747fe3fb9401&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=c0a932c1cfac56ceb60f13d9b28b6b4ea7b492bfe292852240fdcb0263b6832f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
