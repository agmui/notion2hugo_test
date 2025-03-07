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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTVV63K%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD671z756qnZQCP%2Bi5DU1IK982AK5I5LjXVUyD6B2cq2gIhAInBhFxX4mEV5a5Lvm%2FFbPev7mHAAGdNSdto3DUPX656Kv8DCD0QABoMNjM3NDIzMTgzODA1Igz%2FDrhrLuEkTsfvhkIq3APPAVaFMWjQhIffjrFmJA9wVUGk1eDD05MfTdRRGboTrPJe1iJs9bJ2iTozrmZ49303qXeLJo99PbuE3Lb%2FfFgYe2Cv%2FdH3onxy%2BuZC0pvbDkzhmR7Mr6QqHL6y4OWcEPB8dqP%2FWUDhq%2B73yzz9SSSP8mnv4TUdczYyfgofH1S8n6xwRaW6swy6786k7zRIhvlgHkhfecZVjMec5Zy2c4jGOm6n0FrxNDuM4iyG%2FfvMhHHDGolfZEyN6paYzKM912VRf%2BgVrsdJq6j1Nsy0rEkCqU8CTWVp40MOQdm1VLJPqaXndijGltBqT%2F1xa56GLaQTaXpwF5WiUeG09KA9XU0EhPNXs5OXjMZSxmBnq9d7gz3pqPJRSBczMCxJTpALQMTPZhMbQrbb7L09gVYCePFC7s5r4JV5CeETsVCgOY03k5k%2FoRNwcxxA0yY9UWc6KcGpJLjlKo3lS053DCNVIJvXjIGO4OEXCYtB6ko8cTFtWMkSjCy1Mm2wkjn6tTtDc0uVrRGatg%2Bgtrkq1daDSASajTGUUnRwJ4jtQ%2Bzlh%2ByCMiQEkiQ%2FH9o5PTQU09Jux6YA3gAPjLaruddPksdMAcfhMsmSGT%2Fqgv93FbVt98aX0Y6DzZFyz0wmDkF%2FZjCs56m%2BBjqkAXyKKeLlJ9eY9sYJpVg%2BUTutwikfLxUG0dQnw0%2Fip2Qp1x2PClZm7PCSsfuhFnNMWixO0G1cngcQ%2Fw1jKsljolGTQPR4%2BvE32m9amWS7geIkcHt9eEExBZMLBhPO10rqddu4e60HQWYXU5fXEawe4oyHSxaSX0Wc2zHV1mQ4j6ed34EnHrMOpotmKYaZHlFbpJXD4F1JRg1ufX577rYuzhNsyyo%2F&X-Amz-Signature=01e5b44d2b027e9efeb1b09f0b553cf1d089bc417a430930a3d725866e8c468d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTVV63K%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD671z756qnZQCP%2Bi5DU1IK982AK5I5LjXVUyD6B2cq2gIhAInBhFxX4mEV5a5Lvm%2FFbPev7mHAAGdNSdto3DUPX656Kv8DCD0QABoMNjM3NDIzMTgzODA1Igz%2FDrhrLuEkTsfvhkIq3APPAVaFMWjQhIffjrFmJA9wVUGk1eDD05MfTdRRGboTrPJe1iJs9bJ2iTozrmZ49303qXeLJo99PbuE3Lb%2FfFgYe2Cv%2FdH3onxy%2BuZC0pvbDkzhmR7Mr6QqHL6y4OWcEPB8dqP%2FWUDhq%2B73yzz9SSSP8mnv4TUdczYyfgofH1S8n6xwRaW6swy6786k7zRIhvlgHkhfecZVjMec5Zy2c4jGOm6n0FrxNDuM4iyG%2FfvMhHHDGolfZEyN6paYzKM912VRf%2BgVrsdJq6j1Nsy0rEkCqU8CTWVp40MOQdm1VLJPqaXndijGltBqT%2F1xa56GLaQTaXpwF5WiUeG09KA9XU0EhPNXs5OXjMZSxmBnq9d7gz3pqPJRSBczMCxJTpALQMTPZhMbQrbb7L09gVYCePFC7s5r4JV5CeETsVCgOY03k5k%2FoRNwcxxA0yY9UWc6KcGpJLjlKo3lS053DCNVIJvXjIGO4OEXCYtB6ko8cTFtWMkSjCy1Mm2wkjn6tTtDc0uVrRGatg%2Bgtrkq1daDSASajTGUUnRwJ4jtQ%2Bzlh%2ByCMiQEkiQ%2FH9o5PTQU09Jux6YA3gAPjLaruddPksdMAcfhMsmSGT%2Fqgv93FbVt98aX0Y6DzZFyz0wmDkF%2FZjCs56m%2BBjqkAXyKKeLlJ9eY9sYJpVg%2BUTutwikfLxUG0dQnw0%2Fip2Qp1x2PClZm7PCSsfuhFnNMWixO0G1cngcQ%2Fw1jKsljolGTQPR4%2BvE32m9amWS7geIkcHt9eEExBZMLBhPO10rqddu4e60HQWYXU5fXEawe4oyHSxaSX0Wc2zHV1mQ4j6ed34EnHrMOpotmKYaZHlFbpJXD4F1JRg1ufX577rYuzhNsyyo%2F&X-Amz-Signature=9f3a0dcb6f11c8b4dcdd06017ddf43fb4533e068230ddce2ebdbb37280ed01d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
