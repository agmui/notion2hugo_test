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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE6OV4I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBxRSxEW%2FrGDBheMOzStAnU75kRC0wk8bry5ZrKW8mReAiEA5XceTtJIRj26%2BimqaFLGOIg%2F5svRvDxXJEIkyr9UX00q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF98Xbur90luZ3CP0SrcA%2B8gZ88lcijK37kdiFnbnCBD7quMyzPil1LZa9z6wEouMsXzM3vw5zs0asoJmWxaIBoEH4Bpp3fIr1P7RpA4nHTDd38Z2o6c4aPh5rwtHFKdUuRhLBtTZ17e0vgTEWFTfwBSsh3TzNUxBjnTf41tXIqrS8%2BlM3BEFcKvjp0ueRKmquNhkB4O%2B63qdJrGkB2PPOFaFxARGoKeSQaUNsguQJ1UTLcxFtcbHJWS4fsgfM%2Fxe5Mbs4T6Nvnv0Oqfn4VMy0SDRJVlBKeVai%2F4n215WHOtDCtQj%2FTxshde2N%2FJcWota2WPAolXTGo3odRwuUK829En080lSxhYYU8V2Ow0gpRz1S0PdlLcILZIxZBWeCU4xh7FxgOzLAfFoARVdZDMPXma3tELd163A%2FbkN%2Be6njQOuK2dev4aBWIb0L6Qc1C8NMRBwZz9XlCDRN2HMiMbuCkEA%2FRId5sv%2BQlYeFC74qGQXYssizJt7XqQmVcfA%2Boap2wwlXqgtgQfwTDkQFxbeSzubIFCy4sz1be6nbwgbIQdFC4SZKLgj4turMHwvxtbxje6YBZFboTK7Y6LxTB1YCVarxqnsXkt%2B6ErbEU91WMwBYTjPQ7uf18uvdkUk4akNUxKNzNY%2FF%2Fs1zCKMP36zcQGOqUBNNu4cBSDPnJpiHUp%2F9m4KMhoLuYMhVSSjw%2Bnvy0RtuWnObbgERHXyAdrFnpdr4R7JENuG8%2BCFhiYxYD%2BndpFPOr5VY5DZW3GTzTJM8Z2i8HDLPggEo6Opfr5GI0yIapN0NmknY8jYjEUC7%2B4yyxFoxLsoMdTxtBY5h3emLGUrXJdFvQw5miPm%2Fn8jH401IHXXAW%2BrWHkl%2BWAhdr7LjLqpfS7ndzF&X-Amz-Signature=dabe8c10a1fd9bcc242a42c49506cabac05ee1a090ceaf89ee8ee9d9e1376350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE6OV4I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBxRSxEW%2FrGDBheMOzStAnU75kRC0wk8bry5ZrKW8mReAiEA5XceTtJIRj26%2BimqaFLGOIg%2F5svRvDxXJEIkyr9UX00q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF98Xbur90luZ3CP0SrcA%2B8gZ88lcijK37kdiFnbnCBD7quMyzPil1LZa9z6wEouMsXzM3vw5zs0asoJmWxaIBoEH4Bpp3fIr1P7RpA4nHTDd38Z2o6c4aPh5rwtHFKdUuRhLBtTZ17e0vgTEWFTfwBSsh3TzNUxBjnTf41tXIqrS8%2BlM3BEFcKvjp0ueRKmquNhkB4O%2B63qdJrGkB2PPOFaFxARGoKeSQaUNsguQJ1UTLcxFtcbHJWS4fsgfM%2Fxe5Mbs4T6Nvnv0Oqfn4VMy0SDRJVlBKeVai%2F4n215WHOtDCtQj%2FTxshde2N%2FJcWota2WPAolXTGo3odRwuUK829En080lSxhYYU8V2Ow0gpRz1S0PdlLcILZIxZBWeCU4xh7FxgOzLAfFoARVdZDMPXma3tELd163A%2FbkN%2Be6njQOuK2dev4aBWIb0L6Qc1C8NMRBwZz9XlCDRN2HMiMbuCkEA%2FRId5sv%2BQlYeFC74qGQXYssizJt7XqQmVcfA%2Boap2wwlXqgtgQfwTDkQFxbeSzubIFCy4sz1be6nbwgbIQdFC4SZKLgj4turMHwvxtbxje6YBZFboTK7Y6LxTB1YCVarxqnsXkt%2B6ErbEU91WMwBYTjPQ7uf18uvdkUk4akNUxKNzNY%2FF%2Fs1zCKMP36zcQGOqUBNNu4cBSDPnJpiHUp%2F9m4KMhoLuYMhVSSjw%2Bnvy0RtuWnObbgERHXyAdrFnpdr4R7JENuG8%2BCFhiYxYD%2BndpFPOr5VY5DZW3GTzTJM8Z2i8HDLPggEo6Opfr5GI0yIapN0NmknY8jYjEUC7%2B4yyxFoxLsoMdTxtBY5h3emLGUrXJdFvQw5miPm%2Fn8jH401IHXXAW%2BrWHkl%2BWAhdr7LjLqpfS7ndzF&X-Amz-Signature=199b51112197cfc732fccbc24eeb46dd95f48c50c9dff2fc3a502fd5eade8ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
