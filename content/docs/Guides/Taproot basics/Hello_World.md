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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N6LKPF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDdyyjT%2FpRoChzrqwcMhME6Vfoukdb%2FwNki0oylO87mZAIhAJsPlndhpc%2BWHyYtVio48xXl%2B%2FRvpyg4DVlBoScwMvEPKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZfw6Hj1T1yhilVkcq3AM2uJdZmnUqYdXvgrDk6cQGH0cg0xoKukTRabrYuM6ERSUHBfUDNnn2BDpzCxZvICutKbcKk0jlxagW81a4qcreH82scM30Zqh9Z6JZG5z%2BJb9%2Fq0uNnMWiXcIht3czIVVCiYjOSVUIbp6MNW%2FfypMMFgCFScEmKGSqclnDXjxjZe539OZQFdkddb9UQcW28BhecmWa5Cd9cN9IGUnp7U1uDe9FqT4je4WoZ%2FU1dt3rSt3QjywEF0MInV9Uweev8699CQlDUSuWGJ%2BZBNgepjSsLb1XMQDD4VypL%2B807%2BXKSdhGvASWJoa2emzIRSXWSDDx1U6JwMGGFVoWsLCyYQsZwWcqJyp6qXO9Ibcn%2Bmlidi9rWtXv9F2eznNsbZFwXakKrNu1tQLcJ0SF0qkYJ%2FcoSyocWnN92CCLx7i%2BfmsMA8y5zbMUGDSTnA9Kw7HlTwjHHd2BlZl7EaIoS7AKkiRXiyJ%2BAeg%2Bf2v3C%2F56kE5WQqlmmaOV1PLtK6yywVAbGBv%2FZfwS3bKpNkJB%2B8SEHOXlGvzz38uKek%2BndCefW6DXpaQ3JAjvUGV7eTFZ%2FAtzAbQDj372klRJIXt2PXCmiFoz68%2BPje0Pd4tM5Nm40u94RXtn7J8aMEwp7OYGKzDL1pzABjqkAc%2FwuF3hLpXlSTEt%2Bl%2B7ZPl32e5zlPe3y3kAfjmJe1npLxEqxXernO3ne0XdpBK23LHFkpFViOsHCus6ns%2BYWuc4b1uPgoaYMiNHEcHAmpxRZDFVIZY8NGl2MqomEQu1sHbf58%2Fb0C%2FxtestDHlN7aJRel%2FaetLgx45Cyjkj64Vi%2B8PZd94rFuTENRaObI62GyaMaA1J65ui1W5%2BJXLvR7lYuCdE&X-Amz-Signature=7ea578b14cc13e2fdeab5c670ddf1e4d9f67e8c27bca2b133d86623ea8065be1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N6LKPF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDdyyjT%2FpRoChzrqwcMhME6Vfoukdb%2FwNki0oylO87mZAIhAJsPlndhpc%2BWHyYtVio48xXl%2B%2FRvpyg4DVlBoScwMvEPKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZfw6Hj1T1yhilVkcq3AM2uJdZmnUqYdXvgrDk6cQGH0cg0xoKukTRabrYuM6ERSUHBfUDNnn2BDpzCxZvICutKbcKk0jlxagW81a4qcreH82scM30Zqh9Z6JZG5z%2BJb9%2Fq0uNnMWiXcIht3czIVVCiYjOSVUIbp6MNW%2FfypMMFgCFScEmKGSqclnDXjxjZe539OZQFdkddb9UQcW28BhecmWa5Cd9cN9IGUnp7U1uDe9FqT4je4WoZ%2FU1dt3rSt3QjywEF0MInV9Uweev8699CQlDUSuWGJ%2BZBNgepjSsLb1XMQDD4VypL%2B807%2BXKSdhGvASWJoa2emzIRSXWSDDx1U6JwMGGFVoWsLCyYQsZwWcqJyp6qXO9Ibcn%2Bmlidi9rWtXv9F2eznNsbZFwXakKrNu1tQLcJ0SF0qkYJ%2FcoSyocWnN92CCLx7i%2BfmsMA8y5zbMUGDSTnA9Kw7HlTwjHHd2BlZl7EaIoS7AKkiRXiyJ%2BAeg%2Bf2v3C%2F56kE5WQqlmmaOV1PLtK6yywVAbGBv%2FZfwS3bKpNkJB%2B8SEHOXlGvzz38uKek%2BndCefW6DXpaQ3JAjvUGV7eTFZ%2FAtzAbQDj372klRJIXt2PXCmiFoz68%2BPje0Pd4tM5Nm40u94RXtn7J8aMEwp7OYGKzDL1pzABjqkAc%2FwuF3hLpXlSTEt%2Bl%2B7ZPl32e5zlPe3y3kAfjmJe1npLxEqxXernO3ne0XdpBK23LHFkpFViOsHCus6ns%2BYWuc4b1uPgoaYMiNHEcHAmpxRZDFVIZY8NGl2MqomEQu1sHbf58%2Fb0C%2FxtestDHlN7aJRel%2FaetLgx45Cyjkj64Vi%2B8PZd94rFuTENRaObI62GyaMaA1J65ui1W5%2BJXLvR7lYuCdE&X-Amz-Signature=156e8aa9b54a966c013113f347b5ee6d82a8f8aef6d41951194e01eeefc4a3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
