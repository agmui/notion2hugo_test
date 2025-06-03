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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPV5577%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCaH8jJBlMBLKIC2nlfyWimLQXGb1KDodnDRstxHXlA2gIgdOBg%2BKJMVAAC3xaw9n07edIfy%2FkXwc%2FlJg%2F02SvCPBsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQTrgXhxYSy89V4KircA1WGDrXNI5VjfkZq7q%2BalboApf7dydnWDERKJqyX9asx5GtWm7rXsoi7ticcwplr6HrdSmCrVdlyNlhPH%2F2FwRyoVNyWKBgZRl2vowH4Ffk0JVeJYgVqoB%2FbJt91QHFG%2BTkEPoXuHEglBicjUR7kduOPtlihQbOMkOZm05fcOdKgrKhgs0ikXp2R67u99bIop%2BmR2LV%2BwC5rKnlgueRNhh1aq93G4%2BCkVluV3iOeVUJ0wUdooY4LuDey89WljPJa8PdVUJYyYKvinmyyMleubFJ%2FhI5jEnbBoH%2FYeR5sRwIjGw8QciLvtT5nESxmbKiQB9gdDmuy0Pydjr87x2wh%2BbZFUvogSKvkNw%2BPEiGvOS465apEZPYil%2BZwvTU75F1GmuX51zK5z131sGHVJ8Kjl5jODLGDFmMdS2J0zNAH5K6NnyZu7QiwkTMly7LvPhN%2FNaESJ7hNXj9AoC4n2hjN8Jw5h7F4fAC7yckJGXBxxP9JZ19zoZCmul%2BnlYxCv4wEo1tmkEFkvwclqKUyfjFe8Db1K3OTXHTqacQDevWRGqVVFaeZWb7iRlHXaiGZNYVZfYbVCy75%2Fj9a3BoIOSVE4inA23Icfqk%2FwWbEY5ywGrCxHvMK99Y0rDeXg2J9MNCM%2BcEGOqUB9V3er3S9URjp5XvBq1ooMHwaSvmEYgUCxH2AknbzblS4R8JZzneEQA2eTi%2FZMSl80Xp%2FV1iBJt1L8a%2BxMgZoONsd4IkjYL5FdP8szdN6alfmIljLR95V6%2Bj6hiHA%2FpjaBJB1fUkAWCdVbANnKSPf%2BbBdeSn9QXJkmy7dsWzVaxUIpnChiR2LLvLLq5kijQSAACyN3CIW2jKGDZpy%2Fp2ED144VDYr&X-Amz-Signature=14381d98592039378ca2f67830981e02589d3b8e4cce6f4da405b84fcd58d2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPV5577%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCaH8jJBlMBLKIC2nlfyWimLQXGb1KDodnDRstxHXlA2gIgdOBg%2BKJMVAAC3xaw9n07edIfy%2FkXwc%2FlJg%2F02SvCPBsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQTrgXhxYSy89V4KircA1WGDrXNI5VjfkZq7q%2BalboApf7dydnWDERKJqyX9asx5GtWm7rXsoi7ticcwplr6HrdSmCrVdlyNlhPH%2F2FwRyoVNyWKBgZRl2vowH4Ffk0JVeJYgVqoB%2FbJt91QHFG%2BTkEPoXuHEglBicjUR7kduOPtlihQbOMkOZm05fcOdKgrKhgs0ikXp2R67u99bIop%2BmR2LV%2BwC5rKnlgueRNhh1aq93G4%2BCkVluV3iOeVUJ0wUdooY4LuDey89WljPJa8PdVUJYyYKvinmyyMleubFJ%2FhI5jEnbBoH%2FYeR5sRwIjGw8QciLvtT5nESxmbKiQB9gdDmuy0Pydjr87x2wh%2BbZFUvogSKvkNw%2BPEiGvOS465apEZPYil%2BZwvTU75F1GmuX51zK5z131sGHVJ8Kjl5jODLGDFmMdS2J0zNAH5K6NnyZu7QiwkTMly7LvPhN%2FNaESJ7hNXj9AoC4n2hjN8Jw5h7F4fAC7yckJGXBxxP9JZ19zoZCmul%2BnlYxCv4wEo1tmkEFkvwclqKUyfjFe8Db1K3OTXHTqacQDevWRGqVVFaeZWb7iRlHXaiGZNYVZfYbVCy75%2Fj9a3BoIOSVE4inA23Icfqk%2FwWbEY5ywGrCxHvMK99Y0rDeXg2J9MNCM%2BcEGOqUB9V3er3S9URjp5XvBq1ooMHwaSvmEYgUCxH2AknbzblS4R8JZzneEQA2eTi%2FZMSl80Xp%2FV1iBJt1L8a%2BxMgZoONsd4IkjYL5FdP8szdN6alfmIljLR95V6%2Bj6hiHA%2FpjaBJB1fUkAWCdVbANnKSPf%2BbBdeSn9QXJkmy7dsWzVaxUIpnChiR2LLvLLq5kijQSAACyN3CIW2jKGDZpy%2Fp2ED144VDYr&X-Amz-Signature=e11fc441194fa3e36decb43f1e366efba00945127abf4acb0d64f46702a83d90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
