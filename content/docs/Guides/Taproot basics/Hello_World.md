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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJ5AW4J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCALCs6s0eJdj9b8Gc%2BKpbZ%2FPgTuzn3Llqr0wbuiyDj7gIhAJMRupX6GqXliGp6fGmaxUoT6Ufh34Qnu2xOsYVF6LXHKv8DCF0QABoMNjM3NDIzMTgzODA1Igwkz2WBv%2BnMlTOsqrsq3AM6nGTRA0nFWol9hSbZIvQcJ3%2F%2FahlkwVNALaXlcaQXJjC20mN1nCEXsvkMyyZ52yQrkQNLlA%2B%2BcXQJiPj1DoBu532J98Pta4y5P08V6qBkBvZIo3wM2YrS%2BUTsLErco94mpkCTTpN6U83gcSck1P1zwnfZFEloYnYGw4Wy8NmNp%2BLiXQwm4KbJyDJHSOACvggqEEUMNc5AKf2djqL6Bbv7dfLwg6Wudz%2F%2Fm6Pz2%2FGs8K0rpRSQuD2TtNyOrOvQ2zVJX5f5hUgnO%2BbkXaxDen%2BSCzBmWUR%2F4pjBPAOVG8gqs1FGXU3JOwFooM8eEiFgYzMf11jBO%2Bn%2FieuGTHZYwejzqc%2FwoqnLyDClvHmpPnIGIhb6Gke49%2BY0pIzdbY1E3RP9FqwqNBSLGncNUJydYf%2FSOApP04GzR9Kq3w9g5lfKxYKGHx8H%2BxP7IVyH4a4x9cB1Hbto6GKkuKWm7q98g6INAEFBrkseLsh00u7zJEHntnIOLH76gsJmaGgOJui7Qm13W3X1g3ghCxG7bk1XSbwd7Ar%2FsuOYQIDaRoBYsHREp66GgPM00g7UawLphDXyaVzWg4IU6Wx0K%2F2M5MbW4AYSsalod9gtGn2VGql4g0Qq9BwAYFBKFhjHmcSkAzD%2FtvzEBjqkAT7FtKGkzcI9ffulTncv7jcbTXaBHsScrZ%2F3GeSd2PsLIc406QJsyiqlJeeKujILMngTTxOi8ImOvj%2FdWTnRQYQaapVbKuBma4suei6ZLT%2Be%2FJgPoi67QTMonNwfMzWAA%2BfS5wrHrzRk9GlU9nx2Cv5H3hf12PhorB2FWQVED2KWcQz6NVWlrnIsyuPvhmw8yBZ%2BUaDUwJCttoTsWxWv%2BNPuZJQr&X-Amz-Signature=3c58ae8c0a0f6b5426532002ed8313dc16b00d9533bcce4b3da7b9ac4aa4669b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJ5AW4J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCALCs6s0eJdj9b8Gc%2BKpbZ%2FPgTuzn3Llqr0wbuiyDj7gIhAJMRupX6GqXliGp6fGmaxUoT6Ufh34Qnu2xOsYVF6LXHKv8DCF0QABoMNjM3NDIzMTgzODA1Igwkz2WBv%2BnMlTOsqrsq3AM6nGTRA0nFWol9hSbZIvQcJ3%2F%2FahlkwVNALaXlcaQXJjC20mN1nCEXsvkMyyZ52yQrkQNLlA%2B%2BcXQJiPj1DoBu532J98Pta4y5P08V6qBkBvZIo3wM2YrS%2BUTsLErco94mpkCTTpN6U83gcSck1P1zwnfZFEloYnYGw4Wy8NmNp%2BLiXQwm4KbJyDJHSOACvggqEEUMNc5AKf2djqL6Bbv7dfLwg6Wudz%2F%2Fm6Pz2%2FGs8K0rpRSQuD2TtNyOrOvQ2zVJX5f5hUgnO%2BbkXaxDen%2BSCzBmWUR%2F4pjBPAOVG8gqs1FGXU3JOwFooM8eEiFgYzMf11jBO%2Bn%2FieuGTHZYwejzqc%2FwoqnLyDClvHmpPnIGIhb6Gke49%2BY0pIzdbY1E3RP9FqwqNBSLGncNUJydYf%2FSOApP04GzR9Kq3w9g5lfKxYKGHx8H%2BxP7IVyH4a4x9cB1Hbto6GKkuKWm7q98g6INAEFBrkseLsh00u7zJEHntnIOLH76gsJmaGgOJui7Qm13W3X1g3ghCxG7bk1XSbwd7Ar%2FsuOYQIDaRoBYsHREp66GgPM00g7UawLphDXyaVzWg4IU6Wx0K%2F2M5MbW4AYSsalod9gtGn2VGql4g0Qq9BwAYFBKFhjHmcSkAzD%2FtvzEBjqkAT7FtKGkzcI9ffulTncv7jcbTXaBHsScrZ%2F3GeSd2PsLIc406QJsyiqlJeeKujILMngTTxOi8ImOvj%2FdWTnRQYQaapVbKuBma4suei6ZLT%2Be%2FJgPoi67QTMonNwfMzWAA%2BfS5wrHrzRk9GlU9nx2Cv5H3hf12PhorB2FWQVED2KWcQz6NVWlrnIsyuPvhmw8yBZ%2BUaDUwJCttoTsWxWv%2BNPuZJQr&X-Amz-Signature=435cc68cdac2fae3e658968973b71a72c7472f4846fe7e175556870bae49a466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
