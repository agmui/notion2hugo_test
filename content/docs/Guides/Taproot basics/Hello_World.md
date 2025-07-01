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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3WQSEDO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlwMTt5Vtc%2BZnrEhs78VCYdXpOwebx%2FzYtZrBXCfml0AiBEou8OAI0guWM7nlivcMi8OlEG92rmUDu06jh3pD8JcyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVHelWSr4HbCrkvuCKtwDhylYmql%2FX%2BuMN8nAdYe44EZwRtPEELFv3nh8pEmJPCa%2FFaXrBm7bO4%2BT41W2q9TkmUnKJI11OH7JjZotqW9FQlsYD1LBHTRBbeesQJgoydX0jHSsDeY%2BAvemg4WgOWnbszK65EoYHQBYVd4cSkQSnsvlX3jmKjZVHWxjh4h8v7ZBKXEJ2UCMzLVPAXAMTzDOFXPVrS67Il1Lancdd3GKWIoL5mU1BbWq7hNqnVNdDcTkxSp3ma%2FG8GQb3LKFjh%2FS8d0RlxySh%2F0JEjuVf9kOxQZgq3hVJKVCDquUuuIGARnWziLvYR%2BQYq4GzBDwSJoe5X%2BU3g1d353GSXyVYuUmYVkcYRSHxUmRzGAMteyzs65a8rVcnzgy2l7bHbqDg4cVqWhw%2B6I4yl1U1ZkKMJZHbGbLXkry9kV5bKUyl2JRKdD594ntKwcaHE3ST56Qxxw3IeWv%2BIOyaVjI%2F4hFRJIeCBcMWOSuVDiOu21KG5wjV7iKgAUvN7jIMBkdeOfGpJbXJ%2F87%2B0z2rSPYS7NxBhHQPlBxEOGivMOgC%2F%2FszTuOff6zUcwmKFEjUocqJsiDg%2FxK8Lt9ncVCLPv3sqemb82RUbkD5m%2BNEACiLbbn30oQMV1r2QQMokEEsZdmje8wmoeQwwY6pgHAyDQ6imF71zjQ927GQtPfAg8%2Fim8mzXGrFTxFDGmwsNmiEVBOz3K1HRFrzuUIGuXZaAE5u3YvxNKtMRbFSEX%2BfASnNBKgZOXhtldTo5dvZem1QbeE110Cw%2BUnfeSE5eQMT9KM1kZBvb6kvDIycwgDZBxmdcSLJQUFU5lV3bTPrrAxi%2B15v2GmSA40BaKfc7r1OgJdxTKKztNqPe7cBQiCrAXr8%2Fyr&X-Amz-Signature=30d3ab85ef580ea8baaaa5aeee1a57ed6f9dcd3219a77bf5fec0f487c1e7900d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3WQSEDO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlwMTt5Vtc%2BZnrEhs78VCYdXpOwebx%2FzYtZrBXCfml0AiBEou8OAI0guWM7nlivcMi8OlEG92rmUDu06jh3pD8JcyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVHelWSr4HbCrkvuCKtwDhylYmql%2FX%2BuMN8nAdYe44EZwRtPEELFv3nh8pEmJPCa%2FFaXrBm7bO4%2BT41W2q9TkmUnKJI11OH7JjZotqW9FQlsYD1LBHTRBbeesQJgoydX0jHSsDeY%2BAvemg4WgOWnbszK65EoYHQBYVd4cSkQSnsvlX3jmKjZVHWxjh4h8v7ZBKXEJ2UCMzLVPAXAMTzDOFXPVrS67Il1Lancdd3GKWIoL5mU1BbWq7hNqnVNdDcTkxSp3ma%2FG8GQb3LKFjh%2FS8d0RlxySh%2F0JEjuVf9kOxQZgq3hVJKVCDquUuuIGARnWziLvYR%2BQYq4GzBDwSJoe5X%2BU3g1d353GSXyVYuUmYVkcYRSHxUmRzGAMteyzs65a8rVcnzgy2l7bHbqDg4cVqWhw%2B6I4yl1U1ZkKMJZHbGbLXkry9kV5bKUyl2JRKdD594ntKwcaHE3ST56Qxxw3IeWv%2BIOyaVjI%2F4hFRJIeCBcMWOSuVDiOu21KG5wjV7iKgAUvN7jIMBkdeOfGpJbXJ%2F87%2B0z2rSPYS7NxBhHQPlBxEOGivMOgC%2F%2FszTuOff6zUcwmKFEjUocqJsiDg%2FxK8Lt9ncVCLPv3sqemb82RUbkD5m%2BNEACiLbbn30oQMV1r2QQMokEEsZdmje8wmoeQwwY6pgHAyDQ6imF71zjQ927GQtPfAg8%2Fim8mzXGrFTxFDGmwsNmiEVBOz3K1HRFrzuUIGuXZaAE5u3YvxNKtMRbFSEX%2BfASnNBKgZOXhtldTo5dvZem1QbeE110Cw%2BUnfeSE5eQMT9KM1kZBvb6kvDIycwgDZBxmdcSLJQUFU5lV3bTPrrAxi%2B15v2GmSA40BaKfc7r1OgJdxTKKztNqPe7cBQiCrAXr8%2Fyr&X-Amz-Signature=f6572776fdbca143c1b1d15d8c77f3fa524de675aa3e72b31f4a9ec8fda7e929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
