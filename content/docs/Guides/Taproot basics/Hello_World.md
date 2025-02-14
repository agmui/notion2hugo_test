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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVOHTOU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEK%2F46RavKIkWwzwOuzXGm6ucd%2B%2FhzxVVl3VXwqoEMphAiBRaeE8BqHA5OFqzIvm4TlRtW2Wz%2FRw62a2soWSAjOJZir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTN8Y%2Fp1QKRA1GRD2KtwD1OAJeQ2sGBDQ28uzd2X8kgRzB%2BUg9M4Cdqqzk0v7qx2UvIumRaRbC6WmXgAAbhVihVciidSyghAL9lX2WJANTNOPbxfyWf8bLwlt2SRw8rY8YlKrkckmeALxQXQKBQQjF3ITXViqC68IPmpldmeZem5CWwfcJJ9cUat41RmpLw%2BosG94a5RhMZuVmmx8%2FLvKGtjbup66wiZTfKAf4u%2FVN%2BWjr9LMAMOIeIfr7Pd9vqhxspmrk2n%2FVvP4Op3Bd7PO68LJ8QarW8Xet1u%2FniKpTgaCyVPMmFspXzOxytB4%2BdvIsqpJ9vLekijXhxH9CbmJIJ05gNsglDfdwS90%2FXDqGJQsxUcF46CdojZH4Fz80%2BgV8kET0HNU4dyRib2PfRDr7cL1tzSxSPDkZGrYivj5fzE69F1ZBRvMK%2BjZpFRo%2F4F7NWCjMcHTmagUGE2vmI6ujQl4r6wnhiQwZRi1fakpzQEvp3e05EHMmZzP2LrPjyIhCYNZgbJ%2FuWZmxlliXHCgHrANuhYnjK%2BHOqwcFxG2O9Pa7qQOKrVGsxG%2B7ErIYnXxdF%2F0f%2FWOHqkbVHQ8L30fWCZkNx%2BanrrZi7bo0I%2BXg6URYdUkvU6ELZCALUk5jH8WWpPAm7G9eUNZG2Yw7um7vQY6pgH%2B1fHxkdTiJp%2Fj2SXAIia56j0zZWfuxHWqd5CEZ0zVFDPs1NApvDUpljRpWzZXRrBOoccXKn1K%2FR3L4wOPfgLub7aDrs%2BLbhBUVUdOb58PY5q3BeCwwiGnLjpwVJolGs9tHCcPFONwoSUZEF9EdFRaSmDmb6Gqdb8r74DQC2elVPmjmc98O7aM0sd0AGqX%2BT4nymBoYilPJfyYFl8XliOwrnAW6vEA&X-Amz-Signature=5e0e88f0599fc5f52e7b575923af5a0d221764940fcc7d98869a06b405a1c9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVOHTOU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEK%2F46RavKIkWwzwOuzXGm6ucd%2B%2FhzxVVl3VXwqoEMphAiBRaeE8BqHA5OFqzIvm4TlRtW2Wz%2FRw62a2soWSAjOJZir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTN8Y%2Fp1QKRA1GRD2KtwD1OAJeQ2sGBDQ28uzd2X8kgRzB%2BUg9M4Cdqqzk0v7qx2UvIumRaRbC6WmXgAAbhVihVciidSyghAL9lX2WJANTNOPbxfyWf8bLwlt2SRw8rY8YlKrkckmeALxQXQKBQQjF3ITXViqC68IPmpldmeZem5CWwfcJJ9cUat41RmpLw%2BosG94a5RhMZuVmmx8%2FLvKGtjbup66wiZTfKAf4u%2FVN%2BWjr9LMAMOIeIfr7Pd9vqhxspmrk2n%2FVvP4Op3Bd7PO68LJ8QarW8Xet1u%2FniKpTgaCyVPMmFspXzOxytB4%2BdvIsqpJ9vLekijXhxH9CbmJIJ05gNsglDfdwS90%2FXDqGJQsxUcF46CdojZH4Fz80%2BgV8kET0HNU4dyRib2PfRDr7cL1tzSxSPDkZGrYivj5fzE69F1ZBRvMK%2BjZpFRo%2F4F7NWCjMcHTmagUGE2vmI6ujQl4r6wnhiQwZRi1fakpzQEvp3e05EHMmZzP2LrPjyIhCYNZgbJ%2FuWZmxlliXHCgHrANuhYnjK%2BHOqwcFxG2O9Pa7qQOKrVGsxG%2B7ErIYnXxdF%2F0f%2FWOHqkbVHQ8L30fWCZkNx%2BanrrZi7bo0I%2BXg6URYdUkvU6ELZCALUk5jH8WWpPAm7G9eUNZG2Yw7um7vQY6pgH%2B1fHxkdTiJp%2Fj2SXAIia56j0zZWfuxHWqd5CEZ0zVFDPs1NApvDUpljRpWzZXRrBOoccXKn1K%2FR3L4wOPfgLub7aDrs%2BLbhBUVUdOb58PY5q3BeCwwiGnLjpwVJolGs9tHCcPFONwoSUZEF9EdFRaSmDmb6Gqdb8r74DQC2elVPmjmc98O7aM0sd0AGqX%2BT4nymBoYilPJfyYFl8XliOwrnAW6vEA&X-Amz-Signature=5628bced1a8160178a8b9b3828c75bfb931876ed0f32a66f509a21452af3682b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
