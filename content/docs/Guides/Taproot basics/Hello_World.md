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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Q5ZDTZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8PnBd%2B2JIrjSxXV80FtWCye6ubsaF6uut63Lua63owAiEAx%2BabIxKlBsVvsMqTSS3h4uqw5Gn79JFQkCs%2FgNoBbH0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaqROMAv%2F80CGAMmCrcAyLmxJrVLlINbK4Osvl9e1c4Jrw8WnZ30KQGgyfi6JOtSVylKxhH96i5v1sImQAS%2FcTsLUtEjDYMXiU4AzvxaD3z4GKymrxMESXFbjjvEilrdZIupPsSggYo4g9NCVEAwQIkNizm9S7PrYvhkpyKJy%2BFLurCS1xh5D08YYT%2Fsl%2Ff2YejuO7csA9rWWY5rEMK4Gnq8p4WAWChFfadHvNGTvHt71ELmolKZY%2FWbbeH0lw%2BvKKyrkFgA%2BU1RU2Ia5rrY1T%2FnaDRmPRPdnqC5RuH46FpqGSKVZrWq%2FxiT1ybzcQHT7n%2F3KYe5MI4FZASyx%2Bcf92AX3jv9HCGj8aCCWjyisMu9qzP8KqjsAHW7mUmUjNaQCwoQ6xt5f0lx2kukHXWJ231NaAgHJleIwuckv3YKVpf0XuDdahJWlp%2F%2F3OUaswT1UW3YYfecgITrItazNeuvnwvjMM92jgTGrxWXmsJVll0hRHfWoJWdSQ0H%2BV7Lg9OqJ1dWqD1tFsMxqOwjF6loWqH%2BR4i4AOMASEj76o9mRFcJi4it0fUbhLGrFXJv%2BABoNZkulFZVX8I5TFruQRECAPP0NbMH%2B6XC0YhLiootZMsOF%2BkaTZHUhLj1JW6Fqp%2BoGWiP8wzpG8mG6QdMJrNgMMGOqUBTERfRoUJCqf%2BmBe3CNdo%2B%2BRBFIi9osU3dQeMLwGI%2Blb%2FtUbrY8vhwyf%2FpzAEfknpEy6xx0KJUFmOWltZeVZVg886otyDqzDcgR5ZMR1Q7BnJWZJ01NLrtgq4%2FDIJTpc2z6fD0MDh4vjs8SYkjFuXMxaPnHNYK4lVu07n3y2kSEA4SdRyhHOuu%2BwauE%2BdfHtK9ZsabuqMKwTbt%2BedGICgGiPVnbtQ&X-Amz-Signature=a5fa52133ebc4cf2a183d1f240ebb78b4d7af0335f45efe7ecf5e8058c073360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Q5ZDTZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8PnBd%2B2JIrjSxXV80FtWCye6ubsaF6uut63Lua63owAiEAx%2BabIxKlBsVvsMqTSS3h4uqw5Gn79JFQkCs%2FgNoBbH0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaqROMAv%2F80CGAMmCrcAyLmxJrVLlINbK4Osvl9e1c4Jrw8WnZ30KQGgyfi6JOtSVylKxhH96i5v1sImQAS%2FcTsLUtEjDYMXiU4AzvxaD3z4GKymrxMESXFbjjvEilrdZIupPsSggYo4g9NCVEAwQIkNizm9S7PrYvhkpyKJy%2BFLurCS1xh5D08YYT%2Fsl%2Ff2YejuO7csA9rWWY5rEMK4Gnq8p4WAWChFfadHvNGTvHt71ELmolKZY%2FWbbeH0lw%2BvKKyrkFgA%2BU1RU2Ia5rrY1T%2FnaDRmPRPdnqC5RuH46FpqGSKVZrWq%2FxiT1ybzcQHT7n%2F3KYe5MI4FZASyx%2Bcf92AX3jv9HCGj8aCCWjyisMu9qzP8KqjsAHW7mUmUjNaQCwoQ6xt5f0lx2kukHXWJ231NaAgHJleIwuckv3YKVpf0XuDdahJWlp%2F%2F3OUaswT1UW3YYfecgITrItazNeuvnwvjMM92jgTGrxWXmsJVll0hRHfWoJWdSQ0H%2BV7Lg9OqJ1dWqD1tFsMxqOwjF6loWqH%2BR4i4AOMASEj76o9mRFcJi4it0fUbhLGrFXJv%2BABoNZkulFZVX8I5TFruQRECAPP0NbMH%2B6XC0YhLiootZMsOF%2BkaTZHUhLj1JW6Fqp%2BoGWiP8wzpG8mG6QdMJrNgMMGOqUBTERfRoUJCqf%2BmBe3CNdo%2B%2BRBFIi9osU3dQeMLwGI%2Blb%2FtUbrY8vhwyf%2FpzAEfknpEy6xx0KJUFmOWltZeVZVg886otyDqzDcgR5ZMR1Q7BnJWZJ01NLrtgq4%2FDIJTpc2z6fD0MDh4vjs8SYkjFuXMxaPnHNYK4lVu07n3y2kSEA4SdRyhHOuu%2BwauE%2BdfHtK9ZsabuqMKwTbt%2BedGICgGiPVnbtQ&X-Amz-Signature=5ceea23abdbc19c1864a370d47a1f87deb5e3fda0b2e326934d8eecc10f84136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
