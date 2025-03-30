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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBQE7VJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCzTLhRm9cHZ4Z%2B4e2aTxZk%2F0T3C622NFlTGly7nUslAgIhANXOGzqoMoa4k%2FXPINyZ6sKX3MZgl89sXmoe5P6TfEePKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx97nUR8GeLA5WfRMUq3AN4r%2FAgoy9gRQFrcPtTrjZaUQqdxPonamq0q081fExXQ%2FRlr2wFiHMYlIHheG6HH7P2xpt%2BrUiBBmfEO0eSGcDeABgp3EhPf0ofNr2UzpDCIeRQ6uWE2I09F21ij%2BNugM0vysMzbKZ0BJRFylNf5PRTYhKzCIV7ELNAlvEay%2BDXLwlcxi%2Bz5wIOG8w6fbNYksPNUPfxuV2TYFBrJfqiEjj%2F6Pv9ENW04AjfYXiAKCPhwKjBaXp6puzBv8uGhuIki7pVHQRuw%2B8A%2BygfdcrHqYeNJD%2BAg7nEXnpUQpoZ1aEXgBGdwoZS4zniG565pd%2B6zPrxyBPeRyRFSde8%2BiHfprqrEjA%2FMOhvalb6txHTTmB4BvMQ7sDfubPDOUCdpZUK07o5P0Ady%2F9jABSB%2B2dHHiXpsZXvtSncWV7smED7%2B1wdDRWHdR8opjBmlWne%2FzdauI8jLl6zVoXfULpAhCO5QN3Da187liIwMMAE6UqtzLbx9ZChkZ35P2j3fAblaEOk%2BRz4ZJ%2B1ap%2F5eFhFAoWiRdG0gNR9KucOqknm2kTUjIAUG5eP%2BYJLLWDFaCE1UKAN33JY3Bhwk4NomTH1grZmzU62MYAHSeeNWvUxLF4kYEgVm65pL9HU53ZXaNHxWDC376O%2FBjqkAc2ZHPnrIoJYnw6lBz90dEWLqkB%2FX1i2EsO8QjBK4kNEbe8XYbZOjVz3TxSSFwHB7WgN36APcg4B7BGDw%2Ft%2BEcmdpRhO%2Ff%2Bf2gOVdw89tlGl00JtmQgeS0oHONK6RBxcVJPYArEGOPAakALscFd1RQg2Wb6ckVPif55dbfqfsmkoPoE0EQ0pN2KdKGb23TNLBr%2BhrPeWZgvFilvZ%2F%2FFNLh9PKxA4&X-Amz-Signature=614d4d1ae4031fbc756071d25ae6a445025cc936f147dad3d9d95018e8dbf930&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBQE7VJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCzTLhRm9cHZ4Z%2B4e2aTxZk%2F0T3C622NFlTGly7nUslAgIhANXOGzqoMoa4k%2FXPINyZ6sKX3MZgl89sXmoe5P6TfEePKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx97nUR8GeLA5WfRMUq3AN4r%2FAgoy9gRQFrcPtTrjZaUQqdxPonamq0q081fExXQ%2FRlr2wFiHMYlIHheG6HH7P2xpt%2BrUiBBmfEO0eSGcDeABgp3EhPf0ofNr2UzpDCIeRQ6uWE2I09F21ij%2BNugM0vysMzbKZ0BJRFylNf5PRTYhKzCIV7ELNAlvEay%2BDXLwlcxi%2Bz5wIOG8w6fbNYksPNUPfxuV2TYFBrJfqiEjj%2F6Pv9ENW04AjfYXiAKCPhwKjBaXp6puzBv8uGhuIki7pVHQRuw%2B8A%2BygfdcrHqYeNJD%2BAg7nEXnpUQpoZ1aEXgBGdwoZS4zniG565pd%2B6zPrxyBPeRyRFSde8%2BiHfprqrEjA%2FMOhvalb6txHTTmB4BvMQ7sDfubPDOUCdpZUK07o5P0Ady%2F9jABSB%2B2dHHiXpsZXvtSncWV7smED7%2B1wdDRWHdR8opjBmlWne%2FzdauI8jLl6zVoXfULpAhCO5QN3Da187liIwMMAE6UqtzLbx9ZChkZ35P2j3fAblaEOk%2BRz4ZJ%2B1ap%2F5eFhFAoWiRdG0gNR9KucOqknm2kTUjIAUG5eP%2BYJLLWDFaCE1UKAN33JY3Bhwk4NomTH1grZmzU62MYAHSeeNWvUxLF4kYEgVm65pL9HU53ZXaNHxWDC376O%2FBjqkAc2ZHPnrIoJYnw6lBz90dEWLqkB%2FX1i2EsO8QjBK4kNEbe8XYbZOjVz3TxSSFwHB7WgN36APcg4B7BGDw%2Ft%2BEcmdpRhO%2Ff%2Bf2gOVdw89tlGl00JtmQgeS0oHONK6RBxcVJPYArEGOPAakALscFd1RQg2Wb6ckVPif55dbfqfsmkoPoE0EQ0pN2KdKGb23TNLBr%2BhrPeWZgvFilvZ%2F%2FFNLh9PKxA4&X-Amz-Signature=950c05a72261a29b3821e43553c0ae2aef611c420b35e238d959e2fe30955ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
