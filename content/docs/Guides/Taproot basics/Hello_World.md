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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMKYUNQ4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0VlXMuxr8ejSN9uwA6sQQ8949gihevLKjwXyNFND%2BFAiEA0ZmfSRaVOBUDwNhcP%2BW23gFQIXRxKMTGk3Lfn7m9L7Uq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDmnfbuQonig33gMJSrcA%2B0quWs8n3phc8oK4hE6i8fqcKK%2FiH2IQtnjDT4%2BvN201nN657TXNmiLLnulErTdikS240PXQaX7EEIETY7B4lP%2BMnIBP1yKIgzvbg%2FCkF%2BjT97xt4PiyBGH4cqoRupBYJECKqrYt%2BzM6C9WYYGj7XjNKhSHK%2BOw%2BduLQj8DLr0maAO%2BXv%2FSnwrIea37HafZbEntE3L2%2BGujNP7g9VSX8CBWCgornT12K0PMErHb3E2qokydJluHE73v%2BOR1w3J%2F%2B0fjOl0pQjA7NUi540uhbyacPwfGHmWea4wphDCd6KIU9v0r%2FMuP9PlVRlcSyoJ85uDickoUnvMRlRFr3IM9MorgtAXuxhcAeFiENv%2FC9tAojjQy%2F9%2B4layS0puNeBU75h7bdZJwjlfgl3K4D1xUXtk%2FWkcdRmtDiNJTdpag4uLVp9q5Dx1xoc62Z%2ByvPAC32zvdjSgRRgplOT1sY9wIqGXeI1oNTzFtuQ60k%2FON%2F5e74nh6m9C6%2BhqjmZsxJri%2B0NZ7FJ3wofSyfrj48Dy%2F%2FsdPjOSDcE325esc6q9qll1xmkJ4PGrB4URRdxuly9eOXM9tYdg2zlBC0RhfRSCNyo0nXKZiQqcyDYBqDKzGdLGy6eRLBa2XaH2kOvmVMOX%2B6L4GOqUBu%2BFHmWQF%2BP%2BEF1aZABh5u4Uj%2BtXapYr4Iqo7zkaxKGD9dHOFc4TRIgr0yxQTz0eyy548AhlTftfg9jZxYLr%2BTL2OrlyAbSK%2FnIzR6%2FJZTAbRdWP1GoaqC0EW%2FvlenZpD1GnJjAlbEjMlTPwCjZzGfCa0%2FptKZ3K4IUKS1a73Kpu1AjXzsYOOQddQJ5nAZRa6ZiEPsaj61Xa0Fn%2B%2FxLeuDAdeSxw4&X-Amz-Signature=dcfa141568de5c72e30a6d168dcce43ec5e29537c40eb163968cd95b126c7c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMKYUNQ4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0VlXMuxr8ejSN9uwA6sQQ8949gihevLKjwXyNFND%2BFAiEA0ZmfSRaVOBUDwNhcP%2BW23gFQIXRxKMTGk3Lfn7m9L7Uq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDmnfbuQonig33gMJSrcA%2B0quWs8n3phc8oK4hE6i8fqcKK%2FiH2IQtnjDT4%2BvN201nN657TXNmiLLnulErTdikS240PXQaX7EEIETY7B4lP%2BMnIBP1yKIgzvbg%2FCkF%2BjT97xt4PiyBGH4cqoRupBYJECKqrYt%2BzM6C9WYYGj7XjNKhSHK%2BOw%2BduLQj8DLr0maAO%2BXv%2FSnwrIea37HafZbEntE3L2%2BGujNP7g9VSX8CBWCgornT12K0PMErHb3E2qokydJluHE73v%2BOR1w3J%2F%2B0fjOl0pQjA7NUi540uhbyacPwfGHmWea4wphDCd6KIU9v0r%2FMuP9PlVRlcSyoJ85uDickoUnvMRlRFr3IM9MorgtAXuxhcAeFiENv%2FC9tAojjQy%2F9%2B4layS0puNeBU75h7bdZJwjlfgl3K4D1xUXtk%2FWkcdRmtDiNJTdpag4uLVp9q5Dx1xoc62Z%2ByvPAC32zvdjSgRRgplOT1sY9wIqGXeI1oNTzFtuQ60k%2FON%2F5e74nh6m9C6%2BhqjmZsxJri%2B0NZ7FJ3wofSyfrj48Dy%2F%2FsdPjOSDcE325esc6q9qll1xmkJ4PGrB4URRdxuly9eOXM9tYdg2zlBC0RhfRSCNyo0nXKZiQqcyDYBqDKzGdLGy6eRLBa2XaH2kOvmVMOX%2B6L4GOqUBu%2BFHmWQF%2BP%2BEF1aZABh5u4Uj%2BtXapYr4Iqo7zkaxKGD9dHOFc4TRIgr0yxQTz0eyy548AhlTftfg9jZxYLr%2BTL2OrlyAbSK%2FnIzR6%2FJZTAbRdWP1GoaqC0EW%2FvlenZpD1GnJjAlbEjMlTPwCjZzGfCa0%2FptKZ3K4IUKS1a73Kpu1AjXzsYOOQddQJ5nAZRa6ZiEPsaj61Xa0Fn%2B%2FxLeuDAdeSxw4&X-Amz-Signature=f20977970fe9f737c344f0f689d017faad30d1d2d96d64d314463338a006d1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
