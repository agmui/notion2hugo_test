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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666C6FPP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lbGJY37kpYxspSUi70ecf7dEde0NIjmar0kofj7ntwIhAPRpF%2FQQVbay6pDb7MyZTtcKrjUsooG8R4U0KoB3Q%2F4XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkHvR6QK7A1YKrFQq3AO5t6DqMJj%2FBNFNZGiPXY0ZXP1Z1gtdZmaHwoq0MOlKKGkt%2Fznz%2FyQRy4y79wiszaJLioV59vJ5OlvBM%2BY9iFnZRHzstAhdLGirpR17h9L9FLjJF292Wstg%2Bl0pOPFcqSAQ45CntiS3PL8P23Fkl8FbxZHqjbhYoDzoZ9m9LQAhDUZvqa73x7Z27KRgT4yr9QbqoXx7QAct2CSPKMbvb2NCkrA9YWi1tcLVqAXPgaBTlKt8oqkABQOhSFB4beXx2dUFMCDN2c2H3IKYrn9mJCBY15ifS%2BJ%2FvLa4JTWHT03G4l7mZo01jD8FjIpnTONSaaf7vmyf7GWEwX3jv84m6AefK5Z9BqSIP4nwmpv17xQdpBbf81J0zTaoSPRpys9vE9Z8o8E8KVbZSyJa%2F2yV%2BFEC4dMHoE%2FB9xfiehH4mITGCf3lXWAfWMVEhM6mvfBw0qSotHrSVKHIvKLXxCgHqKBMhW5MI67%2FC2tYgN1oIn8xsCNMTny0NCZ4jvcrnWU23WVnd03ABW%2F%2BrYmBvIW6oXlsnGIYo4BidsfNLiDYAmLC9Gy5TiDScoleOmuqx6%2By4BT5VLytkn34%2Bae1IvSRQg%2BjDpX6xQOs7GmK%2BPRInya8S09I44xGtN01yVqetTDDnfy8BjqkAa%2FFS1fLBVE5Z%2FBtVjiXzaKxkTfA1F4k3VbSOIFNkXNSRAhX%2F5zkvuMs8MkIrINjfOj6zFpvQ%2Bh5zAEUloStNC2t0hr7fEmy1%2FvK6KFC7UkfgGvqckmBI98KkeT9GFgFFofCyGHukXLAbkL4ZTRsbBuaBLT4XkfmLY9QHK3OQP7zLrzVw9S2mIBNCRt0SIJMHRM5bINNFqlbQrGIfgBavyBl%2B1T3&X-Amz-Signature=a39326e2ed4903c68216e876691d2f568c57470cba4d11e6267362328a3ae771&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666C6FPP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lbGJY37kpYxspSUi70ecf7dEde0NIjmar0kofj7ntwIhAPRpF%2FQQVbay6pDb7MyZTtcKrjUsooG8R4U0KoB3Q%2F4XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkHvR6QK7A1YKrFQq3AO5t6DqMJj%2FBNFNZGiPXY0ZXP1Z1gtdZmaHwoq0MOlKKGkt%2Fznz%2FyQRy4y79wiszaJLioV59vJ5OlvBM%2BY9iFnZRHzstAhdLGirpR17h9L9FLjJF292Wstg%2Bl0pOPFcqSAQ45CntiS3PL8P23Fkl8FbxZHqjbhYoDzoZ9m9LQAhDUZvqa73x7Z27KRgT4yr9QbqoXx7QAct2CSPKMbvb2NCkrA9YWi1tcLVqAXPgaBTlKt8oqkABQOhSFB4beXx2dUFMCDN2c2H3IKYrn9mJCBY15ifS%2BJ%2FvLa4JTWHT03G4l7mZo01jD8FjIpnTONSaaf7vmyf7GWEwX3jv84m6AefK5Z9BqSIP4nwmpv17xQdpBbf81J0zTaoSPRpys9vE9Z8o8E8KVbZSyJa%2F2yV%2BFEC4dMHoE%2FB9xfiehH4mITGCf3lXWAfWMVEhM6mvfBw0qSotHrSVKHIvKLXxCgHqKBMhW5MI67%2FC2tYgN1oIn8xsCNMTny0NCZ4jvcrnWU23WVnd03ABW%2F%2BrYmBvIW6oXlsnGIYo4BidsfNLiDYAmLC9Gy5TiDScoleOmuqx6%2By4BT5VLytkn34%2Bae1IvSRQg%2BjDpX6xQOs7GmK%2BPRInya8S09I44xGtN01yVqetTDDnfy8BjqkAa%2FFS1fLBVE5Z%2FBtVjiXzaKxkTfA1F4k3VbSOIFNkXNSRAhX%2F5zkvuMs8MkIrINjfOj6zFpvQ%2Bh5zAEUloStNC2t0hr7fEmy1%2FvK6KFC7UkfgGvqckmBI98KkeT9GFgFFofCyGHukXLAbkL4ZTRsbBuaBLT4XkfmLY9QHK3OQP7zLrzVw9S2mIBNCRt0SIJMHRM5bINNFqlbQrGIfgBavyBl%2B1T3&X-Amz-Signature=d383b8f781de6aa1f70aeaf4289a43889c122d582ab2cf3d1ba1d2ceb918e6c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
