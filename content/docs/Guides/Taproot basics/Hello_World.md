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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ESTUVG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9tMKhiiSbdUpBaR2xN9m%2B4K6yW%2F23RbJ1jzDrUp5KQIhALOzcsBqDPL0g134wlmcVgzEmcIwncEhIhCHRLUaAU2kKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2B06jo%2BtVFjkw2goq3AMleX%2FT%2FE9uK%2Bo5%2FZkYUnnhJPXWAvPx6wLYWGYrwmFRBCDKT6Zrjvx6ijOph8qw5MUvnqNwAYs%2Fods9T7SKCwJiSW%2FgL%2BxSTOs0sIJZMYeRC03LZn9d72KRsr5yVNkoRHAU9ULECYTdC9PlKA3yXImSpWT%2BSvzr%2B76to4F029VIgZIyFU7sBi0UYz6Sjgdijc2DjTCfyDUUhFm8r4ssRzy8hFGu%2B7KOOUBeu7bYWEr%2Fk6VcmcxEAhG4Ou9yVWpQY2d9%2Fnu2VexUaaFNFsd%2Bu6PVRUOKN%2FmroFcAryGOA%2BSFbgwNMN36MhWp2vphcKbMicYVqfMLM6JUcEQfLoS%2Fz6kl3vA%2FHhwp9xPyB3zU5Yxpjus%2B8W9NHWTKCE8dh884RU0JQqBNfsHzfD1BCG5EzkDC8wNxblS%2FOlIeT3E2r6dDB5cjfURLLc3wzjLCnTpJov81bjtQcf%2BKZr617dypnr4ECK%2FxjIN7owIx8HB4H%2Bg7vVbJJM48kfEPb4luu8qbGepsVY5EwUji0Zs8SOvyP7k7viU8asCi7aTfXBICL9cczTXUHr60iJBJbgtm7gMRwm7a7paOQhTGT9c3ID9TlyoSRPDkxWM0TyxvseAsLPNw4L4e8rYYZo0l1gMTWzDCorjDBjqkAQi0oUTNdP2OSBETL5UUwvMwI6Ug%2FrotTq4lxoTKXzJj1mkJ1m9fXANN%2BAskB86DrlaYJXEFiWAGMaD1AwIcvVUCwZiUIpMKV5e%2B8I2EvxIeUo5nd16L%2FSenWYVdxWCtCDvjz0nKU0zlmizz7DsyQ%2FsO6q8SxSBTHBwwVAp14SJSf0Zjka9AYs6p9WQQp4Yb9dNa701OMcebQe3JKiCkzBquJ7S4&X-Amz-Signature=a62e96b49d8aa35436d48434ad505b471b9f2cff0dafa57474385ccab735ab60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ESTUVG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9tMKhiiSbdUpBaR2xN9m%2B4K6yW%2F23RbJ1jzDrUp5KQIhALOzcsBqDPL0g134wlmcVgzEmcIwncEhIhCHRLUaAU2kKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2B06jo%2BtVFjkw2goq3AMleX%2FT%2FE9uK%2Bo5%2FZkYUnnhJPXWAvPx6wLYWGYrwmFRBCDKT6Zrjvx6ijOph8qw5MUvnqNwAYs%2Fods9T7SKCwJiSW%2FgL%2BxSTOs0sIJZMYeRC03LZn9d72KRsr5yVNkoRHAU9ULECYTdC9PlKA3yXImSpWT%2BSvzr%2B76to4F029VIgZIyFU7sBi0UYz6Sjgdijc2DjTCfyDUUhFm8r4ssRzy8hFGu%2B7KOOUBeu7bYWEr%2Fk6VcmcxEAhG4Ou9yVWpQY2d9%2Fnu2VexUaaFNFsd%2Bu6PVRUOKN%2FmroFcAryGOA%2BSFbgwNMN36MhWp2vphcKbMicYVqfMLM6JUcEQfLoS%2Fz6kl3vA%2FHhwp9xPyB3zU5Yxpjus%2B8W9NHWTKCE8dh884RU0JQqBNfsHzfD1BCG5EzkDC8wNxblS%2FOlIeT3E2r6dDB5cjfURLLc3wzjLCnTpJov81bjtQcf%2BKZr617dypnr4ECK%2FxjIN7owIx8HB4H%2Bg7vVbJJM48kfEPb4luu8qbGepsVY5EwUji0Zs8SOvyP7k7viU8asCi7aTfXBICL9cczTXUHr60iJBJbgtm7gMRwm7a7paOQhTGT9c3ID9TlyoSRPDkxWM0TyxvseAsLPNw4L4e8rYYZo0l1gMTWzDCorjDBjqkAQi0oUTNdP2OSBETL5UUwvMwI6Ug%2FrotTq4lxoTKXzJj1mkJ1m9fXANN%2BAskB86DrlaYJXEFiWAGMaD1AwIcvVUCwZiUIpMKV5e%2B8I2EvxIeUo5nd16L%2FSenWYVdxWCtCDvjz0nKU0zlmizz7DsyQ%2FsO6q8SxSBTHBwwVAp14SJSf0Zjka9AYs6p9WQQp4Yb9dNa701OMcebQe3JKiCkzBquJ7S4&X-Amz-Signature=78b8b9764e37cbe07254f568972838cb9b056f9569c9ee07d3df788f8ab633bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
