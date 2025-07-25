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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYZXJGW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIChxsTpOfpGHkZ%2F284HzZSC8Ab95vmZWjx%2B3VT3EJWttAiEA6IHWBUzdDrF1YO5rlBB%2BELKlvuEmjAB2fiHOgYxro%2Fwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPMPKK5F4951oqgApSrcA3f4EbGT4u9dTpHJ5WUZdoKLpBcLRqtAu3lvYanRBrDZ%2FDHlt%2F0IrcAsskQMwNA658BpagNl5bcNAi1JVn30D9QQxSvFW6cyxU96svdwPydPxdxH55EXFRJ9CT8YYnwNmYYqJc0KTYnPk3FmP7VWjV%2FnOfYRQdCvRDIfRiP6WKrRbZXHaEd156YzlvnAZfg9gX4ZfUB%2F29ZGnDB5Dp6XHi5kq3kZhP5NhCXHSdgM0zHnLmUxYOCmb3H3z9i36wASFmyLY2hHEM8hpk88CgvISWZl0I%2B2KZrMkelaWWOK2AVsNhgeModZpxKU4za3Pejla%2BBFpmarjF5JTWGlrA%2Fby3Mp9xYgStpZBDxVCZyKhTQRnUihXNPexOHWlPZ4gQdxtdywEUhJgMTXil7YPECaj2e6qCKZ0PRipS1qk%2FhG4hK%2BAMAlPi9o5F9oom5IYyFARrCBkMrFnZEGxHZ9Hp3MswJSQnr3FPojVwK4aJTuFCo6LfRwi5w6qulQWe3ex%2BWLxo8UDRDTXdshyQpUH37rVmcRyX0TsUlB6s96p677WuNjU0gJRyfmUQKpvKHg%2FkcZDiLMG11aUYXsA%2F3fBPIv86sW3I46eRkflI7qT7uZECXEIttfpaIvDBHxLGv5MJaHjsQGOqUBLZ8lsHXd5Tug2UOq64P8wJ8PPHkW1hcp6kbz%2Bzc0x8ykMvSssq%2FUAkmncm6sMr6G%2Bi2xMHCfPp2eOAR9%2FLtx33vPoRtXubnRL9jYRR7XySiqR%2BpdEMnlftY4l9qVBD7acPbyqOxkWo404DdvxgLDDYj%2FjW%2FBev7YiWx%2FGqQpY1bVAvdBS23ol6DtV4A3kJA%2BmJ%2FOHbzgPKiqpNCJdL0Cwby5cUWm&X-Amz-Signature=b835f632a83ac6e25f6fbff0e7f4e4163c35fbec936be28a5be3b18059737759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYZXJGW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIChxsTpOfpGHkZ%2F284HzZSC8Ab95vmZWjx%2B3VT3EJWttAiEA6IHWBUzdDrF1YO5rlBB%2BELKlvuEmjAB2fiHOgYxro%2Fwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPMPKK5F4951oqgApSrcA3f4EbGT4u9dTpHJ5WUZdoKLpBcLRqtAu3lvYanRBrDZ%2FDHlt%2F0IrcAsskQMwNA658BpagNl5bcNAi1JVn30D9QQxSvFW6cyxU96svdwPydPxdxH55EXFRJ9CT8YYnwNmYYqJc0KTYnPk3FmP7VWjV%2FnOfYRQdCvRDIfRiP6WKrRbZXHaEd156YzlvnAZfg9gX4ZfUB%2F29ZGnDB5Dp6XHi5kq3kZhP5NhCXHSdgM0zHnLmUxYOCmb3H3z9i36wASFmyLY2hHEM8hpk88CgvISWZl0I%2B2KZrMkelaWWOK2AVsNhgeModZpxKU4za3Pejla%2BBFpmarjF5JTWGlrA%2Fby3Mp9xYgStpZBDxVCZyKhTQRnUihXNPexOHWlPZ4gQdxtdywEUhJgMTXil7YPECaj2e6qCKZ0PRipS1qk%2FhG4hK%2BAMAlPi9o5F9oom5IYyFARrCBkMrFnZEGxHZ9Hp3MswJSQnr3FPojVwK4aJTuFCo6LfRwi5w6qulQWe3ex%2BWLxo8UDRDTXdshyQpUH37rVmcRyX0TsUlB6s96p677WuNjU0gJRyfmUQKpvKHg%2FkcZDiLMG11aUYXsA%2F3fBPIv86sW3I46eRkflI7qT7uZECXEIttfpaIvDBHxLGv5MJaHjsQGOqUBLZ8lsHXd5Tug2UOq64P8wJ8PPHkW1hcp6kbz%2Bzc0x8ykMvSssq%2FUAkmncm6sMr6G%2Bi2xMHCfPp2eOAR9%2FLtx33vPoRtXubnRL9jYRR7XySiqR%2BpdEMnlftY4l9qVBD7acPbyqOxkWo404DdvxgLDDYj%2FjW%2FBev7YiWx%2FGqQpY1bVAvdBS23ol6DtV4A3kJA%2BmJ%2FOHbzgPKiqpNCJdL0Cwby5cUWm&X-Amz-Signature=01d1d37d255c0c4e3fbd926372674f8d14b22e100274e1c939eb4274cd83eb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
