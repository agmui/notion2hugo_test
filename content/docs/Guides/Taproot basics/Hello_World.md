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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWXCCZ3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3PHMuWBaG66eeZq5TMW3aXpXUOw2uoL4MWwo3%2FH%2FCwIhANp7Rc8Z4C9zU3cO7Pm2aE2thqkLRMnkHTxn6tW3vVMdKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrQBJwXq%2BAXIbV0tcq3ANkrzOGQAFUVsPGZ5jZEZwA1GQDXkJBhzEdqiNvvDkwlRXk2JSoz9xTnzoEH8C0oj1%2FOr%2Fn8GcZ%2FpHCSNxEPNL8Cyi5xajjevoiymbCqTKmf0z1sHgHCS7QzHX3L24%2BDa3CoGt8WNPkOh%2FtFdMfKvSY%2FUwESYInpylEnzwMoJjaSrz3z5McI8d9HCzIpJTpmNnRs6qIJPt55UY8FnSsov4BRjCsNrCl3szGYqxatlQGM3Eqi45FxDavNurloP0prDULH57I0IDk2VWo306bv6Se264mQkBKkqmThM6BGVxWbzoG7BnLb%2BkhsbjlZv%2FMQKPP6Unm%2F3%2FJiixh3gOT3RLsuIMG9lufCnl1DhApPmuuSQWyg5ADVrJifyp%2Bdm6FV9i%2Beqqzmrx3Hj1HeWNQ8513%2BH0ctXnEDqR77lKY5WWZrbMtDDwoi2O0jkA4SYEKvKL9HaRy5WliGR4mIYRtsVnRsAOBC0EOCpiWKgxYoUtPX7Igz14GuOI1n3SUjHACLdzByBVks0VQzRDZ4QfAAOtrCZomxzhxUcrqRIbggMlxh0PYyKBMBupshPu5MCHZfN2nmNkm1Q2iXC9pe2vHW9M8on0Nic0CHUZGZfVLirdY2qZXUicA9VPT%2FueO5zCJvMu%2BBjqkAemMpV%2FotSWHzaR%2BQhzwl%2BPgiuVzGDI0ELCsMFy8aqzq0pHcArKYRaExF9Ab6I%2B3GRHSTTGDkwo13Ex1QE0YMiuaDX7AX1D%2BwyJ3t5vdiiKa810Y4eNAkB%2BbGRrDsjeoJUIYrJ31gSymCbLPGbqMzzvI%2BihEoZdKjXplnrls2RUpoYSj9uf7VS6yC86%2FwmbIDqoNutl%2BAyShkOL032qCXyOR0vv9&X-Amz-Signature=286d73f48fac2a3dffc741fdd3b15751d5c2fb23e3c7ab1dbe136703ac656b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWXCCZ3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3PHMuWBaG66eeZq5TMW3aXpXUOw2uoL4MWwo3%2FH%2FCwIhANp7Rc8Z4C9zU3cO7Pm2aE2thqkLRMnkHTxn6tW3vVMdKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrQBJwXq%2BAXIbV0tcq3ANkrzOGQAFUVsPGZ5jZEZwA1GQDXkJBhzEdqiNvvDkwlRXk2JSoz9xTnzoEH8C0oj1%2FOr%2Fn8GcZ%2FpHCSNxEPNL8Cyi5xajjevoiymbCqTKmf0z1sHgHCS7QzHX3L24%2BDa3CoGt8WNPkOh%2FtFdMfKvSY%2FUwESYInpylEnzwMoJjaSrz3z5McI8d9HCzIpJTpmNnRs6qIJPt55UY8FnSsov4BRjCsNrCl3szGYqxatlQGM3Eqi45FxDavNurloP0prDULH57I0IDk2VWo306bv6Se264mQkBKkqmThM6BGVxWbzoG7BnLb%2BkhsbjlZv%2FMQKPP6Unm%2F3%2FJiixh3gOT3RLsuIMG9lufCnl1DhApPmuuSQWyg5ADVrJifyp%2Bdm6FV9i%2Beqqzmrx3Hj1HeWNQ8513%2BH0ctXnEDqR77lKY5WWZrbMtDDwoi2O0jkA4SYEKvKL9HaRy5WliGR4mIYRtsVnRsAOBC0EOCpiWKgxYoUtPX7Igz14GuOI1n3SUjHACLdzByBVks0VQzRDZ4QfAAOtrCZomxzhxUcrqRIbggMlxh0PYyKBMBupshPu5MCHZfN2nmNkm1Q2iXC9pe2vHW9M8on0Nic0CHUZGZfVLirdY2qZXUicA9VPT%2FueO5zCJvMu%2BBjqkAemMpV%2FotSWHzaR%2BQhzwl%2BPgiuVzGDI0ELCsMFy8aqzq0pHcArKYRaExF9Ab6I%2B3GRHSTTGDkwo13Ex1QE0YMiuaDX7AX1D%2BwyJ3t5vdiiKa810Y4eNAkB%2BbGRrDsjeoJUIYrJ31gSymCbLPGbqMzzvI%2BihEoZdKjXplnrls2RUpoYSj9uf7VS6yC86%2FwmbIDqoNutl%2BAyShkOL032qCXyOR0vv9&X-Amz-Signature=55cb6b293f7930bf2918c164933e353fffa91245fc1e579a699266e11252ee93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
