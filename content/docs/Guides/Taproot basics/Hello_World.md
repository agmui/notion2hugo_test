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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDPFQSD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpN%2FEA9qfFQm0J%2Fc%2BuTECDFk%2BaB3JPkobXGgmenJzF%2BAIhAINyPHhDVlMLxwR3aVz5tlgJyqtRcGbHs3EDvh%2FdNrVkKv8DCGoQABoMNjM3NDIzMTgzODA1Igy91V2r1Khjcm6J8LUq3ANKAv8hSrcYEjgjU7hxa5Dw87myBsHi7Fz0TQtIHuUx1NVsnZI%2Bi4LA5CcPF4OZp%2BTXtK4XrNja74s%2BeTY4SOygOpvionVWzsn46BjA%2FnKAkGkp1n%2FGLzoj3%2Bx8%2FLmjnVwJH3XQp6Kt3dAbiHuI15UXmrbHhjto4EsNvm4IMuzXEPqVzOyLi0zUNSSSFFT2HaiNN%2FYCy6ZZ%2FAOsME%2FwB92X%2F3pUx6dEi98QE9mMobebYBB2pUtfdFSIszLqPHOq8x8i76CntcQcF6LTAgPL96WxTier%2FI8RTl0uxLoak8zklnWeQFJkC%2B%2BFUROfWlz09OdzLLDf5JtERERZ91T9IXEGjOMZAyt%2FDcNuujAU%2Bvzy%2BKf6CSDmiTPpch7VGs4I%2FJ9Fh5Tv%2BpDFw8BzY2DiGkp8cRuaj1sHM8%2FUju10MHE4DdrwnF%2B7fi9a8mQGIT2OdKs3hgmivlGS9o%2BgvKCGVJ0DG0UIEXHeFColhgL9UkBdUNlpGfjo%2BottQ%2F%2FibUanqf3HNOCIC7HRnXSSt7FbqyYv0f9y08Tcvw66FLSeiFRLF%2BoohUqPmUC1saKciddg2gEqVQpAXabLETgRRn24Ijiv6AIEv62Jw1YKg49qGkBtQAWnGA%2BHAAnDUTTc6TDZ9YbHBjqkAWFo2eYrGzVtq4oqsRCBJRhwsv5fZ%2FK5sSr%2FmATttrUCsvB2aHmtayG5rVoNjagE3iU9RtwYgRyAVVwk63%2BCCoAIWmDtrKCg%2FxcMqLu3ru4S%2FSfonYtK%2B2sbxLmnliOzOF1XPkvCKxJw75iJ8amQs1eTRa%2BarwH3WiMxBFegHykphuFWxEQZuvSMyGYnVZhLrZmoktNG6ep1WC7U%2FnZFlb3QrKK%2F&X-Amz-Signature=05c2d332a24e3a09d67bb0a55ec2a33130a126331f2131ae05c7f4d819691b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDPFQSD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpN%2FEA9qfFQm0J%2Fc%2BuTECDFk%2BaB3JPkobXGgmenJzF%2BAIhAINyPHhDVlMLxwR3aVz5tlgJyqtRcGbHs3EDvh%2FdNrVkKv8DCGoQABoMNjM3NDIzMTgzODA1Igy91V2r1Khjcm6J8LUq3ANKAv8hSrcYEjgjU7hxa5Dw87myBsHi7Fz0TQtIHuUx1NVsnZI%2Bi4LA5CcPF4OZp%2BTXtK4XrNja74s%2BeTY4SOygOpvionVWzsn46BjA%2FnKAkGkp1n%2FGLzoj3%2Bx8%2FLmjnVwJH3XQp6Kt3dAbiHuI15UXmrbHhjto4EsNvm4IMuzXEPqVzOyLi0zUNSSSFFT2HaiNN%2FYCy6ZZ%2FAOsME%2FwB92X%2F3pUx6dEi98QE9mMobebYBB2pUtfdFSIszLqPHOq8x8i76CntcQcF6LTAgPL96WxTier%2FI8RTl0uxLoak8zklnWeQFJkC%2B%2BFUROfWlz09OdzLLDf5JtERERZ91T9IXEGjOMZAyt%2FDcNuujAU%2Bvzy%2BKf6CSDmiTPpch7VGs4I%2FJ9Fh5Tv%2BpDFw8BzY2DiGkp8cRuaj1sHM8%2FUju10MHE4DdrwnF%2B7fi9a8mQGIT2OdKs3hgmivlGS9o%2BgvKCGVJ0DG0UIEXHeFColhgL9UkBdUNlpGfjo%2BottQ%2F%2FibUanqf3HNOCIC7HRnXSSt7FbqyYv0f9y08Tcvw66FLSeiFRLF%2BoohUqPmUC1saKciddg2gEqVQpAXabLETgRRn24Ijiv6AIEv62Jw1YKg49qGkBtQAWnGA%2BHAAnDUTTc6TDZ9YbHBjqkAWFo2eYrGzVtq4oqsRCBJRhwsv5fZ%2FK5sSr%2FmATttrUCsvB2aHmtayG5rVoNjagE3iU9RtwYgRyAVVwk63%2BCCoAIWmDtrKCg%2FxcMqLu3ru4S%2FSfonYtK%2B2sbxLmnliOzOF1XPkvCKxJw75iJ8amQs1eTRa%2BarwH3WiMxBFegHykphuFWxEQZuvSMyGYnVZhLrZmoktNG6ep1WC7U%2FnZFlb3QrKK%2F&X-Amz-Signature=44fd9f38492d575aa5077816746ff3ba1f4d641efb7e1cffb8c654fe191dda31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
