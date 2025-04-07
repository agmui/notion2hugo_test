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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MZ3BYD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXvARt2tCCmihg88e5mVLoTMZJPpxtS1dxkDs9j3tNqAiB6XGzenHxQ4wMSSLpxsqHhmoqA9GjNBwqUS66cgE5q3Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMQnmMypbnmTMPBq5PKtwD5SS10J5AVyd%2Bv6wfUfsTn00RlLUVDTjYgayz4tFnySi6w299%2BdzsNXhVOi%2FR%2BSazvPV2YGmEySeHuu727YtXsGFwREPRQIM3H3vMz8OMLup8kZp2KOuw2lYJB7LCDFrRwTLPS7aHR0AQW7S7QOkoTa7W%2FaHjDcsQ0i9eHRu4OhA5IgB4S1UqSyT%2BTpczPhO3ZmQLaEq8vLTEPxPjEOvP5kkrAJk5iRzFGbJ%2BmNla%2FmBgE5pAkm2SlFIGpUJxFusQ5RWG7%2B9wu5eoq9606KUI3ItK7KpznjpkBLjzAZu20S%2BBNgKuPFu6tW5sHbHvKfGzafiy9sLjG0VTz5d1Yl36idYVwAcHgU3L5Wx6m2tH4vvqrY7nu%2FKDfP9cGdN%2FcUER38L82X8aMty%2Bog0YqfJLNTG22mwmdgMduWkJG8lOV%2Bf8n0dfEvflTl6pNMmEr1sQVNb18%2BWcSa4pA7jkemdV9WhNPBSNgCjFn2mUmPWs0HrIUL9Z1RUPRn%2F8TpAp8GicJvMgc5jeKqRKlm%2BCzp0jVKgCUcnYpu%2FxOEhS%2BR4kNw62PkpuwMbyArr6MWRCYwIZq6%2BuFm602je3%2FgaizNDTTzWjU9EmjDBuUHMk1J2jbC589yp3wMHyO1vT23Ew7IjQvwY6pgHZ%2BCmZyiNHogMXSXLfrV76KUpGwjQtG0YlNGOWL3jHfaT2wivcOzei%2FFPTVZiFPHD8jtokG0JxYeJ7%2BfDz9RmB2yK2zmthxqNw9mJdUwDXpONnIrKNBx%2BFA2VRNJmi5tcQMHxm5m80DfrCn7vseBK7lZlmpR8JPulU0VN5AfDpjdp0GnxoZSPPFrhU50sejjXAdhB0XCyCuWlLNOjOzFtXrjvB5Gpl&X-Amz-Signature=d9f89eb1d48f450bbb2dae80d435ee79cd43c4c2b5825b9e02727b79665a5527&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MZ3BYD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXvARt2tCCmihg88e5mVLoTMZJPpxtS1dxkDs9j3tNqAiB6XGzenHxQ4wMSSLpxsqHhmoqA9GjNBwqUS66cgE5q3Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMQnmMypbnmTMPBq5PKtwD5SS10J5AVyd%2Bv6wfUfsTn00RlLUVDTjYgayz4tFnySi6w299%2BdzsNXhVOi%2FR%2BSazvPV2YGmEySeHuu727YtXsGFwREPRQIM3H3vMz8OMLup8kZp2KOuw2lYJB7LCDFrRwTLPS7aHR0AQW7S7QOkoTa7W%2FaHjDcsQ0i9eHRu4OhA5IgB4S1UqSyT%2BTpczPhO3ZmQLaEq8vLTEPxPjEOvP5kkrAJk5iRzFGbJ%2BmNla%2FmBgE5pAkm2SlFIGpUJxFusQ5RWG7%2B9wu5eoq9606KUI3ItK7KpznjpkBLjzAZu20S%2BBNgKuPFu6tW5sHbHvKfGzafiy9sLjG0VTz5d1Yl36idYVwAcHgU3L5Wx6m2tH4vvqrY7nu%2FKDfP9cGdN%2FcUER38L82X8aMty%2Bog0YqfJLNTG22mwmdgMduWkJG8lOV%2Bf8n0dfEvflTl6pNMmEr1sQVNb18%2BWcSa4pA7jkemdV9WhNPBSNgCjFn2mUmPWs0HrIUL9Z1RUPRn%2F8TpAp8GicJvMgc5jeKqRKlm%2BCzp0jVKgCUcnYpu%2FxOEhS%2BR4kNw62PkpuwMbyArr6MWRCYwIZq6%2BuFm602je3%2FgaizNDTTzWjU9EmjDBuUHMk1J2jbC589yp3wMHyO1vT23Ew7IjQvwY6pgHZ%2BCmZyiNHogMXSXLfrV76KUpGwjQtG0YlNGOWL3jHfaT2wivcOzei%2FFPTVZiFPHD8jtokG0JxYeJ7%2BfDz9RmB2yK2zmthxqNw9mJdUwDXpONnIrKNBx%2BFA2VRNJmi5tcQMHxm5m80DfrCn7vseBK7lZlmpR8JPulU0VN5AfDpjdp0GnxoZSPPFrhU50sejjXAdhB0XCyCuWlLNOjOzFtXrjvB5Gpl&X-Amz-Signature=45f5b58a978050cba1e214122b0f85b11529f6316587694d684c70f910a250ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
