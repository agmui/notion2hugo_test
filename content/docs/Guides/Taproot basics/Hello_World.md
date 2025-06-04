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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGYXGMN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjLND8MzhOMLuOsck20vSC9emJSLRYWSjrFv2GzUP6HwIhAMu9yR%2Bbtkj0oUkF%2FvihGvt%2BmGWvApR%2FV4kIt2PFRr2DKv8DCCUQABoMNjM3NDIzMTgzODA1Igz9tOAJAIgTVqQr1kgq3AP5ZZLiQFPWii7VOmaCNhT8nVD7bhufo76m5O2zyet4AzY%2F0bpj0GJEGN6UO6EeyMSJFph8BZNbfxauXaR7tiThJdV8rxYcdfXYPxmr39fDCBqcgbuEVejIhBWAR9WnPucEBabVtHXPMRqGK38Jsacvu1WrFJRQkMAqiVDYz2dGjazUpXk30852GGXowEvEzp2%2BMn%2BZEMXhbXaoTKcFDLopl%2FGAuk4Wfx5E1y0InfmYnO9lLeNdYDYJQk68NlL2MQEjU24Yz77MsQmXph6z%2BfEuhIqCvsw0h6l9ZcyKL%2B4%2FkRjVx4jMWfqj%2F71hN29pz3WVNTJTwlZ6TTFi1Oc%2B%2FRj15NfcBAhdYzZP29UKidzL%2BFof74oH7vIuHEsTZPRIxOgjrLiik2Wiq8scLHvk%2FzVTkHqjOtfTFR4Tp197wi6dL5JgEvKGRM7Bdu0QDXVASxEMBu9tQN9QPOM2rFsg2k7VoYdwwBf8nm0GVpGTNRvNBxDLIw7E%2FFkKFnxBIYR3NqmUcbXK4Pz4rzWgb3ydb0aKsgB13xQOuwLxMfFuJYdBoZm6tHBJN9pRtJq9wxPwfKj7UkJTP7iB%2F7Q%2BerqI0miNNFmU5sBSpMCljzs34KM0z6amTfemLJvq05y%2FFzDZiP%2FBBjqkARTc84drPRWnEkyzFbUCWRtUVcQ5OnmxRSMlAt8B2snLOBjloNCt3MfZ2Xl%2FAmqDGZXd%2F4EpnAg3uycO3h9lKiYPdeqK2fg3dHYIZTsdHWhpkjQ1pdJubY62UX2IFWQ7aY2oFiZxVU9VwligHTtozWipJXpksUUBSRRz0WyxH%2BQ4Fq7DDDVeqiYKWKyzMGj3RgythUai5iuQtfOftO44Hv2r0a0w&X-Amz-Signature=108447ac5fe3dbe9302edc4b5b195ec811b94f641e568d1c112cdc69daa72061&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGYXGMN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDjLND8MzhOMLuOsck20vSC9emJSLRYWSjrFv2GzUP6HwIhAMu9yR%2Bbtkj0oUkF%2FvihGvt%2BmGWvApR%2FV4kIt2PFRr2DKv8DCCUQABoMNjM3NDIzMTgzODA1Igz9tOAJAIgTVqQr1kgq3AP5ZZLiQFPWii7VOmaCNhT8nVD7bhufo76m5O2zyet4AzY%2F0bpj0GJEGN6UO6EeyMSJFph8BZNbfxauXaR7tiThJdV8rxYcdfXYPxmr39fDCBqcgbuEVejIhBWAR9WnPucEBabVtHXPMRqGK38Jsacvu1WrFJRQkMAqiVDYz2dGjazUpXk30852GGXowEvEzp2%2BMn%2BZEMXhbXaoTKcFDLopl%2FGAuk4Wfx5E1y0InfmYnO9lLeNdYDYJQk68NlL2MQEjU24Yz77MsQmXph6z%2BfEuhIqCvsw0h6l9ZcyKL%2B4%2FkRjVx4jMWfqj%2F71hN29pz3WVNTJTwlZ6TTFi1Oc%2B%2FRj15NfcBAhdYzZP29UKidzL%2BFof74oH7vIuHEsTZPRIxOgjrLiik2Wiq8scLHvk%2FzVTkHqjOtfTFR4Tp197wi6dL5JgEvKGRM7Bdu0QDXVASxEMBu9tQN9QPOM2rFsg2k7VoYdwwBf8nm0GVpGTNRvNBxDLIw7E%2FFkKFnxBIYR3NqmUcbXK4Pz4rzWgb3ydb0aKsgB13xQOuwLxMfFuJYdBoZm6tHBJN9pRtJq9wxPwfKj7UkJTP7iB%2F7Q%2BerqI0miNNFmU5sBSpMCljzs34KM0z6amTfemLJvq05y%2FFzDZiP%2FBBjqkARTc84drPRWnEkyzFbUCWRtUVcQ5OnmxRSMlAt8B2snLOBjloNCt3MfZ2Xl%2FAmqDGZXd%2F4EpnAg3uycO3h9lKiYPdeqK2fg3dHYIZTsdHWhpkjQ1pdJubY62UX2IFWQ7aY2oFiZxVU9VwligHTtozWipJXpksUUBSRRz0WyxH%2BQ4Fq7DDDVeqiYKWKyzMGj3RgythUai5iuQtfOftO44Hv2r0a0w&X-Amz-Signature=94f7a94b1dbea78e25c4aa8382c5428b0ee58ac094535fe36e6e55818e7711ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
