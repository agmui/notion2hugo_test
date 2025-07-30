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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DB57RAU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXW3cTNyIqRD6sZHPNnL1zXkLnLdrjH4P1XLUvpMbpLAiEA4jAeQN%2F0dVhAUoiqxw04EjIBT%2BdBbWI07PLFXYAL0YgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQtUe2l%2FlN8fiHGaCrcA%2BZpUmoAB05K17U70A8t7k%2BUuaUp3E2wNiZgI19xqwcbSnQhS90%2BpV4Rr2bcfz%2BZDYcrxF1f4PpRec39Ji1Pa0sZ4eRgbuSfDGoCKWMdI0JDOvEK1xGNwB3cDQP25l6VjqrtNVgi%2Ftm26gZL%2Bm%2BhjPzM0uERUEbnvNBCm3K6B2IPidH314wrS%2BoY8g%2FzGMCoPSZdb5%2BflTKWlTVVk41WmtQBOsfb3VkS7IDRdg%2FzfCBdmCQxVNlc1fAYRPEcgp5O2w77ylTKjStw7auNSyowKnoahswUafVfUW4EXpiz2khc0Qy5JIkUKtIp2HOn523dC2JBtHCiHJmYsCeMq2K0Y5HxvQ7aacbli1z8%2BI%2FfrwAnCFuayQAo10mHrcLS6XNXZPt3lD1kdHpVoTQqWpcddY1lJY3qsOSTN5s4yXKcJJwIlpH1vdtvdmy%2FZSQfZ7u1XeI6mLKljekZPKGQ7vrcMXyxfo90ft9n7UUDClUX2RHgaQ0MKik0I9H7bRpQt1MMluFBWeTOzV%2Fp9KDpzmENeEbUb6lvIQMMVv5OZJJ3WLSwgvbeIlGWAKySpSqNS%2Bz%2B0NnkgPLSBjFVsSlxX5htl2hKcpvzde360uCfIfMrYWTwI4Wp7Hbulc9QoOtXMJalqsQGOqUBEwBp0qUdn1J3cdL6G7x%2B2KyoioJ7QhxmIppu3qEUCvRWVxIR5w%2F5u3VtLEVJ%2F3D5aoPokkPst3nUWnzhDtRbE6HuaeS%2BoBHKc36uotd%2BhEn3qJKyWXr16m81OvJ9In6dBqItDQf%2BQ8YYcOUzguQnQQRS4zG25HGsIQG6YwP5VvnwHhIdnXdmpVqLCAKdrhPI2LAmnB4tiElyYaNYQ%2BtFXj6yhmPR&X-Amz-Signature=864ad0483d5af2342548f3f8c605638d036ed49afbbe5d8665d8ade308cd1de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DB57RAU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXW3cTNyIqRD6sZHPNnL1zXkLnLdrjH4P1XLUvpMbpLAiEA4jAeQN%2F0dVhAUoiqxw04EjIBT%2BdBbWI07PLFXYAL0YgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQtUe2l%2FlN8fiHGaCrcA%2BZpUmoAB05K17U70A8t7k%2BUuaUp3E2wNiZgI19xqwcbSnQhS90%2BpV4Rr2bcfz%2BZDYcrxF1f4PpRec39Ji1Pa0sZ4eRgbuSfDGoCKWMdI0JDOvEK1xGNwB3cDQP25l6VjqrtNVgi%2Ftm26gZL%2Bm%2BhjPzM0uERUEbnvNBCm3K6B2IPidH314wrS%2BoY8g%2FzGMCoPSZdb5%2BflTKWlTVVk41WmtQBOsfb3VkS7IDRdg%2FzfCBdmCQxVNlc1fAYRPEcgp5O2w77ylTKjStw7auNSyowKnoahswUafVfUW4EXpiz2khc0Qy5JIkUKtIp2HOn523dC2JBtHCiHJmYsCeMq2K0Y5HxvQ7aacbli1z8%2BI%2FfrwAnCFuayQAo10mHrcLS6XNXZPt3lD1kdHpVoTQqWpcddY1lJY3qsOSTN5s4yXKcJJwIlpH1vdtvdmy%2FZSQfZ7u1XeI6mLKljekZPKGQ7vrcMXyxfo90ft9n7UUDClUX2RHgaQ0MKik0I9H7bRpQt1MMluFBWeTOzV%2Fp9KDpzmENeEbUb6lvIQMMVv5OZJJ3WLSwgvbeIlGWAKySpSqNS%2Bz%2B0NnkgPLSBjFVsSlxX5htl2hKcpvzde360uCfIfMrYWTwI4Wp7Hbulc9QoOtXMJalqsQGOqUBEwBp0qUdn1J3cdL6G7x%2B2KyoioJ7QhxmIppu3qEUCvRWVxIR5w%2F5u3VtLEVJ%2F3D5aoPokkPst3nUWnzhDtRbE6HuaeS%2BoBHKc36uotd%2BhEn3qJKyWXr16m81OvJ9In6dBqItDQf%2BQ8YYcOUzguQnQQRS4zG25HGsIQG6YwP5VvnwHhIdnXdmpVqLCAKdrhPI2LAmnB4tiElyYaNYQ%2BtFXj6yhmPR&X-Amz-Signature=64ba0d688c00f8a1af893e93b39c14407d6fb06d96d895dc5a5c8378f0516ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
