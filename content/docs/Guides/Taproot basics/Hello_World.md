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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGG52SA3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD1GimPFJ5utGgqCb1TD%2F551Kjt5jVou6Gw0CL3aZtfXAIhALIJs9foUTNKNa8lz6wXkiRusCyOOp3zX%2B2c2OVeiKKBKv8DCHkQABoMNjM3NDIzMTgzODA1IgwXaC7g06cA19DFn%2FMq3AMsrSKFUvwvVbCghEXyk24Mfi0CiJ9Lu4xH56oU0KQkRgJ1rNxJUQCmZUxZEbYmpcLYL4qtM%2BPSrDnYitdESGt1krQjPKi4xFjKi%2FpkbmDjlYx6TtVpwQ7RZProuD8ln%2FMp84faLnSieYEWKD0%2FqVqMuXbUFHVqN39tmK0bQSrWTVbZB5%2FRyc5gzjPk4gffkVr6ZqgK6E43NPyyKz1bXw0b0iHe1JvTzXgyViSGnQ3lAiLcC1GqWojheZt4C2VhJ00Jhk5PPP6z%2BF4IJH35NxM3jryL6sq6XkgWaFWo8EY2fvSeUNaOlKxk%2Fq7te5OxTfQTSQENOFPLoxRDU3cSHgNKWh1hg8edv%2Bcyj8ZPVQNaIVuKVIfnw01F40zAVCpXLfV9nbnVqCsJuSGqyqR66W4h94LjONFF4mcRQQEAAYGTSUwQboz92n%2BIxUuS2drDy7SIHHRvPuI0du%2FkNzYhf%2B82%2BWntvsaQerEOdP5WG4ERt%2FQjNAlxk12f43hstTIaUypm2usMD3mHA32jxT5uL%2B%2BOMjgNMHjhhulEKwDnXsRwwr9nYQ8G2IH3%2FMp9tfrU6N0D20LwKNTrFsr6sDio8xAKtW5TTRy2ZDY8ISO7FXn9fYbOtEmytlA9TqbLgTDAv%2BTDBjqkAaqTCuXj4vb6%2BsAppKLZmiwOmxdeufDEqwi01btb2Uo43BCaCpMXvKGsYOeyMsnMWWTuh6Ys%2Ftd9QijnJ08v47Jf2DzIsVPUcb6MpdF87pFPbkW0WL6sQ7zNDxQaMedFKM1WnK3w4vbnXVrj6YyOdaV21936Rmn2ugNBXJY3fPCq2kcYGlYOnwuoYLGw8mVevGPNJB9QkpJofRGAKQePr2SVT8De&X-Amz-Signature=eecf0ab5e2f8a0c4e2183e973b1ec9dca2b67cb30d6efc6e47a51ef69dba8d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGG52SA3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD1GimPFJ5utGgqCb1TD%2F551Kjt5jVou6Gw0CL3aZtfXAIhALIJs9foUTNKNa8lz6wXkiRusCyOOp3zX%2B2c2OVeiKKBKv8DCHkQABoMNjM3NDIzMTgzODA1IgwXaC7g06cA19DFn%2FMq3AMsrSKFUvwvVbCghEXyk24Mfi0CiJ9Lu4xH56oU0KQkRgJ1rNxJUQCmZUxZEbYmpcLYL4qtM%2BPSrDnYitdESGt1krQjPKi4xFjKi%2FpkbmDjlYx6TtVpwQ7RZProuD8ln%2FMp84faLnSieYEWKD0%2FqVqMuXbUFHVqN39tmK0bQSrWTVbZB5%2FRyc5gzjPk4gffkVr6ZqgK6E43NPyyKz1bXw0b0iHe1JvTzXgyViSGnQ3lAiLcC1GqWojheZt4C2VhJ00Jhk5PPP6z%2BF4IJH35NxM3jryL6sq6XkgWaFWo8EY2fvSeUNaOlKxk%2Fq7te5OxTfQTSQENOFPLoxRDU3cSHgNKWh1hg8edv%2Bcyj8ZPVQNaIVuKVIfnw01F40zAVCpXLfV9nbnVqCsJuSGqyqR66W4h94LjONFF4mcRQQEAAYGTSUwQboz92n%2BIxUuS2drDy7SIHHRvPuI0du%2FkNzYhf%2B82%2BWntvsaQerEOdP5WG4ERt%2FQjNAlxk12f43hstTIaUypm2usMD3mHA32jxT5uL%2B%2BOMjgNMHjhhulEKwDnXsRwwr9nYQ8G2IH3%2FMp9tfrU6N0D20LwKNTrFsr6sDio8xAKtW5TTRy2ZDY8ISO7FXn9fYbOtEmytlA9TqbLgTDAv%2BTDBjqkAaqTCuXj4vb6%2BsAppKLZmiwOmxdeufDEqwi01btb2Uo43BCaCpMXvKGsYOeyMsnMWWTuh6Ys%2Ftd9QijnJ08v47Jf2DzIsVPUcb6MpdF87pFPbkW0WL6sQ7zNDxQaMedFKM1WnK3w4vbnXVrj6YyOdaV21936Rmn2ugNBXJY3fPCq2kcYGlYOnwuoYLGw8mVevGPNJB9QkpJofRGAKQePr2SVT8De&X-Amz-Signature=48ef05b83a63fa2c3e7a19e7299fb300bb9d1de2f736755ba1a94613db7016cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
