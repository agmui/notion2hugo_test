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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HGCKF4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdnQYHjenn%2FKcLguDmLOWUNVdmCn14op43k2kWdAknHAiB%2BZk6yV1WLgPkgLNJde2HnfywGFupKRM5t%2FYherWT7OSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMHNXEt83hWvy2VIxXKtwDvI%2BYTII8DV0SX%2BwfUo64Mt4rD8hN3r3CmXxvho1fHRYRV9mHZBltG%2FGGIU2SyBSLcSCVHXXWxtCyIpteZpLXqVCKefWxDRuN1MxCe1a4DUdqGVu6mgjHfOpue66RPF9Ag2voskCSHCxmxGZfLBqCGiJrF%2FmJbD3vqFUGEX1A6e%2BYcY7Ix51WOngBe%2FOk5ysC4WtNaSnWrOPgTAkCgGffsdPR4wvlxTEfY7boZel29ErMKDqJ9mVjfet3inaj%2BQWTfG1dw1P3T9gwoEmnmJkve1zC%2FKLE%2Fm%2B%2FH%2BkDigWQ9dFMHhxdPVoW%2FHdZ3CBpToV6tlD%2Fy9%2FQ1wC08ScwK6ojRkTBNygrsXG97L%2FFEhiXHHTEyNLqgE3kOVuICf%2BrPr86N8LxDMN22iE7XXNju0zJl2%2FbtnnCmb%2FoSxCjlfbWu%2FXXmBfMyu%2Bl69%2FKaLMS6Z2F9kMqqChiw42KZDXaGkroNlEuTAxRyNfCHYhKyd%2BnjWmmT%2FxsWur4K60gkINDbV%2BKuAGDeJ8uA5jvMzMll6qO8jKnFELK8XRF0XSx4Nbxq633BXyogTJUFtR%2FIjbSlxSdn3xOnerjTzCIeGQu8D4dkzzTlkPxX%2BEO2XlZRUmS4LZCbAEtWw4E58r%2B%2BAowj9%2F%2BvwY6pgFc5a6xD6o2LH763s16VQPK8U18gGC7JBFuKW707YMBjmTTGSLLov%2FdS6Nhm1O%2FUWp4Dnn9B0DBNZL3e%2BzgzB9WWg0oUf7sj2dd6lwpNb4ic9NRWpo%2B6fihF25xWwXn%2BU1yyEoFgnLlcqplUIxHCEUvS%2FlpRKVJlB%2FN9GheZLz4ZK%2BB55CsS61lwpq2tzg7sulA50v9xONGZkePP7zicbvw9OTKRLxf&X-Amz-Signature=a9c89718498e001b93203dbf4009c94f1fae03f64ffe61fa77ca672c965e940d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HGCKF4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdnQYHjenn%2FKcLguDmLOWUNVdmCn14op43k2kWdAknHAiB%2BZk6yV1WLgPkgLNJde2HnfywGFupKRM5t%2FYherWT7OSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMHNXEt83hWvy2VIxXKtwDvI%2BYTII8DV0SX%2BwfUo64Mt4rD8hN3r3CmXxvho1fHRYRV9mHZBltG%2FGGIU2SyBSLcSCVHXXWxtCyIpteZpLXqVCKefWxDRuN1MxCe1a4DUdqGVu6mgjHfOpue66RPF9Ag2voskCSHCxmxGZfLBqCGiJrF%2FmJbD3vqFUGEX1A6e%2BYcY7Ix51WOngBe%2FOk5ysC4WtNaSnWrOPgTAkCgGffsdPR4wvlxTEfY7boZel29ErMKDqJ9mVjfet3inaj%2BQWTfG1dw1P3T9gwoEmnmJkve1zC%2FKLE%2Fm%2B%2FH%2BkDigWQ9dFMHhxdPVoW%2FHdZ3CBpToV6tlD%2Fy9%2FQ1wC08ScwK6ojRkTBNygrsXG97L%2FFEhiXHHTEyNLqgE3kOVuICf%2BrPr86N8LxDMN22iE7XXNju0zJl2%2FbtnnCmb%2FoSxCjlfbWu%2FXXmBfMyu%2Bl69%2FKaLMS6Z2F9kMqqChiw42KZDXaGkroNlEuTAxRyNfCHYhKyd%2BnjWmmT%2FxsWur4K60gkINDbV%2BKuAGDeJ8uA5jvMzMll6qO8jKnFELK8XRF0XSx4Nbxq633BXyogTJUFtR%2FIjbSlxSdn3xOnerjTzCIeGQu8D4dkzzTlkPxX%2BEO2XlZRUmS4LZCbAEtWw4E58r%2B%2BAowj9%2F%2BvwY6pgFc5a6xD6o2LH763s16VQPK8U18gGC7JBFuKW707YMBjmTTGSLLov%2FdS6Nhm1O%2FUWp4Dnn9B0DBNZL3e%2BzgzB9WWg0oUf7sj2dd6lwpNb4ic9NRWpo%2B6fihF25xWwXn%2BU1yyEoFgnLlcqplUIxHCEUvS%2FlpRKVJlB%2FN9GheZLz4ZK%2BB55CsS61lwpq2tzg7sulA50v9xONGZkePP7zicbvw9OTKRLxf&X-Amz-Signature=35acff2ab0a98cc829903b0c40e905f456b7e4d5904177618c7553c982a4835e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
