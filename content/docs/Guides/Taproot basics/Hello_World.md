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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KUORV4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD5lpGwKXtqGm%2FhBaFJZA%2FcfuyJgeZzwzYOCQc4rQk%2FQAIhAJ8kzS0jmK0ZjitrWPRvWMtkYImy4MtvtiMSVjbmOMXPKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZhxjKiYqc8nC476Eq3AOrNaKdmbB%2BQfBgFrf8tvc5%2FIb17iYzhfFu%2Bj3iRFIlL0QJtmORfjKCAq3qW%2B%2FgHeZdvWPFOPnkhDhS47Urz%2FWvZksWu3maWXFnt0VvKZ0FD5oVyCsWcdgycl5hTwC2I1OmpEs3gc%2FThp9Bc1C52kc5i6nezl8hMQ27iDJo3Uu9kUB4OWmMEhWbF1%2Ff3n9%2F5fr7F3Fxa5odG9DaTjQahI2W83wT0Av%2FPbNZtnarHlP398sSnKvROcXgbbx7yNiLHOG%2BEUuzzqcR15WEc%2B%2BDVGhO08MzTQMp4HEakC1FWdsZE7IFwKleCX5Civ4P1KW21IfvFy5Ft%2FlOg2zxhJiWEjSTbejh9xEkFlS3DoMZ1pwW0Q4GiLN%2FPeTAOHqVMKbhw%2BnedSSz%2FyU%2BjrqssV8p6YLkkzPhTjlGShnIuHlr1z6PX%2FrcNkhY2pyFu3ZuII%2BScR8f3PzW92gxv91wTecKZF9WjwO8zQKUsPaW7zbnldsTnF0vTgJW2CQqxexerfq1Vx0sHa4Lhj9L0tF39yOSDe6cvc8cu2EhGJYgasfar0%2BdX2z1tAAbfy1aAGuRbsY0GXFlHXI%2B%2FrKoeZJ5XTwf%2Bxs38As6YfcqcssjZVPv%2FaszkD7yUu%2BdBURQGPNYcDCum6a%2FBjqkAaVkH2arxVffq7EQDjTydQQn5wsnkru3XLexAMli%2FyXUXVbDBR8outTNRsjv9wnwk3bwqd4PRMUJ13fCaRcDkT7PItbAuigkPrTpd%2BZWd5GpL7%2BRmh6rYjPHwBlGP%2FFiwuawChGyeJ0Le9lS2Kt4DvzbK0Ar9tWY3chJEGueYvYOjYQAKNri%2B%2Bucn877zPMN%2BMaqyWBXzMPriuiDaTFySBCkrPn4&X-Amz-Signature=ea70a2cfc36faf6ecf06aa3863dce88245fc223cb925be72217b40c174c4fb16&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KUORV4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD5lpGwKXtqGm%2FhBaFJZA%2FcfuyJgeZzwzYOCQc4rQk%2FQAIhAJ8kzS0jmK0ZjitrWPRvWMtkYImy4MtvtiMSVjbmOMXPKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZhxjKiYqc8nC476Eq3AOrNaKdmbB%2BQfBgFrf8tvc5%2FIb17iYzhfFu%2Bj3iRFIlL0QJtmORfjKCAq3qW%2B%2FgHeZdvWPFOPnkhDhS47Urz%2FWvZksWu3maWXFnt0VvKZ0FD5oVyCsWcdgycl5hTwC2I1OmpEs3gc%2FThp9Bc1C52kc5i6nezl8hMQ27iDJo3Uu9kUB4OWmMEhWbF1%2Ff3n9%2F5fr7F3Fxa5odG9DaTjQahI2W83wT0Av%2FPbNZtnarHlP398sSnKvROcXgbbx7yNiLHOG%2BEUuzzqcR15WEc%2B%2BDVGhO08MzTQMp4HEakC1FWdsZE7IFwKleCX5Civ4P1KW21IfvFy5Ft%2FlOg2zxhJiWEjSTbejh9xEkFlS3DoMZ1pwW0Q4GiLN%2FPeTAOHqVMKbhw%2BnedSSz%2FyU%2BjrqssV8p6YLkkzPhTjlGShnIuHlr1z6PX%2FrcNkhY2pyFu3ZuII%2BScR8f3PzW92gxv91wTecKZF9WjwO8zQKUsPaW7zbnldsTnF0vTgJW2CQqxexerfq1Vx0sHa4Lhj9L0tF39yOSDe6cvc8cu2EhGJYgasfar0%2BdX2z1tAAbfy1aAGuRbsY0GXFlHXI%2B%2FrKoeZJ5XTwf%2Bxs38As6YfcqcssjZVPv%2FaszkD7yUu%2BdBURQGPNYcDCum6a%2FBjqkAaVkH2arxVffq7EQDjTydQQn5wsnkru3XLexAMli%2FyXUXVbDBR8outTNRsjv9wnwk3bwqd4PRMUJ13fCaRcDkT7PItbAuigkPrTpd%2BZWd5GpL7%2BRmh6rYjPHwBlGP%2FFiwuawChGyeJ0Le9lS2Kt4DvzbK0Ar9tWY3chJEGueYvYOjYQAKNri%2B%2Bucn877zPMN%2BMaqyWBXzMPriuiDaTFySBCkrPn4&X-Amz-Signature=be657388e988dc32f07014ed38d9b793831b3f4eae516658728078506bea8f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
