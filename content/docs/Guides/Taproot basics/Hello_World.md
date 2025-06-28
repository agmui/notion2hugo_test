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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3O2XWIU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHAldeC8sckapZmBYgAg8pAbdC9Va3CjRq2O4SKp8ongIhAPX%2F%2FD4459C%2FEdPmIOQZZ5oAZ8kqIyMVOfRDbG43zFV%2FKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqpSafaPSWh8elC%2Fgq3AMnImGCfW2kboA47nv7YZSVAFWH86GMCQr9T%2B6BUShtjSpjdF5jHYlPW4f1yMqHVrBiyVSVOhL51KtpTVHEUZZTW0Fd%2B1s4HxB6YSrecfA9BC4IHj9qrxQn8wIZNblNJLBp9sWBKA5C2Jl2csfokT8mnYZR9veJHDDCgp3WK%2BUtiRn%2FqGq5ep6LDZiHo9alZl0E0bny3N91LCVP4NyinbvQ%2FR3nSr9BjVE63Uak1SqXo%2FloghF%2FyKZtMM0D%2BrJIQIVNnAQE4eDv9QbbBaYq0RYkvHW7eLwON1yeWeOCFRK6a1lRelvDcP%2Bvg32kSQGtTNlZQWi5zRR3xuwT%2FbvyJnQnjFgxn2loHSXuvcx%2Fh%2FrIv4REOmNNYtQ9UXLi4kFaLhT0q9pFbpnYdP1PsaV83YjSi69W5iWQS%2FgTYjakJq0VjW1oTGB5lh9hFILI4NqCWfO9A6kC4O6gnrj84TNDcfn0h7AmHhPfxa1IkKQzkrNanFQwatUWt8d6ibMfXuHFzCY82a2%2B%2BPQcYjI%2Fpw0ACirYXknZtIsegXjy9iDYhWpFQ1CA1OZyyGDQUVNB%2FmHnZKZ7uxrcFuVC9IlYi0t7gGAaLk4Ean0j9s6TtnpwLDjk0kK9FEMTPwiE8ST0xjDyj%2F%2FCBjqkARbXpHf%2BciiNsnc8JiqhzVtOqGDzr17rjy2O5pgy2te52qOWVR9hwnryayUqHo58qMULQH8YJ8cqhG%2BKeMKuUgEo0L1CjHaaXyQPntQfSXvFSBQIVMsovLEqBajTruNz4KOcmUQTJnBXa8MAe8g%2FJl05t5vLIOMbW4MTtOGPOsvd5E6BjU28QhIP0dvNFTxgcT7xQXg2mhvT%2B9onx5i38k5sIvjd&X-Amz-Signature=78f63416c2451a14913aa5648f95a49f6607b0c6ed12a2b9ddb0f0cceb7d4881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3O2XWIU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHAldeC8sckapZmBYgAg8pAbdC9Va3CjRq2O4SKp8ongIhAPX%2F%2FD4459C%2FEdPmIOQZZ5oAZ8kqIyMVOfRDbG43zFV%2FKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqpSafaPSWh8elC%2Fgq3AMnImGCfW2kboA47nv7YZSVAFWH86GMCQr9T%2B6BUShtjSpjdF5jHYlPW4f1yMqHVrBiyVSVOhL51KtpTVHEUZZTW0Fd%2B1s4HxB6YSrecfA9BC4IHj9qrxQn8wIZNblNJLBp9sWBKA5C2Jl2csfokT8mnYZR9veJHDDCgp3WK%2BUtiRn%2FqGq5ep6LDZiHo9alZl0E0bny3N91LCVP4NyinbvQ%2FR3nSr9BjVE63Uak1SqXo%2FloghF%2FyKZtMM0D%2BrJIQIVNnAQE4eDv9QbbBaYq0RYkvHW7eLwON1yeWeOCFRK6a1lRelvDcP%2Bvg32kSQGtTNlZQWi5zRR3xuwT%2FbvyJnQnjFgxn2loHSXuvcx%2Fh%2FrIv4REOmNNYtQ9UXLi4kFaLhT0q9pFbpnYdP1PsaV83YjSi69W5iWQS%2FgTYjakJq0VjW1oTGB5lh9hFILI4NqCWfO9A6kC4O6gnrj84TNDcfn0h7AmHhPfxa1IkKQzkrNanFQwatUWt8d6ibMfXuHFzCY82a2%2B%2BPQcYjI%2Fpw0ACirYXknZtIsegXjy9iDYhWpFQ1CA1OZyyGDQUVNB%2FmHnZKZ7uxrcFuVC9IlYi0t7gGAaLk4Ean0j9s6TtnpwLDjk0kK9FEMTPwiE8ST0xjDyj%2F%2FCBjqkARbXpHf%2BciiNsnc8JiqhzVtOqGDzr17rjy2O5pgy2te52qOWVR9hwnryayUqHo58qMULQH8YJ8cqhG%2BKeMKuUgEo0L1CjHaaXyQPntQfSXvFSBQIVMsovLEqBajTruNz4KOcmUQTJnBXa8MAe8g%2FJl05t5vLIOMbW4MTtOGPOsvd5E6BjU28QhIP0dvNFTxgcT7xQXg2mhvT%2B9onx5i38k5sIvjd&X-Amz-Signature=0e6dc9617b6ea6331b3bb2416505da5a1860e989b4d070da876f06d7f76ba1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
