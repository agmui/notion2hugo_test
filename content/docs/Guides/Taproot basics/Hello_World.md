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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4O7WRS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDAYEUdtw6CU96oqzzUqU%2B0eE5awluJLLXFZlMI6Os4hAIgQ0fHmDc9w8oJM8RIJmJLHANYHf6HHdlzGEOXD1xuboMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAX3XMyJsO1hu84CjSrcAw%2FbuA1BELCb4zDIQKYp6qWpPRiJfCkk8QiLcGETjSs9x85gBgxd%2F6ohMw3qeJBKudlMDBr6hZtxmxXXISr1rvBlFU6QbR0PdnwMGyD63bjXlaVq1U8JHfgkTsuflPHNHRXpOl%2BIQJo%2BBWQTT2HN6sVN%2BN8S1hDXiYcWHYRzjyauQWjcAClBA5UylSO87N8geFsZ3FuqsbnDm11sVgZqHroGHSb3wabbMYMHENKGDdGjWpuupRKeiOCHXlrP%2Baw%2BfX4ges3uaGlg3QCsOsHF3GBRsu9AQv9sATpqYb29oenOwZF548It6t%2FS3Omfupho2%2F5nY8IM4dRawT1ERCKB2JU5fke%2Fevpn%2B0SahLH%2FBXC55DxXsRzLICfN%2BEyZMusu1btzvuFYwl5RU9jNWKTuyb4DtpPTZ8W%2FND5M%2FcGgllREBnDxxENNYT7OMbuGvq7fFHYmtagS6uDVzHE0EUxEDOzx50kGzJBNHqpJM%2BeuirorklRrzWwnnAxa8Wy0wALZ8lz9mlAIbea03ec0qyn04HktFfmF1VtTiNi4V6bdqa6X1x8d3SN55niB%2FsZavKzxnNn4DQhBeUSOKQCnnDnjGlshPhjqJb1fGG9u4qsyUynDUdPWQMCVmXY%2FSbokMP2G2sMGOqUBNFkQX%2BRvX4Ab%2BUg8CbRMIdqX8Y2DXK7yL%2BxhccWIxjTcP5tKBzDWd7F2buQCPgWVfdXf3kYMQfxGBfzdmrG1lgPUo62rpYa2lRRBnTvxnt14QGmDf0ONDjpdF20yRGuibLLcgkusM4RgBZLM6Y0bonedb%2BrhZXY8VWN8mTHjPjsbf9jGwmedwP847gqrIl5LthW3x5R%2FFk674d01ObTMJBKSRfUh&X-Amz-Signature=21d211c33d255d86aee610e0f9fc2618cd60ad0a873a37e319708bf3b17ac63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4O7WRS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDAYEUdtw6CU96oqzzUqU%2B0eE5awluJLLXFZlMI6Os4hAIgQ0fHmDc9w8oJM8RIJmJLHANYHf6HHdlzGEOXD1xuboMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAX3XMyJsO1hu84CjSrcAw%2FbuA1BELCb4zDIQKYp6qWpPRiJfCkk8QiLcGETjSs9x85gBgxd%2F6ohMw3qeJBKudlMDBr6hZtxmxXXISr1rvBlFU6QbR0PdnwMGyD63bjXlaVq1U8JHfgkTsuflPHNHRXpOl%2BIQJo%2BBWQTT2HN6sVN%2BN8S1hDXiYcWHYRzjyauQWjcAClBA5UylSO87N8geFsZ3FuqsbnDm11sVgZqHroGHSb3wabbMYMHENKGDdGjWpuupRKeiOCHXlrP%2Baw%2BfX4ges3uaGlg3QCsOsHF3GBRsu9AQv9sATpqYb29oenOwZF548It6t%2FS3Omfupho2%2F5nY8IM4dRawT1ERCKB2JU5fke%2Fevpn%2B0SahLH%2FBXC55DxXsRzLICfN%2BEyZMusu1btzvuFYwl5RU9jNWKTuyb4DtpPTZ8W%2FND5M%2FcGgllREBnDxxENNYT7OMbuGvq7fFHYmtagS6uDVzHE0EUxEDOzx50kGzJBNHqpJM%2BeuirorklRrzWwnnAxa8Wy0wALZ8lz9mlAIbea03ec0qyn04HktFfmF1VtTiNi4V6bdqa6X1x8d3SN55niB%2FsZavKzxnNn4DQhBeUSOKQCnnDnjGlshPhjqJb1fGG9u4qsyUynDUdPWQMCVmXY%2FSbokMP2G2sMGOqUBNFkQX%2BRvX4Ab%2BUg8CbRMIdqX8Y2DXK7yL%2BxhccWIxjTcP5tKBzDWd7F2buQCPgWVfdXf3kYMQfxGBfzdmrG1lgPUo62rpYa2lRRBnTvxnt14QGmDf0ONDjpdF20yRGuibLLcgkusM4RgBZLM6Y0bonedb%2BrhZXY8VWN8mTHjPjsbf9jGwmedwP847gqrIl5LthW3x5R%2FFk674d01ObTMJBKSRfUh&X-Amz-Signature=6af51d0d2ae187f4f00b90ed231307fae5233b219a34d27cb09277b5b529015f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
