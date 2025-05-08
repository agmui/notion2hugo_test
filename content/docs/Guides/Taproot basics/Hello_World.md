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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB46PV5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvij9CNyVpy06MZTnN3bzGR2%2FkPJVY%2FCRMdTg9uKn2GAiB0Pf%2FcltSKbUzgsPkr21a14OCLegKw3kKj7mzPWTOg%2Byr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMOQDVyqii%2BwxeHK7MKtwDzbaG0Wjm%2F3d%2B%2F%2FxBnG7hFm%2FdPD9oWN74S22l%2Br3EEow4Hi26R%2FidGvTrDjQMPrvuddxGvx7RnpBwb6898kDA1m%2F8JkYXUMCKYj1EAdDybCN%2BiNKMcMQFxuyMEJEfQ6xx4jZuU1J4QQf5HO80%2Fmnvjcv8RMkK%2BZRxR21WUWzpzY0WVzgOodJLbedwFktkSWk9vhX8upddHm3vtJCZyQFD3lmrDDdutZofjAsCKidd%2BbctndispGa%2BwOdmhTxVh%2FaUntxp8amxDkSZYIq1M7QGJww0cbkVoPEIlrmaiS3a0HCt0SX1WC%2FNrL5mM423443R7a2H30thg1Ciq82xF%2Fgdyd8cg%2F7sH6uRS%2Fq9TAuT2i6YV0ITD0XZwSc2htvMElwYG4oNIefBcLBNaTmHFEMF4%2Bm0yK4j%2FVYyWKeZSFJN%2BdshW9jl9Wmbk8aOrl6lypdMazkMgBDux8AMhXTCZrYTPVFzYnQlO0WrofdC35GPzxb2W6t3onlmBMdDq1yzo0LfY4%2FrCtfp3Kg2GRHXPTFAtORyUAe%2ByTyZ92o3LIha%2FJZhqnQZC%2FlBRqSqPbUhd%2BPd2kXkWCWRfTiVvGpO1J%2Bkcgqmf7rAJVGtpAQESOKZaO7EMdwdewfIKdWj6pEwkJTxwAY6pgGpaBpndc5KY9Jton3bFl7eu4u5sJ0PLW4I0B1z2rPME7I2uvMFXrbIaSukEa6yPWXvqzrDi4MQapcOwdOnS%2Fzb8UgZT35zVcjXCuyKUPSE%2FEyk3QdzgYGM13T1MGntU%2FBzNEwsHsVfAuaS8J5SfV%2BGZY4XZXSBNjCv4PB4SoKKN%2BdQZ9%2FBxHZKMC7vr25WZBKVEy0GgykdK3DmKlRqotogJUAaPq2l&X-Amz-Signature=b99e21a46ef68cfc67773df47544a484d7d6462bad57b5a954359aa1a05ec779&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB46PV5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvij9CNyVpy06MZTnN3bzGR2%2FkPJVY%2FCRMdTg9uKn2GAiB0Pf%2FcltSKbUzgsPkr21a14OCLegKw3kKj7mzPWTOg%2Byr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMOQDVyqii%2BwxeHK7MKtwDzbaG0Wjm%2F3d%2B%2F%2FxBnG7hFm%2FdPD9oWN74S22l%2Br3EEow4Hi26R%2FidGvTrDjQMPrvuddxGvx7RnpBwb6898kDA1m%2F8JkYXUMCKYj1EAdDybCN%2BiNKMcMQFxuyMEJEfQ6xx4jZuU1J4QQf5HO80%2Fmnvjcv8RMkK%2BZRxR21WUWzpzY0WVzgOodJLbedwFktkSWk9vhX8upddHm3vtJCZyQFD3lmrDDdutZofjAsCKidd%2BbctndispGa%2BwOdmhTxVh%2FaUntxp8amxDkSZYIq1M7QGJww0cbkVoPEIlrmaiS3a0HCt0SX1WC%2FNrL5mM423443R7a2H30thg1Ciq82xF%2Fgdyd8cg%2F7sH6uRS%2Fq9TAuT2i6YV0ITD0XZwSc2htvMElwYG4oNIefBcLBNaTmHFEMF4%2Bm0yK4j%2FVYyWKeZSFJN%2BdshW9jl9Wmbk8aOrl6lypdMazkMgBDux8AMhXTCZrYTPVFzYnQlO0WrofdC35GPzxb2W6t3onlmBMdDq1yzo0LfY4%2FrCtfp3Kg2GRHXPTFAtORyUAe%2ByTyZ92o3LIha%2FJZhqnQZC%2FlBRqSqPbUhd%2BPd2kXkWCWRfTiVvGpO1J%2Bkcgqmf7rAJVGtpAQESOKZaO7EMdwdewfIKdWj6pEwkJTxwAY6pgGpaBpndc5KY9Jton3bFl7eu4u5sJ0PLW4I0B1z2rPME7I2uvMFXrbIaSukEa6yPWXvqzrDi4MQapcOwdOnS%2Fzb8UgZT35zVcjXCuyKUPSE%2FEyk3QdzgYGM13T1MGntU%2FBzNEwsHsVfAuaS8J5SfV%2BGZY4XZXSBNjCv4PB4SoKKN%2BdQZ9%2FBxHZKMC7vr25WZBKVEy0GgykdK3DmKlRqotogJUAaPq2l&X-Amz-Signature=32df55596579107b3bd488289e3c86916c20dd2e6f4983c5a62e7cfa3bd69a40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
