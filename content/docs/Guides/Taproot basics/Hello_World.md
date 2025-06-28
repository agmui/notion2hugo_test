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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FOM66O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPSJmIBAkPzVJxwuUdcnO9aQ5u7shzOtqalFBbj8q8UAiAeXelOReCO3AqcwQiUigyS2TqA5MFHKHBJfR5cwLSxiiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGFhcauQeSlLP03uJKtwDJffdbnIn9GDwe0JGMeqH5nrC6TI8aP3dezua1NVGFAy4QjL0NL1vBY3orZg1QEOJo%2F2NLgk8Dzo7ONV8ROY%2FW8JRVxFztvDPZNMI0sNJQeGozrdQVNZql9%2FS4CZSiFOW1mC1lghfx%2BHZNZzulapRlzvKyjARTygVWtxihYbIx6ZkMRCyC6CZjv%2FZmMlCwJ3561SQ52R3U2Zm1FrlbTZ6B0ePyIc6mKCEX3FC%2BGPEsCA2lXh02NnVIJREdkTZl7Ml0%2BJKojJocOHjBUv%2B%2FTtN7a0Fr%2BodcmvkpKq7siwRNdl9P9JgCVJ0CHqTNLT1tllaK3LMNHLRJnKFIuOkeG7FWVPQ87Ei6hmDFP6Eg7OaxDt05XUbF9XfhNAg79Ceix6nc0DLrr8IumCCL%2BhhbKhC7TIiqJfzayeK4LJCQ3jtE46YNiuZq3aDkeMy52Bf42PWoPNu239s9x1dgXGQ56NfnoWQApE57pFpdi0x9Fc0phIegYb4XuQvOUojGaebHJVQq%2BY6miuMAmYdNphd2GhcpU7NaUx1nd%2Bzpcfm3S1Qm95iapmIkKqK9DmyczRqWt795eVH3W3oGjOBk8LEDAV7efrfSl%2BP7so5ZsDppo0M9HX3zWTXT6MEPyh%2FhY0w6fSAwwY6pgFTVL%2BD8p4oEhmWLOAv%2FtAn80kioMApEeGuw7lxn2fDCddU0llJd5nzvhuR6iMa0uTCBf3C1prcthxVbj1FhKZ%2FupIXAl8afulCMUvIuRT2c%2FDen1fxvt2OTvIGVakXFJwbA9MJZnLFQW8fipjDcN3JwH8T%2FRPO8IAWOGU1vSPI%2B0u9jqRJCIND8G2rJXC8YUKojV%2BdBLIrJmnIeRdLwSXCjsXvb%2ByA&X-Amz-Signature=9d2389d8b49c3bc23c88f73828592c228fac31aad548171023a7e742f6d85992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FOM66O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPSJmIBAkPzVJxwuUdcnO9aQ5u7shzOtqalFBbj8q8UAiAeXelOReCO3AqcwQiUigyS2TqA5MFHKHBJfR5cwLSxiiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGFhcauQeSlLP03uJKtwDJffdbnIn9GDwe0JGMeqH5nrC6TI8aP3dezua1NVGFAy4QjL0NL1vBY3orZg1QEOJo%2F2NLgk8Dzo7ONV8ROY%2FW8JRVxFztvDPZNMI0sNJQeGozrdQVNZql9%2FS4CZSiFOW1mC1lghfx%2BHZNZzulapRlzvKyjARTygVWtxihYbIx6ZkMRCyC6CZjv%2FZmMlCwJ3561SQ52R3U2Zm1FrlbTZ6B0ePyIc6mKCEX3FC%2BGPEsCA2lXh02NnVIJREdkTZl7Ml0%2BJKojJocOHjBUv%2B%2FTtN7a0Fr%2BodcmvkpKq7siwRNdl9P9JgCVJ0CHqTNLT1tllaK3LMNHLRJnKFIuOkeG7FWVPQ87Ei6hmDFP6Eg7OaxDt05XUbF9XfhNAg79Ceix6nc0DLrr8IumCCL%2BhhbKhC7TIiqJfzayeK4LJCQ3jtE46YNiuZq3aDkeMy52Bf42PWoPNu239s9x1dgXGQ56NfnoWQApE57pFpdi0x9Fc0phIegYb4XuQvOUojGaebHJVQq%2BY6miuMAmYdNphd2GhcpU7NaUx1nd%2Bzpcfm3S1Qm95iapmIkKqK9DmyczRqWt795eVH3W3oGjOBk8LEDAV7efrfSl%2BP7so5ZsDppo0M9HX3zWTXT6MEPyh%2FhY0w6fSAwwY6pgFTVL%2BD8p4oEhmWLOAv%2FtAn80kioMApEeGuw7lxn2fDCddU0llJd5nzvhuR6iMa0uTCBf3C1prcthxVbj1FhKZ%2FupIXAl8afulCMUvIuRT2c%2FDen1fxvt2OTvIGVakXFJwbA9MJZnLFQW8fipjDcN3JwH8T%2FRPO8IAWOGU1vSPI%2B0u9jqRJCIND8G2rJXC8YUKojV%2BdBLIrJmnIeRdLwSXCjsXvb%2ByA&X-Amz-Signature=42c9a1a076bae1fcf38e5e8f6ced7e2c36b636df5d7bd0b620fce56303cbd9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
