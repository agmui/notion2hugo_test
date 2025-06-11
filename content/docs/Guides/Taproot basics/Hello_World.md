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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR6RK2L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhI6QmXZ%2FDeRSrr2H9rNeCEb%2Bv%2FE7E17EpUOrn0g%2FkAIhAKTldvgJ2nBoi3b4PNjf2ra66lkWlmjidBaYpGrYAZm7KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8WUzcll6%2F%2BERVNDsq3AO6aifDcEIaiZF2%2FCrpj4eUgQCjmF%2BVNNYzSoXQSm8xnpenqhR8WjPMnJgLCn1oGb0iJJj8xBtDVdaBOpPlg%2B8hng314sFeNgBoWexolBX6RkKqXEb5Wom%2FVq%2F3hb0ViU2OJbK1WtcnGdEMBELSIvS9%2BUtDlY%2BNnV3JqmPiUjDtjtjQUKkVbkhHuTV%2BNFI4RYkIe%2FDZP%2BeTthNL4bP%2F9DCvB3%2BZiA8oz9EdWoJzOvGAaFyy8uzrse8FbzQZ9nFBFXGd3Ec6lGb157GML1ZMKgPApklk6tB5YEBsG16mXTDLLhIcGQacxT5apJ0qDpxK5Hq3njMY%2BWawURhfIHB3jIM%2B%2BfimJKbmvM8vLHivNutjwGxeupv5rOsr%2FRdTjfEC87eE%2BpSRUjBPwI%2FQBIl7OC7C7nnqDezuAiEnBcDNju5d16ATsV30N0a7B8I2Ymnk5wCYNfmmVfYlnYMLknhbMny6Z3ASuz2E58NfCTXGk2Wx%2Fl3HiMYmxVzHpItjKhTEjyGBbFMgnK2qwUV8hA10lE8Ub1kVna%2BwHg8JecUSpCGyjRjpzpCmHFQh%2FzWi6J26kKP4hVqYW1U7XIOa5izOs%2BQ9%2Fyu584d1Hnu5EcxdTrfgMDSZNgLlbuDeB8%2BrODCr3aPCBjqkAefsw6DVJjwyyG0WFC92sqKVHpJMTI1UUPUmkoUoZWDndyfn12%2BDXV1q4S71kOdWdeDGwzUvl69%2F2n%2BO87SiKGISYgjqqPy9L5DGsd6%2FjrqN%2FxEYTM6CwxuJLHJ2SAkh%2BLvLPypuv30IDzryRej03bPeO2V%2BYLxqVDfiK1pxeLVftmlG3Qeh%2Fnoest24N%2FcBizGpZxKVSkTCA1xMwvQ2x%2Bs1ip0L&X-Amz-Signature=a4ccbc6c44b2577c62dbeda6c866e861f633715c760374c79f6aaed857bfcc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR6RK2L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhI6QmXZ%2FDeRSrr2H9rNeCEb%2Bv%2FE7E17EpUOrn0g%2FkAIhAKTldvgJ2nBoi3b4PNjf2ra66lkWlmjidBaYpGrYAZm7KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8WUzcll6%2F%2BERVNDsq3AO6aifDcEIaiZF2%2FCrpj4eUgQCjmF%2BVNNYzSoXQSm8xnpenqhR8WjPMnJgLCn1oGb0iJJj8xBtDVdaBOpPlg%2B8hng314sFeNgBoWexolBX6RkKqXEb5Wom%2FVq%2F3hb0ViU2OJbK1WtcnGdEMBELSIvS9%2BUtDlY%2BNnV3JqmPiUjDtjtjQUKkVbkhHuTV%2BNFI4RYkIe%2FDZP%2BeTthNL4bP%2F9DCvB3%2BZiA8oz9EdWoJzOvGAaFyy8uzrse8FbzQZ9nFBFXGd3Ec6lGb157GML1ZMKgPApklk6tB5YEBsG16mXTDLLhIcGQacxT5apJ0qDpxK5Hq3njMY%2BWawURhfIHB3jIM%2B%2BfimJKbmvM8vLHivNutjwGxeupv5rOsr%2FRdTjfEC87eE%2BpSRUjBPwI%2FQBIl7OC7C7nnqDezuAiEnBcDNju5d16ATsV30N0a7B8I2Ymnk5wCYNfmmVfYlnYMLknhbMny6Z3ASuz2E58NfCTXGk2Wx%2Fl3HiMYmxVzHpItjKhTEjyGBbFMgnK2qwUV8hA10lE8Ub1kVna%2BwHg8JecUSpCGyjRjpzpCmHFQh%2FzWi6J26kKP4hVqYW1U7XIOa5izOs%2BQ9%2Fyu584d1Hnu5EcxdTrfgMDSZNgLlbuDeB8%2BrODCr3aPCBjqkAefsw6DVJjwyyG0WFC92sqKVHpJMTI1UUPUmkoUoZWDndyfn12%2BDXV1q4S71kOdWdeDGwzUvl69%2F2n%2BO87SiKGISYgjqqPy9L5DGsd6%2FjrqN%2FxEYTM6CwxuJLHJ2SAkh%2BLvLPypuv30IDzryRej03bPeO2V%2BYLxqVDfiK1pxeLVftmlG3Qeh%2Fnoest24N%2FcBizGpZxKVSkTCA1xMwvQ2x%2Bs1ip0L&X-Amz-Signature=f0fc0e6983d5be3268e4dc66bf6e03850b8c7800a6e61e750383121b9e3287e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
