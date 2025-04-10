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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SFSZBD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCVWo2TlvrtcUpgsvKWKvQYlRACAfXsPp32sf5dC0rcLQIhAPSRAQD%2BSwJhpRCBdhd6XDxOL%2FMVULN%2Fmxwh7XlNg5B2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGQ6aMm6V57BbRRtAq3APBOQZMCQbKkxuIUuiYIstQr3JU3H0wxDGMogHKsE%2BKOj4R9sgARW5yB2gOgitcQOQEmTRXW%2B50LAV8QwiV3t3z1LmfarnnjlDutj5Ev5mhApud4EwlIwCEJ8SR2PgOpWp%2BQ7Fr9UIFF0zkNxBaHi3Pq5NdXU%2B7gDKtXfVbegeBRgZnXqbz1BWK%2Fv6gsi%2BJzGmTi8q5xybTVAgOr9sBl5ytsILpY9LhM6O8Wj6%2BUgGrceZFx48t31OHOtj7L9fRhB4eqw8fW0HOm%2FsPgs%2B%2FhNLuEL973vokgEgRDHTTcG0nF9bGRgjRoLj2wtpaB02vKw1%2BnnCCq5jpWhh5woGXDvz1erJM%2FP7FB9x2Pa3THd%2FaeXdtkqQgGvcQAa8ZTLz5%2BmkFVHEZDUeE3tiXzUP6CWRQ8NGSN3ZghYMTGXZmvD8hj8uHh84jgs%2F2n5aEEhMxFtOtckzw6UYTYUn4QVLE8MSU%2BJnQ3OFjCNBonyaEtKAhXAMoF%2FA3%2FfLfkLuahGgrkGzhhBDN7A6rlFYRtqPy2Ysbm%2Fwa89eY2EokPxRcjKUZFKb%2FjyRFjQqs%2FlF6thYKCM93dxNrb3TIYnRRXN5o%2FgQmUbTPA3vQXElXhw6IvOhEZIaNCk%2BKEly6BGv0KzDLpN6%2FBjqkATCOXy1kOfbzVttlIaxhjS%2BUhOqwCy353ZqsUjoyrpZMkqNq9VWyTFQwOXRXPUpNEy%2FqNha7zX%2BOGi8%2BSB0rhM53iP2o1uE%2F%2Bkd%2BeG8rlgPdsZsFXVpACVqHKJal%2BOJ6Nqoq464nRw4x5CDNPt7nzg5yOWmPIZwZKyb0CTFNSrxZJdKMPLFoJphhPDpmkYHJAxvWxS8%2FZ5lo%2FUFLP6p%2F3S58DeB8&X-Amz-Signature=d3a7d0495ef91c8df7fe9bc9dca8b79036507fc54fd13f99ee4702a4112c00d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SFSZBD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCVWo2TlvrtcUpgsvKWKvQYlRACAfXsPp32sf5dC0rcLQIhAPSRAQD%2BSwJhpRCBdhd6XDxOL%2FMVULN%2Fmxwh7XlNg5B2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGQ6aMm6V57BbRRtAq3APBOQZMCQbKkxuIUuiYIstQr3JU3H0wxDGMogHKsE%2BKOj4R9sgARW5yB2gOgitcQOQEmTRXW%2B50LAV8QwiV3t3z1LmfarnnjlDutj5Ev5mhApud4EwlIwCEJ8SR2PgOpWp%2BQ7Fr9UIFF0zkNxBaHi3Pq5NdXU%2B7gDKtXfVbegeBRgZnXqbz1BWK%2Fv6gsi%2BJzGmTi8q5xybTVAgOr9sBl5ytsILpY9LhM6O8Wj6%2BUgGrceZFx48t31OHOtj7L9fRhB4eqw8fW0HOm%2FsPgs%2B%2FhNLuEL973vokgEgRDHTTcG0nF9bGRgjRoLj2wtpaB02vKw1%2BnnCCq5jpWhh5woGXDvz1erJM%2FP7FB9x2Pa3THd%2FaeXdtkqQgGvcQAa8ZTLz5%2BmkFVHEZDUeE3tiXzUP6CWRQ8NGSN3ZghYMTGXZmvD8hj8uHh84jgs%2F2n5aEEhMxFtOtckzw6UYTYUn4QVLE8MSU%2BJnQ3OFjCNBonyaEtKAhXAMoF%2FA3%2FfLfkLuahGgrkGzhhBDN7A6rlFYRtqPy2Ysbm%2Fwa89eY2EokPxRcjKUZFKb%2FjyRFjQqs%2FlF6thYKCM93dxNrb3TIYnRRXN5o%2FgQmUbTPA3vQXElXhw6IvOhEZIaNCk%2BKEly6BGv0KzDLpN6%2FBjqkATCOXy1kOfbzVttlIaxhjS%2BUhOqwCy353ZqsUjoyrpZMkqNq9VWyTFQwOXRXPUpNEy%2FqNha7zX%2BOGi8%2BSB0rhM53iP2o1uE%2F%2Bkd%2BeG8rlgPdsZsFXVpACVqHKJal%2BOJ6Nqoq464nRw4x5CDNPt7nzg5yOWmPIZwZKyb0CTFNSrxZJdKMPLFoJphhPDpmkYHJAxvWxS8%2FZ5lo%2FUFLP6p%2F3S58DeB8&X-Amz-Signature=08c16f3504c2701b2ce00c5153d37e1cc9194715f47746b57f4ab1d14ca79650&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
