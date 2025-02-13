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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXTXEF4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KbgvXNy8VKrR83IQoaS%2BPu%2Fn9hRhazia3lARrcu8UgIgUhQwJTMVWpR0Ln%2B%2FbzOlsufcZx1ZAvi3t%2BOT5Wqq7DIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBQejfMfLD5lo%2FN6XSrcAzRtp6xDLi3EDaoA4uVzWBAjPZTLUQmF3ryApl1UCfceI0bjQhuAUUflDJ3U97TJlok1lUZwRjNbisXobdgRHNlqAW27TfUTi4PQhgx41MxnD37k7CN%2Fm2pzRuYdkgrfis4Vi3tl5xKeDLKyhVAMj0xO9%2BOxZPHQgLaCWv6tB0HfNhuntLCxOowk1foCTJoNyYyBF2WeNWoplvxuDIJaSO7hZQNkdXK%2B9f7Ou6AtO1BGRmxVXzLVWbwY%2FWCq6oCEI%2FlvjsD9EcDVG%2BvuVi72EbArnA1OpJiXtujwC7ogMn6QCTEqZpFT6ysMiw6Efp1Y4WlLt%2BC4ryZ3M%2B2DoyCrgUa1iOzo93Aj9lFJUy8qEGi378i44kJMEc%2BWHh1l0aQlxaIT1l%2BtYwtrhhWrBFRTaFCaJP9iaCIU4yQel9VRJUre%2FIhVSZYmB8Qx9dMO9u4NqLirjt2DFvQMP5sUeeyBxBiRLm2Y5eS0JyM7%2BKbizSw9FiKlviDY5nf6LMQ9aceEriQ7dkpn88rwmmflJV58VPc5v0jTRugS9lNNcefnur%2FKxTGz%2FdMXww62IDhyyJ3tHrKeti%2FNgrBnz88AJ6iniwFVLu2SdgGRLv4wTsSFs3ScgtWFFYwnUTR4q4AcMPDeuL0GOqUB2526wrSj5%2BD9NywqX%2FJmWjj7argRsL3mgDhKEUUHAGljtUSGeV6Ti7fcBzkpaah4ntEZdgYgnSPvuj4vfCFItjUkv3ASLNIlfezCw2cn3UesM46r0dfzVkob3TIhX0xN9kd%2BWAKRU1f09u9TBnU4DFxPMr98%2FnQVHD79fnd7HeVnh%2FtZl6OlPlirdO2ajmAn9YPnTubzCzTmHFy2HVM2uiuRw3PS&X-Amz-Signature=b018ca4221bbbacf4bf88799bc88baae50093383fae47c4b82c52f0c86982879&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXTXEF4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KbgvXNy8VKrR83IQoaS%2BPu%2Fn9hRhazia3lARrcu8UgIgUhQwJTMVWpR0Ln%2B%2FbzOlsufcZx1ZAvi3t%2BOT5Wqq7DIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBQejfMfLD5lo%2FN6XSrcAzRtp6xDLi3EDaoA4uVzWBAjPZTLUQmF3ryApl1UCfceI0bjQhuAUUflDJ3U97TJlok1lUZwRjNbisXobdgRHNlqAW27TfUTi4PQhgx41MxnD37k7CN%2Fm2pzRuYdkgrfis4Vi3tl5xKeDLKyhVAMj0xO9%2BOxZPHQgLaCWv6tB0HfNhuntLCxOowk1foCTJoNyYyBF2WeNWoplvxuDIJaSO7hZQNkdXK%2B9f7Ou6AtO1BGRmxVXzLVWbwY%2FWCq6oCEI%2FlvjsD9EcDVG%2BvuVi72EbArnA1OpJiXtujwC7ogMn6QCTEqZpFT6ysMiw6Efp1Y4WlLt%2BC4ryZ3M%2B2DoyCrgUa1iOzo93Aj9lFJUy8qEGi378i44kJMEc%2BWHh1l0aQlxaIT1l%2BtYwtrhhWrBFRTaFCaJP9iaCIU4yQel9VRJUre%2FIhVSZYmB8Qx9dMO9u4NqLirjt2DFvQMP5sUeeyBxBiRLm2Y5eS0JyM7%2BKbizSw9FiKlviDY5nf6LMQ9aceEriQ7dkpn88rwmmflJV58VPc5v0jTRugS9lNNcefnur%2FKxTGz%2FdMXww62IDhyyJ3tHrKeti%2FNgrBnz88AJ6iniwFVLu2SdgGRLv4wTsSFs3ScgtWFFYwnUTR4q4AcMPDeuL0GOqUB2526wrSj5%2BD9NywqX%2FJmWjj7argRsL3mgDhKEUUHAGljtUSGeV6Ti7fcBzkpaah4ntEZdgYgnSPvuj4vfCFItjUkv3ASLNIlfezCw2cn3UesM46r0dfzVkob3TIhX0xN9kd%2BWAKRU1f09u9TBnU4DFxPMr98%2FnQVHD79fnd7HeVnh%2FtZl6OlPlirdO2ajmAn9YPnTubzCzTmHFy2HVM2uiuRw3PS&X-Amz-Signature=5f43d8b7e5113a65f1fcfdd625830ba4929d16e70a84eb83f6adf9e38533958b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
