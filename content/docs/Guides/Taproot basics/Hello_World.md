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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2E5GBUP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbiA7T0BkmmQkLM067LmRsc%2FX%2F1qf%2BkWzaukqf8ABMAiEAvkls%2B6cuGWzCFbGZijX1ftg19lsZUcWtcCQTzHiVshAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQwb6XqzGvjpypF%2BCrcAzElqREuqraXKLfN1XulinfWkE3SRBStciDyL1KRX%2FdFF5hNnDKrFmPzg%2FW9Yh0Ie4Q2fW%2BFCwhun0%2BsvDt9AbcqC5FMBI3nUWFuwQfwDUYqBjLNYoFphkDQoIya3XN%2BIDnX%2BghbnswssbORlzQsHC9ZQKbHKAOrSCYsj4vXcNhEFZ%2B5%2FLzPh2PyElVOsJln%2BxiCaOpFFeRsq2LxPoXBFA2Saa%2BWGASYaRuC6ucpOyTkiVYT%2Bw4J7p8S5jdy2qRNae%2BaPjK4pvBPRfm3iK2qP1zH8CJie7MUIi8e%2FqTpNS57xD7qENgZRm5wW3LpesLGJE%2FJOvek6gcaLQnaNImTDBFxJSMcm3LAj1H0%2FTEkap%2FiNoIfyGgfmPO03ExFIjYhRIkx52XwrHJ9oASoL3A%2BzXiMSxY3BRgti%2FDDGdvAQRgofoeRnMS07t6PoTiczuX52OnAwjpm8SEhFybGykgeWcak%2BdDcED6z09%2BEhCMSxRKTNn0YmiZqj4dsbYnIFYr3749dLAyAycYewmP2pG7DpYduod1h%2BoULaM7fHiPTr7hfiA%2BCiJfakjCZXon9EQNnHxZxa7AhJXDw7xSK8bt%2Bzp79jDPYQYSXVnY0wXiMMZbi9BIeT%2Bw11BP8FTLNMJzc5cEGOqUBmmlXv8Uhwp8Rwa1szAxrfr6C0wyO3ta0rU0SYpqiT658V91sIaqktY0vChJfPRBNDSRuOL26zgA7ZxQVtUlHlmiRr%2FIG4UIJbtXuhqlyH1P6Q17dvEG8IH3XcZoFdFXPXtT1ITJydOdizE%2BlyvCBeEzm%2FOJwPBuw4427L5WGihCTfDuRvGk0mxTW7ZqPArULq5ZSJ%2BFxg%2Fea3JITGiz9lt9AYQIE&X-Amz-Signature=d53d6946c45b73abd3ec0751ea2cbd692a286cf4e148f664942c23a03de493af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2E5GBUP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbiA7T0BkmmQkLM067LmRsc%2FX%2F1qf%2BkWzaukqf8ABMAiEAvkls%2B6cuGWzCFbGZijX1ftg19lsZUcWtcCQTzHiVshAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQwb6XqzGvjpypF%2BCrcAzElqREuqraXKLfN1XulinfWkE3SRBStciDyL1KRX%2FdFF5hNnDKrFmPzg%2FW9Yh0Ie4Q2fW%2BFCwhun0%2BsvDt9AbcqC5FMBI3nUWFuwQfwDUYqBjLNYoFphkDQoIya3XN%2BIDnX%2BghbnswssbORlzQsHC9ZQKbHKAOrSCYsj4vXcNhEFZ%2B5%2FLzPh2PyElVOsJln%2BxiCaOpFFeRsq2LxPoXBFA2Saa%2BWGASYaRuC6ucpOyTkiVYT%2Bw4J7p8S5jdy2qRNae%2BaPjK4pvBPRfm3iK2qP1zH8CJie7MUIi8e%2FqTpNS57xD7qENgZRm5wW3LpesLGJE%2FJOvek6gcaLQnaNImTDBFxJSMcm3LAj1H0%2FTEkap%2FiNoIfyGgfmPO03ExFIjYhRIkx52XwrHJ9oASoL3A%2BzXiMSxY3BRgti%2FDDGdvAQRgofoeRnMS07t6PoTiczuX52OnAwjpm8SEhFybGykgeWcak%2BdDcED6z09%2BEhCMSxRKTNn0YmiZqj4dsbYnIFYr3749dLAyAycYewmP2pG7DpYduod1h%2BoULaM7fHiPTr7hfiA%2BCiJfakjCZXon9EQNnHxZxa7AhJXDw7xSK8bt%2Bzp79jDPYQYSXVnY0wXiMMZbi9BIeT%2Bw11BP8FTLNMJzc5cEGOqUBmmlXv8Uhwp8Rwa1szAxrfr6C0wyO3ta0rU0SYpqiT658V91sIaqktY0vChJfPRBNDSRuOL26zgA7ZxQVtUlHlmiRr%2FIG4UIJbtXuhqlyH1P6Q17dvEG8IH3XcZoFdFXPXtT1ITJydOdizE%2BlyvCBeEzm%2FOJwPBuw4427L5WGihCTfDuRvGk0mxTW7ZqPArULq5ZSJ%2BFxg%2Fea3JITGiz9lt9AYQIE&X-Amz-Signature=9212e0bdfbc18db4d23ee51e1153831f402c966592802a834f5198180ba55965&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
