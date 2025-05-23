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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWLQGJK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD08FlxfxqMtMo4hNiyLVrd7KgooVbBMfycoWXLHKvN9gIhAOD4jLsoLQwuA9nKAlaH6K2mfxihHKSzjpQUi7MQrYz%2BKv8DCBsQABoMNjM3NDIzMTgzODA1IgyiGOMR5E4B%2BnOqtc8q3AMXCQgzE6mmCzaM8GTYhy3VBJgkKWsWrFl3jiIaa7wwlML4OU4oiV4wUB9jVPxVNP5dbaubb1o7bnlhuMPmejQQ3ZtO1se871%2FvWeqCESdkNXn5UnIZAUtsZjEYwI3xzoxTbYN34cDRpTIg7QfTD5Q%2F1LZxFQx%2BxCbYLILcNEqI5%2Bc8fIYEUk8VhB4vB4sCnI82INAmdFHJmWeGJmsGrbCSxOy9QzAjSHThNahclmvMjbmmYSpZ9bsNFdw8raP7dYGaqF5gTjdiVsGzBcG7K%2BAzFfuW%2BxaEJ0xex7XTobJvCZ83%2FVBi2TdnkGfg9iQMoFIlkJxUhEziy8WjJHvfoeMtrIrAg3Kxkz2p2adlJRCKxpBNLiO94acRCQxU1j1oipDaOvyrswsFYoSqxn%2FJpW6TC1cvUsuaQbtayg8691L%2B255Af7g7w47JpkSae5UPxiKzbo7LsCcLo72uNLi%2F4iTUiTp%2BOwOGLpuQJaC4ZkQt7MvBBCEzCYiy22epgoY6CSSAaU2uNIzE7DS6PWqBena3Es9RgTtSHA1nqq4sjCMdSQzQorYBHkjS3Ho0HSWbCrf%2Fqy6QBDBa%2FRkaH8ZRS8yX7Nigh53QEwSkBxBYzgxl2HHcmRMSHLaLBKoPKDCylsjBBjqkAcxWcBfJNZYMaQzycqtNSlVXl02Qua0FIUJGQObAG%2FX%2BaDLXg%2BJfEYTABjJEgHQDcG4R3uvDr1dipvs5%2FmXwWPdYoxX1uC69DEl%2BQR2yQDHkr9V8y14nKh5YxApNv5PslvhgSrE8tTvbNezlfyIc2u0%2Bo6%2BrS3odrajP9B6jtD2Hd3%2FRzN9MUEPDIgZvVCYdATwAR2pydmpiqhzBEuzvSlTGBdaN&X-Amz-Signature=0d8dca45a12d528e567bd69936cff34b2663a03f7fcd1c1b9b5014891301b85e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWLQGJK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD08FlxfxqMtMo4hNiyLVrd7KgooVbBMfycoWXLHKvN9gIhAOD4jLsoLQwuA9nKAlaH6K2mfxihHKSzjpQUi7MQrYz%2BKv8DCBsQABoMNjM3NDIzMTgzODA1IgyiGOMR5E4B%2BnOqtc8q3AMXCQgzE6mmCzaM8GTYhy3VBJgkKWsWrFl3jiIaa7wwlML4OU4oiV4wUB9jVPxVNP5dbaubb1o7bnlhuMPmejQQ3ZtO1se871%2FvWeqCESdkNXn5UnIZAUtsZjEYwI3xzoxTbYN34cDRpTIg7QfTD5Q%2F1LZxFQx%2BxCbYLILcNEqI5%2Bc8fIYEUk8VhB4vB4sCnI82INAmdFHJmWeGJmsGrbCSxOy9QzAjSHThNahclmvMjbmmYSpZ9bsNFdw8raP7dYGaqF5gTjdiVsGzBcG7K%2BAzFfuW%2BxaEJ0xex7XTobJvCZ83%2FVBi2TdnkGfg9iQMoFIlkJxUhEziy8WjJHvfoeMtrIrAg3Kxkz2p2adlJRCKxpBNLiO94acRCQxU1j1oipDaOvyrswsFYoSqxn%2FJpW6TC1cvUsuaQbtayg8691L%2B255Af7g7w47JpkSae5UPxiKzbo7LsCcLo72uNLi%2F4iTUiTp%2BOwOGLpuQJaC4ZkQt7MvBBCEzCYiy22epgoY6CSSAaU2uNIzE7DS6PWqBena3Es9RgTtSHA1nqq4sjCMdSQzQorYBHkjS3Ho0HSWbCrf%2Fqy6QBDBa%2FRkaH8ZRS8yX7Nigh53QEwSkBxBYzgxl2HHcmRMSHLaLBKoPKDCylsjBBjqkAcxWcBfJNZYMaQzycqtNSlVXl02Qua0FIUJGQObAG%2FX%2BaDLXg%2BJfEYTABjJEgHQDcG4R3uvDr1dipvs5%2FmXwWPdYoxX1uC69DEl%2BQR2yQDHkr9V8y14nKh5YxApNv5PslvhgSrE8tTvbNezlfyIc2u0%2Bo6%2BrS3odrajP9B6jtD2Hd3%2FRzN9MUEPDIgZvVCYdATwAR2pydmpiqhzBEuzvSlTGBdaN&X-Amz-Signature=dbc02a123cc8c2486bf1093b269bb850c8f4688655a306977154f679c0ce17a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
