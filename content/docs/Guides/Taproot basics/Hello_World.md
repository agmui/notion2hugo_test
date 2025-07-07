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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBU5UCRL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDqQaQ26Jzt2kjoK0Iqa9fWkpCgSYGnQ%2B%2FNBSoguTC3GAIhAMidL7aCDDhhkJxWgvKIWwtHfnhAmfhPWHPCdoaEzT6SKv8DCGgQABoMNjM3NDIzMTgzODA1IgwYp8Hv5g7GFF3qNgUq3AP7aW2M3M1qUpafz%2Ba5mzx0L7wHtJQnIJjRlYNv9pyA%2Fwq1tL4UKkmUSxedMH1blHa0b%2FYp4WckQ2TQISR23c5n5eMi62HKVoxO56AGLV007OUzIAmOF7kS1Gh6LEk3yU7vOwvsSjmls5AGeYCcQkQzgi04bePXqfrddokumkwzlbzA0AUJrIzae0vfEYHN9kXoqTypbVJ4f48XSfsM8ZGA2CGYReYrBlnRm7iyb2AXBeNJK3%2FYMckSjUxcaJjK%2FiaxhVn%2FHk3HYRgzT00l8wStGyJKM0kHo8zgcIkLbfhK482n45t9VpBWH3Qgj2M3LE1zQZmT2Qkbwfd7wME5i0%2FHjE039cN5vXzLdccQM0339jVCHoE8VQ3NJ1S4yxqw8OqfB2hcY1sWpne2ZCkOm48%2Bjfuo0GdiI6NAmQRIAn6j%2B6V0TPPSp%2FfKcIVTLKaQDedfbc6We8XGQpxt5eWuY5ALD2BE8mnnQZf%2BswSAaMw65Sn0Ia7%2FtTFIS7XIUm%2BC53CvI0BrnhCw4KYbfI11LvNdBS88Qo%2BokvyYJo%2Bqpxq2dE4H46dZbVA5Iybw7lRAV6Md0JZxzUcW7WhzFFts%2B6Ot81Q%2FLq7BjnFqN%2FSgtIvn2t1AacTL3SarYaH%2BbTDHh6zDBjqkAUK%2FjVVv5DhGcZ6I3e5ikVATB1NsdXwkOTO%2B2bl2v8H%2Fnyq6NT21v9fk%2BI1F1a9THjCuNJyBukZqV7FkZhwriOZS8GPrDWLI3DXCLnYUHW49pt7k1hse9jtirT821ykKjndliO820q7ddPd%2B9xqHtIoZjna2TqeJ5iKRNs3Wfr43WRVI0244iX4pISv6yyUAHJpJ9Ebf0mQ%2FpDpqrEZTVq92Eb87&X-Amz-Signature=17d25432861bc0a30a5f294c31f1959209822086916a9fd64e32a913cadc411a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBU5UCRL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDqQaQ26Jzt2kjoK0Iqa9fWkpCgSYGnQ%2B%2FNBSoguTC3GAIhAMidL7aCDDhhkJxWgvKIWwtHfnhAmfhPWHPCdoaEzT6SKv8DCGgQABoMNjM3NDIzMTgzODA1IgwYp8Hv5g7GFF3qNgUq3AP7aW2M3M1qUpafz%2Ba5mzx0L7wHtJQnIJjRlYNv9pyA%2Fwq1tL4UKkmUSxedMH1blHa0b%2FYp4WckQ2TQISR23c5n5eMi62HKVoxO56AGLV007OUzIAmOF7kS1Gh6LEk3yU7vOwvsSjmls5AGeYCcQkQzgi04bePXqfrddokumkwzlbzA0AUJrIzae0vfEYHN9kXoqTypbVJ4f48XSfsM8ZGA2CGYReYrBlnRm7iyb2AXBeNJK3%2FYMckSjUxcaJjK%2FiaxhVn%2FHk3HYRgzT00l8wStGyJKM0kHo8zgcIkLbfhK482n45t9VpBWH3Qgj2M3LE1zQZmT2Qkbwfd7wME5i0%2FHjE039cN5vXzLdccQM0339jVCHoE8VQ3NJ1S4yxqw8OqfB2hcY1sWpne2ZCkOm48%2Bjfuo0GdiI6NAmQRIAn6j%2B6V0TPPSp%2FfKcIVTLKaQDedfbc6We8XGQpxt5eWuY5ALD2BE8mnnQZf%2BswSAaMw65Sn0Ia7%2FtTFIS7XIUm%2BC53CvI0BrnhCw4KYbfI11LvNdBS88Qo%2BokvyYJo%2Bqpxq2dE4H46dZbVA5Iybw7lRAV6Md0JZxzUcW7WhzFFts%2B6Ot81Q%2FLq7BjnFqN%2FSgtIvn2t1AacTL3SarYaH%2BbTDHh6zDBjqkAUK%2FjVVv5DhGcZ6I3e5ikVATB1NsdXwkOTO%2B2bl2v8H%2Fnyq6NT21v9fk%2BI1F1a9THjCuNJyBukZqV7FkZhwriOZS8GPrDWLI3DXCLnYUHW49pt7k1hse9jtirT821ykKjndliO820q7ddPd%2B9xqHtIoZjna2TqeJ5iKRNs3Wfr43WRVI0244iX4pISv6yyUAHJpJ9Ebf0mQ%2FpDpqrEZTVq92Eb87&X-Amz-Signature=ba692858743cd799767903e63ce4b417c1fc58521434b05129175188acfca057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
