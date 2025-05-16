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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3CQGIZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYAcAVJLNp%2BwZ3torKt0m0moeZmuOoGGyj5EwvQIas3gIgLv1klBbQtBC2gAWtjwhmG7D4FtaQKF4ao%2BkEQB%2BXUXcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3PbBhWlFUrUqQiPyrcA4JBp21pqfjFcE%2BBymYqAuAIk%2B3nDFatnemM%2FeELt7GyS%2Ba%2F6KtpC9WuiwhIO%2BpP669ENHFX4QtS5FV0lmphuEYi03axGHYXXJPwDGtbm5ZILxDcMOn0uhLlsT24SXNP6e%2BJQBOZzu1KnV30QbtfMEMewSh9OV3s3rZs49A6SCe8INdiclnlyfYk7KFL4EVLpr3qHy9ZmYFmXMqxZB2mqKp%2FkAh0sb%2FClcOls9mvrJnQUWjESn5z6Z62DHeaMs6D9elG0mU%2FLyfdeLCXAfnH%2B2VQN8iMfUbeC3FqhPQCVAx3V8JnPtlqUkQHuelZm73UcZe0UPN72APNZQ8fJdRXkrhGNIQMgHP8ugf7O4mH8RRL1khhIUXJzFFDFJwUAK2GsV4bTWLo1w21tzWJ%2Fk4gJQyagJVp3R%2FzRF6I6lz9bqQe1iq7ej6ooowZ5VvUP%2FMr0dfL75Jq0dL6%2FYWKr8YRzeIgON%2FNVvhOp9mprpozrG%2FtDtsbKu3q0AKZdlobRzxUyFm%2BoZ0DeoTz%2Bq5Bo4eYwNSkfxs7a7YW%2FVzWHVEPnv%2Fjc8Z2Z9ao58BB052iTKMj0IyDU7%2Bigt%2BqCXTKs7gI9oWIQDEKtsMBYMOVnVrbkVHZZVS6SgfcNfTXnHCHMPuQnsEGOqUBDjmEngk2ZXr8iLVCP8SBxHXXKlUZIb5j60kdJ6qyzdabPVvddrfZ36UaINGmFVTmPAV3AznxL1pceFmfco%2BARQU2xqopbsQyulunDwwwp6MMmiCBrAgyhX%2Fz6B9Bide1SspfLG2QZuhjjpTeedZQ4nwudYT8eHnIsgRD%2F%2FVidgscz0DbCS8hRcMX5H1dBSHJI4SXK%2BniqKQtZMtDJQNfQiThyc%2Bu&X-Amz-Signature=37458a62b3a53bd3cab5746bb335de2753eaba72e4994fc4b628caf658f37a73&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3CQGIZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYAcAVJLNp%2BwZ3torKt0m0moeZmuOoGGyj5EwvQIas3gIgLv1klBbQtBC2gAWtjwhmG7D4FtaQKF4ao%2BkEQB%2BXUXcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3PbBhWlFUrUqQiPyrcA4JBp21pqfjFcE%2BBymYqAuAIk%2B3nDFatnemM%2FeELt7GyS%2Ba%2F6KtpC9WuiwhIO%2BpP669ENHFX4QtS5FV0lmphuEYi03axGHYXXJPwDGtbm5ZILxDcMOn0uhLlsT24SXNP6e%2BJQBOZzu1KnV30QbtfMEMewSh9OV3s3rZs49A6SCe8INdiclnlyfYk7KFL4EVLpr3qHy9ZmYFmXMqxZB2mqKp%2FkAh0sb%2FClcOls9mvrJnQUWjESn5z6Z62DHeaMs6D9elG0mU%2FLyfdeLCXAfnH%2B2VQN8iMfUbeC3FqhPQCVAx3V8JnPtlqUkQHuelZm73UcZe0UPN72APNZQ8fJdRXkrhGNIQMgHP8ugf7O4mH8RRL1khhIUXJzFFDFJwUAK2GsV4bTWLo1w21tzWJ%2Fk4gJQyagJVp3R%2FzRF6I6lz9bqQe1iq7ej6ooowZ5VvUP%2FMr0dfL75Jq0dL6%2FYWKr8YRzeIgON%2FNVvhOp9mprpozrG%2FtDtsbKu3q0AKZdlobRzxUyFm%2BoZ0DeoTz%2Bq5Bo4eYwNSkfxs7a7YW%2FVzWHVEPnv%2Fjc8Z2Z9ao58BB052iTKMj0IyDU7%2Bigt%2BqCXTKs7gI9oWIQDEKtsMBYMOVnVrbkVHZZVS6SgfcNfTXnHCHMPuQnsEGOqUBDjmEngk2ZXr8iLVCP8SBxHXXKlUZIb5j60kdJ6qyzdabPVvddrfZ36UaINGmFVTmPAV3AznxL1pceFmfco%2BARQU2xqopbsQyulunDwwwp6MMmiCBrAgyhX%2Fz6B9Bide1SspfLG2QZuhjjpTeedZQ4nwudYT8eHnIsgRD%2F%2FVidgscz0DbCS8hRcMX5H1dBSHJI4SXK%2BniqKQtZMtDJQNfQiThyc%2Bu&X-Amz-Signature=c8beccd01f7d36d24ab065bc916f3096caed08898ab1387f386b063cfc00bac0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
