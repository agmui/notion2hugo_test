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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILAW5TX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD8JSjiNOLyjRgqtHgPh7uKXLKbOUbno0NwDE4HnlFzmgIhAOwdHftxesmZnIi8RD9obCxBOE9U84fRL%2FyuyoKmi0fKKv8DCC4QABoMNjM3NDIzMTgzODA1Igxzq1Cb8SKSboejaOoq3ANcvHPTsG20ysgHZvtLlsuBSXTe4wagAQAYHiar2E4Q1vtSY3g91L3om9LBFLj5zQMQLf1CTSJfEx4EXmHx51aht2vtwKvzRHgHrTju0hRXETnJhEasNGErvb%2B5G1voFdYi%2FBto0Ks4YiazwiF%2BYzcCwSweBOqH%2BRn1bf1%2BvHBmbY6A7Xr9c%2BOJXNkyJ2pn1kaRw%2BcTOYl6pawYzNRne86umqYvXvfjcWPwwZZzmmQFJVDKZdQHt5W4%2BdItl%2BZI6nRxVvbu%2FCAwysz3fvu1K9W9BEZ2AN6saA2ESC%2FU1hkcgM9BOsA5C6vGRerUDU%2BVKVbVfFEopLUIS4SL5OnQkXzBNE16SyFauxVBfv3MH8V%2B0ZPBL9DtGKz2nqC2JHY6Gw9xU2HsmMMR4u%2Bbpjszt0Mxr2YATemI5VrL1spSvZDGOSm06uI0S1iD0BMDz%2BtYiR%2FCEmYKyke7YRiJ83iFvoFYdNV8ytDIxAIRJPX7TnjYDZb6Pb3npl%2Bxs2QvfOBEhyRGxtDhVPJprohJovyC4ob9E%2FvYQz3FkrUGrsM1gm9xKlOjwy9R9CfG3HdmgfTRYFkIBJAcvJotOKm8%2FnK9FrwhuqofjK%2FVmnk54qOos14caFB9BUZthq11%2B12yMzDShdTDBjqkAdfye0J3nABd9CsKuwC4U7YWf%2FND3FSLxxqqlWvJ%2FoBIbMekHXgDrB0exojIT4CzNIGfdx9lgRKMZhNpzOZj8DWm4ae5M1McxRn3VlRaWpyOBtD5CQnZ1%2Fpf0W2hReKvmT11p5kRb1FwMH3POO9FFQFPWCRZetdva6oSJuCLdt%2FBfP%2Fe%2B2z0RuhLxpo%2B8JWHZ8Hu5ZVq8p4QfessrxEHAAb8s7xl&X-Amz-Signature=d886bbd6a3b806eb9d75129cc64fe5ae6b72ce1dbab917003c03356f4742fe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILAW5TX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD8JSjiNOLyjRgqtHgPh7uKXLKbOUbno0NwDE4HnlFzmgIhAOwdHftxesmZnIi8RD9obCxBOE9U84fRL%2FyuyoKmi0fKKv8DCC4QABoMNjM3NDIzMTgzODA1Igxzq1Cb8SKSboejaOoq3ANcvHPTsG20ysgHZvtLlsuBSXTe4wagAQAYHiar2E4Q1vtSY3g91L3om9LBFLj5zQMQLf1CTSJfEx4EXmHx51aht2vtwKvzRHgHrTju0hRXETnJhEasNGErvb%2B5G1voFdYi%2FBto0Ks4YiazwiF%2BYzcCwSweBOqH%2BRn1bf1%2BvHBmbY6A7Xr9c%2BOJXNkyJ2pn1kaRw%2BcTOYl6pawYzNRne86umqYvXvfjcWPwwZZzmmQFJVDKZdQHt5W4%2BdItl%2BZI6nRxVvbu%2FCAwysz3fvu1K9W9BEZ2AN6saA2ESC%2FU1hkcgM9BOsA5C6vGRerUDU%2BVKVbVfFEopLUIS4SL5OnQkXzBNE16SyFauxVBfv3MH8V%2B0ZPBL9DtGKz2nqC2JHY6Gw9xU2HsmMMR4u%2Bbpjszt0Mxr2YATemI5VrL1spSvZDGOSm06uI0S1iD0BMDz%2BtYiR%2FCEmYKyke7YRiJ83iFvoFYdNV8ytDIxAIRJPX7TnjYDZb6Pb3npl%2Bxs2QvfOBEhyRGxtDhVPJprohJovyC4ob9E%2FvYQz3FkrUGrsM1gm9xKlOjwy9R9CfG3HdmgfTRYFkIBJAcvJotOKm8%2FnK9FrwhuqofjK%2FVmnk54qOos14caFB9BUZthq11%2B12yMzDShdTDBjqkAdfye0J3nABd9CsKuwC4U7YWf%2FND3FSLxxqqlWvJ%2FoBIbMekHXgDrB0exojIT4CzNIGfdx9lgRKMZhNpzOZj8DWm4ae5M1McxRn3VlRaWpyOBtD5CQnZ1%2Fpf0W2hReKvmT11p5kRb1FwMH3POO9FFQFPWCRZetdva6oSJuCLdt%2FBfP%2Fe%2B2z0RuhLxpo%2B8JWHZ8Hu5ZVq8p4QfessrxEHAAb8s7xl&X-Amz-Signature=6ca4e8c8428e39d411db1d7a84899eea26878955e49774c16e9ccf7ba603c376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
