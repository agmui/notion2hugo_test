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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZUC4QO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHkHnbBOL0qn9w7YWhjTJX1ZwnGcm38hcXmdGxRqBcmnAiAIiEr%2FASAr4ADEAbQ0x48FcHlHU9GWaqe2nsr4DMLAFSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMnw6XRvbrRpYCIRUBKtwD2IyxgPjXQ4A5gQ4lFeF97CNQo30hcLE0RkG8fGtv1qbhfAxMGI32xfkrTLS5xc0%2FMaeVLoMvPsgOCIwWkdWrONev6QhjxozGdp8pajE1khVVr3971OjyCZhLRWNEcY8hyoj99v6xITyuppB7nP1Ze19MwA9%2FQ5k7whUn9T%2F2Ax9iFWDb9SgapxUdqSGB0IiSNFF2jO9bUX1nJmfDTr%2Bqpkvpxam6inxOYrysY8nE6tjuZAsSFlG2mAc9h371Dw1gkvaftVsjax11MxSjFdcKrPlA66zXrIv78FJPoveD9gPH3B9RVQZi9wjrw0PsfdQ%2FEgkdnEJnIwd9rwo0c92jgdQbuVXHcLNfn07uOpuz%2F8NYq9Bp1GZxcXprMvJiFRzHhOnUGszV9PiVssFzqrSobMhlj0WDoB%2FhfDnJj5O307iCbRueNu0vlhKBiUR6o3d7t18XGejhX%2F8H%2FKh4d6l7cwhbPs38Vtixowyavb08O6kV6BdLaF84H4tB3bMAht7ExuYlm8MHn2RCMcbjosEXU2Z26YymDpNHXnh%2FLiOf5wwV%2BFf%2Fsy19fKr4Lvx13sojara7wbQgP%2BsD0yo2mI3ED4TNt5IEOLDtJEY7wmcXC0johH6AJq37TuoapHMwr%2BOZwQY6pgFodYKK2xL6RZApPd5o5vgqigECtFgSSwcuUkdwXsOZSxigiUGhfW7Ga6EUAyEbGMILEd8KcCWX69ynnmf8Gy7PCCtxQ4X4Ar1nNnMYufCevW45ggM%2BxJ1rLWsH1HIiibKthdT%2Bal7wv%2FZozRVPqYhoHGrs1Q7Jm3V%2Bkv1KFM1JmGXXAB3G3A3fjFTdGjIkKwWzJMdqH1hDg%2FsPWAa3e7bpMjXHNc%2Fa&X-Amz-Signature=dd8e6da5136c668924c9f00412197092171a45d8b47f5610750883f0148c8027&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZUC4QO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHkHnbBOL0qn9w7YWhjTJX1ZwnGcm38hcXmdGxRqBcmnAiAIiEr%2FASAr4ADEAbQ0x48FcHlHU9GWaqe2nsr4DMLAFSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMnw6XRvbrRpYCIRUBKtwD2IyxgPjXQ4A5gQ4lFeF97CNQo30hcLE0RkG8fGtv1qbhfAxMGI32xfkrTLS5xc0%2FMaeVLoMvPsgOCIwWkdWrONev6QhjxozGdp8pajE1khVVr3971OjyCZhLRWNEcY8hyoj99v6xITyuppB7nP1Ze19MwA9%2FQ5k7whUn9T%2F2Ax9iFWDb9SgapxUdqSGB0IiSNFF2jO9bUX1nJmfDTr%2Bqpkvpxam6inxOYrysY8nE6tjuZAsSFlG2mAc9h371Dw1gkvaftVsjax11MxSjFdcKrPlA66zXrIv78FJPoveD9gPH3B9RVQZi9wjrw0PsfdQ%2FEgkdnEJnIwd9rwo0c92jgdQbuVXHcLNfn07uOpuz%2F8NYq9Bp1GZxcXprMvJiFRzHhOnUGszV9PiVssFzqrSobMhlj0WDoB%2FhfDnJj5O307iCbRueNu0vlhKBiUR6o3d7t18XGejhX%2F8H%2FKh4d6l7cwhbPs38Vtixowyavb08O6kV6BdLaF84H4tB3bMAht7ExuYlm8MHn2RCMcbjosEXU2Z26YymDpNHXnh%2FLiOf5wwV%2BFf%2Fsy19fKr4Lvx13sojara7wbQgP%2BsD0yo2mI3ED4TNt5IEOLDtJEY7wmcXC0johH6AJq37TuoapHMwr%2BOZwQY6pgFodYKK2xL6RZApPd5o5vgqigECtFgSSwcuUkdwXsOZSxigiUGhfW7Ga6EUAyEbGMILEd8KcCWX69ynnmf8Gy7PCCtxQ4X4Ar1nNnMYufCevW45ggM%2BxJ1rLWsH1HIiibKthdT%2Bal7wv%2FZozRVPqYhoHGrs1Q7Jm3V%2Bkv1KFM1JmGXXAB3G3A3fjFTdGjIkKwWzJMdqH1hDg%2FsPWAa3e7bpMjXHNc%2Fa&X-Amz-Signature=692bf3dd60998ce34a092f1ea0b360a82bbb659be6c76d3a2ab1b22f4a0952b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
