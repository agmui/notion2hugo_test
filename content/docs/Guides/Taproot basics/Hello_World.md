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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHR5BX37%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIC07e6Uebt75IM9INTuayjUSJlZ4%2BzolSUStXWUffLp3AiBfCu6LsIL5bsWJyPjLi32TT7Q7VEVuwDOkqKr2FDNIiir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMMxbjQoASwBBzlmK5KtwDNA8wur%2BhH5p4qQvOmWh6MhHcJo6veJ2sEc%2FvVednpzHhjKD3N21pt0PR1tpOpE4BVGsbHnAYhwdYczn621rOpQMQKBmtPaTd%2B8bZ04UiP84PAk703lnMen7S1G5GXWOW%2FKpjRogNDIreIJ9pPBXL8gazHLHEO9NCRZMr3BQeKQJS4FRv7TCqctmdPdbZXK%2F6e7Nj%2FFkZQjL62T8dsj8ifdvegxJt8ONothcEvph714l9vPNZJCSXgyJ6gCw9EfV2Y23bN4B1LAwATu3esciX3MAY%2BO03Yv4rjiFxABN4GMhXrckrhDyOgvAzY4k4Jgb32EUxj1JU3J9Kplkzgbsj4sZLCN1gHkBNwFnB4GrBwakhpDAb1Q5vxu3quOpBtfotjJ%2B%2FG%2FMY2oAHojrRhbTpiH4krsXA%2BlsZwU2jDknQtiSPzyKxtCYIcjhYM4T%2B6usk7KfUca11VVbUtJhH6rET2aw0OsUTUx5LRzKalw8j1TtI%2BPotjzLrL6bgpeKeBoF6o3sx%2BeZUqL15k%2B8Jx%2FtXs2F4Yo7FJlcyfWHkLy5ZXOyPdNlBZh6PCOP%2FxW%2FhEHZUKAWq0tUB3qc%2FurjoddJJPH2EBkhitj0d0xErfXfmjH2xAVX4TGiqLziirKswj6OWvQY6pgGWewLADmJMcPqYhCcfzAA%2FAB41s1UAxlHiRSXyYZVIdzQIZva%2BxVeT%2Fbdu3lJL%2FlH4O8dZiI6Xn8FlVmLQ0wA3AMse9p%2BRUA6OmaLBg5eYnLBFZIuunT94RfFl6%2BQWYcSsqfQQZQv6isUacW6bbuddySTEVIUTdyFos2TMhadJGTt25deC0LlvEm7ap2ZKKBwrF93cBXHaCYUFqobrvFSfmW8cQA7o&X-Amz-Signature=249224bdc9b7006a1bf2f50dfd3a8af76064ab9a97c669a0d0ec466ecf66535c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHR5BX37%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIC07e6Uebt75IM9INTuayjUSJlZ4%2BzolSUStXWUffLp3AiBfCu6LsIL5bsWJyPjLi32TT7Q7VEVuwDOkqKr2FDNIiir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMMxbjQoASwBBzlmK5KtwDNA8wur%2BhH5p4qQvOmWh6MhHcJo6veJ2sEc%2FvVednpzHhjKD3N21pt0PR1tpOpE4BVGsbHnAYhwdYczn621rOpQMQKBmtPaTd%2B8bZ04UiP84PAk703lnMen7S1G5GXWOW%2FKpjRogNDIreIJ9pPBXL8gazHLHEO9NCRZMr3BQeKQJS4FRv7TCqctmdPdbZXK%2F6e7Nj%2FFkZQjL62T8dsj8ifdvegxJt8ONothcEvph714l9vPNZJCSXgyJ6gCw9EfV2Y23bN4B1LAwATu3esciX3MAY%2BO03Yv4rjiFxABN4GMhXrckrhDyOgvAzY4k4Jgb32EUxj1JU3J9Kplkzgbsj4sZLCN1gHkBNwFnB4GrBwakhpDAb1Q5vxu3quOpBtfotjJ%2B%2FG%2FMY2oAHojrRhbTpiH4krsXA%2BlsZwU2jDknQtiSPzyKxtCYIcjhYM4T%2B6usk7KfUca11VVbUtJhH6rET2aw0OsUTUx5LRzKalw8j1TtI%2BPotjzLrL6bgpeKeBoF6o3sx%2BeZUqL15k%2B8Jx%2FtXs2F4Yo7FJlcyfWHkLy5ZXOyPdNlBZh6PCOP%2FxW%2FhEHZUKAWq0tUB3qc%2FurjoddJJPH2EBkhitj0d0xErfXfmjH2xAVX4TGiqLziirKswj6OWvQY6pgGWewLADmJMcPqYhCcfzAA%2FAB41s1UAxlHiRSXyYZVIdzQIZva%2BxVeT%2Fbdu3lJL%2FlH4O8dZiI6Xn8FlVmLQ0wA3AMse9p%2BRUA6OmaLBg5eYnLBFZIuunT94RfFl6%2BQWYcSsqfQQZQv6isUacW6bbuddySTEVIUTdyFos2TMhadJGTt25deC0LlvEm7ap2ZKKBwrF93cBXHaCYUFqobrvFSfmW8cQA7o&X-Amz-Signature=ba9ee40cdf81500a7193d91373ba0cb7a9f124dc3c49fac228464e672c77baad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
