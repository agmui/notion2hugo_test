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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X52CCBY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGnrY%2BnXYBEbS%2FDT6g%2B8G%2BOhWEnjZ2OlM6McHPeWGwSQIhALohR6n8W6ezRxUwc6udLsfCCtbR0hdGwnlY95gdwkmWKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgusnmAFfd1954REq3APVseG3uBaZrOjQh63h8uM6OeW8wgTL%2FTr9whnIjKrGoWr0vnXBd6FxO4qgee4cxhOzyYoY83Y0SSu2jFGQnJi4Kj8HJbJKzz5WiAxsOUgm3SNCEFqS2aNvWVXnwuPrECfjRlFyMhHMP5eMDpVIDAEpqlW7ZqTWGECM687eSBcGNSlfsWq29qUxyuPCMAmDzzHYloT9J6az6pnS70AFQy%2FcKnS6%2BRCcBCm8blG5ILAVmVagd6%2FfdyKGygtlWDtjtqh5EtRjYyy7hQcFlrb%2FIG4lmt%2B8%2FXi61G2jim3qT8nEz%2FY%2FgwllXWRJtGPea9XZllOwSGLkbGuB1mLidMMqLlc6OGos0t%2Bm8B3P1YC5aDb0qF95oT%2FMwOGPhS6U59Ep%2BhAbiC74bN1Xr8%2BYtKHIH2LVHl79w%2B0qPVlHP1oEOOMei4RE6rmeogZmBeRBeDyLJz05quwv%2Fuj9v%2BEmRfcGKhrFwiy570ecwOX%2FLhrIpaXxK%2Fcb1obzpY8U2CYFh8nJ5jxx3lgC2zCMwEF%2F5QsiwLdxJuf9C%2F9J4Xk1HeD7eGsrtURtLgC3e2hJ4DOrEhg9uEDU03yCnGBwkgDL%2B%2BnGMLnJz%2BW9fBltfYLiPtQhKiKZv2iAr3GJgKSoHHGz2jDatcbDBjqkAWqpfONpf%2FYfYhqJnDwZeKhm3QQAleqs2Ud9msydGw1xUJaLHI%2Ff6Ol61Kn%2FeT7XUzb3gutyYejMJcSvvyhQZXKyxLH%2Bx7yxJ1kqcPJlhub2egWkDiWKX1MF8HqhYioBDa8visdbqTx30po0brCYTxFLQoMz91M8rF%2FFtR%2F27jzgivMzTLCfuCO1BAoPIGqEb%2FvQRVVqpHCNLVBZqjfc%2Fl4ryISW&X-Amz-Signature=404103d8c7c8f0b1bb71299b5090c4b742fa4563b45111a37cb76cd4585bf817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X52CCBY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGnrY%2BnXYBEbS%2FDT6g%2B8G%2BOhWEnjZ2OlM6McHPeWGwSQIhALohR6n8W6ezRxUwc6udLsfCCtbR0hdGwnlY95gdwkmWKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgusnmAFfd1954REq3APVseG3uBaZrOjQh63h8uM6OeW8wgTL%2FTr9whnIjKrGoWr0vnXBd6FxO4qgee4cxhOzyYoY83Y0SSu2jFGQnJi4Kj8HJbJKzz5WiAxsOUgm3SNCEFqS2aNvWVXnwuPrECfjRlFyMhHMP5eMDpVIDAEpqlW7ZqTWGECM687eSBcGNSlfsWq29qUxyuPCMAmDzzHYloT9J6az6pnS70AFQy%2FcKnS6%2BRCcBCm8blG5ILAVmVagd6%2FfdyKGygtlWDtjtqh5EtRjYyy7hQcFlrb%2FIG4lmt%2B8%2FXi61G2jim3qT8nEz%2FY%2FgwllXWRJtGPea9XZllOwSGLkbGuB1mLidMMqLlc6OGos0t%2Bm8B3P1YC5aDb0qF95oT%2FMwOGPhS6U59Ep%2BhAbiC74bN1Xr8%2BYtKHIH2LVHl79w%2B0qPVlHP1oEOOMei4RE6rmeogZmBeRBeDyLJz05quwv%2Fuj9v%2BEmRfcGKhrFwiy570ecwOX%2FLhrIpaXxK%2Fcb1obzpY8U2CYFh8nJ5jxx3lgC2zCMwEF%2F5QsiwLdxJuf9C%2F9J4Xk1HeD7eGsrtURtLgC3e2hJ4DOrEhg9uEDU03yCnGBwkgDL%2B%2BnGMLnJz%2BW9fBltfYLiPtQhKiKZv2iAr3GJgKSoHHGz2jDatcbDBjqkAWqpfONpf%2FYfYhqJnDwZeKhm3QQAleqs2Ud9msydGw1xUJaLHI%2Ff6Ol61Kn%2FeT7XUzb3gutyYejMJcSvvyhQZXKyxLH%2Bx7yxJ1kqcPJlhub2egWkDiWKX1MF8HqhYioBDa8visdbqTx30po0brCYTxFLQoMz91M8rF%2FFtR%2F27jzgivMzTLCfuCO1BAoPIGqEb%2FvQRVVqpHCNLVBZqjfc%2Fl4ryISW&X-Amz-Signature=9f878a025e2c0750c991c9b025524a08003be1242d19e0f59982e7afbb523b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
