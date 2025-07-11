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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6EN4KR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUVFsKXL6Mk9idgS%2Fg1HFovyPCThiolX8iHJO9IPW6wIhANqPrMvj6Tk1%2BjetUH9qyQ%2BxHFTSDrg3uTAYxj1DFUtHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwVYOcNTGgbiAiSwq3AMZXRhf0d4Tcq98zrryXaQaUl%2Bh7ERuVyixR6fK8%2F%2B5tqR03Xz1DB0NdQrecIVzxwioEctatUGzsMP%2BdUKGzcCOnvM6%2B6vHwISy7RypwxbT34KErGlDxqBB62Nx3di3juZ4xKTFl1kHN8WO6xIZ%2BnIzALgu2MH20kRj9F2FhkloCJ7ELH29%2Fdj9L977jzma6G4C1hfmkPtcf3uy5Z5ofHv2vfWYQbgxEoQ6STVXrIlHbFXtu%2B40jF2TQSYm1d%2BS%2F0pcIEusbhIlmlPRhSrqlw09Yr1uTnpLLcn9%2BdHyEYcTT%2FbCqcwvZtl0S2pnhY9idHDe%2FcQeGkvA8VlwIGgUoE5d7snFBBkgdbrM9%2FeDZglBf03FBBCx%2F%2FZegLNwZ49VBglSCmGDTT7t231Sv2D9rwQ7VOH52FKEdM%2FDhtRj9cJBCWJ3WUKubtAo4jaoFk7gZ2KDdw%2FlcIfoAZ8wxz6YstiLr255GA%2FiWegAi%2FNFWX3%2B7yffXqNUrXCl4n7AHtK6GjjatVE01ZhJI%2ByHLqEUq3v8buqfhKXD7BqIW45JqN4KARj3OHCQ5Vv7Jmh3EYEJySep%2FQNRtMoRetYUfI%2FVJFj89LlpsG2Vd4Kh%2FRbBsy%2Bmlohq6fuwN8tampmuFTC%2F1MPDBjqkAXqWqiER%2B0Cm3G3PANEdAR1tDOEDgWycZT%2Fny6OCNfiZhyJOgtx4HHHUg5FIoyGaP7U6W68MkhWG%2F9mXSvb%2FBgVfbNa2VEobou%2BW3WHOSSm8nmH766q7b2DYUmsmyrW4Vy2Hh%2B%2B42VNFPaeHYFmkHWjkwvtZ48zKzFwQKOn9PC4anLXIdQ72db9842ae12u8k10pgIDobKNyXJ1ryKLDuyV82kVR&X-Amz-Signature=9f672dde7252436a3b23b7bde3908c9147634347e228ec679ab21839facd108f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6EN4KR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUVFsKXL6Mk9idgS%2Fg1HFovyPCThiolX8iHJO9IPW6wIhANqPrMvj6Tk1%2BjetUH9qyQ%2BxHFTSDrg3uTAYxj1DFUtHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwVYOcNTGgbiAiSwq3AMZXRhf0d4Tcq98zrryXaQaUl%2Bh7ERuVyixR6fK8%2F%2B5tqR03Xz1DB0NdQrecIVzxwioEctatUGzsMP%2BdUKGzcCOnvM6%2B6vHwISy7RypwxbT34KErGlDxqBB62Nx3di3juZ4xKTFl1kHN8WO6xIZ%2BnIzALgu2MH20kRj9F2FhkloCJ7ELH29%2Fdj9L977jzma6G4C1hfmkPtcf3uy5Z5ofHv2vfWYQbgxEoQ6STVXrIlHbFXtu%2B40jF2TQSYm1d%2BS%2F0pcIEusbhIlmlPRhSrqlw09Yr1uTnpLLcn9%2BdHyEYcTT%2FbCqcwvZtl0S2pnhY9idHDe%2FcQeGkvA8VlwIGgUoE5d7snFBBkgdbrM9%2FeDZglBf03FBBCx%2F%2FZegLNwZ49VBglSCmGDTT7t231Sv2D9rwQ7VOH52FKEdM%2FDhtRj9cJBCWJ3WUKubtAo4jaoFk7gZ2KDdw%2FlcIfoAZ8wxz6YstiLr255GA%2FiWegAi%2FNFWX3%2B7yffXqNUrXCl4n7AHtK6GjjatVE01ZhJI%2ByHLqEUq3v8buqfhKXD7BqIW45JqN4KARj3OHCQ5Vv7Jmh3EYEJySep%2FQNRtMoRetYUfI%2FVJFj89LlpsG2Vd4Kh%2FRbBsy%2Bmlohq6fuwN8tampmuFTC%2F1MPDBjqkAXqWqiER%2B0Cm3G3PANEdAR1tDOEDgWycZT%2Fny6OCNfiZhyJOgtx4HHHUg5FIoyGaP7U6W68MkhWG%2F9mXSvb%2FBgVfbNa2VEobou%2BW3WHOSSm8nmH766q7b2DYUmsmyrW4Vy2Hh%2B%2B42VNFPaeHYFmkHWjkwvtZ48zKzFwQKOn9PC4anLXIdQ72db9842ae12u8k10pgIDobKNyXJ1ryKLDuyV82kVR&X-Amz-Signature=b3c455f5613009b4329d586cf9d2dcd2eb72a962fff72b9e19ac8b2813073055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
