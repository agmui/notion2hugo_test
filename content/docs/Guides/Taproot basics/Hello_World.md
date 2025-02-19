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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RFLRCC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD0OfzBN8NAP4TjMu%2BB4%2BnHbOc5m0MP6EaW6SKdctY2LwIhAPfdOGm%2F7WqnpiI5Kd8pCmK56SkzmIXm0pllxq%2FeG3JeKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFqUsEXyZiTsUMOiYq3ANFwA7SCKqFjjqsZnJL7Ck7VWZrJglr7K2veg75DDDU9bPoC7cPeYSGcKcw%2BcDZU6HSEx3sVc1m%2Bn1TrznFjIho8Olp%2FkufzfAzvXJaQexQmZ2wAKmHUri7DbW77u5v53K4soex4JIvWPpFLMOygu27Rc00h975TxMdyhA2INkLudLrXfxns8v5zgXnwsPDeGvq%2BgW0mnsP%2FKwHoULuAmLBwbzAEYZNLZzNeWX6bRz5JeTBK5pwrsRvW5llbBbRtVwfautFSYN9UvSlfR5qKmUpHs2FUbA3L%2F2ub74buXKUq3chn7Duq8B5tVI7MYkgpou5FH5Lyj5A%2B3JqFPNbz14V08lMow6b66Ja5mTRg6Yo6slRVJEDtnYyh%2Bqs273riWU4Nwx4gTdPp%2BRTTuANaXVHwKJHeaCIC8erdzD5c9hsndl2%2BZlVrKofgzalXoH%2FR9loACW1%2FPlOal9YHjb4RSwQFEIvbiimUwXaprCCNZ2t2YXuEwa4XDmj30U45pQGyR9wU%2FrB57sKwTw9RpcJNAQSMVDjrBHS9R90N7rFSesNbD3XhS47NR5yHScN8FEIwTB5w7PfPSWkM6TU6gyGWQQ6XkqbSkkYrHmHymgyIswkt%2BTYFB7G03OHbxlUODDlj9e9BjqkAVILJShayO20W%2FIGGaAhgmrCsV%2F0H382v3CTVoQCNXbJ%2Flg7BRGxJ1MPSWHug%2BDMBKRY%2FZKxmeW1w4paC6bbYByihIW2szv%2B0ZaFfwXx8INfV4XtB%2BVRgYtmoH3whvtv5c9xW9QmZo9V4pEOIcOPk8V%2FovJx5ypv0Z4mFuIAQs6fjmE0Ia%2FNKQ1HBl54L06V3p9HX9nD9TNDt3hnza6jSsQecflH&X-Amz-Signature=4d215df1078e86a562aaa4c9a820bc870e7bf396fe14f4767cff9ccd50edbe27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RFLRCC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD0OfzBN8NAP4TjMu%2BB4%2BnHbOc5m0MP6EaW6SKdctY2LwIhAPfdOGm%2F7WqnpiI5Kd8pCmK56SkzmIXm0pllxq%2FeG3JeKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFqUsEXyZiTsUMOiYq3ANFwA7SCKqFjjqsZnJL7Ck7VWZrJglr7K2veg75DDDU9bPoC7cPeYSGcKcw%2BcDZU6HSEx3sVc1m%2Bn1TrznFjIho8Olp%2FkufzfAzvXJaQexQmZ2wAKmHUri7DbW77u5v53K4soex4JIvWPpFLMOygu27Rc00h975TxMdyhA2INkLudLrXfxns8v5zgXnwsPDeGvq%2BgW0mnsP%2FKwHoULuAmLBwbzAEYZNLZzNeWX6bRz5JeTBK5pwrsRvW5llbBbRtVwfautFSYN9UvSlfR5qKmUpHs2FUbA3L%2F2ub74buXKUq3chn7Duq8B5tVI7MYkgpou5FH5Lyj5A%2B3JqFPNbz14V08lMow6b66Ja5mTRg6Yo6slRVJEDtnYyh%2Bqs273riWU4Nwx4gTdPp%2BRTTuANaXVHwKJHeaCIC8erdzD5c9hsndl2%2BZlVrKofgzalXoH%2FR9loACW1%2FPlOal9YHjb4RSwQFEIvbiimUwXaprCCNZ2t2YXuEwa4XDmj30U45pQGyR9wU%2FrB57sKwTw9RpcJNAQSMVDjrBHS9R90N7rFSesNbD3XhS47NR5yHScN8FEIwTB5w7PfPSWkM6TU6gyGWQQ6XkqbSkkYrHmHymgyIswkt%2BTYFB7G03OHbxlUODDlj9e9BjqkAVILJShayO20W%2FIGGaAhgmrCsV%2F0H382v3CTVoQCNXbJ%2Flg7BRGxJ1MPSWHug%2BDMBKRY%2FZKxmeW1w4paC6bbYByihIW2szv%2B0ZaFfwXx8INfV4XtB%2BVRgYtmoH3whvtv5c9xW9QmZo9V4pEOIcOPk8V%2FovJx5ypv0Z4mFuIAQs6fjmE0Ia%2FNKQ1HBl54L06V3p9HX9nD9TNDt3hnza6jSsQecflH&X-Amz-Signature=001c3ada63dfd42daab3669522c7d9c1c53db71b4e93a13eba83d9ae6b11d55d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
