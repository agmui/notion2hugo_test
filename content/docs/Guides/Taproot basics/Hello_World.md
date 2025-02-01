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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SJWLTR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwYkkEKgcC6AD2%2FHg1K06kH7ootujB9uYJcm9fl9Xj2AiBdZa01gBCqnxvhuj%2B%2FRHJ920J6mSJja3sVc5RiqEmZsSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVzgnp%2BAEA0%2F0GXmKtwDaCFdNL8SgNCa5SZEu%2BRvgPZozp32m%2BZ5J26OBBjq7c070ON4oSYpOi3VxxChD79GyHoKr975N9CFfK%2FZAouIpPfa%2B1wDb7NGCrVNCZhZXCqeTFsMI8x%2F9tkXe0NXbQKcrnO%2Bf2YJ9jMuZm0h6kKlTfmJJm8%2FNC5xUyxd%2FKlJIEBGq%2B0WccD459jcHeBeGMz1zdJtbO4yrfgcfQuiyljXQpfQ5vHwolNRsFxTX5j2Dc7GK205hXQeSvDvDo9ZXw7ESCd1J4MmFnZG%2Fr5Mv%2FY%2B1igUEEBQtvFcp9VKJxc6B4rF%2BoylbynRGWDMqIkK3yFLUKW67fD7I94XLqYBwQQa2JuYNu450UZI%2Bgb6OBo%2BMZVhzrCFOUg3jT%2FUARmylzSOTQtfil7kQqL28HLlWanVZDvmJ1t5tQPtw8MGYtVbX%2FuX4ioMUqy1vk8Fe2V8F7RtnnCXoufBB9eJdEfmyQunYoXPpwc3Z3AODSWnpLgRki7NT3SO%2BB7qHARZT3qJm%2BiJalU45rNYblam5slojzn6NnUcHU4G9BoL%2FKzXwukzGqh9Yfbw06WfUleJy3fAMl2JVgpfMA6Y%2BnD3kZVZ%2BqEY3Gk8GMZcm7RO0ttsxpk15wabTB%2B3Og7SttbPy4Uw0Pj5vAY6pgHASL1hejLilin6uqe%2B86HTVyjRbBYGudJ%2FYfmuFrZ7g6EDHgwPNvGTDDaGHMcdfQEo7bjmzkVm6ohH7fd6lGIlnfEbVOdBvYLgR89yVbpEg7fU8pg2RlHEKnkjdwmgnma%2FBF1%2BVXKig4ebExcXigC6%2FWPy9%2FeF3ChSqsffTqjwDmnIlaCdDsZccuhjabG4nza7hR%2B4yeHDDf%2Fet6FqpMENoyp37jkS&X-Amz-Signature=4f1f85abfd72987b6f8fe2fa3d1098484b4d9c8c3dfddc81a8f64fb1c6ce0a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SJWLTR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwYkkEKgcC6AD2%2FHg1K06kH7ootujB9uYJcm9fl9Xj2AiBdZa01gBCqnxvhuj%2B%2FRHJ920J6mSJja3sVc5RiqEmZsSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVzgnp%2BAEA0%2F0GXmKtwDaCFdNL8SgNCa5SZEu%2BRvgPZozp32m%2BZ5J26OBBjq7c070ON4oSYpOi3VxxChD79GyHoKr975N9CFfK%2FZAouIpPfa%2B1wDb7NGCrVNCZhZXCqeTFsMI8x%2F9tkXe0NXbQKcrnO%2Bf2YJ9jMuZm0h6kKlTfmJJm8%2FNC5xUyxd%2FKlJIEBGq%2B0WccD459jcHeBeGMz1zdJtbO4yrfgcfQuiyljXQpfQ5vHwolNRsFxTX5j2Dc7GK205hXQeSvDvDo9ZXw7ESCd1J4MmFnZG%2Fr5Mv%2FY%2B1igUEEBQtvFcp9VKJxc6B4rF%2BoylbynRGWDMqIkK3yFLUKW67fD7I94XLqYBwQQa2JuYNu450UZI%2Bgb6OBo%2BMZVhzrCFOUg3jT%2FUARmylzSOTQtfil7kQqL28HLlWanVZDvmJ1t5tQPtw8MGYtVbX%2FuX4ioMUqy1vk8Fe2V8F7RtnnCXoufBB9eJdEfmyQunYoXPpwc3Z3AODSWnpLgRki7NT3SO%2BB7qHARZT3qJm%2BiJalU45rNYblam5slojzn6NnUcHU4G9BoL%2FKzXwukzGqh9Yfbw06WfUleJy3fAMl2JVgpfMA6Y%2BnD3kZVZ%2BqEY3Gk8GMZcm7RO0ttsxpk15wabTB%2B3Og7SttbPy4Uw0Pj5vAY6pgHASL1hejLilin6uqe%2B86HTVyjRbBYGudJ%2FYfmuFrZ7g6EDHgwPNvGTDDaGHMcdfQEo7bjmzkVm6ohH7fd6lGIlnfEbVOdBvYLgR89yVbpEg7fU8pg2RlHEKnkjdwmgnma%2FBF1%2BVXKig4ebExcXigC6%2FWPy9%2FeF3ChSqsffTqjwDmnIlaCdDsZccuhjabG4nza7hR%2B4yeHDDf%2Fet6FqpMENoyp37jkS&X-Amz-Signature=4391bb30b19fb3e0987245e742b8b258c3f3940d08c88a875e70533063fad220&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
