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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USPNVG7R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDxAHtk8F%2B%2FNUThgZ9vge%2FbrgK1nzvU6%2FtRDPoB30YsVQIhALCSPkkG7GnozmRuaXknXENwzRiYT38o%2FZg5xlPdyQFjKv8DCDUQABoMNjM3NDIzMTgzODA1IgzucFd7TjsRjJXKZNoq3AOAzbRlmpUYJZEsOSOZMkH%2FJqrfPruyzuUOWzVobM7mZI5sC3hckqc5rYB15qIeolUJF1uoKWPnaXLx9Oe0dTxXFOTK0MoULc3fDhp6Sr2%2Be4DJ8EzWTIarc4j%2FQ0trOuyiEU7HE%2F3qXsj9EqmnmWTfr6GbSUg4wwUpt42CkZuYDvkux%2F4Jn9YX5THz4TMSS1WUjxfnwoceL62TeIoIus455D94Ov0GfBllCIJlkvrP%2BVQxlX6%2BTAGnWpBexAirTUvMJdiob97DobAeaP4XjOWEU1jZzd58BBpJo%2FovlWGXicShPE2HQvQcqxrGuCHLiNqNE4TyibKuPZESGRyR7T9U6xgzLAZgLXWZKxGxYea%2B6umPQLPt9P3JqGkgoSQl3%2FDtZ57VQH66aRveRCj09Oqzrs4OTzurBWoFYBePuKVoT9hvnpsHx2mjWYiPFP7c%2FZkQEiJnZV94Y5Ld%2FfM%2Fe4uxXgx4KR5VCBl3iL0G7uT9e2QYNy5kPLvrYWKYyxqKnNcwBXHbg2w7CWbcQUTNq%2FIu8%2BILlPxxf%2FpgUic1oD3TXov4sfJeR9Olw9mWbOcqTmnGc5BHnrc%2BS%2F6k8QH8wo%2FC4DyHBD3TbfJ0vapkdvUI28j5fP7ZhA5vau3DdTCU9c3BBjqkAZUiwAkMLBa%2B1AOC84p4WRVPmTjeXxeIbK57JAN6Q8%2BCRGFbEQXASZ5GUSunb8zOZADUQROh%2BGjhvK0jj1RvGl1GPJZ8v7NJkZsm6%2Ff7OrjpQfWb5Ep3Wdzt%2BKmurV2bkmpSoBVEitokeJ34w5PVOH9qPfvZ0lHus7wLUmhlYh0xw2AUJjYSU%2Bsx4KsgHusoCSwXMg8WAHlJIZ4WEz8d%2B%2BI1djQB&X-Amz-Signature=9270c8699a2426898c053081baebd0cbca6818e6646d65633d01046b6d2fd0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USPNVG7R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDxAHtk8F%2B%2FNUThgZ9vge%2FbrgK1nzvU6%2FtRDPoB30YsVQIhALCSPkkG7GnozmRuaXknXENwzRiYT38o%2FZg5xlPdyQFjKv8DCDUQABoMNjM3NDIzMTgzODA1IgzucFd7TjsRjJXKZNoq3AOAzbRlmpUYJZEsOSOZMkH%2FJqrfPruyzuUOWzVobM7mZI5sC3hckqc5rYB15qIeolUJF1uoKWPnaXLx9Oe0dTxXFOTK0MoULc3fDhp6Sr2%2Be4DJ8EzWTIarc4j%2FQ0trOuyiEU7HE%2F3qXsj9EqmnmWTfr6GbSUg4wwUpt42CkZuYDvkux%2F4Jn9YX5THz4TMSS1WUjxfnwoceL62TeIoIus455D94Ov0GfBllCIJlkvrP%2BVQxlX6%2BTAGnWpBexAirTUvMJdiob97DobAeaP4XjOWEU1jZzd58BBpJo%2FovlWGXicShPE2HQvQcqxrGuCHLiNqNE4TyibKuPZESGRyR7T9U6xgzLAZgLXWZKxGxYea%2B6umPQLPt9P3JqGkgoSQl3%2FDtZ57VQH66aRveRCj09Oqzrs4OTzurBWoFYBePuKVoT9hvnpsHx2mjWYiPFP7c%2FZkQEiJnZV94Y5Ld%2FfM%2Fe4uxXgx4KR5VCBl3iL0G7uT9e2QYNy5kPLvrYWKYyxqKnNcwBXHbg2w7CWbcQUTNq%2FIu8%2BILlPxxf%2FpgUic1oD3TXov4sfJeR9Olw9mWbOcqTmnGc5BHnrc%2BS%2F6k8QH8wo%2FC4DyHBD3TbfJ0vapkdvUI28j5fP7ZhA5vau3DdTCU9c3BBjqkAZUiwAkMLBa%2B1AOC84p4WRVPmTjeXxeIbK57JAN6Q8%2BCRGFbEQXASZ5GUSunb8zOZADUQROh%2BGjhvK0jj1RvGl1GPJZ8v7NJkZsm6%2Ff7OrjpQfWb5Ep3Wdzt%2BKmurV2bkmpSoBVEitokeJ34w5PVOH9qPfvZ0lHus7wLUmhlYh0xw2AUJjYSU%2Bsx4KsgHusoCSwXMg8WAHlJIZ4WEz8d%2B%2BI1djQB&X-Amz-Signature=3de69283c271d60b02b43eeda5a99e2b0323aeab3bb7b61e39787f66acf12fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
