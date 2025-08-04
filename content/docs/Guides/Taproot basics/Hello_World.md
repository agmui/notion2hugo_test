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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMNTSXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDTrR0ruqLupSGwf6sSnc%2BhP2icY%2F6ORDeWZkcsD7M6TAIgXwqWkiDWI%2F6eU%2FJassDodOiU3VmRrtrrBpWM52d6YuQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGiNDjLcixoagcYRXyrcA6gBiqOg81DG2lFdK4PojfNDd10YLi4JXYNoKape5cpX4R%2FG4EmDEIvhP2dMkBAYrz76BBUU2HrijgHK6NJgN%2FY%2BsIbclfr5f31GGCYmcgorBMVGSM5gOTWs7o6TbMVYMubAM%2F37E9Y0CuCSKPKLvzHv6vC2J1KvtUc6yZqDDyH8q4wbaxfDmMGwnkqVD3gk16XDMmTTdLGgbOtPxg0%2F8SVt7gXdl7niEFputAZeVOrsTi%2BKz8ks7BZOk1ntlsg7NCsC3ZWfX5CVoxHJ4XaJkM0IXMNeO6DFCgQvscnhYdFEHzzRKEtu65%2FYJyc5y2a%2Fs0xXGYCwiOeb4Pi77K5r%2BkraOrQau5L9hLk4o6sb1D83DzhZkt%2Ff3K%2Fe5duhthrtfNoJHQPZwFufZHvV5lKtLvVR46%2FAbRaPIvtLmSIp28aaqkkVpMr%2FTdta6Neyc5u%2B5OzA2wn7TkwjS48OIvmJM%2B5wL2Ya7qIAOKKtKdSFZSj%2BQud4jP5fZOfjuenLXZelWjSiyQnACMP29c8xv2yx81ErSwViWKs%2B5VownLCJonoJ33L%2B%2FXuYd0zYh4WI%2BzomPwONxXoM%2FwoDi55o2s24JBV%2FDN6YRJHMPMHK3BuCbdZloyHPpub9GqrMOUDkMJ75v8QGOqUB6p7ZNKEmBEv4RFyZPtCopBQ4EthD%2Byz%2BDfeUnyemAsAL4IJ6tuBPIySWWf%2F61%2FvmkZdBky3uznPTdwgCZxnoh5X98jE4guh%2FymrX2eFluWNcwIoMLjndU0wl71OedtOaooqvGq%2F3WEiD0OEg4MgMto6V0k7%2FKFK5e55frLX%2BdbgVQRwnd1zFG%2Fkbywrt8ynpzfNsMOj0VbyZOClpaOAWC8k%2FYIig&X-Amz-Signature=b23b8a820a2f9beed3dae1b98b5eac6d1d40ed90cb8ccd6d526e8e8dc1488f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMNTSXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDTrR0ruqLupSGwf6sSnc%2BhP2icY%2F6ORDeWZkcsD7M6TAIgXwqWkiDWI%2F6eU%2FJassDodOiU3VmRrtrrBpWM52d6YuQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGiNDjLcixoagcYRXyrcA6gBiqOg81DG2lFdK4PojfNDd10YLi4JXYNoKape5cpX4R%2FG4EmDEIvhP2dMkBAYrz76BBUU2HrijgHK6NJgN%2FY%2BsIbclfr5f31GGCYmcgorBMVGSM5gOTWs7o6TbMVYMubAM%2F37E9Y0CuCSKPKLvzHv6vC2J1KvtUc6yZqDDyH8q4wbaxfDmMGwnkqVD3gk16XDMmTTdLGgbOtPxg0%2F8SVt7gXdl7niEFputAZeVOrsTi%2BKz8ks7BZOk1ntlsg7NCsC3ZWfX5CVoxHJ4XaJkM0IXMNeO6DFCgQvscnhYdFEHzzRKEtu65%2FYJyc5y2a%2Fs0xXGYCwiOeb4Pi77K5r%2BkraOrQau5L9hLk4o6sb1D83DzhZkt%2Ff3K%2Fe5duhthrtfNoJHQPZwFufZHvV5lKtLvVR46%2FAbRaPIvtLmSIp28aaqkkVpMr%2FTdta6Neyc5u%2B5OzA2wn7TkwjS48OIvmJM%2B5wL2Ya7qIAOKKtKdSFZSj%2BQud4jP5fZOfjuenLXZelWjSiyQnACMP29c8xv2yx81ErSwViWKs%2B5VownLCJonoJ33L%2B%2FXuYd0zYh4WI%2BzomPwONxXoM%2FwoDi55o2s24JBV%2FDN6YRJHMPMHK3BuCbdZloyHPpub9GqrMOUDkMJ75v8QGOqUB6p7ZNKEmBEv4RFyZPtCopBQ4EthD%2Byz%2BDfeUnyemAsAL4IJ6tuBPIySWWf%2F61%2FvmkZdBky3uznPTdwgCZxnoh5X98jE4guh%2FymrX2eFluWNcwIoMLjndU0wl71OedtOaooqvGq%2F3WEiD0OEg4MgMto6V0k7%2FKFK5e55frLX%2BdbgVQRwnd1zFG%2Fkbywrt8ynpzfNsMOj0VbyZOClpaOAWC8k%2FYIig&X-Amz-Signature=a89328b8db42646c4edb9455c49bbeb2d155743f93cd20bc67e43115b0f5b61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
