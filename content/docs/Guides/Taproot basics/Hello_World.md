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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSAPX6KV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEtSARFQUwiigNhxlpV9Kmx1C5cvsF3e7Lu11XD6o0OIAiEA%2FMtez74hskYrqo%2BrOXOKqg0ps3SwBcvUhjqHdJ%2Fa4TQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEdvRKKeA5ttRtDdzyrcA3EzjaOdol7Qj9%2FJWAFWxsNAHyE%2F%2BbjM%2FQwfJO0bXCeO%2FfuqJ2j7rXDdvCY3nmSkjPgESxDc3qN5q9CIRKQyB3LJmEGtoRSDeVLDpyCOh2iArNDtWJsQZl8GiNhBbZa4ia7TB35DmNfTZCjtDCscoxnErFkLxKlHsvFOCpd36GX7hUYt5rq3bLaiK9REVf9WM8hdjHQq82JpCALSLaveu0s57dxNe3%2BkGv58yi4l3gTwh3mLbIjXDaTcJz8S2Qt75tJzgkuq8LI%2FDrmsy0K51Fj1XEZ0ZfuRDIVxazM6XlMPhnGbesUd10xwFrX01yurpfa9XT1PWod4yxUCvADJ9nzgAhTnfRQemuN92pT1uoZK4RxO0HtHYzyA3NZVIs7A2tTmEUR5PAShwwh9OBz%2FbeBCf%2Bz6jRAPemz4BxHnSlr2TDCWhUlqF31eclmCOoDyNkMAAK11eSVikhuHJNeNWF%2BGPI5JS%2F2CV93kT0OWh23lqDDUah6DzOLCI2DfnxNNr4zMmhmNA8e1rCszx8qrB3pKxLaj9jZBM5h28oSX7566C5R3IkgX1G3ktnaO9eFc4qdF2HX%2Bqw7G5aOYcdpoygorf4gNPe1rUECjkOFgRemNJbrnYeO5fvxS9Z9oMPPwl8EGOqUBXqdQ4%2FrN8UI0ogpRZ2ZtEv8G1IhUlw9LY0OA878Jtp2YIMiYVjFYTCbl9ueAkFoxeSfJ0Yf0A59zvIbcS0juu17dDG0RZKDP%2Fvdnbz5qo6KkxJD5phaoPZhq4YmQ0Zi9N8%2BUq6T5dwwVpohfgiX80H3XxYXMrAMQTS4bgl2CP%2BuQSI9xK7vmC0nUIl1Q0Qk%2FmWdNVb5wiRdhDMlklyxG9Vu7vCEI&X-Amz-Signature=29b034c80e5dbf8685d0403f4af1e15036bc9831d84345fc65b686dcdcdba15c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSAPX6KV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEtSARFQUwiigNhxlpV9Kmx1C5cvsF3e7Lu11XD6o0OIAiEA%2FMtez74hskYrqo%2BrOXOKqg0ps3SwBcvUhjqHdJ%2Fa4TQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEdvRKKeA5ttRtDdzyrcA3EzjaOdol7Qj9%2FJWAFWxsNAHyE%2F%2BbjM%2FQwfJO0bXCeO%2FfuqJ2j7rXDdvCY3nmSkjPgESxDc3qN5q9CIRKQyB3LJmEGtoRSDeVLDpyCOh2iArNDtWJsQZl8GiNhBbZa4ia7TB35DmNfTZCjtDCscoxnErFkLxKlHsvFOCpd36GX7hUYt5rq3bLaiK9REVf9WM8hdjHQq82JpCALSLaveu0s57dxNe3%2BkGv58yi4l3gTwh3mLbIjXDaTcJz8S2Qt75tJzgkuq8LI%2FDrmsy0K51Fj1XEZ0ZfuRDIVxazM6XlMPhnGbesUd10xwFrX01yurpfa9XT1PWod4yxUCvADJ9nzgAhTnfRQemuN92pT1uoZK4RxO0HtHYzyA3NZVIs7A2tTmEUR5PAShwwh9OBz%2FbeBCf%2Bz6jRAPemz4BxHnSlr2TDCWhUlqF31eclmCOoDyNkMAAK11eSVikhuHJNeNWF%2BGPI5JS%2F2CV93kT0OWh23lqDDUah6DzOLCI2DfnxNNr4zMmhmNA8e1rCszx8qrB3pKxLaj9jZBM5h28oSX7566C5R3IkgX1G3ktnaO9eFc4qdF2HX%2Bqw7G5aOYcdpoygorf4gNPe1rUECjkOFgRemNJbrnYeO5fvxS9Z9oMPPwl8EGOqUBXqdQ4%2FrN8UI0ogpRZ2ZtEv8G1IhUlw9LY0OA878Jtp2YIMiYVjFYTCbl9ueAkFoxeSfJ0Yf0A59zvIbcS0juu17dDG0RZKDP%2Fvdnbz5qo6KkxJD5phaoPZhq4YmQ0Zi9N8%2BUq6T5dwwVpohfgiX80H3XxYXMrAMQTS4bgl2CP%2BuQSI9xK7vmC0nUIl1Q0Qk%2FmWdNVb5wiRdhDMlklyxG9Vu7vCEI&X-Amz-Signature=1e136de109e8492cea228e45d4fc82e2b054406d8cb24dce252cbe5b3ba4a645&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
