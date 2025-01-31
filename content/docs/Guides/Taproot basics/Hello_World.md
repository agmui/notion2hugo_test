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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4BPYSU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa5Q%2FuLT%2BXwcsx9iSsJIRR40uVSt8JYY5v%2BI8cRLOlGQIhAMiCu%2BZ3IubqrLMBLbt30bg5ICw4rHX5H%2B3ZU5lfXsMxKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA47H7Ub9uGdiY%2BAYq3APgTILwGgMq%2B4%2BFsbCZoJfZQ00yF4jAjX5Cgd4icPucPwoAvkp7fPceVIX9v4uxMsjV%2BMDwr6LufZtGZER%2B9t2m5zkQ5pyfraOjj%2FS1sNXgkLB9PrxVMVhyUgYlK%2B4MzW88shtsxc2pSIfbS1RW1i3WBU4MVh4OTz585eSiWcBqQQ5i0JhVZ5lyZ1UTpZ9q1La07qZlsNZvztVlFTaTILw5l07T3Ym9cOhoy7jgJUcNHoW0MgxSobCQMCj1UcC1PYYkc45U0ddg%2FoAZdB1RU4vmfxMGPNPMxoYqRZDeKvUT%2F0fWMzAm3RvtCZhaUj8NO3yDTmmP7U%2BoFym0QtQh7uXURCvBkSEAt5hH6MrHfC%2Feof2D1Gt7HniUAkGRC1SX%2BStcZYGouZ8IeTDNvYJ8Cb%2F90hm%2BwaSz4kWE1YcY3OIjfZe25lIhWNkth0sTxde%2F4MZQxfDO%2F5wWnGzvw7gZ5G%2B78AWgfCi3w%2BwM7zMoxzNmzPGZWNVgIBLyi5JzXOKeUNgPjxUKlKITC0dn8J4wHjoce0WcBtOXIZVbYxUnOMaESGT4%2FqYFRg20JegSqMVpqcqLF0QxWdtIf3nJUc2UxDe1xcbMarupQlI8P0Wfsil7GGyjRfk3RSpSFm%2BkiTC5lfW8BjqkAczxLkDyTd33L%2BL656zbfSMG68QBQKfiLbzyyr5zIKAieTTr0SLQiAZaE%2FpqEycBSNFJZmjENJrq7%2FiPxJUgtmF38ZSAQ0UTR9%2BPu8V1h%2FKQ%2FDUqQ4j6o%2Fpme3%2FJysjRSHQyXBQ47MkAOKHvvgi6LtM7dI2JaR%2FURmSwmdLBcwoDt6f5VQ4XF%2BzhHGiWiyK9jHwePL2E5s4K5qe63rRuf2m9Mrrv&X-Amz-Signature=8eb6460e72ed4e8354b3563badf183842ce323244d9c5d0de0106d6af9904ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4BPYSU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa5Q%2FuLT%2BXwcsx9iSsJIRR40uVSt8JYY5v%2BI8cRLOlGQIhAMiCu%2BZ3IubqrLMBLbt30bg5ICw4rHX5H%2B3ZU5lfXsMxKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA47H7Ub9uGdiY%2BAYq3APgTILwGgMq%2B4%2BFsbCZoJfZQ00yF4jAjX5Cgd4icPucPwoAvkp7fPceVIX9v4uxMsjV%2BMDwr6LufZtGZER%2B9t2m5zkQ5pyfraOjj%2FS1sNXgkLB9PrxVMVhyUgYlK%2B4MzW88shtsxc2pSIfbS1RW1i3WBU4MVh4OTz585eSiWcBqQQ5i0JhVZ5lyZ1UTpZ9q1La07qZlsNZvztVlFTaTILw5l07T3Ym9cOhoy7jgJUcNHoW0MgxSobCQMCj1UcC1PYYkc45U0ddg%2FoAZdB1RU4vmfxMGPNPMxoYqRZDeKvUT%2F0fWMzAm3RvtCZhaUj8NO3yDTmmP7U%2BoFym0QtQh7uXURCvBkSEAt5hH6MrHfC%2Feof2D1Gt7HniUAkGRC1SX%2BStcZYGouZ8IeTDNvYJ8Cb%2F90hm%2BwaSz4kWE1YcY3OIjfZe25lIhWNkth0sTxde%2F4MZQxfDO%2F5wWnGzvw7gZ5G%2B78AWgfCi3w%2BwM7zMoxzNmzPGZWNVgIBLyi5JzXOKeUNgPjxUKlKITC0dn8J4wHjoce0WcBtOXIZVbYxUnOMaESGT4%2FqYFRg20JegSqMVpqcqLF0QxWdtIf3nJUc2UxDe1xcbMarupQlI8P0Wfsil7GGyjRfk3RSpSFm%2BkiTC5lfW8BjqkAczxLkDyTd33L%2BL656zbfSMG68QBQKfiLbzyyr5zIKAieTTr0SLQiAZaE%2FpqEycBSNFJZmjENJrq7%2FiPxJUgtmF38ZSAQ0UTR9%2BPu8V1h%2FKQ%2FDUqQ4j6o%2Fpme3%2FJysjRSHQyXBQ47MkAOKHvvgi6LtM7dI2JaR%2FURmSwmdLBcwoDt6f5VQ4XF%2BzhHGiWiyK9jHwePL2E5s4K5qe63rRuf2m9Mrrv&X-Amz-Signature=409a643c33d54a9f64a92f5e542b513b2fad4cf74376ffc3ce3016eb021c3b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
