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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JRGSQG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXPBeaQEZiocqbpyJaGpS86zferfDWqe7A3TU135kcIwIhANiycJj66i5GLwRIjJKb8tcOntZuYbAhzeWg9Gbudx8EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUoBK7r8ghrsRmxh0q3APjPdzwqGmQzRZT2QXL6S4APqrQV9PxGsZihyGR%2F0y6STdFG3Lz%2BF8liAxaBfwIRRSwZm6Lo7Wuv%2FSJxfwGv6ftYb%2FWPmLNAXe4M7wWH9WKbs%2BKYWZHZRR2Ufc%2BASQI%2BHnHzq86uks7axG5AGYPBeAfllA7oqAswfjI6PWQ1Ujykg6%2FjSGX6CZUXyGbczpVrNJhUwPZTEIaQ2VwrxN5go6r2Xg6wUeqWxbVF%2BDhfhlMamUCAD2KiXajpBEhBo8s0H7GTPTwA1nu3A89QrcBX1eVNOdoqexO2Iayr8jYSfKR0EcWTDuQatN7gxLHlXvSvl3fEM9iovLfQUzgMtdZSnFJaXqbo0KtiWKi3bGf%2Bx%2BjllFcrBz5ah5WNpwNGeAhaLayWxYlHHlJ79W0zpheIhCPqrRD%2BKyxVKDIv95X9ieDNiYiHZsPtBNABnDFOmSNuVRyYmzn1SdYDm1vNtCyo9D03udfXuXJsz3n5GLfCj09LFp6F6h9WpO0Ej5wnOFvsLiSHGL3%2FF1zD1YZmoWFQfLlNLAX48qxB49%2BD2DzlpdA8GdXqe6V16ARy6Z6IpyrCTFqAqwAABoPpRWbjtI8%2Bu8ixq3C8EKcUsSqv%2F8BHL5hRbSWqsRYhzGose9wpTCV2qa9BjqkAeNJ8Ik15k4XGy2JuHigFdeeZopW0I%2F9ccFvYNufVRLkZWYVfLEBTTi3NXR3qkVA0kj2CjIuHEEcj%2FDXNvlAqeB3j3ieAptmVLY3uGlLFVdXsWBGx5a%2FynWiRj8NyJDMAMwD2V8vkQDcr5OPWz3Pqj5fMmLrKoTkUMKME1UXrwyCsKUUSVboYnZst5Nv%2BxT3i3%2FBNCPMEIcbg%2BNMApykQSjb9PoA&X-Amz-Signature=39db0471d85c4e1797f16629de7738871712f7eb49821a1c21f1e05c0be65736&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JRGSQG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXPBeaQEZiocqbpyJaGpS86zferfDWqe7A3TU135kcIwIhANiycJj66i5GLwRIjJKb8tcOntZuYbAhzeWg9Gbudx8EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUoBK7r8ghrsRmxh0q3APjPdzwqGmQzRZT2QXL6S4APqrQV9PxGsZihyGR%2F0y6STdFG3Lz%2BF8liAxaBfwIRRSwZm6Lo7Wuv%2FSJxfwGv6ftYb%2FWPmLNAXe4M7wWH9WKbs%2BKYWZHZRR2Ufc%2BASQI%2BHnHzq86uks7axG5AGYPBeAfllA7oqAswfjI6PWQ1Ujykg6%2FjSGX6CZUXyGbczpVrNJhUwPZTEIaQ2VwrxN5go6r2Xg6wUeqWxbVF%2BDhfhlMamUCAD2KiXajpBEhBo8s0H7GTPTwA1nu3A89QrcBX1eVNOdoqexO2Iayr8jYSfKR0EcWTDuQatN7gxLHlXvSvl3fEM9iovLfQUzgMtdZSnFJaXqbo0KtiWKi3bGf%2Bx%2BjllFcrBz5ah5WNpwNGeAhaLayWxYlHHlJ79W0zpheIhCPqrRD%2BKyxVKDIv95X9ieDNiYiHZsPtBNABnDFOmSNuVRyYmzn1SdYDm1vNtCyo9D03udfXuXJsz3n5GLfCj09LFp6F6h9WpO0Ej5wnOFvsLiSHGL3%2FF1zD1YZmoWFQfLlNLAX48qxB49%2BD2DzlpdA8GdXqe6V16ARy6Z6IpyrCTFqAqwAABoPpRWbjtI8%2Bu8ixq3C8EKcUsSqv%2F8BHL5hRbSWqsRYhzGose9wpTCV2qa9BjqkAeNJ8Ik15k4XGy2JuHigFdeeZopW0I%2F9ccFvYNufVRLkZWYVfLEBTTi3NXR3qkVA0kj2CjIuHEEcj%2FDXNvlAqeB3j3ieAptmVLY3uGlLFVdXsWBGx5a%2FynWiRj8NyJDMAMwD2V8vkQDcr5OPWz3Pqj5fMmLrKoTkUMKME1UXrwyCsKUUSVboYnZst5Nv%2BxT3i3%2FBNCPMEIcbg%2BNMApykQSjb9PoA&X-Amz-Signature=da17aced7291728d48a9d3cd80fd22f8d695c6b1903368ddd554aedd9797b9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
