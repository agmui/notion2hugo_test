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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV5WJN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKJlNOtClcskR9dmLgsr36ezatyBuHQYB4QtloPYGdgQIhAK%2FtOoPeIYrmVhFk4XCvpE%2Bp0iXMfiq2G9aYF4Eq6PFtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqibQPK1Pdi2SOhcsq3AOzU23H7T2lBlDgoF%2BcaITRKFHa6%2FWlnWBPKnV7y0Y19nCburgWA9%2BRc1cKMzciMRrd9slTFeQTywS6n%2BuYyWPYkAcs4rLmSxpPhkXdZiWkMIKlKpdC4BLyO3ItoivK6P3%2BSn1VAnjKAgdRDNKP2O%2B2O04mifRAqnlPkKaNH8LW39Xv1F4stdTFc0fjXk5Qrjz%2FQZUVd8xvrDYbMjzlJcj4esL8WQfNTeVr7GNNQAL8m6VJcfZrI%2BHTUA9VmEEwERwffmBiH%2FOqihb0BBYbotNN4xYJJjyTDegergVfL2Qin5EnSpUhkfGwd1yRfMQqJu0R4ug28Wt339BiDQprZYC17D2majDOID38%2F6I%2FHR78NioDNyrg1%2B2oI2y1nVNERIHFneTn%2FffPPJzsqZXXKUi7y0GcnM8zKjwp2g4qj8oVDVcholJQemfbcfl0VXadPd1Sk79TNAk%2BWQn1u9ikDOpZb45HgmPHX%2FFit0dC6VNVDieDS7Zls0MjdKdFw8EEdY8n47e%2F2W0OLxVOObZJbBuYua806ijrvC8qlhO5VD3tei1GuJiQoAQPJXLN0JOE%2BRV%2BFXs2ZM8k1RcHmsFpFsVjyb9UwNc3if36UMsR3vvuigWbe3MRHvc1i%2B8VKTD98qDABjqkAdnLFqLGCgk9JnunG60hn5XgYA5RhhFgImlobUdEXsUo%2FRwbuDWWIJFUOD7PlpiPThz2Ry6YzhPVt2UebgVYMcYggMFUwQW0G%2Bfd7Db%2FXdnvNEGQW15Ed4jCDtcW%2Bk6Dmclk7v5y7aLhpuG0U2u4EBLwZCt2DAV5zktArT6sX0v9oaYTNwPX8Q51vk5%2BcwX%2FGWQyNoC%2BCSyucwlPG9oruTMPcThF&X-Amz-Signature=df2019af98ed7086e0efac2c94d0c74c3588c17d93f5dc4dab62109c4b8758a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV5WJN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKJlNOtClcskR9dmLgsr36ezatyBuHQYB4QtloPYGdgQIhAK%2FtOoPeIYrmVhFk4XCvpE%2Bp0iXMfiq2G9aYF4Eq6PFtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqibQPK1Pdi2SOhcsq3AOzU23H7T2lBlDgoF%2BcaITRKFHa6%2FWlnWBPKnV7y0Y19nCburgWA9%2BRc1cKMzciMRrd9slTFeQTywS6n%2BuYyWPYkAcs4rLmSxpPhkXdZiWkMIKlKpdC4BLyO3ItoivK6P3%2BSn1VAnjKAgdRDNKP2O%2B2O04mifRAqnlPkKaNH8LW39Xv1F4stdTFc0fjXk5Qrjz%2FQZUVd8xvrDYbMjzlJcj4esL8WQfNTeVr7GNNQAL8m6VJcfZrI%2BHTUA9VmEEwERwffmBiH%2FOqihb0BBYbotNN4xYJJjyTDegergVfL2Qin5EnSpUhkfGwd1yRfMQqJu0R4ug28Wt339BiDQprZYC17D2majDOID38%2F6I%2FHR78NioDNyrg1%2B2oI2y1nVNERIHFneTn%2FffPPJzsqZXXKUi7y0GcnM8zKjwp2g4qj8oVDVcholJQemfbcfl0VXadPd1Sk79TNAk%2BWQn1u9ikDOpZb45HgmPHX%2FFit0dC6VNVDieDS7Zls0MjdKdFw8EEdY8n47e%2F2W0OLxVOObZJbBuYua806ijrvC8qlhO5VD3tei1GuJiQoAQPJXLN0JOE%2BRV%2BFXs2ZM8k1RcHmsFpFsVjyb9UwNc3if36UMsR3vvuigWbe3MRHvc1i%2B8VKTD98qDABjqkAdnLFqLGCgk9JnunG60hn5XgYA5RhhFgImlobUdEXsUo%2FRwbuDWWIJFUOD7PlpiPThz2Ry6YzhPVt2UebgVYMcYggMFUwQW0G%2Bfd7Db%2FXdnvNEGQW15Ed4jCDtcW%2Bk6Dmclk7v5y7aLhpuG0U2u4EBLwZCt2DAV5zktArT6sX0v9oaYTNwPX8Q51vk5%2BcwX%2FGWQyNoC%2BCSyucwlPG9oruTMPcThF&X-Amz-Signature=0d72ebf77b3a9c871f7d3b66696fd6b4fe2a4f4468ee9db33f7e82464f37a7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
