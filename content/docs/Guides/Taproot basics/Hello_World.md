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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHMPFK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCDD%2BuRkWWbmUub%2B4TPGxIBbTBsJUg%2FzY1MrBERnonfKQIgP5SUQOJikB9ripPjBXxogpq%2BaGodzMtWJaAmlCCD4eEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALTUUsue5LKDMS2PircA18kFgDGd0hxZRuA82SbGreYtAcuKN3HHhFPUdWPc8btFr%2FplDlp9Pw63%2BixEukDSrl4wQJ5lMN6ZOmunZmbJxIi4rY6J7odHTW6aZRmXNaY64WIUyPncglUAmEY%2Fl16FOmx6IOqo3k0x5P5jFIFWvyHh2PmesFCA19GtyH4ZLBol%2FGaUA5BNMVpmR1X1%2Bxac7outwt%2BA%2FF4uFNtPu9nEGt31xzMLWrWXReBEdmPdTp5KIuevNKPnjRcM07DBClEUNiYfp4n8ZIygQNqIxV6RoOqhzdvAbL3UhKVCHRwGsFyRumRmx%2BMjmCnI%2F0Bvr1u98WdBPT4DKy%2BWGwvSS43cb%2Bv3rIoLI7HAygctYtplbIZMb1CjB%2B%2BtVapxeEUaU0Ch3rU9ON31WuiQwyesnWEcgtrWp%2FwPsjF4UhAjPZp%2BFsjmtSDcEJz16KWfBDgOib21UwtUZ4qJj0GOvIKciD0eFtwsYxKzGWMlZHBHB3xLXntp3%2B7mEfLaUSjkhW0rBZ7W6Od8pDIPXerh4ggQ%2Bynrd9COrJjvk9RMBpm1hRApB3J9gWtv46%2FnFxg79Xw09epDFo4YySnbMSqrnmC2wGRlzpk2cvOCQgSmU954DYSwYsXGck%2B2dM1Q1bTpfTOMKOP78EGOqUB5JWCyfMTZea%2Bd6jgx1fRuvwHy1TtFMOT0izCJBDvVlgiAlA%2FtE7ghnW5tW9MLP%2Bmq3zWxbjN0en8ZlJ6QHo25X3kKEZgKDMo2xoFBHZBOFJ8LAiy1%2B0FAfBcTMiLlILoOFJyeExKoazkn0Bo4cAqu6XhIiXdh2MIyDYeGQPrWZA%2F1krlWPY8HN60asWDDSPSp0BFra7nmzC3SfLuF7LQq%2B%2BhSr15&X-Amz-Signature=07ed9019893554cb89b32270b8bc2817720f3c24fb24e2fe678cb3226d6daa77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHMPFK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCDD%2BuRkWWbmUub%2B4TPGxIBbTBsJUg%2FzY1MrBERnonfKQIgP5SUQOJikB9ripPjBXxogpq%2BaGodzMtWJaAmlCCD4eEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALTUUsue5LKDMS2PircA18kFgDGd0hxZRuA82SbGreYtAcuKN3HHhFPUdWPc8btFr%2FplDlp9Pw63%2BixEukDSrl4wQJ5lMN6ZOmunZmbJxIi4rY6J7odHTW6aZRmXNaY64WIUyPncglUAmEY%2Fl16FOmx6IOqo3k0x5P5jFIFWvyHh2PmesFCA19GtyH4ZLBol%2FGaUA5BNMVpmR1X1%2Bxac7outwt%2BA%2FF4uFNtPu9nEGt31xzMLWrWXReBEdmPdTp5KIuevNKPnjRcM07DBClEUNiYfp4n8ZIygQNqIxV6RoOqhzdvAbL3UhKVCHRwGsFyRumRmx%2BMjmCnI%2F0Bvr1u98WdBPT4DKy%2BWGwvSS43cb%2Bv3rIoLI7HAygctYtplbIZMb1CjB%2B%2BtVapxeEUaU0Ch3rU9ON31WuiQwyesnWEcgtrWp%2FwPsjF4UhAjPZp%2BFsjmtSDcEJz16KWfBDgOib21UwtUZ4qJj0GOvIKciD0eFtwsYxKzGWMlZHBHB3xLXntp3%2B7mEfLaUSjkhW0rBZ7W6Od8pDIPXerh4ggQ%2Bynrd9COrJjvk9RMBpm1hRApB3J9gWtv46%2FnFxg79Xw09epDFo4YySnbMSqrnmC2wGRlzpk2cvOCQgSmU954DYSwYsXGck%2B2dM1Q1bTpfTOMKOP78EGOqUB5JWCyfMTZea%2Bd6jgx1fRuvwHy1TtFMOT0izCJBDvVlgiAlA%2FtE7ghnW5tW9MLP%2Bmq3zWxbjN0en8ZlJ6QHo25X3kKEZgKDMo2xoFBHZBOFJ8LAiy1%2B0FAfBcTMiLlILoOFJyeExKoazkn0Bo4cAqu6XhIiXdh2MIyDYeGQPrWZA%2F1krlWPY8HN60asWDDSPSp0BFra7nmzC3SfLuF7LQq%2B%2BhSr15&X-Amz-Signature=799fea7d9458fd366f623da15928d9f8bd898a65416d83c949b53126bc9c1203&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
