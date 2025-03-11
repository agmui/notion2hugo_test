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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YC76LJP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDSoZHHGLUcS6aqQTU5KvzLejNz3CvvyXMWhnLm1dvqwAIgQKNQWyLXRSFbAoWpDuhOIq53KKwSzNhP2C8x4quhs6EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrgPBS38VNHsQKHASrcA3sXOWMYxWqpeMnVSv%2FalOitXSUaKrRDq75KVBhciWFOn095uqWMq4N1rK0r6htVNHs%2BiByxiiMdFezNl%2ByVvhfhJfv74KF2bnScID0nmKoaouqChSPJn2xIgZQrAChpiEpE1LHyIfeyaY%2FtCspho4NeaYDF3rwoe1UCN05Yf6VkcTuLkBNxj1f7lmMQdr2gOTBnnawJEDbo2%2BH7HGU7WZm4p8bJqxfCrEnnxc9erjjpzyLp7jDCULyo3zaBEFetEaIaH0xIJYM8hVAWT2JYH4KBDsR9NpfXV1V%2BB%2Fnv3beoIp5eTUIlhMyPKCbgawkwJ30wFIVaIN4b8SNjD%2FQbjegCMFiVlAD06aSkepubRTllyEPuVB0ue0ax6Euu75hakZ5TIALL0sZq2Zx1Ti4DzOyhg5ZgsrpSYbTg5oTlDijYtknjzsqqQpa5Ri9Mwclsa61klILWA8gX9k%2BgyxrJSsc8KRH%2FLKx8G8hqpohEXKFeJ4YprYqfFHgZR2KKOl1JIXwxkOyHuvdErFngwN9RuGUb%2BhPKWkngTAsCVviQiFZG6QqoEl1oJFv%2BuYaLxjz3sS%2BCF8%2F7Z%2FG8AXhzKuUiUmEg88nZ%2BEFKmxyW4aXEiEltlKLj%2B0uegVBeevPkMPjwv74GOqUBLn3vm1Ssh2vaZV5dnITLX11bu5bbepPqQk3dl%2FwhH8iEcy%2ByPFczo8PK8YmgMqNQ1WtjQYeTJoSq0kD8mY5lwy37unpJKqNsXZlsiOKfCQQ%2FAM%2FWqwbZieL5uUAG8Ysf6LoZkG91QvDGIzbcsoJDpV%2FNrYExU%2B%2B5fzYZUumm%2FxPtyMr7DO74Gl3FwQwUC%2B4xrtwMcXlIrMBn004%2B9fHZevMtxp3w&X-Amz-Signature=f3a8ff77049527601097d2f47991b27757e562d224baae7e46b3a01e2f0ec820&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YC76LJP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDSoZHHGLUcS6aqQTU5KvzLejNz3CvvyXMWhnLm1dvqwAIgQKNQWyLXRSFbAoWpDuhOIq53KKwSzNhP2C8x4quhs6EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrgPBS38VNHsQKHASrcA3sXOWMYxWqpeMnVSv%2FalOitXSUaKrRDq75KVBhciWFOn095uqWMq4N1rK0r6htVNHs%2BiByxiiMdFezNl%2ByVvhfhJfv74KF2bnScID0nmKoaouqChSPJn2xIgZQrAChpiEpE1LHyIfeyaY%2FtCspho4NeaYDF3rwoe1UCN05Yf6VkcTuLkBNxj1f7lmMQdr2gOTBnnawJEDbo2%2BH7HGU7WZm4p8bJqxfCrEnnxc9erjjpzyLp7jDCULyo3zaBEFetEaIaH0xIJYM8hVAWT2JYH4KBDsR9NpfXV1V%2BB%2Fnv3beoIp5eTUIlhMyPKCbgawkwJ30wFIVaIN4b8SNjD%2FQbjegCMFiVlAD06aSkepubRTllyEPuVB0ue0ax6Euu75hakZ5TIALL0sZq2Zx1Ti4DzOyhg5ZgsrpSYbTg5oTlDijYtknjzsqqQpa5Ri9Mwclsa61klILWA8gX9k%2BgyxrJSsc8KRH%2FLKx8G8hqpohEXKFeJ4YprYqfFHgZR2KKOl1JIXwxkOyHuvdErFngwN9RuGUb%2BhPKWkngTAsCVviQiFZG6QqoEl1oJFv%2BuYaLxjz3sS%2BCF8%2F7Z%2FG8AXhzKuUiUmEg88nZ%2BEFKmxyW4aXEiEltlKLj%2B0uegVBeevPkMPjwv74GOqUBLn3vm1Ssh2vaZV5dnITLX11bu5bbepPqQk3dl%2FwhH8iEcy%2ByPFczo8PK8YmgMqNQ1WtjQYeTJoSq0kD8mY5lwy37unpJKqNsXZlsiOKfCQQ%2FAM%2FWqwbZieL5uUAG8Ysf6LoZkG91QvDGIzbcsoJDpV%2FNrYExU%2B%2B5fzYZUumm%2FxPtyMr7DO74Gl3FwQwUC%2B4xrtwMcXlIrMBn004%2B9fHZevMtxp3w&X-Amz-Signature=f241df5a49bf361f7728eee3bd7d4758b36f718e79f4e2933fc78f5c585f2aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
