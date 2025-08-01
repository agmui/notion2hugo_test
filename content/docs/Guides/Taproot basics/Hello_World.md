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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2JVM3L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1Zbng08q8erHT1zoh6XLOSE1%2B3iUvUYnaTuNhbwOvIAiEAucRg%2BZTi5zW%2BMqBd2YTKvrIEecyG4Lk9zjWZF7DzcyAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt5V5jAI04S4h2xqCrcAynZqACxB0FP%2FvffjhluJOApSUNHTxcjnxc1HQbGOVX3lDFxnUla%2B0g2jTuvz01VsUXlN0csPzCs4S4eKF84DdZBBEw%2B8LpKQ%2BT6R7euBk686thqc74hefKaNsuVJNpwSBQZaBwDowF%2Bdo7MakGSliiNU%2F0WJ4CZw0V28AV3fqM4ks1UAc4z4MWyJU%2FytlS%2B0dN3AIpSQpxHKWhl2tefxSOs5ZFYYr6wIq0CX7bxtU4WT4q6dY0kEvhITyCpwliQmet0ILB4EUOYpztxQPYY6avwEmCDVAw1h5IhFi%2FcEBsPfFAsdmEdx4BIb9FvBjO444sIW20%2FcdzrTRcI7Feu9%2BArdDAeWkw%2FBhT%2F70q0BGeZm58V%2BfRQnls7gkpXOYW47PPxYMBYu400damgVweZBJyjqmsKD%2FXqopEBDLdJ3YBXKnCo%2B2tst9i8d9ij3CWZqlI6PYTnc5PYBUlCJv7xSW%2BMO4DHzTLR%2F0K8uWiWw4hMLnRMG3MMb5CNclgo6EbxiwOoQHitQ2RG%2F3gP5xALHOESJ5Sz5Mel3fb%2B5zWt5%2FsTWFSnSFsjExp8jI%2B3VgH7B5wEPAJPO%2BHG6mILdnfMrK%2BQH4i8o8o8nmUDwkl5Aqy0Z3r50qS6ZiuAjLLcMLXVs8QGOqUBU8tPRdULDsnq%2Feja%2FgiXV9UnuMi0G4Q1Asuh3Lz%2FEHcfYZtjTTcWqmQmUvb580xBMDXDukjztuzezGmnSFwjTzKBNPTUrntvgH%2BgUaEjyBWpqkDk5%2Fy5y9P2g9z6eKWOtAs4GgB9E1EPX9iz6%2BMmJAyNpyRE%2BaKS1N%2FabrxSq5ucEr7zmJgSuUqhs1%2BiGuClGMhOcRqSwP5IXuId7Fb33ffzbio%2F&X-Amz-Signature=0bda370345b8eae478097bf30a6f5e81dfd9cdab94ec3999ed1c2a3cf52b7639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2JVM3L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1Zbng08q8erHT1zoh6XLOSE1%2B3iUvUYnaTuNhbwOvIAiEAucRg%2BZTi5zW%2BMqBd2YTKvrIEecyG4Lk9zjWZF7DzcyAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt5V5jAI04S4h2xqCrcAynZqACxB0FP%2FvffjhluJOApSUNHTxcjnxc1HQbGOVX3lDFxnUla%2B0g2jTuvz01VsUXlN0csPzCs4S4eKF84DdZBBEw%2B8LpKQ%2BT6R7euBk686thqc74hefKaNsuVJNpwSBQZaBwDowF%2Bdo7MakGSliiNU%2F0WJ4CZw0V28AV3fqM4ks1UAc4z4MWyJU%2FytlS%2B0dN3AIpSQpxHKWhl2tefxSOs5ZFYYr6wIq0CX7bxtU4WT4q6dY0kEvhITyCpwliQmet0ILB4EUOYpztxQPYY6avwEmCDVAw1h5IhFi%2FcEBsPfFAsdmEdx4BIb9FvBjO444sIW20%2FcdzrTRcI7Feu9%2BArdDAeWkw%2FBhT%2F70q0BGeZm58V%2BfRQnls7gkpXOYW47PPxYMBYu400damgVweZBJyjqmsKD%2FXqopEBDLdJ3YBXKnCo%2B2tst9i8d9ij3CWZqlI6PYTnc5PYBUlCJv7xSW%2BMO4DHzTLR%2F0K8uWiWw4hMLnRMG3MMb5CNclgo6EbxiwOoQHitQ2RG%2F3gP5xALHOESJ5Sz5Mel3fb%2B5zWt5%2FsTWFSnSFsjExp8jI%2B3VgH7B5wEPAJPO%2BHG6mILdnfMrK%2BQH4i8o8o8nmUDwkl5Aqy0Z3r50qS6ZiuAjLLcMLXVs8QGOqUBU8tPRdULDsnq%2Feja%2FgiXV9UnuMi0G4Q1Asuh3Lz%2FEHcfYZtjTTcWqmQmUvb580xBMDXDukjztuzezGmnSFwjTzKBNPTUrntvgH%2BgUaEjyBWpqkDk5%2Fy5y9P2g9z6eKWOtAs4GgB9E1EPX9iz6%2BMmJAyNpyRE%2BaKS1N%2FabrxSq5ucEr7zmJgSuUqhs1%2BiGuClGMhOcRqSwP5IXuId7Fb33ffzbio%2F&X-Amz-Signature=a2f0cf8eaed146ff63709bb2b2e83183ae86e2aa57f7ad9afe4a36527d1abf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
