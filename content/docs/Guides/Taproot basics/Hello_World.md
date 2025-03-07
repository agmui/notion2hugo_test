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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRQQWZP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjbOQZV%2BX0qHjHBnuvd1bSa6HWWp1goZ%2F08LcGKnA1yQIgexQunE4te6JPjULsperBkpV7RsaT54TxD8xF4UWnzjAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNCUyXqLEjDRVYU7uSrcA1d3WPeBTibYnY21pmCewOGfGnK%2B%2Bv9%2Fgd3w%2B9iFjGRMtNFmNNFG4dZYUY2t6rfCKZW0yX0vANapdl7EomeQn7TvBFrFPoulwX%2Fty%2Flny2zlXjeG85Aj1LHAzBhF%2F33eYxuNvEGU6jYXx%2Flzg8YLE%2B7OeFECz1%2FWLYsx6%2BdjxWf84mas7rUHV%2FFp4oQ58g1tG4URfkM44bheIOjc9I8kxJGq%2FkQc6yW6GPK1YMm13jjh%2Bom0aTajh%2FrBjP%2BPeVouJmujHSaN4%2BndLZR%2BqOrh5Ml%2FyBrTDKUE0xZd3aMLSUSwHV065YUFL1EwvxMEdjjeumsPDauIUHY70dwSpN67n%2FYfwcXyQyEX2r85tGeHfpWFw6S9tvgCCWLfd%2BfXdO8jzRD%2FZ0nrpf1YnuLYoBTGDDByAGguL3oUM4kj80AaPZGOq1qd0bxrYMDXH7YRl3SvscWcgNwAB7ZMo8yLFEJkADOnHdak9c0P8x3tqa8sU%2F527F4e%2Bwe013g7JE5gYJbH1SecD4rFFUIZGeEs%2FHDYfz17KHFMKKuIJDYPlAFGThNdUCX5p3wT7bjQzhtxmlPFyDg5KfbMqRrhMS9U8d9MzGDCxq3A9eVWYFnGqsLzpFwWoD%2FPxD2xidw18D7jMKO%2Frb4GOqUBicpbS6spJsfglWGJPZnjGUogYKJ5aL%2Bb%2F7R%2BqYbQ9bvqadW8DQe%2BEfVbLERTpT5y4oho9r8EzRU5A5bilhk1CafjLbVGQt0%2BfG151NJa%2FFzWNKov1zgR8RYaMbc1kPzhmBfAVgcXBNuJlrELkqbBRyBirNIAYj1hmqBa8d5aMsMAHdSNSYNmiAoD6LB%2BKBibZlyy8KcESrTuk2SoNu%2F%2FfV7ns4nN&X-Amz-Signature=6091a74bfb0e4e14ecbde6fad20bc8c34e565e6610b30b22dce24a659851fd77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRQQWZP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjbOQZV%2BX0qHjHBnuvd1bSa6HWWp1goZ%2F08LcGKnA1yQIgexQunE4te6JPjULsperBkpV7RsaT54TxD8xF4UWnzjAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNCUyXqLEjDRVYU7uSrcA1d3WPeBTibYnY21pmCewOGfGnK%2B%2Bv9%2Fgd3w%2B9iFjGRMtNFmNNFG4dZYUY2t6rfCKZW0yX0vANapdl7EomeQn7TvBFrFPoulwX%2Fty%2Flny2zlXjeG85Aj1LHAzBhF%2F33eYxuNvEGU6jYXx%2Flzg8YLE%2B7OeFECz1%2FWLYsx6%2BdjxWf84mas7rUHV%2FFp4oQ58g1tG4URfkM44bheIOjc9I8kxJGq%2FkQc6yW6GPK1YMm13jjh%2Bom0aTajh%2FrBjP%2BPeVouJmujHSaN4%2BndLZR%2BqOrh5Ml%2FyBrTDKUE0xZd3aMLSUSwHV065YUFL1EwvxMEdjjeumsPDauIUHY70dwSpN67n%2FYfwcXyQyEX2r85tGeHfpWFw6S9tvgCCWLfd%2BfXdO8jzRD%2FZ0nrpf1YnuLYoBTGDDByAGguL3oUM4kj80AaPZGOq1qd0bxrYMDXH7YRl3SvscWcgNwAB7ZMo8yLFEJkADOnHdak9c0P8x3tqa8sU%2F527F4e%2Bwe013g7JE5gYJbH1SecD4rFFUIZGeEs%2FHDYfz17KHFMKKuIJDYPlAFGThNdUCX5p3wT7bjQzhtxmlPFyDg5KfbMqRrhMS9U8d9MzGDCxq3A9eVWYFnGqsLzpFwWoD%2FPxD2xidw18D7jMKO%2Frb4GOqUBicpbS6spJsfglWGJPZnjGUogYKJ5aL%2Bb%2F7R%2BqYbQ9bvqadW8DQe%2BEfVbLERTpT5y4oho9r8EzRU5A5bilhk1CafjLbVGQt0%2BfG151NJa%2FFzWNKov1zgR8RYaMbc1kPzhmBfAVgcXBNuJlrELkqbBRyBirNIAYj1hmqBa8d5aMsMAHdSNSYNmiAoD6LB%2BKBibZlyy8KcESrTuk2SoNu%2F%2FfV7ns4nN&X-Amz-Signature=4e16851f6c851170009c2447b1b4af000f53c4a6739d5fa200cad9ffb3a3eb41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
