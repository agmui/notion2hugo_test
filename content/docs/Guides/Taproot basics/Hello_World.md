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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKXTJT3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNg6yTTxzfjX1ZTN5u0rphM0lqXAi5GL8q1Ayg54e1VAIhAInHevPsD31LrPd2n0N3LNE%2B%2FIrzH7r1iUTQUWhpswJQKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE6sPT8otQ%2Fz%2BenFMq3AOAIRmvzYJ4F25SI0yTCW1U4hrMUooRavZQooB1kZq6Db1o9IiJJcTaEuZhwwbaCSGXnq4lSiYlORvEc9Iqlha0Ys6rXMWZES6yGveDks73RfEG3mV4JEFKKFlJBnZjrx0%2BOupx6Y5tEY21oxDn4xHkoptATTUn%2BU6CTRtENJZYK9L1QuyyXx%2Fftkoi2zPdTRsHIYSgkchhEZ6UgfdU5D688shu4U%2FxEXR9SiHiSzXQ2F4ptY5lftfbo4fcfiPVPpC6xExsG5BQ8kK%2Feb8KQApeHoYo1%2FO%2F41mLve5jmRauPBuYa9qGhj%2FwnDrou9JjZ0IpotJVFea1oDZv4UwbAehsVeFVog10LBkTjso0bQJGSQ4zygNSrUWAQUV%2FyH9%2FgM6PZwNdR3WSdXoUAqPQOlj29mX3DDpi2RJgf5GSactf0orIzzmXQfWq4sASOzfUdlV48fph6UCGg6H4nFwn8UsKiyTQR94PDCqmBh6LdXyTQusMXf1eeEJP%2FxUFjIRqN86xMZ4UDaSZM%2Bqq0tlxjvQJh%2F%2FAN3d8%2BgfO%2B3c3olNzB6wo8Tk6fiYO%2FgqI5uFJ8Jw1KAj91BVqRvpPdiZm4slT5rk8G5C%2BsLJhuF2CxcfQ0pW6MyN9j%2FbkvXHLRzCFoc7ABjqkAXIdyaYnJK5JUEg3%2FCXFi6xDNSlrcVfKrH3R5CGpe0LmQz3ByD2qQFxOqcg2aiUBco20DN2cMIvARpp64KMtZnVTgp294gmOjl63Wtz6W6stnop0rKpJ%2BYzXzbVIdBEVaCPkCkj17XuYgmWPqoBSOj7JM0JTGsEre5eEhup7ZCodWaTjfmDBpQtiZqXSJxCVVQZlOx0PSNT06QhJUu3%2Fs9wb2qfv&X-Amz-Signature=51d36521c00ec7e9ec652a68a3d599e3250da612957138088bf4bdc2f7e06118&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKXTJT3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNg6yTTxzfjX1ZTN5u0rphM0lqXAi5GL8q1Ayg54e1VAIhAInHevPsD31LrPd2n0N3LNE%2B%2FIrzH7r1iUTQUWhpswJQKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE6sPT8otQ%2Fz%2BenFMq3AOAIRmvzYJ4F25SI0yTCW1U4hrMUooRavZQooB1kZq6Db1o9IiJJcTaEuZhwwbaCSGXnq4lSiYlORvEc9Iqlha0Ys6rXMWZES6yGveDks73RfEG3mV4JEFKKFlJBnZjrx0%2BOupx6Y5tEY21oxDn4xHkoptATTUn%2BU6CTRtENJZYK9L1QuyyXx%2Fftkoi2zPdTRsHIYSgkchhEZ6UgfdU5D688shu4U%2FxEXR9SiHiSzXQ2F4ptY5lftfbo4fcfiPVPpC6xExsG5BQ8kK%2Feb8KQApeHoYo1%2FO%2F41mLve5jmRauPBuYa9qGhj%2FwnDrou9JjZ0IpotJVFea1oDZv4UwbAehsVeFVog10LBkTjso0bQJGSQ4zygNSrUWAQUV%2FyH9%2FgM6PZwNdR3WSdXoUAqPQOlj29mX3DDpi2RJgf5GSactf0orIzzmXQfWq4sASOzfUdlV48fph6UCGg6H4nFwn8UsKiyTQR94PDCqmBh6LdXyTQusMXf1eeEJP%2FxUFjIRqN86xMZ4UDaSZM%2Bqq0tlxjvQJh%2F%2FAN3d8%2BgfO%2B3c3olNzB6wo8Tk6fiYO%2FgqI5uFJ8Jw1KAj91BVqRvpPdiZm4slT5rk8G5C%2BsLJhuF2CxcfQ0pW6MyN9j%2FbkvXHLRzCFoc7ABjqkAXIdyaYnJK5JUEg3%2FCXFi6xDNSlrcVfKrH3R5CGpe0LmQz3ByD2qQFxOqcg2aiUBco20DN2cMIvARpp64KMtZnVTgp294gmOjl63Wtz6W6stnop0rKpJ%2BYzXzbVIdBEVaCPkCkj17XuYgmWPqoBSOj7JM0JTGsEre5eEhup7ZCodWaTjfmDBpQtiZqXSJxCVVQZlOx0PSNT06QhJUu3%2Fs9wb2qfv&X-Amz-Signature=c06e2a1241613bc5d135ee46883155b5e656f05404e4ab96bdc1451673f517b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
