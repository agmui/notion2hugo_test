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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=696b89f9cec1ef22467ac71eccc67a2343beab98ac326ed4249fcf79d69a576a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=cfebfb5a4aeba54d9ec35b8c08f714b13e23c4585e06065e6b4de6d9637a6b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
