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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVT3HRBS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOeZ8hiojIP64fXxvYeBiiONdifVBeEmy7B%2Bw3DGg0tAiAsEUj%2FvVt%2FIOc9XwUeWV9KrHh2Z7eRxuWQ1FwL%2FsdsVir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWNNnKORNwd4BIIdRKtwDhiH%2FBGU3gwemhUKwSb35M%2BiUMxiDkR2%2FKOlmxg6tHv%2F0fSkiO6HZpA1lrPdBlDTTjJB95paRPvvS%2F%2FiISPUJ69vb59RU2m7jjBSzYhJvZ6hDoOztLi7A7KYX5t0iE1dmJYEBNJF21NkbpaNUp33MiciX0jBmqrU00E0DixK90Y0oDgEGTpMG8uKKgncPmH8jkfdDDK%2Bk6b2dyIO8dRvE%2FixX71ERTkDcob9exnG4mqiAReVa9baZiarnRsGi8sZp%2B9r6%2BwPhLfLpphkqotMV4bya492ChAINhCpsFwajhuXz6hnyrW%2BqVpcnNLKQlYiyiC64hLu9jbksZ0R9%2FurNpRbCK1LyTVy9g4nm3lAMW596fWL7foBLCY5V52JiHud4SkJSf3v2r6eiw2mpQA6YjxSPiGYFAuA%2FxFgVtty8EqegLTEL0V8Ayge6q7Sf0sDd8r2CZyvlxdf1IizxF%2B0n7cgWjKvskRtjo%2FELybUEr78lXcT%2F0gq8UNMTgeylg9vqJr19m2MRQLRsJsnK%2FaoEmm%2B4S3Gp00lY3PYmQSRA%2F8KzJqA4JaXVmejHCDQzs8OgX0fMV9DqzPSZNNvnAI2C8tCdnVLnDMcge%2F8m%2BVQAHBTFxl96wS%2BS6u5DGHUwiP2IwAY6pgHtYrnoEeHFVjYxl%2FUEmP4apvkUQnEQg%2FdOhF7bEllW%2BUBgLZ4T%2Bso95eZ1yYaIMT4D6zdi2wFsy2VKuif8n4JwedOgB%2FbgBWRTGlOhicTvOcnNFLC3Afq0AwfZvrRLukU5zepn5yiO4mUo85BGxFsxPq2ZGX%2FWl9%2FxPw46U6753nx6ms%2B2tUxnCoxOzbTgkfLiKbzQhvoROq5Q%2BkmU%2FUczKZSR4WsJ&X-Amz-Signature=a0b7514ba173c2d4ac6b26858237774daf63083acd4f6e5b97907cb0cd411cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVT3HRBS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOeZ8hiojIP64fXxvYeBiiONdifVBeEmy7B%2Bw3DGg0tAiAsEUj%2FvVt%2FIOc9XwUeWV9KrHh2Z7eRxuWQ1FwL%2FsdsVir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWNNnKORNwd4BIIdRKtwDhiH%2FBGU3gwemhUKwSb35M%2BiUMxiDkR2%2FKOlmxg6tHv%2F0fSkiO6HZpA1lrPdBlDTTjJB95paRPvvS%2F%2FiISPUJ69vb59RU2m7jjBSzYhJvZ6hDoOztLi7A7KYX5t0iE1dmJYEBNJF21NkbpaNUp33MiciX0jBmqrU00E0DixK90Y0oDgEGTpMG8uKKgncPmH8jkfdDDK%2Bk6b2dyIO8dRvE%2FixX71ERTkDcob9exnG4mqiAReVa9baZiarnRsGi8sZp%2B9r6%2BwPhLfLpphkqotMV4bya492ChAINhCpsFwajhuXz6hnyrW%2BqVpcnNLKQlYiyiC64hLu9jbksZ0R9%2FurNpRbCK1LyTVy9g4nm3lAMW596fWL7foBLCY5V52JiHud4SkJSf3v2r6eiw2mpQA6YjxSPiGYFAuA%2FxFgVtty8EqegLTEL0V8Ayge6q7Sf0sDd8r2CZyvlxdf1IizxF%2B0n7cgWjKvskRtjo%2FELybUEr78lXcT%2F0gq8UNMTgeylg9vqJr19m2MRQLRsJsnK%2FaoEmm%2B4S3Gp00lY3PYmQSRA%2F8KzJqA4JaXVmejHCDQzs8OgX0fMV9DqzPSZNNvnAI2C8tCdnVLnDMcge%2F8m%2BVQAHBTFxl96wS%2BS6u5DGHUwiP2IwAY6pgHtYrnoEeHFVjYxl%2FUEmP4apvkUQnEQg%2FdOhF7bEllW%2BUBgLZ4T%2Bso95eZ1yYaIMT4D6zdi2wFsy2VKuif8n4JwedOgB%2FbgBWRTGlOhicTvOcnNFLC3Afq0AwfZvrRLukU5zepn5yiO4mUo85BGxFsxPq2ZGX%2FWl9%2FxPw46U6753nx6ms%2B2tUxnCoxOzbTgkfLiKbzQhvoROq5Q%2BkmU%2FUczKZSR4WsJ&X-Amz-Signature=41a91e5a6d6072b8af079a3c450a711ca8c5c80e2d4c6223c8e6bd4575da37c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
