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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEYRTFC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW03zXAdP96dt8OEtA3dNeNgRMCEB9SmLtRpzpfSMF6AIhAPSZ3wSXBHTAZVIPqEGw4sUkpp7EcjIx2K3N0jvDy4IHKv8DCH4QABoMNjM3NDIzMTgzODA1IgymoXaBS8yZVfl%2BlVAq3APjRRVZCW0%2F4EBkaRcvHirJ7ouZ0fZP8zcSPftTgGmB3afZMJXOsS%2B4ejzdhcWbDKT2UvmerVu9DRLqKtxy%2BJWsecUfC7tmkhO1pD%2FiB2tsL6U%2FAV6%2B7hafLz47%2FPNNAg6szyW5M3DgpIyiw4Z4ml1TkLabve8%2Bk%2FJTSqDG%2BeHTPlhjS8uoBJzkilAmG1DSnBJK76eo6r%2FxSVN137bYp06I7fc5KIK9xl4hpGVg0KKicqYZgW2Y%2F4HuR8pYZx%2Feaxx2GWmimP9TgmzbbZOM9pF83KnsfLA9AMxCUCdiag44r6tUSsd9T9ms28kgr3%2F5yf%2B1jnMaKZ3X%2FbCZjE8Deid%2B9gtu1en9kmN%2BvIlCe%2FO%2BEKSjmLwbW5qhTxuJKyC6jEvRbJVINMG8fuUY8UjchWkqgiFvUDBGNpZIHWCxKA6GzvrUMOFFPfC9lmSGDnrapEDCWMhwpluRWrJsXPBdrKIFWzcXsUXHcM28g9vdjrlANFNym%2F7Mr64w3v9rVRpw4BZIwMmz81IaGuHk8cn%2BjhD6hsbrdsc74E7C5yi20q%2BKK9YijNGZ4WmUh4K8ogEIWWbPWOmyeJDBI2d1LvXuwFQSYf1DPn6XMpc2yB7bgOhNOuc0yVOSMrrVlonlojCV05LCBjqkAZb0yknsKdCGH%2B3LCErFYf7mO3LQYap%2FZJfImJqbR6BtKfu4k39Ct2Srm%2FsCOMwJ1MMbBIB62WSj7KRNodzZyZ3g8Ycc86RPFTzCSCmd2zOFSeEu2b3Mth21Lath%2B%2FsG8O6dSrHwuD2a4iX1dS4GWo%2BHwcN%2B8KuMkeanQSHTmhdwxXwOO4QwWq3YSAVq2b3909Rz80BkoWPXNPvgkzai3IS5C%2FgD&X-Amz-Signature=0273b24f3d9f1ec06c9519ae02373d63ba5dcaebff3843709e126400feb1e3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEYRTFC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW03zXAdP96dt8OEtA3dNeNgRMCEB9SmLtRpzpfSMF6AIhAPSZ3wSXBHTAZVIPqEGw4sUkpp7EcjIx2K3N0jvDy4IHKv8DCH4QABoMNjM3NDIzMTgzODA1IgymoXaBS8yZVfl%2BlVAq3APjRRVZCW0%2F4EBkaRcvHirJ7ouZ0fZP8zcSPftTgGmB3afZMJXOsS%2B4ejzdhcWbDKT2UvmerVu9DRLqKtxy%2BJWsecUfC7tmkhO1pD%2FiB2tsL6U%2FAV6%2B7hafLz47%2FPNNAg6szyW5M3DgpIyiw4Z4ml1TkLabve8%2Bk%2FJTSqDG%2BeHTPlhjS8uoBJzkilAmG1DSnBJK76eo6r%2FxSVN137bYp06I7fc5KIK9xl4hpGVg0KKicqYZgW2Y%2F4HuR8pYZx%2Feaxx2GWmimP9TgmzbbZOM9pF83KnsfLA9AMxCUCdiag44r6tUSsd9T9ms28kgr3%2F5yf%2B1jnMaKZ3X%2FbCZjE8Deid%2B9gtu1en9kmN%2BvIlCe%2FO%2BEKSjmLwbW5qhTxuJKyC6jEvRbJVINMG8fuUY8UjchWkqgiFvUDBGNpZIHWCxKA6GzvrUMOFFPfC9lmSGDnrapEDCWMhwpluRWrJsXPBdrKIFWzcXsUXHcM28g9vdjrlANFNym%2F7Mr64w3v9rVRpw4BZIwMmz81IaGuHk8cn%2BjhD6hsbrdsc74E7C5yi20q%2BKK9YijNGZ4WmUh4K8ogEIWWbPWOmyeJDBI2d1LvXuwFQSYf1DPn6XMpc2yB7bgOhNOuc0yVOSMrrVlonlojCV05LCBjqkAZb0yknsKdCGH%2B3LCErFYf7mO3LQYap%2FZJfImJqbR6BtKfu4k39Ct2Srm%2FsCOMwJ1MMbBIB62WSj7KRNodzZyZ3g8Ycc86RPFTzCSCmd2zOFSeEu2b3Mth21Lath%2B%2FsG8O6dSrHwuD2a4iX1dS4GWo%2BHwcN%2B8KuMkeanQSHTmhdwxXwOO4QwWq3YSAVq2b3909Rz80BkoWPXNPvgkzai3IS5C%2FgD&X-Amz-Signature=784184c816321063924026dd5a9126f564592b0193373de724617084ba116e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
