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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6XE5SQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIG2aRd%2FCmTlHH8VHe35P5ciav9tXbgQBysosxAuG6ccCAiBz%2FsrcRAFOKABb%2B7JY4c23ANtUaVRJqb%2F%2FDY7BGRtcEyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVo%2B1vdLHy%2BWFiI2KtwD8qXcrkQkhyH0YM0ke4UZCYiFzOiVfJj7eFdikRtUfbtAv67cFVOO9TDp6uSPtQmLhiMM2ejs3vyjIpEebaX7icrf%2BxdbJsqTyhMSJ7mhl%2BdxJNNtCVV1PM97L1r8510kfM6uh7PVes6tIebZnvTWmyJ4BllR5zZHFRDTnVGw5BamvoWRGUJ0XW3XQh%2FtnROCRB1SDKdWuRWDdRdYSxZMkXMb%2BNZcOwwZ9iTJaurlK3fhAoPyIa%2BjCa5zS%2BoHQqLFeFSlLxWhdS3pvX6TiDXECvQsHxTKeajOuQM6NLUh1GTVvxhnPc%2B%2FA4tv4QnAHdxn2z7uu17xcXwwCUO19UCIjjsPXmMAQy8pswVI6%2F9yP6gH5jIXxkSPVQkJhSuRWf0ahMWRVX9fi%2BTYgXDBd9sgNnRJ%2BS0mWm3wrRcl%2FQtmxZhfsIGUGeCJg8lSiAY4%2Bh1Kq8rhHDeQ7DJMWQfM3jX5igxzQZRxaTofvMnxzppZHOkhEBO7nXb9dQNn3n8Deu6QdRQaVHT61E5XqMZbRMbL9uY3eLMC3xrjc6mwkRQeG9nQqjdDoEhh2SdOFJxAFV0SldifwNWHEhfVxdrWEF%2FjEP3LwNhS0fpaRfv7KB6Z%2FogkvOsZ75Raaeogo2IwoeyQwQY6pgEJJBZkYJ5Yn3qyvZYncm3WZJOqxaBxCw%2B6e1eEWRBGo0SHiKiCl4rS4c3cBlQRYrsR%2BFA3u6D2Z%2FmNAKvw3DeBMGNyUXrKEjT5m5wofTmSCakzwvmwONg%2FACFSqnpBRNVe8s8OSKrR3YIJD8LVvazSPXPQG0qJR93f6QObjUpsm9g7EVTXJ06%2FTS6Xizni%2BKfvDUNb0EixWpEpdtdHN3j2QX888HAM&X-Amz-Signature=2c4682dc47180ba63432cd33f37eb61461db20e8eeccfd9bc1436800488b2cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6XE5SQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIG2aRd%2FCmTlHH8VHe35P5ciav9tXbgQBysosxAuG6ccCAiBz%2FsrcRAFOKABb%2B7JY4c23ANtUaVRJqb%2F%2FDY7BGRtcEyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVo%2B1vdLHy%2BWFiI2KtwD8qXcrkQkhyH0YM0ke4UZCYiFzOiVfJj7eFdikRtUfbtAv67cFVOO9TDp6uSPtQmLhiMM2ejs3vyjIpEebaX7icrf%2BxdbJsqTyhMSJ7mhl%2BdxJNNtCVV1PM97L1r8510kfM6uh7PVes6tIebZnvTWmyJ4BllR5zZHFRDTnVGw5BamvoWRGUJ0XW3XQh%2FtnROCRB1SDKdWuRWDdRdYSxZMkXMb%2BNZcOwwZ9iTJaurlK3fhAoPyIa%2BjCa5zS%2BoHQqLFeFSlLxWhdS3pvX6TiDXECvQsHxTKeajOuQM6NLUh1GTVvxhnPc%2B%2FA4tv4QnAHdxn2z7uu17xcXwwCUO19UCIjjsPXmMAQy8pswVI6%2F9yP6gH5jIXxkSPVQkJhSuRWf0ahMWRVX9fi%2BTYgXDBd9sgNnRJ%2BS0mWm3wrRcl%2FQtmxZhfsIGUGeCJg8lSiAY4%2Bh1Kq8rhHDeQ7DJMWQfM3jX5igxzQZRxaTofvMnxzppZHOkhEBO7nXb9dQNn3n8Deu6QdRQaVHT61E5XqMZbRMbL9uY3eLMC3xrjc6mwkRQeG9nQqjdDoEhh2SdOFJxAFV0SldifwNWHEhfVxdrWEF%2FjEP3LwNhS0fpaRfv7KB6Z%2FogkvOsZ75Raaeogo2IwoeyQwQY6pgEJJBZkYJ5Yn3qyvZYncm3WZJOqxaBxCw%2B6e1eEWRBGo0SHiKiCl4rS4c3cBlQRYrsR%2BFA3u6D2Z%2FmNAKvw3DeBMGNyUXrKEjT5m5wofTmSCakzwvmwONg%2FACFSqnpBRNVe8s8OSKrR3YIJD8LVvazSPXPQG0qJR93f6QObjUpsm9g7EVTXJ06%2FTS6Xizni%2BKfvDUNb0EixWpEpdtdHN3j2QX888HAM&X-Amz-Signature=cdac8611bfa8377dc9c43bf8699edd09123e941943d95ae52527abb876fe43d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
