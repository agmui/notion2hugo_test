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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTITUEE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNV2YywlQ%2BD5lxSnP9jzMKxkSDlht6eT2u%2Bgmrl5ihFAiB%2FwfiJ8UroXRlW37LeZTcN5TqZxXFxSiNrSCW3oZQH9CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJlMHDd%2BDLePvPYfKtwDnVnjHcI9io7kbEHQbz2A8nczeHCXUPzXtF%2B%2Fd81kSfjWVGTomIC3lYcSYq0URjdH5N1OJFul93DLHKQjMKh3tqkHZq96FrWfUtY86lU7%2BSiv6zGLtjL32kFHMNv1Jj0H1ltNrJMYC%2FiASIbSMUk7EEn%2FJcFiRZz%2Fh5WfJmjDCc8WPsE4zAsgu5FPpXNHycW1wzCanDDaoe6AJXWTjhiel4iyvuT1VyWWVm99LuXtJV3oUvsNYglIiZ0l47Fy8nWkicG6%2BSa8J17HkM98%2BzxsTrS9vQATlDoHnk95l%2B831dKxD3Hlce1xcVuzN28Quo8ypfKR4HXRKGkOdyFOrL8VVZFlTMucCHZc6yQRPto81%2FTnQKaoL2c72H4VjQU3e5GnI2kEuMxH6WKZ7UYtK%2B2b3HCsXXnxr0Vcx5Oa6Xn%2BX9R5DY0L6bRbfGXO6jngVDHiKbtq7XDSH5GaOQpeQpsiMFJApweyef%2F2ztSNb1sFvMDGLit62fUiFh8f8pTVmw4aBQEJDUl7NynPIUAX3NNsz4WgzU9WpNr%2FC1xOuvNMiaWRszoryQIIB%2FFLUSs66bNRHgZBHoYEDSM5HWGUwdFJNJ0lrixI%2BGShc0PdbG7S3aBHfHWxpIfJPJvfnEQw5aONwwY6pgHFLBuEmNXj%2BvClNXWpgjLZDsJDmCsIwkE1A954M5yPWb6q9hnHmmxLyPyrPXzAVAKU5lnc0A0SJpNIDuw6L9QSxHP%2BSedlvHOJJfhUNOFi50j09I6c3jysMfIVFPF4brjUGHrfPLIJqrMs1LFeludpG2ku3Of%2BxzphtKn2q9rC3TPG%2Bit5%2BBp3PfcLjUfCEgKlnmJ4ep4OZOGrs1FsmPAauYnMj17a&X-Amz-Signature=a88185e45d8c5811d91fb4dfdeaf102cf1b395111299166d1d9c690c023eab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTITUEE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNV2YywlQ%2BD5lxSnP9jzMKxkSDlht6eT2u%2Bgmrl5ihFAiB%2FwfiJ8UroXRlW37LeZTcN5TqZxXFxSiNrSCW3oZQH9CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJlMHDd%2BDLePvPYfKtwDnVnjHcI9io7kbEHQbz2A8nczeHCXUPzXtF%2B%2Fd81kSfjWVGTomIC3lYcSYq0URjdH5N1OJFul93DLHKQjMKh3tqkHZq96FrWfUtY86lU7%2BSiv6zGLtjL32kFHMNv1Jj0H1ltNrJMYC%2FiASIbSMUk7EEn%2FJcFiRZz%2Fh5WfJmjDCc8WPsE4zAsgu5FPpXNHycW1wzCanDDaoe6AJXWTjhiel4iyvuT1VyWWVm99LuXtJV3oUvsNYglIiZ0l47Fy8nWkicG6%2BSa8J17HkM98%2BzxsTrS9vQATlDoHnk95l%2B831dKxD3Hlce1xcVuzN28Quo8ypfKR4HXRKGkOdyFOrL8VVZFlTMucCHZc6yQRPto81%2FTnQKaoL2c72H4VjQU3e5GnI2kEuMxH6WKZ7UYtK%2B2b3HCsXXnxr0Vcx5Oa6Xn%2BX9R5DY0L6bRbfGXO6jngVDHiKbtq7XDSH5GaOQpeQpsiMFJApweyef%2F2ztSNb1sFvMDGLit62fUiFh8f8pTVmw4aBQEJDUl7NynPIUAX3NNsz4WgzU9WpNr%2FC1xOuvNMiaWRszoryQIIB%2FFLUSs66bNRHgZBHoYEDSM5HWGUwdFJNJ0lrixI%2BGShc0PdbG7S3aBHfHWxpIfJPJvfnEQw5aONwwY6pgHFLBuEmNXj%2BvClNXWpgjLZDsJDmCsIwkE1A954M5yPWb6q9hnHmmxLyPyrPXzAVAKU5lnc0A0SJpNIDuw6L9QSxHP%2BSedlvHOJJfhUNOFi50j09I6c3jysMfIVFPF4brjUGHrfPLIJqrMs1LFeludpG2ku3Of%2BxzphtKn2q9rC3TPG%2Bit5%2BBp3PfcLjUfCEgKlnmJ4ep4OZOGrs1FsmPAauYnMj17a&X-Amz-Signature=9f269b8ffd4cd513b6d8269bcbb06d083290ff7692fb90e86f75676215323009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
