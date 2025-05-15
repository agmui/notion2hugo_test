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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGXSU43%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD%2BZ2KvvH%2BdJ8QngP8uVc3KAddYQGwD0dD2ZbXX5jZiNAIgM%2BrJS1DndPxzLDt%2Bwz0u7ETjAWq61JE888ALGWc1%2FFgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN65503%2BgyncZ7G69yrcA1gd7N2MN6o0l9Tph5p7jFgBp8QXRKOycH8i6h7O%2FiFKHb%2BOVJyiU8wpIiR%2FwhZu5WkrunxLulpx%2BGpGX398ils%2B3x8Ck%2BT0MIodLcxMTyz8zM0gPnYGIyaOr0uAM8t0NPI2HKrWaRsGynzGnhvUdGRXGyh70jHGRnbv9YTw9UUWpqWoBiMOcbhxi68cmRjQSRltXGUpLiZ4oiXxgx7QKjiKTFDg1YPHWXIlu16SYS31kMXEEG20hMRZaRfAo2zlxIuSimEz4Fo6CjRSBKIcyzb0xgprcZZDj8hV6b0TgEfkiwUc5OocRfWhjcp%2FsJDUJWbTKIdKRJj9NUHiEHguVVXIUCRYt5eiJfMeKA3KIapCLLjtLKpH%2B7lAbZwSkqJ%2Fru6r2sNbYSoqAb4iweamhjMSoeIBiOfHte6SAvlbjfovfIKJv2xX2pWZRFi5x34ghDdi9XinqF67As3DD%2BYTxt5ztNzDQCwG1DFOSM29YYLwsoaOpCw3ygmxWdBKRH2rk%2FXbgKnjY1T47l61jm1f27TMXFeAe3ZRZC7VLMyR7kONDbWQt%2B%2BEFdp3GB9ulvy%2Fvks5PvDnzUjWNud3l7NsKc0FmqUXkbhOD4XdOA2CjS889uAfC6JTLmXvEYTCMODqlcEGOqUBt%2BEUGZ%2BOQbBN%2FFI1y0el9M5bKFBaKP%2FIhLYxkX8erXaVRWk5ld%2BUc89mGgvUDnejt6ueA%2BYetdzfdV%2B%2FbyjtUQa6K3x%2Be1%2F%2Fq63CU4NXUwKL34IveVDqoWYABsf5lv5payGK394%2B78PIDhhjOz5DaPxfSXgqv4D8YTG%2FoO3Aa5EwujzE6t6etd5epcW6pwMdoLfhOPY60z2aUg7hmeBZlNT6TeWA&X-Amz-Signature=c7ffab774b2a89d8ed709e9dab5ca01902738831e8d51907620f57c5fb26ed0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGXSU43%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD%2BZ2KvvH%2BdJ8QngP8uVc3KAddYQGwD0dD2ZbXX5jZiNAIgM%2BrJS1DndPxzLDt%2Bwz0u7ETjAWq61JE888ALGWc1%2FFgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN65503%2BgyncZ7G69yrcA1gd7N2MN6o0l9Tph5p7jFgBp8QXRKOycH8i6h7O%2FiFKHb%2BOVJyiU8wpIiR%2FwhZu5WkrunxLulpx%2BGpGX398ils%2B3x8Ck%2BT0MIodLcxMTyz8zM0gPnYGIyaOr0uAM8t0NPI2HKrWaRsGynzGnhvUdGRXGyh70jHGRnbv9YTw9UUWpqWoBiMOcbhxi68cmRjQSRltXGUpLiZ4oiXxgx7QKjiKTFDg1YPHWXIlu16SYS31kMXEEG20hMRZaRfAo2zlxIuSimEz4Fo6CjRSBKIcyzb0xgprcZZDj8hV6b0TgEfkiwUc5OocRfWhjcp%2FsJDUJWbTKIdKRJj9NUHiEHguVVXIUCRYt5eiJfMeKA3KIapCLLjtLKpH%2B7lAbZwSkqJ%2Fru6r2sNbYSoqAb4iweamhjMSoeIBiOfHte6SAvlbjfovfIKJv2xX2pWZRFi5x34ghDdi9XinqF67As3DD%2BYTxt5ztNzDQCwG1DFOSM29YYLwsoaOpCw3ygmxWdBKRH2rk%2FXbgKnjY1T47l61jm1f27TMXFeAe3ZRZC7VLMyR7kONDbWQt%2B%2BEFdp3GB9ulvy%2Fvks5PvDnzUjWNud3l7NsKc0FmqUXkbhOD4XdOA2CjS889uAfC6JTLmXvEYTCMODqlcEGOqUBt%2BEUGZ%2BOQbBN%2FFI1y0el9M5bKFBaKP%2FIhLYxkX8erXaVRWk5ld%2BUc89mGgvUDnejt6ueA%2BYetdzfdV%2B%2FbyjtUQa6K3x%2Be1%2F%2Fq63CU4NXUwKL34IveVDqoWYABsf5lv5payGK394%2B78PIDhhjOz5DaPxfSXgqv4D8YTG%2FoO3Aa5EwujzE6t6etd5epcW6pwMdoLfhOPY60z2aUg7hmeBZlNT6TeWA&X-Amz-Signature=94bb5b70de4b8e167415218b1375492d7bcbb9b40a27d4883db6d6c1ab4c7ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
