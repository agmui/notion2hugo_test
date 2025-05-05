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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJ6JJR4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfi1P89kH92hQqdFQ2ACCXQix7iOc9MBlr4DWABGwmaAiAGFQB9kF%2BSzoCO5OmeQerQzYZL%2FA7FJfez2uoZG8NvISr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM2STFUCDs%2B2J8Cq7hKtwDClVrmDC4M01FWKYbtXChu40nU%2BUOJiuCCCrzB6NjnKoXdFz0GcsaedbRVQjPpJ0E8VXqUHqA9hDSaHeEVna%2B%2BvkeDzXdpQdLjIZ0%2BxcuabS7vEqCYEB22YvBomD9PSS6pNOAaQ07ccBUsnYldU54FMTk%2FgF72J2s7FXQUW1jqNtuPJlKIMqpOzlWmQZIeMZRHBiLyKwLquKtPrNYV2Dmmt51BH%2BBVda7cwDfU7kjmOSCyDfPvuqSZJXG7Cn4TqC7Az5WzdSu3QcCsahWJ8NfDPgCa5d2xXAPkC6QB1XdS5teKi1FzSS%2B6IAnU5u%2FktEVGKW9TrP0KTadXydGmW%2BMNwNt%2FPyse2S%2FG%2FBe2l7Fvb5zJse2lGkpYZ0IQ7VSt3nlys%2BfVK6VXFk1TvLPMwTXFaDJaLxj6aw0ER5MPa0TqksveuFoGQ%2FbuwNi3ZD0RqOOHZssAN9mlz9mUE1hI04yhwh2yBFVEu4xlpWMBGtywO3VL%2BtXpri8po%2Brq4xIMNFAzRP1OaN0JL8EBEbM8je4xtf8YGCPpu2rbU8FXlygJZT0x%2BptgZn5xk%2FSyjCViPUYWWRjtNHtF%2BLSDzAAZS913Zdd0nJQJL4%2Ff6Kbd6rKcIFv%2FFY64azoxE4cf5Ew7MzkwAY6pgFGNAFKzQrIq0li2AUggofWvVi%2FFnxiyTfmDHcinqqKNbZ3W2o3hrNV22zJ4qoPglDhpmDwCoYgpU0gbi291XznZeFIoNRX0ptn9hYxSY33%2FnjGA4T%2BL2a1Ii6WJdI9ieM62fJY5Dgel63BeKC7qmw2khQBmUa9w%2FMnzKrJ2TQPkolPrPZvYmin%2F1uE1ANeSyQUaEeECsZ2LYhpo%2B5yrhQOvyf%2B9Cay&X-Amz-Signature=f207cccce4dac082ab686a20af49428c30667cda86aa89988b2116cf76318da3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJ6JJR4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfi1P89kH92hQqdFQ2ACCXQix7iOc9MBlr4DWABGwmaAiAGFQB9kF%2BSzoCO5OmeQerQzYZL%2FA7FJfez2uoZG8NvISr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM2STFUCDs%2B2J8Cq7hKtwDClVrmDC4M01FWKYbtXChu40nU%2BUOJiuCCCrzB6NjnKoXdFz0GcsaedbRVQjPpJ0E8VXqUHqA9hDSaHeEVna%2B%2BvkeDzXdpQdLjIZ0%2BxcuabS7vEqCYEB22YvBomD9PSS6pNOAaQ07ccBUsnYldU54FMTk%2FgF72J2s7FXQUW1jqNtuPJlKIMqpOzlWmQZIeMZRHBiLyKwLquKtPrNYV2Dmmt51BH%2BBVda7cwDfU7kjmOSCyDfPvuqSZJXG7Cn4TqC7Az5WzdSu3QcCsahWJ8NfDPgCa5d2xXAPkC6QB1XdS5teKi1FzSS%2B6IAnU5u%2FktEVGKW9TrP0KTadXydGmW%2BMNwNt%2FPyse2S%2FG%2FBe2l7Fvb5zJse2lGkpYZ0IQ7VSt3nlys%2BfVK6VXFk1TvLPMwTXFaDJaLxj6aw0ER5MPa0TqksveuFoGQ%2FbuwNi3ZD0RqOOHZssAN9mlz9mUE1hI04yhwh2yBFVEu4xlpWMBGtywO3VL%2BtXpri8po%2Brq4xIMNFAzRP1OaN0JL8EBEbM8je4xtf8YGCPpu2rbU8FXlygJZT0x%2BptgZn5xk%2FSyjCViPUYWWRjtNHtF%2BLSDzAAZS913Zdd0nJQJL4%2Ff6Kbd6rKcIFv%2FFY64azoxE4cf5Ew7MzkwAY6pgFGNAFKzQrIq0li2AUggofWvVi%2FFnxiyTfmDHcinqqKNbZ3W2o3hrNV22zJ4qoPglDhpmDwCoYgpU0gbi291XznZeFIoNRX0ptn9hYxSY33%2FnjGA4T%2BL2a1Ii6WJdI9ieM62fJY5Dgel63BeKC7qmw2khQBmUa9w%2FMnzKrJ2TQPkolPrPZvYmin%2F1uE1ANeSyQUaEeECsZ2LYhpo%2B5yrhQOvyf%2B9Cay&X-Amz-Signature=fe90f8725dbf74f94d7e2c632087fe65c682252cc5c5a927a13a9b169bcf57d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
