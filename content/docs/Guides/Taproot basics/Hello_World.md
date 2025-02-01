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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Y3ZUHQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95JUKeShVU1DZPuagKVWLD1MhYrHzSGL6%2Ffz07FAUDAIgVcFAwjuYGLaXXSxbTOmZoaPBItv4sXbhRQaoQy8GVd0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhEmf%2Fo4o%2FhhihaKSrcA25MjBi8vZ5DHV%2B6L3wcxdaav7rdvUnMLAaMttvGP2%2BSP1e54KWXjUaFkdcpAaiQvh603JlMAmjtUx8pZ7mSHtcowlviexMfge1QXA9ny6QMapyL796sSkyYw97oNFvsFl%2FXULtZ0N%2Bk68rqv8GnriqIsKCJBXsLlVfZ%2Fx5GZ%2B%2FnPIVNkIdvpIjAnLKuHaydcP7%2B5xliaDIMSL7ONoaRebEOk1fGaB1CIYgHfqYfsQkArvVwPtkDkJj4koSCDmWbwUScYF4lmJ%2BoF70hVGcL1s%2FHGEE7a9j6waupXx13a%2BbU4co0f6ATCy0XmV9P2k44Pl5OJtM4FEYS5FNpzV6gs6cUp%2Fv4DdJp8jzzv1yoYAKuI9yNXCaSAlsg6aR16Ew7y59QN0VABcqLp3EW3O9AupZOj6tgNsEl%2BsMr4haaDgeZOX4%2BdKF7UKXa88xrVlWoF1q6aRCK48GZFaEFRssdvdaN3GdfTo781VWcn4QpnNKxzXo6D3HSSSyvtfXCEWBw%2BWyaL5FsxMjJIsdBMrnfLluX3E3pNxAPVZIBoeDVsmUVpaMw6wBLYlLVa3uRhsKoJ10CKGVxj4SXCW6FcpWNr%2BsRbYOPAVFGuxDfbLhC1NCyzPcd93dKB%2Bm9snCZMKCy%2BrwGOqUBak3GzPzyM5n03s446C%2B%2FOkvyLCmi9ln3XiYyL%2FSNAjyg2wIYa58wAsGiY%2BwFOzFbBaRbAe%2BVQRtTFNdXXBTHFUjFwqqMeb73jtzAp5LtXQnmc86FnGCmOARs%2F%2FnJfSPKRfzTcO%2BN3VeXdVXdNdT47EgN13xmeliOmcYVqGBv8SjQwL8Mbtd5uWQSjlveococY2f25Yrpj6ZYB8xgNzTqFZaeKw%2Ba&X-Amz-Signature=c575ee2bcaf128516856ac8892486aeb8ddfe7166e7dc8ce3f5b54353fef4357&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Y3ZUHQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95JUKeShVU1DZPuagKVWLD1MhYrHzSGL6%2Ffz07FAUDAIgVcFAwjuYGLaXXSxbTOmZoaPBItv4sXbhRQaoQy8GVd0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhEmf%2Fo4o%2FhhihaKSrcA25MjBi8vZ5DHV%2B6L3wcxdaav7rdvUnMLAaMttvGP2%2BSP1e54KWXjUaFkdcpAaiQvh603JlMAmjtUx8pZ7mSHtcowlviexMfge1QXA9ny6QMapyL796sSkyYw97oNFvsFl%2FXULtZ0N%2Bk68rqv8GnriqIsKCJBXsLlVfZ%2Fx5GZ%2B%2FnPIVNkIdvpIjAnLKuHaydcP7%2B5xliaDIMSL7ONoaRebEOk1fGaB1CIYgHfqYfsQkArvVwPtkDkJj4koSCDmWbwUScYF4lmJ%2BoF70hVGcL1s%2FHGEE7a9j6waupXx13a%2BbU4co0f6ATCy0XmV9P2k44Pl5OJtM4FEYS5FNpzV6gs6cUp%2Fv4DdJp8jzzv1yoYAKuI9yNXCaSAlsg6aR16Ew7y59QN0VABcqLp3EW3O9AupZOj6tgNsEl%2BsMr4haaDgeZOX4%2BdKF7UKXa88xrVlWoF1q6aRCK48GZFaEFRssdvdaN3GdfTo781VWcn4QpnNKxzXo6D3HSSSyvtfXCEWBw%2BWyaL5FsxMjJIsdBMrnfLluX3E3pNxAPVZIBoeDVsmUVpaMw6wBLYlLVa3uRhsKoJ10CKGVxj4SXCW6FcpWNr%2BsRbYOPAVFGuxDfbLhC1NCyzPcd93dKB%2Bm9snCZMKCy%2BrwGOqUBak3GzPzyM5n03s446C%2B%2FOkvyLCmi9ln3XiYyL%2FSNAjyg2wIYa58wAsGiY%2BwFOzFbBaRbAe%2BVQRtTFNdXXBTHFUjFwqqMeb73jtzAp5LtXQnmc86FnGCmOARs%2F%2FnJfSPKRfzTcO%2BN3VeXdVXdNdT47EgN13xmeliOmcYVqGBv8SjQwL8Mbtd5uWQSjlveococY2f25Yrpj6ZYB8xgNzTqFZaeKw%2Ba&X-Amz-Signature=ab045ad45b5fc4f0815340abb2fae725a8651949c86e12b63bb8cbc532dcbc66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
