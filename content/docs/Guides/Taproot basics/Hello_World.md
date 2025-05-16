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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOTGFKK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB4N0P38ew6FnQoK3C5qlLcWcejegjjkSXJHB3FEqa9QIgaVAEcbLv0bnshffhQFcvBz%2FSH6iSTErN2inIo%2F5NrLEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIFBbisBnqTe%2B%2FDXpCrcAwp3Xg0YhruAcI1lHd8JrxC2kJRc1jIWxlnaAc%2BLISvBhexlUgNK7Ub3sNrpqjKofj3mMWyxAzzUyU0od8Y9p7dVfuVAxME23SUN0KC2cEH1rYS%2BC7Je6Nb7zdZnHbY8axaLyvioCokyDGtmYewuF2SVzUyEAkSpWKShc8m0AYaAZzJnyN8OOjlaa%2BZFYEsNNCgZGwXsFvq1jygLwDXDsU4lqVEyuL5ixzcUGcC7YeHt%2Fs7BcgtePdB3ampi6G%2F43w2LqfBIV0d8bKrp8FxSga3w1810X%2FdcXmctBK%2FIIlzCBjP%2Fzx46KLwpH5epMlnKxNPyzYE%2FpEqVOP6s6UbsJ0gh5lscNd9I8IKbQZ1HF5%2FbaT2nrr0yNMzXA3ELWHiKkiOkZmrL4KfE%2FzY%2FRBqYlcybkpjjvXUwAS8bCCe6F6X8sAiKfSZAxEyIIxgQWDvujMEpPzpNb1ufJyFkJlgStWm9i%2BmjEXMaMtH%2F1VspbKPCHainBhpHwS9Al%2BL4Hv5%2Fap%2FgMZ7U%2FF%2Bn62paaV6o9pf3laHp3sI6OpXaO9n5hj70XzG1u%2FULSwuMQXbXXHto%2F1f0WsfZLlCDDsq95M3uBpMVCDJvbdkxvzWi%2FcMJ5h%2F3rP1YBo1gpXoc9zAJMPCBncEGOqUBqh6EVWjGq8%2B02JOurjHgDNytpGKXLImSJwC8B430KLohkoafeNAq1ZKkmJ8my96uDVh4e6gOIZb2UP9998PyPTfzWlpqyR7tSwZ4gi9BIINVVCaBDmJwPqTDRh3VxTKEici648gU9520rlW%2BPltB0aJ3%2F21bVsp%2FHuQylJfHbdoqTZVskrWPHZQyeVQ6yKXcUtNohmQJUDofd3fWBrCu6Ubf%2FLXX&X-Amz-Signature=00fc9f42df6a19f4e62c3e0f3c99d36600b3a6410371e7b260a667359dac6dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOTGFKK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB4N0P38ew6FnQoK3C5qlLcWcejegjjkSXJHB3FEqa9QIgaVAEcbLv0bnshffhQFcvBz%2FSH6iSTErN2inIo%2F5NrLEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIFBbisBnqTe%2B%2FDXpCrcAwp3Xg0YhruAcI1lHd8JrxC2kJRc1jIWxlnaAc%2BLISvBhexlUgNK7Ub3sNrpqjKofj3mMWyxAzzUyU0od8Y9p7dVfuVAxME23SUN0KC2cEH1rYS%2BC7Je6Nb7zdZnHbY8axaLyvioCokyDGtmYewuF2SVzUyEAkSpWKShc8m0AYaAZzJnyN8OOjlaa%2BZFYEsNNCgZGwXsFvq1jygLwDXDsU4lqVEyuL5ixzcUGcC7YeHt%2Fs7BcgtePdB3ampi6G%2F43w2LqfBIV0d8bKrp8FxSga3w1810X%2FdcXmctBK%2FIIlzCBjP%2Fzx46KLwpH5epMlnKxNPyzYE%2FpEqVOP6s6UbsJ0gh5lscNd9I8IKbQZ1HF5%2FbaT2nrr0yNMzXA3ELWHiKkiOkZmrL4KfE%2FzY%2FRBqYlcybkpjjvXUwAS8bCCe6F6X8sAiKfSZAxEyIIxgQWDvujMEpPzpNb1ufJyFkJlgStWm9i%2BmjEXMaMtH%2F1VspbKPCHainBhpHwS9Al%2BL4Hv5%2Fap%2FgMZ7U%2FF%2Bn62paaV6o9pf3laHp3sI6OpXaO9n5hj70XzG1u%2FULSwuMQXbXXHto%2F1f0WsfZLlCDDsq95M3uBpMVCDJvbdkxvzWi%2FcMJ5h%2F3rP1YBo1gpXoc9zAJMPCBncEGOqUBqh6EVWjGq8%2B02JOurjHgDNytpGKXLImSJwC8B430KLohkoafeNAq1ZKkmJ8my96uDVh4e6gOIZb2UP9998PyPTfzWlpqyR7tSwZ4gi9BIINVVCaBDmJwPqTDRh3VxTKEici648gU9520rlW%2BPltB0aJ3%2F21bVsp%2FHuQylJfHbdoqTZVskrWPHZQyeVQ6yKXcUtNohmQJUDofd3fWBrCu6Ubf%2FLXX&X-Amz-Signature=4b83f034634366f7902535edb4de33112df809aa31d5b7e7cc2b0fa75cbeb983&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
