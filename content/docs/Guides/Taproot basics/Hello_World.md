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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY55DPK7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZWCqgmRHr%2FTPIzJdnhEYeCrEoSSvb%2FpUIxY%2BuUaTewIhAMRJfIRpeSy29jfiyhDsV6QAxD%2F4jUX8h81Gn7cMwgojKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2Vumjz8xmTSpGdsq3ANhy6fr6%2BKMzueTU1MwMAbw5Ty0lXOv8X86MdLg1Zx7u%2Fv%2BKM0GLZVD%2B%2F8yQ5EBB5HQiRg%2FYZMSHoioGSnqokBMSUZulA2kFKbdCn5iT5ogQvWtWEaTkH10uzBSJfwONxkjjhmQDdvMqnlUlxbk2bWGCwfaqlrzjklu5ZghBfcrIzBrQrtpctMtSLvLk%2BU43TZonNS9Lj1vsNw2YDc6j3RSSlHLqZLlIHngJ70zz5AVdcY9WAmploBGuxKmew21Wn%2Fa5cK7w2smRoIL8CI2t2c%2F5fIKAwf%2F3oiBhUcXVRX9RbY0j20c1BiT2qYEY7NVerguxbUl0%2FmzftpIYLFEwnC7cUe7nGFL5P94AU8kwS5r9jdl3A3ZKiawFLMgbKk7SNDtpsoo3EWAUm2sikiouOJu%2FhdLcZ1dXY4IJ15KKpgEX5AN0odFKqZp0%2Fi2g8YGFbU4PY4MQM%2BbE5IE2IGAFL5stYYYBrzibhPALG0pHgND57YSjNPvXZuLaflphtwDmijws1sHRb7n2tvz%2Fq9FeWaJkmkpuHqeLpIZNEd6PnXeXZap4AvD3HkKUia0%2BPcsG3%2BW6%2Ft38rY1rce%2BcVGT3zrn3qJ%2Bbox60OGZJQnlq8e10%2Bpo1LwFAND6jVTQrzCCoJS%2BBjqkATkV3pAvbo92g%2B6SX08jdQL2UIbE%2BbnJt5mw9LzgZs9roR8Vrq13cR5XoMMyDf7ffho1sh8rN6PvkHKSUV0BU2NbJcElfgDexyQQgYiKZ64az%2F6Y7AG1WUDiAEuRfyeJzbZyoIkL6pcOL%2Fi%2Byoxieg4Lz282CbHdSj1kf2evujzTMIVtUSAaDGRyNG%2FWSEdJGq%2Bp566IlRieSQxKMDqNxzA4tI5Q&X-Amz-Signature=df49a54e8693e0160614c8b43d1b2c8eb00ca234d1d936ce2755b7639130f7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY55DPK7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZWCqgmRHr%2FTPIzJdnhEYeCrEoSSvb%2FpUIxY%2BuUaTewIhAMRJfIRpeSy29jfiyhDsV6QAxD%2F4jUX8h81Gn7cMwgojKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2Vumjz8xmTSpGdsq3ANhy6fr6%2BKMzueTU1MwMAbw5Ty0lXOv8X86MdLg1Zx7u%2Fv%2BKM0GLZVD%2B%2F8yQ5EBB5HQiRg%2FYZMSHoioGSnqokBMSUZulA2kFKbdCn5iT5ogQvWtWEaTkH10uzBSJfwONxkjjhmQDdvMqnlUlxbk2bWGCwfaqlrzjklu5ZghBfcrIzBrQrtpctMtSLvLk%2BU43TZonNS9Lj1vsNw2YDc6j3RSSlHLqZLlIHngJ70zz5AVdcY9WAmploBGuxKmew21Wn%2Fa5cK7w2smRoIL8CI2t2c%2F5fIKAwf%2F3oiBhUcXVRX9RbY0j20c1BiT2qYEY7NVerguxbUl0%2FmzftpIYLFEwnC7cUe7nGFL5P94AU8kwS5r9jdl3A3ZKiawFLMgbKk7SNDtpsoo3EWAUm2sikiouOJu%2FhdLcZ1dXY4IJ15KKpgEX5AN0odFKqZp0%2Fi2g8YGFbU4PY4MQM%2BbE5IE2IGAFL5stYYYBrzibhPALG0pHgND57YSjNPvXZuLaflphtwDmijws1sHRb7n2tvz%2Fq9FeWaJkmkpuHqeLpIZNEd6PnXeXZap4AvD3HkKUia0%2BPcsG3%2BW6%2Ft38rY1rce%2BcVGT3zrn3qJ%2Bbox60OGZJQnlq8e10%2Bpo1LwFAND6jVTQrzCCoJS%2BBjqkATkV3pAvbo92g%2B6SX08jdQL2UIbE%2BbnJt5mw9LzgZs9roR8Vrq13cR5XoMMyDf7ffho1sh8rN6PvkHKSUV0BU2NbJcElfgDexyQQgYiKZ64az%2F6Y7AG1WUDiAEuRfyeJzbZyoIkL6pcOL%2Fi%2Byoxieg4Lz282CbHdSj1kf2evujzTMIVtUSAaDGRyNG%2FWSEdJGq%2Bp566IlRieSQxKMDqNxzA4tI5Q&X-Amz-Signature=2b566c7cf0324e0a07dbdac775e7c8e1463372c51bd48988011eba7e027f3155&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
