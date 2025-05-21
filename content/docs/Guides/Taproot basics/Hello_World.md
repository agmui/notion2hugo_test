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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLMCYHJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDgDBwKHXhPOWvE61EzArdwjaW6Vssj66xVch8QWtB16wIhAKvsxhc0DgPLr6HEdNQKOpgsLn2Z%2FxYYS5TJpmPmBf4BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LjkOqrmivvP9nbAq3AOHJucyLqVUvhOqn55i%2FmFAMQLtxv9zfsR8OIh3Ci9mYM1ax987uNF4Ug6IvSnBVrwLH4qKI%2FQkVLtiG2Q2dadN01%2F9VrIzJygbtu7WhjfO7mnSbjZKOXad9mX%2BsjBcOO3%2BYj6QaM4iVQnBcd1kqK7KhPcaNkoSBc1I5NXzGY9xyjeajmrivh%2FwEaJSua%2F2Fc%2Bqk1koiRD%2FTzygG7DkFFm9pifyY3hPYyMMHCTuF9Zo%2B4%2B828LZ81KIaLzmHUZ6itQ%2FT2dvYa5YauIY33IChEgCUmu9rN%2FGQTOJOo1mSdhx%2F%2BHckNdJx3jgxhO6oof4L64w1A1jCDmCJHPixd4S9t3gULprZMcay9wkR13h3WFaVGgpW6yer1ocLj%2F7VBg%2BtbT%2B9daiRz3EVMIV85Ba5%2Fey6GStVxTdCol9ZzzZQg%2FAbd%2FNxKa0LKXGF5SVqXuUpUEDwI8pjvbNsCA8ZaDA4zQvNM119bJhOuvV3p3fD3iEJ25pNmDuJmOnkqtjLG2pAYR60GsNSkH3qUt7KL9GtFQpCI%2F2eP%2BymqfmQXNDfzeCaFuyWxXiNjew0M7LBSoYa3bSXyiAZK5q3ZyBV%2BEC9JVU%2Fhy5aLv7Fr4QmEAEiLCB8TNJ5NrkzDZGR1670zC47rbBBjqkATmUe%2BwsIyOirCEu9yphVPkYXh%2B8N4Kk3AAs6WfTZBe68P3jf5iyb2w4o4e0Swl0rIc6cNQOnL2f1OGTuMj2VQlccj8UIXaYo4X1RMbODYXh3PZl1d2vrJpjf9QmmyfoRhGiy4xZ9Mm7hcKuMpHCPXiT%2BXqYPv8C9n%2FbA6mqbxbtjcezDKMKNpkNvTWXfOjCMLgpMGGlgcn%2F6FPmLoPfk6GIC4YW&X-Amz-Signature=8183821cfb8b8caa0b12800c6ae6d261bb12ebe8a41226225a4bc3e7f6cdd95a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLMCYHJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDgDBwKHXhPOWvE61EzArdwjaW6Vssj66xVch8QWtB16wIhAKvsxhc0DgPLr6HEdNQKOpgsLn2Z%2FxYYS5TJpmPmBf4BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LjkOqrmivvP9nbAq3AOHJucyLqVUvhOqn55i%2FmFAMQLtxv9zfsR8OIh3Ci9mYM1ax987uNF4Ug6IvSnBVrwLH4qKI%2FQkVLtiG2Q2dadN01%2F9VrIzJygbtu7WhjfO7mnSbjZKOXad9mX%2BsjBcOO3%2BYj6QaM4iVQnBcd1kqK7KhPcaNkoSBc1I5NXzGY9xyjeajmrivh%2FwEaJSua%2F2Fc%2Bqk1koiRD%2FTzygG7DkFFm9pifyY3hPYyMMHCTuF9Zo%2B4%2B828LZ81KIaLzmHUZ6itQ%2FT2dvYa5YauIY33IChEgCUmu9rN%2FGQTOJOo1mSdhx%2F%2BHckNdJx3jgxhO6oof4L64w1A1jCDmCJHPixd4S9t3gULprZMcay9wkR13h3WFaVGgpW6yer1ocLj%2F7VBg%2BtbT%2B9daiRz3EVMIV85Ba5%2Fey6GStVxTdCol9ZzzZQg%2FAbd%2FNxKa0LKXGF5SVqXuUpUEDwI8pjvbNsCA8ZaDA4zQvNM119bJhOuvV3p3fD3iEJ25pNmDuJmOnkqtjLG2pAYR60GsNSkH3qUt7KL9GtFQpCI%2F2eP%2BymqfmQXNDfzeCaFuyWxXiNjew0M7LBSoYa3bSXyiAZK5q3ZyBV%2BEC9JVU%2Fhy5aLv7Fr4QmEAEiLCB8TNJ5NrkzDZGR1670zC47rbBBjqkATmUe%2BwsIyOirCEu9yphVPkYXh%2B8N4Kk3AAs6WfTZBe68P3jf5iyb2w4o4e0Swl0rIc6cNQOnL2f1OGTuMj2VQlccj8UIXaYo4X1RMbODYXh3PZl1d2vrJpjf9QmmyfoRhGiy4xZ9Mm7hcKuMpHCPXiT%2BXqYPv8C9n%2FbA6mqbxbtjcezDKMKNpkNvTWXfOjCMLgpMGGlgcn%2F6FPmLoPfk6GIC4YW&X-Amz-Signature=ff397504571ca45d1fe7cb548dc12efcc9ee978ffe14b0bb9f66207d21d89394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
