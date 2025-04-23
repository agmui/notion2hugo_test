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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFDLKDF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICtw6xyX2wjTd4LMqXyJZjm9mKXNttdZlrA9G98ozmv4AiAR5aEcyelfVPcsh7ycEV%2FU5l5mQuDjssGXJmMh48u3lCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymKENkC8bkK%2F3V%2FeKtwD7Nl4fbJMpxP44GSYEe%2F7KigOlKHE8TtTMybAqgiFsQZm9ZIT0tHZZm%2FRjtjWA7oh%2B2KIwGo%2FNfQH2Y%2FZvDT4cDeDMO4jj7TtCChRn0fL8l6vYyaVYOazTDboheLbyhVOxHabHyEtVaZpEVhNVj1JR%2BmpV9y5RqT2LPiqIm%2F3bM1pu4S1kvZbwNwXYONDSzkjvdpr%2B%2BVeE1fA1LOBJi25Cg5LfVloGyUxYg2KX5WWuS39bGpGjTFOzkt4yrsmeF5kWKqODVGwTp4cpx9voOV4%2FSKnIPrahH1N4s%2FHx6EY31qoddOLN3oGYWUcDAnJAASOudkUH%2BHKcJe%2FGK7uFiZvjFKP5GySvgwH0xVWbs%2BGS1BCqqs6yZQ%2F9yTJmuaG0cItffzoG%2Fn8MyILF8kZOFsOWxcZxvFb1%2BRxntXcNdZ%2FYxWUsEovMhaQHx4tas00bDF%2FCJQ7%2FAfowdoCnMAo3AMfp%2FcAtSMRk%2FzvcREjUuiwnaaFR5pvFkrq%2FodSmmzriLX5tuRPmO4C4zIblYiVFKFj5hIITd0T06K9PkMxf9V9fIPXynoeC29%2F73nZ%2F%2FA8yvJUhKUvaAyAN09O1U6nFp4b%2F83kvktmqUqHSyrXGcxMFWgMkaCzZu7J3gU19hQw8%2FKgwAY6pgHArmcLeZ0oaeAC2o89l5RCwjI7FDHDT9HsHcZIPfbWtLoT3jTa4EbCne5DGPyeHaNtun90uD7QERl3bDsNC5kIL5mbB%2B%2BwN4r9lbpc7TOmpKTw4CvXeDYp8Nt0RtzdTiZCetIZd7t7LjkQO4hl3vRJ88tHz%2BkXHiYljnT2%2BRZYXRT9A2OnHrQOtTTCuWuOEBDEddzEVdWX49Dn%2FJvbFMUFwUQQE2xE&X-Amz-Signature=844baee25358d4319426dfca7dc9422f5c7a521b563a429fd682a47592751152&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFDLKDF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICtw6xyX2wjTd4LMqXyJZjm9mKXNttdZlrA9G98ozmv4AiAR5aEcyelfVPcsh7ycEV%2FU5l5mQuDjssGXJmMh48u3lCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymKENkC8bkK%2F3V%2FeKtwD7Nl4fbJMpxP44GSYEe%2F7KigOlKHE8TtTMybAqgiFsQZm9ZIT0tHZZm%2FRjtjWA7oh%2B2KIwGo%2FNfQH2Y%2FZvDT4cDeDMO4jj7TtCChRn0fL8l6vYyaVYOazTDboheLbyhVOxHabHyEtVaZpEVhNVj1JR%2BmpV9y5RqT2LPiqIm%2F3bM1pu4S1kvZbwNwXYONDSzkjvdpr%2B%2BVeE1fA1LOBJi25Cg5LfVloGyUxYg2KX5WWuS39bGpGjTFOzkt4yrsmeF5kWKqODVGwTp4cpx9voOV4%2FSKnIPrahH1N4s%2FHx6EY31qoddOLN3oGYWUcDAnJAASOudkUH%2BHKcJe%2FGK7uFiZvjFKP5GySvgwH0xVWbs%2BGS1BCqqs6yZQ%2F9yTJmuaG0cItffzoG%2Fn8MyILF8kZOFsOWxcZxvFb1%2BRxntXcNdZ%2FYxWUsEovMhaQHx4tas00bDF%2FCJQ7%2FAfowdoCnMAo3AMfp%2FcAtSMRk%2FzvcREjUuiwnaaFR5pvFkrq%2FodSmmzriLX5tuRPmO4C4zIblYiVFKFj5hIITd0T06K9PkMxf9V9fIPXynoeC29%2F73nZ%2F%2FA8yvJUhKUvaAyAN09O1U6nFp4b%2F83kvktmqUqHSyrXGcxMFWgMkaCzZu7J3gU19hQw8%2FKgwAY6pgHArmcLeZ0oaeAC2o89l5RCwjI7FDHDT9HsHcZIPfbWtLoT3jTa4EbCne5DGPyeHaNtun90uD7QERl3bDsNC5kIL5mbB%2B%2BwN4r9lbpc7TOmpKTw4CvXeDYp8Nt0RtzdTiZCetIZd7t7LjkQO4hl3vRJ88tHz%2BkXHiYljnT2%2BRZYXRT9A2OnHrQOtTTCuWuOEBDEddzEVdWX49Dn%2FJvbFMUFwUQQE2xE&X-Amz-Signature=78cc13e1f9227d456b5462e130fadd02f2980a4d621bb4758b9807b7b408f69a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
