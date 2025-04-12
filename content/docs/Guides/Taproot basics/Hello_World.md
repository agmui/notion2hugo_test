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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKQ4YHH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICFL11hHsiIqKsfsdn8dknvzaT17bInoGfQ50yG18VZIAiEAlFfoeONbKARkDx02bzgD01XJ1JEGjHkD7Z39WLce5r8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeSAfEwBACn0UP2TircA87inKh9aFrkbSasNxxflVKr6oh58CUGme%2BZF68M2EQhEEMNeLmZq2NsyXa3XbMsIxjPV2jhcnhieg5BcbO%2BiecaVP0KIw%2FfeMKDWCqW1PNcRsHmPQrldBbkdgVS0f7Cj%2BDnj%2BSa4N%2BOPnm4ZTXSn4x3uLiKoaZ3N08EOJ79WtIQxD7TkmwJLxX%2FRljcaGh4Fw4zoUrUP56s4US46ZFrgm6JkLwyzjBGvxEi7odlbLAS195IVL4v7G9WmXE1w4quod6S5nglK%2FpdwW6ql4e6aBW4uBkAWpFv5NiSZheozfTG1ZJu9oLnO9I6Cwre8yWAzY%2FheQy%2BHt6WQRav09cMtGFeESg%2BeVgPi4%2Bmw7VNC8GxApCza5KLcEx3BpAYksthS00uBPSHXDYTDf70uLBDhdxztqyCFaJDz749cCEatQGkpE3ys6q4y5KbX0Y0q6MGtsfqwZFOwrOmyT2gCHSl76%2ByM3XmZa2yIDipI%2BbjtWz8EZIATXgo4%2BqK31IGcJT0LhfR75JsmEWCnt5I0ErEq3SxitF2CciPH%2F%2BGkYadQVKnQCFyAOdtmwplsvh0Vaof%2B2NM85fXhEESj8UGf3zUL60OKCmRjKHqWJ0vk8UWYJM1NZr%2BA%2Fn3GvhWV%2Fk3MKe3578GOqUBvIAS%2FaJ06kO7Hyw294OI%2B2RB%2FBc7A8mFwSd4Br6s8ll3H%2FrotBnEfUdS6oKOzEMrWCbgPqoFnQ7I04j7IHIEdYvNOjEj4hwWK0RhVfkMK1XN2wW9JsA2OSEhOfqT%2Fi%2BrhtA%2BIVXzU39j%2BGhp%2FEXLF%2B%2Fb6Qk%2F73iA2UZK0EHEkD5Szy9wcOiLfKihA4WM9KxBOocUI5bU8%2FIj6KQ8NT%2Bb2c67nUir&X-Amz-Signature=f3491cfebe27171f96789bed616292905b398786bab1364eb294b5705322f984&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKQ4YHH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICFL11hHsiIqKsfsdn8dknvzaT17bInoGfQ50yG18VZIAiEAlFfoeONbKARkDx02bzgD01XJ1JEGjHkD7Z39WLce5r8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeSAfEwBACn0UP2TircA87inKh9aFrkbSasNxxflVKr6oh58CUGme%2BZF68M2EQhEEMNeLmZq2NsyXa3XbMsIxjPV2jhcnhieg5BcbO%2BiecaVP0KIw%2FfeMKDWCqW1PNcRsHmPQrldBbkdgVS0f7Cj%2BDnj%2BSa4N%2BOPnm4ZTXSn4x3uLiKoaZ3N08EOJ79WtIQxD7TkmwJLxX%2FRljcaGh4Fw4zoUrUP56s4US46ZFrgm6JkLwyzjBGvxEi7odlbLAS195IVL4v7G9WmXE1w4quod6S5nglK%2FpdwW6ql4e6aBW4uBkAWpFv5NiSZheozfTG1ZJu9oLnO9I6Cwre8yWAzY%2FheQy%2BHt6WQRav09cMtGFeESg%2BeVgPi4%2Bmw7VNC8GxApCza5KLcEx3BpAYksthS00uBPSHXDYTDf70uLBDhdxztqyCFaJDz749cCEatQGkpE3ys6q4y5KbX0Y0q6MGtsfqwZFOwrOmyT2gCHSl76%2ByM3XmZa2yIDipI%2BbjtWz8EZIATXgo4%2BqK31IGcJT0LhfR75JsmEWCnt5I0ErEq3SxitF2CciPH%2F%2BGkYadQVKnQCFyAOdtmwplsvh0Vaof%2B2NM85fXhEESj8UGf3zUL60OKCmRjKHqWJ0vk8UWYJM1NZr%2BA%2Fn3GvhWV%2Fk3MKe3578GOqUBvIAS%2FaJ06kO7Hyw294OI%2B2RB%2FBc7A8mFwSd4Br6s8ll3H%2FrotBnEfUdS6oKOzEMrWCbgPqoFnQ7I04j7IHIEdYvNOjEj4hwWK0RhVfkMK1XN2wW9JsA2OSEhOfqT%2Fi%2BrhtA%2BIVXzU39j%2BGhp%2FEXLF%2B%2Fb6Qk%2F73iA2UZK0EHEkD5Szy9wcOiLfKihA4WM9KxBOocUI5bU8%2FIj6KQ8NT%2Bb2c67nUir&X-Amz-Signature=83e0d7a6ebccead87dc61de77234d943f56d4782344e2f950905d5684b4270e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
