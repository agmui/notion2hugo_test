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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ264NJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvtQb6xTZR3fgdE8JHHkHwntTsDGDRhnMVkXcqWyr2LQIhAJ9b%2Ff5zy3GrfDbfsKhzk0cTuAUhsCO6QXGD5KSWX8G3Kv8DCBUQABoMNjM3NDIzMTgzODA1Igzr2vai%2BtHremNCMR8q3ANgep%2BcM%2FNEwi68eaVVy3%2FbUxuywuCOGLvy6zD%2FhqPpKbKhUG44tGycdiuqW%2FViDmDP%2Fm0M%2FKM4FpGUkyozFKEP0S3tVbFrbYFMSBmKH8c2%2FnXffWGNT3ZzTJ0F5YEwVa9aEQCqYRngVPXhRUWuKcm3Va5KkL9xvLGndzk7nph%2BjSZQG4nNQW98qXQnfE34sXr%2FwFduuNdeong3BoIckF%2F%2FPlFJWivgy%2FYznHZXUPhw0UGb0xXDwJ2kDIpk7KUnUNg6rqepi%2BihNMunPwgvikt4UlNIPrnIHMqp3e2yJr4kQQUlKmWpdAc%2FqNp9xKxVFR35qaOfL6hLFqmVKYvJI918h6GNiq8aATzqC53ndFSvNTFDTivdn89pYfEhYDFwELP%2BJKjixYgjPVPAzxSVQ%2BsK5xxtdWZMdhkdG1MtFlXw%2F2cmnBd8mkn4%2FD7qrFULDbtyn6t59YQgXiMyLEoThOomZt8RHMP4CSTqd1CWzXIjqgwJwDrxf7vJ1w3clViXYm5e3DQ7UAsV2vGFL%2B%2BcozEGuDPFqhYDZ1PcMITwyirrCnRbcmXuDsesyyBk7eWgnf%2Fo4zneQffRLMW0DtWAyLE3sfAn8bZ%2BZiQkRNfWXR%2BOB3cLjKcLIWQE%2BnkntjCz4pnDBjqkATfv7kbIZgwCSb9GSJPImjZ2Qmp1rrd39idB0Imz1Du1HQxKi9fXq2ItjGUbuvAq7MY1Ix6Pk0vAyvUbrLs23s0CmmIk9U%2FeeuJdc58P0rp2aqKAyS8b9T0GOTn8uGE%2BqB6vsSI8eKGshBwqYNYDlNKFHYgns9TvPNN%2Fn8b9l5iyDm6WO6CnLfL3eHis9TwrzLfesjY%2BjUuQt1CKPfSgrrzazgE4&X-Amz-Signature=edeecd353f44aa7f69aa4ac8e46aca3c8179c1be3887c453f9a077bf5bb9f3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ264NJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvtQb6xTZR3fgdE8JHHkHwntTsDGDRhnMVkXcqWyr2LQIhAJ9b%2Ff5zy3GrfDbfsKhzk0cTuAUhsCO6QXGD5KSWX8G3Kv8DCBUQABoMNjM3NDIzMTgzODA1Igzr2vai%2BtHremNCMR8q3ANgep%2BcM%2FNEwi68eaVVy3%2FbUxuywuCOGLvy6zD%2FhqPpKbKhUG44tGycdiuqW%2FViDmDP%2Fm0M%2FKM4FpGUkyozFKEP0S3tVbFrbYFMSBmKH8c2%2FnXffWGNT3ZzTJ0F5YEwVa9aEQCqYRngVPXhRUWuKcm3Va5KkL9xvLGndzk7nph%2BjSZQG4nNQW98qXQnfE34sXr%2FwFduuNdeong3BoIckF%2F%2FPlFJWivgy%2FYznHZXUPhw0UGb0xXDwJ2kDIpk7KUnUNg6rqepi%2BihNMunPwgvikt4UlNIPrnIHMqp3e2yJr4kQQUlKmWpdAc%2FqNp9xKxVFR35qaOfL6hLFqmVKYvJI918h6GNiq8aATzqC53ndFSvNTFDTivdn89pYfEhYDFwELP%2BJKjixYgjPVPAzxSVQ%2BsK5xxtdWZMdhkdG1MtFlXw%2F2cmnBd8mkn4%2FD7qrFULDbtyn6t59YQgXiMyLEoThOomZt8RHMP4CSTqd1CWzXIjqgwJwDrxf7vJ1w3clViXYm5e3DQ7UAsV2vGFL%2B%2BcozEGuDPFqhYDZ1PcMITwyirrCnRbcmXuDsesyyBk7eWgnf%2Fo4zneQffRLMW0DtWAyLE3sfAn8bZ%2BZiQkRNfWXR%2BOB3cLjKcLIWQE%2BnkntjCz4pnDBjqkATfv7kbIZgwCSb9GSJPImjZ2Qmp1rrd39idB0Imz1Du1HQxKi9fXq2ItjGUbuvAq7MY1Ix6Pk0vAyvUbrLs23s0CmmIk9U%2FeeuJdc58P0rp2aqKAyS8b9T0GOTn8uGE%2BqB6vsSI8eKGshBwqYNYDlNKFHYgns9TvPNN%2Fn8b9l5iyDm6WO6CnLfL3eHis9TwrzLfesjY%2BjUuQt1CKPfSgrrzazgE4&X-Amz-Signature=8df99514ff8e4d23a3a9a39f4aadfda0693da1634f1bce44f5c06b7a8d0c1fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
