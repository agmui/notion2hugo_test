---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU3OWDB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDluTYw2fdz5fEi%2F5vHL30PWW0R6wdQ3nptnpgQ%2BbnK7QIgAs3SHLLQTDnFppNaYYtLa6QVAuQ53Kh1uaYdkRY3%2F2sq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNXjNQJl%2Fd1SufL6NircA88DTGdSZyOvP68cg%2B8AXtXe%2FgZqWbZfra2SGrhEbc07PeV8NQvCUirzV84GWAyW62anF2R6Fvrg4I7vuofrEqKVnOtw%2BZFkuF7JHm1PkV8FDi89Du3ODvGjkaIaisF%2FYRYfHH503HlrgGOBOz6nLSs7sUejFVIbuqVdYLJzxZ19E7oKOfn4teMRv3NuTIOdR%2BA62zBsGFU%2B8wh3hEWXHcfxZ9lBeexv092giLnwzmPAyM%2F62JlNi9HCyhqdEvM%2B%2F6vuL48RGGfu1zwOwlX9btDpH6CFZEGEuw4QdF9MS1SDk0x%2BjAlyPqdF3TqeN4XaotKK4hPBBCkDJ955prVjGOs8dLGOgk4BEz7F6Bbvb4Q4V6ralhhbzpBygFXF%2FocV%2B8fzz%2B7fgOOIWi97X0w4MyLpKK6Zs2SQDZlvBFChuphJU3sL2dponJhdT%2FaJp4tn1cDR1K2B0mdrIhVaKqecMQQb%2BErVLqWQ8DAsh3EjzzN38vP7T%2BbXm%2BfijZyJ8V5uJ3Ic6hHZ0C0nTWIyiNkaisjLFNsJKDbx0b2vu2sVPf9SovijHQiAiXHjjJxkxjwhO1DXGFeLW30A8oaaGHnhkKBibPcDwDep7z%2FE5ZdFHIyHetGSxTRSUBy%2BC4jFMPDRvr0GOqUBG0BK0TOerwylH%2BGDHHbSXxvSTnB6aClmmUEyK4hHIDKfg1rAzSBi8JrYe4ASFgGmjj8TQEj69dhhOHsUIG11%2B28Ht7HrtVFnMuRLF7m2lszaERjPehe2KLAcmAfdNiTRyUZsA4L7j0MGUXZobFdbQQDn2bQk8YdXmd69ue9%2B7kti3RZlTAiUAZS3IU8114NqaTh8o%2FzXFgSfqBa3QyV4LyA%2FZC%2Bi&X-Amz-Signature=32beccef892e2448794279fa2aa0105f4d92d33c2e41ba71085bfa5d3c425e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBJEIF7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpCIOTtUCrBvhKNTQMbGO%2FYapgXfTzB8IWa6LH2ZavDgIgMhCnZXiQglI1FeSMq0GD1e027DhO2AXch%2BZR%2F9JuOh0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN2pchEMhzxJ34hxBSrcA43b6F%2F454mLVzNgHtnEu8BAMml2pzk0XnhkouJXW6DzqBW4Haf%2FDNvEGs%2BIcKPDDOIcqaKJs%2BEVG5rf2zNphgsOIWbUKtICcmHPIQFEtx1sRrRveofbbVpPD8%2B4%2Bj4X1nckbeFSKlu3ww%2BUPvVA8E3dWcL2Vd521a5D%2BUZyo73OtMht9%2BAZLAs%2BYP75zm2m9w8SxXb7oaZ31BgistSBh47HFSJEabFxz45yOFDa5q2bfYcYMacGwD7lgozRse4tjvLqWHqOwGzWng9gtF7tjxd82JztTPmYkc%2BMhWiNP2U2wYqDKmu9NhQJXsTu9%2F5%2B1wAm2IbHbQAALTeKc0yhJjjI3H3F5Pf%2F%2Fe1R3UDA%2Bk4Gc%2FAOYslgR%2BBPwjvrpjDwgGX079lh5dfmUJAROWY9jw9Is%2Br%2BHKK6JHQeDNMXtxpf0lCFvyaC0L2WkfpN5qJxI8Yn5SFuikOVvqWD6ube0edRxg7LobyYZFsB3m99MPEPADlvG%2BplyjkVHNFuetFtcsI4Cud7PQw4gw8eZAOcDJkgQ4R1GPTJm0gjVxqHdKHW2Dktds5hICkeShhQMHxsP7nARg7TYPVG4sMWvpUcqpetg9OGrniRjE%2FA0g2J6MpiqbGPgtxKrWGbZmCHMITSvr0GOqUBsjHvm35%2F44w%2FbDF%2BB%2B8Z7cntb4QAIeCCn0m3hHnw7EByog%2Bq2K3427K7xeXsnZ4jXBfUtJSbCS9%2FEW3E6Ocf6iMYtXQ94ouzektpragjlzC%2FLZfRV7sQCwybIB7y9kqQ0xXx5O4awPd7jRbgeG9fTtij8WXUtb2zJ6j%2Bue5q3ob8mLyBSXCzunsy1DKu64e%2BeeRVmtJC%2BHFBuER2mq4muyVA48eh&X-Amz-Signature=43e733932d22ecacc3a9ea8334c9bc59f117edd17c3b45cb72a587ebd7eaae65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
