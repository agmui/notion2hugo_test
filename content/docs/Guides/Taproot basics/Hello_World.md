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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE2CZZL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFjG%2BXYrvbJz3uRWAl9aYX6P3%2B62yaB%2BgPJKrHGYyfZ7AiEA5qQWXnU1oZ44BzVNWOBVftBb6nRd3HXJ9fO6b6bmK0AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsgilK51S%2BsUPulbircA2QunJmum%2Fi3J6iME31a4oqt2d0SCfSlW1FZiwq%2FRe952JKrqcmcm8BUmE4ajavmDWOAaHEaJ5vun4FNV7t4mkjqhZLasMdtWGLeTv1iPjk8CiqakjgqV0bt15W%2Bn8%2Bo4%2Fh66TDDimBucP3OIKa%2BNIElaeHlwgi0niMdVDw1TgKCBo45TGcLwuwR%2B77c8q0jFQz3u8GTyWw7HO1JNt6zhO%2FWq2nt3qWU%2Bj%2BUZw%2BhIPXGnRPmL3ghFG%2FP69Z6YBnCM7UC1U9TDA6KKzT87scMtj4Ol7qLNclyjjnS7JvKtE%2B00xJBvZ93j%2BfDSENaAF8wQ93osYr63hUOdwcPWqWZVc9OMn8iOKBXask5VQvNvaZArUKaAoNcYW%2Bs48t542rXuk2wTUNILxKQ6IRhtqhgaK2e123MkA6IlhhInVF0Ucumu%2FzlHS5e4SHol53uIUq8cPfMtzdHOpGn0brMzSBNTMhhQgZhZf2QF8EE3MVcSPJObUFUVIDdRBKtX%2BucXobZHosy6mlODMCNDjBzxh%2Fqyn34GWMA3uwIRxLHMXeLaDhqDsKT4T80Vuke7%2FrvI0ZT1A5zDhetdXLQD9Om5ccTEIBJkpg00XxaD8MVqY4tB%2BMV40msiufW7fRJuwdyMPvumsQGOqUBGgtKWFsz9ABU6Nv%2FXHupBKnMH3BfRJIjMjYOm4r%2Bw0rjSp8r0gtWiO5qozReSipCANwXVY21%2FNYi52Qw9Z8reXlv6t5WFnUEouE5q7SMxMiP%2FMJSvPZQPkNXkFkSOvwJFZQVV0qwMk6OIE7XMwUYt8vHoUxrqqPr66qQ98C9vwTQJORjPcTVnqD2p1Gt6sfNBL1KXnrW6mc0hy5sn1PP80reNJFz&X-Amz-Signature=b789bc847ae0d8079aa61d971ac076523fb37cea0902ad67adf3651817f08924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE2CZZL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFjG%2BXYrvbJz3uRWAl9aYX6P3%2B62yaB%2BgPJKrHGYyfZ7AiEA5qQWXnU1oZ44BzVNWOBVftBb6nRd3HXJ9fO6b6bmK0AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsgilK51S%2BsUPulbircA2QunJmum%2Fi3J6iME31a4oqt2d0SCfSlW1FZiwq%2FRe952JKrqcmcm8BUmE4ajavmDWOAaHEaJ5vun4FNV7t4mkjqhZLasMdtWGLeTv1iPjk8CiqakjgqV0bt15W%2Bn8%2Bo4%2Fh66TDDimBucP3OIKa%2BNIElaeHlwgi0niMdVDw1TgKCBo45TGcLwuwR%2B77c8q0jFQz3u8GTyWw7HO1JNt6zhO%2FWq2nt3qWU%2Bj%2BUZw%2BhIPXGnRPmL3ghFG%2FP69Z6YBnCM7UC1U9TDA6KKzT87scMtj4Ol7qLNclyjjnS7JvKtE%2B00xJBvZ93j%2BfDSENaAF8wQ93osYr63hUOdwcPWqWZVc9OMn8iOKBXask5VQvNvaZArUKaAoNcYW%2Bs48t542rXuk2wTUNILxKQ6IRhtqhgaK2e123MkA6IlhhInVF0Ucumu%2FzlHS5e4SHol53uIUq8cPfMtzdHOpGn0brMzSBNTMhhQgZhZf2QF8EE3MVcSPJObUFUVIDdRBKtX%2BucXobZHosy6mlODMCNDjBzxh%2Fqyn34GWMA3uwIRxLHMXeLaDhqDsKT4T80Vuke7%2FrvI0ZT1A5zDhetdXLQD9Om5ccTEIBJkpg00XxaD8MVqY4tB%2BMV40msiufW7fRJuwdyMPvumsQGOqUBGgtKWFsz9ABU6Nv%2FXHupBKnMH3BfRJIjMjYOm4r%2Bw0rjSp8r0gtWiO5qozReSipCANwXVY21%2FNYi52Qw9Z8reXlv6t5WFnUEouE5q7SMxMiP%2FMJSvPZQPkNXkFkSOvwJFZQVV0qwMk6OIE7XMwUYt8vHoUxrqqPr66qQ98C9vwTQJORjPcTVnqD2p1Gt6sfNBL1KXnrW6mc0hy5sn1PP80reNJFz&X-Amz-Signature=de18b9c204d79cae1f0e5b9c0bf70bd48e44064a59a8b9a5710ffc1fd0c9c233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
