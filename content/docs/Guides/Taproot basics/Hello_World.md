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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NU24YY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7Ao1xCfAWq5n%2BgaXOyFdtO%2BfJvPKV7e0xAUWFk08GxAiEA7lXipGq9uz7QiEpN%2BaAPeS%2B910Jl7xwoPIHrq2PVPi8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEPLZacNiejjdozpmyrcA%2BkO%2FIOIEYA%2BqH5McGnEcYHimODo7AUpyj5T15BUXJLUySqupoGyYk7UwmCrWi3yPQY5unKW2UnVuqlxJknmR6L41GEtnZgnGxskg9Yvx%2FS378sern9%2BRh0hbcfn0ZZ4SmJZSWg1XDDfu6SS5KeZOZa6ijRHklPkzgJWRE8EYOR2ulWRsAEMDg3KNQ88xp5wctM7xg9eu9OMHBXIhhv2KucTg1uNeHSIyoxtwfK%2BINn7A0HPPrq6btJrIRwixlcWj1%2B7Mg%2BarqU3rX3%2Byym163ydpUfwUYUCm2NW0TgmeYgAxkHx%2FtWekdRezAqUH6ufWkuag0j67OXGN4m%2FVNgkGyfSapW6xLDf6X8NBZJfiFi1BYv%2FTlx%2BdL9y66D0cMH43yQAWKc6v9VMBGkS0W80O7L39IZi%2B6Ya9VZkbh%2BjFzn5PfVFJ9DOheGdKqhiZJcptqMjVA0U5v0Nr6MC5q8FNPLIU09HoQ05tXP9BAM9P5P%2Fibmv7lnu7gXezg0mqr%2FZHvRbosqGDuZj%2FRVvRdD2UEo1fAJkwwiq6OlLHeTuqsvIyghYaU0B2IBOeU8K%2BY2N7XkgVNh4fd9eksMmtABytCktMHU%2BqVesOWCYGDHuh%2FKcelOXbIM18uvhcvJIMIGE0r8GOqUBE7yzELkhafJl6y0mYUrm%2BHndVwlS7Re2bqY4dzB6c%2FQU1qiUNa4H3w2OgQvjgYUOwPSCYaIikH9b%2BBrg%2FQO9Wjlyi%2FqsvYc6rpQMUVIueXZdA6vrqU4tqGXR448LQHn4xyQ0G4ARFiiU1a%2F3GdoMuBSan%2FXaiSnTUBfDUWI1HHKVQZ1GO8VcO01xwm%2BSDuSXcsZKGDCK%2F81qhZcFnkopV1e2bT8V&X-Amz-Signature=e23425184fddd272eefbbb1d8e2846e0423d36afa55601a17fb4f1acbae8ca28&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NU24YY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7Ao1xCfAWq5n%2BgaXOyFdtO%2BfJvPKV7e0xAUWFk08GxAiEA7lXipGq9uz7QiEpN%2BaAPeS%2B910Jl7xwoPIHrq2PVPi8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEPLZacNiejjdozpmyrcA%2BkO%2FIOIEYA%2BqH5McGnEcYHimODo7AUpyj5T15BUXJLUySqupoGyYk7UwmCrWi3yPQY5unKW2UnVuqlxJknmR6L41GEtnZgnGxskg9Yvx%2FS378sern9%2BRh0hbcfn0ZZ4SmJZSWg1XDDfu6SS5KeZOZa6ijRHklPkzgJWRE8EYOR2ulWRsAEMDg3KNQ88xp5wctM7xg9eu9OMHBXIhhv2KucTg1uNeHSIyoxtwfK%2BINn7A0HPPrq6btJrIRwixlcWj1%2B7Mg%2BarqU3rX3%2Byym163ydpUfwUYUCm2NW0TgmeYgAxkHx%2FtWekdRezAqUH6ufWkuag0j67OXGN4m%2FVNgkGyfSapW6xLDf6X8NBZJfiFi1BYv%2FTlx%2BdL9y66D0cMH43yQAWKc6v9VMBGkS0W80O7L39IZi%2B6Ya9VZkbh%2BjFzn5PfVFJ9DOheGdKqhiZJcptqMjVA0U5v0Nr6MC5q8FNPLIU09HoQ05tXP9BAM9P5P%2Fibmv7lnu7gXezg0mqr%2FZHvRbosqGDuZj%2FRVvRdD2UEo1fAJkwwiq6OlLHeTuqsvIyghYaU0B2IBOeU8K%2BY2N7XkgVNh4fd9eksMmtABytCktMHU%2BqVesOWCYGDHuh%2FKcelOXbIM18uvhcvJIMIGE0r8GOqUBE7yzELkhafJl6y0mYUrm%2BHndVwlS7Re2bqY4dzB6c%2FQU1qiUNa4H3w2OgQvjgYUOwPSCYaIikH9b%2BBrg%2FQO9Wjlyi%2FqsvYc6rpQMUVIueXZdA6vrqU4tqGXR448LQHn4xyQ0G4ARFiiU1a%2F3GdoMuBSan%2FXaiSnTUBfDUWI1HHKVQZ1GO8VcO01xwm%2BSDuSXcsZKGDCK%2F81qhZcFnkopV1e2bT8V&X-Amz-Signature=c7c3755906484d481c4fbeba76a41dae0334bc28b8431542249526f19cc776fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
