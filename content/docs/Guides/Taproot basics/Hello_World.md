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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623G54DJH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCiHdiHYLR5uglr2P5PmnEt3dBScjraRgz1AQSv8%2BTaSQIhAJqeOBoEEUh2kPkEIfMiMahpO4Y5Y0Ih9jGNq7hpEWdsKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2m7%2BMs3DzTO2Zmssq3AMsq6ieZAmxwih2z8BZPfDWZTNf4tHVMt8U0UWh8tShGM11rLBSs9kS%2B54giYn%2BqCvJqtrb8heFQ6e3z1gdJrhOpZHKU4yCEHNaPSFZZUAfTi9aMmmWeIPcB%2BQSSU3guQxiVNjODN1OrkOE6bqCkwFweVVRbSZHy1gOoLIfe9hU3WLqIkXh%2BgO2jY%2B3vrUYrmAsFVc0yAXJXIEFtinCbRgSQg0Zawzh0djnygLkFM8zp4oop0GOpDi%2BYu3GNU7keLwpU9Eg8Wx6uSb33jWAAywarpayvSWPlMSMbsZGK2YywKPaMe1w%2BcI3P%2Fwtu25zMOv%2F1GflsI7jvffgC05s7T%2F2%2Bpr2GrLNRu1QdpHwrXq7dG2wIL9S9q2zj1JvhQxntS%2F5MQ6KhiD9qkGgXAMR0LDIp1BgzTuYtqaWjC%2Bwni5vrBGow5PnCFQZn2Y%2Bkaq4IKhHCJYCTBDODi4PjvZSlLTTmwzY2bxigrgKQCAGW27HCWsNHRUCVg3Y%2B8UAcmIxld%2FX5FvPM3GTvd%2Bq6fjS33%2BTf3gWb7ahtfCI79YWLcTul%2FjwMTlLIVDYEusBWdN0baLgt8ikDkEnK4Qh22Zjcht4YR4no%2B1A%2FrWW6nkJvvGhPrK%2B%2ByGET9zkxzwWEjCT2fS%2BBjqkAfSYywhuBDxVEt2uWWMtYicLNXaPPsVxcvphFLBKQSm9BzTcjNSsw72zXVKNjmUEHYzh%2F%2F5uBMGq5VpCjBHBhHDMnkLDcVyLrgXQviKyKCajmAp%2FTZB2D3Ko%2Fiv4lA8pgUQy4odY5sC3eJIe0Vase8QthS6PC7CfOqId2uSI8BZxF6FZ6aFtBFlqf%2BShzCSgAoPsHFyRysn29VOqJDQjFttmRnUF&X-Amz-Signature=4b51554eaa985cc3ce385832fa146c2f2f2f7fdb7cbd70754c4d4347fa29edaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623G54DJH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCiHdiHYLR5uglr2P5PmnEt3dBScjraRgz1AQSv8%2BTaSQIhAJqeOBoEEUh2kPkEIfMiMahpO4Y5Y0Ih9jGNq7hpEWdsKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2m7%2BMs3DzTO2Zmssq3AMsq6ieZAmxwih2z8BZPfDWZTNf4tHVMt8U0UWh8tShGM11rLBSs9kS%2B54giYn%2BqCvJqtrb8heFQ6e3z1gdJrhOpZHKU4yCEHNaPSFZZUAfTi9aMmmWeIPcB%2BQSSU3guQxiVNjODN1OrkOE6bqCkwFweVVRbSZHy1gOoLIfe9hU3WLqIkXh%2BgO2jY%2B3vrUYrmAsFVc0yAXJXIEFtinCbRgSQg0Zawzh0djnygLkFM8zp4oop0GOpDi%2BYu3GNU7keLwpU9Eg8Wx6uSb33jWAAywarpayvSWPlMSMbsZGK2YywKPaMe1w%2BcI3P%2Fwtu25zMOv%2F1GflsI7jvffgC05s7T%2F2%2Bpr2GrLNRu1QdpHwrXq7dG2wIL9S9q2zj1JvhQxntS%2F5MQ6KhiD9qkGgXAMR0LDIp1BgzTuYtqaWjC%2Bwni5vrBGow5PnCFQZn2Y%2Bkaq4IKhHCJYCTBDODi4PjvZSlLTTmwzY2bxigrgKQCAGW27HCWsNHRUCVg3Y%2B8UAcmIxld%2FX5FvPM3GTvd%2Bq6fjS33%2BTf3gWb7ahtfCI79YWLcTul%2FjwMTlLIVDYEusBWdN0baLgt8ikDkEnK4Qh22Zjcht4YR4no%2B1A%2FrWW6nkJvvGhPrK%2B%2ByGET9zkxzwWEjCT2fS%2BBjqkAfSYywhuBDxVEt2uWWMtYicLNXaPPsVxcvphFLBKQSm9BzTcjNSsw72zXVKNjmUEHYzh%2F%2F5uBMGq5VpCjBHBhHDMnkLDcVyLrgXQviKyKCajmAp%2FTZB2D3Ko%2Fiv4lA8pgUQy4odY5sC3eJIe0Vase8QthS6PC7CfOqId2uSI8BZxF6FZ6aFtBFlqf%2BShzCSgAoPsHFyRysn29VOqJDQjFttmRnUF&X-Amz-Signature=57c6ecdc1341e3930c772ad386d7d062bab32fbf9c6089256e7885515b392e90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
