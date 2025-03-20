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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6XSPDK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA98MBDYskSbamXIKdscI5QWRc22WezjDejr98tig30iAiBm6K15%2Bb%2BgxJbF8mjezJkrEcd1%2Fo9eykCU9B53cYQLMSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYCQAKrAVRFFHZYMKtwDsxvJRhf2jDz2UDpTMEScH8o9v7Wdx8CktJaAYWcYX1Kdbkt2qrUGQiupuCQ2ma9%2BsgHEdu1CJ8TDbNPYXyKd7g57umYmA949dTDO8kYEwEKaWhIZejRi7EX%2FrI%2FXSOshBIWV1zoaDayqbDwrnlApyqObJVX53D%2FKYrHSqBtvnlki3u76P0gxBCPFNrmI09Tu%2FYyo6B0c0rPtNcxYVsIlPxmXDQ8eg%2F48mmjsySUwf6cfAONVa4fq52S%2BihiJ5JwxnYzkbECA0okRI1bwLb6FszEKsFxqEzIZ1abbwt%2BsBLklB4hbknu%2BKGT4ZaPb4kxqbwaw2fwU7escXn2rMkKaslIfGdLDAelxPirBP6O5zA3LA%2FCQXNOXJGYcR8JCMdR%2B5Caownrf2wAxdWc1tmHU0X5SRCuldWHbk4nhWLcd1lpo%2BNj0eQ6CE2Auf%2F%2Fe9%2BD6APeF1V5WQvb3d9C5ofVKG7zfW1e1hxNQoIZp7jLGaKl2vtit75c5EAKYgCp1fBiPQxmkizraJznAMXAGNBrpACg4MD93rwEYzIHUOc2Sqz%2Bf7gZ%2BkE5%2FyKTBOfkAYpO%2FD1Xtye1leCt%2BS1018yImwhQpHhQqJgJb3yrhrdbN6phTEJ5MhIqcShMaCD0wj%2BTxvgY6pgFRuIZ7MjwWtywmyMmYo7ufSd5LD1D8Sb1BLTYpP4dvolhy%2FZByH6avJFr92kWOYL2tUyGu3HN8mJ8xBg4ha2UO4VLuNtMZ%2FK%2BnGZnAxaUmKsJ2lQ0eYH72QRP82ShQUtLKWfDj6VIpiYMtlyy0pDEJ%2Bk%2FrgToUnYLYMkR2JSXR9JFQzCRRNWf26%2FLaYiMc3U1SC3B%2FDR8Oss3mqhRw5gl8KDgRR82t&X-Amz-Signature=bfac2dd9266d0cb4a6a1063035c933c65b662aba298a5aa83869fd2b3f92d6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6XSPDK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA98MBDYskSbamXIKdscI5QWRc22WezjDejr98tig30iAiBm6K15%2Bb%2BgxJbF8mjezJkrEcd1%2Fo9eykCU9B53cYQLMSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYCQAKrAVRFFHZYMKtwDsxvJRhf2jDz2UDpTMEScH8o9v7Wdx8CktJaAYWcYX1Kdbkt2qrUGQiupuCQ2ma9%2BsgHEdu1CJ8TDbNPYXyKd7g57umYmA949dTDO8kYEwEKaWhIZejRi7EX%2FrI%2FXSOshBIWV1zoaDayqbDwrnlApyqObJVX53D%2FKYrHSqBtvnlki3u76P0gxBCPFNrmI09Tu%2FYyo6B0c0rPtNcxYVsIlPxmXDQ8eg%2F48mmjsySUwf6cfAONVa4fq52S%2BihiJ5JwxnYzkbECA0okRI1bwLb6FszEKsFxqEzIZ1abbwt%2BsBLklB4hbknu%2BKGT4ZaPb4kxqbwaw2fwU7escXn2rMkKaslIfGdLDAelxPirBP6O5zA3LA%2FCQXNOXJGYcR8JCMdR%2B5Caownrf2wAxdWc1tmHU0X5SRCuldWHbk4nhWLcd1lpo%2BNj0eQ6CE2Auf%2F%2Fe9%2BD6APeF1V5WQvb3d9C5ofVKG7zfW1e1hxNQoIZp7jLGaKl2vtit75c5EAKYgCp1fBiPQxmkizraJznAMXAGNBrpACg4MD93rwEYzIHUOc2Sqz%2Bf7gZ%2BkE5%2FyKTBOfkAYpO%2FD1Xtye1leCt%2BS1018yImwhQpHhQqJgJb3yrhrdbN6phTEJ5MhIqcShMaCD0wj%2BTxvgY6pgFRuIZ7MjwWtywmyMmYo7ufSd5LD1D8Sb1BLTYpP4dvolhy%2FZByH6avJFr92kWOYL2tUyGu3HN8mJ8xBg4ha2UO4VLuNtMZ%2FK%2BnGZnAxaUmKsJ2lQ0eYH72QRP82ShQUtLKWfDj6VIpiYMtlyy0pDEJ%2Bk%2FrgToUnYLYMkR2JSXR9JFQzCRRNWf26%2FLaYiMc3U1SC3B%2FDR8Oss3mqhRw5gl8KDgRR82t&X-Amz-Signature=60c7706c990af7698aa1173fd5d812cca7f73d6ce51d107919d596e2494bcb97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
