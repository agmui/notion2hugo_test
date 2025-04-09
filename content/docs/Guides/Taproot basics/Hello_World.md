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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHGHIZ2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvomoAWWSITe6U9weFzaUAAeMeubgXfYFzAQ8qro9X2wIhAKrQuoOawuKHJV60Vm8VAknOjrqnJ%2FfDjfhdJ15S082TKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUp%2FggVM%2Fo77btqKwq3APzohWxzCbA5rAUC5XpQsd5kGSUaCBi6GsinGGrIif%2FmK6b1a%2BvLD2X%2BLYF7K4GI89WgUrrCqy%2BeTsQO31930%2Fk1iFJruYQKHQH%2Bgk9VJnm%2BJ7ZBwldmL7fjdhFT0IfeUsPpVWxadezbo7FW8ul8mAXdQjp3XfW1Q1%2BbemacqMQejI9B0n4hfVzaAP5a%2FbP12B6vCcyH%2Fsg6DXoDnb5mQaizc5Pk6EoZDlp9SLr2%2F5X2GXfo%2Bdxw9Go7oHYy3gHUJ5bXmNGuK5SMv3LWSs1K2ypxgIzELObkiqDcuXMfFBdwLIuH0E9K3ULgjWcPuRauyPxBJSrEl13scCIYyeGlSXD84Adu9IdYFWN%2B4Jxi5rmH6zUdBfbKCfsUgj45ri13FIGrIM4QS7NbwrY9YYfj64TDepYj4Aoi27qe5SdVOq3A%2F9%2FUaVTNnR7s6hmxoaQDWQGurioQkd%2BBaXhrnwKUf9AXwqJJ8Fp9GkixIYnZbP3LTh5XL%2Bu%2BBgOA69nq3ko%2FmmCVbLqqzEceE0B9VZdOEDkcRk1A2%2FEjy5eJX1Gu%2FaHcktdDWVuMXkgbE%2FnKnDh1iZtlbuBgXC%2FyIgZZNFki%2FfoJCx17Y0jJomBCqxd4CJuPDwCwCYGpKcerohEEjCdltq%2FBjqkAa9z2BnEZwQvtEtzf8pHRum74L5ZVP0EywtLvWPOLyQsk0hqpW7ROJ7vhKXxcbvq1ytzGHejKsBAi7Ue0oxIZGYCLWhDgtGNkYs6aPeTYhUY%2BfywnT90GkqMCmtGqrWG28ini93DSOwg2KFFtuNsXgu3q5sBHqFstZN3cnYVLsgQAXlNN5qlxZVO%2FkOh0b1az7owxHYBQCiNW8HI2otPg3dyJ0DY&X-Amz-Signature=b975eb49ca192fca77a768eff7982bfb1e0ecb660d7a18d5110023b9512a0e94&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHGHIZ2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvomoAWWSITe6U9weFzaUAAeMeubgXfYFzAQ8qro9X2wIhAKrQuoOawuKHJV60Vm8VAknOjrqnJ%2FfDjfhdJ15S082TKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUp%2FggVM%2Fo77btqKwq3APzohWxzCbA5rAUC5XpQsd5kGSUaCBi6GsinGGrIif%2FmK6b1a%2BvLD2X%2BLYF7K4GI89WgUrrCqy%2BeTsQO31930%2Fk1iFJruYQKHQH%2Bgk9VJnm%2BJ7ZBwldmL7fjdhFT0IfeUsPpVWxadezbo7FW8ul8mAXdQjp3XfW1Q1%2BbemacqMQejI9B0n4hfVzaAP5a%2FbP12B6vCcyH%2Fsg6DXoDnb5mQaizc5Pk6EoZDlp9SLr2%2F5X2GXfo%2Bdxw9Go7oHYy3gHUJ5bXmNGuK5SMv3LWSs1K2ypxgIzELObkiqDcuXMfFBdwLIuH0E9K3ULgjWcPuRauyPxBJSrEl13scCIYyeGlSXD84Adu9IdYFWN%2B4Jxi5rmH6zUdBfbKCfsUgj45ri13FIGrIM4QS7NbwrY9YYfj64TDepYj4Aoi27qe5SdVOq3A%2F9%2FUaVTNnR7s6hmxoaQDWQGurioQkd%2BBaXhrnwKUf9AXwqJJ8Fp9GkixIYnZbP3LTh5XL%2Bu%2BBgOA69nq3ko%2FmmCVbLqqzEceE0B9VZdOEDkcRk1A2%2FEjy5eJX1Gu%2FaHcktdDWVuMXkgbE%2FnKnDh1iZtlbuBgXC%2FyIgZZNFki%2FfoJCx17Y0jJomBCqxd4CJuPDwCwCYGpKcerohEEjCdltq%2FBjqkAa9z2BnEZwQvtEtzf8pHRum74L5ZVP0EywtLvWPOLyQsk0hqpW7ROJ7vhKXxcbvq1ytzGHejKsBAi7Ue0oxIZGYCLWhDgtGNkYs6aPeTYhUY%2BfywnT90GkqMCmtGqrWG28ini93DSOwg2KFFtuNsXgu3q5sBHqFstZN3cnYVLsgQAXlNN5qlxZVO%2FkOh0b1az7owxHYBQCiNW8HI2otPg3dyJ0DY&X-Amz-Signature=c7a3a786014d2a127c069dbf44228dab7bcbf53feb0795aa82d3d153c824e4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
