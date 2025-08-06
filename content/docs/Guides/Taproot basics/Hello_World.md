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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EOPDQ4X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBFHna30mJbRMMF5D2N%2BTEmMF7hxQShHhXKpuHBtTJncAiANpCxLu7EynNGXJlYEARLDKkL9NIJs8oLol%2FGSMzN0%2Byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMoCQf3Evi2gNgIoJ2KtwDJv4nUKyL3yF8kLHWh26MybK3nf3OT7M72n%2BfOC9Bgfe%2BHBotPZdl53Y5OWB4Z7EWr1EBD68TfywAoRk5TeKA8gxT%2B34t%2FLKaC5CHFSEqAfq%2F93iMh%2BhUIknMfe0Mn2O9Jkr%2F5RP8HA1UxT2XtDzHotajXeAn6C26c7gx3aXGtwJKE629ih%2FT%2Ft624eCbRY39EMYHUSb8mEzL0y8ypZ%2FAxqJ%2B8A5JXvu2tHJtf2jiMGJIGtE68MlmNAaRV%2BqxvTK91F3D1pw4zGISyrGLecZzh1R6CgUSlsCEJp6FpFm4E8wBUbYtamGnhB1w4tFPLKObDLlmI9244wMTMor8Qxzq%2BMCLEskE9MQo49WYZwM0C321zWOG%2FUqGpLeDII%2FdbuQG9a4E5rpEb9p63jnAZKm4f90iC8011TAmk95KPnyLnEwd%2BP8BDVBRajmzcOkmA1bgZ4kZIAvxiOaUQGDPsg8g%2FPzOpvAQuCadHg3TLuGRDgU8Wzwsy94swxYEzGufmszFWcVkLkXiwcVqars7MvXnCFVoAS4Lrk43DyHiOdScKHpw4%2Bbx%2Fs9ao44ncf6C4C9HzimTtz2vBUWig5X76Ofy9Gjys5Nm%2FgQCE74ej90GqJrUoNFTYa4QNwrHFEEwi%2BvOxAY6pgFotCZcfNEJCcR7WfwU4iy%2Fv1M3G24YZLjnfu%2B2C0HzZ0TOU6KdU7VU1t21pcbGM1W2pJ3QAZ2ZWdn1QZvjlRsrD0RVzAaOvTrS0plLfFNyTR6ePn4SaWTr9gPI106gjuj7ZPWqc7J9kGWy6w%2BipjQZmUOCgHexeewIGeXHmEp2ilIMKNErwG3G95WtZhzVN%2F%2B87fCLnREuknwJYcErEJUtpuwMdw%2Fd&X-Amz-Signature=dd18eb9a7b5cca9f0e1479f3f62db7be645c91cd70a45dc7c23a7e516df39d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EOPDQ4X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBFHna30mJbRMMF5D2N%2BTEmMF7hxQShHhXKpuHBtTJncAiANpCxLu7EynNGXJlYEARLDKkL9NIJs8oLol%2FGSMzN0%2Byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMoCQf3Evi2gNgIoJ2KtwDJv4nUKyL3yF8kLHWh26MybK3nf3OT7M72n%2BfOC9Bgfe%2BHBotPZdl53Y5OWB4Z7EWr1EBD68TfywAoRk5TeKA8gxT%2B34t%2FLKaC5CHFSEqAfq%2F93iMh%2BhUIknMfe0Mn2O9Jkr%2F5RP8HA1UxT2XtDzHotajXeAn6C26c7gx3aXGtwJKE629ih%2FT%2Ft624eCbRY39EMYHUSb8mEzL0y8ypZ%2FAxqJ%2B8A5JXvu2tHJtf2jiMGJIGtE68MlmNAaRV%2BqxvTK91F3D1pw4zGISyrGLecZzh1R6CgUSlsCEJp6FpFm4E8wBUbYtamGnhB1w4tFPLKObDLlmI9244wMTMor8Qxzq%2BMCLEskE9MQo49WYZwM0C321zWOG%2FUqGpLeDII%2FdbuQG9a4E5rpEb9p63jnAZKm4f90iC8011TAmk95KPnyLnEwd%2BP8BDVBRajmzcOkmA1bgZ4kZIAvxiOaUQGDPsg8g%2FPzOpvAQuCadHg3TLuGRDgU8Wzwsy94swxYEzGufmszFWcVkLkXiwcVqars7MvXnCFVoAS4Lrk43DyHiOdScKHpw4%2Bbx%2Fs9ao44ncf6C4C9HzimTtz2vBUWig5X76Ofy9Gjys5Nm%2FgQCE74ej90GqJrUoNFTYa4QNwrHFEEwi%2BvOxAY6pgFotCZcfNEJCcR7WfwU4iy%2Fv1M3G24YZLjnfu%2B2C0HzZ0TOU6KdU7VU1t21pcbGM1W2pJ3QAZ2ZWdn1QZvjlRsrD0RVzAaOvTrS0plLfFNyTR6ePn4SaWTr9gPI106gjuj7ZPWqc7J9kGWy6w%2BipjQZmUOCgHexeewIGeXHmEp2ilIMKNErwG3G95WtZhzVN%2F%2B87fCLnREuknwJYcErEJUtpuwMdw%2Fd&X-Amz-Signature=eb8bda5a19e617b75b551ee73106ca57d2d04ed3ae0f12b86b1f79127f8a31b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
