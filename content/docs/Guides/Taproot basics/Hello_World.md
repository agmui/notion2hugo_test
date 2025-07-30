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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4SBXKX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUQ7CgpcH%2FBk5TG9ZR3B9waGCCBVB9t4yG3%2Fr57Kk0wIhAKijqwzHLibDCM5aCuBISWEBMfnQE%2Fv0Asf3aLNjaCzHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwPQOXKDayehmQeaEq3ANgS6fa2gMalDzuSB6yUhlxRBFlGinE%2FgUdYwTx%2FSQcpAubQhIPq6QYOBxhak2j5oSojzQYB0Srawp90MHTgKWBGRysI3nVf7%2FuvU%2BHUp1ddaMoEhqi3%2FQ%2F0nKWvwNF1Do34sFTkCumO0ulu5TMkQtLmEVjqE9o69JC5mgO7ZxgTAaU5NudP8m94ZDdeUD%2FjmYppgk3a5Zce1q8DU8eHrbUfa42t3WmMwrGgO1HCqdt2S7sKx%2F6GtLMSpvSelSQmvsjog%2FswdT%2BpqPS%2BRS5CQX2kXpRE%2F7pF3wc8eo%2BqXvZx0AQGA6Cnf2YSwNv9YtKO6qp%2FaXThlpQLz3AlT6etty2dz4Xzv%2Fg7zZr97i5X317WHPMkJ%2F9ukffihj8Lh1gnlwI5cEFWkOluJOZyi9scXkRL0aW3RqBuerl49HO4ScUHgLUhBuZNOiVzQnxVP6zup%2Bgri8P6bbeBR%2Fx4Uvsg9ATda5Sh%2BQQUZOmTKO8tsMvX8P9q16bQRk%2B1vpzxC6ZXm9d0tftQquV98YHetksYLEK3ajDW1%2Fa3niDj1FoiCyWXgIwVKx8SRq7hMr0QanQAHKDQ5eLExqXujOG0V0lUrVIfbCF8%2BfALMRMKxG4iFKD50VeLMj8wxCEtTI47jDg2abEBjqkASJJAreQPopv7PGCMk9Htg%2BcYV9BcC4RfSxhBRYllK%2F%2FWhvg91EO9M9mQqJaMbVfah%2F3vM4CmU6XqdxUz%2BEQ3JLMJRpsGBjX6fvn5NWNsTCD575e85JktXDxAA6HmWAnOoqbQWGf4CjWZdcRweWwclDSjPY1sAREFVjdFMvNe%2B%2FpPrdcesHPFS71uaFPhK8CkzhHU11mqTi5H99dd7GyzxH5EgoT&X-Amz-Signature=684d483dc3a2557d2bca5afdcfccabdf42a5c171f5a7eb083fefb01132c172ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4SBXKX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUQ7CgpcH%2FBk5TG9ZR3B9waGCCBVB9t4yG3%2Fr57Kk0wIhAKijqwzHLibDCM5aCuBISWEBMfnQE%2Fv0Asf3aLNjaCzHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwPQOXKDayehmQeaEq3ANgS6fa2gMalDzuSB6yUhlxRBFlGinE%2FgUdYwTx%2FSQcpAubQhIPq6QYOBxhak2j5oSojzQYB0Srawp90MHTgKWBGRysI3nVf7%2FuvU%2BHUp1ddaMoEhqi3%2FQ%2F0nKWvwNF1Do34sFTkCumO0ulu5TMkQtLmEVjqE9o69JC5mgO7ZxgTAaU5NudP8m94ZDdeUD%2FjmYppgk3a5Zce1q8DU8eHrbUfa42t3WmMwrGgO1HCqdt2S7sKx%2F6GtLMSpvSelSQmvsjog%2FswdT%2BpqPS%2BRS5CQX2kXpRE%2F7pF3wc8eo%2BqXvZx0AQGA6Cnf2YSwNv9YtKO6qp%2FaXThlpQLz3AlT6etty2dz4Xzv%2Fg7zZr97i5X317WHPMkJ%2F9ukffihj8Lh1gnlwI5cEFWkOluJOZyi9scXkRL0aW3RqBuerl49HO4ScUHgLUhBuZNOiVzQnxVP6zup%2Bgri8P6bbeBR%2Fx4Uvsg9ATda5Sh%2BQQUZOmTKO8tsMvX8P9q16bQRk%2B1vpzxC6ZXm9d0tftQquV98YHetksYLEK3ajDW1%2Fa3niDj1FoiCyWXgIwVKx8SRq7hMr0QanQAHKDQ5eLExqXujOG0V0lUrVIfbCF8%2BfALMRMKxG4iFKD50VeLMj8wxCEtTI47jDg2abEBjqkASJJAreQPopv7PGCMk9Htg%2BcYV9BcC4RfSxhBRYllK%2F%2FWhvg91EO9M9mQqJaMbVfah%2F3vM4CmU6XqdxUz%2BEQ3JLMJRpsGBjX6fvn5NWNsTCD575e85JktXDxAA6HmWAnOoqbQWGf4CjWZdcRweWwclDSjPY1sAREFVjdFMvNe%2B%2FpPrdcesHPFS71uaFPhK8CkzhHU11mqTi5H99dd7GyzxH5EgoT&X-Amz-Signature=fb8922007b236570e562744a6cc4effa52590a990edbe62329c5ff56fd064c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
