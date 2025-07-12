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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO73ZKF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESdRIThmdNuZrzsm0jIrqSnuoGSew9cA5fazC5PMSoZAiEA839qQ1zWVQk6%2BsKuc5HIGr%2BsVuvesQOCHIUu6ivQTLQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArh6NsLzjdJ03lJQircAz59cj%2By7fUl6gPtaw5kQgwkxwbzPMWZXSx4ki0VuT9k6JaIQCP5tiBw7Z6MSLc%2B%2FRz0eVZnOloo08g37ZXs%2F3VRbTSpa8u4otlkpMsXOcpB%2BUImTOQCNRdb%2FxA6HykSMLAV2Rr23MU%2BJX%2FBDwIVTnQatZrIdIP8O2s1s10zIzhm8sEDt5H7ghRAOqqVqVpg0mrMGtWrypccRVpV2wGuucFGdl%2FHsSkSM9MYASDiqz7kO8jI6T1rlqULYCVSMvaAsTjTIODfDBlK%2BvAyrTBxyfY0bNUbbQvd%2Fe38%2F8f1PWYLfqYi2kKp3rX3DLvhnpZzC7ObZ3MojYa5wnzpEAT4HexVUIprp3b2IwqPiG9YG4AMh4sVuMWqlxbgzeI3wx2n5dUXffb6D5PZ%2BDsSgXdDze98%2BJhfNUFIYQ3pT14qOIxAGVLuUoSc5sAx7CLfAdsZyNKuYdc4yw1o3NhWVbGhqIzio674dX%2FcMeMZ9iu%2Fi4Qhg6XWjFNNkfk0u0SlZru%2BXWgM%2Fw76MrFiCvq5i4W2UehO8TxzLGBzSPP2%2FEuxAq2ce4MjH%2B02ko2cYAO0kbe2G3iTLCuwApPKwXtY3bnWY2IcIbqdx40Mm%2FQvueEsDdflWe5Z11e%2FbYCTVq9JMPv8yMMGOqUBI3PYm7avX6h5yrYGWZSbPG%2Bg%2FvG4Sf0cGwHeC%2FxD3x5no68hRhfM1J%2FrOWAMAznYrzgUe14ZxMg2FVw50p98X8QhO%2Fi9a40Sj2yy6ZEckCjpZDtDJN82D2j973aFYkIG9sTee1DQKTjAKhEcuhAvYVxGRqaev4b3M6%2BTUck8xU9LO9YxmhIrlyYlrFKLB90K6inoztlFc75wZnTtj2piMXmjxrfE&X-Amz-Signature=b4f98d873f7d508bbc55d5187c865282a9b1825302ad857aa8bef58aedb3944c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO73ZKF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESdRIThmdNuZrzsm0jIrqSnuoGSew9cA5fazC5PMSoZAiEA839qQ1zWVQk6%2BsKuc5HIGr%2BsVuvesQOCHIUu6ivQTLQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArh6NsLzjdJ03lJQircAz59cj%2By7fUl6gPtaw5kQgwkxwbzPMWZXSx4ki0VuT9k6JaIQCP5tiBw7Z6MSLc%2B%2FRz0eVZnOloo08g37ZXs%2F3VRbTSpa8u4otlkpMsXOcpB%2BUImTOQCNRdb%2FxA6HykSMLAV2Rr23MU%2BJX%2FBDwIVTnQatZrIdIP8O2s1s10zIzhm8sEDt5H7ghRAOqqVqVpg0mrMGtWrypccRVpV2wGuucFGdl%2FHsSkSM9MYASDiqz7kO8jI6T1rlqULYCVSMvaAsTjTIODfDBlK%2BvAyrTBxyfY0bNUbbQvd%2Fe38%2F8f1PWYLfqYi2kKp3rX3DLvhnpZzC7ObZ3MojYa5wnzpEAT4HexVUIprp3b2IwqPiG9YG4AMh4sVuMWqlxbgzeI3wx2n5dUXffb6D5PZ%2BDsSgXdDze98%2BJhfNUFIYQ3pT14qOIxAGVLuUoSc5sAx7CLfAdsZyNKuYdc4yw1o3NhWVbGhqIzio674dX%2FcMeMZ9iu%2Fi4Qhg6XWjFNNkfk0u0SlZru%2BXWgM%2Fw76MrFiCvq5i4W2UehO8TxzLGBzSPP2%2FEuxAq2ce4MjH%2B02ko2cYAO0kbe2G3iTLCuwApPKwXtY3bnWY2IcIbqdx40Mm%2FQvueEsDdflWe5Z11e%2FbYCTVq9JMPv8yMMGOqUBI3PYm7avX6h5yrYGWZSbPG%2Bg%2FvG4Sf0cGwHeC%2FxD3x5no68hRhfM1J%2FrOWAMAznYrzgUe14ZxMg2FVw50p98X8QhO%2Fi9a40Sj2yy6ZEckCjpZDtDJN82D2j973aFYkIG9sTee1DQKTjAKhEcuhAvYVxGRqaev4b3M6%2BTUck8xU9LO9YxmhIrlyYlrFKLB90K6inoztlFc75wZnTtj2piMXmjxrfE&X-Amz-Signature=dbee1b2985aec21ccc29d8d61cfae16a75fe92528e59d10f158f559db99a0354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
