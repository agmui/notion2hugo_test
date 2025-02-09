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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZUCXZZW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvQYkO9x8NeB9V9vspfy0eOYTCt6zVjae9bTXr3rY1DgIgBPT2gPSQqoTB1b5QpIVecwecMl6O1Do3doeNJG9m4I8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9AdhB1xLxi%2ByyFCCrcAzqYy31RRbANb8TppiAfWEJGGqDTOyl4480r3ECzJnHD1gKGMA62d60hYtTD5O%2BVZuNKviOy1NeQuVaCGgO6qPoUxPz%2Bz%2Ff0aTJharERnBz2ar8qBQQtm651IXUMnJgy5P6thMFr3Yvvhh1V057L0sE6WPOY3qlmBMnXmn3wheD4LT9HgKeLzTS5ECN4abVE1Pc2ym2hRdwma%2F%2Fo6cAXS5Zf0ewvvsnicgIH4%2BJFlZEm368VcGRwrwk1dPVrY18FSFuDydZ4VI%2FYCqjuyLr%2Fd%2Ff2Eyg2QmxikRgJc7NNM8HRxSwPRcW0fvMbT%2F1%2FAspQSGmBSYhiYYh8HhejZg1K6s9O7i%2BO6URf8ipmT31uCiWgSQlaj1wwWRzixpu9UiTAWBiJVe96jh7SZunUxXTmueqwpW4OkQ5WnWh36SBB35%2FOWwUdzseu8uxlxLCc4WqKXJU3S22VZ3qsWElRKsNcg5U93rWNVtRhp4L2b1R14X5PlL9RBCmQWqP9FtDTZ6gc8yWlY6y2qTh3cH%2F7adolQogTCjlrwosaEW7KdiZuo7xT3YsqnMJF9FQ6239LbEhQkePraRb7GZCedMASu5J5LkfFHndPBaNSpRbjk6LBG%2FM9%2F6TXgzd4GBgIZLQJMMW%2FoL0GOqUBP9cynYXVzSt7%2BYKOys1hWz8FBVXEjK%2BikOBFZfhnGF7%2FzxqlWk8hPuMTppSSnuHIqRijjvNXAT3hLVA3RuRUIWQw7nYMp2T17iuAbU6KDAKkGTwDcdDgt7goKa8iNjWWM%2FwagFmNgegGXEw5gjTVuOYaIOzAZE22oTgldHnQ7FB%2FWh5itElQZTSA3gqEiaJbNv%2F4INYeADf%2BhNXjbkyZSCYqL2mi&X-Amz-Signature=f59ac8495c93a2a9881bde84df6e25d7d1bedd28bcf19b039e6634030c30c3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZUCXZZW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvQYkO9x8NeB9V9vspfy0eOYTCt6zVjae9bTXr3rY1DgIgBPT2gPSQqoTB1b5QpIVecwecMl6O1Do3doeNJG9m4I8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9AdhB1xLxi%2ByyFCCrcAzqYy31RRbANb8TppiAfWEJGGqDTOyl4480r3ECzJnHD1gKGMA62d60hYtTD5O%2BVZuNKviOy1NeQuVaCGgO6qPoUxPz%2Bz%2Ff0aTJharERnBz2ar8qBQQtm651IXUMnJgy5P6thMFr3Yvvhh1V057L0sE6WPOY3qlmBMnXmn3wheD4LT9HgKeLzTS5ECN4abVE1Pc2ym2hRdwma%2F%2Fo6cAXS5Zf0ewvvsnicgIH4%2BJFlZEm368VcGRwrwk1dPVrY18FSFuDydZ4VI%2FYCqjuyLr%2Fd%2Ff2Eyg2QmxikRgJc7NNM8HRxSwPRcW0fvMbT%2F1%2FAspQSGmBSYhiYYh8HhejZg1K6s9O7i%2BO6URf8ipmT31uCiWgSQlaj1wwWRzixpu9UiTAWBiJVe96jh7SZunUxXTmueqwpW4OkQ5WnWh36SBB35%2FOWwUdzseu8uxlxLCc4WqKXJU3S22VZ3qsWElRKsNcg5U93rWNVtRhp4L2b1R14X5PlL9RBCmQWqP9FtDTZ6gc8yWlY6y2qTh3cH%2F7adolQogTCjlrwosaEW7KdiZuo7xT3YsqnMJF9FQ6239LbEhQkePraRb7GZCedMASu5J5LkfFHndPBaNSpRbjk6LBG%2FM9%2F6TXgzd4GBgIZLQJMMW%2FoL0GOqUBP9cynYXVzSt7%2BYKOys1hWz8FBVXEjK%2BikOBFZfhnGF7%2FzxqlWk8hPuMTppSSnuHIqRijjvNXAT3hLVA3RuRUIWQw7nYMp2T17iuAbU6KDAKkGTwDcdDgt7goKa8iNjWWM%2FwagFmNgegGXEw5gjTVuOYaIOzAZE22oTgldHnQ7FB%2FWh5itElQZTSA3gqEiaJbNv%2F4INYeADf%2BhNXjbkyZSCYqL2mi&X-Amz-Signature=35917686b2bdae9601634436e9a2fb3d5995c5d553e4416131c1998757173f98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
