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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNYAVD7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2WfOeBAApLdkV0phH%2FRRTLkBnfZZu7xY0BztmzT4qCwIgLhys9fO6c1dMnsoM186pCdSw3BHp6sYoDWho4i%2BB58AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy380lEgiEzObOZsSrcA6HX%2B%2Fv0CfsWincArRIBcNVy1q%2B1VhgsoDN9XJ8yth4dTQQdRIjHhQ7dzAusj%2Foa5HI0e5DrwYYfIjtee9BTWacAR5V4gGnWdcMnpfC%2BVyWuH44E4JnNql9zyUw%2F7i0Cckz0EjOaAJNYf573Gb1%2B49HfNmd%2FkMXAb9s%2Fdu3FcGNBqD%2FbjYxFZBQsB0pHa5f%2FGP2LGU6SZbUCEIFG1C5p71j1QODKwc2mdlBw9rpjoiOJJ1ZOvbOXf3fZF3BG6%2BtJVryp1zGpPNXZfysirsLNt52j%2FC8fzRYsCoLvO5xkoJ6riSbeyX5T3NoTLuna%2F2R5M76n1yp0bmNC2EqAfcS%2BbxcrrlJ8aMzGgZbjZJBTTZcrJsQ5PreMqF%2F7HObOgBjRuHipL3SbO54MQsUlHbUQzdr3OPDomkASS5fhHpnIufoFUK5AiYAA4W6E6WWmoE0S7YL7Elg2qGP0A9Vt6%2FfaJMCZ047sTMhczOC8MY9v2e5fUKYkovqwNb86AYM18kRRCcy0AMfNvKir3Nja7YWUG1kD7Fjg11k3I4Yub7YPYRsNgaUiLJ90RJckQCcdUJCj%2BM6bWDsc9hkaDD%2FxB0InCvq8tJBudV1IQ2uNQTQJEafPgRMYhY2BmhcFj4Y8MPXXjMAGOqUBlYiWTUaugA6GyETROdJl3UUe8VgI4CizXq00p5u%2BTNAQ6nG7aCG8%2FefMIM1aWldkUq%2FXDqeGzRu1f3CNC9iL%2BXiCWxlBiuaujSEE3WGh6ftHC3HjBaoDOkWORzwBXnxiWFxWr0IDB5iYBnKS%2BO5DC54V2D%2FavqNVrgXNyuj6%2Bf1zDTAknFYNKQlXzUaqAjfa6SksmgfZs49e3D3dlTLX1xf3NN1D&X-Amz-Signature=164e0a3135fa49cb43e0e47a149ff576e33f8ef4ec92f3e71cbf124d202357df&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNYAVD7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2WfOeBAApLdkV0phH%2FRRTLkBnfZZu7xY0BztmzT4qCwIgLhys9fO6c1dMnsoM186pCdSw3BHp6sYoDWho4i%2BB58AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy380lEgiEzObOZsSrcA6HX%2B%2Fv0CfsWincArRIBcNVy1q%2B1VhgsoDN9XJ8yth4dTQQdRIjHhQ7dzAusj%2Foa5HI0e5DrwYYfIjtee9BTWacAR5V4gGnWdcMnpfC%2BVyWuH44E4JnNql9zyUw%2F7i0Cckz0EjOaAJNYf573Gb1%2B49HfNmd%2FkMXAb9s%2Fdu3FcGNBqD%2FbjYxFZBQsB0pHa5f%2FGP2LGU6SZbUCEIFG1C5p71j1QODKwc2mdlBw9rpjoiOJJ1ZOvbOXf3fZF3BG6%2BtJVryp1zGpPNXZfysirsLNt52j%2FC8fzRYsCoLvO5xkoJ6riSbeyX5T3NoTLuna%2F2R5M76n1yp0bmNC2EqAfcS%2BbxcrrlJ8aMzGgZbjZJBTTZcrJsQ5PreMqF%2F7HObOgBjRuHipL3SbO54MQsUlHbUQzdr3OPDomkASS5fhHpnIufoFUK5AiYAA4W6E6WWmoE0S7YL7Elg2qGP0A9Vt6%2FfaJMCZ047sTMhczOC8MY9v2e5fUKYkovqwNb86AYM18kRRCcy0AMfNvKir3Nja7YWUG1kD7Fjg11k3I4Yub7YPYRsNgaUiLJ90RJckQCcdUJCj%2BM6bWDsc9hkaDD%2FxB0InCvq8tJBudV1IQ2uNQTQJEafPgRMYhY2BmhcFj4Y8MPXXjMAGOqUBlYiWTUaugA6GyETROdJl3UUe8VgI4CizXq00p5u%2BTNAQ6nG7aCG8%2FefMIM1aWldkUq%2FXDqeGzRu1f3CNC9iL%2BXiCWxlBiuaujSEE3WGh6ftHC3HjBaoDOkWORzwBXnxiWFxWr0IDB5iYBnKS%2BO5DC54V2D%2FavqNVrgXNyuj6%2Bf1zDTAknFYNKQlXzUaqAjfa6SksmgfZs49e3D3dlTLX1xf3NN1D&X-Amz-Signature=63d42d4598ec6744aea751b48a7b3c83892faab550a5d8e9ab68e56c41f78a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
