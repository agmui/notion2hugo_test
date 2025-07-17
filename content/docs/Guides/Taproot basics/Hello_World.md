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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QWJBYP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD0lWZ7lnXMdaHhW1%2Bv5HDGWmyVPyjiMuNJAd93Pt4%2BtwIhANL4Rn56P3GoROG8W%2FT%2FNTK9eDb4sizzHjTdJW62OmDdKv8DCG0QABoMNjM3NDIzMTgzODA1IgyqIZ%2FmxxgKu5wUnAUq3AMO2r1cqvCCpBOATYfQ%2BnyXBpYFxU0hoxy%2BX4VHYFxs2D%2FlktK%2Bqd5heU1tX7uGzrvybflhePdrB3ONWLjwMEd1kIdXwYukO2QBd0w%2BcyjyYL0X4AzVUpJACJjjADyy%2BIPzn2ZUteHeJDqB6ao61yJKDosarJS61Tq%2BceoXTSTFl5eIC6emLTKETDIlFiIsJZ%2FpBRcoq0WZcD81c9gzfomuoqHEcfEce%2FvtlvJtJwfdafg%2BN7P8vffu0IxThjFd%2FM5bvMXjoUU3d0efohs3EjqunmcLnNesUN3ZZ1W%2FzAqRUYJlOZ%2FNz2EH8ddz3LbzI1vYqCsIJy99GwtGJyb4%2FsB62oE2sljO0ubo8ozoCqvoVw4NQZvodRY0X9rcMEyG1IBLM1SAJdF3NAjnh7zPGjVGJTBgYTZXiyGdo95SygdXNn3KYmAarszEkEJzBFu5HoicSkPySPA85Nvj%2BHY3KhieX%2FJ4RKxHXWIwLTJ6NnNRsLEIwzmqogsH91g0kMzsx%2Fs0pu59wQZjWDZQ7oDLo8bsahep9eBJcIA9vZ7toQEeba6fe2OcedKP6G4trji27nJm0WQ59gJLqGBhCgO5UBNTo3Up4e7wpCEjZTmuqw9r%2FFn1eBY%2BW3w1QhK%2F2zCR7uHDBjqkAdrdWf3WSd6ec1jXeTaL9d3jPQqhds%2FK5Uf880vI0qo%2B2GHEuGGIl56o9dLTInIogD54rl7mfxftjnLDcWMBRa%2FLtFkA17m7HhvTGm1TAwATqvQZ1oOTMnSo55evc%2BPIiF%2FWrTmIAmELL3w4meH1cRRmXuIXo3z9p0UsnxafB5gpPA55HgOn%2FBmsbEwEUHJtd%2FMBN%2FRQc9W0WsGuDtiQCr5brsDD&X-Amz-Signature=dcf8b5c66371a057eea3423eb782643d5168d6996a32f9bb983b731326c3b746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QWJBYP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD0lWZ7lnXMdaHhW1%2Bv5HDGWmyVPyjiMuNJAd93Pt4%2BtwIhANL4Rn56P3GoROG8W%2FT%2FNTK9eDb4sizzHjTdJW62OmDdKv8DCG0QABoMNjM3NDIzMTgzODA1IgyqIZ%2FmxxgKu5wUnAUq3AMO2r1cqvCCpBOATYfQ%2BnyXBpYFxU0hoxy%2BX4VHYFxs2D%2FlktK%2Bqd5heU1tX7uGzrvybflhePdrB3ONWLjwMEd1kIdXwYukO2QBd0w%2BcyjyYL0X4AzVUpJACJjjADyy%2BIPzn2ZUteHeJDqB6ao61yJKDosarJS61Tq%2BceoXTSTFl5eIC6emLTKETDIlFiIsJZ%2FpBRcoq0WZcD81c9gzfomuoqHEcfEce%2FvtlvJtJwfdafg%2BN7P8vffu0IxThjFd%2FM5bvMXjoUU3d0efohs3EjqunmcLnNesUN3ZZ1W%2FzAqRUYJlOZ%2FNz2EH8ddz3LbzI1vYqCsIJy99GwtGJyb4%2FsB62oE2sljO0ubo8ozoCqvoVw4NQZvodRY0X9rcMEyG1IBLM1SAJdF3NAjnh7zPGjVGJTBgYTZXiyGdo95SygdXNn3KYmAarszEkEJzBFu5HoicSkPySPA85Nvj%2BHY3KhieX%2FJ4RKxHXWIwLTJ6NnNRsLEIwzmqogsH91g0kMzsx%2Fs0pu59wQZjWDZQ7oDLo8bsahep9eBJcIA9vZ7toQEeba6fe2OcedKP6G4trji27nJm0WQ59gJLqGBhCgO5UBNTo3Up4e7wpCEjZTmuqw9r%2FFn1eBY%2BW3w1QhK%2F2zCR7uHDBjqkAdrdWf3WSd6ec1jXeTaL9d3jPQqhds%2FK5Uf880vI0qo%2B2GHEuGGIl56o9dLTInIogD54rl7mfxftjnLDcWMBRa%2FLtFkA17m7HhvTGm1TAwATqvQZ1oOTMnSo55evc%2BPIiF%2FWrTmIAmELL3w4meH1cRRmXuIXo3z9p0UsnxafB5gpPA55HgOn%2FBmsbEwEUHJtd%2FMBN%2FRQc9W0WsGuDtiQCr5brsDD&X-Amz-Signature=0a5a37b8e42d052e50c856e33a91fb0cb7b2291f2fa3182172e3ecb4760466de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
