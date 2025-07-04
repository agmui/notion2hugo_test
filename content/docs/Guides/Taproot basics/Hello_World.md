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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644XIKSAN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDVCiVhB1zm43KK9O%2BZpurAGvhxBPo9zXcIbPMv%2BypxHgIhALpFh2fDnw%2FE7mO7BIvSme0rJfXb7pWVjrl8wgSt5EIyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyEylMDQ0mrCcncDyMq3AOt9SnnzKWgZRMZGQD9rSTgrcn4oAeBNRn75jWpxHe7RpNsyuYrjNrR2rLLMMK0KzOhWz9eF6r57XVrUUYLJrXjLDAkXwFGy6HRHS9Qgq5y9dESs1hOQcD9IEV8T7Ol50m%2Bn3hR7BZSgH8ZQ9bKtG6lQXawyNdkh0Kq5mGggUP%2FuC0EclBIOBKmw70SILpgLDtZSgjUHcqN3Y4y4UOHR%2B%2BR2EgEj%2B0leINdnQlgen2yp0hjfwQ8I3BD7es1tjqc%2BmjwZ5tsIXgbp5dQitdvtIjL07rEU%2BJ0%2F8WngTRKT%2F1CoZ9uFVJHuCUT8q516%2B2eTZr8HH1k5%2F6MmHH38WlU5i0S%2B%2FjGtErXBa6nK%2BmlVvIRpg5xiZFZ%2FdlG9Y9xQzNxCoN6xTUjyWILMdhJYD6qmIbjaKnf8caYVojkgCjaH2DKkWwzu%2FGEtg2xUlzsKqbUpEMUvv7%2B1Z8JNwXOeWFCUZQKuzgNL0msGBXCa5dyDzM4KwXyVc1keeLnqkHFw5%2BiXlpsczj1N7rs7mMnOvz%2FA%2FwGfxdXSOQkXCcmV3RXRlF4Ud90sc8IIWuJWIs7FpwaEjksA0Us6oyiO8kEH8QbDZZMwio4k32wN%2BOo%2Fsi2u4l%2FuQBnEKiCMdzAK1VOCjDMjZ3DBjqkAQgb355bgJGcKUVqPuiw6Qwuzqyp7Y2S%2ByPDhHgs7Urg65SVHFfznovjC4vdlgSF9v4HsR2DXSLHLB20zSoFjXEXhPon8aaIXxJokmx9MIsP38Fbr7iBRvCiiib2NvzC1jRTs52pszZQLWJNLLxaaSqBLTWCmsU%2FZsDbO%2B1wzFl1NRa24k0W01vv9PbclQY4V66bSXRGpsszWyqTqRc0XTwMc37c&X-Amz-Signature=5905f4dbff2d510ce661fef6c18f51efa041a0f27caa4df8e8d55b1357cbb1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644XIKSAN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDVCiVhB1zm43KK9O%2BZpurAGvhxBPo9zXcIbPMv%2BypxHgIhALpFh2fDnw%2FE7mO7BIvSme0rJfXb7pWVjrl8wgSt5EIyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyEylMDQ0mrCcncDyMq3AOt9SnnzKWgZRMZGQD9rSTgrcn4oAeBNRn75jWpxHe7RpNsyuYrjNrR2rLLMMK0KzOhWz9eF6r57XVrUUYLJrXjLDAkXwFGy6HRHS9Qgq5y9dESs1hOQcD9IEV8T7Ol50m%2Bn3hR7BZSgH8ZQ9bKtG6lQXawyNdkh0Kq5mGggUP%2FuC0EclBIOBKmw70SILpgLDtZSgjUHcqN3Y4y4UOHR%2B%2BR2EgEj%2B0leINdnQlgen2yp0hjfwQ8I3BD7es1tjqc%2BmjwZ5tsIXgbp5dQitdvtIjL07rEU%2BJ0%2F8WngTRKT%2F1CoZ9uFVJHuCUT8q516%2B2eTZr8HH1k5%2F6MmHH38WlU5i0S%2B%2FjGtErXBa6nK%2BmlVvIRpg5xiZFZ%2FdlG9Y9xQzNxCoN6xTUjyWILMdhJYD6qmIbjaKnf8caYVojkgCjaH2DKkWwzu%2FGEtg2xUlzsKqbUpEMUvv7%2B1Z8JNwXOeWFCUZQKuzgNL0msGBXCa5dyDzM4KwXyVc1keeLnqkHFw5%2BiXlpsczj1N7rs7mMnOvz%2FA%2FwGfxdXSOQkXCcmV3RXRlF4Ud90sc8IIWuJWIs7FpwaEjksA0Us6oyiO8kEH8QbDZZMwio4k32wN%2BOo%2Fsi2u4l%2FuQBnEKiCMdzAK1VOCjDMjZ3DBjqkAQgb355bgJGcKUVqPuiw6Qwuzqyp7Y2S%2ByPDhHgs7Urg65SVHFfznovjC4vdlgSF9v4HsR2DXSLHLB20zSoFjXEXhPon8aaIXxJokmx9MIsP38Fbr7iBRvCiiib2NvzC1jRTs52pszZQLWJNLLxaaSqBLTWCmsU%2FZsDbO%2B1wzFl1NRa24k0W01vv9PbclQY4V66bSXRGpsszWyqTqRc0XTwMc37c&X-Amz-Signature=cd4635f41e31a07fbac067ddf4149b9812b7e9ec1328a34fa36bf0241e88fc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
