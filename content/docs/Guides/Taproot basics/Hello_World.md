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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBMQJTN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCR6dESp38Ji3pKeKo156OkYzqEa227QgayasYC4kFsAiBmWVMgbOm55gGnDplOU1zLYkIAdG%2BzHQsChFRDpOjVsSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2HqxIKkqoOA4Ks%2BKtwDRnaljIyFRumw3R507BAtF6wp53vAZiCJVQ9kC0XPXPsu9%2FYfU0RB%2BxBFNhacfXkWioaUWHyyfGzAYfy%2BQSeLpkB8l1G5jtp6RuvMZFzFQ%2B7bPUw2y%2Fs4rUZZwtm5ioRxW8D2vJPgw9bN0WXx%2BxwtL8zYX%2B4HYaAt4pFpsPB2hqmfx7BxfnUkIlpMnYr1jUl07n%2FWLC7PH6YV%2FoHfeUNGaYUdack1u0%2B%2BHrGEnVjRtGbyhu33OuoEcDj8duVXqHtzYxk7xVKj8TTHknlg00eVePO%2BRQ3a7g%2BnivSPCWhbeaZOsQiN8UXFPC2OINNGakiFzl8oOLRIYEYaJ6ebddGroE56DUK6Oqnx3l0AnOu4mS3yvUp%2FsQqUU0ykHUmNcE7qtXSuO%2F6a1TIkqAAav4LTE1lCYzEXK6D34T4S3XWaxTZ5PH9m5NUn5X6GLdxn8YDPqci%2BjZWHbJ2fKqDi2jnqdmApNlI7HaMFo0uPXLrGhhwzvKHn5TJ4aCV8l4DA4fL1%2FJj0aDS5byknXEBFmaLUiodNcdOigZFc9bvT337aZ8iRKLR4VEyS0a1%2BP9hlDr%2Fw51eov2wq5Shm03pza6fwllE2hY8yF6O5f%2FFocnT5SvKVCI6Zo9ODKAucCf8wo5SVwwY6pgGfuWbSCEu6ksViOWHKWzq5F7yTzIpas8KGXv96xhiom3OLeI73sI%2Fx1EUg8FiCFcvcGosujRoI6iUaI6TtafVvhO6Gi1jiupJR1%2FtdLnOnHErmGLIy0RMOxiL%2FfSezHzJPk5vKB9tgrDXQ8CkDmu7Zsl2V97V2sNu5Cm7mQZ0urBsY%2BHWSyK2mrMqLdGScUulmSXkxqzADwlodurYpxmYe45KneYg3&X-Amz-Signature=14515fc8803bbc2191aed656c735dabef7a25786eb5367481f09018b43cd0619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBMQJTN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCR6dESp38Ji3pKeKo156OkYzqEa227QgayasYC4kFsAiBmWVMgbOm55gGnDplOU1zLYkIAdG%2BzHQsChFRDpOjVsSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2HqxIKkqoOA4Ks%2BKtwDRnaljIyFRumw3R507BAtF6wp53vAZiCJVQ9kC0XPXPsu9%2FYfU0RB%2BxBFNhacfXkWioaUWHyyfGzAYfy%2BQSeLpkB8l1G5jtp6RuvMZFzFQ%2B7bPUw2y%2Fs4rUZZwtm5ioRxW8D2vJPgw9bN0WXx%2BxwtL8zYX%2B4HYaAt4pFpsPB2hqmfx7BxfnUkIlpMnYr1jUl07n%2FWLC7PH6YV%2FoHfeUNGaYUdack1u0%2B%2BHrGEnVjRtGbyhu33OuoEcDj8duVXqHtzYxk7xVKj8TTHknlg00eVePO%2BRQ3a7g%2BnivSPCWhbeaZOsQiN8UXFPC2OINNGakiFzl8oOLRIYEYaJ6ebddGroE56DUK6Oqnx3l0AnOu4mS3yvUp%2FsQqUU0ykHUmNcE7qtXSuO%2F6a1TIkqAAav4LTE1lCYzEXK6D34T4S3XWaxTZ5PH9m5NUn5X6GLdxn8YDPqci%2BjZWHbJ2fKqDi2jnqdmApNlI7HaMFo0uPXLrGhhwzvKHn5TJ4aCV8l4DA4fL1%2FJj0aDS5byknXEBFmaLUiodNcdOigZFc9bvT337aZ8iRKLR4VEyS0a1%2BP9hlDr%2Fw51eov2wq5Shm03pza6fwllE2hY8yF6O5f%2FFocnT5SvKVCI6Zo9ODKAucCf8wo5SVwwY6pgGfuWbSCEu6ksViOWHKWzq5F7yTzIpas8KGXv96xhiom3OLeI73sI%2Fx1EUg8FiCFcvcGosujRoI6iUaI6TtafVvhO6Gi1jiupJR1%2FtdLnOnHErmGLIy0RMOxiL%2FfSezHzJPk5vKB9tgrDXQ8CkDmu7Zsl2V97V2sNu5Cm7mQZ0urBsY%2BHWSyK2mrMqLdGScUulmSXkxqzADwlodurYpxmYe45KneYg3&X-Amz-Signature=6f7736364762ebfa7a433dfbc98c55015228251907ee8f3d658e69e18bb3ba8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
