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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPD5BNIY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdI14ho3PLotOpZnNlR07JsZoIYLGIVhVDkxBAX4wjkQIgJNG7H4JF1hsaljO1wEY6J8pLbrHlnjy2GvgNIW21UToqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsEr5AOybjWelO6eSrcA33H4PBVy7b0i43YsXvFDTI46hwdunUYDaNr4E6F7Ar6j1i1yZszt9dLWQDUQzAJtYI5quYYtGPHCVspRE2E7FLpldS2gUsypZdHeiMKNFhMLv14FfXF8wg42WKA%2B2VrloepalDInOXF77vB18ZNrN39hn9L523qejBSv%2FJhTMDmpKsos%2FOc6MC3%2FUmvLWXSQBIf2ee8lNgHXBIeU60rTA2cu2Xgz6Nmr6K4MzwDuUnZWiafZeZkgLcULlMde70EKNJQ8%2B4WMdxbB%2Bduyrf3%2BlEagbwvWeH%2FJrVWc1Y62vXL3XhdGmfhWmZO3UsxThzqwiOmVezEZZit%2BiN5G2u%2B3VpmQzF0oiY2Sc0PC%2FQ3DIDq6cEsJLsGgc0Qrmnjyw3SFlUo%2BZ%2BJtALi5XUWg8cbkatWzl7ijPaNA0kcHvx8F1prBVLvJyfOrMKx9xFVLObmDd8OWztsyuAiMjPd6%2F8Uzi%2BYAz3UPi5ijRFgaiwDZkTcFk3s2zGziPQPx3ue%2FKV3BzJEqt%2BINlx5ocsmpekKveJGW3EcqREr02B58WYrHHgYm9gPubPeVS1M4rPo7nLp18s3RoZWTFc5ox6ufhuEdXhblh6iP9O8s3AkkHm70wOZKw%2B66AhtdrxOYCaNMML8jMAGOqUBtvuTtm1brMs5GjHfqzM6Efxr46ObhC2e653h9uivuLPuORWLs%2BWukf11H%2BGihijkn%2Fn%2BRTipo%2B%2Bki1ZtnyDswwDN81u2BFDsvcZ5EOZbn4I95OCmkkKPL%2BCYe9B8CeIt8GRH8t6sZ5rJCal7%2FemsS3P71%2F2dtJe9%2BPiWzy61GHC0Db%2BxMtSRIyzQHtfZiNajRMXgRvq3vyNmyKq8MrgcHrhJK6BJ&X-Amz-Signature=9c767f14c1909419749e013680720fd214d5bfc546369bf0cb3001d2bfe3be46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANTEW7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP50exWaIa7jFxKJiXDvP7On%2BH3Jc0uunSk1fkgEcskAiEA7JILEVt8Ii84g5zNm9koC3%2FCoEDIL3HBiLVGq%2B8dzuMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0gPj8n3%2BJSEnqvvSrcA92wbd%2B0MBOOUu9bba900XnEDMrx%2FDM8C0PK9uttQieoc7IHeDFthNB5HjYQlf4h8onlo5a0eWsdraCeBHBhrBVJTxem6J0yVV%2BRUdVzVJ7lBfJDhajnbODvwOp1grmWjCNAA6OOihOGpmqlkhFXEYm1HgWrkhgxKM%2Bfduq0D%2Bd2XoTL7PA2GGhDNLsbEXSbh2amCmHhV%2FyI7aQoEraIKwiD7ZaUuGLEliVOhvt5TqEKgElKrIUSsqbe38RFplXjCzqRW%2FSrrPkvo2f3noPuZ8O7bjQwWUZyqtIbSoqpx9XhE%2FjZ3KRYgUj5CMQ0dDZ1At%2FuM2ht3mFdQCODYGFNSzCe3ncV8HrzAXVQ1poiuoQaS25pXaIzFLyvZ2MkjzplcE8s7AN4KEjdMF6mwFmGZUvd%2BsUVwa%2Bq6j%2F%2FEHW%2FF4EQDtEOBDsifE3Wz1%2FRhd1kdTZKfH3hYaJ54ld8zrSPIk6rJ%2FLpO4sHZMlU8yLatY89h1iapfOhRzx8c9WCyDbhuuevwkjOqNwB7Vd7TabTmLcDeGZg12DcFcYODiCq1Snjwkt6HzosBxIoIwqYuowoywbKeKbJ2mcHg%2Bw%2B9PnjPMXErHtWFR3cpL9lpW9i%2BC%2BS5KgAatRl1btDKY2iMJv8jMAGOqUBqtfk6Ul55DHS27E2T4ekd6ZuQLfS0Jz9KL%2F%2B2%2Ff4DzIH5UrBOM8JHSZIB5vzUqBJU8cA3FnH6lwCQPezEmgUijdSGSP4ZCIr%2B14xzMeE9vUUO4OtO0MNO89lSxCFt9uCxN1XwnUBfE8mbm5o%2F%2Bg39cgC0hTcQqufbGqG6QmLdi0KLz%2FRhuGVv9o8iw7zAd8makAySyyjIQnGY2YwaKD6zjH7Ovw0&X-Amz-Signature=cd33c9d38777ee6cbb82d0a08cdad6be0589ff51c00413872efc5d5cfbbe71d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
