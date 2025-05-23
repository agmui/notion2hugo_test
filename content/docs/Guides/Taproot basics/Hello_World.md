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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIUMASQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDgO%2B81eJG9C0isgSyg2UdRFZ4JZAZhpz%2Fw3Y8lxQfhRgIhAM1WCtVYLa%2BmAEzLhZbyyRVbAt08uBt16sG8eJRwwbrJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywxCKAXo6w3eGAYcEq3AN03i6HWzYF%2BQH%2BDSOjbjaHu3v0V%2FsXo4%2FqkajsBRMbOSXp1Wze%2FGDG0i%2BhJQ1YGC86PGwkngwkVsQA%2FZ067scpbNhuOxyOTiJ1IZq6dixRS9JWhzA63CHOCpeBA7DeJE9dbZ%2FxqwsSLSXoK4ANLKGfCqw7%2BUuIbh%2BWETDKlmOyXn6K4gLeBa%2BeZ6fwZ%2Bc1l3l8ow7SlGqNqutqG5FFlIV%2BCtBTN%2BRQgmytMXfooIcYh741IXBQbJUPmT4%2FxnYauXdumiV4tZ%2F9lpd%2BZOZacGqT8DfGeGcXAFe%2F%2FBgz9MAPJ2wdVFmmHpo7YcBWpysB85NlP57jmFWOIP77mE07BjXgO3wExuAJS1HGl2%2B3h3Ty5EJPF5Yzvpo7TFi%2BRw1uiaKw0FuoneK9orsrzpukkhPKOkMkpZbde9%2BWX9yjPD5hxr8c1hkYPUY9dkpsn9X4mUy4ywkaXPbC9Oov6UNmr9l8PJ96QlqIITI5tMTkbvqOeWZXI5F9VYeO30pKJzccKOqKPtkzVHnr62%2F8FMxRJs08k8f2sberB3tR8ldDbrglxBInh7XsEOvSwQQMi11M6WQOIHbfS5ToU0M674YUBywS6OBHD6aC5s%2FZK2x8zdHbokf9QFgIebM6YCyGdDDkwb%2FBBjqkAY928udZ%2FaGr38Bka0rcCoz6WCbsDVLM1tP4J4yluFNsD2XEOqxoYciAKt%2B8yuFbBmAUBjgQMX6BTBl79A0hWgTq4bYUuTXIbzWmv6wrEDo3qQceev0KNL4RWn%2FnxEE7vqgOCjTXPmIdIrS3hNXbIcUVRukaIpEjYD3dDoTfM4RVhhX1yjTGvR5gT5P883HYdqLSe7rAYMdDLUq50Z6kwiKSxBgJ&X-Amz-Signature=03b8b66a961aede8b376db9aa0e769aa6569fa3ecd0812b00c9081694025d876&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIUMASQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDgO%2B81eJG9C0isgSyg2UdRFZ4JZAZhpz%2Fw3Y8lxQfhRgIhAM1WCtVYLa%2BmAEzLhZbyyRVbAt08uBt16sG8eJRwwbrJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywxCKAXo6w3eGAYcEq3AN03i6HWzYF%2BQH%2BDSOjbjaHu3v0V%2FsXo4%2FqkajsBRMbOSXp1Wze%2FGDG0i%2BhJQ1YGC86PGwkngwkVsQA%2FZ067scpbNhuOxyOTiJ1IZq6dixRS9JWhzA63CHOCpeBA7DeJE9dbZ%2FxqwsSLSXoK4ANLKGfCqw7%2BUuIbh%2BWETDKlmOyXn6K4gLeBa%2BeZ6fwZ%2Bc1l3l8ow7SlGqNqutqG5FFlIV%2BCtBTN%2BRQgmytMXfooIcYh741IXBQbJUPmT4%2FxnYauXdumiV4tZ%2F9lpd%2BZOZacGqT8DfGeGcXAFe%2F%2FBgz9MAPJ2wdVFmmHpo7YcBWpysB85NlP57jmFWOIP77mE07BjXgO3wExuAJS1HGl2%2B3h3Ty5EJPF5Yzvpo7TFi%2BRw1uiaKw0FuoneK9orsrzpukkhPKOkMkpZbde9%2BWX9yjPD5hxr8c1hkYPUY9dkpsn9X4mUy4ywkaXPbC9Oov6UNmr9l8PJ96QlqIITI5tMTkbvqOeWZXI5F9VYeO30pKJzccKOqKPtkzVHnr62%2F8FMxRJs08k8f2sberB3tR8ldDbrglxBInh7XsEOvSwQQMi11M6WQOIHbfS5ToU0M674YUBywS6OBHD6aC5s%2FZK2x8zdHbokf9QFgIebM6YCyGdDDkwb%2FBBjqkAY928udZ%2FaGr38Bka0rcCoz6WCbsDVLM1tP4J4yluFNsD2XEOqxoYciAKt%2B8yuFbBmAUBjgQMX6BTBl79A0hWgTq4bYUuTXIbzWmv6wrEDo3qQceev0KNL4RWn%2FnxEE7vqgOCjTXPmIdIrS3hNXbIcUVRukaIpEjYD3dDoTfM4RVhhX1yjTGvR5gT5P883HYdqLSe7rAYMdDLUq50Z6kwiKSxBgJ&X-Amz-Signature=c09757fdd0d122833c1f8cf5dfbc6827fbd5e8b06a371a06421dc2c27f359f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
