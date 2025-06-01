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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQXOOSL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDv5ZoM9OJBd1dWU1I05pvA%2BXIsW8F2cNUvFUk8LjZzuQIhAOWu3%2Bb2xs41QfjfLAyyWqCaDgfeZHbRebgRdFJTRyDKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonRxmUpn7VZyW5jcq3ANNSQTatZZiymWV0uAUzgrw00%2FztqqY1dY%2BmPb0y8wYGB8kX%2FLoXdfCIPnZ4XheZaiNYCaEwloHG9y%2FHBKbfvTZPgbYsklN2i91m33D1yFHnf%2FAMqF8O3iMofPyUI%2F%2FkxLEJ8lbG8Fi%2BuExUOlv02mV0YXX9ug7M%2FZ8oC5lI5JXRvTLIRa8oEyke2DrOr%2FNbFAGv%2BbfWlChUTb0flXM%2Bmo5Ok4Z1Dur3eD4VrE%2FIZm4ZwbBmaSEGJm1VhitpfumIEV86NnpTSDzZPjirop2%2FDrXca9wrGXmqpjRS4BoidLAwbsguM%2FD%2BBNBJVvzE4T%2Fv5gz8n7iaz9H2A6WFX7coRR30vB6OHdjPRwvkAESLCTl3ugO3ffvpwhripH6zOvepWmpviTqfDtkK64bnw%2Fq6FkFcXHOettcO2THqITSdZdehZWDVYRS8N7svLgkOkUpWTIzlcmR0zqZwc%2Bg%2FO%2FZDRt7kEKzMEFoQG0gDAZFS1w90wYOoKNt%2FIO%2BGRNb%2BYCOPCADPV9Er3AyJDD5ivs5OgMdXmUgJ%2FW7MKK%2BgZWpP4u1jdVkrrcTmnDHBb5zMmmqM9jphArBy12LivkcpoFon1OAo8GIk8z1MZOfHsucPLa%2BUaakBM6KskT5KwezhjDl5O7BBjqkAcJO0ThzQ%2FE9v1W%2BOqIFArNCeDePG54cC278JvT8g5hr5hxPin4OR%2FArb2WXtXmOBEf7m72HjFl8mNzNId%2BdSp7neW7cJ1c%2FHmRMKV8VmP5imPRcJXsayu1rhSAzK23orkG5efTb5QQrt2kpYtUI2NaBkSa%2BjfezmIHegGz5ORtTQYvaPN4rkOovGiz8LqEGbQ%2FyiVC8rl8Af0cBn%2FY12mM6v8I%2F&X-Amz-Signature=f31be930a4a9d5d03997d43a98d8333f6b18a438bf70b6e83426b0bbfbff743b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQXOOSL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDv5ZoM9OJBd1dWU1I05pvA%2BXIsW8F2cNUvFUk8LjZzuQIhAOWu3%2Bb2xs41QfjfLAyyWqCaDgfeZHbRebgRdFJTRyDKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonRxmUpn7VZyW5jcq3ANNSQTatZZiymWV0uAUzgrw00%2FztqqY1dY%2BmPb0y8wYGB8kX%2FLoXdfCIPnZ4XheZaiNYCaEwloHG9y%2FHBKbfvTZPgbYsklN2i91m33D1yFHnf%2FAMqF8O3iMofPyUI%2F%2FkxLEJ8lbG8Fi%2BuExUOlv02mV0YXX9ug7M%2FZ8oC5lI5JXRvTLIRa8oEyke2DrOr%2FNbFAGv%2BbfWlChUTb0flXM%2Bmo5Ok4Z1Dur3eD4VrE%2FIZm4ZwbBmaSEGJm1VhitpfumIEV86NnpTSDzZPjirop2%2FDrXca9wrGXmqpjRS4BoidLAwbsguM%2FD%2BBNBJVvzE4T%2Fv5gz8n7iaz9H2A6WFX7coRR30vB6OHdjPRwvkAESLCTl3ugO3ffvpwhripH6zOvepWmpviTqfDtkK64bnw%2Fq6FkFcXHOettcO2THqITSdZdehZWDVYRS8N7svLgkOkUpWTIzlcmR0zqZwc%2Bg%2FO%2FZDRt7kEKzMEFoQG0gDAZFS1w90wYOoKNt%2FIO%2BGRNb%2BYCOPCADPV9Er3AyJDD5ivs5OgMdXmUgJ%2FW7MKK%2BgZWpP4u1jdVkrrcTmnDHBb5zMmmqM9jphArBy12LivkcpoFon1OAo8GIk8z1MZOfHsucPLa%2BUaakBM6KskT5KwezhjDl5O7BBjqkAcJO0ThzQ%2FE9v1W%2BOqIFArNCeDePG54cC278JvT8g5hr5hxPin4OR%2FArb2WXtXmOBEf7m72HjFl8mNzNId%2BdSp7neW7cJ1c%2FHmRMKV8VmP5imPRcJXsayu1rhSAzK23orkG5efTb5QQrt2kpYtUI2NaBkSa%2BjfezmIHegGz5ORtTQYvaPN4rkOovGiz8LqEGbQ%2FyiVC8rl8Af0cBn%2FY12mM6v8I%2F&X-Amz-Signature=6bbd11a9b93ba9ed928363ea251bd01a95296ca9a519d3b54ae5bc9fe9af5c28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
