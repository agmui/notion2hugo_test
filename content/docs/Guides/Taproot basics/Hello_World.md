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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRD2ALTE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn5in2BLnZw73bDrDTO8BZzxCOMago%2Fyzjeiy6BEeD%2BAiEAkFlMN3rof3IvcgsPSakX86NN4Ehe1Z0AO06fgGB0jQ8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd4OQ2efzd11QRICSrcA5HBNLBiggN%2Bm0yaIfuGTRWI3a%2FbySzhwTgyDyYtIIBfLg4OVwPzSxs9Mhw42HJLEzjVII1F8hcw%2Bkgl4sZ%2FPKyaHuAV%2Fg6pA03NdBJl6Zn1MeFidu22i39BAQZFVakqy4QAc55NsqT66j0rTJv3OQcfmpl2k%2FJpuCRk%2BoqzlGmP8dSHQ5nJSjLoiXM6Ws0a6JZOi1CICeHNt5hun8bKSzSRJMIqb0QuekI0E%2B7YrBaRVoKQxld4plDS83AgiZGoQc3TwxNUxiwk%2FRWlkM9b332ndeqeVkvoT7Wak3jVK0grIQDkSfQewitW4Jw%2FKUdgq1MzRKN%2Bbwsw9x%2FxugNZ4RZpjMUrNQipgltznAeZ9DbR6M%2BOMp9nmMSZFTRRZ%2Fq0LxbxtQVRtSfUJeisFGjFwGkhE9qvvWDihVr2Szn4A3Gt4njL2Mylr4WXhDd%2FHsU6n0hZza%2FC8ZbkfZVw6h5YQvrS0GNdd1Wf1epRLfP8HTomCaOhhy70EAlIYumOb0AQwKYA2eumeI1TebWK%2BJmczKEYG%2BBKh9HARNqG1rhOdV2ozdimo551MwhVBYABUDkLf%2BiXSZi9xRd6nhy3FKJcLiq3Db1Q99c6GtnBHqRbjxaCvNQiV3WF1v7Znub%2BMLXj9MAGOqUB7heDFIsc8vN56NgMxpB0UuctbarH5m5HdTcDwd5SDh9IbhnT0BqgHGXqvZ0dCkRRbHJUVcHBAhMHferGmaf4MmYg4lgFxXsbqtBzhoNQOeiPSBTMcP4PF4%2F6y5jL%2B%2F%2F5iHjD%2BKHAhQrMh2QflSJh34dFNetAEhZp2gdBnwhkGFajw30FID520xZaFyIq69aV7yuq%2FrsWdSNcF9zNX4%2BFIkXqqTZj&X-Amz-Signature=06fc87c026701cc0a162abc092d728861e5c3862f1c9c0fe47f2758f4f287af0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRD2ALTE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn5in2BLnZw73bDrDTO8BZzxCOMago%2Fyzjeiy6BEeD%2BAiEAkFlMN3rof3IvcgsPSakX86NN4Ehe1Z0AO06fgGB0jQ8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd4OQ2efzd11QRICSrcA5HBNLBiggN%2Bm0yaIfuGTRWI3a%2FbySzhwTgyDyYtIIBfLg4OVwPzSxs9Mhw42HJLEzjVII1F8hcw%2Bkgl4sZ%2FPKyaHuAV%2Fg6pA03NdBJl6Zn1MeFidu22i39BAQZFVakqy4QAc55NsqT66j0rTJv3OQcfmpl2k%2FJpuCRk%2BoqzlGmP8dSHQ5nJSjLoiXM6Ws0a6JZOi1CICeHNt5hun8bKSzSRJMIqb0QuekI0E%2B7YrBaRVoKQxld4plDS83AgiZGoQc3TwxNUxiwk%2FRWlkM9b332ndeqeVkvoT7Wak3jVK0grIQDkSfQewitW4Jw%2FKUdgq1MzRKN%2Bbwsw9x%2FxugNZ4RZpjMUrNQipgltznAeZ9DbR6M%2BOMp9nmMSZFTRRZ%2Fq0LxbxtQVRtSfUJeisFGjFwGkhE9qvvWDihVr2Szn4A3Gt4njL2Mylr4WXhDd%2FHsU6n0hZza%2FC8ZbkfZVw6h5YQvrS0GNdd1Wf1epRLfP8HTomCaOhhy70EAlIYumOb0AQwKYA2eumeI1TebWK%2BJmczKEYG%2BBKh9HARNqG1rhOdV2ozdimo551MwhVBYABUDkLf%2BiXSZi9xRd6nhy3FKJcLiq3Db1Q99c6GtnBHqRbjxaCvNQiV3WF1v7Znub%2BMLXj9MAGOqUB7heDFIsc8vN56NgMxpB0UuctbarH5m5HdTcDwd5SDh9IbhnT0BqgHGXqvZ0dCkRRbHJUVcHBAhMHferGmaf4MmYg4lgFxXsbqtBzhoNQOeiPSBTMcP4PF4%2F6y5jL%2B%2F%2F5iHjD%2BKHAhQrMh2QflSJh34dFNetAEhZp2gdBnwhkGFajw30FID520xZaFyIq69aV7yuq%2FrsWdSNcF9zNX4%2BFIkXqqTZj&X-Amz-Signature=c22f07f887b0257b2277912d06d9dab867b05abf6a7055523ccac31ddd31adfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
