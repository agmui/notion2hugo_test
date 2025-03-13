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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLQX5CR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlIsai82S6nvodqxGspHSFKDdcYFtT%2FgYA%2F7XgfJch5AiBgOgKQCbGvT1mytUqmzXZRM7fxpBPFVt%2Bhgjx0RoXz%2FyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdaRQoy0oQIKj%2BjdKtwDdxeB74%2BdWdEySplwcz5HGwlAFIW5X%2BN91Nnqwa7jZCdaK%2FNgi2CQ7m7SAgiM3y9UkdJfiIM8ndGfVRv6HPy2uzDTu4tA8zNJzRwt%2FVf4dtNUsDDBLZt4pmb7FyLs558ojv7ZwISEZnh9fBKr%2Fv8LndfUuwZ73zemNdx87GYnwqd%2FLSug9MtMP9efezxuSRAqmgk2yYCsiIVxrdU%2FtJpR3TxH8m0eoOKSWMJroieE0GU63cUu9ypsK4fHhIgjxYyskhto9Vu5MeAeSjm1R70Xh%2FnscBUSksIG7SSvFIzJdipxGsJu99llxyGXcYbOAOIXx36pQ72SESCbYpflkvF6tAEUAbMQ0DExKWlqLqY9xure0j1sZTiMG7jJwLy97Ywsf%2FcmbM6p5Ldmosc5ABpJ6hDzqTPuMhf5FlBniagIUhCxk%2Bu51kG3lKS4PhAyNOybbgqsgro5ZuGbja1%2BB1D%2F%2Bgk1SNf2CqTIYCTmnF5m3qwAuoT47OC%2FmfUrTLLb69hLCSqnBGdsD04z%2BHq3JmPKyZhqqiBkH%2BAJPa51ZEerUbutTkrDlT%2B0ots50xvloZ42HH1EjEFuq7xl7RRhACOq6shhnM5%2FBGfJ9E7kDxFFYCr415FjsHn7CyGdKLQw0J3JvgY6pgHH9Zw0embQV9iQBGJly6Cb0LByt0ZD%2B1i47SknpIv1WYlamM9SNZRGbSuQhK%2BuLsqb3i0D9YgicwMSEo3GGtL3iT9EXCT8tsRr0AtnaNJ29nu%2Bsz6glAC5k74xt9Ih15nmF1D9XKALSiDUUHhJSEQJYv7euKQovG1tLZLLHmvSOXnVgGe%2BsPcpj9vZWu6vBD18OHwIA7rtuizxsVkGEPJ0uO%2BYfEi6&X-Amz-Signature=149de8dd275bc73916291873cebd0ad600ec4dd92a7bb7034d0229d1dacb855f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLQX5CR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlIsai82S6nvodqxGspHSFKDdcYFtT%2FgYA%2F7XgfJch5AiBgOgKQCbGvT1mytUqmzXZRM7fxpBPFVt%2Bhgjx0RoXz%2FyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdaRQoy0oQIKj%2BjdKtwDdxeB74%2BdWdEySplwcz5HGwlAFIW5X%2BN91Nnqwa7jZCdaK%2FNgi2CQ7m7SAgiM3y9UkdJfiIM8ndGfVRv6HPy2uzDTu4tA8zNJzRwt%2FVf4dtNUsDDBLZt4pmb7FyLs558ojv7ZwISEZnh9fBKr%2Fv8LndfUuwZ73zemNdx87GYnwqd%2FLSug9MtMP9efezxuSRAqmgk2yYCsiIVxrdU%2FtJpR3TxH8m0eoOKSWMJroieE0GU63cUu9ypsK4fHhIgjxYyskhto9Vu5MeAeSjm1R70Xh%2FnscBUSksIG7SSvFIzJdipxGsJu99llxyGXcYbOAOIXx36pQ72SESCbYpflkvF6tAEUAbMQ0DExKWlqLqY9xure0j1sZTiMG7jJwLy97Ywsf%2FcmbM6p5Ldmosc5ABpJ6hDzqTPuMhf5FlBniagIUhCxk%2Bu51kG3lKS4PhAyNOybbgqsgro5ZuGbja1%2BB1D%2F%2Bgk1SNf2CqTIYCTmnF5m3qwAuoT47OC%2FmfUrTLLb69hLCSqnBGdsD04z%2BHq3JmPKyZhqqiBkH%2BAJPa51ZEerUbutTkrDlT%2B0ots50xvloZ42HH1EjEFuq7xl7RRhACOq6shhnM5%2FBGfJ9E7kDxFFYCr415FjsHn7CyGdKLQw0J3JvgY6pgHH9Zw0embQV9iQBGJly6Cb0LByt0ZD%2B1i47SknpIv1WYlamM9SNZRGbSuQhK%2BuLsqb3i0D9YgicwMSEo3GGtL3iT9EXCT8tsRr0AtnaNJ29nu%2Bsz6glAC5k74xt9Ih15nmF1D9XKALSiDUUHhJSEQJYv7euKQovG1tLZLLHmvSOXnVgGe%2BsPcpj9vZWu6vBD18OHwIA7rtuizxsVkGEPJ0uO%2BYfEi6&X-Amz-Signature=98bddcc45af9eaf24c3ba61c80697240982f360b65a3def65e0104c42263b9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
