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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLMRD6U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCAyQrqmcC3s69vRt%2B1XgrRStJRmDGOcJAM4xee9mVHWQIhAM8DynDOGKlWOXiIbgyQE56at5LOv689qCenLfHXRSZpKv8DCBIQABoMNjM3NDIzMTgzODA1Igx2wUbwBqGEMhVPPIcq3AP0GaMfe6brpgIVj0D9LD1MQJ4C7%2FV7uz0v68u7XVOtEVGIj%2FugdV7dE9ddQMQhO%2B%2Fwfx6wCsJbK5oYkUG0FCSf6KrMZHKbMB3TS6TQt1ZKJ%2FupYEghDl3iynCoHUHeftd081qZBtT%2BiJxpD%2FrB0FsQFRjdO%2FcGAAT8aJkwPhdfXFsjBPDyXbR39WlXBfLZiQ1ZtiBjR3MG9r6%2Fomk%2Brf6bVmYGXYZduuLxtAjbvSdDvjmXmWhaZFk50ww%2FKSY1dx19ZKxao9vaPnqtH1iFwyvALe1KDYkFOmwhqUJqouFBITX0gRo0ar5EsvixvwfAuoE%2BPf%2BRp0x5ksXsfum2oiJvhUdQRf9yD%2Ftyy5pFH1vfvIxaJBuFjI%2BsmGLcgHEl5o1M%2BoI3nZnesDzUg90G%2FrZduAH3br71aTy29zwiVYmi4kabuyDNl%2BKpf4f1Ye8XWozz8qhQnJij%2B9yOXKZujg01eboCMc2t%2FXDTUHLlbr83g5Y%2BIkAunz%2BlYatb%2B%2FId6WjW2wjctWux65QPWr%2F085vc%2Bpm4v2tinkP5G8IiJIB%2BUpvGczMBV4W3%2BczxvaAtCUtLZrOSfYgV%2BdYwFYD7daSeRYwOdL5Giy5UvDJGSINYRTCEAVr95Vqz3McBUjC4jMbBBjqkATOU2C8SKT%2F5cL78Pa1X9KwQo4l27aAxEmZyAEmG0tn3ii%2FBxHwc%2FtBtE7NZm6jr32ZQPZ6%2F2X82PCUYsvC4xIG%2BlHqR37zNkKX0WWiBViRLhCnFTqF%2B2fewf6Wi1L4W97i12MOc%2FNYfkMiBxe1UlOLyjwjJ3coefMkRLq48zcPmNQoRmKZcfbg2S1AXjPZKXCcYrTlgczq0%2BiY0VjAPXUgYxU6f&X-Amz-Signature=f52c0a41bed16592c38ba5fdb6d48b206e9defe45baf3cbde173c6f7ce2e7496&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLMRD6U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCAyQrqmcC3s69vRt%2B1XgrRStJRmDGOcJAM4xee9mVHWQIhAM8DynDOGKlWOXiIbgyQE56at5LOv689qCenLfHXRSZpKv8DCBIQABoMNjM3NDIzMTgzODA1Igx2wUbwBqGEMhVPPIcq3AP0GaMfe6brpgIVj0D9LD1MQJ4C7%2FV7uz0v68u7XVOtEVGIj%2FugdV7dE9ddQMQhO%2B%2Fwfx6wCsJbK5oYkUG0FCSf6KrMZHKbMB3TS6TQt1ZKJ%2FupYEghDl3iynCoHUHeftd081qZBtT%2BiJxpD%2FrB0FsQFRjdO%2FcGAAT8aJkwPhdfXFsjBPDyXbR39WlXBfLZiQ1ZtiBjR3MG9r6%2Fomk%2Brf6bVmYGXYZduuLxtAjbvSdDvjmXmWhaZFk50ww%2FKSY1dx19ZKxao9vaPnqtH1iFwyvALe1KDYkFOmwhqUJqouFBITX0gRo0ar5EsvixvwfAuoE%2BPf%2BRp0x5ksXsfum2oiJvhUdQRf9yD%2Ftyy5pFH1vfvIxaJBuFjI%2BsmGLcgHEl5o1M%2BoI3nZnesDzUg90G%2FrZduAH3br71aTy29zwiVYmi4kabuyDNl%2BKpf4f1Ye8XWozz8qhQnJij%2B9yOXKZujg01eboCMc2t%2FXDTUHLlbr83g5Y%2BIkAunz%2BlYatb%2B%2FId6WjW2wjctWux65QPWr%2F085vc%2Bpm4v2tinkP5G8IiJIB%2BUpvGczMBV4W3%2BczxvaAtCUtLZrOSfYgV%2BdYwFYD7daSeRYwOdL5Giy5UvDJGSINYRTCEAVr95Vqz3McBUjC4jMbBBjqkATOU2C8SKT%2F5cL78Pa1X9KwQo4l27aAxEmZyAEmG0tn3ii%2FBxHwc%2FtBtE7NZm6jr32ZQPZ6%2F2X82PCUYsvC4xIG%2BlHqR37zNkKX0WWiBViRLhCnFTqF%2B2fewf6Wi1L4W97i12MOc%2FNYfkMiBxe1UlOLyjwjJ3coefMkRLq48zcPmNQoRmKZcfbg2S1AXjPZKXCcYrTlgczq0%2BiY0VjAPXUgYxU6f&X-Amz-Signature=e8992e0ec67dbb8209a97de51a2b25ccfb58a665eb190da79f0846d49b45cce6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
