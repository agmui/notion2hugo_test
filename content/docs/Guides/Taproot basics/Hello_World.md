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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WA6KUR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS3aaWATwK7rso9BCNxQFnpNse7ZsdZV8ivhi6piuacAiEAqzEy3jLbA%2FIVcwFj2sOCo8C5QEcyDkuEnF74vJKwlG8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR7G5GqOZeochRhzyrcAxg4IHLrbigdctuA2P4lSwlOnQBW8wsBacnsL%2BTm25zhDGK3q8TQeK3yp5xSj9QIoPQanBTarzgZbFQxWG76m31Tj0F3QPGyWZTSM6DSMndWUi8hbwu34k5Z3yYS7%2FH1Uhcn2qwQRnHHFWHxpJ9OZj7Y1Iv1YgMOwp1RLf9fLxHSvsbXa%2Fx3I%2FJcUH1NTJuKsf6CDWbyGOPivEVpjIeSM%2BcwDP8%2Fu1%2BOxDjrz4QKFPyQb%2Bn1FDwx3toX3Pk0zr9lfmhbHIv6HQ85QY88N3clwQFZSEfTSTFdULZgTmjBXD5iT9TOosbz3o6y5%2B0uVn5xWhApdMo4B7NETNxR8wdzdzqZWYbpCqdZAMs4gmn%2BnCYmjF5eh2DVHOMxRY9krKFoA2EV%2B05qo1i4IOAZiMMzfbChQNvSn9Z33JCXIK8XGSnlny1MDWu8VE1SU3U%2FTRRjMuetb454M2vojS0uTzkzY9Qj2T1SQwvf74YRNDDOpk1dEo4wjWqRlJkHpIMCbOZ8p6v0JmQVRc0Ntb2nhmUtvi57i5fmFO%2BADQUjye7unXMFC6uwEBNQosxjlo6HYsBGBnNhLo0PUPyn%2Fhh%2BQmssAdWGiZ26bewo4pQT%2FztFEwQEMtF0sY4RxsLZFz3oMK3x5sEGOqUB1yUedITdBEx4BvGv8wi9jyKDg1GsYr5Q2rggWd8eaQ3DHQoNA9SzAK84zVCzENNyO0ce6L37lOR6fpOR2VUOVyUqj%2FCa1di0K0Ir%2BhHEzPjoJScfcdfTmP1OdTD%2FFC%2F5QqUAE9bmgC8fpYtaNvHJX0bFG7oP5cnTP8%2FbKWeldI0hyWKsPXkOh9w7SE4evMIe7GLVIouXCqk5jXY%2Fn7yFP2LxuGSi&X-Amz-Signature=b24c6bda843b0c9c4123ebfeaa63c6ce5e815bd6f54b62f93c3c58b869d3a2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WA6KUR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS3aaWATwK7rso9BCNxQFnpNse7ZsdZV8ivhi6piuacAiEAqzEy3jLbA%2FIVcwFj2sOCo8C5QEcyDkuEnF74vJKwlG8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR7G5GqOZeochRhzyrcAxg4IHLrbigdctuA2P4lSwlOnQBW8wsBacnsL%2BTm25zhDGK3q8TQeK3yp5xSj9QIoPQanBTarzgZbFQxWG76m31Tj0F3QPGyWZTSM6DSMndWUi8hbwu34k5Z3yYS7%2FH1Uhcn2qwQRnHHFWHxpJ9OZj7Y1Iv1YgMOwp1RLf9fLxHSvsbXa%2Fx3I%2FJcUH1NTJuKsf6CDWbyGOPivEVpjIeSM%2BcwDP8%2Fu1%2BOxDjrz4QKFPyQb%2Bn1FDwx3toX3Pk0zr9lfmhbHIv6HQ85QY88N3clwQFZSEfTSTFdULZgTmjBXD5iT9TOosbz3o6y5%2B0uVn5xWhApdMo4B7NETNxR8wdzdzqZWYbpCqdZAMs4gmn%2BnCYmjF5eh2DVHOMxRY9krKFoA2EV%2B05qo1i4IOAZiMMzfbChQNvSn9Z33JCXIK8XGSnlny1MDWu8VE1SU3U%2FTRRjMuetb454M2vojS0uTzkzY9Qj2T1SQwvf74YRNDDOpk1dEo4wjWqRlJkHpIMCbOZ8p6v0JmQVRc0Ntb2nhmUtvi57i5fmFO%2BADQUjye7unXMFC6uwEBNQosxjlo6HYsBGBnNhLo0PUPyn%2Fhh%2BQmssAdWGiZ26bewo4pQT%2FztFEwQEMtF0sY4RxsLZFz3oMK3x5sEGOqUB1yUedITdBEx4BvGv8wi9jyKDg1GsYr5Q2rggWd8eaQ3DHQoNA9SzAK84zVCzENNyO0ce6L37lOR6fpOR2VUOVyUqj%2FCa1di0K0Ir%2BhHEzPjoJScfcdfTmP1OdTD%2FFC%2F5QqUAE9bmgC8fpYtaNvHJX0bFG7oP5cnTP8%2FbKWeldI0hyWKsPXkOh9w7SE4evMIe7GLVIouXCqk5jXY%2Fn7yFP2LxuGSi&X-Amz-Signature=deca7f25847efd7cf3dfb1e23e69f021fa0528a9f67289440257d7f589dd8ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
