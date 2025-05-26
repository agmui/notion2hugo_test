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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKEVCJO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcxfPRB%2FChcxptW7ZNT90NYNMZ1ELYw6xWju72a%2Bbi7AiEA07mI2pjo5Sa0sDglEZrP05MUajSN7NNMfgD14BYdj%2Fsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGTc6ic7S6Ce9WBrtSrcA5vXMplzxiKXZ%2FqQdRY21%2Fc5DY6Dhinfrbaz6tVO7mfJztom7TNcQm%2Fx0j3E40XA43RdtLMNV4mSv2O0OFm3F4YQ%2BZUtYzJMQFlYm%2Bf1L3vcOY8tk13UW71B0woWXGYkmBHtZKp%2BaWpd0kQX0Vt8tttf0P3X3dWIIT%2FUBZUmmGopmxXXmSXkejbWYyV21K3kDbs4ZcnDCZ5f3rTvt%2FlmHXLxo022Pau0oxj9m75fqLqrIQaUgs83wXFJ%2By2gIOKcdmpRS%2FRm2KYlYFFBE%2BGmU7Sdj2gwuSfZe98%2BvG1RWyoqNriJNSlsZ7YPuw9rqrmfz0wfAfGuFQ0HgObbVvNt%2BMIgSs5ynZft8%2F0GuiUfYH5zb9ex2LWc%2FS8JIg2tlOKUFtfjY8Gw%2Fa4hznTBPyWp7gX%2Fj%2Btu45A0%2FLyaaYPsQk1o0qJ8Pkh0sSDRgDUleNu3bHL3SE%2F3rZdT04jSXbZhIpdtr6K3iuCiqei52jxFo1GfXXDMo9L6WwnyXveQY0sCDvqOisKL5cGjJcqR1s7rhNQR4mL%2F83nj8q%2Bw0JwkOaTWer921x1wS7VBxqNZOYfT4kbis8q3A3cEoAPOkUh48Ot7dd1FR9ylzGUxeIsP0s9etkHMXOpTw7C5ffy4MJ2T0sEGOqUBENVw%2Fm0Nwmo8eAnBkLXRJRPnPMHIf2AtoN%2ByiXT39Yg11EsD6e2X9wlkI3Hk0KjC%2Fc1BviNKefUiimf5gQKsWVrS054zS2gNPoJ4SSjipGOGDcB6QHEdfRu0neSW8GLo1EYadJOVUsBphAVKd622vocp8U59UuRqA14a4YYwHZy8GctjpbckPCjql3q5JtF0Z7U2oJyCFEcdxOzNfKM%2F9oQXkKTf&X-Amz-Signature=70ff1b0e00db6f15e209d078a91d2aae8b030458e24026f3709187a27f7f26d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKEVCJO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcxfPRB%2FChcxptW7ZNT90NYNMZ1ELYw6xWju72a%2Bbi7AiEA07mI2pjo5Sa0sDglEZrP05MUajSN7NNMfgD14BYdj%2Fsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGTc6ic7S6Ce9WBrtSrcA5vXMplzxiKXZ%2FqQdRY21%2Fc5DY6Dhinfrbaz6tVO7mfJztom7TNcQm%2Fx0j3E40XA43RdtLMNV4mSv2O0OFm3F4YQ%2BZUtYzJMQFlYm%2Bf1L3vcOY8tk13UW71B0woWXGYkmBHtZKp%2BaWpd0kQX0Vt8tttf0P3X3dWIIT%2FUBZUmmGopmxXXmSXkejbWYyV21K3kDbs4ZcnDCZ5f3rTvt%2FlmHXLxo022Pau0oxj9m75fqLqrIQaUgs83wXFJ%2By2gIOKcdmpRS%2FRm2KYlYFFBE%2BGmU7Sdj2gwuSfZe98%2BvG1RWyoqNriJNSlsZ7YPuw9rqrmfz0wfAfGuFQ0HgObbVvNt%2BMIgSs5ynZft8%2F0GuiUfYH5zb9ex2LWc%2FS8JIg2tlOKUFtfjY8Gw%2Fa4hznTBPyWp7gX%2Fj%2Btu45A0%2FLyaaYPsQk1o0qJ8Pkh0sSDRgDUleNu3bHL3SE%2F3rZdT04jSXbZhIpdtr6K3iuCiqei52jxFo1GfXXDMo9L6WwnyXveQY0sCDvqOisKL5cGjJcqR1s7rhNQR4mL%2F83nj8q%2Bw0JwkOaTWer921x1wS7VBxqNZOYfT4kbis8q3A3cEoAPOkUh48Ot7dd1FR9ylzGUxeIsP0s9etkHMXOpTw7C5ffy4MJ2T0sEGOqUBENVw%2Fm0Nwmo8eAnBkLXRJRPnPMHIf2AtoN%2ByiXT39Yg11EsD6e2X9wlkI3Hk0KjC%2Fc1BviNKefUiimf5gQKsWVrS054zS2gNPoJ4SSjipGOGDcB6QHEdfRu0neSW8GLo1EYadJOVUsBphAVKd622vocp8U59UuRqA14a4YYwHZy8GctjpbckPCjql3q5JtF0Z7U2oJyCFEcdxOzNfKM%2F9oQXkKTf&X-Amz-Signature=0d6d39601836c1704735c92b9d633cea55769f0ecb235cc040cb71765742f8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
