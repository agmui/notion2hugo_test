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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J4GCKP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIq3ixLI5sBe7Zz8bMaIdI7ZRUrDPnFIscBy9zTM9AKQIhAJfUMi91wjNl69aFtdnJJObsopvj2ELRxCXrzNhvi2XYKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx3e2OedRtCRhmFO0q3AN3vgvppDCwvu4Bl8rL2g8lXpE%2FEldf1DdsUTJY%2BPqu%2BEkS%2FngesEv6acOl52jn%2FV1hw5xyGpaYPGt9cM7BMgN7y2Yac8P3xoCjjchRQ2buQ17QlxHS7PLmKXfEg2a2GZbr68szF9SdWQ6RQA48VZkkOCFRijXMn044zLpFG1kUa%2BoPm0Ryv94%2FnvSeQeQgin2MgNHtVssJ5Sl6lirvBLyrzwoOpaH0AeeydTVS80PnoduUcDfL6rjOho9gzRfzqpURNwJ0m01vaYcDVBCocREBUBFX6leSrnLDWQE6SrZRsCubs3fDBZZoOVRl9oMdkmuF3ajc4lMKNwdamuwwfEaJjg4oxhCD6AFOTPw9uMXJ6fMXT4UnamKNlG8A6nWIg3GxwUpw33eBWbkCbsUf8AXgz%2BAstKK88ROAJySE%2BhVnKSBiKEw2C7C3iYCIUQL42O6ZBXG0NEDbCo85UYlS5Bbx4tQLNvNOS5NuvvFCCADFNrjMiHxxrug7mZk9Kpmwj%2Bm97Hq0mFcwKnvUarIJ84iBIhYpsfVkTWJ1%2BL1I3OMFo3WFSnm9%2F8miyPKxScDvfZ656HIO53ypjuV%2Bjl1ZB%2FEZACqOkOxz09eGdDGMg66WRbBB2L8oRY8fM0XH4jCyxYHDBjqkAS6jnR7oSBQfnwkjxSrHb7WJUo4gXALe%2FErURBfgIabqhFM%2Ft1QKmPAzeG4cHltRYDzOp1gXmnofvXH2%2Be8RiWozle57YjXMPs47qNfdd%2BA%2BiUr4Q%2BrinrM4eW1J4cN0XG7sC2%2FAXvWPZ%2BApjmYBu4WCwzaSkeiehKPKf7qeX4xG9FQherRarfWZ1HfjRYnCgu48QCmvRQSxX2EBnh3RDk818Eeq&X-Amz-Signature=3180d5a17b8b4c1a6f2445627faa5ea00051868220fb57ee443f6a0b09cb037c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J4GCKP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIq3ixLI5sBe7Zz8bMaIdI7ZRUrDPnFIscBy9zTM9AKQIhAJfUMi91wjNl69aFtdnJJObsopvj2ELRxCXrzNhvi2XYKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx3e2OedRtCRhmFO0q3AN3vgvppDCwvu4Bl8rL2g8lXpE%2FEldf1DdsUTJY%2BPqu%2BEkS%2FngesEv6acOl52jn%2FV1hw5xyGpaYPGt9cM7BMgN7y2Yac8P3xoCjjchRQ2buQ17QlxHS7PLmKXfEg2a2GZbr68szF9SdWQ6RQA48VZkkOCFRijXMn044zLpFG1kUa%2BoPm0Ryv94%2FnvSeQeQgin2MgNHtVssJ5Sl6lirvBLyrzwoOpaH0AeeydTVS80PnoduUcDfL6rjOho9gzRfzqpURNwJ0m01vaYcDVBCocREBUBFX6leSrnLDWQE6SrZRsCubs3fDBZZoOVRl9oMdkmuF3ajc4lMKNwdamuwwfEaJjg4oxhCD6AFOTPw9uMXJ6fMXT4UnamKNlG8A6nWIg3GxwUpw33eBWbkCbsUf8AXgz%2BAstKK88ROAJySE%2BhVnKSBiKEw2C7C3iYCIUQL42O6ZBXG0NEDbCo85UYlS5Bbx4tQLNvNOS5NuvvFCCADFNrjMiHxxrug7mZk9Kpmwj%2Bm97Hq0mFcwKnvUarIJ84iBIhYpsfVkTWJ1%2BL1I3OMFo3WFSnm9%2F8miyPKxScDvfZ656HIO53ypjuV%2Bjl1ZB%2FEZACqOkOxz09eGdDGMg66WRbBB2L8oRY8fM0XH4jCyxYHDBjqkAS6jnR7oSBQfnwkjxSrHb7WJUo4gXALe%2FErURBfgIabqhFM%2Ft1QKmPAzeG4cHltRYDzOp1gXmnofvXH2%2Be8RiWozle57YjXMPs47qNfdd%2BA%2BiUr4Q%2BrinrM4eW1J4cN0XG7sC2%2FAXvWPZ%2BApjmYBu4WCwzaSkeiehKPKf7qeX4xG9FQherRarfWZ1HfjRYnCgu48QCmvRQSxX2EBnh3RDk818Eeq&X-Amz-Signature=180b541bdc08b13502e610a21d4cc0e5010ba6492910f6a143de39009f3bf42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
