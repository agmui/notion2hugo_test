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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEDYYR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF2Ui8bFmcRbrYaUr%2B9vkkh7%2BwORWw35KedT5XJGVxH3AiEA1cXk0Geo2OjhFc5%2FVXOc5CkfO23Sz1fTn7xPdxK%2BrPQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9TnI%2B1SSvswRupwyrcA8bcVoMu6RnD%2BSrleEDWM4JAoEMxf3rKclMPvE8WEONkvDk6Ym48v4eZ8WDl1lmfdb0uvEUr%2BVtGimCxlAiIicaXli2TbNcnK4jD4ILCmusgvT9pZeZxRuR4r88omF5hqhIibix6k1BC%2F%2Bo0XmoOoDQJEu2ehqa0KFGy7qJ4ITQDyQoTS38Kb%2Br050Xt%2FEjhpe3NURlke32b4DVpUsXuKXqvAjTPRijOdjwzFcaPwXyBsdvyEjxg8dLwFLlEssSHxhrWyuJ4cDG9vRfwPYoiUF0fBCATdpETY%2FAI1f8nVFVIF%2F9N83ZQsSkKYS%2F8tsPB6qHSiUBRs%2BMnqueg3aoxyrrUVH0QfYwOq1Jc80TaaqRKJT%2F0X6%2B9YbQrFyx0LGtkKxDO99GTgn%2FVbTidGa0pn%2BSswZ5GgNlVK1jye6Jp4WA3eP9pO4qilqELiGrcjViLWseFgSs5dY5eP8N7qMJ7zsHnttC9%2BoymjD%2FVpQWsQAfjpnDUHXj6P5kIlw5EUJt3Zhek1oiDPeY%2FFrhKzGCDdMa%2FDTwU%2BVQF%2BJqaL2FlWwPZV8jrugtVbFZ1yVrz6zmI2gLTV2B8nlI4WKDTDVb7ELZkttIkcbyV1arYG6jJypM9sjAbEfjMxM3BJBMMMJbGpcAGOqUBQloHhTbA%2FUpF3uiSm26Xbyh9%2FO7f1Y%2BAjcDAykRKQhRXED6kcjw8gC%2FrEv6zOJyFHAqDAqLPnXiXR%2BNwh%2BZlTymMD0M4p8jO3TRgSrjmZltiiCwEeX0ttPOBvptS2sHj1ouSRtpuM8SgsReZkfEixNv0A2PlBWOv9IH4gz8qBOFon6Of%2FI0I8v3QJJswaS10PEU2JYOc6BluNo037yKmZPDYJ17q&X-Amz-Signature=974e3ed5ba4485f744d9f43a914f53173dc90b8d1018fe143770a45f5234f0ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEDYYR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF2Ui8bFmcRbrYaUr%2B9vkkh7%2BwORWw35KedT5XJGVxH3AiEA1cXk0Geo2OjhFc5%2FVXOc5CkfO23Sz1fTn7xPdxK%2BrPQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9TnI%2B1SSvswRupwyrcA8bcVoMu6RnD%2BSrleEDWM4JAoEMxf3rKclMPvE8WEONkvDk6Ym48v4eZ8WDl1lmfdb0uvEUr%2BVtGimCxlAiIicaXli2TbNcnK4jD4ILCmusgvT9pZeZxRuR4r88omF5hqhIibix6k1BC%2F%2Bo0XmoOoDQJEu2ehqa0KFGy7qJ4ITQDyQoTS38Kb%2Br050Xt%2FEjhpe3NURlke32b4DVpUsXuKXqvAjTPRijOdjwzFcaPwXyBsdvyEjxg8dLwFLlEssSHxhrWyuJ4cDG9vRfwPYoiUF0fBCATdpETY%2FAI1f8nVFVIF%2F9N83ZQsSkKYS%2F8tsPB6qHSiUBRs%2BMnqueg3aoxyrrUVH0QfYwOq1Jc80TaaqRKJT%2F0X6%2B9YbQrFyx0LGtkKxDO99GTgn%2FVbTidGa0pn%2BSswZ5GgNlVK1jye6Jp4WA3eP9pO4qilqELiGrcjViLWseFgSs5dY5eP8N7qMJ7zsHnttC9%2BoymjD%2FVpQWsQAfjpnDUHXj6P5kIlw5EUJt3Zhek1oiDPeY%2FFrhKzGCDdMa%2FDTwU%2BVQF%2BJqaL2FlWwPZV8jrugtVbFZ1yVrz6zmI2gLTV2B8nlI4WKDTDVb7ELZkttIkcbyV1arYG6jJypM9sjAbEfjMxM3BJBMMMJbGpcAGOqUBQloHhTbA%2FUpF3uiSm26Xbyh9%2FO7f1Y%2BAjcDAykRKQhRXED6kcjw8gC%2FrEv6zOJyFHAqDAqLPnXiXR%2BNwh%2BZlTymMD0M4p8jO3TRgSrjmZltiiCwEeX0ttPOBvptS2sHj1ouSRtpuM8SgsReZkfEixNv0A2PlBWOv9IH4gz8qBOFon6Of%2FI0I8v3QJJswaS10PEU2JYOc6BluNo037yKmZPDYJ17q&X-Amz-Signature=57af9b4ad6ff203f2484247b604347b842a038f296a49fd05afcbe5197af9dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
