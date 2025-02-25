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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGXO45A%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDotbcqgdVEsVlmV22RAYlO5f8d4v7H2OccnwyktjmwgwIhALDAmt4uEUW7moJeM7PM9IZkrBshjnpBh3pdUKi0CgD7Kv8DCDkQABoMNjM3NDIzMTgzODA1IgyN8%2BPKULmGhFf0O1sq3ANvrVnw%2B8ub89eZ35dsSQH9vUcIjNdBWxvlXwW9urdvgKdDKVsOc%2BiLSI7QSzT3urSk9%2FUfYfaLirnbpFe4pKHUld20caWWWtP8l0MlpOaQarW4XQQcNYa7FoWxwjYk6BZlXJ7L2XWoDJDIfUYuv8yismLVgM%2BQR5D1yFwPcx4lBajcFBRcHU1DDG3EQD8i6OHLtno2OUWz84jaGk3M3O07%2FWg8T6vs9pF%2BvBMsOCqLcqnc%2FC8p%2BUE1xYoIyz7b7Ww4oj2otO7uhHzHxSpJKaMbAo3cbnxpxoCw9VUAU%2BYfDVf%2FTGPfZRNSGfj0nJLCOsa7W8Uvhfi052SitWZEjXjDnfpTLY33EHcQTuvyZpDT6GubZNoECJjm7q3jtDfkIIgQP9LN6p%2Bg%2BFYHT8jU09MQK%2FMWWjd2IE7%2BrB%2Bmh%2BEdxgvWzNmcq9dLnOWEgY8CHf2PqjimYOzNSXY9FcSuFJ6qjD2Zjo%2B7jEpTqjwVj3qcKYq7%2FwcrZPo7rF2sLYkZ7l%2Fu6uoo9FENo0SXrHG3o1PhX1oW7zf3hUT2h%2B%2FA9ObeK9IiRZGHRhm%2BCMC3coIeVDBS%2FDihJQTSR2GkwWfTMPXpNiamg2gZYYbkyvUXPkHDmw4zHqQUf%2BIs6%2F3mCzClg%2FS9BjqkAbdbSthttOw0liuI9JWZWp%2B3Lklksdd%2FejlwyC6iV0bz%2BJh7nAIkj0KBT2vHTEWvD%2F9vk2sNTGVgHMhZjX5YQlCpzTLB6fHnBIhRJvLvkTWXCztZW9io5qKhL1MrIQpWa1IvIm1RIdZHltWTqNyrDVoXIWZ3%2FgKEiW4fTDJMte1Nybv2W7f6plLRKyPNPyHRk9h7kLBfFwGS5ni4DbmaF%2BTRVT8r&X-Amz-Signature=69df1fa478f6b15ca578b7942cd59125932f587aefa80ad24ccaed3abe7fa9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGXO45A%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDotbcqgdVEsVlmV22RAYlO5f8d4v7H2OccnwyktjmwgwIhALDAmt4uEUW7moJeM7PM9IZkrBshjnpBh3pdUKi0CgD7Kv8DCDkQABoMNjM3NDIzMTgzODA1IgyN8%2BPKULmGhFf0O1sq3ANvrVnw%2B8ub89eZ35dsSQH9vUcIjNdBWxvlXwW9urdvgKdDKVsOc%2BiLSI7QSzT3urSk9%2FUfYfaLirnbpFe4pKHUld20caWWWtP8l0MlpOaQarW4XQQcNYa7FoWxwjYk6BZlXJ7L2XWoDJDIfUYuv8yismLVgM%2BQR5D1yFwPcx4lBajcFBRcHU1DDG3EQD8i6OHLtno2OUWz84jaGk3M3O07%2FWg8T6vs9pF%2BvBMsOCqLcqnc%2FC8p%2BUE1xYoIyz7b7Ww4oj2otO7uhHzHxSpJKaMbAo3cbnxpxoCw9VUAU%2BYfDVf%2FTGPfZRNSGfj0nJLCOsa7W8Uvhfi052SitWZEjXjDnfpTLY33EHcQTuvyZpDT6GubZNoECJjm7q3jtDfkIIgQP9LN6p%2Bg%2BFYHT8jU09MQK%2FMWWjd2IE7%2BrB%2Bmh%2BEdxgvWzNmcq9dLnOWEgY8CHf2PqjimYOzNSXY9FcSuFJ6qjD2Zjo%2B7jEpTqjwVj3qcKYq7%2FwcrZPo7rF2sLYkZ7l%2Fu6uoo9FENo0SXrHG3o1PhX1oW7zf3hUT2h%2B%2FA9ObeK9IiRZGHRhm%2BCMC3coIeVDBS%2FDihJQTSR2GkwWfTMPXpNiamg2gZYYbkyvUXPkHDmw4zHqQUf%2BIs6%2F3mCzClg%2FS9BjqkAbdbSthttOw0liuI9JWZWp%2B3Lklksdd%2FejlwyC6iV0bz%2BJh7nAIkj0KBT2vHTEWvD%2F9vk2sNTGVgHMhZjX5YQlCpzTLB6fHnBIhRJvLvkTWXCztZW9io5qKhL1MrIQpWa1IvIm1RIdZHltWTqNyrDVoXIWZ3%2FgKEiW4fTDJMte1Nybv2W7f6plLRKyPNPyHRk9h7kLBfFwGS5ni4DbmaF%2BTRVT8r&X-Amz-Signature=3157630d17b61048cc56b2b6c5009517bd1a9bbee2a04e3539fd8e88d2d0a5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
