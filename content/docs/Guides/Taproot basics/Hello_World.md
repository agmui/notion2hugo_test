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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWNQUH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbJWfKpUhxwfPy5Qc33%2FjmWTAuDU260wPrL%2FbukwVCUAiBWOJqjniLNmc%2FbgHR3mQS3q4V1Lpnh2B1N5AHux%2BMPNSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMWimzODk%2B%2F0mfCzY1KtwDnnu5i6eYLLOuhdFJ7O6nNQg4ErUihO%2B4Acq0BTkj65mv%2Fz83iEDzulEAlhnWwhyIHw5ow%2Bc4Kk8IqAkziM6TlBCNppeqboG0E24Y7dOJwnQEnDaTgeBpE%2Bxl1f4KDwy7L0vKxnE%2Bj%2BtUm8s%2F1PzAWmzF20BxX66DDFZvAAyVl1I0ohT86Hlv41WmMBbP4KickMUuciqO56z6607p1QomwaAIC%2FfLnXfUaYeE80u7zmVOrsOIEGfquZABVhiN0NAdF2dBjTTDK0Q9K5rri9ud4JC1Fyei1OygKsmZqhB49oMi%2B%2BaaMjBvuuYhtmyJgbmebCZ0zugepn25MGUhfg0e8JnVxsKTFocdvrk6L04u98z40IlAzvAND%2FvzLM3Tmrnm3bjRbi34oEf2XkE7kZ7LAaoIGpE5yHXSce4SOIxo%2BqcH39BcHJ4Aicva6InLfhiIKX%2FruaW6f2hIgiCJbY7Vo7wOar9SXB4IBjN5i3xX%2BW4IfnVWdv20u5ePX4x630zplbA5StH4sDxGTEYXX%2BXmDIPACX4vvRoIhzV7yst8FDU8fJCr3dhsRLSWPMlm1LBxFUYSsT%2Bue6s8mh96l2CkdfyPp2McW6TEK0DZ9D0HHi6vLX2JvQh%2BVNyQjakwrO%2BbwQY6pgE1LJHahJUifpiGgt1nR0ZrfFXkwQ9G5abOEgvE28qYGwJSdaZvZr1hkSYkMsbgzrHq65cdpLr8LhK6c02ZdgG2AgnVA0DNonSmuvPYjkCbPmOT7FoHl4NVNOc%2BT8MwdkalQliceqVgzbc4LeJIQi3Qx%2FuBfKu0kiLYxH4BP7b%2F1%2FrftnRrXp8aFCjzszagS4llkuo3s558JUkwUmp%2F%2BrCtmSGy2NMS&X-Amz-Signature=7259e6760449decd14cebee190c4bb87524e51b1245ba30776c25e7e21d24439&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWNQUH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbJWfKpUhxwfPy5Qc33%2FjmWTAuDU260wPrL%2FbukwVCUAiBWOJqjniLNmc%2FbgHR3mQS3q4V1Lpnh2B1N5AHux%2BMPNSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMWimzODk%2B%2F0mfCzY1KtwDnnu5i6eYLLOuhdFJ7O6nNQg4ErUihO%2B4Acq0BTkj65mv%2Fz83iEDzulEAlhnWwhyIHw5ow%2Bc4Kk8IqAkziM6TlBCNppeqboG0E24Y7dOJwnQEnDaTgeBpE%2Bxl1f4KDwy7L0vKxnE%2Bj%2BtUm8s%2F1PzAWmzF20BxX66DDFZvAAyVl1I0ohT86Hlv41WmMBbP4KickMUuciqO56z6607p1QomwaAIC%2FfLnXfUaYeE80u7zmVOrsOIEGfquZABVhiN0NAdF2dBjTTDK0Q9K5rri9ud4JC1Fyei1OygKsmZqhB49oMi%2B%2BaaMjBvuuYhtmyJgbmebCZ0zugepn25MGUhfg0e8JnVxsKTFocdvrk6L04u98z40IlAzvAND%2FvzLM3Tmrnm3bjRbi34oEf2XkE7kZ7LAaoIGpE5yHXSce4SOIxo%2BqcH39BcHJ4Aicva6InLfhiIKX%2FruaW6f2hIgiCJbY7Vo7wOar9SXB4IBjN5i3xX%2BW4IfnVWdv20u5ePX4x630zplbA5StH4sDxGTEYXX%2BXmDIPACX4vvRoIhzV7yst8FDU8fJCr3dhsRLSWPMlm1LBxFUYSsT%2Bue6s8mh96l2CkdfyPp2McW6TEK0DZ9D0HHi6vLX2JvQh%2BVNyQjakwrO%2BbwQY6pgE1LJHahJUifpiGgt1nR0ZrfFXkwQ9G5abOEgvE28qYGwJSdaZvZr1hkSYkMsbgzrHq65cdpLr8LhK6c02ZdgG2AgnVA0DNonSmuvPYjkCbPmOT7FoHl4NVNOc%2BT8MwdkalQliceqVgzbc4LeJIQi3Qx%2FuBfKu0kiLYxH4BP7b%2F1%2FrftnRrXp8aFCjzszagS4llkuo3s558JUkwUmp%2F%2BrCtmSGy2NMS&X-Amz-Signature=c06766e50b22a80fb5a63042a2b72fc8e278d44c9e7e6e408eb82e99a9b556d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
