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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3PWVSI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGy76dAsUNWHaPrP3vpDuCELHDPWyqbOVkWeJApMEC5QIhALMkhzh7bauPuItl65cqcIRgAqOnQFBpQXjv1d8BJHBMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaFa1j1IzpVvqqfcq3ANF6UHv8G%2BV4NDiJ4EILn71%2FjoclMTtGtLUuz720Ii4svAF0xwjLLkF0d%2FFBubiXo1%2FCMuxAydvVyfo1WJJnH5WyVX5f1yQZEG87qDesSF%2F%2BE5NxtMCcswunk%2Fc1MHh0UXux8uzePf8FIXrSf41aPrhLYcj41LPBQeku7ucYHRy8oYcy38MEgjS4LfFJ0PzbXj%2BPXvqIJXkd0trbpDgQan%2BAR6ahry4SfZyuKAw5EXfRYn1%2FxUzHqHOcBb0Y4UkqxR2ciDZHJ3%2FnSut6G2d6yWQqGYfqGpVylaxyEXAaRNjNvaqWPr%2FISuEEnuDUWXFne7rUkAg2QIBlRr6UwBh6xWpAXsBbGN%2FwGsCrLDYFIJ0jjbzkzVtosS%2B5e17IdYpZrjpqD9sCAjidTFHicA37cCUrKNhermxa6ImzNdY7mTy8kDOkTxtCR4YYq8tDww5UAa4ZTPF38pHTjU9CbEXPDNDHY%2FwiHBrxeFRcIn7Ljyc1xuiPOFagxqu0ySzU6tZokLo1cqTGUfts2rXTSDMWosSWMb3mAnkWyaz%2FQYqLFFnY4v8DHXPTJquhhgJYAvF79HMuYpiG2vUb7RzpuhHkIQwJ7X3YifvdWY5%2F5fnfzVItU%2FFtqixgLi6iKKQ4DDGiei9BjqkAWvOGSko6ywTmATI62%2Feli6IluJ8veHc7xEjbJYp7UZok0FwS4XmUrkzSGdW7LSIbQAZ%2Fthzto9Ix34q9MQP4zucsPCQ11RR2r08Adz3bUfgLDsG2F%2BfiJFDR%2F6r7s0XhFtdk2wVyo6z9McEP4KW5GQ%2FsEOxMPjGCzV0k8k%2BMk1wW8zjtJSju9dyspKy1NnaTST6iPxkNpcRCrgDhTy8BD47SyGY&X-Amz-Signature=1d154cc401379d76bdc315babe794caa62daba52a896c76c2353442f634f35f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3PWVSI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGy76dAsUNWHaPrP3vpDuCELHDPWyqbOVkWeJApMEC5QIhALMkhzh7bauPuItl65cqcIRgAqOnQFBpQXjv1d8BJHBMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaFa1j1IzpVvqqfcq3ANF6UHv8G%2BV4NDiJ4EILn71%2FjoclMTtGtLUuz720Ii4svAF0xwjLLkF0d%2FFBubiXo1%2FCMuxAydvVyfo1WJJnH5WyVX5f1yQZEG87qDesSF%2F%2BE5NxtMCcswunk%2Fc1MHh0UXux8uzePf8FIXrSf41aPrhLYcj41LPBQeku7ucYHRy8oYcy38MEgjS4LfFJ0PzbXj%2BPXvqIJXkd0trbpDgQan%2BAR6ahry4SfZyuKAw5EXfRYn1%2FxUzHqHOcBb0Y4UkqxR2ciDZHJ3%2FnSut6G2d6yWQqGYfqGpVylaxyEXAaRNjNvaqWPr%2FISuEEnuDUWXFne7rUkAg2QIBlRr6UwBh6xWpAXsBbGN%2FwGsCrLDYFIJ0jjbzkzVtosS%2B5e17IdYpZrjpqD9sCAjidTFHicA37cCUrKNhermxa6ImzNdY7mTy8kDOkTxtCR4YYq8tDww5UAa4ZTPF38pHTjU9CbEXPDNDHY%2FwiHBrxeFRcIn7Ljyc1xuiPOFagxqu0ySzU6tZokLo1cqTGUfts2rXTSDMWosSWMb3mAnkWyaz%2FQYqLFFnY4v8DHXPTJquhhgJYAvF79HMuYpiG2vUb7RzpuhHkIQwJ7X3YifvdWY5%2F5fnfzVItU%2FFtqixgLi6iKKQ4DDGiei9BjqkAWvOGSko6ywTmATI62%2Feli6IluJ8veHc7xEjbJYp7UZok0FwS4XmUrkzSGdW7LSIbQAZ%2Fthzto9Ix34q9MQP4zucsPCQ11RR2r08Adz3bUfgLDsG2F%2BfiJFDR%2F6r7s0XhFtdk2wVyo6z9McEP4KW5GQ%2FsEOxMPjGCzV0k8k%2BMk1wW8zjtJSju9dyspKy1NnaTST6iPxkNpcRCrgDhTy8BD47SyGY&X-Amz-Signature=6e2dbf5410cea99b19e747c1168785dc7f826e0d6ae41bc4ca264a4e72deb27e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
