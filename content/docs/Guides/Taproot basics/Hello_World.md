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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K3XLF46%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD4zbc5c7PgBhmRnh4rFO9dkKXmkqLQ9TUKG4Md9vUB0wIgO4LMD%2BvOvJQ3aCI8Fvid9Fjndx9QnJJy5lrk7Y4slxgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBjpTKdKr7MNtqN7CrcA37o23uD4vA08OcJk9jLEQRrsxURqwzyp5YmCxCcZ7ivHGpVrOCS8Bq%2F%2BnBuKWc6fj8gbGS%2FVtXRvd4gUQj1a3hdYle3tBrETp5k5l%2FfyXQ4hro6Ymd9%2Fg3vmyihZKY%2FysJ2%2BeC4izuQ%2F%2B00Z5QU20zXOwuGVjdHWXlFFlL%2FOePoYh5%2BWrzRqksz3zKwYTqNn%2FQsyjUcWHRy7Qa584AACeHz1SPf5wfKMmApY1Ric6yPtNo9tBhC5%2F5vbKybUDm%2Fz1SFFDlG26cYAk7dU5uGVRd89ugsHeCq0qV%2BTPKgoqyvvPyVRLhGv6oV6EQar%2Bw11uhnDuswBN68TX65awLnVnc3WwYEZDFyZOpiEr5gjMp1u%2FgU2L2XEDn8f7j9LYEGASnFZq9C%2B5htCCjCKFQntkygNeEANFQBXDX7rSbvO32kgtMhvlotLIp3Kr%2FEljFh5bJQ7PUmJ6Ed4zHtcHuzviNV3d4lxmID%2F9qtFdi7275JFaTVhhkYg2pz5KXSWeH%2FU%2FeTgqEL4%2Ff%2BNFTJsVaTMvn5fXQekTBbYftFAwBQ%2BakEEtlHKULC2FEAZGZJGkJJqiiGW9HOHLr7PjCPMlKFSNxmmoeeyXxm6Z%2Bvs0KUxRd81AHjKFvRTTnTb4nvMOjy0sAGOqUB91QWKbKAQ0Ts4E8JaTVA%2FIiUsq3gMWQ7sZ1vRI4QDFvvsMq%2FgsjNPAxMhToX1bGSlxy09e%2FP6WK38dsK5P605kCLFnZy0DZHLp1FcDKAAlYXptues%2BLliwEw4E5fpXmrfVOwJMi0V0HQ4vpS1iwJhmis84Ypbcd1e5vXD7RFFdYzpR86JqdkXzPEykTKJTMdBSELvNLdfy4%2BY4mKjetFuZSUly4g&X-Amz-Signature=b9fbded587c5bf01e4be9515c5ab5e40b8719abb591951ddddbf7b03e634f320&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K3XLF46%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD4zbc5c7PgBhmRnh4rFO9dkKXmkqLQ9TUKG4Md9vUB0wIgO4LMD%2BvOvJQ3aCI8Fvid9Fjndx9QnJJy5lrk7Y4slxgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBjpTKdKr7MNtqN7CrcA37o23uD4vA08OcJk9jLEQRrsxURqwzyp5YmCxCcZ7ivHGpVrOCS8Bq%2F%2BnBuKWc6fj8gbGS%2FVtXRvd4gUQj1a3hdYle3tBrETp5k5l%2FfyXQ4hro6Ymd9%2Fg3vmyihZKY%2FysJ2%2BeC4izuQ%2F%2B00Z5QU20zXOwuGVjdHWXlFFlL%2FOePoYh5%2BWrzRqksz3zKwYTqNn%2FQsyjUcWHRy7Qa584AACeHz1SPf5wfKMmApY1Ric6yPtNo9tBhC5%2F5vbKybUDm%2Fz1SFFDlG26cYAk7dU5uGVRd89ugsHeCq0qV%2BTPKgoqyvvPyVRLhGv6oV6EQar%2Bw11uhnDuswBN68TX65awLnVnc3WwYEZDFyZOpiEr5gjMp1u%2FgU2L2XEDn8f7j9LYEGASnFZq9C%2B5htCCjCKFQntkygNeEANFQBXDX7rSbvO32kgtMhvlotLIp3Kr%2FEljFh5bJQ7PUmJ6Ed4zHtcHuzviNV3d4lxmID%2F9qtFdi7275JFaTVhhkYg2pz5KXSWeH%2FU%2FeTgqEL4%2Ff%2BNFTJsVaTMvn5fXQekTBbYftFAwBQ%2BakEEtlHKULC2FEAZGZJGkJJqiiGW9HOHLr7PjCPMlKFSNxmmoeeyXxm6Z%2Bvs0KUxRd81AHjKFvRTTnTb4nvMOjy0sAGOqUB91QWKbKAQ0Ts4E8JaTVA%2FIiUsq3gMWQ7sZ1vRI4QDFvvsMq%2FgsjNPAxMhToX1bGSlxy09e%2FP6WK38dsK5P605kCLFnZy0DZHLp1FcDKAAlYXptues%2BLliwEw4E5fpXmrfVOwJMi0V0HQ4vpS1iwJhmis84Ypbcd1e5vXD7RFFdYzpR86JqdkXzPEykTKJTMdBSELvNLdfy4%2BY4mKjetFuZSUly4g&X-Amz-Signature=3461726ad4bea8b8521a20ae9f23c757688ceedb723d4df5814f26c1ce7ac7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
