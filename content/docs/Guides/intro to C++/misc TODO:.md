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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVYTYGQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgHCQPwzsQDJ8893vaXSvlJgu%2B0jrbqSklrDtN%2F2LfVAiAj4gDG%2BuU9FwXwXQG6itR9AfI7cGxrPn5klDHtpuKmUiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxPBEg70MyebblZYIKtwDGhJDQ3gTb8T%2FrDgZ0Y6qH7BWw372hlcmr758Yb1i6J9TMS0MwUN9j%2BS6U1f3I7T1O8BVvdvB62sZWERnAhkysEOk%2Fs3O9z%2FiTBAAATVVVRcQkMVs356vccL4373v4SvX8KMAQO5UNJgEFH7wRIFy4UyoOTDAUmpgQSn2QdOWFJDKr8pdL9%2FVFFlHEG%2FpYLJCTgeHSxcyKPhL%2Bld9F1%2BKx%2FSyXMDPYwpTMW0pqEZrjtnfHwdcuqYmSCv3lkeLcdFkaKIDnB%2BzLhZhvStA2kF%2FPSotWY%2Bb36MSuD5lk0O%2F48RTlxmaghVBf5yaDkAAW6cHw2wWwzGeD3NYSxEcWcRnRUuvwlW%2BTGiL70lhLTsnYEo8W7EdI%2FpuFHbdVPlTN9%2BdyGiyXkfIYdcfaMEDnAjaX1sQYYT0X5BhIhu%2B1wc1frUkqOfgZxASJ3Bxhx5SR8WMcyK2ekQmJ2tIGCvgsnDfVCbl72o8nsBLRz5f7hHMxN61Eem9W6iMGF5RGd%2FQtI%2FANNYnLry2k55laOaLF6%2FHryoGBZ0PPXF3IoEb6FqvuuShNDJABlD%2FYH79RKHAlphiBw0C9sdpgD9LGoue%2F8y3PSWgJwzU9FOqcwX0PAl7nqfOok6aXGjxnDkc%2BDowm5KCwwY6pgGHZ4KkI4azocqAY1qaVHUY1%2BUq%2FsdSsHpyQfxiFWeH9MP9o75byjb9O6tFOBZpbU%2Blk81SWGVZYwl6rIdZ30v0SoJiVIWrf93ce%2BMMER7MB8CYna8fHOZ%2BjHZO2QweBSVmZi8dBI02onUMdZDzP7HibSNDOoPSYM%2BVMlv0%2FFzftxs1Uv1mNM8YB3oUoeNpL50eju539RKjMl%2Bbl2DC2MXk0Q4mcgVE&X-Amz-Signature=612df3119187c424cc38b53a3016b322b02e81e2aa21e60d81c0ae6bdcbcd878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVYTYGQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgHCQPwzsQDJ8893vaXSvlJgu%2B0jrbqSklrDtN%2F2LfVAiAj4gDG%2BuU9FwXwXQG6itR9AfI7cGxrPn5klDHtpuKmUiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxPBEg70MyebblZYIKtwDGhJDQ3gTb8T%2FrDgZ0Y6qH7BWw372hlcmr758Yb1i6J9TMS0MwUN9j%2BS6U1f3I7T1O8BVvdvB62sZWERnAhkysEOk%2Fs3O9z%2FiTBAAATVVVRcQkMVs356vccL4373v4SvX8KMAQO5UNJgEFH7wRIFy4UyoOTDAUmpgQSn2QdOWFJDKr8pdL9%2FVFFlHEG%2FpYLJCTgeHSxcyKPhL%2Bld9F1%2BKx%2FSyXMDPYwpTMW0pqEZrjtnfHwdcuqYmSCv3lkeLcdFkaKIDnB%2BzLhZhvStA2kF%2FPSotWY%2Bb36MSuD5lk0O%2F48RTlxmaghVBf5yaDkAAW6cHw2wWwzGeD3NYSxEcWcRnRUuvwlW%2BTGiL70lhLTsnYEo8W7EdI%2FpuFHbdVPlTN9%2BdyGiyXkfIYdcfaMEDnAjaX1sQYYT0X5BhIhu%2B1wc1frUkqOfgZxASJ3Bxhx5SR8WMcyK2ekQmJ2tIGCvgsnDfVCbl72o8nsBLRz5f7hHMxN61Eem9W6iMGF5RGd%2FQtI%2FANNYnLry2k55laOaLF6%2FHryoGBZ0PPXF3IoEb6FqvuuShNDJABlD%2FYH79RKHAlphiBw0C9sdpgD9LGoue%2F8y3PSWgJwzU9FOqcwX0PAl7nqfOok6aXGjxnDkc%2BDowm5KCwwY6pgGHZ4KkI4azocqAY1qaVHUY1%2BUq%2FsdSsHpyQfxiFWeH9MP9o75byjb9O6tFOBZpbU%2Blk81SWGVZYwl6rIdZ30v0SoJiVIWrf93ce%2BMMER7MB8CYna8fHOZ%2BjHZO2QweBSVmZi8dBI02onUMdZDzP7HibSNDOoPSYM%2BVMlv0%2FFzftxs1Uv1mNM8YB3oUoeNpL50eju539RKjMl%2Bbl2DC2MXk0Q4mcgVE&X-Amz-Signature=1ddd6e47bbf21327a1436d686b9420aeaa5eb12cf7b4c494d76bdb0cd771a294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
