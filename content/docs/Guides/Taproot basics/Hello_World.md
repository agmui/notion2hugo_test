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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDGFJK7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuALFRvcwCGaVR7HEFKdNau1omtJozW0SogDYgrnF57wIgd1v6u3oFKGqzC5yEOyJJw4efDJ8JRndOFzqscLsPq%2BUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxg%2BuVMPnRPeroxACrcA72ZUa3iF0iXoCo5QgKNqygVREweZv5kcaVwl41TaFAzoYpgIy8d%2BZRCIdgJ7Ltnol6QboJQGctq%2FqEq2r7vMn5hLVkHgome1Pbjocp%2B8l6PSR5kHGeH98Ezv7uEZ6wSGJTcmpIQaVAQ8Q%2FTTOI6axiPGkp1pVJeINI8ll9sSeb527kt5OGUVVxc8RtteQJBjauF%2FO5ukx3sOGqgHUPLUgGFLYO5Cv1e6B4J7hZy0HYt20h6eBQWb9Tj3cIUY7%2BNAWjMY1%2FJ92%2BrpmeUJw3lrLC01fR6VFpDN%2FeB%2FeOlfZHSe7orhKcRVUa4D4p31louxuTzzPoVn8hK4x1x3bVUyr%2Bc98C6cLgtnT42om%2FUVGz9wPXGogqtY%2BwIFWK5GD7k7mXllkzxuqaSi3J1gD0ksvj%2BYn%2F%2BvQC0wpBX0%2Bh2WU6WS9wRFaafqDfWrCPE9f%2F9oiJ7XWAsiKQcJGka0WhDaBYzDkGiiiUkNraOmMOfPX4LBW9GxM3JS2lKARirSbmSk4UM1b7oaaPmj6aMg3ix8UpIKKTywRbvuCViCNFjrxmzC5UNFHZS6VzkVvorhcV4pfUqjQvSZUfKMWolMZd3PlgR6mdRBCxiosOVLwkYNWLuuneSbrhDOiMcc%2BJDMJidpb0GOqUB%2FltkXxyEfIRYzraJrivkIRPgXsmK1PBY%2FZqsglhwQRVK%2FS%2FBhNigdoSyyePoC0wbBy9oUjDCqUr37W6QIMyrtUIaE8kZCVk87Aqz6JQR4FeiK6Iv1hF5TaAGAazFFaruH0w84lD9CvOUvxaaapfnlP%2BujTOWsKl6z08XGeqWjIq4Q5RASHbCe8OhGNdheJuGi6XCHHdSEAsKJ0cUSXYsUQUe0i6o&X-Amz-Signature=7f144efbf93014ff48a7e077907a0fd0b7783e184b806388ac8092f7a14e31da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDGFJK7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuALFRvcwCGaVR7HEFKdNau1omtJozW0SogDYgrnF57wIgd1v6u3oFKGqzC5yEOyJJw4efDJ8JRndOFzqscLsPq%2BUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxg%2BuVMPnRPeroxACrcA72ZUa3iF0iXoCo5QgKNqygVREweZv5kcaVwl41TaFAzoYpgIy8d%2BZRCIdgJ7Ltnol6QboJQGctq%2FqEq2r7vMn5hLVkHgome1Pbjocp%2B8l6PSR5kHGeH98Ezv7uEZ6wSGJTcmpIQaVAQ8Q%2FTTOI6axiPGkp1pVJeINI8ll9sSeb527kt5OGUVVxc8RtteQJBjauF%2FO5ukx3sOGqgHUPLUgGFLYO5Cv1e6B4J7hZy0HYt20h6eBQWb9Tj3cIUY7%2BNAWjMY1%2FJ92%2BrpmeUJw3lrLC01fR6VFpDN%2FeB%2FeOlfZHSe7orhKcRVUa4D4p31louxuTzzPoVn8hK4x1x3bVUyr%2Bc98C6cLgtnT42om%2FUVGz9wPXGogqtY%2BwIFWK5GD7k7mXllkzxuqaSi3J1gD0ksvj%2BYn%2F%2BvQC0wpBX0%2Bh2WU6WS9wRFaafqDfWrCPE9f%2F9oiJ7XWAsiKQcJGka0WhDaBYzDkGiiiUkNraOmMOfPX4LBW9GxM3JS2lKARirSbmSk4UM1b7oaaPmj6aMg3ix8UpIKKTywRbvuCViCNFjrxmzC5UNFHZS6VzkVvorhcV4pfUqjQvSZUfKMWolMZd3PlgR6mdRBCxiosOVLwkYNWLuuneSbrhDOiMcc%2BJDMJidpb0GOqUB%2FltkXxyEfIRYzraJrivkIRPgXsmK1PBY%2FZqsglhwQRVK%2FS%2FBhNigdoSyyePoC0wbBy9oUjDCqUr37W6QIMyrtUIaE8kZCVk87Aqz6JQR4FeiK6Iv1hF5TaAGAazFFaruH0w84lD9CvOUvxaaapfnlP%2BujTOWsKl6z08XGeqWjIq4Q5RASHbCe8OhGNdheJuGi6XCHHdSEAsKJ0cUSXYsUQUe0i6o&X-Amz-Signature=a3190cc2915907ebd6ea0740aca9b1cfb9aa581007835134396979d638757f37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
