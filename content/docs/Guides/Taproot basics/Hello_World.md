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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFKOSOO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGueQHae71yvGHpKj7YNKrTwsfiJMZ81jNDm7KBaYugAIhAKGlRhJMQ3ANQy2vvT%2B%2BU4ezoS02frdhylZhP7QVBqbsKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNgtqHJSB%2FGdvrgB8q3AOuMWZmIIOI9PgqiHIaXBSyEanF2TxNvo6lh%2F7eDuhQ10PZrZWPKxEQbP%2BCUv2GXIuiMHg3fF4cjpt09EXYw2BWEpbRG6HUisu0I0NrEOsnCqdz5CU%2FCrjK1swjKhobrrV4I3W6iaQSaeUcaBCKH5sZOthWBfbL%2Bt5NOSO9b6Wsov1OPICprA9%2BI%2Bomjk1AYDkZjehEEPONNZp8HjYj9R%2BzPHr9r6vwmb0pphMBjaTV0YU7Hk1TE8MfPd4SXk4GeSl7uwPqmjiwg5W0tpXKRRYTArHK5OWMya4fuWr43yzEb%2FbK6ykRFcuQamz3xgSs0SSFNHGpxJVf6%2BJMLuEW2Ic3KzoAi%2FvScBqDHmZLudbkABFebWQrjv7znhv2Jj3bXSpdmBkIvoV1mODX3fC4f5ILbIN5dK8l0ATc7N3XRLS6vTRm5NsP7RH%2FfbDVooMdqX3FQ4NTRoHtoSL%2FdSLGVr%2B0G69OAzH7dhDtDxZtwWcoxPGKhpa6lkes3LX1Jsd%2FEz0XW2Qx6FQoNignQdFQi4dJEAlw7AhlK6U7B8E0dQDJzbqD07Gj3tX4Kz8ORM3PsbmuHGC4%2BY3bS%2BviGDmy8j%2B%2FHNLE14ATPGoz0vDFeIG%2BDw6G7n%2FnAnRu5w0uNTDw67u%2BBjqkARCwMGhC1T7UxjVmuiuk100jTIYqh1z1MOfASuM5lawpZTpD8wKJMYf0V3KP9OI2JaEpzNCotY6GCAqk3iTu5SEJsGFV22Ke6EU73ZHz39jtp5SDRAEPH0y3Z46A6yggGZzrfmqYNWrbrzFIFNkghhfqhdmJN8i9xXUQ7rwzJU3IEn1kWdvvCu1GlDVqw%2F%2F6aPjpt1QzALK7I9p%2BmK9VViGQYq9d&X-Amz-Signature=32b6cf6489a823d62eb70cbdaf8237095cd7b8f123fd206d17392e8214db1f60&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFKOSOO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGueQHae71yvGHpKj7YNKrTwsfiJMZ81jNDm7KBaYugAIhAKGlRhJMQ3ANQy2vvT%2B%2BU4ezoS02frdhylZhP7QVBqbsKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNgtqHJSB%2FGdvrgB8q3AOuMWZmIIOI9PgqiHIaXBSyEanF2TxNvo6lh%2F7eDuhQ10PZrZWPKxEQbP%2BCUv2GXIuiMHg3fF4cjpt09EXYw2BWEpbRG6HUisu0I0NrEOsnCqdz5CU%2FCrjK1swjKhobrrV4I3W6iaQSaeUcaBCKH5sZOthWBfbL%2Bt5NOSO9b6Wsov1OPICprA9%2BI%2Bomjk1AYDkZjehEEPONNZp8HjYj9R%2BzPHr9r6vwmb0pphMBjaTV0YU7Hk1TE8MfPd4SXk4GeSl7uwPqmjiwg5W0tpXKRRYTArHK5OWMya4fuWr43yzEb%2FbK6ykRFcuQamz3xgSs0SSFNHGpxJVf6%2BJMLuEW2Ic3KzoAi%2FvScBqDHmZLudbkABFebWQrjv7znhv2Jj3bXSpdmBkIvoV1mODX3fC4f5ILbIN5dK8l0ATc7N3XRLS6vTRm5NsP7RH%2FfbDVooMdqX3FQ4NTRoHtoSL%2FdSLGVr%2B0G69OAzH7dhDtDxZtwWcoxPGKhpa6lkes3LX1Jsd%2FEz0XW2Qx6FQoNignQdFQi4dJEAlw7AhlK6U7B8E0dQDJzbqD07Gj3tX4Kz8ORM3PsbmuHGC4%2BY3bS%2BviGDmy8j%2B%2FHNLE14ATPGoz0vDFeIG%2BDw6G7n%2FnAnRu5w0uNTDw67u%2BBjqkARCwMGhC1T7UxjVmuiuk100jTIYqh1z1MOfASuM5lawpZTpD8wKJMYf0V3KP9OI2JaEpzNCotY6GCAqk3iTu5SEJsGFV22Ke6EU73ZHz39jtp5SDRAEPH0y3Z46A6yggGZzrfmqYNWrbrzFIFNkghhfqhdmJN8i9xXUQ7rwzJU3IEn1kWdvvCu1GlDVqw%2F%2F6aPjpt1QzALK7I9p%2BmK9VViGQYq9d&X-Amz-Signature=9fb9a9ae5d112d0bf974c2ec1ec5ed226cad13a36d06c9a3d9e8fcd745042469&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
