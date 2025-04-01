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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKBKJFW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCWEKuzEgFxKnLJp9xDFkBvxv3C9veuiYwWDYYDta5lZAIgRHN9pFFKK7Iotu4OTXIvSXChFTYgsrFxbiYAqFVppasqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfj4xOQwwpC8r5PircA%2Fhjl6ABdd227keGXBgqyXGpGP%2FzcdDj3w8wR6IWmrux6%2FvoXs9n4pJKd3xnPBxRpKSYnpu8r7AGpAjNbjiIdfGbRkefcVQVd3UGkDF%2BbbJUCQhi8HUSnbUWFi9wzZnxsYhYq4MsJQAM6xxJpoh2dHO0kb4pWgmpQl1ry22wgCdh%2BrkMNkfsa4p53oYzk2WY9v9ZrvPavN5b5vkAfB7yQD5T%2FsoeKFHHk5GyArLGyvQtdnfXvcmJ5lZxXZK2dcFMLw6gu7pyZeYptXOZmQg1vr3WPV%2FLqvwdXqCfRAHXF5v1ec1nq82mZkn0sOewiMGKkzQ7Xg2lJlUzqH5oSi5OJP6XH3UDcVxdCb7bz6nt9QuSm0urlSaX8LROYp1lPWDf8lvGy9opJXOz1yK9FGyhqjtGQUr7p5yt5EG%2BFJVl637KMvUBK36Ba87zon0UQLGdj5WFuPOvCa8i5i8SFjLJIv8SR8PJ9J05hLAtE7DiHJTsg%2FdN1ZkEIA41jziYCkhRsRo54k4B4ziprVBkSZQWtAZWF9xMWBzm1biiKbLC783zcsTDmleW2%2FO9mCe8SdMMYWN8AOqvq87OLYSm5mT7DGLRcmh6SEfsmbsWeuee75WoaYLG8zELlVPqQTHTMPecr78GOqUB%2FhFh%2FLG%2By27OnvdA4meqjyQEY%2FQs4Ajuc0FfLksOZIhAF4CDXH8oygOnQ7cyk%2F8y6IUDOnTPqFk94A9w5KUVpq0xELZo0yDoxfpV1UvBgkqb%2FTCUzriKTLGK8vDLDD4A5vSiGbb%2B8b2Nd%2Bg3VxE817JBSZP2pL88iN2EPlTbx4FX%2Fon6DRiFCq283Jn28qdOU1gQJ1U0BD%2Bbo8BiOa4mp%2FPlmNzA&X-Amz-Signature=4f00cebc1d0e1f13705e32d32483dfbf1ef24de0e10990ccfaaff07e5785c3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKBKJFW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCWEKuzEgFxKnLJp9xDFkBvxv3C9veuiYwWDYYDta5lZAIgRHN9pFFKK7Iotu4OTXIvSXChFTYgsrFxbiYAqFVppasqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfj4xOQwwpC8r5PircA%2Fhjl6ABdd227keGXBgqyXGpGP%2FzcdDj3w8wR6IWmrux6%2FvoXs9n4pJKd3xnPBxRpKSYnpu8r7AGpAjNbjiIdfGbRkefcVQVd3UGkDF%2BbbJUCQhi8HUSnbUWFi9wzZnxsYhYq4MsJQAM6xxJpoh2dHO0kb4pWgmpQl1ry22wgCdh%2BrkMNkfsa4p53oYzk2WY9v9ZrvPavN5b5vkAfB7yQD5T%2FsoeKFHHk5GyArLGyvQtdnfXvcmJ5lZxXZK2dcFMLw6gu7pyZeYptXOZmQg1vr3WPV%2FLqvwdXqCfRAHXF5v1ec1nq82mZkn0sOewiMGKkzQ7Xg2lJlUzqH5oSi5OJP6XH3UDcVxdCb7bz6nt9QuSm0urlSaX8LROYp1lPWDf8lvGy9opJXOz1yK9FGyhqjtGQUr7p5yt5EG%2BFJVl637KMvUBK36Ba87zon0UQLGdj5WFuPOvCa8i5i8SFjLJIv8SR8PJ9J05hLAtE7DiHJTsg%2FdN1ZkEIA41jziYCkhRsRo54k4B4ziprVBkSZQWtAZWF9xMWBzm1biiKbLC783zcsTDmleW2%2FO9mCe8SdMMYWN8AOqvq87OLYSm5mT7DGLRcmh6SEfsmbsWeuee75WoaYLG8zELlVPqQTHTMPecr78GOqUB%2FhFh%2FLG%2By27OnvdA4meqjyQEY%2FQs4Ajuc0FfLksOZIhAF4CDXH8oygOnQ7cyk%2F8y6IUDOnTPqFk94A9w5KUVpq0xELZo0yDoxfpV1UvBgkqb%2FTCUzriKTLGK8vDLDD4A5vSiGbb%2B8b2Nd%2Bg3VxE817JBSZP2pL88iN2EPlTbx4FX%2Fon6DRiFCq283Jn28qdOU1gQJ1U0BD%2Bbo8BiOa4mp%2FPlmNzA&X-Amz-Signature=82c0fffcf802e74bc93571a3bb40438fa0c9bb610ef3745c1baed6fc6101e53e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
