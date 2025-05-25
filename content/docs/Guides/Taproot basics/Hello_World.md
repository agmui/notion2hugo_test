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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5RXREA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICcRF%2FGXYavDgNd099DCZlpXiNAGFNz098EJ1nCtYdZOAiEAnZKS2pHJxuOv9NEae2zmnomQ7Tc9MCmrm9lXJFClkV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHaOhVC%2Ft4rDCmdrUCrcAy3A%2FqYNGfRgRTZXQ168ga9DILIidEfjh8x7MSa7i2F11asC4gTmkJmtD64pLo4m5RDIDF%2FLTZ6rDwbi9XyqClFDPWx1EABeOdqfYqCUUetyC2RCh%2F3HBas1fHCSvCVn8HWyUl777R2hcfmOhjCreUpO5mLqIPDhX8%2F8XA6h7vlEqD1a92HBVcQSGYOtBQmrCyzhyjg1msbrbc2stmkomidoCvjsfRlaPM9VEcWggHcmVkkAD3zQOqXZyUm0TVxj9IO84480rVPrgBbU4ERcXItRbs0JB93e%2BFXr2SQFaj16EsyyR3pw3396Cgei2SeqG2x213%2BrNomnt3nPyW%2BiDTULRr9TlQ3iLKIkA%2BJv7NU5kwgSidc7eelY%2FBHlFJ6DLFEji8qIpUF5bHlFqf0mkksblx9hshzixa2ieLab0T1OVwSAfTXfe8aBeB85fEPqyBfsBA8osut7veMiim1fbzmbwxdV8N3fGzELGuyLSvAwivqJcogx6QBTDm8%2BMSv5nhON%2BsImaS7dgKV2DmEkwIwQCjGtahB5cwTYcd%2FdwFF%2B1FFmWWNB3l1egzTFJgvOx03u6OTipjxLoeY%2B40lNrM%2BUQWSpJ8LLIP57UXdlOuD%2BgtpPZctW9MoKB14JMLXFzcEGOqUBQ49NtXDdHoy9VN1Mm%2Ft39H%2FiWNWe%2FVkcH9lLbVRxftjoDdIERwdfVYGA5CWhtijop1OdK%2ByCDGJ3UOEaLkVszrYnGSFOudAEOLexsokgwFlvy6RyYRT655%2BLEGHdD5NUKX7mufPhmTyi9bTRF2EOj6spCLghrgysLfP4zuAPRUXP2bL7XJ7H3XVUW4ZtUREzVOxRixyH3cJfQxF6dR6gQxJ5oStD&X-Amz-Signature=6a309df4a6c893aa4d06fde0ebab89f02633fe87c77d925d017b1d69c37d67bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5RXREA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICcRF%2FGXYavDgNd099DCZlpXiNAGFNz098EJ1nCtYdZOAiEAnZKS2pHJxuOv9NEae2zmnomQ7Tc9MCmrm9lXJFClkV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHaOhVC%2Ft4rDCmdrUCrcAy3A%2FqYNGfRgRTZXQ168ga9DILIidEfjh8x7MSa7i2F11asC4gTmkJmtD64pLo4m5RDIDF%2FLTZ6rDwbi9XyqClFDPWx1EABeOdqfYqCUUetyC2RCh%2F3HBas1fHCSvCVn8HWyUl777R2hcfmOhjCreUpO5mLqIPDhX8%2F8XA6h7vlEqD1a92HBVcQSGYOtBQmrCyzhyjg1msbrbc2stmkomidoCvjsfRlaPM9VEcWggHcmVkkAD3zQOqXZyUm0TVxj9IO84480rVPrgBbU4ERcXItRbs0JB93e%2BFXr2SQFaj16EsyyR3pw3396Cgei2SeqG2x213%2BrNomnt3nPyW%2BiDTULRr9TlQ3iLKIkA%2BJv7NU5kwgSidc7eelY%2FBHlFJ6DLFEji8qIpUF5bHlFqf0mkksblx9hshzixa2ieLab0T1OVwSAfTXfe8aBeB85fEPqyBfsBA8osut7veMiim1fbzmbwxdV8N3fGzELGuyLSvAwivqJcogx6QBTDm8%2BMSv5nhON%2BsImaS7dgKV2DmEkwIwQCjGtahB5cwTYcd%2FdwFF%2B1FFmWWNB3l1egzTFJgvOx03u6OTipjxLoeY%2B40lNrM%2BUQWSpJ8LLIP57UXdlOuD%2BgtpPZctW9MoKB14JMLXFzcEGOqUBQ49NtXDdHoy9VN1Mm%2Ft39H%2FiWNWe%2FVkcH9lLbVRxftjoDdIERwdfVYGA5CWhtijop1OdK%2ByCDGJ3UOEaLkVszrYnGSFOudAEOLexsokgwFlvy6RyYRT655%2BLEGHdD5NUKX7mufPhmTyi9bTRF2EOj6spCLghrgysLfP4zuAPRUXP2bL7XJ7H3XVUW4ZtUREzVOxRixyH3cJfQxF6dR6gQxJ5oStD&X-Amz-Signature=85a5621b817b17eb750fab9c44daa0b36ebdc129037ff97d2d455a31d4e33ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
