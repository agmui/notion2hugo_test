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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KR4IXD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGKLf0hX2TwGbRsf%2FMbhXK7u6vREAYusvPA3Dn4jKBlVAiEAumZh3UL%2BUzK79HuFE9fEmh1L2UafpZuo4EOdRQGWKmoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFgpbbxhbHY9pefLSrcA6VE9Gl5ln16g82byA5afU8c73bCWK084w8QaEJCcU8kJWg72zLEgklbh6H9DkhfA61gqeiKYkgCviwvz%2BIxXNkFHgpg1y2rUp7OzcpqzxbK%2FUqcSMJoZmVwQXv6s5re4FdqiHyJdxU2KEkqLHP9nrwNNxf3YN3GOgrAwPGnl%2Br%2FROp5On0dXhZZb2GDd3qfpL9oiPBpVINSJ%2FslGzd73BiCwmXr82Tu0YpYVUkvCdWPxGsZXcmEo6l2e2OomvujvH8KvBDsf4Ye6gczgRslsOJ3uPHf7oRRXjuqGNyOgMFbznGJ8DM9JbQtCUrVTV7ESYcg4npfQla%2FOIviYvf9MTR1HnwNONVicXHhhg%2BgZex8aty6KIg2WTB%2FuW91EJsmDxcddIuzAKs2sgPwfW2qcLdPweU4x2nucNZKuacEnRQUXMPGnL%2FatSpziAunxXHTU%2FIRmfCELpJAaxZIGSTqwKp0SLy12E6xvMPfRdQyLfAxvfEc6NnA4at4oQ1Pwf7Xw7pOT6BvaK7Q1Hv0bi9Wjs1bsdMSwIMcV10BSMETMy5a5eQIxuFtCfbvUHs1v1Zm%2FpFyXXMKsadzOY34qQEuM%2FFtcT72zWQdDtfp2vATeqP4rccS70MCHq4kyqWrMMWG1sAGOqUB%2BcENzoAC4YdHZjUaoIU4c9CfQFNP3crFEPu0frva7jP4G045yjX1kHDRQXiRaCWz%2Bcy%2BPfO%2FlqwCUAnAH0H6s3eIAC94d95iY1pAfoGZekgA8O%2Fq6EEXRGp8hMQh9jh2nWOSTOHjH6mcSKFWPJs%2F%2BUSO9OYum0ix%2Bc0dLMGRrqqLJNv3wx7XhFE1hVbLBHOIZ7%2B87eScJR5gnkneCdbMCjtKFLrV&X-Amz-Signature=d88c0920e64a8985ca68aa2f88e7a46ed3622b8c003a7584c60d6f257a10aea3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KR4IXD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGKLf0hX2TwGbRsf%2FMbhXK7u6vREAYusvPA3Dn4jKBlVAiEAumZh3UL%2BUzK79HuFE9fEmh1L2UafpZuo4EOdRQGWKmoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFgpbbxhbHY9pefLSrcA6VE9Gl5ln16g82byA5afU8c73bCWK084w8QaEJCcU8kJWg72zLEgklbh6H9DkhfA61gqeiKYkgCviwvz%2BIxXNkFHgpg1y2rUp7OzcpqzxbK%2FUqcSMJoZmVwQXv6s5re4FdqiHyJdxU2KEkqLHP9nrwNNxf3YN3GOgrAwPGnl%2Br%2FROp5On0dXhZZb2GDd3qfpL9oiPBpVINSJ%2FslGzd73BiCwmXr82Tu0YpYVUkvCdWPxGsZXcmEo6l2e2OomvujvH8KvBDsf4Ye6gczgRslsOJ3uPHf7oRRXjuqGNyOgMFbznGJ8DM9JbQtCUrVTV7ESYcg4npfQla%2FOIviYvf9MTR1HnwNONVicXHhhg%2BgZex8aty6KIg2WTB%2FuW91EJsmDxcddIuzAKs2sgPwfW2qcLdPweU4x2nucNZKuacEnRQUXMPGnL%2FatSpziAunxXHTU%2FIRmfCELpJAaxZIGSTqwKp0SLy12E6xvMPfRdQyLfAxvfEc6NnA4at4oQ1Pwf7Xw7pOT6BvaK7Q1Hv0bi9Wjs1bsdMSwIMcV10BSMETMy5a5eQIxuFtCfbvUHs1v1Zm%2FpFyXXMKsadzOY34qQEuM%2FFtcT72zWQdDtfp2vATeqP4rccS70MCHq4kyqWrMMWG1sAGOqUB%2BcENzoAC4YdHZjUaoIU4c9CfQFNP3crFEPu0frva7jP4G045yjX1kHDRQXiRaCWz%2Bcy%2BPfO%2FlqwCUAnAH0H6s3eIAC94d95iY1pAfoGZekgA8O%2Fq6EEXRGp8hMQh9jh2nWOSTOHjH6mcSKFWPJs%2F%2BUSO9OYum0ix%2Bc0dLMGRrqqLJNv3wx7XhFE1hVbLBHOIZ7%2B87eScJR5gnkneCdbMCjtKFLrV&X-Amz-Signature=a47f2687deafbb0a9be2b2439dca91ae3960ab91b5bc3377491b598cdd717856&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
