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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZQYOKO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg5mC4gUYt80M9yDVkVG935pUn1eNDPUNcTafK42NdNAIgeX9kHz5zofyQyUv70jgjYA2b%2Fo5yld2iGGwqfLIZpHQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcnVrrx%2BGOnYXOCeSrcAws6pA4ARvAqRO%2BVTE%2F6dNkGBZC6W5egqYxRiA384HedeN7%2FDrKGQSgjKuXLu7t2OF2Hkp2o2Z6bj8%2FIdFLxtuCU9KKqN6%2BWi0K6Rt45ExomfGQtDYowN%2FNkx%2F0PL5W7diMM%2B8uBtRdJmBibaUhS1m4u7S3jXNuM7cIzJfORhhlE5ruBTAnr8gSioO7kCDeJ%2F%2F2WoVU5PIM7NFD8iDiBIng1iGfexwzbxC7ql0o63P87CURWhhgsSflr%2BhcGAApoDw1Y34J%2FEvocI241OcuJ6rsPvCLtpYFSK2%2Bos8EcyUkX040M2mvYzHHxyh27X6f%2FgClkfXu1YihAt4tsNaaUIm1F%2FqiGFrVa0KgD6xzpZxWjWP9Y3HjmYH98f5lKQZxi3OMLV0ibk2vPeah%2F0LesNHJG9xthYuoiH19N8XRVIxsDWqDTSnOLIvuN0WR84rVU48oXPIEcU8iqKjnVWyOMOdpS29AcJBiFhExEDcx54j4eTUQCwrcVyhKv6qP11ePkQD330AqeKCwG9OkpbJi7qbZZafyEDKilgxrkaD2dDsMCptsKEXTAeFkUlgI2r9rG0NR1D3j7j0QL7vI%2BiUrtB%2BpKdTVlkXKL5TQ4x7Pzt4h0loS%2BZ6QCetbQaCCZMJLcnb4GOqUBlExZWgNhHvrWF229GfBy5%2FA7vAHhiJBc1Y16kghO0Jzh7NzHJlcQlPUZzBhcTsbzflYto4ht3iVZIboKUmVm3vDpnd1YZFW6R7iWlPfNatQuRTnpbF8WNv9hM09CsNE%2BaXsUMkxz9aWKnr7WfXII0To989gNnhucMpjga4D1qcNmHPEmba%2FQvS4RFF8A9ZkRV064yWCLl0hEc5LATPE5Fz1YzOUt&X-Amz-Signature=3c685970aea0460258cbccd1d68de6a51f59d115581afdc1f6b47edfdb712d25&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZQYOKO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg5mC4gUYt80M9yDVkVG935pUn1eNDPUNcTafK42NdNAIgeX9kHz5zofyQyUv70jgjYA2b%2Fo5yld2iGGwqfLIZpHQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcnVrrx%2BGOnYXOCeSrcAws6pA4ARvAqRO%2BVTE%2F6dNkGBZC6W5egqYxRiA384HedeN7%2FDrKGQSgjKuXLu7t2OF2Hkp2o2Z6bj8%2FIdFLxtuCU9KKqN6%2BWi0K6Rt45ExomfGQtDYowN%2FNkx%2F0PL5W7diMM%2B8uBtRdJmBibaUhS1m4u7S3jXNuM7cIzJfORhhlE5ruBTAnr8gSioO7kCDeJ%2F%2F2WoVU5PIM7NFD8iDiBIng1iGfexwzbxC7ql0o63P87CURWhhgsSflr%2BhcGAApoDw1Y34J%2FEvocI241OcuJ6rsPvCLtpYFSK2%2Bos8EcyUkX040M2mvYzHHxyh27X6f%2FgClkfXu1YihAt4tsNaaUIm1F%2FqiGFrVa0KgD6xzpZxWjWP9Y3HjmYH98f5lKQZxi3OMLV0ibk2vPeah%2F0LesNHJG9xthYuoiH19N8XRVIxsDWqDTSnOLIvuN0WR84rVU48oXPIEcU8iqKjnVWyOMOdpS29AcJBiFhExEDcx54j4eTUQCwrcVyhKv6qP11ePkQD330AqeKCwG9OkpbJi7qbZZafyEDKilgxrkaD2dDsMCptsKEXTAeFkUlgI2r9rG0NR1D3j7j0QL7vI%2BiUrtB%2BpKdTVlkXKL5TQ4x7Pzt4h0loS%2BZ6QCetbQaCCZMJLcnb4GOqUBlExZWgNhHvrWF229GfBy5%2FA7vAHhiJBc1Y16kghO0Jzh7NzHJlcQlPUZzBhcTsbzflYto4ht3iVZIboKUmVm3vDpnd1YZFW6R7iWlPfNatQuRTnpbF8WNv9hM09CsNE%2BaXsUMkxz9aWKnr7WfXII0To989gNnhucMpjga4D1qcNmHPEmba%2FQvS4RFF8A9ZkRV064yWCLl0hEc5LATPE5Fz1YzOUt&X-Amz-Signature=e2649d48f5c0b7843276faab1e33f4ba83f81ae5b35a03e9ad0336435c4a2b80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
