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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ML4I3PH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VmQWl8lbhRxe0ZZuZb45jS8vBhOerIAZPqZ8IsaILQIgbBKkWcepaUZfHyhVyDDwRM0Iyr87sKwe%2FwdpVNbefloq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAWGoO%2FN8VnuHbro9SrcAxFbh4jXTzYG%2BBLH3TdR5xT590nZeZnWecpfWKWPaJLBfwR4Iv%2Bx7%2BhYGT%2BK7b36XndlAJ%2B0fMXpmbV9XQwZjYde4jcm68Aj8xaUlsCZQo9dyQ921c9K5hmSWwrq%2FYMpZwEeTOUWP3LJOnqjLCXAMjzQDpN1WSYmfD1bDQL6QTzPmuVhkQYfXNTKxajziI5vl3GUJ%2BLXwh6dkNpiSX7ngtcRJGsZgMFcd0WHFD5TSFGGuzCvXOGys92etc3jLCkGqQcEmy3FpdVE2ai%2FO79jInlCn2JN8eVQOD41xUBONEBcJlccAS2jSj5vs%2Ffrr9Lx%2B9SrxoGoX%2Fu36WFtPKQOpjpwiQalAPsEG2%2Fxke0LLmxUtuEszyU3N5FpaKQFxeRajU1Ncz02E0jdzA7iYfnVRD65QIz9R1X1ukHIFXQSvOhr7JCVtmEnN%2BPCw8n8bTcwxPWw%2B4FqfDZOModGla7VPMdZx6mjQogNApb%2FbfMmQo7kmTQhfCwp9Aw3nQWUSzO48IZbiOp2g6J6mEHNbZwLL%2F91EFLrx8k9grcoLGPKLPd%2FtqEQyPHrVvgf%2FsITBj5s6RkPDcs1YvFGagPw7lu%2BpHW24pHO%2FpC15mvXUiUS7IW46GAyM6Xog3qLFvWKMLytjr8GOqUBaJdIhf%2FE%2BVLd%2FgLyXeHXmFfbx0AZYE6O85oxCheQIxjGYv0LUog6FLRWf4g86BEd1C8T7MRp9nDTbvejeULmAlhiV1pY2GmCMaS9kR%2B4scW0xB06tnsDEdrsF5LqCmw6HTp%2BUQgZB5r6vrkS2piV1vV310swbXkMhxvMbZIfqGqDeq13QusxkOOA3Ialee4ZL5wxpKt5EhqvNssAB3DNS%2FC5XQz%2B&X-Amz-Signature=c7d8d58efbf3ed4623db1209e7a126b979d787b3b674ac40532f5490ff4f983c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ML4I3PH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VmQWl8lbhRxe0ZZuZb45jS8vBhOerIAZPqZ8IsaILQIgbBKkWcepaUZfHyhVyDDwRM0Iyr87sKwe%2FwdpVNbefloq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAWGoO%2FN8VnuHbro9SrcAxFbh4jXTzYG%2BBLH3TdR5xT590nZeZnWecpfWKWPaJLBfwR4Iv%2Bx7%2BhYGT%2BK7b36XndlAJ%2B0fMXpmbV9XQwZjYde4jcm68Aj8xaUlsCZQo9dyQ921c9K5hmSWwrq%2FYMpZwEeTOUWP3LJOnqjLCXAMjzQDpN1WSYmfD1bDQL6QTzPmuVhkQYfXNTKxajziI5vl3GUJ%2BLXwh6dkNpiSX7ngtcRJGsZgMFcd0WHFD5TSFGGuzCvXOGys92etc3jLCkGqQcEmy3FpdVE2ai%2FO79jInlCn2JN8eVQOD41xUBONEBcJlccAS2jSj5vs%2Ffrr9Lx%2B9SrxoGoX%2Fu36WFtPKQOpjpwiQalAPsEG2%2Fxke0LLmxUtuEszyU3N5FpaKQFxeRajU1Ncz02E0jdzA7iYfnVRD65QIz9R1X1ukHIFXQSvOhr7JCVtmEnN%2BPCw8n8bTcwxPWw%2B4FqfDZOModGla7VPMdZx6mjQogNApb%2FbfMmQo7kmTQhfCwp9Aw3nQWUSzO48IZbiOp2g6J6mEHNbZwLL%2F91EFLrx8k9grcoLGPKLPd%2FtqEQyPHrVvgf%2FsITBj5s6RkPDcs1YvFGagPw7lu%2BpHW24pHO%2FpC15mvXUiUS7IW46GAyM6Xog3qLFvWKMLytjr8GOqUBaJdIhf%2FE%2BVLd%2FgLyXeHXmFfbx0AZYE6O85oxCheQIxjGYv0LUog6FLRWf4g86BEd1C8T7MRp9nDTbvejeULmAlhiV1pY2GmCMaS9kR%2B4scW0xB06tnsDEdrsF5LqCmw6HTp%2BUQgZB5r6vrkS2piV1vV310swbXkMhxvMbZIfqGqDeq13QusxkOOA3Ialee4ZL5wxpKt5EhqvNssAB3DNS%2FC5XQz%2B&X-Amz-Signature=7ae0272aa970c6f11c3711e351dc298a6a56fede204a8fca32ba3d9c963de8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
