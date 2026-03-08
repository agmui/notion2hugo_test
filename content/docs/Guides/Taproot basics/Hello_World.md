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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRMUUF2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEC0vAL%2BbAHb53SiQYTzrb136M0vRzi6OhlrZp%2F%2BN45qAiAEqS0gMkjMMqpV5piSg1TIRwNQLI2qitX0v7uGEavSwSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIM%2F0K2VsfXG0ZHaPIIKtwDa%2FOHTgNrFoN%2BVTA4QN6eXS%2F13uiM4GqcA84Kr%2B%2F2H2MC0tjIukIytzxzpPEgJjUan3KfLfu%2Bzy0GVr4Vtwr1yrpd%2BtVED16zzCSlWfCtFH%2B%2BaIPa6OFbk9kgOEhSUujNpsPByBmB7w9DI7%2B8yMIvfiz%2BxvQ8Nd6Bb3lKJ%2FwgL2tCsGM%2F%2Bznr5IRlLu5kUl2pFe015gQkGoU8hH%2FY2Y48aoDSv4FkBlaOPod1VLC9gL3BYAmVy23rZLwwMaKuO1OCOaoWH79GFIOoxIDwa3ZMob1xpBvjxnWj3G86NB9sceduclePVlo%2Fkf5OUvBtYtwEhXbSY9tgjGinDSpbLzg0qKwjnc0xBUcP4g3RycAtcZXpvysu4c4mJiwIvXJ8mwu4Bg9qeM2gP%2FJQEQFswoJGvRKIrDH2C6A3tywdpfGnk5Lub9q5a42gSOX0WAkiy5WLIoszjtaTkiUu23wUFR8UwXmgQQd4RejOM5DyfuS%2FD0EYNHMhbAaZyGny5BTDtgsNcISPoCzrZRQ7pSkRI3XKKdoUCVL0ctUFBWdXQupgVqaYs25vBXeKH5d%2BDtkDuIzW36Ud6HQrieTkO837BRIaJp04Yj5yz9dWuBG3Ex2D%2FCOIwZrsVhBh4s4mL9Uw052zzQY6pgFJarTq%2FqCAdTaunRpAulHycYXiw55rtPFM4fgIdpu4RbG6eMFW4y9%2FDzojClsxoa%2BzMoMdRHbaJQKb2bSEfpi2TdbScpEM4aqs4y%2BXWkto4k2nB6CdvaQXe1dPAs4I0H5NsAalyh8KZjJ05AJJb7tzdhkzZgeCENkYEakgu0tiQvu5OuIl6%2FikRmzq7k9j0iE4%2BHXutEDFvTztJHfu32YRkmfMMjK7&X-Amz-Signature=19cee127523d17ff521840463c81f5d9af1cf58113d37d5852402aa32a2d937a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRMUUF2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEC0vAL%2BbAHb53SiQYTzrb136M0vRzi6OhlrZp%2F%2BN45qAiAEqS0gMkjMMqpV5piSg1TIRwNQLI2qitX0v7uGEavSwSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIM%2F0K2VsfXG0ZHaPIIKtwDa%2FOHTgNrFoN%2BVTA4QN6eXS%2F13uiM4GqcA84Kr%2B%2F2H2MC0tjIukIytzxzpPEgJjUan3KfLfu%2Bzy0GVr4Vtwr1yrpd%2BtVED16zzCSlWfCtFH%2B%2BaIPa6OFbk9kgOEhSUujNpsPByBmB7w9DI7%2B8yMIvfiz%2BxvQ8Nd6Bb3lKJ%2FwgL2tCsGM%2F%2Bznr5IRlLu5kUl2pFe015gQkGoU8hH%2FY2Y48aoDSv4FkBlaOPod1VLC9gL3BYAmVy23rZLwwMaKuO1OCOaoWH79GFIOoxIDwa3ZMob1xpBvjxnWj3G86NB9sceduclePVlo%2Fkf5OUvBtYtwEhXbSY9tgjGinDSpbLzg0qKwjnc0xBUcP4g3RycAtcZXpvysu4c4mJiwIvXJ8mwu4Bg9qeM2gP%2FJQEQFswoJGvRKIrDH2C6A3tywdpfGnk5Lub9q5a42gSOX0WAkiy5WLIoszjtaTkiUu23wUFR8UwXmgQQd4RejOM5DyfuS%2FD0EYNHMhbAaZyGny5BTDtgsNcISPoCzrZRQ7pSkRI3XKKdoUCVL0ctUFBWdXQupgVqaYs25vBXeKH5d%2BDtkDuIzW36Ud6HQrieTkO837BRIaJp04Yj5yz9dWuBG3Ex2D%2FCOIwZrsVhBh4s4mL9Uw052zzQY6pgFJarTq%2FqCAdTaunRpAulHycYXiw55rtPFM4fgIdpu4RbG6eMFW4y9%2FDzojClsxoa%2BzMoMdRHbaJQKb2bSEfpi2TdbScpEM4aqs4y%2BXWkto4k2nB6CdvaQXe1dPAs4I0H5NsAalyh8KZjJ05AJJb7tzdhkzZgeCENkYEakgu0tiQvu5OuIl6%2FikRmzq7k9j0iE4%2BHXutEDFvTztJHfu32YRkmfMMjK7&X-Amz-Signature=e076adee04bcc2fd8f96dab08606298e0b967a9f5b2eda7befb09c2c5b00ea4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
