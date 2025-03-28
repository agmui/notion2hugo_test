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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44X3IYS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQm%2FmG4BHgyEGEjjDyriczEWz3zpfFoLYTQtFm0NNRgIhAMSdWhguXVRaP0jR44YkvSrANjqsJr53l8CNa0M4a0M0Kv8DCFsQABoMNjM3NDIzMTgzODA1Igy5pblurS7SwrqtQtAq3AOAVx8V2hmXWSsQfpgOLY7pS6crCgc9gi7OdvBJFBB1nmXaiXVAVF9p1mLqxFw51PSL4ZCMAf3BiTVzT%2B619Sgfiwij%2B1Ruz0AOHYry2D%2Bd820d8ydSj8GwvLOa0HDl52xA7v919gPH9VrsGVKWNFX%2BTt7eJTpoaZBhuz7exT%2FYyixh3OEuaTW2egRXaOKtTdp5sPrT1r0uxu70xwQroJQDTyoK96AyuUbdJOylKPGp8Hdhu0%2FVzL0NXUj%2FZUpsbwUCGzo0%2FUiHP24ytch%2Fa4BDBYaZI2tNCHv98dO%2FpiexDp5eE1i7ntLb1t8pUS1i9jpo6Fx6eAtDu8Z3RIeJVrWrvERzMBRmXEiTkwLJWMuob1s%2BN3aOBxJM%2BXz7SINwLAqrHrTzCEDFpavQxjcvr1eGfZ2DvHFkFNOL05wSm11zIYypNt3kQTaLQ%2BpxbWvkPTNuAlnMdIy1hjpeBt80Cvh7ROghOpSA%2Bg%2BVCsZsjfuvSRJppjSU%2F3qOz89xulkVbZ8AB11XYJr1ca7GYxeGqnLiXBc6ZuYRiKD35ereFM5zJhjJumNkkAV866xvweb0S%2FDqdu8FhUKhpT6wxk6iygaU658VnHhA%2FuQKc%2FK%2FUGp6yIz4KryxIMRsf3LD3TDb25m%2FBjqkATExssBmVL9P0AvYYmG6E%2Bmu6bKYEmQMaXJrrpMa0YY0E2NdVrPQwzioe9stn47Zq%2FzZC0dbJcNoVsZUKM6pOd4k%2Be4GIjPHxOpUt1lWPdQpWsrkvFl63Hh3xnDQG39QSFwzRFpY3f0uk2VVSODkZhMkvgtkidMdPQAlhdhLEdnATYVtJP52dQN1KoQ7Z6FJcfUO86PuMeEVLMNK5W%2ByCVBqwLvi&X-Amz-Signature=1c2e646dca3d315834524f0474d3d831d3cd6ddf0ad0a3be6b430fe49ce703f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44X3IYS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQm%2FmG4BHgyEGEjjDyriczEWz3zpfFoLYTQtFm0NNRgIhAMSdWhguXVRaP0jR44YkvSrANjqsJr53l8CNa0M4a0M0Kv8DCFsQABoMNjM3NDIzMTgzODA1Igy5pblurS7SwrqtQtAq3AOAVx8V2hmXWSsQfpgOLY7pS6crCgc9gi7OdvBJFBB1nmXaiXVAVF9p1mLqxFw51PSL4ZCMAf3BiTVzT%2B619Sgfiwij%2B1Ruz0AOHYry2D%2Bd820d8ydSj8GwvLOa0HDl52xA7v919gPH9VrsGVKWNFX%2BTt7eJTpoaZBhuz7exT%2FYyixh3OEuaTW2egRXaOKtTdp5sPrT1r0uxu70xwQroJQDTyoK96AyuUbdJOylKPGp8Hdhu0%2FVzL0NXUj%2FZUpsbwUCGzo0%2FUiHP24ytch%2Fa4BDBYaZI2tNCHv98dO%2FpiexDp5eE1i7ntLb1t8pUS1i9jpo6Fx6eAtDu8Z3RIeJVrWrvERzMBRmXEiTkwLJWMuob1s%2BN3aOBxJM%2BXz7SINwLAqrHrTzCEDFpavQxjcvr1eGfZ2DvHFkFNOL05wSm11zIYypNt3kQTaLQ%2BpxbWvkPTNuAlnMdIy1hjpeBt80Cvh7ROghOpSA%2Bg%2BVCsZsjfuvSRJppjSU%2F3qOz89xulkVbZ8AB11XYJr1ca7GYxeGqnLiXBc6ZuYRiKD35ereFM5zJhjJumNkkAV866xvweb0S%2FDqdu8FhUKhpT6wxk6iygaU658VnHhA%2FuQKc%2FK%2FUGp6yIz4KryxIMRsf3LD3TDb25m%2FBjqkATExssBmVL9P0AvYYmG6E%2Bmu6bKYEmQMaXJrrpMa0YY0E2NdVrPQwzioe9stn47Zq%2FzZC0dbJcNoVsZUKM6pOd4k%2Be4GIjPHxOpUt1lWPdQpWsrkvFl63Hh3xnDQG39QSFwzRFpY3f0uk2VVSODkZhMkvgtkidMdPQAlhdhLEdnATYVtJP52dQN1KoQ7Z6FJcfUO86PuMeEVLMNK5W%2ByCVBqwLvi&X-Amz-Signature=67e226cc425fcca2a13d63477dc3713399f14a1dc1083ddf95ea2e7adfe3bc03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
