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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB3T2FV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCgmlnc6TVZnRq%2FR%2BSI9T2Zg11rRjJ7kNSr8Pew2xACwwIgORKhcCNcHqPr1F0AAGb%2B5TH50pFLNcwK6anOyt2TWhIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb%2FW%2F4AdY9RS%2BXy8ircAxvSywvl3nOocH8rwXCTYNQLJA3%2BdVkDyObuOBhDV93%2FCUdF7x22oi4qv%2BCjcb7WdXPzSZZpUbzr1lW%2FTOMqGiMb6gl5kp8KvXgYxNauAQeaNRh0Enb6muPx5jFUUdcHd8xUWYCv6PpPOQta98l8PYyMjk8Hn%2FprLbhlYFcXEOYchb9EvgKSUD%2BfA2ZXySv3mFt%2BJf1up2S%2B8NOSI%2B4ArxRBIIyar7wLf5DjZ0rRN5taZhUDE9UOUbn5gpABgvPH3%2BqJ5Gnzm%2B6rwMxk19isVGt04tJswCA7O%2FCgsIj4R0BmSqi7owAZztQLhSWK4GIYVwFpxksC0pxo%2F6wZu%2FC7cs023SJZXUNwG14tMapPi5OrJ%2BlSja6A9tCM907Wnugsq6XcxTWA2oQfwxxlvZhrkgmLVWYd6rLqn%2F6tDhWnGh7WIutvXiPDBODb3n6dg56zamQNbE8CijEk7rBNHMpObtjWuIiZs2HYKVJXyqRJ3A9J%2BZRVSm8OIzBjdrZE4FUGV%2BQ538B%2BF%2FPDR7wOuI2mCkL0XqMNEcteDC%2BoU4YApeSLMGGGk0QhVoY9jPOeMBUcsmhCdTzN8Wf88zEyr9kGHrVeVqGT1FESGTsSOIXyP3q8NdHFVq6rqqcWaJfnMNnRhL4GOqUBGnNuj8JWKT5hWxOGmcwUGtOZZtVM%2BOxhQTrIPMy2LLXfi45zK5ssL%2BRGxtc5N2GWuLMI9QAux42MnloSUL2waixoeTKs%2F1nf3%2BDiG5WyqsnY87C86Plbw1DyoTVZc4pZqE4Op%2BUo2oguFMnaM3x4b1tRCNWCmLRbevWq9c9qM0x%2FIu%2Fifv7FhtA1vLWjOdrFdF56s4204W1rwVACea1tfqTR1yCk&X-Amz-Signature=c7ec838192ba77851999bfeedaf094d38867b4f9eb083152b7f16a303af54e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB3T2FV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCgmlnc6TVZnRq%2FR%2BSI9T2Zg11rRjJ7kNSr8Pew2xACwwIgORKhcCNcHqPr1F0AAGb%2B5TH50pFLNcwK6anOyt2TWhIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb%2FW%2F4AdY9RS%2BXy8ircAxvSywvl3nOocH8rwXCTYNQLJA3%2BdVkDyObuOBhDV93%2FCUdF7x22oi4qv%2BCjcb7WdXPzSZZpUbzr1lW%2FTOMqGiMb6gl5kp8KvXgYxNauAQeaNRh0Enb6muPx5jFUUdcHd8xUWYCv6PpPOQta98l8PYyMjk8Hn%2FprLbhlYFcXEOYchb9EvgKSUD%2BfA2ZXySv3mFt%2BJf1up2S%2B8NOSI%2B4ArxRBIIyar7wLf5DjZ0rRN5taZhUDE9UOUbn5gpABgvPH3%2BqJ5Gnzm%2B6rwMxk19isVGt04tJswCA7O%2FCgsIj4R0BmSqi7owAZztQLhSWK4GIYVwFpxksC0pxo%2F6wZu%2FC7cs023SJZXUNwG14tMapPi5OrJ%2BlSja6A9tCM907Wnugsq6XcxTWA2oQfwxxlvZhrkgmLVWYd6rLqn%2F6tDhWnGh7WIutvXiPDBODb3n6dg56zamQNbE8CijEk7rBNHMpObtjWuIiZs2HYKVJXyqRJ3A9J%2BZRVSm8OIzBjdrZE4FUGV%2BQ538B%2BF%2FPDR7wOuI2mCkL0XqMNEcteDC%2BoU4YApeSLMGGGk0QhVoY9jPOeMBUcsmhCdTzN8Wf88zEyr9kGHrVeVqGT1FESGTsSOIXyP3q8NdHFVq6rqqcWaJfnMNnRhL4GOqUBGnNuj8JWKT5hWxOGmcwUGtOZZtVM%2BOxhQTrIPMy2LLXfi45zK5ssL%2BRGxtc5N2GWuLMI9QAux42MnloSUL2waixoeTKs%2F1nf3%2BDiG5WyqsnY87C86Plbw1DyoTVZc4pZqE4Op%2BUo2oguFMnaM3x4b1tRCNWCmLRbevWq9c9qM0x%2FIu%2Fifv7FhtA1vLWjOdrFdF56s4204W1rwVACea1tfqTR1yCk&X-Amz-Signature=f99fa61e827598c47928d20029560f67a869eb494139487d8f169a1380ec4b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
