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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTER77O%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8my8TlddqspY1OhSt8ZcPdgQY%2Fyrea9BXSm%2B94FtbPwIhAI8zW6fuoCUK3XaBD8qdt85HfMfFuvRFOlon%2FUF1fPBLKv8DCFgQABoMNjM3NDIzMTgzODA1Igw%2FumxVGTzL7cdsEuoq3AOPLXL89WZB9EPGR1xarVkAKfcTNRVtN2Dta2Hgsw0CXzlftVaPYqW41u82Q%2FqFv6ABknDZuaApcHCamKHOzsUu%2F7cn1j2AkGzG8H%2BfcgueYMFWjJSf0xL%2FSHQxjWCVGeEGp58gm8McJ%2BlZqbsBDIrddIGwu5XJd%2FGUKXd7t%2BnpY7KOzUg4NcokgbtPr%2FINDP14vtMsMKpfVB%2BTijUZKqGDvsHUMwNiW5%2BO0tyPl%2F%2BKfA%2BQ%2FWXzDFnrGbnvL4JgSOVAMOtgBxGmAwD7LkCC8xaCzXPNsGdU%2BHWZodWh761slQR4dzl6Vzt8iAlQCZdwbMGNsl1wWH15wGXy8ZdvNjspR4y%2FdF3QxrkkwoZl1jh19l78X8ivf%2BG9oMr%2FOz8aENXsTYtnociQ5Cqmo4K1Pg8mCwcxrEwlAH73DR6x1ckM2vV3RMEMs7BcUC6cLYYLqFK2KPT7rRNZl4Csrj1HVDziRukjAK%2BjpgH1CipZWzQrxpKrZRHbDm%2FOV6kzc68kPCNCLdFT7xwoc98KWXBVfZ0oy%2B4wn5rJ4NpznT5QJu4llodKI2XQO4Abp5%2Bew3KsL0rvDpsk62%2B6NaU33vlT7pfe5onwnxU0it0rp9en8nPmt4Ob0gllRQE5q1ryWTCZ682%2FBjqkAQsSDpT7c5EVmeQQ0%2BqSeTqzRWfoxlW5pD0iSHGE89FI5%2BWuVo9MdOX0%2BDhrlkRneMmRElag9kIo4N1f%2BpJ5yYaqyshd%2BTYk4g3iTmM9o0rlTR36EcgQmGYVDg7qblxFKvx26li287HQqjRFAv0SfBbhy%2Fin6SCPLWWhS7K0CQnP5CqF5xgxPVDUEWYuIEqABLAuLPnyLQFA%2FGG2M7Lzf4gEnqPL&X-Amz-Signature=e893f45886d5e0fcce8de6976148396e2fd29c3c5786ff407d285d812b3b3b55&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTER77O%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8my8TlddqspY1OhSt8ZcPdgQY%2Fyrea9BXSm%2B94FtbPwIhAI8zW6fuoCUK3XaBD8qdt85HfMfFuvRFOlon%2FUF1fPBLKv8DCFgQABoMNjM3NDIzMTgzODA1Igw%2FumxVGTzL7cdsEuoq3AOPLXL89WZB9EPGR1xarVkAKfcTNRVtN2Dta2Hgsw0CXzlftVaPYqW41u82Q%2FqFv6ABknDZuaApcHCamKHOzsUu%2F7cn1j2AkGzG8H%2BfcgueYMFWjJSf0xL%2FSHQxjWCVGeEGp58gm8McJ%2BlZqbsBDIrddIGwu5XJd%2FGUKXd7t%2BnpY7KOzUg4NcokgbtPr%2FINDP14vtMsMKpfVB%2BTijUZKqGDvsHUMwNiW5%2BO0tyPl%2F%2BKfA%2BQ%2FWXzDFnrGbnvL4JgSOVAMOtgBxGmAwD7LkCC8xaCzXPNsGdU%2BHWZodWh761slQR4dzl6Vzt8iAlQCZdwbMGNsl1wWH15wGXy8ZdvNjspR4y%2FdF3QxrkkwoZl1jh19l78X8ivf%2BG9oMr%2FOz8aENXsTYtnociQ5Cqmo4K1Pg8mCwcxrEwlAH73DR6x1ckM2vV3RMEMs7BcUC6cLYYLqFK2KPT7rRNZl4Csrj1HVDziRukjAK%2BjpgH1CipZWzQrxpKrZRHbDm%2FOV6kzc68kPCNCLdFT7xwoc98KWXBVfZ0oy%2B4wn5rJ4NpznT5QJu4llodKI2XQO4Abp5%2Bew3KsL0rvDpsk62%2B6NaU33vlT7pfe5onwnxU0it0rp9en8nPmt4Ob0gllRQE5q1ryWTCZ682%2FBjqkAQsSDpT7c5EVmeQQ0%2BqSeTqzRWfoxlW5pD0iSHGE89FI5%2BWuVo9MdOX0%2BDhrlkRneMmRElag9kIo4N1f%2BpJ5yYaqyshd%2BTYk4g3iTmM9o0rlTR36EcgQmGYVDg7qblxFKvx26li287HQqjRFAv0SfBbhy%2Fin6SCPLWWhS7K0CQnP5CqF5xgxPVDUEWYuIEqABLAuLPnyLQFA%2FGG2M7Lzf4gEnqPL&X-Amz-Signature=17b0e8bb20f939b2db527c32afdf1012e3aa7146739177f7b811983f23a00a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
