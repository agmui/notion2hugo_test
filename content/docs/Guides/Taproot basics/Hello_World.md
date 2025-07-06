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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHYUATT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICIJNuZXBTg4MZx6Evi5mQpuJuvYI71YStoKu5JV97djAiBt4rlbeemnhsKJ2hxCIjy6mNM9udOHY4yj0Vs63qPxeir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIe549HVkckTu4Po4KtwDSYEgpqbKBdyfUjUIZqT6sPq2nhkaTLpNLDspXwQaEYV88cS9Gd6B5%2F01YKVZXaqZy7bvQ1IA6%2FzEiYbxv%2BCHREvqvH3H%2Fd3%2FVTNAyLZwJVBPjoNMk6Bq9YNi1HTM%2B8b2PbgRbvuOeA8TFgpzkB5FlsFOVR8u4qgClH%2BjLe44sf%2FGleYbgn6pfTOSk0IFR0bHvR8b%2BfdRhEv4NPfS%2F8SFHnnqV5M8fjkub6%2F%2FGw4mVgIoPvxw%2Bf94vkAJY0YTYKBzgd5jYEqmMhzr%2B7O1sNMzaGDUk7mi2aqldH8yY2IlHwlYq%2BdjrV19pCrc1b5ukmkBpX3U1q06PYXhlT7bQYL9UPxZa%2BOzsTfmGInig4gZAA7drkH1Cuz5cIJCuS4JxjIs6WeblWdkpvjuUWeAN2Uz27YU1UH7EB0BrMMCHpsOvs7p9XpXgmW%2FpKwxe98qDuCjeBYsP%2FhesRi0BHuncJlZ9UF1wdE%2FYKWg4FwbWcL1D%2FG7v%2BZoBiE9Cvw4O1Z%2BpcFCWRbDVdU%2FwT2p%2BcwcbUjyzw68y1dSPh1VdK4aGvhSP8YkjZwaIUCPrs0Z6F%2Br8z9cU6WS5X%2BmGGyzz6mHcX59gVJekX%2BGDeSc1eK5sSimduoaarKawVTrucMIaHUwgayowwY6pgEdhs3Z4jG04zf1ZUErGp9UZZKwdSTKlZhbEpm8XW%2B5uME%2Fggj5h2bCmAz35sqTICpKOaKco1RM0F9G1F1vOaimRYIsIpqLoMhDc1Eju5BZIK0OJZnnA40o%2B%2FNlN%2BKq1p0gh%2Fnd4dvivfdvOyNpf6YANK9rCUVR0qFlwJQPo22K7XlKiTiRzw%2FzBPmDHu7VSOLqaWpfzr4z86LN6XQlbKQGfystUE5y&X-Amz-Signature=feddae04625b3b59866a4008a923e451b97ec588f09848ce6f109921a49e62a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHYUATT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICIJNuZXBTg4MZx6Evi5mQpuJuvYI71YStoKu5JV97djAiBt4rlbeemnhsKJ2hxCIjy6mNM9udOHY4yj0Vs63qPxeir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIe549HVkckTu4Po4KtwDSYEgpqbKBdyfUjUIZqT6sPq2nhkaTLpNLDspXwQaEYV88cS9Gd6B5%2F01YKVZXaqZy7bvQ1IA6%2FzEiYbxv%2BCHREvqvH3H%2Fd3%2FVTNAyLZwJVBPjoNMk6Bq9YNi1HTM%2B8b2PbgRbvuOeA8TFgpzkB5FlsFOVR8u4qgClH%2BjLe44sf%2FGleYbgn6pfTOSk0IFR0bHvR8b%2BfdRhEv4NPfS%2F8SFHnnqV5M8fjkub6%2F%2FGw4mVgIoPvxw%2Bf94vkAJY0YTYKBzgd5jYEqmMhzr%2B7O1sNMzaGDUk7mi2aqldH8yY2IlHwlYq%2BdjrV19pCrc1b5ukmkBpX3U1q06PYXhlT7bQYL9UPxZa%2BOzsTfmGInig4gZAA7drkH1Cuz5cIJCuS4JxjIs6WeblWdkpvjuUWeAN2Uz27YU1UH7EB0BrMMCHpsOvs7p9XpXgmW%2FpKwxe98qDuCjeBYsP%2FhesRi0BHuncJlZ9UF1wdE%2FYKWg4FwbWcL1D%2FG7v%2BZoBiE9Cvw4O1Z%2BpcFCWRbDVdU%2FwT2p%2BcwcbUjyzw68y1dSPh1VdK4aGvhSP8YkjZwaIUCPrs0Z6F%2Br8z9cU6WS5X%2BmGGyzz6mHcX59gVJekX%2BGDeSc1eK5sSimduoaarKawVTrucMIaHUwgayowwY6pgEdhs3Z4jG04zf1ZUErGp9UZZKwdSTKlZhbEpm8XW%2B5uME%2Fggj5h2bCmAz35sqTICpKOaKco1RM0F9G1F1vOaimRYIsIpqLoMhDc1Eju5BZIK0OJZnnA40o%2B%2FNlN%2BKq1p0gh%2Fnd4dvivfdvOyNpf6YANK9rCUVR0qFlwJQPo22K7XlKiTiRzw%2FzBPmDHu7VSOLqaWpfzr4z86LN6XQlbKQGfystUE5y&X-Amz-Signature=a9b6229e37153ef198f7bbc8b7799af96203e27a458e9423deb3d6128f6a5794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
