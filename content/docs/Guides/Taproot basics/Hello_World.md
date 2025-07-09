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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREPAJ5I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz9MM0Pg6utaaOH2teaoSBjY4iYBmmiauAK5ZefT8FzAiEAiTD9vGQc%2B%2BCd0igrQuSmijkclx5aBwuhjta7aJLSqdUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu4VWYLEkNFhA9FeCrcA9QemupOvHqghTTWlrgDU7lehWrVwXJw7o8ZSaRhtriyayjvCLpKqGQvv9nJ%2Bhxou2Rv3nI0HoXrYahQYBjuiBe5GQTSw7ZQsU4pUSJ9ob2A%2F8xCtBWyDE0%2BCHtDrDfSMHle0hg%2BcWiWqiPbs4EHQPetpKWMVY%2F7IzyCP7DsGMslpGW4KWIhep29dW89LaH3YzkhWYUJW5DQCWmMX7k%2Fg9TLZOZDn83gEr2nJEzQz09O9WeZIlVnvBIUjqMwHSIrZVzwjHjNayfPBBapkamkx6o8ZY0BUq8eA1cNhoODHRpOv1cwBmdU5ohaA6Fi1HtDIq7GlqTHbiBI4Z5DOcGaPgzgOEzr8RsqgSgrlhye8WTFtItRuAHu7vmdBdWZx1E%2Fgne8kxO%2BNSsISu%2FvoKfkKkG4xYwZzd5lpMkPOnK0kog9%2FMeCJMFNTOpqZpYVOQnk%2FOr%2FEZQ1zsapzzY5XejGjeyd0p%2F3QwaHWP6lO2MFOrD0wRO8mP%2F82s6Z8zRgp9NL%2BUdls25YPcvhLRPS2%2BT5D02e4DWiA%2FcwIHgj5C%2BRC6KGl9v87nWK6ZD8ajsu5zblD0ABflAydzRfPxGUOJYUFx76oAxcwnKFoa95PzWVwoU8w70MPPDJ6Jifgyu%2BMLGau8MGOqUBd7HTbLcutHBUEv71Q8g7LL%2B6WV2fht4wAmcLNIiSoD%2BGJgMabWHldGI3iLyHHvQ6c3HuDUjDzrS4xPWNRyj3SjQOMkQ8O4rrB6dU%2BbgnsBPSSt6MZ4qAf3FRwiq5U6Sy8g8kVarSFJkPukj3esAuf3mArMHpOMGt5A6p2YmX%2FEPmceOtRYSLSqQvz6mrvz%2FjkpKi8P%2BPmw0DgT1Grm7MwyjRqkhE&X-Amz-Signature=80718bc6d6c5da516bea1a3b79ab33bb88830487813aa04d8deffc5073f1e0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREPAJ5I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz9MM0Pg6utaaOH2teaoSBjY4iYBmmiauAK5ZefT8FzAiEAiTD9vGQc%2B%2BCd0igrQuSmijkclx5aBwuhjta7aJLSqdUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu4VWYLEkNFhA9FeCrcA9QemupOvHqghTTWlrgDU7lehWrVwXJw7o8ZSaRhtriyayjvCLpKqGQvv9nJ%2Bhxou2Rv3nI0HoXrYahQYBjuiBe5GQTSw7ZQsU4pUSJ9ob2A%2F8xCtBWyDE0%2BCHtDrDfSMHle0hg%2BcWiWqiPbs4EHQPetpKWMVY%2F7IzyCP7DsGMslpGW4KWIhep29dW89LaH3YzkhWYUJW5DQCWmMX7k%2Fg9TLZOZDn83gEr2nJEzQz09O9WeZIlVnvBIUjqMwHSIrZVzwjHjNayfPBBapkamkx6o8ZY0BUq8eA1cNhoODHRpOv1cwBmdU5ohaA6Fi1HtDIq7GlqTHbiBI4Z5DOcGaPgzgOEzr8RsqgSgrlhye8WTFtItRuAHu7vmdBdWZx1E%2Fgne8kxO%2BNSsISu%2FvoKfkKkG4xYwZzd5lpMkPOnK0kog9%2FMeCJMFNTOpqZpYVOQnk%2FOr%2FEZQ1zsapzzY5XejGjeyd0p%2F3QwaHWP6lO2MFOrD0wRO8mP%2F82s6Z8zRgp9NL%2BUdls25YPcvhLRPS2%2BT5D02e4DWiA%2FcwIHgj5C%2BRC6KGl9v87nWK6ZD8ajsu5zblD0ABflAydzRfPxGUOJYUFx76oAxcwnKFoa95PzWVwoU8w70MPPDJ6Jifgyu%2BMLGau8MGOqUBd7HTbLcutHBUEv71Q8g7LL%2B6WV2fht4wAmcLNIiSoD%2BGJgMabWHldGI3iLyHHvQ6c3HuDUjDzrS4xPWNRyj3SjQOMkQ8O4rrB6dU%2BbgnsBPSSt6MZ4qAf3FRwiq5U6Sy8g8kVarSFJkPukj3esAuf3mArMHpOMGt5A6p2YmX%2FEPmceOtRYSLSqQvz6mrvz%2FjkpKi8P%2BPmw0DgT1Grm7MwyjRqkhE&X-Amz-Signature=6f69092f3b6fb635e39449b0937c90e825e71deb2d7f9376acda871b001f5a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
