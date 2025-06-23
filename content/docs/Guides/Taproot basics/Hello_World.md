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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WONM3K2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFffbVSKP2qs13L0Zlg7VM%2FJW7x1ZxzwNZvx%2FUTr9kB4AiEAtAPHmfQLGmVcwek5TtG7ndxcmYAbqOYm1gIoCYwN%2FkAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOtrwbcB5we2DPL5uircA1xc0kbz%2BahG9loGZpqMBrZkHF8ej11CTqCRb8G1n3t9wxAlcD2RWV4nSnJNDkQWrmqWV1Ps2GzSVnH8QPIbmtT4baC28nWdbGKewHAx1hEN4N7KUIa74coT7DicigJpNTD7RfSkuhd7PV57xewFbuGmVuS4bz3tbZy2H5v2PCQ7B4MpY5TGPqm5u7wEeX687anIkutoXEwm4CP0BoUp0AEfCaK3pu6EX3VTmlWVPvKM%2Fc7QZhyqEiRlaC50Q5bYx7jAsbmmfBATqHwTB3s7zbt3%2BOtfMuovOD%2FrFw510XQfn2MPjw2hYt71cbATlzyOfLmLRT9UPhgi0R4VrrcWs0rY1VuF%2B6w3%2FE%2FLI7hNLXBAKIfbRT9bzQh9HoSvXnW7wyI98EcF6IEZYcm371iTbadCHxovd%2BIOadfPbRi9fKutW6As5s49sGsoLa%2FhDBUK1x6L28J4Ql00iBzmXRtmko4H8%2BqejrmvfRmzg%2BkzZrH6uoAJJNPbh1bQ%2Bf%2FrcqvnMw4jazpWUMXd5usO1npFXgtrFmhtbzNADPg5Ok2XOhGte8Dt9KKbXFXczzub%2FH05FpItU2qtdaMaYRofttaQq5G39Zid8%2Frc1gaa046OA2Ch8BOPdtKjqMWmW0KsMOeH5cIGOqUBttu1zaTIuKv32EDfPievD1Rh9bVpMNU1jsYLiT9AsmP3O3c7AiskA6m9LuSUbo1naqfvJwTBjn5%2Fg14pLlqbo%2B7RGG5r11pTVFDdQfNLxQAn%2BX1OrgkBKG2kfMvB1B1VQTRuNSD8S3m3rWk0cS21wxY2qCDl5PIK%2Bxww%2BcLB5Mb2ZKDLY3gMGe%2BgCRVxR%2FTi3W0OkpghWXZpLiQfRFSmS%2BTvzrH%2F&X-Amz-Signature=97839795157a2518e67d280391fcc744c4eafe02be8003307f493d4a195654ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WONM3K2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFffbVSKP2qs13L0Zlg7VM%2FJW7x1ZxzwNZvx%2FUTr9kB4AiEAtAPHmfQLGmVcwek5TtG7ndxcmYAbqOYm1gIoCYwN%2FkAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOtrwbcB5we2DPL5uircA1xc0kbz%2BahG9loGZpqMBrZkHF8ej11CTqCRb8G1n3t9wxAlcD2RWV4nSnJNDkQWrmqWV1Ps2GzSVnH8QPIbmtT4baC28nWdbGKewHAx1hEN4N7KUIa74coT7DicigJpNTD7RfSkuhd7PV57xewFbuGmVuS4bz3tbZy2H5v2PCQ7B4MpY5TGPqm5u7wEeX687anIkutoXEwm4CP0BoUp0AEfCaK3pu6EX3VTmlWVPvKM%2Fc7QZhyqEiRlaC50Q5bYx7jAsbmmfBATqHwTB3s7zbt3%2BOtfMuovOD%2FrFw510XQfn2MPjw2hYt71cbATlzyOfLmLRT9UPhgi0R4VrrcWs0rY1VuF%2B6w3%2FE%2FLI7hNLXBAKIfbRT9bzQh9HoSvXnW7wyI98EcF6IEZYcm371iTbadCHxovd%2BIOadfPbRi9fKutW6As5s49sGsoLa%2FhDBUK1x6L28J4Ql00iBzmXRtmko4H8%2BqejrmvfRmzg%2BkzZrH6uoAJJNPbh1bQ%2Bf%2FrcqvnMw4jazpWUMXd5usO1npFXgtrFmhtbzNADPg5Ok2XOhGte8Dt9KKbXFXczzub%2FH05FpItU2qtdaMaYRofttaQq5G39Zid8%2Frc1gaa046OA2Ch8BOPdtKjqMWmW0KsMOeH5cIGOqUBttu1zaTIuKv32EDfPievD1Rh9bVpMNU1jsYLiT9AsmP3O3c7AiskA6m9LuSUbo1naqfvJwTBjn5%2Fg14pLlqbo%2B7RGG5r11pTVFDdQfNLxQAn%2BX1OrgkBKG2kfMvB1B1VQTRuNSD8S3m3rWk0cS21wxY2qCDl5PIK%2Bxww%2BcLB5Mb2ZKDLY3gMGe%2BgCRVxR%2FTi3W0OkpghWXZpLiQfRFSmS%2BTvzrH%2F&X-Amz-Signature=8bd06f8e0e2bbe2336c6fe3ff9d357b74b9e8b3de2f1a19d73ebd19d75a4800f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
