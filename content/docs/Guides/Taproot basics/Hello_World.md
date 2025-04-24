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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WPI47X%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWXH7qoeu%2B0x7%2FOQ0D7SSRRvC4yrYDZyQ07Ujsy18aIAiB%2FhXbnoii5mNx6v%2BYLnIV3m63dLThFYlBFvpDHukJPByr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMOnJvHYNbrK%2FDah6uKtwDdGuqigKLjQ%2BvRcW7sx%2FRf%2BNGwXUCvSIL35lzgS6lsgmUTmLquhTdtl1DCJJza0ZZkgt%2FdvNWnmWLg9yk1o2Bgh8Hu2t%2B92L8MXJ6EpeAbCUkYwaFYPUCycWP5rHx2QbaGKNXvOWo2RaaHVC83ifwdexLNb7V7NhNQwCO8B0Xht9Afy2SAagycZd5BbmCms8UcbFyxY2jngN23GVr6XyGHNLX72gFofurWH3jhMQgNuWW09CHk6n5XrtKRqMRiwqffSeQrpPnEAvQH99%2FVLSlZ2MM30QHpoXnr5MLCg4Jjp%2F5h7tHd%2F80xhVspTqM5ZYVC3eY4Lgp8eU1Zjy%2FdBd3T%2FYwh1hpb6c8C7QgQ1s4aagx%2BtL91%2Bf0Mo0bNc1wt3EXS%2F1I2k2RGgtsib6z0MJ9AgIk1xZehQ13nP7KTUqQPcY2tLINhxvFfkDWr1ySe0zO2vriUQclrHWYtj%2FvARhVPZfaXclsz76i6gsgymkHchLeNZK37rZP8xpHGQUrsKUw29TrgRI7beUeUJr9hUqVacZ26k2OoRs4PEZSvVYzsPl8EJ0gAPEmuNjiSlIJV3t49gPp2SsGbAcmsLagIk6zPiZo2tK%2Fw7uAADTTVlOZwVJM0mq%2FudeSQj6KJIkwjfGpwAY6pgGsDxjFcBeDP%2BtTulHPPAZq259SZ7esAcVhETlYdfW9TxOyk6xZIS9p%2F6maHhkZhAfdsDogUtSnuDuQ%2FkXsf%2FQTR2JJw9ha7WdYT0OU0tqqMTjYD4reJepSLvYmTaiburJjxftkIlrV6J792oWn6pAy27KE%2FvVCFZxxxJJTkW3uWWq2Qmg5eRaH0HcRJ6LNQ7rDQ1bpVhKE5ioFEFayW4HVsrRXxKYj&X-Amz-Signature=4b7d35de06352a86d1ee9782dcc90fa150c5e10bf4671ef8cc175811a32f135f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WPI47X%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWXH7qoeu%2B0x7%2FOQ0D7SSRRvC4yrYDZyQ07Ujsy18aIAiB%2FhXbnoii5mNx6v%2BYLnIV3m63dLThFYlBFvpDHukJPByr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMOnJvHYNbrK%2FDah6uKtwDdGuqigKLjQ%2BvRcW7sx%2FRf%2BNGwXUCvSIL35lzgS6lsgmUTmLquhTdtl1DCJJza0ZZkgt%2FdvNWnmWLg9yk1o2Bgh8Hu2t%2B92L8MXJ6EpeAbCUkYwaFYPUCycWP5rHx2QbaGKNXvOWo2RaaHVC83ifwdexLNb7V7NhNQwCO8B0Xht9Afy2SAagycZd5BbmCms8UcbFyxY2jngN23GVr6XyGHNLX72gFofurWH3jhMQgNuWW09CHk6n5XrtKRqMRiwqffSeQrpPnEAvQH99%2FVLSlZ2MM30QHpoXnr5MLCg4Jjp%2F5h7tHd%2F80xhVspTqM5ZYVC3eY4Lgp8eU1Zjy%2FdBd3T%2FYwh1hpb6c8C7QgQ1s4aagx%2BtL91%2Bf0Mo0bNc1wt3EXS%2F1I2k2RGgtsib6z0MJ9AgIk1xZehQ13nP7KTUqQPcY2tLINhxvFfkDWr1ySe0zO2vriUQclrHWYtj%2FvARhVPZfaXclsz76i6gsgymkHchLeNZK37rZP8xpHGQUrsKUw29TrgRI7beUeUJr9hUqVacZ26k2OoRs4PEZSvVYzsPl8EJ0gAPEmuNjiSlIJV3t49gPp2SsGbAcmsLagIk6zPiZo2tK%2Fw7uAADTTVlOZwVJM0mq%2FudeSQj6KJIkwjfGpwAY6pgGsDxjFcBeDP%2BtTulHPPAZq259SZ7esAcVhETlYdfW9TxOyk6xZIS9p%2F6maHhkZhAfdsDogUtSnuDuQ%2FkXsf%2FQTR2JJw9ha7WdYT0OU0tqqMTjYD4reJepSLvYmTaiburJjxftkIlrV6J792oWn6pAy27KE%2FvVCFZxxxJJTkW3uWWq2Qmg5eRaH0HcRJ6LNQ7rDQ1bpVhKE5ioFEFayW4HVsrRXxKYj&X-Amz-Signature=344ab7f2b7b0a5c8b4a56eb2ada13b5c8f2b333a56296dcedee1d4aeb0c322f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
