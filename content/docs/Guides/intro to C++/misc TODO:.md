---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7GMLBL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKEyspmvkodj24vgFtmq20T%2Bft%2Fn39qrPLXWkJwRyFJAiEAirv1fC5sBKTkuqfJkDu468azRSSFlGMWQNdzKpMC17Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2BAM7tzsbcdxAXMFCrcA7urTSBjTCpudSNw3V2tIV%2BmtiqXUC3EYoOUs0Ng0J4an1TKIYDi91EQ6MXpXmjnjMcr2Vl056seHF17hor%2FAkN3nB5f6iZdMNfewYADVFiSI5rwtE4eswsFVDgyGgvWjFRoaow3nTvy4KQ4sIU6SEZ6KUQFBu7hHS50ZZ8ikuj9IU4Rxb0tsYtpd44c%2BFiVtmgDSbYvveWqU%2F05UGMgYr3Ot5gGgf4gJJHVyXkw64LBDkpAnn3YVLGp6L9YfSVuJ4t1ht3XHwXpZPkjb8OxoevURhkKQe5rzXgrp43%2BTWztQePs3JrUEk62ckKCwun%2BhmI9FHZlLOQfqYwi10TNCVbh%2Fa0GTtOxK%2FkbsHDTyAO%2Fm48ipqfiexIEanI8IXwqSxn3dulSzaaYRiptd0t6xK3ivjhSOgV2L31Rc39FeDhtTh8dk%2BGYW1nk%2BigxXVrxP52OafeilbcGolvJZ56iX55swF1JkEAvpTkoEgr9ZAyIgF1ybExxDETaRoBnONpahnTWvSFEeeO7DEPCgoXVaTw3Dx8xpdB2spARO5BCwjFT0I7s7S5ui6xgp4FVJQ8nTKtjn%2Bl0AhRffzTlliNgzI7zymsiKwQn6k%2Fg7CPDQI7wo87%2BQdpQHGNRlM2aMLuAyL8GOqUBm6kd%2FqWbRYIJm5WG2%2B7a7svILb7zBK6cYqIF5Tx7LCmyHZlSBVsqKzuB62NSWIMiaBt8P4hV%2FiqNHok7O3M1%2B8SXyh7eJykOI6IsMkh2IZG590XRU%2FpJQ7W2i%2BhHl9vGyyz6vBTzVsxnjoXTyqIwUtbhUVYPMGb5cWElgSm4KUQTd9HXveAMDb%2FobOz0Vz5huTwTyAMUcN0NhQqF4uCePhBYiCOJ&X-Amz-Signature=23372a9d84b807a1fb14ff0560ec16e60c47b47644f305eba30684fcaf50f826&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7GMLBL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKEyspmvkodj24vgFtmq20T%2Bft%2Fn39qrPLXWkJwRyFJAiEAirv1fC5sBKTkuqfJkDu468azRSSFlGMWQNdzKpMC17Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2BAM7tzsbcdxAXMFCrcA7urTSBjTCpudSNw3V2tIV%2BmtiqXUC3EYoOUs0Ng0J4an1TKIYDi91EQ6MXpXmjnjMcr2Vl056seHF17hor%2FAkN3nB5f6iZdMNfewYADVFiSI5rwtE4eswsFVDgyGgvWjFRoaow3nTvy4KQ4sIU6SEZ6KUQFBu7hHS50ZZ8ikuj9IU4Rxb0tsYtpd44c%2BFiVtmgDSbYvveWqU%2F05UGMgYr3Ot5gGgf4gJJHVyXkw64LBDkpAnn3YVLGp6L9YfSVuJ4t1ht3XHwXpZPkjb8OxoevURhkKQe5rzXgrp43%2BTWztQePs3JrUEk62ckKCwun%2BhmI9FHZlLOQfqYwi10TNCVbh%2Fa0GTtOxK%2FkbsHDTyAO%2Fm48ipqfiexIEanI8IXwqSxn3dulSzaaYRiptd0t6xK3ivjhSOgV2L31Rc39FeDhtTh8dk%2BGYW1nk%2BigxXVrxP52OafeilbcGolvJZ56iX55swF1JkEAvpTkoEgr9ZAyIgF1ybExxDETaRoBnONpahnTWvSFEeeO7DEPCgoXVaTw3Dx8xpdB2spARO5BCwjFT0I7s7S5ui6xgp4FVJQ8nTKtjn%2Bl0AhRffzTlliNgzI7zymsiKwQn6k%2Fg7CPDQI7wo87%2BQdpQHGNRlM2aMLuAyL8GOqUBm6kd%2FqWbRYIJm5WG2%2B7a7svILb7zBK6cYqIF5Tx7LCmyHZlSBVsqKzuB62NSWIMiaBt8P4hV%2FiqNHok7O3M1%2B8SXyh7eJykOI6IsMkh2IZG590XRU%2FpJQ7W2i%2BhHl9vGyyz6vBTzVsxnjoXTyqIwUtbhUVYPMGb5cWElgSm4KUQTd9HXveAMDb%2FobOz0Vz5huTwTyAMUcN0NhQqF4uCePhBYiCOJ&X-Amz-Signature=9ff309564d9819d3505ca8b5fadbc0cec8486faa9cd21b31ede310b96808f429&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
