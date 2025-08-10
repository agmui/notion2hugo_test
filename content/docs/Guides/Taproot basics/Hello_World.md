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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTIH4T6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZNi86bbrogMiihwPl9DeE7%2FXguwDgP9ZCtoXdsNY4XQIgS29rpgujFrC50bU1jjjxt%2F7P8faxKE2mmUA9p7lZXX4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyT%2F%2BXDg93IqlxxxyrcA8OMQJdvugjZbZwjpLK%2FQkDttFpafnejOtIdkapFbwBZ67svMZz%2F0AD01QNDJitx78F9hUc%2F14iFWcTHTTMTqADhhXFM6rH3AMush%2BRY4%2FNwAM%2FTdkXVhnojuZxR1coyNt8BQByl0KA1cZwFS8ZtA9YEDVVApkJdyLYjqKnejmxvSSOvmNDDaQhyACmWrU4rDREWoZUWBeQW4Fp3ffI3dWZls4N2yzAH7WzrQcmCRmLUJ9e%2FthaVpnGs0fZp0oLYdrHS%2F04Qq5rTJ4xNrR28G03EHV1WY8XQa5R86XlZHjoP5f%2BCe%2F%2FiGl0LlwU2X3apoyEnJH%2BbyjnsiIeou71oJTf4pxOpBf5MJbUNEfxJhS0eO8KpyGNZx6COMTcICOlM8n2zA346O9nmw8duES3HgvQtUQ9i2CfzJVoi%2Byk1oyWTR4XhDQJ4TlioAKmUufwfnylWAGMHwWe%2BzosWJnF24OpfZ%2FpLnsKEFh1CuwH2Jnalb%2BJaZbpPBsR8Ft1IaXTX%2Bk%2BbibcHXbnPoYh4KUo%2FKfYI3vVEHjGpwtJ%2F%2BoTyunRktZeys3%2FKkB4BC5FmJrGeQIrx90GAtZDNInR%2Bz3u6aqaXPt7nnfHiDaJrWphIbTijr1MYMSLrLVJ3asSeMPSV48QGOqUBaXMG6%2FR3FD%2BekS5sCVBIyxRB3PyQ0fM4DwNxLPGwgnQEOwZ7lcLPDoZpZbCpd4sMTaV0iy60GZBhs8dG1N9bDmHUa9E8t6mAgBqwVAnp7se%2Bue5CI35CbOfr4ISJdLPBPQQwFLR3pM%2Fc6tuJm1hct3E%2FyPEduJtmyLp0TgoqDyK3Mijk0V7o6MQ4Go3t1dHVwRX7F30INI2DyEbqawRGFfPoDyJn&X-Amz-Signature=5b527d355106f4795215a273d5b5cd91279283959163138504f4b13345988100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTIH4T6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZNi86bbrogMiihwPl9DeE7%2FXguwDgP9ZCtoXdsNY4XQIgS29rpgujFrC50bU1jjjxt%2F7P8faxKE2mmUA9p7lZXX4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyT%2F%2BXDg93IqlxxxyrcA8OMQJdvugjZbZwjpLK%2FQkDttFpafnejOtIdkapFbwBZ67svMZz%2F0AD01QNDJitx78F9hUc%2F14iFWcTHTTMTqADhhXFM6rH3AMush%2BRY4%2FNwAM%2FTdkXVhnojuZxR1coyNt8BQByl0KA1cZwFS8ZtA9YEDVVApkJdyLYjqKnejmxvSSOvmNDDaQhyACmWrU4rDREWoZUWBeQW4Fp3ffI3dWZls4N2yzAH7WzrQcmCRmLUJ9e%2FthaVpnGs0fZp0oLYdrHS%2F04Qq5rTJ4xNrR28G03EHV1WY8XQa5R86XlZHjoP5f%2BCe%2F%2FiGl0LlwU2X3apoyEnJH%2BbyjnsiIeou71oJTf4pxOpBf5MJbUNEfxJhS0eO8KpyGNZx6COMTcICOlM8n2zA346O9nmw8duES3HgvQtUQ9i2CfzJVoi%2Byk1oyWTR4XhDQJ4TlioAKmUufwfnylWAGMHwWe%2BzosWJnF24OpfZ%2FpLnsKEFh1CuwH2Jnalb%2BJaZbpPBsR8Ft1IaXTX%2Bk%2BbibcHXbnPoYh4KUo%2FKfYI3vVEHjGpwtJ%2F%2BoTyunRktZeys3%2FKkB4BC5FmJrGeQIrx90GAtZDNInR%2Bz3u6aqaXPt7nnfHiDaJrWphIbTijr1MYMSLrLVJ3asSeMPSV48QGOqUBaXMG6%2FR3FD%2BekS5sCVBIyxRB3PyQ0fM4DwNxLPGwgnQEOwZ7lcLPDoZpZbCpd4sMTaV0iy60GZBhs8dG1N9bDmHUa9E8t6mAgBqwVAnp7se%2Bue5CI35CbOfr4ISJdLPBPQQwFLR3pM%2Fc6tuJm1hct3E%2FyPEduJtmyLp0TgoqDyK3Mijk0V7o6MQ4Go3t1dHVwRX7F30INI2DyEbqawRGFfPoDyJn&X-Amz-Signature=f927e2f3916176f40f2ca79df91f2b31c58c8cd0d916ca1d990649d76f8f00fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
