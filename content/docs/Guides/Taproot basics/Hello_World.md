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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNI2XFT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B29xGAM8uFY0tS%2Fev%2FqgWrqv6dmCxPew%2B98GdspxeNAiEAuRXWHAf0fGpGGxiZTB9g9okJmtzC1mnCjJ7KefRsNIMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPino2cIL9kRRIFyrcA3xrauY5Jr3dx19kP8G9KGZVReRYvG9Xt11tjtlzWI9JLtg0%2FoK1LEmqmLQ8tTFKdCp9pFQ7m4w3bXHov%2BizHDTbSVyrWuWmlb%2FsHPTzu%2Bx%2FE%2FByL0taQpad%2BexzKRurc%2BmL2eYxdQ%2FBcDhHMmksn4ZoAgkZICBnGn7QvFAkY3geAsgFrJhqQXEsdcDUgFJ%2BaAFqqnSN9e89zzKGc%2BDVw0HDDQmUwKQBzfCKLPZkZLcg%2BQ4KNK2D2hxCNVf2wLi1QlkFEJ6GC5csIB9u4SFQXHDNsgpuu2nx%2Fr%2BBFn1GLaCJ3Gh8STfeIKx1y%2BdOJPZwbVY03BG4B7Uiyld%2BNIbzLafF2aEgS42azs5CKqBBSxBrMoClLxrXj4gYRYqImy3083FQ6fznmAZSU5U7BDSt6IvwvZJqGyTpVt7%2FlGwONMEP3T%2B7PsalKgabbgGrBXJ58p3jhJddsLrPwSsKJU01oscyK4Nzw02wsQndrBmbO%2FBWyJnG6ECdVxfzJdAXEqFcf9DBF4JuhPKax566n%2FOUnfWk4jqenxkmoM%2F%2F4orMLG6DBZ%2FcBlScmvO4tRm5bwYSTfU%2FrObn%2Fw%2FGucfF1d4%2BodDiAYLNJTI259%2F0I2XgV64Mh6VgRwBSVq%2Fj6YdAMO%2Bv9sAGOqUB%2F%2F%2BHJf4XXy4cI%2B6hBpkrXlfUEnZcxLKHY6Sz0g87Cw8mRvlv4o8Xt%2FUgGyn%2BZ1cufUvV9xDpneGW%2Bow2gdHQcMzdk%2FZ74ZIN5aYxX8e8aHCro%2FaeFQ09y%2B3iiGELYKJ4nqRQODu4EBhiVoQDVmrGRJebyGu9wR7T9O3h0jUWwxuW6P0PftAJ06m2Jx%2FFC2NPcNS1qyJ4dfZnO9vd45kEqNgPUKLX&X-Amz-Signature=6d0328e37fb47193e2c8b8dcbe3d8e5625554773800f32290ef92ac17eab8fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNI2XFT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B29xGAM8uFY0tS%2Fev%2FqgWrqv6dmCxPew%2B98GdspxeNAiEAuRXWHAf0fGpGGxiZTB9g9okJmtzC1mnCjJ7KefRsNIMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEPino2cIL9kRRIFyrcA3xrauY5Jr3dx19kP8G9KGZVReRYvG9Xt11tjtlzWI9JLtg0%2FoK1LEmqmLQ8tTFKdCp9pFQ7m4w3bXHov%2BizHDTbSVyrWuWmlb%2FsHPTzu%2Bx%2FE%2FByL0taQpad%2BexzKRurc%2BmL2eYxdQ%2FBcDhHMmksn4ZoAgkZICBnGn7QvFAkY3geAsgFrJhqQXEsdcDUgFJ%2BaAFqqnSN9e89zzKGc%2BDVw0HDDQmUwKQBzfCKLPZkZLcg%2BQ4KNK2D2hxCNVf2wLi1QlkFEJ6GC5csIB9u4SFQXHDNsgpuu2nx%2Fr%2BBFn1GLaCJ3Gh8STfeIKx1y%2BdOJPZwbVY03BG4B7Uiyld%2BNIbzLafF2aEgS42azs5CKqBBSxBrMoClLxrXj4gYRYqImy3083FQ6fznmAZSU5U7BDSt6IvwvZJqGyTpVt7%2FlGwONMEP3T%2B7PsalKgabbgGrBXJ58p3jhJddsLrPwSsKJU01oscyK4Nzw02wsQndrBmbO%2FBWyJnG6ECdVxfzJdAXEqFcf9DBF4JuhPKax566n%2FOUnfWk4jqenxkmoM%2F%2F4orMLG6DBZ%2FcBlScmvO4tRm5bwYSTfU%2FrObn%2Fw%2FGucfF1d4%2BodDiAYLNJTI259%2F0I2XgV64Mh6VgRwBSVq%2Fj6YdAMO%2Bv9sAGOqUB%2F%2F%2BHJf4XXy4cI%2B6hBpkrXlfUEnZcxLKHY6Sz0g87Cw8mRvlv4o8Xt%2FUgGyn%2BZ1cufUvV9xDpneGW%2Bow2gdHQcMzdk%2FZ74ZIN5aYxX8e8aHCro%2FaeFQ09y%2B3iiGELYKJ4nqRQODu4EBhiVoQDVmrGRJebyGu9wR7T9O3h0jUWwxuW6P0PftAJ06m2Jx%2FFC2NPcNS1qyJ4dfZnO9vd45kEqNgPUKLX&X-Amz-Signature=1f5b8f27536540dd812fb8329fb1a222dc969aefa8138d4e4ca0b30452021f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
