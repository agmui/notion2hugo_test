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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=81e8886c5c7d660e5cb0e776328dd6c4f50571ff64b04dfdba8d74c53d0fa81b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=7b20e9774b080f30903b3a423bac18ac74a776412f0331addc8be489366f7742&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
