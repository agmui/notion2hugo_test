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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPMLNRK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi%2FENvhgOKoXcvsJ8F%2Fv8PmLK2u6ey5Z2DlBpHF1SEkAiEA57cNuTEgWAkrWr8OeUwg8C6prdNVrVdoqYaaqmSEBhkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0l41WDpZgd8PuEWCrcA1UBnn7BCsD9%2FxK4WOLvIwKEa2jCJdewYI%2F8m%2BPjgLNlsDeWTkjqe8R27v%2FbhW9bEhThdoJNHCMMOnZeQRsp96wNYErCftx3MaOUGH57y6dsAQSj0GbdYJO6tOpjwFpyBt6wfHrAbtkdWJ90WQFywRX60ZRoafZqliICm3nZqtcZYFM0%2Ff5HT9ueqlDu5qKmPBGRt65o6xFPM7yLwvnMWPlw%2FWFN5j8RcFofejD4053uGSrPxR9haPbVIkX4hJYSq98Op7coKe5vcjcD9ymS1jdDsk1wldRK7eS6sAYpERmuSw%2BtGC2oW%2BRXjrMXKkwch9PNiza9fm8VLC1VBlwSrfMfR5hjTeE%2FfpW3E6R4BrklkNhxWoZR5NIoCsnrJjhJ3UbmNT%2F6Gd6dkZt58gfqTk37C%2Fyng%2BjsD2ogUa7fMVDbM8leWYPScHoQXwHiDVS7gE4fZw2OaxXflG2xZhbidtNn%2FWCINqQTG6OpwiauLYDJ35bhGIC1JFB36ocPBMjOdRgag0UMRppOTIKan%2FWg86rphbr%2FP5a%2FVeOIZWVCoN7Y1HP%2Be1Sm1LLvh%2FjeVCEq3HJ5s6Hldps0w0UYDX6dlDWfIpkvzBNgkqlHctcaBmW7bEh0ANJTjxnt5MFyMN%2F4%2BMMGOqUB2LwFOiiFf8YNv01aH%2BCZeqXLDsr8E7d28dbuXbI4eQz%2BIdIsUxI3%2FkyjFeKzY8I9BqJwMacbrHtBvJW2l7JqfyDhzrKQ0szrVDtF%2Fs1pRqJ0s0kumioSCmHasNsYHusL%2Fuxa4%2BpFZR%2BPZ1cVM7ijkLfhKWE6j07iYHS937wkbLIti5lCtMwwn5UgU3K0KiSf6iYvhDLHrnxeBqOr8dfaAJtikz0G&X-Amz-Signature=47423dd9e2ecce29422467bce6995a157d8e7f076dc8df7d5110868ced5f98ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPMLNRK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi%2FENvhgOKoXcvsJ8F%2Fv8PmLK2u6ey5Z2DlBpHF1SEkAiEA57cNuTEgWAkrWr8OeUwg8C6prdNVrVdoqYaaqmSEBhkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0l41WDpZgd8PuEWCrcA1UBnn7BCsD9%2FxK4WOLvIwKEa2jCJdewYI%2F8m%2BPjgLNlsDeWTkjqe8R27v%2FbhW9bEhThdoJNHCMMOnZeQRsp96wNYErCftx3MaOUGH57y6dsAQSj0GbdYJO6tOpjwFpyBt6wfHrAbtkdWJ90WQFywRX60ZRoafZqliICm3nZqtcZYFM0%2Ff5HT9ueqlDu5qKmPBGRt65o6xFPM7yLwvnMWPlw%2FWFN5j8RcFofejD4053uGSrPxR9haPbVIkX4hJYSq98Op7coKe5vcjcD9ymS1jdDsk1wldRK7eS6sAYpERmuSw%2BtGC2oW%2BRXjrMXKkwch9PNiza9fm8VLC1VBlwSrfMfR5hjTeE%2FfpW3E6R4BrklkNhxWoZR5NIoCsnrJjhJ3UbmNT%2F6Gd6dkZt58gfqTk37C%2Fyng%2BjsD2ogUa7fMVDbM8leWYPScHoQXwHiDVS7gE4fZw2OaxXflG2xZhbidtNn%2FWCINqQTG6OpwiauLYDJ35bhGIC1JFB36ocPBMjOdRgag0UMRppOTIKan%2FWg86rphbr%2FP5a%2FVeOIZWVCoN7Y1HP%2Be1Sm1LLvh%2FjeVCEq3HJ5s6Hldps0w0UYDX6dlDWfIpkvzBNgkqlHctcaBmW7bEh0ANJTjxnt5MFyMN%2F4%2BMMGOqUB2LwFOiiFf8YNv01aH%2BCZeqXLDsr8E7d28dbuXbI4eQz%2BIdIsUxI3%2FkyjFeKzY8I9BqJwMacbrHtBvJW2l7JqfyDhzrKQ0szrVDtF%2Fs1pRqJ0s0kumioSCmHasNsYHusL%2Fuxa4%2BpFZR%2BPZ1cVM7ijkLfhKWE6j07iYHS937wkbLIti5lCtMwwn5UgU3K0KiSf6iYvhDLHrnxeBqOr8dfaAJtikz0G&X-Amz-Signature=14c71f296d29338193c7ff3570c9eab8bb7ac123725954e70c0297da2228b813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
