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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBL7ERE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEClQ7wESm9j2cY4LbW7dwRdMn20dRplvePGC%2B7eW7KDAiEAwgEwGz8TFvHbP48fWFOCcST6EIUx6XU1vVeJIhzusYMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCtjI1cY4FYo3UekzyrcA0RDtfJTosK%2BmauOZI7lahEK3ZVs5zYVcY62DM4fI3ox%2BK927uPWcqhEG9%2BdYnFvXzks4UGrhLABru1zCWYKYxMketFv1eZOOr00QUaSDkULlC45WK8KY%2BwTVn%2FVZHHT74bBWXsGT%2Byc4L7Hn00blcRJ1GHIFah11Jb%2FAo1CwjKQwE2Vmm3%2BhRxdsrbiP6AT0LJPXPlQFnIXZapGX%2Bv5ymWLz4Vc8s4iIP%2FqdBFwPE1I0jsKQGUnU1THFm1xP42f9%2BdesxDWh1WFk8hm5bkcIDJzvTAcvKDpUKTe%2FEBNuyFrtSayPbvLG%2F89gs1GNeXHIvlSs6bKOtmNdpjP7sLQdSx8dgmY2qNwPfaybo4byU3SOSa82ev81UUkYYeqnYziLefPvX5dKYoCEZcZk759artHNdxQTJ28F%2FtdHVWV4zhEmsEezAKlIIG2Db5i8flR5TzMpS4%2F%2FHjx%2FwSkCbasvjQ%2FILaHkx7nSYAysOL%2BfhOP%2FiZVi9zWTcZyZErmsNnhgcyCRn0aqJRFk0Wt6qC5VDEtfbZNuJ5Zkq6C2V1FCATkzHUOEfQlHS%2B1LmRCDrdKe1CLwgd4DbibCYSdSh3jc0Xk8eNI4QBR5iAn3xwA6o9PywrsNbxaaTJaMNb6MNK6w70GOqUBlF8%2FkPcAiA9dnS1%2FS31zeoWieAeK9MJxd5luroUOEkp0D%2BO%2F7klBrrsKfwXWp6wkhsIBYOfPxJQYn4bCh2yofiLbws8GAUe1Pj7DjsU662GsSes0S0wD67SbEPu6IV6Cul%2BHj8coJtmLh9rtz6hdPTjhx2NAmXwTdILAH8l3If5yyLRrcox3ZLIFhW3SvhDHH71nJcuaPDTGyjFEf%2FBwjgOivVLX&X-Amz-Signature=a0c09bd65a6a65b52ddf7343acf73454338961c30b6333113f9b3f5826ffca62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBL7ERE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEClQ7wESm9j2cY4LbW7dwRdMn20dRplvePGC%2B7eW7KDAiEAwgEwGz8TFvHbP48fWFOCcST6EIUx6XU1vVeJIhzusYMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCtjI1cY4FYo3UekzyrcA0RDtfJTosK%2BmauOZI7lahEK3ZVs5zYVcY62DM4fI3ox%2BK927uPWcqhEG9%2BdYnFvXzks4UGrhLABru1zCWYKYxMketFv1eZOOr00QUaSDkULlC45WK8KY%2BwTVn%2FVZHHT74bBWXsGT%2Byc4L7Hn00blcRJ1GHIFah11Jb%2FAo1CwjKQwE2Vmm3%2BhRxdsrbiP6AT0LJPXPlQFnIXZapGX%2Bv5ymWLz4Vc8s4iIP%2FqdBFwPE1I0jsKQGUnU1THFm1xP42f9%2BdesxDWh1WFk8hm5bkcIDJzvTAcvKDpUKTe%2FEBNuyFrtSayPbvLG%2F89gs1GNeXHIvlSs6bKOtmNdpjP7sLQdSx8dgmY2qNwPfaybo4byU3SOSa82ev81UUkYYeqnYziLefPvX5dKYoCEZcZk759artHNdxQTJ28F%2FtdHVWV4zhEmsEezAKlIIG2Db5i8flR5TzMpS4%2F%2FHjx%2FwSkCbasvjQ%2FILaHkx7nSYAysOL%2BfhOP%2FiZVi9zWTcZyZErmsNnhgcyCRn0aqJRFk0Wt6qC5VDEtfbZNuJ5Zkq6C2V1FCATkzHUOEfQlHS%2B1LmRCDrdKe1CLwgd4DbibCYSdSh3jc0Xk8eNI4QBR5iAn3xwA6o9PywrsNbxaaTJaMNb6MNK6w70GOqUBlF8%2FkPcAiA9dnS1%2FS31zeoWieAeK9MJxd5luroUOEkp0D%2BO%2F7klBrrsKfwXWp6wkhsIBYOfPxJQYn4bCh2yofiLbws8GAUe1Pj7DjsU662GsSes0S0wD67SbEPu6IV6Cul%2BHj8coJtmLh9rtz6hdPTjhx2NAmXwTdILAH8l3If5yyLRrcox3ZLIFhW3SvhDHH71nJcuaPDTGyjFEf%2FBwjgOivVLX&X-Amz-Signature=455235715082fe8fd7a7514e128910086091606fd5fc0d92076c8c2066b59365&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
