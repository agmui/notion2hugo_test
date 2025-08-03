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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLETXZ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwUposuIQQSK77VDy6xSMCqAKLonr%2ByBv%2B%2BgpUWTRUTgIgA5wXFHjK4%2BtPEpfAmi8BSGm%2F16fia2ytlOgL23%2FXiIMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBDnfU%2BjgcI%2F%2FKvQ4ircA7zQYgH4rh9tnCmqj91Iy0N5aWcxm7iC0qvVp77Rdvu0tK5sLGHtQxovif03AYjlifW%2F9RXY6imU0uwNfTAx%2FYRQGQBMlNAG43I4vBJG%2FaT1NUOtNENChQi1eWKI6i1K2iB2Nw83ZVDZgwEOF97YVj%2B%2BjV4bFERihA4qy63%2BZDHyFG2J2loswTJXqABvnN8EOYeVb6RCXspJjS%2BXeq0mDTQZCLoTDUYxT7bBRzPAmQ%2FRiEDw%2FHDCyOqDl7YcclaEDnQeJWc3WH53mBC7Up8kMk9W%2BeF7%2F17ARQZKmF%2BBstEcBe13bh2q3X7LETBSivd3eeq0HZUz68vzUh%2Bl4BcTnpxVzQpPmhjX3aOTmJlm3PHpBu%2Bh3xE54Cp2TNURKTHSpoaztY55wZAkvRUDxT%2BnXvHiqy7Ifr6P5t921Y42EJ0IepFJKJ8%2BVfI%2FzA3vGA2k0bOYGOcMaRhynZFkDmjcIr84ywklipAmCcPF5y9Y%2FBer9W6UF3K9OA8cZI4HaFZBwzSsy5xT5AI6Alzv58oj35c7eQa%2FLH52y7vxUTQ4KcdbjySOcXqR45t2MAaX9FYSMpRPVe4k8kPxDotp2AsCeMGemvBB%2B0uollcn4dVTqs09aHtjnTmuiVEU06mYMNe%2BvMQGOqUBXgD%2B0aIoZmNxaIDUFK6lGopBSPrltHN3J3qgha79CU3Stta1UIGJj7hUcv1dZUTzhT8%2FsdPvA1BJnNhqFYrEh6T0kjTFceTDH92R0BYUOeu42Z8bfHUg3JLi6A3%2FY8cWZnAOkefhfcm0wWCZWub0AEX7c9dDeIcs8pIsFlOU65f4gWaPDn2%2FSPcmhYRfaVT0Z1706G7rlNXplOtf4A6%2FSMjABGMf&X-Amz-Signature=1733b746bfb7075687f20f4766e40468a18b0ec2219006402d00c9e8eb66cabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLETXZ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwUposuIQQSK77VDy6xSMCqAKLonr%2ByBv%2B%2BgpUWTRUTgIgA5wXFHjK4%2BtPEpfAmi8BSGm%2F16fia2ytlOgL23%2FXiIMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBDnfU%2BjgcI%2F%2FKvQ4ircA7zQYgH4rh9tnCmqj91Iy0N5aWcxm7iC0qvVp77Rdvu0tK5sLGHtQxovif03AYjlifW%2F9RXY6imU0uwNfTAx%2FYRQGQBMlNAG43I4vBJG%2FaT1NUOtNENChQi1eWKI6i1K2iB2Nw83ZVDZgwEOF97YVj%2B%2BjV4bFERihA4qy63%2BZDHyFG2J2loswTJXqABvnN8EOYeVb6RCXspJjS%2BXeq0mDTQZCLoTDUYxT7bBRzPAmQ%2FRiEDw%2FHDCyOqDl7YcclaEDnQeJWc3WH53mBC7Up8kMk9W%2BeF7%2F17ARQZKmF%2BBstEcBe13bh2q3X7LETBSivd3eeq0HZUz68vzUh%2Bl4BcTnpxVzQpPmhjX3aOTmJlm3PHpBu%2Bh3xE54Cp2TNURKTHSpoaztY55wZAkvRUDxT%2BnXvHiqy7Ifr6P5t921Y42EJ0IepFJKJ8%2BVfI%2FzA3vGA2k0bOYGOcMaRhynZFkDmjcIr84ywklipAmCcPF5y9Y%2FBer9W6UF3K9OA8cZI4HaFZBwzSsy5xT5AI6Alzv58oj35c7eQa%2FLH52y7vxUTQ4KcdbjySOcXqR45t2MAaX9FYSMpRPVe4k8kPxDotp2AsCeMGemvBB%2B0uollcn4dVTqs09aHtjnTmuiVEU06mYMNe%2BvMQGOqUBXgD%2B0aIoZmNxaIDUFK6lGopBSPrltHN3J3qgha79CU3Stta1UIGJj7hUcv1dZUTzhT8%2FsdPvA1BJnNhqFYrEh6T0kjTFceTDH92R0BYUOeu42Z8bfHUg3JLi6A3%2FY8cWZnAOkefhfcm0wWCZWub0AEX7c9dDeIcs8pIsFlOU65f4gWaPDn2%2FSPcmhYRfaVT0Z1706G7rlNXplOtf4A6%2FSMjABGMf&X-Amz-Signature=40f1e54b090cf4a40d0822c654349b418a984205c47622ecc785943a357f3485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
