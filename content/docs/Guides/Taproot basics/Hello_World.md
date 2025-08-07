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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQP6O2W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCv%2FIhkXOeh2UimFi13VI3%2FxEP3T79qreZL%2BsJfbI0fGwIhALHQk2nR02tkKxCd47HoggppgS9avpySTjUNg8A0LhWfKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqu5IHmWFyrZNdhIq3AM8LYFMiM0U42SmlNlSUNPg7ze8iwUBJMSBM7ZNTOVev4UGTA0spusztNoNPUAlsuRv3gAMfHz%2Fh%2FIRncr%2FD9tuGGyM9DzaNezsWwV0kboZp49JsBBNs0ZfclQrMEPSKlrsHDaDPmtp%2BfMFu3cK%2BxJ9KvXLNpdQN3IplO72NGDQ6cJcI9%2FOQ6PMq6C99K6DlhwGTqaOj%2Fbcx%2FFnbt8fykARyFoYJen8cpwds0JiMN%2FCHv8GzsGG9yVl%2Fu9QI%2BYdiQ%2BpIuVV6POoIyAwoPaxwXhv9qhDTcZwQ0xnn1tpyYZ%2BS%2BLxsAk%2FYc74YsIIOIDcUWZ2zOwJWzWA%2FjK3ks9PCwjesi850wPYbCJEYy9Ja37fHTJqQvZLDUj4tiKzDeboSV8V7v1p0c3zG6p5OZJ536mkf1hl0TSeaHRSqmzOhiN8UxezwjFT%2BLxfW%2Ff12ku6Rz0cp3UGRswZFDCZjjV8DL4i9pld13lHQxQWfHIvMyllkW9pSVHNn1PSgRKZRDIjkcC3TICtyQcGs55E%2Fbp%2B%2B2sAV1DhIPd83hQf6x1lF3%2BEKjyqciCVGVfdIhZoMC3BIpMXPZdDkt4FtrDJTc81iRyO1on%2Flgqap5ut2fXix%2BTpqEaDyhTWr8dzruX4gzCAotPEBjqkAaK2AmpuqWn18XCsHhQC9x0URabmGMsGUDomB0u7xtHp8ok%2F9xXZufrXNSbK90o38zyLJ9b6OybVeONEe%2BdUKtXu6Qv2K1vG%2Fl%2FAFBxDRihy0EBc%2F02YLWA9ouPGuAIQyYGKnS08w200PfvrxX7p0jYii%2FIMaiJOksnbp4MLpZt6Eyjp5J0yp6nrfn7LDfnFDSjHlBXmgzii%2Bp14bMgITXUJahIJ&X-Amz-Signature=aab2cc8b413be82bec8e3d68cbec0640b8803de817245f1cf8b4b0c4480dac51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQP6O2W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCv%2FIhkXOeh2UimFi13VI3%2FxEP3T79qreZL%2BsJfbI0fGwIhALHQk2nR02tkKxCd47HoggppgS9avpySTjUNg8A0LhWfKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqu5IHmWFyrZNdhIq3AM8LYFMiM0U42SmlNlSUNPg7ze8iwUBJMSBM7ZNTOVev4UGTA0spusztNoNPUAlsuRv3gAMfHz%2Fh%2FIRncr%2FD9tuGGyM9DzaNezsWwV0kboZp49JsBBNs0ZfclQrMEPSKlrsHDaDPmtp%2BfMFu3cK%2BxJ9KvXLNpdQN3IplO72NGDQ6cJcI9%2FOQ6PMq6C99K6DlhwGTqaOj%2Fbcx%2FFnbt8fykARyFoYJen8cpwds0JiMN%2FCHv8GzsGG9yVl%2Fu9QI%2BYdiQ%2BpIuVV6POoIyAwoPaxwXhv9qhDTcZwQ0xnn1tpyYZ%2BS%2BLxsAk%2FYc74YsIIOIDcUWZ2zOwJWzWA%2FjK3ks9PCwjesi850wPYbCJEYy9Ja37fHTJqQvZLDUj4tiKzDeboSV8V7v1p0c3zG6p5OZJ536mkf1hl0TSeaHRSqmzOhiN8UxezwjFT%2BLxfW%2Ff12ku6Rz0cp3UGRswZFDCZjjV8DL4i9pld13lHQxQWfHIvMyllkW9pSVHNn1PSgRKZRDIjkcC3TICtyQcGs55E%2Fbp%2B%2B2sAV1DhIPd83hQf6x1lF3%2BEKjyqciCVGVfdIhZoMC3BIpMXPZdDkt4FtrDJTc81iRyO1on%2Flgqap5ut2fXix%2BTpqEaDyhTWr8dzruX4gzCAotPEBjqkAaK2AmpuqWn18XCsHhQC9x0URabmGMsGUDomB0u7xtHp8ok%2F9xXZufrXNSbK90o38zyLJ9b6OybVeONEe%2BdUKtXu6Qv2K1vG%2Fl%2FAFBxDRihy0EBc%2F02YLWA9ouPGuAIQyYGKnS08w200PfvrxX7p0jYii%2FIMaiJOksnbp4MLpZt6Eyjp5J0yp6nrfn7LDfnFDSjHlBXmgzii%2Bp14bMgITXUJahIJ&X-Amz-Signature=03d703d9474c31bf2b5051c06b1b7f71bed074e897330cb92d8c7275e1a87af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
