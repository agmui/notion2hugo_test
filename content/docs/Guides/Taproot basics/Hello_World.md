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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRNPSNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBwlPBT8gh9AAxydE09UcRv4fK0TauiaXX%2FhFY2k0eF7AiBmNYjNmlHP6W7xbRqStfjh%2BdWnSY2lcFQfGznqP0tJBCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMwwBxNoudfI0ryxhqKtwDI3tDXqrwGkppKpPb44juMjLWWWtDneF9OOz%2FCXUbstCTViid4Cm596a1%2FMuQtvDNoNNRXI%2FRLlduq2ZVtiqViXu%2BZRqMKd1yDb611gmqrfmfzXpDu4v44CH8erq%2F7kMJlJ3cidECQuMb19UYEtj%2FT0iNAa3BLWlcH6wqijdI0qf0FucSrSs471VRQOrRO75ilSfsyTPvaF5H%2BXkUZ5auPRxSOwpeYGZAxZ9CFdYDRGGWAazC0oE63UmsvumeYSyB4pwPn1jSWtgKkAmuLbdLdJCPEAldkj4Tg4xAsyMHyOJcb2nD4zn7yA%2BYSCCTX156tI8mbvLj6bfypyxCBsEwNggKXQKGYOKS1KCxZ8xMRmziG7KNSJAMUvyTzDAooZAY72v52NB%2BWY91iBhp2Tp0OZgThNucnfB3h1%2Bk1pGpgj7kApAFB9bOOjP618tjI9Ws7heMCIowHJ%2F7zIb4f0%2BmXSJHcoVor0YjsGVlNztY2UmQ47E3FKKszlaT6pPKpoF%2FlPNC8cxN%2Fx7Do%2FAwWTkMeERpwA8OGMSY%2BMOAkK0ezf51Xg8vsVD0pdav1S5y%2BhW1Wf2mfvdTvQyvQ4DW%2FP5K8ziBPtql3BHLz2GcG9yBfEOHgqXk7oVSKUMOQHIwxZPewwY6pgGphuAZ%2Fmo2Ws7w07MtWpovJMHX11c62rJXPGHZgrfXZMJMUuCGNForDIEv9skIcaCWm75ueGrlrxXHwDetA4xhLgvYjuIXvQ9z7lGgMqSh5zx1Im%2BFFTJjbikmwSV%2BP4XBCE%2B8RXyYVPugR1yIalkhP95VlbJbbqv7G6Vc7Ta%2FQXS2a7opsKZPP5Dubv81K1UctcSfuOCSuthZ3KNuK5mZwmV4%2BJ97&X-Amz-Signature=158ce1bbc734bcee3cfa97f8acb5569c1afc13ae169d5b452d1f5f708cf3544f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRNPSNR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBwlPBT8gh9AAxydE09UcRv4fK0TauiaXX%2FhFY2k0eF7AiBmNYjNmlHP6W7xbRqStfjh%2BdWnSY2lcFQfGznqP0tJBCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMwwBxNoudfI0ryxhqKtwDI3tDXqrwGkppKpPb44juMjLWWWtDneF9OOz%2FCXUbstCTViid4Cm596a1%2FMuQtvDNoNNRXI%2FRLlduq2ZVtiqViXu%2BZRqMKd1yDb611gmqrfmfzXpDu4v44CH8erq%2F7kMJlJ3cidECQuMb19UYEtj%2FT0iNAa3BLWlcH6wqijdI0qf0FucSrSs471VRQOrRO75ilSfsyTPvaF5H%2BXkUZ5auPRxSOwpeYGZAxZ9CFdYDRGGWAazC0oE63UmsvumeYSyB4pwPn1jSWtgKkAmuLbdLdJCPEAldkj4Tg4xAsyMHyOJcb2nD4zn7yA%2BYSCCTX156tI8mbvLj6bfypyxCBsEwNggKXQKGYOKS1KCxZ8xMRmziG7KNSJAMUvyTzDAooZAY72v52NB%2BWY91iBhp2Tp0OZgThNucnfB3h1%2Bk1pGpgj7kApAFB9bOOjP618tjI9Ws7heMCIowHJ%2F7zIb4f0%2BmXSJHcoVor0YjsGVlNztY2UmQ47E3FKKszlaT6pPKpoF%2FlPNC8cxN%2Fx7Do%2FAwWTkMeERpwA8OGMSY%2BMOAkK0ezf51Xg8vsVD0pdav1S5y%2BhW1Wf2mfvdTvQyvQ4DW%2FP5K8ziBPtql3BHLz2GcG9yBfEOHgqXk7oVSKUMOQHIwxZPewwY6pgGphuAZ%2Fmo2Ws7w07MtWpovJMHX11c62rJXPGHZgrfXZMJMUuCGNForDIEv9skIcaCWm75ueGrlrxXHwDetA4xhLgvYjuIXvQ9z7lGgMqSh5zx1Im%2BFFTJjbikmwSV%2BP4XBCE%2B8RXyYVPugR1yIalkhP95VlbJbbqv7G6Vc7Ta%2FQXS2a7opsKZPP5Dubv81K1UctcSfuOCSuthZ3KNuK5mZwmV4%2BJ97&X-Amz-Signature=9b8808d0021bcdbf8ddf097d6b13e88473a1b42e0679174217035722ad1482d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
