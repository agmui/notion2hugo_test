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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6RSZNE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyuJ6BDfG4%2B3MfqLjq0sbnAw6CFvXPt5lWO11C%2FaM6IgIhAIVVoaDluNj2HvrWZptVffXGB0%2Fyf5pVsKn4AyY1RsxZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEftb4qEpF6GdwAoq3AMrPnguofzMo81uZRnkrLgorw9XDrtrYBmrottVh%2FVnLfNI5Uyp2MKR5iHvBeEdNA8qzqauaed1BvhB7p4Q%2F%2BGMlNGIf9a%2F5cfQ%2B8%2BskWibJmfdIEJDBMusQDFMygJ%2BHZegVxBP3PKPIYvOS8vemrhERLmd82vXnRfZfNsxYB6%2Fs7%2BvgrM3zmAQV4G16XmwqchORLjHHnp75V27N5jnehWi8SmT%2FvfqXk3csA64APiIxGb8uvSRQeB3EN4TsKymIIuGtStiC2yxXVoeQJcndmc3D6grClGXmeTnoWOxTWlY8iBpmTRUNca6oOOosn43vsL3gayIyPZwtNAK%2BwM6EqrOcsRxJdqOOx%2BmND2QdwJF6kOKgpP1xqjFNTlZpb3QTmluVVARS%2FA8Tk1qTPfPa97m7cv7M3SqvN6SRul7%2FfVR5NraOi%2FVQ1MrCST%2BZNlJYp1h23u1GnxfEzamJSnlNYBHjWyzXQ%2BLowGebXsVlGDnQIX8lWkX5nhkIETnhXAj0Ui2OF6p2jMiI8jJW6byvzqp4At7o5ijWLOiJlCa0DFBi3Pu%2B0WVbf1pnol2KcKPUxa7OHjU7CyCTjQeJAnUHdZIcoqHWCYCc1TuUkSl81fFK0KmXPhEz9c2%2FLylszCUiovEBjqkAVzmdjGpIkWbsLBcahOUR50a2GkwGD3IoQKdL%2F4s9qzV2ZAffJcMgS4PEuzES%2F1w6QsgIP0iD5o4gwob0UrmiUmc551Zk0OW97UJQMi7QJGlKXFWLQXES5i92n7PVoon2rI3ArW8spwPDXP1gt%2FPriTHlWpi21cMmOjhnFmAR5NS%2BuS65a8efEsMw4LsXDlGixSWrgHqJ1a7YXWqhRhOa5Ds8UZM&X-Amz-Signature=f258ec9db0aea1c28fae5b609b225e02f3185e74abd1bced1d6c9720c85565d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6RSZNE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyuJ6BDfG4%2B3MfqLjq0sbnAw6CFvXPt5lWO11C%2FaM6IgIhAIVVoaDluNj2HvrWZptVffXGB0%2Fyf5pVsKn4AyY1RsxZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEftb4qEpF6GdwAoq3AMrPnguofzMo81uZRnkrLgorw9XDrtrYBmrottVh%2FVnLfNI5Uyp2MKR5iHvBeEdNA8qzqauaed1BvhB7p4Q%2F%2BGMlNGIf9a%2F5cfQ%2B8%2BskWibJmfdIEJDBMusQDFMygJ%2BHZegVxBP3PKPIYvOS8vemrhERLmd82vXnRfZfNsxYB6%2Fs7%2BvgrM3zmAQV4G16XmwqchORLjHHnp75V27N5jnehWi8SmT%2FvfqXk3csA64APiIxGb8uvSRQeB3EN4TsKymIIuGtStiC2yxXVoeQJcndmc3D6grClGXmeTnoWOxTWlY8iBpmTRUNca6oOOosn43vsL3gayIyPZwtNAK%2BwM6EqrOcsRxJdqOOx%2BmND2QdwJF6kOKgpP1xqjFNTlZpb3QTmluVVARS%2FA8Tk1qTPfPa97m7cv7M3SqvN6SRul7%2FfVR5NraOi%2FVQ1MrCST%2BZNlJYp1h23u1GnxfEzamJSnlNYBHjWyzXQ%2BLowGebXsVlGDnQIX8lWkX5nhkIETnhXAj0Ui2OF6p2jMiI8jJW6byvzqp4At7o5ijWLOiJlCa0DFBi3Pu%2B0WVbf1pnol2KcKPUxa7OHjU7CyCTjQeJAnUHdZIcoqHWCYCc1TuUkSl81fFK0KmXPhEz9c2%2FLylszCUiovEBjqkAVzmdjGpIkWbsLBcahOUR50a2GkwGD3IoQKdL%2F4s9qzV2ZAffJcMgS4PEuzES%2F1w6QsgIP0iD5o4gwob0UrmiUmc551Zk0OW97UJQMi7QJGlKXFWLQXES5i92n7PVoon2rI3ArW8spwPDXP1gt%2FPriTHlWpi21cMmOjhnFmAR5NS%2BuS65a8efEsMw4LsXDlGixSWrgHqJ1a7YXWqhRhOa5Ds8UZM&X-Amz-Signature=1ce9926b5f26e44ef226ffe5be8e622e1bd30964e98644cd4e9cbc883d7ed74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
