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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UESRY6H%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVxEQJV%2FNCPK2wnp%2FmByEyS4nsVHUAmNXyjqaCCko%2BAiBlOsEifBLyYGutHwqMHpY9z6yqIh2JhB6hX6JHwG3kHiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9YGkXgDjKL%2FMwIbKtwDX2Wi8F39lSW7zqOAYVo%2BQ7FlXt7wjbMhAMuiE73gjhL2DVZ%2Fo2s1KkLWz50hg5G9qvip8G7PEZIUyvrvhCyH6twLzSqRgWed7KQVKL4VVy3XPVh8bLJfRvWeKmrsx3VwiBIc%2BSf7eezT5BlR%2Bpj5XTlRS6YU8QtOWlBkdN6tdhVlHDA9BgxcnYG1XXLdNxaYYJ7IvivvHmbwAsFSKZRPXqIKfXEr%2BWRxQuNbZ4oTIe9nZMPxhhIQUxJ79GXbP0MwqcBGs7Cy%2F%2BcTYfw4dx0OOendIYlfYFclJcLqPKxDhuS%2FL%2ByKPCByc7Y5VDsM%2BMUIcOyCGyx9LYEZ%2BtqYHerIQEJYb20nQ7mVRLFyyuH%2B98S80azv54jEJOBTqxOVILd42qA%2B9ASn4o9MnkskWgjJytan%2B8JQz5S6tup5P0WC99XYcnn3%2FZxPelV35%2BDmkUBobJmKcm8KnBLL6Vq%2B4mEGYRzDOyPzjWbwHZY9%2Boc9HgxcTOiK3fg1sC%2BPXqXkCUw0DiufwxlWPZzcXz1UBSVEG7oI9j1vqP%2BUIu6qwlFFL%2F1tUn%2FyxMtGCNKQZYvbkrqSsVqaypvGljexrVbEgqwDFQOkpML7puhQSe4D9sC2BF5SjVOVRZtpJiVzqxYwyYTLwwY6pgEQTdeVn5zcSnwwT0w9FCFOfmETCZq%2F8un3ljsyc%2FuWLM%2FfXu7Ac0oy6yTfbG4fmSnVtsYeELtAwzYZC9C%2FkCaodAkfEpaonmjxL7y34l%2Bqf88TJ5nfXrG05FFouYZvXrbrsIrVJiDLnn2d9Q9%2BMkOyGmpbj69uimBeG3QZ%2FDnzTqm%2FOke5qdJlcSuDSzAih3g7bOIds6Ds9G1umXP0KBojHevujGzJ&X-Amz-Signature=aff7bec7490ce8d1a68ccca0c0c2b272bf33915c0d5428d1b95ec921327492ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UESRY6H%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVxEQJV%2FNCPK2wnp%2FmByEyS4nsVHUAmNXyjqaCCko%2BAiBlOsEifBLyYGutHwqMHpY9z6yqIh2JhB6hX6JHwG3kHiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9YGkXgDjKL%2FMwIbKtwDX2Wi8F39lSW7zqOAYVo%2BQ7FlXt7wjbMhAMuiE73gjhL2DVZ%2Fo2s1KkLWz50hg5G9qvip8G7PEZIUyvrvhCyH6twLzSqRgWed7KQVKL4VVy3XPVh8bLJfRvWeKmrsx3VwiBIc%2BSf7eezT5BlR%2Bpj5XTlRS6YU8QtOWlBkdN6tdhVlHDA9BgxcnYG1XXLdNxaYYJ7IvivvHmbwAsFSKZRPXqIKfXEr%2BWRxQuNbZ4oTIe9nZMPxhhIQUxJ79GXbP0MwqcBGs7Cy%2F%2BcTYfw4dx0OOendIYlfYFclJcLqPKxDhuS%2FL%2ByKPCByc7Y5VDsM%2BMUIcOyCGyx9LYEZ%2BtqYHerIQEJYb20nQ7mVRLFyyuH%2B98S80azv54jEJOBTqxOVILd42qA%2B9ASn4o9MnkskWgjJytan%2B8JQz5S6tup5P0WC99XYcnn3%2FZxPelV35%2BDmkUBobJmKcm8KnBLL6Vq%2B4mEGYRzDOyPzjWbwHZY9%2Boc9HgxcTOiK3fg1sC%2BPXqXkCUw0DiufwxlWPZzcXz1UBSVEG7oI9j1vqP%2BUIu6qwlFFL%2F1tUn%2FyxMtGCNKQZYvbkrqSsVqaypvGljexrVbEgqwDFQOkpML7puhQSe4D9sC2BF5SjVOVRZtpJiVzqxYwyYTLwwY6pgEQTdeVn5zcSnwwT0w9FCFOfmETCZq%2F8un3ljsyc%2FuWLM%2FfXu7Ac0oy6yTfbG4fmSnVtsYeELtAwzYZC9C%2FkCaodAkfEpaonmjxL7y34l%2Bqf88TJ5nfXrG05FFouYZvXrbrsIrVJiDLnn2d9Q9%2BMkOyGmpbj69uimBeG3QZ%2FDnzTqm%2FOke5qdJlcSuDSzAih3g7bOIds6Ds9G1umXP0KBojHevujGzJ&X-Amz-Signature=80f234b73d9693175007a171fbb565dcf1e49306d53dd9c66200c16f42a9e41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
