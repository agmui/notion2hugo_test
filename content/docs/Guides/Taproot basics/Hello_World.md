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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVW7NBEU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDLlZrzofuynkzhZpg%2BZEhGFuVw%2B9iluxdHkPwfmmrGpgIgeobiScJ3gObBv6zsHSz8cqbz0P9THzHTBiNGR0Xjgw8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdDXreXKXECro8qASrcA2ZP%2FdZbaZNC5RM4O0%2BnUn316xRNeNJu52%2BEw9Jr1K4Ov65RplRZKVwk4ewfgJJs8KBN1hur2fqgDHlSKwh%2FitGfEQhAHb9Me9kYfi2NBvlkRJCSSE3YexNtwcB7MXqjH%2Bne8hiXSbSzb6knBRIEqmgQpgX%2BeILv6NmII48Rf2QdSbmciv4p1%2BlIB7SiADdcydL4HyC7p3biYnR6E9nSnWc0LBbmOUZHdvjKkzWmtXuCjDo2ropCQzvpTb6YZmxot4EP5%2BHc2jw2s89geaTAyXlJuBymBe2im7jmZBSqp4Y6o4tJo4KqkMnZ2%2BtT%2FYy4D2YHeZvyZ1nmrQWsr2euN%2BFN7PL67C%2Bq6075Zi3l62sJrgEUj1T1Oe6EoTzGjWGn%2Fr9owRDOG6gNjJ1cqKzcd14tjgVtqkfbWc4zlfmGiuz3vMbBLYZAtLnqE2qJ4eG84tZQtunJiMU7dkmybcmEL681qOFsXMkScWwYtDJN8Fce59%2Bo9keFmR3tdkCyCEbORIAfgOm250%2FP48Yl0LoxYF5TmCCTHtDZjfd5iYuejl9b%2BOnCyJNuo2Z9%2Fitiq9TOjgeoqRRJ1EATR2o%2BXJETr7uq7XuSYPVSNjcWvPShLz7kdvxmxSscsy9Ury5VMPKEhcEGOqUBR2bAGjLTAUQLgqvrx%2F7yJz2oyLdmkddFz3eryuca5h6jrX%2Bh9oZ%2B58VUCJENGLyVEde5DE1GU8G7qTBjcgBbgg5HnqqevoZ%2FMEYoAoeFnrULyyvb370RddNHmWM%2FsOHRiYffsRowa0PXp39taDhYT%2BUm4xhqRN0eYoRV97%2B0FAJoTz62lBllMp%2FJT%2BeOXCL8DIaK9j%2BCdvvjnlQxolsl11%2FJ52i5&X-Amz-Signature=f78b5f989fd6fe201da8e0ed9dc72ab3498313bfc36eca75dc85047131d605d4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVW7NBEU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDLlZrzofuynkzhZpg%2BZEhGFuVw%2B9iluxdHkPwfmmrGpgIgeobiScJ3gObBv6zsHSz8cqbz0P9THzHTBiNGR0Xjgw8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdDXreXKXECro8qASrcA2ZP%2FdZbaZNC5RM4O0%2BnUn316xRNeNJu52%2BEw9Jr1K4Ov65RplRZKVwk4ewfgJJs8KBN1hur2fqgDHlSKwh%2FitGfEQhAHb9Me9kYfi2NBvlkRJCSSE3YexNtwcB7MXqjH%2Bne8hiXSbSzb6knBRIEqmgQpgX%2BeILv6NmII48Rf2QdSbmciv4p1%2BlIB7SiADdcydL4HyC7p3biYnR6E9nSnWc0LBbmOUZHdvjKkzWmtXuCjDo2ropCQzvpTb6YZmxot4EP5%2BHc2jw2s89geaTAyXlJuBymBe2im7jmZBSqp4Y6o4tJo4KqkMnZ2%2BtT%2FYy4D2YHeZvyZ1nmrQWsr2euN%2BFN7PL67C%2Bq6075Zi3l62sJrgEUj1T1Oe6EoTzGjWGn%2Fr9owRDOG6gNjJ1cqKzcd14tjgVtqkfbWc4zlfmGiuz3vMbBLYZAtLnqE2qJ4eG84tZQtunJiMU7dkmybcmEL681qOFsXMkScWwYtDJN8Fce59%2Bo9keFmR3tdkCyCEbORIAfgOm250%2FP48Yl0LoxYF5TmCCTHtDZjfd5iYuejl9b%2BOnCyJNuo2Z9%2Fitiq9TOjgeoqRRJ1EATR2o%2BXJETr7uq7XuSYPVSNjcWvPShLz7kdvxmxSscsy9Ury5VMPKEhcEGOqUBR2bAGjLTAUQLgqvrx%2F7yJz2oyLdmkddFz3eryuca5h6jrX%2Bh9oZ%2B58VUCJENGLyVEde5DE1GU8G7qTBjcgBbgg5HnqqevoZ%2FMEYoAoeFnrULyyvb370RddNHmWM%2FsOHRiYffsRowa0PXp39taDhYT%2BUm4xhqRN0eYoRV97%2B0FAJoTz62lBllMp%2FJT%2BeOXCL8DIaK9j%2BCdvvjnlQxolsl11%2FJ52i5&X-Amz-Signature=8b1d9b34ae43e5d14c228ab12dc9d638f12a7051093b788337640f0c0c883916&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
