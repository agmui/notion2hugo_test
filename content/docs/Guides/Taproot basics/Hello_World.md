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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CG3G42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDokf8jsAcMnpXQgdAk8FMwNdRlw%2F8MzozIa0QppJP2tAiEA0zzEVfSR9UqLrO1N1eQCBjki6dKZ5J%2BQoAGd1KT7nxIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqLn4k2MKIaEMdm1CrcAzwSUEx0ZsezED%2Blx3o5vU1QRJrgSLX20DPKzUNbakhrOzZCR1Rp0MTQCTsptTPHT%2Bia%2BsLaLi5m5SsoGPz%2BQDCNxuETPe0yrl79FSHJ00vxCKTfskb4oxIZfkJTHTZIHmJtj9GmI97bm0bK2YYRY0zPHdAZ1cwukQ1hNAXH87Aiuh3prR7lIZ96M9ijKmX4Wxk%2FoHZ0T%2BqA72Hwk%2B6W2xh1SIsZ6buQZbBPf4LRJrqwgqrn1LAYiQOhROT5RNz0Wdbfu3DOfmUgxZKXI1k0VKxVIf3JzJWaDmD1eX48UXeE6mJWTMoEkgSBSzlrspcuwFdy3RA%2FCCfVYPZsroG1sDuME8uuiLo4gtJUzJKigVgpxGuYywvMEUFeEHyBIPM9W0TsVMgZAoRBx5FO5r4EUX%2BhgqwuAATXqxWxGpycOC6881Qjm9Xjiex3EVxG0BM%2FAK0%2Bkw9SH%2BRmjgmXXlXry6YRIomDZLBnQaS%2Fo2YJ5MkownzJnZdYLbJy2ZlAGLjO74i1uGXM%2BQ45GEWK5yfxpIU%2BTRDfxDgotlP1W%2F2rJ1uifWGU%2BTlMCdz5HS%2F2nVlKhqwqWVNxF5nXdpVmLEKYPaoMjIldpZmoQh%2BMqJuBzW4v8vWquS6RfzVb529tMLz3rb0GOqUBBw34jQJslW1EXenQXaCZbQuvBB2hQohYFp9U1DX%2FGguVO2cSkbbVgzk1ovoQLAmnvPfLa4Q2kdQ1nP5traqOk6XIfnLhxdVjrGOb7gAGyP%2Fwg4MeQmmZ%2BWQIfMvkiGXLfKnmKWNfkQU1jttTvKA6s1UYlhiMEKM7cfSwrouJB5WYQPrdasqfuBUKufbB6VpvzGq9f2bkA0Ko9NNQnT4Z39a8JK7D&X-Amz-Signature=470d00dedc7455adf74e3cb4d4a1f8015c702efe43b1ca60e2875d0791166ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CG3G42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDokf8jsAcMnpXQgdAk8FMwNdRlw%2F8MzozIa0QppJP2tAiEA0zzEVfSR9UqLrO1N1eQCBjki6dKZ5J%2BQoAGd1KT7nxIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqLn4k2MKIaEMdm1CrcAzwSUEx0ZsezED%2Blx3o5vU1QRJrgSLX20DPKzUNbakhrOzZCR1Rp0MTQCTsptTPHT%2Bia%2BsLaLi5m5SsoGPz%2BQDCNxuETPe0yrl79FSHJ00vxCKTfskb4oxIZfkJTHTZIHmJtj9GmI97bm0bK2YYRY0zPHdAZ1cwukQ1hNAXH87Aiuh3prR7lIZ96M9ijKmX4Wxk%2FoHZ0T%2BqA72Hwk%2B6W2xh1SIsZ6buQZbBPf4LRJrqwgqrn1LAYiQOhROT5RNz0Wdbfu3DOfmUgxZKXI1k0VKxVIf3JzJWaDmD1eX48UXeE6mJWTMoEkgSBSzlrspcuwFdy3RA%2FCCfVYPZsroG1sDuME8uuiLo4gtJUzJKigVgpxGuYywvMEUFeEHyBIPM9W0TsVMgZAoRBx5FO5r4EUX%2BhgqwuAATXqxWxGpycOC6881Qjm9Xjiex3EVxG0BM%2FAK0%2Bkw9SH%2BRmjgmXXlXry6YRIomDZLBnQaS%2Fo2YJ5MkownzJnZdYLbJy2ZlAGLjO74i1uGXM%2BQ45GEWK5yfxpIU%2BTRDfxDgotlP1W%2F2rJ1uifWGU%2BTlMCdz5HS%2F2nVlKhqwqWVNxF5nXdpVmLEKYPaoMjIldpZmoQh%2BMqJuBzW4v8vWquS6RfzVb529tMLz3rb0GOqUBBw34jQJslW1EXenQXaCZbQuvBB2hQohYFp9U1DX%2FGguVO2cSkbbVgzk1ovoQLAmnvPfLa4Q2kdQ1nP5traqOk6XIfnLhxdVjrGOb7gAGyP%2Fwg4MeQmmZ%2BWQIfMvkiGXLfKnmKWNfkQU1jttTvKA6s1UYlhiMEKM7cfSwrouJB5WYQPrdasqfuBUKufbB6VpvzGq9f2bkA0Ko9NNQnT4Z39a8JK7D&X-Amz-Signature=dbb2c0c97080590674a0ea29065b42a6f85744f901a8f4df926b207ddbe7456c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
