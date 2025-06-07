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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653W7VLBK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyBByHpJUS6eGofLopc2VuREqlsDfDOT2uQ32JhnkHSAiEA5HWz%2FFODOdd8%2FlrBmFBsBaeZ6ndFhyM7efszqaLLDj4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAjF8TMnNPTecHgZASrcA7HdIfwY7RqXqbm8mFlJZn8FoEsmlhfXc65y23wgu1mtnnm9iFBzo1O2409QPkAMVkmeIOdqVYTMwvH813ibRdYnaS%2Fv2mXirM6Wr8bFwBiqNtYFLDTu3ZbxDxCbYb8ykZrQOar7iY8PpRNUSBC8KX09qGd13%2BDd5NYLH4qE4gjF6AkeXQUXkl0OJjwiNqbYT2%2FKuhSM3VG%2Fto5vV57z4uHaG5Wuf4AAioL%2BXuXN07ton9LYjNQ5cdMZTjulC16Iwiqflur%2BdcUiR7sJArfuDVJkn7ytvZLMuSwcnacGajRcDe6GmEDM504UtmDIVKNQGyy4cVl2SSm%2BHa9enXAPET967KjYKE1%2BIqu%2Fh6HgGTkjZ4TvYJh7gN6pOcOPkNsv%2FKefgu1s7MjEzerTg%2BgwRf%2BW9r5ACrjV6iniwdx3cOEyAdPMxrNgXWVlCx%2B5z5d4%2B4hASkoNr3jKkf5pQLFfVEasriC%2FwBPjiAa%2FuN1kEtPBiPe6PNw5v4jxWo1gb43A%2Fb5VgTG4QWBACDCh7BVPAglnX5E5tEwUUyu252y%2FcmWRPrpYZoQXnKFusNSE99%2F%2FqDv%2FeyEd%2FhrP3iS%2B28jl1o%2FTY93iFAUcRBTT3cRN8vYT8PCiZ4VOLKe%2FdGJIMPiIjsIGOqUBdwJp8teEEtAeg%2BdwATknUY6VkVK28kgIYyW3GzeAVYYNfYBUzx%2BYintUW%2B9A5l%2Bkz6RjP%2BLohkagQIIbmK0wg8C6i%2BjjH6yXqDkyS%2Fsr9%2FxrCY%2FTjlEicBPgu%2BHDDzfVTDSdLyWLmWRq3eco2ftBjYHflzssRVw4zgjyEOqPF520Qqcx7jnZpNVxI%2Bj0WRM3K7Mnbv%2BYNLiyir%2BNfovkgkulMGqw&X-Amz-Signature=833df25590cf3c1239199c60bcdbbf8789eb4277da832953dc8442655a1680c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653W7VLBK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyBByHpJUS6eGofLopc2VuREqlsDfDOT2uQ32JhnkHSAiEA5HWz%2FFODOdd8%2FlrBmFBsBaeZ6ndFhyM7efszqaLLDj4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAjF8TMnNPTecHgZASrcA7HdIfwY7RqXqbm8mFlJZn8FoEsmlhfXc65y23wgu1mtnnm9iFBzo1O2409QPkAMVkmeIOdqVYTMwvH813ibRdYnaS%2Fv2mXirM6Wr8bFwBiqNtYFLDTu3ZbxDxCbYb8ykZrQOar7iY8PpRNUSBC8KX09qGd13%2BDd5NYLH4qE4gjF6AkeXQUXkl0OJjwiNqbYT2%2FKuhSM3VG%2Fto5vV57z4uHaG5Wuf4AAioL%2BXuXN07ton9LYjNQ5cdMZTjulC16Iwiqflur%2BdcUiR7sJArfuDVJkn7ytvZLMuSwcnacGajRcDe6GmEDM504UtmDIVKNQGyy4cVl2SSm%2BHa9enXAPET967KjYKE1%2BIqu%2Fh6HgGTkjZ4TvYJh7gN6pOcOPkNsv%2FKefgu1s7MjEzerTg%2BgwRf%2BW9r5ACrjV6iniwdx3cOEyAdPMxrNgXWVlCx%2B5z5d4%2B4hASkoNr3jKkf5pQLFfVEasriC%2FwBPjiAa%2FuN1kEtPBiPe6PNw5v4jxWo1gb43A%2Fb5VgTG4QWBACDCh7BVPAglnX5E5tEwUUyu252y%2FcmWRPrpYZoQXnKFusNSE99%2F%2FqDv%2FeyEd%2FhrP3iS%2B28jl1o%2FTY93iFAUcRBTT3cRN8vYT8PCiZ4VOLKe%2FdGJIMPiIjsIGOqUBdwJp8teEEtAeg%2BdwATknUY6VkVK28kgIYyW3GzeAVYYNfYBUzx%2BYintUW%2B9A5l%2Bkz6RjP%2BLohkagQIIbmK0wg8C6i%2BjjH6yXqDkyS%2Fsr9%2FxrCY%2FTjlEicBPgu%2BHDDzfVTDSdLyWLmWRq3eco2ftBjYHflzssRVw4zgjyEOqPF520Qqcx7jnZpNVxI%2Bj0WRM3K7Mnbv%2BYNLiyir%2BNfovkgkulMGqw&X-Amz-Signature=d36be14c9cb6ac40ae5fab5972e5539f595c4b4d0779f19070dbe47ddd0a7e70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
