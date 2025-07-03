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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OI3XFL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBM3QdE2O2b2did5KrjAjUhjqvl7NFE0a%2FMTTjbLUvUlAiEA%2Bucu9T2H3wEOyh2D%2BOiEDOD%2B79hc7Wr5%2Bh1RMK1XB1kq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDA%2BQXC0nC3ypst9vlCrcAzgmYrjfUoJGPUKvXY64yIORS3EjAMmujgAvRPLumw0%2FdkPlN4QIz0bwyKLkfXpkYaAzpcpFgHUfSQgFOK6hlKq1p%2B27p3Mg%2FEZ1Fe1THTJ8q0eIWckW5dznCglmSINlA7bA62nV17DKgVriBovsjmMYjxdZUZtC3cybCs33Z6mVPBGeTJtbn5xw7W0TPdDEMgNwkCZmlxLDircFo35a6o4xMFM41I%2F2Ma5N1qMXaOVHryeghDYHVamGVvROP9Jy50fUDW%2Bung9VsXZVxACOepqkIf0oiv1uCDuuVfG6MY9j8RhrKVmd%2FkSiFZfoeRnIyn2ioLrG76V6%2BO6xH59d0BSdKFsh9gjhnHbWjb6JQY2WVpATk2JvL3y3eq%2BvdPinVNOzvpjzSVlqmF2anRJMujx2nQ7Y9ni6IAWj0NLj5CWWQitXE1UeHPVodFG3RAMn%2BAhcY%2FAL8magvFrmIXTEOoVB%2Fq6ohdOO6BmIF7UIdlU70k4ElnGY7fE%2BbfC8m8cqjnRoOxt%2Bl%2BETdmStbTa1e3cRzG2iGAs4IIZo%2BvNy33k3FBiy1AMdpQwxhJXKwpx8Yy4WdP8JjJJyETS9EEOkW1bTi375Gx8a1c1ikGyH9yh%2FMlTwHJDUj9nn7dxpMMfemMMGOqUBH7azSEojLEH0d9hblJF4HyiN61Y2A9MKoO48g4%2B2CCik4JjAfVhDhXCwBYlk7Qxioc4y0wcBpoNYs769FBl%2FYqbPN%2FOWGCwrWsklrC2jfRS4Ir2TT2JAXJmSWnnv%2BfShhgA6%2BtvkvzKOOdn%2FwmjGiJD%2BRvx1SBhPcLVpF%2Bzt%2BTF8%2FrNFzg01w%2B9bpMd6HOlsLkS1rs%2BDP2rUEM%2F6S5JonWuwp1OG&X-Amz-Signature=0fbb7f444658e156e95b568897a934f92cbb45566845f0be1f10aa94de7c3498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OI3XFL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBM3QdE2O2b2did5KrjAjUhjqvl7NFE0a%2FMTTjbLUvUlAiEA%2Bucu9T2H3wEOyh2D%2BOiEDOD%2B79hc7Wr5%2Bh1RMK1XB1kq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDA%2BQXC0nC3ypst9vlCrcAzgmYrjfUoJGPUKvXY64yIORS3EjAMmujgAvRPLumw0%2FdkPlN4QIz0bwyKLkfXpkYaAzpcpFgHUfSQgFOK6hlKq1p%2B27p3Mg%2FEZ1Fe1THTJ8q0eIWckW5dznCglmSINlA7bA62nV17DKgVriBovsjmMYjxdZUZtC3cybCs33Z6mVPBGeTJtbn5xw7W0TPdDEMgNwkCZmlxLDircFo35a6o4xMFM41I%2F2Ma5N1qMXaOVHryeghDYHVamGVvROP9Jy50fUDW%2Bung9VsXZVxACOepqkIf0oiv1uCDuuVfG6MY9j8RhrKVmd%2FkSiFZfoeRnIyn2ioLrG76V6%2BO6xH59d0BSdKFsh9gjhnHbWjb6JQY2WVpATk2JvL3y3eq%2BvdPinVNOzvpjzSVlqmF2anRJMujx2nQ7Y9ni6IAWj0NLj5CWWQitXE1UeHPVodFG3RAMn%2BAhcY%2FAL8magvFrmIXTEOoVB%2Fq6ohdOO6BmIF7UIdlU70k4ElnGY7fE%2BbfC8m8cqjnRoOxt%2Bl%2BETdmStbTa1e3cRzG2iGAs4IIZo%2BvNy33k3FBiy1AMdpQwxhJXKwpx8Yy4WdP8JjJJyETS9EEOkW1bTi375Gx8a1c1ikGyH9yh%2FMlTwHJDUj9nn7dxpMMfemMMGOqUBH7azSEojLEH0d9hblJF4HyiN61Y2A9MKoO48g4%2B2CCik4JjAfVhDhXCwBYlk7Qxioc4y0wcBpoNYs769FBl%2FYqbPN%2FOWGCwrWsklrC2jfRS4Ir2TT2JAXJmSWnnv%2BfShhgA6%2BtvkvzKOOdn%2FwmjGiJD%2BRvx1SBhPcLVpF%2Bzt%2BTF8%2FrNFzg01w%2B9bpMd6HOlsLkS1rs%2BDP2rUEM%2F6S5JonWuwp1OG&X-Amz-Signature=efb263b38bf0384d2d89d035818d2c385c1cb39307dc2e09cdbf7d7c178e93d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
