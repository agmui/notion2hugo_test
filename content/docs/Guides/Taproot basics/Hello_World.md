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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWOKLKS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIByIvhlCAQm7udBrhvo0%2FhyDfWtsSYLUJDkf%2FEokp%2FUvAiEAqrS5G%2BsKcXiz0LiCZj69bafwyVJUEoWel%2FA7dJm%2Fo%2FkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGn%2F%2BJK4TAPIwPp7vCrcA82hMG5PhcVVSq7XWhFvRwem8lKKeceoK7LPqzkh3KQnaxv4NIFVrYpSswqFk6yg6%2FNVe7rMBHCZI1RVY0AJA79ur6Wi4bkq3VML0T2hYHWKCHgZHbLusuHV%2FoIsuNN0AyvQRV2NudSWsQWLNH3L2dukERk3mSWPryjDTQpcxETC6Z8XsnK8AH6UK%2Bi502VaElBpSvZJKp1SZzuy%2BdzQIsKlALIzdtVPsNTVUG8ea31CQG4aN7kTr99eeqwjk0jmhq3mG6ykGoBBvb21Ejuy%2Fu5cKD44AecXcKKMoMpKm5EEX9MzGRkH9NAVlspsmRzZlOLRwr8RGQ4dv3laQk9E55Zkxyu45pyagBvXjdNC5CUK6T1fZZXzChW8aJuu7ZCoVTX%2FFqd3tIcWvnpD5R4hLy%2BLX3RNwgGh78t4vzSf0KL7pYrD%2FgdLwCit0Te7Bi2ga0ejRepG86BOWcMjvbdM1zQ4QaKYYnlHMS%2B%2FTio4X8rXWskNrA1yJxgYr9H5E8OsFrcvSLSYhK4%2BSGfSxvyq97xmEeeD6SZPCW2gHeWpuZDIsoBliPrzcNbj93ourqQpejQY79ocewUFD18QqtM5vrKIyxQ3hHZYb4qewOHH6yWdw8%2FvVMzsBeNXKZBlMMTB%2BMEGOqUBLNuLWQjLuxnkOWPqbETYaXFfJk5LTFbL2GBWjAkO8hLhSCI1OMHkZxfycgnXwKqAObZTJLUxwU1ALZDWk%2F3KZgnMv06%2Frcc2QpE3V5Ydot8fkyrn%2FobXTYI%2BhEvWlWq6L8dJZKdy6zkCE2QykAQEtLsDHl9bOAz3ybGj8ZUGVXy%2FKxMaL0BRl%2BadhI%2BznbyhlU5l0tcTXg5BzmTJRbJlC7FY4ajA&X-Amz-Signature=31033067563dfc91ab344409531b1fd36d46c4ba52ab8d8286a626132c530166&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWOKLKS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIByIvhlCAQm7udBrhvo0%2FhyDfWtsSYLUJDkf%2FEokp%2FUvAiEAqrS5G%2BsKcXiz0LiCZj69bafwyVJUEoWel%2FA7dJm%2Fo%2FkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGn%2F%2BJK4TAPIwPp7vCrcA82hMG5PhcVVSq7XWhFvRwem8lKKeceoK7LPqzkh3KQnaxv4NIFVrYpSswqFk6yg6%2FNVe7rMBHCZI1RVY0AJA79ur6Wi4bkq3VML0T2hYHWKCHgZHbLusuHV%2FoIsuNN0AyvQRV2NudSWsQWLNH3L2dukERk3mSWPryjDTQpcxETC6Z8XsnK8AH6UK%2Bi502VaElBpSvZJKp1SZzuy%2BdzQIsKlALIzdtVPsNTVUG8ea31CQG4aN7kTr99eeqwjk0jmhq3mG6ykGoBBvb21Ejuy%2Fu5cKD44AecXcKKMoMpKm5EEX9MzGRkH9NAVlspsmRzZlOLRwr8RGQ4dv3laQk9E55Zkxyu45pyagBvXjdNC5CUK6T1fZZXzChW8aJuu7ZCoVTX%2FFqd3tIcWvnpD5R4hLy%2BLX3RNwgGh78t4vzSf0KL7pYrD%2FgdLwCit0Te7Bi2ga0ejRepG86BOWcMjvbdM1zQ4QaKYYnlHMS%2B%2FTio4X8rXWskNrA1yJxgYr9H5E8OsFrcvSLSYhK4%2BSGfSxvyq97xmEeeD6SZPCW2gHeWpuZDIsoBliPrzcNbj93ourqQpejQY79ocewUFD18QqtM5vrKIyxQ3hHZYb4qewOHH6yWdw8%2FvVMzsBeNXKZBlMMTB%2BMEGOqUBLNuLWQjLuxnkOWPqbETYaXFfJk5LTFbL2GBWjAkO8hLhSCI1OMHkZxfycgnXwKqAObZTJLUxwU1ALZDWk%2F3KZgnMv06%2Frcc2QpE3V5Ydot8fkyrn%2FobXTYI%2BhEvWlWq6L8dJZKdy6zkCE2QykAQEtLsDHl9bOAz3ybGj8ZUGVXy%2FKxMaL0BRl%2BadhI%2BznbyhlU5l0tcTXg5BzmTJRbJlC7FY4ajA&X-Amz-Signature=15f2a997a8a6b7a05cf44c776d297dc9dd6d4fcc74dbb95834b8a7f5bcee38fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
