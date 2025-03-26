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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VNNZQ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCI4Bt0jXCE5fPJJvtet6OIQFDOnaVfga2kJJGx6S5BwIgaBEn8sKDDUFgrw%2FUznZbbND7ZOPn7tGpbxAf8jsLEF4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOuzEiQ5dKvTSX042CrcAyIgC%2BRMApZtvnl8zHaRdu3Q%2Fm4YIo2GsAPCnyy3hrzCK2wAsNJvhcfQGBXBq51FHBTmFVfbOPE5couZsLKY9jbA9gfIROFCJAjzpQ4scWFsO%2B1XUSfjeg0TA6V1rtDcpnzkhh2o9Nwc6GXwkGdwFWTj5R8Yg5GgjApIPg6kEtDcYgk%2FTxogcEQGHH%2Fghr8%2F7vDj191O%2BByF3Az9oca14C89d3i1aV1v8vyB5SCUGigv0bq84MjiptVeqHyiEWvWC3VRm85x2nvFSgjR49lnYsDFdPxWDUwjttIV9itjsBuq9FsT0VH%2FBTroF77xQF%2BeZd7h%2BABWBFaxiN1AJ1sPgE9ssGDRkjJ%2BxooyMKjdTlUtFOUlPoMO3aumzO%2BHUAlmH%2BCrzjakJ%2BkDSvzFjDl9zpk9vJ3JSsFh9Mu3fUhmkKH4WSOOlGDK3LAFkn4epuNQR%2Be%2B4HHU9sBWTR3vRp5sFAaPWDb6vI0tCxckZA15yGt33JoGFf9VGkKGTG%2BFyVMLzJBaDC7aLi0%2Fz92BlpJPP3wkY2jMs2b3gLpWhMXjxOd2VIWbImMXEM8hiA3ip%2FYOB3hUm5v8K1X7shG1PPeVxRrAjk0GDmyIw1N%2Bh4C4vV5WqIUFhIsyGvscL9f%2BMOT3kL8GOqUBGPp663IJCZ9aW8Se1wlUZXVw6zwn8x2s1jKd3eIw1Wx4jqmjcXxbtL3nDMKcn%2BMqBj9%2BuPRfGBtUsuLL5Zq3bemD9G5j%2BRACG4ohn%2BFON6eh2vQcPOGmmnxCp0mpD%2BV6U31QP%2BhzTqE5fkV%2BbmcKU7mQ7Lu8qiWkKByilm%2FtJv1yj5ZHTZJ1gRawzsfb2%2BuHRyjElrveA2JBBtYP224RG%2FZw5bN9&X-Amz-Signature=c5b22738e3e61b222aa62aec1979c47c806a72cd971a526be2bb823d56e1de52&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VNNZQ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCI4Bt0jXCE5fPJJvtet6OIQFDOnaVfga2kJJGx6S5BwIgaBEn8sKDDUFgrw%2FUznZbbND7ZOPn7tGpbxAf8jsLEF4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOuzEiQ5dKvTSX042CrcAyIgC%2BRMApZtvnl8zHaRdu3Q%2Fm4YIo2GsAPCnyy3hrzCK2wAsNJvhcfQGBXBq51FHBTmFVfbOPE5couZsLKY9jbA9gfIROFCJAjzpQ4scWFsO%2B1XUSfjeg0TA6V1rtDcpnzkhh2o9Nwc6GXwkGdwFWTj5R8Yg5GgjApIPg6kEtDcYgk%2FTxogcEQGHH%2Fghr8%2F7vDj191O%2BByF3Az9oca14C89d3i1aV1v8vyB5SCUGigv0bq84MjiptVeqHyiEWvWC3VRm85x2nvFSgjR49lnYsDFdPxWDUwjttIV9itjsBuq9FsT0VH%2FBTroF77xQF%2BeZd7h%2BABWBFaxiN1AJ1sPgE9ssGDRkjJ%2BxooyMKjdTlUtFOUlPoMO3aumzO%2BHUAlmH%2BCrzjakJ%2BkDSvzFjDl9zpk9vJ3JSsFh9Mu3fUhmkKH4WSOOlGDK3LAFkn4epuNQR%2Be%2B4HHU9sBWTR3vRp5sFAaPWDb6vI0tCxckZA15yGt33JoGFf9VGkKGTG%2BFyVMLzJBaDC7aLi0%2Fz92BlpJPP3wkY2jMs2b3gLpWhMXjxOd2VIWbImMXEM8hiA3ip%2FYOB3hUm5v8K1X7shG1PPeVxRrAjk0GDmyIw1N%2Bh4C4vV5WqIUFhIsyGvscL9f%2BMOT3kL8GOqUBGPp663IJCZ9aW8Se1wlUZXVw6zwn8x2s1jKd3eIw1Wx4jqmjcXxbtL3nDMKcn%2BMqBj9%2BuPRfGBtUsuLL5Zq3bemD9G5j%2BRACG4ohn%2BFON6eh2vQcPOGmmnxCp0mpD%2BV6U31QP%2BhzTqE5fkV%2BbmcKU7mQ7Lu8qiWkKByilm%2FtJv1yj5ZHTZJ1gRawzsfb2%2BuHRyjElrveA2JBBtYP224RG%2FZw5bN9&X-Amz-Signature=2756dd8a4d1b7f741d21bfa43603303937637f69d81816edb1ca94d2a424a464&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
