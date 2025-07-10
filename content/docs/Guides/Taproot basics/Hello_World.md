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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXV7B7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWlY1uStGYvwCRG1Fs5ZtmwA%2BVoHXft97ZYlqMM1W4bAiEAg1DtNvKhVSLjAXDwc07mECkzLvAPBqSmoYqtv4j0vXcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGcWSSOuKgYY5D0gircAxIeB5PE%2BB%2FwteaiFViUL13pRv2%2FdGLqYC3B%2FyceI4iI1NEt1dwyjLTubOg%2FjnAr0aL694%2BeDwmzT3gi8dBYbfPUzWc2wPGRm2l6mgCU64wAZj70ZsH3QwFFeueu85PGtVOog9Bc%2F7x%2Bd1FLM09KDRe9keE9iGxILyyDUfSLbK7x2GOiMljWv0sdpRdO2IOe0%2Fxh33hhhBpl7vfc0n9JrdiPExvOtIj6iri5CpFyXmdE6QH87LU8Vu5c7IiYaMjXlrsydbWvL4TcWNxYy8qteFAXugpXj46xipSI4uALH2eYyAv8GAKMivvC1xv%2FWro%2F%2Fx1F86kpJhShppIVMiYLOhCH5LjjFnVwQ4H5fifhPepC6IQwFcQR8P%2BguMtK6jz0bwfDFV14DhUlzY1ItaRF7D4nLvxY4cJeqO5Kv%2FvHa8pm6D8L4zG1E9e0F8UZQG%2FKPTK167CsymLcv7%2F2R6Qmw3T%2BNv%2FJ89MfD0PUGd8urvW45gREj44qyXJhS%2Bu%2BbyGkM2OT7LBG26twNPVAih%2FM8mDzhfbNMEvZxtSuJ9jgTQbcluGxTgPcwpdP3B2MuXhKGIWTVxy%2Fd1JDofUWN5ZKnsSagU%2FLon5xaYNS4fn%2F9QAa51PH7BCC3PoSi8pfMKvPvMMGOqUB82gcZzN39zMP%2BsHCG4FN2SuqMNF2qOJqL61kTcYAbb7PdFRW5rSGkL4567p4h634t7cWgpiZT3iFy8CzH%2Bn%2Ba6BH3eVtqd9x3W1%2BcMJAZhdWdk1%2F9SyUL48iqjWVlyWd41cTmh7BbbURjI1w0q58zyh5MBQ4U7fxTwnmrIPkLGznjLotD9KtuzPYvBAbSrNUfD%2BanZkC5WZG1qYVl2JTsIkWt1LQ&X-Amz-Signature=5c39cec10cab924a1005b68631a6e388111359e976c4e5ee3a498caaabd0442f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXV7B7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWlY1uStGYvwCRG1Fs5ZtmwA%2BVoHXft97ZYlqMM1W4bAiEAg1DtNvKhVSLjAXDwc07mECkzLvAPBqSmoYqtv4j0vXcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGcWSSOuKgYY5D0gircAxIeB5PE%2BB%2FwteaiFViUL13pRv2%2FdGLqYC3B%2FyceI4iI1NEt1dwyjLTubOg%2FjnAr0aL694%2BeDwmzT3gi8dBYbfPUzWc2wPGRm2l6mgCU64wAZj70ZsH3QwFFeueu85PGtVOog9Bc%2F7x%2Bd1FLM09KDRe9keE9iGxILyyDUfSLbK7x2GOiMljWv0sdpRdO2IOe0%2Fxh33hhhBpl7vfc0n9JrdiPExvOtIj6iri5CpFyXmdE6QH87LU8Vu5c7IiYaMjXlrsydbWvL4TcWNxYy8qteFAXugpXj46xipSI4uALH2eYyAv8GAKMivvC1xv%2FWro%2F%2Fx1F86kpJhShppIVMiYLOhCH5LjjFnVwQ4H5fifhPepC6IQwFcQR8P%2BguMtK6jz0bwfDFV14DhUlzY1ItaRF7D4nLvxY4cJeqO5Kv%2FvHa8pm6D8L4zG1E9e0F8UZQG%2FKPTK167CsymLcv7%2F2R6Qmw3T%2BNv%2FJ89MfD0PUGd8urvW45gREj44qyXJhS%2Bu%2BbyGkM2OT7LBG26twNPVAih%2FM8mDzhfbNMEvZxtSuJ9jgTQbcluGxTgPcwpdP3B2MuXhKGIWTVxy%2Fd1JDofUWN5ZKnsSagU%2FLon5xaYNS4fn%2F9QAa51PH7BCC3PoSi8pfMKvPvMMGOqUB82gcZzN39zMP%2BsHCG4FN2SuqMNF2qOJqL61kTcYAbb7PdFRW5rSGkL4567p4h634t7cWgpiZT3iFy8CzH%2Bn%2Ba6BH3eVtqd9x3W1%2BcMJAZhdWdk1%2F9SyUL48iqjWVlyWd41cTmh7BbbURjI1w0q58zyh5MBQ4U7fxTwnmrIPkLGznjLotD9KtuzPYvBAbSrNUfD%2BanZkC5WZG1qYVl2JTsIkWt1LQ&X-Amz-Signature=7d406963f3ee1cda4f0b8c7b335be555a86173db58614a5d0e58ecc235610952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
