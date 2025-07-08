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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5M7FFR4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCn2JJkIJQS%2BLTVCyrI4TSJarDdPXYyMyiE5zio%2FNyP%2FAIhAP4VBIUr4MdlztA9PXkwTo7NoD9tgr7WiXwMEZYg4CteKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL2fy%2FnGFVoSuDjL8q3APDIYF5KKU6IOhFz%2F2o%2BH5Y4zkMgaIF3WtLKQg1vikUGOGQ3hpf9YnpYBYUkUU7Ewvjsj3on7%2BfoCnuzD68N5zWfZhCn941nYpWdP1KQ5Jj5KHGfzrb%2B8p9hcQe0pY1I3gMc0n3G2%2BM2RRWSjXsdY7xktUSe%2Baaxtu1LKNKOFL%2BCZkzzFWQ0gGNwVzINcALABmtnBe%2FUolPAqWpkIur67DsF2B0FOw%2FQfvEHmBYZTGE4HT4LffwRi21GZrdDNeVozNRTiclrEtECzzz%2BGq5FE0ytW1019e%2FwRvPYldtN0k38aCgLLxym80qbwt4%2F0IBWBkrTcytrZVkt%2Fb0x0wfSG6IBJO%2BQlQ8%2FdNgzoBBi%2BsdX2HhiQR4QMuFu71jBsqrUotcOKqgQh%2F%2BZ0qT9oP2ebCY1T3t8XMyShaRsO7N693jwwcbhIxpayIAnqzU9ZIEeDvCTTOp8iUF%2BUZ3f2DgBkG9l5UleShh1m5hmHZEMjdGvjFA4zBW3WsMXOTFsDKG2AtBOCkqp4eIoLJ8W3bUx2hXxLrA1A0ydUYgWB2SAagZUxN6Qqs8h9CBPgbjm6QO6z2QsOk%2FDe2eUDbIModiKcc%2BqDPHXv532jV1A%2BDs1pFtnXS4UsYivW7kTB%2BcGDDWg7LDBjqkAX2k81kzBrDh88NGE2G%2BOrYhhU4bd2ruaHdMTsqTlQLrF6TfbiV1KSja84yQL1AdjlG%2Fa3We2DYm%2Bx%2BKM4I1InVKSecXERvFAr63VYOoa0ElujxwAIxHgDOLxtEXynViN37jtr5S1FAj2N6poxG1DGwbamzEySO%2BvJDiLcTJ0%2FInjdgF5xilZ8aoSmzfo4URF3x9PbtkWnB%2BQcLXQBMz5uZ%2FOdi7&X-Amz-Signature=5ceb2f1648555335029dcb1dd99a2696b450c182df8d7bc80f94172853b69bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5M7FFR4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCn2JJkIJQS%2BLTVCyrI4TSJarDdPXYyMyiE5zio%2FNyP%2FAIhAP4VBIUr4MdlztA9PXkwTo7NoD9tgr7WiXwMEZYg4CteKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL2fy%2FnGFVoSuDjL8q3APDIYF5KKU6IOhFz%2F2o%2BH5Y4zkMgaIF3WtLKQg1vikUGOGQ3hpf9YnpYBYUkUU7Ewvjsj3on7%2BfoCnuzD68N5zWfZhCn941nYpWdP1KQ5Jj5KHGfzrb%2B8p9hcQe0pY1I3gMc0n3G2%2BM2RRWSjXsdY7xktUSe%2Baaxtu1LKNKOFL%2BCZkzzFWQ0gGNwVzINcALABmtnBe%2FUolPAqWpkIur67DsF2B0FOw%2FQfvEHmBYZTGE4HT4LffwRi21GZrdDNeVozNRTiclrEtECzzz%2BGq5FE0ytW1019e%2FwRvPYldtN0k38aCgLLxym80qbwt4%2F0IBWBkrTcytrZVkt%2Fb0x0wfSG6IBJO%2BQlQ8%2FdNgzoBBi%2BsdX2HhiQR4QMuFu71jBsqrUotcOKqgQh%2F%2BZ0qT9oP2ebCY1T3t8XMyShaRsO7N693jwwcbhIxpayIAnqzU9ZIEeDvCTTOp8iUF%2BUZ3f2DgBkG9l5UleShh1m5hmHZEMjdGvjFA4zBW3WsMXOTFsDKG2AtBOCkqp4eIoLJ8W3bUx2hXxLrA1A0ydUYgWB2SAagZUxN6Qqs8h9CBPgbjm6QO6z2QsOk%2FDe2eUDbIModiKcc%2BqDPHXv532jV1A%2BDs1pFtnXS4UsYivW7kTB%2BcGDDWg7LDBjqkAX2k81kzBrDh88NGE2G%2BOrYhhU4bd2ruaHdMTsqTlQLrF6TfbiV1KSja84yQL1AdjlG%2Fa3We2DYm%2Bx%2BKM4I1InVKSecXERvFAr63VYOoa0ElujxwAIxHgDOLxtEXynViN37jtr5S1FAj2N6poxG1DGwbamzEySO%2BvJDiLcTJ0%2FInjdgF5xilZ8aoSmzfo4URF3x9PbtkWnB%2BQcLXQBMz5uZ%2FOdi7&X-Amz-Signature=988ff06a2a049f6b8e4a4b9edb21d09a9610ed5e8a2dde5f5d3bb7766c756e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
