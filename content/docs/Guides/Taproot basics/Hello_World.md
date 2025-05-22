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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPKXJQX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDQ7%2FGzAVEHV4KTuOyOSJKHBeuzit8vsy4VB8om7NOt6wIgTS%2FUHLZHUynyghqTcTyiJ%2FvwTSQNwTnZ%2BaPwGY76nFcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDLAsobVZcub5rP8CrcAyvcpKtStooVypcqcFgnDAr2jeTM0yAxWOo0waT%2B3WifnY4H10ae1fOaYO07OAizjkhr6jOM3m8858iYCPida8jB6Ml9AAWxc3LDtwY2%2BFEGBpnXQhYwLP1jR2NFogNhaLsOr3hnAxJG0wiJlIYlEeoXjJuS5kVblBd35HbwnEZUl1ocK4jKUfXU1uGQOuY9u5PiI6M0kX%2FxRORNWCTULPm3xZJifF%2B%2Fgw09%2Fm3JkFiuKqLqAmf%2BQIq%2FCf%2BQMjLyaKoHnqnlKWlnKktLx%2BMuOdl7iG%2FbEd48hHDfHn8nwRALNob9nCgs3INWpIZrC68wz2WGqsOiFuoztNr4o5Y%2FbPYQIVthM8JS%2BadDjoQHxKVaVtlg0PDbuVLA8e5%2Fbsy9qD8AwCzndhbpx6pRf9RyrW2AnriAld04XZ4r1quyV%2FIRC%2FpodJuyGaa%2Bu%2BMHNhfBhkavRWsqLrqJBHL0jZFTuxgr6QLHPhlq0U%2BMQozQcqkhAVEiVwCDgZu2TBEWn%2FtRS1CPCw%2FAYu7e5DLbgTIxA2u87t9j5MXuDXUdL6%2Bl7nhlJ992B0M0BUEMi9ZvIBAUABGD6vgVSAOODx2t77QnnTVAybBHenc0zzeBC8dlkRnadIJPR18EXwBGIrZwMMfFvMEGOqUBMQdzqjE%2BTikZPH%2Bnv0fP28zC5cmq0WqBVFdG%2BFyhN8%2BJ7MyMHhrgalBMfLliOJMJWRERXTS%2Fitw7MeovK3Q9Jv6AtPBtcuKW5%2BGnRepR%2BCTX6KvptgyxoUg3N8XE3jK3Y01oEMYFv%2BsOmyL3N7vJvjrvGXJn5urIdovMvEw%2BLPWfa8X1iJjtzQpzSa1XCt5SabnYgKT3NJ6D%2FrJQI%2B0Yj%2BJz2aMG&X-Amz-Signature=bd48702746efc1caa22dbc8dacc8414e9a1f5f63fc2396cac2e550f311523074&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPKXJQX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDQ7%2FGzAVEHV4KTuOyOSJKHBeuzit8vsy4VB8om7NOt6wIgTS%2FUHLZHUynyghqTcTyiJ%2FvwTSQNwTnZ%2BaPwGY76nFcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDLAsobVZcub5rP8CrcAyvcpKtStooVypcqcFgnDAr2jeTM0yAxWOo0waT%2B3WifnY4H10ae1fOaYO07OAizjkhr6jOM3m8858iYCPida8jB6Ml9AAWxc3LDtwY2%2BFEGBpnXQhYwLP1jR2NFogNhaLsOr3hnAxJG0wiJlIYlEeoXjJuS5kVblBd35HbwnEZUl1ocK4jKUfXU1uGQOuY9u5PiI6M0kX%2FxRORNWCTULPm3xZJifF%2B%2Fgw09%2Fm3JkFiuKqLqAmf%2BQIq%2FCf%2BQMjLyaKoHnqnlKWlnKktLx%2BMuOdl7iG%2FbEd48hHDfHn8nwRALNob9nCgs3INWpIZrC68wz2WGqsOiFuoztNr4o5Y%2FbPYQIVthM8JS%2BadDjoQHxKVaVtlg0PDbuVLA8e5%2Fbsy9qD8AwCzndhbpx6pRf9RyrW2AnriAld04XZ4r1quyV%2FIRC%2FpodJuyGaa%2Bu%2BMHNhfBhkavRWsqLrqJBHL0jZFTuxgr6QLHPhlq0U%2BMQozQcqkhAVEiVwCDgZu2TBEWn%2FtRS1CPCw%2FAYu7e5DLbgTIxA2u87t9j5MXuDXUdL6%2Bl7nhlJ992B0M0BUEMi9ZvIBAUABGD6vgVSAOODx2t77QnnTVAybBHenc0zzeBC8dlkRnadIJPR18EXwBGIrZwMMfFvMEGOqUBMQdzqjE%2BTikZPH%2Bnv0fP28zC5cmq0WqBVFdG%2BFyhN8%2BJ7MyMHhrgalBMfLliOJMJWRERXTS%2Fitw7MeovK3Q9Jv6AtPBtcuKW5%2BGnRepR%2BCTX6KvptgyxoUg3N8XE3jK3Y01oEMYFv%2BsOmyL3N7vJvjrvGXJn5urIdovMvEw%2BLPWfa8X1iJjtzQpzSa1XCt5SabnYgKT3NJ6D%2FrJQI%2B0Yj%2BJz2aMG&X-Amz-Signature=adeaa1122e667c722c17cbe31d7f4438d08d72ddeb6f261dd6ff1f8b6385337a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
