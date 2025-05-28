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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RL36ETK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0i95dHT8IlV3bynzSbFQbb8n8BbnpT2hcrFVHtZWUCAIhAJD5acktUOHxMENYE%2FUs%2F%2BBeehXNDS2SQnuFdl4bHYhBKv8DCGkQABoMNjM3NDIzMTgzODA1Igw5mjMXeWDLEnUTVVMq3AMaIKX%2BTk1H7eyO8R%2BvXIJ9RpYb3Rq4w2FRanDbl%2B%2Ba%2B02Q3e%2BqHLLxOA8QF44G%2FX8Otdg1295XJbOKPfpPCmG%2Fv53rQxEW3nlSvkrs2rWoTvF8tgbgHCp5ElhTxa1TFDkr2Lo0dpBpR77eFtlRy5XZkwSXUM0GGa9%2BUlcUZXHNPsiuSnbjOLPKVHNlKJpvOxcJ5j%2FM6JbOeXg2QPb5KkRxr8fzRVuwZq909z%2Bcjqqmy3mW3EkL1dcpy5Gyt0KrhN3UZOQz%2BjTWDhLrBSN%2Fy1PfJ3mLqLKt0Umi4wQyga4pLzDMcwa4e%2BP%2FypTxvLXxHWqeQ0ipM64PfN%2Ft0iziOI8Z7Yxhyv0hoc8%2FxxQr6BLEqZ2r8vj1OfOghohn2js91HbCaPRpOAd%2B5Iug4dpCAL8W3ziWHE%2FybvkDJc3tW7PZ%2BgOGvIeYpSuLW98nZ0FawE9ryruRvFYvRrzZe9mQlg3eioMHpl5sC72K91E0p23LT0wgkDh7JoIehmVmgrfU2vDqfo%2BUJa2C42i%2B06FoeCSV3cV2wx2y9tF%2FD%2FziwxS1BDis0f3ENTqtvy5TK2QmBCU%2B7TiQIyh1xjhJDgDgH9UcW%2FxVKCr2WAmuSGpBn9Wpxm89L2CV0HfENMN8bTCQpNnBBjqkAbY9pM1ENm0jBzGfnzLoHlp22dOJKcwLjoXEG0pBSAExLw1vYAe%2F3%2FrcJz2k%2FZAHt7i2WvAm01JyTejXNGUZPOuW%2B6t9LWXlynvnr0DbldeHibzEnwSJbNOP16HaNv%2Fpq6NlDki4FoGezWEt8F%2BoXhWrzDo2RP5GjpDu2PT5paihBP63WhAvh78Iw5LZC%2FFm%2BeRmfiZbNO3nth9QmbGbxJ2tu6rw&X-Amz-Signature=caaae45841c69a4ded11276e8e952a4a4db589c07634f712b5ec88fad6819fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RL36ETK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0i95dHT8IlV3bynzSbFQbb8n8BbnpT2hcrFVHtZWUCAIhAJD5acktUOHxMENYE%2FUs%2F%2BBeehXNDS2SQnuFdl4bHYhBKv8DCGkQABoMNjM3NDIzMTgzODA1Igw5mjMXeWDLEnUTVVMq3AMaIKX%2BTk1H7eyO8R%2BvXIJ9RpYb3Rq4w2FRanDbl%2B%2Ba%2B02Q3e%2BqHLLxOA8QF44G%2FX8Otdg1295XJbOKPfpPCmG%2Fv53rQxEW3nlSvkrs2rWoTvF8tgbgHCp5ElhTxa1TFDkr2Lo0dpBpR77eFtlRy5XZkwSXUM0GGa9%2BUlcUZXHNPsiuSnbjOLPKVHNlKJpvOxcJ5j%2FM6JbOeXg2QPb5KkRxr8fzRVuwZq909z%2Bcjqqmy3mW3EkL1dcpy5Gyt0KrhN3UZOQz%2BjTWDhLrBSN%2Fy1PfJ3mLqLKt0Umi4wQyga4pLzDMcwa4e%2BP%2FypTxvLXxHWqeQ0ipM64PfN%2Ft0iziOI8Z7Yxhyv0hoc8%2FxxQr6BLEqZ2r8vj1OfOghohn2js91HbCaPRpOAd%2B5Iug4dpCAL8W3ziWHE%2FybvkDJc3tW7PZ%2BgOGvIeYpSuLW98nZ0FawE9ryruRvFYvRrzZe9mQlg3eioMHpl5sC72K91E0p23LT0wgkDh7JoIehmVmgrfU2vDqfo%2BUJa2C42i%2B06FoeCSV3cV2wx2y9tF%2FD%2FziwxS1BDis0f3ENTqtvy5TK2QmBCU%2B7TiQIyh1xjhJDgDgH9UcW%2FxVKCr2WAmuSGpBn9Wpxm89L2CV0HfENMN8bTCQpNnBBjqkAbY9pM1ENm0jBzGfnzLoHlp22dOJKcwLjoXEG0pBSAExLw1vYAe%2F3%2FrcJz2k%2FZAHt7i2WvAm01JyTejXNGUZPOuW%2B6t9LWXlynvnr0DbldeHibzEnwSJbNOP16HaNv%2Fpq6NlDki4FoGezWEt8F%2BoXhWrzDo2RP5GjpDu2PT5paihBP63WhAvh78Iw5LZC%2FFm%2BeRmfiZbNO3nth9QmbGbxJ2tu6rw&X-Amz-Signature=222fe114991669aa582f3413f307a6de73059d9dbba87a97246d00cef2e07d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
