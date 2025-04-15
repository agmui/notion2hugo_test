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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIBRI2Z%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4IhQ%2FGcBa2aQFUvPxZpsNFCleTYdTEZUveriONQCmoAiB7mNHo3Esm1%2B2MSF4YjeEy%2FklR2WUC7w3KSDtlSQp2Nyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8r2DTT8IjatkO5qmKtwDlgUxYkwiOl6UXBsAj15Z8ROJKuugP4H9K4uBBnH3lUxqKDeEcA7f8qVSf%2BlX8cDMqfb9S%2B%2FHBQIOIvlM6eWycMOxmIEkaMaEcWSWqZc0bTPP8cojinmcDlfV6CLD%2BF2gMBugSfhsSGWv9F%2BBqYim0UOrM7U7Pj1aCmUwyOCkwM7TXPP42z5W3kOdaLgNj5Ti4BZgPAMhlfvuGrSX3HnnrO1wXNShYocqUC6N3PGQfn090ESQx2%2FMUidnid%2B5xDTJ%2FAB2p5Y%2B9rKAfiDy1WT2rQR5bqIoR7iNaO1BdAmRfLO46xA6lbQl1a3VFzirJNmPOk3hc6zRTBXTBvQ8bvKGMB7m0gCjYy8lbpaT8wITW90XtCfN%2F53fwZn29gkXkNxQgAGy69X3X3PsiLOxyZvC%2BJF4CMD3iVYPsdlnoiiCFXJZn9BvoCJf2VDVC%2BSn7vnGfzHbxNbGva1DwcvukUWgFKS%2FnbZStO0ie2NK3Bbc8jfavB31JMJTSk1Dl2v3GkG69dyJcoCVsfdrgU8Kbuu3e8CCJ%2Fqw7WrzZuH2TOyUSEebl9McRTr35tmnUqq6k2BtuoY%2FZUr0D%2BP0%2FSYZ7ZzkvM7%2BhmGwZ6XiHr35QOh8UDlYjAHaz3MQQ5UpVv0w99X6vwY6pgHewJHHkeR7nrSm%2BmQM0Nm0hIEgsxYFpcoeU1904BpZ7PoBDullmQ%2FtbDTVUJMn1YkVx6arp1nXnoHhyXyeFqRdiGjvABYh8%2FZqMvEyMwc9a4Z%2F1cVjhazOQQbtyfiCpk7iBzk6BEinLutumqxxH5Z87i2C6xX1oTakf6%2ByqZB%2Fat%2BOnQiM4ozcLpM%2FsjCMZK2ejndK6MICQsgVf8bGM578ZJlm9N7k&X-Amz-Signature=d6d558326a8c3dae7a5682b8cecae809f037bc0d0374fb04710f3b2ceab4ec68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIBRI2Z%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4IhQ%2FGcBa2aQFUvPxZpsNFCleTYdTEZUveriONQCmoAiB7mNHo3Esm1%2B2MSF4YjeEy%2FklR2WUC7w3KSDtlSQp2Nyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8r2DTT8IjatkO5qmKtwDlgUxYkwiOl6UXBsAj15Z8ROJKuugP4H9K4uBBnH3lUxqKDeEcA7f8qVSf%2BlX8cDMqfb9S%2B%2FHBQIOIvlM6eWycMOxmIEkaMaEcWSWqZc0bTPP8cojinmcDlfV6CLD%2BF2gMBugSfhsSGWv9F%2BBqYim0UOrM7U7Pj1aCmUwyOCkwM7TXPP42z5W3kOdaLgNj5Ti4BZgPAMhlfvuGrSX3HnnrO1wXNShYocqUC6N3PGQfn090ESQx2%2FMUidnid%2B5xDTJ%2FAB2p5Y%2B9rKAfiDy1WT2rQR5bqIoR7iNaO1BdAmRfLO46xA6lbQl1a3VFzirJNmPOk3hc6zRTBXTBvQ8bvKGMB7m0gCjYy8lbpaT8wITW90XtCfN%2F53fwZn29gkXkNxQgAGy69X3X3PsiLOxyZvC%2BJF4CMD3iVYPsdlnoiiCFXJZn9BvoCJf2VDVC%2BSn7vnGfzHbxNbGva1DwcvukUWgFKS%2FnbZStO0ie2NK3Bbc8jfavB31JMJTSk1Dl2v3GkG69dyJcoCVsfdrgU8Kbuu3e8CCJ%2Fqw7WrzZuH2TOyUSEebl9McRTr35tmnUqq6k2BtuoY%2FZUr0D%2BP0%2FSYZ7ZzkvM7%2BhmGwZ6XiHr35QOh8UDlYjAHaz3MQQ5UpVv0w99X6vwY6pgHewJHHkeR7nrSm%2BmQM0Nm0hIEgsxYFpcoeU1904BpZ7PoBDullmQ%2FtbDTVUJMn1YkVx6arp1nXnoHhyXyeFqRdiGjvABYh8%2FZqMvEyMwc9a4Z%2F1cVjhazOQQbtyfiCpk7iBzk6BEinLutumqxxH5Z87i2C6xX1oTakf6%2ByqZB%2Fat%2BOnQiM4ozcLpM%2FsjCMZK2ejndK6MICQsgVf8bGM578ZJlm9N7k&X-Amz-Signature=2be157e9741075a0b5b70771fea7d5d7eeebf04721f511d3c02f562ab63c4092&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
