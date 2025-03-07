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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364ENRWN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh2f7QJKuSjcuW0ZkLCMH7dc6VuxJ6UcIkna8RJBFmfAiEApOOXOFk8e4EcDXqtZaMgEWXjLX0JuBqRGUucO4MZlpUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOzwlEre7Nhbm4MSqSrcAy%2BCVmBbd94F6MfsDJb%2FwY7Z0omZmH480HOiJ0P6fUs0g7KEshXWbwVxjvuDrLlVfztZQ717FdPUQ9Detu2xsEVZILokndUs85m9g0zQn%2BUwx17Cgv5z5C8gR3%2BJuBbBL6JS26de7eTuLzF%2Fflw3lmg2PDORjmuyboehpFqR8ybCJTb4Ok6dkLj8ym%2FwftKJwKYw8dkSUywoyWRGQLSMr27mj7mtaBPZuzh2s%2BOwgN6I4zdJEfIkvr0drnZVki4C6fgd7y26Ptq3OAg%2BgfacUYIn%2B5OTqv%2ByKYYGL83fFQZ2Jx5n9oz53ZJWnO67VH7GjZRlQM6y9bcgFe%2FHw80cfB%2FbLF6jSjQfKm80%2F7XrTHKHTo%2BYkGrDylCwYWm1XaNxQ6pBNHXB%2FrBdrvPyQeFOYumlAd9l3VKPEKbhHeqngywaI5E9lZB4%2FWDSkORu3L4%2Bl2jD3YTx%2Fjs17EnCzPgmBXkBnlg5Et%2F00VOHLySFTfVMTXOtvn3qvuvHICmJ%2Bp0GIz%2FAni2qEeE621wvCa43N2q7w3GSAQ3Qbe2e1vHgYaaAsZ8NLqKdacZHaSZmVldMkhzyIH%2B2KOBvAIwsSi%2BVmeiavC73Qh%2FjbDXPoEVsjEPRm20dZB3fTEQdH1WmMPqGqr4GOqUBu8Y%2BETqJGzTWHqgPtQ3xyn94hLP6zHo1Sh%2Fn8CXeDYHYlN336fehPabgKa0%2Bw8ylzzWt0D%2FA0L%2Bvvkry7u6q5uSzH9JfC8ZG8s1KwSyAmUVe%2B%2BNrZBMGXz1i%2Bb0s3EW4Zcma3ZZcEFxaTzxbCoPDQjGI9REd7I5smVIRX8YP%2FS1Was9XgPuKXCTpqQtXvB8r2C9qilhVJdUCMnpoXxkUmRc6u2h9&X-Amz-Signature=65522cb0aa96119e7560c4478ae8e016c407f105f1e547691f8fb8521e001897&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364ENRWN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh2f7QJKuSjcuW0ZkLCMH7dc6VuxJ6UcIkna8RJBFmfAiEApOOXOFk8e4EcDXqtZaMgEWXjLX0JuBqRGUucO4MZlpUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOzwlEre7Nhbm4MSqSrcAy%2BCVmBbd94F6MfsDJb%2FwY7Z0omZmH480HOiJ0P6fUs0g7KEshXWbwVxjvuDrLlVfztZQ717FdPUQ9Detu2xsEVZILokndUs85m9g0zQn%2BUwx17Cgv5z5C8gR3%2BJuBbBL6JS26de7eTuLzF%2Fflw3lmg2PDORjmuyboehpFqR8ybCJTb4Ok6dkLj8ym%2FwftKJwKYw8dkSUywoyWRGQLSMr27mj7mtaBPZuzh2s%2BOwgN6I4zdJEfIkvr0drnZVki4C6fgd7y26Ptq3OAg%2BgfacUYIn%2B5OTqv%2ByKYYGL83fFQZ2Jx5n9oz53ZJWnO67VH7GjZRlQM6y9bcgFe%2FHw80cfB%2FbLF6jSjQfKm80%2F7XrTHKHTo%2BYkGrDylCwYWm1XaNxQ6pBNHXB%2FrBdrvPyQeFOYumlAd9l3VKPEKbhHeqngywaI5E9lZB4%2FWDSkORu3L4%2Bl2jD3YTx%2Fjs17EnCzPgmBXkBnlg5Et%2F00VOHLySFTfVMTXOtvn3qvuvHICmJ%2Bp0GIz%2FAni2qEeE621wvCa43N2q7w3GSAQ3Qbe2e1vHgYaaAsZ8NLqKdacZHaSZmVldMkhzyIH%2B2KOBvAIwsSi%2BVmeiavC73Qh%2FjbDXPoEVsjEPRm20dZB3fTEQdH1WmMPqGqr4GOqUBu8Y%2BETqJGzTWHqgPtQ3xyn94hLP6zHo1Sh%2Fn8CXeDYHYlN336fehPabgKa0%2Bw8ylzzWt0D%2FA0L%2Bvvkry7u6q5uSzH9JfC8ZG8s1KwSyAmUVe%2B%2BNrZBMGXz1i%2Bb0s3EW4Zcma3ZZcEFxaTzxbCoPDQjGI9REd7I5smVIRX8YP%2FS1Was9XgPuKXCTpqQtXvB8r2C9qilhVJdUCMnpoXxkUmRc6u2h9&X-Amz-Signature=ac1e5a5ed632bf0ae4963923c77343ff4676d4735e83063172e031e88a2ee1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
