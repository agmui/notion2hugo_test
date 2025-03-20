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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBBNQVA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICMhRx3KZxumELr%2BwWKApcKSSugi8r3eAXAZIjN4hktgAiBT4wHHR2ISr2Ze%2BTIDa5akaHAk3w0IpCloE1FHFKI36SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaijXAKPJ2Y14L9e2KtwDqcSgyD0BBSjNULMFaWOMVgjkT0w16lEtC4bvnqB1FOx4n9xzsLQuv272OOU813rz6mxhlzip9Ux64qeKW7VaJoCh62xckkPyxoK3kZxr%2BPBnGt6dVfD%2FEAECuMOqRpAqwtZaMhFX9D8hRcRvxnJD%2BcWtyCh30jeSJCCotw7nwiQm10skrdb6jKlu2DdbIm5I2siqEjiPz3jXQRRkULcO8mz7TjRZxhC3hsck4zzRP7JxnXK%2BeVaCAfpkxFXmUnziPkppHcCZcmwdU4t2X8qMj4CCA3l9F53bilYT8Fw%2Fj2EcYog9wlIr%2BwvVI0UCUdY7Pwl4AvsTJXfEvGYJc2a5b%2BVQIj6wYJ1E7g7IoEr1uAfHaITY6wc5%2BYPUFpxW7JMTL1f4rwp3219aMXVGjlHF9lZ8Mh6kspA%2B4KUyOBohSQfvsCdTGWO%2FTWateAr77fh3PbA%2FqxAjJKN%2FYvTVDKGBXbBnHpCNfOL2ozGW1BOE408TB%2BWtiyRPI4LCSsBGIaxSsYAtYbXaCkfkttZEoGGOWFawKM2GvTad92vGmHZHZi7PW0qJbudP8LloXO5PUsHUmK1YAceG3%2BEILIul6Gt6oN%2Bs23Yv69QHvLowldgbqnyncuTdOgEZCbl1ok8wysfuvgY6pgGgaS8xh7EnFq%2BCdnk%2Fisdj72hjuoZ%2Fo5Filp51Od9V7Xir1CrROyuUOinEsO96GNaQkxDEJrWle2oPeNR84woTYQEq82Eh20S2vllVXzyoXonlTffql%2BzodyfW0LIQIBRRfvIm83eR%2B3POPo2qXMSYM6LColPX3mZFAMmy7erjJKu1e4Prrlduwdx4879le7y0S19W42Xl3WmDWAd08XCuvGiQVEvE&X-Amz-Signature=fb2ec1f1f2a2e5bf4297123b670e4f4708df3f0f573b9ef587160f56e45ea53d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBBNQVA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICMhRx3KZxumELr%2BwWKApcKSSugi8r3eAXAZIjN4hktgAiBT4wHHR2ISr2Ze%2BTIDa5akaHAk3w0IpCloE1FHFKI36SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaijXAKPJ2Y14L9e2KtwDqcSgyD0BBSjNULMFaWOMVgjkT0w16lEtC4bvnqB1FOx4n9xzsLQuv272OOU813rz6mxhlzip9Ux64qeKW7VaJoCh62xckkPyxoK3kZxr%2BPBnGt6dVfD%2FEAECuMOqRpAqwtZaMhFX9D8hRcRvxnJD%2BcWtyCh30jeSJCCotw7nwiQm10skrdb6jKlu2DdbIm5I2siqEjiPz3jXQRRkULcO8mz7TjRZxhC3hsck4zzRP7JxnXK%2BeVaCAfpkxFXmUnziPkppHcCZcmwdU4t2X8qMj4CCA3l9F53bilYT8Fw%2Fj2EcYog9wlIr%2BwvVI0UCUdY7Pwl4AvsTJXfEvGYJc2a5b%2BVQIj6wYJ1E7g7IoEr1uAfHaITY6wc5%2BYPUFpxW7JMTL1f4rwp3219aMXVGjlHF9lZ8Mh6kspA%2B4KUyOBohSQfvsCdTGWO%2FTWateAr77fh3PbA%2FqxAjJKN%2FYvTVDKGBXbBnHpCNfOL2ozGW1BOE408TB%2BWtiyRPI4LCSsBGIaxSsYAtYbXaCkfkttZEoGGOWFawKM2GvTad92vGmHZHZi7PW0qJbudP8LloXO5PUsHUmK1YAceG3%2BEILIul6Gt6oN%2Bs23Yv69QHvLowldgbqnyncuTdOgEZCbl1ok8wysfuvgY6pgGgaS8xh7EnFq%2BCdnk%2Fisdj72hjuoZ%2Fo5Filp51Od9V7Xir1CrROyuUOinEsO96GNaQkxDEJrWle2oPeNR84woTYQEq82Eh20S2vllVXzyoXonlTffql%2BzodyfW0LIQIBRRfvIm83eR%2B3POPo2qXMSYM6LColPX3mZFAMmy7erjJKu1e4Prrlduwdx4879le7y0S19W42Xl3WmDWAd08XCuvGiQVEvE&X-Amz-Signature=4d3b303bf4e41bd794117e1bface855110a624a5d9139c3e9b42f5af24e957c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
