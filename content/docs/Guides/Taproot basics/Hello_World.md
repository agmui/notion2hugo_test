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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAB2JGPY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDli5WOGk8vwyJfdux4oArLFMFrY0tFUsN0Y%2FDriUZyRQIhANTFo66X%2FE0iSfxyiLkxsdPqJ9kV9NkE5G9PJ2feN9IdKv8DCHcQABoMNjM3NDIzMTgzODA1IgxmxT9btGsTQgZsGG8q3AO4aTQL7881N2oD5hMNG30S8dgapBLX4sVO5AORieDl%2BfTxATQ8Gcr99D%2BwO60TsawsDJJYvvPOCE0Wq5ASHEJ9yMb%2FCDx3ZwBDWJQCDHQhAAWJgGHPVjg%2Fxq0sIxa4AeaTP0A2kkB1AmyQ2RK1xsmuWHF8qL1fQlI%2FWfUu0jwgkGWKvNeC47rA75fAbZhAJpG%2By8BfzSvif9og3DXTAajq%2FXKBV6tEyRkIXk3Te%2BCE4Jh3gw173UMuSB2INU3UNZ7G%2B%2FSLeRMyw%2FqAAAcv3xm%2FyHenTXzguHC3zYSEOrj7fc%2BvqvlGaCIIslTe1b01tZF1HP0XWKoSwQreJYW%2BGhGqiGsBDu9ykQA5hZlsDfWqqsqRwG8JS1n17W0xt%2BsxPQOYcNMXYbNVgn6qhqGrzI7tQgQPtIrRr7CW0%2FUeofg0sD9eGBGK702RFbqXfvkEdfrODD46dGuVHQOGdPjIeMGKIvIAOSg3efjMdpc6%2FKZVmsN9WO7MEc46SMdlEYdwbL3QL%2BX68x1%2Bkvh%2Fgt2wxcVg4YCycFcDa5MvvB%2FOASRNZlrRcZ98Zfe3S2lNJPTDQQaeiXzCHbBld2Wp2WEmhDrwaCbDMNjCN6jTPc3b0XYGhxf6T0VutpVa4znYNTCuxrvOBjqkAREbi1faPJ22z2Uz6nvgpbRgeXplkpAjfer8v6CcFX%2FjCsk6K2aFxXMyLEPT%2BB%2BO5CzAjBIquLla9wncOgeqNxHkHkA71eVkKXdLLGek160vLg27GxPIwUsOZwEvKuTQEXB0rEk4qWXWAMcpKLWNBFCr92OrgzyfEjfN3CTHE6K9oUuWzIDPszIY%2Fvx3SbJM3m4UDQD965ZUecKO2vtoua7tLnp%2F&X-Amz-Signature=2896f6faa6bde52abba8c506774dd9cc450d278a3fbe4125557f17e66016490d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAB2JGPY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDli5WOGk8vwyJfdux4oArLFMFrY0tFUsN0Y%2FDriUZyRQIhANTFo66X%2FE0iSfxyiLkxsdPqJ9kV9NkE5G9PJ2feN9IdKv8DCHcQABoMNjM3NDIzMTgzODA1IgxmxT9btGsTQgZsGG8q3AO4aTQL7881N2oD5hMNG30S8dgapBLX4sVO5AORieDl%2BfTxATQ8Gcr99D%2BwO60TsawsDJJYvvPOCE0Wq5ASHEJ9yMb%2FCDx3ZwBDWJQCDHQhAAWJgGHPVjg%2Fxq0sIxa4AeaTP0A2kkB1AmyQ2RK1xsmuWHF8qL1fQlI%2FWfUu0jwgkGWKvNeC47rA75fAbZhAJpG%2By8BfzSvif9og3DXTAajq%2FXKBV6tEyRkIXk3Te%2BCE4Jh3gw173UMuSB2INU3UNZ7G%2B%2FSLeRMyw%2FqAAAcv3xm%2FyHenTXzguHC3zYSEOrj7fc%2BvqvlGaCIIslTe1b01tZF1HP0XWKoSwQreJYW%2BGhGqiGsBDu9ykQA5hZlsDfWqqsqRwG8JS1n17W0xt%2BsxPQOYcNMXYbNVgn6qhqGrzI7tQgQPtIrRr7CW0%2FUeofg0sD9eGBGK702RFbqXfvkEdfrODD46dGuVHQOGdPjIeMGKIvIAOSg3efjMdpc6%2FKZVmsN9WO7MEc46SMdlEYdwbL3QL%2BX68x1%2Bkvh%2Fgt2wxcVg4YCycFcDa5MvvB%2FOASRNZlrRcZ98Zfe3S2lNJPTDQQaeiXzCHbBld2Wp2WEmhDrwaCbDMNjCN6jTPc3b0XYGhxf6T0VutpVa4znYNTCuxrvOBjqkAREbi1faPJ22z2Uz6nvgpbRgeXplkpAjfer8v6CcFX%2FjCsk6K2aFxXMyLEPT%2BB%2BO5CzAjBIquLla9wncOgeqNxHkHkA71eVkKXdLLGek160vLg27GxPIwUsOZwEvKuTQEXB0rEk4qWXWAMcpKLWNBFCr92OrgzyfEjfN3CTHE6K9oUuWzIDPszIY%2Fvx3SbJM3m4UDQD965ZUecKO2vtoua7tLnp%2F&X-Amz-Signature=0803bf135e54c60c48a4efe1b255cfb7f403f386c7dbdb302c6144c8d4894c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
