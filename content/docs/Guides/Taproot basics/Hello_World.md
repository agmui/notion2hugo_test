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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLR4G7M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzLEQGHBgBV0LLMpOlUoc0c7wjSfdY4yPdM5I4r4euKAiEA48YZroPepwgxaPK35Geyi8bXpqYNxdwk%2FFeDxX4h3E4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMqr8Nfbv4loz%2Fz2NyrcA8C5%2B4YsfkIBZXHsf9qrGZB6EfUMEEM2fGAoPaKFM5NpssDIpSZ%2FQAjl50xTNY2syUtJZuSv5Utl861lKjH3aHBnXVFxaTa1IXcSJnO7UnHoVNn3tkQoSLHG4q5F6NU1ZobU4yzdd4FbQ%2FhRoXtyin2Nxciy9aQoNuO0F552BZtP2lLeAA%2BUr8QMg0cFR7EtNulXUAehqwvfSAWAYiknNxjIXOvEPugKUhjhtTStzcS8q3TE6dXAWTRrRWOW1cyB2PGuMN75pNBt30EBNHEZ3lt8p7jATUGuKcPRIXWjjWFN9eHJnjxdKaVxPyG9eVq4kGJrYHiSLumNFcZg7VFca8n%2BrnZvfuv74uz26CnC2fl7vbrC530W1aC5VUyy7qoKi1stQEUDtpHw9wBDFhss3ta9GRXbjH81OJ6mqDew9q1iL06LHDoe0aBCl5GKF%2FA31a4WGkNyo86bqlmHvksI4bFFww0c6XV6D0y13q56IDtwVn8H3001mLalwSpaVOgcgU%2FNk%2B90CLwg%2F%2BIjTBFuun4pzaMBe%2FzMVGkDpxr89CEWalFk6ft4z554o0yCFJdvnxDS%2FLs2Opw5khrp06ccqjBRURiNV5gTysVE%2FSrQen254GsUDEoYfi6dv583MPKXjL8GOqUB5BMqC5dcg5XAZYxjxx2o%2FxJqBJPO5ulYZjkaD5POo1c1xVjB5PryPSqp2F2G4y8hkYOLhQ8rmi6T8CUqzkTig5BFCsZ5MJULwy6wezfgQu9%2Bs7CJM1oV%2FEXPBmRNOaGFecYmRN6lJ8Un0F5gFhlRW%2F1R2DkGKZ8ht6eCbznQMX%2Fzf0Xm1TfpDuOyWFf5Mt7fdRftTksDYNT1k0%2F1IT9RW9NsalIS&X-Amz-Signature=d021b3fcd6f725d016028128aa04ccadb4f6e19c3cef388d2f6dfdf6da6f1701&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLR4G7M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzLEQGHBgBV0LLMpOlUoc0c7wjSfdY4yPdM5I4r4euKAiEA48YZroPepwgxaPK35Geyi8bXpqYNxdwk%2FFeDxX4h3E4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMqr8Nfbv4loz%2Fz2NyrcA8C5%2B4YsfkIBZXHsf9qrGZB6EfUMEEM2fGAoPaKFM5NpssDIpSZ%2FQAjl50xTNY2syUtJZuSv5Utl861lKjH3aHBnXVFxaTa1IXcSJnO7UnHoVNn3tkQoSLHG4q5F6NU1ZobU4yzdd4FbQ%2FhRoXtyin2Nxciy9aQoNuO0F552BZtP2lLeAA%2BUr8QMg0cFR7EtNulXUAehqwvfSAWAYiknNxjIXOvEPugKUhjhtTStzcS8q3TE6dXAWTRrRWOW1cyB2PGuMN75pNBt30EBNHEZ3lt8p7jATUGuKcPRIXWjjWFN9eHJnjxdKaVxPyG9eVq4kGJrYHiSLumNFcZg7VFca8n%2BrnZvfuv74uz26CnC2fl7vbrC530W1aC5VUyy7qoKi1stQEUDtpHw9wBDFhss3ta9GRXbjH81OJ6mqDew9q1iL06LHDoe0aBCl5GKF%2FA31a4WGkNyo86bqlmHvksI4bFFww0c6XV6D0y13q56IDtwVn8H3001mLalwSpaVOgcgU%2FNk%2B90CLwg%2F%2BIjTBFuun4pzaMBe%2FzMVGkDpxr89CEWalFk6ft4z554o0yCFJdvnxDS%2FLs2Opw5khrp06ccqjBRURiNV5gTysVE%2FSrQen254GsUDEoYfi6dv583MPKXjL8GOqUB5BMqC5dcg5XAZYxjxx2o%2FxJqBJPO5ulYZjkaD5POo1c1xVjB5PryPSqp2F2G4y8hkYOLhQ8rmi6T8CUqzkTig5BFCsZ5MJULwy6wezfgQu9%2Bs7CJM1oV%2FEXPBmRNOaGFecYmRN6lJ8Un0F5gFhlRW%2F1R2DkGKZ8ht6eCbznQMX%2Fzf0Xm1TfpDuOyWFf5Mt7fdRftTksDYNT1k0%2F1IT9RW9NsalIS&X-Amz-Signature=90bd24434b5e438e26a2ba9320ad82f29062bc9060da880b7388ccdac8211daf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
