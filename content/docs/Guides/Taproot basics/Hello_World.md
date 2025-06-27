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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAZMDNCP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCKki7G%2Bv%2B9JeJP4wI%2FvTGCf7EaUG5YYqBictGpuGSXmgIgRsRs63dhb8Wp8a15uPEFRfxo92tXxjjYQb%2B6aWKBgXAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDONfzj4Tp58itXxY7yrcAwNRkbQDJ0z8xSiy13wN1MkibLQxEUDgvqEBfMlUWKRa8f2mLBH2znsWRbS079mtbt1SwbTdA8FfevE4Fd6SqqPObaeBStpw533Wf1IpJrSFoxdYVtoyfJMagJ5pRlLx1FZnrsPF7JhHoQDzxzCACMToVLgTujcJa03hb49Qc301gkhFvBf%2B37l8Ho48O2YH4KrzwlSsephYerpqWqZkOnf5A4OO32NLk66HfCFe%2BrOwcsVq5%2FPvJDR5vcjd5PlTyThZ%2Bc4iW4IciEsSwoNCV3jeCA4OnMESERrb0xpp%2BnuL6RdUjKFBzjKSjrcAXQQ6FSCajvttEz2fB5NwOVjqKYqydF9xfciRbkfP5PbpeORbKO3sddabDI27uL0j2KijUSZsgpuGGMj6WX4notzHTr1mZEzzOjXTAx%2BuyfN3aGKfwokimJ9kX88hrTKG6c4PONO%2FDdeamry4XIZR1zSGzedqHAnmUX8dKL7M3T7TwPtI0eyikDf9lUn6x8zVX8ABCl%2BQXTuX1WuIvdWpc5x2LnCVMWU2PO94yRURWlb%2FI2KJmWGdaGcZQHZcEbL3FP3CAJl89KJUxZpqj9k7h0HjzXI%2BglFI%2B7Q1ZN%2BO4Dar7I5ym12V8ZxRxtbiXVDEMPn4%2BMIGOqUBrRv9Z8Z10H%2FYyO12OjRgjnEXXCw9sIDJv%2BFLq7OW57VMrHS8Bx%2Fd53ip9hlD69pywlGq3gWASEjT0on6dXnDN8Pe6M7qhnZ%2BXXU0n27yw1FEV4EWTQFaDTgtcnJuDab4HF0tmj1DtvLEfMEhLqyEjsvBZv9fagMt21MINqBqzK1Z13flcTqEpQiOksQXd0VdonBW8dmCfuJC%2BKyHuKb69BmGgU0M&X-Amz-Signature=81a4128cd5b95d94347d38fbc09c8f1cdb68d49f187c2ea8bea904f061693a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAZMDNCP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCKki7G%2Bv%2B9JeJP4wI%2FvTGCf7EaUG5YYqBictGpuGSXmgIgRsRs63dhb8Wp8a15uPEFRfxo92tXxjjYQb%2B6aWKBgXAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDONfzj4Tp58itXxY7yrcAwNRkbQDJ0z8xSiy13wN1MkibLQxEUDgvqEBfMlUWKRa8f2mLBH2znsWRbS079mtbt1SwbTdA8FfevE4Fd6SqqPObaeBStpw533Wf1IpJrSFoxdYVtoyfJMagJ5pRlLx1FZnrsPF7JhHoQDzxzCACMToVLgTujcJa03hb49Qc301gkhFvBf%2B37l8Ho48O2YH4KrzwlSsephYerpqWqZkOnf5A4OO32NLk66HfCFe%2BrOwcsVq5%2FPvJDR5vcjd5PlTyThZ%2Bc4iW4IciEsSwoNCV3jeCA4OnMESERrb0xpp%2BnuL6RdUjKFBzjKSjrcAXQQ6FSCajvttEz2fB5NwOVjqKYqydF9xfciRbkfP5PbpeORbKO3sddabDI27uL0j2KijUSZsgpuGGMj6WX4notzHTr1mZEzzOjXTAx%2BuyfN3aGKfwokimJ9kX88hrTKG6c4PONO%2FDdeamry4XIZR1zSGzedqHAnmUX8dKL7M3T7TwPtI0eyikDf9lUn6x8zVX8ABCl%2BQXTuX1WuIvdWpc5x2LnCVMWU2PO94yRURWlb%2FI2KJmWGdaGcZQHZcEbL3FP3CAJl89KJUxZpqj9k7h0HjzXI%2BglFI%2B7Q1ZN%2BO4Dar7I5ym12V8ZxRxtbiXVDEMPn4%2BMIGOqUBrRv9Z8Z10H%2FYyO12OjRgjnEXXCw9sIDJv%2BFLq7OW57VMrHS8Bx%2Fd53ip9hlD69pywlGq3gWASEjT0on6dXnDN8Pe6M7qhnZ%2BXXU0n27yw1FEV4EWTQFaDTgtcnJuDab4HF0tmj1DtvLEfMEhLqyEjsvBZv9fagMt21MINqBqzK1Z13flcTqEpQiOksQXd0VdonBW8dmCfuJC%2BKyHuKb69BmGgU0M&X-Amz-Signature=5944e754112ce4912dc24e4ea449d2f54ea7d5a796dbb784be4dc3987bca61c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
