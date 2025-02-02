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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJTUDWE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7rLM5S0%2Bl2KSHuxa6w%2FgSCHrlU4o4LwKHeT1Umf57XAiAnyBHsJINihzyQfcUU8vRIRXYiUXm5V135WqyosdvvViqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqylIO3Yes%2FVzw5f1KtwDhQ1Z8HUHSGCQ3t814gvYPQDlhaTaYlQZWdumMRaJy5nHatJsIEemHcHAwf4DU2mLu766lnXm2ZRTU%2FZ3ATzSUfNeSXjeWLCE8oSyGwaejYg9KONHl6aE2ediW2tA4CE1RpTVGbmSujL7RaCbrKNB2WEnxlh0JNIelyDFqS4hTFLIPFtv5LSr%2Fid%2Bo65Udfbb7BzqIukOhQBHHUXpD%2BO4RL71u99Ao%2B9S%2B31fitzCRlVLE5JT93IE%2BRAL4vkyFMPBc7uP234cy8iZhujcGFeAvPnWsM%2F6L%2BgsVrlzAQe8iBPCr4aEVU%2B144MWGQr1%2Fd%2F1QSv5R8RKNAykYZWPTqNutCZN5HyqbD5HP3qajCth9Be84Fa%2BRhhTeReBmuKRQaHSodXzbZNEfbTbSpDo4UriX6nzW51AtFvXbJmZ6khFEFWdLney365INKeAFUSfD8zruBhynm1dyPhEeMIP6Q22fGSntUtksdemadjwQyiu0pR8bMjHJ%2BPYIjrXX%2FRz%2BDsMvEOL%2FyL6mtSc5uaaCTcZ5ON6AAsXlK8hzp9%2FQ%2FESxSSH%2BS2%2BE4LlcfsVu2mtw6g3KBLlD22Q4LQKnirWvNglxkIGBsfM8d1Y%2BDGXT5uCAfWyTsriUsEEkFcm1Esw1eT%2BvAY6pgFEnLDdO19R8C%2F6pvjVUIIfxnoy9C%2F4rhW4CTgFu1b5n9so0pbhRu07Dq9UcNyBjxAbZdKZH2RdLFn5z0WWXXf4jbdNBUenbJFjl1FmqI%2BCK3PYoy9S5bgiEMMaTwMcOqqzpyBona0VbRnYFgvyUKFMdfpox6xeBG8yjw%2BAUaCCMZiiPLLHWP26ewpZGinNtih6700QOwjmC%2BQbXTgWEGYYseHNzCjP&X-Amz-Signature=6b859d98e5ff7e7efd5fb4c0c0fcdcb39ecdaa5c4a7f5757c46af5bb9bc1489b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJTUDWE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7rLM5S0%2Bl2KSHuxa6w%2FgSCHrlU4o4LwKHeT1Umf57XAiAnyBHsJINihzyQfcUU8vRIRXYiUXm5V135WqyosdvvViqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqylIO3Yes%2FVzw5f1KtwDhQ1Z8HUHSGCQ3t814gvYPQDlhaTaYlQZWdumMRaJy5nHatJsIEemHcHAwf4DU2mLu766lnXm2ZRTU%2FZ3ATzSUfNeSXjeWLCE8oSyGwaejYg9KONHl6aE2ediW2tA4CE1RpTVGbmSujL7RaCbrKNB2WEnxlh0JNIelyDFqS4hTFLIPFtv5LSr%2Fid%2Bo65Udfbb7BzqIukOhQBHHUXpD%2BO4RL71u99Ao%2B9S%2B31fitzCRlVLE5JT93IE%2BRAL4vkyFMPBc7uP234cy8iZhujcGFeAvPnWsM%2F6L%2BgsVrlzAQe8iBPCr4aEVU%2B144MWGQr1%2Fd%2F1QSv5R8RKNAykYZWPTqNutCZN5HyqbD5HP3qajCth9Be84Fa%2BRhhTeReBmuKRQaHSodXzbZNEfbTbSpDo4UriX6nzW51AtFvXbJmZ6khFEFWdLney365INKeAFUSfD8zruBhynm1dyPhEeMIP6Q22fGSntUtksdemadjwQyiu0pR8bMjHJ%2BPYIjrXX%2FRz%2BDsMvEOL%2FyL6mtSc5uaaCTcZ5ON6AAsXlK8hzp9%2FQ%2FESxSSH%2BS2%2BE4LlcfsVu2mtw6g3KBLlD22Q4LQKnirWvNglxkIGBsfM8d1Y%2BDGXT5uCAfWyTsriUsEEkFcm1Esw1eT%2BvAY6pgFEnLDdO19R8C%2F6pvjVUIIfxnoy9C%2F4rhW4CTgFu1b5n9so0pbhRu07Dq9UcNyBjxAbZdKZH2RdLFn5z0WWXXf4jbdNBUenbJFjl1FmqI%2BCK3PYoy9S5bgiEMMaTwMcOqqzpyBona0VbRnYFgvyUKFMdfpox6xeBG8yjw%2BAUaCCMZiiPLLHWP26ewpZGinNtih6700QOwjmC%2BQbXTgWEGYYseHNzCjP&X-Amz-Signature=8c527bd5f2608b7837bfe612715ab583692009e2f2410b0f5cc8656947088559&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
