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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FN6QOBC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH2ZzrOFvloq2jilndHg%2FWOuV2%2BGsj2%2FV1zdHzv1IAcgAiEAhnbTG39RfenkL3e17R7BnyX%2B%2F7hShcL4W91aP6zdzTMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMs1YYtaqaTSq9AZLSrcA4qbyf3v8ZbNbSKGbWal4xefwslFz90tdkVTUS1T2Fae2crsSWSxhamrGKFpwHvLKGZvIS3GYt2OsIqZaQ1q09KvE6vp7gu9jq539uZMJfBprN576rzZAkFTSj0kN9qmm8B6mxz3pnlv5nv0DwNHYVOu5Y1GBaPqU4pq3bp1yBGnbv2bUvl4HECNIaZFIhbku7Gwg7YlXWFOXoxU84ygWpE7MfQQQDaf0B0KFYRVkPVoxpocITLD4BN%2FjqTlnKOvxlHhqDX6KxU7nwa3UOglvzicEHt6cJSlb24EVoEqvpV9U7LFAKTHH22sw6wKVEmhLZMQfDzESCBHpNzeZDPThGYE42NhgxP2eA%2B9mP2dAowUyDU9Ly7XZnerjTPm7yKpYat5wNEcZUJidDoK36awDrXNHVz9qPKs8LfKwPZCYsBpYCHO%2BkrnZK4JYHiamCdWayoFnqFP9lYW39EuT180ik8bCLOV7oSrOt%2BoiMkTeHZ7Q71endQB6FqHsYl5bc1vW%2FQkLH9O%2BHNwZyv3ZgBNFyTTawUroiOh%2F91OUhdgqFfIacDbd1w7p2jhgUwQ15p0oi9khJjxBw1MWKYByuyCpY7a%2FeQak4U%2Bki0EQRYlLdY004mU6GRpWeE%2BoEJ6MKjo%2BL4GOqUBE3qZ%2By2ph5VDKrQO%2BTIdDubi4%2BlvWS8ajBeAJRbyU0O2zeCY%2FdnOugiFJerpWZ21n6q9HyLIKFMZZo6WuesZVW8QuICJ5NJ7UoDeECS7GaitUu12uDnFRNzT6MPbfvVmgmgh%2B0DiuiQWHtpfWzaMY2MeEeF6UbxMBk0Ol7cb0ZPN1VtuECU6Vs4MXJkQTfhg6qLAN%2ByHoPUNJAPnIlyJbOswgnYm&X-Amz-Signature=b55e44074d4d61b4956788ba0e84e9ede7e07263fd0d6165f8248ea24ee035d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FN6QOBC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH2ZzrOFvloq2jilndHg%2FWOuV2%2BGsj2%2FV1zdHzv1IAcgAiEAhnbTG39RfenkL3e17R7BnyX%2B%2F7hShcL4W91aP6zdzTMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMs1YYtaqaTSq9AZLSrcA4qbyf3v8ZbNbSKGbWal4xefwslFz90tdkVTUS1T2Fae2crsSWSxhamrGKFpwHvLKGZvIS3GYt2OsIqZaQ1q09KvE6vp7gu9jq539uZMJfBprN576rzZAkFTSj0kN9qmm8B6mxz3pnlv5nv0DwNHYVOu5Y1GBaPqU4pq3bp1yBGnbv2bUvl4HECNIaZFIhbku7Gwg7YlXWFOXoxU84ygWpE7MfQQQDaf0B0KFYRVkPVoxpocITLD4BN%2FjqTlnKOvxlHhqDX6KxU7nwa3UOglvzicEHt6cJSlb24EVoEqvpV9U7LFAKTHH22sw6wKVEmhLZMQfDzESCBHpNzeZDPThGYE42NhgxP2eA%2B9mP2dAowUyDU9Ly7XZnerjTPm7yKpYat5wNEcZUJidDoK36awDrXNHVz9qPKs8LfKwPZCYsBpYCHO%2BkrnZK4JYHiamCdWayoFnqFP9lYW39EuT180ik8bCLOV7oSrOt%2BoiMkTeHZ7Q71endQB6FqHsYl5bc1vW%2FQkLH9O%2BHNwZyv3ZgBNFyTTawUroiOh%2F91OUhdgqFfIacDbd1w7p2jhgUwQ15p0oi9khJjxBw1MWKYByuyCpY7a%2FeQak4U%2Bki0EQRYlLdY004mU6GRpWeE%2BoEJ6MKjo%2BL4GOqUBE3qZ%2By2ph5VDKrQO%2BTIdDubi4%2BlvWS8ajBeAJRbyU0O2zeCY%2FdnOugiFJerpWZ21n6q9HyLIKFMZZo6WuesZVW8QuICJ5NJ7UoDeECS7GaitUu12uDnFRNzT6MPbfvVmgmgh%2B0DiuiQWHtpfWzaMY2MeEeF6UbxMBk0Ol7cb0ZPN1VtuECU6Vs4MXJkQTfhg6qLAN%2ByHoPUNJAPnIlyJbOswgnYm&X-Amz-Signature=576993ee08965aeae294b1e36fd22f608f53d4e8c1cd66727f80cdc60ff7bb0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
