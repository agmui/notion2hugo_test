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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITJDSQX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDnErB1fLCWsNtTmwuxJ8N1XC48rO7mp47WDdtcYQ3EnAIgJptQro8wX4KiMHNiQc67sSZEZhUdK8tN8E4oyikZv64qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWiRR6%2F9GjqqM5V%2BSrcA5dLs4k%2F41I7bJXJ8sEOFE6M4aWhk4X6XJ1VX2EBuE0Q3DtPujTpurgYnTfhp0%2B2mY8XgSuaZHVZ9%2BluJ4sQOmpiNbPst75x576fkmE7OOlgV4rZTghJIk687F0uMwspq%2F0Fs1aTySCWAlzxCRsHPCFBqrVZiY2FFO73xVdKdNFWycvM%2BB0tmoL16I4Ki1BKJNLCHyk8gHWCOkCpGoPGrymEwREMEIGfjl58wBa698huVgVJOGk4sS16gzmc%2FTUNwUwM5ujMwvVpGnWXxNDcjrUu262G%2BPkoR1K42%2FLUrXsb4bCj%2B%2FWasNbKMWjNT2UvEcwSKyUg97iVMijBU4EiruSDA3nl6g0mtwULCtzoTH%2BTIFgSC07zBdEjoUdQs%2FVc3J%2Fk3UCpu2bb2rie12bVkpMvYh16Z29XFvqfVaxaJI9wwSnU5P0gFTpnOf7eIFJT1eWnBonkwYvZpjAS9qsOvEx%2BBn%2FeZ1D769dYCVgs1ExYul4kh5tEtB5F12n5%2B2nTm26R9Kudz5eDwtLVKX3vdXiIeUeb6J7aj5TIdonfbpR4f0JOI45t8Dwseo%2BngrvLfELv8Yu3RD%2Fn2o5imM3%2BH0yNGsxaKxfmHs9rdcCLGk9HHRmI%2FTCizgTlrj%2BNMNaq4r8GOqUBvYqXz028k59Pbu04%2FFH%2BCpkaE8IENVBV2Rbb5Zo7f4%2BtHZqVnClpfLYH%2Fc2WzSSjWrpj5gXX83O3nqZpe4C%2BodU2p4iSgyd%2BCHea4cw%2FtniLMFzHCyWShaR0KLCREtdT99yUqPPNSfAt%2BhLGm2yQ%2FnE12UdTDDN%2Bfy5%2BxixXEw%2FhUbqA8SWU4Cek2VKredIFtOg%2FH5%2Fjd54WxCDyDQJn1pe6cTbo&X-Amz-Signature=80a4f84a2cecae34efdf6dd525be97628b54ac723e294b08a793c12b51daf266&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITJDSQX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDnErB1fLCWsNtTmwuxJ8N1XC48rO7mp47WDdtcYQ3EnAIgJptQro8wX4KiMHNiQc67sSZEZhUdK8tN8E4oyikZv64qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWiRR6%2F9GjqqM5V%2BSrcA5dLs4k%2F41I7bJXJ8sEOFE6M4aWhk4X6XJ1VX2EBuE0Q3DtPujTpurgYnTfhp0%2B2mY8XgSuaZHVZ9%2BluJ4sQOmpiNbPst75x576fkmE7OOlgV4rZTghJIk687F0uMwspq%2F0Fs1aTySCWAlzxCRsHPCFBqrVZiY2FFO73xVdKdNFWycvM%2BB0tmoL16I4Ki1BKJNLCHyk8gHWCOkCpGoPGrymEwREMEIGfjl58wBa698huVgVJOGk4sS16gzmc%2FTUNwUwM5ujMwvVpGnWXxNDcjrUu262G%2BPkoR1K42%2FLUrXsb4bCj%2B%2FWasNbKMWjNT2UvEcwSKyUg97iVMijBU4EiruSDA3nl6g0mtwULCtzoTH%2BTIFgSC07zBdEjoUdQs%2FVc3J%2Fk3UCpu2bb2rie12bVkpMvYh16Z29XFvqfVaxaJI9wwSnU5P0gFTpnOf7eIFJT1eWnBonkwYvZpjAS9qsOvEx%2BBn%2FeZ1D769dYCVgs1ExYul4kh5tEtB5F12n5%2B2nTm26R9Kudz5eDwtLVKX3vdXiIeUeb6J7aj5TIdonfbpR4f0JOI45t8Dwseo%2BngrvLfELv8Yu3RD%2Fn2o5imM3%2BH0yNGsxaKxfmHs9rdcCLGk9HHRmI%2FTCizgTlrj%2BNMNaq4r8GOqUBvYqXz028k59Pbu04%2FFH%2BCpkaE8IENVBV2Rbb5Zo7f4%2BtHZqVnClpfLYH%2Fc2WzSSjWrpj5gXX83O3nqZpe4C%2BodU2p4iSgyd%2BCHea4cw%2FtniLMFzHCyWShaR0KLCREtdT99yUqPPNSfAt%2BhLGm2yQ%2FnE12UdTDDN%2Bfy5%2BxixXEw%2FhUbqA8SWU4Cek2VKredIFtOg%2FH5%2Fjd54WxCDyDQJn1pe6cTbo&X-Amz-Signature=e6ad0273c513716958b1bdca20141953b7fb79c53f2aaa48033fcf9ef0ff601e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
