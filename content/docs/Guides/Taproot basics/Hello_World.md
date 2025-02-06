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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPALONX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCuTWS1tlQCPVNBOtX0U3WZ0h3BnLLiXlW8HJEI1z1%2F7QIgQTp0KpfovVS4LIQTNyZxQIXMjXCR1KZBE%2F2wy7N%2FrQIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN2RpL8nisAjSQO1sircA3Tdmh1oyz3xQ5bi3DRDrT98Je4FM3JygU%2F3lO1HwWBRTREHkTvFqmJKOwrDwm6Q1uigbFn3OEFETpF%2BXo3%2BrQuoIe%2FsqBIsrpmvx9orLALpChj1Q2qWrhN9iFjtdtD%2F5FrnlhesHj8VblmjE88pNcJRw89vYwB3tmjE7mbzR9vzACIkN3CkCIiezsN6LyU%2BKdYVgmW4eEY5B6xfOFRCgg3k7HXl%2BQtcrpcxWLze0vbmktbfLyVqdDyRxve4kNHe0wRaz%2BMOsbLH23u8WXDaW3x3RfWfc3fr7%2BfC4a%2FSMXoVi5OIHBvaEckp7YOzjAeeDHnFgm0WZjVaAgdQEaIa08mt%2FmVlmaSYx75QmoaChkjyaZB7vePJOZTx9Fig0Y2oUMrGPUY8DcX6wDbuLTdeA0gKTY1FtRvliE2SqkRqejJIr2UZ5qfY5%2FimAAJNSA3XuCVa7US0hpKh%2BR935hCtEM%2Ft%2FYPeIOtAiQBNJdyNzomd3B%2BrukUs1UcwJqs%2BSTL0m3QwncRVGamzhzwCEgbJCFInZ1%2Fffk%2FqPFsLsKx%2BHdSoqQ94fLE4ca8aJJd9ivA6twagwpqx3n8cA7aYmGOimu24rFOs4AW%2Ba7gCH6BhSjSAVEPuwa%2BnfhjODLMWMLHUkb0GOqUBLPJBVs1RXTt5jXSTHJxZRUkwwCSSl2gHVQle0eDCf3m2xwlBTTfXSAPTYiYbu6hJK%2BVmH%2FI7Wzb%2BJIUb7bCV6vfXiBXg%2BA3fNe3Jj7RwJTv7fVx%2BT%2BdOArmPLMPbZdfm44oLERNqAJhvkfpWDwtWLtyzcT2BPYTxeuDAD1pNfsdbofnCGQs6sfQrYezbytnhHGRKwcST3QXSnbutdQswqI7O%2BzXU&X-Amz-Signature=f07da84a97366ba55c47ab4223c1a04717b2dc4b4afef8c7e8f927c500d3cad2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPALONX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCuTWS1tlQCPVNBOtX0U3WZ0h3BnLLiXlW8HJEI1z1%2F7QIgQTp0KpfovVS4LIQTNyZxQIXMjXCR1KZBE%2F2wy7N%2FrQIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN2RpL8nisAjSQO1sircA3Tdmh1oyz3xQ5bi3DRDrT98Je4FM3JygU%2F3lO1HwWBRTREHkTvFqmJKOwrDwm6Q1uigbFn3OEFETpF%2BXo3%2BrQuoIe%2FsqBIsrpmvx9orLALpChj1Q2qWrhN9iFjtdtD%2F5FrnlhesHj8VblmjE88pNcJRw89vYwB3tmjE7mbzR9vzACIkN3CkCIiezsN6LyU%2BKdYVgmW4eEY5B6xfOFRCgg3k7HXl%2BQtcrpcxWLze0vbmktbfLyVqdDyRxve4kNHe0wRaz%2BMOsbLH23u8WXDaW3x3RfWfc3fr7%2BfC4a%2FSMXoVi5OIHBvaEckp7YOzjAeeDHnFgm0WZjVaAgdQEaIa08mt%2FmVlmaSYx75QmoaChkjyaZB7vePJOZTx9Fig0Y2oUMrGPUY8DcX6wDbuLTdeA0gKTY1FtRvliE2SqkRqejJIr2UZ5qfY5%2FimAAJNSA3XuCVa7US0hpKh%2BR935hCtEM%2Ft%2FYPeIOtAiQBNJdyNzomd3B%2BrukUs1UcwJqs%2BSTL0m3QwncRVGamzhzwCEgbJCFInZ1%2Fffk%2FqPFsLsKx%2BHdSoqQ94fLE4ca8aJJd9ivA6twagwpqx3n8cA7aYmGOimu24rFOs4AW%2Ba7gCH6BhSjSAVEPuwa%2BnfhjODLMWMLHUkb0GOqUBLPJBVs1RXTt5jXSTHJxZRUkwwCSSl2gHVQle0eDCf3m2xwlBTTfXSAPTYiYbu6hJK%2BVmH%2FI7Wzb%2BJIUb7bCV6vfXiBXg%2BA3fNe3Jj7RwJTv7fVx%2BT%2BdOArmPLMPbZdfm44oLERNqAJhvkfpWDwtWLtyzcT2BPYTxeuDAD1pNfsdbofnCGQs6sfQrYezbytnhHGRKwcST3QXSnbutdQswqI7O%2BzXU&X-Amz-Signature=5eb79fb39106e1c7e4521598eac3d31fc47a494490efa844491b0a85bdac3f25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
