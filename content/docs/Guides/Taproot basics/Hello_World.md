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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQNFXBM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHtL8WWrdzLI6jvL6acK158jKNgbrBMtloncXL9Qjx4zAiAZJ4%2BKFCa8aUFXMNGBGmtHOWPmeIhtVmdKVKneaovp6CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YDCo8za89KbVR5mKtwDYuvJd1QMuvLuvFZI8HVEefzJzwWYlfKacTWfR3%2BvwYgQxFg4yIwag9nNgBaKHIqxhKubAeRSpNi%2FUkWgmjXxlDjfK3gJwfUATbx0Si%2FaQRua%2BB2Amekvy1tknvR4CozRnbyKK%2FuH1SdcsNDgkRBJB5H3OEF5NJJEa45C3CsHN3TWf1ZLHGBcGh%2FjwBgCKHFeTFoIfw1rgEPa5AgHv5Hr9OpkKId9vXeVyLWaac2tpOSvCtWLWuthDYs969XIgt41hlrG5B74Q3TeYXcIk%2B1F%2BWKoI%2FCh7PzJ645Dl7fG7lsmFrjWVWLKsdW8SS6RVEON%2BYAbbfUz2pOATd7QfKqndEnalWb7I1njry0QkYaDBiR4Gb8JOf77heHc2%2FbCB9Is1D8dE8%2FP%2Bpxg8i4QYllcCrd4Y5UQYDNUpil1ZNoIctqeB7TnBFDbJcwbstLjmiHX0wY5%2BGIf%2FAZQG1DtuPaidnvr29bhf4M5KGHeUbgwglczgM9vvH2q3yzoea%2F9hr%2FtpZZopqXFQNe4AF0lfBAIRUEwgjM5TP2Puh341TSJpOpaZl5WEhDNxIhZljj7LUCPAHrri9tuTlEsyy9PXQRQ5fpzd4272DpI2j3q2EKRB6Y1UPFy2VeVNdf5DlEw36fiwgY6pgF6mKdUibkI9gMc2ipdaNcQ8kjD43Ha2X%2FCLIkNJBlYKn9AuMBP1O5M7gZyynHHZsOk96JQI2QFk7jw6nMYaQ8Q%2BfwIkCmfuvOtSsFT4j3sH122GpUyExasmbr%2FD9fMknFDdBJ5QIuF6v%2BnIdPXEE%2BfYt3A7VXXZzqG4PBLGmBvTmlKFt3ZdPGk9%2FNjSuF7pNoGt1EUfpQGlaops1946ouA6mn8S%2By0&X-Amz-Signature=48cb537e0c9b7becc84c0bf86eb9f403628f81d3a130407088603b1c28b86cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQNFXBM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHtL8WWrdzLI6jvL6acK158jKNgbrBMtloncXL9Qjx4zAiAZJ4%2BKFCa8aUFXMNGBGmtHOWPmeIhtVmdKVKneaovp6CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YDCo8za89KbVR5mKtwDYuvJd1QMuvLuvFZI8HVEefzJzwWYlfKacTWfR3%2BvwYgQxFg4yIwag9nNgBaKHIqxhKubAeRSpNi%2FUkWgmjXxlDjfK3gJwfUATbx0Si%2FaQRua%2BB2Amekvy1tknvR4CozRnbyKK%2FuH1SdcsNDgkRBJB5H3OEF5NJJEa45C3CsHN3TWf1ZLHGBcGh%2FjwBgCKHFeTFoIfw1rgEPa5AgHv5Hr9OpkKId9vXeVyLWaac2tpOSvCtWLWuthDYs969XIgt41hlrG5B74Q3TeYXcIk%2B1F%2BWKoI%2FCh7PzJ645Dl7fG7lsmFrjWVWLKsdW8SS6RVEON%2BYAbbfUz2pOATd7QfKqndEnalWb7I1njry0QkYaDBiR4Gb8JOf77heHc2%2FbCB9Is1D8dE8%2FP%2Bpxg8i4QYllcCrd4Y5UQYDNUpil1ZNoIctqeB7TnBFDbJcwbstLjmiHX0wY5%2BGIf%2FAZQG1DtuPaidnvr29bhf4M5KGHeUbgwglczgM9vvH2q3yzoea%2F9hr%2FtpZZopqXFQNe4AF0lfBAIRUEwgjM5TP2Puh341TSJpOpaZl5WEhDNxIhZljj7LUCPAHrri9tuTlEsyy9PXQRQ5fpzd4272DpI2j3q2EKRB6Y1UPFy2VeVNdf5DlEw36fiwgY6pgF6mKdUibkI9gMc2ipdaNcQ8kjD43Ha2X%2FCLIkNJBlYKn9AuMBP1O5M7gZyynHHZsOk96JQI2QFk7jw6nMYaQ8Q%2BfwIkCmfuvOtSsFT4j3sH122GpUyExasmbr%2FD9fMknFDdBJ5QIuF6v%2BnIdPXEE%2BfYt3A7VXXZzqG4PBLGmBvTmlKFt3ZdPGk9%2FNjSuF7pNoGt1EUfpQGlaops1946ouA6mn8S%2By0&X-Amz-Signature=fd7693d2dc6136b1ee938af80d63086939066d3cc6af0162041adedb98146f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
