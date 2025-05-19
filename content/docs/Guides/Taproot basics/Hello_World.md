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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOOYF6R%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWlBHbyYLB%2BzA5JKn3HP1ccv2wZ7EOvze%2FlHYNyNvk9wIgSZISfblHQmXUuc0HcpBK2zwwFnuDf4TRiKNE45%2BHJSkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS3ZQ0%2F5n3mwl9sPyrcA%2FTXb3j7%2B1QIJsqn4Qe%2BxgRpPRYLFYvaq8k0FZQNrXP09oBr2wahHedDw1MgWEYOO%2Fty4k9BS657R7zDUbMW0kW9LGXpGx5%2Frf5qyE4OYKdh4k4c71hlj8sp4hCmsNWlsD5dwJ%2FPH%2FrE9PBpVEa%2BERTIRIzXTCKfWVI9qYRU2%2FEknIeWc6fUr3jom3XHYP6%2BeTtbzJOm%2B2ABAkKVCcm%2B2LfAyiIZMRgFdbn8gu%2ByZWsnlktg%2BPxMo9D7SrrjKoFzbJRfjgRzx7bjV1oZR02xOsOyrJgkJOz%2BLpYmMps%2FVET%2B%2FJuUtGgoAfpVnAgfRH3RZMRd9PpaNclVUEvbrYXgG2QaJ1iffJQrjsAIhWGvCTR4f5XZa75siEZefCzxwZ1YrsuzJGawkcXttNrePNHCPkuoeqmbqzUZHNzAtcfjKfoKaUwCCSF8v31xrSF8kbBhhTAEr%2FOemhEdVs7QGTtYwY90p%2BtRS9U0oLg3rxT8fXdbSbVr1JUWLalHEUgkNQ314N31819hQ19xmeJulSjFTEmaHBY2AFuyxL7wzOwEckF%2FD6masEfK3UElgfIURNS7uJQO4Vl0aFiAuRaV8WRw4yZXTd1g%2BwwI2Ba0ig34hQwmvppW7bS%2BubS9TnGSMM%2F%2FqcEGOqUBX2Uzd0ObdgiguSaecGYgQX%2B11oytlvyaV6IhsX0yZ9XxeTLOPDTJ58Hs7HA961DPMo9OFINcnEtUL2v5h%2B3REjC8YG1KA7V4t37UkmVwYPfPYKezcLP4s3paLG99P738sWeauzbswEmfDcW%2By0anI1iNbgV%2FlDlBTSK%2BWqW7Q8ovI9U39z6SsmPRY0Ci53daXuwQlODIODJoF%2BMn81%2FWmRsOdw1b&X-Amz-Signature=702b08cbee5da54cbf166024a79c1bf011ba47444474d2743371f44ef142f1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOOYF6R%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWlBHbyYLB%2BzA5JKn3HP1ccv2wZ7EOvze%2FlHYNyNvk9wIgSZISfblHQmXUuc0HcpBK2zwwFnuDf4TRiKNE45%2BHJSkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS3ZQ0%2F5n3mwl9sPyrcA%2FTXb3j7%2B1QIJsqn4Qe%2BxgRpPRYLFYvaq8k0FZQNrXP09oBr2wahHedDw1MgWEYOO%2Fty4k9BS657R7zDUbMW0kW9LGXpGx5%2Frf5qyE4OYKdh4k4c71hlj8sp4hCmsNWlsD5dwJ%2FPH%2FrE9PBpVEa%2BERTIRIzXTCKfWVI9qYRU2%2FEknIeWc6fUr3jom3XHYP6%2BeTtbzJOm%2B2ABAkKVCcm%2B2LfAyiIZMRgFdbn8gu%2ByZWsnlktg%2BPxMo9D7SrrjKoFzbJRfjgRzx7bjV1oZR02xOsOyrJgkJOz%2BLpYmMps%2FVET%2B%2FJuUtGgoAfpVnAgfRH3RZMRd9PpaNclVUEvbrYXgG2QaJ1iffJQrjsAIhWGvCTR4f5XZa75siEZefCzxwZ1YrsuzJGawkcXttNrePNHCPkuoeqmbqzUZHNzAtcfjKfoKaUwCCSF8v31xrSF8kbBhhTAEr%2FOemhEdVs7QGTtYwY90p%2BtRS9U0oLg3rxT8fXdbSbVr1JUWLalHEUgkNQ314N31819hQ19xmeJulSjFTEmaHBY2AFuyxL7wzOwEckF%2FD6masEfK3UElgfIURNS7uJQO4Vl0aFiAuRaV8WRw4yZXTd1g%2BwwI2Ba0ig34hQwmvppW7bS%2BubS9TnGSMM%2F%2FqcEGOqUBX2Uzd0ObdgiguSaecGYgQX%2B11oytlvyaV6IhsX0yZ9XxeTLOPDTJ58Hs7HA961DPMo9OFINcnEtUL2v5h%2B3REjC8YG1KA7V4t37UkmVwYPfPYKezcLP4s3paLG99P738sWeauzbswEmfDcW%2By0anI1iNbgV%2FlDlBTSK%2BWqW7Q8ovI9U39z6SsmPRY0Ci53daXuwQlODIODJoF%2BMn81%2FWmRsOdw1b&X-Amz-Signature=fd8ab520f62e699d155b86c08f89305f58b50ae278299a1ae3a20869404979df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
