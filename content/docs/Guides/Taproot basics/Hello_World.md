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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHRUCFI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDu5B287jZJqVfFClg7GNN8F3vTiIHkcRVu6RXlqxz1yQIgTON4y0jI%2FfrMZ2Z0xPdFHivAZOz9zBUfdXFd6bupPikq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDpJ3qHBE1FyrNOyICrcAzO196iXpXPRP5EkGa2znd9E%2Bjg6EqUtX11MC5%2B7%2FQVxbMlMLN4rUPMBttLpHX%2BprEVKJG8Iy2nEuq2izlLuO%2BVqqXy9QnIvlOCjYfZfiI0LcD5nWIfAh49%2BU2TbTar2BC9RM83SAeL%2BHK%2FS7eUDIY%2BCbX4dRqeQkd06xX1EZ4Zy8JSdUD9ae7WNrY%2Bx3fipF0qXoelSFJU%2FOT8PN7oamKRkRr8Eo8Pk0Zc9GPU0wzyotEeL4%2BrOaysKpvTgnhRl5VrnDwoeI4Nj8blAI67NZ9cOb46r%2F8%2FIjwgUb4Yr0Dww0CvNj5b7yQYzlIfPTiI18cFvihyZitzkMDzg9J463ZdJaDDI2OeWqvow7Nt2VFaQenS7c2sXtBETQ6gble3ZeCPdkjILC%2FOH0HQ67QsLvoTJ3RVJVlXpdPe4glq1AkNEb%2Bv3XETRJ81sjuCOYZwGcfIAFIpY7GlGdQ6qbHw9i692Iao2cI9neM9ztEdYTuKn2JmcMDuYFEFdSg56IFcDhOJO7SgHp6NwYOf234BIYNAfLcI3xWhhpf7vCrZNX1CQ6SitBobsxvHa04rtfsFj6IYhMW4NZCVaXc4%2BHhXNeOsLrmvs8xqZVVqg1DaEhijaNAtSke1KURnzny3JMI6AgcIGOqUB1hbiLlnM3DVB7w8e2FCCt8WxkgXI5RbiC6xXihGBA1l4c0pVa5xaUSDQw%2FXznaxna5fGa5Gsn2Ez39oH02G9dZ4wuIi%2BlHEdBScE9yc4JHnj1gF6cFPz84P380D92jEb23lgaSvypck9w%2BFCoMtwQFmvSow6Xsonpnrtw%2Fi4FOnX6teROo3vzZieG6kcx0j5x07wEz%2B6JOUmMtpFDRvbWpNUJ%2B9X&X-Amz-Signature=b147efa1728b499669fec895b213151d36d1623220da814bb8f84bafcaec804f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHRUCFI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDu5B287jZJqVfFClg7GNN8F3vTiIHkcRVu6RXlqxz1yQIgTON4y0jI%2FfrMZ2Z0xPdFHivAZOz9zBUfdXFd6bupPikq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDpJ3qHBE1FyrNOyICrcAzO196iXpXPRP5EkGa2znd9E%2Bjg6EqUtX11MC5%2B7%2FQVxbMlMLN4rUPMBttLpHX%2BprEVKJG8Iy2nEuq2izlLuO%2BVqqXy9QnIvlOCjYfZfiI0LcD5nWIfAh49%2BU2TbTar2BC9RM83SAeL%2BHK%2FS7eUDIY%2BCbX4dRqeQkd06xX1EZ4Zy8JSdUD9ae7WNrY%2Bx3fipF0qXoelSFJU%2FOT8PN7oamKRkRr8Eo8Pk0Zc9GPU0wzyotEeL4%2BrOaysKpvTgnhRl5VrnDwoeI4Nj8blAI67NZ9cOb46r%2F8%2FIjwgUb4Yr0Dww0CvNj5b7yQYzlIfPTiI18cFvihyZitzkMDzg9J463ZdJaDDI2OeWqvow7Nt2VFaQenS7c2sXtBETQ6gble3ZeCPdkjILC%2FOH0HQ67QsLvoTJ3RVJVlXpdPe4glq1AkNEb%2Bv3XETRJ81sjuCOYZwGcfIAFIpY7GlGdQ6qbHw9i692Iao2cI9neM9ztEdYTuKn2JmcMDuYFEFdSg56IFcDhOJO7SgHp6NwYOf234BIYNAfLcI3xWhhpf7vCrZNX1CQ6SitBobsxvHa04rtfsFj6IYhMW4NZCVaXc4%2BHhXNeOsLrmvs8xqZVVqg1DaEhijaNAtSke1KURnzny3JMI6AgcIGOqUB1hbiLlnM3DVB7w8e2FCCt8WxkgXI5RbiC6xXihGBA1l4c0pVa5xaUSDQw%2FXznaxna5fGa5Gsn2Ez39oH02G9dZ4wuIi%2BlHEdBScE9yc4JHnj1gF6cFPz84P380D92jEb23lgaSvypck9w%2BFCoMtwQFmvSow6Xsonpnrtw%2Fi4FOnX6teROo3vzZieG6kcx0j5x07wEz%2B6JOUmMtpFDRvbWpNUJ%2B9X&X-Amz-Signature=6cf9219902806d55ae1fa0e0c04526a1dfb1cdccd6a581da65bfc736871d3591&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
