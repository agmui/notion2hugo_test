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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERMTXPA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzwDAvF5teZeB2lvEK6H8%2BxE4IHy1YMAmfX87jWnM%2BGAiAEyCs4fOE4%2BU4939R%2BzXlITi91s7DMKZWH6v2k8xUGzir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM5E%2FWd0KIuDD7fMD7KtwDKtkTXFa9DR0WhwSGUk3OfSC0GmjTaTeiC9qESgez5hIgdhlq4CbnxNhzDyWDAJZJmH2hoD0D77q5PGlFV7%2F1zykZrsty0MjNx%2BQJxoFnUmNFn%2BgCgU0UHmIDcGm2HpkF%2FZBSmF4cu%2FPwzjk6BkTd8DjJ8QTaXOe8p9MwmY4fUyM87qeRpYWLjAh%2FfiknHQOISjsB16XIP%2Fmk2UdIJVf9YUio855a8d0tW7vFknH2TYpHimyiFvZqJ56k6kiyc9zETWAZrsvI6gkr6TSdXPG%2B1lJmsHOWCmlDiDM8Yxf2K4hSkObhm0b5T2hRbF1AK88DYM07c5a9IHJELBIEVDHEhjczw916ywcngDT0MGVyFYPob%2BW5N3uI69tkCK5vlJBTw3%2BlGPhK%2F28UkyRe3KgNENosYasgsMEU%2FNRY7UgoVMarOWtPIfr%2BXn5NtUF93lNgY7w0ZdNrpS7P4Dq0VWXCmUmcabZYR7CMcyGE5Z5oaiwzSZvvgICIYonjSrRNrbSRyTXDFAPtFI8GATgspW6AhXA14YUtfvEAuUZDW4RonLiOKzvx13rcsET8nfhP1C%2BdJi3Im9Pyf1JNzuhwrbXMYGheUE%2Fk31PsE5ICkJLNFEh8l3cIh%2FJWYvHDNZUw1df6vwY6pgEKzmlDsqWrFF8EFylALOv%2Fo4EeymRT%2FORapLl8sTJDB4DlVkjpYvjpfFYV5Gqo7FPQHJodJkm7sITlRHhNPatAlLne3lUQ8tYaQ3JcC1ot8yMFsQ6k6jCBDKzid9Qu992eNQIZx8Fi%2BboLRIhlrSYS9QMvJpsSXWLa59vET7OIPWB2CcFuwkZchZtlb7v1bB815gyT9MdubIrNBIz%2B8cWuVQo3KXNw&X-Amz-Signature=600970c04a1ee778436ab270ea7c1a57d16bb097e063739d796cbaccc59686dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERMTXPA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzwDAvF5teZeB2lvEK6H8%2BxE4IHy1YMAmfX87jWnM%2BGAiAEyCs4fOE4%2BU4939R%2BzXlITi91s7DMKZWH6v2k8xUGzir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM5E%2FWd0KIuDD7fMD7KtwDKtkTXFa9DR0WhwSGUk3OfSC0GmjTaTeiC9qESgez5hIgdhlq4CbnxNhzDyWDAJZJmH2hoD0D77q5PGlFV7%2F1zykZrsty0MjNx%2BQJxoFnUmNFn%2BgCgU0UHmIDcGm2HpkF%2FZBSmF4cu%2FPwzjk6BkTd8DjJ8QTaXOe8p9MwmY4fUyM87qeRpYWLjAh%2FfiknHQOISjsB16XIP%2Fmk2UdIJVf9YUio855a8d0tW7vFknH2TYpHimyiFvZqJ56k6kiyc9zETWAZrsvI6gkr6TSdXPG%2B1lJmsHOWCmlDiDM8Yxf2K4hSkObhm0b5T2hRbF1AK88DYM07c5a9IHJELBIEVDHEhjczw916ywcngDT0MGVyFYPob%2BW5N3uI69tkCK5vlJBTw3%2BlGPhK%2F28UkyRe3KgNENosYasgsMEU%2FNRY7UgoVMarOWtPIfr%2BXn5NtUF93lNgY7w0ZdNrpS7P4Dq0VWXCmUmcabZYR7CMcyGE5Z5oaiwzSZvvgICIYonjSrRNrbSRyTXDFAPtFI8GATgspW6AhXA14YUtfvEAuUZDW4RonLiOKzvx13rcsET8nfhP1C%2BdJi3Im9Pyf1JNzuhwrbXMYGheUE%2Fk31PsE5ICkJLNFEh8l3cIh%2FJWYvHDNZUw1df6vwY6pgEKzmlDsqWrFF8EFylALOv%2Fo4EeymRT%2FORapLl8sTJDB4DlVkjpYvjpfFYV5Gqo7FPQHJodJkm7sITlRHhNPatAlLne3lUQ8tYaQ3JcC1ot8yMFsQ6k6jCBDKzid9Qu992eNQIZx8Fi%2BboLRIhlrSYS9QMvJpsSXWLa59vET7OIPWB2CcFuwkZchZtlb7v1bB815gyT9MdubIrNBIz%2B8cWuVQo3KXNw&X-Amz-Signature=9f7f51ef6590f9c86ce637bc3d76d90d99012b7b3adc434fefa907b2c90f02cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
