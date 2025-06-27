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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOLFJ6E2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICviFrDqmaX1e5XnpV3jZSVm8hzv4Op0NGtvixJG772nAiEAildzw%2Bc9ZzD45FOYkBHFRtdmvLiiIbC6LKbcG9YJ4Csq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPYCbNnTQlcmfICR%2BCrcA4eAvFUScxmm6JQR9Bt8QD4Yf2dldHDkiXWnSA%2BRXx1cVR7Zgq4yghdzXW92wyGueyQ0yrKe5ff7GA0jGmX7KWttGB629F8tKp6It9I0vouQIhUwxt0K8EOX1PxAu3K2TGBvflvm%2F8JfIntZmjDrrCNR%2F5LFS58Y2Y93EICbj6cyfzU4rtCgRiFujz061UsBIZ3%2FTji%2FQQzCevu9i5hOE9vswmqN%2Bjx6nfQ3t6%2Bz8Z2Yaz9U6aYpbJIa%2B2GwOXYdklM1DmLkcFbckhJOeI1CTwOTWeIGompmgdm88HnYntgru3nMSheVK41eZd4U6okDYIsP7xfsSttnswfhgUg755gUOTw5ESZyjopNsp6ErSB80DpdnfYAGwakMDrfL9Nyll9zTy7fDa5p5WDCBBs8N5X%2Fank9t3TNQRh%2F4%2F%2BqAuaVVveX0CZ06Y1x%2Bdta7vnWgFOqVpyGrX6U2DR%2Bng0gzySvXZqGyTJeFtAcswPbX2B5WrKdlBgqPL%2BcrRGfYDX9XxyZu7XnH7zzgaGkx70V8BZJ7nBin%2FzgnWdhOUjGCwhcRsp%2BePfWZmyzg%2FPsDoq2wOPwGkja5iui4K7Yaw0SKSAHNZgF4jOHO%2Bn2aC7y4Vv4wTS4IDYjuP1pW7%2FuMPml%2BsIGOqUB9VeJ2Q8fxyQVZ7UOxY02G9xNY7RFxdlN%2FJGqDMLhXE0ruF2g2PlRYiTnFomX55VJ3voFi5GbVYA3RZyxERoYdnbyVSGPm99TOIKmrIBlrp6YDPq20YIqzZFtOlgrMN5hsr57MUS8bHRCvpkUbFtbx2ILsuZTSZs7swi9KOPnvHHsOf0MrdOLk4YBtPxXqUL%2FNqK0fvOeoS942b4cTZP8VsagrQjw&X-Amz-Signature=c03cbc373ef5c257a1e953ccdfd599d9567fc63aae5ca9acced1f402e72f9110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOLFJ6E2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICviFrDqmaX1e5XnpV3jZSVm8hzv4Op0NGtvixJG772nAiEAildzw%2Bc9ZzD45FOYkBHFRtdmvLiiIbC6LKbcG9YJ4Csq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPYCbNnTQlcmfICR%2BCrcA4eAvFUScxmm6JQR9Bt8QD4Yf2dldHDkiXWnSA%2BRXx1cVR7Zgq4yghdzXW92wyGueyQ0yrKe5ff7GA0jGmX7KWttGB629F8tKp6It9I0vouQIhUwxt0K8EOX1PxAu3K2TGBvflvm%2F8JfIntZmjDrrCNR%2F5LFS58Y2Y93EICbj6cyfzU4rtCgRiFujz061UsBIZ3%2FTji%2FQQzCevu9i5hOE9vswmqN%2Bjx6nfQ3t6%2Bz8Z2Yaz9U6aYpbJIa%2B2GwOXYdklM1DmLkcFbckhJOeI1CTwOTWeIGompmgdm88HnYntgru3nMSheVK41eZd4U6okDYIsP7xfsSttnswfhgUg755gUOTw5ESZyjopNsp6ErSB80DpdnfYAGwakMDrfL9Nyll9zTy7fDa5p5WDCBBs8N5X%2Fank9t3TNQRh%2F4%2F%2BqAuaVVveX0CZ06Y1x%2Bdta7vnWgFOqVpyGrX6U2DR%2Bng0gzySvXZqGyTJeFtAcswPbX2B5WrKdlBgqPL%2BcrRGfYDX9XxyZu7XnH7zzgaGkx70V8BZJ7nBin%2FzgnWdhOUjGCwhcRsp%2BePfWZmyzg%2FPsDoq2wOPwGkja5iui4K7Yaw0SKSAHNZgF4jOHO%2Bn2aC7y4Vv4wTS4IDYjuP1pW7%2FuMPml%2BsIGOqUB9VeJ2Q8fxyQVZ7UOxY02G9xNY7RFxdlN%2FJGqDMLhXE0ruF2g2PlRYiTnFomX55VJ3voFi5GbVYA3RZyxERoYdnbyVSGPm99TOIKmrIBlrp6YDPq20YIqzZFtOlgrMN5hsr57MUS8bHRCvpkUbFtbx2ILsuZTSZs7swi9KOPnvHHsOf0MrdOLk4YBtPxXqUL%2FNqK0fvOeoS942b4cTZP8VsagrQjw&X-Amz-Signature=7224747ca65c4fb5639d18c134b9efc7a1a789e31c7059b26c65a3eaf8dffdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
