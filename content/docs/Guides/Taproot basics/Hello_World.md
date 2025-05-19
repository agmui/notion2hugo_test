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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3V6JQ2W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqNVf3YPjGTDprl0DvG3GemotcakddTY0s0%2BbfalTBWAIhAILb%2BPnXda5mAgeKwvsNtGzFDhHT8Nbsu%2BWpMWJSR7PSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTqJZzJd2pBCP2MZwq3AOgT5%2BNgIE%2BS%2F36fQRSRF16yoBUOolMk2eGpWiwbux9%2FPUnNCxxE1H0sKD3pR%2B8jrre7z2HOumNzyUMwixv5CUXM1ATWdtRb%2BaIQdEpxiI0d34rlgDxqW4jri%2BdS9mZEip9i45zV9lzGEBQS3HCohI7Is91fegS1LBH5Wd5wxiDZNtHidr6TWEngrrzRjbOMIhxxgs8E%2Fs3VS2aO2aNB%2Bk%2BF9z2BaSnbxJVrgO%2FavXQx8vFW7kV2Y%2B8Hh4HiFM82kt302iPznzwPCAqKdnCiGiBzXoUuDB24%2F71%2F2O4FlxMU9NwH%2BHUmYGYtkwBCOiVUNYZJnLRjNObGVFckg718%2B4uryeir1lGNvzN7rco9RgK5UEo694jr%2BWtxzuW4H5JlDkfeOFksuB0RtAhud4%2BqqfXM003Tp2jGEUnn2thWlOVA6fKXDKbofR8a3FQZxEBgJoEgzjBQTC37UKduKzuP0k8uKcGjkhkebIXfSenhfF%2FMLVHLuTMSQxfBBRQZ32kzabzdwAn6NxEZM9R2tYd6TNVeiQPMnV5T0xp2LqV0vBCTRLa6nTac6h5iUKEm5Cz92P3LrjHzinYH9Fxvc2HlSoLBTSqMi1xrFtPV6r2nRccTXwSIsX8SUGNE8CYPDDa%2Bq3BBjqkAWZTpUXWZn9HZa%2BxeMqjK%2BNFtsfGcYPU9Bh3ec2Xc9Qnoev2tNyWPzQbMfTrLE1Ly9X2kVaeAj4M9giOax2Bnwp6E6N%2F7rvNOUufNqlMauHYxudmLXqEhRlFnuC8nsrovGhLEPaisiwfwiQT7Z%2FubbhzbWaeiJKlFEynmi1Me4xZxqJRl%2FOTY6C%2Fz0xwwzZsPJOM6zqY1sdnzvaaeRPLXjoC1zCn&X-Amz-Signature=dc248e754ea3782983a0fec9a605173292d26665432007d7e87b515ac13b3538&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3V6JQ2W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqNVf3YPjGTDprl0DvG3GemotcakddTY0s0%2BbfalTBWAIhAILb%2BPnXda5mAgeKwvsNtGzFDhHT8Nbsu%2BWpMWJSR7PSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTqJZzJd2pBCP2MZwq3AOgT5%2BNgIE%2BS%2F36fQRSRF16yoBUOolMk2eGpWiwbux9%2FPUnNCxxE1H0sKD3pR%2B8jrre7z2HOumNzyUMwixv5CUXM1ATWdtRb%2BaIQdEpxiI0d34rlgDxqW4jri%2BdS9mZEip9i45zV9lzGEBQS3HCohI7Is91fegS1LBH5Wd5wxiDZNtHidr6TWEngrrzRjbOMIhxxgs8E%2Fs3VS2aO2aNB%2Bk%2BF9z2BaSnbxJVrgO%2FavXQx8vFW7kV2Y%2B8Hh4HiFM82kt302iPznzwPCAqKdnCiGiBzXoUuDB24%2F71%2F2O4FlxMU9NwH%2BHUmYGYtkwBCOiVUNYZJnLRjNObGVFckg718%2B4uryeir1lGNvzN7rco9RgK5UEo694jr%2BWtxzuW4H5JlDkfeOFksuB0RtAhud4%2BqqfXM003Tp2jGEUnn2thWlOVA6fKXDKbofR8a3FQZxEBgJoEgzjBQTC37UKduKzuP0k8uKcGjkhkebIXfSenhfF%2FMLVHLuTMSQxfBBRQZ32kzabzdwAn6NxEZM9R2tYd6TNVeiQPMnV5T0xp2LqV0vBCTRLa6nTac6h5iUKEm5Cz92P3LrjHzinYH9Fxvc2HlSoLBTSqMi1xrFtPV6r2nRccTXwSIsX8SUGNE8CYPDDa%2Bq3BBjqkAWZTpUXWZn9HZa%2BxeMqjK%2BNFtsfGcYPU9Bh3ec2Xc9Qnoev2tNyWPzQbMfTrLE1Ly9X2kVaeAj4M9giOax2Bnwp6E6N%2F7rvNOUufNqlMauHYxudmLXqEhRlFnuC8nsrovGhLEPaisiwfwiQT7Z%2FubbhzbWaeiJKlFEynmi1Me4xZxqJRl%2FOTY6C%2Fz0xwwzZsPJOM6zqY1sdnzvaaeRPLXjoC1zCn&X-Amz-Signature=b8c858e39584dcf7bd1da9ce1b66a5cd0275d815f2b43327ed04733b613fe671&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
