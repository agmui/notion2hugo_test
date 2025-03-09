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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5GGDVE7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCkeM6PPXs1tgXIUAB2UiMx7OfM13k6wKBu1lFAeMgMbQIhAKP00DeE%2Fk2eSrKlgkeYXUrowoVTqxs0y83lVSZDxLJpKv8DCHUQABoMNjM3NDIzMTgzODA1IgwUjgqBCrgQ8Y09XIoq3AOJhlu6yJ3Uwy0H1hYYNiCVv6IXiMG2IkYPLKZXD9FMv7BU6Rj46%2BkF7UOnRtVorL32DFuFNDoQEXWZFtumdkXIwGrimfVfii2Wct0SqaY7sgE9O2aqqEUOFf%2BG7RW%2FBM%2Bh8atszR7yFX17h4%2BCsaf3izO70WgkPnQ8cJuo5gsk%2FWCqiFAzhpJIDg54n7HnIRf3CWbSIQfPvkokjda6w54w8q2q06HNEGKopo5KdW4HrIx6%2FG31miDtjeFNp6%2B7PoSt5SpG96MraCWlDSf08eUWzE%2B530rhwVjUj%2BZ7ipaqX%2B%2B3HhH0PZ%2BhL1cjGpYaa2ow1SYneY1USY6PdM5TXo6NYVvv%2Bhh74WLQnxfWfPjkv22dVNm4u7KBtlQymIzMoVdDV0BZZhmse6HAplweLHuDsWNFPLcwmoJdKfch1Bea81CUTb4606lE5k14WlWejZbYm%2Fssp5urBgxxEtxln0r7GCNhBlAEK2s4lLwOjsS%2FXquwzmlHMD%2FHBKtxuQcCCfGYo3G%2Bds1ZymKPtX24YeQ9YHJ0xU7%2FL1%2Fom5bu67PNmbW93PPfoR5oZqr%2FUlidI4HTKSU0%2BBgKsJD740LyNL0CRjHFf6H27jckwT5V673fs9VYwyd7IQ919Ief9jDhkba%2BBjqkAV5mY2SFOMabVaRFS08DC5xOqqVF3mPyT7vLVany7cUNt9KdHD5qQMn4oCDxKh8wp7HkZzIv3RHYkb102KEf4YFTZz3oa8j4NhUtdfqqOku2wltIfTLbHn%2FND0G2sJF2IcsPiQ3eOJhzs03XWC8AHtxB13dTEwdQbvsto2xfAvxxaEvFVKf0jQQGLQgzQgyHJosoBEjZv%2FbwMZScsLYvGWt5IZy%2F&X-Amz-Signature=3cbad709d27ece5e0a5d7ff7931d2b236068fa28b94cfeb2cca4659143c0a426&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5GGDVE7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCkeM6PPXs1tgXIUAB2UiMx7OfM13k6wKBu1lFAeMgMbQIhAKP00DeE%2Fk2eSrKlgkeYXUrowoVTqxs0y83lVSZDxLJpKv8DCHUQABoMNjM3NDIzMTgzODA1IgwUjgqBCrgQ8Y09XIoq3AOJhlu6yJ3Uwy0H1hYYNiCVv6IXiMG2IkYPLKZXD9FMv7BU6Rj46%2BkF7UOnRtVorL32DFuFNDoQEXWZFtumdkXIwGrimfVfii2Wct0SqaY7sgE9O2aqqEUOFf%2BG7RW%2FBM%2Bh8atszR7yFX17h4%2BCsaf3izO70WgkPnQ8cJuo5gsk%2FWCqiFAzhpJIDg54n7HnIRf3CWbSIQfPvkokjda6w54w8q2q06HNEGKopo5KdW4HrIx6%2FG31miDtjeFNp6%2B7PoSt5SpG96MraCWlDSf08eUWzE%2B530rhwVjUj%2BZ7ipaqX%2B%2B3HhH0PZ%2BhL1cjGpYaa2ow1SYneY1USY6PdM5TXo6NYVvv%2Bhh74WLQnxfWfPjkv22dVNm4u7KBtlQymIzMoVdDV0BZZhmse6HAplweLHuDsWNFPLcwmoJdKfch1Bea81CUTb4606lE5k14WlWejZbYm%2Fssp5urBgxxEtxln0r7GCNhBlAEK2s4lLwOjsS%2FXquwzmlHMD%2FHBKtxuQcCCfGYo3G%2Bds1ZymKPtX24YeQ9YHJ0xU7%2FL1%2Fom5bu67PNmbW93PPfoR5oZqr%2FUlidI4HTKSU0%2BBgKsJD740LyNL0CRjHFf6H27jckwT5V673fs9VYwyd7IQ919Ief9jDhkba%2BBjqkAV5mY2SFOMabVaRFS08DC5xOqqVF3mPyT7vLVany7cUNt9KdHD5qQMn4oCDxKh8wp7HkZzIv3RHYkb102KEf4YFTZz3oa8j4NhUtdfqqOku2wltIfTLbHn%2FND0G2sJF2IcsPiQ3eOJhzs03XWC8AHtxB13dTEwdQbvsto2xfAvxxaEvFVKf0jQQGLQgzQgyHJosoBEjZv%2FbwMZScsLYvGWt5IZy%2F&X-Amz-Signature=2fed67f00358a84584b1fbf1335a771a5623d496aa2c36c7c6c601e226e88163&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
