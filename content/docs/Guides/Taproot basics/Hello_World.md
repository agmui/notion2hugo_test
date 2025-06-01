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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNYENP5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFR8gvBaTVlK1yFbpLJs1qGtwzYo4dmHpLnXLt3rmsSzAiEA83Z%2BQ8Z1fnsew%2FQBIo71Nj%2F1mRILYAsXP4rps1AMlqsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPlQFgdSvQQsncPRCrcA1%2FYBgqWXk9TSGTTJLi8LlJ%2BFMTa%2FjnfpkEdO%2BS7XiOP3PX8HOLCuEJNO%2FRXa3Fe%2F6ACsxXlLBGOzZdA%2FDAgrmqOcruIc0bEZhbKmzFbQNC56vwCaLGMoYUF2nEVj79I6IQenglGOlGUxw68YcUYSR%2FSWENRAJj421XU%2BJQZ18kSP4tnb5zLoSIJd%2BUr4Iwtn5JRsA0kMD7cesJhHoJv1h6bnM%2FIk%2FR1euEHmww48QviEcYgUv3mUF1IYX3g9xqRNXWG%2FKU2ZLucdP1ASuKC1SqPp9QymzCIKI85voKCSCNtDTncIfj82IJ4gCfmie5hh%2BAltBDy4cjPwyrfCbIKTpkSugXc%2FeF02r4vroDy0n9134kxqfNK7%2Fx05PWKFfXWAABC9Ig9pTZ4xz%2FzFRL85adA%2FPQ0DJoJYoyR7HzeC6j1DxX9Bf1qYo0sd2W4ICU6DNfExccgkadsn4IFsnXsWH%2FDpqmbXZLk7chnpUQ%2BL5R4TYgQOypQGwUaBTq3iYb3PJ7xt%2FtftM8qJ20m5%2B%2BmCuBgIHp9HKa6xKmF0qQ4oK4ete5PezDSK6JpEmUSGMSOn12pKDOzv3%2FqRGTlunix0pUBROkDDJGEujfR%2B6eWy9uyq7GWmWBSWuOQaiqsMLTe8MEGOqUBJdFyRlIxCyYcpwKg7pEftRP7UR3sNJryaZO1UUCfjIYCxA9CaOUciXO%2FfSitTVHi8lCpvQ03d%2Bb89VnndNAwNsqd1ZsTAOYauhbt8ZqZEY2SJykTF1CQWUq%2F8eG7tJqNrKwfRLRHXWAK2uHT0NvR6x6qgJ1K%2FBrev5D7%2F0VTmzZQnKYdWPNhSBXOi3600Y488RRUGZ1WkyTsM4MrIqaA6FzSA6V0&X-Amz-Signature=81d7cee8e8f429904154057ea4bd2af65cc5d05d3bb0c3f9ef16c5db45e91314&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNYENP5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFR8gvBaTVlK1yFbpLJs1qGtwzYo4dmHpLnXLt3rmsSzAiEA83Z%2BQ8Z1fnsew%2FQBIo71Nj%2F1mRILYAsXP4rps1AMlqsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPlQFgdSvQQsncPRCrcA1%2FYBgqWXk9TSGTTJLi8LlJ%2BFMTa%2FjnfpkEdO%2BS7XiOP3PX8HOLCuEJNO%2FRXa3Fe%2F6ACsxXlLBGOzZdA%2FDAgrmqOcruIc0bEZhbKmzFbQNC56vwCaLGMoYUF2nEVj79I6IQenglGOlGUxw68YcUYSR%2FSWENRAJj421XU%2BJQZ18kSP4tnb5zLoSIJd%2BUr4Iwtn5JRsA0kMD7cesJhHoJv1h6bnM%2FIk%2FR1euEHmww48QviEcYgUv3mUF1IYX3g9xqRNXWG%2FKU2ZLucdP1ASuKC1SqPp9QymzCIKI85voKCSCNtDTncIfj82IJ4gCfmie5hh%2BAltBDy4cjPwyrfCbIKTpkSugXc%2FeF02r4vroDy0n9134kxqfNK7%2Fx05PWKFfXWAABC9Ig9pTZ4xz%2FzFRL85adA%2FPQ0DJoJYoyR7HzeC6j1DxX9Bf1qYo0sd2W4ICU6DNfExccgkadsn4IFsnXsWH%2FDpqmbXZLk7chnpUQ%2BL5R4TYgQOypQGwUaBTq3iYb3PJ7xt%2FtftM8qJ20m5%2B%2BmCuBgIHp9HKa6xKmF0qQ4oK4ete5PezDSK6JpEmUSGMSOn12pKDOzv3%2FqRGTlunix0pUBROkDDJGEujfR%2B6eWy9uyq7GWmWBSWuOQaiqsMLTe8MEGOqUBJdFyRlIxCyYcpwKg7pEftRP7UR3sNJryaZO1UUCfjIYCxA9CaOUciXO%2FfSitTVHi8lCpvQ03d%2Bb89VnndNAwNsqd1ZsTAOYauhbt8ZqZEY2SJykTF1CQWUq%2F8eG7tJqNrKwfRLRHXWAK2uHT0NvR6x6qgJ1K%2FBrev5D7%2F0VTmzZQnKYdWPNhSBXOi3600Y488RRUGZ1WkyTsM4MrIqaA6FzSA6V0&X-Amz-Signature=65074f752e3765be360a065246354a63f3c4ca928ecbb0522c4119207e5beb7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
