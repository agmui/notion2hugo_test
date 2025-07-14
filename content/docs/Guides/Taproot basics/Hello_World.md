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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBLHKG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEZYSmb9C41%2FuYduRCnhe7R22uqJAYHxrN0LqS5%2FHR72AiABfdNt7VHMeHWPZ4%2FBzthlnT6tp9xWMsSAoU0I1fGHGir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVLwYYWoF8%2B0nhJmMKtwDlz8W2on6H%2BxdbxGhzEajxu5Rm1h5JZ6XnHbUDrS6g0Mh4Sqsp0tRN%2BVc2MXJAAYn0KgFxIYJUDeuoF5xXFXPaS4F3NY32nmDSoCveP6KAtFbgfJjrCmNlzOrDfXhdVyeCYm3YaUFOqi3hyYffhHygpAT9O7U29Tr6T0ohpL4MMEuzJY6tB4vXXcVAdan2SLXqlvysmzdGQZeEV%2FsU5SlwA960wywuxNl21mT%2FtrLOfSNF2NhpaWKR6pNgI0blatjd5gOqq0ykB1OqupCn1j4Nb5OMoS%2Bg2A2GvyU843LJBvqTgjIaO5V%2Bd5aE3AdAcYH6zvZGbYYrVpiIog4%2ByaJCREkl7PtcQHSkxn6KwfWnDth%2FMCNEZgKCEHhlIjxF7paNrLLlOJjaOKUseLpE9VJz%2FBWW4jDGd5Rch5h83Os73g4O%2F4qpC%2BByB1pFFRwZXDozDaKohx3S2QmiX6152hG6erOMPaAyWKlYmHjNVkkx3WIWeWF863pN27mk9w3Lrc4HgUdWhBLSsqDjZD4G0XGE6RQsR7YOCi4XoLKJxT26bJUWHSt46EXU29cB9kZogqSe0xgsUW1KjC2rui11MkSad94ugdM%2BqLD8nnUYuPG%2FTiMXipkFB%2FCWCo0c5cw8bHTwwY6pgEa3dYe%2BywQC7cCvNZIcQ3WENDHx6QKPC%2FUy6OPTbOyQk8F5C3d4e3%2F9H7ZmHvXNl9AD6zyYi3wnMAZd%2F75Kvt%2FZYptt3uMQpnLbIJnDes3a1N7rlqeEMLkHIl8ggYpLYiu9nCtc%2FTdpCum4W8s89JCxrgPQtTIYig1NG8skmj4%2F38nUqA3yjgE2vsfpHroN0MpkxHtLSU4b31KCTeT%2BACS39tUiKbl&X-Amz-Signature=b3dece7b86ecd6c310ba0ed1a3ee408c4ce37b28ed3828f398fe87e4b5be140f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBLHKG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEZYSmb9C41%2FuYduRCnhe7R22uqJAYHxrN0LqS5%2FHR72AiABfdNt7VHMeHWPZ4%2FBzthlnT6tp9xWMsSAoU0I1fGHGir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVLwYYWoF8%2B0nhJmMKtwDlz8W2on6H%2BxdbxGhzEajxu5Rm1h5JZ6XnHbUDrS6g0Mh4Sqsp0tRN%2BVc2MXJAAYn0KgFxIYJUDeuoF5xXFXPaS4F3NY32nmDSoCveP6KAtFbgfJjrCmNlzOrDfXhdVyeCYm3YaUFOqi3hyYffhHygpAT9O7U29Tr6T0ohpL4MMEuzJY6tB4vXXcVAdan2SLXqlvysmzdGQZeEV%2FsU5SlwA960wywuxNl21mT%2FtrLOfSNF2NhpaWKR6pNgI0blatjd5gOqq0ykB1OqupCn1j4Nb5OMoS%2Bg2A2GvyU843LJBvqTgjIaO5V%2Bd5aE3AdAcYH6zvZGbYYrVpiIog4%2ByaJCREkl7PtcQHSkxn6KwfWnDth%2FMCNEZgKCEHhlIjxF7paNrLLlOJjaOKUseLpE9VJz%2FBWW4jDGd5Rch5h83Os73g4O%2F4qpC%2BByB1pFFRwZXDozDaKohx3S2QmiX6152hG6erOMPaAyWKlYmHjNVkkx3WIWeWF863pN27mk9w3Lrc4HgUdWhBLSsqDjZD4G0XGE6RQsR7YOCi4XoLKJxT26bJUWHSt46EXU29cB9kZogqSe0xgsUW1KjC2rui11MkSad94ugdM%2BqLD8nnUYuPG%2FTiMXipkFB%2FCWCo0c5cw8bHTwwY6pgEa3dYe%2BywQC7cCvNZIcQ3WENDHx6QKPC%2FUy6OPTbOyQk8F5C3d4e3%2F9H7ZmHvXNl9AD6zyYi3wnMAZd%2F75Kvt%2FZYptt3uMQpnLbIJnDes3a1N7rlqeEMLkHIl8ggYpLYiu9nCtc%2FTdpCum4W8s89JCxrgPQtTIYig1NG8skmj4%2F38nUqA3yjgE2vsfpHroN0MpkxHtLSU4b31KCTeT%2BACS39tUiKbl&X-Amz-Signature=c2a28ff5a4cdd3b607f2307bf1380f7549395be03a6e7baccb66b2569395adb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
