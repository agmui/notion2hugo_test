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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O6IBGYO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7UDd4zG%2Fr24jF9Svq53rsLVQyS4ppwNY%2Fgg%2BPQjcUXQIhAOaw2tk4NGO6L2AhLyXxDCLeumhA8kJWsoIvUZ0LlbcWKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywElJc%2Fhghjd0OLmUq3APYouG%2B1DVDJNJ%2BG6C79ddrN2u90Rezwtt1kaamtCXLoQBY8gEI7%2FJG43FDDsneWTmqSMd1pDjrGehJRSeMgiosMQ4%2FEsAQvyGw7DCqEwfvfUg0RBGWexYAuEBDgKfO59in9J0dI7KMgqhcwRYgbFdayPtFmOvWf08hayZf6YBMOcM0%2Bll3z4vs0wXFirSY8Ij3zYgztXAsP9QO4T23ydM149JiPXxT5EThUn2IXyEBIkccxg%2Bul9cSSx9lJpEqrl1Jxnh3nS9%2F5%2B7JiWGVJAaavkWWwwZ1VSO3UYlPFM%2BPP3vlaDggC0rNc%2FipV0THEf7w%2FLuXU%2BvOMogfAaDdkLwvPkEdcw%2BllXfrheIyvbl3kOANqad85a%2FyW2N9oMg5d1%2B1a%2F57CZw37e5tmZfFkwZO%2FsQSaXcAsADT4juzdWtyZbUUWqEFnuEJDhbSF8NkRXc85zrkeLkqI7ekjcag5Tgz%2FXD0q7lBURoMcPouUrRmvNzNgSaey4NrjnODajKWZWndcbZKoZIVaavBRNXsszzK0un5a2OJx3a33Ak6r82TbQS%2F8ttwgLXmAdJFHmASnob%2FVbh%2FCefqiGUdWIer3TIwAwjRgXnZuO9kwOoY1Ew5%2BJ%2Ff16CKFKreqc4kOzDwupTDBjqkAfkn5hq9vBDOuw40FyuiJgZzt2kCaFOViESG%2BdMB3sIr1FH%2FlBBgeWP8BBF2MQ1Ovd4QUkBV%2BOwyj9SVUx0Bgptvp6sNnNZmEEPKopLP4iVXpyUvScdlirv5%2FwVOCYu7lDZH7MjlieuwvSIZASWtIIQOHMaeBz3muQUkn6qA%2FRrCZIKY9VS9wiXD5S%2BM3DX3Jq5ALWwd6eZMbcUJ%2FLFTf5Z%2Fe%2BLO&X-Amz-Signature=4cbcd36dad4b2022b6612e6453326cb81609081ba1ce40e00e847e3f5f0b9088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O6IBGYO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7UDd4zG%2Fr24jF9Svq53rsLVQyS4ppwNY%2Fgg%2BPQjcUXQIhAOaw2tk4NGO6L2AhLyXxDCLeumhA8kJWsoIvUZ0LlbcWKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywElJc%2Fhghjd0OLmUq3APYouG%2B1DVDJNJ%2BG6C79ddrN2u90Rezwtt1kaamtCXLoQBY8gEI7%2FJG43FDDsneWTmqSMd1pDjrGehJRSeMgiosMQ4%2FEsAQvyGw7DCqEwfvfUg0RBGWexYAuEBDgKfO59in9J0dI7KMgqhcwRYgbFdayPtFmOvWf08hayZf6YBMOcM0%2Bll3z4vs0wXFirSY8Ij3zYgztXAsP9QO4T23ydM149JiPXxT5EThUn2IXyEBIkccxg%2Bul9cSSx9lJpEqrl1Jxnh3nS9%2F5%2B7JiWGVJAaavkWWwwZ1VSO3UYlPFM%2BPP3vlaDggC0rNc%2FipV0THEf7w%2FLuXU%2BvOMogfAaDdkLwvPkEdcw%2BllXfrheIyvbl3kOANqad85a%2FyW2N9oMg5d1%2B1a%2F57CZw37e5tmZfFkwZO%2FsQSaXcAsADT4juzdWtyZbUUWqEFnuEJDhbSF8NkRXc85zrkeLkqI7ekjcag5Tgz%2FXD0q7lBURoMcPouUrRmvNzNgSaey4NrjnODajKWZWndcbZKoZIVaavBRNXsszzK0un5a2OJx3a33Ak6r82TbQS%2F8ttwgLXmAdJFHmASnob%2FVbh%2FCefqiGUdWIer3TIwAwjRgXnZuO9kwOoY1Ew5%2BJ%2Ff16CKFKreqc4kOzDwupTDBjqkAfkn5hq9vBDOuw40FyuiJgZzt2kCaFOViESG%2BdMB3sIr1FH%2FlBBgeWP8BBF2MQ1Ovd4QUkBV%2BOwyj9SVUx0Bgptvp6sNnNZmEEPKopLP4iVXpyUvScdlirv5%2FwVOCYu7lDZH7MjlieuwvSIZASWtIIQOHMaeBz3muQUkn6qA%2FRrCZIKY9VS9wiXD5S%2BM3DX3Jq5ALWwd6eZMbcUJ%2FLFTf5Z%2Fe%2BLO&X-Amz-Signature=c4958c4b879f82f3faa16086380a6232eab7f26633c142dcfb109100e602f244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
