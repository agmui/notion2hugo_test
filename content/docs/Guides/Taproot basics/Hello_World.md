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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHKKKHS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsY3Iz9LskqZc%2BrfUJQ0DAl1Hpl%2F%2FqqkynDo6515Or8AiEA4DVVGH9g6qRfDzl7OXkQvbyI02IKASow4guyMiJEPcUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVAchempKz5RVmIbCrcA9%2FLsY0s1t47eR282KGn5FJVOmY9DfhhsGa%2F6l9J%2BDciV97%2BruHVQG5K5A24Oyds3RZHjIA%2F3aHAHTypLwVB42a48AfOzQmbyVyvClQUbIN9roiu5RpnTW8c6WQuOKyr2NXdw44lZAtlmWx%2FSmeC0p0cnrIW%2Bhf%2FAQmvQZ%2B%2BBHlv5jrk2kUMzFnaF%2BfEAcBUJpUPbWQVNEJf2826DAXlqXNr6uCS0mqPNqaTvvqY6Lr%2BBGGjuQ5nblrhjpcyg4Yo8DuHgH1UYqfr29Rc3%2BHq605BnmQuNpzqKjbr%2FToyZBEhIjhRQsSVx7Eb55wOUfiuNzQQNSonq8zsLJ8cwNclj00%2B0Il4msKlqnyvtaECeuG3WUT8n3YcQmzfBOh8XY%2Bakf4fiI%2F3LUtXBWYUhO64rkbR%2FmLbbeu675qPlNQdPf5oIP3%2FzQ5DZdTJXIdDL3ESU5KwJ3HOFCfXxRpZCXmlragryexXp0tiP6%2BZre33pRdoJykiuHekw%2FvCQbWn0Rf8J0ZJd0v%2FWxDSUthjVsuGXn%2BJBLCcCX5eR0e7IuJ%2FJTDMOW4xfF%2BlWAAvkiDJoo7KOxYzFC%2BNXclcO8kPWg%2BBEZhEv8V97NAFA0V4qKJaVW%2FHV0L0sYYSHYnKhDsxMKrrucMGOqUB1XBo7zp4stmlPtgH%2BY%2BnUewzSobiWE3gJxWGPP4e0VySueq8xDkW4yZAeZykRTwIk%2FqOvZzZPHE6hoKUhyjpgR2%2F6bzl0o1r%2BFrBFRZC7Phno9cbu0ByhjCD0yWufuQZbuZwE2ClBlfu8TA1Vqsr1XSt33%2Fz2kd0T9UCyV%2FqR78lwSnpw8%2Fb%2Bhf0kN4kyMTrSqHRzVirvorbuHVHbp5BT1cRFqS%2F&X-Amz-Signature=b537a4030446d8303d3707d4235542379bc7795fe917a64e93822e31185db315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHKKKHS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsY3Iz9LskqZc%2BrfUJQ0DAl1Hpl%2F%2FqqkynDo6515Or8AiEA4DVVGH9g6qRfDzl7OXkQvbyI02IKASow4guyMiJEPcUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVAchempKz5RVmIbCrcA9%2FLsY0s1t47eR282KGn5FJVOmY9DfhhsGa%2F6l9J%2BDciV97%2BruHVQG5K5A24Oyds3RZHjIA%2F3aHAHTypLwVB42a48AfOzQmbyVyvClQUbIN9roiu5RpnTW8c6WQuOKyr2NXdw44lZAtlmWx%2FSmeC0p0cnrIW%2Bhf%2FAQmvQZ%2B%2BBHlv5jrk2kUMzFnaF%2BfEAcBUJpUPbWQVNEJf2826DAXlqXNr6uCS0mqPNqaTvvqY6Lr%2BBGGjuQ5nblrhjpcyg4Yo8DuHgH1UYqfr29Rc3%2BHq605BnmQuNpzqKjbr%2FToyZBEhIjhRQsSVx7Eb55wOUfiuNzQQNSonq8zsLJ8cwNclj00%2B0Il4msKlqnyvtaECeuG3WUT8n3YcQmzfBOh8XY%2Bakf4fiI%2F3LUtXBWYUhO64rkbR%2FmLbbeu675qPlNQdPf5oIP3%2FzQ5DZdTJXIdDL3ESU5KwJ3HOFCfXxRpZCXmlragryexXp0tiP6%2BZre33pRdoJykiuHekw%2FvCQbWn0Rf8J0ZJd0v%2FWxDSUthjVsuGXn%2BJBLCcCX5eR0e7IuJ%2FJTDMOW4xfF%2BlWAAvkiDJoo7KOxYzFC%2BNXclcO8kPWg%2BBEZhEv8V97NAFA0V4qKJaVW%2FHV0L0sYYSHYnKhDsxMKrrucMGOqUB1XBo7zp4stmlPtgH%2BY%2BnUewzSobiWE3gJxWGPP4e0VySueq8xDkW4yZAeZykRTwIk%2FqOvZzZPHE6hoKUhyjpgR2%2F6bzl0o1r%2BFrBFRZC7Phno9cbu0ByhjCD0yWufuQZbuZwE2ClBlfu8TA1Vqsr1XSt33%2Fz2kd0T9UCyV%2FqR78lwSnpw8%2Fb%2Bhf0kN4kyMTrSqHRzVirvorbuHVHbp5BT1cRFqS%2F&X-Amz-Signature=4fe67ce63c2a68d5adae167cfe942354348493fce3b1d8ff93fc02ce233867a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
