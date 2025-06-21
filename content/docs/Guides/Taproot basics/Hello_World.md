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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRR3XYK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2zC3T9uv6foNpptqeVmgyNE90AHILjysVVwY%2F0WUTOAIgUk8pcSJorLmiCEsWC%2FKM2rSpXRC6cqaqHqxY9ZW%2F9N4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr5GYCEOJgsRKXjhSrcAyLXv7qPvE53k4wxlos0WfOnyYIrKSA9JArmRDYUwIRwoTvgxb5JpM5x7CNMqmWph71YME61tFtuEmVWM4ZI0J59oKRZ6Kt8fC5GYRbZTjmNs7zKzdLx2oV97STKkuJ4beO1W2T7vMdC22qqRHYJaUedwD3lkT9Rn1Oxi3S2ksxL6DghKgi5Mm0b2krc11FPfGLmXfdWfwAMAUC%2BEkDxA0NAi6Jj5awKeRkzAQEE0%2FSo2UBSHYHQgD3dJR0ap%2FK%2FR9byqjS9ZVgU3MKfD8RVIM1d2YWYFXnglvODoGg15H6MXWnYQSs7tOGa%2B5q658XiyaHPlMozRSzdkm5RwDl0y4RJU%2Bi2Q%2FFukUsdMeWYZFVJU%2ByWngT708vu4BDmfBrbYCImX%2BHVTMqvCZCloiWi2WWvgAgqldH6VHPf7oM4I6xNmrHoj6DlNyjYm7CvaH9Ahp3wPyaQMNZ67PII3JE6%2FxVIpoVYdUbgWL%2BBOIu7vP8if9bGHlWUxdAFfQQrWmN1tt7A3cS5Syvzoxt72ZXB2We1nTEulh5ypVkK1U9SYq%2ByzZn91%2Bcy0vXPo8umPL%2BxBYMZg4cFvbsFNM0tq9Pcx2Mcc415Wcewkn0hbXNJQX6Du4o3OisbMcUzDp4eMJ3%2F1sIGOqUBmdMlDRtNy2uPh9MMZ6omBcIHCrsgxeCmpDjYJtGtwh7LlBBh2nK55sQZU42u%2BjKxuEUJL2dEpDC7nkzeBXBrygtHS5wDsqx%2FAabxts8lThVUz0buJRW3mpGKY%2BZxUrRQsYHq7AlJ8sWhfppgLhPyz4P5%2F85EAvhjgacAjAxBGWKKbpc%2BBXxiM9SLZgfiVX1MNjXv8A93tuqq4JUpsEKeC22ejLzz&X-Amz-Signature=649103e43b6a0b797b0c726ddf2ae0950a63e6217733d94b8038f10570b21e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRR3XYK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2zC3T9uv6foNpptqeVmgyNE90AHILjysVVwY%2F0WUTOAIgUk8pcSJorLmiCEsWC%2FKM2rSpXRC6cqaqHqxY9ZW%2F9N4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr5GYCEOJgsRKXjhSrcAyLXv7qPvE53k4wxlos0WfOnyYIrKSA9JArmRDYUwIRwoTvgxb5JpM5x7CNMqmWph71YME61tFtuEmVWM4ZI0J59oKRZ6Kt8fC5GYRbZTjmNs7zKzdLx2oV97STKkuJ4beO1W2T7vMdC22qqRHYJaUedwD3lkT9Rn1Oxi3S2ksxL6DghKgi5Mm0b2krc11FPfGLmXfdWfwAMAUC%2BEkDxA0NAi6Jj5awKeRkzAQEE0%2FSo2UBSHYHQgD3dJR0ap%2FK%2FR9byqjS9ZVgU3MKfD8RVIM1d2YWYFXnglvODoGg15H6MXWnYQSs7tOGa%2B5q658XiyaHPlMozRSzdkm5RwDl0y4RJU%2Bi2Q%2FFukUsdMeWYZFVJU%2ByWngT708vu4BDmfBrbYCImX%2BHVTMqvCZCloiWi2WWvgAgqldH6VHPf7oM4I6xNmrHoj6DlNyjYm7CvaH9Ahp3wPyaQMNZ67PII3JE6%2FxVIpoVYdUbgWL%2BBOIu7vP8if9bGHlWUxdAFfQQrWmN1tt7A3cS5Syvzoxt72ZXB2We1nTEulh5ypVkK1U9SYq%2ByzZn91%2Bcy0vXPo8umPL%2BxBYMZg4cFvbsFNM0tq9Pcx2Mcc415Wcewkn0hbXNJQX6Du4o3OisbMcUzDp4eMJ3%2F1sIGOqUBmdMlDRtNy2uPh9MMZ6omBcIHCrsgxeCmpDjYJtGtwh7LlBBh2nK55sQZU42u%2BjKxuEUJL2dEpDC7nkzeBXBrygtHS5wDsqx%2FAabxts8lThVUz0buJRW3mpGKY%2BZxUrRQsYHq7AlJ8sWhfppgLhPyz4P5%2F85EAvhjgacAjAxBGWKKbpc%2BBXxiM9SLZgfiVX1MNjXv8A93tuqq4JUpsEKeC22ejLzz&X-Amz-Signature=86d5f004eb6d59b842362243cfb7280cbc5259dc10f61fab22d9630cee914696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
