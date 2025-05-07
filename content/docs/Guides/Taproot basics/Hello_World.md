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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLIV2AO6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD7eYJR6LY03m2lgIRHlMtJv%2BIhV8z3JQ7oI75sv9sigIgfhkraWqXmUGAmYBsUA819XG2uaH9VyLOYy5lPsrmTgMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDQcdOUQk7iWCfQVqCrcAxaVfTxTzjWb7QCwl91ka576LR8lU5NMFWaQvzUpt%2F30OT3rm31sVrDGCnRz6D7KvEpi23PC2ZW%2BuO3PgfMVE3WsLD6%2BgJ5MnKGuxRl%2F9%2FTRvxMXthqc8B6CpisAfhk4UvhyNR1ECGgGHSVTfwEfzN89wVXg5lbUmqDPvRsE%2BmTvrhOYrPx4NaFUiZ4N4JkLrQu%2FdRgSTsklJBgTXXbG6BFd5e1YraTeuLYFVCRfjsXKIHWP%2B48Fwq9Hc24MKh2rKbmzAQgKKAQOaikiVR9wW4bwVNSiY3%2B1QQbRR06ySHznkjmnobRvYKmFx6qrOLghwYqb5Dp3BptV6c1YLAzwyimvcFsWNiV95k98udhmP%2BKpe3XP0YBmDc12H1yEJ3%2FZlBjCNE3Rt5izYAAQzpdxZ4Cqea4PkwxPgiE0%2FzsZpSo5j0ymabPAXpeB3XiS%2FY8qZX3tovBnX%2Fic%2BcTK5LigjNodTAuoeMdNHTuUW9Y8aTfwBaBvNhpFn3raZIAlUmkrO9nz%2BGWvrg%2FvuruNxJLljnfd3SI9EFPUskQ4jRKFtBCpP1XXqa633VKgkNmW4DJdSYk7dcjM3gSHan9Tb3tXG6Cxg7XA9AkGQ%2B%2BRG9Kb1mm8evpR%2Fsn7c3pMtVkPMN6N78AGOqUBQkTN8vO5ErAHsQriZgXdRZ2Z12urTXIeGz%2FttShxuaylEtqkEsZ1cxGiu6rvQGoB%2FA51c4w4h0JBcovuTH3I%2BTQ2R62r7fBk5WlIzMTGbhRVYxeKXkQlejYGuBuowT%2FlpI3Oauflut3HLAeRcTrWEbkKMMZM2PAXCSvVZcPy0wrQCwclP2%2B50zXhtH9XLbG9qba02%2Fg%2BagstbezAG%2FhM4Qa71jL7&X-Amz-Signature=620d386b985f7ddb0c36f168a34bb2e9e16b841b5458bcf0d549d664df481122&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLIV2AO6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD7eYJR6LY03m2lgIRHlMtJv%2BIhV8z3JQ7oI75sv9sigIgfhkraWqXmUGAmYBsUA819XG2uaH9VyLOYy5lPsrmTgMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDQcdOUQk7iWCfQVqCrcAxaVfTxTzjWb7QCwl91ka576LR8lU5NMFWaQvzUpt%2F30OT3rm31sVrDGCnRz6D7KvEpi23PC2ZW%2BuO3PgfMVE3WsLD6%2BgJ5MnKGuxRl%2F9%2FTRvxMXthqc8B6CpisAfhk4UvhyNR1ECGgGHSVTfwEfzN89wVXg5lbUmqDPvRsE%2BmTvrhOYrPx4NaFUiZ4N4JkLrQu%2FdRgSTsklJBgTXXbG6BFd5e1YraTeuLYFVCRfjsXKIHWP%2B48Fwq9Hc24MKh2rKbmzAQgKKAQOaikiVR9wW4bwVNSiY3%2B1QQbRR06ySHznkjmnobRvYKmFx6qrOLghwYqb5Dp3BptV6c1YLAzwyimvcFsWNiV95k98udhmP%2BKpe3XP0YBmDc12H1yEJ3%2FZlBjCNE3Rt5izYAAQzpdxZ4Cqea4PkwxPgiE0%2FzsZpSo5j0ymabPAXpeB3XiS%2FY8qZX3tovBnX%2Fic%2BcTK5LigjNodTAuoeMdNHTuUW9Y8aTfwBaBvNhpFn3raZIAlUmkrO9nz%2BGWvrg%2FvuruNxJLljnfd3SI9EFPUskQ4jRKFtBCpP1XXqa633VKgkNmW4DJdSYk7dcjM3gSHan9Tb3tXG6Cxg7XA9AkGQ%2B%2BRG9Kb1mm8evpR%2Fsn7c3pMtVkPMN6N78AGOqUBQkTN8vO5ErAHsQriZgXdRZ2Z12urTXIeGz%2FttShxuaylEtqkEsZ1cxGiu6rvQGoB%2FA51c4w4h0JBcovuTH3I%2BTQ2R62r7fBk5WlIzMTGbhRVYxeKXkQlejYGuBuowT%2FlpI3Oauflut3HLAeRcTrWEbkKMMZM2PAXCSvVZcPy0wrQCwclP2%2B50zXhtH9XLbG9qba02%2Fg%2BagstbezAG%2FhM4Qa71jL7&X-Amz-Signature=4adbf1eb39a7a1bbfe33f885221fa746b654947c17205ca6c158add7c23d9035&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
