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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG2PU3LA%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFNmNjtw17IYiuJP%2FqRdwZLEbgFXvgCrwIVXz4H6N3yqAiEAvIdIOsnB69VDSB6f0rcPA0zA9xg3rQxxu7Gza%2Bg7CjAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMDGvucLv2JUXYTycSrcA9VIIpCLNBv%2FvI%2BfE92SUhW774wWfq%2BPcUMeXG6M5Fi0JNENfATzjWnIfllMRffb1tEON3HTJYbpy4RW5Te0MG5b5M9jf1jiYFKW97Fl0F%2BMESkfFGYoNjrrkSVLhB7ua8DwGLgBIS5hYjReYYnF3EBKwTcqnfCIUAVk5garWJt%2BJ654CQKT%2FQ4gQeNKw4F8PbQcf0DVgWYRHiDCfyzZY77nXMlAdfNEmsd5bmljC4DW%2BeI%2BZLvtjuxufm1EMqQ%2BfWYUwW7CD5FGBvfTVBxkVXiSWHuFwwcB%2FshyiNOy7uMIgSk3uDukXK8rrwjlMUp5514YNiVqssibjOZIqcT7Gm9uSQywYBBQhMfFtaozjseYbVq82crTC24fQHCex7ZxBGCsXwzELNPOAA6zTm6bTx32T17MmljnYduF013hyS6uGpAHkDp9KEfj9kCOzRZ24LxunjOSxJhQQoUAao2d0n5JktTZUdYE3zM6mDrifiHN97SmzzoMDiMfFzip97JF%2BTYMZ6r54gbVI344RpnpSVR97FgfQADlsG5oR2kN%2FXqEJ%2F7dz1W%2BplyUQJs%2BanTqvkhIjtJWLkx%2BRXuGihLhhtBfPzZamVn1JBbqWpBmtnFlq8r6GfM%2FQfgYXbw0MMurm88GOqUBGoV4PfOkDnM8BZLJ1a%2B2oghVhNZi31X605FFM53a2ZqauMyFHeOFcyZIIqjIzdbwtMgWsNb8mapO7otCo36hZI2AcLoj3sTBbzQ87S0RnrngFbgOF2yn8aQ7Z09h%2Bb9y%2FBGs%2FJan8wysUJJ7yapWc0HsXQ7cLtoY7N4ayblskrmA83EjYWwlcJiBhuVkwBbJc1iwPUtmV%2FK8fs6rjuB3eoAYCkAQ&X-Amz-Signature=0a81f8f31e402bfdff87005a57644189c8924ba2641325a2946c2773ab2a47ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG2PU3LA%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFNmNjtw17IYiuJP%2FqRdwZLEbgFXvgCrwIVXz4H6N3yqAiEAvIdIOsnB69VDSB6f0rcPA0zA9xg3rQxxu7Gza%2Bg7CjAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMDGvucLv2JUXYTycSrcA9VIIpCLNBv%2FvI%2BfE92SUhW774wWfq%2BPcUMeXG6M5Fi0JNENfATzjWnIfllMRffb1tEON3HTJYbpy4RW5Te0MG5b5M9jf1jiYFKW97Fl0F%2BMESkfFGYoNjrrkSVLhB7ua8DwGLgBIS5hYjReYYnF3EBKwTcqnfCIUAVk5garWJt%2BJ654CQKT%2FQ4gQeNKw4F8PbQcf0DVgWYRHiDCfyzZY77nXMlAdfNEmsd5bmljC4DW%2BeI%2BZLvtjuxufm1EMqQ%2BfWYUwW7CD5FGBvfTVBxkVXiSWHuFwwcB%2FshyiNOy7uMIgSk3uDukXK8rrwjlMUp5514YNiVqssibjOZIqcT7Gm9uSQywYBBQhMfFtaozjseYbVq82crTC24fQHCex7ZxBGCsXwzELNPOAA6zTm6bTx32T17MmljnYduF013hyS6uGpAHkDp9KEfj9kCOzRZ24LxunjOSxJhQQoUAao2d0n5JktTZUdYE3zM6mDrifiHN97SmzzoMDiMfFzip97JF%2BTYMZ6r54gbVI344RpnpSVR97FgfQADlsG5oR2kN%2FXqEJ%2F7dz1W%2BplyUQJs%2BanTqvkhIjtJWLkx%2BRXuGihLhhtBfPzZamVn1JBbqWpBmtnFlq8r6GfM%2FQfgYXbw0MMurm88GOqUBGoV4PfOkDnM8BZLJ1a%2B2oghVhNZi31X605FFM53a2ZqauMyFHeOFcyZIIqjIzdbwtMgWsNb8mapO7otCo36hZI2AcLoj3sTBbzQ87S0RnrngFbgOF2yn8aQ7Z09h%2Bb9y%2FBGs%2FJan8wysUJJ7yapWc0HsXQ7cLtoY7N4ayblskrmA83EjYWwlcJiBhuVkwBbJc1iwPUtmV%2FK8fs6rjuB3eoAYCkAQ&X-Amz-Signature=ba2f20b76f349d759f927f3f003c09a4a7869fe9bd759f4343a8e12c0a271d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
