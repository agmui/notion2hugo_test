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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454JXKMN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFLZEM8bXsozx9reqfd2n2MTqycjHhvCpPK39%2F%2FSqzxeAiBe3WPCbpJuzDbhjXuBpZiN1DNl9M9gDHaMamBQbD1zyCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMppBsZOxY41p0WflBKtwDQjsD%2FQgYzq8MJlWY5WmJbxI1eO0kYIq0vpFhoaE2xpnJAFn7sDfhZDDOKj3CgHYvgPa1%2F0JGUhPMgS63RB%2BSQSNFgMZBc3QI2%2FFllae%2FUyPPkHr1iMAiCdJ0Y3JjGgdVvA2jBJ7lTNurdyqlheupUsUgbLL%2BZvOTF5KISkmDdgnlbnB82skbP81M0TVDmqZvV8tEbi7Ogc90qIjspmWEs5Ici%2FqizysFR%2BmsR3fE%2F0zUhq9YoZBlQVeOajOUa7e7K2mK84Znt1hbvZDPoaELDiPLb1YEZa00kWEk1h1jUMVu4QNcYfXKhFW4zs2qg3VUYCLowgLbrJgTpdp5GKFzqXcoodNINcOWi6YB8D3CnKgABtMMAoHazA4rQ7kM4HL9ERIrtimUBj3q2MaN7d4qUMxbkov%2B95LTWj%2F3lOnDm1A1TVQSwJZAO3IKquSzylpIhizKF0l%2BWDURuJhdsPEDuEH3xtUVugFMRJj81kthrD7JWT7uDfeXwns%2FuJdU%2BjvcNUKkkZ6YJPHf0pXExcA%2BdifEHOLhdpkIzobMybrNir7EP0Gcm3n9wcxRVxv1mhp0ZqOc3YVIvabRO8Ph6LEIgd9phNBCRIvR272hHAWDHQ%2FHaQFhaTuOK0jCzMYwscKdwAY6pgHprUMt%2Fr1SwOttpl%2F9k5SZD574BkxVo70s1FG0k8JUgOAQhXMLsu7NjQ7ffOpSXuDwY8mRmlt3e1km5PzlGkPDrU%2FwxdkZ10g9%2BdM%2BJTh4FegDQEQXYFnT2aPdAhzj3F1dZtcIw%2B8lBA6iGEvI3Jf1anF3sxS4kTszEhPcatNWmJJJ1xP2MJvdDiUi%2BcAsoTCerhj6pnKcGpIjlCpwd3RboBQrP%2FZ4&X-Amz-Signature=66125aa2b37e48af0bda3e40de7fdd34681b0ade1488cd5a6bee6e9ef0c80709&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454JXKMN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFLZEM8bXsozx9reqfd2n2MTqycjHhvCpPK39%2F%2FSqzxeAiBe3WPCbpJuzDbhjXuBpZiN1DNl9M9gDHaMamBQbD1zyCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMppBsZOxY41p0WflBKtwDQjsD%2FQgYzq8MJlWY5WmJbxI1eO0kYIq0vpFhoaE2xpnJAFn7sDfhZDDOKj3CgHYvgPa1%2F0JGUhPMgS63RB%2BSQSNFgMZBc3QI2%2FFllae%2FUyPPkHr1iMAiCdJ0Y3JjGgdVvA2jBJ7lTNurdyqlheupUsUgbLL%2BZvOTF5KISkmDdgnlbnB82skbP81M0TVDmqZvV8tEbi7Ogc90qIjspmWEs5Ici%2FqizysFR%2BmsR3fE%2F0zUhq9YoZBlQVeOajOUa7e7K2mK84Znt1hbvZDPoaELDiPLb1YEZa00kWEk1h1jUMVu4QNcYfXKhFW4zs2qg3VUYCLowgLbrJgTpdp5GKFzqXcoodNINcOWi6YB8D3CnKgABtMMAoHazA4rQ7kM4HL9ERIrtimUBj3q2MaN7d4qUMxbkov%2B95LTWj%2F3lOnDm1A1TVQSwJZAO3IKquSzylpIhizKF0l%2BWDURuJhdsPEDuEH3xtUVugFMRJj81kthrD7JWT7uDfeXwns%2FuJdU%2BjvcNUKkkZ6YJPHf0pXExcA%2BdifEHOLhdpkIzobMybrNir7EP0Gcm3n9wcxRVxv1mhp0ZqOc3YVIvabRO8Ph6LEIgd9phNBCRIvR272hHAWDHQ%2FHaQFhaTuOK0jCzMYwscKdwAY6pgHprUMt%2Fr1SwOttpl%2F9k5SZD574BkxVo70s1FG0k8JUgOAQhXMLsu7NjQ7ffOpSXuDwY8mRmlt3e1km5PzlGkPDrU%2FwxdkZ10g9%2BdM%2BJTh4FegDQEQXYFnT2aPdAhzj3F1dZtcIw%2B8lBA6iGEvI3Jf1anF3sxS4kTszEhPcatNWmJJJ1xP2MJvdDiUi%2BcAsoTCerhj6pnKcGpIjlCpwd3RboBQrP%2FZ4&X-Amz-Signature=597d0e54a96ed078132eef0f228c504f6f3a6ea8a823a1eca3bbe6395d534179&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
