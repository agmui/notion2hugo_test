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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EI2YKW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGco6afRh3Tz%2BRXFbN8vNFWC59pNb2D1mumrQP%2FTSZstAiEAumEwS6jVGI3n9fC%2BuAHql1Yd4J9k%2FEUj%2FJXZxTk78q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBngQtuC85ZXIbsUeSrcA0tyM%2Fz1NPD9cGDjdwgvRkauFtcnY%2FklD7bBpw5Y2ZnYbPj5DeR2sAnFWWb3mtd5DDk7AYpZMK9Wck7w5yZv9q361VPNJxrKDDYFjCzS%2B%2BW1Pi1hlzSp4HPPt3npOU5C4Y9yx1Z4VScN0ua0T4XIYDb3SY33BXRDj56mS9X3FhhkkrzdXFiiX0%2BhDDQFd1nxCvJSfyZkYLfdcmQtHNHR%2Fhixomux9Ahsn7aERYS0nrN2zTUpfy73ikhNw2%2F2lSs%2FE1zC4Kd56dzl07bAyKsoOxkwUQ7j7vQ2H9mh5BJ3ys%2FSgeZ%2Bye5ipkfhFFl%2Fln7RTimbsYkiI86v%2BUaTMa5UiPIUXPm1zceQuohl8AcCwEDG87iRZ9nE0B0kVDzuAjla7%2FPZ4sA63XNOJWKBmcXTocixRWTKWKrQcvi03ZfX5tNTeAz49rq5qMSh5AoeXUbXbWIEDrn1gA1wXIH01PX9x2ZtaXNn2gu0t8nymgJdRrDDgumk6gl9W4Uquk5yBSSlVieZjH0ShpS8pYL5RQ1wRX0%2FBnEgYpLPeKC8auaNiDWs7IuGxw0rM2GcaAW%2BRT%2FAndTuKP58vwcu8JWF4%2BFx20J6UpI3Bm5OWcsLfS6PDk04FTYxXr8iFWL%2F6EADMJC9y78GOqUBi80H3Csuat3Pk6rerHX2kUgXfRDDqwEe3GPqXU7LU6UJabmQqjRyDzJ1V3K%2FTLZOvZCHT%2F%2BY7dBtw4QaQresZAjXc%2Fwf0PswmVQlfjD4OJC98lOXYXsSyuKwNszWPDYb%2BvaoQuvSYQQpqD9f15Vij6yeWftgT%2Bfrix%2BTE6YfBJDwzIqILKEUulRjCx9CJwMdSj29%2FFQZSVDMzpmvXgSmpxXYK7Xg&X-Amz-Signature=f2bb80abdbf439a4b6b8ecb9d1de3c1b82df82003ad94e4f87fb92838823db3a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EI2YKW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGco6afRh3Tz%2BRXFbN8vNFWC59pNb2D1mumrQP%2FTSZstAiEAumEwS6jVGI3n9fC%2BuAHql1Yd4J9k%2FEUj%2FJXZxTk78q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBngQtuC85ZXIbsUeSrcA0tyM%2Fz1NPD9cGDjdwgvRkauFtcnY%2FklD7bBpw5Y2ZnYbPj5DeR2sAnFWWb3mtd5DDk7AYpZMK9Wck7w5yZv9q361VPNJxrKDDYFjCzS%2B%2BW1Pi1hlzSp4HPPt3npOU5C4Y9yx1Z4VScN0ua0T4XIYDb3SY33BXRDj56mS9X3FhhkkrzdXFiiX0%2BhDDQFd1nxCvJSfyZkYLfdcmQtHNHR%2Fhixomux9Ahsn7aERYS0nrN2zTUpfy73ikhNw2%2F2lSs%2FE1zC4Kd56dzl07bAyKsoOxkwUQ7j7vQ2H9mh5BJ3ys%2FSgeZ%2Bye5ipkfhFFl%2Fln7RTimbsYkiI86v%2BUaTMa5UiPIUXPm1zceQuohl8AcCwEDG87iRZ9nE0B0kVDzuAjla7%2FPZ4sA63XNOJWKBmcXTocixRWTKWKrQcvi03ZfX5tNTeAz49rq5qMSh5AoeXUbXbWIEDrn1gA1wXIH01PX9x2ZtaXNn2gu0t8nymgJdRrDDgumk6gl9W4Uquk5yBSSlVieZjH0ShpS8pYL5RQ1wRX0%2FBnEgYpLPeKC8auaNiDWs7IuGxw0rM2GcaAW%2BRT%2FAndTuKP58vwcu8JWF4%2BFx20J6UpI3Bm5OWcsLfS6PDk04FTYxXr8iFWL%2F6EADMJC9y78GOqUBi80H3Csuat3Pk6rerHX2kUgXfRDDqwEe3GPqXU7LU6UJabmQqjRyDzJ1V3K%2FTLZOvZCHT%2F%2BY7dBtw4QaQresZAjXc%2Fwf0PswmVQlfjD4OJC98lOXYXsSyuKwNszWPDYb%2BvaoQuvSYQQpqD9f15Vij6yeWftgT%2Bfrix%2BTE6YfBJDwzIqILKEUulRjCx9CJwMdSj29%2FFQZSVDMzpmvXgSmpxXYK7Xg&X-Amz-Signature=4ff38affdc4fd83084b637a41ab603efb4b362f8ceca959f4542f8510cedf92e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
