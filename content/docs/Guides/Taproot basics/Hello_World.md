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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGRXZDC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1OVstLCDdFKx9ath%2FRbi3U5Hz6V8oygtNChG%2F9g8ocQIge4CMphpBr7F%2BS%2FXuVC6%2BFerBNNxGtBIwKdO9naV0s28q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN7QTXdZfHHAyicZeircA4xNzZef%2FmHPOxDQuH2PjQEIVDyR%2B%2BA7J5a%2BwfQR%2FrWOfnOMNs93%2FDVcbBioAPMGrCRaudS9WVCPlReO0oaIK%2FtcX2D7TjD1Qrg2I97eD6elZ%2Fl1YbjZCvKhGoHTxGbX2C%2BqTRZYmN5tzkvY5kJxYAYybUQ3Q17DQvjWR5%2F1xRKf18PIwG3DeV9o0KjTyjWfGqV5sOwOhHBZSx1GqY1JYmB1%2F3CSHwIJoVBvEHE6fm4ZiXQwQ3GwaHFIGXEpQbAIIOjAXKg%2FRVUMJU6J%2FZOD1Wgr%2B6j8ROCYkkxpsnPxj7AA%2BsoZIQ9xMuehLf61sElbFCDgM13IF5z7URQd9Q4QZXg4LPz%2BmFiDzXA51XfBJ1Py7%2FmApfDiqLWqcbPnZGohUbSNF%2FYx8jTVW0iUrlS%2FLQ31RgD1tUQyF38yFXrHHGfPFLJvCxzFWdPLG0cuI7WsbGZzVTYh8Gwl7Q3yxYPfc%2F6K1teynqoOScsdOTZMX9XKTG3Ej2%2FSynV%2BUU4vBwOto1QZuFs6493RQ6DA7B1%2FfGKxLW5T04f0FkocPsLJyagJpVs2m1fgU41MnoBx5Kqy1UqoizPj5g6G7%2F5SxURJlyA8wu9g0aWXOXbx73eJg2kpj4AZGXkjK18l71jPMJH3h8AGOqUBRpx2eaa2D%2BMlC6ax8J6JvUT%2F3SXtGItofjGXNBo4mkitQMcXuXGC03Grtq6aBdoFgf2LNI97L6JUlF1%2BYcbJPgKWVKNipJj26HETMeSIY6g9qtOlgHzKtt2MT3AwEFpBC%2B8tCKTM%2FD8%2B4MdIntlo6SccQxEBfQCq%2Bfg6UUatPR2tjnmlR%2Bx0pkSjXSB6En87tV3uo7SWWcD4ZXTNF%2BxvNWXt4Co0&X-Amz-Signature=9b7b254e9501f3c60c7bcbf5cd39e9eeea3c488d5fded7bc7abb0a616e43f986&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGRXZDC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1OVstLCDdFKx9ath%2FRbi3U5Hz6V8oygtNChG%2F9g8ocQIge4CMphpBr7F%2BS%2FXuVC6%2BFerBNNxGtBIwKdO9naV0s28q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN7QTXdZfHHAyicZeircA4xNzZef%2FmHPOxDQuH2PjQEIVDyR%2B%2BA7J5a%2BwfQR%2FrWOfnOMNs93%2FDVcbBioAPMGrCRaudS9WVCPlReO0oaIK%2FtcX2D7TjD1Qrg2I97eD6elZ%2Fl1YbjZCvKhGoHTxGbX2C%2BqTRZYmN5tzkvY5kJxYAYybUQ3Q17DQvjWR5%2F1xRKf18PIwG3DeV9o0KjTyjWfGqV5sOwOhHBZSx1GqY1JYmB1%2F3CSHwIJoVBvEHE6fm4ZiXQwQ3GwaHFIGXEpQbAIIOjAXKg%2FRVUMJU6J%2FZOD1Wgr%2B6j8ROCYkkxpsnPxj7AA%2BsoZIQ9xMuehLf61sElbFCDgM13IF5z7URQd9Q4QZXg4LPz%2BmFiDzXA51XfBJ1Py7%2FmApfDiqLWqcbPnZGohUbSNF%2FYx8jTVW0iUrlS%2FLQ31RgD1tUQyF38yFXrHHGfPFLJvCxzFWdPLG0cuI7WsbGZzVTYh8Gwl7Q3yxYPfc%2F6K1teynqoOScsdOTZMX9XKTG3Ej2%2FSynV%2BUU4vBwOto1QZuFs6493RQ6DA7B1%2FfGKxLW5T04f0FkocPsLJyagJpVs2m1fgU41MnoBx5Kqy1UqoizPj5g6G7%2F5SxURJlyA8wu9g0aWXOXbx73eJg2kpj4AZGXkjK18l71jPMJH3h8AGOqUBRpx2eaa2D%2BMlC6ax8J6JvUT%2F3SXtGItofjGXNBo4mkitQMcXuXGC03Grtq6aBdoFgf2LNI97L6JUlF1%2BYcbJPgKWVKNipJj26HETMeSIY6g9qtOlgHzKtt2MT3AwEFpBC%2B8tCKTM%2FD8%2B4MdIntlo6SccQxEBfQCq%2Bfg6UUatPR2tjnmlR%2Bx0pkSjXSB6En87tV3uo7SWWcD4ZXTNF%2BxvNWXt4Co0&X-Amz-Signature=740d30d2ce8653e0bab1d83f79209d2cf7ff4cd2c1c447f248a18c8192a06797&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
