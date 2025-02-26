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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXMWUC66%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEoCzxq4koTsxXyWinjNtRfHkWQINLwI5jpUUk0bmL8YAiEApQi1U4Zi3OXKC9YKQhe66LPNAKn2Ng4PziEXKaG5rRQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHOcXp28XILaKIgTESrcAzwK%2Fz0sJ7azQDClWkjfqdSyjFb10LE2d7jOVRiaCjtap5TJHIX9tQeXfWFXE0c4EE7r4300G17mwfLoV%2BTbW%2Fot4BZTJBIlX%2FRi5I4EE2l76zYh6ZMF8MkqgxCd6f8W%2FkrJTCZ3Jb%2FLqB03cCPmlIqPrssXVnwkASiMF4C8oILXmiOL42dXIrxzbZshe7OIG4uK%2FnbKPjy7vYSW%2B89w5vV0T0biJsNhWQKgOE1AQeD7FWEG8KB29BrdmCH2Lkqe8uh3IDfZN9%2BBjGlNszz%2BUoK%2FkAjUHca3mVRONaO91Rvxc3AwY4BwpaUfCCAv3RgQWrlwLaMZoKL8UtBAEqxbmycC%2F7wPqG7aIMUG172CwwOQrd3IGt8YuL8xrtuQAbUwyGOJ7lc1O3qoF6PQyVmYRxKBdbZV5xDUSKP%2BqVxmzv0taOL4SsqEoDsGFMnFrGMg2yHfQam%2B5UAC%2BhNqzexoxIWBlEJpENeexevbnitmWo%2Bgj0BAuSSmO3edtNnmZ0e%2Fzi%2BNveZ5Zz%2BjaYzcR84o%2B%2Bz2W5qGa%2Boy4177B3h0HgDnYGllCJNC%2FOUgDUYyL5R8ppdxyOv9GJmtWWv8B1A7y5EV6O7zeoyXusq52Oe%2BoXFbD5P6rG%2F1C%2BjvEFynMICA%2B70GOqUBYb9PL9NotF0KezJ6783BO2zYWoCaRgUGo9%2BaNdX4SE8yoCVVQb7teNbt9gytXvYi1j7g3yX%2FyqoVhQn7eMfmsgA1pdJhOrGcEc4DV7lhw7lc7%2Fl8u8N4hLEYCyuEz27hZp4WWe3vaMBnL1FyOPyqDiEamS%2B6gyKApcmckuZ%2B%2B4g56ZYZJESvj5NUvUDNe4tShUw1Wwo%2Bhe8051hI1%2FgAF0q4pOub&X-Amz-Signature=d199ca37c2ae98c1b97480bd8b71cb8670c176971cc11c2edb0a98f9727b68c6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXMWUC66%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEoCzxq4koTsxXyWinjNtRfHkWQINLwI5jpUUk0bmL8YAiEApQi1U4Zi3OXKC9YKQhe66LPNAKn2Ng4PziEXKaG5rRQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHOcXp28XILaKIgTESrcAzwK%2Fz0sJ7azQDClWkjfqdSyjFb10LE2d7jOVRiaCjtap5TJHIX9tQeXfWFXE0c4EE7r4300G17mwfLoV%2BTbW%2Fot4BZTJBIlX%2FRi5I4EE2l76zYh6ZMF8MkqgxCd6f8W%2FkrJTCZ3Jb%2FLqB03cCPmlIqPrssXVnwkASiMF4C8oILXmiOL42dXIrxzbZshe7OIG4uK%2FnbKPjy7vYSW%2B89w5vV0T0biJsNhWQKgOE1AQeD7FWEG8KB29BrdmCH2Lkqe8uh3IDfZN9%2BBjGlNszz%2BUoK%2FkAjUHca3mVRONaO91Rvxc3AwY4BwpaUfCCAv3RgQWrlwLaMZoKL8UtBAEqxbmycC%2F7wPqG7aIMUG172CwwOQrd3IGt8YuL8xrtuQAbUwyGOJ7lc1O3qoF6PQyVmYRxKBdbZV5xDUSKP%2BqVxmzv0taOL4SsqEoDsGFMnFrGMg2yHfQam%2B5UAC%2BhNqzexoxIWBlEJpENeexevbnitmWo%2Bgj0BAuSSmO3edtNnmZ0e%2Fzi%2BNveZ5Zz%2BjaYzcR84o%2B%2Bz2W5qGa%2Boy4177B3h0HgDnYGllCJNC%2FOUgDUYyL5R8ppdxyOv9GJmtWWv8B1A7y5EV6O7zeoyXusq52Oe%2BoXFbD5P6rG%2F1C%2BjvEFynMICA%2B70GOqUBYb9PL9NotF0KezJ6783BO2zYWoCaRgUGo9%2BaNdX4SE8yoCVVQb7teNbt9gytXvYi1j7g3yX%2FyqoVhQn7eMfmsgA1pdJhOrGcEc4DV7lhw7lc7%2Fl8u8N4hLEYCyuEz27hZp4WWe3vaMBnL1FyOPyqDiEamS%2B6gyKApcmckuZ%2B%2B4g56ZYZJESvj5NUvUDNe4tShUw1Wwo%2Bhe8051hI1%2FgAF0q4pOub&X-Amz-Signature=07a18243c6e3eb583c31fba3f13bd49d3182ec1f0db25c3574bc9c48d388ca0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
