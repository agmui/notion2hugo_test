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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKRVMNE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUSeEVYP5Tuob5TShADpYDhIrEE5lJHmn3tClJRYgJwQIhAOJ%2FmvPakNifyx5nErVZwERzKnItrhz1jUsplKJ1j553KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO6ACxx1CESxbn%2B7cq3AOrs2dwMXm%2BcSoErYl78xsxsJg5l1wO6mQEzalr7G5SMMUvKvEwMD7kXxLj776uvD9UsRxrQOa0%2Bb%2BXb2s3JoQmVwb2hY4xbUpd3C%2Bs%2B6rapYee0mMNTFgVkPcYAoiYicLSay%2FQC4dQG347aqRE7AVNT66591BdEKHH8%2FPq3rtxe2VvHi7kl03Bo%2BU0XcBcQObPpH3KupdosjGm02vyGtANUBtmZIDlmIHFInn74oD3J2NXyXny4KnlhvT4LU5WHD6o2qRvKIVqRyTrsjNg4qVeyCCD4btBTZEF6MkDDKTQilg5ISkdQ9%2BcE2v5JZIwSie7%2BdyMYQZ1wsCG8qlOVZRE8d5IVtzcJd7wD2ATRCAkFNl6k41L%2B0wdBth%2F8gK9Gqoj4fX2NPSMuS57AaMI2e%2FoMavWvEKfjrLbC%2Bjf7aM1US0vWaOn6ai%2F1%2Bhb5MIDGKldeVD9No0b9IjL0KYIPh6K0w29EQqhIVVXLxBdf5n1ZblQihRr3e07eALxeG7xfszF4p6rzq49F%2FtCQhPKdCDi5Amy%2F6QJmreCuzNBvkB8u0xWmqgkG83oAWfwxeG4tDUW6bsZZMO0SIoyU%2BywfZOzcICKbYSf2I8FqEYcZ1tamBuv2y4sNpjLZr9HvzDc5ee8BjqkATtdt7cff0hBIgfaa0VWp%2B2EHhA662mJrzioYtk9bbCL%2B1xxLlyvf4JRNcvdyQF4woGadZ%2FVZROWx20J%2BfRcgRcTK2LHDMvAgivAcyvOOZB7D3u2Tia0Tbr0WignFG9Sa1R7XEXSYbASFqnPG6%2F6c5xU66jqt64Zw%2BEZXnKzKtmfDR1fqs02yymZyQb7g65Br9zkHx6V6EFMQwgAvyhQ507OXTb3&X-Amz-Signature=6a9205a61c61e5dcd4724601fdc0a3a99468f30e6fd31947c38c1c08b734cdeb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKRVMNE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUSeEVYP5Tuob5TShADpYDhIrEE5lJHmn3tClJRYgJwQIhAOJ%2FmvPakNifyx5nErVZwERzKnItrhz1jUsplKJ1j553KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO6ACxx1CESxbn%2B7cq3AOrs2dwMXm%2BcSoErYl78xsxsJg5l1wO6mQEzalr7G5SMMUvKvEwMD7kXxLj776uvD9UsRxrQOa0%2Bb%2BXb2s3JoQmVwb2hY4xbUpd3C%2Bs%2B6rapYee0mMNTFgVkPcYAoiYicLSay%2FQC4dQG347aqRE7AVNT66591BdEKHH8%2FPq3rtxe2VvHi7kl03Bo%2BU0XcBcQObPpH3KupdosjGm02vyGtANUBtmZIDlmIHFInn74oD3J2NXyXny4KnlhvT4LU5WHD6o2qRvKIVqRyTrsjNg4qVeyCCD4btBTZEF6MkDDKTQilg5ISkdQ9%2BcE2v5JZIwSie7%2BdyMYQZ1wsCG8qlOVZRE8d5IVtzcJd7wD2ATRCAkFNl6k41L%2B0wdBth%2F8gK9Gqoj4fX2NPSMuS57AaMI2e%2FoMavWvEKfjrLbC%2Bjf7aM1US0vWaOn6ai%2F1%2Bhb5MIDGKldeVD9No0b9IjL0KYIPh6K0w29EQqhIVVXLxBdf5n1ZblQihRr3e07eALxeG7xfszF4p6rzq49F%2FtCQhPKdCDi5Amy%2F6QJmreCuzNBvkB8u0xWmqgkG83oAWfwxeG4tDUW6bsZZMO0SIoyU%2BywfZOzcICKbYSf2I8FqEYcZ1tamBuv2y4sNpjLZr9HvzDc5ee8BjqkATtdt7cff0hBIgfaa0VWp%2B2EHhA662mJrzioYtk9bbCL%2B1xxLlyvf4JRNcvdyQF4woGadZ%2FVZROWx20J%2BfRcgRcTK2LHDMvAgivAcyvOOZB7D3u2Tia0Tbr0WignFG9Sa1R7XEXSYbASFqnPG6%2F6c5xU66jqt64Zw%2BEZXnKzKtmfDR1fqs02yymZyQb7g65Br9zkHx6V6EFMQwgAvyhQ507OXTb3&X-Amz-Signature=77a978703e58d140c028b61b3fbbe087faf0a66304843e4488645ebf5c85b6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
