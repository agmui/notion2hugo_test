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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXIL7IGW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCu1civ3j1whtPaYHxOZWiL%2B8qzsMkBeAtRLuR%2BvPIMAiBk0VvDOTdIT5NkTp9vTxK%2BaiLG952hZx10oKV4qbDYUyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpD67wWk28XJfwwfKtwDJPxuQexCaHmn77Q0ukTvAXzDLrYNHamfStndLplxe4Lq8hWieAG6g9EoDxK1x8AhVT0WuXXLsx%2B7PDfBhre%2BveXQzsuh61LQW8qvJ9%2BGfYDtnG4iwZhff6qdKF1kFGlzSRr39zQuC7WEM8ZSPsEpITXiu5m1Y9HwWFbhp%2BgMo5zPY4EsGhdRnVTGKrAb9KO1RSQdt%2Bg6QAm5NlRCllkuNH2KGG4b8pMLgiHuyl%2Bp9QB0kt%2BBTr%2BrN2H4HXuzIbGFdo1HXEAhMQzAa%2B2Pv%2BRUhYWK2O1He84s336iHyiaNa13RBI9cc9HO5swRIMfKNIeifzzCxU8BsIMon08CYDKN%2BDUPz%2BpqMeNTp1mTw3zaHxMh%2BKwJcMwrxz5yn05fBPVIxzFX%2BGcA8Atq2XnaHUWnSxUGge887TVZwnRh9SvMS5qiHx%2FkOUojbfUKnBY%2BJuIwdHI5ZB3kPftfS22SGhIHDoNJH0w556S432QNy%2BrBHopN79ij7bg1LzIKb8dGgkqYoJdbTwdTHZOhkxZIZG9aIoqFTpFdkSRdsr%2BORD%2BOscKC305itIywtQedevyaepUEht%2F%2Fh07Kc5U%2FQBvXPjiWQ5%2FKWgUlcTUQiL32Pki4Yl%2B%2Fja6XHqtS51OpjowkMzlwQY6pgE1OUv87X0izvtMNeROdFLIGpFwrqsmAebtjBalOCSPQjfdv4cCEtNwlFLHYF%2FHFpnUlhhKcYxi%2BTFbMIYqBML%2Fq83MqHaygaUddbEnysDeun%2FIMOXxlLBLfSEFXhMOCAZBvYeH8TGu96mztI9KSvqxbOr1FGQqDG770gNlEJWlq%2BScY6S31U3X2%2B0B1tq%2BApXAvoMIMF99WMz4JdVcA%2FifiDzIjucW&X-Amz-Signature=34a32a50beac989f2b2f2aea3796c0e0dde0129e2068c45c17260041828c0135&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXIL7IGW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCu1civ3j1whtPaYHxOZWiL%2B8qzsMkBeAtRLuR%2BvPIMAiBk0VvDOTdIT5NkTp9vTxK%2BaiLG952hZx10oKV4qbDYUyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpD67wWk28XJfwwfKtwDJPxuQexCaHmn77Q0ukTvAXzDLrYNHamfStndLplxe4Lq8hWieAG6g9EoDxK1x8AhVT0WuXXLsx%2B7PDfBhre%2BveXQzsuh61LQW8qvJ9%2BGfYDtnG4iwZhff6qdKF1kFGlzSRr39zQuC7WEM8ZSPsEpITXiu5m1Y9HwWFbhp%2BgMo5zPY4EsGhdRnVTGKrAb9KO1RSQdt%2Bg6QAm5NlRCllkuNH2KGG4b8pMLgiHuyl%2Bp9QB0kt%2BBTr%2BrN2H4HXuzIbGFdo1HXEAhMQzAa%2B2Pv%2BRUhYWK2O1He84s336iHyiaNa13RBI9cc9HO5swRIMfKNIeifzzCxU8BsIMon08CYDKN%2BDUPz%2BpqMeNTp1mTw3zaHxMh%2BKwJcMwrxz5yn05fBPVIxzFX%2BGcA8Atq2XnaHUWnSxUGge887TVZwnRh9SvMS5qiHx%2FkOUojbfUKnBY%2BJuIwdHI5ZB3kPftfS22SGhIHDoNJH0w556S432QNy%2BrBHopN79ij7bg1LzIKb8dGgkqYoJdbTwdTHZOhkxZIZG9aIoqFTpFdkSRdsr%2BORD%2BOscKC305itIywtQedevyaepUEht%2F%2Fh07Kc5U%2FQBvXPjiWQ5%2FKWgUlcTUQiL32Pki4Yl%2B%2Fja6XHqtS51OpjowkMzlwQY6pgE1OUv87X0izvtMNeROdFLIGpFwrqsmAebtjBalOCSPQjfdv4cCEtNwlFLHYF%2FHFpnUlhhKcYxi%2BTFbMIYqBML%2Fq83MqHaygaUddbEnysDeun%2FIMOXxlLBLfSEFXhMOCAZBvYeH8TGu96mztI9KSvqxbOr1FGQqDG770gNlEJWlq%2BScY6S31U3X2%2B0B1tq%2BApXAvoMIMF99WMz4JdVcA%2FifiDzIjucW&X-Amz-Signature=623066ed0d64a8a529cb242e228478b3ee8bcd6fc059f4d94361974903bbb794&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
