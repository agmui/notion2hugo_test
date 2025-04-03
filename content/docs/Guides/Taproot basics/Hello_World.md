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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCACZOB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkHw5%2BGf53Xzl9SpUaRxnyDxS7y%2BVS0mKVTP%2Bv2acshAiA2reP7%2BADhIsKw44CXP99iEH4KbQ5Y%2B5n%2FW7coECQGTSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaO2rTo4558CYT5yKtwDmhh%2B3DaCrz5LVSXpFLU8r%2F6ZucI%2BeVrcX8vDXgK6Fm%2Bd4KQdwNj%2B4Hp5G3rnTnpk4PGvV1GZmj40gyV8urbBM85yHQcNgmfAW4tDIsGkV%2FNx4UmLSMDRRp6qb5p8WQo2riqGbfu8JsxvNxXWi2mxibSwI8U%2FMTzEoJO%2Bg2%2FZghMFuLOi17AD7lee6frkfDZPiM4tLU%2FrktbKBLcTsBzYmxGpJ1DZFxzhTHqOQVPdUyyfhgy%2B9vJPF3gI65xeCtRUZTCXUy3SZaes5ZJeg9q7XIHaRrPttGKa%2BcPWWiEhIWkmP6tOdsscrTecP5sfF9l9HhwGzcAed%2F1ILgRhR4TOjNsfUmtWxJf15E1g91INC8rLsf20S9M1kHafLqs1KhNH1yowIU%2FDOlewUSUuoEjNQaFmBAtLNrDtIbjqIjRHfpWox9JViO6EwFJRgMOGt4zoIkeTF9PrV3pe4sMYozKVyVrKZSnjQwzfDl76F4H5gggVNJneRqHH7aEnde1M2VAOKEjSedBH5SuYu8%2BBgOCZ5HmMXOjkgdtF%2FMqhJl9hbu00vtEjIjBES3bELJZbwjbWY9NaTTV0YP3n4yEVJdBRJpd%2FXC2CZIlS%2B4%2B%2FeCnGGyMkQSgOm%2BB7UZv9m9gwvbO6vwY6pgGktmDC27NqeY040m0iB2X6xUznHzjQtT2SVQTTx09WAUEXCDJ6xhznOdg77rnXvLD%2BtokVugjO7XDdsdTzBaMs3bk29LpkRNIa1xd6sYMjkaBIq7WI6pTyeBGIUnz%2BztMEMG7SKi01y1EH90%2BtcAfiAPW15Y7TXIDdXqUYOSMrTT5wIp55LchH53VuDKy9co%2BIzyGApN1qd96c6adGyoQuGB1zT%2FT5&X-Amz-Signature=34a8d41a0b30e49b79e21a1260e8bcc0839a9997a131d9555cd8e075bee97716&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCACZOB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkHw5%2BGf53Xzl9SpUaRxnyDxS7y%2BVS0mKVTP%2Bv2acshAiA2reP7%2BADhIsKw44CXP99iEH4KbQ5Y%2B5n%2FW7coECQGTSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaO2rTo4558CYT5yKtwDmhh%2B3DaCrz5LVSXpFLU8r%2F6ZucI%2BeVrcX8vDXgK6Fm%2Bd4KQdwNj%2B4Hp5G3rnTnpk4PGvV1GZmj40gyV8urbBM85yHQcNgmfAW4tDIsGkV%2FNx4UmLSMDRRp6qb5p8WQo2riqGbfu8JsxvNxXWi2mxibSwI8U%2FMTzEoJO%2Bg2%2FZghMFuLOi17AD7lee6frkfDZPiM4tLU%2FrktbKBLcTsBzYmxGpJ1DZFxzhTHqOQVPdUyyfhgy%2B9vJPF3gI65xeCtRUZTCXUy3SZaes5ZJeg9q7XIHaRrPttGKa%2BcPWWiEhIWkmP6tOdsscrTecP5sfF9l9HhwGzcAed%2F1ILgRhR4TOjNsfUmtWxJf15E1g91INC8rLsf20S9M1kHafLqs1KhNH1yowIU%2FDOlewUSUuoEjNQaFmBAtLNrDtIbjqIjRHfpWox9JViO6EwFJRgMOGt4zoIkeTF9PrV3pe4sMYozKVyVrKZSnjQwzfDl76F4H5gggVNJneRqHH7aEnde1M2VAOKEjSedBH5SuYu8%2BBgOCZ5HmMXOjkgdtF%2FMqhJl9hbu00vtEjIjBES3bELJZbwjbWY9NaTTV0YP3n4yEVJdBRJpd%2FXC2CZIlS%2B4%2B%2FeCnGGyMkQSgOm%2BB7UZv9m9gwvbO6vwY6pgGktmDC27NqeY040m0iB2X6xUznHzjQtT2SVQTTx09WAUEXCDJ6xhznOdg77rnXvLD%2BtokVugjO7XDdsdTzBaMs3bk29LpkRNIa1xd6sYMjkaBIq7WI6pTyeBGIUnz%2BztMEMG7SKi01y1EH90%2BtcAfiAPW15Y7TXIDdXqUYOSMrTT5wIp55LchH53VuDKy9co%2BIzyGApN1qd96c6adGyoQuGB1zT%2FT5&X-Amz-Signature=72b3ff06ef2b79eb96c6f06d9eef12c9fd3466c3f331da8042500d9a6e26106e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
