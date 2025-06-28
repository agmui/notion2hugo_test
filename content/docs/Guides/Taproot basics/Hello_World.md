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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWFR3H3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD40Wx0U8dCGxjoCtIxsz4bE2k9vJDN8%2FWZa6hCRlv7xgIhAP4TeR9Db%2FZvKq1b6PeEQFzi45dJHxjT%2Fzo3GYF5v2pNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH5ISkJ5q02fQMKkoq3AO3DGt81CdJDJyvKZX7FrNqlEjOACrYWqRTJMAvTCYcxOG3NASol6q8cfb0bdbBRq1yL4aS8UgkM34KJzgX8UfUmYFhdKvTcK6q2ZvaIVETgQG2OOSH0XCv7t%2BoTc5408bisKfIDktCtlgKRarZWVh4i19IzElxPCT5jmHiv85cZfEsSBWcUh6UoT4ZXejb8MWK8ZtsTMmpHx0JQZCNIbeJw2LoL%2BOyRa1Q84p4eUonFH11Nc8gTayA0MpWWOhyo%2FTbAtsYOSFTs3O0H5D4IGhlPFNEy6Z%2F5YP2ORc8kclc8NJfgs6hK15LCQgyoSBq%2Ba5kRjkKvIh6AOxnAfu1tx9%2BWFClSAOfbuDPlIbOi1bHqgfF2Kwtr6MxWbS%2BIOZ1kNQ%2BchTClEOQ5QgkaffasCGmt2pXjUP9GdwWN3%2Bj8fBWTUxnk%2B2dONbDKAwP0Zf%2F8YtsE46UqKJxrMBVayEoAUGjJ5dGzF0eiagw7wHxAvwI8nq39aoNplEt%2FKpPfDkFxBU09QfFGtDX5iu%2FcjR8ibPNpNxm26vmTPEcVHrdoKtJIAdMAqEe0CLbSwJxrxJzbcm70d9AIurTVWHfhkN5yaT3T3jZ0KvBVZzdfP%2FNbm%2Be7eKl%2Bc3OMt0gd9UR7DDFkP%2FCBjqkAYP7v7noomn0WwIsVMNv7ZucNT8H3NdbPnR%2BeKwaG72CDikKtnvj31yRA7W3JSOYwHpp7VXnGTLPFz8Ck%2B0%2F%2FcimXZmekDs%2FscFADWCA7f5nKXtoAto8KFWe5qQvcbXBvjn07z13wXwbC8dn4HBdyFyiIlMfenGZCK5eYtKtoTEtI9lTctpgBmSLHhGJxnpMuHq%2FAQc2qKscg7ijNtvaH89tXnd6&X-Amz-Signature=5bd416ebe91850fbeb3d5daeca5a5a219fe51a89512ef226238a04213808a70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWFR3H3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD40Wx0U8dCGxjoCtIxsz4bE2k9vJDN8%2FWZa6hCRlv7xgIhAP4TeR9Db%2FZvKq1b6PeEQFzi45dJHxjT%2Fzo3GYF5v2pNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH5ISkJ5q02fQMKkoq3AO3DGt81CdJDJyvKZX7FrNqlEjOACrYWqRTJMAvTCYcxOG3NASol6q8cfb0bdbBRq1yL4aS8UgkM34KJzgX8UfUmYFhdKvTcK6q2ZvaIVETgQG2OOSH0XCv7t%2BoTc5408bisKfIDktCtlgKRarZWVh4i19IzElxPCT5jmHiv85cZfEsSBWcUh6UoT4ZXejb8MWK8ZtsTMmpHx0JQZCNIbeJw2LoL%2BOyRa1Q84p4eUonFH11Nc8gTayA0MpWWOhyo%2FTbAtsYOSFTs3O0H5D4IGhlPFNEy6Z%2F5YP2ORc8kclc8NJfgs6hK15LCQgyoSBq%2Ba5kRjkKvIh6AOxnAfu1tx9%2BWFClSAOfbuDPlIbOi1bHqgfF2Kwtr6MxWbS%2BIOZ1kNQ%2BchTClEOQ5QgkaffasCGmt2pXjUP9GdwWN3%2Bj8fBWTUxnk%2B2dONbDKAwP0Zf%2F8YtsE46UqKJxrMBVayEoAUGjJ5dGzF0eiagw7wHxAvwI8nq39aoNplEt%2FKpPfDkFxBU09QfFGtDX5iu%2FcjR8ibPNpNxm26vmTPEcVHrdoKtJIAdMAqEe0CLbSwJxrxJzbcm70d9AIurTVWHfhkN5yaT3T3jZ0KvBVZzdfP%2FNbm%2Be7eKl%2Bc3OMt0gd9UR7DDFkP%2FCBjqkAYP7v7noomn0WwIsVMNv7ZucNT8H3NdbPnR%2BeKwaG72CDikKtnvj31yRA7W3JSOYwHpp7VXnGTLPFz8Ck%2B0%2F%2FcimXZmekDs%2FscFADWCA7f5nKXtoAto8KFWe5qQvcbXBvjn07z13wXwbC8dn4HBdyFyiIlMfenGZCK5eYtKtoTEtI9lTctpgBmSLHhGJxnpMuHq%2FAQc2qKscg7ijNtvaH89tXnd6&X-Amz-Signature=617ac48cfad96449a5be8275a0b1eac2e7de54f328f2c91215b7e9275128e564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
