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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3RTKLJU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNpqcIboWupn%2F0q1NtheJvE932W5WkTgRlH69bGXscQIhAJ5RlSFup%2B0e%2B3L9HMMfYyX89goP6WcMJdz9RAhdR7u8KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7WRKOcp%2BLueijp2Iq3AN7Pmb3bO0o7a%2BnyGnVCIuvFWq3tDCd7Q4OeQJmV%2BuPzWpy7SCxAoA%2BLsAx3V3l5H8deV%2Bxd%2B3jEJ3tX8F%2FV7K4dEvD%2FxQAfRyEAqYKRKD0vQ7DbZhZ%2FHba0c7JtgrM9IDcp8HYi8yp8L5MsJ3GZHtEeGmLvC8fuK9Ne3NywBTWJLgL57iFDXztMbEkLhpO6TWofdBUrW%2Fr8jusB%2B5gUhWuZD%2F5VesKFJqgpfRP39ohw14eyJG2%2F9RkT1QJbx1%2BAU4p%2BYx%2BvFzcALMjWDxYlNXHIBW5y5Gxim3%2Bq2b90NtWyvRY2iXP%2FqNFb67z33o6m0NtohNT5%2B1r09bOmhkcMKAlvaS2oGyCT8KrSC05677qYOSe7sGqzNRVE5ju8PUnLe4dhim6Nopvzxw4zgTh4G5U1XKmkmlZ4ZXxDN%2Bs1FEznXH9zJOoLCRZUDDHCYUDTIMLoKk4oImbF87p6HGZo67eYYM16V26OhdYADsVj3ArrawpgbM%2F2nW4LEapxDmTxQS1aCTNlqukwvsNUrh9lnhy4bAlZP96F2ZpAFam6TekIbldx2kfdJ%2FA3P7lnNV4fkTJJVyIMIaQR89arKIYhvNFJddSqyNpXoMaXDF1YTvlQpjWDZDRK%2Fft%2Be8LljCk3arBBjqkAX4IF9RwySmzB0eqct4TOxG225sf9Ls%2Bmrfge%2FoIQNqV8Gx3MWlnd%2FoDOT%2FjoN6eWKIisPSrXBHK%2FqdWpbePHDgpKMtrsaRs3EYfbePbILrUD1mOgqb%2Bf67agkJxrQofC2IFoGYV820ZLhERfxyS2bfuPvcakZv7X265iusXy6%2By0MwUk2SHQmRGEZDVqRZyC1RbkGCtpUlWng05IYx25nEoRbGf&X-Amz-Signature=461b3d0d7021ac40cac24c8bbf307192d5abee90788756be0506638659fdf188&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3RTKLJU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNpqcIboWupn%2F0q1NtheJvE932W5WkTgRlH69bGXscQIhAJ5RlSFup%2B0e%2B3L9HMMfYyX89goP6WcMJdz9RAhdR7u8KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7WRKOcp%2BLueijp2Iq3AN7Pmb3bO0o7a%2BnyGnVCIuvFWq3tDCd7Q4OeQJmV%2BuPzWpy7SCxAoA%2BLsAx3V3l5H8deV%2Bxd%2B3jEJ3tX8F%2FV7K4dEvD%2FxQAfRyEAqYKRKD0vQ7DbZhZ%2FHba0c7JtgrM9IDcp8HYi8yp8L5MsJ3GZHtEeGmLvC8fuK9Ne3NywBTWJLgL57iFDXztMbEkLhpO6TWofdBUrW%2Fr8jusB%2B5gUhWuZD%2F5VesKFJqgpfRP39ohw14eyJG2%2F9RkT1QJbx1%2BAU4p%2BYx%2BvFzcALMjWDxYlNXHIBW5y5Gxim3%2Bq2b90NtWyvRY2iXP%2FqNFb67z33o6m0NtohNT5%2B1r09bOmhkcMKAlvaS2oGyCT8KrSC05677qYOSe7sGqzNRVE5ju8PUnLe4dhim6Nopvzxw4zgTh4G5U1XKmkmlZ4ZXxDN%2Bs1FEznXH9zJOoLCRZUDDHCYUDTIMLoKk4oImbF87p6HGZo67eYYM16V26OhdYADsVj3ArrawpgbM%2F2nW4LEapxDmTxQS1aCTNlqukwvsNUrh9lnhy4bAlZP96F2ZpAFam6TekIbldx2kfdJ%2FA3P7lnNV4fkTJJVyIMIaQR89arKIYhvNFJddSqyNpXoMaXDF1YTvlQpjWDZDRK%2Fft%2Be8LljCk3arBBjqkAX4IF9RwySmzB0eqct4TOxG225sf9Ls%2Bmrfge%2FoIQNqV8Gx3MWlnd%2FoDOT%2FjoN6eWKIisPSrXBHK%2FqdWpbePHDgpKMtrsaRs3EYfbePbILrUD1mOgqb%2Bf67agkJxrQofC2IFoGYV820ZLhERfxyS2bfuPvcakZv7X265iusXy6%2By0MwUk2SHQmRGEZDVqRZyC1RbkGCtpUlWng05IYx25nEoRbGf&X-Amz-Signature=fdc559efa536e71040b4dfcbd1e9d05a8e8da089ea2ce55b6dcf8d51aa8fd4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
