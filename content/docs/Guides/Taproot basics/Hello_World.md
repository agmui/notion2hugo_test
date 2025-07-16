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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP4RQB54%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAOPEMRguXKUoSWx4oh3kO3fLliB7xWWb1MgTfZbFQsOAiBNNbiFsrslEvIt%2FrJLNSU0uYGUm41AgsK8Y3TfJ9Bd2Cr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMIKZDp5aZaGaklVgmKtwDyY8B1pW97zZ2HBTAEO19tE%2FG1QRygqxvv%2BhPbyVgpLGYjzjbnoq%2FX4FGbXA2hDLypb%2F93bNsx5Gmf8RLH%2Fqc5VgF84qvOjTdj8GIDCbtFTApxfFZerKKBpj1glzSlPc8R3CAyS5ukZK8i87Pw26kwZlOgXpirFT%2FU9tjhI4YM%2FBd1A7mazt39ciLhNBwO6e06f%2BhFIsUMedapDOAoRFDlrz7cdyVrrjrhrmV5sVdEoaI%2B9eyQgciGjWjDXZny27Iq5XZ5o2ITt%2B81TRSN5vk3Xq13NNYYDuTTWcw1SbWX1waCsy73myCA5bl%2FRuThhPp6%2B39KtPHCC50ggTLRbp9BZuzklI55g2IMFUJwYfECZRL7nBBMvbISO%2Fpl7ghSAESEJ%2FdBU28OqimZ75FJpTRJzanSj74CpvTlj1giXce4XyNa%2FYliKEV6O%2F4x%2B55shaYQngygjcNegkHNAHYbuXwp2Ehqhy%2B2blzjj5B5VVx7aopu9BCn7D4QL7SiHIn5STF85j0qbMG2Im27I5nQ7Q0ixBZQWRkg9n4gD3Vy7KcuadVm5hELdyvl8b5Zh2QItscv4F9%2FrR2MpLwWTChvHG%2FqTXgxpn3R%2FEjGQyajQRHYkN3l84Jtt2dp3wrqeQww%2BDfwwY6pgEC0IEBic39IALObEdWSGF2BTy9r2pTFOf74WBBgozsRio00kpRKtDIy7pdVYjkW4x9zaiyZc8MZFyepBjLLp5jRT4NPH3rggKvC%2BTVGhOjVAK0oWuJYnq%2FWTgeL%2BS%2ByLHh7Op5M4micrhps9YgFYJ%2FeMafC%2Fz3CTyNYcPQBxdJNLYnPRku1Kc2prH0SATP%2F6ygXgr7AtLxbY25R%2BZv6hjuN2t4vomm&X-Amz-Signature=74d45d56b3e6f1d14ae380d778d5983f548bdfed00c2a1207ffcf8a7b771e051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP4RQB54%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAOPEMRguXKUoSWx4oh3kO3fLliB7xWWb1MgTfZbFQsOAiBNNbiFsrslEvIt%2FrJLNSU0uYGUm41AgsK8Y3TfJ9Bd2Cr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMIKZDp5aZaGaklVgmKtwDyY8B1pW97zZ2HBTAEO19tE%2FG1QRygqxvv%2BhPbyVgpLGYjzjbnoq%2FX4FGbXA2hDLypb%2F93bNsx5Gmf8RLH%2Fqc5VgF84qvOjTdj8GIDCbtFTApxfFZerKKBpj1glzSlPc8R3CAyS5ukZK8i87Pw26kwZlOgXpirFT%2FU9tjhI4YM%2FBd1A7mazt39ciLhNBwO6e06f%2BhFIsUMedapDOAoRFDlrz7cdyVrrjrhrmV5sVdEoaI%2B9eyQgciGjWjDXZny27Iq5XZ5o2ITt%2B81TRSN5vk3Xq13NNYYDuTTWcw1SbWX1waCsy73myCA5bl%2FRuThhPp6%2B39KtPHCC50ggTLRbp9BZuzklI55g2IMFUJwYfECZRL7nBBMvbISO%2Fpl7ghSAESEJ%2FdBU28OqimZ75FJpTRJzanSj74CpvTlj1giXce4XyNa%2FYliKEV6O%2F4x%2B55shaYQngygjcNegkHNAHYbuXwp2Ehqhy%2B2blzjj5B5VVx7aopu9BCn7D4QL7SiHIn5STF85j0qbMG2Im27I5nQ7Q0ixBZQWRkg9n4gD3Vy7KcuadVm5hELdyvl8b5Zh2QItscv4F9%2FrR2MpLwWTChvHG%2FqTXgxpn3R%2FEjGQyajQRHYkN3l84Jtt2dp3wrqeQww%2BDfwwY6pgEC0IEBic39IALObEdWSGF2BTy9r2pTFOf74WBBgozsRio00kpRKtDIy7pdVYjkW4x9zaiyZc8MZFyepBjLLp5jRT4NPH3rggKvC%2BTVGhOjVAK0oWuJYnq%2FWTgeL%2BS%2ByLHh7Op5M4micrhps9YgFYJ%2FeMafC%2Fz3CTyNYcPQBxdJNLYnPRku1Kc2prH0SATP%2F6ygXgr7AtLxbY25R%2BZv6hjuN2t4vomm&X-Amz-Signature=5a6f5497ffd14565a3924a665f19b2722b5dd299b93ee5f145992abac7d316ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
