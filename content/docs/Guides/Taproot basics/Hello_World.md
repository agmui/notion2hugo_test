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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QACHZE3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTpDEIAOZRplLHe4dx2hESTDqLxkpGF0%2BZYQ0WvSxNwIgfBTQacBYjbbWME0iyfR19PfYtUSLBoUsPdTHwMa4RVsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFd8q5jyD5h3wp5vWCrcAzjdzqm%2FwOvgKL1pZ6bh%2F0kDax9aQGw5Af4CuIqjxsuiRR%2FKuUMcyM4R9Mc4NoHh0XAqogPSJAc60vTp4O1ZjEAKVw61RyIeqLbtlC5HuqeQov1mh77x1JDczkhn86qxQmxb0y%2FBEyQUrdt61J2yG7wX%2BOZZVf%2FUPZTbcJRleSs80nhY5%2BaxeCZsZqg%2BvRUJDTmrrKg59SnEhZlr29w%2F6PHNjxbkwVgwpy1TL38JeM%2FN5suofrJQOzoF5rSWEoZlneKJjhjBtqgEpAyDqnumfLqlDxgPLLtCcKjpidXjzhEo4P7Ek3jFYBb1p2KsvcNsHX%2BZEYvyl3AaLfTI%2BNbl5nwt3AbxWCP8KH%2FIzu37oO%2B5CCteAyTG3SnAX0%2FKFbx6eXcYO1ZvYIY0clDgLT%2BZeeykOJDpNHSNPSwBBAz4XmdhJFJ%2F03YBmuL4gxIV6qutPgusHCtvEKKK%2BJSSQhlKbFf%2Bk4RYWu3XwvV0Yqbo9fLUGz8VrmOGmKKi2%2FrhlHaxt%2B7c%2FOVjc2oQ%2Fyy%2BlVVJh3NP5rmjIBs9VFk%2FX52cKzaG3sppDFwBycwveAVO64AzAyjItRWQpb7azKLXtDIK8vPPnbaP%2F0JFojslSyzINp%2FmY0IU0lmttWyJA9w0MKSJx8IGOqUBKdKmqFB%2FNj%2Bzq5ccXOUdbWX8uDlNZXVzegRph%2FbWNTTtnRdTNcM7pxL0kDcMvc7MgFIlkSEKPnVSAWW1h9V1OfxkJtIBEIAwVKPUD4ibc3xOtLl7YBlJZT3hB3Gt0QfaddNw%2F7kUQAL5gMB6c0Nc4uMkhnsU12oa3amZhWdpSOv8yrI2vVweEvB2W0XxrXqCtSdghxVchcRXNUwPlWTXGOy%2FIp1u&X-Amz-Signature=3f29c480f6e757a28003251d9f2b55d38b9e217e457d3c6898b4e1e9c24e798f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QACHZE3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTpDEIAOZRplLHe4dx2hESTDqLxkpGF0%2BZYQ0WvSxNwIgfBTQacBYjbbWME0iyfR19PfYtUSLBoUsPdTHwMa4RVsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFd8q5jyD5h3wp5vWCrcAzjdzqm%2FwOvgKL1pZ6bh%2F0kDax9aQGw5Af4CuIqjxsuiRR%2FKuUMcyM4R9Mc4NoHh0XAqogPSJAc60vTp4O1ZjEAKVw61RyIeqLbtlC5HuqeQov1mh77x1JDczkhn86qxQmxb0y%2FBEyQUrdt61J2yG7wX%2BOZZVf%2FUPZTbcJRleSs80nhY5%2BaxeCZsZqg%2BvRUJDTmrrKg59SnEhZlr29w%2F6PHNjxbkwVgwpy1TL38JeM%2FN5suofrJQOzoF5rSWEoZlneKJjhjBtqgEpAyDqnumfLqlDxgPLLtCcKjpidXjzhEo4P7Ek3jFYBb1p2KsvcNsHX%2BZEYvyl3AaLfTI%2BNbl5nwt3AbxWCP8KH%2FIzu37oO%2B5CCteAyTG3SnAX0%2FKFbx6eXcYO1ZvYIY0clDgLT%2BZeeykOJDpNHSNPSwBBAz4XmdhJFJ%2F03YBmuL4gxIV6qutPgusHCtvEKKK%2BJSSQhlKbFf%2Bk4RYWu3XwvV0Yqbo9fLUGz8VrmOGmKKi2%2FrhlHaxt%2B7c%2FOVjc2oQ%2Fyy%2BlVVJh3NP5rmjIBs9VFk%2FX52cKzaG3sppDFwBycwveAVO64AzAyjItRWQpb7azKLXtDIK8vPPnbaP%2F0JFojslSyzINp%2FmY0IU0lmttWyJA9w0MKSJx8IGOqUBKdKmqFB%2FNj%2Bzq5ccXOUdbWX8uDlNZXVzegRph%2FbWNTTtnRdTNcM7pxL0kDcMvc7MgFIlkSEKPnVSAWW1h9V1OfxkJtIBEIAwVKPUD4ibc3xOtLl7YBlJZT3hB3Gt0QfaddNw%2F7kUQAL5gMB6c0Nc4uMkhnsU12oa3amZhWdpSOv8yrI2vVweEvB2W0XxrXqCtSdghxVchcRXNUwPlWTXGOy%2FIp1u&X-Amz-Signature=a0f3ce2ab92e95f2d8276e11d35e1021f6cea067e6e5a7f0d7a70b9e0c8432cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
