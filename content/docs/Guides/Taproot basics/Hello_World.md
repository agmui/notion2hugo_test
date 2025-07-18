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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEBQIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBomunV86LfI%2FhhnMERpLvU%2FNv%2Br1Fq9ANuacJ7hwhreAiBsFfc6BLDmnFiGGkSXB6E5wW2rFBoHvVTJfRHxZfxR4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqzVehhDo6MYbLmaMKtwDKjzJr2AMhaqv55leyJaOsyaCOeNSziV9ZkDcFYbP3Jp9PyClg5D9PQeWKL%2F6txZIhmZ4CCNQTbiyuB8zv5iU5VJiTJOeTlLEbb4FFQzey51kcSdfdC5x685A78xrHe%2BoZuw3i6Vf8IcAiBiKACnWv3A6rnp%2BviUVG3OwlxrsJSb0Evy0ep9a6eNcDP9KqVHsLh%2FYAh%2FP7CCXRp5D8WvtLr0jaIWU1udX7Wd4SmLbvqj1Ufoe7eFqbT8fUKtywC5ZNRZHPvxYTDaKAaeG%2FR4ia7DWKCFMDPsBlkStqG9zO7TEQEPqD%2BY58mO6WIoCemWA9zBto%2FgR8WMlPzYdN%2FYd3Hs3n3f8nZg%2BwsNl6oXHN2q2H9JjwMrQFjdSx6CxlmvLPeBIYtJmSb1ZRcDatVxV6P5RqSp9cVN0SIbMXs8a2IR7egroOfVc%2Fja4hiHElYwI4tP5XDAy8NNz%2FGUP8rBXNFEDCsSmP%2BwARE1Pcxlj4uYxCwV8lt5zCaUDsQr%2Bkz67p2mppQEtFJNKqVFAIn7M8Jo4IVjVQd3L4r8FJiFF2RKCAwiwYxGOBTpnZEof55tXBxw%2B2KTB34GnooCyDmDBlXxCqnkcGgFXTHRF4zE55Vc5nHnXN41h1TAyyjgwu8%2FowwY6pgGPEaMin1lSGUMhZTsRV1nsVkke%2BQu6jM4UkPRaw2GY5wzYkBXyPRaLc8koMlyj9m6L0UZEnpbXKbqVqexmJMAJ7%2BMstNaEB%2FirbTLg7vkfL%2FTk6UILE3QmkLRcJ5CNLvgpAC93Y4bay0Lzx5U2vBEfXTqjGqlynq0iq8PtTyuL66lKBpPn9mo3xI42PVMc8YFSf0VC1Th6mBAxsDteF2xccj%2BvV4%2BA&X-Amz-Signature=dcdda9a423c1783d70908c67eea2da44dc33bfe98330f86b328ff867a629369b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEBQIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBomunV86LfI%2FhhnMERpLvU%2FNv%2Br1Fq9ANuacJ7hwhreAiBsFfc6BLDmnFiGGkSXB6E5wW2rFBoHvVTJfRHxZfxR4SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqzVehhDo6MYbLmaMKtwDKjzJr2AMhaqv55leyJaOsyaCOeNSziV9ZkDcFYbP3Jp9PyClg5D9PQeWKL%2F6txZIhmZ4CCNQTbiyuB8zv5iU5VJiTJOeTlLEbb4FFQzey51kcSdfdC5x685A78xrHe%2BoZuw3i6Vf8IcAiBiKACnWv3A6rnp%2BviUVG3OwlxrsJSb0Evy0ep9a6eNcDP9KqVHsLh%2FYAh%2FP7CCXRp5D8WvtLr0jaIWU1udX7Wd4SmLbvqj1Ufoe7eFqbT8fUKtywC5ZNRZHPvxYTDaKAaeG%2FR4ia7DWKCFMDPsBlkStqG9zO7TEQEPqD%2BY58mO6WIoCemWA9zBto%2FgR8WMlPzYdN%2FYd3Hs3n3f8nZg%2BwsNl6oXHN2q2H9JjwMrQFjdSx6CxlmvLPeBIYtJmSb1ZRcDatVxV6P5RqSp9cVN0SIbMXs8a2IR7egroOfVc%2Fja4hiHElYwI4tP5XDAy8NNz%2FGUP8rBXNFEDCsSmP%2BwARE1Pcxlj4uYxCwV8lt5zCaUDsQr%2Bkz67p2mppQEtFJNKqVFAIn7M8Jo4IVjVQd3L4r8FJiFF2RKCAwiwYxGOBTpnZEof55tXBxw%2B2KTB34GnooCyDmDBlXxCqnkcGgFXTHRF4zE55Vc5nHnXN41h1TAyyjgwu8%2FowwY6pgGPEaMin1lSGUMhZTsRV1nsVkke%2BQu6jM4UkPRaw2GY5wzYkBXyPRaLc8koMlyj9m6L0UZEnpbXKbqVqexmJMAJ7%2BMstNaEB%2FirbTLg7vkfL%2FTk6UILE3QmkLRcJ5CNLvgpAC93Y4bay0Lzx5U2vBEfXTqjGqlynq0iq8PtTyuL66lKBpPn9mo3xI42PVMc8YFSf0VC1Th6mBAxsDteF2xccj%2BvV4%2BA&X-Amz-Signature=07c0d0885d48fc95f53da7908278e9d5b399f3417e141fff2d67c9ec843de280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
