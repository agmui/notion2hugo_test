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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7Z5BZM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7EZTGYRP29hBAmoM8SxCfR8GUf0dxH%2BP7gsV67pjfhAiAZho%2BiCeiEEhp3jhmgyHWpvqeID7259nLVNBkjYiykEyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGzzHo3qITraPyNFKtwDq8Gsn3dU2iGK7m9iKCHowBOEr0gqt2sANCyKB8XpHhqc1gveDDNYhKWTmva12gADQ5tAhz7w%2BTLClSDZzZWACszohK6jR6pp58WdYFpb3LYibTqpx75EM4SvGSl8kXgAOAeXEiZpK6xYOVXNRCNrkimVrG%2Fj3srF4o2t9aMrujcIsOZiUR4nKGJHuhMNRqdhiUIGk06%2F6V8vPzwqhPFkDcdXW%2BMC4Hcv5Zc86nG1zp1u85Q29RMwet7kdy1VuxbagxyufWuCordhqB2%2FIuT0JAbQFXFfYifDSA5E%2B5LLlQP7GpbB31uEmmeVTW1Rhg2s5aM2Awdv5752EeI28iHQ1aFf5DtFYQ6oLARCu2jSdHiEdWYLvXfqDj903G%2FoCV5lC677LynZHHjIyN%2Buh%2FPlmuifIkNKZwpK85%2FPOMh0yIbqASXS%2BGo3Bmr4bhDJDSNwCUJUpdMkVlvvEJwFYfs1FIDSeX0yHG6SluflMnrNx%2FIbTr8thuvwDqDOV8H8gRDY2MmXttO19QbQxT2uhD7V%2FXi4WSP79F9wy8bmZ3jBtZCkXiw2i9NUlzLxhRB9SLrl3xMGl2E8Bv0dcDr6kQaEjylYIbql%2BPosUeRDtJatmMmno3QzaC%2Bj4YAMXbUw3%2BftwwY6pgHLK763EdkqjF3Jfo0WI98R6oYnqe9n7O6yHEB1DscUnxumFTR0Y94NvWyzixvJKOUts62vpuwzMpf89QT%2BJT%2B6jaTXr7s4sb8a%2FGsbl%2BCOSgs4TzWOwWZT2TRzYk7bWuqe9tQ7XjGJTJaEMavrwtdkrgpBSfdM6hN%2FasqSy%2B2%2BWL4VIvev7ByaV6PLr8z4FD4DIriqc9I516w1Pb0FZsmxfE7eGGYT&X-Amz-Signature=b89277249b5208490662fca96152078253849be960c6e7b74aca9f90315fa830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7Z5BZM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7EZTGYRP29hBAmoM8SxCfR8GUf0dxH%2BP7gsV67pjfhAiAZho%2BiCeiEEhp3jhmgyHWpvqeID7259nLVNBkjYiykEyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGzzHo3qITraPyNFKtwDq8Gsn3dU2iGK7m9iKCHowBOEr0gqt2sANCyKB8XpHhqc1gveDDNYhKWTmva12gADQ5tAhz7w%2BTLClSDZzZWACszohK6jR6pp58WdYFpb3LYibTqpx75EM4SvGSl8kXgAOAeXEiZpK6xYOVXNRCNrkimVrG%2Fj3srF4o2t9aMrujcIsOZiUR4nKGJHuhMNRqdhiUIGk06%2F6V8vPzwqhPFkDcdXW%2BMC4Hcv5Zc86nG1zp1u85Q29RMwet7kdy1VuxbagxyufWuCordhqB2%2FIuT0JAbQFXFfYifDSA5E%2B5LLlQP7GpbB31uEmmeVTW1Rhg2s5aM2Awdv5752EeI28iHQ1aFf5DtFYQ6oLARCu2jSdHiEdWYLvXfqDj903G%2FoCV5lC677LynZHHjIyN%2Buh%2FPlmuifIkNKZwpK85%2FPOMh0yIbqASXS%2BGo3Bmr4bhDJDSNwCUJUpdMkVlvvEJwFYfs1FIDSeX0yHG6SluflMnrNx%2FIbTr8thuvwDqDOV8H8gRDY2MmXttO19QbQxT2uhD7V%2FXi4WSP79F9wy8bmZ3jBtZCkXiw2i9NUlzLxhRB9SLrl3xMGl2E8Bv0dcDr6kQaEjylYIbql%2BPosUeRDtJatmMmno3QzaC%2Bj4YAMXbUw3%2BftwwY6pgHLK763EdkqjF3Jfo0WI98R6oYnqe9n7O6yHEB1DscUnxumFTR0Y94NvWyzixvJKOUts62vpuwzMpf89QT%2BJT%2B6jaTXr7s4sb8a%2FGsbl%2BCOSgs4TzWOwWZT2TRzYk7bWuqe9tQ7XjGJTJaEMavrwtdkrgpBSfdM6hN%2FasqSy%2B2%2BWL4VIvev7ByaV6PLr8z4FD4DIriqc9I516w1Pb0FZsmxfE7eGGYT&X-Amz-Signature=4e8f61271eecc76c81881631551ec99044c3b4c030ac1624512038f10e01f458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
