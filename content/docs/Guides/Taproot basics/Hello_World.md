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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2LTVMK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDau9Y%2BB9V9VOv9mSoPxTam2QJh7dwwuZDG98XDfP9dTwIgFmSRnpQNM5OKJhp62X6o8FDHUrJ8PwiiFinIvPelV%2BoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCM8Ubd1Iv9K1hWCrcAzXsZd35PuQDNJ6RnmgoaOoF0DYAdZRIvj8XwdBaVkziOQo%2BWxDtfQFHmPqMCj%2BktdJtY%2Bn9H1Zhi%2BHY5%2BqGQigJTs0b25qNIy5ERIVYi1JQuH7fVGLEgVOCYHZlXdzDyITaKxLIzRDDUF0G1RItLTDcdGl6Kx8YxMfCoDHTTNb7bVfWyLshsy81im4PRxTNUjN%2BSgcvGlPFtciw2gUexZoaGzJ8nRZbRrdfvL4Rf4D%2FOxtjlCr9HJIjXti7PkextQdwGoBWaQ3540afCSoVQEvOT6mFuTJI2gQMwe8LlRHFclTMsGPtLb44KTnzqiZ0M2omF1PzlpdV3J5p1RZ%2Bg4mc3voeWkQeR9kW5V71jm8tFxeiwIpUHJ8zWtKtXlmb4E4bRnfNpeG%2B0Y5GBofZUiGUuadjQX8Om2RS%2BcyLoPi95eWgwVDnSpaG7a7XvtKI5iBE98Y2BoxCCaAL6bMg9DzjbmfwD1XF1KhHZavyYIUZcPziUfq%2BwpyIfk5TumKHrFpcx24DzyAZy8s0kAV598nysrEvulwCQNEuSAn%2BKi9YSQC27bGGiBSHDFtQatqfKFsl5qwIRGZd5B1A7Spvt4kCxO3gSL6Z6z1v9becgGUXVdRIGUE%2BxAaGFvirMIuWgsMGOqUBhx0ljL2iLG8%2B5PQQHdJyceytZX7HTxBbdFu%2BMSlGmMLUAlG48eFv%2FcdrgnreMLmJv%2BFO7Y5uEb5oyFyoZW67MCd7zuSc1YTQS%2FiviAQ1TWJY0Cd7FD0wJNW0l2HIKR6jj0D6JO3gd16OiHRyv3K5ZqnIliiJ3uLxweLWmUf2TJgE1PbKQq8rlPIJwY7PtfUEY3ygvxka9V2RXzni2wLYaC0SRPB7&X-Amz-Signature=b963987137961915b4f6ca262370c89c05cc3920b7ae851296b74123b1ddcd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2LTVMK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDau9Y%2BB9V9VOv9mSoPxTam2QJh7dwwuZDG98XDfP9dTwIgFmSRnpQNM5OKJhp62X6o8FDHUrJ8PwiiFinIvPelV%2BoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCM8Ubd1Iv9K1hWCrcAzXsZd35PuQDNJ6RnmgoaOoF0DYAdZRIvj8XwdBaVkziOQo%2BWxDtfQFHmPqMCj%2BktdJtY%2Bn9H1Zhi%2BHY5%2BqGQigJTs0b25qNIy5ERIVYi1JQuH7fVGLEgVOCYHZlXdzDyITaKxLIzRDDUF0G1RItLTDcdGl6Kx8YxMfCoDHTTNb7bVfWyLshsy81im4PRxTNUjN%2BSgcvGlPFtciw2gUexZoaGzJ8nRZbRrdfvL4Rf4D%2FOxtjlCr9HJIjXti7PkextQdwGoBWaQ3540afCSoVQEvOT6mFuTJI2gQMwe8LlRHFclTMsGPtLb44KTnzqiZ0M2omF1PzlpdV3J5p1RZ%2Bg4mc3voeWkQeR9kW5V71jm8tFxeiwIpUHJ8zWtKtXlmb4E4bRnfNpeG%2B0Y5GBofZUiGUuadjQX8Om2RS%2BcyLoPi95eWgwVDnSpaG7a7XvtKI5iBE98Y2BoxCCaAL6bMg9DzjbmfwD1XF1KhHZavyYIUZcPziUfq%2BwpyIfk5TumKHrFpcx24DzyAZy8s0kAV598nysrEvulwCQNEuSAn%2BKi9YSQC27bGGiBSHDFtQatqfKFsl5qwIRGZd5B1A7Spvt4kCxO3gSL6Z6z1v9becgGUXVdRIGUE%2BxAaGFvirMIuWgsMGOqUBhx0ljL2iLG8%2B5PQQHdJyceytZX7HTxBbdFu%2BMSlGmMLUAlG48eFv%2FcdrgnreMLmJv%2BFO7Y5uEb5oyFyoZW67MCd7zuSc1YTQS%2FiviAQ1TWJY0Cd7FD0wJNW0l2HIKR6jj0D6JO3gd16OiHRyv3K5ZqnIliiJ3uLxweLWmUf2TJgE1PbKQq8rlPIJwY7PtfUEY3ygvxka9V2RXzni2wLYaC0SRPB7&X-Amz-Signature=1e83735b4ba9857ddb82dfcb399df71d25f314744d796d6236a38feb8d5cc486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
