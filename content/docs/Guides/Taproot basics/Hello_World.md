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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA7GZTV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G%2Bhq924XYR086Oznft5iDSKGpQkXPRmdaaWsh3mlDAiBmvKnVwBtZM7Lk6TkQC4TYCd68VGUHXBxNB%2FwvpjFCNCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZqtEjRfSFnaaDY3mKtwD5dpc9i2YiBIHB5hWSjbkaI5PnmFIyLHToGX7y0%2BkwE51jbBwkhLwT84zR5s59n%2FLIYd07u99yjN0U4V29zA3JNdqrxh%2BayoGhp403xuflzqjwB8E4LKU2MfI4Oj%2FnrzwDUor%2BsfEEH4i5tNwVy71zNNpzcBQbBL7QTD2Azer%2Bv37sOlxWxAPTno4ZRhuMRfrF%2BNTIv7q01s6n1rNTZ4lHHHmkwpQ7%2BzNCUyW2U%2FC2j9EvOjLZnYqI%2FGa2TYks2Q46kID6uEVI73oGK6DeoNFTrqM8R1DhA0XdoJaoGzvx%2BCDnfgRahoIORQXovZCJHJQHFzd7WO47siv%2FG2JMCd5fbD8JB6vwyIlfrf1lpTPkHwUILroaYKlFoyW%2FMwBLpmWasBQObu9nlsQIukvpqGElEaitTgwgBJ1cVU8qlc0PO8Cbc1gb%2FYme%2BigTyP9yijJRcqFz8zQp3mB0B9bHX8DY%2Fq1nTXhzuVZ%2Bj6WyRWSIUvaHquUDUuZvfnWJpFgSJtnKL0FleFFK4tTMvUJXK%2B%2BGkpv6pFFLXOkGQJ8BR37xVWTGAOmwsRjXwBGc56%2BPmtzXkmdtNe9ojKtDetOBsozMjQlZ%2F6LYGywaBCl5DVt54uqCxftrKMkWn66vCAwje3kvQY6pgFOzPjbKz9Sz2SpWgxBYkAW9L%2Fj2mI96D8mRSJibm2u%2FsMUD6Ehe25YYsO9W1aqQmHEZVjNEiaiis0nA0pRCji7IgU7ZXRiQwOGRnX%2BTOQOOKydWy5wA%2F3CMPT3ObRpNYqFkV9qkdyktsRGihSCvuSIeTz65JD5bavtKC4AmqLYK4RvNIQKuhL98pUBRHlbqemcd%2FOYe1Jb31czG2oiLiOS%2FK8OswL4&X-Amz-Signature=f6c634f8fce3e938f6e598acc53ccdfb40e3d67e462b307e94da8862c03e4ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA7GZTV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G%2Bhq924XYR086Oznft5iDSKGpQkXPRmdaaWsh3mlDAiBmvKnVwBtZM7Lk6TkQC4TYCd68VGUHXBxNB%2FwvpjFCNCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZqtEjRfSFnaaDY3mKtwD5dpc9i2YiBIHB5hWSjbkaI5PnmFIyLHToGX7y0%2BkwE51jbBwkhLwT84zR5s59n%2FLIYd07u99yjN0U4V29zA3JNdqrxh%2BayoGhp403xuflzqjwB8E4LKU2MfI4Oj%2FnrzwDUor%2BsfEEH4i5tNwVy71zNNpzcBQbBL7QTD2Azer%2Bv37sOlxWxAPTno4ZRhuMRfrF%2BNTIv7q01s6n1rNTZ4lHHHmkwpQ7%2BzNCUyW2U%2FC2j9EvOjLZnYqI%2FGa2TYks2Q46kID6uEVI73oGK6DeoNFTrqM8R1DhA0XdoJaoGzvx%2BCDnfgRahoIORQXovZCJHJQHFzd7WO47siv%2FG2JMCd5fbD8JB6vwyIlfrf1lpTPkHwUILroaYKlFoyW%2FMwBLpmWasBQObu9nlsQIukvpqGElEaitTgwgBJ1cVU8qlc0PO8Cbc1gb%2FYme%2BigTyP9yijJRcqFz8zQp3mB0B9bHX8DY%2Fq1nTXhzuVZ%2Bj6WyRWSIUvaHquUDUuZvfnWJpFgSJtnKL0FleFFK4tTMvUJXK%2B%2BGkpv6pFFLXOkGQJ8BR37xVWTGAOmwsRjXwBGc56%2BPmtzXkmdtNe9ojKtDetOBsozMjQlZ%2F6LYGywaBCl5DVt54uqCxftrKMkWn66vCAwje3kvQY6pgFOzPjbKz9Sz2SpWgxBYkAW9L%2Fj2mI96D8mRSJibm2u%2FsMUD6Ehe25YYsO9W1aqQmHEZVjNEiaiis0nA0pRCji7IgU7ZXRiQwOGRnX%2BTOQOOKydWy5wA%2F3CMPT3ObRpNYqFkV9qkdyktsRGihSCvuSIeTz65JD5bavtKC4AmqLYK4RvNIQKuhL98pUBRHlbqemcd%2FOYe1Jb31czG2oiLiOS%2FK8OswL4&X-Amz-Signature=a64fc750763da96f439a08f851c691c9e19ab554f7755f513468d6fb8f2f9626&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
