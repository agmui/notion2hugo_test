---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIXC5RSE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDlKNjoFcdp3luz2Pv2%2Fv%2BX8%2FiM%2BCT%2B5LX90xnJOesR8AIgWeJXixoZZUpnIn0IPghbIHITgL343Sygz9aKXr1zZUYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCAUUfDhHqrbHOA4qCrcA9NSsxVF7EIhTUfGBPUXSSfQLlppbfMIrrslc3uE%2B8MD6d0%2F62%2Bwuno3CH4R7B0T0y3rSOPHd9quF2IW%2BNPXnDGVafa0pE5tS4eUCzDqcJCxBuvAlyKkxXZtdp2PchqA0THg%2B%2B0MaNRRksT7Nc3QkfFx2Df5KqpPk84QJuvWaekw7zsGtcuQ1vAMqPFWb9UZBJmgkPYrwi7x4HLa0%2FJLJNaE%2BCnM9KJ%2B3IrUB5iGp1FBVGScC9eOCz4OJGxQK%2BXhNSEKBBpLIOekoQ3b3h5j%2BX1P7xgMspPd2dzwKAGiIw9WVTbVSjZJJZMe3KiVsSRxXFW0qbMkFuB3iy5uOTrAh%2FJ8wzhjbkCEVliuyVY%2Bwp21CrcIkRXCFtK1OghLEgIZ0o2k2K6Syr7H7qFULgoBYySPrvNpJgAqiT6nEmIMBTyHimRVTj%2FBH%2FLpKMlW0c0vzXZ9evrkOL7BOFZycSjlSaLprNTai3gfewZ8xu9jgDde%2F9NG0YojDboSHzTG50MftjXR3FcX9gcuwKmi%2FOx%2BGmMqn3DQygT1bsCqtm63lJQPk%2Bg6d7P8JXdB8%2BOhv221gYoju8A9lCGTvRd%2BRMXB5SZdLo%2BWZjVhL8Rr1Fl7LZA%2B3ozNfEEICwkk5GncMOL9ib0GOqUBVvrSpepf5xoBgGrgZrHLLSd6UIqdzTkmgErzmCGiS%2FAy0%2FIuNK7KFJ4bizt8FlNRH2w6n%2FiHH63RbkvCvT9nKKbZs%2BKgK7Qea26ch5xDpf7kjOXfGOQdBTJbdatQRO9UWgvTDG0bhwjl9Y%2FDwL91pd6F2AVZ9R83TAJJMGNUWv%2Bn8byKgq5K2q4eyTH%2BlR%2B0t8UGCsok%2B0Kzk10m9iW3GaZJMLNh&X-Amz-Signature=9f1832cbbb927460e2ad876a236cc383a93c7ab807a94e36168666b5e5674fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIXC5RSE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDlKNjoFcdp3luz2Pv2%2Fv%2BX8%2FiM%2BCT%2B5LX90xnJOesR8AIgWeJXixoZZUpnIn0IPghbIHITgL343Sygz9aKXr1zZUYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCAUUfDhHqrbHOA4qCrcA9NSsxVF7EIhTUfGBPUXSSfQLlppbfMIrrslc3uE%2B8MD6d0%2F62%2Bwuno3CH4R7B0T0y3rSOPHd9quF2IW%2BNPXnDGVafa0pE5tS4eUCzDqcJCxBuvAlyKkxXZtdp2PchqA0THg%2B%2B0MaNRRksT7Nc3QkfFx2Df5KqpPk84QJuvWaekw7zsGtcuQ1vAMqPFWb9UZBJmgkPYrwi7x4HLa0%2FJLJNaE%2BCnM9KJ%2B3IrUB5iGp1FBVGScC9eOCz4OJGxQK%2BXhNSEKBBpLIOekoQ3b3h5j%2BX1P7xgMspPd2dzwKAGiIw9WVTbVSjZJJZMe3KiVsSRxXFW0qbMkFuB3iy5uOTrAh%2FJ8wzhjbkCEVliuyVY%2Bwp21CrcIkRXCFtK1OghLEgIZ0o2k2K6Syr7H7qFULgoBYySPrvNpJgAqiT6nEmIMBTyHimRVTj%2FBH%2FLpKMlW0c0vzXZ9evrkOL7BOFZycSjlSaLprNTai3gfewZ8xu9jgDde%2F9NG0YojDboSHzTG50MftjXR3FcX9gcuwKmi%2FOx%2BGmMqn3DQygT1bsCqtm63lJQPk%2Bg6d7P8JXdB8%2BOhv221gYoju8A9lCGTvRd%2BRMXB5SZdLo%2BWZjVhL8Rr1Fl7LZA%2B3ozNfEEICwkk5GncMOL9ib0GOqUBVvrSpepf5xoBgGrgZrHLLSd6UIqdzTkmgErzmCGiS%2FAy0%2FIuNK7KFJ4bizt8FlNRH2w6n%2FiHH63RbkvCvT9nKKbZs%2BKgK7Qea26ch5xDpf7kjOXfGOQdBTJbdatQRO9UWgvTDG0bhwjl9Y%2FDwL91pd6F2AVZ9R83TAJJMGNUWv%2Bn8byKgq5K2q4eyTH%2BlR%2B0t8UGCsok%2B0Kzk10m9iW3GaZJMLNh&X-Amz-Signature=3c964167a251e63dc805176bf6deda0151d3dac203ff0a220de24398de0845f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
