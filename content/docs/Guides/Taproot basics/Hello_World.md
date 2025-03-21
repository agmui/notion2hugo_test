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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNC2F6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCN8eLaOd3YXeeV5Iqw1PZydc1ozuP%2FnyChIG7vaY2beAIhAMnUA7NoH7%2FanmefBH0M8fmML35IePy1%2BRXiVV2%2BpCx2KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX8L8AVOvbK%2FZYVqUq3AMlW8UIv4p3lu7on19WEa%2BiVtKJoBcwB4omczGyB159THM8F8kB4SiSIMuRhzEywU7UYd8Hme5FTMrGVJl2WPZ6uTRgTrqy3%2BPpPF2R0TLJCJ%2Bs%2FSgcf%2FljbDUwkwsq30iim2MukvyPWciqOXT3IE7aRlaNkz258ho26oyJpkGBCZxzoYNakPaRCrGQG58iopsqJVYoL5SmHr%2Bb6vSy4TLXu01YuJCDIDYw8SeHcfOzwaGqbjf7JBkTNk0wFGjL%2FaYyFywQK5e5YE643L6FScm9PY3VIyhwVo3mKCCAeGIG6NKiY9jtcWjv6lnqujM6UiovD5TObPGJ8bCX1IuSUu3%2B5HMghuK9HH1tZJ%2FqFS%2B14YrmjT2%2FDqBrn9mI%2B1swOa223gL%2BJOh9lWVw%2BmvgSZPhfsT39n5ReADp0QKlJLn1jttakPgbswguqvC2DcDjDgzyJBYDAlNEM1NXFU8N9km2dgSSomtbjdTQBrjsLugBfA%2BRO9cfbFOPe9WzqRgy5X5O2CA9xs47FisEVl13KxyZ5s%2BaHp53A8FXTQXUuHmOmYKtbKPB6PLjgkB2pqEnc8bWqd3ChGlei5IQc%2FILbETZ5a43tqTx1QTKRy2Z9bSBiWS12wWzy3sZ5737zTDX1%2FS%2BBjqkASGsCGWnCqhUXI5lTt90QcgfYmmGKq9meJR29ssLYgjThe8c8yf03vgqdkhMAxWnUdAth7KP6HSF6dXfhZlOntk8SwrZJgdMRU7uJL8bI52jA0%2FUu2Py1PvTXg6eHJ2zwezVbuptzZVpo9mfrZ1T0B1lZwbWcsoJEWcMHMh%2FdLOjtZVHk0b6rCca%2BvkTlPkV69yerfUcONsJPNmv%2Fg245ykkneV7&X-Amz-Signature=a88f9a2deeadb197db447d4306d4c722a51fec6be621bec4fc4b537ee38a5d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNC2F6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCN8eLaOd3YXeeV5Iqw1PZydc1ozuP%2FnyChIG7vaY2beAIhAMnUA7NoH7%2FanmefBH0M8fmML35IePy1%2BRXiVV2%2BpCx2KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX8L8AVOvbK%2FZYVqUq3AMlW8UIv4p3lu7on19WEa%2BiVtKJoBcwB4omczGyB159THM8F8kB4SiSIMuRhzEywU7UYd8Hme5FTMrGVJl2WPZ6uTRgTrqy3%2BPpPF2R0TLJCJ%2Bs%2FSgcf%2FljbDUwkwsq30iim2MukvyPWciqOXT3IE7aRlaNkz258ho26oyJpkGBCZxzoYNakPaRCrGQG58iopsqJVYoL5SmHr%2Bb6vSy4TLXu01YuJCDIDYw8SeHcfOzwaGqbjf7JBkTNk0wFGjL%2FaYyFywQK5e5YE643L6FScm9PY3VIyhwVo3mKCCAeGIG6NKiY9jtcWjv6lnqujM6UiovD5TObPGJ8bCX1IuSUu3%2B5HMghuK9HH1tZJ%2FqFS%2B14YrmjT2%2FDqBrn9mI%2B1swOa223gL%2BJOh9lWVw%2BmvgSZPhfsT39n5ReADp0QKlJLn1jttakPgbswguqvC2DcDjDgzyJBYDAlNEM1NXFU8N9km2dgSSomtbjdTQBrjsLugBfA%2BRO9cfbFOPe9WzqRgy5X5O2CA9xs47FisEVl13KxyZ5s%2BaHp53A8FXTQXUuHmOmYKtbKPB6PLjgkB2pqEnc8bWqd3ChGlei5IQc%2FILbETZ5a43tqTx1QTKRy2Z9bSBiWS12wWzy3sZ5737zTDX1%2FS%2BBjqkASGsCGWnCqhUXI5lTt90QcgfYmmGKq9meJR29ssLYgjThe8c8yf03vgqdkhMAxWnUdAth7KP6HSF6dXfhZlOntk8SwrZJgdMRU7uJL8bI52jA0%2FUu2Py1PvTXg6eHJ2zwezVbuptzZVpo9mfrZ1T0B1lZwbWcsoJEWcMHMh%2FdLOjtZVHk0b6rCca%2BvkTlPkV69yerfUcONsJPNmv%2Fg245ykkneV7&X-Amz-Signature=0f1d15f91781e6691e75b4eb6b68be0e69175553a281815e6d4248d9d5ccc7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
