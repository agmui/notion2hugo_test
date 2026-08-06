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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRQO3SE%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFT4lwWIw3YKKhlutwXIaHy6J3eDpCK9oYgg%2FmzvLFzpAiEAuvTRSc3%2Bh6xwKdUOgMsS9ZZouScqfT4swI%2B%2BbXkTrFAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP6r22simpPxVIk0PyrcA2X9rJYsOzYT%2B9xjYIO9faq5dxeDzA3n3YSfyE%2BXRIFTsZ4hXDfk5DXjtFx%2B7LaGdLSbJHTd37p6SyjtgsMxiyz209%2FiZ4X0b3kMtUI%2Bsqix9ntzCPPKIU1sq51JakePLPFtJZL6vJBQuEBOnDloxx2BuUKEWtOkTiAKptwAKyxQLKKonkkqS%2B%2B5hiTcZ0l52JjVy1E33MKIYIvT3kLjwNuH4rG0QC0wlpLtu5zWE%2BT4U%2FKL5IMnV5ljy%2FUCh23llqqz0OBgmZNymbqqHgWZbGt92JIz42W3MvNMpY6Yf1mJnkGNb4fCCydxqqlEmEAEMkTZvaw7XSgX5UWMim2HhaQIgGGstmyacm%2BO4n10oxH9IG%2BuKFyhkVmyNQ%2B%2FngLkBBWq9qFBYt%2Bz8Bac%2F0sSNYDjrLM5QiJIiCE8bcZaOPGGvajqNfVNDDhxkSHMihE%2FAqgANDu9QySFAr%2B6EDDWEI3oz3rOheWYEyH%2B7DbxKnbB9GdrXPg5%2FKYRIWj9%2Fs56oKO3VeLSYhiIowOsNL6wEJuJLd5dZriGw2CFbhYP5X6pgCKO77jQ7HTtliNs5ayvF3G85hLD2HBawM%2BIexl3jlTiV0PVPkDJeCNlCCfi03pp%2FY3m%2FX0MCXyLfrSKMPPTz9MGOqUBCkWA5rSlKeuS1Pg%2FjncfohuIOqlJaglz%2FpL7GOKp3WX25hfboEfDvXC8d5J613zLUJaYw6CUdG1dBtPsTG0tSauwYHYalg7IalMTeHGjTC1I%2Fovn2cW7MUyC1X5SmJ5siiMi05%2FFxKPbzrj%2B%2FhGYa%2BMDZsVPVnwrXMbd5kwzk%2B42DyfzHtf4e9cOXVMUzHyf2N8JJD8tMqyf%2FHPE8mN417H9gSxW&X-Amz-Signature=d74cb2e28076de96c4e364f19e71449d1073b2113894f02b3952ff1b78631ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRQO3SE%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFT4lwWIw3YKKhlutwXIaHy6J3eDpCK9oYgg%2FmzvLFzpAiEAuvTRSc3%2Bh6xwKdUOgMsS9ZZouScqfT4swI%2B%2BbXkTrFAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP6r22simpPxVIk0PyrcA2X9rJYsOzYT%2B9xjYIO9faq5dxeDzA3n3YSfyE%2BXRIFTsZ4hXDfk5DXjtFx%2B7LaGdLSbJHTd37p6SyjtgsMxiyz209%2FiZ4X0b3kMtUI%2Bsqix9ntzCPPKIU1sq51JakePLPFtJZL6vJBQuEBOnDloxx2BuUKEWtOkTiAKptwAKyxQLKKonkkqS%2B%2B5hiTcZ0l52JjVy1E33MKIYIvT3kLjwNuH4rG0QC0wlpLtu5zWE%2BT4U%2FKL5IMnV5ljy%2FUCh23llqqz0OBgmZNymbqqHgWZbGt92JIz42W3MvNMpY6Yf1mJnkGNb4fCCydxqqlEmEAEMkTZvaw7XSgX5UWMim2HhaQIgGGstmyacm%2BO4n10oxH9IG%2BuKFyhkVmyNQ%2B%2FngLkBBWq9qFBYt%2Bz8Bac%2F0sSNYDjrLM5QiJIiCE8bcZaOPGGvajqNfVNDDhxkSHMihE%2FAqgANDu9QySFAr%2B6EDDWEI3oz3rOheWYEyH%2B7DbxKnbB9GdrXPg5%2FKYRIWj9%2Fs56oKO3VeLSYhiIowOsNL6wEJuJLd5dZriGw2CFbhYP5X6pgCKO77jQ7HTtliNs5ayvF3G85hLD2HBawM%2BIexl3jlTiV0PVPkDJeCNlCCfi03pp%2FY3m%2FX0MCXyLfrSKMPPTz9MGOqUBCkWA5rSlKeuS1Pg%2FjncfohuIOqlJaglz%2FpL7GOKp3WX25hfboEfDvXC8d5J613zLUJaYw6CUdG1dBtPsTG0tSauwYHYalg7IalMTeHGjTC1I%2Fovn2cW7MUyC1X5SmJ5siiMi05%2FFxKPbzrj%2B%2FhGYa%2BMDZsVPVnwrXMbd5kwzk%2B42DyfzHtf4e9cOXVMUzHyf2N8JJD8tMqyf%2FHPE8mN417H9gSxW&X-Amz-Signature=8249db3035a5ba8efc825f9cc7b084d8945281991818774817ed1cd7d499b179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
