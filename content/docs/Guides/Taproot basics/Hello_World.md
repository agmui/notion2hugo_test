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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH4ZV3L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFIkBwkuCUKgNAbJwwTbJekE36aVlDGNbUYyo2KeHSVQIhAKb1bjmVk8jXXwHVyvWjVyp4wTY20fxKTdQjnwOhtqLGKv8DCDEQABoMNjM3NDIzMTgzODA1Igy88olB8Igv3KL8qSsq3AMYGkE58ySx0fT%2FflmK7MjIrDOiDDlzlcn2rka1PUwJDWL%2F%2FTjNMgHyUwMT1hzAt40WgAj32pzwDFs0aKARfEdb7AdEaJYVwdlCFskENjn%2B19PQHsHbGmegBGlQjsi3%2F9XoTkdfPqGJtwByqTkJh4m5Wc84os9tn8GQijmhvmlUFSrVsdZzAwC4GgAnIEnF1lFSsa0KEIVeQl%2Bh7BZBtS%2FrDbbfIBKW%2B5Pay%2F%2FWzyvx%2BSf0VdxJDjlM9cukFqQMBwbuO%2F4yMFJj4N8SBTec8iR2BG9QKQptcg5Gwsz%2BY2eJZo3YZ5DB9AcTZ8enrdYrYHvhxiHLEGFgTW9FcwinDpvDzhDWGKKRrtQoWQLc9%2BNIgG%2Biy5zGwRyOAi2SrsxU7mqOwoAhn8cDfdNjRhjss2Vtsqa1BAh2om08DAoY%2FXULy460Xo%2BZal6S%2Fkxse78hln3i1z4bqOOb%2FZ9SMZWZ6FQRJ2ZBpUDyNBuxPYhnf6nKyQ%2BAp%2B6rHxe3leDmzdF0n%2FBJmFgu%2BKFGiq3jO%2FoeqlX%2FcuvD1iKtT%2Fqy4KRc2LPAP8fPK1PlwcLrgb7CiaXZD%2BayvOheYc5DV6J7vsETnDp347xYLzKktFH4P2SC12UplPbeGjg40p4lZekI0zCosePABjqkAT0zUHtlCaQmujTl6yQ5SmVyveZrUHk4DwVatBf8BP1fN6WPczGp%2F6XzLsAK8qeWQxF0ITWz%2BLcPMrQraG1MUy5F0dZHbR0IA5XCEu2U9MbZTU682TgW6u9vZvbHjJ15r8cnRoUzIS26k69DGdpCYhnRphOw82LElf%2F35VSajVqLIvLtGfmv7tT8LWwpHLGg86aXvF8SvW%2BMeAw9nSVXLqnMkhLZ&X-Amz-Signature=9907a3dc7f02162d61b7c428e5e1772ce00ee31d6710da9bdf643ef3d348236c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH4ZV3L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFIkBwkuCUKgNAbJwwTbJekE36aVlDGNbUYyo2KeHSVQIhAKb1bjmVk8jXXwHVyvWjVyp4wTY20fxKTdQjnwOhtqLGKv8DCDEQABoMNjM3NDIzMTgzODA1Igy88olB8Igv3KL8qSsq3AMYGkE58ySx0fT%2FflmK7MjIrDOiDDlzlcn2rka1PUwJDWL%2F%2FTjNMgHyUwMT1hzAt40WgAj32pzwDFs0aKARfEdb7AdEaJYVwdlCFskENjn%2B19PQHsHbGmegBGlQjsi3%2F9XoTkdfPqGJtwByqTkJh4m5Wc84os9tn8GQijmhvmlUFSrVsdZzAwC4GgAnIEnF1lFSsa0KEIVeQl%2Bh7BZBtS%2FrDbbfIBKW%2B5Pay%2F%2FWzyvx%2BSf0VdxJDjlM9cukFqQMBwbuO%2F4yMFJj4N8SBTec8iR2BG9QKQptcg5Gwsz%2BY2eJZo3YZ5DB9AcTZ8enrdYrYHvhxiHLEGFgTW9FcwinDpvDzhDWGKKRrtQoWQLc9%2BNIgG%2Biy5zGwRyOAi2SrsxU7mqOwoAhn8cDfdNjRhjss2Vtsqa1BAh2om08DAoY%2FXULy460Xo%2BZal6S%2Fkxse78hln3i1z4bqOOb%2FZ9SMZWZ6FQRJ2ZBpUDyNBuxPYhnf6nKyQ%2BAp%2B6rHxe3leDmzdF0n%2FBJmFgu%2BKFGiq3jO%2FoeqlX%2FcuvD1iKtT%2Fqy4KRc2LPAP8fPK1PlwcLrgb7CiaXZD%2BayvOheYc5DV6J7vsETnDp347xYLzKktFH4P2SC12UplPbeGjg40p4lZekI0zCosePABjqkAT0zUHtlCaQmujTl6yQ5SmVyveZrUHk4DwVatBf8BP1fN6WPczGp%2F6XzLsAK8qeWQxF0ITWz%2BLcPMrQraG1MUy5F0dZHbR0IA5XCEu2U9MbZTU682TgW6u9vZvbHjJ15r8cnRoUzIS26k69DGdpCYhnRphOw82LElf%2F35VSajVqLIvLtGfmv7tT8LWwpHLGg86aXvF8SvW%2BMeAw9nSVXLqnMkhLZ&X-Amz-Signature=c848c938e5d0ff641e19c780da8d63fba924a97bd16332fb830d173bf5764a90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
