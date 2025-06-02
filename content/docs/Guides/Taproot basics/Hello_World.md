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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SU45L4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC8aU8eTarJ3IwEoDrjVOhkBXmgmRO1hRv2ISyQ5lpJawIhAP8V%2B9J%2BM%2FUs0D%2BvBggSnp0OoYDt5KjzJh1jn0kQJCpxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTTWpwsh9JUEADwB0q3AOT3%2B62kCYxNiQ8Ir%2BwSWoPWredj9MLeBVM0NxGgNgvtqFaIzyyvNfpqyxpLoPaeJoYyiXKffSGMsfcPJgjcRnX1m1EINoDApcuai1ArTLNfdjjQUE89XwFyf%2FK1NMqZ8B5p1OwuuFhFy%2FF3XgeQrPGgannFenPd%2BP%2FeK9S3BQx5z4sl5WMdKRVn7bTQG78O3aelcxumsgcUpO97JmB0P6Itj6941R6F%2BLTI2s3ubMLEXJTFTrgpL21kry8HTxXlsYrR5vhB8458Gkb12ZWJ0CNlMNd6fsTASHRwP4T5EM%2FjmWS0413uRqhFxoqws6OXOOxc3qss4yWtJg%2FXs%2F11QsqDQ8Rg2g5J86LnE9uRbyIOOroIQC1%2BOyUxjbB6Hc5o6FiE7VUbNPpfKalMydV%2F3qKeZS5cK7tqHMz%2FBnqtmghundOFRnWK8xS%2BhbwLaZwF592Ety71xB4btyYBMgw9dSf1K0zrK2iIv1f21QIVHcDKFxoOSJbVQTsxp1w7zBjhpi3ZH9rcnvWy2hdi9s7bhQmItC68pLBpCWZ6OUtZGUnFWbw0XOMOZuGyMBT5sE5oYZF%2FlXeuu%2BvYNwuKxXnZW97Y3f8%2FnwkGUfq94EfXnAx7GurqNOJYrk4oWUSqjDX%2BfPBBjqkAXMgTlftEmfb6SeKg25z1UAHY94W21B7ccCDfihq%2BJ6QyODfyy4mEy%2FiI3%2BtBxRm3ZWtxTtK7eEetXWl%2BuyZr2AKbKQggiMxWmgEnuJX2nX74cSHOWQfVG9lWFv6cQRFx7vSQCxMjL8T8EdFb3djGjS3N%2F5LqeGjh76nqWlo4JzzJxpeW5349saKXYJkNzBeUk7n8h%2FkDe7jK6CdrLkGhltMGxb5&X-Amz-Signature=2de31b98f872125fe3a606d2de2a0d9126fe8a560918fcad2666ad76dc144305&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SU45L4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC8aU8eTarJ3IwEoDrjVOhkBXmgmRO1hRv2ISyQ5lpJawIhAP8V%2B9J%2BM%2FUs0D%2BvBggSnp0OoYDt5KjzJh1jn0kQJCpxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTTWpwsh9JUEADwB0q3AOT3%2B62kCYxNiQ8Ir%2BwSWoPWredj9MLeBVM0NxGgNgvtqFaIzyyvNfpqyxpLoPaeJoYyiXKffSGMsfcPJgjcRnX1m1EINoDApcuai1ArTLNfdjjQUE89XwFyf%2FK1NMqZ8B5p1OwuuFhFy%2FF3XgeQrPGgannFenPd%2BP%2FeK9S3BQx5z4sl5WMdKRVn7bTQG78O3aelcxumsgcUpO97JmB0P6Itj6941R6F%2BLTI2s3ubMLEXJTFTrgpL21kry8HTxXlsYrR5vhB8458Gkb12ZWJ0CNlMNd6fsTASHRwP4T5EM%2FjmWS0413uRqhFxoqws6OXOOxc3qss4yWtJg%2FXs%2F11QsqDQ8Rg2g5J86LnE9uRbyIOOroIQC1%2BOyUxjbB6Hc5o6FiE7VUbNPpfKalMydV%2F3qKeZS5cK7tqHMz%2FBnqtmghundOFRnWK8xS%2BhbwLaZwF592Ety71xB4btyYBMgw9dSf1K0zrK2iIv1f21QIVHcDKFxoOSJbVQTsxp1w7zBjhpi3ZH9rcnvWy2hdi9s7bhQmItC68pLBpCWZ6OUtZGUnFWbw0XOMOZuGyMBT5sE5oYZF%2FlXeuu%2BvYNwuKxXnZW97Y3f8%2FnwkGUfq94EfXnAx7GurqNOJYrk4oWUSqjDX%2BfPBBjqkAXMgTlftEmfb6SeKg25z1UAHY94W21B7ccCDfihq%2BJ6QyODfyy4mEy%2FiI3%2BtBxRm3ZWtxTtK7eEetXWl%2BuyZr2AKbKQggiMxWmgEnuJX2nX74cSHOWQfVG9lWFv6cQRFx7vSQCxMjL8T8EdFb3djGjS3N%2F5LqeGjh76nqWlo4JzzJxpeW5349saKXYJkNzBeUk7n8h%2FkDe7jK6CdrLkGhltMGxb5&X-Amz-Signature=7c6f9874d2c6ef21fcbb7727c2eef06c4826df4b6f13317fcf974d74839fe7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
