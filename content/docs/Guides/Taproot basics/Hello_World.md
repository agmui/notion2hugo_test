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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDNYKCU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCgifK2%2BRfuldws6YtNm33cN%2FbYoCM48eH25H4oqp795AIgVCvkqe08xoT7X%2BHT6A0K3Py5UzJ3FKBvB5eSCsBbWQAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2J8LC87W5Tm6gN1SrcA%2BrRZ266%2FW5a3gUkUSx7hBs%2BXB8SCh36cDwEAG0uLc6giutbgbmycC5EM28u4ltsF3Cd5jf2gpaBJhPzChHj9oxZXzcT7QSeMRXIVXz6oLolfu7nwxtrBH8E63F3UKooGUODDgbU9uNof9CH3lxMYlM7P2G1y1VvA5G2S6Bo5DuzUimEc%2F%2BdgHQfon%2FRxEsONhDxzjy6vAAw%2FYcq1hIATXdux2uUFd8DEhEwYhhtwMRcQMzBVc74Jp6fdAB8xBWfyMl7Dc1Zv811IjeEOpyW%2B1THQ4wGN6yZ%2Br9Bg9Q1zaN%2Fmv0LgMPj%2Bh1fdGJrxs24VwXJt2uJjYUPPfYV86EAcEiR%2BnQo6kYDZkfXS0sn%2FHpR6eTt0pbcBV9c6zFsz8Slm0O4svOr%2BDauGjXuSjMIHHGhKzg47Kz0C%2BxKvY7RsgZ4MIHottn%2BCICp4oSzXpITdVzy9v2ydpRd29NZqWiU72ywGcYhPvLU7yCka7UANty%2BEr4mn2rkHu8OJ5cGbXGEBFb9gLG0taTQqbaoagX0Lt8z9etVqs4SaliW0LG%2Bg0cwOqkUtGw6TLvASTaWHIv5dyHr%2F%2FVcdnfWksG5d%2FGvWUVFC0PXDMN%2F1Xh15anuw5UIogpPkrUgB48vxny2MLn3isEGOqUBJVhMGP2%2Bdx94paYkmcrJ3WRU68Grn114uocIeWJvI3MgzV6%2BvNOKtsB3qJZqizpFchUb89y3%2Bh1cg48C50pabJU9Sl0M%2FoFM7lsj75VadgEMkhy6v28YwYR6Lu7OEYh9YpdQEEjbpJRsIMt%2BE1gQg%2FoR2DLpfs2sJDpdkB3waGTalOipglUm6TiFDubyTKZRj%2BN1IN%2FtyJyp3DetFdLDpKsAEbQy&X-Amz-Signature=055e7dfe9890e2596cef95a4e000476a3e731ae4a4d26982e94adb1d20760b66&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDNYKCU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCgifK2%2BRfuldws6YtNm33cN%2FbYoCM48eH25H4oqp795AIgVCvkqe08xoT7X%2BHT6A0K3Py5UzJ3FKBvB5eSCsBbWQAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2J8LC87W5Tm6gN1SrcA%2BrRZ266%2FW5a3gUkUSx7hBs%2BXB8SCh36cDwEAG0uLc6giutbgbmycC5EM28u4ltsF3Cd5jf2gpaBJhPzChHj9oxZXzcT7QSeMRXIVXz6oLolfu7nwxtrBH8E63F3UKooGUODDgbU9uNof9CH3lxMYlM7P2G1y1VvA5G2S6Bo5DuzUimEc%2F%2BdgHQfon%2FRxEsONhDxzjy6vAAw%2FYcq1hIATXdux2uUFd8DEhEwYhhtwMRcQMzBVc74Jp6fdAB8xBWfyMl7Dc1Zv811IjeEOpyW%2B1THQ4wGN6yZ%2Br9Bg9Q1zaN%2Fmv0LgMPj%2Bh1fdGJrxs24VwXJt2uJjYUPPfYV86EAcEiR%2BnQo6kYDZkfXS0sn%2FHpR6eTt0pbcBV9c6zFsz8Slm0O4svOr%2BDauGjXuSjMIHHGhKzg47Kz0C%2BxKvY7RsgZ4MIHottn%2BCICp4oSzXpITdVzy9v2ydpRd29NZqWiU72ywGcYhPvLU7yCka7UANty%2BEr4mn2rkHu8OJ5cGbXGEBFb9gLG0taTQqbaoagX0Lt8z9etVqs4SaliW0LG%2Bg0cwOqkUtGw6TLvASTaWHIv5dyHr%2F%2FVcdnfWksG5d%2FGvWUVFC0PXDMN%2F1Xh15anuw5UIogpPkrUgB48vxny2MLn3isEGOqUBJVhMGP2%2Bdx94paYkmcrJ3WRU68Grn114uocIeWJvI3MgzV6%2BvNOKtsB3qJZqizpFchUb89y3%2Bh1cg48C50pabJU9Sl0M%2FoFM7lsj75VadgEMkhy6v28YwYR6Lu7OEYh9YpdQEEjbpJRsIMt%2BE1gQg%2FoR2DLpfs2sJDpdkB3waGTalOipglUm6TiFDubyTKZRj%2BN1IN%2FtyJyp3DetFdLDpKsAEbQy&X-Amz-Signature=0444696c55d2f4074ec4fff542a85e5cbc1624d6edb2905cfecba5c4806ed9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
