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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFXI3Z2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDT6Jl2frQfNYvCuGtU88k2RlUxxoPjYcVzyfaaBtVF9AiBvkJoKMeLUtQsY0Hz4wvnb2ITvjHtit0GSb5cXswbxLyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMsSgtwCYFe9yjROYeKtwDpuq2pIAmKs6K3GxUUSLd36n5AWk7MYPm9WU15%2BS31QJAehhlOVHAY69rsw9kMx67I07pKfRFO7VjTGwp%2By%2Fi9wjNDVN7IXHEkXxoBlVgC%2FNP%2FJjLckcOU8Tg0rB89A04w7j8oEWXwUs8PegjBzCGUcxpgM2WfOPzKFa2L8zUwMXk87aUp8R8yp06wBXItR%2B%2BoqTt9VA9NvJS05lNB8uG8X7l0ouX8eaaG%2Bq0pZVIOeUuC%2FOg%2B3JT0T5LRHqZQafr4sosgXxAc%2FBEbn%2BVMcTwGoHHc%2BO%2FICj6vW7uGUMwDOGzAnnusEhR%2B05UffNYEcg4yGeV9I%2Bs6gPqIgSYaJ%2BYG4fycdbUW6Ih3zmnPPdZAV3tjFpHTwUs%2Fm3h0R5w90tGWR4bLPjZ%2B4D%2F8F4zH0mn%2BFDTuDZ%2FiVTrhGfgnIzGF3FZlXmSI09ZDrCX1F2SQN%2Fz1Fq1nWCl646kHLBd8Oaq%2FFd84tcGCoD%2F7%2BwTCV7E5cmaGA%2FF9EPZ1Qakh%2BRhMws0bFH5sR77MrUB%2FcNCHZhR3BQG8txwDI4McFFTo3NB66RP9q%2BHQ3GVOkh%2BmfZ2LXeFivfpXmE6cyEA3s64IYlWG9%2FcQzAg%2Bh2T%2FL7onOKHaU5NCI7mYTthXV6pT%2Fow%2Fd2tvgY6pgHQzgbluYnamfAYIU7YUcTk5vpQHNNNkBbrW%2Fv7ykAi3LWP5any%2B6coF%2BmPCzKTLJMGyXyfZS0K2i9op%2FN5GhbRmfBB79RJHXzFQGKELBEQFxAsDmGWian0ttpnsg6WYU5qdUfER4BYXhizfcqugmlyg9zrqWsKCNoocwnMsD%2B7XyxBXZxbuMAmivVUZ9c0E3L2Vc3LeOmwbv1ZNhFPFLxXSMQvy%2Bwh&X-Amz-Signature=92d30a7e7e5c75e935bfc2423be46eb4de88cad48bdc5d112881859cc744d06b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFXI3Z2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDT6Jl2frQfNYvCuGtU88k2RlUxxoPjYcVzyfaaBtVF9AiBvkJoKMeLUtQsY0Hz4wvnb2ITvjHtit0GSb5cXswbxLyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMsSgtwCYFe9yjROYeKtwDpuq2pIAmKs6K3GxUUSLd36n5AWk7MYPm9WU15%2BS31QJAehhlOVHAY69rsw9kMx67I07pKfRFO7VjTGwp%2By%2Fi9wjNDVN7IXHEkXxoBlVgC%2FNP%2FJjLckcOU8Tg0rB89A04w7j8oEWXwUs8PegjBzCGUcxpgM2WfOPzKFa2L8zUwMXk87aUp8R8yp06wBXItR%2B%2BoqTt9VA9NvJS05lNB8uG8X7l0ouX8eaaG%2Bq0pZVIOeUuC%2FOg%2B3JT0T5LRHqZQafr4sosgXxAc%2FBEbn%2BVMcTwGoHHc%2BO%2FICj6vW7uGUMwDOGzAnnusEhR%2B05UffNYEcg4yGeV9I%2Bs6gPqIgSYaJ%2BYG4fycdbUW6Ih3zmnPPdZAV3tjFpHTwUs%2Fm3h0R5w90tGWR4bLPjZ%2B4D%2F8F4zH0mn%2BFDTuDZ%2FiVTrhGfgnIzGF3FZlXmSI09ZDrCX1F2SQN%2Fz1Fq1nWCl646kHLBd8Oaq%2FFd84tcGCoD%2F7%2BwTCV7E5cmaGA%2FF9EPZ1Qakh%2BRhMws0bFH5sR77MrUB%2FcNCHZhR3BQG8txwDI4McFFTo3NB66RP9q%2BHQ3GVOkh%2BmfZ2LXeFivfpXmE6cyEA3s64IYlWG9%2FcQzAg%2Bh2T%2FL7onOKHaU5NCI7mYTthXV6pT%2Fow%2Fd2tvgY6pgHQzgbluYnamfAYIU7YUcTk5vpQHNNNkBbrW%2Fv7ykAi3LWP5any%2B6coF%2BmPCzKTLJMGyXyfZS0K2i9op%2FN5GhbRmfBB79RJHXzFQGKELBEQFxAsDmGWian0ttpnsg6WYU5qdUfER4BYXhizfcqugmlyg9zrqWsKCNoocwnMsD%2B7XyxBXZxbuMAmivVUZ9c0E3L2Vc3LeOmwbv1ZNhFPFLxXSMQvy%2Bwh&X-Amz-Signature=b25b0cd209b150ec27bcab54e3ac7dfe1b73d7f2e0f8464b7f3dffc4291fe774&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
