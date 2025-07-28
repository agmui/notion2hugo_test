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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFR3PKV6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAL%2FNeAfShnE8lF7C08uqV8gV4bavly7Tz0e4o2s1bOJAiA3xOQ%2FyZLn%2BI0jIzvRfdIujPyD0HjrLiSbURKmSsDgliqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGS%2B5iEClsGAygFQ1KtwDXPy4p0NWxYmnU9pxXGQiuwbvjOeO8ygoYUBZQcIMfYJGBKN%2F3oBEMkapTFSah0%2FRmZ5UVE6uPgP8hhEePsexTxQTZT5yj%2FcZS7HMqeyWgwUHqLRl9Wr5r0gEIE6Gdfc2AcRdBKFqkifeegcgV5Q0U5ZlKZKZ8B4yQQ48eCa6quwLc3VaIfscJXopeJFWNRQmqrq3eaVYsh6C3PhOINHJFZdCbmLCkAkILyC0cppXwZ9kYJkL8KQffbNCIlVFPf12rIDZvbhiOzGGskycyQR9CKWMTKyxDL9yIPffpXxZJ0jzC%2BoNUSw82K4WFTV1soj3cGZ%2BUBuxjlXFqB4n8bzvnnMrb0%2B9Nsndrk%2FK2F8kev4NuynrXm1CQWk1r9h8HYLC%2F%2Fl10FLpVMMccVIc2cCV9%2FpsybBgyzm74DGTginR3SUIcRdUsGqnYdA0LzJgrdcyJ%2F3rT3K6n0qhKKSTm1Aik21TO1YOEcYt9qxUNsY%2FWWDJiXo8ZcvNSUoXXqmLITlAe%2BxY9KWBpLbEtsUEKqSzKdiESZMEdJf0DJLJMAJ80hkKQDYBMglZ%2F2pQDR8nIedolx0nwK2PQFLmiNrYXzFT%2F8DWJABgu3wQOfRbML4qd%2BPdCW01ZrbkX2t6lK0w4NGexAY6pgHss7v2dpBKO0LFsmCcwfbPXvuNho7JwvwIjYmtkDGWq178qI9QtXMLdcHu%2F5xGVFthvrE9W0%2BEh%2Fs6x2fKvmbbP%2Fproyq5p73i68Jp2ShqTYbL5r%2BF8Yh1bWa51mE6DbdGUsMBZbN2zNWWVMb2p62MAlMYz%2Fi2XCfEkAFmHf%2BHEXhqa%2FAYb3FYVS9aRBROMp6PjEvRXBuruY8aCO1uT7vqDVm2dwh%2F&X-Amz-Signature=bc0f0d602d3d8f3e64c7c7ba8528faf875391f6f24624f934eaff25d367da596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBSIP3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXH7SM9eW0nIOs2H8W%2FvaJyN8Zat25wPp4SccTiKNU9AIhAOSbA6LJD2LDF81BieRd2MP0DIAX3HdVcFogetGPewZCKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwjBP2w5ZNhCVVX54q3AM35Bw%2FC3mHFLbSzBxwt9ZZ%2BllGE6pUQEh%2Bh5uKCrKIHCGv3xG%2F7%2FJkL0OvoYhNx0Qup2WVIwlGcKBYh1X%2FQmD%2BzqZY%2Bv6bp7NOQiGjW%2BfsgB7fyj4NLVVBBMFx2aLecEvJqAZUO9lBV%2FBhePsv%2BISyzxgb5iSPrJE35CrFubYpkq7ZVNbgfVJvRyYx3lS32N7jwBPamdfYLMHYyBJhXzFShWDDRs5Q9d3uXavfQriM6gnWAh7pYZIadb3giEpkPIT9nPECwJM9v7uv7LUUDWUBmzj2XQVQR6vbk8%2FCEecgLeWc%2B9q8hMwXprlIP%2BB0BLOTQW9UV%2Fs1ztUvsWwQBFtS5osPvKJBY5nfhE2NbUPCaVc6hDN%2BfGLE58TFHT%2BbZfd6ZcoUW9tN56nNTL7G%2F705Gtf0l7dy36pOKAMCkTrQrDzue8VbcnVdf2F1nLovsiPJ5LdCtFch%2BuZvKD7L8WleN3MKfRmyPNr1BPlaq3nCPzD5H1OM8k2tWtVsI1QufePYrMEAVGt4%2Fh38lUV8kLMMT8hG8faNZ4CEu63bui3kIPsh%2B43bC%2BPW7iO6BK1ZlhWT89bpDj5IxBtKIU0r1fxnMz%2FbTSAdwAbsoM788Ow7MkE%2FWc5aXYmRAwxb9TDq0Z7EBjqkAY8VxPpMbDhEZblch6xvxApGOh%2FgS1nDPh7lk5qxwe%2BtA%2FkHPMUBcL1r%2FM2NTcA1Lmj8npNqwwXdoikWWmnQbvRhcpzVGby21dViSmtDXtwYZ6fw5HH37%2FzjNcS2eJ5SVYPLQ3Oyo2LiQfNmTEntUx5tWSPQsiS7pjM9qgIQvSolOTIJQvJVGEmlc%2BJ%2F7Cvh8BpDKOHDLjURvsvLsGQgA4J0cX4Q&X-Amz-Signature=3b86d1a3d89ce4b1881d0bc98be5d029acd5979b5f23d9360f25c70d44c132e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
