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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOIROMV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCNuaJvuzasxwV9gV52NXDS7waNDIDzVodhtIZF53ynwIgF%2BRxpwKcy9uztCQfXESy9Q8hokqPuQLg9N9kmgRzpqgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOVFl2X3TvHePvzEzyrcA9wtD0a3Vybuy2ROyIByl9JuRqUtgw1iyc%2BhJR1Q9OkGjSjeEzvNp9oAeUeiGNFiUQFT6oIb2ACriBTkWczGiJ2MSspg65nl6BXQD1Zr%2Fw2k6WWwE0pTbZh70UE6K6E7PRz6M706b6Hyu3e6Z%2FTTN1lUe18hXIrSHs57r0aKKz5dF%2FunqJ9bjdnvRsXIJJMF6yYQiq%2BH98hZEJ5AvQxQTop8EOBROARpUpvXhlYkHJVphfkLHBIjTAoHB52C8%2BPgqxT34xOitAWKskw8cQg7axJ6XMuDDN8y%2F%2FBntoESukOAqtKuZ0pSs2IUuCw6pCZctFblxScvuP4Q5tI65SqKfsZgpSRs836bCpYKKv5nnKn9NZD3KWFV%2B0e%2B4XQUM%2BviYRM94ToaDcDq8gHM5SKGaufUvh4tb9t1bzpVPRnO29FaWQCOCkiO4RfRTfdfqZNGrH9LMYKydHKkCxrn4iDG1C%2FUvgnoAvhlT9woHG6OXm9n6o5ZJbJEU5MT4hHLsmIDKJpHtLxbwPyG%2B%2BYcQ6MGqxBMvL666FeLmQGwR2zppSTBw0zHgrmM7ll9k9CJ4FbMvRI4QbYnsbeY0lgJEsR1WTsm7dvyaSdhblvRJ1d9XX1Z6%2BX6ziKc94%2B2RsKyMIDKyr0GOqUBag8i2Qy2r%2Bf1G3tZRWCwSUvqiPSOXXGWzUjN2CW2SRAv9NSeV9MEL7sdBP%2FI2W%2FnpB4tnlyD%2B42xlmyHp4x6x7medgdhXVJnY7E1WLXMkGOcnMjcgZ4%2FR4Mtxd1%2BoDyZHmXAapsP%2FGIUWqMbxGwY5%2FBXwOVkM3P%2FeYMnkLCQqIE6bZEaQhRX%2BQ5XkyKmHXX7R6RoUSHZqgNnROePdndSiXQcy%2Bbj&X-Amz-Signature=a75255721f92eaa3961ea8243a904abbd6ad4b5769a7be5907ddf2efad536ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOIROMV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCNuaJvuzasxwV9gV52NXDS7waNDIDzVodhtIZF53ynwIgF%2BRxpwKcy9uztCQfXESy9Q8hokqPuQLg9N9kmgRzpqgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOVFl2X3TvHePvzEzyrcA9wtD0a3Vybuy2ROyIByl9JuRqUtgw1iyc%2BhJR1Q9OkGjSjeEzvNp9oAeUeiGNFiUQFT6oIb2ACriBTkWczGiJ2MSspg65nl6BXQD1Zr%2Fw2k6WWwE0pTbZh70UE6K6E7PRz6M706b6Hyu3e6Z%2FTTN1lUe18hXIrSHs57r0aKKz5dF%2FunqJ9bjdnvRsXIJJMF6yYQiq%2BH98hZEJ5AvQxQTop8EOBROARpUpvXhlYkHJVphfkLHBIjTAoHB52C8%2BPgqxT34xOitAWKskw8cQg7axJ6XMuDDN8y%2F%2FBntoESukOAqtKuZ0pSs2IUuCw6pCZctFblxScvuP4Q5tI65SqKfsZgpSRs836bCpYKKv5nnKn9NZD3KWFV%2B0e%2B4XQUM%2BviYRM94ToaDcDq8gHM5SKGaufUvh4tb9t1bzpVPRnO29FaWQCOCkiO4RfRTfdfqZNGrH9LMYKydHKkCxrn4iDG1C%2FUvgnoAvhlT9woHG6OXm9n6o5ZJbJEU5MT4hHLsmIDKJpHtLxbwPyG%2B%2BYcQ6MGqxBMvL666FeLmQGwR2zppSTBw0zHgrmM7ll9k9CJ4FbMvRI4QbYnsbeY0lgJEsR1WTsm7dvyaSdhblvRJ1d9XX1Z6%2BX6ziKc94%2B2RsKyMIDKyr0GOqUBag8i2Qy2r%2Bf1G3tZRWCwSUvqiPSOXXGWzUjN2CW2SRAv9NSeV9MEL7sdBP%2FI2W%2FnpB4tnlyD%2B42xlmyHp4x6x7medgdhXVJnY7E1WLXMkGOcnMjcgZ4%2FR4Mtxd1%2BoDyZHmXAapsP%2FGIUWqMbxGwY5%2FBXwOVkM3P%2FeYMnkLCQqIE6bZEaQhRX%2BQ5XkyKmHXX7R6RoUSHZqgNnROePdndSiXQcy%2Bbj&X-Amz-Signature=a91f1c4db34d5471602da6d8c01e017f6b19b073181b7abab9687e08acf433a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
