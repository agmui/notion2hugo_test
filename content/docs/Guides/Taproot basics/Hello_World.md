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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTQYXHW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2vj1UNd%2B7TqwlH3nGMqFFxxoqFFueUZFqOzYFrb%2FOwIhAKH2QAeHAprsu997oQe2at5dhL1Dbi%2BymBfndAzPEQvmKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzynFXsJ98Uvpe3Q7kq3APF0Cdkdp142zQf22dTuM14v02TIx%2BhYsnKSlu0pqqCBjcUgyK%2BwEqcit2s2cxb2GprdYXVSRvl0%2FCNKSXEkkjlx0oh5bftfgKECdVCs5RZiVd6xZ9M4cwyTjn8uGnH%2FIE1EL5XAevR8gnYimeoy4%2BPtPITF8fQylxl7E6sHyssBy7zfaTSaUxV%2F%2BpZmVTpkvxRjNdqIryumuQpXmeOxyuXrWu%2Bgh03zc2krPbZZPDCJFv%2F77B%2Bl2yUiiuN6wBb2QYXJHjKahXeIVfhJMAlPIE1ZqFVeVApxV%2FGr%2Fy2qUVR9HWmx1B3yhW4Q7e437rFw6rqlgJGYbL9otahfdtC150fzA31GSSmMC4RUZMYrSixincppLjVA8xiybsz%2BGk6DteGlpnsfz3AEBDX1EPUUH5fwahhr4v2J%2B8251YTJhvqdKcByTCsXpiBWE3jWrxQ%2FFLBzHV4J%2FBJwhmZqLpCRouhK7gsF1FkykCwcqudjXdMQ7TOZ9wn7ivgKxHUiMgwQIAHIXj%2FpmkVLsKTXZdYoSj43ZdRrcoMIvj45F8wJTUxTkj5gSYUetkre5VpodMnF54U%2FXGCk3QSveJ78%2FxefCIkrHdaPOhY8Upqws%2FRDwI318p1JPHgRf%2Fh3A6lhTD0sd29BjqkAc1gQxggnCaleRRfE6VTF1oJ2HNMvRG%2B%2FAcAxg%2BZxLUmqxeTTXagBrEbGhusQ0ig05tjx8yDmNEXf%2FVvpQzTLQW1HJdjXVaptXyiF2uqQb%2F5VafF%2FAkUbdYimKg8RwhKGzyv%2B6Ar9%2FiG9HDnqH58UUcHxzAH09n5pXkCcY5kN7spdLpeR5B1pSZcQm1gakY1kiyUGhNTXFmnfTHAtAMV8g3vuNo6&X-Amz-Signature=8cdf6d9b14a832ba337145a7b0f3cc787dacd200ee962ea2ffe97f9c210208c0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTQYXHW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2vj1UNd%2B7TqwlH3nGMqFFxxoqFFueUZFqOzYFrb%2FOwIhAKH2QAeHAprsu997oQe2at5dhL1Dbi%2BymBfndAzPEQvmKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzynFXsJ98Uvpe3Q7kq3APF0Cdkdp142zQf22dTuM14v02TIx%2BhYsnKSlu0pqqCBjcUgyK%2BwEqcit2s2cxb2GprdYXVSRvl0%2FCNKSXEkkjlx0oh5bftfgKECdVCs5RZiVd6xZ9M4cwyTjn8uGnH%2FIE1EL5XAevR8gnYimeoy4%2BPtPITF8fQylxl7E6sHyssBy7zfaTSaUxV%2F%2BpZmVTpkvxRjNdqIryumuQpXmeOxyuXrWu%2Bgh03zc2krPbZZPDCJFv%2F77B%2Bl2yUiiuN6wBb2QYXJHjKahXeIVfhJMAlPIE1ZqFVeVApxV%2FGr%2Fy2qUVR9HWmx1B3yhW4Q7e437rFw6rqlgJGYbL9otahfdtC150fzA31GSSmMC4RUZMYrSixincppLjVA8xiybsz%2BGk6DteGlpnsfz3AEBDX1EPUUH5fwahhr4v2J%2B8251YTJhvqdKcByTCsXpiBWE3jWrxQ%2FFLBzHV4J%2FBJwhmZqLpCRouhK7gsF1FkykCwcqudjXdMQ7TOZ9wn7ivgKxHUiMgwQIAHIXj%2FpmkVLsKTXZdYoSj43ZdRrcoMIvj45F8wJTUxTkj5gSYUetkre5VpodMnF54U%2FXGCk3QSveJ78%2FxefCIkrHdaPOhY8Upqws%2FRDwI318p1JPHgRf%2Fh3A6lhTD0sd29BjqkAc1gQxggnCaleRRfE6VTF1oJ2HNMvRG%2B%2FAcAxg%2BZxLUmqxeTTXagBrEbGhusQ0ig05tjx8yDmNEXf%2FVvpQzTLQW1HJdjXVaptXyiF2uqQb%2F5VafF%2FAkUbdYimKg8RwhKGzyv%2B6Ar9%2FiG9HDnqH58UUcHxzAH09n5pXkCcY5kN7spdLpeR5B1pSZcQm1gakY1kiyUGhNTXFmnfTHAtAMV8g3vuNo6&X-Amz-Signature=267e6bd06a64d8e704ee476132beab40afd0bf2a963a9b8459e0689aa6f04446&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
