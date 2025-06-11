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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUZTYRY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF3RBK9M%2BQxIgtHdeyd8qjhlJAMyUBSD6HgVJTGSSATLAiBQJcftVBmQ2E88DfGcToSG6sp9Qn3Ygh3j16J7RQY4MCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaxjCJB7xYUpbrCkKtwDdXNXkpz9SQ3%2FtLw1bSdEzaca2Afj43aH2m6T3MHsnfcHXkRJ40uUmJitHgJO4VMbPy4FHJLGjK%2F5ET4tEVfktSaGX8D68jJZ7lXLDFD2%2B9WLA5NXaN%2Fqqiw6dnsyQulix9SrB%2BUJtlva5r1Wur8yg6vShF4rwXKl%2BCOPcO9qBDJ8qmP42PHHES0Kpf%2FTNBZUDA9tgWMTCsaEh6wwBqWGK1KqLrVB2KO%2F3JrcF%2BT%2BWPfbtxrHIAUPKifMTQ%2F%2BG%2BQSpm%2F%2FBRdUtm6wYMYun8oW5NouH76qeqHXOSxZxCmnTjibQob6%2FjNye2J2Htx2Q4rF8w%2BLbLpYkZH7Sb0mvRUU3DAGGTiCinzVhJakZTdAOw1XO7EPt8c5fgA6m0paTwCGFtiOfN%2F6doI9ai9u81%2B534q8koYVko6qt%2BmIDnD57a6MGEutOKb%2FaZp76kApE7CNsz7u7CMkjRUOUA84TOOZtZGeaaiiwOJlslGk9sA6h8Ws36KQHNR7PfO6fQaux%2BAKtGowVWdXWRPpNqUnda0xosBIyuBcwkcqn6sAAiheBjQeFxFE4VEZwlXPdAEj0U%2FHzEAYOfRJRDD34RWAuXJG6fuoPEXcwvSty5Q0lCR%2FbU6sEl6FG0XuHEpbWrEw3YaowgY6pgHgtIj6X2DG0TUBYvXIZ%2BxjB6QGDnKjiGwlLeHR62Nz516EjbIsr5i5H8f57Urj5r3T%2BYWIFXoTKIJ2D325uXO55h3X%2Fml0TepzJ%2BXWhmXWAJ62f19L0mmUnHIhcWUERKIZERBxOGQlFDesK5uqgGAvn%2FxeRGK7AYGzzfA%2BcvzFsVttSsdkmf6%2BSAJIk6YFDWHP7fMwgapyfnM59UF6ux5pli6fTddm&X-Amz-Signature=644666a0eb08f4c947d81ea959d784b42961d691b337ac13e021dd7272e6b761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUZTYRY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF3RBK9M%2BQxIgtHdeyd8qjhlJAMyUBSD6HgVJTGSSATLAiBQJcftVBmQ2E88DfGcToSG6sp9Qn3Ygh3j16J7RQY4MCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaxjCJB7xYUpbrCkKtwDdXNXkpz9SQ3%2FtLw1bSdEzaca2Afj43aH2m6T3MHsnfcHXkRJ40uUmJitHgJO4VMbPy4FHJLGjK%2F5ET4tEVfktSaGX8D68jJZ7lXLDFD2%2B9WLA5NXaN%2Fqqiw6dnsyQulix9SrB%2BUJtlva5r1Wur8yg6vShF4rwXKl%2BCOPcO9qBDJ8qmP42PHHES0Kpf%2FTNBZUDA9tgWMTCsaEh6wwBqWGK1KqLrVB2KO%2F3JrcF%2BT%2BWPfbtxrHIAUPKifMTQ%2F%2BG%2BQSpm%2F%2FBRdUtm6wYMYun8oW5NouH76qeqHXOSxZxCmnTjibQob6%2FjNye2J2Htx2Q4rF8w%2BLbLpYkZH7Sb0mvRUU3DAGGTiCinzVhJakZTdAOw1XO7EPt8c5fgA6m0paTwCGFtiOfN%2F6doI9ai9u81%2B534q8koYVko6qt%2BmIDnD57a6MGEutOKb%2FaZp76kApE7CNsz7u7CMkjRUOUA84TOOZtZGeaaiiwOJlslGk9sA6h8Ws36KQHNR7PfO6fQaux%2BAKtGowVWdXWRPpNqUnda0xosBIyuBcwkcqn6sAAiheBjQeFxFE4VEZwlXPdAEj0U%2FHzEAYOfRJRDD34RWAuXJG6fuoPEXcwvSty5Q0lCR%2FbU6sEl6FG0XuHEpbWrEw3YaowgY6pgHgtIj6X2DG0TUBYvXIZ%2BxjB6QGDnKjiGwlLeHR62Nz516EjbIsr5i5H8f57Urj5r3T%2BYWIFXoTKIJ2D325uXO55h3X%2Fml0TepzJ%2BXWhmXWAJ62f19L0mmUnHIhcWUERKIZERBxOGQlFDesK5uqgGAvn%2FxeRGK7AYGzzfA%2BcvzFsVttSsdkmf6%2BSAJIk6YFDWHP7fMwgapyfnM59UF6ux5pli6fTddm&X-Amz-Signature=f64b27bd1e30a65d74eb1d44d695195d4e1fe12167f02180f1205f48d6c8dd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
