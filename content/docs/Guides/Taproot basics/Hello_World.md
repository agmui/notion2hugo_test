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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QFWJUN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDFGN9YFpA3w1ubJuv6mpYXBlWQqvNy1Vs7fsoxuP1rYQIhAJsKxvTY5sLErh%2BPmoS63%2FClhZNTD%2F%2FBNkrUDtWJpxoiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIT6gbZUE29RdhiUq3APgjX2OlG%2F99u5R9voJFitQTBv4CAgXsy3kPT7JrnfPaM14oOqyr6Ojx%2FPobQspU1ePkNp7P50qTYlZfXpYILG7PyCC3jIf9%2FVVEACGBGQnZLge41zteT4LXm0vEKE%2Bmd%2B3a9TQFcS9vHSwW34uIdh9KMzn%2FBqYjbQrt1MkJYGXrKATT3zwUoEDZ8hox8AsolWLRg9YUd0uLSRbXWv%2FKVMn1S8%2FYi9uwyHKkhsXpcIc%2BGS6JcycSVFDoM6t1YAsMyC6rRGcU7TnROi%2BvnzCps8r%2Fs8UaYHUcAfJQuU%2Bu2otKPoSMW%2FQD7WDdJGkS%2Ftf%2FhkzAiB3F7tM5QC3gxO8foOMmf1BRVDWEsqvhw7Mjvip30z%2BgUMsuNJ7pk6h1SmJW7aUWq39Q0e0Au1m1vFb56zldO0O%2FHtzWJfpxKR1YIn0uoKkPr1qjyrmpfcC6%2FC1B6qSV7zqs7UwsXMCRluwy%2F2KZjR3WPYl8Wngg%2FjDCBWOfx4dYi6N%2F4O8KtNZ7RvACTQSaVS7%2FlxKzK1gOHrN0hGAp8VQBcbjpZa1%2Fv0mTftrSyJUMVQGdt58et4p2mi4Fscp244BEbjuOADzeBu0kpQWLv6mlT0s3BhcMCnUkFUsbunqG2mb2uUaO7d%2FZDCfxLfBBjqkAWyIas8nayKKA7QPdw91XqPKH%2FQw%2B8eRCb0etdmLmuWKUhmvIysYPVxZr8CL7hPk4U8TlsVXljeQlopAkD%2Fi%2Bccq7BbGwpfvpoOqQl413Y5rhOrhik5G0Xfz9vPwlwmxLg1hHr3J6DwGGacYtAUxjWpfTzLhFATBuVzeGtfnPEIrRAqPFIxrFWpbYidLB79UpesdVjjpbFIQwuNT2bGxRTPHY7wm&X-Amz-Signature=881609410e4dcc85db28a98de0697bae94f42cce57b2010457ea176eafc1276b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QFWJUN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDFGN9YFpA3w1ubJuv6mpYXBlWQqvNy1Vs7fsoxuP1rYQIhAJsKxvTY5sLErh%2BPmoS63%2FClhZNTD%2F%2FBNkrUDtWJpxoiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIT6gbZUE29RdhiUq3APgjX2OlG%2F99u5R9voJFitQTBv4CAgXsy3kPT7JrnfPaM14oOqyr6Ojx%2FPobQspU1ePkNp7P50qTYlZfXpYILG7PyCC3jIf9%2FVVEACGBGQnZLge41zteT4LXm0vEKE%2Bmd%2B3a9TQFcS9vHSwW34uIdh9KMzn%2FBqYjbQrt1MkJYGXrKATT3zwUoEDZ8hox8AsolWLRg9YUd0uLSRbXWv%2FKVMn1S8%2FYi9uwyHKkhsXpcIc%2BGS6JcycSVFDoM6t1YAsMyC6rRGcU7TnROi%2BvnzCps8r%2Fs8UaYHUcAfJQuU%2Bu2otKPoSMW%2FQD7WDdJGkS%2Ftf%2FhkzAiB3F7tM5QC3gxO8foOMmf1BRVDWEsqvhw7Mjvip30z%2BgUMsuNJ7pk6h1SmJW7aUWq39Q0e0Au1m1vFb56zldO0O%2FHtzWJfpxKR1YIn0uoKkPr1qjyrmpfcC6%2FC1B6qSV7zqs7UwsXMCRluwy%2F2KZjR3WPYl8Wngg%2FjDCBWOfx4dYi6N%2F4O8KtNZ7RvACTQSaVS7%2FlxKzK1gOHrN0hGAp8VQBcbjpZa1%2Fv0mTftrSyJUMVQGdt58et4p2mi4Fscp244BEbjuOADzeBu0kpQWLv6mlT0s3BhcMCnUkFUsbunqG2mb2uUaO7d%2FZDCfxLfBBjqkAWyIas8nayKKA7QPdw91XqPKH%2FQw%2B8eRCb0etdmLmuWKUhmvIysYPVxZr8CL7hPk4U8TlsVXljeQlopAkD%2Fi%2Bccq7BbGwpfvpoOqQl413Y5rhOrhik5G0Xfz9vPwlwmxLg1hHr3J6DwGGacYtAUxjWpfTzLhFATBuVzeGtfnPEIrRAqPFIxrFWpbYidLB79UpesdVjjpbFIQwuNT2bGxRTPHY7wm&X-Amz-Signature=5be161b033e8d845090a5649692a07f07b1c3b8ede3af9fe127969a04656bd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
