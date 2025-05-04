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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3DXPXJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICCM5Mi19WQ0BB3lZgdoHARuMjL%2FGomcWLSXIq3fDfVoAiAKe%2BbMbqh8iTGLJF%2BaZUx%2BqH%2FLLeaQDd2PQyENdJjyjyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMotk01UzjmEKzDN0wKtwDaOLBzXoUBIFAUGsDhRWCcN3w3FeREWMJR6WFcZgokOMH9nZlEQET2lAI2yycIboDqQ8mxCvl0SrY6t1w323J67voBT8cRLj5ACMOOyHFsVuIaNWvvv7z1IxumhmSJWf5sQrUNyZF2XDCmjYRZNCFH0jBg8k4i8WBM5yPANWCvj5sELAIHjQr5owfliJjuaVJ%2F45iEsYcfMCCYqUuV8276Y5idrLxngyHsPWZXTiqcfZcRBcDlMCRhRoaKQBsH2QqNqOFMW%2BuFNgvUOypEJuFfUITIg62mZsokbXpHPyYNMfBxyHlytzfrS6Kk3p4fe4InfF6SY1rbr3ydRPtaMRuodX%2Bov3wrKRan%2BpQ6%2BZaH6Zzsmu6ARbe78Xkd5btvKtqdXfAXEP1En8yIqmWzWRXxNfWCVztckupcWjXWua%2FqZOsupdQJWNRg%2FJj7RsIp09hwqbfxuZDYltOp2XlC%2BJ4pDraZiIa3HU%2Fy1mDZMNSTkfAoaW4FoAfV1qTfBxvvXMkJKC7F9uANjgFcxoDpRHwKFMGk86Y5bMi%2F7o7itZ9oCWtcgnLDPbyw%2B9AINrwAvqTd%2FdwGgr6mGimfCNiLJ%2F8ZFw0sYTf1DHP3UzVpp8CcelGvIrpc7MRgXBgh60wjJDdwAY6pgHp23mODPBi65pqADuYxfJL2GxIeiAmLz2hhMlgjLSZU%2Bjpir%2BN4yJhTtoIBSYmFLkLQnvR4HUw8wTfXZrV6hTBjJQ7CBwmhIRz24yxIw6iRZwBHEsUBtSDWPUBMPP7dbpnO7vZACv%2FBLlKm%2FQGjDesPJrASTJVAckzwX2etayWhDSNQpW8P4fXyedYVeucBvnMCCHGm0sv99MjtX2IZrfkGpbU7Shr&X-Amz-Signature=cebe0550ffd8f7e0c9529fd1148717c7d62873f4c06a0320ac34c236bae54b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3DXPXJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICCM5Mi19WQ0BB3lZgdoHARuMjL%2FGomcWLSXIq3fDfVoAiAKe%2BbMbqh8iTGLJF%2BaZUx%2BqH%2FLLeaQDd2PQyENdJjyjyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMotk01UzjmEKzDN0wKtwDaOLBzXoUBIFAUGsDhRWCcN3w3FeREWMJR6WFcZgokOMH9nZlEQET2lAI2yycIboDqQ8mxCvl0SrY6t1w323J67voBT8cRLj5ACMOOyHFsVuIaNWvvv7z1IxumhmSJWf5sQrUNyZF2XDCmjYRZNCFH0jBg8k4i8WBM5yPANWCvj5sELAIHjQr5owfliJjuaVJ%2F45iEsYcfMCCYqUuV8276Y5idrLxngyHsPWZXTiqcfZcRBcDlMCRhRoaKQBsH2QqNqOFMW%2BuFNgvUOypEJuFfUITIg62mZsokbXpHPyYNMfBxyHlytzfrS6Kk3p4fe4InfF6SY1rbr3ydRPtaMRuodX%2Bov3wrKRan%2BpQ6%2BZaH6Zzsmu6ARbe78Xkd5btvKtqdXfAXEP1En8yIqmWzWRXxNfWCVztckupcWjXWua%2FqZOsupdQJWNRg%2FJj7RsIp09hwqbfxuZDYltOp2XlC%2BJ4pDraZiIa3HU%2Fy1mDZMNSTkfAoaW4FoAfV1qTfBxvvXMkJKC7F9uANjgFcxoDpRHwKFMGk86Y5bMi%2F7o7itZ9oCWtcgnLDPbyw%2B9AINrwAvqTd%2FdwGgr6mGimfCNiLJ%2F8ZFw0sYTf1DHP3UzVpp8CcelGvIrpc7MRgXBgh60wjJDdwAY6pgHp23mODPBi65pqADuYxfJL2GxIeiAmLz2hhMlgjLSZU%2Bjpir%2BN4yJhTtoIBSYmFLkLQnvR4HUw8wTfXZrV6hTBjJQ7CBwmhIRz24yxIw6iRZwBHEsUBtSDWPUBMPP7dbpnO7vZACv%2FBLlKm%2FQGjDesPJrASTJVAckzwX2etayWhDSNQpW8P4fXyedYVeucBvnMCCHGm0sv99MjtX2IZrfkGpbU7Shr&X-Amz-Signature=f7650a07391a90c1c7a4a566c4262f1a1a8fea877480f59b2500f556cfeb3cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
