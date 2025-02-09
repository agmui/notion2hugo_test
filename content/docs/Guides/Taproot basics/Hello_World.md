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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWGGJ7B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLhF49a%2BAw0TvPwWg%2BhlJMH%2FTSGwbnSZZMNXR3KnyCwwIgRFVqLTnO%2B29s04T1%2BzsTQz39Yb687jSUA%2BCQniYSU4kqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPZ6szZbJksTVnTCyrcA0K%2BzA61kouDlAcDbXajOqYyRWqreNf7Rf33cy%2F1hcojaBv936JVdaRSHA4qLPGB2anJDDnMzyeSEjhmkLYvqhJxW1AojqwBMZEvWE3AZw%2B79BDGu36KKV0ESHYovwXp38Byvlm3crD2VMxqXlFxlfFoBJMG3XRx4g%2B65bOUl3b3VPVKqoKqhRu7rJ9FWFGQyj9VGlVwMf56ouIbAushIVkdtqqwGvvRZnXSqNa1U4gcVQS%2FLU6Bho75c0sSZ7BazZZsJAM%2FbOYtC8u3wvhACC7wrTKtxr74Ht%2FUz%2BwVEHxcTgkgicKo7tSflHhdQuyFpEq2wdHBnUvA7SRbgai%2FU0zwSggjnOC5GfBfhqy4ADWg8ZjPXwCyBD4%2BRltN5Op%2FiqjujiB2Tv82bS8Z5OLmrWWiWBIeN%2FGx6q5UyVgKePyCPvh%2BpWHr0b0DMm3tCHYsEjXoyDdEpItYGEjVLMbTH7rhCSh%2BT9PbQgOBP6nEBpkasRxw6Pb%2BrqA6bEAx7Bx9CfRfwaEf5QPIlOTvp%2BlCykIrej%2BkJF0kt1EMH52da41Sgz7DSqjWLSF4%2Btt1f%2B4BtRrlbyF2I7IxoOK7m5kGNpSBxoXT4Y%2FsBcxZnB8%2BdzmCU4mDr%2F9Dd%2Fu%2Fye3iMKT%2Bor0GOqUBGDJ8Z2gi%2F7IIKa2QFAXd1nWp3oZBCSnsB8Xas2UzBh79kFaLXekq8kpcFfdQ6DRVygT%2BFYQC%2F8bgIJZbig%2Bg07GPG8LB4eymE%2Bj5M9K8WHsx0CvJlgmV6dbcbiFm1kKWTgdTl793z%2BYdK7us2prO5MddtU1FNFDVbB5h2gHSmX4Xs1v%2B4CqlexpGXNbG8bensFKOUV4xYIenHSVdIRpNb0xrTLqz&X-Amz-Signature=2a5661c3eb7dc179683e9cb950d500bd4574170e7a29c87856a187115addcf4a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWGGJ7B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLhF49a%2BAw0TvPwWg%2BhlJMH%2FTSGwbnSZZMNXR3KnyCwwIgRFVqLTnO%2B29s04T1%2BzsTQz39Yb687jSUA%2BCQniYSU4kqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPZ6szZbJksTVnTCyrcA0K%2BzA61kouDlAcDbXajOqYyRWqreNf7Rf33cy%2F1hcojaBv936JVdaRSHA4qLPGB2anJDDnMzyeSEjhmkLYvqhJxW1AojqwBMZEvWE3AZw%2B79BDGu36KKV0ESHYovwXp38Byvlm3crD2VMxqXlFxlfFoBJMG3XRx4g%2B65bOUl3b3VPVKqoKqhRu7rJ9FWFGQyj9VGlVwMf56ouIbAushIVkdtqqwGvvRZnXSqNa1U4gcVQS%2FLU6Bho75c0sSZ7BazZZsJAM%2FbOYtC8u3wvhACC7wrTKtxr74Ht%2FUz%2BwVEHxcTgkgicKo7tSflHhdQuyFpEq2wdHBnUvA7SRbgai%2FU0zwSggjnOC5GfBfhqy4ADWg8ZjPXwCyBD4%2BRltN5Op%2FiqjujiB2Tv82bS8Z5OLmrWWiWBIeN%2FGx6q5UyVgKePyCPvh%2BpWHr0b0DMm3tCHYsEjXoyDdEpItYGEjVLMbTH7rhCSh%2BT9PbQgOBP6nEBpkasRxw6Pb%2BrqA6bEAx7Bx9CfRfwaEf5QPIlOTvp%2BlCykIrej%2BkJF0kt1EMH52da41Sgz7DSqjWLSF4%2Btt1f%2B4BtRrlbyF2I7IxoOK7m5kGNpSBxoXT4Y%2FsBcxZnB8%2BdzmCU4mDr%2F9Dd%2Fu%2Fye3iMKT%2Bor0GOqUBGDJ8Z2gi%2F7IIKa2QFAXd1nWp3oZBCSnsB8Xas2UzBh79kFaLXekq8kpcFfdQ6DRVygT%2BFYQC%2F8bgIJZbig%2Bg07GPG8LB4eymE%2Bj5M9K8WHsx0CvJlgmV6dbcbiFm1kKWTgdTl793z%2BYdK7us2prO5MddtU1FNFDVbB5h2gHSmX4Xs1v%2B4CqlexpGXNbG8bensFKOUV4xYIenHSVdIRpNb0xrTLqz&X-Amz-Signature=2f006b378a6fc4b8b1df1d8c6cd1b08e891442dbe856458deec0a7cd7e4b6811&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
