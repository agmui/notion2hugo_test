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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYBLRSR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIH7s%2BTi%2BSsc%2FjD9CcVsUPiNG5smzEI9p1MfMlR5UfwTGAiEAswcvqZdDfni4xWfNVB3iVkjpDkloNXUTZR9K209Cx0MqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTZxIWmQEwWZuMUxircA71qurVlT9l%2BApVwLf9KqaK3hpFZFV%2F1FgQaYC7ABx9Uir4vWc9DzoY0N7R1BS4kghZhoaQcZ62TWx4fEdKAFGaXgmQb6L%2FodlC1SFbAEhJoEloRN9gcgZox42fnMIDNp03n9uKKMx0dtFUEAMGuCNdA8eGKVpSkyxY110y0bXy8ksRfUjgDnbOnFmPv6u3hnT61FXqIjwg3pqd0MncKVa%2Bgv152nahqWa0GP1zE1iQcLsMUwUchtw0si3mIubxUlBzGOmDm6URdF4%2FGOlgQgAIl5ghhbMbqNDfZ%2BQWj9wUXwK8H7j05Go7FjogT9Jhf9iP9taNeIiJ0%2FbLOBJXR8rvmrLC14SzISIED12We8ABuGNoiMvxvgWwTxlxzccucgUoe%2FtJrWDNnlnZ6ZzwdwY1S79gq7gQfhgLuk%2Fz70%2B1ApuGX0lXwgKlby62FHh0a3keF71GZBkjwmY91k8Avel0h6VrQPXGyg3F9kgKKtHcW06F2sS1iGexIEEs%2BrRERm5WMVrB2xf1vDJsnFBNNcvvstYumhZFaL8%2BgYpz4ZtvV8s87FQmMSOuu28ZQFvydSmOOTo8ECp%2Fr2h0AqhyreIaSzdq4O0QR86bHf3K%2BOQHMaOQZjaSfERHeZFXQMIXy178GOqUB3F4oAkjEa08BjB46atq5VMvUMdMqDvJCw2kZivcIYcreYwI4kT17IMCmVEXC1vUOCPtK6ZUKPfqgJ%2BjzF%2FMCP1fzxNOFVZEzu0WAo%2Fi4n6VpuLbKOCUP2%2BCtkB3h4ghcDfESEH46NWrK0F%2BVxC7p3tQ7cUJWYsFUfRbTT26EZbT7tHtFHdrVcBQuPL9V0cS9BQDbbgASwjHt5wJcAlmb6QrGII7D&X-Amz-Signature=0ab281ab997a24673081e2325bd9cc5d2f59da2a87a58a840fd27acadc1c0c55&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYBLRSR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIH7s%2BTi%2BSsc%2FjD9CcVsUPiNG5smzEI9p1MfMlR5UfwTGAiEAswcvqZdDfni4xWfNVB3iVkjpDkloNXUTZR9K209Cx0MqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTZxIWmQEwWZuMUxircA71qurVlT9l%2BApVwLf9KqaK3hpFZFV%2F1FgQaYC7ABx9Uir4vWc9DzoY0N7R1BS4kghZhoaQcZ62TWx4fEdKAFGaXgmQb6L%2FodlC1SFbAEhJoEloRN9gcgZox42fnMIDNp03n9uKKMx0dtFUEAMGuCNdA8eGKVpSkyxY110y0bXy8ksRfUjgDnbOnFmPv6u3hnT61FXqIjwg3pqd0MncKVa%2Bgv152nahqWa0GP1zE1iQcLsMUwUchtw0si3mIubxUlBzGOmDm6URdF4%2FGOlgQgAIl5ghhbMbqNDfZ%2BQWj9wUXwK8H7j05Go7FjogT9Jhf9iP9taNeIiJ0%2FbLOBJXR8rvmrLC14SzISIED12We8ABuGNoiMvxvgWwTxlxzccucgUoe%2FtJrWDNnlnZ6ZzwdwY1S79gq7gQfhgLuk%2Fz70%2B1ApuGX0lXwgKlby62FHh0a3keF71GZBkjwmY91k8Avel0h6VrQPXGyg3F9kgKKtHcW06F2sS1iGexIEEs%2BrRERm5WMVrB2xf1vDJsnFBNNcvvstYumhZFaL8%2BgYpz4ZtvV8s87FQmMSOuu28ZQFvydSmOOTo8ECp%2Fr2h0AqhyreIaSzdq4O0QR86bHf3K%2BOQHMaOQZjaSfERHeZFXQMIXy178GOqUB3F4oAkjEa08BjB46atq5VMvUMdMqDvJCw2kZivcIYcreYwI4kT17IMCmVEXC1vUOCPtK6ZUKPfqgJ%2BjzF%2FMCP1fzxNOFVZEzu0WAo%2Fi4n6VpuLbKOCUP2%2BCtkB3h4ghcDfESEH46NWrK0F%2BVxC7p3tQ7cUJWYsFUfRbTT26EZbT7tHtFHdrVcBQuPL9V0cS9BQDbbgASwjHt5wJcAlmb6QrGII7D&X-Amz-Signature=ccda4556be125f23a48f82b906e5b6a46bc7b34f79590d5b3b7984bb131677ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
