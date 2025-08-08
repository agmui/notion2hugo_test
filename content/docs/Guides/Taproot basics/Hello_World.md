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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAYLABO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCcHnVMmTr4He%2Fks2euGWzuiprP4jAM3cXw7SaF1aE%2BIwIgXTiuK3hn4l6vZR3tztgQGqbEFyrV99LMaPxvJwSHuwgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYEfPBCxPtM48pawCrcA3YZNqHnpT1sb1D7j1d%2FGWkkvFCUyLprMeI1UYx%2B1FpU4ruXginm4L2GnszLcpSx3UpHVSYWDYUkUpgPivSINFKm4Vtm%2BZQl95WckQRU5j8MYl42uzkVr2ITvBjdI7PyXpkAbBkbK7RZxSeQpwY7iBb5BWHDqVtgYamlpYr0ZWEIvQWWJqB9GWaxJXagQKpySDcaZQGDe8L7ZHR1ZiXS7v78QZF0iSMPd7awcgFT5QJqKs%2BpXT5rGrcTMAM%2BrGEKRNjjOUKRkB2XTD%2FnysSpS%2BJ%2FFaqWKHSXckrV6PuDRa7xweVzdkR1U6Lj3B37q0CNVTkIimhjxq8f%2FLDGwniBa3dyVwiZFsv0ZkpHv97cVMJIkBtpUAPhYDIuXQef%2BamGNmYo77TzUM59cpJwll09Ag%2Bb27VpLdUmDH1IHfx3AQuIRKdUKWY8pwxUaXkm6CooozY%2F%2F2ybNe9hnEOLt7nPM1AFxGEuzea2ZY09s9wI%2F4uTpOAdejsTwOf0YVWrZpXMAfKpyLHciZcHCA7K1yNX%2B6VFt4ZpqqmIlf4JJ0MbLXBKQVXVmMelteT%2B4a%2F3%2BUwVPoe4zIiiBwymBGfe%2FktQovzaP0j3AdKkgR%2BcWLjaJY6sNlPh%2BWBs5vZdyJGbMNe62cQGOqUBkoVeNe%2Bg3dYOQVGu72rmH%2Bl4x25kE3%2FiReLua%2BoKD0ns1IxUoDZUfqfaMRu6C5Kg9tdtvzS32zCYXGk4qNNDqJS0ARqRGZCikc6GWKmG1ZmWOCqZEH%2FoiSxdSomB1LMhgoSywwkhp8SvE%2F5GT4kG4FraEdDkPA63mnPypxJf6md3Kf%2FTlQjAeMkk1dZYt6GJpsQXEu1WMfzJKlrGokJp6bgVtvi3&X-Amz-Signature=9d75417385dbc0e26a470198edf5180a33c16d1d89c5a11a05519fec39a91eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAYLABO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCcHnVMmTr4He%2Fks2euGWzuiprP4jAM3cXw7SaF1aE%2BIwIgXTiuK3hn4l6vZR3tztgQGqbEFyrV99LMaPxvJwSHuwgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYEfPBCxPtM48pawCrcA3YZNqHnpT1sb1D7j1d%2FGWkkvFCUyLprMeI1UYx%2B1FpU4ruXginm4L2GnszLcpSx3UpHVSYWDYUkUpgPivSINFKm4Vtm%2BZQl95WckQRU5j8MYl42uzkVr2ITvBjdI7PyXpkAbBkbK7RZxSeQpwY7iBb5BWHDqVtgYamlpYr0ZWEIvQWWJqB9GWaxJXagQKpySDcaZQGDe8L7ZHR1ZiXS7v78QZF0iSMPd7awcgFT5QJqKs%2BpXT5rGrcTMAM%2BrGEKRNjjOUKRkB2XTD%2FnysSpS%2BJ%2FFaqWKHSXckrV6PuDRa7xweVzdkR1U6Lj3B37q0CNVTkIimhjxq8f%2FLDGwniBa3dyVwiZFsv0ZkpHv97cVMJIkBtpUAPhYDIuXQef%2BamGNmYo77TzUM59cpJwll09Ag%2Bb27VpLdUmDH1IHfx3AQuIRKdUKWY8pwxUaXkm6CooozY%2F%2F2ybNe9hnEOLt7nPM1AFxGEuzea2ZY09s9wI%2F4uTpOAdejsTwOf0YVWrZpXMAfKpyLHciZcHCA7K1yNX%2B6VFt4ZpqqmIlf4JJ0MbLXBKQVXVmMelteT%2B4a%2F3%2BUwVPoe4zIiiBwymBGfe%2FktQovzaP0j3AdKkgR%2BcWLjaJY6sNlPh%2BWBs5vZdyJGbMNe62cQGOqUBkoVeNe%2Bg3dYOQVGu72rmH%2Bl4x25kE3%2FiReLua%2BoKD0ns1IxUoDZUfqfaMRu6C5Kg9tdtvzS32zCYXGk4qNNDqJS0ARqRGZCikc6GWKmG1ZmWOCqZEH%2FoiSxdSomB1LMhgoSywwkhp8SvE%2F5GT4kG4FraEdDkPA63mnPypxJf6md3Kf%2FTlQjAeMkk1dZYt6GJpsQXEu1WMfzJKlrGokJp6bgVtvi3&X-Amz-Signature=caa158437172829e265c69714b97b204966e6573a91e01f9bf06e05909d7f494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
