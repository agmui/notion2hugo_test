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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAKJUJXI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3b5qtB12Wk5px9Kq6em9Qm%2BoCU8jvsaA9dOrGWUtQjAIhANAeBVISJXN3tdlX4cVCbYJrWuQH6CXufZd6xl4vPC%2BtKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Vd%2B5HiJNihqEpLoq3APLAcK9N%2B3Q%2FvcbW3vKzCfyYKInLFlcJCztdQNhzhd1Hd%2BQ6nj%2Bvg7AJGFtrNZpM%2BBhdXX%2Ftvxg9rz7GHDS6BV6Y263B6XIKw%2BsmKL%2Bb4XmX84ogdJFiSJ%2Bc5ND6EgdteCL1q8HsuEvTn%2BfXLjufVIMC%2B%2B1P3JtiFBFSpbHknDYB86iusjyXXyMpHcjcrGNpsCdpVHgIwqYXnliwDn3I%2Bkoej%2BY0VSJYv5DpAgStSFLhYJxnh1eZnhVbQpIUakkaoIkBbT7jtNS52ts8yK3NScjTxNjXL08D8xJKL3RclXvqALIjZTuLDhwHxnYAjHWaQjnwaUH2ml67O15CM7LHTfhX0XyU55Hwm2%2BKpBqSJ9976lpvl3agVSsf%2BXSYTSGnWxI%2BeD7YZzQ68BFGcKXCz03wJ%2BIMnoDivyrx1QrPpHGiLA5y6PrJ8%2BeChB78aFtKNz2Stjgg%2BmJHL4eaRWv%2BUbWSRNPvYUMfyd41KZzmo7dBBhKC97xzB%2FZgrzdx8j081VQR5BIZtXfYovYDqo4jzRf%2BA6CYMJM4L1nDRAe3UNG2NzHdyCz4lihJTVf7U4z4eylvFPNQf%2BjWtu9g6N5d2nlKIrK0VB6O90J0BwR39hTEZC8atCSpMknyq4vpDCNu4jDBjqkAWhlAU1vsH%2FIr9YGbEwqeOX4Ur7R8nOM%2F3A313a4TW5OrZtI0uG8Hw3Qu6GqfaUPmsuOx603cPUHD9hpAKM9L72KpX%2BOSSHVPAoK%2BLakBS%2B%2B6ZJyaT8pWrUHJMpc4Snfs4M%2Fkpqi6%2FkHHE89KYdbnwpJv%2BMHbt5LTS4IxFzUJxHeepXs4efMzeamqqqNbF4hW3JBCMZX9qCyKiC4w2z4ydJg9ZCE&X-Amz-Signature=f9bb387cc9284ff0844ac17c04a5881acc29aacc60068aeeef732b27f98c1338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAKJUJXI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3b5qtB12Wk5px9Kq6em9Qm%2BoCU8jvsaA9dOrGWUtQjAIhANAeBVISJXN3tdlX4cVCbYJrWuQH6CXufZd6xl4vPC%2BtKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Vd%2B5HiJNihqEpLoq3APLAcK9N%2B3Q%2FvcbW3vKzCfyYKInLFlcJCztdQNhzhd1Hd%2BQ6nj%2Bvg7AJGFtrNZpM%2BBhdXX%2Ftvxg9rz7GHDS6BV6Y263B6XIKw%2BsmKL%2Bb4XmX84ogdJFiSJ%2Bc5ND6EgdteCL1q8HsuEvTn%2BfXLjufVIMC%2B%2B1P3JtiFBFSpbHknDYB86iusjyXXyMpHcjcrGNpsCdpVHgIwqYXnliwDn3I%2Bkoej%2BY0VSJYv5DpAgStSFLhYJxnh1eZnhVbQpIUakkaoIkBbT7jtNS52ts8yK3NScjTxNjXL08D8xJKL3RclXvqALIjZTuLDhwHxnYAjHWaQjnwaUH2ml67O15CM7LHTfhX0XyU55Hwm2%2BKpBqSJ9976lpvl3agVSsf%2BXSYTSGnWxI%2BeD7YZzQ68BFGcKXCz03wJ%2BIMnoDivyrx1QrPpHGiLA5y6PrJ8%2BeChB78aFtKNz2Stjgg%2BmJHL4eaRWv%2BUbWSRNPvYUMfyd41KZzmo7dBBhKC97xzB%2FZgrzdx8j081VQR5BIZtXfYovYDqo4jzRf%2BA6CYMJM4L1nDRAe3UNG2NzHdyCz4lihJTVf7U4z4eylvFPNQf%2BjWtu9g6N5d2nlKIrK0VB6O90J0BwR39hTEZC8atCSpMknyq4vpDCNu4jDBjqkAWhlAU1vsH%2FIr9YGbEwqeOX4Ur7R8nOM%2F3A313a4TW5OrZtI0uG8Hw3Qu6GqfaUPmsuOx603cPUHD9hpAKM9L72KpX%2BOSSHVPAoK%2BLakBS%2B%2B6ZJyaT8pWrUHJMpc4Snfs4M%2Fkpqi6%2FkHHE89KYdbnwpJv%2BMHbt5LTS4IxFzUJxHeepXs4efMzeamqqqNbF4hW3JBCMZX9qCyKiC4w2z4ydJg9ZCE&X-Amz-Signature=67470cf761caa6e68fccd97b53faf5ccf9f9f6828f657c0d29cb27ee35e8253b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
