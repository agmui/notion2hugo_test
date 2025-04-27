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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CITGQKV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxr5JdkZ1j7WTB8gE7DcbkxYV2l7%2BGqbY23ru53OkXQIgBpNO5wVj8VrAIgp0Oy4OPhwMbpqBedR21fXQKwp1MVQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHD8IdvLmHoOFa8yircA1kV4NqTAPxctkb5jOKDiU7r79UuvC6UIUdU%2FnW%2Fmc%2BIu%2FM0f6QcAicnbNn6HKm1GL6UlHDN1QkzemTWST3eq%2B%2BCpOCIp2GHRXCtpYHUb6zwkFmcX9mlO%2BGjLxTOIi3ktbSStQ%2BbNtEP0Ww1WaPYrYD7iLLHIp3h8Juz3TYTfe90t83ahGD2c4JO73qpnB5PgIiL2zpGhmCaxHLdYyUndY55W8kwrjCKQn89yxYnykkt0yEnOqtnfkmnzjP0sp560ABj2OUpXI4I54PQigio9B4zsZQss5iXg5OgMHHthNHMBTy273oHpWAPUxFnfTGg9AM1ZJ4ujv9rcXKK8CMeA%2FxYrJcROPzuSwSiAG2IMygrhAYE2kcjQ%2FwNMEobmhOntX4PCxjSeanzqzaMQgfhPmNMd7nhto0wAZKp8JWxhRU45B%2BkJhNBUQuPvMXkqphguUL5JzQitDtxMf0HpVHP9iMbaqD8O5cESS3ZRIlasz76oaIcklSb%2FUUT6ghOzvYTeGvxTWhO7pc1JABkvYXiM%2BUDG%2FF7fHjDnp9U%2BX08kRBt%2BXawus7FtKX%2Bk1NI1bNxW76riNZBVteW9CRQfybrzv1ltSUc6f9aXu7kSo7Wf8ZFeDXrhSbrro7B%2BwTkMPa%2FtcAGOqUBbccJWiZ10Nv%2B5wqYS4et2VaqDAp3raoh9azeZhBoRDXdp2rwSZ4qqFd6WVumfqAaYdd6ys4BQJ%2BqsIEGIRm7GIJTH7th9X21Ps%2Bqo%2B40eL9jKl8vgnKV88zBMLO%2B1We6mJRZsQ6GNUoyOrXMDsOItP4pz6H58rI75lQn6uCQjGHfJjHfvfCr9uoZYvn1V7eURMpM5e1JsB5RQr7n1wiW9M2Ce9FV&X-Amz-Signature=b0bbdd61462b30e58a3fb157912b7ec25841b146c57ee3354f96b1dd85daabdf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CITGQKV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxr5JdkZ1j7WTB8gE7DcbkxYV2l7%2BGqbY23ru53OkXQIgBpNO5wVj8VrAIgp0Oy4OPhwMbpqBedR21fXQKwp1MVQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHD8IdvLmHoOFa8yircA1kV4NqTAPxctkb5jOKDiU7r79UuvC6UIUdU%2FnW%2Fmc%2BIu%2FM0f6QcAicnbNn6HKm1GL6UlHDN1QkzemTWST3eq%2B%2BCpOCIp2GHRXCtpYHUb6zwkFmcX9mlO%2BGjLxTOIi3ktbSStQ%2BbNtEP0Ww1WaPYrYD7iLLHIp3h8Juz3TYTfe90t83ahGD2c4JO73qpnB5PgIiL2zpGhmCaxHLdYyUndY55W8kwrjCKQn89yxYnykkt0yEnOqtnfkmnzjP0sp560ABj2OUpXI4I54PQigio9B4zsZQss5iXg5OgMHHthNHMBTy273oHpWAPUxFnfTGg9AM1ZJ4ujv9rcXKK8CMeA%2FxYrJcROPzuSwSiAG2IMygrhAYE2kcjQ%2FwNMEobmhOntX4PCxjSeanzqzaMQgfhPmNMd7nhto0wAZKp8JWxhRU45B%2BkJhNBUQuPvMXkqphguUL5JzQitDtxMf0HpVHP9iMbaqD8O5cESS3ZRIlasz76oaIcklSb%2FUUT6ghOzvYTeGvxTWhO7pc1JABkvYXiM%2BUDG%2FF7fHjDnp9U%2BX08kRBt%2BXawus7FtKX%2Bk1NI1bNxW76riNZBVteW9CRQfybrzv1ltSUc6f9aXu7kSo7Wf8ZFeDXrhSbrro7B%2BwTkMPa%2FtcAGOqUBbccJWiZ10Nv%2B5wqYS4et2VaqDAp3raoh9azeZhBoRDXdp2rwSZ4qqFd6WVumfqAaYdd6ys4BQJ%2BqsIEGIRm7GIJTH7th9X21Ps%2Bqo%2B40eL9jKl8vgnKV88zBMLO%2B1We6mJRZsQ6GNUoyOrXMDsOItP4pz6H58rI75lQn6uCQjGHfJjHfvfCr9uoZYvn1V7eURMpM5e1JsB5RQr7n1wiW9M2Ce9FV&X-Amz-Signature=6b84ea3f57c0ab34cfefaee5ac050aef6231280373d8cf5c86135089a2f3ac58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
