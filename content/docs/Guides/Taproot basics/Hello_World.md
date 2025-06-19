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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFEHNH2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2F5xCOftWT1WHWQj8%2F5Ze9RMDY9pRdI3gzYNiJZ9atAiEAmVJ8TnLizcz6LqFhk63oANEYHtaTH2pSzZIzOGNscn8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcAPA50JdX7DYRt%2FCrcA2lAuiFHf7eRrKgQ6zX6p9QHp5%2FsQdl7X9aobNDN9aQpHI1zXymZsHNt5U1fmmRS1km6YOGjTSjEd6zLG5%2F7xsPWSZX4Xv7r6nV98mXUcX3fzI8XEbYb793976CAFazoaFUeN2T%2FI2IdhguI71rKfhXkoqYz0hLab7yJloMr7lLAKR%2FCeebD19zW2DE%2BBQsRAlL3HGmZ6twb8PDjC9Mt8RpXQ%2FLCP0PwMH%2FuwP5hdN4%2BneCRgMa9YqYHh%2FVdLVHMeyiqd%2Fq0n3j%2Fyv%2FLYOORqVc0EAT2ODfuif%2FH4R2nsATX2Vv7hJ0QDvwnREUd5k%2Fye%2FI23kxhXnYD9DUrEU6JF2Yc%2BHcKNxgk274G7qCFEjVOno4x0k7AhfH87TIv%2FyqAn6c5Wopm8IrkXDAhCKt%2F%2BV2g4xPwvRy%2BQ3qhKJX02plexPw3yHkSd5POVqPHNDqITMDwRdsHHdQQ5QFbxX4oVyiCyBqMz5KbIcnQ5w6jA8l0XwHZKgkIOgg6rfE53Ql7T82Pt2pjVOUZcdcVT9bz%2Bsll%2B9Ecryklo4yruNAjp%2BHRHPc23GUaeLZoKTI%2Bl4zcpDBDC2cAZyrOa9qkIlkOR%2Bqi6dnbkCtG4PvJhsSuIF1iOuRGAcj3LB36UmbXMKKEzsIGOqUBuIOAGelzMPYVBAV1n2zUKtbgvFQCgMPcEKOiMOr6INvFJ6K1Y2K1eFGwenrJcbVQ2SV0EljyO%2B%2Bruj3l1LoA2DPiNIpdhC3rG0gtLg16Sta8A6dgLz5j5sTOAzeeuHFlCX8LPMo315kZvWEQEux7TQTVISXKvEb0BMdm9JqYTlDoGDXSgY8uKquL8%2BsRUYnHCF6kYZ6NLlAJtpTCW%2BP02srVU3Dq&X-Amz-Signature=b61072ef90301d848fac8e9cc3d988418cf8f33d28a08969300a16b4b48c9d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFEHNH2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2F5xCOftWT1WHWQj8%2F5Ze9RMDY9pRdI3gzYNiJZ9atAiEAmVJ8TnLizcz6LqFhk63oANEYHtaTH2pSzZIzOGNscn8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcAPA50JdX7DYRt%2FCrcA2lAuiFHf7eRrKgQ6zX6p9QHp5%2FsQdl7X9aobNDN9aQpHI1zXymZsHNt5U1fmmRS1km6YOGjTSjEd6zLG5%2F7xsPWSZX4Xv7r6nV98mXUcX3fzI8XEbYb793976CAFazoaFUeN2T%2FI2IdhguI71rKfhXkoqYz0hLab7yJloMr7lLAKR%2FCeebD19zW2DE%2BBQsRAlL3HGmZ6twb8PDjC9Mt8RpXQ%2FLCP0PwMH%2FuwP5hdN4%2BneCRgMa9YqYHh%2FVdLVHMeyiqd%2Fq0n3j%2Fyv%2FLYOORqVc0EAT2ODfuif%2FH4R2nsATX2Vv7hJ0QDvwnREUd5k%2Fye%2FI23kxhXnYD9DUrEU6JF2Yc%2BHcKNxgk274G7qCFEjVOno4x0k7AhfH87TIv%2FyqAn6c5Wopm8IrkXDAhCKt%2F%2BV2g4xPwvRy%2BQ3qhKJX02plexPw3yHkSd5POVqPHNDqITMDwRdsHHdQQ5QFbxX4oVyiCyBqMz5KbIcnQ5w6jA8l0XwHZKgkIOgg6rfE53Ql7T82Pt2pjVOUZcdcVT9bz%2Bsll%2B9Ecryklo4yruNAjp%2BHRHPc23GUaeLZoKTI%2Bl4zcpDBDC2cAZyrOa9qkIlkOR%2Bqi6dnbkCtG4PvJhsSuIF1iOuRGAcj3LB36UmbXMKKEzsIGOqUBuIOAGelzMPYVBAV1n2zUKtbgvFQCgMPcEKOiMOr6INvFJ6K1Y2K1eFGwenrJcbVQ2SV0EljyO%2B%2Bruj3l1LoA2DPiNIpdhC3rG0gtLg16Sta8A6dgLz5j5sTOAzeeuHFlCX8LPMo315kZvWEQEux7TQTVISXKvEb0BMdm9JqYTlDoGDXSgY8uKquL8%2BsRUYnHCF6kYZ6NLlAJtpTCW%2BP02srVU3Dq&X-Amz-Signature=dc5123bcc2915638c8ecc46883599788bc3b06f1aa51bb518bec5e9c727409b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
