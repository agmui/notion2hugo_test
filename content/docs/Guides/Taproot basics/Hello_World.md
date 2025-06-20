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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWYCZU4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEskApujwXIekohGjOo%2FzyV5GF186u8%2B%2FKTF92byydu9AiBnjdN8zPBCbS00MZGtc%2BU8yzfY0z6a0Hw6eiwH0%2Bb1JCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FCa68dnavXl7XqzKtwDghmq3kWD8Zml2A1SThUkaKdbbIMa%2BdSfJFMUsghs4j93QN08qRlAFnP%2BmYooiwyqsPRkiImxKqQyCCbRT%2BwXZv5xaoVx%2BPe3d%2FNBK85ZBWh6jCtcXWVukrm20iUyYNe%2F2BZrOWBATS0xBWTvrIqgmRnfS79pM3rYk8SaebmpGqvCDwRYvD2Ixr6XHv80yHC3JFPTC26jlf2dJxmFg46v%2BCoujYbZZr5M75Z%2B6rkoTg5XO%2BilNaSH8zBtC0kMhRztnZMwUqcxo7x8zvDar%2BT9On%2FdMLOs3hqyYJoxUYU88m%2B9IASQgDUlvQVyOEbBysQxjTY4SBbuQChM3M3%2FzS6N4cqiuiFWHBiJoHuEw6nd6IiHQQimx2S8oIjQikQsdxpk6xdlZAJA52eP0fMyAMW5mmfEigVO4JfxfjkO9MKO3RNyZ%2FtkFdLGrqc%2F5Z%2FDImWzEE07ncijnakpGm%2BDsTsmI8AVPImO79cQecMpTohDQ66ugKR2A6KyjSAJg0FG4qKGmNov7S4zGSTyMgq0y1eHk%2FbPvjtpRIaYJMz6dIsP%2BM2bOLS6CkMcfkiQx4SOGUxddDDcj6WCK%2Fi5xiOq57Pm4EHavUrupv5rvA7PkPlyiqhzFZnFrn6os%2F%2FG0PIwmqXVwgY6pgGrudWU08InbxqDhwQ7%2B9WVXSSXODEZsCHrCukDQ7XJSpxR8R1Y%2B%2B%2B%2Fx5xeqWINjIDLSA%2Bw8MuFrlMMzgfUIEDnmyrerYrwh2J7TO%2BSeLTRL7OdYxuwJO%2F7yiGDHl3zU45HSIsIXngPE%2F6kvlYe11mJfa1DMvGefW3XdAWpE8RmTtrPx5XBSWV2%2FWY6ll5xI3iz2UxQ1eNMIUxiq2JawwAOSXLQn%2BO7&X-Amz-Signature=512e2debc6271e6e01891b43ee68bc3be2a7a3f342b4940990d0ec38c6b769f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWYCZU4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEskApujwXIekohGjOo%2FzyV5GF186u8%2B%2FKTF92byydu9AiBnjdN8zPBCbS00MZGtc%2BU8yzfY0z6a0Hw6eiwH0%2Bb1JCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FCa68dnavXl7XqzKtwDghmq3kWD8Zml2A1SThUkaKdbbIMa%2BdSfJFMUsghs4j93QN08qRlAFnP%2BmYooiwyqsPRkiImxKqQyCCbRT%2BwXZv5xaoVx%2BPe3d%2FNBK85ZBWh6jCtcXWVukrm20iUyYNe%2F2BZrOWBATS0xBWTvrIqgmRnfS79pM3rYk8SaebmpGqvCDwRYvD2Ixr6XHv80yHC3JFPTC26jlf2dJxmFg46v%2BCoujYbZZr5M75Z%2B6rkoTg5XO%2BilNaSH8zBtC0kMhRztnZMwUqcxo7x8zvDar%2BT9On%2FdMLOs3hqyYJoxUYU88m%2B9IASQgDUlvQVyOEbBysQxjTY4SBbuQChM3M3%2FzS6N4cqiuiFWHBiJoHuEw6nd6IiHQQimx2S8oIjQikQsdxpk6xdlZAJA52eP0fMyAMW5mmfEigVO4JfxfjkO9MKO3RNyZ%2FtkFdLGrqc%2F5Z%2FDImWzEE07ncijnakpGm%2BDsTsmI8AVPImO79cQecMpTohDQ66ugKR2A6KyjSAJg0FG4qKGmNov7S4zGSTyMgq0y1eHk%2FbPvjtpRIaYJMz6dIsP%2BM2bOLS6CkMcfkiQx4SOGUxddDDcj6WCK%2Fi5xiOq57Pm4EHavUrupv5rvA7PkPlyiqhzFZnFrn6os%2F%2FG0PIwmqXVwgY6pgGrudWU08InbxqDhwQ7%2B9WVXSSXODEZsCHrCukDQ7XJSpxR8R1Y%2B%2B%2B%2Fx5xeqWINjIDLSA%2Bw8MuFrlMMzgfUIEDnmyrerYrwh2J7TO%2BSeLTRL7OdYxuwJO%2F7yiGDHl3zU45HSIsIXngPE%2F6kvlYe11mJfa1DMvGefW3XdAWpE8RmTtrPx5XBSWV2%2FWY6ll5xI3iz2UxQ1eNMIUxiq2JawwAOSXLQn%2BO7&X-Amz-Signature=43e0c2bc482d666b425f7e3332223a96bff7d5fe732f1c505f5f76f726c6fbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
