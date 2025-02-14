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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T257PXXU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBXSQPxSK5TBwzNnvNTiAl4OzTJTPEqfl4c06b1xewwwIhAJA6rQhMaWXiY0wFXVieWHbiK0zxVONqoVvP3zr5hB4iKv8DCCQQABoMNjM3NDIzMTgzODA1IgwMe%2FzH3bMDvYO56pQq3AM8vD7gczjwNoYHv27S3bHehmyr1K8VMIeY1Mb70%2FNAeWxeF5q%2BZjfVvvH5fHm8uP33Fyr0cSeOzT6sMK5N2Sr%2BYdwv8O3eeuIjrfDVaXpvAGUCGDGiRhofuka94V2bN5D%2FJp0K40C0d7ukX92RTbMqHdnttiI0KL66KukNGoT1Wss%2Fs9B4SZWdb1AevLceOfYykqRahDL9iEGABCxlqEHyLrUwhKtSv9ATSa8PRVMiKEiK2%2BC78VENghC00HtkUfxsAtBVyiRbu3%2B587vyvWlT3qXtJFlpDdg28Dd%2FhtbBpZBJW%2FWUjYzx0UmRve7zQV3WDoBN8LZ4Fhuyzd6iFytJQsqyneUXWBEwWBfsuPF7Ll8bN%2BpJXGa22soFGuQx4wcGe1Py%2Bh9vPX3Bba7rTJySNbCCNyjADxciqIlEURnHo7xJgo96dEvmWJvdMeUyHcfQiVcEbmf03fChix60Vdrk%2BcMmq3vVvGZWnEBf0HkZNB%2FxXbUb%2F5yRpZM4FyPhrO6bS3jVyxBUT4lZIo7xPMKvLXerWXbir3guktynb8qaqdrng6DCbSRlWQTtzIWmf81lDKdJj3bMBi77YfxgNVx08HIA09ig5vIvJ6CM%2FH3KsWMDt2fKj20NPh9avzCq67q9BjqkAZhKJL5%2BmBx5azYLwM1zXwNJFTsxAQAWdN1nuWeRy9%2FnjjMC%2F8Cm1CvdbeqQQp%2BZFofQq6zCw0xW7ZpQvNYlMvGFK2zslLmL8jNo96HnK775X%2BuHSPTdvWf3C7qP0AhDmhgrYT5uHjyYue3TQYSpQ0tL7uBadA5oRk9S7290ixB2xXJVzsYE8tXeQTushOQVwNhVJY%2FhJJHG6UmBJAIO9F02Ahzy&X-Amz-Signature=9e2fb55195b60025b0c9c0b8580619c1a43cc51309f71c53212cb71905328e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T257PXXU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBXSQPxSK5TBwzNnvNTiAl4OzTJTPEqfl4c06b1xewwwIhAJA6rQhMaWXiY0wFXVieWHbiK0zxVONqoVvP3zr5hB4iKv8DCCQQABoMNjM3NDIzMTgzODA1IgwMe%2FzH3bMDvYO56pQq3AM8vD7gczjwNoYHv27S3bHehmyr1K8VMIeY1Mb70%2FNAeWxeF5q%2BZjfVvvH5fHm8uP33Fyr0cSeOzT6sMK5N2Sr%2BYdwv8O3eeuIjrfDVaXpvAGUCGDGiRhofuka94V2bN5D%2FJp0K40C0d7ukX92RTbMqHdnttiI0KL66KukNGoT1Wss%2Fs9B4SZWdb1AevLceOfYykqRahDL9iEGABCxlqEHyLrUwhKtSv9ATSa8PRVMiKEiK2%2BC78VENghC00HtkUfxsAtBVyiRbu3%2B587vyvWlT3qXtJFlpDdg28Dd%2FhtbBpZBJW%2FWUjYzx0UmRve7zQV3WDoBN8LZ4Fhuyzd6iFytJQsqyneUXWBEwWBfsuPF7Ll8bN%2BpJXGa22soFGuQx4wcGe1Py%2Bh9vPX3Bba7rTJySNbCCNyjADxciqIlEURnHo7xJgo96dEvmWJvdMeUyHcfQiVcEbmf03fChix60Vdrk%2BcMmq3vVvGZWnEBf0HkZNB%2FxXbUb%2F5yRpZM4FyPhrO6bS3jVyxBUT4lZIo7xPMKvLXerWXbir3guktynb8qaqdrng6DCbSRlWQTtzIWmf81lDKdJj3bMBi77YfxgNVx08HIA09ig5vIvJ6CM%2FH3KsWMDt2fKj20NPh9avzCq67q9BjqkAZhKJL5%2BmBx5azYLwM1zXwNJFTsxAQAWdN1nuWeRy9%2FnjjMC%2F8Cm1CvdbeqQQp%2BZFofQq6zCw0xW7ZpQvNYlMvGFK2zslLmL8jNo96HnK775X%2BuHSPTdvWf3C7qP0AhDmhgrYT5uHjyYue3TQYSpQ0tL7uBadA5oRk9S7290ixB2xXJVzsYE8tXeQTushOQVwNhVJY%2FhJJHG6UmBJAIO9F02Ahzy&X-Amz-Signature=085605dee323a20405dd8a6b0081df6b72e97ef8f3ff881239e30713d8fae498&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
