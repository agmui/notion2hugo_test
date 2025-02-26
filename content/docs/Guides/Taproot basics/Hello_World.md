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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RUO4FYS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5POiSc0C8LqFV%2BD4iJCnSdlSX8tuLlL4LMqC4X2CsqgIhALMDGTXnu1XQJX8999I6l1lXJ581%2FqR2FbJXbmXusoxIKv8DCFcQABoMNjM3NDIzMTgzODA1IgxWA9pdGUDN7PDDAugq3AMQ9axhWcN5OU%2Fn%2FlKyeeiJQo5fMx%2FdA3A%2BKX8qSbrQ3x8kaza9OWGItZlEgESRA3fY7IPhjlZZFsh3mbox%2B5u0ccv93MlwIthvh7GMkT9ORsOsslaemKvy%2F1S0gyjpoYIGb2TNJCUMIpr3KfIq6E2gnBXFpEFWwxjoikIRDucbqhHiJWOjPJzAHVkETxnD1NBm4kujycfMeCoI%2F0V6ciDtsqJxs%2FKoP31E9NxItbvK8JTN%2FjKu6gj7%2B7p6zYUA0tt1A%2B%2F7ypv6aUHYls8iaFELCXdr8aW1VYW4IOCiETClcPgXHmh1HxqGRdjSP4a2mxhSENgAdexxRyZ5tE6cQJC%2BLITSfLjuioBgbsr8kdD6L3BkZoQxpG0gYDhjuq%2Fbr2IihydXjtGXeiHcQkbDN5oEqfgY2nAp3awlk8AiGeGUUR1%2B%2FqWq8nuh%2FxxcwW56R8KnBqv9kNu%2BkAkIhmZf2yvFetF%2BWnGz%2BqUseDo9pKmgxVCPIl%2B4eetTmJIxPKGgn%2BGEeib4ozRbuQw3JEuzAW%2FMmDxs54fYwtcrGNqL6JechvcIKXQME%2BOzbjwXGGZGBYkxGRP542swL%2FdBaOwC4Jxb2%2FZeefOqPysw6Rt1Qw1SK6SmQhxbVeeu1IhPHTDU4vq9BjqkAdtmm1%2BfcnO6B%2BGg7i0D43HTyD%2FvhWRrITOKl6bsmspivvhxvs388gnA3sdD%2BE56DLldsO%2ByCnXn9qvVluKQQIP5EeBBSNS4J%2B9SpaOpX%2FNs2dTTvt%2BxeNr7ToE%2Fw%2B2UJmXDaRAgfAUJNlQjq0AJWZe%2F7%2F3YjVfo8UKjBXKUy8spOeoQvjtGI%2BGfmFCwGycS13xAwbxGts8fKEIeNqVSnG15Khp7&X-Amz-Signature=7a0c685b13ae63b939f4db1020facfcacff2963815dd891e024992ab67c186b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RUO4FYS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5POiSc0C8LqFV%2BD4iJCnSdlSX8tuLlL4LMqC4X2CsqgIhALMDGTXnu1XQJX8999I6l1lXJ581%2FqR2FbJXbmXusoxIKv8DCFcQABoMNjM3NDIzMTgzODA1IgxWA9pdGUDN7PDDAugq3AMQ9axhWcN5OU%2Fn%2FlKyeeiJQo5fMx%2FdA3A%2BKX8qSbrQ3x8kaza9OWGItZlEgESRA3fY7IPhjlZZFsh3mbox%2B5u0ccv93MlwIthvh7GMkT9ORsOsslaemKvy%2F1S0gyjpoYIGb2TNJCUMIpr3KfIq6E2gnBXFpEFWwxjoikIRDucbqhHiJWOjPJzAHVkETxnD1NBm4kujycfMeCoI%2F0V6ciDtsqJxs%2FKoP31E9NxItbvK8JTN%2FjKu6gj7%2B7p6zYUA0tt1A%2B%2F7ypv6aUHYls8iaFELCXdr8aW1VYW4IOCiETClcPgXHmh1HxqGRdjSP4a2mxhSENgAdexxRyZ5tE6cQJC%2BLITSfLjuioBgbsr8kdD6L3BkZoQxpG0gYDhjuq%2Fbr2IihydXjtGXeiHcQkbDN5oEqfgY2nAp3awlk8AiGeGUUR1%2B%2FqWq8nuh%2FxxcwW56R8KnBqv9kNu%2BkAkIhmZf2yvFetF%2BWnGz%2BqUseDo9pKmgxVCPIl%2B4eetTmJIxPKGgn%2BGEeib4ozRbuQw3JEuzAW%2FMmDxs54fYwtcrGNqL6JechvcIKXQME%2BOzbjwXGGZGBYkxGRP542swL%2FdBaOwC4Jxb2%2FZeefOqPysw6Rt1Qw1SK6SmQhxbVeeu1IhPHTDU4vq9BjqkAdtmm1%2BfcnO6B%2BGg7i0D43HTyD%2FvhWRrITOKl6bsmspivvhxvs388gnA3sdD%2BE56DLldsO%2ByCnXn9qvVluKQQIP5EeBBSNS4J%2B9SpaOpX%2FNs2dTTvt%2BxeNr7ToE%2Fw%2B2UJmXDaRAgfAUJNlQjq0AJWZe%2F7%2F3YjVfo8UKjBXKUy8spOeoQvjtGI%2BGfmFCwGycS13xAwbxGts8fKEIeNqVSnG15Khp7&X-Amz-Signature=fc73a48ae91cdde2876e2484a3eeeed129db3098d4767eba95be0d5eb3819fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
