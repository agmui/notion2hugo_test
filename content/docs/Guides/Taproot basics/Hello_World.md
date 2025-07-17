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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBH6ZEGX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHFB%2BanNkywFvzCVKeNfR5EvozAlU4OZ%2FHoUQe%2BtPXjkAiEAoOMMbRODvRzEOEYAK3LvbQy%2FSElrHmt%2FF7bwXcbhS00q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHJZto%2FxDehrUth6GyrcA%2FcJKa0rjEDtRSHljNG1IRFzj4bA5%2FnY7aqB6Jwn1PVTCMROENHlPoLOcm8dElCNMfxOlYnTrjQ%2BBBlNikQE5VcgfZM3SCsSN7F54Q6l9YqAxLhVrDNBZwDCkO%2FZMnLA0KJih9GAim6Raw33lVdOz2kiowA2hcHU7yas%2FzACLkqawMIGvVjUOOpW49xmgwKUnRMoYG4KH5qCOrawL5qOeBxfAgdaI6t%2F%2Fri7gtlyFasFeAdkEA16TFr5mIvZ8yO6XSaTnvLZ0Nns4qQF%2FKHBaNfhMYFacixhRnKvHmpslP4a5RiGjItIqSrXJkCWfL8FhjHch%2FMr49FS7VkX7r3qKj7jayIhkZu1bS%2BfUG93Ej1ONwv4%2BnTTRSRRpJT0s%2FFZqibAlSt36JNudKVn9jJ%2FHa0UZ6KU6ucWmHI0NB6uD3MeDzjbEfnGXj3EZ7fUW0xtJtxsMub4ZKhxL5BzXIYjWLX9VTMA7y8mx0GU%2BQ4H94aOAOJCn4eFs3sRw8gI0UgaUJLnqdhIPj4hrw4YpC0U3ZK7%2FjDXcmyh62M8heku3n8LfTyuUhrNb11vvu51Ffbd6rsc3X2tjhjDwsnj0yJiL8QYvFjwpQ0xzUWDFVB2Ev4nr3AZtPTDdGKlXqWbMNXA4sMGOqUBYuK9CDRODRfhHCaISc25ABR6%2B5kQ7mbCDnBVq7VzMdMDKlGCEv58Ge3BBDdw4WDTPjEzy0QOF1vfeBshVQnkJDIbg%2FYwadig87IqakYcWQiCEpwPZVRet52bv86vpaIAhO%2BlHB%2F8jIXfYv7rYaOOPNZ9qStYiYvBtA7A7616KwS%2FvkX8JYWJg8ej3NFJLOoCLi3fv6oAE4rJZ0LWYZDCHufoUKHG&X-Amz-Signature=776402853f515df00a328564cce7ba59ae87ca453bd735b030ee5e255c2f75ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBH6ZEGX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHFB%2BanNkywFvzCVKeNfR5EvozAlU4OZ%2FHoUQe%2BtPXjkAiEAoOMMbRODvRzEOEYAK3LvbQy%2FSElrHmt%2FF7bwXcbhS00q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHJZto%2FxDehrUth6GyrcA%2FcJKa0rjEDtRSHljNG1IRFzj4bA5%2FnY7aqB6Jwn1PVTCMROENHlPoLOcm8dElCNMfxOlYnTrjQ%2BBBlNikQE5VcgfZM3SCsSN7F54Q6l9YqAxLhVrDNBZwDCkO%2FZMnLA0KJih9GAim6Raw33lVdOz2kiowA2hcHU7yas%2FzACLkqawMIGvVjUOOpW49xmgwKUnRMoYG4KH5qCOrawL5qOeBxfAgdaI6t%2F%2Fri7gtlyFasFeAdkEA16TFr5mIvZ8yO6XSaTnvLZ0Nns4qQF%2FKHBaNfhMYFacixhRnKvHmpslP4a5RiGjItIqSrXJkCWfL8FhjHch%2FMr49FS7VkX7r3qKj7jayIhkZu1bS%2BfUG93Ej1ONwv4%2BnTTRSRRpJT0s%2FFZqibAlSt36JNudKVn9jJ%2FHa0UZ6KU6ucWmHI0NB6uD3MeDzjbEfnGXj3EZ7fUW0xtJtxsMub4ZKhxL5BzXIYjWLX9VTMA7y8mx0GU%2BQ4H94aOAOJCn4eFs3sRw8gI0UgaUJLnqdhIPj4hrw4YpC0U3ZK7%2FjDXcmyh62M8heku3n8LfTyuUhrNb11vvu51Ffbd6rsc3X2tjhjDwsnj0yJiL8QYvFjwpQ0xzUWDFVB2Ev4nr3AZtPTDdGKlXqWbMNXA4sMGOqUBYuK9CDRODRfhHCaISc25ABR6%2B5kQ7mbCDnBVq7VzMdMDKlGCEv58Ge3BBDdw4WDTPjEzy0QOF1vfeBshVQnkJDIbg%2FYwadig87IqakYcWQiCEpwPZVRet52bv86vpaIAhO%2BlHB%2F8jIXfYv7rYaOOPNZ9qStYiYvBtA7A7616KwS%2FvkX8JYWJg8ej3NFJLOoCLi3fv6oAE4rJZ0LWYZDCHufoUKHG&X-Amz-Signature=632cf436903408812f366ae400e502ec76a22625602df8f3083de0c3d65376db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
