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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A36XVLA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyDiNmAn8WxvFapKmPRlvSDsC0C4DZBgzWyZc8M1JOxAiEAgO7GgorX84I%2FWAKytnSlBIMqy%2BnkRmLSVCyGIFComNcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBXeBFSRr2TqTIeKqSrcA09Xsouh1AEGNjWPFTibQkFVKfsdOtoS2LbiIXnqUgh7gZ655KV3L6I4%2Fbd4ajE9aI70f3h%2BknVF8XOzQ9rLoZFcG5zImtbItPnTZ3p4voSmFYuBn1eQ2EBfzymF%2Bp4Py%2FCZbC1ibvxX2cBee%2F%2BUhzBrX%2BFOJ6p%2FLmVFP1yvP1SH5VD%2F2MUSYlQck7rahr4OqefVTZ2f0AIYpX%2B6EMxtCe32RzGC7GtuVXOrtEa1PscfdLxEaEm0n1etFMAqDZGYVE5wLKX%2FpQVTPbKUC2FbQg7vJWkbD4Ls8E8tDWpFaFYduVsInspknN6Q4S9Y3819Z11%2FEmINrayAgyngWupictIALET2KLrw0LQN9pJcn2RAL1Ug1e%2Fo7K2POwdIebiVfM2vQF0Wn0NcIT2DxzflVxLv1XZWrBFRhtXZxEybv%2BMpWeK1FGD6te2%2FMv2Sqxnl0jKXkekjTYiKRhler6ym8mDFw1dCNxLEpp8UkdTYYrOaJxeVGJm4juAxJ0kz1jrnuvi8jlOoG0V8lniRJZws7ZfrSgekC2GnJ9HHWmFtVei00U6exBpusDGifl4e9xbqB%2BZLr3MDaOLBlqOD6VJvhohq5aKElLdyIcms0JJXM3KW6%2BNNLwxbnlU1a%2B%2BeMITK8sAGOqUBJGwJvbxQg2JwxWBOgKBhRIVrdqfNrBZ%2FG%2FhKWCPn2e0Wltp8IjN7dW5LiJO85hTLltRLUaNUoCv1iIKhoN9Rzxqcc5BpNqQpT1D3xxKIEFYhxD884XjqJtO9uuB3sQxoavGsq9i8kQtiW6L5jUYvboiPKni%2F6b6tZuNiSiBN90ELSnpgczeQXLscRdFaxqARHpjcKWh2%2F7%2FFyRfLW8bVjz26IJg%2B&X-Amz-Signature=4f5baa58bb7bead74a735657f469b030ab24af5aa515a833c444a18cb65e69b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A36XVLA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyDiNmAn8WxvFapKmPRlvSDsC0C4DZBgzWyZc8M1JOxAiEAgO7GgorX84I%2FWAKytnSlBIMqy%2BnkRmLSVCyGIFComNcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBXeBFSRr2TqTIeKqSrcA09Xsouh1AEGNjWPFTibQkFVKfsdOtoS2LbiIXnqUgh7gZ655KV3L6I4%2Fbd4ajE9aI70f3h%2BknVF8XOzQ9rLoZFcG5zImtbItPnTZ3p4voSmFYuBn1eQ2EBfzymF%2Bp4Py%2FCZbC1ibvxX2cBee%2F%2BUhzBrX%2BFOJ6p%2FLmVFP1yvP1SH5VD%2F2MUSYlQck7rahr4OqefVTZ2f0AIYpX%2B6EMxtCe32RzGC7GtuVXOrtEa1PscfdLxEaEm0n1etFMAqDZGYVE5wLKX%2FpQVTPbKUC2FbQg7vJWkbD4Ls8E8tDWpFaFYduVsInspknN6Q4S9Y3819Z11%2FEmINrayAgyngWupictIALET2KLrw0LQN9pJcn2RAL1Ug1e%2Fo7K2POwdIebiVfM2vQF0Wn0NcIT2DxzflVxLv1XZWrBFRhtXZxEybv%2BMpWeK1FGD6te2%2FMv2Sqxnl0jKXkekjTYiKRhler6ym8mDFw1dCNxLEpp8UkdTYYrOaJxeVGJm4juAxJ0kz1jrnuvi8jlOoG0V8lniRJZws7ZfrSgekC2GnJ9HHWmFtVei00U6exBpusDGifl4e9xbqB%2BZLr3MDaOLBlqOD6VJvhohq5aKElLdyIcms0JJXM3KW6%2BNNLwxbnlU1a%2B%2BeMITK8sAGOqUBJGwJvbxQg2JwxWBOgKBhRIVrdqfNrBZ%2FG%2FhKWCPn2e0Wltp8IjN7dW5LiJO85hTLltRLUaNUoCv1iIKhoN9Rzxqcc5BpNqQpT1D3xxKIEFYhxD884XjqJtO9uuB3sQxoavGsq9i8kQtiW6L5jUYvboiPKni%2F6b6tZuNiSiBN90ELSnpgczeQXLscRdFaxqARHpjcKWh2%2F7%2FFyRfLW8bVjz26IJg%2B&X-Amz-Signature=f79f1932cfef00776721a241f46a325e4590f47df85769e61ccd457388e02fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
