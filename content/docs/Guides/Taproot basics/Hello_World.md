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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AK7OXEM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQwuroP7TY%2FvpQEtVt8V2wpBJh%2FCKGC35D529C5kGsNAiAl0doR5%2B476A%2BIZKOJ4OW5%2Bu2IxwDCKLOwQ7oUybHAhyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNehYh8az11j%2FhmRcKtwDpUkOwCNBpIUqw1x%2FLzw9CigI9bSDWia0oqVYBQezizY515Hm7DXQccVu6fjpAdG4RS1qsgAwFbCRAeERiP5sJ4wQzlwPFtFNinbmXx2r%2Bn70hs93S1VEHZBMGSBdL0cYiW5Rgy%2B2NnPYLqGQGr4iPDBzhYBcOBLWmJ0sgr%2BdApM9wJGvXOj7VvWZxP4neTxfA2R7nsAh6HikFyKECbHIUo786H%2BVfWqvKEB831y39P%2BoOizX5l%2FqQ%2FI8dwcMuWt2bXm2F81O2TjO%2Bx3RZLDTLEWWCvH6Im53DTagr0%2FHC93WOlzi3U3%2BBOlwkRyWoNQUnt9Ne6hAZgwtTKUCI3cZ9RcqpLe5bGaXsfiUGNhUeG2Swzmv3%2B4zISP%2F3FVZ5RTCg40%2BsTPx0xgiwE8%2Be1CVNQkdAFqCu3fVd2pNT%2B18ox4SbSlLmPMTig79THuv4Ziq5C9kcG04y0oLJnFMz7EGHwFz65ZOXIENqFLvDF7jcjQrClIWh0tRfGctyRV5ISAkylW2OC1j%2BnbWvtyMU2RH6MKXztTtylspMTiIct0Vj9NUCfya1i76R%2BUGVH62B%2BZnS9h5FWKvQMJ1ylLPVmzdTxnynLmzQgwSi%2B66s1v5wnB3UWPhBFNplKmkONcw2KnpvQY6pgHKrTe7DFVGksMnlk68WbFQ8nn9zt2%2BwqWeZ3rCb%2FoKd7U%2FiLBpImtu0N%2BMflahCDfVNkIBwoSTes%2FdtSdtgMhqaF%2BBUSUhj%2BnjE0oHLihoOOouV2JeKSDvq6O1tssvNBOb6nm9ZINwomSjBTa3ZfxDaL04CkiS8XHHVReHYUDzYOA8kK7qb3cj3mUvVwJDXkaylgqrkzOqRkfUAqiFw6eNB0XL9Z9G&X-Amz-Signature=e3bb4dd367c56fa170e78d73308b2e5838a02b8b8c23eab085f71e972a661c43&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AK7OXEM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQwuroP7TY%2FvpQEtVt8V2wpBJh%2FCKGC35D529C5kGsNAiAl0doR5%2B476A%2BIZKOJ4OW5%2Bu2IxwDCKLOwQ7oUybHAhyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNehYh8az11j%2FhmRcKtwDpUkOwCNBpIUqw1x%2FLzw9CigI9bSDWia0oqVYBQezizY515Hm7DXQccVu6fjpAdG4RS1qsgAwFbCRAeERiP5sJ4wQzlwPFtFNinbmXx2r%2Bn70hs93S1VEHZBMGSBdL0cYiW5Rgy%2B2NnPYLqGQGr4iPDBzhYBcOBLWmJ0sgr%2BdApM9wJGvXOj7VvWZxP4neTxfA2R7nsAh6HikFyKECbHIUo786H%2BVfWqvKEB831y39P%2BoOizX5l%2FqQ%2FI8dwcMuWt2bXm2F81O2TjO%2Bx3RZLDTLEWWCvH6Im53DTagr0%2FHC93WOlzi3U3%2BBOlwkRyWoNQUnt9Ne6hAZgwtTKUCI3cZ9RcqpLe5bGaXsfiUGNhUeG2Swzmv3%2B4zISP%2F3FVZ5RTCg40%2BsTPx0xgiwE8%2Be1CVNQkdAFqCu3fVd2pNT%2B18ox4SbSlLmPMTig79THuv4Ziq5C9kcG04y0oLJnFMz7EGHwFz65ZOXIENqFLvDF7jcjQrClIWh0tRfGctyRV5ISAkylW2OC1j%2BnbWvtyMU2RH6MKXztTtylspMTiIct0Vj9NUCfya1i76R%2BUGVH62B%2BZnS9h5FWKvQMJ1ylLPVmzdTxnynLmzQgwSi%2B66s1v5wnB3UWPhBFNplKmkONcw2KnpvQY6pgHKrTe7DFVGksMnlk68WbFQ8nn9zt2%2BwqWeZ3rCb%2FoKd7U%2FiLBpImtu0N%2BMflahCDfVNkIBwoSTes%2FdtSdtgMhqaF%2BBUSUhj%2BnjE0oHLihoOOouV2JeKSDvq6O1tssvNBOb6nm9ZINwomSjBTa3ZfxDaL04CkiS8XHHVReHYUDzYOA8kK7qb3cj3mUvVwJDXkaylgqrkzOqRkfUAqiFw6eNB0XL9Z9G&X-Amz-Signature=bec4edc9f8097e8298bba5bc4318e0459f4d688db16431aa878a1919261aa8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
