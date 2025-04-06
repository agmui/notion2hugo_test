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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJO2RGD6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDWsv%2FnWe30Wg8zmWdzdrhWPzcU3VDmEAPikoYuRdHAIhAPh0vhddMYGKQ9WFdAJF75%2Bx1eNGqjn2SfjqdfB7UvGIKv8DCEcQABoMNjM3NDIzMTgzODA1IgyZHe%2F7BQaZt%2FmSIuwq3APFc9QnZ5NTx%2FwsldU3uXbCKYo0dHOzvQ9wXxdmdz7GY%2BHMWuzLDP4Q0kUmUxMZTkCp1dP3uF841O%2B4uIoZQzPa%2FTdfO7ebBG9IsfX7oQRm45%2FiWXVC1ogS9Nf1JAJmJaM%2BLmkOmOtS1Z22DEk9VCUTMt50jUon8OecF7b5xyzFpik7qlAk4tlIJ0OSD%2F%2FHHxAGMlxTpeHkfO70Yoz8gxEXocMzBiT4oMkRAeY6qJN06%2BYpQZs3gf7vY5svP3n6q5Vpn4tss1g%2B%2BhMmgIsk%2FIMTVnOG0ubLIYPPnwx8sIuANBQUG2TbCKixkwaa0XtxuqrQWMbruyfdZs2gk4JuOquvmpIi2H672NL0V9Mcr%2FclBxK7FRku6U0vu8Jx2Gck%2FQkSqVn4cDfBRuuLxyi4YDusrPuzi2m65xRlUjanwR91Vg3FSkp3EqqHSoMZYMf1NUOifggwwYpSrPqRFVhamzdGXAC2ePQGW1r8Z88uipS84ZBoeYVy68lR%2F%2FV4ex3z66pF4jitRk%2FwOJW%2Bl9P3iwvNhovDAdYnAnfIxWsuCfuGttxiBS5sRbOkjGBi65Kk9VqbQVJUx1Zcw75N7swYm0zIr4rRuxW%2FKPEIV6x%2BTfC6ij40fHFR9tNNIMGeoTCEi8q%2FBjqkAcJanqXCBkbGYYgcVjNywzzDD%2FLVqpiSIMi5kQjJ9f3Z0CqQeTXEDTNJSUBAP%2BsyfiNUsNLfcdypI9AAmvOIey3sm51ufuMZy1iURyVtDtgu3w6%2FeePo%2FVxQGs3TIz1xps%2B7pq4VJhC7KBa2XSF1qVW6OWXeOu7sTulP7PfzPYDqfAJZcGMPQ6gcXgDHlfMOwK6GcQAQNifO8edtcoPGkErjNegK&X-Amz-Signature=3b78693f5527dd0a4b31528fe999a7760198d1fbc00dd047335a6ee121f46a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJO2RGD6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDWsv%2FnWe30Wg8zmWdzdrhWPzcU3VDmEAPikoYuRdHAIhAPh0vhddMYGKQ9WFdAJF75%2Bx1eNGqjn2SfjqdfB7UvGIKv8DCEcQABoMNjM3NDIzMTgzODA1IgyZHe%2F7BQaZt%2FmSIuwq3APFc9QnZ5NTx%2FwsldU3uXbCKYo0dHOzvQ9wXxdmdz7GY%2BHMWuzLDP4Q0kUmUxMZTkCp1dP3uF841O%2B4uIoZQzPa%2FTdfO7ebBG9IsfX7oQRm45%2FiWXVC1ogS9Nf1JAJmJaM%2BLmkOmOtS1Z22DEk9VCUTMt50jUon8OecF7b5xyzFpik7qlAk4tlIJ0OSD%2F%2FHHxAGMlxTpeHkfO70Yoz8gxEXocMzBiT4oMkRAeY6qJN06%2BYpQZs3gf7vY5svP3n6q5Vpn4tss1g%2B%2BhMmgIsk%2FIMTVnOG0ubLIYPPnwx8sIuANBQUG2TbCKixkwaa0XtxuqrQWMbruyfdZs2gk4JuOquvmpIi2H672NL0V9Mcr%2FclBxK7FRku6U0vu8Jx2Gck%2FQkSqVn4cDfBRuuLxyi4YDusrPuzi2m65xRlUjanwR91Vg3FSkp3EqqHSoMZYMf1NUOifggwwYpSrPqRFVhamzdGXAC2ePQGW1r8Z88uipS84ZBoeYVy68lR%2F%2FV4ex3z66pF4jitRk%2FwOJW%2Bl9P3iwvNhovDAdYnAnfIxWsuCfuGttxiBS5sRbOkjGBi65Kk9VqbQVJUx1Zcw75N7swYm0zIr4rRuxW%2FKPEIV6x%2BTfC6ij40fHFR9tNNIMGeoTCEi8q%2FBjqkAcJanqXCBkbGYYgcVjNywzzDD%2FLVqpiSIMi5kQjJ9f3Z0CqQeTXEDTNJSUBAP%2BsyfiNUsNLfcdypI9AAmvOIey3sm51ufuMZy1iURyVtDtgu3w6%2FeePo%2FVxQGs3TIz1xps%2B7pq4VJhC7KBa2XSF1qVW6OWXeOu7sTulP7PfzPYDqfAJZcGMPQ6gcXgDHlfMOwK6GcQAQNifO8edtcoPGkErjNegK&X-Amz-Signature=1a193f0b3d1de232272aa05dac1a7109bd952baa98148bf75b73197ebc5c6b29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
