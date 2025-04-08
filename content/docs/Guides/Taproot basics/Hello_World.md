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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZZG2OB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI1UUdFwNaMVvZkPB%2F8pZ8LGPrM%2BPeSKO8s9PSDG8ZiAiAQiBQfW6tHT4C5TpZgOERFU0y7x6%2F6gdt657NGl8MfdCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXliEgOeI3RPK4c%2BmKtwDiS%2FKCyyJ295W5mt76%2B%2FHoFbauHfFaNcJzIUeGUyGvkzgRjsJ3wT24ddn%2FAf7TAxP6rYTITADPtdyNtKPkBmwFWm04f5T7QSkNWDjzf9SYlxtYnfAX0%2Fiv1n8ua51vpVj1xLk1%2Fda81aYM98Y0I6FBftU8vJgJZKs4kHFAwbi5PyaFnq0vK4CW3882EfVOKdlBa%2FRPWVm2AdboyRhO%2ByhXqoPskHUgcA4RwsRqSmpEV4WceqzU2uE0MhpYw%2FQdslmd%2BXCbPWoYWXu741%2Bb9bhYVeO4ec4VoZru0MGlp934tncmgHC8oDYO0aaH3c2mL3Tr8TFhTlpxTCVnbj4M5xdlFZ9eVdsaCULzqjXF%2BrpwhJs4f7MFDsbDhRyjn2ellIz5MWMWsBGSlylS640KaOM8gWgq3Ivp4YWyOCxRx7BFr54JiQkVloUnpu6Zl1hGqQg5%2FFu26jSMyRPpJ6Dc5HmFVbT2s4bzw%2Falv7stAJTO0SYBZX2gjKXwJQAYn%2FQjYZ%2B4Mv5DoAqDS5yuu9lYHwLHLzy55P%2BmtpXzpOmqMPaR%2F1KU%2Bl%2BIakSRG%2FX4YGACYopeNvi4QK9uBqDL1u83TM4z9FODOi8TPmHa2%2BLu6jfQ6UEI4Ilq36o%2Fdz0Rs8whLzTvwY6pgHK43npPJNIVGbk1Bk29gBRpuHxHZyVABlZV1TG3%2F5yFQkrtwlBj7DSCDec9IZf3n9FQVNzfLJzyWCpVg5m7AAEW3trDaGkiNpnKlv2Mbmyz2zOO0NeO0nOv7p9D4gKw%2BeVWFwDMxlFclaXn8I4vjdG0edB%2FWM3wYos6Z7atPiTHM67764cJjKQ0INFTc1jzQ7M8fN9j2cqbznO9AnMnLeMER7JgIyY&X-Amz-Signature=89e4381a0db5ce29a3a926115369f94f409cef241ec5cfbfdbd6092b3e7e198d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZZG2OB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI1UUdFwNaMVvZkPB%2F8pZ8LGPrM%2BPeSKO8s9PSDG8ZiAiAQiBQfW6tHT4C5TpZgOERFU0y7x6%2F6gdt657NGl8MfdCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXliEgOeI3RPK4c%2BmKtwDiS%2FKCyyJ295W5mt76%2B%2FHoFbauHfFaNcJzIUeGUyGvkzgRjsJ3wT24ddn%2FAf7TAxP6rYTITADPtdyNtKPkBmwFWm04f5T7QSkNWDjzf9SYlxtYnfAX0%2Fiv1n8ua51vpVj1xLk1%2Fda81aYM98Y0I6FBftU8vJgJZKs4kHFAwbi5PyaFnq0vK4CW3882EfVOKdlBa%2FRPWVm2AdboyRhO%2ByhXqoPskHUgcA4RwsRqSmpEV4WceqzU2uE0MhpYw%2FQdslmd%2BXCbPWoYWXu741%2Bb9bhYVeO4ec4VoZru0MGlp934tncmgHC8oDYO0aaH3c2mL3Tr8TFhTlpxTCVnbj4M5xdlFZ9eVdsaCULzqjXF%2BrpwhJs4f7MFDsbDhRyjn2ellIz5MWMWsBGSlylS640KaOM8gWgq3Ivp4YWyOCxRx7BFr54JiQkVloUnpu6Zl1hGqQg5%2FFu26jSMyRPpJ6Dc5HmFVbT2s4bzw%2Falv7stAJTO0SYBZX2gjKXwJQAYn%2FQjYZ%2B4Mv5DoAqDS5yuu9lYHwLHLzy55P%2BmtpXzpOmqMPaR%2F1KU%2Bl%2BIakSRG%2FX4YGACYopeNvi4QK9uBqDL1u83TM4z9FODOi8TPmHa2%2BLu6jfQ6UEI4Ilq36o%2Fdz0Rs8whLzTvwY6pgHK43npPJNIVGbk1Bk29gBRpuHxHZyVABlZV1TG3%2F5yFQkrtwlBj7DSCDec9IZf3n9FQVNzfLJzyWCpVg5m7AAEW3trDaGkiNpnKlv2Mbmyz2zOO0NeO0nOv7p9D4gKw%2BeVWFwDMxlFclaXn8I4vjdG0edB%2FWM3wYos6Z7atPiTHM67764cJjKQ0INFTc1jzQ7M8fN9j2cqbznO9AnMnLeMER7JgIyY&X-Amz-Signature=fb41c0377d16d2c3bcdb1f9195b6c3309599520b4b51c4c5ba16dbea23181677&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
