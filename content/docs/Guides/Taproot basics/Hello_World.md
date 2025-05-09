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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAXQZEJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXy%2F1Ta8dLzxldkuHJJPlxdq9IrExvfLBXjcTpJbC6owIgGV9OHHLO14xgQDF57EfQYKGuy6e4uDqiX0za5Xcege4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFSSpoo6UqG7VrffCrcA3hEqT%2BNX3sLmGCZ6D9hHbe6fkEZfhPMQ3fWG2nZXKJZqbizjU1Olcl0WcbvMoQ6rqsSM5ZzJLkvU%2FcRhBqzmbcK7unsZr1WFgaTxKN%2FKGsqtEGX0UUFr8Oa7%2BmPuTYeA3aUTQyphQXL%2FIZ0tr%2BzgV47M0pPJoPpQHboufmWZRy0LzYgHbG6y5vs210tTfP%2BW9zhFVJsg%2B4VrFlxDCsriC5%2BY2AeFpztMyo83jtDM4YJ2%2B621qCMMSUI1hB65nqpRu7b4PU%2FzuWHMoPF5ya5UgYVI5AWR%2BIJsqx6Tn%2ByzYFnWTAu9gzXk3YmfM%2FRVKPrzA85hN4UU2vBxFzCFczgIDMEg9C9ArHD1G1BwJjESeAsuiy78ZgUAmUDev1oCMGLs5YfUoi4KTSf%2By4RKdLNX7pTXGxQfWxdiogpLs%2FeDijeYItBC60aHFzY%2F26PP3SGrDtyJydOR5PnQN%2Fv7QKisXjXveZiVZOncuZpH1BapTU22LQCjRKnep3pPxY51djG6a90zIlw0ggMo4Tf6TM440GOXGq1ctu81rncoDT3fLdJhAX5qAWIoJzT6oSM3xirxzJ1U55bYtwDkqe3BarjeTHFXRNQGDVHWNNTow5BTGhubbIsCzFrhEX6dUwEMIvk9cAGOqUBVVC7qXK%2BAj1kZGVEEjs6VeNPQS8z3fxgtuJQIwD4CzzvvmyFwGjqamuB6AvkY9LaPE5CizE7ZtihzoP4DVg0q6Mgxhk67wdRGFGbbS%2Fc%2BWZkS0FYKkdihRo6doIOOvkgeaRKAJ7CTY4v2r5oVP9lMQzRoHK6W3iBojTG%2Fqz7%2BGOPHkh4Z%2BPwctKDitxb9352k8hJXMqZ4N4enex0acAS7rfwybms&X-Amz-Signature=d1b6a66c4b4a2bf46c02f91ffbd713f7d4adf739075a3ce1d14199ede8fb8791&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAXQZEJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXy%2F1Ta8dLzxldkuHJJPlxdq9IrExvfLBXjcTpJbC6owIgGV9OHHLO14xgQDF57EfQYKGuy6e4uDqiX0za5Xcege4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFSSpoo6UqG7VrffCrcA3hEqT%2BNX3sLmGCZ6D9hHbe6fkEZfhPMQ3fWG2nZXKJZqbizjU1Olcl0WcbvMoQ6rqsSM5ZzJLkvU%2FcRhBqzmbcK7unsZr1WFgaTxKN%2FKGsqtEGX0UUFr8Oa7%2BmPuTYeA3aUTQyphQXL%2FIZ0tr%2BzgV47M0pPJoPpQHboufmWZRy0LzYgHbG6y5vs210tTfP%2BW9zhFVJsg%2B4VrFlxDCsriC5%2BY2AeFpztMyo83jtDM4YJ2%2B621qCMMSUI1hB65nqpRu7b4PU%2FzuWHMoPF5ya5UgYVI5AWR%2BIJsqx6Tn%2ByzYFnWTAu9gzXk3YmfM%2FRVKPrzA85hN4UU2vBxFzCFczgIDMEg9C9ArHD1G1BwJjESeAsuiy78ZgUAmUDev1oCMGLs5YfUoi4KTSf%2By4RKdLNX7pTXGxQfWxdiogpLs%2FeDijeYItBC60aHFzY%2F26PP3SGrDtyJydOR5PnQN%2Fv7QKisXjXveZiVZOncuZpH1BapTU22LQCjRKnep3pPxY51djG6a90zIlw0ggMo4Tf6TM440GOXGq1ctu81rncoDT3fLdJhAX5qAWIoJzT6oSM3xirxzJ1U55bYtwDkqe3BarjeTHFXRNQGDVHWNNTow5BTGhubbIsCzFrhEX6dUwEMIvk9cAGOqUBVVC7qXK%2BAj1kZGVEEjs6VeNPQS8z3fxgtuJQIwD4CzzvvmyFwGjqamuB6AvkY9LaPE5CizE7ZtihzoP4DVg0q6Mgxhk67wdRGFGbbS%2Fc%2BWZkS0FYKkdihRo6doIOOvkgeaRKAJ7CTY4v2r5oVP9lMQzRoHK6W3iBojTG%2Fqz7%2BGOPHkh4Z%2BPwctKDitxb9352k8hJXMqZ4N4enex0acAS7rfwybms&X-Amz-Signature=7f919886bc6b25051238252a377ad2fc84b8155f3f83c9d943952dfff82c0a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
