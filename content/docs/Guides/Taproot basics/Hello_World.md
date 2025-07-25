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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=0be7b301c9e9f0df7bfe13ad1b31cd52e1facb0e4fb798d2d4df07b89b49b894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=14550fa026bb07f08ccd4e73be1a3b01659e54238f284865f53e965fafcd71eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
