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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HR442SG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXRMcMNf%2Bo905vRZs%2F82BsPxEF1tXtmBwY9zpBes%2FkAIgJsn%2Fb2WOSpjERKCWVnIuP6TNEYYiJU8eOsQbz0zwQUEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKMBrKTxY0MEOonpJyrcA3%2F8KCspup91EYg%2FT8Hm%2FAdzVqh8o0jiFiPZ8bB8gQyp93GPDWIgCOnPMeiDI%2BUWpCXBBYqgBzCBCeBNoYdCCSJ01dIjXAJZyTQ7Cw%2FHUcC%2BPqzRdNpn5QPQYPJK%2BkBVhA7%2BwjKHfssDe8rzl20th5XYr3RJYV%2FdmLvER9SPmFB21aaUNCe1%2BVYrESn9zB1IsjINsk9ztbTWfncIDIn%2FqcjdSV%2BVZVfmCEnzEQMEdUzcBMWi3Mwn8Zso%2B1BK%2FsWX5KLw%2FqPaqOQaAa8Y3siz25yOfZIy3Ic0Fa6zv%2BscCUfAw4e%2FKLMS1jhw1wvxZnE1TomAbEdYnNHFtXtpvzdqJrUPAdl52eFAaeUBQIY%2F9kkHmf0%2BhvB%2F%2FQTv6SUMAnKHDOSEOimJYKh3RqxVJzsiPF8z%2BGb1cSeePIf7eKbmP7rhNnDFZIo%2FpW%2BvyY8I9KoQnVro2PoBqglg3uJeFTUUpoR%2BHO5vsLJ2Dci4piSxGBsnrU9yq9idrW8VEXio1hVvBuzz3bAxObpTckMuIHWCqf7eW2yBCE8YROvQ4YDSw6PXlr2nnhtLG55HSU%2FMSP0RTTr2w1ZYzfFQ6WyJZgyeioJ5N40tI91htaxPMp3KNJa%2FdwpFhcylNADsuvOpMKCk0L8GOqUBdQDZvW5I1uAFxWuociXJRTZdYfgUAzvByCN5Tk7uuJWR3C0Qy9hew4qnTTnwVAcbbssp1VJZeWW8IhqfwL6J89p0L8%2BD1tM5ZiN9GcQIXV%2BtjVsv3svuWwxYyzk5YiyyzgqZ4nJvyNEjBMO9TksRwd%2F94zWYEs%2BwEbRcVTiCZUIvIfMi0VBm515OU4EsuWCzxOEEue1GTyc2EeoUEkN%2Bj%2BK4R8JZ&X-Amz-Signature=b91bab13a7ce23d9206bc24977b3738733ffbb514197daceffda1055c655c5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HR442SG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXRMcMNf%2Bo905vRZs%2F82BsPxEF1tXtmBwY9zpBes%2FkAIgJsn%2Fb2WOSpjERKCWVnIuP6TNEYYiJU8eOsQbz0zwQUEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKMBrKTxY0MEOonpJyrcA3%2F8KCspup91EYg%2FT8Hm%2FAdzVqh8o0jiFiPZ8bB8gQyp93GPDWIgCOnPMeiDI%2BUWpCXBBYqgBzCBCeBNoYdCCSJ01dIjXAJZyTQ7Cw%2FHUcC%2BPqzRdNpn5QPQYPJK%2BkBVhA7%2BwjKHfssDe8rzl20th5XYr3RJYV%2FdmLvER9SPmFB21aaUNCe1%2BVYrESn9zB1IsjINsk9ztbTWfncIDIn%2FqcjdSV%2BVZVfmCEnzEQMEdUzcBMWi3Mwn8Zso%2B1BK%2FsWX5KLw%2FqPaqOQaAa8Y3siz25yOfZIy3Ic0Fa6zv%2BscCUfAw4e%2FKLMS1jhw1wvxZnE1TomAbEdYnNHFtXtpvzdqJrUPAdl52eFAaeUBQIY%2F9kkHmf0%2BhvB%2F%2FQTv6SUMAnKHDOSEOimJYKh3RqxVJzsiPF8z%2BGb1cSeePIf7eKbmP7rhNnDFZIo%2FpW%2BvyY8I9KoQnVro2PoBqglg3uJeFTUUpoR%2BHO5vsLJ2Dci4piSxGBsnrU9yq9idrW8VEXio1hVvBuzz3bAxObpTckMuIHWCqf7eW2yBCE8YROvQ4YDSw6PXlr2nnhtLG55HSU%2FMSP0RTTr2w1ZYzfFQ6WyJZgyeioJ5N40tI91htaxPMp3KNJa%2FdwpFhcylNADsuvOpMKCk0L8GOqUBdQDZvW5I1uAFxWuociXJRTZdYfgUAzvByCN5Tk7uuJWR3C0Qy9hew4qnTTnwVAcbbssp1VJZeWW8IhqfwL6J89p0L8%2BD1tM5ZiN9GcQIXV%2BtjVsv3svuWwxYyzk5YiyyzgqZ4nJvyNEjBMO9TksRwd%2F94zWYEs%2BwEbRcVTiCZUIvIfMi0VBm515OU4EsuWCzxOEEue1GTyc2EeoUEkN%2Bj%2BK4R8JZ&X-Amz-Signature=e81221a451f0d13858579fe51f786988b026f24be8cb449b4a799368e10129c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
