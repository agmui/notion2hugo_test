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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INGYALR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzy8bFnyDJOXxNGvP1EC6WwsOX3ZtzWekKwTru9igCXQIgXy5PBkjXg%2FQn7EJXujRI1pJKRYZSltOR5cDCe%2B%2BoFhAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP3R3x9fExhMmRFuxircA5wekwqsKK6lE74sN8vrWlj6SzFs0emtbaVz9OKu8WUYMxTZbdcN%2BAKBWvAlndUu2OcieiGxCk4Q%2FyIlSzvQzomDLHh4jtBUBdbFA59bUMxN4qxNX4PNbDcS8UbTDIvRYLspfx2uOpjU3MqeF06Jtfrb53fUshV0YaWg%2BGrb8eyDlrw4j5KNB8KS2H5jQU3uVHXNjh9tG3iKt8cNNA5vb7Tff2jEx9mqrVGN%2FnS%2Boa4e7gjEO2o2FlVEbawWDDpWMQJ30e7VdYKtUx4Fq7qcRWQJ31pIMGhwvblcV0UUcG1epxVrg%2BE%2BtbRhNwrmNATzneGhlDA7N9SB6zOwbJHRr9cTRfJUTFWbOhelNjw5SYVFPkrPeejvmJYr0yk5wpFfgTcrRdpaFDl2P%2FHolNYdzyUW%2FZ522TmGwV9RDzjKY349oql9v2mGN%2BQW4M7hjVm%2BARm8qwJw%2B2MpyiFA6VA2K8VGVKT0emsQHbZyjmvgOlqwr7CaJuc5TRh7YWGH4nGBZ42EiBa7BZtSpHaJ0CoLHw8m%2FrH4Ip6eWe8m0UFDnpa1rVijlUvcr06y9qAJvcw7TQD0T2qsHtzuK3AO1Pxqm6Scp0ms%2FhW2NxM0zoPt5ZEV9%2Bo%2BOEzsrVQvwxiEMPjJyr0GOqUBeft1ON0%2FY49Lfven3kavdqvpy0fQ0zN5CFFVrMKDQHmTZq5UVXzm4F9FpckYuJEJSIAoDyhu4E2TfNcCWv%2FiReuk2ESENM6xXk7rJwfHExbwKIxKOU%2Bd8yqnrYz2AUAMcoXLuyaOD0uXzqPxs29dPoDp6nE%2FhlMveWdxF2%2Fr12NO0ULeefyD0zOOpLFp2gInVj%2FGsCUKrAs1s6OVm1amcHVYw%2FqD&X-Amz-Signature=facea08f594d692b546a1e80dccd6156e99f08f0b2e69e068d0238b75f09c163&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INGYALR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzy8bFnyDJOXxNGvP1EC6WwsOX3ZtzWekKwTru9igCXQIgXy5PBkjXg%2FQn7EJXujRI1pJKRYZSltOR5cDCe%2B%2BoFhAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP3R3x9fExhMmRFuxircA5wekwqsKK6lE74sN8vrWlj6SzFs0emtbaVz9OKu8WUYMxTZbdcN%2BAKBWvAlndUu2OcieiGxCk4Q%2FyIlSzvQzomDLHh4jtBUBdbFA59bUMxN4qxNX4PNbDcS8UbTDIvRYLspfx2uOpjU3MqeF06Jtfrb53fUshV0YaWg%2BGrb8eyDlrw4j5KNB8KS2H5jQU3uVHXNjh9tG3iKt8cNNA5vb7Tff2jEx9mqrVGN%2FnS%2Boa4e7gjEO2o2FlVEbawWDDpWMQJ30e7VdYKtUx4Fq7qcRWQJ31pIMGhwvblcV0UUcG1epxVrg%2BE%2BtbRhNwrmNATzneGhlDA7N9SB6zOwbJHRr9cTRfJUTFWbOhelNjw5SYVFPkrPeejvmJYr0yk5wpFfgTcrRdpaFDl2P%2FHolNYdzyUW%2FZ522TmGwV9RDzjKY349oql9v2mGN%2BQW4M7hjVm%2BARm8qwJw%2B2MpyiFA6VA2K8VGVKT0emsQHbZyjmvgOlqwr7CaJuc5TRh7YWGH4nGBZ42EiBa7BZtSpHaJ0CoLHw8m%2FrH4Ip6eWe8m0UFDnpa1rVijlUvcr06y9qAJvcw7TQD0T2qsHtzuK3AO1Pxqm6Scp0ms%2FhW2NxM0zoPt5ZEV9%2Bo%2BOEzsrVQvwxiEMPjJyr0GOqUBeft1ON0%2FY49Lfven3kavdqvpy0fQ0zN5CFFVrMKDQHmTZq5UVXzm4F9FpckYuJEJSIAoDyhu4E2TfNcCWv%2FiReuk2ESENM6xXk7rJwfHExbwKIxKOU%2Bd8yqnrYz2AUAMcoXLuyaOD0uXzqPxs29dPoDp6nE%2FhlMveWdxF2%2Fr12NO0ULeefyD0zOOpLFp2gInVj%2FGsCUKrAs1s6OVm1amcHVYw%2FqD&X-Amz-Signature=1becd2211bebbce1349ae1b7b16e0f232a129e7025dcf238185320a739017572&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
