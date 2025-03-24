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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NARIDG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPhyW%2BMXYMr8g2Cb%2BRBGC9OAsCIP3qwY51bNHIRLVhKwIhAJN6hRKwhTG9JagsmtdND5ZahWrxtAL6cbUpSuFp0NiEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7lALH1%2FXDLhWuV%2FUq3AOaPHF9fPqX1keJGW%2Ftu0046wOhOQmSx5XZt4hkuX0dG5r8krRoPR73w38l0ioypMmGKJmzfdMKpYtJZBr7B77ABCXEH2zH6TXkylipeC412m6p2RSTPNa1CYsVZtl6ZAaAaqGIBQHqtMBqiqU%2BPNKnw77A8OLevw6mUEwrkVnh9x1CdHvOBEtEW%2B%2FL3cJZMcoOarudxBNFMIoJyGfYyvSXkrCWE5vu%2BBCy7bD962XbYPY9%2BDS88czZdkdvsT%2FaITa1Bhha%2Bkk3jl8fUw0Lq%2FwsI1fwkee%2BoF1aZyl3PR5%2FSQrBfJSpEtqajD20t%2FyFnpycT5Vu5jRW%2B%2FliKdxJaIl8po5PWk0NjrNKIJ2YnbeCyEiQ8QSbzRXg%2BuDgSNAGDB0YZ3v2AMg9N7nKW8aVAIUIQD8enE96NB9Vh%2BNjsfp%2FhkJ1Z8Wr8PpeH%2B4O30vS4HvzP%2Bpm8bPiDdkc8PoQn11T4YMqfFYw%2FJyfoNg8Tv5Rz1ubuKLmRziAoMJpCfUTjair5jvUCQ7NezoDVbGtS%2Fs%2B21%2FgEzaeEFXwYLbD5ofiJoakuLTkuEvGiGKv263BdVeqS%2BZaaJxpjuABqUQ5QOqIP4%2BoejT0ANB21QQ020Ayyqq7RxBPDGAehOSV1jCnsYK%2FBjqkAcutT%2B9hzd5NQJrrTt9UvvXlKbNEHwtYmdqgr2WenrAZOdZRRpB5f%2B0OKfj1w0yBXuFkw9Ec2haZGBbrNuWbPkkaxMmHvnJiRENF41LaQWBmFfWkGEy5QfE%2Bhyp3WjtmCrmaFz0DT6xE8r3iOwX2oQEtf4NIkBOecmadImEc9c2LGIAGev9Z8Yd4M8fZnTnWxNa03jqU9IZr0A7x%2BPwCL%2B2lwFBB&X-Amz-Signature=7f4412ae478583fd0dca946b74eaa8844fbf3d723e0be5f8d631b9744621964c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NARIDG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPhyW%2BMXYMr8g2Cb%2BRBGC9OAsCIP3qwY51bNHIRLVhKwIhAJN6hRKwhTG9JagsmtdND5ZahWrxtAL6cbUpSuFp0NiEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7lALH1%2FXDLhWuV%2FUq3AOaPHF9fPqX1keJGW%2Ftu0046wOhOQmSx5XZt4hkuX0dG5r8krRoPR73w38l0ioypMmGKJmzfdMKpYtJZBr7B77ABCXEH2zH6TXkylipeC412m6p2RSTPNa1CYsVZtl6ZAaAaqGIBQHqtMBqiqU%2BPNKnw77A8OLevw6mUEwrkVnh9x1CdHvOBEtEW%2B%2FL3cJZMcoOarudxBNFMIoJyGfYyvSXkrCWE5vu%2BBCy7bD962XbYPY9%2BDS88czZdkdvsT%2FaITa1Bhha%2Bkk3jl8fUw0Lq%2FwsI1fwkee%2BoF1aZyl3PR5%2FSQrBfJSpEtqajD20t%2FyFnpycT5Vu5jRW%2B%2FliKdxJaIl8po5PWk0NjrNKIJ2YnbeCyEiQ8QSbzRXg%2BuDgSNAGDB0YZ3v2AMg9N7nKW8aVAIUIQD8enE96NB9Vh%2BNjsfp%2FhkJ1Z8Wr8PpeH%2B4O30vS4HvzP%2Bpm8bPiDdkc8PoQn11T4YMqfFYw%2FJyfoNg8Tv5Rz1ubuKLmRziAoMJpCfUTjair5jvUCQ7NezoDVbGtS%2Fs%2B21%2FgEzaeEFXwYLbD5ofiJoakuLTkuEvGiGKv263BdVeqS%2BZaaJxpjuABqUQ5QOqIP4%2BoejT0ANB21QQ020Ayyqq7RxBPDGAehOSV1jCnsYK%2FBjqkAcutT%2B9hzd5NQJrrTt9UvvXlKbNEHwtYmdqgr2WenrAZOdZRRpB5f%2B0OKfj1w0yBXuFkw9Ec2haZGBbrNuWbPkkaxMmHvnJiRENF41LaQWBmFfWkGEy5QfE%2Bhyp3WjtmCrmaFz0DT6xE8r3iOwX2oQEtf4NIkBOecmadImEc9c2LGIAGev9Z8Yd4M8fZnTnWxNa03jqU9IZr0A7x%2BPwCL%2B2lwFBB&X-Amz-Signature=18e9b89e55f52991b868873c7ee4b928583e68220d358fefe39798113faf48f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
