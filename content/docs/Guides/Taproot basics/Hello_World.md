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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWYFAYO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAhiTV9OcalWoyW6sbN%2BxZ2p2GjIfWaZhRNSGK2Ym0VMAiEA0fC96YRGWBgQsS9qxarAuqBNEgmFrhGFCRogJPf53lgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNZ2Q4rrf9NCe%2B%2BTyrcA9yPIlpkMa6Hb39Wq%2BpcAZr4wE%2FZpEwpD%2FOVLkxXIzrfF4TT1lp31QowyjluaNJTSHlAlWUzAndvPZsRNRAVsVMw72pXadpyVT04wTTkGFsqMzdyx%2FcdMSAFqXQYvaRI4%2FuaB0l4%2Ft5dWW9FqiECi36YUis4iPSH6F0Jj6Cs3k%2Fu0d4BQJqZKo4%2BCIg%2By7iyZYXuXK9MVuHfco2cz6vdIwas4oDaKNefK718ZK5EDlQwv7eJp9MKiCxKc43FoY93CvYn8Wt8Dh6yfeSAup%2B7dfe4ZyMD9SM%2FdVSbDKhpHweB13Ajs%2BxFkdCCd%2BECuuOs17wGPlH2eUx7rp7pW8sICPVU1ZHdV%2BNy%2FK9tfjcwxscUc3Lw8MxkkD4gn1CVWQIjzNFX5rbkLtrN2E7gZfkWDx%2F4Yq%2B68O45gfOKKnA%2BqxrPsRTPgH5C2ppdptXz1MJWXzoP02%2Ba2GVqCfRisDcsIUdpqAwX683b58r8%2Fmtw8Ix3%2BvL%2FU2P4GfvRvRHAPSTEhNM9skUIzGLUBAHJmNLrXRFbSzxS%2Bbe%2BE0%2FBqTu4K8bBto4RGeAF%2FOv7yaihSlE8%2FE56fH9ydVFMe2Z3QeKAn3UqyIr%2FplgDWvUJUcwHed2hhG7h6Iw7jC3ggSNmMPn2hb4GOqUBnMOTg7AmMIVtdJCLLAwb%2FCAmpg7bAoafJQ8hicO0N13%2FwNU1eR1ieJwzumaGl7m8%2FUCr8m1mwS0cmfYJumdx7E%2BeQxj8wv9fBcTK3ao%2FLum%2By90s7AaaFv%2BfelRrBEbPc4kQi9S8VHvFaOjfZXU5Zd5ZtAo6Sme3GQFJYaloGTwdkmQY5Xq9XcmXZzAtnKwL0b1T4zm%2FNF6CoOpbVTLurmYAVBEA&X-Amz-Signature=1aac42420f954cba25fecd2c20fcc1fc9f4ddc140cf695a31fa9b86be1d44e29&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWYFAYO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAhiTV9OcalWoyW6sbN%2BxZ2p2GjIfWaZhRNSGK2Ym0VMAiEA0fC96YRGWBgQsS9qxarAuqBNEgmFrhGFCRogJPf53lgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNZ2Q4rrf9NCe%2B%2BTyrcA9yPIlpkMa6Hb39Wq%2BpcAZr4wE%2FZpEwpD%2FOVLkxXIzrfF4TT1lp31QowyjluaNJTSHlAlWUzAndvPZsRNRAVsVMw72pXadpyVT04wTTkGFsqMzdyx%2FcdMSAFqXQYvaRI4%2FuaB0l4%2Ft5dWW9FqiECi36YUis4iPSH6F0Jj6Cs3k%2Fu0d4BQJqZKo4%2BCIg%2By7iyZYXuXK9MVuHfco2cz6vdIwas4oDaKNefK718ZK5EDlQwv7eJp9MKiCxKc43FoY93CvYn8Wt8Dh6yfeSAup%2B7dfe4ZyMD9SM%2FdVSbDKhpHweB13Ajs%2BxFkdCCd%2BECuuOs17wGPlH2eUx7rp7pW8sICPVU1ZHdV%2BNy%2FK9tfjcwxscUc3Lw8MxkkD4gn1CVWQIjzNFX5rbkLtrN2E7gZfkWDx%2F4Yq%2B68O45gfOKKnA%2BqxrPsRTPgH5C2ppdptXz1MJWXzoP02%2Ba2GVqCfRisDcsIUdpqAwX683b58r8%2Fmtw8Ix3%2BvL%2FU2P4GfvRvRHAPSTEhNM9skUIzGLUBAHJmNLrXRFbSzxS%2Bbe%2BE0%2FBqTu4K8bBto4RGeAF%2FOv7yaihSlE8%2FE56fH9ydVFMe2Z3QeKAn3UqyIr%2FplgDWvUJUcwHed2hhG7h6Iw7jC3ggSNmMPn2hb4GOqUBnMOTg7AmMIVtdJCLLAwb%2FCAmpg7bAoafJQ8hicO0N13%2FwNU1eR1ieJwzumaGl7m8%2FUCr8m1mwS0cmfYJumdx7E%2BeQxj8wv9fBcTK3ao%2FLum%2By90s7AaaFv%2BfelRrBEbPc4kQi9S8VHvFaOjfZXU5Zd5ZtAo6Sme3GQFJYaloGTwdkmQY5Xq9XcmXZzAtnKwL0b1T4zm%2FNF6CoOpbVTLurmYAVBEA&X-Amz-Signature=a570a15c3630a17e8f297d8f04a6b13f78c0f377f8c0354311e45f3ada021bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
