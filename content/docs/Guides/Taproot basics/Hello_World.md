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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJDSHAF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7tC5GqiYxG5%2BhjL78vpfG9usS0qow%2BZ0Hc69tGz2WeAiEArr7ozABnUFs1K6rRc7ZQQcmYmvrUfaER%2B50n%2FpL8AW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELYi7bvsXbCxVjJlyrcA3dqI%2B9LCwz4VpNe6BkBWmxkLZ0e6dVcBY0h3ZA2ncAzMppq2h7CzkgdNdyzbBxt8DimCvQaAKKDSX4o1HH4DgOZR9Hv4vPXi1LJ0q5zBLJ4yPu%2BVGipZPMy%2ByUWCKrW1OuDNkUfaRq%2BzUQ6dQ26M1MyhRaZK53%2FmnrslYD8JvFP6A%2BKkKhj4a6lrfvHfQPaRRJN5oqhN3jOjTG5dBbz9KUJ12wn1Sr6Oujyal36ryPUhWUyksrOAla92gKUBv0T%2BakH7RQKsPq%2F9lM%2B9BCOEvWT7lCQTRILikN1MKkliXfNB4jFaDGHzz2Jaik0NcLyMbpg3x%2BGUcAzOYKt5jIpqeCqmwdBFP5PGJY0JpOneZaY6OkdbaM7Jd3GP7iR76qbXfoW3svYLh%2FZwhHLZ6Qtf9oGdnqWqrm489DFwWJdLi9H1aI5iHiz1w%2FyjNElNKAvZSXRQ3yZL9khuIkJ4Z%2F%2BAr%2BZ3%2BIqhsJVLSHBrmDbVJ5GAICJa948fhbrgmrJPyuIMOSVgGssM7XuuZlRuV1CK3XwvhLdKjgJBZN%2FcJ%2BtNxufXtEsECqi34wYLVmMRtv%2FbqKYdSBFcMN3Rlp4CkSFZ8BAE3m7hCW0I7eh5wMHBB6YGpeZFVcDSV24PSECMNyT98MGOqUBnmSRRvRlzzjVF4coKOR81py5%2BysWOTqfCjKUBfB9nR2zlZXU8Gz1J7T3HViS%2BJ%2FxjFYqC4wfhhXYJ9Tra9bdhNVmkge9Y%2Fl1sg4ntxEBTbxbGCvN4guvcujVwfT00KhOHZ%2BMRFlXZIoZ%2BX2%2BQ%2BfuBNyVNUplFv0Nlfh80%2FtoPvjNTonIBIWgcdly0B%2F5EvB1gBe4h%2FGCxVNoHkya6NsjeuSZE1Lz&X-Amz-Signature=544706f19d5053e4564f0562880e6c609f6f4e27909928f7d080c95106302e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJDSHAF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7tC5GqiYxG5%2BhjL78vpfG9usS0qow%2BZ0Hc69tGz2WeAiEArr7ozABnUFs1K6rRc7ZQQcmYmvrUfaER%2B50n%2FpL8AW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELYi7bvsXbCxVjJlyrcA3dqI%2B9LCwz4VpNe6BkBWmxkLZ0e6dVcBY0h3ZA2ncAzMppq2h7CzkgdNdyzbBxt8DimCvQaAKKDSX4o1HH4DgOZR9Hv4vPXi1LJ0q5zBLJ4yPu%2BVGipZPMy%2ByUWCKrW1OuDNkUfaRq%2BzUQ6dQ26M1MyhRaZK53%2FmnrslYD8JvFP6A%2BKkKhj4a6lrfvHfQPaRRJN5oqhN3jOjTG5dBbz9KUJ12wn1Sr6Oujyal36ryPUhWUyksrOAla92gKUBv0T%2BakH7RQKsPq%2F9lM%2B9BCOEvWT7lCQTRILikN1MKkliXfNB4jFaDGHzz2Jaik0NcLyMbpg3x%2BGUcAzOYKt5jIpqeCqmwdBFP5PGJY0JpOneZaY6OkdbaM7Jd3GP7iR76qbXfoW3svYLh%2FZwhHLZ6Qtf9oGdnqWqrm489DFwWJdLi9H1aI5iHiz1w%2FyjNElNKAvZSXRQ3yZL9khuIkJ4Z%2F%2BAr%2BZ3%2BIqhsJVLSHBrmDbVJ5GAICJa948fhbrgmrJPyuIMOSVgGssM7XuuZlRuV1CK3XwvhLdKjgJBZN%2FcJ%2BtNxufXtEsECqi34wYLVmMRtv%2FbqKYdSBFcMN3Rlp4CkSFZ8BAE3m7hCW0I7eh5wMHBB6YGpeZFVcDSV24PSECMNyT98MGOqUBnmSRRvRlzzjVF4coKOR81py5%2BysWOTqfCjKUBfB9nR2zlZXU8Gz1J7T3HViS%2BJ%2FxjFYqC4wfhhXYJ9Tra9bdhNVmkge9Y%2Fl1sg4ntxEBTbxbGCvN4guvcujVwfT00KhOHZ%2BMRFlXZIoZ%2BX2%2BQ%2BfuBNyVNUplFv0Nlfh80%2FtoPvjNTonIBIWgcdly0B%2F5EvB1gBe4h%2FGCxVNoHkya6NsjeuSZE1Lz&X-Amz-Signature=e05b5b8f91b3eae7970d054984256ed127cb63f5974041e813555ae8d5cc559c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
