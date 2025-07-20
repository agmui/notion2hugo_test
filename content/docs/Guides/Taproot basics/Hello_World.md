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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBMJPSD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXsyzoIYtO6Nf43HLOCyFX82WOtgqoZCqFS4WZhNO%2FPwIgCepRsY9Xl3RB2bz2r7e3%2BrFnYw0cthXHZ4iSHmJrbt0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZmq%2FBTTNn0R%2BAuaircA%2BIJ8LqnKJqCrFt%2FPp9M0oK4uOQfxZN7CL6rvdub7CDGUs%2B%2BV83%2BcLuUMk6pO9Dd7LumCfStWhxGVW5rXwPdgjX9YVWaf1mgnYwnLO8kz3EhUTUQGvLu7dAgn%2BaZfZi%2FyHV8B3g7aXNC6nU4lUawPx5N7KQW0hUEkYkcLszbPcy%2BaQYUcPeUAKUOF8dZ9sCNQUe5uK7tSLuCFwBrXOSqgvubFfbbHwHfFlZut0MCQzGM5l%2BluH29vrqmRjusepanUvUo6nFwrGVHoIN4%2Bd%2BFb6zaGz9jx6B2yReshHJgyJBDLhR9JLg7Ry1M44DnCPvHUTd99lEV6nyRXxK2%2FKVgiQY3jNxAwreTkju7Y0EGWPbRtIp9lUvB8i7KOGM29acdGIRRU8N52AxpxRHEHiNgtKDCDEvJHBV0BYKNvU7bhJveVYsQiD8szb%2BcNbcSvceih%2Bfy9ap8tl33egLrcjXcS%2BL%2BNjBY68u6C8cA0sf9oxohTGpCyeOquB7alRPwB4lIo%2BE5lDnA%2F%2BC4XaYqY2jpUkLrrV3qOaRWbybSNWX6ZYLuBfG%2BbYD%2FO3TCNGqfEfDxq2IqaJlSFM6f%2BTsqWlYMVGScBYa7wKmvjMhq302O%2Bpdx92%2BYHfIiE9Ls6XwrMLK78sMGOqUBcfy0tgdymv4LSWHBeXk3OgS6fekU2SBfVMcKkzMDRLVkfv0HpWGOn5fRitm0I37v8035XbwnZTgr5rYfyGIYQcOknaNq4gjQKcdgeTCfqjJkkdKbsNI9Dzmzvcse2vFL9neI71LvEYwGaxuQ6AAKDygCveZz0%2FBfLuA9%2FrrIANR9%2BO1B2zP3gve0qRJff0iJ5SwD0l0Ts1%2F4Rl9i2GJkDDFTpofy&X-Amz-Signature=0433081c7ed75d457b95a33a19cf2498feb40a510d2844e05b35f673beb1e13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBMJPSD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXsyzoIYtO6Nf43HLOCyFX82WOtgqoZCqFS4WZhNO%2FPwIgCepRsY9Xl3RB2bz2r7e3%2BrFnYw0cthXHZ4iSHmJrbt0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZmq%2FBTTNn0R%2BAuaircA%2BIJ8LqnKJqCrFt%2FPp9M0oK4uOQfxZN7CL6rvdub7CDGUs%2B%2BV83%2BcLuUMk6pO9Dd7LumCfStWhxGVW5rXwPdgjX9YVWaf1mgnYwnLO8kz3EhUTUQGvLu7dAgn%2BaZfZi%2FyHV8B3g7aXNC6nU4lUawPx5N7KQW0hUEkYkcLszbPcy%2BaQYUcPeUAKUOF8dZ9sCNQUe5uK7tSLuCFwBrXOSqgvubFfbbHwHfFlZut0MCQzGM5l%2BluH29vrqmRjusepanUvUo6nFwrGVHoIN4%2Bd%2BFb6zaGz9jx6B2yReshHJgyJBDLhR9JLg7Ry1M44DnCPvHUTd99lEV6nyRXxK2%2FKVgiQY3jNxAwreTkju7Y0EGWPbRtIp9lUvB8i7KOGM29acdGIRRU8N52AxpxRHEHiNgtKDCDEvJHBV0BYKNvU7bhJveVYsQiD8szb%2BcNbcSvceih%2Bfy9ap8tl33egLrcjXcS%2BL%2BNjBY68u6C8cA0sf9oxohTGpCyeOquB7alRPwB4lIo%2BE5lDnA%2F%2BC4XaYqY2jpUkLrrV3qOaRWbybSNWX6ZYLuBfG%2BbYD%2FO3TCNGqfEfDxq2IqaJlSFM6f%2BTsqWlYMVGScBYa7wKmvjMhq302O%2Bpdx92%2BYHfIiE9Ls6XwrMLK78sMGOqUBcfy0tgdymv4LSWHBeXk3OgS6fekU2SBfVMcKkzMDRLVkfv0HpWGOn5fRitm0I37v8035XbwnZTgr5rYfyGIYQcOknaNq4gjQKcdgeTCfqjJkkdKbsNI9Dzmzvcse2vFL9neI71LvEYwGaxuQ6AAKDygCveZz0%2FBfLuA9%2FrrIANR9%2BO1B2zP3gve0qRJff0iJ5SwD0l0Ts1%2F4Rl9i2GJkDDFTpofy&X-Amz-Signature=2dd093a0ce0bf170c83f2d9dc98c97457e92d1435b75db082ddac809938d6fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
