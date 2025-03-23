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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3XJY4V%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfdLLBlqsjSkhj708LR9hB4ySe%2BZWe2Yl7lUvSeLK3OgIhAJVANYFqo%2Fw8WmS2UwPgkS3%2BUhyV6%2FQZzt8hKRbPM3y1KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyzy1hUAV%2FEO%2BJBk8q3AN6NDOGpZBA3pu3efNNQkbBwkUOHL8vEpywfaLc0N2VlkCVWHBvk8gwdkJAGgUTN3xE3w5CSNg1OJBkJ1fdTlPviHuqPjUvix7y50CCLB2bSRKvpSEWRoMslWJKzu%2FI9S8%2F3%2FSAkcGG2paSwW4Give%2BtcSLXA6kI%2B8HXnYmW9tkeeM%2FuT1BBIYEYyjL7%2FBeLzvr5Uj7bj1uoGwyfngD38qfXzSG7Qmw%2FDHiyESJcNgSZFTCyBA0NUtNMCvRcSuXJsWbXw2KgHmtAgQ57Y9YDnNBR6r74HPCVmJMASchZaaIJfDtTpzSuBqhd7mjjyq2hhjXLa38NTrXC%2BIpPtR%2FCayfIBXQsBO%2BdCM8ZlDrQtB38KS%2BNNP4m5jYnnpdD83Y%2BonlRK5ki5OwDvChJsH6j%2BmsIb9gMbFE%2BUwRGUA4CuP%2BJZU%2FcPzUOmLm713ok630pb%2BiSdUMcydUsbk%2B%2B45oOSUpkqoEjn31CGxuTGT6Y2hKU070G6SZgDmDqJkPZEckQ1F3bE%2FQK3z7kxQPpKz6kiMGm%2BUnJlcPHAZJAracQXjk9sAqfIPFCBOWLLT7DfkYYS8R6GYT9ff1TksdkVge7GDACvkuhRtLOjWgrf5YUh%2FsSxhQfFXZJ2chV12b%2BTD6yoG%2FBjqkAewoISEYtx%2F10YjnUnkkiFKAN4JGwoA%2FNVe%2BZnzYcibPU%2BHlbCwbWare2%2FZDj%2B%2FXDP2gfrU4C7OGgOlhCvdt5bmk8KnpUpxikNjgcgved0DgHk%2FnvTqUNdtIxHB8qCjsPCJbK5o1tCRnufjVFvG2xsIowmGne3xFgnfQykoAND1Rd6s2kxt2X%2Bj%2FWKGlHQTG7GaCnjePpiBoBofJIecdp1uvE8DC&X-Amz-Signature=9963cf2e8c529e412bccc0ef9929f6435eeff137a0504cfe08d48d8113548945&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3XJY4V%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfdLLBlqsjSkhj708LR9hB4ySe%2BZWe2Yl7lUvSeLK3OgIhAJVANYFqo%2Fw8WmS2UwPgkS3%2BUhyV6%2FQZzt8hKRbPM3y1KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyzy1hUAV%2FEO%2BJBk8q3AN6NDOGpZBA3pu3efNNQkbBwkUOHL8vEpywfaLc0N2VlkCVWHBvk8gwdkJAGgUTN3xE3w5CSNg1OJBkJ1fdTlPviHuqPjUvix7y50CCLB2bSRKvpSEWRoMslWJKzu%2FI9S8%2F3%2FSAkcGG2paSwW4Give%2BtcSLXA6kI%2B8HXnYmW9tkeeM%2FuT1BBIYEYyjL7%2FBeLzvr5Uj7bj1uoGwyfngD38qfXzSG7Qmw%2FDHiyESJcNgSZFTCyBA0NUtNMCvRcSuXJsWbXw2KgHmtAgQ57Y9YDnNBR6r74HPCVmJMASchZaaIJfDtTpzSuBqhd7mjjyq2hhjXLa38NTrXC%2BIpPtR%2FCayfIBXQsBO%2BdCM8ZlDrQtB38KS%2BNNP4m5jYnnpdD83Y%2BonlRK5ki5OwDvChJsH6j%2BmsIb9gMbFE%2BUwRGUA4CuP%2BJZU%2FcPzUOmLm713ok630pb%2BiSdUMcydUsbk%2B%2B45oOSUpkqoEjn31CGxuTGT6Y2hKU070G6SZgDmDqJkPZEckQ1F3bE%2FQK3z7kxQPpKz6kiMGm%2BUnJlcPHAZJAracQXjk9sAqfIPFCBOWLLT7DfkYYS8R6GYT9ff1TksdkVge7GDACvkuhRtLOjWgrf5YUh%2FsSxhQfFXZJ2chV12b%2BTD6yoG%2FBjqkAewoISEYtx%2F10YjnUnkkiFKAN4JGwoA%2FNVe%2BZnzYcibPU%2BHlbCwbWare2%2FZDj%2B%2FXDP2gfrU4C7OGgOlhCvdt5bmk8KnpUpxikNjgcgved0DgHk%2FnvTqUNdtIxHB8qCjsPCJbK5o1tCRnufjVFvG2xsIowmGne3xFgnfQykoAND1Rd6s2kxt2X%2Bj%2FWKGlHQTG7GaCnjePpiBoBofJIecdp1uvE8DC&X-Amz-Signature=b8f45ef9ca93c5fc76af9098af370823faaa5850aa2287953c2af904461c1eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
