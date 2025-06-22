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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANQ4AG3%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDtBXveAPXQ6lZtahffELlcOqPNYJszJtZWqlJYncA2rAiADSy%2FZlcspni7q9X8Q1r%2BsXrm1KcKFnwSasQKkuCwtuiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FZShCDmJ8z1N0xn4KtwD5V7UkV3O0Zqk4G38qvCdC8cfwrIKlf2P7GsFXwJDoajFZPq9lhatteUx1mzsRfNrGqDdqy4KzVR165ZVZ6xlEJpXKjtfNzGStGmlGZOrmMF4u9fPs8dSxuhcXaDMM7fzxpoixaHpu1yzAmBQmmMgACXAlSzjahOKyf1mvOBWPAbDiwnsq3NVRWYNcogylvNgiCck61ZGwfNpoxFtnEqiy4DuJDTen91n1jv%2FEiMQYQvZW%2FFPfTvoD9g3jrtNeO%2B201W4ZzYVUGDrsTE4ICNKbWFzE%2FuPQJJUysUqwMdygcYCgdKxi27Ts%2FbTurqDJkWDJNoZJvM1mewAgTdNDAgKB%2BmuXTj5slFdPIHJoIh3SDsVsj%2FWyAh7J8Z0iWbU97Qq3MaWbJShl7Fk4QNushxBK%2BKIai8DQ8dEeNp5XpL9f0SpVFISZD%2FHeqPqB8uGysGFaxaQ969bnkfEb2KjwuwJVLcvjRlmxx5tKxUJ5s3OhzkluprR2TaR5S0o%2BmrEy5dBrFkaWA5fIaQxpkAMQnr030qqBdB0lNuraR9nJ3%2BW%2B7O0nCuLTz7x6b7qG8nYMlRZJgHbcINAkhZTRBmTemT%2BEv%2BYvX%2BlkMumyLBSvOgL8QjaJOmmywOk3VqlTVMw17PfwgY6pgGpsssOGIjyeJ9bc%2Bq%2FUP8veZZE88SRP65ZoUyjF69BAuyhIMsSrWU5oseHklHIMbO4N%2B2mRbJO8cdLrYWAoOx00c%2Fqd8KJaVKv0tUpQ%2FSymHuzA%2FySMu1nluF8xOll9TmgNfZVNqHOnfMWawqZgVdMxyxh3fnIOy3DG4QPnBT1jJYnKx2kCC7RoDVSR564VZW85ZNH5vpLF8NPlcMUOHGd%2BVltUJh9&X-Amz-Signature=7a03d4b847cf262e89e112b512b502dbd591c663cbfca17477ee263164601696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANQ4AG3%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDtBXveAPXQ6lZtahffELlcOqPNYJszJtZWqlJYncA2rAiADSy%2FZlcspni7q9X8Q1r%2BsXrm1KcKFnwSasQKkuCwtuiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FZShCDmJ8z1N0xn4KtwD5V7UkV3O0Zqk4G38qvCdC8cfwrIKlf2P7GsFXwJDoajFZPq9lhatteUx1mzsRfNrGqDdqy4KzVR165ZVZ6xlEJpXKjtfNzGStGmlGZOrmMF4u9fPs8dSxuhcXaDMM7fzxpoixaHpu1yzAmBQmmMgACXAlSzjahOKyf1mvOBWPAbDiwnsq3NVRWYNcogylvNgiCck61ZGwfNpoxFtnEqiy4DuJDTen91n1jv%2FEiMQYQvZW%2FFPfTvoD9g3jrtNeO%2B201W4ZzYVUGDrsTE4ICNKbWFzE%2FuPQJJUysUqwMdygcYCgdKxi27Ts%2FbTurqDJkWDJNoZJvM1mewAgTdNDAgKB%2BmuXTj5slFdPIHJoIh3SDsVsj%2FWyAh7J8Z0iWbU97Qq3MaWbJShl7Fk4QNushxBK%2BKIai8DQ8dEeNp5XpL9f0SpVFISZD%2FHeqPqB8uGysGFaxaQ969bnkfEb2KjwuwJVLcvjRlmxx5tKxUJ5s3OhzkluprR2TaR5S0o%2BmrEy5dBrFkaWA5fIaQxpkAMQnr030qqBdB0lNuraR9nJ3%2BW%2B7O0nCuLTz7x6b7qG8nYMlRZJgHbcINAkhZTRBmTemT%2BEv%2BYvX%2BlkMumyLBSvOgL8QjaJOmmywOk3VqlTVMw17PfwgY6pgGpsssOGIjyeJ9bc%2Bq%2FUP8veZZE88SRP65ZoUyjF69BAuyhIMsSrWU5oseHklHIMbO4N%2B2mRbJO8cdLrYWAoOx00c%2Fqd8KJaVKv0tUpQ%2FSymHuzA%2FySMu1nluF8xOll9TmgNfZVNqHOnfMWawqZgVdMxyxh3fnIOy3DG4QPnBT1jJYnKx2kCC7RoDVSR564VZW85ZNH5vpLF8NPlcMUOHGd%2BVltUJh9&X-Amz-Signature=883596b3f8350a72a2a190f168d9fe2ee46a7ae2d3f030b52d6d5edfb0341b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
