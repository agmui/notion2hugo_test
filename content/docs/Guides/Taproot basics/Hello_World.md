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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQJKHOR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzsdMj3SiQMrEO4gITMr3OIVwDAgsyvGWSrgu9fvC5RAiEA1au5V%2FyEO%2B372cpTHKTp4QHwxAnrDlZcRCIBmWzrU4oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDObjkFPmeju%2BrPZRdircA1AY60v6%2F1r52JA8lB79GH5to5xzU7XvEehntR0zWB0SqfTqtx1TsyvywnMo1ZJBy%2BF1rIHF4UurDDN3kL6aXE0OZahrWAaqGeeDtUzVh%2FPmL%2BTfZuoVFMz1ZbQ%2FE3uPfsUltQS0WErIkSsoFozNO2kLnZCeVbxgHaWt9%2BGwhXMwZXw1QRWihDDcSMHx0DebqA6kyWFpMoqY0Ft%2FUK%2FZO8D65Z2vHM%2Fsaz8Wbfr8UbDxic%2BZuJEtJ84%2Bi8ROFhHNcXlX4GxBlpIZ0xBy8WcWbb1tlt6V2%2B%2BgPi9WTp14VArffevH8%2Fy7w4%2FI24%2BggAdVO4HpzsAcYclFnFWHbf%2F%2FVqh44YMU7ycFAENy%2Fe%2BW6JS0iSCn%2BPQVK58ZpbiTA3Xsf9JwYshOgxUO5aEi6xp4btBHrZp2SQ%2FgS0XWjY0%2F088NKosAS9ljaoiVJu3pVaFu1eDHNyPQHLfr4c6piilwYkp%2FdJFmtEsGQRC19aflweLx8YAp%2Ftr7mmyUByS7AygRLDkIEFx8X3gr586s3nHAzpdivWwbFjexQ1G0N9NGvGdSvbTud0mJiDZZ40SNbVPSh78U2DSr60pwTPH3yJnD%2B7lzcrrWgTQzF7xZZfo8Vl0vEWVQZWuNKbbEBc8ZMJz43MEGOqUBJeOFUO0%2FFGgY2I4hWCUx%2FiJMb8QDnXBTRTUKfKJ4UZAQqgO3iXXCKhDPjwl1fBMU8t%2FeUFgvuTqtfoX%2BRqXz%2BmtApR5ajLmyOm%2BQBwxjP1oQ4MrQI9CVACrXe%2FuhK0aF1F1Ik7jGLkjk5HeHl5o1EjpHxIYsHSbAe9MvXGZfEISMZTu99BMq%2FAHVp21Uqr7UdDMpgMx4hTG7h4iElPAATCAeI8bz&X-Amz-Signature=475c33a7cab4516aae7e1ee209cf084a4d9b2d6811d5e5e0aad357995ce71f14&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQJKHOR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzsdMj3SiQMrEO4gITMr3OIVwDAgsyvGWSrgu9fvC5RAiEA1au5V%2FyEO%2B372cpTHKTp4QHwxAnrDlZcRCIBmWzrU4oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDObjkFPmeju%2BrPZRdircA1AY60v6%2F1r52JA8lB79GH5to5xzU7XvEehntR0zWB0SqfTqtx1TsyvywnMo1ZJBy%2BF1rIHF4UurDDN3kL6aXE0OZahrWAaqGeeDtUzVh%2FPmL%2BTfZuoVFMz1ZbQ%2FE3uPfsUltQS0WErIkSsoFozNO2kLnZCeVbxgHaWt9%2BGwhXMwZXw1QRWihDDcSMHx0DebqA6kyWFpMoqY0Ft%2FUK%2FZO8D65Z2vHM%2Fsaz8Wbfr8UbDxic%2BZuJEtJ84%2Bi8ROFhHNcXlX4GxBlpIZ0xBy8WcWbb1tlt6V2%2B%2BgPi9WTp14VArffevH8%2Fy7w4%2FI24%2BggAdVO4HpzsAcYclFnFWHbf%2F%2FVqh44YMU7ycFAENy%2Fe%2BW6JS0iSCn%2BPQVK58ZpbiTA3Xsf9JwYshOgxUO5aEi6xp4btBHrZp2SQ%2FgS0XWjY0%2F088NKosAS9ljaoiVJu3pVaFu1eDHNyPQHLfr4c6piilwYkp%2FdJFmtEsGQRC19aflweLx8YAp%2Ftr7mmyUByS7AygRLDkIEFx8X3gr586s3nHAzpdivWwbFjexQ1G0N9NGvGdSvbTud0mJiDZZ40SNbVPSh78U2DSr60pwTPH3yJnD%2B7lzcrrWgTQzF7xZZfo8Vl0vEWVQZWuNKbbEBc8ZMJz43MEGOqUBJeOFUO0%2FFGgY2I4hWCUx%2FiJMb8QDnXBTRTUKfKJ4UZAQqgO3iXXCKhDPjwl1fBMU8t%2FeUFgvuTqtfoX%2BRqXz%2BmtApR5ajLmyOm%2BQBwxjP1oQ4MrQI9CVACrXe%2FuhK0aF1F1Ik7jGLkjk5HeHl5o1EjpHxIYsHSbAe9MvXGZfEISMZTu99BMq%2FAHVp21Uqr7UdDMpgMx4hTG7h4iElPAATCAeI8bz&X-Amz-Signature=c72cac9f6a0420a9551d7226ba2292178f660d81c0499a156683cea4e1e48ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
