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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKOSGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD1rKbcFfA%2BrioTdLhmHGnkbQ8KLx6OA7EqjztnddzdAiEAhvS3i2yWKkebhmPXDEIq15GDQpQK0Va1ZeKKBvU30hcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdqDHJPBq4TmX3uLSrcA9%2By8J6iid3CUfvS3Ytl3NmB5dq3OP43NgnKC4p5%2FMTBZWHOzBz%2BkBYfqOfuxM%2FxVMGphj9yfAynk6UY0yW%2BanJh51sR915Yxswz26dGMg%2FCiF3FtC07MxyetueyTl1tNkQIcaj1IvqYPo%2BTQ6l2S%2FX6CASE00ENXxoeohpwGKpG%2FNj8YorhPBJ6iPlXhlpJ0Wg7GfvQ3T8LaLQ5Hjx57fm3fkakxZSQFyos1XQC34biDLAlBzHHNwrO9wg6n0mm5CpX8GX%2Bu4PgwtWdZxma8sNCB7Hs78dciUSZcaRWZIYCpmaMPJFRpmkpaBJYLSJxLLDbLnZGa%2F%2BI264wxz%2FW8zsfC3cdEXAW44HmXdfQTM21EG5N7y00NNFXzi7AnU1WTaNAwjjW8WHz9%2FeSnMvkrCRj69Hq7GwAIXU8IccXxfcBgwNTrdpqqL%2B0djwHILSIdB7nq42BUwdBjUV35TDzACJ5KtMAedZbUneS0E4iTzzz1dAdNZMpny3Wvk1V8hqKF4vKvDz5sPTAKTJDGVhPP%2B1uT9vk9WPchpDukb%2BqNnqlhHA87yYWQ%2BHczKGa3Lgtv%2Bzy3%2Ft6xRZCxSCaGIWhJcG%2BiOKzLIRnhZrFahOvnn%2BzRi8sH2LirUUyvPFlMITlosIGOqUBtwnsVenT%2B6YYFirNLE5fvkdRZ0RoTuTpMH%2BNg27wYVXN7La3zcPlUpDXp1ZX2JNUYcKY0uYd%2FEi9ziJa2%2Fuqmmr8wKiTPUZvZagNaqsK1UxxyNsZPd8VLcJtOnqzfrOA6rhr38GG1PrxfaMFdAkv%2F5kXvue64ofpjqWcam8bt9KTkwCuBbnkcAv51rV%2BJ5Jb5FcHJGfW5hl2cM%2FKpeEtvvIFVMof&X-Amz-Signature=625a7705824fdafa0897453cf01ce8c8fdce5f0ff0b2fbee20ce7d0e22f8d893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKOSGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD1rKbcFfA%2BrioTdLhmHGnkbQ8KLx6OA7EqjztnddzdAiEAhvS3i2yWKkebhmPXDEIq15GDQpQK0Va1ZeKKBvU30hcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdqDHJPBq4TmX3uLSrcA9%2By8J6iid3CUfvS3Ytl3NmB5dq3OP43NgnKC4p5%2FMTBZWHOzBz%2BkBYfqOfuxM%2FxVMGphj9yfAynk6UY0yW%2BanJh51sR915Yxswz26dGMg%2FCiF3FtC07MxyetueyTl1tNkQIcaj1IvqYPo%2BTQ6l2S%2FX6CASE00ENXxoeohpwGKpG%2FNj8YorhPBJ6iPlXhlpJ0Wg7GfvQ3T8LaLQ5Hjx57fm3fkakxZSQFyos1XQC34biDLAlBzHHNwrO9wg6n0mm5CpX8GX%2Bu4PgwtWdZxma8sNCB7Hs78dciUSZcaRWZIYCpmaMPJFRpmkpaBJYLSJxLLDbLnZGa%2F%2BI264wxz%2FW8zsfC3cdEXAW44HmXdfQTM21EG5N7y00NNFXzi7AnU1WTaNAwjjW8WHz9%2FeSnMvkrCRj69Hq7GwAIXU8IccXxfcBgwNTrdpqqL%2B0djwHILSIdB7nq42BUwdBjUV35TDzACJ5KtMAedZbUneS0E4iTzzz1dAdNZMpny3Wvk1V8hqKF4vKvDz5sPTAKTJDGVhPP%2B1uT9vk9WPchpDukb%2BqNnqlhHA87yYWQ%2BHczKGa3Lgtv%2Bzy3%2Ft6xRZCxSCaGIWhJcG%2BiOKzLIRnhZrFahOvnn%2BzRi8sH2LirUUyvPFlMITlosIGOqUBtwnsVenT%2B6YYFirNLE5fvkdRZ0RoTuTpMH%2BNg27wYVXN7La3zcPlUpDXp1ZX2JNUYcKY0uYd%2FEi9ziJa2%2Fuqmmr8wKiTPUZvZagNaqsK1UxxyNsZPd8VLcJtOnqzfrOA6rhr38GG1PrxfaMFdAkv%2F5kXvue64ofpjqWcam8bt9KTkwCuBbnkcAv51rV%2BJ5Jb5FcHJGfW5hl2cM%2FKpeEtvvIFVMof&X-Amz-Signature=c8fba321b131e5bd2d036631aa5d5a0f60bee937c28671afc10046fd5219a318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
