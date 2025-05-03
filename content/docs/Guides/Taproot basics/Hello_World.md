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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMVBKPF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD0T4VyZVhD8CNC9gJ7d4yw8tFyc67f89DGYyuCTfQplwIgJ1aRg4CvLBSJQyHD4OH4ytihnoGmgSjh1dZCkff3Fj8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP4Ou6UESJsvhCNFSrcAxb4wR33i6gDACQKwCIITGO%2FKrfmP8JPOEbozLbPUfGAVYCxPVc3COEBC7%2BTBoRLFiDXFXNH4FHMo%2BiV5UhDNfECwMTFAewZNqTQxAwJCLWFTQ%2FcGMsoHlqjzdvhwAu5I2wYOYx3AhfLEo%2FsANtXavqgkBSofAkVgPXuM36J6AanLO%2FyTUxsUtrQ%2F8L%2F7AfLHtTCIZDplR%2BcJoXHAJzfvLeA0cF04dnTh341YnVsfT4EtP5jy7rL1mUh7B1NW6tVkP7Q6ZM1S6C5RywmTbdRimopNujplTtlghCqsEkiF2Aue2wdpRd21m3Q44qT8DGWVLcMaTqpXqg5lbhK5LV1amQkpBmoOcukzdPHxmLKPLdjGJ7qMvUW7kAfoGCbKiOOaFj0t%2BIZECJorPPepg%2BoMGaC%2FW2oBqrDyvR5eaVoUW3qI6SIn6jO1Vvv4s%2FwPE6XuRMbJXrH4Cqew1H5enT1Z0NTrZOCZtO4laa70MbbeusB2x7mB0jbaZl5epft7ZZTIiuT0cnGkFFsqU4MNBGcl5IsAtFKr%2F5nIkSRXtvA1HM%2FP31Ea3uGrAVAzU%2Fb6k4VjXWj1lF6a25%2FB8Ba3wkpNIYu7uK6%2B4rYB0CVPDcizyIxiWQ4WMrV9qq7xmrOMPmG1sAGOqUBLdA0JLRcyZbVcMfRNjRvlmjZ6N4gsDXrWkcJY5bcUgYS9hEOw0O%2Fe%2BpZDJR8J%2Bf0TQe95SRt%2FailHn8wiiz39u%2Bh7TWzoUc5Uwe4PPqVvK9bA5JMIBsoMSFzmpWeWyJFjVrZYwvYQZPmrEnQWhobAQPUYiWdzoERPaZ0PPZOysCmfWMvJqIRrpPdecOI2n264nzhOFalGYJoCZi8ijIb2D8ouRT6&X-Amz-Signature=2063f073b008858347e8dbea6d3096fad4356deb444f11b590bf4086aa6fba5a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMVBKPF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD0T4VyZVhD8CNC9gJ7d4yw8tFyc67f89DGYyuCTfQplwIgJ1aRg4CvLBSJQyHD4OH4ytihnoGmgSjh1dZCkff3Fj8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP4Ou6UESJsvhCNFSrcAxb4wR33i6gDACQKwCIITGO%2FKrfmP8JPOEbozLbPUfGAVYCxPVc3COEBC7%2BTBoRLFiDXFXNH4FHMo%2BiV5UhDNfECwMTFAewZNqTQxAwJCLWFTQ%2FcGMsoHlqjzdvhwAu5I2wYOYx3AhfLEo%2FsANtXavqgkBSofAkVgPXuM36J6AanLO%2FyTUxsUtrQ%2F8L%2F7AfLHtTCIZDplR%2BcJoXHAJzfvLeA0cF04dnTh341YnVsfT4EtP5jy7rL1mUh7B1NW6tVkP7Q6ZM1S6C5RywmTbdRimopNujplTtlghCqsEkiF2Aue2wdpRd21m3Q44qT8DGWVLcMaTqpXqg5lbhK5LV1amQkpBmoOcukzdPHxmLKPLdjGJ7qMvUW7kAfoGCbKiOOaFj0t%2BIZECJorPPepg%2BoMGaC%2FW2oBqrDyvR5eaVoUW3qI6SIn6jO1Vvv4s%2FwPE6XuRMbJXrH4Cqew1H5enT1Z0NTrZOCZtO4laa70MbbeusB2x7mB0jbaZl5epft7ZZTIiuT0cnGkFFsqU4MNBGcl5IsAtFKr%2F5nIkSRXtvA1HM%2FP31Ea3uGrAVAzU%2Fb6k4VjXWj1lF6a25%2FB8Ba3wkpNIYu7uK6%2B4rYB0CVPDcizyIxiWQ4WMrV9qq7xmrOMPmG1sAGOqUBLdA0JLRcyZbVcMfRNjRvlmjZ6N4gsDXrWkcJY5bcUgYS9hEOw0O%2Fe%2BpZDJR8J%2Bf0TQe95SRt%2FailHn8wiiz39u%2Bh7TWzoUc5Uwe4PPqVvK9bA5JMIBsoMSFzmpWeWyJFjVrZYwvYQZPmrEnQWhobAQPUYiWdzoERPaZ0PPZOysCmfWMvJqIRrpPdecOI2n264nzhOFalGYJoCZi8ijIb2D8ouRT6&X-Amz-Signature=b1882eef78184b9de110bec305b21a038f11c001ab5ebe089f85572112c24f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
