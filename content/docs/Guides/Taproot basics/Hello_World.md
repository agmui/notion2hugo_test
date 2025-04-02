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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CUHYT3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDM9v7AM8B3%2FNUCkLSFROyK2DEyXzqY3cURHe%2Fs4N%2FOVwIhAOBK7uEKSThWC%2BJwlYYuJELqtEsqUTw0aUz9A2GDRjxEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhyrENjFMR%2BuqNZIwq3AOfKTxYewa2nwnhQYKD9nyKP7%2Be31%2BL8pwSbh70mFVqHOigCm%2FyraBpunnbQvvrZ7m%2BQEHk6BbjiyM3c2L2hFgTb5VlHCRdWsXK6cj3wkzkgmQfW4zxeg3H6e6kdW3ZDBeukOflMvPoIqysBFOl5%2FqO9G4oYslKFtNv6qp11XkleNEOj0RO05l4TWvOxAMQsEdxvlqmxWOfo80VHClMIQpIUyp4pgWtvOFdnkueVXsEv9gTvbNwnxHLgWDltgJMc3fDnr%2FrHGkZfyT%2FhflmfEhhHR6oCx18qOgUZHVX1v7dSp1OIBIH93x3YZoNNWcE4pp1ciq2NXab99ra%2F3z%2FeEunB3QfL%2FjKXJZJlJpSQKLUXvLyrx7uMckpHvkPu54jbq%2BPxkxa9RvZ%2BXRspEIBSn%2F6sUD9RXVucBRICVShr8EgxhbZBUVKneW3pCAQz7jbixkRo3MABZRzLCKxH0R%2BojCbwl3hOXw7C3i3jacONNpEJSb6%2BmMm3R7J98mAi53LPNxq8AKmImBgGv6KkPve4Gpxmb78BccN5beP6L3EljOIEgBQ7DLD0xZ902PJH1N7axmbajB7FhtLchEGzBLXFIXZw3uxEiXnvBWPQTUaxiHWCGkyFw3qLegj0raOGzD337S%2FBjqkAehqfOow%2F2kpSNU99ptyuhGsY0Hcs%2B%2BEH9XAAqnrC8J%2BTse4%2B1Ar0QvEmPVnFSTRkYJV3ByrrTe%2F4tAtDLEgvS2r3HXZ7Nuic65ndsty7PKVzCcSW7UdC6sE8tlxVqXSvZugxctnAY45oIlRZt5im0Rozf7%2BzgucVlp%2FwpBNCsiE2G6VDYcGJRPCtlwsf7eY2QqiRv5NMIgQMaEt4uMnfoTm1I3G&X-Amz-Signature=4e42e0a9c6457370edafba7a0d7ade95bcab690309469a004ec50c9777b6d57a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CUHYT3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDM9v7AM8B3%2FNUCkLSFROyK2DEyXzqY3cURHe%2Fs4N%2FOVwIhAOBK7uEKSThWC%2BJwlYYuJELqtEsqUTw0aUz9A2GDRjxEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhyrENjFMR%2BuqNZIwq3AOfKTxYewa2nwnhQYKD9nyKP7%2Be31%2BL8pwSbh70mFVqHOigCm%2FyraBpunnbQvvrZ7m%2BQEHk6BbjiyM3c2L2hFgTb5VlHCRdWsXK6cj3wkzkgmQfW4zxeg3H6e6kdW3ZDBeukOflMvPoIqysBFOl5%2FqO9G4oYslKFtNv6qp11XkleNEOj0RO05l4TWvOxAMQsEdxvlqmxWOfo80VHClMIQpIUyp4pgWtvOFdnkueVXsEv9gTvbNwnxHLgWDltgJMc3fDnr%2FrHGkZfyT%2FhflmfEhhHR6oCx18qOgUZHVX1v7dSp1OIBIH93x3YZoNNWcE4pp1ciq2NXab99ra%2F3z%2FeEunB3QfL%2FjKXJZJlJpSQKLUXvLyrx7uMckpHvkPu54jbq%2BPxkxa9RvZ%2BXRspEIBSn%2F6sUD9RXVucBRICVShr8EgxhbZBUVKneW3pCAQz7jbixkRo3MABZRzLCKxH0R%2BojCbwl3hOXw7C3i3jacONNpEJSb6%2BmMm3R7J98mAi53LPNxq8AKmImBgGv6KkPve4Gpxmb78BccN5beP6L3EljOIEgBQ7DLD0xZ902PJH1N7axmbajB7FhtLchEGzBLXFIXZw3uxEiXnvBWPQTUaxiHWCGkyFw3qLegj0raOGzD337S%2FBjqkAehqfOow%2F2kpSNU99ptyuhGsY0Hcs%2B%2BEH9XAAqnrC8J%2BTse4%2B1Ar0QvEmPVnFSTRkYJV3ByrrTe%2F4tAtDLEgvS2r3HXZ7Nuic65ndsty7PKVzCcSW7UdC6sE8tlxVqXSvZugxctnAY45oIlRZt5im0Rozf7%2BzgucVlp%2FwpBNCsiE2G6VDYcGJRPCtlwsf7eY2QqiRv5NMIgQMaEt4uMnfoTm1I3G&X-Amz-Signature=28928da71603a4ff69531985100f406a94695d8abfd37d7ff740062165f3d331&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
