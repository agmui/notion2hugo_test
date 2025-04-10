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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IDO2VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDAzGTL9TKDbV5A7dZB6l2P1owxiaMTQ8qeVCuZT15%2BxAIgcyEDoA871bgTAxiAPdi6y2xUYQKmNlbj3LsZKOg89l0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSe6XFuJItfSe1PSrcA8i23J11d6zIlPF2XJSYezF1ao%2BJazPTyTSbvWzRkUmYFOI2o3q7OJRLlUlrcupxi2qWI5B8X5ArhTtFY53GwPeyR0YypOpBxsY9SKuBqzentZuDeswhR2hOu5xqzcDsInUcHHXw46PMyRhpzlsd%2BxFtrleWn5hXO3ZZP5AdkncK39adRwk18ssisegmHdQ6K3YoccxMnkrLAmnCQD97tSaBCvkDTHT6xMGnjGHxENf%2BM4ZwvpEMr%2BBXx%2F3ArGinHfRrUFb5zWiqS%2BkY13uDMsG1LG5ZYJDqE3gNuBV21SRLDhcdY3eORKal80j0R7d0OwTwYWOjwj1rEI3YQgq%2B0OpTP6b%2BYBWhxS4D5yFins03wtO6BR6Q%2BR1ZZg4bu7uY89KRzOTiHybuhxcrKjuiBpTA%2FSX4cLnjl94WzGXJcm8b2Ad1L7DJn2BSmfMBsqU5zM1rEYeKDqTK34s2U%2FyDk5hxF47fTAIrUcfDtp7iwac8SB%2B%2B1Wr59K3aJyTBrJv83PQxVmSqufJXOe6A9hks%2FD%2B4f%2FIFL61wv2TtB9E6gm2xROID3D5VAc6alAD8ZlSsD%2BeHwd4XG3KqKcGKnJiEVDUPuDZwOsh46MZFO4dZ6XgNri6kcwXnhp9fBcM6MOSR3L8GOqUBHhw1V1ngCjNvLOdex4BC9skUfQdoCpKOed6%2F8d1zHNO%2Bkg72uWz%2Br90YD05cUoT%2FQgVDc3dBYD4BLM69%2FIxfgRlud%2FK6yRz5C3zrCHzsfSRYwEVvXFFfg6obLjD8Vym9LcSsGcm8%2Fpy9CFf0HrM2X60My%2BivEWUIV6UxQpAwUfUuAXzfNEUKyOfCWjEzUzMLCCqhxbJSMo%2BSMoWHSaVSOBg%2BtDnm&X-Amz-Signature=cee6810c1104ccc762a3a4a37a64d50833e1f015939467e950191c35f51197c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IDO2VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDAzGTL9TKDbV5A7dZB6l2P1owxiaMTQ8qeVCuZT15%2BxAIgcyEDoA871bgTAxiAPdi6y2xUYQKmNlbj3LsZKOg89l0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkSe6XFuJItfSe1PSrcA8i23J11d6zIlPF2XJSYezF1ao%2BJazPTyTSbvWzRkUmYFOI2o3q7OJRLlUlrcupxi2qWI5B8X5ArhTtFY53GwPeyR0YypOpBxsY9SKuBqzentZuDeswhR2hOu5xqzcDsInUcHHXw46PMyRhpzlsd%2BxFtrleWn5hXO3ZZP5AdkncK39adRwk18ssisegmHdQ6K3YoccxMnkrLAmnCQD97tSaBCvkDTHT6xMGnjGHxENf%2BM4ZwvpEMr%2BBXx%2F3ArGinHfRrUFb5zWiqS%2BkY13uDMsG1LG5ZYJDqE3gNuBV21SRLDhcdY3eORKal80j0R7d0OwTwYWOjwj1rEI3YQgq%2B0OpTP6b%2BYBWhxS4D5yFins03wtO6BR6Q%2BR1ZZg4bu7uY89KRzOTiHybuhxcrKjuiBpTA%2FSX4cLnjl94WzGXJcm8b2Ad1L7DJn2BSmfMBsqU5zM1rEYeKDqTK34s2U%2FyDk5hxF47fTAIrUcfDtp7iwac8SB%2B%2B1Wr59K3aJyTBrJv83PQxVmSqufJXOe6A9hks%2FD%2B4f%2FIFL61wv2TtB9E6gm2xROID3D5VAc6alAD8ZlSsD%2BeHwd4XG3KqKcGKnJiEVDUPuDZwOsh46MZFO4dZ6XgNri6kcwXnhp9fBcM6MOSR3L8GOqUBHhw1V1ngCjNvLOdex4BC9skUfQdoCpKOed6%2F8d1zHNO%2Bkg72uWz%2Br90YD05cUoT%2FQgVDc3dBYD4BLM69%2FIxfgRlud%2FK6yRz5C3zrCHzsfSRYwEVvXFFfg6obLjD8Vym9LcSsGcm8%2Fpy9CFf0HrM2X60My%2BivEWUIV6UxQpAwUfUuAXzfNEUKyOfCWjEzUzMLCCqhxbJSMo%2BSMoWHSaVSOBg%2BtDnm&X-Amz-Signature=16925f9ed94331286992becda5772e2cdd33286ddb09ae3281e97bfabd54e4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
