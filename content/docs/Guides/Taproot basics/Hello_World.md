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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXSWZG4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHXEc3Sv%2BYHBAVeamVp4qIRQz4Gh73bYJxOXA8u%2FWwogAiEAiQEsGTVHQkZSclpIZmZ7reLwduMKQ%2F2Tst%2FmmYhtME8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR7yV%2BlmvcOxpUZeSrcA3LOoVJxCJWW0R3tck%2FS8YU39F%2F31ktIz5iN8PgG48OZgAQ45eDlWs5mHfrga5%2Fh%2B1djvEkRYhCPy1sSZz1KjKcO14LHc0rBBjeDbyoz1%2Ffn%2F417GiLsDIw2W70AXlTsgoaFDWcJAFt%2BCPvb22aicGRQYXUrhgb5cCHmr2Us56waNTb3I%2FQkD72hxG7rR75wHGgIkYPp10Dc2PEPvSUOI5ULh4hpkiON2xakG1EH96zZD3jVkJ0yoytT0aCBegaCPpZqXKDLUPT3kgg%2FNSu5lFMHCdbsgUcyF%2Frx725K5PmZDpdWlCpqD%2FoMJxrn5rwyhXbP5iHCUk7TjTXNhabsZnBEn9UW5k6LmRIhXCZ8VRBbRV4Y%2Bd6n970QqTAKVq542n3deO2HI8YbWmPXmBPqCVKsf0%2FmJLsSF8DtVE7j9%2FVo6wHPIgJdF7kyAfqwMof7DDIxapvvodV%2BZcPkexYTIYseYnpxhb8z3pipu7b4pyf%2FO%2BZKoVoq3sXprYeaN%2BbZb%2F%2FMVswKgvYUSp%2FuQjkA9biU15guQJ4hdx4L4yt5uSc0MXUcLDz65H%2BsjHmiT84xClJyuuT46HMHcejI54xuzWTc0brW5HOrhdjiQgjFLhKyzVB45Rc0cOr9OTVSMISw8L8GOqUBxp1f1sYEEyC2HjpbPBgjAISLIYjQ10zyx%2Bhb1eMIuqS5goChrooyjv%2FmC1qHS3pIWrGkv%2Fx75WJOKMYv2vgGIh1ic6OiagJS7bVz5ND7iprqb4ZKUWHBbqOl7oTZEKtuJuCOhbbwJpbANW7oljfKzDVHJ1E%2BaxcGOKlBL9oyIEe%2FYTFnxt67o4xSOHhikCJwT1LlBgKR8cHFjVgN3KVToG676n4q&X-Amz-Signature=0e04f29be825c3d10ff7019d5138572d736ccc11979c1db2779c15080d0ea4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXSWZG4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHXEc3Sv%2BYHBAVeamVp4qIRQz4Gh73bYJxOXA8u%2FWwogAiEAiQEsGTVHQkZSclpIZmZ7reLwduMKQ%2F2Tst%2FmmYhtME8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR7yV%2BlmvcOxpUZeSrcA3LOoVJxCJWW0R3tck%2FS8YU39F%2F31ktIz5iN8PgG48OZgAQ45eDlWs5mHfrga5%2Fh%2B1djvEkRYhCPy1sSZz1KjKcO14LHc0rBBjeDbyoz1%2Ffn%2F417GiLsDIw2W70AXlTsgoaFDWcJAFt%2BCPvb22aicGRQYXUrhgb5cCHmr2Us56waNTb3I%2FQkD72hxG7rR75wHGgIkYPp10Dc2PEPvSUOI5ULh4hpkiON2xakG1EH96zZD3jVkJ0yoytT0aCBegaCPpZqXKDLUPT3kgg%2FNSu5lFMHCdbsgUcyF%2Frx725K5PmZDpdWlCpqD%2FoMJxrn5rwyhXbP5iHCUk7TjTXNhabsZnBEn9UW5k6LmRIhXCZ8VRBbRV4Y%2Bd6n970QqTAKVq542n3deO2HI8YbWmPXmBPqCVKsf0%2FmJLsSF8DtVE7j9%2FVo6wHPIgJdF7kyAfqwMof7DDIxapvvodV%2BZcPkexYTIYseYnpxhb8z3pipu7b4pyf%2FO%2BZKoVoq3sXprYeaN%2BbZb%2F%2FMVswKgvYUSp%2FuQjkA9biU15guQJ4hdx4L4yt5uSc0MXUcLDz65H%2BsjHmiT84xClJyuuT46HMHcejI54xuzWTc0brW5HOrhdjiQgjFLhKyzVB45Rc0cOr9OTVSMISw8L8GOqUBxp1f1sYEEyC2HjpbPBgjAISLIYjQ10zyx%2Bhb1eMIuqS5goChrooyjv%2FmC1qHS3pIWrGkv%2Fx75WJOKMYv2vgGIh1ic6OiagJS7bVz5ND7iprqb4ZKUWHBbqOl7oTZEKtuJuCOhbbwJpbANW7oljfKzDVHJ1E%2BaxcGOKlBL9oyIEe%2FYTFnxt67o4xSOHhikCJwT1LlBgKR8cHFjVgN3KVToG676n4q&X-Amz-Signature=49e9dd0fa3365f96bc9b0858b4903108551dcfb68a6ac166166304d2509ad498&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
