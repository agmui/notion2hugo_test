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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4P5GCF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChQv3qFkNAHqBD4X%2FGb5MMJif2QbgUU2RvHZIUvXmDnQIhANWX2JKgnDdu%2F85AtIr0TOAi8KQnr1urq4nBB7pbEJW9KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJBCZqYi7VZEZkpAEq3AMcfVjhrGjEAwCOo%2FDy52xe23chcHzrvNreWyvUuA84NfgK4LGuS3MgYqGdPxcYr2Wt3%2BeP87SIcSCF7MgxX3Ccmb96%2BWEEEImh6Ym8vqImxz%2FOpW7VHzaMVkZXaBhaSumE6fUrC32QZSDhLRAOdGQMwcC38aCMopKiMkoKGxe1fYL22QVKLMYvO6IGiQBu%2B92TcJ%2Fqcv7v3JSPRHEtIYvtVnDy3jFm6oKmRepYxBpeqaX7a9O417FrEV78GJwVhImO80OVmWdb1e%2FwhS9x9Sb5aXMt%2FQWXp4Udds7vzI9j1VogI4gPb82O5Wjxui781jbsYl9jldwI65nRAZ2sgzVNk4PAnsriBHpE8WnIBIm2efwaqC%2BcLpEtXXg7ZqpAuHVooDoe7Y4G9FQFD1zr7%2BO%2BY01ds7XjKk40OnuZzelerjDTacRjJ5QV2XSI2s6XdfKtqGwQYKQ0NK7%2BETpUvURedg5IsHeF2SZdR73AeKdErPoriYzVfN%2BtLL1kc9G9PCt8XlFgH6ATD1ytoL1b5mmUVudgZ9ra5oBF3xmtgIATmnJQyP3EeVzbc%2Fa%2Ff9ZUYg63vXzjFbpX%2B5SD8PQg1j6Q7X0LTmQMqtmWyCYZP2UUGD3ZOuF3InMJHnbkIjCF3aq9BjqkAbgu7bDFiuh7Sz0XwUTlcManUDIrmsoPBrEM4N1PysBHGmNRfG%2BlXEUny3JAYhTKQYcACJ5d2I9k7BhvUDiRRflCFfUL70z3fZta8ZMMO1o%2B64wVwX6h1I3hC1JJmFxCZaW%2FxfCfgpqgHAjLEYAVUdfzuQ7iwKaM%2FVVntLmZ8j2v3hGJx%2BP4q7qLhQE1To0%2BKuBdHuj5TNkCCisOhG2ciVm75u8O&X-Amz-Signature=2fb4c5d6f9bc279c485fed5befe9b9a2779271f44f5fb21b8f0ac1fa91654eee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4P5GCF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChQv3qFkNAHqBD4X%2FGb5MMJif2QbgUU2RvHZIUvXmDnQIhANWX2JKgnDdu%2F85AtIr0TOAi8KQnr1urq4nBB7pbEJW9KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJBCZqYi7VZEZkpAEq3AMcfVjhrGjEAwCOo%2FDy52xe23chcHzrvNreWyvUuA84NfgK4LGuS3MgYqGdPxcYr2Wt3%2BeP87SIcSCF7MgxX3Ccmb96%2BWEEEImh6Ym8vqImxz%2FOpW7VHzaMVkZXaBhaSumE6fUrC32QZSDhLRAOdGQMwcC38aCMopKiMkoKGxe1fYL22QVKLMYvO6IGiQBu%2B92TcJ%2Fqcv7v3JSPRHEtIYvtVnDy3jFm6oKmRepYxBpeqaX7a9O417FrEV78GJwVhImO80OVmWdb1e%2FwhS9x9Sb5aXMt%2FQWXp4Udds7vzI9j1VogI4gPb82O5Wjxui781jbsYl9jldwI65nRAZ2sgzVNk4PAnsriBHpE8WnIBIm2efwaqC%2BcLpEtXXg7ZqpAuHVooDoe7Y4G9FQFD1zr7%2BO%2BY01ds7XjKk40OnuZzelerjDTacRjJ5QV2XSI2s6XdfKtqGwQYKQ0NK7%2BETpUvURedg5IsHeF2SZdR73AeKdErPoriYzVfN%2BtLL1kc9G9PCt8XlFgH6ATD1ytoL1b5mmUVudgZ9ra5oBF3xmtgIATmnJQyP3EeVzbc%2Fa%2Ff9ZUYg63vXzjFbpX%2B5SD8PQg1j6Q7X0LTmQMqtmWyCYZP2UUGD3ZOuF3InMJHnbkIjCF3aq9BjqkAbgu7bDFiuh7Sz0XwUTlcManUDIrmsoPBrEM4N1PysBHGmNRfG%2BlXEUny3JAYhTKQYcACJ5d2I9k7BhvUDiRRflCFfUL70z3fZta8ZMMO1o%2B64wVwX6h1I3hC1JJmFxCZaW%2FxfCfgpqgHAjLEYAVUdfzuQ7iwKaM%2FVVntLmZ8j2v3hGJx%2BP4q7qLhQE1To0%2BKuBdHuj5TNkCCisOhG2ciVm75u8O&X-Amz-Signature=6037f36e592cf78c181773ca9e6e08f306a58ecae72c03d097d94c682cdc275f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
