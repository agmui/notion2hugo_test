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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYRPGXI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfbhZUSHHHZTOyka8JxXl0HvV%2BDovmTRVmOq9xGpF%2FewIgd0o2raEZ94eoUbzVVeT%2Fte8Bvy1b1WlqliXGFFO7UoQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDM2FsSesh4ATLGN6iyrcA0MzHKR2ZmZ%2F8USYhh%2BstP0Suuz9gZG9e3Cd0x69dDSvLmym%2FzREvQ4ELrVDAi6BThyoD%2FxguVbCyqc34b%2B1k%2Bm8Op1B9WkUyjnvRrIiuxtALc2CnAzPSdssRiHaWkeYivz4yqJQMqHpLXJpbQvF%2FbdH22uWC3KqG%2BjPfilC0g8mOdke%2BtQjM8FyGPpxWOHQpDEvHsaIdvbcRMtsZEejKqQV5NJbz45XQOeGnIEc7vRCiWJzMgR595fkLZfi07CbTtqxkFOuYPWelxxIBiPgxV7o0J%2FfQQeWcVSuOkSSorjJZ2fMphrlsL1%2BCSxuIQDqGh2XoXEXeEW6H0YA940Dt87Hgcqtq7xPUQnZP5%2B0oQXIT1iKrsHAhgY%2F6%2BjvpcCOhwkblLRTlQ4WJ3DmHj4yIiCO8OVZti6siE8Eyjl9UoZ%2FD7vhq%2BmTJXQpVlEsMYBM2LLicAcijQ51WOr0wYmOEBtDRSp%2BUP71u0r9tL2bVExugS%2F8GIpqBIbghw5pIS8ofxwtmaCLH2W%2Fq3NAHWOlfCBOPLVzD82YVGWCJec7gGyetCYoA8Ch5ihMWP3a4CRsNbu2%2FlGeG277q8Yp%2B6hJKNz6T6GP799AMiaK89xSMRAXdCXfgRWzc1XunaRhMNTr1r4GOqUBN3dS81iRzebHXc5qUqwdhvhNxe8YN2Mfefk62y4TjiPaOhPDjujZRjgxUA5QZUcrzRJ3m60tnfrLVV9XRZlSmKoq4Ftd763zqTNsPY4xdZVTn%2FEY%2FslAI8GKE1anAT%2FK5270lCEJ32xlfludKUdERGkObYnETOOuVWAzhOL9NmEgN4KzbGd4FkFfC2jH4AXAx21zJApY8Tfr8qVn689xX2ovRaGF&X-Amz-Signature=86810fe41d94be5696d98b89a0631fd786e0372cabeac3bc9ac34b2031400df2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYRPGXI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfbhZUSHHHZTOyka8JxXl0HvV%2BDovmTRVmOq9xGpF%2FewIgd0o2raEZ94eoUbzVVeT%2Fte8Bvy1b1WlqliXGFFO7UoQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDM2FsSesh4ATLGN6iyrcA0MzHKR2ZmZ%2F8USYhh%2BstP0Suuz9gZG9e3Cd0x69dDSvLmym%2FzREvQ4ELrVDAi6BThyoD%2FxguVbCyqc34b%2B1k%2Bm8Op1B9WkUyjnvRrIiuxtALc2CnAzPSdssRiHaWkeYivz4yqJQMqHpLXJpbQvF%2FbdH22uWC3KqG%2BjPfilC0g8mOdke%2BtQjM8FyGPpxWOHQpDEvHsaIdvbcRMtsZEejKqQV5NJbz45XQOeGnIEc7vRCiWJzMgR595fkLZfi07CbTtqxkFOuYPWelxxIBiPgxV7o0J%2FfQQeWcVSuOkSSorjJZ2fMphrlsL1%2BCSxuIQDqGh2XoXEXeEW6H0YA940Dt87Hgcqtq7xPUQnZP5%2B0oQXIT1iKrsHAhgY%2F6%2BjvpcCOhwkblLRTlQ4WJ3DmHj4yIiCO8OVZti6siE8Eyjl9UoZ%2FD7vhq%2BmTJXQpVlEsMYBM2LLicAcijQ51WOr0wYmOEBtDRSp%2BUP71u0r9tL2bVExugS%2F8GIpqBIbghw5pIS8ofxwtmaCLH2W%2Fq3NAHWOlfCBOPLVzD82YVGWCJec7gGyetCYoA8Ch5ihMWP3a4CRsNbu2%2FlGeG277q8Yp%2B6hJKNz6T6GP799AMiaK89xSMRAXdCXfgRWzc1XunaRhMNTr1r4GOqUBN3dS81iRzebHXc5qUqwdhvhNxe8YN2Mfefk62y4TjiPaOhPDjujZRjgxUA5QZUcrzRJ3m60tnfrLVV9XRZlSmKoq4Ftd763zqTNsPY4xdZVTn%2FEY%2FslAI8GKE1anAT%2FK5270lCEJ32xlfludKUdERGkObYnETOOuVWAzhOL9NmEgN4KzbGd4FkFfC2jH4AXAx21zJApY8Tfr8qVn689xX2ovRaGF&X-Amz-Signature=07e3b04743588504cf0208163e0590d458db72595c432f870922d754e30fadc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
