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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6GP66P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeV6dynoKAOaftKTYYsTpm%2FlaeuFJudQp6pY1HwlB14AiEAyIw1FXsgZU6lriN13Ad2c6DJ0l3XUZ4O%2FaiNXDlj9GAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIm1W61DP%2Byp5Xr%2BCrcA6lvSz2CgOmWYG3QElJ9IWVzH1a5ae7UElNqlxdpgNw2Xr19eCOe1lltiISPhfPFelULt2BQ%2Bc%2BQkT2eOfMjdIAp5NeoTawP2%2FJpaOVm2i9QY%2Bw%2BmNOFOdUqLHSPvJUVpA6p9lLZjNf%2B34JGoMlqKj5bkMMJI%2BUkCVn%2BT%2B6pD4N7%2FgI1XgIDmQVByJ3EN2EFK5za1EgIamIVzUYwufjXdXBvlbrm5LkFAYZWxJnnz%2FEnd1uEKh2C3UTKH8X%2FxD5uj9WK%2F93EKaC02K2xmYIzAzbdZKEH0gJd4K4ypdOnqqc58nuk7OXhWvShvjFdRZ%2FKRNcd5pV0IwgvSOQftFNvjD2BJeO0OnV8N9CEcct8D%2BJlSygwwKLM6a%2F9zNI%2BUsjGPaVuH2XWXKHnX4v898kK0OWlZUlPE%2FJvWtoq83ctU8pkz9ja8FvxN%2FJGecRG%2BaLSdELzAM1Qo0adRL2aqeeS86qzsHnkfUuEkvhzKkFvRbKIAveYDzPH5ZHgZKPmlsxj%2FUbpV4T387LgfBYEK%2FEXEyEpJ8oLI55kA8wWgguNXAp40Ck%2FSbItJ9SsmQv59hE1kdI%2FkkBCaHOseL%2FIRZD42BvZ5VEXyfTgItFpVr%2BJaZVRzv3Gg5IM1tCSkAbfMNjLgb8GOqUBvKd3b6TzGNH4maEaF5G9bufCoOd8VgACqxUDLvIlPCfQKWWJ5aqAuJqWbyctPAskV8Tg1LOjc%2BR25aVv5OFJ2%2BTJqfsfbcjM0uMFYPPZq711qkTb7DomRlDY7JVAXVIZzP6uHBpKEM56B7EKwt21IPduAF32Pf5G0oDwO9pTJa5fuOLVGd%2FLqy3rtQ1EJhPwYo1nsLZkQrEotnYonXw2rWCiTGOw&X-Amz-Signature=7595de61c1780692e51851f6471e1691e10520622660002f51f82b3897bf5ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6GP66P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeV6dynoKAOaftKTYYsTpm%2FlaeuFJudQp6pY1HwlB14AiEAyIw1FXsgZU6lriN13Ad2c6DJ0l3XUZ4O%2FaiNXDlj9GAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIm1W61DP%2Byp5Xr%2BCrcA6lvSz2CgOmWYG3QElJ9IWVzH1a5ae7UElNqlxdpgNw2Xr19eCOe1lltiISPhfPFelULt2BQ%2Bc%2BQkT2eOfMjdIAp5NeoTawP2%2FJpaOVm2i9QY%2Bw%2BmNOFOdUqLHSPvJUVpA6p9lLZjNf%2B34JGoMlqKj5bkMMJI%2BUkCVn%2BT%2B6pD4N7%2FgI1XgIDmQVByJ3EN2EFK5za1EgIamIVzUYwufjXdXBvlbrm5LkFAYZWxJnnz%2FEnd1uEKh2C3UTKH8X%2FxD5uj9WK%2F93EKaC02K2xmYIzAzbdZKEH0gJd4K4ypdOnqqc58nuk7OXhWvShvjFdRZ%2FKRNcd5pV0IwgvSOQftFNvjD2BJeO0OnV8N9CEcct8D%2BJlSygwwKLM6a%2F9zNI%2BUsjGPaVuH2XWXKHnX4v898kK0OWlZUlPE%2FJvWtoq83ctU8pkz9ja8FvxN%2FJGecRG%2BaLSdELzAM1Qo0adRL2aqeeS86qzsHnkfUuEkvhzKkFvRbKIAveYDzPH5ZHgZKPmlsxj%2FUbpV4T387LgfBYEK%2FEXEyEpJ8oLI55kA8wWgguNXAp40Ck%2FSbItJ9SsmQv59hE1kdI%2FkkBCaHOseL%2FIRZD42BvZ5VEXyfTgItFpVr%2BJaZVRzv3Gg5IM1tCSkAbfMNjLgb8GOqUBvKd3b6TzGNH4maEaF5G9bufCoOd8VgACqxUDLvIlPCfQKWWJ5aqAuJqWbyctPAskV8Tg1LOjc%2BR25aVv5OFJ2%2BTJqfsfbcjM0uMFYPPZq711qkTb7DomRlDY7JVAXVIZzP6uHBpKEM56B7EKwt21IPduAF32Pf5G0oDwO9pTJa5fuOLVGd%2FLqy3rtQ1EJhPwYo1nsLZkQrEotnYonXw2rWCiTGOw&X-Amz-Signature=6a0f330326a38156714d4aa26ba1500bc0552b20c82e5d04fb8166387f2438a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
