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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQKWU4Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVVp5r9RaKuEU5zEqnnmuAJZQBoqZtPH7ndksktyayPAiBX7lSq4pvimLMYRhrkIYMg9MC9mRR5wFXbEKAc3DnwwCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWD7zBZrrKP6cra3IKtwDcu%2BCcTjTykq%2FxQLbL%2FmJWA%2Fbi9BFMYj6E1p6LnFLLuFVT6d7EVFKPmhrSb4dRRYebD9Xtj1nyligexOqdCJ%2FB2lM6HYsTqAesmhX9%2B2L00WaW9Mga3Mai0fp14kVL9vnva2%2BSPI%2BFBzftDfx57W%2BUYLXRt3L%2FKp%2BmP%2BAJ80O86vDyB%2FwZX6dqVtQcI8pbBVVclpm%2BiZ%2FYdDt9Tf06vyX%2B5tYtg7ET5Je7M%2FO5d9ofQY1iNOumM6D4I3NlRJd4R%2BU93MTmSwMWiTHW0sJfEQ2artUEODt3XGJzY%2BD%2BMajFJhrbvM2Z9VzM0iR6XY%2BkOOhYY1oL201e%2BQSxbQEn4KKRAx7lnRsvEsAg9FVsTNUXjn6QTm70uNE1o20b1mmmV6Y%2FturAqlaPHukVSg870q%2BOIt9N23smBQhzvPyDFLRiaPyEJv21Y%2FTh4yDzeuPeS2CRQrQDR2e0oGa1syCWalSABOarf%2FzIVbs9ugfRUd5e5REe3pshuqJ9kB7akvZdZNsEhD1fhRTS0uhkqbvVPS9J24i7svSIjNUyx9qht8oRtXUWpNHJfuUNJ591m5tu8G8aTt91tS5VmTJDUk6CbU0aQtcdpOeDAMIXxl%2FQ4tNAIgb%2Ba8dFHu5kZZ7pvYwscqlwQY6pgEilgn%2BkWg4Zt98s%2BBDmPt%2B4E%2BxoUlpZN5E9%2FAmJ4%2FL5LdCuxmhwiIxwzXrDcHEBLzBy21XceFumdIvsmHFOuiKH0CMr1Xd0yzY1TlkgS6PPpl4sOJQy3576s6De46jgLjU5rd9b2CMPm4IcPKnm7dpdi09RqO8zSimzYkPBouRnOYHQvv4A9LOlUpyttZdNlG%2BtdCMkUjxh9kxFITG3TWr8dvX%2BWsx&X-Amz-Signature=d06d2e523618c859fabdb533233d24dcc7db590f04ea4d752d582038a4bfd05e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQKWU4Q%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVVp5r9RaKuEU5zEqnnmuAJZQBoqZtPH7ndksktyayPAiBX7lSq4pvimLMYRhrkIYMg9MC9mRR5wFXbEKAc3DnwwCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWD7zBZrrKP6cra3IKtwDcu%2BCcTjTykq%2FxQLbL%2FmJWA%2Fbi9BFMYj6E1p6LnFLLuFVT6d7EVFKPmhrSb4dRRYebD9Xtj1nyligexOqdCJ%2FB2lM6HYsTqAesmhX9%2B2L00WaW9Mga3Mai0fp14kVL9vnva2%2BSPI%2BFBzftDfx57W%2BUYLXRt3L%2FKp%2BmP%2BAJ80O86vDyB%2FwZX6dqVtQcI8pbBVVclpm%2BiZ%2FYdDt9Tf06vyX%2B5tYtg7ET5Je7M%2FO5d9ofQY1iNOumM6D4I3NlRJd4R%2BU93MTmSwMWiTHW0sJfEQ2artUEODt3XGJzY%2BD%2BMajFJhrbvM2Z9VzM0iR6XY%2BkOOhYY1oL201e%2BQSxbQEn4KKRAx7lnRsvEsAg9FVsTNUXjn6QTm70uNE1o20b1mmmV6Y%2FturAqlaPHukVSg870q%2BOIt9N23smBQhzvPyDFLRiaPyEJv21Y%2FTh4yDzeuPeS2CRQrQDR2e0oGa1syCWalSABOarf%2FzIVbs9ugfRUd5e5REe3pshuqJ9kB7akvZdZNsEhD1fhRTS0uhkqbvVPS9J24i7svSIjNUyx9qht8oRtXUWpNHJfuUNJ591m5tu8G8aTt91tS5VmTJDUk6CbU0aQtcdpOeDAMIXxl%2FQ4tNAIgb%2Ba8dFHu5kZZ7pvYwscqlwQY6pgEilgn%2BkWg4Zt98s%2BBDmPt%2B4E%2BxoUlpZN5E9%2FAmJ4%2FL5LdCuxmhwiIxwzXrDcHEBLzBy21XceFumdIvsmHFOuiKH0CMr1Xd0yzY1TlkgS6PPpl4sOJQy3576s6De46jgLjU5rd9b2CMPm4IcPKnm7dpdi09RqO8zSimzYkPBouRnOYHQvv4A9LOlUpyttZdNlG%2BtdCMkUjxh9kxFITG3TWr8dvX%2BWsx&X-Amz-Signature=2f46e9f898499acfb0edd9317f3a9963137cbaff2f35390be3d95c0a870d25e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
