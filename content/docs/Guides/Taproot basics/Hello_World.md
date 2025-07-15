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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHFNI3Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBCH2JkE4ZNXFxH1Qxk3BkGAjXutykEg07h3a3enUyXtAiAnDqu%2Bco7WDysNs%2FB9oXLv2BBKOl5%2BWbQ4yMBL%2FCSlFSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM82RgWP%2BsEjgDYv7sKtwDvfWZ%2FCLFhH5wV6d8thdE1zuYZD8MIlpo1TfBVsrgTNoM3S9dTH%2FpjfL6T0bXXinQ5JqjgRqZRqbuZkWVRWKK0w8BCjakuzqCw186p%2BLEhgZQRJ2XyYA%2BzzQSO99fiS985andQTu7YhmO7UX%2BnXe619iqa%2FVR8d9yDEX09aLzWDircDzT4gAa0lFFznG%2BGz1h29B7Rg6H6bIQeG6DzK9EYtugGEcTItL8imoa8BMw1%2Ba1NzePeSlSoLrXqEsL1UQDKnZkYEwkZNbcWo70DoOlT%2B7eaIfKfTfdVpVtU8blxiXSyKrux9xeDTPppBlXisRAsWg1QnQ5vPq8UJ0vj%2B%2FEm7TOQHAT0o5J%2FcaEaleS%2BrNcZzXvJJxoshc8F1EE1tJwF0sf5SToKEe9eKUnD0rTagz8CmJUEzNZdhdYrIIRaZY2L3NSQHOc62kOUOM5%2BLM81nQ3lDOSle4XDlyUmEWI1aF6sgiGP2BLb033LBi4rCxxi93IBfgkFzIF39XTu4GMqo4yVk4T0Gmml50c9XR2c%2F%2BopMRoXynsH2Ot5AlOY4TSxVM0QQwH3Y86KwL0wHvEhmGt9oB7tjaUTK9NVEvzWcJ3JvqO3wM%2FSCWESjzrBeZTTkKxRS1qzeLqhFQw%2FYbawwY6pgHE4xq2RnepQZymOKKqrMXz0KRp5%2B5BP%2BOwZ%2BiQBDnHQeJbDNA0HKNQZbx10Zc9up8EgC6nTy2LElGxOBPUbk2Dk%2FOArvE1YfKI6DQIqo3ab566uRAwCGtuktvTy2qjxP9IrO6vRT5JoI%2FgJBadncU4nbJ2WPhO9OkVQYXsmwiuNEGH5vAB7TI1FJ2Q%2BsxZXklLOhy%2F%2Fr7JusByx64nRHNuxfCFh791&X-Amz-Signature=030a27107d9713504886ce2ee69b1247289b53f15a1b1ffeab04f4db436662c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHFNI3Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBCH2JkE4ZNXFxH1Qxk3BkGAjXutykEg07h3a3enUyXtAiAnDqu%2Bco7WDysNs%2FB9oXLv2BBKOl5%2BWbQ4yMBL%2FCSlFSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM82RgWP%2BsEjgDYv7sKtwDvfWZ%2FCLFhH5wV6d8thdE1zuYZD8MIlpo1TfBVsrgTNoM3S9dTH%2FpjfL6T0bXXinQ5JqjgRqZRqbuZkWVRWKK0w8BCjakuzqCw186p%2BLEhgZQRJ2XyYA%2BzzQSO99fiS985andQTu7YhmO7UX%2BnXe619iqa%2FVR8d9yDEX09aLzWDircDzT4gAa0lFFznG%2BGz1h29B7Rg6H6bIQeG6DzK9EYtugGEcTItL8imoa8BMw1%2Ba1NzePeSlSoLrXqEsL1UQDKnZkYEwkZNbcWo70DoOlT%2B7eaIfKfTfdVpVtU8blxiXSyKrux9xeDTPppBlXisRAsWg1QnQ5vPq8UJ0vj%2B%2FEm7TOQHAT0o5J%2FcaEaleS%2BrNcZzXvJJxoshc8F1EE1tJwF0sf5SToKEe9eKUnD0rTagz8CmJUEzNZdhdYrIIRaZY2L3NSQHOc62kOUOM5%2BLM81nQ3lDOSle4XDlyUmEWI1aF6sgiGP2BLb033LBi4rCxxi93IBfgkFzIF39XTu4GMqo4yVk4T0Gmml50c9XR2c%2F%2BopMRoXynsH2Ot5AlOY4TSxVM0QQwH3Y86KwL0wHvEhmGt9oB7tjaUTK9NVEvzWcJ3JvqO3wM%2FSCWESjzrBeZTTkKxRS1qzeLqhFQw%2FYbawwY6pgHE4xq2RnepQZymOKKqrMXz0KRp5%2B5BP%2BOwZ%2BiQBDnHQeJbDNA0HKNQZbx10Zc9up8EgC6nTy2LElGxOBPUbk2Dk%2FOArvE1YfKI6DQIqo3ab566uRAwCGtuktvTy2qjxP9IrO6vRT5JoI%2FgJBadncU4nbJ2WPhO9OkVQYXsmwiuNEGH5vAB7TI1FJ2Q%2BsxZXklLOhy%2F%2Fr7JusByx64nRHNuxfCFh791&X-Amz-Signature=e4f0e06f16ef031a9f79da1864e4985acc7390187df96b02729b8e3909ff7bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
