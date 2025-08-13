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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=f4e2b5d2927a5a1335bc12df96a66ae97b029e148cd20364072401df188c2107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=adb0376c24f6ffb579de0c02ed00d42aab4fd6d10db9e0eeced22380c5e8e285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
