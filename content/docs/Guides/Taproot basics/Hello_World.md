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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTLBIRD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJpuZgEKXghrV4GBfug3mt1kYlJnlLCc%2Fh2n3keVT8jAiApc5%2FkrOxEDieeaWQGNzPO%2B1j1tzIpELeNnb4R2shh1CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPROPoVtI68zWvJvIKtwD%2BAAQuqCzRP1g6ApRST0kMIUhaQpP9FOWFQTjiu%2B%2BJDkA%2Faf%2Bt4QA9yB6HSHm9IgaqbgFpGkWZvaNExZ4qqBvoBxkDHf43kinf%2FgxHSq701gs0mV6BjbFn0ep6LpKLZgcFCMv0DjCWvuztXKZ7jMfNqpalYAHz%2Bbnfu4ymZPD6%2BOSTr7qTToXFYWxgvjJxolkNnfuAa6WgfvmF%2BBjcvUvIEBJ11oobalHl3pXcGmQj4rlPanWKxZu%2FR87WR1LoAB4UeJzs3seA4iW1M2n7EVCS%2BowJzpIsIvNS7aX%2BRlPX2vlYbz1Q%2FoS2Y46zU9Ei%2FfF%2FDN2G%2F%2B8ZYFtnGIJCzDfVH5cppp3Mg%2BF%2BZhSBc8q4z5m%2BdHvpgzqBp%2F%2FSVSVglwoJYyijEjPJPP%2FIXAEmPgrArk1t23wf%2FP8m8v9FpmPmoWLa%2FlK%2FMTOStrBO6myQAQ0Ekvmu05qrlw1fN4PHvgg%2FEyP11z6RGQIz6qA60QpsjYAgiZdZt6SZ2cNNZLZhe6NdH%2BQo8WFRPb8LLuByTG6689leN0k6LgkYZp5POLIgndwGvr%2Ffq4EFMuLcbcg7VIHyzixDJQkHvJEfWPG3gpHdb8LK96T1f0idZHO0iv0Oik37L%2B6MPyfDwv6I1cw3LuEwwY6pgHCIeqUpcECj57K%2FV84AHsRXcXC3dyb%2FkC2zBM92ikUtFxFA3nLA8a731mq13yzVagmXR37QoC9onRY2cjK1GCVmYD4K61J5zQglFN9czdv1%2B7aSFX%2FtyW7uDObk3h9jtPz5EIc%2BJ%2BklcnUPwx9De4RQQHwSTqcydrdAttus6Isjilm6UYfxgRUiMw2C8EYYpW4pZ%2FSxMF%2B8vv3Zt5fO%2Bvm%2F79wzuro&X-Amz-Signature=45d15984961bbb8808e7295916bc0ad62fba70ed22b952d8174c9db2a22cb11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTLBIRD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJpuZgEKXghrV4GBfug3mt1kYlJnlLCc%2Fh2n3keVT8jAiApc5%2FkrOxEDieeaWQGNzPO%2B1j1tzIpELeNnb4R2shh1CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPROPoVtI68zWvJvIKtwD%2BAAQuqCzRP1g6ApRST0kMIUhaQpP9FOWFQTjiu%2B%2BJDkA%2Faf%2Bt4QA9yB6HSHm9IgaqbgFpGkWZvaNExZ4qqBvoBxkDHf43kinf%2FgxHSq701gs0mV6BjbFn0ep6LpKLZgcFCMv0DjCWvuztXKZ7jMfNqpalYAHz%2Bbnfu4ymZPD6%2BOSTr7qTToXFYWxgvjJxolkNnfuAa6WgfvmF%2BBjcvUvIEBJ11oobalHl3pXcGmQj4rlPanWKxZu%2FR87WR1LoAB4UeJzs3seA4iW1M2n7EVCS%2BowJzpIsIvNS7aX%2BRlPX2vlYbz1Q%2FoS2Y46zU9Ei%2FfF%2FDN2G%2F%2B8ZYFtnGIJCzDfVH5cppp3Mg%2BF%2BZhSBc8q4z5m%2BdHvpgzqBp%2F%2FSVSVglwoJYyijEjPJPP%2FIXAEmPgrArk1t23wf%2FP8m8v9FpmPmoWLa%2FlK%2FMTOStrBO6myQAQ0Ekvmu05qrlw1fN4PHvgg%2FEyP11z6RGQIz6qA60QpsjYAgiZdZt6SZ2cNNZLZhe6NdH%2BQo8WFRPb8LLuByTG6689leN0k6LgkYZp5POLIgndwGvr%2Ffq4EFMuLcbcg7VIHyzixDJQkHvJEfWPG3gpHdb8LK96T1f0idZHO0iv0Oik37L%2B6MPyfDwv6I1cw3LuEwwY6pgHCIeqUpcECj57K%2FV84AHsRXcXC3dyb%2FkC2zBM92ikUtFxFA3nLA8a731mq13yzVagmXR37QoC9onRY2cjK1GCVmYD4K61J5zQglFN9czdv1%2B7aSFX%2FtyW7uDObk3h9jtPz5EIc%2BJ%2BklcnUPwx9De4RQQHwSTqcydrdAttus6Isjilm6UYfxgRUiMw2C8EYYpW4pZ%2FSxMF%2B8vv3Zt5fO%2Bvm%2F79wzuro&X-Amz-Signature=3be48ae141a9cf482405e5a8e12aa2f6c8f3c9f899ce78764cd6128223bd06bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
