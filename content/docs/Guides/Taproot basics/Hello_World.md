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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFMRMHO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEzlQNm0APU8c02JuEJMLmuoMd61yBMcMu%2FUgs2vvYztAiB1RAdRwT8VHeUq3LIGBPusbaUb9cM6UtRN8oJfKupkgiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYdEsopdYAWnwk46KtwD%2FS%2Bbc56YGSH9klYp91VwZCaf%2FU1Ou2kaydfhHSoL%2BOGrYRpvxk0jaHjYFnE%2Fdea3c3JHMqE7S0aZVDmlvJHgDlcukSPIYe8EdJVO%2F%2FTE6oMq95CxDGyMdho0Zg5Hbwanz7O6qjfNNwzzlpbEkf4o%2BkHplkPOoAvph%2FNKsM3l1Z4uJyqvKGO62Yi%2Bel5lXCyxjfO4f1MR9QSech2nerEs6Vo7Xi7%2F7ZrlHmcyx3Hgucr5iwzdS7JsirLyid6duOY3t6TlmsxeLr3z4Vj59sfSlJ3%2BT5O11jN29G8gPBrcAHwSuVFvWv%2F4gSW0r1pvXJSDv0IbQgS75WPCSI5Jn8cWA34IHABU0XofItKP82gc66%2BsEr%2BKoefmnb%2BtJ4bEwRtmRT9ff4Pq6cPjTMHytou%2B2sUxl1lcsCTOaH0P%2BOgD%2FOxbHggLVgvzDk%2FVcteiAtKhj%2BBwV2zmK%2FGMjA4k8E5MvBvYX1qaP9hSrWPBQGLwH4Pc0gudXzC%2BYEqIeoByBFeBKBk%2BUTQcNLuBBpusVSXaRMMAsa8B3B1th2hZJ2dnmrQ%2BdUcM6hZzqiy70PH%2BnUHI6rqlLZ7VITVvN1%2BoHgs23d1kTp1sWoWxztSy8jLI96oqBlMHGjO4TB1uHBUwpKr5vgY6pgGvfHAL4gW2DW2j%2BP%2B%2FIB0zy4VR51GbiVaa6%2BpYFRu%2FWBMBlW9FhgiGPJlxej4id3h8vSjMnOxr06jOEMAMNd0CaURoUAUc4yZCrkn4UeEUPzb%2BVhX%2FRCXPaRzOT0O31LfmUqwXJKMHNd%2Fbmzzc%2F%2FivT3ropBbeCCfZG%2BkRA2LRGxSaxe%2FW7Rt3mPliYyX79Rbx6bQkj3YxwUwh7axUGqE6T8a7Sdfs&X-Amz-Signature=55ce0b8f427d75831a1faa911f892340437a6132fb8a6dc60038134d6f918fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFMRMHO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEzlQNm0APU8c02JuEJMLmuoMd61yBMcMu%2FUgs2vvYztAiB1RAdRwT8VHeUq3LIGBPusbaUb9cM6UtRN8oJfKupkgiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYdEsopdYAWnwk46KtwD%2FS%2Bbc56YGSH9klYp91VwZCaf%2FU1Ou2kaydfhHSoL%2BOGrYRpvxk0jaHjYFnE%2Fdea3c3JHMqE7S0aZVDmlvJHgDlcukSPIYe8EdJVO%2F%2FTE6oMq95CxDGyMdho0Zg5Hbwanz7O6qjfNNwzzlpbEkf4o%2BkHplkPOoAvph%2FNKsM3l1Z4uJyqvKGO62Yi%2Bel5lXCyxjfO4f1MR9QSech2nerEs6Vo7Xi7%2F7ZrlHmcyx3Hgucr5iwzdS7JsirLyid6duOY3t6TlmsxeLr3z4Vj59sfSlJ3%2BT5O11jN29G8gPBrcAHwSuVFvWv%2F4gSW0r1pvXJSDv0IbQgS75WPCSI5Jn8cWA34IHABU0XofItKP82gc66%2BsEr%2BKoefmnb%2BtJ4bEwRtmRT9ff4Pq6cPjTMHytou%2B2sUxl1lcsCTOaH0P%2BOgD%2FOxbHggLVgvzDk%2FVcteiAtKhj%2BBwV2zmK%2FGMjA4k8E5MvBvYX1qaP9hSrWPBQGLwH4Pc0gudXzC%2BYEqIeoByBFeBKBk%2BUTQcNLuBBpusVSXaRMMAsa8B3B1th2hZJ2dnmrQ%2BdUcM6hZzqiy70PH%2BnUHI6rqlLZ7VITVvN1%2BoHgs23d1kTp1sWoWxztSy8jLI96oqBlMHGjO4TB1uHBUwpKr5vgY6pgGvfHAL4gW2DW2j%2BP%2B%2FIB0zy4VR51GbiVaa6%2BpYFRu%2FWBMBlW9FhgiGPJlxej4id3h8vSjMnOxr06jOEMAMNd0CaURoUAUc4yZCrkn4UeEUPzb%2BVhX%2FRCXPaRzOT0O31LfmUqwXJKMHNd%2Fbmzzc%2F%2FivT3ropBbeCCfZG%2BkRA2LRGxSaxe%2FW7Rt3mPliYyX79Rbx6bQkj3YxwUwh7axUGqE6T8a7Sdfs&X-Amz-Signature=12e534200a0583b77cd7e6640e728e9b2e18a6e352f806f89419fa534361f75c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
