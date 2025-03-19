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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTAJ537%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGUvUzz%2FCHDlc%2BAGRMR9TvGIj2%2BjyM8iNiBrmw9d3WAWAiEAxReZejH91klhyQsRqF5dY%2B6QzsF8O39avLNFVNDiQvcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJuofKg5%2FD7DlJgbGircA2shV4368Uyq89bg%2BmDqA01w5RGzJpo9zx8nGQuPsBgGuttINorNiRud8L4Kk5o%2FT7lLJE%2FR%2F9df6hzxH4fY0HjgtGdebMd4V3yamn%2FnauOKioqQ52za%2FBZQT9z2Didd34BGPm%2BcJS6X2V0d9a1eR9UjjoPqritFS%2F9jHCqSSQL9ru30BT%2FmVVsrRHiXnyVAnT00%2Fs9LKJPW%2B%2BYvnckOSyf4B3iyI9eggWcoK7qk%2BDfXUQIeWTxxHyu0w92YGtBIuFShtlLll6rpGLf%2BSQvjyPbsMWBmwV173SNKNwFP%2BK%2Fmyry%2FrYRC0oT6G%2FWf1ErXwdZrPamZMyUUu5EjcmDYMX%2FN4TcCBl%2FJ9FU4%2FDpe8bkJar754cHOFfsrYhqBszE1M%2FO%2BvEFdIA%2FNKkK2ZWC%2Be5Z3gpYs%2F3y9F799QbqeUkzmNFVrJ8z4h%2FGWzuOMyHqt2vHxiTXWlj9VaJlanp8zdcfm0GFIQ6bHkap2m%2BRbhbbSfccSpb5l28xJmnMgNU9ruqVCfp3%2F1%2Fn6iNXOmYIC4TjV20%2B3Jhxkssi1%2BvwFT9bCWF7iXHlxL75%2F817FVjh%2B9R4DuUYeq9jv95wKR7JNGi2brgeXAPHs57LhsFYfuCfQJ3eTk6jEwb5RuXBLMJ7Z7L4GOqUB6YbqUQYcdimTo1FAnjVw1cv5QUR5nQJ5KTXgHdS0SBvuVC0FZdKb0u6%2BZ2d06A0y7W8P9APSkczB33nEVlyk3nhTCkiVYEs2MsU6DA4PMM5Bis4l1Wlq%2BNYaVe8lJzYS4ypHM3Dx1n0RayCj6E6PPLTxhuwzMNFeeW4OPau8O3GPWFcNFCWhCUOKQfnLUd8ssAsl81njKoUj0z0f4721nKEbBUPa&X-Amz-Signature=e12588d57258951427917a3a7258872cc7744d11493cefb85b9c7efd7a42e9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTAJ537%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGUvUzz%2FCHDlc%2BAGRMR9TvGIj2%2BjyM8iNiBrmw9d3WAWAiEAxReZejH91klhyQsRqF5dY%2B6QzsF8O39avLNFVNDiQvcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJuofKg5%2FD7DlJgbGircA2shV4368Uyq89bg%2BmDqA01w5RGzJpo9zx8nGQuPsBgGuttINorNiRud8L4Kk5o%2FT7lLJE%2FR%2F9df6hzxH4fY0HjgtGdebMd4V3yamn%2FnauOKioqQ52za%2FBZQT9z2Didd34BGPm%2BcJS6X2V0d9a1eR9UjjoPqritFS%2F9jHCqSSQL9ru30BT%2FmVVsrRHiXnyVAnT00%2Fs9LKJPW%2B%2BYvnckOSyf4B3iyI9eggWcoK7qk%2BDfXUQIeWTxxHyu0w92YGtBIuFShtlLll6rpGLf%2BSQvjyPbsMWBmwV173SNKNwFP%2BK%2Fmyry%2FrYRC0oT6G%2FWf1ErXwdZrPamZMyUUu5EjcmDYMX%2FN4TcCBl%2FJ9FU4%2FDpe8bkJar754cHOFfsrYhqBszE1M%2FO%2BvEFdIA%2FNKkK2ZWC%2Be5Z3gpYs%2F3y9F799QbqeUkzmNFVrJ8z4h%2FGWzuOMyHqt2vHxiTXWlj9VaJlanp8zdcfm0GFIQ6bHkap2m%2BRbhbbSfccSpb5l28xJmnMgNU9ruqVCfp3%2F1%2Fn6iNXOmYIC4TjV20%2B3Jhxkssi1%2BvwFT9bCWF7iXHlxL75%2F817FVjh%2B9R4DuUYeq9jv95wKR7JNGi2brgeXAPHs57LhsFYfuCfQJ3eTk6jEwb5RuXBLMJ7Z7L4GOqUB6YbqUQYcdimTo1FAnjVw1cv5QUR5nQJ5KTXgHdS0SBvuVC0FZdKb0u6%2BZ2d06A0y7W8P9APSkczB33nEVlyk3nhTCkiVYEs2MsU6DA4PMM5Bis4l1Wlq%2BNYaVe8lJzYS4ypHM3Dx1n0RayCj6E6PPLTxhuwzMNFeeW4OPau8O3GPWFcNFCWhCUOKQfnLUd8ssAsl81njKoUj0z0f4721nKEbBUPa&X-Amz-Signature=cd4abf5b7465651eb1e42f97d0ac605037264367d13da05067cad6e0d329f486&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
