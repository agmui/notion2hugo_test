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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6JHL6D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBVjNcoGRGTFtuNXqtLC2D68WrkgfUnma3Z4F9FmX6ngAiEAme6l6RoZ4bNRrQFMQMLUqDQrClfNU5h4y7JlXp57jhwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbAEuU5cnpKNoAeayrcA8lrO4Ftl6eKf8FH%2BXlHnMWfs4XQLKX0g828T5pnihifhoxIun5ZFKbQhCFAe9UvSwycsFZSoFLKS%2FqavWuOG42A2OlLogXzjK9G07pRh0uSyo8sPenOn6kKlitrNaXc5KGkCPbTbm4KOcsjXOvPnPP8UFEpq16fL7WihgFbdjYw7%2FHjbPfRGnyiSSZZKCO2y4nUUi6%2FzVxJXRr0Hzj1PwgIZLu34qDksc4QwX6i1LD5TkcrLSBKSnCRpaL%2ByDW574uqfHwj7yAJsXogD%2BRnZsF45MkcBO1tsvZoVOTzttAYtMgDD%2BTYDTr38KHlmruLWH0Puavcrmizy2IVEWZO%2BVJI1Rhkz2f2p%2BLgRUT2eZKKs2pYuCVKqYkKUtiZmvW68bVRwCWsw1HxKGy9Z%2FpeqlYaTuWmwHx1Eh%2Brh3zUXo1LMgqj2wtmXpvJgF5Yr4evT7pG1ZC5FB70B21DDD5SqD%2BGDbRlRmBVejOLDfxqkpWyBsij0vlJ7OJzq%2BGBXdV8Zz5iMIQjXvUvBuy96dLnn3Q1mR0bmOvTT8mek1bnLi3taUufhSqKoY4nMMgBIpzLF7KQeDjSi3iXWf2vt14jqo9Rn7sG3EomC47IfyEmPVvj43OxwF25epd%2BjBn7MI2G774GOqUB9wEnSVLBy1OjTsT4ev1gdW8bGIMAY18A2sQRGx4VnrdnFEqJTJJIo6DD2%2B8mAN9B6Z5HYdF02yUc4x7WB%2BO38teuLnWE5l4e0M5RH4UjovLFZzybqDkFyz2fXfMoBncvG%2BmDMPwXcuLbok4JFWq%2BgeE6WT7%2BH%2Bt14KqD3dJ3I71SS9Icy6otkUiQYfOBJ4kH84RhY9jxIik1nSs4sE%2B4bFnlreLD&X-Amz-Signature=bc3328cecefeec0d374c901cc063cdb7273c73efcc4f8bc6e176b14d608e3261&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6JHL6D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBVjNcoGRGTFtuNXqtLC2D68WrkgfUnma3Z4F9FmX6ngAiEAme6l6RoZ4bNRrQFMQMLUqDQrClfNU5h4y7JlXp57jhwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbAEuU5cnpKNoAeayrcA8lrO4Ftl6eKf8FH%2BXlHnMWfs4XQLKX0g828T5pnihifhoxIun5ZFKbQhCFAe9UvSwycsFZSoFLKS%2FqavWuOG42A2OlLogXzjK9G07pRh0uSyo8sPenOn6kKlitrNaXc5KGkCPbTbm4KOcsjXOvPnPP8UFEpq16fL7WihgFbdjYw7%2FHjbPfRGnyiSSZZKCO2y4nUUi6%2FzVxJXRr0Hzj1PwgIZLu34qDksc4QwX6i1LD5TkcrLSBKSnCRpaL%2ByDW574uqfHwj7yAJsXogD%2BRnZsF45MkcBO1tsvZoVOTzttAYtMgDD%2BTYDTr38KHlmruLWH0Puavcrmizy2IVEWZO%2BVJI1Rhkz2f2p%2BLgRUT2eZKKs2pYuCVKqYkKUtiZmvW68bVRwCWsw1HxKGy9Z%2FpeqlYaTuWmwHx1Eh%2Brh3zUXo1LMgqj2wtmXpvJgF5Yr4evT7pG1ZC5FB70B21DDD5SqD%2BGDbRlRmBVejOLDfxqkpWyBsij0vlJ7OJzq%2BGBXdV8Zz5iMIQjXvUvBuy96dLnn3Q1mR0bmOvTT8mek1bnLi3taUufhSqKoY4nMMgBIpzLF7KQeDjSi3iXWf2vt14jqo9Rn7sG3EomC47IfyEmPVvj43OxwF25epd%2BjBn7MI2G774GOqUB9wEnSVLBy1OjTsT4ev1gdW8bGIMAY18A2sQRGx4VnrdnFEqJTJJIo6DD2%2B8mAN9B6Z5HYdF02yUc4x7WB%2BO38teuLnWE5l4e0M5RH4UjovLFZzybqDkFyz2fXfMoBncvG%2BmDMPwXcuLbok4JFWq%2BgeE6WT7%2BH%2Bt14KqD3dJ3I71SS9Icy6otkUiQYfOBJ4kH84RhY9jxIik1nSs4sE%2B4bFnlreLD&X-Amz-Signature=3eb5914127db5702b4dff7436a54ee9a1f57f3c8ef185fc3d1eb8111ede0bc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
