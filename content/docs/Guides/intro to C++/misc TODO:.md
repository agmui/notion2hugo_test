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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AGMG6SL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCoue0gcL7wFkFpyYTCNTqEJobsOeUs6ugJ1ahDdNDjdgIhALAdjb4r77opnAwjQNlDKdcSRpSMwZqO0zVDSopwemUCKv8DCCMQABoMNjM3NDIzMTgzODA1IgwBnVAS7hDHUQgLvSwq3AMRZqTjPP%2BkmGot31FGqcvKfPO5yKnP1bkqykjJrY%2BI6nlb3RZQWBdaDaQBUxGiU5TJzOE8FWdEtGb9%2BiHB%2BUobDh8vh%2Bh7deKo%2FCEZdag63P4aPBE%2FJ4JIrfiH8BH6IWfYJTFQoLeLR%2BmeEeCYPSCBekcZsqulRfUyIrLE%2FKR9bP5sz3JqD9EiQ56KqNY%2BgKhLS3g33asVSus%2FDvrqToX3g%2BCuO45SHqlaXpEEusHuI80wisOU%2BqtjfpDcTVTPCfC%2FAmVkcrxsulSotAxZ1PIze5mL9AwxyS162VTbWcWxZ4On7trzhL7MwDS28WmNet2sELkwoqOSeRvtTN23ekpsQMaD2fpovisKGbXoJvTCtlJuY89ZXHiiIrqeDVgIVe48jAQAHhbLTNZ%2FVERa0cbmK4S5%2Bmk0I6FpToZKzgWc0mXrD8ztlCbB4Sn2dd2j55pP5W9nJ0jhvpEwi9xboWopwbmP2jtK316J6sNpFMr%2FzUOYSrgUY4IX%2BSWkdTDoG2iMokR0VDA9lB1rqdCxdk7l23DHAWXQwcPNGUCc%2B3yIqB2meFB4H6Po71Mum3xrCnPKTz87c2g7CpuCb3vPWfgYDSYcumREVHQWOdK%2F5hoielqGiDO2W14jajxo3DCszNHDBjqkAR8Ogd1Uga80%2FRRmrkZ8FLpCUQsVsaXOx66T5wXv4cWYzAS4cR8ryK43boUsKsdNL9de8uJLdLmzfRB64f21hMeEwM5PP8oYO9uBdIOGaFqFT7dNd6dwLvZHHadXjOD3d1IGBX%2B53V1XFTZGLMJyA1tnf2%2BvwS%2FVcQIXzPzJjIpJDzyxdYueOd5XqcjTd98U84WVoE8UM91qJFTXDQDc7B83cGzy&X-Amz-Signature=5050b40fe403a771ad086bb53ffaea6e2ddd1fbed8f333ba9fa57b9ad8a9039c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AGMG6SL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCoue0gcL7wFkFpyYTCNTqEJobsOeUs6ugJ1ahDdNDjdgIhALAdjb4r77opnAwjQNlDKdcSRpSMwZqO0zVDSopwemUCKv8DCCMQABoMNjM3NDIzMTgzODA1IgwBnVAS7hDHUQgLvSwq3AMRZqTjPP%2BkmGot31FGqcvKfPO5yKnP1bkqykjJrY%2BI6nlb3RZQWBdaDaQBUxGiU5TJzOE8FWdEtGb9%2BiHB%2BUobDh8vh%2Bh7deKo%2FCEZdag63P4aPBE%2FJ4JIrfiH8BH6IWfYJTFQoLeLR%2BmeEeCYPSCBekcZsqulRfUyIrLE%2FKR9bP5sz3JqD9EiQ56KqNY%2BgKhLS3g33asVSus%2FDvrqToX3g%2BCuO45SHqlaXpEEusHuI80wisOU%2BqtjfpDcTVTPCfC%2FAmVkcrxsulSotAxZ1PIze5mL9AwxyS162VTbWcWxZ4On7trzhL7MwDS28WmNet2sELkwoqOSeRvtTN23ekpsQMaD2fpovisKGbXoJvTCtlJuY89ZXHiiIrqeDVgIVe48jAQAHhbLTNZ%2FVERa0cbmK4S5%2Bmk0I6FpToZKzgWc0mXrD8ztlCbB4Sn2dd2j55pP5W9nJ0jhvpEwi9xboWopwbmP2jtK316J6sNpFMr%2FzUOYSrgUY4IX%2BSWkdTDoG2iMokR0VDA9lB1rqdCxdk7l23DHAWXQwcPNGUCc%2B3yIqB2meFB4H6Po71Mum3xrCnPKTz87c2g7CpuCb3vPWfgYDSYcumREVHQWOdK%2F5hoielqGiDO2W14jajxo3DCszNHDBjqkAR8Ogd1Uga80%2FRRmrkZ8FLpCUQsVsaXOx66T5wXv4cWYzAS4cR8ryK43boUsKsdNL9de8uJLdLmzfRB64f21hMeEwM5PP8oYO9uBdIOGaFqFT7dNd6dwLvZHHadXjOD3d1IGBX%2B53V1XFTZGLMJyA1tnf2%2BvwS%2FVcQIXzPzJjIpJDzyxdYueOd5XqcjTd98U84WVoE8UM91qJFTXDQDc7B83cGzy&X-Amz-Signature=3c43609ddd108e0622488e879cd0a1ce9bded5352a070e8ba70fd812a7c76f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
