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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2APFP5X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFh9lZrwtHXxrFb7rpzOFQ2rxtlgNTouSmaYm%2BYcdu8TAiAe4wQBgTn77ygZJb%2FIVWgtgI3GtgKU5tsZTM9dhDClbiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZj27DrW2mEBlPdsKtwDyk0xEV7LBvGstfIsfezcstAdM8HAkF7vNQoZIxPwM7Ef6RZZ0wOS1nsoFW6xpqBn8o2NPvieZONapUCEfTxO7ZONvznFpA23FDicfZltpyptM33HUd2%2BJ4GqYUuKvaY9jv0AKhyMdqr%2F9Fs%2BDuLZzVib24C7k9EX4O01jGTlABiKBT7aQlpbxw%2FWCx7E%2BtxkIIXFOR166QQnYe3P6EEDDuBTa61rToTCvAUAHhTDRDcjtKWKUOPN21qhJd6QLQHAEI5NNqsBCkYkVuQm0w2DI34o9G1eGW16AxEjk7ftWL9vEI3T7NzC9qqia5Kdfef8iXUXuPw5TYNXLxb0RK%2F%2FW%2FBW7QF4TiVZ%2FWqXRa3ucc1yhudrmnkYuReMp4X2zUveIYd0TlDWQBi5IeMHGLRR7CwkATaHMORUcyvi5INaTxBdPpg4xAFGTD3vKfpC2onBZzCNxqhruNKRSlrC9fYTnBnyP701m3LJjMllYhirvdwS70LI3VdiVLjMezQP%2BjZuuX%2F8KlboSeu%2BAZeTHG%2F4pR5uLiJX%2BMSVk2n0ATxyIrbz8%2BmwNRZmjbEaBnVRLJfOx%2F11JbOk6z7i9qoXeoJbfFpA5kcJMOM2%2BfZCnu29VnBfCiKmh79fIpn6eXMw5u29vgY6pgFLcJPWDbqZbhbesb4IHfCh1nLgWCR8AQ78C7q4k4YlPZl8xiB0NSKjg3s35hVMA4rOMru4FnneGmACUQUuqmlQbq1vNwr4DdGIa0W5%2BsOmY2DRdqcLeORxKVJLU2AHBSE7R%2BhYO4J56yMAANY%2BfveCVmi9%2BmC2wEJG6n3OIF5vr908C1bu87ZuavGc2Xb1531WP5DIIn2dyf5ReNt0alP%2BhVAjTO0u&X-Amz-Signature=af4edf057cd64f5c0ab745f2ac40c20fc35dca112646b500264695007c59877d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2APFP5X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFh9lZrwtHXxrFb7rpzOFQ2rxtlgNTouSmaYm%2BYcdu8TAiAe4wQBgTn77ygZJb%2FIVWgtgI3GtgKU5tsZTM9dhDClbiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZj27DrW2mEBlPdsKtwDyk0xEV7LBvGstfIsfezcstAdM8HAkF7vNQoZIxPwM7Ef6RZZ0wOS1nsoFW6xpqBn8o2NPvieZONapUCEfTxO7ZONvznFpA23FDicfZltpyptM33HUd2%2BJ4GqYUuKvaY9jv0AKhyMdqr%2F9Fs%2BDuLZzVib24C7k9EX4O01jGTlABiKBT7aQlpbxw%2FWCx7E%2BtxkIIXFOR166QQnYe3P6EEDDuBTa61rToTCvAUAHhTDRDcjtKWKUOPN21qhJd6QLQHAEI5NNqsBCkYkVuQm0w2DI34o9G1eGW16AxEjk7ftWL9vEI3T7NzC9qqia5Kdfef8iXUXuPw5TYNXLxb0RK%2F%2FW%2FBW7QF4TiVZ%2FWqXRa3ucc1yhudrmnkYuReMp4X2zUveIYd0TlDWQBi5IeMHGLRR7CwkATaHMORUcyvi5INaTxBdPpg4xAFGTD3vKfpC2onBZzCNxqhruNKRSlrC9fYTnBnyP701m3LJjMllYhirvdwS70LI3VdiVLjMezQP%2BjZuuX%2F8KlboSeu%2BAZeTHG%2F4pR5uLiJX%2BMSVk2n0ATxyIrbz8%2BmwNRZmjbEaBnVRLJfOx%2F11JbOk6z7i9qoXeoJbfFpA5kcJMOM2%2BfZCnu29VnBfCiKmh79fIpn6eXMw5u29vgY6pgFLcJPWDbqZbhbesb4IHfCh1nLgWCR8AQ78C7q4k4YlPZl8xiB0NSKjg3s35hVMA4rOMru4FnneGmACUQUuqmlQbq1vNwr4DdGIa0W5%2BsOmY2DRdqcLeORxKVJLU2AHBSE7R%2BhYO4J56yMAANY%2BfveCVmi9%2BmC2wEJG6n3OIF5vr908C1bu87ZuavGc2Xb1531WP5DIIn2dyf5ReNt0alP%2BhVAjTO0u&X-Amz-Signature=c066e4753e93340216bbab572fb85936fd7e868f41c43ec006bca0a7126f7ced&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
