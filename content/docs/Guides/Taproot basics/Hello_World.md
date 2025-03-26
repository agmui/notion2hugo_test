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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4N4VH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgneU2HH5fnVoHzfCZRYJuWY2j0VB5QaxRVJXuiXOcuAiAOTEu0eebuce%2FZQWfrYILNSGCq%2BMe84UfmdIGnLYIsGir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMAUAhRKGwCWs6FpgMKtwDUDCOptqLQxxArnuTmkIgTccixUupTqvBXl1VTbteTClAHT6qonGJPpxAw379bLD%2ByOnmN5prjxqmGkhr2vbZ5jtcUX7BRaF%2Fs0LsRFZYvYaF1Mp9y4Y0%2FjVSe4%2FNGVs1jUr3bZyaP9hnvCg%2F5%2FUPJoSwYLf6QTN8BW7SuiUCsS3KxL5yXiLztoJ4o3RuYctfDSknf6r1rW7veTwdT5h8Kvs%2B2uyH3WIm%2Bmy1id2P8r7idcdk8rDWLtbwsJ0UKStlmetm3RB89ZzuXiZBFi2%2FW6OzVf3kZDGxC%2FN3w%2FXnawV0NHDabpoNwePzdicT2Olpy70FTKaAJaBy2erxnCOjUc6rOl2Y886aYpb%2BKu9Dbb1SjTCJK8%2FD3dtuCe39xarAyx3jxcn6jaFV7KtryiAviakG5tDTxj%2FRdExXmLMA6%2Bh1p4lMSFQo6KkWmI%2BXJTzaCfjc1IXIIJs2ABbq7m44Wh4bxyS3FOld4rZLKKPEFv329u%2FW00ZoAcaTFhlSxku0TZnUkVQnt5XimfFxlXIgTPGy940du6RKWNOmSqEex9gviBNvF7sOmx8ksK%2FLmReX%2BPbBMzY6SD0jr7UP444LcL6FSIDpT4ajiX235FyjSHOg3o%2F%2FxJ3iJwyEbIkwiY6NvwY6pgGGVrRdXwrIHy9OqxPAgNbGPCXwvArUENsw7UNgsw4n4h7k30pH%2BDv8OkJZgjuKbI%2BJxzSw16D6HrjiJFFl8%2FE9EQh4H5W8XXprvPZIDUX2boWk4QoRhxClsvbsSufK537lUUn6oTwUjS3NGRxZlM5ISrkC3vOlnnAyRXX6ixUivyhfGS9a0WwXwXJME4ll0%2F5JqMWk0KwHDKaV87EEQeOQPNGDd5Rg&X-Amz-Signature=d58f6fb16e44e765883fef95a34648c88305700631e046fe7fec402d87c99132&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4N4VH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgneU2HH5fnVoHzfCZRYJuWY2j0VB5QaxRVJXuiXOcuAiAOTEu0eebuce%2FZQWfrYILNSGCq%2BMe84UfmdIGnLYIsGir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMAUAhRKGwCWs6FpgMKtwDUDCOptqLQxxArnuTmkIgTccixUupTqvBXl1VTbteTClAHT6qonGJPpxAw379bLD%2ByOnmN5prjxqmGkhr2vbZ5jtcUX7BRaF%2Fs0LsRFZYvYaF1Mp9y4Y0%2FjVSe4%2FNGVs1jUr3bZyaP9hnvCg%2F5%2FUPJoSwYLf6QTN8BW7SuiUCsS3KxL5yXiLztoJ4o3RuYctfDSknf6r1rW7veTwdT5h8Kvs%2B2uyH3WIm%2Bmy1id2P8r7idcdk8rDWLtbwsJ0UKStlmetm3RB89ZzuXiZBFi2%2FW6OzVf3kZDGxC%2FN3w%2FXnawV0NHDabpoNwePzdicT2Olpy70FTKaAJaBy2erxnCOjUc6rOl2Y886aYpb%2BKu9Dbb1SjTCJK8%2FD3dtuCe39xarAyx3jxcn6jaFV7KtryiAviakG5tDTxj%2FRdExXmLMA6%2Bh1p4lMSFQo6KkWmI%2BXJTzaCfjc1IXIIJs2ABbq7m44Wh4bxyS3FOld4rZLKKPEFv329u%2FW00ZoAcaTFhlSxku0TZnUkVQnt5XimfFxlXIgTPGy940du6RKWNOmSqEex9gviBNvF7sOmx8ksK%2FLmReX%2BPbBMzY6SD0jr7UP444LcL6FSIDpT4ajiX235FyjSHOg3o%2F%2FxJ3iJwyEbIkwiY6NvwY6pgGGVrRdXwrIHy9OqxPAgNbGPCXwvArUENsw7UNgsw4n4h7k30pH%2BDv8OkJZgjuKbI%2BJxzSw16D6HrjiJFFl8%2FE9EQh4H5W8XXprvPZIDUX2boWk4QoRhxClsvbsSufK537lUUn6oTwUjS3NGRxZlM5ISrkC3vOlnnAyRXX6ixUivyhfGS9a0WwXwXJME4ll0%2F5JqMWk0KwHDKaV87EEQeOQPNGDd5Rg&X-Amz-Signature=3c5010250dea75e57ddf5fdbcf3069615dd08b4aa08dd1a0452ddb7bee25bf55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
