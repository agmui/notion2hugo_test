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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDXD5S2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFakoNVPCJs0WAe9Lu%2FL%2B2XnuyjljvhXZXW89t197Vi5AiEAiHJUiXHWEcKIVttBV3Xu%2FErmDC9uxfPRh3Wzl0J6T9kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIQjxUdjoyNb5aSKSrcA1ZZ6BlRIlYL%2FgqdP8aOraudkq3J8w1srLhGMcTyMCEwzkfn9k9GZBApqmsuAiinJEl3W%2F%2FT9nDA2ypQQHT7o5%2FMkSgpVci%2BncllacoqUMtfHXMDFYNQleAm%2Bv8tFeHhboj7v1WmnEcXZYsXKMzCcSKd24hPxWMoyodvjT3YpH1EYYW5gKPwDfalhPrwq7xGHnodeJ2WrWgOQNRJ5n%2FHzV3LGueukZdpyJPfLnvyE8lMZud%2BZuGYBbhACUz8rQYONnfAMWLdnQfw%2BN2pNNCNmGeB7ua0%2Bcii%2B%2BUDbp7NinJCOD%2FLqu03k6Qq4jshbc7nPt7W12l0Tardsz9V1aokLCCDr%2B7ZxyMuLvl7nCsnmG91Gle6SbIKVyWJBEzVIkLaTvU2lhgK3kuB1orekQD1yFyD3F7BtUyD%2BUSp2D9zsrOv0Uzq37pZvfdKhO2tga3W2r3XQUso%2FLD1%2B%2FXmrmSm3J8SPXgVAjp10z%2BhzFyvvCy2wSVQ%2Bo%2FVoBSMIznamGP4zuVFjMAWicbQoDkujR%2B0UiiXSauR%2BEooYxiWIDc85ZH3PY5EvsEInBTo4Fc%2Fs2s%2F4djHAYzp2ulZlBQ%2FObvhDt8WhsgCddy4O5bbduO82QQOGifqAw%2BmZxgytYNEMKSYn70GOqUBEhAAJ7zALFaYpBbYmP8gxZQoLaAX1vELJATCjvR904pa4P0f2fUHUcgUHMdhj4HtRacz1V5226Kpmw9Z6ciDSlLqGuzIVusem6nK%2FDltjCDqFgyLiXQSDXRcGCHKnhzJQeBU%2BCsnOSZwb58%2B9gl%2FjEXvA99xQDjQ15FACS24Bi5HBul1GSku%2FC%2FEyxOx9MTfmhnRSmygWW8rG5p5JhHynlDTeouX&X-Amz-Signature=797ea5cf5091ed68174bcc248b1e188393a92a72bd40a0c04c6b246579988deb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDXD5S2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFakoNVPCJs0WAe9Lu%2FL%2B2XnuyjljvhXZXW89t197Vi5AiEAiHJUiXHWEcKIVttBV3Xu%2FErmDC9uxfPRh3Wzl0J6T9kqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIQjxUdjoyNb5aSKSrcA1ZZ6BlRIlYL%2FgqdP8aOraudkq3J8w1srLhGMcTyMCEwzkfn9k9GZBApqmsuAiinJEl3W%2F%2FT9nDA2ypQQHT7o5%2FMkSgpVci%2BncllacoqUMtfHXMDFYNQleAm%2Bv8tFeHhboj7v1WmnEcXZYsXKMzCcSKd24hPxWMoyodvjT3YpH1EYYW5gKPwDfalhPrwq7xGHnodeJ2WrWgOQNRJ5n%2FHzV3LGueukZdpyJPfLnvyE8lMZud%2BZuGYBbhACUz8rQYONnfAMWLdnQfw%2BN2pNNCNmGeB7ua0%2Bcii%2B%2BUDbp7NinJCOD%2FLqu03k6Qq4jshbc7nPt7W12l0Tardsz9V1aokLCCDr%2B7ZxyMuLvl7nCsnmG91Gle6SbIKVyWJBEzVIkLaTvU2lhgK3kuB1orekQD1yFyD3F7BtUyD%2BUSp2D9zsrOv0Uzq37pZvfdKhO2tga3W2r3XQUso%2FLD1%2B%2FXmrmSm3J8SPXgVAjp10z%2BhzFyvvCy2wSVQ%2Bo%2FVoBSMIznamGP4zuVFjMAWicbQoDkujR%2B0UiiXSauR%2BEooYxiWIDc85ZH3PY5EvsEInBTo4Fc%2Fs2s%2F4djHAYzp2ulZlBQ%2FObvhDt8WhsgCddy4O5bbduO82QQOGifqAw%2BmZxgytYNEMKSYn70GOqUBEhAAJ7zALFaYpBbYmP8gxZQoLaAX1vELJATCjvR904pa4P0f2fUHUcgUHMdhj4HtRacz1V5226Kpmw9Z6ciDSlLqGuzIVusem6nK%2FDltjCDqFgyLiXQSDXRcGCHKnhzJQeBU%2BCsnOSZwb58%2B9gl%2FjEXvA99xQDjQ15FACS24Bi5HBul1GSku%2FC%2FEyxOx9MTfmhnRSmygWW8rG5p5JhHynlDTeouX&X-Amz-Signature=baacf3bf30f041e1e7fb01e30593ebb39a3d3f15dcef9e8f1874be96a6db47cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
