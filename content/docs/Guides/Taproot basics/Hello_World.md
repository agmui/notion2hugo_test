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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSI3HSO5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCukKkpKUHr4shJRFnZ9hnS8ZeCLaAemOgUhsRWESxCngIhAIJH%2Ffgo%2FVpn0vuv%2FVinWANYODsphOh%2FY1RAvqG2MA4jKv8DCDUQABoMNjM3NDIzMTgzODA1IgxcAEBtqjw9kZUXojUq3AMwieJh8dj%2F%2FveZwn7NaYZxm%2B1vfe%2FyRDgShyxllCLyAu6rExqej6nmAlaXX6GUMLEp3OLwlP9XU6wkJNcmHqCAMd%2BCHEfW%2FRrRKFnO17%2F0q9kcrE9WoqNVsccXM%2F%2Fa5CIZSL4MW6tKMvMweIMjiv%2Fae97U8KwnhSj2iWAD%2BIER5VndG18MWJ6rROdduVqpit3WsHRhXyL6Ai04KUZhaGwYyGggcoM9xe2EbTn3GUrPSnoReolJKZJQUrdmf6W9CIXi5g%2FS72fUbMynhN0ZYZvkjvZpcRjKOiXNf6iWPxQXh%2F0QKDPK8oR8IlyxTvKh351uvGrRTFc%2FKO6xnNlEF%2BGnlnF%2BwFNd7xDsrq1J5NqoDavtQfUryerkqPuDjfI%2F6OoARdcboD68Ez%2BdOX3b%2BzQkx9TisBCgB4jtA0bOtQ7Ll4nWSVt35rcKxJX24VTMAhOkTjlo1jtY%2BKPEwT6h5x5YubLk0XHM0SEl3oXDFWpqdtUApptl4UE%2Blb%2BuC162z30Ba9QsVKt51sYDcOILlOjxfUzYD5ozmN8j4Fer4zOvQr8ohw%2By8A1zsoFg9XHnOXfM4sYrzhp84Knv0gW5ZRopyycClBgOUAeb5wnZHCZIyCP847S6YVNwoP9WkjDqi%2BzCBjqkAcSOiMn%2B7HxRgwprdVKY1MIcaaIsEjE%2Fgb8emZ5XzYUOXjiXpTiKBtiQARd%2F0dzSIhUiMB6fxREidCavbvifua9n%2BD5nvsEZQ%2BcUD3rluPeMtic4jCr2BQoTxq1IyoiNihKQwLyvEvByBaeOCHBz0OWfiOYtm2HVlWkpHFFY4F0B1xPROGmWA8IxDpAKSxQoebVhQYsbAllh94VnuTjgU1Exs5A9&X-Amz-Signature=154f9adf2bee369953ad8f83f5a8f3d9b1b7f067c9f964845dce4059cea389a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSI3HSO5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCukKkpKUHr4shJRFnZ9hnS8ZeCLaAemOgUhsRWESxCngIhAIJH%2Ffgo%2FVpn0vuv%2FVinWANYODsphOh%2FY1RAvqG2MA4jKv8DCDUQABoMNjM3NDIzMTgzODA1IgxcAEBtqjw9kZUXojUq3AMwieJh8dj%2F%2FveZwn7NaYZxm%2B1vfe%2FyRDgShyxllCLyAu6rExqej6nmAlaXX6GUMLEp3OLwlP9XU6wkJNcmHqCAMd%2BCHEfW%2FRrRKFnO17%2F0q9kcrE9WoqNVsccXM%2F%2Fa5CIZSL4MW6tKMvMweIMjiv%2Fae97U8KwnhSj2iWAD%2BIER5VndG18MWJ6rROdduVqpit3WsHRhXyL6Ai04KUZhaGwYyGggcoM9xe2EbTn3GUrPSnoReolJKZJQUrdmf6W9CIXi5g%2FS72fUbMynhN0ZYZvkjvZpcRjKOiXNf6iWPxQXh%2F0QKDPK8oR8IlyxTvKh351uvGrRTFc%2FKO6xnNlEF%2BGnlnF%2BwFNd7xDsrq1J5NqoDavtQfUryerkqPuDjfI%2F6OoARdcboD68Ez%2BdOX3b%2BzQkx9TisBCgB4jtA0bOtQ7Ll4nWSVt35rcKxJX24VTMAhOkTjlo1jtY%2BKPEwT6h5x5YubLk0XHM0SEl3oXDFWpqdtUApptl4UE%2Blb%2BuC162z30Ba9QsVKt51sYDcOILlOjxfUzYD5ozmN8j4Fer4zOvQr8ohw%2By8A1zsoFg9XHnOXfM4sYrzhp84Knv0gW5ZRopyycClBgOUAeb5wnZHCZIyCP847S6YVNwoP9WkjDqi%2BzCBjqkAcSOiMn%2B7HxRgwprdVKY1MIcaaIsEjE%2Fgb8emZ5XzYUOXjiXpTiKBtiQARd%2F0dzSIhUiMB6fxREidCavbvifua9n%2BD5nvsEZQ%2BcUD3rluPeMtic4jCr2BQoTxq1IyoiNihKQwLyvEvByBaeOCHBz0OWfiOYtm2HVlWkpHFFY4F0B1xPROGmWA8IxDpAKSxQoebVhQYsbAllh94VnuTjgU1Exs5A9&X-Amz-Signature=d765d09592a99bac59e79a56195608065b7e58c473173acde7cb3645430d2fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
