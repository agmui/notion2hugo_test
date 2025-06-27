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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL47OFN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCo%2B97Nz2HBx%2BJToZB%2FGYvgKDeSlDO2xSci%2FTGkF1IJXAIgSeZ8eGk4yVxjw%2FrdWl1uUDGoXDmYQBktucpo99a0s30q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDODgMfs6yNFzLnHDhCrcA%2BJiULW2uuArUSvs3GXZrb%2BY5vXT4XCi99GcwhSSny7qKkv8CnDhcOgxCBSAMa75%2BXmmekP2APAVRJSPnwFiDRx1KvJ2PDv2W9QBoLv2mR2ULF%2BcjPWpmucd0zjx5vi3293WiOM%2ByQsSiLyPSOxnH9o3Mej19mryyvM9ZkjPZoFXg%2FP9exraRqRtz9X9crPtm8yUMun5juWT6Ga9VDxmjt2yMMBoCaLYHgHFMSe1ciKndEotwyIEsF%2F3fbcjCDsxKI%2B%2FEynTmBvu9sn00td9fqpWmjH3iRcXTBepkM57RLr8lsCxWnhw%2FCRli4berYy%2BQEXPZP5dlkLi7mvokirPeOGxeAVWMnq3792xCmpGFlEsh%2BpIfV7Tb%2F20txyMSGD%2FsMnJOt24ROpOdvMjhgKVCF7oKotg5ZaKEjlKPv9LdV%2BIjgd%2BSmsJsfQzjPUomIr6hypW3n5HXdzlD8j89x4UULJVAIhis8cwYW06pqkwpyFyi5J5JISa3fx%2BL4MB%2Bvr1gmyLM3syz1D0Gm2UrbawPf9odpOu4%2B3brkx8vH50v63fXufPJbhTT%2FJ%2BTlCfDurGsDN523D09cHo3fM0LA3IqOLsVNGUgXfviOlWhDbxOC35JABK7q34dKIDPPJdMM6f%2BMIGOqUBX2mzxVMPGJgFZQJmxTW0GDKKWjZUKaP%2B6Et%2FuDW5libeGFhR1h7cqGvDf1uQTLk8VobJqeC5vGYlOdSRO4WVDUwocWwj6GoL1SNBuFc%2FIJI3pjE60udAf2WCArSQc1sqKBJfP9vbu5FbVyvKl%2FzD5tnHmIl2TyhxlJaDxJY521QW10XtDW2Uv%2FtMH2qfSwiE3m0hMRdHlw3b2RSqq2LCEcZAR22l&X-Amz-Signature=cc06d8f49da43e5858669fa7b400729181300a4964ce0354a2dc470d8d5971d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL47OFN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCo%2B97Nz2HBx%2BJToZB%2FGYvgKDeSlDO2xSci%2FTGkF1IJXAIgSeZ8eGk4yVxjw%2FrdWl1uUDGoXDmYQBktucpo99a0s30q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDODgMfs6yNFzLnHDhCrcA%2BJiULW2uuArUSvs3GXZrb%2BY5vXT4XCi99GcwhSSny7qKkv8CnDhcOgxCBSAMa75%2BXmmekP2APAVRJSPnwFiDRx1KvJ2PDv2W9QBoLv2mR2ULF%2BcjPWpmucd0zjx5vi3293WiOM%2ByQsSiLyPSOxnH9o3Mej19mryyvM9ZkjPZoFXg%2FP9exraRqRtz9X9crPtm8yUMun5juWT6Ga9VDxmjt2yMMBoCaLYHgHFMSe1ciKndEotwyIEsF%2F3fbcjCDsxKI%2B%2FEynTmBvu9sn00td9fqpWmjH3iRcXTBepkM57RLr8lsCxWnhw%2FCRli4berYy%2BQEXPZP5dlkLi7mvokirPeOGxeAVWMnq3792xCmpGFlEsh%2BpIfV7Tb%2F20txyMSGD%2FsMnJOt24ROpOdvMjhgKVCF7oKotg5ZaKEjlKPv9LdV%2BIjgd%2BSmsJsfQzjPUomIr6hypW3n5HXdzlD8j89x4UULJVAIhis8cwYW06pqkwpyFyi5J5JISa3fx%2BL4MB%2Bvr1gmyLM3syz1D0Gm2UrbawPf9odpOu4%2B3brkx8vH50v63fXufPJbhTT%2FJ%2BTlCfDurGsDN523D09cHo3fM0LA3IqOLsVNGUgXfviOlWhDbxOC35JABK7q34dKIDPPJdMM6f%2BMIGOqUBX2mzxVMPGJgFZQJmxTW0GDKKWjZUKaP%2B6Et%2FuDW5libeGFhR1h7cqGvDf1uQTLk8VobJqeC5vGYlOdSRO4WVDUwocWwj6GoL1SNBuFc%2FIJI3pjE60udAf2WCArSQc1sqKBJfP9vbu5FbVyvKl%2FzD5tnHmIl2TyhxlJaDxJY521QW10XtDW2Uv%2FtMH2qfSwiE3m0hMRdHlw3b2RSqq2LCEcZAR22l&X-Amz-Signature=3f4a0eadd34565f5c75b9ec919f189b7227a9cbd6f55629fbbe075631993552d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
