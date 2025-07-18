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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTZ3CMO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICLsPM6C7YMWWASS2DU1ifHg1BN9sKGkkYQ5db2pxrxkAiEAkmbmPm7F4U%2Fi0gFOQLS2tx6kzfzv7QX9beGZZmU3D94qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKk9UQF5KrM7AibcyrcA8uwMHI1rCKaFdgsl53Si%2FrChATsde%2FFj2i4ll5IpNK2kk4WxeIk5Gu05edNX3q5Hzz4mNJvvwfZgTDywWtoa0Ow9FFCMQGBs2YrF64TkqBVPoahJV7mmvaS0HZveGlIZI9KVzBsQk%2BdFdYIRkQG%2BrP1glZFi4T9w1CFx9417CMFsHgFtTO4txCO8mkuzbPYdjjygf%2B2MklqgnnsdhIKx6wdgD5PI2wJjWK2qodSVEmRPzNDZIos13pbIUo9c9DNiGFwqMIDimxZzD5kFzSIHmoz29EsLBNbJoc24gIDnbYGknTvE%2BgaHX1U5nQHnq7N4dLsUCXmpOVPOEz0lqvlRaHHNzGP%2Bg0ZwdCd5LIvFrjzfJ8VileM3gsiZ%2B5PLVKRsRE1r2PxH3WPUOS3BYjDeMe4TOMoOryedf2M9G5Scafb%2Bd%2BIvL8%2BZTo6ceHuXeWD2IcN3%2FEUWzZC9rHszK21KgZwx2lqBGm6pEBr%2FaflemnWIk3TkBKyQBxq2kk1s9rlUq9p9QDdShxkbXZQ7VR7lCq880TPdkCI3v57yabfS8GsU%2FWQjdHSRW%2Br7i6YmBuWhQv3yDWF5SyIO1COgGn5U1am7YBqQUBf4CKJaRY0pSLIJ5SPaqCt1BSAzq88MNCj6MMGOqUB6LFG1OtDwyQwOtYUTevG7KkSAqaYAqmILdfHvNCIXOYM2bVzlJ85tjy93cJpHqoNQGpHfhA2RmFlRn1I96UzS2k8n%2B3CUGCGbGuyhBPeO1I7XuIVtIAxNRPsQfwwjNmPnqVrsGWsFqXM8xHVDebqQ3BQsC1iuGnqTrgGZsEf%2F7spjUcESPsKh9UF8KKrtJ3Lo1dAVtoEdx6lkiHseelwwsJ94MTH&X-Amz-Signature=06d984bc873213ece1b25ee19c8566149c946c79b904124a24237ec07ee2f0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTZ3CMO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICLsPM6C7YMWWASS2DU1ifHg1BN9sKGkkYQ5db2pxrxkAiEAkmbmPm7F4U%2Fi0gFOQLS2tx6kzfzv7QX9beGZZmU3D94qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKk9UQF5KrM7AibcyrcA8uwMHI1rCKaFdgsl53Si%2FrChATsde%2FFj2i4ll5IpNK2kk4WxeIk5Gu05edNX3q5Hzz4mNJvvwfZgTDywWtoa0Ow9FFCMQGBs2YrF64TkqBVPoahJV7mmvaS0HZveGlIZI9KVzBsQk%2BdFdYIRkQG%2BrP1glZFi4T9w1CFx9417CMFsHgFtTO4txCO8mkuzbPYdjjygf%2B2MklqgnnsdhIKx6wdgD5PI2wJjWK2qodSVEmRPzNDZIos13pbIUo9c9DNiGFwqMIDimxZzD5kFzSIHmoz29EsLBNbJoc24gIDnbYGknTvE%2BgaHX1U5nQHnq7N4dLsUCXmpOVPOEz0lqvlRaHHNzGP%2Bg0ZwdCd5LIvFrjzfJ8VileM3gsiZ%2B5PLVKRsRE1r2PxH3WPUOS3BYjDeMe4TOMoOryedf2M9G5Scafb%2Bd%2BIvL8%2BZTo6ceHuXeWD2IcN3%2FEUWzZC9rHszK21KgZwx2lqBGm6pEBr%2FaflemnWIk3TkBKyQBxq2kk1s9rlUq9p9QDdShxkbXZQ7VR7lCq880TPdkCI3v57yabfS8GsU%2FWQjdHSRW%2Br7i6YmBuWhQv3yDWF5SyIO1COgGn5U1am7YBqQUBf4CKJaRY0pSLIJ5SPaqCt1BSAzq88MNCj6MMGOqUB6LFG1OtDwyQwOtYUTevG7KkSAqaYAqmILdfHvNCIXOYM2bVzlJ85tjy93cJpHqoNQGpHfhA2RmFlRn1I96UzS2k8n%2B3CUGCGbGuyhBPeO1I7XuIVtIAxNRPsQfwwjNmPnqVrsGWsFqXM8xHVDebqQ3BQsC1iuGnqTrgGZsEf%2F7spjUcESPsKh9UF8KKrtJ3Lo1dAVtoEdx6lkiHseelwwsJ94MTH&X-Amz-Signature=6e18080c6a81b020e4917723b58689dd29422eb68520a7cd4a8bb7315babe361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
