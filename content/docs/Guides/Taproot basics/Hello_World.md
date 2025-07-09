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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWT2AFN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF98ZoNfXJjhcv6GEtx8qJY71jXXk7xWaq1ilemYaHmDAiAY9IgG90T64hF8O99Lp97hfj%2FOXqI8xNXeCSM0t3F17iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtaLejLdWnybZpxu4KtwDjzXCvzEg90RrS6vsWF4zUaiqRGaz%2Fmw7DhQYoH9BjKE%2BQJwn9AfzczVzmyGlqge%2BdisnVgaRIiG8pjUuzqx5E8vm0THRBwrFs0ldv%2BAPpbRNJeazdr48usaz8yTC5l978MAKRsTQVc6oik9kxHfcYiRY4mJfwC7EWSmRRcES%2BGigC4fg24DEfJhUqEzzjuAl0ltL4vbxDqDD5apbml2PsGirIjTPb1FJm3oyuQplS161TDcx6LXaCG9uj8KC%2FCOmZPla5eFws16KzP1oGbR9mNUwZBcZ2eyWrUR45ODMdQ%2BpfuApJpV9g6pBVw9e6dJp3Wu9HBwe%2FQuYpRrj58VIkkBzUpXc1wFqadE3pSqnISHDUw8giswPlAZlFeSlZ2K81Lcs9gAmccksZXynegrwWSlh3e82l0C5P%2Bcr7ReVpVgv85WZYQ7PgfrME4JAyP9FsOXPrcta9SCn6mI0NRRrPMIjKyhCe36hp4UhibiUykPOdyoDw9ZIMwSNNcKOJo%2FFKYAqtydCSWUCxhGO80ZumRweNjNRxvH4MOmSkWuw38KLg4SMJRGoqEgYxo6C6kJiPe0fZYrlKfqGlig5nFG13ll%2FrfwtkxlyvNteYBPVKO5ldwXXer76t5wsC0Awp5i6wwY6pgGRVIhQWMNIUrQIns8NJrJr3B31uLlVh7zocLK3qlrlr%2Bb%2FgsYMAf8WOXKZ7H7D4jgSMkLYV%2F9%2FpOFv%2FrpbcnBV1xmL2zOPC%2FqgZ9kMbBA4u9tX5Fu%2FwDRVU1d7Wn4n557WvfzQF5LJFvC5eZZs2eKtvAQVNilrGDpgVYDvwqBl3KZO2zzv5N5Z1e7BGRyFpf9b0te7Qnp56S5zrazkNYDkw5LCVTBO&X-Amz-Signature=091b155c13c4e8aac3a9b200a07d684819c68bc7b7fdb1d6306cd7c323b05a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWT2AFN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF98ZoNfXJjhcv6GEtx8qJY71jXXk7xWaq1ilemYaHmDAiAY9IgG90T64hF8O99Lp97hfj%2FOXqI8xNXeCSM0t3F17iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtaLejLdWnybZpxu4KtwDjzXCvzEg90RrS6vsWF4zUaiqRGaz%2Fmw7DhQYoH9BjKE%2BQJwn9AfzczVzmyGlqge%2BdisnVgaRIiG8pjUuzqx5E8vm0THRBwrFs0ldv%2BAPpbRNJeazdr48usaz8yTC5l978MAKRsTQVc6oik9kxHfcYiRY4mJfwC7EWSmRRcES%2BGigC4fg24DEfJhUqEzzjuAl0ltL4vbxDqDD5apbml2PsGirIjTPb1FJm3oyuQplS161TDcx6LXaCG9uj8KC%2FCOmZPla5eFws16KzP1oGbR9mNUwZBcZ2eyWrUR45ODMdQ%2BpfuApJpV9g6pBVw9e6dJp3Wu9HBwe%2FQuYpRrj58VIkkBzUpXc1wFqadE3pSqnISHDUw8giswPlAZlFeSlZ2K81Lcs9gAmccksZXynegrwWSlh3e82l0C5P%2Bcr7ReVpVgv85WZYQ7PgfrME4JAyP9FsOXPrcta9SCn6mI0NRRrPMIjKyhCe36hp4UhibiUykPOdyoDw9ZIMwSNNcKOJo%2FFKYAqtydCSWUCxhGO80ZumRweNjNRxvH4MOmSkWuw38KLg4SMJRGoqEgYxo6C6kJiPe0fZYrlKfqGlig5nFG13ll%2FrfwtkxlyvNteYBPVKO5ldwXXer76t5wsC0Awp5i6wwY6pgGRVIhQWMNIUrQIns8NJrJr3B31uLlVh7zocLK3qlrlr%2Bb%2FgsYMAf8WOXKZ7H7D4jgSMkLYV%2F9%2FpOFv%2FrpbcnBV1xmL2zOPC%2FqgZ9kMbBA4u9tX5Fu%2FwDRVU1d7Wn4n557WvfzQF5LJFvC5eZZs2eKtvAQVNilrGDpgVYDvwqBl3KZO2zzv5N5Z1e7BGRyFpf9b0te7Qnp56S5zrazkNYDkw5LCVTBO&X-Amz-Signature=ab46bef652eb815a28d79e57de88fa981f6c384cee7593ba5e41b652949115d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
