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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SEOJRK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRnri1arNtiZKXDtcEjgF%2FgX9uqx%2BRGtW%2Br5ytGt%2B%2FrAiEA5AuGRvO%2BrGxdBKHJYePLOd0emStjNJVEPNpbUSi8RaAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAScbe3h9esl1AdyrcA6P6VmlRllJL8oe1sucqu5L57F4q04MnqYo93H4JhGugpYgn3lNJx48wYt3M1vtmyOByGfdUIv7nOqLOQkO1TaiMlUm1tuxfYt4AjdP6LZNugIlvirR97AUt%2Fp6umOBbKr6fEQcL8m1yxl%2FRM8Rasj5ZO74BCeQqqNV7VpkKxjkE2308KxB0bhP0NjMSZaHjZRKhgVsfoSkO3aBOZJF62qVVILHbdu07Ub47MoDdE3sAV3l%2BHtLENOhQn6o8FsPZPBlw3EfOIZrDVrKuKLI1ZT7SM2XbWwS34nPUeAektfJcLhUsC7TQIrEUQ3f0kWL8x%2BDFpQqBJiTNWFu4UShjXwSVpj7yzmEZ86Aq%2BAY4UzQKy%2FntRpth3EpeUBUMkcWSN2T7EN7w9TKb%2FDj3G50G6vpY4ZxQDt2CVoAcILV3gugb3Dfapml8UKpbwtKCcxE%2BR1sB7ZBSovs%2BnRjhvkXFxpr28I0OnAW9VFTQ%2FIdxzrk3JQE3tUEwL5HlZgA1QMpElFCAXJzEMHUloQIMhU9b1pA5haEnhnYQxwpDAE18iSo9HrgYkx%2FbeId%2BkksBsGhf6xiT8EbwB49TM4v%2FknOubTspO%2BOfrHeiA3niTuW35%2FypMSePIIUxDMw8cpJyMKOeksMGOqUByvd3eE2hUrYqIW96t3TfpeY%2BdJO7J1U2pXkVYKQJTYhhefM965RwClGDaEe25rwT1dhHkfhcSzPuKW%2B4MOSdkHANyei8TtmHVtKPKE5PE6Wk%2Ba%2FSu5H7wfdNUj1v1YkCayReTTEhHTjsvy1xb%2FuYWcvgGXsoWE8m8K5ql4s9sVMHM41i6ky4Q8uP5gMIvBfL4TJRYaHV9oiTjPTf%2FcUdZviKRM9K&X-Amz-Signature=912aa54293c8f3102c2432aaf4762c99262a556ec625323a198c5cec52ce8d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SEOJRK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRnri1arNtiZKXDtcEjgF%2FgX9uqx%2BRGtW%2Br5ytGt%2B%2FrAiEA5AuGRvO%2BrGxdBKHJYePLOd0emStjNJVEPNpbUSi8RaAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAScbe3h9esl1AdyrcA6P6VmlRllJL8oe1sucqu5L57F4q04MnqYo93H4JhGugpYgn3lNJx48wYt3M1vtmyOByGfdUIv7nOqLOQkO1TaiMlUm1tuxfYt4AjdP6LZNugIlvirR97AUt%2Fp6umOBbKr6fEQcL8m1yxl%2FRM8Rasj5ZO74BCeQqqNV7VpkKxjkE2308KxB0bhP0NjMSZaHjZRKhgVsfoSkO3aBOZJF62qVVILHbdu07Ub47MoDdE3sAV3l%2BHtLENOhQn6o8FsPZPBlw3EfOIZrDVrKuKLI1ZT7SM2XbWwS34nPUeAektfJcLhUsC7TQIrEUQ3f0kWL8x%2BDFpQqBJiTNWFu4UShjXwSVpj7yzmEZ86Aq%2BAY4UzQKy%2FntRpth3EpeUBUMkcWSN2T7EN7w9TKb%2FDj3G50G6vpY4ZxQDt2CVoAcILV3gugb3Dfapml8UKpbwtKCcxE%2BR1sB7ZBSovs%2BnRjhvkXFxpr28I0OnAW9VFTQ%2FIdxzrk3JQE3tUEwL5HlZgA1QMpElFCAXJzEMHUloQIMhU9b1pA5haEnhnYQxwpDAE18iSo9HrgYkx%2FbeId%2BkksBsGhf6xiT8EbwB49TM4v%2FknOubTspO%2BOfrHeiA3niTuW35%2FypMSePIIUxDMw8cpJyMKOeksMGOqUByvd3eE2hUrYqIW96t3TfpeY%2BdJO7J1U2pXkVYKQJTYhhefM965RwClGDaEe25rwT1dhHkfhcSzPuKW%2B4MOSdkHANyei8TtmHVtKPKE5PE6Wk%2Ba%2FSu5H7wfdNUj1v1YkCayReTTEhHTjsvy1xb%2FuYWcvgGXsoWE8m8K5ql4s9sVMHM41i6ky4Q8uP5gMIvBfL4TJRYaHV9oiTjPTf%2FcUdZviKRM9K&X-Amz-Signature=41b6cf9ce4f928e34c4235970647da246550d552a097eae07171253c6c52731e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
