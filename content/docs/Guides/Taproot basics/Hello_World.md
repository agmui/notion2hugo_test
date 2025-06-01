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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAH6LTK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDCyllwPQKESeBH91T3WoqWt8sRpz%2B2agCOkhyuwHl9nwIgSjUarWUnn%2FAfnZo2fkypZYRwsTaDyhQySjwLQ96FU%2BYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOsbjYcrML7VHVvhCrcA%2B%2Bfy7SsjezBq7BS%2BFVWfXoFeG1Cl9amA1%2BzkcKrYeR7lSgY1nqM2YpDWdWgqWOfHXvvtM3sxdgEW%2BDoNoy%2BcRHoAT2CixDtTEI66vJjXuURO1989PGrf0RZz6bdqdN7bGQBdZiQNNIni2ahdXXLIhfSEhRDSlbRWF7C8jPB72zJwTQtUyrAOQo2BR397r%2FaChlyufJhVC4%2Bgdopc5fhAlqlr6CzmogogbheduvHMVQdXJhsScMW361hOO89FmRRh%2FGkRVLzrelLCCyU9ZybodEdYm8w3cKl0qwVumzLaZVjkPpccQJjWSPzEYUJq2HAUhZ2ivyG33gIGas230NeBk%2FnYrwSvnfzvMeIIWbzzkYbd5QsBsHPJINMruBT47CzgiShNYHo8gipxwdK6shx7ZFRQT%2FJXwHUfU0IyVSdSgme0cLChhvPlaE7VadyosSjN1Evh3YuNIpWZY7TFpi4vXfJAGuFvGDjwRGgpX6W054ACDpAxUIuaQtl0tS5%2BA0pAebznYTUuHA2h7p3jyItPv2dp5xtAhO10jbdLzB5t%2FG9RSEJT1FEnNIyK9%2FFw7FHJV%2BpS8usoncCPGVGF9jc50pQ1T6CTHwxUaBjNG6UckV4V5FCz3Hw8N5i9nSAMLHe8MEGOqUBxFpJZ1F%2BOIkyDAfVHItld4mQrTYeh8uIZ8BEodrB0t9MMSo%2FftP8OipfVMPkIQmerlQW4tDuJGxSKg18SKTRJP%2BeJEVybOOYVbauO7GuNJgpYIa3f42urzX8%2B%2Bwk3WNtAMMF%2BZ9BzfpX089ekiQ5tajG2TTVWCJj%2BWPKR59Wtg6TBLWsgNr9Pnu1Up40xV3MrKbZ%2B2MyehWzTKoM1ntNp91utQA%2B&X-Amz-Signature=956d6e84250f24aa837e1693de1412e144edc79c879c2a57e8cdf6da063c1eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAH6LTK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDCyllwPQKESeBH91T3WoqWt8sRpz%2B2agCOkhyuwHl9nwIgSjUarWUnn%2FAfnZo2fkypZYRwsTaDyhQySjwLQ96FU%2BYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOsbjYcrML7VHVvhCrcA%2B%2Bfy7SsjezBq7BS%2BFVWfXoFeG1Cl9amA1%2BzkcKrYeR7lSgY1nqM2YpDWdWgqWOfHXvvtM3sxdgEW%2BDoNoy%2BcRHoAT2CixDtTEI66vJjXuURO1989PGrf0RZz6bdqdN7bGQBdZiQNNIni2ahdXXLIhfSEhRDSlbRWF7C8jPB72zJwTQtUyrAOQo2BR397r%2FaChlyufJhVC4%2Bgdopc5fhAlqlr6CzmogogbheduvHMVQdXJhsScMW361hOO89FmRRh%2FGkRVLzrelLCCyU9ZybodEdYm8w3cKl0qwVumzLaZVjkPpccQJjWSPzEYUJq2HAUhZ2ivyG33gIGas230NeBk%2FnYrwSvnfzvMeIIWbzzkYbd5QsBsHPJINMruBT47CzgiShNYHo8gipxwdK6shx7ZFRQT%2FJXwHUfU0IyVSdSgme0cLChhvPlaE7VadyosSjN1Evh3YuNIpWZY7TFpi4vXfJAGuFvGDjwRGgpX6W054ACDpAxUIuaQtl0tS5%2BA0pAebznYTUuHA2h7p3jyItPv2dp5xtAhO10jbdLzB5t%2FG9RSEJT1FEnNIyK9%2FFw7FHJV%2BpS8usoncCPGVGF9jc50pQ1T6CTHwxUaBjNG6UckV4V5FCz3Hw8N5i9nSAMLHe8MEGOqUBxFpJZ1F%2BOIkyDAfVHItld4mQrTYeh8uIZ8BEodrB0t9MMSo%2FftP8OipfVMPkIQmerlQW4tDuJGxSKg18SKTRJP%2BeJEVybOOYVbauO7GuNJgpYIa3f42urzX8%2B%2Bwk3WNtAMMF%2BZ9BzfpX089ekiQ5tajG2TTVWCJj%2BWPKR59Wtg6TBLWsgNr9Pnu1Up40xV3MrKbZ%2B2MyehWzTKoM1ntNp91utQA%2B&X-Amz-Signature=380376ff1837b8d75d0b0e07507a837e12ceaf6646aecacab1fe368146a1a621&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
