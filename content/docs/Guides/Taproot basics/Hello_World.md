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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDM4BFWO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICwfrP5ctkZTQJflQJlb%2FhNLx9GsiE%2FqbPFrARy1FdK5AiB9auMb8ubU0e2r9ob%2BEiIqczJlDPg8VJhzlq3pOHjIvCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZhinlJSbkidJ1dxKtwDVVfsFnxT%2Bxd63IrwUV8xq%2FjETegYmawmoKqmlHwMDgrVG1eiAtS%2Bylw9uNJ347XyXJoAUuHjdsWj7SiYbXLO2jvxaiAA7NOQsB9gcFLUUnEoBLVnAPmM1gY6AgU2QADNjwMcWXoyqCHoJ%2F%2BLi90MZ1pdrdIicbxhM%2BHZoIPnYv%2BNHQLrp3TIya7jFdxH8QcJn2xqlHU2MMyoxui3YhiycBPgiNZh96frxBXuXH6sRdJc%2BsVoooYEf1MsMZJ8SfEA11S3NvReJIiTY06Y%2FxV6cKWojTg8W%2BMD8NtPKMZdnvgORy%2FEDF4kBXWsq9v7FJuYni%2BjYd1076qxYkbX6xlGH3Otd50tAC4xztEdnevks5CUc%2FCSoLJDSlaUk5WZ7qQPWFUZdMcnQYNF0xWk2x5sPBj46B5ciupDg1vvF0HXnaXW89Vi3OCGQkKJSk71rLLnCZEY7BCGMj16EN%2F6jTnGmVimjcNjMHseVhZHQUAsbrC9wyJfC%2BkPD1twnTtJj4Pvkt1wv6B%2F3NwepM3ozs%2BS5iSmeErEsb%2FqI5MmTlcWntWhKSvj09IUI0HmzZ3AtiXc4ySF53wJwXYiXQla4dvonnRGqjQrLA6WYh4Tr0BhDdQt2vennZcy8HncVlEwm6SMwQY6pgE%2BYtHQA8yemeOqnBYPc387OcFSda2fNfmxbpWP9Ecx%2B3hJS8smBtS%2FCQijZFMhukBRhJm8wyGg5z14OMaf%2FHecMgwbP6WwXAoG0Qfq6oGNK9NHrCWkWtdUjtqfDq69b7TBktgkv3CwQbNP6B0Q0f6KKqMVubnGFZc4z3r%2FZpQMPpn0h34mrkqhs3Eq4k7PN%2FoEg6hNBgUREsBcwH5QZP23YsmvPsAt&X-Amz-Signature=e4c1de8a5c1dd32733cedae9f7a669ed6a0d531f0eb0a4471d5f13d2a2df1a75&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDM4BFWO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICwfrP5ctkZTQJflQJlb%2FhNLx9GsiE%2FqbPFrARy1FdK5AiB9auMb8ubU0e2r9ob%2BEiIqczJlDPg8VJhzlq3pOHjIvCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZhinlJSbkidJ1dxKtwDVVfsFnxT%2Bxd63IrwUV8xq%2FjETegYmawmoKqmlHwMDgrVG1eiAtS%2Bylw9uNJ347XyXJoAUuHjdsWj7SiYbXLO2jvxaiAA7NOQsB9gcFLUUnEoBLVnAPmM1gY6AgU2QADNjwMcWXoyqCHoJ%2F%2BLi90MZ1pdrdIicbxhM%2BHZoIPnYv%2BNHQLrp3TIya7jFdxH8QcJn2xqlHU2MMyoxui3YhiycBPgiNZh96frxBXuXH6sRdJc%2BsVoooYEf1MsMZJ8SfEA11S3NvReJIiTY06Y%2FxV6cKWojTg8W%2BMD8NtPKMZdnvgORy%2FEDF4kBXWsq9v7FJuYni%2BjYd1076qxYkbX6xlGH3Otd50tAC4xztEdnevks5CUc%2FCSoLJDSlaUk5WZ7qQPWFUZdMcnQYNF0xWk2x5sPBj46B5ciupDg1vvF0HXnaXW89Vi3OCGQkKJSk71rLLnCZEY7BCGMj16EN%2F6jTnGmVimjcNjMHseVhZHQUAsbrC9wyJfC%2BkPD1twnTtJj4Pvkt1wv6B%2F3NwepM3ozs%2BS5iSmeErEsb%2FqI5MmTlcWntWhKSvj09IUI0HmzZ3AtiXc4ySF53wJwXYiXQla4dvonnRGqjQrLA6WYh4Tr0BhDdQt2vennZcy8HncVlEwm6SMwQY6pgE%2BYtHQA8yemeOqnBYPc387OcFSda2fNfmxbpWP9Ecx%2B3hJS8smBtS%2FCQijZFMhukBRhJm8wyGg5z14OMaf%2FHecMgwbP6WwXAoG0Qfq6oGNK9NHrCWkWtdUjtqfDq69b7TBktgkv3CwQbNP6B0Q0f6KKqMVubnGFZc4z3r%2FZpQMPpn0h34mrkqhs3Eq4k7PN%2FoEg6hNBgUREsBcwH5QZP23YsmvPsAt&X-Amz-Signature=327ade7780ea151c731c9347ebcf4812405cd69e502afcf153b7142f1edf452d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
