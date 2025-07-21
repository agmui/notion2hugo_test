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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST475FWH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiLqTXS%2BWebzNH02GXb5vbPV5t7Cbu1uIeEu10AVfawIgOPc01Lo1xJAYkopQYoV5IvgDEeUvHU0vmUk2yutvSDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJ5s0pyTNZX6N%2FxZSrcA6yPg9ft5nOtNLeJEfp9pYVhyoX59EMT%2BzKSzYL02A%2Fg%2FUFGv0q%2B98AlqOOUlCnE1lSqj2SErGFszMd9N%2BoJWpkD6sdDAfhgOfSU4L5dIyMwnCUhb6u6EE4O0BozLq4WY%2F498VvXTWWjUh%2F8IFDZL88eWBhljYKehGGxpTGQIMymELOFSc7x6YaZWfEPMVr5%2BJvj53Wir34hTHITsTt2B%2BKdpaQ2ewiGtKdrFb73JAOZMmR1IVlBJWn7hFHcZek5lQQIfATB4tuDP1Gc6mNxU460pk8kRWTCOwjv%2FYY5kabBLE8T8cf%2B6XQ7Vw6s3AAuH%2BTgPwD%2FazK3yeH%2FeHm%2F1eaJVvNaav4fLFhITS7K0T4K1AhI1MfIQenXUkLNHQ2Zx%2FEWPmKPtr9mjEZ1mcWg6IqTDoFeBXkqeoQSv4KBe8%2FwD8qFx5DPSiWERiJgrc0kskJBJBKWdIjRavVuwY7s7Bz6UzUNd1riLF%2B1%2F77rd0EjVAaJnuXr9GrC0ptQTk5QQELTICOEZeaeuOZjJOw6rS9tFaVtMPsVikWUyifV%2FZhBSEpQGo3kkmqlR%2FAeHu2i7fDbQRXJaikXvmDoHD5Du6tOSNAeSNGQpYJFKUEwV4gD9kIFWBujE86cvAIvMKCT98MGOqUBG6cTDAEbTQp5er%2Bz3OO3dk%2FJMAnKtTjyaM8zjxTFtJav3CHbB5IcpQTmFX%2ByPWlwppWbvY0Kc4HNO2FVl%2BlnuqIsrcfQCcV9MYiWEp9Bnf%2BGfR1RdT00COQVTzjtwfmZoIRai3yB4itbRxDtymdUI7tz80gxA%2F0zvQ%2Be4mhdZ2fu1%2FvWn3NMa8qVRDIJHr4Jq%2FWG9K7DSJgo400pXIYfvHH%2BAEBj&X-Amz-Signature=f34057642369df38a4a0048a5fe8e1d87fbb608a769f2b84d664baafbc5754ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST475FWH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiLqTXS%2BWebzNH02GXb5vbPV5t7Cbu1uIeEu10AVfawIgOPc01Lo1xJAYkopQYoV5IvgDEeUvHU0vmUk2yutvSDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJ5s0pyTNZX6N%2FxZSrcA6yPg9ft5nOtNLeJEfp9pYVhyoX59EMT%2BzKSzYL02A%2Fg%2FUFGv0q%2B98AlqOOUlCnE1lSqj2SErGFszMd9N%2BoJWpkD6sdDAfhgOfSU4L5dIyMwnCUhb6u6EE4O0BozLq4WY%2F498VvXTWWjUh%2F8IFDZL88eWBhljYKehGGxpTGQIMymELOFSc7x6YaZWfEPMVr5%2BJvj53Wir34hTHITsTt2B%2BKdpaQ2ewiGtKdrFb73JAOZMmR1IVlBJWn7hFHcZek5lQQIfATB4tuDP1Gc6mNxU460pk8kRWTCOwjv%2FYY5kabBLE8T8cf%2B6XQ7Vw6s3AAuH%2BTgPwD%2FazK3yeH%2FeHm%2F1eaJVvNaav4fLFhITS7K0T4K1AhI1MfIQenXUkLNHQ2Zx%2FEWPmKPtr9mjEZ1mcWg6IqTDoFeBXkqeoQSv4KBe8%2FwD8qFx5DPSiWERiJgrc0kskJBJBKWdIjRavVuwY7s7Bz6UzUNd1riLF%2B1%2F77rd0EjVAaJnuXr9GrC0ptQTk5QQELTICOEZeaeuOZjJOw6rS9tFaVtMPsVikWUyifV%2FZhBSEpQGo3kkmqlR%2FAeHu2i7fDbQRXJaikXvmDoHD5Du6tOSNAeSNGQpYJFKUEwV4gD9kIFWBujE86cvAIvMKCT98MGOqUBG6cTDAEbTQp5er%2Bz3OO3dk%2FJMAnKtTjyaM8zjxTFtJav3CHbB5IcpQTmFX%2ByPWlwppWbvY0Kc4HNO2FVl%2BlnuqIsrcfQCcV9MYiWEp9Bnf%2BGfR1RdT00COQVTzjtwfmZoIRai3yB4itbRxDtymdUI7tz80gxA%2F0zvQ%2Be4mhdZ2fu1%2FvWn3NMa8qVRDIJHr4Jq%2FWG9K7DSJgo400pXIYfvHH%2BAEBj&X-Amz-Signature=996ce3fe012cba441e500c937f993b1ecc7985fce1f158dacc3cab13c11eb358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
