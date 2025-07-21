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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKAOSXV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwrbnKB4zJtfEErpXQEZKI3HBbGIayzCkN%2FQEoJuGeAiAkRpw%2F%2F%2B9DwCmnDSv3E0p8%2BMY7jYvSiMCXk%2BS0r19uTSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPYeyy1uyqLR7lBiKtwDd1gzFYpkY73vVm6CZXafaRZfkaBsDeJphAuQpzdS2tdR2N3q3DvJ8CURSbywYkYAL5VSDgQnzSWrGHOt5ZAv9HGMPNEChiibq%2FPr%2FMpUM4e9tPY1OF%2BHALS%2FBDDNOdvHJnqsYs%2FCJ8ZO1XVtcV1qplN99Z7biO0%2BOjyngKitmp4eclDXx%2BfHlLLlPH%2F2GfiKze7%2BG372mAB7OC2f3NRYxEs8nTaaIWBHKnwHDWCO878CWGD86kW%2FopXKGfbMI1Dg5SNbwvPkqPmORVkQPWEFcVTg2TCYkKN7fFb56JLWvMUxG5MNhwkks3SKWElzBCf0mconPzvwQbA2Q7XwUIDVK5ztgcbmv1%2Fz8tVQVM8HmmMnxI8EdeS0HUHnvyjXgTsmApqdaaWCmz7lk1ps4bEyk%2Fkv394HUagdflOrIzuUkzoI6Dfwz4GtcbWOsJ8zgM2s5I6dHDtH6CGMkYD4Yo4wPOBTA0Pt1nGm%2FibqBwekqqfwybvvTU8aa1axuVzVi7DEYplFdqprTzSiSr9%2FtBKAgzwFDku6HqrLdXjlHxETKUEkR2yWptgPYVorDrkxjYRk7KMMB0mDvUBA1nPjbfbl1lBcoday%2FqWHJ9dbzp7LlV%2BowiT%2BPHHfnd8hcqYwwpP3wwY6pgERzmGq4u5QQe6yeDjpy4kXX12IsLRfY1G7t0Cd830X8jE6fv1EVIaXeACGKXl3nl9mmTTEW%2B8FfTDKPToXWAij2%2BwAC6U5oshawYrsDG3lihrS8D6vYKum9qM8SdTVgAowAiwQEdZn882UgLq2bXDSuxSV0z9nR7chxMN5cZZ7UCdbxfXG%2Fv1Ku8mo%2FnBn5THBG90IHouDW1j%2Fl3CD8%2B%2BJ8GkLYa7n&X-Amz-Signature=f978d32273b71e1b7ef2b2b6720210528f9dc7424f548d78ed2c6d3360ea6fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKAOSXV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwrbnKB4zJtfEErpXQEZKI3HBbGIayzCkN%2FQEoJuGeAiAkRpw%2F%2F%2B9DwCmnDSv3E0p8%2BMY7jYvSiMCXk%2BS0r19uTSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPYeyy1uyqLR7lBiKtwDd1gzFYpkY73vVm6CZXafaRZfkaBsDeJphAuQpzdS2tdR2N3q3DvJ8CURSbywYkYAL5VSDgQnzSWrGHOt5ZAv9HGMPNEChiibq%2FPr%2FMpUM4e9tPY1OF%2BHALS%2FBDDNOdvHJnqsYs%2FCJ8ZO1XVtcV1qplN99Z7biO0%2BOjyngKitmp4eclDXx%2BfHlLLlPH%2F2GfiKze7%2BG372mAB7OC2f3NRYxEs8nTaaIWBHKnwHDWCO878CWGD86kW%2FopXKGfbMI1Dg5SNbwvPkqPmORVkQPWEFcVTg2TCYkKN7fFb56JLWvMUxG5MNhwkks3SKWElzBCf0mconPzvwQbA2Q7XwUIDVK5ztgcbmv1%2Fz8tVQVM8HmmMnxI8EdeS0HUHnvyjXgTsmApqdaaWCmz7lk1ps4bEyk%2Fkv394HUagdflOrIzuUkzoI6Dfwz4GtcbWOsJ8zgM2s5I6dHDtH6CGMkYD4Yo4wPOBTA0Pt1nGm%2FibqBwekqqfwybvvTU8aa1axuVzVi7DEYplFdqprTzSiSr9%2FtBKAgzwFDku6HqrLdXjlHxETKUEkR2yWptgPYVorDrkxjYRk7KMMB0mDvUBA1nPjbfbl1lBcoday%2FqWHJ9dbzp7LlV%2BowiT%2BPHHfnd8hcqYwwpP3wwY6pgERzmGq4u5QQe6yeDjpy4kXX12IsLRfY1G7t0Cd830X8jE6fv1EVIaXeACGKXl3nl9mmTTEW%2B8FfTDKPToXWAij2%2BwAC6U5oshawYrsDG3lihrS8D6vYKum9qM8SdTVgAowAiwQEdZn882UgLq2bXDSuxSV0z9nR7chxMN5cZZ7UCdbxfXG%2Fv1Ku8mo%2FnBn5THBG90IHouDW1j%2Fl3CD8%2B%2BJ8GkLYa7n&X-Amz-Signature=4a50dd7cb1611620b2a860b31961543647cf9d1d4093091ba35b0cb65272145c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
