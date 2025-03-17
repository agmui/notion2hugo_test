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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTAEWW5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uxJt6rLYZeIsB%2BZQgU56sj4%2FakR7DcxoiU5sv3%2FMrAIhANc6OupcyR7dEkXzwVt1JOqgYYdE8yRrKtky%2FiQm1nZAKv8DCEgQABoMNjM3NDIzMTgzODA1IgyJp7G%2BDRbHIAwCLhsq3AOqcylGEuSi22e5Uvzh6QQlZ5W1nt8QTIvU%2Fq4fSVALmZocWyZSXSanlqusYcNWPmsKcDX81R6x802EhdRvZQwNILdBalpbjdcP0hgdCt6T39DzznT8By7PKrqkPanIUYv3e9T%2BsVIC95WiCXeUTw6%2FPXnYlwXEYWjKltMOAfzJWOgrP6%2BrPo6PeLIt5SbshTFjbRhiZYO%2B8wtwtz8C238LpgaDXoL8n0sqX9vKOE2ufE%2FifUB%2F3Lwwa6YSYTsg4hG%2FfLGo9is4PJCReA5HWWSBcRFcKA87G2bCNyyKiyAHkq494HWKZlRKaUmQu60t6fJVu%2F%2FWR7IZpc%2BN5KRHPez0DjfwGocc%2F3kYxqK6Lcyzdki9Q0MrWf1xOnIxZldu07eSi4x9hFPGnvtPZTq6iPNHqD2mEP8M8sQlr2zQOqTF%2FDsYW%2BoyxkhWYcB%2B66H%2BZSRYZjcHHa9RDCS2eh4B4quzsZMDIDUr5T9aiIpcbtpAV36Y4FPM7Nl9TbSc8UbSfUzz8bQtzs1TCyP775tlTmDEh%2FsDuYAS9E2XuL74I4BAw5molsVakg5WV8%2FmeaspdP9PABFbTydT0NIIO4xVprUbo5DCc1GwnIgJUCFBzxkDPGLmqRcyYsBJlE5ABDDz6eC%2BBjqkAQENDR5ZHGbEsfV4PkM1Yc0DraJNK13u%2BYzwNAPtiZnf5EwXg%2BQx0HwraFaila3jgUL0oK2y%2BvFI5Zjt%2Bj4C4xoPugMOuTYWWfSpOeqOn%2BRhE%2FkYnsyjaGGerEakH9LTKkTjj02XSojKwv12abXz%2F1tgyNUe8D2PxVHPJYHGkI6BU8DW5F%2BsomXbltMpcSn0whhNno3yqoybAmwtyPH15a%2Fo1PI6&X-Amz-Signature=d0ca5479ffc2bd1722294cbcd40a13629088c01530f08e65855fd961c979c0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTAEWW5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uxJt6rLYZeIsB%2BZQgU56sj4%2FakR7DcxoiU5sv3%2FMrAIhANc6OupcyR7dEkXzwVt1JOqgYYdE8yRrKtky%2FiQm1nZAKv8DCEgQABoMNjM3NDIzMTgzODA1IgyJp7G%2BDRbHIAwCLhsq3AOqcylGEuSi22e5Uvzh6QQlZ5W1nt8QTIvU%2Fq4fSVALmZocWyZSXSanlqusYcNWPmsKcDX81R6x802EhdRvZQwNILdBalpbjdcP0hgdCt6T39DzznT8By7PKrqkPanIUYv3e9T%2BsVIC95WiCXeUTw6%2FPXnYlwXEYWjKltMOAfzJWOgrP6%2BrPo6PeLIt5SbshTFjbRhiZYO%2B8wtwtz8C238LpgaDXoL8n0sqX9vKOE2ufE%2FifUB%2F3Lwwa6YSYTsg4hG%2FfLGo9is4PJCReA5HWWSBcRFcKA87G2bCNyyKiyAHkq494HWKZlRKaUmQu60t6fJVu%2F%2FWR7IZpc%2BN5KRHPez0DjfwGocc%2F3kYxqK6Lcyzdki9Q0MrWf1xOnIxZldu07eSi4x9hFPGnvtPZTq6iPNHqD2mEP8M8sQlr2zQOqTF%2FDsYW%2BoyxkhWYcB%2B66H%2BZSRYZjcHHa9RDCS2eh4B4quzsZMDIDUr5T9aiIpcbtpAV36Y4FPM7Nl9TbSc8UbSfUzz8bQtzs1TCyP775tlTmDEh%2FsDuYAS9E2XuL74I4BAw5molsVakg5WV8%2FmeaspdP9PABFbTydT0NIIO4xVprUbo5DCc1GwnIgJUCFBzxkDPGLmqRcyYsBJlE5ABDDz6eC%2BBjqkAQENDR5ZHGbEsfV4PkM1Yc0DraJNK13u%2BYzwNAPtiZnf5EwXg%2BQx0HwraFaila3jgUL0oK2y%2BvFI5Zjt%2Bj4C4xoPugMOuTYWWfSpOeqOn%2BRhE%2FkYnsyjaGGerEakH9LTKkTjj02XSojKwv12abXz%2F1tgyNUe8D2PxVHPJYHGkI6BU8DW5F%2BsomXbltMpcSn0whhNno3yqoybAmwtyPH15a%2Fo1PI6&X-Amz-Signature=14a800ba3078b03380d6cc9a9b9b38007286db6b06e51520ab142459c99b22d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
