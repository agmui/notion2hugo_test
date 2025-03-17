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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUM3LAD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGRR0vKQOYx2efHVG6lFVFsM2S%2Fxc1ZyY10bKfYreQRAiBTZAbu4Rs9cMgtF%2BXhtqfWmlmQee4SFuq%2FX%2FRdjWW4Dyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeY85WWr8K8cImY4%2BKtwDGq2SeoayOgVaGz5GeVHa4SuNT%2BHg8fTdYiH3R32kpM2IcPhwkS3bn8RMFTmUzACWDIUmHhVETHbjF9pIqkBnlghZenzxg0YzAwbFgtdP8y5GP%2BcMdFEjUPhTF1BKFA5GXtGWPS4exRpCehZyCt0p%2FWFXdR8ITSd%2BC2FE5FnDsupASltp8yXB19e6pCU0NQa%2BeXLWkHdDoksrOTeAZxQfldLQ4A7t0EMwLtU%2FNyX8BJFYVUSB4tlvu%2B27KkP6DXg10diNBsdag5LcfuFi6sMgoqEQSbcrEnrvYL3MvvqVwqQIPvdCQpRuDSDJTxReccg%2FcmNnwCZy77IwIriZfhhOigCDKpDvBbxJKB%2FwZ8Bl8T6oUOArZeE7aSrH34mGfJaSm%2F%2F%2FzeEMFTn4D1VN3XuXm3eCEKnzrZFw%2Fv4Rgrux9uJ9Eqit9T6XbHHxsMPEVEUJgQ%2FyxAsiNQN%2FQTHaIP37RnFIlWozlbt5iTEUlrFWivi3B0vS5zDtovmNBBh5i%2FY1wojt744Bgy3%2BPeulWUg0wpvhTkCB1K5MyffaJ0Q7dTg951LheDLt2qPQGcgJVlX%2FfwOQztVLNndJNQM0YNV82e5G30DIgaphjHta5H%2FfWkbOTVh3SJGJGQZwy4Uw%2FO3fvgY6pgHOq2BJHCQdIiPKed32aeu7aH4JlF%2Fe1YLcMyeKFQWMEvv0tex9624iKglZD2wXze0DbR4aIFrRmsQ%2BqrrCyaJUvyl2wyt6Xv5jBFaoZ6PXXSOFXjQlPMf5452U07t%2Fxq2SPhhMVQd1o7y6xuOjABeUipjJXOo47yCxxsrBjfTXpkt2m4JXp2trgpz02sMCBMlK%2F69BuCtf0Hcl9UdgYnUA%2FFgUh7Ww&X-Amz-Signature=0a4a2e9b22161d985d24e8db7f5eea2a7693f285f3dced79095ce4e6d1e7023f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUM3LAD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGRR0vKQOYx2efHVG6lFVFsM2S%2Fxc1ZyY10bKfYreQRAiBTZAbu4Rs9cMgtF%2BXhtqfWmlmQee4SFuq%2FX%2FRdjWW4Dyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeY85WWr8K8cImY4%2BKtwDGq2SeoayOgVaGz5GeVHa4SuNT%2BHg8fTdYiH3R32kpM2IcPhwkS3bn8RMFTmUzACWDIUmHhVETHbjF9pIqkBnlghZenzxg0YzAwbFgtdP8y5GP%2BcMdFEjUPhTF1BKFA5GXtGWPS4exRpCehZyCt0p%2FWFXdR8ITSd%2BC2FE5FnDsupASltp8yXB19e6pCU0NQa%2BeXLWkHdDoksrOTeAZxQfldLQ4A7t0EMwLtU%2FNyX8BJFYVUSB4tlvu%2B27KkP6DXg10diNBsdag5LcfuFi6sMgoqEQSbcrEnrvYL3MvvqVwqQIPvdCQpRuDSDJTxReccg%2FcmNnwCZy77IwIriZfhhOigCDKpDvBbxJKB%2FwZ8Bl8T6oUOArZeE7aSrH34mGfJaSm%2F%2F%2FzeEMFTn4D1VN3XuXm3eCEKnzrZFw%2Fv4Rgrux9uJ9Eqit9T6XbHHxsMPEVEUJgQ%2FyxAsiNQN%2FQTHaIP37RnFIlWozlbt5iTEUlrFWivi3B0vS5zDtovmNBBh5i%2FY1wojt744Bgy3%2BPeulWUg0wpvhTkCB1K5MyffaJ0Q7dTg951LheDLt2qPQGcgJVlX%2FfwOQztVLNndJNQM0YNV82e5G30DIgaphjHta5H%2FfWkbOTVh3SJGJGQZwy4Uw%2FO3fvgY6pgHOq2BJHCQdIiPKed32aeu7aH4JlF%2Fe1YLcMyeKFQWMEvv0tex9624iKglZD2wXze0DbR4aIFrRmsQ%2BqrrCyaJUvyl2wyt6Xv5jBFaoZ6PXXSOFXjQlPMf5452U07t%2Fxq2SPhhMVQd1o7y6xuOjABeUipjJXOo47yCxxsrBjfTXpkt2m4JXp2trgpz02sMCBMlK%2F69BuCtf0Hcl9UdgYnUA%2FFgUh7Ww&X-Amz-Signature=6696229cb88a0373b8271641655f79f49f0fa61f0b0724fb012961b0ab245783&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
