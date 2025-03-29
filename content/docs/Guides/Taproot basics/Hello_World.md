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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JM4ONM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCG4VLtRgwgTimLVun97Unz%2FY4ngK09OOLc4xkHDqn5hAIgVJ7d%2B8MEGYeays35OYXisPwmsRQsSGWgvlcTmb6qZNMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGJ%2BsJRwwf7sGvR%2BQyrcA%2FKXjjfu8A0v3qJIT2iz9BjW%2F4uZdIIsuMqLpjxwwKt%2Bql7GRNeesYpTDA4InEBj5vkXV06HaIIOAseUgYTzkT0KUwwgXTgKBAV2pvNuhoTklIOVvg2DSZK%2BzrNEVLcU1k7Zgu4nw%2BHoUmyGyKdURFxo9yt88rw77o1D5r5snJHBBW%2BoJPdTvr%2BYXtbM3FmfTrNBdw3e4G%2BzBIK6cB6ioBiKn0mCV8r0stdZT8gZ%2Ba1MlOgNqGQ2d6g7aFrWTxcfd3tYCyqLG70QbQfC1KKvw%2BPPcCjYkuTzPWfGP81sGcFg%2BFTVDJerF8PbTgZbPoMrI8RginYjOXqULizajBx9UOZ%2FCjazT89PIgP0O2VDRXynWGOJyN1gPZ7kGjXig2lCYWHcJ8D1vLyshaV4rawTDGnxFO%2FDi1WaNte1xhiWnCZg2zbh4CfPpf1MqmMqeLMHV4ZGTfhZUjVHUZI96BYs74sRo58usV1iSWWm4IFpB4Tw2VB8o%2BbFFHdXGlLOeAd%2BLFywYnP2S0tzPcY3jIXR%2FzfTfPX0%2Bfwu1NcCJp7uFBrCxXJFaJ5nv8XV5ieQXCYCiWZkWqFCofETncXYMiYzkHdI%2BoTEYvaJxN%2BThe1JTIyQWeIukzcmBuaw%2B%2BclMISgoL8GOqUBcsFGeBgk41IHnJseFK%2BH24GQ%2F7DT2cyuwDU5CV4wM8eKesPVeo9g2gW7nmDOqD7EQRJQyF7fKPP%2BdFGdJVfJNsrAyuV05gOFFhr9ODz35pMEDSMvHtqyLR42ibHLCfpvrXJUIXhM9116A6FyEEQzYYeVmnJzSySVOL1zacMiipPLnkoiFoliSQ6C450OBusLHk%2FwY3bmYkMEwxniipxDnLWheZl3&X-Amz-Signature=e4314904ba3371ea6f8a7752a934e58af77a925339610ba790e29addec21bc84&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JM4ONM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCG4VLtRgwgTimLVun97Unz%2FY4ngK09OOLc4xkHDqn5hAIgVJ7d%2B8MEGYeays35OYXisPwmsRQsSGWgvlcTmb6qZNMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGJ%2BsJRwwf7sGvR%2BQyrcA%2FKXjjfu8A0v3qJIT2iz9BjW%2F4uZdIIsuMqLpjxwwKt%2Bql7GRNeesYpTDA4InEBj5vkXV06HaIIOAseUgYTzkT0KUwwgXTgKBAV2pvNuhoTklIOVvg2DSZK%2BzrNEVLcU1k7Zgu4nw%2BHoUmyGyKdURFxo9yt88rw77o1D5r5snJHBBW%2BoJPdTvr%2BYXtbM3FmfTrNBdw3e4G%2BzBIK6cB6ioBiKn0mCV8r0stdZT8gZ%2Ba1MlOgNqGQ2d6g7aFrWTxcfd3tYCyqLG70QbQfC1KKvw%2BPPcCjYkuTzPWfGP81sGcFg%2BFTVDJerF8PbTgZbPoMrI8RginYjOXqULizajBx9UOZ%2FCjazT89PIgP0O2VDRXynWGOJyN1gPZ7kGjXig2lCYWHcJ8D1vLyshaV4rawTDGnxFO%2FDi1WaNte1xhiWnCZg2zbh4CfPpf1MqmMqeLMHV4ZGTfhZUjVHUZI96BYs74sRo58usV1iSWWm4IFpB4Tw2VB8o%2BbFFHdXGlLOeAd%2BLFywYnP2S0tzPcY3jIXR%2FzfTfPX0%2Bfwu1NcCJp7uFBrCxXJFaJ5nv8XV5ieQXCYCiWZkWqFCofETncXYMiYzkHdI%2BoTEYvaJxN%2BThe1JTIyQWeIukzcmBuaw%2B%2BclMISgoL8GOqUBcsFGeBgk41IHnJseFK%2BH24GQ%2F7DT2cyuwDU5CV4wM8eKesPVeo9g2gW7nmDOqD7EQRJQyF7fKPP%2BdFGdJVfJNsrAyuV05gOFFhr9ODz35pMEDSMvHtqyLR42ibHLCfpvrXJUIXhM9116A6FyEEQzYYeVmnJzSySVOL1zacMiipPLnkoiFoliSQ6C450OBusLHk%2FwY3bmYkMEwxniipxDnLWheZl3&X-Amz-Signature=3ad159ccdbac7926942a7c45b0e64a99814ddb6552f82017b4bbc77009d60cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
