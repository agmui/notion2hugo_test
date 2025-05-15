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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAIZE36%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAmXv3mCHTK9AGFTspqDUkPLwnpfQAjRGdzIp%2FrxJv7nAiAj0Yt7ZsMOeuxRUiYeqwylBOj%2B4xGgKiNpveIcDJqbkCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMcrnqeyODjYNzmG8PKtwDGPUVs8JZuZgjFd0ScH%2BTZjjyE7sJLerVPwvV86LISZ3TVOz%2BF9LcHKTGU3fWhXVU59g%2BRKlwqAnrnD8iWocCZ9T7iT8hUPVL92sfBQQXefVdxAqi5DXMRahiXFfzN62iwoDCc%2FIBLSywRqvhfsdrx33DtdMDwHvxSUmYCNSRGdzus8qG%2B3ei%2F%2BEaD6BGegI57VpxytMQhtfA6U9V9ZqWWhqlBgz1CtDiOzWugwraQLORCpnyisHOC08ezV1wbPqgwI7YVyjrtvIP6cE0Cy%2Fwle%2FrxtsMMtF2%2BTsjNf1pvmGIsnMkEu%2BJ9gn7tTKiFyzuAVsTcKq9iVSynRR7glGNcKq9CS6eeu6K%2B0dpUftTI4QMCqlKLrVoWGOYqfwiOQnlYrrhAcma%2BAlxl6C2ZVi2jF6NbYp33fFfpBf40iFwsYZbuHBsfg9TLpoaVP5iKqYRUD9k9dyXA8vRZY%2FiHWxTqNWdk%2B9Y7sfHKz8nPA%2FUx8rWzSupzkWs7dz3QKT%2BFEQkTWHewNQfdDQP67u58dvAT8UldCKzFLbld2LO5awBZGfs%2F2THR9l8YUCMcj%2FSsUBxdJwvwEvaaVdIANS94WciZXCVh9mBsrDy0shs4HydWLzAy%2BhMZydqCy0tX5ww6LaVwQY6pgH5wo8VVwRHxxza8uNTau0Ds67MW%2FD5jt7l%2FaHhPBUT7mx8ZU9JtGznJr94G2mU9ZGBNj2ZgvwMs93ZP%2BMc04gxP7PW21k9o3tT2h5tAWgF%2B3%2BSmpHx2na06RkwqNmExg9XHxnmgg4wYkjf4CH7SvZUeNiECuPjVUfxktfXxixsPlV4SzpcHZ83i3JuQYAB81cJAqRv83PJ3iTDaMAabsbp%2BdL%2BLqHS&X-Amz-Signature=6bb754ce29595e75ef16a9c6f41d732643d2cac92645f0087dfb81273c877ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAIZE36%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAmXv3mCHTK9AGFTspqDUkPLwnpfQAjRGdzIp%2FrxJv7nAiAj0Yt7ZsMOeuxRUiYeqwylBOj%2B4xGgKiNpveIcDJqbkCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMcrnqeyODjYNzmG8PKtwDGPUVs8JZuZgjFd0ScH%2BTZjjyE7sJLerVPwvV86LISZ3TVOz%2BF9LcHKTGU3fWhXVU59g%2BRKlwqAnrnD8iWocCZ9T7iT8hUPVL92sfBQQXefVdxAqi5DXMRahiXFfzN62iwoDCc%2FIBLSywRqvhfsdrx33DtdMDwHvxSUmYCNSRGdzus8qG%2B3ei%2F%2BEaD6BGegI57VpxytMQhtfA6U9V9ZqWWhqlBgz1CtDiOzWugwraQLORCpnyisHOC08ezV1wbPqgwI7YVyjrtvIP6cE0Cy%2Fwle%2FrxtsMMtF2%2BTsjNf1pvmGIsnMkEu%2BJ9gn7tTKiFyzuAVsTcKq9iVSynRR7glGNcKq9CS6eeu6K%2B0dpUftTI4QMCqlKLrVoWGOYqfwiOQnlYrrhAcma%2BAlxl6C2ZVi2jF6NbYp33fFfpBf40iFwsYZbuHBsfg9TLpoaVP5iKqYRUD9k9dyXA8vRZY%2FiHWxTqNWdk%2B9Y7sfHKz8nPA%2FUx8rWzSupzkWs7dz3QKT%2BFEQkTWHewNQfdDQP67u58dvAT8UldCKzFLbld2LO5awBZGfs%2F2THR9l8YUCMcj%2FSsUBxdJwvwEvaaVdIANS94WciZXCVh9mBsrDy0shs4HydWLzAy%2BhMZydqCy0tX5ww6LaVwQY6pgH5wo8VVwRHxxza8uNTau0Ds67MW%2FD5jt7l%2FaHhPBUT7mx8ZU9JtGznJr94G2mU9ZGBNj2ZgvwMs93ZP%2BMc04gxP7PW21k9o3tT2h5tAWgF%2B3%2BSmpHx2na06RkwqNmExg9XHxnmgg4wYkjf4CH7SvZUeNiECuPjVUfxktfXxixsPlV4SzpcHZ83i3JuQYAB81cJAqRv83PJ3iTDaMAabsbp%2BdL%2BLqHS&X-Amz-Signature=a5bef637a609ce6b1356d43518a47b17fb2ef0c4b3753ddc9ab56aac28217f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
