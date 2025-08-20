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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFBV6UB%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BA%2FD9Sym6UQtAWOZQ%2BfFuc3Bqt5fZRvNt7ecgSmLSnAiEA8Pobd5Fd9ezxrl%2BIqQ7Zhb5Icv7x6Y2FUY8k9MSs2XEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdTK0uteLjkWff7qircA6aWTjyba6ROSyZPBgsVDqrPlgmsLCNWNQLJiv6OGPd%2BZCAxoPT8opfdNhtCjkuSBTlw3wREIZ7UepqVrkXdN7BILo%2B1WB%2BYaqggEyYmc0njUR7VQ%2FA6btHo2%2FnJHXQ4Q4bkN6jou0knsbswXiFQuERQz5AIllw7%2BYj5Rbc8LAflSdbD%2BhNuI%2F5rgwWoitVqnKfhEPu7TY7ndTdVms1H7ZXmdDfVXDEhNO1bgnIRvI1fsqVeVVq4hSvP9emI4diX7JbNu0mHY4RtrDnn29EPGpMddjXQqN7m4ABxQgMiDqreFEFrm6OjTIEfDVoUReucznO4vKxiwbZapxpWs2PQMCrzWW43PLaObVXJECcisFxdjUPmFvQmW%2BUWDZdJlHxq%2BJZP2yp8MnTy%2FalQOqNrsHxNC2NuDrcpVtJw8sZ%2Fho8WtpuIMKU8n05hIo6WL5r3K6Ia%2FLuxBwOWwkjhbct5o5tCEDCjx%2B9OXq%2B1K5SDjZfl4EvD%2FX7aSFg5wnjQjGMya%2FA9U2z6zD6eyu180K3p5DtInU3%2FOssz2oh7CQCH7kz%2BsfxT5rf8t4BEoOizzfCqmVcwEwPR75fnlf%2BUQAXzK0OmpMtHMS1YhTvPYJi1dWafn0vEAFqHu4D6Whs5ML%2BnlsUGOqUBwFQL1m0pf9fZy%2Bh2cbEMxmnd5ON2zng5X%2FHCtsM4ffe1Hub3DBusD31mgX6oewKFm3uqNL2Fcfkks2S9R2yMWv30AvUnQFcDZXxzv8H%2Fp6%2BfnhgwqhDOFZMw727Hv267xik0np0%2FiNq%2BrdNWK%2FmPdPWuigdsacc79%2BkAGf%2FFSpC2BtumXON4fMKupuEsUYbboTSNj1KDUqStqqrOeJ8Jmz19UYpi&X-Amz-Signature=49182d340a90a7dc017dee5f32277b3bf032a44d59542908d0bfd8c5ba4a42ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFBV6UB%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BA%2FD9Sym6UQtAWOZQ%2BfFuc3Bqt5fZRvNt7ecgSmLSnAiEA8Pobd5Fd9ezxrl%2BIqQ7Zhb5Icv7x6Y2FUY8k9MSs2XEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdTK0uteLjkWff7qircA6aWTjyba6ROSyZPBgsVDqrPlgmsLCNWNQLJiv6OGPd%2BZCAxoPT8opfdNhtCjkuSBTlw3wREIZ7UepqVrkXdN7BILo%2B1WB%2BYaqggEyYmc0njUR7VQ%2FA6btHo2%2FnJHXQ4Q4bkN6jou0knsbswXiFQuERQz5AIllw7%2BYj5Rbc8LAflSdbD%2BhNuI%2F5rgwWoitVqnKfhEPu7TY7ndTdVms1H7ZXmdDfVXDEhNO1bgnIRvI1fsqVeVVq4hSvP9emI4diX7JbNu0mHY4RtrDnn29EPGpMddjXQqN7m4ABxQgMiDqreFEFrm6OjTIEfDVoUReucznO4vKxiwbZapxpWs2PQMCrzWW43PLaObVXJECcisFxdjUPmFvQmW%2BUWDZdJlHxq%2BJZP2yp8MnTy%2FalQOqNrsHxNC2NuDrcpVtJw8sZ%2Fho8WtpuIMKU8n05hIo6WL5r3K6Ia%2FLuxBwOWwkjhbct5o5tCEDCjx%2B9OXq%2B1K5SDjZfl4EvD%2FX7aSFg5wnjQjGMya%2FA9U2z6zD6eyu180K3p5DtInU3%2FOssz2oh7CQCH7kz%2BsfxT5rf8t4BEoOizzfCqmVcwEwPR75fnlf%2BUQAXzK0OmpMtHMS1YhTvPYJi1dWafn0vEAFqHu4D6Whs5ML%2BnlsUGOqUBwFQL1m0pf9fZy%2Bh2cbEMxmnd5ON2zng5X%2FHCtsM4ffe1Hub3DBusD31mgX6oewKFm3uqNL2Fcfkks2S9R2yMWv30AvUnQFcDZXxzv8H%2Fp6%2BfnhgwqhDOFZMw727Hv267xik0np0%2FiNq%2BrdNWK%2FmPdPWuigdsacc79%2BkAGf%2FFSpC2BtumXON4fMKupuEsUYbboTSNj1KDUqStqqrOeJ8Jmz19UYpi&X-Amz-Signature=56720d393c4f1559f37eab7ac6eac708a52ad817afb324ca5eea6f4a89b4e781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
