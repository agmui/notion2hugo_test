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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZD4ZR5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIE9CTXJzGM7N61jDYwUXR%2BbSbWJbwHqQ5QEeYpb2yc5IAiB%2FWAK6X541yO1wbYZlOjuD%2BXSjQp%2FdubX5gyYQz%2FY8HCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMbpcNJ1xNbizR5aq2KtwDOsw1W3mk772G6fki8LYVdEsz%2Bkj4pt42%2B4owJ6nZuB9f2U7KSfe%2FYGWuXxBBbhgbdYXCHq2P1cwvKhOrsAdUktJtT%2FCs2WU9hcPepXp%2BiDjM85JsGU8T7PBTvgdf%2FY0ytRhAxCvlCHUx%2BNpaZuln842EKtdQZARE7yfVOcIzBQja1kyHmahxdmdSrDDGw8cSqTDw0FFApn6Y6lLq4Te5zjjLss8oCPIpFRc7XqT0iZDNVxtxq87FvlbzB1zp9qgRSFvolZKzyExzlsVrvFFBrVNFhuKEkeUcv1y7JCmRaaldx%2FnMZ6vpb4UCyQxFpKhQMBRaW%2Fl2joo1XhiP7gkrZ5X2GSvptIXx2LBxYStqdrKFb1fqL9Q8N9Q7WYVXgtJWw%2F8QqjCeqDfQjjnLfFKNo5cKRPq%2B4N7asivoJscgb5MSUd%2FCM78KkVWm7IPWGTGMn3ey8OYY5oMGc8E1EtmkqIUKZyPqELRQ35jOcjulPCxXoP6yKTbXtpJdDCXU9AINg1BbDNs2UabaSjUSqiG12qzAxKbnzrLgMU9BikZUsxsOLwHBNV6LFTjnqPlANiA4hV26rguylTSVvlALDHueq4bVXbRzS4OleEXYM77BEfChTVQMbxCzQEVpENowz%2BC3vgY6pgG7BlAjse9%2FStKcBEBLRrAx3%2F0W5gmpEgBFH8%2FG3DPXyn3rUF3ec9P4YqrhzB7gOac8jIPCEw%2FFAn9kNW31fMmpJ4XWFXYRvzkIJ2xFVi9AGOYsTFNyJKq2Ij3%2FVKwxIsu1%2BcJZzHFuxT0fF495LaT7aFsU8SEW6n%2BKtvxUkJor6z0TQ69MpMwMp6mHtXd3o3aZFky3WZSwTaspJxESG2xKn6sYdYLq&X-Amz-Signature=0581b2cbf683a06c50a278291287acef3983bd9b75dcee041bee492dccc5f670&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZD4ZR5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIE9CTXJzGM7N61jDYwUXR%2BbSbWJbwHqQ5QEeYpb2yc5IAiB%2FWAK6X541yO1wbYZlOjuD%2BXSjQp%2FdubX5gyYQz%2FY8HCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMbpcNJ1xNbizR5aq2KtwDOsw1W3mk772G6fki8LYVdEsz%2Bkj4pt42%2B4owJ6nZuB9f2U7KSfe%2FYGWuXxBBbhgbdYXCHq2P1cwvKhOrsAdUktJtT%2FCs2WU9hcPepXp%2BiDjM85JsGU8T7PBTvgdf%2FY0ytRhAxCvlCHUx%2BNpaZuln842EKtdQZARE7yfVOcIzBQja1kyHmahxdmdSrDDGw8cSqTDw0FFApn6Y6lLq4Te5zjjLss8oCPIpFRc7XqT0iZDNVxtxq87FvlbzB1zp9qgRSFvolZKzyExzlsVrvFFBrVNFhuKEkeUcv1y7JCmRaaldx%2FnMZ6vpb4UCyQxFpKhQMBRaW%2Fl2joo1XhiP7gkrZ5X2GSvptIXx2LBxYStqdrKFb1fqL9Q8N9Q7WYVXgtJWw%2F8QqjCeqDfQjjnLfFKNo5cKRPq%2B4N7asivoJscgb5MSUd%2FCM78KkVWm7IPWGTGMn3ey8OYY5oMGc8E1EtmkqIUKZyPqELRQ35jOcjulPCxXoP6yKTbXtpJdDCXU9AINg1BbDNs2UabaSjUSqiG12qzAxKbnzrLgMU9BikZUsxsOLwHBNV6LFTjnqPlANiA4hV26rguylTSVvlALDHueq4bVXbRzS4OleEXYM77BEfChTVQMbxCzQEVpENowz%2BC3vgY6pgG7BlAjse9%2FStKcBEBLRrAx3%2F0W5gmpEgBFH8%2FG3DPXyn3rUF3ec9P4YqrhzB7gOac8jIPCEw%2FFAn9kNW31fMmpJ4XWFXYRvzkIJ2xFVi9AGOYsTFNyJKq2Ij3%2FVKwxIsu1%2BcJZzHFuxT0fF495LaT7aFsU8SEW6n%2BKtvxUkJor6z0TQ69MpMwMp6mHtXd3o3aZFky3WZSwTaspJxESG2xKn6sYdYLq&X-Amz-Signature=9e307b7bb63388558c7411dacd680c01437c54270a3261ea2a95ede4d261e7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
