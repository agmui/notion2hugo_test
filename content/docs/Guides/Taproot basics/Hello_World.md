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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEK75HWF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDY6sSRFXyTSMncb1YMOVFR6%2BRKJx2%2BzItUWka49fpByAIgYC5vSMxu7h1Hj8Sz3UfbUYY0lBaGelZWHxwI7Ax%2FIVwq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFqmZVDVmtOtf4RkZircA7JZl9flXithXCmyaMMF2RNKCo%2FadXgCmAuEg4LgO48rrreTn4pvB%2BGtbaZCXj9rAK3tIqlf6K9CK4arVn74D0XVUZt%2FVpMj1XilobwWtot%2Fo52J7S3M0BOmQC9s7JQ2cGlKIJCkjitJAwkanxamexOvTolc%2FkzV1tiZrmyg3dsLu7ifnD7shBcJDwdYq3kCmUZvVezEToSRh81XV4EajcUngNukah2S93W907TrcpcgHAhyEbxaCsQyEuZ0PU7Dg6NME46rV4lnyA%2BBYlguCVOS944BPaMLzhe4WaQ1ENcWob1Go8tSAy1qc%2FjSRllzu2TemUxBZ4aSG2Krb17wZNYaaWycNMpL7SluyJHjBxCtwmr9imOWFsWFzBJLLE0Qksii74dbmXK3xFq5xvhjXVzw0NYmAA2Q%2BMlEBdkwBa%2BPUQifqMCFEaOqZRwbhIAabYEpXwIftdjV86M9Yt5MdV62Iy%2FOVVedvfs489yAxAKDMJzPtAnOa2ZklEZrsvPdCGIQKw0WzpA7Ciaf7iQNXv4%2BqBIAwJ0B0Y%2B0AGPWyTQyS0%2FXyMYMlOWbrfW1xvAFQmj5fYig631yz%2BvKzqrR%2Bp%2Bu8vWVBebDZJ3ifPjJQ5I%2BtU0orCpx8afkNax%2FMLSGksEGOqUB5Gb1K%2BWH2hrGghlZwMY1lkkuS18XI62tSp%2By9cmRJU46YQLWViTXk9KEqiQ2mEjUjOe57s2I4lOrPt205DHR%2FVpv0lvDKvg6pSG1sHtJSkDk5m5WXerdthz5tvU48TFmpE4gFxBEoV5Rp4DXWM4bz29U4UPV2vwZlukJpq8ezo1c66Zykx%2BhhYjTRzV6CL87B7h%2B7ACJIGlMzRC6ZLkY3StoOH9h&X-Amz-Signature=489b64017290bb30deaf6ac96ba80dea5faa9ba323e8e8a8a2551d1b01e43be6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEK75HWF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDY6sSRFXyTSMncb1YMOVFR6%2BRKJx2%2BzItUWka49fpByAIgYC5vSMxu7h1Hj8Sz3UfbUYY0lBaGelZWHxwI7Ax%2FIVwq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFqmZVDVmtOtf4RkZircA7JZl9flXithXCmyaMMF2RNKCo%2FadXgCmAuEg4LgO48rrreTn4pvB%2BGtbaZCXj9rAK3tIqlf6K9CK4arVn74D0XVUZt%2FVpMj1XilobwWtot%2Fo52J7S3M0BOmQC9s7JQ2cGlKIJCkjitJAwkanxamexOvTolc%2FkzV1tiZrmyg3dsLu7ifnD7shBcJDwdYq3kCmUZvVezEToSRh81XV4EajcUngNukah2S93W907TrcpcgHAhyEbxaCsQyEuZ0PU7Dg6NME46rV4lnyA%2BBYlguCVOS944BPaMLzhe4WaQ1ENcWob1Go8tSAy1qc%2FjSRllzu2TemUxBZ4aSG2Krb17wZNYaaWycNMpL7SluyJHjBxCtwmr9imOWFsWFzBJLLE0Qksii74dbmXK3xFq5xvhjXVzw0NYmAA2Q%2BMlEBdkwBa%2BPUQifqMCFEaOqZRwbhIAabYEpXwIftdjV86M9Yt5MdV62Iy%2FOVVedvfs489yAxAKDMJzPtAnOa2ZklEZrsvPdCGIQKw0WzpA7Ciaf7iQNXv4%2BqBIAwJ0B0Y%2B0AGPWyTQyS0%2FXyMYMlOWbrfW1xvAFQmj5fYig631yz%2BvKzqrR%2Bp%2Bu8vWVBebDZJ3ifPjJQ5I%2BtU0orCpx8afkNax%2FMLSGksEGOqUB5Gb1K%2BWH2hrGghlZwMY1lkkuS18XI62tSp%2By9cmRJU46YQLWViTXk9KEqiQ2mEjUjOe57s2I4lOrPt205DHR%2FVpv0lvDKvg6pSG1sHtJSkDk5m5WXerdthz5tvU48TFmpE4gFxBEoV5Rp4DXWM4bz29U4UPV2vwZlukJpq8ezo1c66Zykx%2BhhYjTRzV6CL87B7h%2B7ACJIGlMzRC6ZLkY3StoOH9h&X-Amz-Signature=ce1fa2386345c852f7d321c398b43a0360f8efae761741ea323d51155fb7fb46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
