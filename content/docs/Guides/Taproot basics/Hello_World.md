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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RFONMC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjx9W7wnSj3GgUuQBJSGlKoo4eIaX1jEUulzL3KiB6TAiB5D1rxYzv2VKx4201RpFLIaTO2M7GbAKNMM2okHLKHTir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMkgVIRitTdvEjdlXfKtwDIDvmLVwfykbruGXZhpSuRVuLyISR8FoECVcNhmWn8lMXThG24PC6xvmibA%2F9yg0F8%2Bof9m4kBWvQjBd4lTBuVaULWjpjRJC38M72k2m1BHqz2VAB43IE4ClOmBo%2F%2BKRBCUdYS%2FFWykPzU%2BQxzYUwvZSybKDHxdFqU5JidW9SSXfuLS5omWRGx7Jv08wSOZBJNLvq3pDvzlopMy%2F4%2FTJnasKQKSPrt2dPQmXCaAz70a96sbFTE3uses5pDbvgvNP0u6FSw9jYN6YXTrjR8IawSff7QhMeW%2Bl%2BWFvhdiG%2Bqe1xCK%2FStv%2FZPaxzJyFiaxSYW4MT8jW5V8MUPGcmeLxCoAn5Y1%2B4Hfw8S%2BQ%2BR1jpxAVGZgPjZeT%2Bbl59iPlC4nj5CAZabMjaffPeWGASWD6vlMp1PQv%2BoNZcXmaaozJuS5JAJArHH0xxxhYb4BxOhRlU3sfywuJ4Lmygf0LCi7cu00rVNJsOd3JWs%2BkBGwW0xlWmPBA%2F2SZNLN02F3z1iW0EogeNqQZq3PQCe0TsVOtMRfiOpF0DTe3JXAk8AUlzixxpqlvu%2BJvuxnu6DkA2L%2BCPXIROiIA2bDcFw3kbWwDp2squ7SC%2BjBkcu0duUE2ltliX%2BtO9cdqAmFsML2IwtKvTwQY6pgFFVU5hGJpc4rExqMI7ADJxmMC7Mzp24B0jljdrgwxDxludTLgoIDAWLK1yF%2BEIsDzaHq7%2BmCLoW3WgDsScQjz%2FdpOqET3TG99ja8be%2Bq4Y4lTXWDDtmieKhUHhicnfAmJMJA2WrXW8GV7LA7GqkTMVNfVdtqzEsa863T1gn2IkleucGk6qUOLw1o3FeCItODusROPjIYi%2F5WcLZXp1N2cr83me7QoJ&X-Amz-Signature=1f5c1879af5958a96147c71e56576b567938791b262c9b831a18b1c40959e903&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RFONMC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjx9W7wnSj3GgUuQBJSGlKoo4eIaX1jEUulzL3KiB6TAiB5D1rxYzv2VKx4201RpFLIaTO2M7GbAKNMM2okHLKHTir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMkgVIRitTdvEjdlXfKtwDIDvmLVwfykbruGXZhpSuRVuLyISR8FoECVcNhmWn8lMXThG24PC6xvmibA%2F9yg0F8%2Bof9m4kBWvQjBd4lTBuVaULWjpjRJC38M72k2m1BHqz2VAB43IE4ClOmBo%2F%2BKRBCUdYS%2FFWykPzU%2BQxzYUwvZSybKDHxdFqU5JidW9SSXfuLS5omWRGx7Jv08wSOZBJNLvq3pDvzlopMy%2F4%2FTJnasKQKSPrt2dPQmXCaAz70a96sbFTE3uses5pDbvgvNP0u6FSw9jYN6YXTrjR8IawSff7QhMeW%2Bl%2BWFvhdiG%2Bqe1xCK%2FStv%2FZPaxzJyFiaxSYW4MT8jW5V8MUPGcmeLxCoAn5Y1%2B4Hfw8S%2BQ%2BR1jpxAVGZgPjZeT%2Bbl59iPlC4nj5CAZabMjaffPeWGASWD6vlMp1PQv%2BoNZcXmaaozJuS5JAJArHH0xxxhYb4BxOhRlU3sfywuJ4Lmygf0LCi7cu00rVNJsOd3JWs%2BkBGwW0xlWmPBA%2F2SZNLN02F3z1iW0EogeNqQZq3PQCe0TsVOtMRfiOpF0DTe3JXAk8AUlzixxpqlvu%2BJvuxnu6DkA2L%2BCPXIROiIA2bDcFw3kbWwDp2squ7SC%2BjBkcu0duUE2ltliX%2BtO9cdqAmFsML2IwtKvTwQY6pgFFVU5hGJpc4rExqMI7ADJxmMC7Mzp24B0jljdrgwxDxludTLgoIDAWLK1yF%2BEIsDzaHq7%2BmCLoW3WgDsScQjz%2FdpOqET3TG99ja8be%2Bq4Y4lTXWDDtmieKhUHhicnfAmJMJA2WrXW8GV7LA7GqkTMVNfVdtqzEsa863T1gn2IkleucGk6qUOLw1o3FeCItODusROPjIYi%2F5WcLZXp1N2cr83me7QoJ&X-Amz-Signature=b235bc905f61c68e26d152d66fab28c198e3d5871096ff93f01b46882f1737bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
