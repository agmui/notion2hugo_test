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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZSQOVC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAvPLY7SQeg9glSOf%2FjSWfBwmXFAP5tYA7CfUrqbtEvwIgbry7SCue%2BjO5S60h87M1TW4TEtpZk6bOjmttxzSFNLEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJNmerg1kTh4DtSIyrcA1vPHLVL2VPF1AhmTgj8Huk30peI2Z4PmXJjvAouoKJboAoI%2B0FMon1YCYXtpWjaCJosNdtsUMCzUD%2FlHNQ2NYDmeRgUZQcQai15ynhNNYDDoqA9ER2fPYe9Jo0HdsMHtT5GTUJTs3webterWSzRBD8vd0yQukNWHnNYh9Qe483FtaJrRwbRbeWroau5Tco2TgpK88hjyDHvzuC2TmM%2FhgEQHtjX7wNOi3jx5jgjLh4G0HksAd0FEXMKc5dexmw7UQeL49MPvdA6ePOj2fs4K%2BYDquLLdYPJf3q6CqUmLxm0pTV0lO9M8MVL1SNXuEDPyFZrLoseTCfjf%2BUJsV6val%2Bkdaw2se5EQOX83HYqN%2Bl%2Fs07pBL1cK%2FGlJuy0uwxach9%2BzemymmxhzEQwrL9CXYywM9FDO%2BJEBSLf%2BK2j%2B1VHts%2BHl5hiyiEYX%2FhowkT0CBFR%2BmunpnLb418QMAGNSpJ%2BIIYxXhs4R9piSHrS3U6n3%2F5hg6KVZTgDirJ3FbdP%2B4Gbci%2B9saTLKQBX%2FwvslnGxvvy%2BvJoiKTLN%2Bp91Bv8nksOUe69oW0CCnyt6nkzGYDihNy1YdsBeACMIhOuE6ITDrkg6ZJ2I0%2BBB1xJjtIQHJCMO4sCvAekg35YUMJqP77wGOqUBmXHS40zTIzIR7x9bfGZ2zSsoyu3yMxTHvHLjsKlHHhz9fnLuvziXGy74U1HX10XNdGBvD1K%2FKz%2FrCs5hMs6m0U8fDIHBhfOxCwOyTgGeiTtoyvFiFc4zT%2Fd6%2BBoqmJLOfFG0V36DvzdgvvBcr9mZhcDSBqteayT8Pwk011c6EVA4iyLEbpWrelf77dmnYxKkBZATXpGXcTWDwDSkPQvcgyYM8O9Z&X-Amz-Signature=cc2e6f827aa44781c2395aaf09e30c6d99142df4c47254905f27f1fe3f0a6829&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZSQOVC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAvPLY7SQeg9glSOf%2FjSWfBwmXFAP5tYA7CfUrqbtEvwIgbry7SCue%2BjO5S60h87M1TW4TEtpZk6bOjmttxzSFNLEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJNmerg1kTh4DtSIyrcA1vPHLVL2VPF1AhmTgj8Huk30peI2Z4PmXJjvAouoKJboAoI%2B0FMon1YCYXtpWjaCJosNdtsUMCzUD%2FlHNQ2NYDmeRgUZQcQai15ynhNNYDDoqA9ER2fPYe9Jo0HdsMHtT5GTUJTs3webterWSzRBD8vd0yQukNWHnNYh9Qe483FtaJrRwbRbeWroau5Tco2TgpK88hjyDHvzuC2TmM%2FhgEQHtjX7wNOi3jx5jgjLh4G0HksAd0FEXMKc5dexmw7UQeL49MPvdA6ePOj2fs4K%2BYDquLLdYPJf3q6CqUmLxm0pTV0lO9M8MVL1SNXuEDPyFZrLoseTCfjf%2BUJsV6val%2Bkdaw2se5EQOX83HYqN%2Bl%2Fs07pBL1cK%2FGlJuy0uwxach9%2BzemymmxhzEQwrL9CXYywM9FDO%2BJEBSLf%2BK2j%2B1VHts%2BHl5hiyiEYX%2FhowkT0CBFR%2BmunpnLb418QMAGNSpJ%2BIIYxXhs4R9piSHrS3U6n3%2F5hg6KVZTgDirJ3FbdP%2B4Gbci%2B9saTLKQBX%2FwvslnGxvvy%2BvJoiKTLN%2Bp91Bv8nksOUe69oW0CCnyt6nkzGYDihNy1YdsBeACMIhOuE6ITDrkg6ZJ2I0%2BBB1xJjtIQHJCMO4sCvAekg35YUMJqP77wGOqUBmXHS40zTIzIR7x9bfGZ2zSsoyu3yMxTHvHLjsKlHHhz9fnLuvziXGy74U1HX10XNdGBvD1K%2FKz%2FrCs5hMs6m0U8fDIHBhfOxCwOyTgGeiTtoyvFiFc4zT%2Fd6%2BBoqmJLOfFG0V36DvzdgvvBcr9mZhcDSBqteayT8Pwk011c6EVA4iyLEbpWrelf77dmnYxKkBZATXpGXcTWDwDSkPQvcgyYM8O9Z&X-Amz-Signature=a4b1a8c9d17e9764a5d98af47224c90545770a1fcad4ff05444d53db0351cf03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
