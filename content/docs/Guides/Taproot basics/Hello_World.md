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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJYVFMN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID75VON0zanttPdyXg2aa4%2BffBFKTA78Md0PvKuuMXuEAiEAjkNGncxuJXZw68h8ydGKxbCWrkvTBZN7SoBXc0glnrgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkg%2F2pI8OXSaEyFEyrcA%2Bb2V4Kzqzq6IASgb8RN6MJqrrFg5wNpb3Kum%2B8So6LXlUhOmoFZLauV0WmRdRNYqub7%2FKyERoefVAZS8rVs3KRBiC1MToKr%2FsiYJIZ1kASZKWn%2FZTlrMx%2B%2BUryqm7IgbssqrTXylh7oXGvYpkUh6heK0q4EqB8%2FVKHeHtqchOWgKTw9sz5ujOHSGvGN2RcuUJit6qUKQRDGbVqY%2Bv%2BVFHDljpdGUQqWyHBHoKXkge6tnzaWUGMzGz500v95IEZrew9Jt95Rz1CyZ3xI1MjP1meM%2BYRx1h8q4L7%2BwBwN9O8zDCgdjOUAQD5OBwbHceysljSsTiYDsvQvqeOI3TT1mMHYUE3uQFhQLpfnevzzBTH2rEq1cB6benCCeuTyw872YetBMAMSNgkekzvCGarOKfMBcO361QYRwFjPYRw7CjpqgDt9G0IPkZDXTgP1mQ7ajC0YG7TeYHujxRyZ5yeEtODhqc6QvKmiqE7Nc7hKo9MIU7Bc96GiLzbwjTS32dxuhO7G%2BG9%2FbSFR%2FqjPhkpq%2BiT29IWPo0l8sjHatVW5dU4wsxMFZxsJeCfpS0mWSSHNCcEPHuaj7FsOBJsevFyo7%2BGknxZeCsEJgjq15Az0tUaQNAYhWmzdBNF7EC3pMKzalr4GOqUB9vI98%2FepZQFCmo7t8pj2W2pi2ulH1h6HMyjz1R%2FockoXjlcTzsUteTgInidePFNIjb3V3cyXJZX0MohCiq5HNnpnAV7V5%2FY17r14psMnXFYEn7X58vd86khw%2BzirYBEXX6BO9h95z0GepsKXyyIkYJgti1bMxJvjBOW%2BzZOAnllDfrMTt75%2FF%2FFknZVyKHVE7qNfQ%2BFmWp5h6NGI7cmaeYPxS1wT&X-Amz-Signature=16a4f3f88f7036e898c3a2d786d16c6361818bbbdbb2082450edaa8be456306b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJYVFMN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID75VON0zanttPdyXg2aa4%2BffBFKTA78Md0PvKuuMXuEAiEAjkNGncxuJXZw68h8ydGKxbCWrkvTBZN7SoBXc0glnrgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkg%2F2pI8OXSaEyFEyrcA%2Bb2V4Kzqzq6IASgb8RN6MJqrrFg5wNpb3Kum%2B8So6LXlUhOmoFZLauV0WmRdRNYqub7%2FKyERoefVAZS8rVs3KRBiC1MToKr%2FsiYJIZ1kASZKWn%2FZTlrMx%2B%2BUryqm7IgbssqrTXylh7oXGvYpkUh6heK0q4EqB8%2FVKHeHtqchOWgKTw9sz5ujOHSGvGN2RcuUJit6qUKQRDGbVqY%2Bv%2BVFHDljpdGUQqWyHBHoKXkge6tnzaWUGMzGz500v95IEZrew9Jt95Rz1CyZ3xI1MjP1meM%2BYRx1h8q4L7%2BwBwN9O8zDCgdjOUAQD5OBwbHceysljSsTiYDsvQvqeOI3TT1mMHYUE3uQFhQLpfnevzzBTH2rEq1cB6benCCeuTyw872YetBMAMSNgkekzvCGarOKfMBcO361QYRwFjPYRw7CjpqgDt9G0IPkZDXTgP1mQ7ajC0YG7TeYHujxRyZ5yeEtODhqc6QvKmiqE7Nc7hKo9MIU7Bc96GiLzbwjTS32dxuhO7G%2BG9%2FbSFR%2FqjPhkpq%2BiT29IWPo0l8sjHatVW5dU4wsxMFZxsJeCfpS0mWSSHNCcEPHuaj7FsOBJsevFyo7%2BGknxZeCsEJgjq15Az0tUaQNAYhWmzdBNF7EC3pMKzalr4GOqUB9vI98%2FepZQFCmo7t8pj2W2pi2ulH1h6HMyjz1R%2FockoXjlcTzsUteTgInidePFNIjb3V3cyXJZX0MohCiq5HNnpnAV7V5%2FY17r14psMnXFYEn7X58vd86khw%2BzirYBEXX6BO9h95z0GepsKXyyIkYJgti1bMxJvjBOW%2BzZOAnllDfrMTt75%2FF%2FFknZVyKHVE7qNfQ%2BFmWp5h6NGI7cmaeYPxS1wT&X-Amz-Signature=3162eac36c9f267f7a50c94c390941d2f14b67ca08ea1ec1f6669d1b35806e42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
