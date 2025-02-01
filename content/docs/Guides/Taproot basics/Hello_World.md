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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSDB5FB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFZ8Vlp4EZtR3oi4dfpewZzSfMLVA2%2BBWxbkj6rRtmmAiAw%2BzMIL4OkiHVWGiKEq1wXUjvCQWfZVVVs2tHQGQwiQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemfaNeOnAUGZmSfCKtwDtWF2Ys7seMIKVDn6Y8DUiw0ohpxJTv%2Fvh0gRtvBEfdiUBOB%2FbAZyHeQWvP4PNQMaGVjBWMOSCeYdT0hmFsP2gVj28kZkHHyKr2mnvOHchKO%2F7LRt9dkQ7aRDLC8YWFxfYvLPSRG6hML3uJO6vuyrLWUeKWV2eEtorI2fk1xLwUEQEBb9Beahe8lwltVnVYueDYq8S5nN1M6jurGJEnP6NlmfYbBN0uRxqlMelRYkTS5%2BAaboVwNn%2BExoRe0Ar5nyHMCe1FFs8NxB7bYYPpwpG2MfDXfxhw4ZhlSC8jcyHcGvF05pBujzhvX%2Fac8zD8CpEzYHrbYRNqab3uBnOcEsjF5MplJBRNeXIpe2n4fnvoFJc6vo8OZtBLkwKh4XENmVre7iqPpFhSqacJFpxLFLctOXNZT1nwtqXrg1MXTUJdj6F6z3EVEDgTL78xQqtD%2BlTOSWeiiszOSZwJDb6qFXE6omv3EKFF%2BTUWndFcEFyv9w4Ku0rDsceUe9hlP4YJINHSkrAFYfr7wS353CKn9RxOM6PoR42S60QP8wp7s4kE2gfcnrl5%2FWAVP3eCMNRNjGvZEsK8xNZuE6SLK88wbODqNDbxRPFHr1fV0zhDo6Xx4Z67w%2BbzHGnW2IOywwx9%2F2vAY6pgG0LvtNCKuoQ6M4coxKweFSLrLE2Fr5tH6oHl%2FfWJrPM9aR6CngsMKL8KY7QnkF83cr7BdiBa1xn0ssOYk8WgwfvPB2mde1BrFQHCXT%2F3sK%2BcJzr9mECiZ065WZ%2FDYi66ST%2FmXPg34MIzz4cZo%2BxsH2rtDnTz%2FTwdbrs6MTUlgPYkGiR3q7jMKz8Vc1fUYnoV9FmKdwzMGpPzTz3bbf0hWssAOM0zBp&X-Amz-Signature=d6239b02e94ac49f58316b17913fc18b6f56e3c8f72edc0756f97bd70f374a27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSDB5FB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFZ8Vlp4EZtR3oi4dfpewZzSfMLVA2%2BBWxbkj6rRtmmAiAw%2BzMIL4OkiHVWGiKEq1wXUjvCQWfZVVVs2tHQGQwiQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemfaNeOnAUGZmSfCKtwDtWF2Ys7seMIKVDn6Y8DUiw0ohpxJTv%2Fvh0gRtvBEfdiUBOB%2FbAZyHeQWvP4PNQMaGVjBWMOSCeYdT0hmFsP2gVj28kZkHHyKr2mnvOHchKO%2F7LRt9dkQ7aRDLC8YWFxfYvLPSRG6hML3uJO6vuyrLWUeKWV2eEtorI2fk1xLwUEQEBb9Beahe8lwltVnVYueDYq8S5nN1M6jurGJEnP6NlmfYbBN0uRxqlMelRYkTS5%2BAaboVwNn%2BExoRe0Ar5nyHMCe1FFs8NxB7bYYPpwpG2MfDXfxhw4ZhlSC8jcyHcGvF05pBujzhvX%2Fac8zD8CpEzYHrbYRNqab3uBnOcEsjF5MplJBRNeXIpe2n4fnvoFJc6vo8OZtBLkwKh4XENmVre7iqPpFhSqacJFpxLFLctOXNZT1nwtqXrg1MXTUJdj6F6z3EVEDgTL78xQqtD%2BlTOSWeiiszOSZwJDb6qFXE6omv3EKFF%2BTUWndFcEFyv9w4Ku0rDsceUe9hlP4YJINHSkrAFYfr7wS353CKn9RxOM6PoR42S60QP8wp7s4kE2gfcnrl5%2FWAVP3eCMNRNjGvZEsK8xNZuE6SLK88wbODqNDbxRPFHr1fV0zhDo6Xx4Z67w%2BbzHGnW2IOywwx9%2F2vAY6pgG0LvtNCKuoQ6M4coxKweFSLrLE2Fr5tH6oHl%2FfWJrPM9aR6CngsMKL8KY7QnkF83cr7BdiBa1xn0ssOYk8WgwfvPB2mde1BrFQHCXT%2F3sK%2BcJzr9mECiZ065WZ%2FDYi66ST%2FmXPg34MIzz4cZo%2BxsH2rtDnTz%2FTwdbrs6MTUlgPYkGiR3q7jMKz8Vc1fUYnoV9FmKdwzMGpPzTz3bbf0hWssAOM0zBp&X-Amz-Signature=460cd3634836aebd5a1bd75581c5414b4fcd84b271e01c87895078b6340b58da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
