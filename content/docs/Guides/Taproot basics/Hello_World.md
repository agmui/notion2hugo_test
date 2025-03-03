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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTPC72Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh0RiVV2PREcVlsvNEP361lY8fL0VWXjdhOEJUKJL91QIgM9eT4BRfDi3H1dLdgy3yOfxOjtUUO%2Bbl8%2FtYlWMspxQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrGGucfrAsRgbfT8CrcA81TgLRGie1AX%2Fkkl8t4JvGGeu6kmzLWKMf5SqukuohJF9p7Ymf5N4%2FEAaqHoWsT14msVLrsneZmvVek4dz913GDA7H2WRa4TR0KKkuTibuBbGmhx%2B67Q%2BwQyxv5ghF74uuT4Ap0Zz%2BCFTujF99kAsT6wA%2BtHj%2BWEFUfsBNyWtEtIXSxXgHz7CZkiG%2Bw%2BM1tJgNTfyApKV4MHW7RUedOwBuiGXZM7WJK%2B1NjgmqK2QpbEXm5fY8BntORk28TivigpdHFe1IGs8aK7RG66aeDP654VGTxymNHFtWf09aVcBRri3COhazm7ximcERz4saEybZDYl1zzwdfFBtr%2FR79gjGKrukPPZlkIscCHdun9R2Ei8xi%2FxJRpadCEUWv87S37flQD7cTT1wGZAnepCL6JMQnxi46vddw18ijEIOlqEODChvEHGekYqTkyWMvdCI%2BstB6jrZaIUB0FkrHyR1wxLnKM668BwfBoE5sizxtamdciOtOzOnoOyKKB3mf8h3vP%2BQY9uGVjMPqHm3It3MQ0a2LG0ef0zuj0cl3fmCMtA7zNVZchVFrr%2FOkMhV7pr5WBCCOLo3mokTdzfjyvPImy%2FSKWjVSp6Ojr0zhdyKuAtlA3q3r1w1ZnxEqWsJsMN%2BZmL4GOqUBMMFnK0Lu%2FdB6QyvPTY6oXP9cGvVSmTyRGv4KkI1gUyLGZqWd%2BeIK1wpPpeA085eytNkU9Xwhk7MsMMBcfiRUiI5NLSede9jAu%2B5QxAMasakec1SdTQHiEnnBVg7SAbMuQB4%2FnBxD3RCpOj7bz4DK1xh7Lzp22VEQivWzPPZmHjbL%2FQOfz2h7BlFQWBbb5j0Q0kb%2FlRuiRqW2Ad6PdkJeFMC4yyR%2B&X-Amz-Signature=73a5d3f10efb40a91c5cf64dbf6d1555001dfd6690d140792e6ccc0c6e9b47bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTPC72Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh0RiVV2PREcVlsvNEP361lY8fL0VWXjdhOEJUKJL91QIgM9eT4BRfDi3H1dLdgy3yOfxOjtUUO%2Bbl8%2FtYlWMspxQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrGGucfrAsRgbfT8CrcA81TgLRGie1AX%2Fkkl8t4JvGGeu6kmzLWKMf5SqukuohJF9p7Ymf5N4%2FEAaqHoWsT14msVLrsneZmvVek4dz913GDA7H2WRa4TR0KKkuTibuBbGmhx%2B67Q%2BwQyxv5ghF74uuT4Ap0Zz%2BCFTujF99kAsT6wA%2BtHj%2BWEFUfsBNyWtEtIXSxXgHz7CZkiG%2Bw%2BM1tJgNTfyApKV4MHW7RUedOwBuiGXZM7WJK%2B1NjgmqK2QpbEXm5fY8BntORk28TivigpdHFe1IGs8aK7RG66aeDP654VGTxymNHFtWf09aVcBRri3COhazm7ximcERz4saEybZDYl1zzwdfFBtr%2FR79gjGKrukPPZlkIscCHdun9R2Ei8xi%2FxJRpadCEUWv87S37flQD7cTT1wGZAnepCL6JMQnxi46vddw18ijEIOlqEODChvEHGekYqTkyWMvdCI%2BstB6jrZaIUB0FkrHyR1wxLnKM668BwfBoE5sizxtamdciOtOzOnoOyKKB3mf8h3vP%2BQY9uGVjMPqHm3It3MQ0a2LG0ef0zuj0cl3fmCMtA7zNVZchVFrr%2FOkMhV7pr5WBCCOLo3mokTdzfjyvPImy%2FSKWjVSp6Ojr0zhdyKuAtlA3q3r1w1ZnxEqWsJsMN%2BZmL4GOqUBMMFnK0Lu%2FdB6QyvPTY6oXP9cGvVSmTyRGv4KkI1gUyLGZqWd%2BeIK1wpPpeA085eytNkU9Xwhk7MsMMBcfiRUiI5NLSede9jAu%2B5QxAMasakec1SdTQHiEnnBVg7SAbMuQB4%2FnBxD3RCpOj7bz4DK1xh7Lzp22VEQivWzPPZmHjbL%2FQOfz2h7BlFQWBbb5j0Q0kb%2FlRuiRqW2Ad6PdkJeFMC4yyR%2B&X-Amz-Signature=c447bc86f8e990aac1d3efb6114c742276a853dd5d1bb3ce24aa3cd1094401a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
