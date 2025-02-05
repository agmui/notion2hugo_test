---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHRNNJ6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHXm1Wh3d3%2B%2B5aKUyxeIM6W44o6uipEndSj%2BGyoCK2aOAiEA%2F6t%2FwNRbAjp8S%2F%2FK9gCmUMBlHx1jya%2FvK4YPGL%2FHfsYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ1C4jEVMR7sGWcgBCrcA7Wrb0X1wiFUI2h2k6l3gpHn%2B6aoEAQK01rqb72zPDvg1puuqJZmTvXxGvHtSJ1emjLgZzJJ%2FozNcUbfEgWb%2FZIE4mqP6BktYKzd170veaHiY6WpuwhmP32CLfOYZib55MrEnT8iGoorJOKsmasQ8W43dDA3JHI4YzfkeIbhEqVaclBIaKEfqCd8weOSTVqbA%2FvMHLnGf0qQuvgVKftpxbvn9YRni5Mlb650Wr6f2sIdLdTTYnCDkV%2BtlS5bO%2F5xcpyNVMRmu9GdB26LinapqFTKrJrB0B5OUJ9yeL8l3Nu35Uz1hIfGpEC8O384Ka49iIJktt55FKm%2FI95NDgfo5G%2BDvNZMe8kvxYdSUXF4xdua87XW43U7VJyR%2FeCRsnWjjSsU5v7nOMA5spAaoVN4%2FoL%2BniDfTd2s%2Bs5IdZ9lmjpeBSWX7kQwoEz6fElO1KZZ%2Bbs%2BiT9%2Fw%2BnZ0lnaK1MmGv6npCD4oW8T9Dpw8U6STsvaCaeKThXH0hxQTOGhuVhnSkIJH147IO%2BJWt9FXgO%2B0ne9FHLxwpOsMaorxCdsDuYe%2Be%2BVnaV99rRpsqrPdduXTr7Taw3q9E5tlrTBYBvcF4QmO6cf%2F3tQIn7mhczs%2FmEdYFyJ3dzO1FHPGDQlMIzPir0GOqUB5jFDHt%2Bdwi6pCIdmA5nVSSSt86p5NtmGJtFpDeLB1lcCAxXmjx7v4RjrHsxd9vKKpPNHA8tKC0VLoQSf%2FbwsqE15os%2F1wuTMsqVLhz8B2itkRRX5Ov%2B3p8%2B87wHiAtWIWR%2FoSs1qzmpDv4unh9DY%2FvczxqurUQx%2BrlATQu31fS%2Bz1UNE3mWeMxK%2F7nvAJWKRP65dqFHUsw42DZNOz6nYhVX624eQ&X-Amz-Signature=ddc24e063912ba47c085e16c3d4a67c9be52fc020180c8815b205b8403f34a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHRNNJ6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHXm1Wh3d3%2B%2B5aKUyxeIM6W44o6uipEndSj%2BGyoCK2aOAiEA%2F6t%2FwNRbAjp8S%2F%2FK9gCmUMBlHx1jya%2FvK4YPGL%2FHfsYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ1C4jEVMR7sGWcgBCrcA7Wrb0X1wiFUI2h2k6l3gpHn%2B6aoEAQK01rqb72zPDvg1puuqJZmTvXxGvHtSJ1emjLgZzJJ%2FozNcUbfEgWb%2FZIE4mqP6BktYKzd170veaHiY6WpuwhmP32CLfOYZib55MrEnT8iGoorJOKsmasQ8W43dDA3JHI4YzfkeIbhEqVaclBIaKEfqCd8weOSTVqbA%2FvMHLnGf0qQuvgVKftpxbvn9YRni5Mlb650Wr6f2sIdLdTTYnCDkV%2BtlS5bO%2F5xcpyNVMRmu9GdB26LinapqFTKrJrB0B5OUJ9yeL8l3Nu35Uz1hIfGpEC8O384Ka49iIJktt55FKm%2FI95NDgfo5G%2BDvNZMe8kvxYdSUXF4xdua87XW43U7VJyR%2FeCRsnWjjSsU5v7nOMA5spAaoVN4%2FoL%2BniDfTd2s%2Bs5IdZ9lmjpeBSWX7kQwoEz6fElO1KZZ%2Bbs%2BiT9%2Fw%2BnZ0lnaK1MmGv6npCD4oW8T9Dpw8U6STsvaCaeKThXH0hxQTOGhuVhnSkIJH147IO%2BJWt9FXgO%2B0ne9FHLxwpOsMaorxCdsDuYe%2Be%2BVnaV99rRpsqrPdduXTr7Taw3q9E5tlrTBYBvcF4QmO6cf%2F3tQIn7mhczs%2FmEdYFyJ3dzO1FHPGDQlMIzPir0GOqUB5jFDHt%2Bdwi6pCIdmA5nVSSSt86p5NtmGJtFpDeLB1lcCAxXmjx7v4RjrHsxd9vKKpPNHA8tKC0VLoQSf%2FbwsqE15os%2F1wuTMsqVLhz8B2itkRRX5Ov%2B3p8%2B87wHiAtWIWR%2FoSs1qzmpDv4unh9DY%2FvczxqurUQx%2BrlATQu31fS%2Bz1UNE3mWeMxK%2F7nvAJWKRP65dqFHUsw42DZNOz6nYhVX624eQ&X-Amz-Signature=d8c23b9a9693841d3a66ac0156ca2d408fe12621dc2a130f07bf6dac508a908b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
