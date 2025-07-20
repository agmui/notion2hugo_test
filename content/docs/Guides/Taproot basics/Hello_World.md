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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5MGANZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpK4ikGR6b3%2FOQLTaDPJuf44EbCTtEQDEn1CVYMOjKSAiBSKhckBdMXb70RrTmRzVpxqBXYWWles%2BgNVZldT%2FGD0CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJYwareE5lN%2Fzn0VTKtwD%2BWYrS2pdILoKaRIMpCqEZdBwxVPLsEmhLQVqW1NXUNgoNy9N33xLnyUnJm5TK8YYPwBXYXT4cGGY68%2F%2Bh63E5Ne5OELbeUSkeZYqzTNG8Uyh1%2F7flHlD6GlfWXQ6P8EnT5tO2GV%2BXBChyNIXvhRoD88VX7zGsYKCmlKAOvP4zDo%2F3Lbrwy8vqqNU5uKXVCGqcSgZ74Uya9qacoMtTNuOzZXqhA8zQiI2ldbtqJORNe90UXJFXUOXD5HtLqwUgRdq7c7xun0lyR%2BwSxn%2BAoMAqT%2BG8pbNs2V5kmouTD1eVHf%2Fz9tu9V3BR3gfAcEsNGwrOZhfu7%2BlFUYTktJ9p7lOpagkL9IpNgwv6iROvy3RrVl7eHsBQz%2BEgIkvPQRPEG%2FRXTgW0SlT%2BHlOSA0js99Gh4GH0hPz6s4xluKNKjyFgFfmc6n1JUNvgsvniyAi6vvcVc09X3OAJBQXay0pstcBRZqDRAWPs5bTEQbGq3nOLZKj7fN3E6Aj7x6Dva3xCA9xTNLDHbMMFBmPhffDXRIgfsezB0ZSEPX6yjUHf1mv8JUs12dSpePLN7IxJ5XI91GsWarJE5mPbZM6oAslAP4UcobxvKfWUMMLWbWXg2%2BGOwrUrGN5rOpBfhm8rfgw49nzwwY6pgHhUhW7o4rj8a0cvwkjRqA7h7kxs0OARzEMKYN01h4MXr042dFevELJLuH%2BDLyKEVrvIqjvIngPvpk6Ck8YA5QZgzKAciAhVPmdyiPiiCeSEEXJy1zdbjXrhS6eVUz38tgUnhY9LvfFBRW%2FXR1C9QtPLhMX61FH1zF5gv0UefzCNo5uyUMxTyPektriXJe7XjJyWNFvWaO46lq8fcu9FS54%2FWl46uI%2F&X-Amz-Signature=8b11d784293b4cced48538293b3aa25e3e94991681cc642335940e7f7fa42702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5MGANZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpK4ikGR6b3%2FOQLTaDPJuf44EbCTtEQDEn1CVYMOjKSAiBSKhckBdMXb70RrTmRzVpxqBXYWWles%2BgNVZldT%2FGD0CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJYwareE5lN%2Fzn0VTKtwD%2BWYrS2pdILoKaRIMpCqEZdBwxVPLsEmhLQVqW1NXUNgoNy9N33xLnyUnJm5TK8YYPwBXYXT4cGGY68%2F%2Bh63E5Ne5OELbeUSkeZYqzTNG8Uyh1%2F7flHlD6GlfWXQ6P8EnT5tO2GV%2BXBChyNIXvhRoD88VX7zGsYKCmlKAOvP4zDo%2F3Lbrwy8vqqNU5uKXVCGqcSgZ74Uya9qacoMtTNuOzZXqhA8zQiI2ldbtqJORNe90UXJFXUOXD5HtLqwUgRdq7c7xun0lyR%2BwSxn%2BAoMAqT%2BG8pbNs2V5kmouTD1eVHf%2Fz9tu9V3BR3gfAcEsNGwrOZhfu7%2BlFUYTktJ9p7lOpagkL9IpNgwv6iROvy3RrVl7eHsBQz%2BEgIkvPQRPEG%2FRXTgW0SlT%2BHlOSA0js99Gh4GH0hPz6s4xluKNKjyFgFfmc6n1JUNvgsvniyAi6vvcVc09X3OAJBQXay0pstcBRZqDRAWPs5bTEQbGq3nOLZKj7fN3E6Aj7x6Dva3xCA9xTNLDHbMMFBmPhffDXRIgfsezB0ZSEPX6yjUHf1mv8JUs12dSpePLN7IxJ5XI91GsWarJE5mPbZM6oAslAP4UcobxvKfWUMMLWbWXg2%2BGOwrUrGN5rOpBfhm8rfgw49nzwwY6pgHhUhW7o4rj8a0cvwkjRqA7h7kxs0OARzEMKYN01h4MXr042dFevELJLuH%2BDLyKEVrvIqjvIngPvpk6Ck8YA5QZgzKAciAhVPmdyiPiiCeSEEXJy1zdbjXrhS6eVUz38tgUnhY9LvfFBRW%2FXR1C9QtPLhMX61FH1zF5gv0UefzCNo5uyUMxTyPektriXJe7XjJyWNFvWaO46lq8fcu9FS54%2FWl46uI%2F&X-Amz-Signature=2a6b5c1074a3b0f199863bbc4be1265c603c57ddeff1c14655ea399626a3e1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
