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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2QCNS4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDe1thEVWWxWIo5bcIbCmnu%2BlqJaAql5aMFpPxGNr1tRgIhAKdtpwQo1x5tdVVtiox%2BrDT0aC%2BKQKuQz1zIBqsMsPN5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxlnUNsrBvp63YbmiUq3ANSc%2BUqVwo%2F7ERC5u%2Bfp4SrbZVuuXQnYjko3qfGyGWkaq2uGVO1ntPtpdyoQkAwvfF%2BWwFPIc9M944CBszx%2FDIZ2cBm960dyVHI4HsA7WtXoFWOgWPgSGJsuL0JXHs6FVvrbr356Vjz%2FE%2BCaGF%2FtwVSm791o1aByHEe2FnhcoyX9gonhtzdo1%2BFAiuKRLvWUAc9irHo%2FrmE1OtzdIqZSNMol1pVwU7fzw7UcttzhOZnBhN53ARkdIjnTi4cchFA4iU5AzTy7sI8dyGPd6oEnaPFHO6SycBaGBHhnbpoaKYiDGXoDJKli%2FdBbfDfdEMh8jQ4Q%2F%2B8rlucPiLoWyihzStGP3mdC63o0iRdGcuHNXRkmfldwu5jFA2b2VgnU%2BDUoZVBaJZ2r2M8jMI3dr%2F6sutGouzls9FwHcUp%2B6wviWrZ%2B%2F0tI3Adug66B1bDNRsw6rMW6LWyiMdeYuu3gar6x3XzOIfj%2F0nKNtt5ipWqD4S7P0snZSo%2Bog2DDKboIyOoFfIm%2BnlWorzjIZ4TcxzVSu6eXon2NWeg2sT0fGErpv6V6esiNDlwxXhnO62nBGi1AOq9Ya4ul5lPSo4DqXa8mkGxLMZAx18D6dGsRzqrHFrn0IRwSKJlmT%2BF9v9UeTDA4%2Bm%2BBjqkAbauPDJDS8hxUBxcDARlWF9lYyfnPvmoZsaSGKr19ESJvD%2FCm3YYwnq92dyID%2Bod1r%2Bv1ftXQ%2B5G4Dx8cLTf5LyuhvBk4YTqSd%2BSnw807vuwhPy4iHPlqr7zj3kyScTnjUGcFSIShAlsqAwO8r5b4eLmvc6AMBZfBgd9ELeT0nt%2B4MiHGl52Gya1hsELHJtxXClF9d8Nwva6xWlo4VjDUTBdrmUy&X-Amz-Signature=09520b2714e686de1d9c919ddb11302d92f33c3ea9b06720ba6057584a6b9ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2QCNS4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDe1thEVWWxWIo5bcIbCmnu%2BlqJaAql5aMFpPxGNr1tRgIhAKdtpwQo1x5tdVVtiox%2BrDT0aC%2BKQKuQz1zIBqsMsPN5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxlnUNsrBvp63YbmiUq3ANSc%2BUqVwo%2F7ERC5u%2Bfp4SrbZVuuXQnYjko3qfGyGWkaq2uGVO1ntPtpdyoQkAwvfF%2BWwFPIc9M944CBszx%2FDIZ2cBm960dyVHI4HsA7WtXoFWOgWPgSGJsuL0JXHs6FVvrbr356Vjz%2FE%2BCaGF%2FtwVSm791o1aByHEe2FnhcoyX9gonhtzdo1%2BFAiuKRLvWUAc9irHo%2FrmE1OtzdIqZSNMol1pVwU7fzw7UcttzhOZnBhN53ARkdIjnTi4cchFA4iU5AzTy7sI8dyGPd6oEnaPFHO6SycBaGBHhnbpoaKYiDGXoDJKli%2FdBbfDfdEMh8jQ4Q%2F%2B8rlucPiLoWyihzStGP3mdC63o0iRdGcuHNXRkmfldwu5jFA2b2VgnU%2BDUoZVBaJZ2r2M8jMI3dr%2F6sutGouzls9FwHcUp%2B6wviWrZ%2B%2F0tI3Adug66B1bDNRsw6rMW6LWyiMdeYuu3gar6x3XzOIfj%2F0nKNtt5ipWqD4S7P0snZSo%2Bog2DDKboIyOoFfIm%2BnlWorzjIZ4TcxzVSu6eXon2NWeg2sT0fGErpv6V6esiNDlwxXhnO62nBGi1AOq9Ya4ul5lPSo4DqXa8mkGxLMZAx18D6dGsRzqrHFrn0IRwSKJlmT%2BF9v9UeTDA4%2Bm%2BBjqkAbauPDJDS8hxUBxcDARlWF9lYyfnPvmoZsaSGKr19ESJvD%2FCm3YYwnq92dyID%2Bod1r%2Bv1ftXQ%2B5G4Dx8cLTf5LyuhvBk4YTqSd%2BSnw807vuwhPy4iHPlqr7zj3kyScTnjUGcFSIShAlsqAwO8r5b4eLmvc6AMBZfBgd9ELeT0nt%2B4MiHGl52Gya1hsELHJtxXClF9d8Nwva6xWlo4VjDUTBdrmUy&X-Amz-Signature=6a5615f3da6cdd0e27eea6a99a6cc5dec515b493b6098be546b223748315a9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
