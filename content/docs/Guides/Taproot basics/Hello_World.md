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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJJFEBI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjN2b3z5ekTKWx0hx6OwyAzfxc%2Fdc5%2BasjzCr%2F9BS5PQIhAJG9hgnRYY5fZOrm79FYftenmxmhP8KY6bbbpg6eqYHxKv8DCG8QABoMNjM3NDIzMTgzODA1IgzqMY2xy5laRlWjSdYq3ANstfcfz8ToKrkMQHIx7WUoBDF85zO4I2zVx9n0lIojDnIRtSIQay1q3Y5aLB%2Bckb7B7O%2F%2B5sWToHpf4cndfA4daA8iifHwhpy8VVbAN7a2hkAvbEBZhxHtgu4BDHmf9kFcvfwhQ1EiOVJVrm2q7nLY%2FQEGl3HDWHzZZ75%2B8W2AWtAFJAhkZRrh7mfJRtSGISZ8eEFE9FpT83rW5nAf%2FCGuPGGSK7KkMCeetDPhOROekk1UdQM2fwnlhvOODRiB0dRlzqXDXKfHfgn2iWl5bs0oxOMt1p7jAEKAHU6CG9dXmwcMAUN%2FT%2B%2BSHVyD8STXbcF6aJG9n0eeyU3FvY7XJmMTKqVCgcX6H0HZ7Swa8QC%2Fv8AOF1E64bYs7B6yuS3n9QOPOIAm7pDDq2w%2FdaXKM0iRMLnPXGKahEjWhdaQfyBhNoC%2BeeKLH2eQOJc9DSW%2BCc86a%2BprVPdzBjYiWcAKvmeSkJxUBBKI%2FPZ75rPsI%2FmC9DGRmm2xxa74QxvrhKQ2nktqVfYWiA9gciNNMHsm8sN3Rg2WZFDi6pdepaUQLwUymvXzsvTEJqf1EvBPWKjQo2O8HeDl6reFq2ryfLGzlPE7igewfU8Fn39BZZ0s2k7FOkaW7mQzbvxM3J5zozCN7tK%2FBjqkAb4kB%2BZfqdNcuboQDghj8vbb%2B5Zp4UutqY7FoAMuZ9vL29rfb9uVCSCxj4mUfeseTT7zYUepVdaHY3pgJWVVVLbvK%2FRcQdf6n94PP73CDF8F7YzIO%2BBqkbfn1L0Bg1qXK6vi7JVwyAeCRB1N5MgZb3%2BBlr7gw%2Fz94fadNxA9F3Mz9%2BzdtZ%2B0XzseBnlc53xo5fpGbzcAxMFhetsGkx20rXSJkZuz&X-Amz-Signature=af8d53ebd45927a9857052ef1bc1a73e16903ab943bc9ca91674fa0311aba879&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJJFEBI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjN2b3z5ekTKWx0hx6OwyAzfxc%2Fdc5%2BasjzCr%2F9BS5PQIhAJG9hgnRYY5fZOrm79FYftenmxmhP8KY6bbbpg6eqYHxKv8DCG8QABoMNjM3NDIzMTgzODA1IgzqMY2xy5laRlWjSdYq3ANstfcfz8ToKrkMQHIx7WUoBDF85zO4I2zVx9n0lIojDnIRtSIQay1q3Y5aLB%2Bckb7B7O%2F%2B5sWToHpf4cndfA4daA8iifHwhpy8VVbAN7a2hkAvbEBZhxHtgu4BDHmf9kFcvfwhQ1EiOVJVrm2q7nLY%2FQEGl3HDWHzZZ75%2B8W2AWtAFJAhkZRrh7mfJRtSGISZ8eEFE9FpT83rW5nAf%2FCGuPGGSK7KkMCeetDPhOROekk1UdQM2fwnlhvOODRiB0dRlzqXDXKfHfgn2iWl5bs0oxOMt1p7jAEKAHU6CG9dXmwcMAUN%2FT%2B%2BSHVyD8STXbcF6aJG9n0eeyU3FvY7XJmMTKqVCgcX6H0HZ7Swa8QC%2Fv8AOF1E64bYs7B6yuS3n9QOPOIAm7pDDq2w%2FdaXKM0iRMLnPXGKahEjWhdaQfyBhNoC%2BeeKLH2eQOJc9DSW%2BCc86a%2BprVPdzBjYiWcAKvmeSkJxUBBKI%2FPZ75rPsI%2FmC9DGRmm2xxa74QxvrhKQ2nktqVfYWiA9gciNNMHsm8sN3Rg2WZFDi6pdepaUQLwUymvXzsvTEJqf1EvBPWKjQo2O8HeDl6reFq2ryfLGzlPE7igewfU8Fn39BZZ0s2k7FOkaW7mQzbvxM3J5zozCN7tK%2FBjqkAb4kB%2BZfqdNcuboQDghj8vbb%2B5Zp4UutqY7FoAMuZ9vL29rfb9uVCSCxj4mUfeseTT7zYUepVdaHY3pgJWVVVLbvK%2FRcQdf6n94PP73CDF8F7YzIO%2BBqkbfn1L0Bg1qXK6vi7JVwyAeCRB1N5MgZb3%2BBlr7gw%2Fz94fadNxA9F3Mz9%2BzdtZ%2B0XzseBnlc53xo5fpGbzcAxMFhetsGkx20rXSJkZuz&X-Amz-Signature=ea6150b522effabea3d1b69abeafe4f9038fe02eec2f6d62234e27b2562e7c84&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
