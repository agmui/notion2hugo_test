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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHL3TON2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCGH%2FTjxE9AYyhw1D7PUmC6bX5hU69GZLnfHMSiZ2TsmQIhAKCcYwc%2Bsukj2PVe6q6qrrWVqZraFf9AaDEI8gSeebw1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo420H0xJVkIY32mwq3APRvLH8vkWqHPovP%2BhVBkBrTNxTniDSfit2lCvy%2B9MAvscWviTSfFGmIUa8C7qWfUZJLQLjntRQ31XYZ1TvHeLPePEvoa0%2BCKRuIYHltT%2Fb3SmWZW07VP5P%2FxSg6MTS2CIMyVrjds3xgtY5Af8v6XvM5UYDP4dQKD6mNSAt%2BLrC5DC%2BN2cSNX95JujzlAoQNAkqxaCEDt5zqDDKbjtvTNdo8Vqcvz0Z4JjBqLB099vOPqrjHcH6pd3JT69iNQeqMPkW8U9oJCtUv70sTY1e7Zy1aie6IfZDgENu8mpjqI1NOAfovlByw7CcdNIcUaYk25PMGGQm3mJ4uBK92c5Oos4lsIibzD4z9ITXjhp98y5QJ8CdDkQypO4L7S5LxWFR4Smtdu1SaptMSHmoMYAAQdY7XQfvyqFAGpYVuOjtXSvxQHewg%2FlysOZJNZHhiAREcDVssEbN7DU2qDM1oHT929%2B4qWBUsMkdrJlxpQtapOrkrsk77ItaVrgDGe7N6onVqK4GNfUCmHc22WaVZ7iKizi4csTtxHLzCyVU5494U%2FSqXSLIOd9X1Cz9mW9uM6dlb6ojBcs8rhkWvP8%2FopGKcEmVUAKkmq%2BY7EXnvcP1DBtJsMq1onKM1nJ5VpOolzCp2eW%2FBjqkAZiLidYE7XXHguF7z3KIX4QNgb0dZy2tESXoQCH3oQtl%2F%2B3msqxk6m5yYsPMTY4yfrkAmCDlEgk6%2FPUqVTxe0YsdPzaqB%2Bua8k5lb%2ByjJKdQZ6AP6JvVp%2BBkHWvtumbOO0W1U4wzwpUiMNnO08bMFg1Tpcsrikbkkmx3jXG09g36%2BpLOouT4prWb4DOWtIkwpe0ZEhfe%2BXWPxwj1Ca9qe0FyEVb6&X-Amz-Signature=fe8218c9a6f0c5c36dae623f0f568b0776ac23e2683350707fcde0c47c426897&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHL3TON2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCGH%2FTjxE9AYyhw1D7PUmC6bX5hU69GZLnfHMSiZ2TsmQIhAKCcYwc%2Bsukj2PVe6q6qrrWVqZraFf9AaDEI8gSeebw1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo420H0xJVkIY32mwq3APRvLH8vkWqHPovP%2BhVBkBrTNxTniDSfit2lCvy%2B9MAvscWviTSfFGmIUa8C7qWfUZJLQLjntRQ31XYZ1TvHeLPePEvoa0%2BCKRuIYHltT%2Fb3SmWZW07VP5P%2FxSg6MTS2CIMyVrjds3xgtY5Af8v6XvM5UYDP4dQKD6mNSAt%2BLrC5DC%2BN2cSNX95JujzlAoQNAkqxaCEDt5zqDDKbjtvTNdo8Vqcvz0Z4JjBqLB099vOPqrjHcH6pd3JT69iNQeqMPkW8U9oJCtUv70sTY1e7Zy1aie6IfZDgENu8mpjqI1NOAfovlByw7CcdNIcUaYk25PMGGQm3mJ4uBK92c5Oos4lsIibzD4z9ITXjhp98y5QJ8CdDkQypO4L7S5LxWFR4Smtdu1SaptMSHmoMYAAQdY7XQfvyqFAGpYVuOjtXSvxQHewg%2FlysOZJNZHhiAREcDVssEbN7DU2qDM1oHT929%2B4qWBUsMkdrJlxpQtapOrkrsk77ItaVrgDGe7N6onVqK4GNfUCmHc22WaVZ7iKizi4csTtxHLzCyVU5494U%2FSqXSLIOd9X1Cz9mW9uM6dlb6ojBcs8rhkWvP8%2FopGKcEmVUAKkmq%2BY7EXnvcP1DBtJsMq1onKM1nJ5VpOolzCp2eW%2FBjqkAZiLidYE7XXHguF7z3KIX4QNgb0dZy2tESXoQCH3oQtl%2F%2B3msqxk6m5yYsPMTY4yfrkAmCDlEgk6%2FPUqVTxe0YsdPzaqB%2Bua8k5lb%2ByjJKdQZ6AP6JvVp%2BBkHWvtumbOO0W1U4wzwpUiMNnO08bMFg1Tpcsrikbkkmx3jXG09g36%2BpLOouT4prWb4DOWtIkwpe0ZEhfe%2BXWPxwj1Ca9qe0FyEVb6&X-Amz-Signature=f51e3b027f64ba3fb58eaaa1b00605d4202cb38af48b6fcbaa8f2aee6bb8cb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
