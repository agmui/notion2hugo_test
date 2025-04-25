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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKGVAAJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0shV4%2FZGfG3IJMc56Yv%2BNq4m8YRjh9ECL83zpEmZRlAiEA%2FTujJsQuAUNc%2Bo44AznZNj7SqzsHze2nxU9UEMpQq3Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDM7rlpKUDXwmMr2SCrcA2YIHvKfHrwuwbdM4r5YdR1RBKiDlIiVIL1m0dS%2BZhP4Z1Je60u9AuDuXOOQnbWVY3O%2FriViR6TnzRVegWzLdw1m%2FS8177arL0q4XIS3plpDUMWYDCkGz16sLy%2FXiqUeenxli1EsIEIqS%2BQksJ9b8mCkY6JixHztOLHg39%2FoeX%2FNATGZFZOkT1k%2FcDkAvL0ouk1xloP7f20OLZ%2FbYhthYgYyrv9W0PnjP62uJAluwThNuvhSLz9Rlu2ypcX3%2FV172jPWTXEsmG6rfDMVOSKF4TjJTkftuQAd7XU%2FDr7363a%2Fl51sAS%2Bc%2BVmRdedbMe138LKyLty8VfF5SgkmBX3pMJG52BVliopvW3BSzMZw1PNb8xQnzx8zH1uq5LgU1gaK7nHZjPP9PJ4LcAvZ%2Fux70jtaF0A0SP31KrczkXEaiWZLALkTprJl9yAzT7ET%2FtUt8bIK%2BBimfsJm7eJ5kcHnRbTM1B7WYJLVL8zahlmBWNKz8FugG5XM6Bm1BrWwSPsWjIGB8JVAwEnTwoNX%2Fnqhj3R%2F3w5AAXGiAeAG1NycAfq44ehyNmmnDXcXutMYohYjdY5nsNaviO1YsuxcE5pG%2FPt2o4IU6Pp5sSAzrx%2B%2BDoUUvy9xHePBkCQa8XDRMJWZrsAGOqUBCUZUHaM48p9zpUi5OcSKifEY9G6vc5lzSSRvdgAESwM9TsBGAiNx4fR55Tb%2FbaU7nCcAt84DarKLXhFTP4cfVsfKH5rSeLetMBQkxLd9g1rKNqVemVVHRRELRt6FC5FRVcUUshwW0Pp6sX%2BamL7Lb2muY6WncKP%2FIAcZ3HcWTvLaIhqfgbuVlW0wrSDDuqSRST4fauFOt4YivBKBTh5RNZixWI1k&X-Amz-Signature=1acdf7856ad7f4e25c78aa0f8e78fd9da519eb8e08d7af746eaf8eed2ae0426a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKGVAAJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0shV4%2FZGfG3IJMc56Yv%2BNq4m8YRjh9ECL83zpEmZRlAiEA%2FTujJsQuAUNc%2Bo44AznZNj7SqzsHze2nxU9UEMpQq3Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDM7rlpKUDXwmMr2SCrcA2YIHvKfHrwuwbdM4r5YdR1RBKiDlIiVIL1m0dS%2BZhP4Z1Je60u9AuDuXOOQnbWVY3O%2FriViR6TnzRVegWzLdw1m%2FS8177arL0q4XIS3plpDUMWYDCkGz16sLy%2FXiqUeenxli1EsIEIqS%2BQksJ9b8mCkY6JixHztOLHg39%2FoeX%2FNATGZFZOkT1k%2FcDkAvL0ouk1xloP7f20OLZ%2FbYhthYgYyrv9W0PnjP62uJAluwThNuvhSLz9Rlu2ypcX3%2FV172jPWTXEsmG6rfDMVOSKF4TjJTkftuQAd7XU%2FDr7363a%2Fl51sAS%2Bc%2BVmRdedbMe138LKyLty8VfF5SgkmBX3pMJG52BVliopvW3BSzMZw1PNb8xQnzx8zH1uq5LgU1gaK7nHZjPP9PJ4LcAvZ%2Fux70jtaF0A0SP31KrczkXEaiWZLALkTprJl9yAzT7ET%2FtUt8bIK%2BBimfsJm7eJ5kcHnRbTM1B7WYJLVL8zahlmBWNKz8FugG5XM6Bm1BrWwSPsWjIGB8JVAwEnTwoNX%2Fnqhj3R%2F3w5AAXGiAeAG1NycAfq44ehyNmmnDXcXutMYohYjdY5nsNaviO1YsuxcE5pG%2FPt2o4IU6Pp5sSAzrx%2B%2BDoUUvy9xHePBkCQa8XDRMJWZrsAGOqUBCUZUHaM48p9zpUi5OcSKifEY9G6vc5lzSSRvdgAESwM9TsBGAiNx4fR55Tb%2FbaU7nCcAt84DarKLXhFTP4cfVsfKH5rSeLetMBQkxLd9g1rKNqVemVVHRRELRt6FC5FRVcUUshwW0Pp6sX%2BamL7Lb2muY6WncKP%2FIAcZ3HcWTvLaIhqfgbuVlW0wrSDDuqSRST4fauFOt4YivBKBTh5RNZixWI1k&X-Amz-Signature=bceac2aab5555e57d8f94968f6e5ef5bb87b58b0c989525f660240ace7daaecf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
