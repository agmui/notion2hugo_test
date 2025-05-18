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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656P2VP7F%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm%2BEJ3O6HLP7udE5Dapmljzlqwem0FofS15uhZxEPMLQIgbZHY%2BT2SqGK3xIPYZI9Qj6zhLwxkLMXOimhmLARGLMIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKTBhThfgVUsE7zeJyrcA2i4ahoq98tXi%2FxU8YFAbOlJ2T3yC10vEVaZsGExktR7UPJHASDTg8Ih9wVJSssFwcTdoYcS86uvha3ePgFNxSZoKD6%2Fbjtwr46X5XJ%2F%2FlB3XnMoFqw8WsHvM6cHAvnEUeRtyPHNVtu9O%2BC%2FhvIpkcBXdmCpEie16WTgVUQPNM2iMwU5QpGlAvADoAabXC71WaaqcClZivd15d%2FmsMWcvB4w0hqFbEbSyBd6rlPaSLeZiRbJ4sPxQUifS%2Fe6W%2F3T5KP7erVt2lJQFMGb3JxdPHSE7%2F8fVZyXtz3QdQscQzL4%2FR8yTBBm89enYJ8k31RcXR2teCMjaFgZ7yMaSS3r2JJKuTGlQR5dK1BJ1JczWXxNsrAbuM7GtXfi%2F5Rc9gqD1PTSdlFyA68PAT7dpPP7V%2B7qYvOBfgmTFetPZMCxbou5dZKoB8kxCpRvkUI9Iy1QwwyvPKJpiEX2qCAPQ3QpXw1bVn6Y7jRTphYmK0pKfYODqMbXc%2BXfOJkK%2FvwcgxnNT3cz7GkYvuf7rutXf6qgd9AWq0UUifc7iEeFipQmQ7rLV5W2yFmZ2IxFeFB3dz3wVOV0YPL9V%2B%2B9aBOjoAMHVPsG1KBmJbtJ4b8AVaif0erUu72S0lGi7v%2BRlW2eMODAqMEGOqUBsJQYR5MinTadSJax%2FD758RHet9vwKcJcbcDVpwzFPMMRHGhyi2jD1cn6Ph6jWEmZzGM2y8Mtr%2B2Ls4fEJnDsOOoD%2BPhHuqFJuUPP3XM2R0wye5Mu9mf8mZWf8Hu6jgsBYQdAY9wvlO2u5czOUE2Qfsb%2BLS%2B7urrpq51kSaa%2ByB%2BHT%2FM0X%2FJvvgaqDTGruNdiku3s%2BPXCEjth5dhpsBq3AArL%2Fmco&X-Amz-Signature=6a74c992540b6ed6bd7a0cc7df86cf7b0960511e25e223aeefc5cea745c3c9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656P2VP7F%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm%2BEJ3O6HLP7udE5Dapmljzlqwem0FofS15uhZxEPMLQIgbZHY%2BT2SqGK3xIPYZI9Qj6zhLwxkLMXOimhmLARGLMIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKTBhThfgVUsE7zeJyrcA2i4ahoq98tXi%2FxU8YFAbOlJ2T3yC10vEVaZsGExktR7UPJHASDTg8Ih9wVJSssFwcTdoYcS86uvha3ePgFNxSZoKD6%2Fbjtwr46X5XJ%2F%2FlB3XnMoFqw8WsHvM6cHAvnEUeRtyPHNVtu9O%2BC%2FhvIpkcBXdmCpEie16WTgVUQPNM2iMwU5QpGlAvADoAabXC71WaaqcClZivd15d%2FmsMWcvB4w0hqFbEbSyBd6rlPaSLeZiRbJ4sPxQUifS%2Fe6W%2F3T5KP7erVt2lJQFMGb3JxdPHSE7%2F8fVZyXtz3QdQscQzL4%2FR8yTBBm89enYJ8k31RcXR2teCMjaFgZ7yMaSS3r2JJKuTGlQR5dK1BJ1JczWXxNsrAbuM7GtXfi%2F5Rc9gqD1PTSdlFyA68PAT7dpPP7V%2B7qYvOBfgmTFetPZMCxbou5dZKoB8kxCpRvkUI9Iy1QwwyvPKJpiEX2qCAPQ3QpXw1bVn6Y7jRTphYmK0pKfYODqMbXc%2BXfOJkK%2FvwcgxnNT3cz7GkYvuf7rutXf6qgd9AWq0UUifc7iEeFipQmQ7rLV5W2yFmZ2IxFeFB3dz3wVOV0YPL9V%2B%2B9aBOjoAMHVPsG1KBmJbtJ4b8AVaif0erUu72S0lGi7v%2BRlW2eMODAqMEGOqUBsJQYR5MinTadSJax%2FD758RHet9vwKcJcbcDVpwzFPMMRHGhyi2jD1cn6Ph6jWEmZzGM2y8Mtr%2B2Ls4fEJnDsOOoD%2BPhHuqFJuUPP3XM2R0wye5Mu9mf8mZWf8Hu6jgsBYQdAY9wvlO2u5czOUE2Qfsb%2BLS%2B7urrpq51kSaa%2ByB%2BHT%2FM0X%2FJvvgaqDTGruNdiku3s%2BPXCEjth5dhpsBq3AArL%2Fmco&X-Amz-Signature=1aeb5a92a515bfce9bd8b5c56ae33708048602f7287465d297d57cf0bd05e693&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
