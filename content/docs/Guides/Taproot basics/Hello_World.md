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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SNBQDT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCMG%2FqyEv7%2BUAWvzu5YWnYf%2BPpGh4E1cif689dM8bHJIAIgP3yAmIBCKzVXc%2FcouZmZME8DGNwCvOjPzegReOoYnD0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl08y4L9j6NIIpgkircAwDjpmpBK4enI2BwPtV7B5pr23wvgJzJ9WRgIbRUM1ec%2BFG8hJLZ4zeWq%2BN%2BoeLml901nG0BMxVNEO5WxCf7GZhqmZ%2Frdz8S14ZU09Wgs3lOdSqeODQVLaZIy%2Bjru2ESWek50H6Q1skTELWtvG3v8Odpz38cmAttkupkaEvBBpdJvSjLID2PjohrrF5p0TCc1DsW%2BTyctKAEtkqQ0q4oxI566DxTcJnCcNjrH%2BaTlMxaTP%2FpBGY2HOqdHP57C2DQ%2BkeTGDp85nzrZ2QNlAmuvb3xpuVlSqEfrxb9KdBS%2FgItyHtH6His9fFBCqrSUSISCpBs0NOykfnAfKfHqTmr9P0SaPP2g2%2Fkz24qsOD9VJ8Umu8V0HTgPUwnUiCxxaepriU8d1wRwKoKpRn%2FbmEHD4P%2FVwp%2FEfAr4g7%2FmXidCQvozZ8kOmSOx8iGDqsxnvsRi5Xs4Ll5P7IKHVRK9as6K8hTqwu4J2W87Ee4%2BPnWuuIlV8RvCSVh2kk0OFnIzjKldNsd078nEVf0hTo6Gn225V3B5z41jbqbiccXkUg0PA4PbaGUjncAPD3TQR9zfp%2Fm5CCI6PIZbhxURNHXlPiJXSd9QLUeg8qexNWwjNOnEFBf02GR1gDBTF8q8Q03MNHKvsEGOqUB2DvJambXqr2mw4YStLNm2jhB14Z%2BfhxFiskMsOwlmGX2PsJ1nntytmVKCwF93XnsW6%2Bjuf%2B4qM6vrxmKC8uw20d14dthkReLMmvUbRXVxfhF7ka4hKse%2B89ICBhACYIJuC21istooFJMI5zIzZQc0HNnlpl3aywPBZg%2BaKj6ypAkqIn0p1jHsXeiW4GN6QRHtnWiGdwDWEIzUb3UKVc74bV4Gu47&X-Amz-Signature=dac51df6466277d10f4373f00c01262e5a1d09c93e694093c219d8a238af8424&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SNBQDT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCMG%2FqyEv7%2BUAWvzu5YWnYf%2BPpGh4E1cif689dM8bHJIAIgP3yAmIBCKzVXc%2FcouZmZME8DGNwCvOjPzegReOoYnD0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl08y4L9j6NIIpgkircAwDjpmpBK4enI2BwPtV7B5pr23wvgJzJ9WRgIbRUM1ec%2BFG8hJLZ4zeWq%2BN%2BoeLml901nG0BMxVNEO5WxCf7GZhqmZ%2Frdz8S14ZU09Wgs3lOdSqeODQVLaZIy%2Bjru2ESWek50H6Q1skTELWtvG3v8Odpz38cmAttkupkaEvBBpdJvSjLID2PjohrrF5p0TCc1DsW%2BTyctKAEtkqQ0q4oxI566DxTcJnCcNjrH%2BaTlMxaTP%2FpBGY2HOqdHP57C2DQ%2BkeTGDp85nzrZ2QNlAmuvb3xpuVlSqEfrxb9KdBS%2FgItyHtH6His9fFBCqrSUSISCpBs0NOykfnAfKfHqTmr9P0SaPP2g2%2Fkz24qsOD9VJ8Umu8V0HTgPUwnUiCxxaepriU8d1wRwKoKpRn%2FbmEHD4P%2FVwp%2FEfAr4g7%2FmXidCQvozZ8kOmSOx8iGDqsxnvsRi5Xs4Ll5P7IKHVRK9as6K8hTqwu4J2W87Ee4%2BPnWuuIlV8RvCSVh2kk0OFnIzjKldNsd078nEVf0hTo6Gn225V3B5z41jbqbiccXkUg0PA4PbaGUjncAPD3TQR9zfp%2Fm5CCI6PIZbhxURNHXlPiJXSd9QLUeg8qexNWwjNOnEFBf02GR1gDBTF8q8Q03MNHKvsEGOqUB2DvJambXqr2mw4YStLNm2jhB14Z%2BfhxFiskMsOwlmGX2PsJ1nntytmVKCwF93XnsW6%2Bjuf%2B4qM6vrxmKC8uw20d14dthkReLMmvUbRXVxfhF7ka4hKse%2B89ICBhACYIJuC21istooFJMI5zIzZQc0HNnlpl3aywPBZg%2BaKj6ypAkqIn0p1jHsXeiW4GN6QRHtnWiGdwDWEIzUb3UKVc74bV4Gu47&X-Amz-Signature=ba604079c81b1790c49e9a8a4a43799b7baefc36383a7c5ab150048ad7790400&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
