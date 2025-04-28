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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQFHS46%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ%2FbIEzxpG3Urubi34D%2FM3LXE4kmUzrolr41BkN8qtsAiA0z%2Bl%2FO2TTZaqrFwhLa9uoGTUoUDz0i33c5hzj7yzZsCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM2W309bWfsGrkzSHaKtwDCqGrhKquk9X2tV1iIRHdRpA2Z7D7x72xa9H8LSOU4fcIwrIY421svV4I8pn5ZLkTOPfZh8zfSzgaiy8kV7ViJ52lEB9TlvI%2BryuXiWbFuL%2FdFg9JESULF3PCMigB1zKg0kmb%2BABy40dtv9IzrJcjE41i2ZhxV7nhGcmv7L9D%2BewKDSKalj4xqU0CnoT2hVaVOVAnk%2FPtY0urwy7dv%2BSK56ku7k8HKjoL3YzjmIL9LpHMYap2xx%2F9E6K%2BrL0DKg0lboXHnxs%2F5Yz4n7Ma5gLWFAWeOcK2OKLX6ETfRm7IBBO%2BTja0PIGGQlhlqzBAlorZGhg8F71YrFh%2BGkf%2F2wibGcDdZbex737aYel12jMn6yQQDlDOsPDbQ1A3ULpRtlvFzpmFDFSpYAmVR4%2BcOUn2UATlBFjSrySxKGGb3EkmK1y2cQ4TMjR3%2F39L41ITFBQ8RrmmKOtNjZ93dtL9P0vuAph9zG13JLHe%2BrDV3RODeTFQj%2B77ZYDXGUbHCiTy1FfQTpBSn2a1OEzld2KM11JkaJIrJNukVyaHBv6VXTSl7pZ5fAEdBgQgHYT3RcTZxC1qXy%2FslBXcy9ow7xOMCdd5F7RsMqJzB5AVtbWgNuFPo2O9vLkLOGi2grsqUd4w%2BZS8wAY6pgE3Vxgpiu2oedF%2FVpQFdFpfE4METTWrq0f21o7Jbudt9r9Rr%2BzuVR4%2FLNv89BfWbylSkzmRN4aDAEYVHjFeWCUkYj9Do%2Bl6ip02APXcmIBvAA2krAJeohA%2BNhNWUjAeZZPOv4eBLmrYcNPpzhWbhFFTWO3yR3Y7JpzeOjYjWiPHX6jYUCVDw234yGQw868tMANHkmwe9AXwWFOChQT6UmN%2FBZrfIkKf&X-Amz-Signature=89f4b366931e908ff568c11b6a0de111c5bffd1c781e79a4d0450e8cb0e2dce0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQFHS46%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ%2FbIEzxpG3Urubi34D%2FM3LXE4kmUzrolr41BkN8qtsAiA0z%2Bl%2FO2TTZaqrFwhLa9uoGTUoUDz0i33c5hzj7yzZsCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM2W309bWfsGrkzSHaKtwDCqGrhKquk9X2tV1iIRHdRpA2Z7D7x72xa9H8LSOU4fcIwrIY421svV4I8pn5ZLkTOPfZh8zfSzgaiy8kV7ViJ52lEB9TlvI%2BryuXiWbFuL%2FdFg9JESULF3PCMigB1zKg0kmb%2BABy40dtv9IzrJcjE41i2ZhxV7nhGcmv7L9D%2BewKDSKalj4xqU0CnoT2hVaVOVAnk%2FPtY0urwy7dv%2BSK56ku7k8HKjoL3YzjmIL9LpHMYap2xx%2F9E6K%2BrL0DKg0lboXHnxs%2F5Yz4n7Ma5gLWFAWeOcK2OKLX6ETfRm7IBBO%2BTja0PIGGQlhlqzBAlorZGhg8F71YrFh%2BGkf%2F2wibGcDdZbex737aYel12jMn6yQQDlDOsPDbQ1A3ULpRtlvFzpmFDFSpYAmVR4%2BcOUn2UATlBFjSrySxKGGb3EkmK1y2cQ4TMjR3%2F39L41ITFBQ8RrmmKOtNjZ93dtL9P0vuAph9zG13JLHe%2BrDV3RODeTFQj%2B77ZYDXGUbHCiTy1FfQTpBSn2a1OEzld2KM11JkaJIrJNukVyaHBv6VXTSl7pZ5fAEdBgQgHYT3RcTZxC1qXy%2FslBXcy9ow7xOMCdd5F7RsMqJzB5AVtbWgNuFPo2O9vLkLOGi2grsqUd4w%2BZS8wAY6pgE3Vxgpiu2oedF%2FVpQFdFpfE4METTWrq0f21o7Jbudt9r9Rr%2BzuVR4%2FLNv89BfWbylSkzmRN4aDAEYVHjFeWCUkYj9Do%2Bl6ip02APXcmIBvAA2krAJeohA%2BNhNWUjAeZZPOv4eBLmrYcNPpzhWbhFFTWO3yR3Y7JpzeOjYjWiPHX6jYUCVDw234yGQw868tMANHkmwe9AXwWFOChQT6UmN%2FBZrfIkKf&X-Amz-Signature=07968ba122db4a7c2c652ad228e1f0da1e6c91fcb6726c2eaa9a81389e7da675&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
