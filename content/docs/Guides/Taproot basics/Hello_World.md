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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNEWTBL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbVn12pxRiGqUGTFTJIjxR3rs7Ru%2BeSvBN0k%2B4w6kbDwIgEstx2C6O6AoskIEorOLcvSY%2Bs2cjUrrN4DNIbV1OK5EqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFABbC4xbZUROyhiNCrcA4NmXCctOaLjUjDtGTocSsj95kcVWmhL%2Fs2GkFtxx8YA%2BpsDZTJJZairqHS0kfYgQf0XMwOn8%2B5BrYEUXTtnyfqKT7MF8st1pBmqXm7ttsVJNyKOYV%2BuPW9hIs3mmZTwukPFlJQcZxapFU4CmGfCrcwC0IUExLfjDxUAqy100lUCvgY0fXiv4VpaTjfQ9oTrDFlil25PY5kaYBns68QSYOZPgwXegYQfl7JEx09tnii%2F%2BWgDFnHj4sIodDo%2B5sMjvvqf7mCzf2DYu%2FlvRJg8kAoh7NL5T9fhspvfTsLvWMFfByjA%2FN2pVjwavfgQ%2FGArxq5HffG%2FzrSCTMWaRbsDmORuy326VE3pGqAmTzSClJqGD4NOB78yZ8JzCMfwz9JoDQDbNhITeNYuBMoL7OefuclbQ%2BSQc5MoV6bjfDHc37540%2BAoz%2Fvc4yJhwFlFQU%2FtX4eC%2B0IEuDkHnnh141Y4aj2DnOTiNyUk0uNRSGL1XEU508X3jfxUkjiqLSKDA2h0RcVNSGCUlIWEf9SObn9fpxsoJTh2VopG0p%2BiMD0KlaDG%2FZs8cxGFP%2BBmEBphnq9zf7CcXONqcmvfSd5LXX%2Fuqu8iQSyP0znozWb%2FG9rMW2SItPrZuSVDrZhafMgPMPS8lsMGOqUBuD1Jz4gYYN3GdYRbhNNWQtvQcHo3XsA0V7fwGN59nVf278fpJ1K0jNJZKVP0dO9uv8hcS%2BoKuiRti21W9NyAL%2BxtpmKkLpzMiYSOVIz%2BrLsKTU0jV84qCikO7VyLx%2FFXUQqY7Gd21d5OTBhmAJReo0ETUm2fi1Su6JiigaQ2pWeZqWCTxewo6x8pVukuFSw0eB4nInzmsjQUgCFWflPJMUl0fufA&X-Amz-Signature=e4a096a3c39c5bd8327eabdde28f75b8b194719933162cfa0f2f62b429768f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNEWTBL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbVn12pxRiGqUGTFTJIjxR3rs7Ru%2BeSvBN0k%2B4w6kbDwIgEstx2C6O6AoskIEorOLcvSY%2Bs2cjUrrN4DNIbV1OK5EqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFABbC4xbZUROyhiNCrcA4NmXCctOaLjUjDtGTocSsj95kcVWmhL%2Fs2GkFtxx8YA%2BpsDZTJJZairqHS0kfYgQf0XMwOn8%2B5BrYEUXTtnyfqKT7MF8st1pBmqXm7ttsVJNyKOYV%2BuPW9hIs3mmZTwukPFlJQcZxapFU4CmGfCrcwC0IUExLfjDxUAqy100lUCvgY0fXiv4VpaTjfQ9oTrDFlil25PY5kaYBns68QSYOZPgwXegYQfl7JEx09tnii%2F%2BWgDFnHj4sIodDo%2B5sMjvvqf7mCzf2DYu%2FlvRJg8kAoh7NL5T9fhspvfTsLvWMFfByjA%2FN2pVjwavfgQ%2FGArxq5HffG%2FzrSCTMWaRbsDmORuy326VE3pGqAmTzSClJqGD4NOB78yZ8JzCMfwz9JoDQDbNhITeNYuBMoL7OefuclbQ%2BSQc5MoV6bjfDHc37540%2BAoz%2Fvc4yJhwFlFQU%2FtX4eC%2B0IEuDkHnnh141Y4aj2DnOTiNyUk0uNRSGL1XEU508X3jfxUkjiqLSKDA2h0RcVNSGCUlIWEf9SObn9fpxsoJTh2VopG0p%2BiMD0KlaDG%2FZs8cxGFP%2BBmEBphnq9zf7CcXONqcmvfSd5LXX%2Fuqu8iQSyP0znozWb%2FG9rMW2SItPrZuSVDrZhafMgPMPS8lsMGOqUBuD1Jz4gYYN3GdYRbhNNWQtvQcHo3XsA0V7fwGN59nVf278fpJ1K0jNJZKVP0dO9uv8hcS%2BoKuiRti21W9NyAL%2BxtpmKkLpzMiYSOVIz%2BrLsKTU0jV84qCikO7VyLx%2FFXUQqY7Gd21d5OTBhmAJReo0ETUm2fi1Su6JiigaQ2pWeZqWCTxewo6x8pVukuFSw0eB4nInzmsjQUgCFWflPJMUl0fufA&X-Amz-Signature=47b40b2c4dbe3a416fa3a047475e26bd29a3933468d4e24d8ec2c312bd56cea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
