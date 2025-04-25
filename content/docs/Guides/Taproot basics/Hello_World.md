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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7GMRLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuyM8r1cWWLXz0QwyKTGrK40K%2FAeRsRsb7OrioMgu4WAiAoTPVGe86MTEWt6FiCZ%2BeAjromwZR4AnSrDWPp5zTjlir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpZGXjZhALOMklUZDKtwDm3By7aEmbKyZZvVW8UzgGKKZUGJokYGO3%2F3WNNNu%2BVJtY8rVpi3%2BYazOWFkxSJHf87frrcO9mURGIXj6tpJgM%2F5Fo77ydDEbU9HUw%2BgFtHAnwrLDWQ3ghhczC0pjyQXZie7AB1irp%2Bjq68LUZcaGSXtq7PTpHs6u%2Fq7CKCawWfl12BaG72%2BaoHhI1sFGzdtqJ6lkAHhnVgrI54%2F9u27%2FPLqNhMv4cIEZj9ODMA7twIyoX1jYDUjfSBOhrkV0d92aO6BZHAQTFcZ1xY5c%2BIQx%2FnCFL9et6DL2q%2BP2w7BI7RRg3p%2FDnI89jQ8UUkbZ%2F0248qxS2YQ9azNuddpllHzBAPvzQVMTZY3Bw71bEULu3jXzt0vMiK3Lm3e5Igv3svYRVLpIFxSrpi7cEym5TYIllyxK%2B2QYvr4InevI7Ly3WQBGd2l9lTHtRCTq1cCZFtQh9kO%2FCSra3f7Q0g3pd6IR98FvB00urvkoJeO8dk8z%2B555a3NSKAGnrtHfhiRSqDOkqgGzNXnAWhYSPZ7LJ%2FKtOosj%2Fy5WhEgVkoPVqGLhVGrkHFVqder0wbAtlKtDendsJRDjdf3OfxqXKYCp3QTGvIkmPGFBY5N0aP5qtR9j0noes0CS9v5t1oqmSa8w2putwAY6pgFN6vudNoPp1rnid7IXkmzJt%2BK%2BA%2FUlsmyn3AtPAsTMM%2FtwXatG41cMROFZ7vwgwk5UhhIYJZAqoW%2BWD8IKGjOv%2BEZ2vFXPZKuhj%2B0rwsrpQjNTzOicd8%2FhfBnzirvd%2BAG6bHxEDS%2FbqvZNV2B9H5cPQIKlzq6FLwc2Odo4XVj90L%2BkCzOHz7EVt9RG8HWLrRY75gLIUBYIZ%2BqyIPT0pBcn4PfiyydB&X-Amz-Signature=14b8c347d34da4cc95f9b66033579e97e00af0340d342f39c400d7937cfa1fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7GMRLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuyM8r1cWWLXz0QwyKTGrK40K%2FAeRsRsb7OrioMgu4WAiAoTPVGe86MTEWt6FiCZ%2BeAjromwZR4AnSrDWPp5zTjlir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpZGXjZhALOMklUZDKtwDm3By7aEmbKyZZvVW8UzgGKKZUGJokYGO3%2F3WNNNu%2BVJtY8rVpi3%2BYazOWFkxSJHf87frrcO9mURGIXj6tpJgM%2F5Fo77ydDEbU9HUw%2BgFtHAnwrLDWQ3ghhczC0pjyQXZie7AB1irp%2Bjq68LUZcaGSXtq7PTpHs6u%2Fq7CKCawWfl12BaG72%2BaoHhI1sFGzdtqJ6lkAHhnVgrI54%2F9u27%2FPLqNhMv4cIEZj9ODMA7twIyoX1jYDUjfSBOhrkV0d92aO6BZHAQTFcZ1xY5c%2BIQx%2FnCFL9et6DL2q%2BP2w7BI7RRg3p%2FDnI89jQ8UUkbZ%2F0248qxS2YQ9azNuddpllHzBAPvzQVMTZY3Bw71bEULu3jXzt0vMiK3Lm3e5Igv3svYRVLpIFxSrpi7cEym5TYIllyxK%2B2QYvr4InevI7Ly3WQBGd2l9lTHtRCTq1cCZFtQh9kO%2FCSra3f7Q0g3pd6IR98FvB00urvkoJeO8dk8z%2B555a3NSKAGnrtHfhiRSqDOkqgGzNXnAWhYSPZ7LJ%2FKtOosj%2Fy5WhEgVkoPVqGLhVGrkHFVqder0wbAtlKtDendsJRDjdf3OfxqXKYCp3QTGvIkmPGFBY5N0aP5qtR9j0noes0CS9v5t1oqmSa8w2putwAY6pgFN6vudNoPp1rnid7IXkmzJt%2BK%2BA%2FUlsmyn3AtPAsTMM%2FtwXatG41cMROFZ7vwgwk5UhhIYJZAqoW%2BWD8IKGjOv%2BEZ2vFXPZKuhj%2B0rwsrpQjNTzOicd8%2FhfBnzirvd%2BAG6bHxEDS%2FbqvZNV2B9H5cPQIKlzq6FLwc2Odo4XVj90L%2BkCzOHz7EVt9RG8HWLrRY75gLIUBYIZ%2BqyIPT0pBcn4PfiyydB&X-Amz-Signature=fcd5ef4763d2713390a33e266fb1a412280bb285912b2f9a80761ce1d00e7629&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
