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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP26T2ID%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCSM4x4D4gG8dmjV5ejIvkkmhSXsvdAGZA0NWLlqJIQAwIhAM4XNOWI3ebStkkcWbo%2BdW6Y75aDFeuYjiQqkDmUqtY%2FKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIlsIf2XYhIinQ2nAq3AMg%2FKjPNa6jhEMeIlHe9rhLay3NDci9LvBcHha2aQZeD1XW9mRafeWKxu8ymCVIKBmgVUn95ug27gzMbAPIgdoG62KzJrYdxE0ZI%2FbILPtHGwrG1t2LrhLM3bIjXJqOTgNA9WE96q52nv5kwV0fWuAQdPKntLFn5nfIpn7uZ15Yr2LzXLKC%2F45KUmsMEh4atU220EPoqVe94XqBM6uFh5o29xUS%2FdrjO8KImrBydwNAgR1QUZzZYmGScw1QZIQUHRgdjtqnHrFEzBUoRzs04H7fKUtMulK8tcqNZEsJbkz2Pe8%2Bqp6qr4xRwlXqy8tOIyWfdE5IbBLkvRROwKCOoOBbDAIVH6lov1%2F4i7JncX9NZfGnFaYZHKisSlspTu0DB0VsM6SEhcoC2EqC90gDh6GpSEUEqRdgZM44G%2BknwCItPRHKU4KpVQN%2BkFXthb5i8jLTwly%2FHY4sxk46frPfflnGo6ypRzCJRhKzyF%2FfvzNk4QmGaSa%2BXAj4%2FsOYlKePATRQzv9U1zlIF0eF1%2BLdkbf4ClLEvriCJQmAd7UDaSEvFu8SRqwxU6H9UWjUbag8OqS92ZHlQFIeAP%2FY9Bp0ioNJ2yZVTY9O00qhRo6h4PFS6DyIg433COmgCurDZTDYyKfCBjqkAS%2B%2Fsg65kNycyYeotZ505mokttbjE2b5CTG6YwCLx2g6vVdErRpTL4IUVUqZ2O681n4Zi4dp98fIxwSN2mHn1yXGRfIrtz9YVsgurpM48QWG4zv%2BtTuYT6Da2AZVBA9Ca9gOBePLkXRFthyM0lMKCheg345Eri%2BGDLCSqb8CGEqVnFoumbEmzhPl6KqoFEDBflpKol1mlXODoGawJaxwQ7njI%2Bm4&X-Amz-Signature=7b6d9f27b3e3fd7134808f1a867d8f063b46a2e952b942a4a68d864bf73eeef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP26T2ID%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCSM4x4D4gG8dmjV5ejIvkkmhSXsvdAGZA0NWLlqJIQAwIhAM4XNOWI3ebStkkcWbo%2BdW6Y75aDFeuYjiQqkDmUqtY%2FKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIlsIf2XYhIinQ2nAq3AMg%2FKjPNa6jhEMeIlHe9rhLay3NDci9LvBcHha2aQZeD1XW9mRafeWKxu8ymCVIKBmgVUn95ug27gzMbAPIgdoG62KzJrYdxE0ZI%2FbILPtHGwrG1t2LrhLM3bIjXJqOTgNA9WE96q52nv5kwV0fWuAQdPKntLFn5nfIpn7uZ15Yr2LzXLKC%2F45KUmsMEh4atU220EPoqVe94XqBM6uFh5o29xUS%2FdrjO8KImrBydwNAgR1QUZzZYmGScw1QZIQUHRgdjtqnHrFEzBUoRzs04H7fKUtMulK8tcqNZEsJbkz2Pe8%2Bqp6qr4xRwlXqy8tOIyWfdE5IbBLkvRROwKCOoOBbDAIVH6lov1%2F4i7JncX9NZfGnFaYZHKisSlspTu0DB0VsM6SEhcoC2EqC90gDh6GpSEUEqRdgZM44G%2BknwCItPRHKU4KpVQN%2BkFXthb5i8jLTwly%2FHY4sxk46frPfflnGo6ypRzCJRhKzyF%2FfvzNk4QmGaSa%2BXAj4%2FsOYlKePATRQzv9U1zlIF0eF1%2BLdkbf4ClLEvriCJQmAd7UDaSEvFu8SRqwxU6H9UWjUbag8OqS92ZHlQFIeAP%2FY9Bp0ioNJ2yZVTY9O00qhRo6h4PFS6DyIg433COmgCurDZTDYyKfCBjqkAS%2B%2Fsg65kNycyYeotZ505mokttbjE2b5CTG6YwCLx2g6vVdErRpTL4IUVUqZ2O681n4Zi4dp98fIxwSN2mHn1yXGRfIrtz9YVsgurpM48QWG4zv%2BtTuYT6Da2AZVBA9Ca9gOBePLkXRFthyM0lMKCheg345Eri%2BGDLCSqb8CGEqVnFoumbEmzhPl6KqoFEDBflpKol1mlXODoGawJaxwQ7njI%2Bm4&X-Amz-Signature=08dbd74e77dd13ab48687188f68ecf48a5a851485a37f792749bdc860a8ba812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
