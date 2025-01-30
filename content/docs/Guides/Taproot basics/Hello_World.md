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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREDGXHN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaRpohXmVjPCdTdx9vyqbztFFjgQK4BZOV%2FdReouiOugIhANlwyOJoq0awPoNn6ekgHeRrjyqjzrSfY9AC3MjtjfpCKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8fwleA%2FjJmPPT%2BXIq3AMlWNowb6kxHQ5EOYeRj3kG6GXFp9KJ3NSy1Kg6v1m6TOmc61qepWoTf8m5Uh4cu9Uk8NVXimZfmz48kO6L9av5N4U0LSobJc4HxbCI9Cji4IrCp%2BQlrr7KcvtWUEJocPqcPyNKEW6riu09jkGcjx1o3d7ecdusWIBtuzlPj0zrAU60C%2Blfnu2X5tpox%2BL7zaZKlByvG5LrpJGI65WZ%2B%2BHFE6CSZFn1TwTPshXd5dQ5Rh%2B5DmBScYJNI2xdkzLkZU3RLD5EVq9Vi15ZAvUTdO18PZMyUnhWbVl42EVunYQu7Vv6HUvHf9alJHt7txVRSzdLhmn1Kvxp9yijS4PH8jEMC3V5BkGqbIfViYgoWMMY%2FIlB629ODq7xwUQRBSNcnkdj%2BafGDyzMt5LvM1iuUN3n7SOjlVqB5xK9A3Tu%2Bu85yGL6b14x18YCcvdEP990XaRtG5qGGe2Bau%2BTMB99g2QE4ZZIKoGdqS%2BSVA2SBuH9LYMJbU6MfTfzsztkuaUlrv2KeONEvxkKzJT2t3Q79UKzloneAZwNhBndwLuMcScdbQbxJTSp3ooDLL7k7YCQ2GHiRMSgGVUtq3FIB1bd%2B%2F%2F23ayOpu5Ssnc%2BIh1QxzR2LqSqnJ62rWp4mHX%2B%2BzCf%2Fu%2B8BjqkAQGX%2FK8iuijyb0wpYtv0jQlEHIMy%2BzGG%2BayCgIM06tYT2%2Faeg0k0%2FEJh9e2EHiq4D3jz8aaI%2BIEU6NvmjK5xeBl43mX5IcxksYtUxSDt8scezbHkZPLKry68zEkYhH4l8%2FMBmgrIld60FJXtv40arsLXgLfzeRJ7Lccscf84dnC%2BDfIooLeY6Tl0pVm7sHQv9BJec%2FAlt5fDyO%2FlvQfO%2F8tr9WfP&X-Amz-Signature=31eca9838cf15dc3c85d3bd3688712db9f3aa943674f057771f1177d6436f5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREDGXHN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaRpohXmVjPCdTdx9vyqbztFFjgQK4BZOV%2FdReouiOugIhANlwyOJoq0awPoNn6ekgHeRrjyqjzrSfY9AC3MjtjfpCKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8fwleA%2FjJmPPT%2BXIq3AMlWNowb6kxHQ5EOYeRj3kG6GXFp9KJ3NSy1Kg6v1m6TOmc61qepWoTf8m5Uh4cu9Uk8NVXimZfmz48kO6L9av5N4U0LSobJc4HxbCI9Cji4IrCp%2BQlrr7KcvtWUEJocPqcPyNKEW6riu09jkGcjx1o3d7ecdusWIBtuzlPj0zrAU60C%2Blfnu2X5tpox%2BL7zaZKlByvG5LrpJGI65WZ%2B%2BHFE6CSZFn1TwTPshXd5dQ5Rh%2B5DmBScYJNI2xdkzLkZU3RLD5EVq9Vi15ZAvUTdO18PZMyUnhWbVl42EVunYQu7Vv6HUvHf9alJHt7txVRSzdLhmn1Kvxp9yijS4PH8jEMC3V5BkGqbIfViYgoWMMY%2FIlB629ODq7xwUQRBSNcnkdj%2BafGDyzMt5LvM1iuUN3n7SOjlVqB5xK9A3Tu%2Bu85yGL6b14x18YCcvdEP990XaRtG5qGGe2Bau%2BTMB99g2QE4ZZIKoGdqS%2BSVA2SBuH9LYMJbU6MfTfzsztkuaUlrv2KeONEvxkKzJT2t3Q79UKzloneAZwNhBndwLuMcScdbQbxJTSp3ooDLL7k7YCQ2GHiRMSgGVUtq3FIB1bd%2B%2F%2F23ayOpu5Ssnc%2BIh1QxzR2LqSqnJ62rWp4mHX%2B%2BzCf%2Fu%2B8BjqkAQGX%2FK8iuijyb0wpYtv0jQlEHIMy%2BzGG%2BayCgIM06tYT2%2Faeg0k0%2FEJh9e2EHiq4D3jz8aaI%2BIEU6NvmjK5xeBl43mX5IcxksYtUxSDt8scezbHkZPLKry68zEkYhH4l8%2FMBmgrIld60FJXtv40arsLXgLfzeRJ7Lccscf84dnC%2BDfIooLeY6Tl0pVm7sHQv9BJec%2FAlt5fDyO%2FlvQfO%2F8tr9WfP&X-Amz-Signature=f5262c4a5400f48759b112a0ceb0e5e23e5f157e5390d75e83184faca7fd215a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
