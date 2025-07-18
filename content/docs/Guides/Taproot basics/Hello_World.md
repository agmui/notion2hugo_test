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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7HV7YW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICqCi7L9Hg840cZ5ZKv0IvDSGcOrw1Ra6EucgILbo%2FM7AiEA8%2FO7vtqineUt1OmOR5llnmPB4HfZOkrUF4YG9ebl50cqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFFlN8SO%2F1t%2B5gyfyrcA9wJWZb7Q%2BTiepU1UBKe8X6nqvyPjaFs3IcqTNfA8dqYyzT5NzlgaI%2FxZ0GaZzA9povwXJnoFdQxIOhrajbPlcT7M4tcNTgEIdq6BjLspCjYRHPsZfCu16AEs1vGkpNR8zsjoGXzDNpTmdbm2ymdyZk2N91kUcHd01Wvq%2FQiqfpt7WiNtu8Gohpqiit7uB%2FH1z89qfgDMxcu%2F5SdkNAoucvkJBoXaZtQjldP1agNob9sJehQK6sDsBWU2T7Hq26g5oacqxthwHtwO%2FNOgubHoyUOwgi7EhX971xL2h3zkxMQUq%2FyLwuZxc%2BLXGD1OyFYHatZV2TkN51SMEwUNYRH9GIYpNejioyY0UNsmEqCbZpm6L3dl%2B2yYixQyhzTUP5s4OKZadAmh0ZrcLao3YDVynosbOeXACnNQWVg3WdZkRiOSQw9wGKM8tzEL7vkFMFAD2loIoy0dpGmc7yMcRChCQ3zNRinPKsfYriHDwPzjh5nctvFxhGdCbtOQ2Hn%2Fi11mMQer1bGxLaAhTniaqPtr3ICu8JuXKYwokUts2zvj8zQpEcr%2BgrgwZoFlGrQAET3FR2HvyYQ6KfmTiRsbZjGAgNor0l49%2BdBPgTxB%2BmjXoQcb9XJM2zYbcEtdlv7MK7P6MMGOqUBVaJ35XVlL3HeZAgfjkJm6hczuTjdGYdR0sWbzer8YNsIp%2FdfG8N5LFspeekqMMs6Qz1NntpcuAkHj5yTtiNd2oogPQ7%2BTaP6UjA%2BeoZ%2B5ZehddPuATf0GVeLunFc983JuyZ19PT6DYw5t6pxnBAz0MOq6s2bQnS%2BrpIR4BIcpqUVVpgRTH8DtjctxW6wiKjXUxbrzt0vcPQtXEq9knuTtgF0PLwb&X-Amz-Signature=c56b3ba3bbff0c4232a3f8a5908827b0f290253775b50a08374e13a306593d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7HV7YW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICqCi7L9Hg840cZ5ZKv0IvDSGcOrw1Ra6EucgILbo%2FM7AiEA8%2FO7vtqineUt1OmOR5llnmPB4HfZOkrUF4YG9ebl50cqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFFlN8SO%2F1t%2B5gyfyrcA9wJWZb7Q%2BTiepU1UBKe8X6nqvyPjaFs3IcqTNfA8dqYyzT5NzlgaI%2FxZ0GaZzA9povwXJnoFdQxIOhrajbPlcT7M4tcNTgEIdq6BjLspCjYRHPsZfCu16AEs1vGkpNR8zsjoGXzDNpTmdbm2ymdyZk2N91kUcHd01Wvq%2FQiqfpt7WiNtu8Gohpqiit7uB%2FH1z89qfgDMxcu%2F5SdkNAoucvkJBoXaZtQjldP1agNob9sJehQK6sDsBWU2T7Hq26g5oacqxthwHtwO%2FNOgubHoyUOwgi7EhX971xL2h3zkxMQUq%2FyLwuZxc%2BLXGD1OyFYHatZV2TkN51SMEwUNYRH9GIYpNejioyY0UNsmEqCbZpm6L3dl%2B2yYixQyhzTUP5s4OKZadAmh0ZrcLao3YDVynosbOeXACnNQWVg3WdZkRiOSQw9wGKM8tzEL7vkFMFAD2loIoy0dpGmc7yMcRChCQ3zNRinPKsfYriHDwPzjh5nctvFxhGdCbtOQ2Hn%2Fi11mMQer1bGxLaAhTniaqPtr3ICu8JuXKYwokUts2zvj8zQpEcr%2BgrgwZoFlGrQAET3FR2HvyYQ6KfmTiRsbZjGAgNor0l49%2BdBPgTxB%2BmjXoQcb9XJM2zYbcEtdlv7MK7P6MMGOqUBVaJ35XVlL3HeZAgfjkJm6hczuTjdGYdR0sWbzer8YNsIp%2FdfG8N5LFspeekqMMs6Qz1NntpcuAkHj5yTtiNd2oogPQ7%2BTaP6UjA%2BeoZ%2B5ZehddPuATf0GVeLunFc983JuyZ19PT6DYw5t6pxnBAz0MOq6s2bQnS%2BrpIR4BIcpqUVVpgRTH8DtjctxW6wiKjXUxbrzt0vcPQtXEq9knuTtgF0PLwb&X-Amz-Signature=229417680fcd806b1a49dae2f13e7cd680c3eafa18c09035360f1d41e68189a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
