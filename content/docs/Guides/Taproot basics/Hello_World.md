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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7W4EDZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYnt1A87L3kgH6BjmaIdDNkW%2FXm9vqqHvDpHexeYJlDwIhAMKm9pChncHQHmXkgG9gdjT7YK6O0Cs3rGk57DXYn32SKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8kenwsCjHhDJ%2B%2Fpwq3AOfWe7CZni00ETxkKrr88rHGNlqaz0VB21a5YVOUwaVvfFICnWBZF16rQnzGFr8AFkJPxwrJWllKjPzmfdRmxDDCq0aJlvR6642J9GJM8PhNQMFYB7%2FsPGBTwJN4swMsuB71XfSjB19D9cg0QSt37z0gMhaw%2BVm%2BKImiJqBoJutJU9X0pl81etsjNhQ%2Fl2Wjit2RXg%2FNEyW%2Flr1uixUcGZEWucfQ1gED2Ey4RHEEDAN%2BmSiqWmS72PJSHxNQtf9UiMMefNVOHxDrJ62rMDae%2Fuxvtv7e2dsDtBov786cKhvnSCRvqSJ3dbGhMovdBkfSLm9JP%2FIJfCqNtW7SkGnz1XHkxoBXgQlU4VZawVz7%2BfSlPkOIJtyhnNWZDqgSV%2FFoek%2BGJBVap%2BZkGtpZipXevFJ87%2B9uoHOhfGSuJka56wuaCwFau7wYfSwcNOn7%2BEXoImoQ8OEH8hMEGgDL3IElmkhynhDjy8z6H1hViYcWsn3avnFdqRFAN3g7Rwz7EjahjxNwd6%2B1AdipU1DUIfq8PIoyeOAHwJwiaQbhlRNNwNIeU1OIKQoxIRH0N%2FcctoqMuzxNzN3Bu7JL%2B01qAAnj23CALu716Zs0W3RLV4Z6VpdYRqv3DxuvpWLe5kf4TC5sbPEBjqkAfO1ZHpUad1GyytIeKPfMqid9fAkeYRnr5Kp2Njur07E%2FWtvTROWaShdFCHka4YJMzr20SlrhEfd57HrmB9pXTItqaZSIIuTcaAYSxz%2FVpno%2BSCNcDpQT4jZ8gjeVHsZfqvt4YcTD%2FGF03Y8slMx9mTzA0Ff4xfXTZNVIy2FvcTD%2Bfi37zBBJrs4%2FM1ftmLtXwXh3rXe2qxOKB9yL60a3KEtQcAO&X-Amz-Signature=872a444af906572c2561c4041bd1961dece69508a4651c9f4232edcc59c52080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7W4EDZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYnt1A87L3kgH6BjmaIdDNkW%2FXm9vqqHvDpHexeYJlDwIhAMKm9pChncHQHmXkgG9gdjT7YK6O0Cs3rGk57DXYn32SKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8kenwsCjHhDJ%2B%2Fpwq3AOfWe7CZni00ETxkKrr88rHGNlqaz0VB21a5YVOUwaVvfFICnWBZF16rQnzGFr8AFkJPxwrJWllKjPzmfdRmxDDCq0aJlvR6642J9GJM8PhNQMFYB7%2FsPGBTwJN4swMsuB71XfSjB19D9cg0QSt37z0gMhaw%2BVm%2BKImiJqBoJutJU9X0pl81etsjNhQ%2Fl2Wjit2RXg%2FNEyW%2Flr1uixUcGZEWucfQ1gED2Ey4RHEEDAN%2BmSiqWmS72PJSHxNQtf9UiMMefNVOHxDrJ62rMDae%2Fuxvtv7e2dsDtBov786cKhvnSCRvqSJ3dbGhMovdBkfSLm9JP%2FIJfCqNtW7SkGnz1XHkxoBXgQlU4VZawVz7%2BfSlPkOIJtyhnNWZDqgSV%2FFoek%2BGJBVap%2BZkGtpZipXevFJ87%2B9uoHOhfGSuJka56wuaCwFau7wYfSwcNOn7%2BEXoImoQ8OEH8hMEGgDL3IElmkhynhDjy8z6H1hViYcWsn3avnFdqRFAN3g7Rwz7EjahjxNwd6%2B1AdipU1DUIfq8PIoyeOAHwJwiaQbhlRNNwNIeU1OIKQoxIRH0N%2FcctoqMuzxNzN3Bu7JL%2B01qAAnj23CALu716Zs0W3RLV4Z6VpdYRqv3DxuvpWLe5kf4TC5sbPEBjqkAfO1ZHpUad1GyytIeKPfMqid9fAkeYRnr5Kp2Njur07E%2FWtvTROWaShdFCHka4YJMzr20SlrhEfd57HrmB9pXTItqaZSIIuTcaAYSxz%2FVpno%2BSCNcDpQT4jZ8gjeVHsZfqvt4YcTD%2FGF03Y8slMx9mTzA0Ff4xfXTZNVIy2FvcTD%2Bfi37zBBJrs4%2FM1ftmLtXwXh3rXe2qxOKB9yL60a3KEtQcAO&X-Amz-Signature=46dc5cdd70f6b76846c813d1776f826818ce203365b5e576e73b725143f3d587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
