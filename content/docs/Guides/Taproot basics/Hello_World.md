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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PRVORW%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnzaAyF1rWrbPZbsGPbD0FhGAfh24RvrVncqo2nSY4OQIhALVZmv%2F7NZzSieuOS5U4mgTbqfiqfcoWlM3SexjDREn3Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyErFxTnYZ6Frnlxgsq3AN8AeaClozP2sP9mVU3aZVb%2B5E8awLMw6PG2Nf%2FeY%2FLxtvNhZvZp6uQuCHOm%2FQHKdX%2FH8iweaxUYx1ur07LbSJBB87TQ44XkIPfZc9cYzMlWvtX13Qb24MwcNbseXYevoIhoctldKrGEe2018WdVg4AteEuYDbT%2F3CrgDx%2Fss0BWtR5kyRQSbwYBdnZ2DN%2B2vZYreg8idqO56akd9XYpLVxYmnWICXTbVWDIN5nOMwBQaX9E8CxFlr3q4jVwqa2u3d1rdkc4ULvBQWI0%2BFdUr9IFARkfEcN8nHtUKxtlZC9pAKiBeDoYNFQhN%2F7ID6O4nbrILWyT97sf%2Fy2RSCl6G7Efj7OxPBViV5fMwrJPWVugqPN9pYalzkVM282me%2BEp45aI%2B2rcHlwHZU3omOnX5xf%2BICDzVnQRAEQrtYzEhKh%2BDdnNai5g4VN82L2SR93qsDjZYbZZAoZLRsyD951Vdsz02acc1TGADlnql%2Bz1PO5CjEw5gMn0ZeKUXtKkjTysJNlcfNIrd3ecosLJBV2NpLGG7%2Fn6ZU8OH2SvlBrPsPbza2GbMm9QzIr7lCvwWOJtQdVQ7TQNfNk7Vj5Xq4GZ3YYzNchtSWC589wY4NvWlnUmGrB6UY5K1cGn8hyIDC5xsLGBjqkASaT4zgsQDLRs4M1ZoiCiEe8DI%2BHv9aXRKa5UQuUeBsdYqoDypwj%2FZ7sL%2Fj8DHsueTRkJj%2BHC1L4AtZjozsJNVNjTNFXTWceXQdXXIlyeb71cekqR66Jli87UC6OeZrBXN0sB5TDjTGxZProHm9OjSMpis%2FiRzS0lPm%2Bw50NS%2F82jLKgekawgd8AZlPu4mFgRVKykbRuzssWUuysZWJkOOK8vfdT&X-Amz-Signature=7ba1c7c2eb59fbbf77991dc22835c79c31f82d06b15f84ecb81807ded4244b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PRVORW%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnzaAyF1rWrbPZbsGPbD0FhGAfh24RvrVncqo2nSY4OQIhALVZmv%2F7NZzSieuOS5U4mgTbqfiqfcoWlM3SexjDREn3Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyErFxTnYZ6Frnlxgsq3AN8AeaClozP2sP9mVU3aZVb%2B5E8awLMw6PG2Nf%2FeY%2FLxtvNhZvZp6uQuCHOm%2FQHKdX%2FH8iweaxUYx1ur07LbSJBB87TQ44XkIPfZc9cYzMlWvtX13Qb24MwcNbseXYevoIhoctldKrGEe2018WdVg4AteEuYDbT%2F3CrgDx%2Fss0BWtR5kyRQSbwYBdnZ2DN%2B2vZYreg8idqO56akd9XYpLVxYmnWICXTbVWDIN5nOMwBQaX9E8CxFlr3q4jVwqa2u3d1rdkc4ULvBQWI0%2BFdUr9IFARkfEcN8nHtUKxtlZC9pAKiBeDoYNFQhN%2F7ID6O4nbrILWyT97sf%2Fy2RSCl6G7Efj7OxPBViV5fMwrJPWVugqPN9pYalzkVM282me%2BEp45aI%2B2rcHlwHZU3omOnX5xf%2BICDzVnQRAEQrtYzEhKh%2BDdnNai5g4VN82L2SR93qsDjZYbZZAoZLRsyD951Vdsz02acc1TGADlnql%2Bz1PO5CjEw5gMn0ZeKUXtKkjTysJNlcfNIrd3ecosLJBV2NpLGG7%2Fn6ZU8OH2SvlBrPsPbza2GbMm9QzIr7lCvwWOJtQdVQ7TQNfNk7Vj5Xq4GZ3YYzNchtSWC589wY4NvWlnUmGrB6UY5K1cGn8hyIDC5xsLGBjqkASaT4zgsQDLRs4M1ZoiCiEe8DI%2BHv9aXRKa5UQuUeBsdYqoDypwj%2FZ7sL%2Fj8DHsueTRkJj%2BHC1L4AtZjozsJNVNjTNFXTWceXQdXXIlyeb71cekqR66Jli87UC6OeZrBXN0sB5TDjTGxZProHm9OjSMpis%2FiRzS0lPm%2Bw50NS%2F82jLKgekawgd8AZlPu4mFgRVKykbRuzssWUuysZWJkOOK8vfdT&X-Amz-Signature=ab1177e8d29840320132b9a2f6e31fb74d8114e3158e7a5723e94354d53b29a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
