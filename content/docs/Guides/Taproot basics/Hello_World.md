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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEJP3XS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDPFiuS1JxWnmRmNOeJMuf4ItI1mGOjjFblP8n5BxnEPAiA35%2BSyOVwDuq8Wv0Ay9wVTyGa0YrG9LkqH5scCeN2Whyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMd%2FwulvtEYR5SuzJBKtwDRW6TBdFXoQ36Lg9j0NF0iaGynBj8RTu%2F6sBMP%2BqpQwrh%2FNLigerwx2OAjdPh1tIFQxt6Xjzo9rMTvu1Ptt%2B6BALRN6LisYmE9fdzS3%2B5VcLGTcMq8g7WNsV1No3bt2EfkdR8SZb0rmhxdCCUGvdv9oiPCHbz4JwlSxrYhcpudUDhbhJdeZL3ljvPw0veQuPBLMUaBdNoLxh0pBQwpJpugEkHKxNVbHqLgtpueCPiZcNZyKJvTlUrd9kfaAg%2BylxAzGvV%2BzmhDz9pKEIT0tGZl6h5ozSqAmSeRW31s1RfKZR8OP9tfWPGXY17djlb%2FZNXIAiQVAialCG%2B7PKEUQe7EjHSDTugX4NKFDol4QAYj8jaD1dGO%2BIXSQ3c%2F8%2Fh%2Fu%2FJP2rbhu67Ya7pA%2BMODVmRjSn6GwFoxsMER0g2RCni%2Bz6eJozi10Q9g8YCVvE2CpfHH32padJezvB1dIMhhc6HYqQN159hh24vnWYfryeOyt6oy8XZFeBjnMfco8a0cf52w%2Fwr6KGyZdFlX71auQu4a6Tm3CpQ1nj8VEto1CI4Qs919M2F0xylBvY4sctHOLYJXOGpHG3avfbbOLYTZk3o8%2BeDfU8xnAxz%2BIlmglm9k83Ug2BgmfkMHv9BwNEws8zJwQY6pgFJw2xFPG%2BU6TSCNQlKGZ7ELoEB9yu30%2BXq73h1eIwUvknJqEPpoM7gS%2FjDo5EbaLkW%2BUG9LIhd8ftJa9RRCtgZKXvymRMNTNsBKAcp8sevtORTZummkdthB9ZUpLyF1C5BCVeSlPUbrDXdmDM%2F2XAvTL8YSsnyKfc043to8dqCJove1cGPU4kYGt4j2af%2FdSIjd5paUK679Fc2zsIRAGCyxtqgpXHw&X-Amz-Signature=d9022e18cd40aed697b349c1d3d777baabcae426d6541f9681c032a0fa611050&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEJP3XS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDPFiuS1JxWnmRmNOeJMuf4ItI1mGOjjFblP8n5BxnEPAiA35%2BSyOVwDuq8Wv0Ay9wVTyGa0YrG9LkqH5scCeN2Whyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMd%2FwulvtEYR5SuzJBKtwDRW6TBdFXoQ36Lg9j0NF0iaGynBj8RTu%2F6sBMP%2BqpQwrh%2FNLigerwx2OAjdPh1tIFQxt6Xjzo9rMTvu1Ptt%2B6BALRN6LisYmE9fdzS3%2B5VcLGTcMq8g7WNsV1No3bt2EfkdR8SZb0rmhxdCCUGvdv9oiPCHbz4JwlSxrYhcpudUDhbhJdeZL3ljvPw0veQuPBLMUaBdNoLxh0pBQwpJpugEkHKxNVbHqLgtpueCPiZcNZyKJvTlUrd9kfaAg%2BylxAzGvV%2BzmhDz9pKEIT0tGZl6h5ozSqAmSeRW31s1RfKZR8OP9tfWPGXY17djlb%2FZNXIAiQVAialCG%2B7PKEUQe7EjHSDTugX4NKFDol4QAYj8jaD1dGO%2BIXSQ3c%2F8%2Fh%2Fu%2FJP2rbhu67Ya7pA%2BMODVmRjSn6GwFoxsMER0g2RCni%2Bz6eJozi10Q9g8YCVvE2CpfHH32padJezvB1dIMhhc6HYqQN159hh24vnWYfryeOyt6oy8XZFeBjnMfco8a0cf52w%2Fwr6KGyZdFlX71auQu4a6Tm3CpQ1nj8VEto1CI4Qs919M2F0xylBvY4sctHOLYJXOGpHG3avfbbOLYTZk3o8%2BeDfU8xnAxz%2BIlmglm9k83Ug2BgmfkMHv9BwNEws8zJwQY6pgFJw2xFPG%2BU6TSCNQlKGZ7ELoEB9yu30%2BXq73h1eIwUvknJqEPpoM7gS%2FjDo5EbaLkW%2BUG9LIhd8ftJa9RRCtgZKXvymRMNTNsBKAcp8sevtORTZummkdthB9ZUpLyF1C5BCVeSlPUbrDXdmDM%2F2XAvTL8YSsnyKfc043to8dqCJove1cGPU4kYGt4j2af%2FdSIjd5paUK679Fc2zsIRAGCyxtqgpXHw&X-Amz-Signature=a86b0663703e854bd287287c536ee3d6cf217945ca7c535dcee52cc9cd919e33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
