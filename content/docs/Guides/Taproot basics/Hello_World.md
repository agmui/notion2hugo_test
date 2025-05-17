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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXZ5H3A%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQePZrh5ri%2B%2FAE%2BxvFmiU%2FmI3veZoO%2Fj75EXQ58cnmAQIgQIw5LotnEBtrUQvrJv26OfHx3Mr2yyDcfp03LfWzrHoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKMwyfDabSHy9N0L4yrcAzMQizejnDUqMvqlNlahzZidDYsx4gywQt50Y1ufLgp%2F0w1OX9GHqF1cf8RAKS4pF8y8teYbbf%2FAQ%2BgoOxjRBFK1smBPjZEcaRg4R4IbLSUWiyyj%2BwK6OoqIxCDykpoBlhVl8%2BKyVmj2DSPa06VAjkT70uJj6jmfoglCEYagErTY6gwPgt9939Pnn5EUzCxb44us6JRz7DhGYAwvkrNt6IhFLgMLL7pcF7OQE8PCHYVvJ3VguZ0QNQHF26lz8%2BTquCBCa7V%2FYymOCiSMMzcR4geoQogkHk9UtuVCUCypoNrmbv6AYniqjxdJb2pVV7tUfGNxbWGuAqz9%2Bqf7Koc7zzS02TXDK7vdnZZLnXAUl4xE5WiXiG256IHno%2BYvWLpXPo6zVON6dNatE09Xmn3nOcFlhComjMF4uEBSsl3Zp%2BUO6uok3JL346ePqdgUa1pOse6NUVfD3AEqamcjWRXiCzHTz2%2BvBenb7qARiBoV1b8Jkt0ac8X95QdhKMZJXTc5FyFld%2BctyvwdtX359XtL2yVCYcodqTwaY69plfI%2FgjSMU8h21niP7Oou5gu1UNkKwKxJ1Ub3ZfDkKGlxQiV7RuGKHXW0Z17ApnWL4UGrrEp1uyK%2FmuR69qo%2B2Sn2MLK8ocEGOqUBQ4n0tLf1e%2BdERDwnrtZMtbF9R%2BBl3F11AOdRsh%2FB6s8a%2BTyCBe3DdjRlFuqsvnlosT1fEiT2sneHju09c39A9L70X9weubK%2BEI1%2Ftyw2QikmWx3c5m2w8qUoG3lCV9zerN7AIBcF2AgJxkmhFzXkbfT1gRagKWKy5S1rstJRvn2z7Bas9FnRueRaB2XcPCCYVPRaUUB0mYVY6wujGNPSlHBN7fg%2B&X-Amz-Signature=7b84784d842106df747db814abcbb8a3764bccce9219a7299c236263873c4fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXZ5H3A%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQePZrh5ri%2B%2FAE%2BxvFmiU%2FmI3veZoO%2Fj75EXQ58cnmAQIgQIw5LotnEBtrUQvrJv26OfHx3Mr2yyDcfp03LfWzrHoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKMwyfDabSHy9N0L4yrcAzMQizejnDUqMvqlNlahzZidDYsx4gywQt50Y1ufLgp%2F0w1OX9GHqF1cf8RAKS4pF8y8teYbbf%2FAQ%2BgoOxjRBFK1smBPjZEcaRg4R4IbLSUWiyyj%2BwK6OoqIxCDykpoBlhVl8%2BKyVmj2DSPa06VAjkT70uJj6jmfoglCEYagErTY6gwPgt9939Pnn5EUzCxb44us6JRz7DhGYAwvkrNt6IhFLgMLL7pcF7OQE8PCHYVvJ3VguZ0QNQHF26lz8%2BTquCBCa7V%2FYymOCiSMMzcR4geoQogkHk9UtuVCUCypoNrmbv6AYniqjxdJb2pVV7tUfGNxbWGuAqz9%2Bqf7Koc7zzS02TXDK7vdnZZLnXAUl4xE5WiXiG256IHno%2BYvWLpXPo6zVON6dNatE09Xmn3nOcFlhComjMF4uEBSsl3Zp%2BUO6uok3JL346ePqdgUa1pOse6NUVfD3AEqamcjWRXiCzHTz2%2BvBenb7qARiBoV1b8Jkt0ac8X95QdhKMZJXTc5FyFld%2BctyvwdtX359XtL2yVCYcodqTwaY69plfI%2FgjSMU8h21niP7Oou5gu1UNkKwKxJ1Ub3ZfDkKGlxQiV7RuGKHXW0Z17ApnWL4UGrrEp1uyK%2FmuR69qo%2B2Sn2MLK8ocEGOqUBQ4n0tLf1e%2BdERDwnrtZMtbF9R%2BBl3F11AOdRsh%2FB6s8a%2BTyCBe3DdjRlFuqsvnlosT1fEiT2sneHju09c39A9L70X9weubK%2BEI1%2Ftyw2QikmWx3c5m2w8qUoG3lCV9zerN7AIBcF2AgJxkmhFzXkbfT1gRagKWKy5S1rstJRvn2z7Bas9FnRueRaB2XcPCCYVPRaUUB0mYVY6wujGNPSlHBN7fg%2B&X-Amz-Signature=28b01c6d6c22c7970156b8e7e6bce11902ef28cf904c889b2a4da0ac4689a394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
