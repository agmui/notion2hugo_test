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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALYILAI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMI8hrotYJG4wJjXDI9f5%2FAI%2F6J%2BNuVhQg%2FSqBYNGFzQIhANXR1UY%2FrHKYMcA1CcpFUQrBxbr72sbmFilsmzRxdTAtKv8DCHQQABoMNjM3NDIzMTgzODA1IgzlYHdAVr4IkPvpXYwq3AOX6UF5Upy8Wht86lcw5LBnoVzZ71iOnJRN6IEBmLEkw0W1XTpAMxTWqTyV7CLzscXPYfERQUYj1v6AZaHoy6td5QtJVEYQohehO1VLevzOy6kAYQ8uycdaUr%2B75AP2fKtncK0KvF7vxJB6zIinWNaEjupzyX0BhrTFdClSX%2F2h5mBDn5%2FekQvMTlpP2daOvNDz5u%2Barm2lv4hM79tUosdh7LBP8Mer8HrDnuz5Q1VDgARhZjrBnqoPxrEyHisMwfAKSu1vdAr%2BGrrl32ALs%2Bg5pGLvhIZ%2FSDP77CtqlegHnWXtL8V2iDE6fHhSFCzqioUXID%2BwdTbmxfFIz1r4Rrs8VrfbHsB5fXui%2BA%2Bm4xmAhy9c9dPEhyd9jOsLqC9h5LuSVK9KXJBCX%2BrKKRWpY3xxTcOobvskBhsdW2SqD%2FDJkvV1CI%2FIEotRk3my%2Bb6c4ZOYnww1eHf7LkHOI%2F6L7uFX%2FTg60lljjG2Onx2ljaOIEalSJqLK7GQ%2B%2BrlcxSF30iejQGgiBqwcPCxID%2FiGrd4ih7TxkBoCw9v%2BG1G5%2FTXNBjSmB1YfWcEiSKez4JVX7Fu4oIFAyc%2Fa%2BNcLhW9GdBW4e23j%2FSOI4C7%2F8q2AqwEMBkjY6Cn7RFBI54rcDDDgyL3ABjqkAcheQxHpMZZTIdjY6UIDwNp8f5ZSLErarxmyNAUel3GidjPBKAtCj9hD1AaV6EstxKf1HYK%2B12s5Sh7Ji%2FdGPpoLINDwU%2FbwikVbblP%2FJ9hufLaeMqEO8YtYhrNOCj512luRjmDXKC3Ci3M5p1vdN5BlmEQsLXq6MzVpeEX9iMLFwpD6qGWq1Gwpkkrm0w2YFizd8OB004UyvjWRWNf%2BXdUV1hNn&X-Amz-Signature=67eb0e6c8addc8d24fb16fa3429ea941128c61ab4ed2c4e5c50bd02ae08308d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALYILAI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMI8hrotYJG4wJjXDI9f5%2FAI%2F6J%2BNuVhQg%2FSqBYNGFzQIhANXR1UY%2FrHKYMcA1CcpFUQrBxbr72sbmFilsmzRxdTAtKv8DCHQQABoMNjM3NDIzMTgzODA1IgzlYHdAVr4IkPvpXYwq3AOX6UF5Upy8Wht86lcw5LBnoVzZ71iOnJRN6IEBmLEkw0W1XTpAMxTWqTyV7CLzscXPYfERQUYj1v6AZaHoy6td5QtJVEYQohehO1VLevzOy6kAYQ8uycdaUr%2B75AP2fKtncK0KvF7vxJB6zIinWNaEjupzyX0BhrTFdClSX%2F2h5mBDn5%2FekQvMTlpP2daOvNDz5u%2Barm2lv4hM79tUosdh7LBP8Mer8HrDnuz5Q1VDgARhZjrBnqoPxrEyHisMwfAKSu1vdAr%2BGrrl32ALs%2Bg5pGLvhIZ%2FSDP77CtqlegHnWXtL8V2iDE6fHhSFCzqioUXID%2BwdTbmxfFIz1r4Rrs8VrfbHsB5fXui%2BA%2Bm4xmAhy9c9dPEhyd9jOsLqC9h5LuSVK9KXJBCX%2BrKKRWpY3xxTcOobvskBhsdW2SqD%2FDJkvV1CI%2FIEotRk3my%2Bb6c4ZOYnww1eHf7LkHOI%2F6L7uFX%2FTg60lljjG2Onx2ljaOIEalSJqLK7GQ%2B%2BrlcxSF30iejQGgiBqwcPCxID%2FiGrd4ih7TxkBoCw9v%2BG1G5%2FTXNBjSmB1YfWcEiSKez4JVX7Fu4oIFAyc%2Fa%2BNcLhW9GdBW4e23j%2FSOI4C7%2F8q2AqwEMBkjY6Cn7RFBI54rcDDDgyL3ABjqkAcheQxHpMZZTIdjY6UIDwNp8f5ZSLErarxmyNAUel3GidjPBKAtCj9hD1AaV6EstxKf1HYK%2B12s5Sh7Ji%2FdGPpoLINDwU%2FbwikVbblP%2FJ9hufLaeMqEO8YtYhrNOCj512luRjmDXKC3Ci3M5p1vdN5BlmEQsLXq6MzVpeEX9iMLFwpD6qGWq1Gwpkkrm0w2YFizd8OB004UyvjWRWNf%2BXdUV1hNn&X-Amz-Signature=d33e651d62bdd8e8acb7610c48e9eaa775d8373ed1f59bd88ab88a04647aae85&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
