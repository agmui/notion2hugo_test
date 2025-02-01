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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ULGHTN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvVJcZIUry9kf83rqZk5WQP0089GXVyH%2FNrZohJYFRjAiBkYerVZKQZyBMSO0ZgblXWXIpJ4HrCNZ9WqkYabkq7OyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8pb0E5FD3SABllQKtwDrHroO7g2r9bzspKkHPiNMWux4D0QBNWh67AIq8IfanIotMOaKEmZ4DUs7Q%2FbLOAGVc%2BREgsEEcK6qb3uUEVKYeCqtr1rxLDC77Eis8oda8bC3u8YwiF36b7n4d5eHSi0jxf6V4SelZ7MUqJYhktxNlWVZKcRoXfxea5ls9rjQ3WaTGnU8Zq8LWn25l1lk4wdp759Cu7ih48IWJORnzop0T6CHgPJG2TKkLSFWOwZd1%2FtU6O2if42QuS3WRPpWD%2BP48m1teBvwFsB3cyqo74CsaJGawRJ4%2FCA5Z%2BLSAmiU6xQ1qz4aCMnh%2FjeBeVfkoe7sVgIrsDB52wnooBZlF3KW8zvUK3FI2JFhp44vld9djZcCuYArBBo9hXzmeEy9NmL39zR4RmuflE7CdqCLfectiP9%2FBndBbJhG4pENSwURHOIaBm1mBq3%2F9LYQe58p4B%2BX0pwQJuKC5cYKLkpongSBxP2cIbl9NKreGfiBwKhRyvWPitCfhn9HfrsNabmT2k93vFkRLKOpYLo62pWymahcy1gkH9LGxXrQ0DYsdwfbif%2BLrNLUBFQxAqNFGmA1cSJcv%2BdV5wGSz5X7I43gpzO%2FSlwZW9EThAImDxbiG%2B%2FVHG%2FM066X4U2uJzokOQwhsz4vAY6pgHTP26HfV6RYrVPxrHpfZca5%2F0Fa3OV609TR%2Fc2DEFF6uS3VwRK39UfPD9tP6MzeNriJvnRxDdrrgsrtT%2FcSQypqMnl5CPwMqM0pGKCoc%2FkUx3PIp6HWCfxOTMUOjmA6MwbK%2FrJDiIJ2Hbq6wo%2FtbkQkKOn%2FPNyWpSJaArlehCx3NJsuNdANM64QXkPKRRi9KFj9mt0w1TvxPfJ2CBUnBRgpUOVMLfS&X-Amz-Signature=257c4c7c0bca6fbd05561848e7e34031b55b1914aa8ee18738f7a8ba8d481efc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ULGHTN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvVJcZIUry9kf83rqZk5WQP0089GXVyH%2FNrZohJYFRjAiBkYerVZKQZyBMSO0ZgblXWXIpJ4HrCNZ9WqkYabkq7OyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8pb0E5FD3SABllQKtwDrHroO7g2r9bzspKkHPiNMWux4D0QBNWh67AIq8IfanIotMOaKEmZ4DUs7Q%2FbLOAGVc%2BREgsEEcK6qb3uUEVKYeCqtr1rxLDC77Eis8oda8bC3u8YwiF36b7n4d5eHSi0jxf6V4SelZ7MUqJYhktxNlWVZKcRoXfxea5ls9rjQ3WaTGnU8Zq8LWn25l1lk4wdp759Cu7ih48IWJORnzop0T6CHgPJG2TKkLSFWOwZd1%2FtU6O2if42QuS3WRPpWD%2BP48m1teBvwFsB3cyqo74CsaJGawRJ4%2FCA5Z%2BLSAmiU6xQ1qz4aCMnh%2FjeBeVfkoe7sVgIrsDB52wnooBZlF3KW8zvUK3FI2JFhp44vld9djZcCuYArBBo9hXzmeEy9NmL39zR4RmuflE7CdqCLfectiP9%2FBndBbJhG4pENSwURHOIaBm1mBq3%2F9LYQe58p4B%2BX0pwQJuKC5cYKLkpongSBxP2cIbl9NKreGfiBwKhRyvWPitCfhn9HfrsNabmT2k93vFkRLKOpYLo62pWymahcy1gkH9LGxXrQ0DYsdwfbif%2BLrNLUBFQxAqNFGmA1cSJcv%2BdV5wGSz5X7I43gpzO%2FSlwZW9EThAImDxbiG%2B%2FVHG%2FM066X4U2uJzokOQwhsz4vAY6pgHTP26HfV6RYrVPxrHpfZca5%2F0Fa3OV609TR%2Fc2DEFF6uS3VwRK39UfPD9tP6MzeNriJvnRxDdrrgsrtT%2FcSQypqMnl5CPwMqM0pGKCoc%2FkUx3PIp6HWCfxOTMUOjmA6MwbK%2FrJDiIJ2Hbq6wo%2FtbkQkKOn%2FPNyWpSJaArlehCx3NJsuNdANM64QXkPKRRi9KFj9mt0w1TvxPfJ2CBUnBRgpUOVMLfS&X-Amz-Signature=e6fc716ffc5c70161f0b484417235caf224912404e38e09b2c8518547169dd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
