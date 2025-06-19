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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4OFCRX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2BTVsaP7N%2F6CDTNGuLBAKSY%2FNIYmuVDXscmKnuzz04AiBB62u%2FvE1jeLk%2Fdl15lFoUhN8HIcEHOzSXyeGzhG%2FXDSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlifYltEjBap84ZoKtwDZw31AxgDPP4EtJbvkbB6iHNe%2BdhitQqR5kVKTkiwwjGuyltJ1drTxYzJV6NbNW8GHBX35KQ7S1U%2BP1g6P8KdiJ1nzxT%2FNSOWZ3s8D%2BPDypVsmZ%2BWpu9gbFE6Or0RvNEzhrHeQIhZ2I8piGJXyDy5RVwIFosTUVioP99ZFxedXdf%2Bo%2FiydojMccMkDBB2ZfRIwvR4JTiyHgAiO1YAmRb7RuTbS1JsMWKYr5RUmElcdk%2BUI5JyVJIPMZoyl7nUDLvEX9phdZwYJI5hfUI1n8b9t%2BFtqK29rgyYrUeGCW2IqteNAZU7F02dVclWwVWf5IYAMgNBYDf%2FYfTDh0hpXA2rnHAGZbcnt7dK35A%2FzjFzPAGppPIblPNZSI7GEGC6VPyI02eYdCttzvdUrXHj5XLhtkU%2BjTzrpn5J6H5mZfBDE5oNmnmHd1hlBltuzFLA6FFIk0Wa1zuuHbRGRCAehsCOu3ffB7hs1iypKeGmq299Cb0xMUkmQ6xpXbUURs1r12fyx9ZOEN%2B9w5DK7LJ8H7DcaDCyvgrYZ%2B7gIfZttIKWPMX%2BmfhbQUBMZoSarFd3rikvBpIychz%2F569Jhcyqf%2FytFrcO%2FeVb0i2WunR9MPN9OY79ifoK1YGi0L4wLSUwooTOwgY6pgHjk5YY3SnAb%2BTu4fxXcZwW%2BY3cNpCaZSMBzY2HMoK%2BH%2BjxWGtEQOX9mCYxHh961ydBRJmGPS6DEdgjJZnQV95T9JpYRIOKlq%2B6xYvZlMj0zXh%2Bv%2FkkVFrhXSk3A0tNJyfGU8mrEbFUPWDzEq7u%2BJ0AdDW8GqZ5a7UuWWi9kd4tyIWUj0gkYkIrJnl%2FTS78UxAyzdcSw%2BqGqHVYhpNqaIbkB1MxHJIq&X-Amz-Signature=8e55755fee252d137974754a192ae613a3c847dcfd1125d9fddc48d82e98f52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4OFCRX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2BTVsaP7N%2F6CDTNGuLBAKSY%2FNIYmuVDXscmKnuzz04AiBB62u%2FvE1jeLk%2Fdl15lFoUhN8HIcEHOzSXyeGzhG%2FXDSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlifYltEjBap84ZoKtwDZw31AxgDPP4EtJbvkbB6iHNe%2BdhitQqR5kVKTkiwwjGuyltJ1drTxYzJV6NbNW8GHBX35KQ7S1U%2BP1g6P8KdiJ1nzxT%2FNSOWZ3s8D%2BPDypVsmZ%2BWpu9gbFE6Or0RvNEzhrHeQIhZ2I8piGJXyDy5RVwIFosTUVioP99ZFxedXdf%2Bo%2FiydojMccMkDBB2ZfRIwvR4JTiyHgAiO1YAmRb7RuTbS1JsMWKYr5RUmElcdk%2BUI5JyVJIPMZoyl7nUDLvEX9phdZwYJI5hfUI1n8b9t%2BFtqK29rgyYrUeGCW2IqteNAZU7F02dVclWwVWf5IYAMgNBYDf%2FYfTDh0hpXA2rnHAGZbcnt7dK35A%2FzjFzPAGppPIblPNZSI7GEGC6VPyI02eYdCttzvdUrXHj5XLhtkU%2BjTzrpn5J6H5mZfBDE5oNmnmHd1hlBltuzFLA6FFIk0Wa1zuuHbRGRCAehsCOu3ffB7hs1iypKeGmq299Cb0xMUkmQ6xpXbUURs1r12fyx9ZOEN%2B9w5DK7LJ8H7DcaDCyvgrYZ%2B7gIfZttIKWPMX%2BmfhbQUBMZoSarFd3rikvBpIychz%2F569Jhcyqf%2FytFrcO%2FeVb0i2WunR9MPN9OY79ifoK1YGi0L4wLSUwooTOwgY6pgHjk5YY3SnAb%2BTu4fxXcZwW%2BY3cNpCaZSMBzY2HMoK%2BH%2BjxWGtEQOX9mCYxHh961ydBRJmGPS6DEdgjJZnQV95T9JpYRIOKlq%2B6xYvZlMj0zXh%2Bv%2FkkVFrhXSk3A0tNJyfGU8mrEbFUPWDzEq7u%2BJ0AdDW8GqZ5a7UuWWi9kd4tyIWUj0gkYkIrJnl%2FTS78UxAyzdcSw%2BqGqHVYhpNqaIbkB1MxHJIq&X-Amz-Signature=fb63689db124214fdd64174673f1ffb9a7ada82eb89208464e36f40542542a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
