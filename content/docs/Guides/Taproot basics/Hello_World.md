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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KTIQC5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgElA9x0f%2FbSYilawhVzcoOme3PytViMOGfNKpWB1yBAiAApsrvmJ1G1lU8z76bM%2BAbW%2FBvEO5nSsNtXjWRxV4LoiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa0DzoK%2BmI%2FGhgd3vKtwDhlfw9jhoQRwjs7sdURG5lrM9pmJj3zFhx07qfTW%2BjkapXKJabnIhQTv8YfAhO%2FfbtQW6XToFzHH2F8EeGqEs%2BP4B17hFKruyRY4UBMs2CZX8AtXSIHVnnr9gMno1kAkxTvYlpedl4Hx8YEXRP66BVc0nrc1M9jBPjQ6Bs8XYo%2FYraE1KmWtvmk9o5jCFYHVn2tspwZ%2BxcfnUqO4UG0rmFljCA9vx06Yh6G%2BU9Oyk6BzT90%2FrCFf%2F9ZLC9h2YwSJO3Vknz7%2F%2F8lf4dKP678LuAgoGTq0eI5R%2Bp%2FoOr%2BxmpTrOaK4MW3lWHZJtc7ogIx93pYaGSWlOEDIh6lw1o2YW7FKjY%2FTkBbPJW2mWF2p80Y7Hmyj5Gr1jAGWKKTehrSiTVS8kab1u%2FWrFWiYNS0UhIt8YpnlQ22XypGPvZ85aFHbeRgcOffR8Aw5%2BQcJ%2BAjB4fhwLy0prTwBllgHwxIY2YZXvpmto5wwDGLOC65bGEuvezwvW6iAv%2B9F10X8m7go3YzRcUi4ynIpNSBHmGJlJrbHLlrTGmD1sklLJcckj8wmJAnUICuU%2BOJ4uwUA2lklgjzp1C3psarm6aOOPjPVgMS8NeiCsGacEQMOQRcLGsZ2LcNBoH2gowHkmiu4w1rqEwwY6pgFxoTqvO77Phkrl2N8aEdwxHKSc7RhxLXY0d4k%2FcAx%2F0aIYA7NnbnBhzeBVq%2F4kwM8w4hRV%2B9zJlhYu8BdLpATKFmAO8qANYLH7TBxS%2BuG7M33FaP1mLoCIkcRBvCjLyenD0%2BxgXNtDgLkZ7qmCylONWXh2UxRtksx5vXON56MGmjTrclHjJrci4QgOtmWI9jFKKopku21Kn%2B1Nb63Dc9mV4DESqK0%2F&X-Amz-Signature=be3cc6da7d66fd4c860300e722d4311d6ad6b61dbd569cf8d188487a056081ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KTIQC5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgElA9x0f%2FbSYilawhVzcoOme3PytViMOGfNKpWB1yBAiAApsrvmJ1G1lU8z76bM%2BAbW%2FBvEO5nSsNtXjWRxV4LoiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa0DzoK%2BmI%2FGhgd3vKtwDhlfw9jhoQRwjs7sdURG5lrM9pmJj3zFhx07qfTW%2BjkapXKJabnIhQTv8YfAhO%2FfbtQW6XToFzHH2F8EeGqEs%2BP4B17hFKruyRY4UBMs2CZX8AtXSIHVnnr9gMno1kAkxTvYlpedl4Hx8YEXRP66BVc0nrc1M9jBPjQ6Bs8XYo%2FYraE1KmWtvmk9o5jCFYHVn2tspwZ%2BxcfnUqO4UG0rmFljCA9vx06Yh6G%2BU9Oyk6BzT90%2FrCFf%2F9ZLC9h2YwSJO3Vknz7%2F%2F8lf4dKP678LuAgoGTq0eI5R%2Bp%2FoOr%2BxmpTrOaK4MW3lWHZJtc7ogIx93pYaGSWlOEDIh6lw1o2YW7FKjY%2FTkBbPJW2mWF2p80Y7Hmyj5Gr1jAGWKKTehrSiTVS8kab1u%2FWrFWiYNS0UhIt8YpnlQ22XypGPvZ85aFHbeRgcOffR8Aw5%2BQcJ%2BAjB4fhwLy0prTwBllgHwxIY2YZXvpmto5wwDGLOC65bGEuvezwvW6iAv%2B9F10X8m7go3YzRcUi4ynIpNSBHmGJlJrbHLlrTGmD1sklLJcckj8wmJAnUICuU%2BOJ4uwUA2lklgjzp1C3psarm6aOOPjPVgMS8NeiCsGacEQMOQRcLGsZ2LcNBoH2gowHkmiu4w1rqEwwY6pgFxoTqvO77Phkrl2N8aEdwxHKSc7RhxLXY0d4k%2FcAx%2F0aIYA7NnbnBhzeBVq%2F4kwM8w4hRV%2B9zJlhYu8BdLpATKFmAO8qANYLH7TBxS%2BuG7M33FaP1mLoCIkcRBvCjLyenD0%2BxgXNtDgLkZ7qmCylONWXh2UxRtksx5vXON56MGmjTrclHjJrci4QgOtmWI9jFKKopku21Kn%2B1Nb63Dc9mV4DESqK0%2F&X-Amz-Signature=a3a98c40a1a23f397bd482748940be038a1cd140bd72f21c19aa73f85d537333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
