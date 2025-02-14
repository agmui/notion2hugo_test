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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQLGRQX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQC1W%2FopRjqy9jS6QbXS2EosYvcq7QAzQ01px7UAerlJRwIgKTefxjnGeTYfTBwXJT1XwwW3FGPIh0EoO%2BsXRLQgYFAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIhl2XtGEsChrMgaRSrcA4aqYUhBixvXSYuHSJCiscze1uanx2THsCsnoTt2zaf4S6tNM8uKqf2T9ep0VHVZ1AP2zg3QA2US%2FyvoV%2B926LDwIQRo4g4AEyrECrbyrx1sqlL4EuR1zM0I9hFzJZps3yIQdMVgDb2yN5yfWjoZN3HnaQ8%2FNumC7gzGue6QCTjJf%2Fqahgch%2F5rn5zAR4xR3uuCoh6p%2FUSN9fp30iM019K7RubE3UzYkEawKKVES8QZ%2FXHYRUj94r3HZFo1B%2FlkdsOucoosPQ%2BRc8j5gIlXkL32s2xl2oimIt7tmqPuOTO14EIt5bpegk2VLZ47Os0gBAHTB6gWtnp2Dxdz%2B63kvLNJubvohVG3uIuPWnKuobp1Ml2qjmAZ1bzlqDwprdxcDkSS759MazYm96QDUwDYz6Vrzb3uQIGBDges8qPIETmsDJ74ynph%2FVbblWjNuLlbbGvQ0a7%2FOgQFg18AZWsiI1%2FCT7bhX%2Bm5tGj9lW3NA1sdiU%2B2mYYtus%2BjcHfEZAbIPJ9AlAVHKM9%2BIuTJcuqil6Qml%2Bs%2Fh2jeq8XC3y1gq%2FmZFmCyOrffeTR9QLLeNGLVuR3%2Bh4GTO%2BeoBgC6ac%2FzJrEOPkmucQ0c2roXKhZv%2BsKlHdfvv%2BYSJjJv6V7HpMN6Uv70GOqUBnEpfBeLnTIxhrlkhW1S3WJfiOCenmXHsHL%2BunCSknCNznxw6fm%2FQledrvwZTgJf5e2uaw4LIdVlnbOggYPtAba4VrzxbCL5utAHs6iu4sMgggmYzLlVuIuEdFiTEJZ0ouFfeZe4NXN8nKD1TgNtJ141vpeu%2BQc9ZchcwgaQmgquptC13Yt95qImAG4Wr5zS5aQ4ZCB6dNGnP%2F%2BFzK0uk7gQufvho&X-Amz-Signature=cad7011ec2d3b0828bd155f73d7eff6e2361896755e55b1f74d35f10bfcfc6da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQLGRQX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQC1W%2FopRjqy9jS6QbXS2EosYvcq7QAzQ01px7UAerlJRwIgKTefxjnGeTYfTBwXJT1XwwW3FGPIh0EoO%2BsXRLQgYFAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIhl2XtGEsChrMgaRSrcA4aqYUhBixvXSYuHSJCiscze1uanx2THsCsnoTt2zaf4S6tNM8uKqf2T9ep0VHVZ1AP2zg3QA2US%2FyvoV%2B926LDwIQRo4g4AEyrECrbyrx1sqlL4EuR1zM0I9hFzJZps3yIQdMVgDb2yN5yfWjoZN3HnaQ8%2FNumC7gzGue6QCTjJf%2Fqahgch%2F5rn5zAR4xR3uuCoh6p%2FUSN9fp30iM019K7RubE3UzYkEawKKVES8QZ%2FXHYRUj94r3HZFo1B%2FlkdsOucoosPQ%2BRc8j5gIlXkL32s2xl2oimIt7tmqPuOTO14EIt5bpegk2VLZ47Os0gBAHTB6gWtnp2Dxdz%2B63kvLNJubvohVG3uIuPWnKuobp1Ml2qjmAZ1bzlqDwprdxcDkSS759MazYm96QDUwDYz6Vrzb3uQIGBDges8qPIETmsDJ74ynph%2FVbblWjNuLlbbGvQ0a7%2FOgQFg18AZWsiI1%2FCT7bhX%2Bm5tGj9lW3NA1sdiU%2B2mYYtus%2BjcHfEZAbIPJ9AlAVHKM9%2BIuTJcuqil6Qml%2Bs%2Fh2jeq8XC3y1gq%2FmZFmCyOrffeTR9QLLeNGLVuR3%2Bh4GTO%2BeoBgC6ac%2FzJrEOPkmucQ0c2roXKhZv%2BsKlHdfvv%2BYSJjJv6V7HpMN6Uv70GOqUBnEpfBeLnTIxhrlkhW1S3WJfiOCenmXHsHL%2BunCSknCNznxw6fm%2FQledrvwZTgJf5e2uaw4LIdVlnbOggYPtAba4VrzxbCL5utAHs6iu4sMgggmYzLlVuIuEdFiTEJZ0ouFfeZe4NXN8nKD1TgNtJ141vpeu%2BQc9ZchcwgaQmgquptC13Yt95qImAG4Wr5zS5aQ4ZCB6dNGnP%2F%2BFzK0uk7gQufvho&X-Amz-Signature=59467c2fd2264dac2dfc135c281bcf364b27b9dfea90efadc0922be0fc10e467&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
