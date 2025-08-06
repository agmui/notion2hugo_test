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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TGG3JR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD44KRHQmbHGEx0NJHTjotc6LgnwMEzsrXBwmSVQZvjUgIgSNWTK3jGMiGZSRMZy9CTrBecgKLKzzCJDDjy1PSxQgYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGgvpOVbWuwoYr6rBCrcA1jfO3v1tJijyk3qrgLOCqC2cfMK3Z6Rh0TLFQmOUfPThkLz4ZWLz7DNrR469BzgJJNLuz%2FCtrBbMj3M5FPcFfGW2CYpaqju179KGa2w%2BcnjT8OoH8cojgHmkWn7FuPKSI6gyqrbe6BEZiA%2BBwIGbGnZFIFnxoii3hOVPBfX8jhc%2FVjy38m7ZjxqNyiWrc1RiC1UEYjPOwlyjOU9aIbDBz%2FNcwNUoRKHCU0NnmeqNCYTvCd8Tgf60oa9JLpdeyfBMbPcQgYY7%2B%2BrblSF973Nd8%2B6JCXNdyTTWIiBIDgZ1SuOpvGw8zjnYVi4CQ8PeOU8S4JQIy2z2%2FOcY8y1OnOV3yxKLp3ggHcLGQ02esIJoFegkw9wdDnlmIlyvFOm2BVLD1Xy%2FzEWi546J6fklS64lZ%2Bzj8hn780L8O%2BC1Nk7Q2%2F9U7xAI5d8mgq8iPg5H%2FVL4MKzZxXPDMVHbSvIH4JS6x%2FfgJ3mnuhgO5cvigTeDJbOD%2BIfRRQBtFqkGdBYJcQ%2FW9QkbG9CDGeOrESy629ZL7z8zUsKalnUGR3fV250auxVSpE3z512TUDghs9FSysla1jxXT3CbiZKkkyE1r%2FDFbH%2BoPjo%2BH13LpMAI9N1A5oHYhoG3L1ZMwjCB8FrMPXqzsQGOqUBew%2BU32MZ3HT8YchngVfJQwttT%2Bcx2dIEA3HKjN5EyA3Cpf0kzPAcQ%2FGZXAfqZCHwXKDR1CElbyzZvcPgd5OO0s0BruMC4fm4GQOFTNFsbiVZcEQjXZV43hVKwh%2BKtDxKaBg0eE1hi5r9ZK9TbQX63T7JY%2Bx4eF6zp4yads2z0Yk%2B2BeZG0AzLG7Nm8wwUk7hbwoxp19Omyh%2BwCcWzukb7CpYltaK&X-Amz-Signature=550a7c7841ad1eeafe84fb3539efc34504dd1d47624f999bee6ee9a614890501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TGG3JR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD44KRHQmbHGEx0NJHTjotc6LgnwMEzsrXBwmSVQZvjUgIgSNWTK3jGMiGZSRMZy9CTrBecgKLKzzCJDDjy1PSxQgYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGgvpOVbWuwoYr6rBCrcA1jfO3v1tJijyk3qrgLOCqC2cfMK3Z6Rh0TLFQmOUfPThkLz4ZWLz7DNrR469BzgJJNLuz%2FCtrBbMj3M5FPcFfGW2CYpaqju179KGa2w%2BcnjT8OoH8cojgHmkWn7FuPKSI6gyqrbe6BEZiA%2BBwIGbGnZFIFnxoii3hOVPBfX8jhc%2FVjy38m7ZjxqNyiWrc1RiC1UEYjPOwlyjOU9aIbDBz%2FNcwNUoRKHCU0NnmeqNCYTvCd8Tgf60oa9JLpdeyfBMbPcQgYY7%2B%2BrblSF973Nd8%2B6JCXNdyTTWIiBIDgZ1SuOpvGw8zjnYVi4CQ8PeOU8S4JQIy2z2%2FOcY8y1OnOV3yxKLp3ggHcLGQ02esIJoFegkw9wdDnlmIlyvFOm2BVLD1Xy%2FzEWi546J6fklS64lZ%2Bzj8hn780L8O%2BC1Nk7Q2%2F9U7xAI5d8mgq8iPg5H%2FVL4MKzZxXPDMVHbSvIH4JS6x%2FfgJ3mnuhgO5cvigTeDJbOD%2BIfRRQBtFqkGdBYJcQ%2FW9QkbG9CDGeOrESy629ZL7z8zUsKalnUGR3fV250auxVSpE3z512TUDghs9FSysla1jxXT3CbiZKkkyE1r%2FDFbH%2BoPjo%2BH13LpMAI9N1A5oHYhoG3L1ZMwjCB8FrMPXqzsQGOqUBew%2BU32MZ3HT8YchngVfJQwttT%2Bcx2dIEA3HKjN5EyA3Cpf0kzPAcQ%2FGZXAfqZCHwXKDR1CElbyzZvcPgd5OO0s0BruMC4fm4GQOFTNFsbiVZcEQjXZV43hVKwh%2BKtDxKaBg0eE1hi5r9ZK9TbQX63T7JY%2Bx4eF6zp4yads2z0Yk%2B2BeZG0AzLG7Nm8wwUk7hbwoxp19Omyh%2BwCcWzukb7CpYltaK&X-Amz-Signature=14687d600fa22743ddc02fc9c0b47a7cf036624623f4d5a2a9481349f84ced29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
