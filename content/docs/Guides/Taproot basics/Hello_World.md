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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WMOHQR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHJwg3OOQlqpeUbVVpGcxwDl1LjmRbgVDuzHi%2Fi6Fvy0AiAXHvBtNkc4Po5ScgchJl%2B%2FX192csRraqMVm7KIuTChvyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMA4GrzyXllEFP88kPKtwDRTB%2B0Cit4CxuJUr4HSqh%2FKXIjH3OS3iO7bz1YAhHRNf9J%2BuElL0COOQMxv2RotzS2OiAcVTgYipcf7kPCDp2HiIqqoAUjr7Atss1pUMRTZd0O5s%2BEE0uaKK2FL%2FSteuHbUo2DxD%2FII6in7%2FtLXaxdW6kKtabvTa%2BXLyvupdvB%2FUzN4Jh7ODAJTKZZmZUtYdBDCOVVbKkztXcltJgt0E9mAafA6YgTmWJ%2F9aJ6b1jU26mlI4ZZZgeNnK6FyYWsxrEdvAEBrUlCtTKenhxfAHp39CyEwsTVtosaAfXBMJ%2F%2FaKMNXTgJN4mFExtcf91TLMBa11ZrMhZ2g6tZXxPcceEJQds7J1J0tc5H0T3%2BaAgQicMvUTZs94GUA19CEGlYwxHAvsHE3r7jpvwbn%2BceoL1n99wl8YVmOkWbUhVd0dfq4sFFViHqQZCibqQ5axo3I1W5m0dKUDWZFvKf7DNSGQLz7FtgOELr%2Blghq0j%2FjPevO36yRwD0H3uIl77MPpYypH4S02AxiErtMtzQMQlgVe3b%2B6%2Fwu2Hdjyng7QsnH1TGhhCDrp7IN%2B6XpRxEkrZJl7mRNI9zvsjJg%2FMh%2FNcRDwRk7CfW80CMsXUUIYP4Uorf2fkNfQnxvN6UlS4G7cwo4WJvQY6pgE3sJAzyGzA7FHwsF2Uf4BHuDcB48IKmsb25Dp3fJmge7jVDeai7KNTf9PtGymyVfc7%2FbcNGtKCuzMvkNuK6Pi2YIylo3l8qVtNt0m11A9u0eaR1ZMoJULOjy46ywNrnaKsMLa%2FjAeWpDe0vnV%2FNT6%2FD8XAu4icdUuMMQu8Grhwea%2FqXMIwZb%2FTSkyxfWFzfwoenG0PybL%2F17tZjbIafOx%2BQZos04vT&X-Amz-Signature=e004072e2196aa1eab80910feaf492faf223728b200631900d5c58fc05a383f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WMOHQR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHJwg3OOQlqpeUbVVpGcxwDl1LjmRbgVDuzHi%2Fi6Fvy0AiAXHvBtNkc4Po5ScgchJl%2B%2FX192csRraqMVm7KIuTChvyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMA4GrzyXllEFP88kPKtwDRTB%2B0Cit4CxuJUr4HSqh%2FKXIjH3OS3iO7bz1YAhHRNf9J%2BuElL0COOQMxv2RotzS2OiAcVTgYipcf7kPCDp2HiIqqoAUjr7Atss1pUMRTZd0O5s%2BEE0uaKK2FL%2FSteuHbUo2DxD%2FII6in7%2FtLXaxdW6kKtabvTa%2BXLyvupdvB%2FUzN4Jh7ODAJTKZZmZUtYdBDCOVVbKkztXcltJgt0E9mAafA6YgTmWJ%2F9aJ6b1jU26mlI4ZZZgeNnK6FyYWsxrEdvAEBrUlCtTKenhxfAHp39CyEwsTVtosaAfXBMJ%2F%2FaKMNXTgJN4mFExtcf91TLMBa11ZrMhZ2g6tZXxPcceEJQds7J1J0tc5H0T3%2BaAgQicMvUTZs94GUA19CEGlYwxHAvsHE3r7jpvwbn%2BceoL1n99wl8YVmOkWbUhVd0dfq4sFFViHqQZCibqQ5axo3I1W5m0dKUDWZFvKf7DNSGQLz7FtgOELr%2Blghq0j%2FjPevO36yRwD0H3uIl77MPpYypH4S02AxiErtMtzQMQlgVe3b%2B6%2Fwu2Hdjyng7QsnH1TGhhCDrp7IN%2B6XpRxEkrZJl7mRNI9zvsjJg%2FMh%2FNcRDwRk7CfW80CMsXUUIYP4Uorf2fkNfQnxvN6UlS4G7cwo4WJvQY6pgE3sJAzyGzA7FHwsF2Uf4BHuDcB48IKmsb25Dp3fJmge7jVDeai7KNTf9PtGymyVfc7%2FbcNGtKCuzMvkNuK6Pi2YIylo3l8qVtNt0m11A9u0eaR1ZMoJULOjy46ywNrnaKsMLa%2FjAeWpDe0vnV%2FNT6%2FD8XAu4icdUuMMQu8Grhwea%2FqXMIwZb%2FTSkyxfWFzfwoenG0PybL%2F17tZjbIafOx%2BQZos04vT&X-Amz-Signature=362081d7e8030ba66b1189b2b6b9e7239690665f4e356c08cecf71d519060d04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
