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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275XZ5FW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHpT%2Fg7CobQBwM3qMGR3q1bitRMqlNMk3ZLqC69KIy6TAiEA0nnR88tTDi0rDy2KlKNUFxwM0mYwknpA5PhDag%2FWZtcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIe2LKbYpHQRSKPdQircA1SF7mLlQ1R9CUrX4IqnFoa7elPutz2np9gj7YC4vpmbKRy%2FOMECM7t5LBrefoglrBfpcbp06a5%2Bs40ToHSNJrdxidregxbMyFNgt7r43BxrZL%2FmAzrTOAmsluUOfGhoEiNwZVaEw0Abo4ElrlXxUwG3C9vDYIL3qF4cLRojSLs18IFQcA70m1zkgOEHmFfjnDrQyROatCY6dPdfRJ3uuYy3maTz7aUoDYP3YHvngX6Jhrd%2BLI56%2FM3MjmilU84D%2F4RpPRHm26aWwWDHW92CELGj7DEV4h9FK9SX%2FWuUAlVpL9dnUPP7428C7GkUvr0Ud4%2FNfiv85P6BhNRXXdZAqK75eA75NgOHcw1wyiQkpue7KgbREkm06OHsrje9%2BFLVl%2F37vX0QrhnJ84N5et7JdvZY%2F%2B8F3x8i9sWhGxk%2FgXEURZw3D1nibj1FVG9CmFTIlzAiCmcYvVc6ETDs5PnfsXyYNvDuEFeV%2B5jhMbjlz0KBBPE4ROyoPgZgEaCuuewAysvlEEIbUFq%2FUdVUPHeULY%2FbBxEFCbRkJ8RL96iDgBcluUHqguBhq7%2FbMh8SJlKgwizmGgWNyc3CjwMwU9VE2yoet6YDnc3Hna9C49niF0rZuW8OzXbdlhepR%2FAwMJf75MIGOqUBqyl5zYSF1ot0X7xr8Cz4cco5ckYXxGmHkn3lAMFMUeP%2BAD9Af4hJJlSOAApr%2FQpVXlng6jm43VcAGshpmJNkqgepR7DM0IL7oCK84anFgAwosp8BCPiiSdD%2Fbap4K%2BR%2BviVZzhCNG5XPej3VQPbhfl7B%2FUkFYgQzzf0RhfeNWZ2SqQ1NFtdCs%2FiQ9YbMuCd%2BaMpj7gHCv3XppB5Q6Vvlayp%2B0AIX&X-Amz-Signature=16ab06d66e7c534a129c26d178eeca80734304aa3e3a4edd8582050fee7539fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275XZ5FW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHpT%2Fg7CobQBwM3qMGR3q1bitRMqlNMk3ZLqC69KIy6TAiEA0nnR88tTDi0rDy2KlKNUFxwM0mYwknpA5PhDag%2FWZtcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIe2LKbYpHQRSKPdQircA1SF7mLlQ1R9CUrX4IqnFoa7elPutz2np9gj7YC4vpmbKRy%2FOMECM7t5LBrefoglrBfpcbp06a5%2Bs40ToHSNJrdxidregxbMyFNgt7r43BxrZL%2FmAzrTOAmsluUOfGhoEiNwZVaEw0Abo4ElrlXxUwG3C9vDYIL3qF4cLRojSLs18IFQcA70m1zkgOEHmFfjnDrQyROatCY6dPdfRJ3uuYy3maTz7aUoDYP3YHvngX6Jhrd%2BLI56%2FM3MjmilU84D%2F4RpPRHm26aWwWDHW92CELGj7DEV4h9FK9SX%2FWuUAlVpL9dnUPP7428C7GkUvr0Ud4%2FNfiv85P6BhNRXXdZAqK75eA75NgOHcw1wyiQkpue7KgbREkm06OHsrje9%2BFLVl%2F37vX0QrhnJ84N5et7JdvZY%2F%2B8F3x8i9sWhGxk%2FgXEURZw3D1nibj1FVG9CmFTIlzAiCmcYvVc6ETDs5PnfsXyYNvDuEFeV%2B5jhMbjlz0KBBPE4ROyoPgZgEaCuuewAysvlEEIbUFq%2FUdVUPHeULY%2FbBxEFCbRkJ8RL96iDgBcluUHqguBhq7%2FbMh8SJlKgwizmGgWNyc3CjwMwU9VE2yoet6YDnc3Hna9C49niF0rZuW8OzXbdlhepR%2FAwMJf75MIGOqUBqyl5zYSF1ot0X7xr8Cz4cco5ckYXxGmHkn3lAMFMUeP%2BAD9Af4hJJlSOAApr%2FQpVXlng6jm43VcAGshpmJNkqgepR7DM0IL7oCK84anFgAwosp8BCPiiSdD%2Fbap4K%2BR%2BviVZzhCNG5XPej3VQPbhfl7B%2FUkFYgQzzf0RhfeNWZ2SqQ1NFtdCs%2FiQ9YbMuCd%2BaMpj7gHCv3XppB5Q6Vvlayp%2B0AIX&X-Amz-Signature=0406308874db47ea60a26be36b14f615d916ae594beabb1af33e3912eabe67ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
