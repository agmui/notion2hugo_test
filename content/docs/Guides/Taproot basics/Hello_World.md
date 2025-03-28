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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYKANGR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD642oHCpt992YPZC8hCvurhz98B3VTRlvABCryFCB%2BzQIgWaqvMddFUoCy%2FusFnudHTnEVzW6%2FM8F0AP0F9N4AmTsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDORnZZIH5wX1dk4KcyrcA7wgEAdB%2Bx43QHwxMhjZENWvcb32xU5VEVH2iJ1%2BMX183e79XffbvLwQHH6yrKEVgZpnDnTIqYL0w5XEAf%2FEso%2FPr0oogw7DTSBID8obItHONSM61%2B56AOwAxhtUVtSCiSgyOROyP30aU%2FS6kl%2BKx3fGf73TNucbeW%2FKYOdSlHNDWIEhaQJcm%2BXCOdVVpb7%2BK39svE2j1xK4%2BqXPW%2F%2BfF%2B%2FIEXyHHNqh2Hu9wo13MmhdZcV1pU5W8JD8mLaxwX5sdQJ%2FMqgkX8tQvWfJH1YKcqyD%2Fgdz6PTJLA1wsuPPdF3rVOCczAQh3C%2Bmv2V%2BduQ70DiO8yQih7BliYflDgfHs3J2d5S2nhsg9ZQ20NKZdfg3rlUmdlsoHZFJCsKKbkuM53h8yUetKljs7acXRis0h5Bk7IaRMpgXo49wuaEnQ1n%2FPVmy4w6rvUiyjd7gQzZlxSDmylZha52%2BtSe4Aj0TOvXLoe5eN1nxkyMsnpLIrnHE4OwNyBFOFeC2Y%2BLgcHB1HBebgIKjP4LiOx4rJ%2Fgjkgdsqmav2TIKhHHDVhBvkcV1jDv09iyVbaTxYg5uURgvM5nK5r3NnRNeD%2Bq9Uf%2FoZHsOjP0ttMDUIVfnUnEmx%2FdMju8e%2FAZk3wII1qz3MMD3l78GOqUBEmgYL%2BiGmzlDBrhFT3ZJWjJUkGvTs1%2BCq7ZS7DVU1EoXBX17xZpWQnMXjeXXgEiY0FUR8BW0z3WIZylEkeZYgPj9ctd95mBeR2AvAUQjF01kXrjuZDztnRHZoDJg6HsUqFA2z2nluDL0q3f4Lj2v5fElCmP9tiXjDcWCZB7MNeXS%2BC8R0kIXUgUfU83ui10W9rXAbEfttml51l4Ib2Om1INYXi4z&X-Amz-Signature=932f96e68758fd6fe7c6985383c17aa46a257186904b3412e1e212e7ccbaf970&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYKANGR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD642oHCpt992YPZC8hCvurhz98B3VTRlvABCryFCB%2BzQIgWaqvMddFUoCy%2FusFnudHTnEVzW6%2FM8F0AP0F9N4AmTsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDORnZZIH5wX1dk4KcyrcA7wgEAdB%2Bx43QHwxMhjZENWvcb32xU5VEVH2iJ1%2BMX183e79XffbvLwQHH6yrKEVgZpnDnTIqYL0w5XEAf%2FEso%2FPr0oogw7DTSBID8obItHONSM61%2B56AOwAxhtUVtSCiSgyOROyP30aU%2FS6kl%2BKx3fGf73TNucbeW%2FKYOdSlHNDWIEhaQJcm%2BXCOdVVpb7%2BK39svE2j1xK4%2BqXPW%2F%2BfF%2B%2FIEXyHHNqh2Hu9wo13MmhdZcV1pU5W8JD8mLaxwX5sdQJ%2FMqgkX8tQvWfJH1YKcqyD%2Fgdz6PTJLA1wsuPPdF3rVOCczAQh3C%2Bmv2V%2BduQ70DiO8yQih7BliYflDgfHs3J2d5S2nhsg9ZQ20NKZdfg3rlUmdlsoHZFJCsKKbkuM53h8yUetKljs7acXRis0h5Bk7IaRMpgXo49wuaEnQ1n%2FPVmy4w6rvUiyjd7gQzZlxSDmylZha52%2BtSe4Aj0TOvXLoe5eN1nxkyMsnpLIrnHE4OwNyBFOFeC2Y%2BLgcHB1HBebgIKjP4LiOx4rJ%2Fgjkgdsqmav2TIKhHHDVhBvkcV1jDv09iyVbaTxYg5uURgvM5nK5r3NnRNeD%2Bq9Uf%2FoZHsOjP0ttMDUIVfnUnEmx%2FdMju8e%2FAZk3wII1qz3MMD3l78GOqUBEmgYL%2BiGmzlDBrhFT3ZJWjJUkGvTs1%2BCq7ZS7DVU1EoXBX17xZpWQnMXjeXXgEiY0FUR8BW0z3WIZylEkeZYgPj9ctd95mBeR2AvAUQjF01kXrjuZDztnRHZoDJg6HsUqFA2z2nluDL0q3f4Lj2v5fElCmP9tiXjDcWCZB7MNeXS%2BC8R0kIXUgUfU83ui10W9rXAbEfttml51l4Ib2Om1INYXi4z&X-Amz-Signature=0f2a320e35c667bb1dbb271c3c1216c92e305065f7e48db84f2fe40ef0af63b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
