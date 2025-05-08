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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRP4EP3W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvuLEksmHe%2BFzimtLTJtHULGVDwVojcVAeqLb1kbbUcQIgNv%2BqCpN20rgGaJJQveHe0H46wnCDKluvMSZ%2BQp1YSEkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwlJRkZ4IWGw3YQhSrcA%2BhHnReGDbQgeR%2BhXsLUAHAzrOeh%2BSu9HkEMa23ca1MPoFKvDiQvO3YCXMZzq8dl5LmDGpzp2qpZzFDY2XGRuSrCE91w9ib26tQPRLJBKkmg17xyUTq3xY5Hf0MOWZ0NsLEiz89M%2F2b3JXOkryp1SoKiV76xPd7ZX3A1oBGs1QVUDRcqxzvZ1Tq%2Fvr2QIwy0UsYGEiNb3LHN8t3wK65lsvj7JJaCpK%2BGiEgwcf03MtdFJCDqq4qILrquKgWONpM2OD7VOEq8sZ8IPRIinsL4nSDDFBnE8qkd0C5bPdCACJSsF38zmrueYR%2FQCmXA3wcmvIfbDWH3Ltz%2F2QOD8oP3CAbSGkldVajt%2FzsxEXdiXRLnX8QydeMzuyP5mEQSyVPdiMtzgTAB%2BxYxnVbkx7Mk0cjHAxPE1Vp2iPTUcHdvGRsyiof3F03eeEN4ZJKHLOwsDDG4IBnIZSC%2FQC8ga2OrdjC3Tyl%2FkM2LB0Ov9LtQPI%2F0EJER2lf%2BnhKdEDyIbcaKegB2VY2zdIxeG4tLh5m0L7e5gxrR12M0wV8F2fWrd8umTuc3C1%2BppHWbJtoqrPcDECgyjNmquCqgdkvto46WPPQg%2FX%2BC6IzvKBF0srr%2BDN3c3s5Nx7ooyqWwO3GVMJTj9MAGOqUBSFgiUjaLqy%2BXgwcgkeVNeWb%2FWvOuWdnttkAJz8C6OQO7osjHmhegDfI3wQnBvcpuOt0uHaOTZOf0LIguFbkgN6I82vVMHHN4%2BCUC5y5fjHkqYHHMRIi7W1Kz447fmtDzTwLjq4RrJby06%2FsrXHsR7R0jjcP4Co9cXkPOfYIGDZ59qifdD5C8KNbniqPWyN97adAg53iDfdUzXWayQLFY16Q1o%2FVK&X-Amz-Signature=141559071c27e3f73bfa7064c1fb352ea314d6084bf9b02f8f17e7211cf7db28&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRP4EP3W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvuLEksmHe%2BFzimtLTJtHULGVDwVojcVAeqLb1kbbUcQIgNv%2BqCpN20rgGaJJQveHe0H46wnCDKluvMSZ%2BQp1YSEkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwlJRkZ4IWGw3YQhSrcA%2BhHnReGDbQgeR%2BhXsLUAHAzrOeh%2BSu9HkEMa23ca1MPoFKvDiQvO3YCXMZzq8dl5LmDGpzp2qpZzFDY2XGRuSrCE91w9ib26tQPRLJBKkmg17xyUTq3xY5Hf0MOWZ0NsLEiz89M%2F2b3JXOkryp1SoKiV76xPd7ZX3A1oBGs1QVUDRcqxzvZ1Tq%2Fvr2QIwy0UsYGEiNb3LHN8t3wK65lsvj7JJaCpK%2BGiEgwcf03MtdFJCDqq4qILrquKgWONpM2OD7VOEq8sZ8IPRIinsL4nSDDFBnE8qkd0C5bPdCACJSsF38zmrueYR%2FQCmXA3wcmvIfbDWH3Ltz%2F2QOD8oP3CAbSGkldVajt%2FzsxEXdiXRLnX8QydeMzuyP5mEQSyVPdiMtzgTAB%2BxYxnVbkx7Mk0cjHAxPE1Vp2iPTUcHdvGRsyiof3F03eeEN4ZJKHLOwsDDG4IBnIZSC%2FQC8ga2OrdjC3Tyl%2FkM2LB0Ov9LtQPI%2F0EJER2lf%2BnhKdEDyIbcaKegB2VY2zdIxeG4tLh5m0L7e5gxrR12M0wV8F2fWrd8umTuc3C1%2BppHWbJtoqrPcDECgyjNmquCqgdkvto46WPPQg%2FX%2BC6IzvKBF0srr%2BDN3c3s5Nx7ooyqWwO3GVMJTj9MAGOqUBSFgiUjaLqy%2BXgwcgkeVNeWb%2FWvOuWdnttkAJz8C6OQO7osjHmhegDfI3wQnBvcpuOt0uHaOTZOf0LIguFbkgN6I82vVMHHN4%2BCUC5y5fjHkqYHHMRIi7W1Kz447fmtDzTwLjq4RrJby06%2FsrXHsR7R0jjcP4Co9cXkPOfYIGDZ59qifdD5C8KNbniqPWyN97adAg53iDfdUzXWayQLFY16Q1o%2FVK&X-Amz-Signature=fbe30664ff73a439bc384761e2825830dd38f95f8a62ea037390d14d388f6636&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
