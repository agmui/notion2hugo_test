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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB2AVNG%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Xb4f4kqd%2Fi72JBRjBmdnU%2BfCGFhoXLph95m%2FkKF%2FXgIhAJbR2m%2FbZkuNc%2F5f5Uq%2F27LxF1bC3FCJLpQZvdgc%2BUw7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FlJmLyCkviL8sjp8q3AP66utiaIkKBH%2Ft63mr8KrRDgo4w4B5R8xGh7qOYpKxCo%2BraoM8bqBEdO7bAKuDwG1hXInlilxoIziN5bwydLFZ%2Fl%2FH7GFer85PNcIRggPbHPQqw6pVTqp11%2BJsQ0IT8ORRVjwHsQqqPOuytkz2R3Rt7R%2BXbYrAzHl2HDVMfMpsAOxf%2Fxm7cwoCbO2jNOKQrosFszDnI1jR68t%2BKv20%2Fi82q35ka94uuRzTtKfKM1Y9gSzSlTzH7O3wZ8xEcNFh7NpRAemgqH8KGPCLiAgNmRRIHpGeFBHm%2FmRUXCYBwxb2IJp08bskV3eUvEFX4YQGXBk%2Fxg1Y%2B1Yh0DgLdq3ashy4vqEcwjOgFum1KzBWyw0Hdscu7Ujs2%2BtfHlXO8GlJ%2BJz84v7NYhLrjdcZF5wDfUcOHERmdYwdcJey3GzYslKaHwVJDc3ypsjldjfL6sXjmebJOJvBcriCvan%2FORfy%2F12KMaK2rZxJMMZ1GvVlvkJl9ldtLWEV49W2GNAAHRqN7XHP5mN8zgowlIX%2FmNGZ1ekjHjIHfdZIVl8ln8oDlnnq0z7vU5ehLaUFIY9Ij8%2FEMejXQyllToYcotfvxYqbUxUgFAW3cXeIR0GWVL9kI55IX1qCEjrn3sTGtzBUsDCuwqPUBjqkAVz2lsUqb56TqhKiA%2FENF7KaCxLxOdCPHImf3Z1uqi1XIwu6gruD8v%2FGTN2LwiCNYem3gtOGvTKoz4Zky2c29gMzar60GEZ9YjM0%2FSxjKwQgFX5UexOID%2Bc6SkjFbqRIcoXWmBwGbt%2FtN%2BoIkj2lYJhtoZyC%2F7d0pnhjd%2BOU4pORGSAlwUBRWq9bp%2BKTM%2B6%2BbcnLmRz3jgSHrFw9E2iq7gCmQtFH&X-Amz-Signature=38a406a3b5598f3bc8be2dd05ee7e49bdfdc48cf40580cfd428ce9dff732be5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB2AVNG%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Xb4f4kqd%2Fi72JBRjBmdnU%2BfCGFhoXLph95m%2FkKF%2FXgIhAJbR2m%2FbZkuNc%2F5f5Uq%2F27LxF1bC3FCJLpQZvdgc%2BUw7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FlJmLyCkviL8sjp8q3AP66utiaIkKBH%2Ft63mr8KrRDgo4w4B5R8xGh7qOYpKxCo%2BraoM8bqBEdO7bAKuDwG1hXInlilxoIziN5bwydLFZ%2Fl%2FH7GFer85PNcIRggPbHPQqw6pVTqp11%2BJsQ0IT8ORRVjwHsQqqPOuytkz2R3Rt7R%2BXbYrAzHl2HDVMfMpsAOxf%2Fxm7cwoCbO2jNOKQrosFszDnI1jR68t%2BKv20%2Fi82q35ka94uuRzTtKfKM1Y9gSzSlTzH7O3wZ8xEcNFh7NpRAemgqH8KGPCLiAgNmRRIHpGeFBHm%2FmRUXCYBwxb2IJp08bskV3eUvEFX4YQGXBk%2Fxg1Y%2B1Yh0DgLdq3ashy4vqEcwjOgFum1KzBWyw0Hdscu7Ujs2%2BtfHlXO8GlJ%2BJz84v7NYhLrjdcZF5wDfUcOHERmdYwdcJey3GzYslKaHwVJDc3ypsjldjfL6sXjmebJOJvBcriCvan%2FORfy%2F12KMaK2rZxJMMZ1GvVlvkJl9ldtLWEV49W2GNAAHRqN7XHP5mN8zgowlIX%2FmNGZ1ekjHjIHfdZIVl8ln8oDlnnq0z7vU5ehLaUFIY9Ij8%2FEMejXQyllToYcotfvxYqbUxUgFAW3cXeIR0GWVL9kI55IX1qCEjrn3sTGtzBUsDCuwqPUBjqkAVz2lsUqb56TqhKiA%2FENF7KaCxLxOdCPHImf3Z1uqi1XIwu6gruD8v%2FGTN2LwiCNYem3gtOGvTKoz4Zky2c29gMzar60GEZ9YjM0%2FSxjKwQgFX5UexOID%2Bc6SkjFbqRIcoXWmBwGbt%2FtN%2BoIkj2lYJhtoZyC%2F7d0pnhjd%2BOU4pORGSAlwUBRWq9bp%2BKTM%2B6%2BbcnLmRz3jgSHrFw9E2iq7gCmQtFH&X-Amz-Signature=2d82b2c832f5135977727420e7c29b35c630b1ebb2ac1d426e9cf73aa2fab8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
