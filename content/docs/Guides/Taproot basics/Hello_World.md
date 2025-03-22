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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAGPIABZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHbZ8tx%2F4SJWxsz9t5wTIhrmDJdomm8rSNcU4pa5pdcjAiBbOgQtSnIyA8JpUHkkVhT%2Fr%2FBWN8MA3nBu2pPYOWwdaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjee6JbDIByAGZCH6KtwDT9WxdTD1sAgt1nQDqaX9oAwVDaqkI%2B1ESEKZFT5OwPFBQiKviDuf0LuKi7H7vYsR7qvaFi%2FbkOdguE9jownlEq5BUhctzLjnb%2FbV6JwfGuGdXq512f%2FN%2B%2BEj%2FipaA9udTw2f6UTHKY4hiid4eAd5uPTEIiFSEms%2Boq3q8NGcxRYGbvgXGbroxdSXzJo038KITveD8ryjZ8NLQWXqaAmiaU4Nqg0ig7nIpHi7ljwAgU2ceztOotN2m04nOA3hv8ggeYY0GV8huVlxzy8Hgp0idAyFM%2B0Kx05hRwPR%2FM5I%2BFlvfAunrPwlAsOKTgTlhocVoF74u8yx6dnxakHfXfyUSbhV0PfmMpqerMNqQQRBOu%2F7O3sNWUrwFNPVmuzC7f36l5jDQ0K1s%2FwS077VfBbueVY%2BGRyqj4WPE3%2BS60orjCtKaNV7ILLS3ZbbaU7t7f6cmD%2BxL%2Fc%2BW8G6K7EYVT%2B4B4zXwmFho1mFvkpki%2Fqja5%2Fpt11b27ueqeyhwLFO2WUssTXo%2F%2FOIucJ%2FuObiDe880vur%2BM%2F8xXuo1Vdq%2FrcOwT%2FhayfgsNjrOeIfs49TrzdWjzw6EFXaPH6fgHP1VITT39ZYnB8925QWMulwZa4%2F5V5Jw5KWbJhBlWNF2ZUw5uf4vgY6pgGoGQPHrfAFFh%2BjUQ%2B%2Fj82dEs1jzqL9hbsLhvffMH0mXLYeCaFtB0aKB4dWArk%2B2picnCL7iCj3tOmnZcK8IKRT8bAE68h12pd%2FHiZfRrwf45mRijdnthPx%2Bz86mv1Fzh9vojnjOt8%2B54Ftln5Lr8CaozsyB1B9uCmDk20h%2FBy%2FRS7WycLiAbyOleV2Y4hWjZQxSOXQP3dTO%2FpVGp24dPEZgiehqaJM&X-Amz-Signature=01e606765d620679f922cbdad6ebe235830c522f8e7feb614243760ffbb0f54f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAGPIABZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHbZ8tx%2F4SJWxsz9t5wTIhrmDJdomm8rSNcU4pa5pdcjAiBbOgQtSnIyA8JpUHkkVhT%2Fr%2FBWN8MA3nBu2pPYOWwdaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjee6JbDIByAGZCH6KtwDT9WxdTD1sAgt1nQDqaX9oAwVDaqkI%2B1ESEKZFT5OwPFBQiKviDuf0LuKi7H7vYsR7qvaFi%2FbkOdguE9jownlEq5BUhctzLjnb%2FbV6JwfGuGdXq512f%2FN%2B%2BEj%2FipaA9udTw2f6UTHKY4hiid4eAd5uPTEIiFSEms%2Boq3q8NGcxRYGbvgXGbroxdSXzJo038KITveD8ryjZ8NLQWXqaAmiaU4Nqg0ig7nIpHi7ljwAgU2ceztOotN2m04nOA3hv8ggeYY0GV8huVlxzy8Hgp0idAyFM%2B0Kx05hRwPR%2FM5I%2BFlvfAunrPwlAsOKTgTlhocVoF74u8yx6dnxakHfXfyUSbhV0PfmMpqerMNqQQRBOu%2F7O3sNWUrwFNPVmuzC7f36l5jDQ0K1s%2FwS077VfBbueVY%2BGRyqj4WPE3%2BS60orjCtKaNV7ILLS3ZbbaU7t7f6cmD%2BxL%2Fc%2BW8G6K7EYVT%2B4B4zXwmFho1mFvkpki%2Fqja5%2Fpt11b27ueqeyhwLFO2WUssTXo%2F%2FOIucJ%2FuObiDe880vur%2BM%2F8xXuo1Vdq%2FrcOwT%2FhayfgsNjrOeIfs49TrzdWjzw6EFXaPH6fgHP1VITT39ZYnB8925QWMulwZa4%2F5V5Jw5KWbJhBlWNF2ZUw5uf4vgY6pgGoGQPHrfAFFh%2BjUQ%2B%2Fj82dEs1jzqL9hbsLhvffMH0mXLYeCaFtB0aKB4dWArk%2B2picnCL7iCj3tOmnZcK8IKRT8bAE68h12pd%2FHiZfRrwf45mRijdnthPx%2Bz86mv1Fzh9vojnjOt8%2B54Ftln5Lr8CaozsyB1B9uCmDk20h%2FBy%2FRS7WycLiAbyOleV2Y4hWjZQxSOXQP3dTO%2FpVGp24dPEZgiehqaJM&X-Amz-Signature=d786cf92cde78a72bf929f3de0fdce2a4b863f2826a9324e1943a230d44d4e82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
