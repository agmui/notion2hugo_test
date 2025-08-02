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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEZX5Q2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vl0CubmVycMjSlSNMsMjVXX1m61Sc5%2BAsCOVA1ro3AiEA6fsb3UNUNdb5yZfmtuoIXd9HAx5BAkytjZTFY6gqtMwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zKzFl9XubdU1lMyrcA%2Bw4CPic54Gv9ZJiWBDye6o%2F6Au10GSEt1qU4sP%2F%2BennkcTrGtYYJ%2BTgtXvSBDlBAF1%2F1FNiU9sCrs%2BoSaSGa9auQiHXIUxy5VPy8JJ9FoacJDqeZwVgnmqnFppsH650mp4D8s8zgUd1CC67wpg7v0Mk4%2Bf5QrpI%2FqhlkxHmaA6hwXhVrVPFoHtfsTChRFoUv3NIsYd30XStbZClew%2BGU8BjY0ECAzYXoAZCwxvWdI61sg9Nugn3y%2FpbF4%2BYb4oJKWWFTpp%2BjSod6qdhIme%2B6bcci8vOnQie0THUF6joSRL5fxG%2FydqAi9CACeS6hVjQt%2BJvZuf1rS9IunawoNEfW3YpFxyEXF8yYPs4bVyKxmdjuabzLMNGJN1lbguDj3SLFBVXc2znSV1SjzpO4rAWnp38g0nac2udwaLH8WUWCCPKobw%2BWIuIXJWtLhOQFFCVRLVUssA7oFbYq8xW4dw6ELrwLjyZjwPkOy8jCp69VmMB7uDu%2F%2B0DmEHPwPVcT%2BpxoI6RE1WR4ilJh1ciOt%2FRQrtfZm3QHAP%2FdMDd5h6ExB9PwjfTXYwAN0Cjr0GsEw5ZXVjzj23pc08e0kiyC8YuzNmepjbAZ%2BnYqLD93rAW7931qnzwx%2BKzRAjRhEscMKX3tcQGOqUBIJFWWcz%2FCQBztxjSJz3sXoV2lQ%2F4zlDB%2BHr4cHI8JsDXfxsyC5SK3Jj1Y%2BZOwA6KPrZGqpEwy4m%2FovZ0XRYjdpf2QaBClENnAvKcYwMHsldoHqUIYsSor1NUVdlz6mw7lUOztTUMQwS9hEHqfrDat%2FsY5Cy6H6XW5KTfNxVIQ31fMb0Cir%2F6yYLVAL7M9mJeiHElWO4zUOB9GE7DH4JSsr%2F3IRn%2B&X-Amz-Signature=fa3c9cabf7b57633e916684dfd6c4a5876bfef67e5dbc493f92f4309c6c0c093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEZX5Q2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vl0CubmVycMjSlSNMsMjVXX1m61Sc5%2BAsCOVA1ro3AiEA6fsb3UNUNdb5yZfmtuoIXd9HAx5BAkytjZTFY6gqtMwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zKzFl9XubdU1lMyrcA%2Bw4CPic54Gv9ZJiWBDye6o%2F6Au10GSEt1qU4sP%2F%2BennkcTrGtYYJ%2BTgtXvSBDlBAF1%2F1FNiU9sCrs%2BoSaSGa9auQiHXIUxy5VPy8JJ9FoacJDqeZwVgnmqnFppsH650mp4D8s8zgUd1CC67wpg7v0Mk4%2Bf5QrpI%2FqhlkxHmaA6hwXhVrVPFoHtfsTChRFoUv3NIsYd30XStbZClew%2BGU8BjY0ECAzYXoAZCwxvWdI61sg9Nugn3y%2FpbF4%2BYb4oJKWWFTpp%2BjSod6qdhIme%2B6bcci8vOnQie0THUF6joSRL5fxG%2FydqAi9CACeS6hVjQt%2BJvZuf1rS9IunawoNEfW3YpFxyEXF8yYPs4bVyKxmdjuabzLMNGJN1lbguDj3SLFBVXc2znSV1SjzpO4rAWnp38g0nac2udwaLH8WUWCCPKobw%2BWIuIXJWtLhOQFFCVRLVUssA7oFbYq8xW4dw6ELrwLjyZjwPkOy8jCp69VmMB7uDu%2F%2B0DmEHPwPVcT%2BpxoI6RE1WR4ilJh1ciOt%2FRQrtfZm3QHAP%2FdMDd5h6ExB9PwjfTXYwAN0Cjr0GsEw5ZXVjzj23pc08e0kiyC8YuzNmepjbAZ%2BnYqLD93rAW7931qnzwx%2BKzRAjRhEscMKX3tcQGOqUBIJFWWcz%2FCQBztxjSJz3sXoV2lQ%2F4zlDB%2BHr4cHI8JsDXfxsyC5SK3Jj1Y%2BZOwA6KPrZGqpEwy4m%2FovZ0XRYjdpf2QaBClENnAvKcYwMHsldoHqUIYsSor1NUVdlz6mw7lUOztTUMQwS9hEHqfrDat%2FsY5Cy6H6XW5KTfNxVIQ31fMb0Cir%2F6yYLVAL7M9mJeiHElWO4zUOB9GE7DH4JSsr%2F3IRn%2B&X-Amz-Signature=bd5aec3d26fffce199fbe1a34088bb9a4108ecbf2c4811bc80ecacfcc659fb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
