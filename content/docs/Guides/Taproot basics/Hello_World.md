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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZBBC5I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID3Li7rjve0zf3E2j1gWX7SRtLw53qoUjkLfD%2FsLEvnCAiEA6ry2UnMtcW%2F89yqSWYwI7KkZ5B1Ogk1NBRPcTwuLS%2Bgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDInzx0myegdyPQwZcyrcA6ouAOFsEW05cQjms7eRWmyoryg5ta66mWyceHx1af22Qp3iFh6I350s3FT1HM9iO1HFXomecxYuC7eQxzSZsvIv86ktc1%2BRIyFVRXdswnwo2l%2FNfJHI3OTEKLAlqDlTpbEgFkjztpfAu89oWQBJwD2IwTx2xWAY1i7z2fTvuy4KiNZ%2FYGyhrAYONcPqo81AUxdFALVWT5wwCEintAJQCZVoOJWe8onKqclWq0jBAr5iBDPgh4apyCNlM%2Bo9E%2BTcOkfhWLAwCPUx29CcFbCq299YUeegiGSXApJ%2Fc9Q3HW7NkwMAo0MxlG7j36oN%2BEdzrKNHNZ6AFPpl12k1fzIdMC%2FEL4APLTot5hC6Mr2SAUVr3Oxw1Z%2F%2B7FqxCJfCCt5DDI53yJS%2FSaEMBj2BoTxrQp%2BIIrs4xxNbq5EQhqYZGC7P3yrwrPGGHn0g3WJZH1fw5K%2BOVmaop1PNCe6w3ApTi3ylPzc37zMTXOC2LqlHAIn4syY03TCPqg23f3C8LA2PlHJAwrOO38qH5Tu1tPPaXJ7pkA2zme%2B2FSSuJffu7LAxjPjgIrgejRV690P82TGyFixSOWUoK93m6vccwFhTVqo62iRkuO0r%2BzyklWvzZBA4DOjFdHXY%2FWNI9SZpMOy4kcEGOqUBxgLjpSlubZgWAMfX6WOSJpMC9NS7i3EKd%2F9xEPFiKVgzz2sPat6PsN%2Bc05JTL8RtNyhuXBo4JdQ73pmcRiw9r0YJrHiAJn6n2UWXpWwb2KWYFIep4LA%2F7JoZFCM0x73TIocFj5zfYrDriONYwUscNE0uTsmzxfBQCyL8%2FgPNumjFQLJVQFafU1OJrqvA59XQv%2Fq9kIlCzouxOrW15usz7Cew5rYH&X-Amz-Signature=6cfc9e29a3e203d65dfefd192812b1095014b9c83a30c99086a480098484c04d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZBBC5I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID3Li7rjve0zf3E2j1gWX7SRtLw53qoUjkLfD%2FsLEvnCAiEA6ry2UnMtcW%2F89yqSWYwI7KkZ5B1Ogk1NBRPcTwuLS%2Bgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDInzx0myegdyPQwZcyrcA6ouAOFsEW05cQjms7eRWmyoryg5ta66mWyceHx1af22Qp3iFh6I350s3FT1HM9iO1HFXomecxYuC7eQxzSZsvIv86ktc1%2BRIyFVRXdswnwo2l%2FNfJHI3OTEKLAlqDlTpbEgFkjztpfAu89oWQBJwD2IwTx2xWAY1i7z2fTvuy4KiNZ%2FYGyhrAYONcPqo81AUxdFALVWT5wwCEintAJQCZVoOJWe8onKqclWq0jBAr5iBDPgh4apyCNlM%2Bo9E%2BTcOkfhWLAwCPUx29CcFbCq299YUeegiGSXApJ%2Fc9Q3HW7NkwMAo0MxlG7j36oN%2BEdzrKNHNZ6AFPpl12k1fzIdMC%2FEL4APLTot5hC6Mr2SAUVr3Oxw1Z%2F%2B7FqxCJfCCt5DDI53yJS%2FSaEMBj2BoTxrQp%2BIIrs4xxNbq5EQhqYZGC7P3yrwrPGGHn0g3WJZH1fw5K%2BOVmaop1PNCe6w3ApTi3ylPzc37zMTXOC2LqlHAIn4syY03TCPqg23f3C8LA2PlHJAwrOO38qH5Tu1tPPaXJ7pkA2zme%2B2FSSuJffu7LAxjPjgIrgejRV690P82TGyFixSOWUoK93m6vccwFhTVqo62iRkuO0r%2BzyklWvzZBA4DOjFdHXY%2FWNI9SZpMOy4kcEGOqUBxgLjpSlubZgWAMfX6WOSJpMC9NS7i3EKd%2F9xEPFiKVgzz2sPat6PsN%2Bc05JTL8RtNyhuXBo4JdQ73pmcRiw9r0YJrHiAJn6n2UWXpWwb2KWYFIep4LA%2F7JoZFCM0x73TIocFj5zfYrDriONYwUscNE0uTsmzxfBQCyL8%2FgPNumjFQLJVQFafU1OJrqvA59XQv%2Fq9kIlCzouxOrW15usz7Cew5rYH&X-Amz-Signature=2b506612913133ad6f2a3fceeab7805465dc619c159b2e1feb24dd910bea25da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
