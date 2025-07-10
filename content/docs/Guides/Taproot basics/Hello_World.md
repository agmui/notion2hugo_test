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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4LEUMW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FRG2nTiXkdojie4Q6fY5JOFJd440aSvLyiH6jBqIJ9AiBepnSX3mVoKf7TDwzUE1W3vpVENDb7HMSF4H29VJqCVCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME6quTQmKcbTazqlVKtwDsGxuG5aSLbbE2wZ5oB78YhagdDMphsz4ZVoRraXSAoKXCgQexszL%2BkJAslfMmR8YGg4Z22CADJW0yykfMnXmagfg2X9JW%2BVIxydle787SzdecQFBs2RBJOk2qW4Sk11ti9sjSz9DabyXSbk3j%2BaIXpzS1N7eU04Fce6MCdp84esD6pQt6Af5BuTY5rGAjAD9yOsw0hTHbDBjOjxtS0f8R2jRq5L8l8%2B2Cwrp4uG%2FqPCxAyIgQBNcKnBxPeAbcHlVXt1fePFKfpxLZAbK6Vf2YjayalL%2F6BYAYy6cM48xJMSQpIM8mdhNtwlO%2FR7EFj8T1Y7lfSlzn4UK2JvcBfwhheME6k76oOW2BF1cKZqKEySwZrgWLp9ZYh9VMc1swbEIW9HmBGS05hsznrOl1ANmrQqQm0PDS9CYxGOjt7Ldrt7bZMkCrVo3cgJtY9y%2F10WtfqVo6mIAitT3Wf8vKxQmduL5%2FGwauLlV6PUfEzMnKs6HBGlcDm9D%2BxnQ6Q%2Bx2jmb9S%2Bv%2FGjwvHU7%2B1Ztaf%2Fdpc7PVI6bLJHxAAvkTZbtH%2FYetxSPiSF8uJVx82jkSQVwgXAqvjm9Sij5YEyJ0SCLA5HxZ7SKClsoThMaZGGExEQKkEzSGgg%2BxuguzJEw94G%2BwwY6pgFGggy0ob5pVWifa4rfCtXKbpQW56jzW6wi%2F6AQ2Y0gNRJ9eCYdqV1xNhuTUuhWMNlgbHeAC4ZnTKSxtpCnGzBHx4Ptr4LmkcNL8CoWcWpITHz0MszhbKnv46BgWTua7OYI6jZJTrhzygST6vwH5oMDC8ovmROn1a%2FpG%2FnGKi7ZzDvWkdoxF8oKg4CgxO%2FuV1izrX9wU2S9NqdQNCS8loKeV4vMhDnY&X-Amz-Signature=51b11229472fbb9430b36c0b6673f9314c2147a8e68416581475429afd152872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4LEUMW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FRG2nTiXkdojie4Q6fY5JOFJd440aSvLyiH6jBqIJ9AiBepnSX3mVoKf7TDwzUE1W3vpVENDb7HMSF4H29VJqCVCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME6quTQmKcbTazqlVKtwDsGxuG5aSLbbE2wZ5oB78YhagdDMphsz4ZVoRraXSAoKXCgQexszL%2BkJAslfMmR8YGg4Z22CADJW0yykfMnXmagfg2X9JW%2BVIxydle787SzdecQFBs2RBJOk2qW4Sk11ti9sjSz9DabyXSbk3j%2BaIXpzS1N7eU04Fce6MCdp84esD6pQt6Af5BuTY5rGAjAD9yOsw0hTHbDBjOjxtS0f8R2jRq5L8l8%2B2Cwrp4uG%2FqPCxAyIgQBNcKnBxPeAbcHlVXt1fePFKfpxLZAbK6Vf2YjayalL%2F6BYAYy6cM48xJMSQpIM8mdhNtwlO%2FR7EFj8T1Y7lfSlzn4UK2JvcBfwhheME6k76oOW2BF1cKZqKEySwZrgWLp9ZYh9VMc1swbEIW9HmBGS05hsznrOl1ANmrQqQm0PDS9CYxGOjt7Ldrt7bZMkCrVo3cgJtY9y%2F10WtfqVo6mIAitT3Wf8vKxQmduL5%2FGwauLlV6PUfEzMnKs6HBGlcDm9D%2BxnQ6Q%2Bx2jmb9S%2Bv%2FGjwvHU7%2B1Ztaf%2Fdpc7PVI6bLJHxAAvkTZbtH%2FYetxSPiSF8uJVx82jkSQVwgXAqvjm9Sij5YEyJ0SCLA5HxZ7SKClsoThMaZGGExEQKkEzSGgg%2BxuguzJEw94G%2BwwY6pgFGggy0ob5pVWifa4rfCtXKbpQW56jzW6wi%2F6AQ2Y0gNRJ9eCYdqV1xNhuTUuhWMNlgbHeAC4ZnTKSxtpCnGzBHx4Ptr4LmkcNL8CoWcWpITHz0MszhbKnv46BgWTua7OYI6jZJTrhzygST6vwH5oMDC8ovmROn1a%2FpG%2FnGKi7ZzDvWkdoxF8oKg4CgxO%2FuV1izrX9wU2S9NqdQNCS8loKeV4vMhDnY&X-Amz-Signature=602e8d98407814614644d57baf81d475bcb2293b28186a1ef94fdc8ab8568204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
