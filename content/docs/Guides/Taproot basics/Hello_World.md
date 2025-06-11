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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BNPUUL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIELmXCn0JEs4Cwtv0fEvqoDGFg%2FHIxTDEUPWHn7WcR1QAiA8uIltBnI7nGRE9XZlJjPwsjFfXjutjCzv0MlsrROrNCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVCeDB%2FgWcC0glbKgKtwDYqRv2AMqPZAhxkRUhICI6inPl7Ax%2BSv%2Bke%2Buhn%2BbbqZY6SMrpOhmIivUmK0A565%2BVASFsyF%2FhrJysj4KUIHgi7EdxMXWrcAoA3IT2Dn%2FkBcg92PYSIVB6i1UCB3K4FY4UvaD0ZZsqpiGkHQZMqLcx79b5FcMMFe5YpfZ7I32gO3l2Z9lAWJ2lqDu2PFbrzcvJXNjraOZA7VNrO%2F5QwN9r3MbDxioaeMwQLCthKJi4pyIztQ2x%2BWvkt0izffNIQsafwJF6NMCe%2BnwCRYTCMVT1OWudbHDT%2Fax0vgXMSLOQP18l1RvpHgzCjL%2BWv%2B22dwn2iMZTrfpbTXRYwig1hGHpGT98oSbwk%2BITycefVjbUecUcac9nZ4aRZ13z9zAwZvTIejg6uBVhG1M7Kp%2FK8cHKlakzZZ9qByTXnDO%2Bd3YT0c2S8bICX5kMqrISGISXLjQwes5SHgeOwmp0F0j%2B4SZD%2BPt%2BVgj8NO4Bs%2F7RMR8xtiQFRJFmiuVwYeEzjdgHeBKBXVddtFnmiUSeKF6nWHfLORRHaZ13fkY%2BvOpb8GPGhR9q7HUXiYAIULCjsJkikR9LnKcKA72g0LTpBRJJis2cQlfFlm8afn8FR7WwWgCcWulp0Od31H7UgjikZMwkpqnwgY6pgHyKqQw71pUHs%2B3LvAjAdM4HgzBICkuhxHe5BgvQwVSRj4J0Jk3xSjkWrFI1hEAiMre7Kp9ciIolJcEFDTjetaUTsqYKAFbFhobXpLk8RkVGbJbnJDKVZlD9iGGPtPhvaAkKGc9atPFil8grd6ms0IvOJ%2FxdZ3fLXD%2B2cXIiXRYsZqjdAycw0YAX3Rcbu3equSS3ahruTqR265bgf%2BTi0ZadLADHBpz&X-Amz-Signature=f2f010c62b6300f35a66acde99f05b176393313c12fe64dde4f941e5c44eec71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BNPUUL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIELmXCn0JEs4Cwtv0fEvqoDGFg%2FHIxTDEUPWHn7WcR1QAiA8uIltBnI7nGRE9XZlJjPwsjFfXjutjCzv0MlsrROrNCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVCeDB%2FgWcC0glbKgKtwDYqRv2AMqPZAhxkRUhICI6inPl7Ax%2BSv%2Bke%2Buhn%2BbbqZY6SMrpOhmIivUmK0A565%2BVASFsyF%2FhrJysj4KUIHgi7EdxMXWrcAoA3IT2Dn%2FkBcg92PYSIVB6i1UCB3K4FY4UvaD0ZZsqpiGkHQZMqLcx79b5FcMMFe5YpfZ7I32gO3l2Z9lAWJ2lqDu2PFbrzcvJXNjraOZA7VNrO%2F5QwN9r3MbDxioaeMwQLCthKJi4pyIztQ2x%2BWvkt0izffNIQsafwJF6NMCe%2BnwCRYTCMVT1OWudbHDT%2Fax0vgXMSLOQP18l1RvpHgzCjL%2BWv%2B22dwn2iMZTrfpbTXRYwig1hGHpGT98oSbwk%2BITycefVjbUecUcac9nZ4aRZ13z9zAwZvTIejg6uBVhG1M7Kp%2FK8cHKlakzZZ9qByTXnDO%2Bd3YT0c2S8bICX5kMqrISGISXLjQwes5SHgeOwmp0F0j%2B4SZD%2BPt%2BVgj8NO4Bs%2F7RMR8xtiQFRJFmiuVwYeEzjdgHeBKBXVddtFnmiUSeKF6nWHfLORRHaZ13fkY%2BvOpb8GPGhR9q7HUXiYAIULCjsJkikR9LnKcKA72g0LTpBRJJis2cQlfFlm8afn8FR7WwWgCcWulp0Od31H7UgjikZMwkpqnwgY6pgHyKqQw71pUHs%2B3LvAjAdM4HgzBICkuhxHe5BgvQwVSRj4J0Jk3xSjkWrFI1hEAiMre7Kp9ciIolJcEFDTjetaUTsqYKAFbFhobXpLk8RkVGbJbnJDKVZlD9iGGPtPhvaAkKGc9atPFil8grd6ms0IvOJ%2FxdZ3fLXD%2B2cXIiXRYsZqjdAycw0YAX3Rcbu3equSS3ahruTqR265bgf%2BTi0ZadLADHBpz&X-Amz-Signature=bfe9a61d496ee7b6a2435ecb2683d9640370604025a101914e40bfb04960e711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
