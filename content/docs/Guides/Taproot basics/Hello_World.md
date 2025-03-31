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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HNMLUG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD157%2FXKaIUTmt03Tz26O72AZpAtI7G8KVaoKxGfskj6QIga07pskZ1DQUGcXQStjPRI%2FkW%2BrqhdKmbzsqLlg4jPboqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9EPbPsBbPy9uPgXircA1VT5Jy74aeGNilLX8c57jc%2F6fa%2BD9naETNGfVPDH%2F6vJ2ZvEJNhJdTMk7s%2BHtXaDg49WfHcZlsfZ0%2BL8Q6sP8Lx1qAlnAomaxAn31JSxVBVA2rHyG1OHW1B%2Fd%2FCdrdwQaG%2BAaZf7pWGz%2Fl9vqPTYOGQHej1LIwxKhGkimnUYqK75GO9%2FYH0a5GYNUUVtYT0H173IlYV%2B%2BIKL6LNzAHG8qObP%2B3M9OzmPfJaytMujywZKN%2FbTG70DWL6My7UqyjA7ZvK6Z3tRY4WGdCuNB19y6dGZ9UjnHMtia3OQBNhw0UamsXoWB4sHvULKfjtus3C2XT8mdIBKzCswGY3zYPvgRuSmfdEEzinpDzo2PD28ScjxyUN7%2FsGqZqwK9FWAjZRTOudjQ%2FcACpuXrMybkrKULTguVAOvfW96bbDue4q7rx5KXSX%2BZDtXw6mSkZUwzehd4Keq%2BQYLZPeO9HaMj1bQP8y91608W0dQuU%2BE7O95aCEYPDpBDRNyu3oZfxK8hLaJTL5RQrwbB3bB052lzZdh86n2fCJYMsqTXROnH1CwDFgDsl7qTevN03RC9riB9ZAkfUqb8kUJgJcmeNRSB7kkTR4a1UG%2BaVgw1m%2B%2FrI5lpkNej2SvLghgYqv3CjFMOGIqr8GOqUBQiBrWx7fXazKNhvetXsbwKawg0KmgErWTTrWLd%2FVGSKv0xxc2xZv7t6BH9rwetHfczAerkMgU4kQ%2FeiaqsqNsal%2BehBjZzdHma4cbrvQUZX6bAd2n%2FBg6osvJ9HnkbaROLdLh%2BiwKExVSDdEWJi8zKA5%2FsPuDEftWlxlmtk%2BcEvo4aCuapIZrDzLt8wsqoHLDU9zlG1ZTjpunV9C30mDpJ6trjHQ&X-Amz-Signature=d8318b9740b4225bd9147c6d3edcab6c035b0679dc6b59fef8794e6575e514fb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HNMLUG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD157%2FXKaIUTmt03Tz26O72AZpAtI7G8KVaoKxGfskj6QIga07pskZ1DQUGcXQStjPRI%2FkW%2BrqhdKmbzsqLlg4jPboqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9EPbPsBbPy9uPgXircA1VT5Jy74aeGNilLX8c57jc%2F6fa%2BD9naETNGfVPDH%2F6vJ2ZvEJNhJdTMk7s%2BHtXaDg49WfHcZlsfZ0%2BL8Q6sP8Lx1qAlnAomaxAn31JSxVBVA2rHyG1OHW1B%2Fd%2FCdrdwQaG%2BAaZf7pWGz%2Fl9vqPTYOGQHej1LIwxKhGkimnUYqK75GO9%2FYH0a5GYNUUVtYT0H173IlYV%2B%2BIKL6LNzAHG8qObP%2B3M9OzmPfJaytMujywZKN%2FbTG70DWL6My7UqyjA7ZvK6Z3tRY4WGdCuNB19y6dGZ9UjnHMtia3OQBNhw0UamsXoWB4sHvULKfjtus3C2XT8mdIBKzCswGY3zYPvgRuSmfdEEzinpDzo2PD28ScjxyUN7%2FsGqZqwK9FWAjZRTOudjQ%2FcACpuXrMybkrKULTguVAOvfW96bbDue4q7rx5KXSX%2BZDtXw6mSkZUwzehd4Keq%2BQYLZPeO9HaMj1bQP8y91608W0dQuU%2BE7O95aCEYPDpBDRNyu3oZfxK8hLaJTL5RQrwbB3bB052lzZdh86n2fCJYMsqTXROnH1CwDFgDsl7qTevN03RC9riB9ZAkfUqb8kUJgJcmeNRSB7kkTR4a1UG%2BaVgw1m%2B%2FrI5lpkNej2SvLghgYqv3CjFMOGIqr8GOqUBQiBrWx7fXazKNhvetXsbwKawg0KmgErWTTrWLd%2FVGSKv0xxc2xZv7t6BH9rwetHfczAerkMgU4kQ%2FeiaqsqNsal%2BehBjZzdHma4cbrvQUZX6bAd2n%2FBg6osvJ9HnkbaROLdLh%2BiwKExVSDdEWJi8zKA5%2FsPuDEftWlxlmtk%2BcEvo4aCuapIZrDzLt8wsqoHLDU9zlG1ZTjpunV9C30mDpJ6trjHQ&X-Amz-Signature=f6070fbce1e7e8ced9a6c9755c60bb4a101d7a411c35ec8a4eaf5e0997a125ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
