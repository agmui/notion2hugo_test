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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423OSVPN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBFLe9nrzIRmlL0%2F7JfA4S4M8lmDyHVX3qmEkW%2B1blrMAiBzrokx2a5OjbCe7AYGwfnzxsCVNmWdjeXuqxAPpF7ccCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMECClKg%2Be86gDmG6GKtwDWKtXX5V4RvsoMlSGq05gW7yWQNjz0l40oFBxBI%2FT6PR1XxbjzELYG%2Fs5U7%2B88fykCe%2Bol41uNRzFlJchljYK7yDvrJc5fyKmsuipS%2BqQC03IvJYcRn4hL%2F%2F0aWYWo%2FYFA0xdkHTheOkYvrPYxwexhl9y5M%2Bvv31HayD58DeVparFR7Ep72D%2FCOS47h%2Bvi8MdbhPLlt7afKOo9PQS12iyNpxtQPhc2Fk%2F33pj3FpzRNnZ7xZnwz29ddp2yGPL5Dl5dtMWkxLjelDkwZgbnZhUnCuCGknUgNIuKcDXgw90N7c7GM8iQ0Ff8nOAuSt7wMJs4b4FvegwVR%2FI0I%2BN%2BLHiuuR%2Bun0uXKuj36NGVFZV9VYxJ1D9SzcjMtvs229%2FlvVvRXT2cufNqWwF6vUWRICGVHeXhaVoozE9IyX0JD82mjiWGvV1Ywq%2FTR1A%2BMcjm4XE9PkPwi8EOvNdUJbSLK%2FubrLjXuMwIPqg2c%2BT3x%2B1oBHYblr7og3Ge%2FAC2BJiZyA6gC1HZ6lQQ%2Bv0aDGEj29t6pn5sgNO5zAK4ZJb8HPSjLk2dWZYtNF8f0k3TsbIzYFubp0R09NPTjRvRA22I%2BuOo7Q5HyedDw4e5QvhWz8PmrNhwik6Mh7q31wD9pcwzd%2FywgY6pgGZw5Vmc%2FsQDsohTzfcMCzOVVMaju2BuJPOWyo%2BEr1%2FUUaroe7L15O%2FKjP2k7Va3ZwA0DB0MU4tn2GQl2CE2veDDIsKgdjA7zJrBPujkxFWwfAVHmVNAHgjzLQKJk6j6eMqwHAj%2Br2UW5xX8ujgkYneOQiwH7rH4Exvn1f5AUo1izTDLvCK2ed2FvXzkCOP3o5wlDSnPV0CU3VU%2BvGXKNF%2FiKq9X7dh&X-Amz-Signature=01c9ec76ac6d0e682806c0e77470457afb80293cad931343460764a97095c0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423OSVPN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBFLe9nrzIRmlL0%2F7JfA4S4M8lmDyHVX3qmEkW%2B1blrMAiBzrokx2a5OjbCe7AYGwfnzxsCVNmWdjeXuqxAPpF7ccCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMECClKg%2Be86gDmG6GKtwDWKtXX5V4RvsoMlSGq05gW7yWQNjz0l40oFBxBI%2FT6PR1XxbjzELYG%2Fs5U7%2B88fykCe%2Bol41uNRzFlJchljYK7yDvrJc5fyKmsuipS%2BqQC03IvJYcRn4hL%2F%2F0aWYWo%2FYFA0xdkHTheOkYvrPYxwexhl9y5M%2Bvv31HayD58DeVparFR7Ep72D%2FCOS47h%2Bvi8MdbhPLlt7afKOo9PQS12iyNpxtQPhc2Fk%2F33pj3FpzRNnZ7xZnwz29ddp2yGPL5Dl5dtMWkxLjelDkwZgbnZhUnCuCGknUgNIuKcDXgw90N7c7GM8iQ0Ff8nOAuSt7wMJs4b4FvegwVR%2FI0I%2BN%2BLHiuuR%2Bun0uXKuj36NGVFZV9VYxJ1D9SzcjMtvs229%2FlvVvRXT2cufNqWwF6vUWRICGVHeXhaVoozE9IyX0JD82mjiWGvV1Ywq%2FTR1A%2BMcjm4XE9PkPwi8EOvNdUJbSLK%2FubrLjXuMwIPqg2c%2BT3x%2B1oBHYblr7og3Ge%2FAC2BJiZyA6gC1HZ6lQQ%2Bv0aDGEj29t6pn5sgNO5zAK4ZJb8HPSjLk2dWZYtNF8f0k3TsbIzYFubp0R09NPTjRvRA22I%2BuOo7Q5HyedDw4e5QvhWz8PmrNhwik6Mh7q31wD9pcwzd%2FywgY6pgGZw5Vmc%2FsQDsohTzfcMCzOVVMaju2BuJPOWyo%2BEr1%2FUUaroe7L15O%2FKjP2k7Va3ZwA0DB0MU4tn2GQl2CE2veDDIsKgdjA7zJrBPujkxFWwfAVHmVNAHgjzLQKJk6j6eMqwHAj%2Br2UW5xX8ujgkYneOQiwH7rH4Exvn1f5AUo1izTDLvCK2ed2FvXzkCOP3o5wlDSnPV0CU3VU%2BvGXKNF%2FiKq9X7dh&X-Amz-Signature=6cfd8a6467cd5904bc604bb9150ce4a13d3616e937966d3a5e4c40e305bdce72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
