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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT6K7DI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDpkURlFl1fJRhd42BscWRf0%2FsLm2Bu9kl%2BcvUPFo%2FASAIgC8wAWJ%2FcUlk5yk6SAaaZwFL83f6P5FgQRChNqfUTS28q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNEhUSAE7SZxjzmqOCrcAxpdQMZHR2ZZ8l913Jp3NBnd6vdLdlnt89CrXCCBKPJUY1xpSeWB%2FiHtW0r4IRHGur6A1SwcKJxq95TunyCRzU8PaJS%2BlGs2Tjv%2BCf8szp7lY%2ForyN63AIWgc5JtusuUnUIoD3ArhTy5zVtX7GJGFVI8JQZXd%2BGoyHtxEOG5Mr8Zees9xv0cWM2GyDEbWiKkPACsXVmx854R5QamhOPX1664jKkFTRFu7MT%2FQ6n5R1%2FVJV9tKi37i%2BhAqnppZiCBslRFhsVPgVyQsMU6CwMHfKtK7DzLEYpFJ%2Blgujvznn0RWkyoi8X997hp14eDOVy1pn2RIK3%2FIznrdqc6NK3eguVje1KRRGsUmkNfP649lRfzK2hoHScRq4NAAQWXssJYbyj5lolNlVqlvXEqJ%2Fy82DYSnJYHBG0STZi73hWRKg5pmRdhLyRvgx55eqNCeAV676WcX09MvIRmyVR%2B0V5ctQQHY1NhzrswarMj3sKkvBa16EkM6O2NBsjYOQRWoQE6QJXUxi0J9FvyO7tROtGFAclk1DcBuIFOIUN5ttYN6hKHROV9s2g01yzklP02xE7WsdcIU5f%2Fat5qevqy5nwaKOSQSuWgtPTrXz3ps0%2BpcD%2B41VaqbxHNwAs%2B6QB4MLOX4MMGOqUB4PCcHvjc03KoCOlgQdda2dGIU13TFiEDBZsWOuKkojblxxeF7mZGXvmhZGgTEi8xJITRaAt563Ui5%2B%2BJoZhB4SdR6Ircbvv7H65vmCBGuPD7%2BsIsKfiU1YQ9GEe6%2FTvQba2JItLoXRVMxzEB%2Bqt8Mb39Xok%2BMsYHSySzQd0mF5eTzY091Wk9QW1kcZLCluBWlF0Kg9J%2F3DkznSQlmgdF6l1jSt6m&X-Amz-Signature=ac324dc13ca78ae85e219e1c836b965d0493fc05a1f715c39568e771b676bd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT6K7DI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDpkURlFl1fJRhd42BscWRf0%2FsLm2Bu9kl%2BcvUPFo%2FASAIgC8wAWJ%2FcUlk5yk6SAaaZwFL83f6P5FgQRChNqfUTS28q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNEhUSAE7SZxjzmqOCrcAxpdQMZHR2ZZ8l913Jp3NBnd6vdLdlnt89CrXCCBKPJUY1xpSeWB%2FiHtW0r4IRHGur6A1SwcKJxq95TunyCRzU8PaJS%2BlGs2Tjv%2BCf8szp7lY%2ForyN63AIWgc5JtusuUnUIoD3ArhTy5zVtX7GJGFVI8JQZXd%2BGoyHtxEOG5Mr8Zees9xv0cWM2GyDEbWiKkPACsXVmx854R5QamhOPX1664jKkFTRFu7MT%2FQ6n5R1%2FVJV9tKi37i%2BhAqnppZiCBslRFhsVPgVyQsMU6CwMHfKtK7DzLEYpFJ%2Blgujvznn0RWkyoi8X997hp14eDOVy1pn2RIK3%2FIznrdqc6NK3eguVje1KRRGsUmkNfP649lRfzK2hoHScRq4NAAQWXssJYbyj5lolNlVqlvXEqJ%2Fy82DYSnJYHBG0STZi73hWRKg5pmRdhLyRvgx55eqNCeAV676WcX09MvIRmyVR%2B0V5ctQQHY1NhzrswarMj3sKkvBa16EkM6O2NBsjYOQRWoQE6QJXUxi0J9FvyO7tROtGFAclk1DcBuIFOIUN5ttYN6hKHROV9s2g01yzklP02xE7WsdcIU5f%2Fat5qevqy5nwaKOSQSuWgtPTrXz3ps0%2BpcD%2B41VaqbxHNwAs%2B6QB4MLOX4MMGOqUB4PCcHvjc03KoCOlgQdda2dGIU13TFiEDBZsWOuKkojblxxeF7mZGXvmhZGgTEi8xJITRaAt563Ui5%2B%2BJoZhB4SdR6Ircbvv7H65vmCBGuPD7%2BsIsKfiU1YQ9GEe6%2FTvQba2JItLoXRVMxzEB%2Bqt8Mb39Xok%2BMsYHSySzQd0mF5eTzY091Wk9QW1kcZLCluBWlF0Kg9J%2F3DkznSQlmgdF6l1jSt6m&X-Amz-Signature=9fae680a429d73411091472205e54aca4a3dc2f03660a21845e4f44a611a6116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
