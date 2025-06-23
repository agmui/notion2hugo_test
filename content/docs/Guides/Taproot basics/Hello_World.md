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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXYO37S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBnjJinK2JJn9ERG9%2B4jjlPLngFqsky5tI%2F6kYXw2kPtAiBtv0bSAeqi4w8v4gurDLC24TEkpGN21dEC%2F9Dqj0W7HSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMnm28LT%2Fj0EwY%2FwNAKtwD5qpanTd1tpffuEAywWGjWt8pznS%2FO9biyMnDpUaPpJKxzdEP4vtsQIf7mduPTrBZF6lns9P5hvDXUvF%2FzVX%2Fu%2B8Mf9d2aR0mS%2F%2FKSJpVqcnOZuKYjJnX4qO4E5ztztJ%2B6%2BSdnon69%2B7gDFoZWcssXKKbTd0wXedXQv8n%2F8bbqk5WY%2FGexYcRgGZoJHuWQ0kyDP6YzK8fF4PbvmuScqbnk7%2B%2FolBF5CtUuivnJNl5hf38cNoe6h62PVH83hjUQoIRv5PU8iuflPtmUZCY0wCvhjDXZqIr08O75HKKO12rGv4tUmPMvr%2Fr5P1Aif7JniQvWgj4azVGEPfcqud8vL0Sbw3WROT1A6EhugrmHPcC96fwnTuWcuqKp0wc9iMOHbplkjPNLE5X1ZBdoEFxNugpd4%2F7w25GccsK%2BFMf0GoT9l%2FUUU07c1NrEk%2F%2Be01UX9qryGh2omcXsbTF8H%2BzGQqJSRveA%2BC%2FqE7lv0CsIRtW%2FevOM%2F%2Bm0jv9sjcs9mcSqQsAxBon3chReF2eFByhi2UYibQKdEld%2B6NlUBmXQ1rOZCqx13GTDCQ%2FWokjhTemnq75rvw20GyJ0RQYVTGCbu4a54YIoUpaULdWJdIS2jpYkcQngxpB9g59a2aP2TIwrKrmwgY6pgH2fh4YFDISVrLGTUcsW2fuYv4i8VXDHCt%2FC0MdJE2jNLGvDcD64JlWZn39p51V%2F53bWhJo9KWrLzdt4ogzEQeOZrtK6J%2FWUbHoBMBrDW92WG%2BH5Atbzd3hHGOHhnF9GSTp%2FWIM3mfVtIcpCBSQ6Cye8DuxNwkf3CeoKFRpZVOfPLYD%2BfrJquXmVpvaHhKf8dTofR%2BFOuhm5P2%2BAIKVt6H4T0c%2F59JI&X-Amz-Signature=ae9b5818c503f27eb43ed99939e89b041ce97d58ea78ccc5b00c88997581c29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXYO37S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBnjJinK2JJn9ERG9%2B4jjlPLngFqsky5tI%2F6kYXw2kPtAiBtv0bSAeqi4w8v4gurDLC24TEkpGN21dEC%2F9Dqj0W7HSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMnm28LT%2Fj0EwY%2FwNAKtwD5qpanTd1tpffuEAywWGjWt8pznS%2FO9biyMnDpUaPpJKxzdEP4vtsQIf7mduPTrBZF6lns9P5hvDXUvF%2FzVX%2Fu%2B8Mf9d2aR0mS%2F%2FKSJpVqcnOZuKYjJnX4qO4E5ztztJ%2B6%2BSdnon69%2B7gDFoZWcssXKKbTd0wXedXQv8n%2F8bbqk5WY%2FGexYcRgGZoJHuWQ0kyDP6YzK8fF4PbvmuScqbnk7%2B%2FolBF5CtUuivnJNl5hf38cNoe6h62PVH83hjUQoIRv5PU8iuflPtmUZCY0wCvhjDXZqIr08O75HKKO12rGv4tUmPMvr%2Fr5P1Aif7JniQvWgj4azVGEPfcqud8vL0Sbw3WROT1A6EhugrmHPcC96fwnTuWcuqKp0wc9iMOHbplkjPNLE5X1ZBdoEFxNugpd4%2F7w25GccsK%2BFMf0GoT9l%2FUUU07c1NrEk%2F%2Be01UX9qryGh2omcXsbTF8H%2BzGQqJSRveA%2BC%2FqE7lv0CsIRtW%2FevOM%2F%2Bm0jv9sjcs9mcSqQsAxBon3chReF2eFByhi2UYibQKdEld%2B6NlUBmXQ1rOZCqx13GTDCQ%2FWokjhTemnq75rvw20GyJ0RQYVTGCbu4a54YIoUpaULdWJdIS2jpYkcQngxpB9g59a2aP2TIwrKrmwgY6pgH2fh4YFDISVrLGTUcsW2fuYv4i8VXDHCt%2FC0MdJE2jNLGvDcD64JlWZn39p51V%2F53bWhJo9KWrLzdt4ogzEQeOZrtK6J%2FWUbHoBMBrDW92WG%2BH5Atbzd3hHGOHhnF9GSTp%2FWIM3mfVtIcpCBSQ6Cye8DuxNwkf3CeoKFRpZVOfPLYD%2BfrJquXmVpvaHhKf8dTofR%2BFOuhm5P2%2BAIKVt6H4T0c%2F59JI&X-Amz-Signature=7d543f99bb9d76f4008b554b1c39fbdb0d05c52f48913c7454af1b7acccb17c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
