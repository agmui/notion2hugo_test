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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPBOVLS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDSGpbyuZDResUeC8ONFRPObID7qFxCDRwuQqlsWD2qUgIhAPD%2FT5GJoMlhle9ykrzrTZ25LUS%2FI1WoM8zozIknhCDFKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SWWZGd8ibkGfn60q3AM6u5x7rHyFVrDrm1NBS%2BadDirMc7AmOcuYiqbJSdR7PDbmG0hAZZNbnYn%2BFHe2DWhZvU0cI5P367Gxuf9dGvNNEX0NFWNoLobkW5vp6JJwLwc0AuSx63dmqXKRILA9bXVHbC346bwkuQ1pg6RD393D%2Bm8z137GnD4a%2FH9VxnqWduCZfvR%2BzkB6ROq6EPyOKdJwz1Di2vAQjMz6ny6jCv0nb4utZ0sZwZuO2%2F0Ql7LE60PBEYG1OMZz3vkaLp5oV61OMCEG5kHjnoOtxM2V%2Fo%2F%2FArpAXhh%2BJKs2FNHn1ek8QWh4ppOD9CbLj1hO6Z8L80dfi7%2BizrGg2slu2BIizYNd%2BXWUGCiQINn%2B57MqX03yZ0NVMQZ3hSMv0AKhsoPd7gOIuNBVx6v4GtoeB%2BENUIhQqN64zv06KSRkh5ernfSJHBl2sP%2FPMjVdMnRhBf3qoYxtI7JFp3SvswD27poZdndRZIABkhRuPl1wxDzctqd0bWzajIGPBapJE0fxpvgIXA4OG14Vw5ITw%2BjjhEIqYhilv31%2Bh6%2F510Ypf7Lwbi2xfCTtk%2FWW7llAZIEtSeuc9gjOpES2N5s83%2B4DFHfjTE67KjmlIcFk30QL%2FQnLbdWZ0KCRVcsQEHPsCJrnBDCD8drABjqkAWBoBctxcPKQFgBqR1TQ7dWPWm0tUS76aJakDRijVlNwwwAN0cceWQ2dXL%2BvQ6WsKtifv8ZgyA%2B1HFTRiHGwQyiT8THpEDOPLNecdiR%2FMhpjUyTHP8Ca0ajdPImXUgrYrlucYQfkB7yIuXM1UItENOD%2FM3XV5erd2Jyss1mSd8Cy91ZgXyQiSUTzWCBZtWBkauejAjyVQOlme9LxUHg3Y8Q3Fz7C&X-Amz-Signature=fb0c411f0bd7c3c74966fa74b43a1359fee01f2cb8a2b0181c4b7f25d95fa2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPBOVLS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDSGpbyuZDResUeC8ONFRPObID7qFxCDRwuQqlsWD2qUgIhAPD%2FT5GJoMlhle9ykrzrTZ25LUS%2FI1WoM8zozIknhCDFKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SWWZGd8ibkGfn60q3AM6u5x7rHyFVrDrm1NBS%2BadDirMc7AmOcuYiqbJSdR7PDbmG0hAZZNbnYn%2BFHe2DWhZvU0cI5P367Gxuf9dGvNNEX0NFWNoLobkW5vp6JJwLwc0AuSx63dmqXKRILA9bXVHbC346bwkuQ1pg6RD393D%2Bm8z137GnD4a%2FH9VxnqWduCZfvR%2BzkB6ROq6EPyOKdJwz1Di2vAQjMz6ny6jCv0nb4utZ0sZwZuO2%2F0Ql7LE60PBEYG1OMZz3vkaLp5oV61OMCEG5kHjnoOtxM2V%2Fo%2F%2FArpAXhh%2BJKs2FNHn1ek8QWh4ppOD9CbLj1hO6Z8L80dfi7%2BizrGg2slu2BIizYNd%2BXWUGCiQINn%2B57MqX03yZ0NVMQZ3hSMv0AKhsoPd7gOIuNBVx6v4GtoeB%2BENUIhQqN64zv06KSRkh5ernfSJHBl2sP%2FPMjVdMnRhBf3qoYxtI7JFp3SvswD27poZdndRZIABkhRuPl1wxDzctqd0bWzajIGPBapJE0fxpvgIXA4OG14Vw5ITw%2BjjhEIqYhilv31%2Bh6%2F510Ypf7Lwbi2xfCTtk%2FWW7llAZIEtSeuc9gjOpES2N5s83%2B4DFHfjTE67KjmlIcFk30QL%2FQnLbdWZ0KCRVcsQEHPsCJrnBDCD8drABjqkAWBoBctxcPKQFgBqR1TQ7dWPWm0tUS76aJakDRijVlNwwwAN0cceWQ2dXL%2BvQ6WsKtifv8ZgyA%2B1HFTRiHGwQyiT8THpEDOPLNecdiR%2FMhpjUyTHP8Ca0ajdPImXUgrYrlucYQfkB7yIuXM1UItENOD%2FM3XV5erd2Jyss1mSd8Cy91ZgXyQiSUTzWCBZtWBkauejAjyVQOlme9LxUHg3Y8Q3Fz7C&X-Amz-Signature=0e8af6356c38a4a056f6b8e346daaa14badd9ebdac7ad20a0d3c9bc14490928e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
