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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJDRNB5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FvlHPAshEM63UMrPxs7rxY1ysAoKt4WwToQi90Fif9wIgbSd1hRcN1%2B7QTgdszd8SVaIHgPSFvVYWqHs1Ql2E9uAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi9vCuq7e23ffHLRCrcA0KyFtprXjJema01lRU93I8vvfJ0bnRq89LZue7kLxi9o1ua1Qv%2F8RqCpy3GM7UDeTD7kBHHx9xk3JCQghkTdsMuwNJzwcKsQWNF%2BeSEiRt%2BWcKGOm73dgCrsaITAI7E3s2%2FECNFEzICgzKRPAgXSZ3G4ym0OiZgdAGe1c99LtLt1%2B0qFwG40yQpNTUjH5D8jfSV004L5vM0a2vxvB%2BKIpXZFmQMDbVQ%2BeOcTx1xBSFmCPXzmvDzXuAAanRZA0qR%2Fo%2BVioPLeAEtQPhasHXZrX%2FVePlYMfBXP8jtgkHX7DJbXOg%2BEyMw4hmCdnOpdmJwu4RjO7%2FsHsYZgbMN2HA%2FnPYkFafC8vLPva6o0jdAShz3XkCbgdIyzUWP7bnuiCM8gxgiIYJujqS7UdFaHq9I5%2BqTV4xZaiyZrGKUxAl3a%2FfJIJYSXintTb9YupIVlygbLoehgvbXtUvJS2hHkKZSgalmnibcnwCx4D31svfW5hz0X%2FHPTBqHT0gZ8bWNeS%2BNt3rbAyN0J0R3wEBMsPakYpqxuBzWDQs7iuuMaSvC6XOkigSVJUCFkHCnr2CwIv5T3dE46DP3lg9fYAvBPEqf5kzdUF5y%2BNCS%2FDCCLlcOqGj73prZlKyVStPiALHxMOjRwcAGOqUB2wdngzdCyRwtOxyiozsjdlT2NGphpanigj95IMnjDTwlxbJ98aswgBkuSLJrzsj1OVrwoTlr3%2F6ppYtcLMsa8EGFa5hg2UgAOlFK0kOkeeQ6sdIp3wuaOAJx05XhDfvny0VpE4O%2B4I67n%2FjerClJy%2BlFE8GbXAWrL%2F2yOF9aKrlKknuGtPToDGz%2FOzaZIukVhAMQjf8wGNC2%2FD1IMBpKVWwDzUB0&X-Amz-Signature=44d54789c5da76e95e46b39ee2a5b1153a2ee099c05bfde3007e4949d9f22053&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJDRNB5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FvlHPAshEM63UMrPxs7rxY1ysAoKt4WwToQi90Fif9wIgbSd1hRcN1%2B7QTgdszd8SVaIHgPSFvVYWqHs1Ql2E9uAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi9vCuq7e23ffHLRCrcA0KyFtprXjJema01lRU93I8vvfJ0bnRq89LZue7kLxi9o1ua1Qv%2F8RqCpy3GM7UDeTD7kBHHx9xk3JCQghkTdsMuwNJzwcKsQWNF%2BeSEiRt%2BWcKGOm73dgCrsaITAI7E3s2%2FECNFEzICgzKRPAgXSZ3G4ym0OiZgdAGe1c99LtLt1%2B0qFwG40yQpNTUjH5D8jfSV004L5vM0a2vxvB%2BKIpXZFmQMDbVQ%2BeOcTx1xBSFmCPXzmvDzXuAAanRZA0qR%2Fo%2BVioPLeAEtQPhasHXZrX%2FVePlYMfBXP8jtgkHX7DJbXOg%2BEyMw4hmCdnOpdmJwu4RjO7%2FsHsYZgbMN2HA%2FnPYkFafC8vLPva6o0jdAShz3XkCbgdIyzUWP7bnuiCM8gxgiIYJujqS7UdFaHq9I5%2BqTV4xZaiyZrGKUxAl3a%2FfJIJYSXintTb9YupIVlygbLoehgvbXtUvJS2hHkKZSgalmnibcnwCx4D31svfW5hz0X%2FHPTBqHT0gZ8bWNeS%2BNt3rbAyN0J0R3wEBMsPakYpqxuBzWDQs7iuuMaSvC6XOkigSVJUCFkHCnr2CwIv5T3dE46DP3lg9fYAvBPEqf5kzdUF5y%2BNCS%2FDCCLlcOqGj73prZlKyVStPiALHxMOjRwcAGOqUB2wdngzdCyRwtOxyiozsjdlT2NGphpanigj95IMnjDTwlxbJ98aswgBkuSLJrzsj1OVrwoTlr3%2F6ppYtcLMsa8EGFa5hg2UgAOlFK0kOkeeQ6sdIp3wuaOAJx05XhDfvny0VpE4O%2B4I67n%2FjerClJy%2BlFE8GbXAWrL%2F2yOF9aKrlKknuGtPToDGz%2FOzaZIukVhAMQjf8wGNC2%2FD1IMBpKVWwDzUB0&X-Amz-Signature=ecfde96da485d0b5981ec513f77d9a01ec2427dd8f58073a36c4848f5ea596c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
