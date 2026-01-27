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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SNNMPDA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqKXA7zhxTmSFyz9%2FS8PKzfhDZcCzhkK3SRJaBfClxAIgWsI02Byu1BpHw%2BswbB2c7CwvjCbnG19NPNY%2B6DxrPtEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV1v1i4%2BivcspVo%2BCrcA1pEnJneoIU9etL8GFj%2BahPQMOkoCUEA7y9chyLpyXrkZd%2BghSb%2BYjGLNUUnBNplENt1MUZvM8iMqTWoljNgbxP5FterreQ7h2b9fVkZHed20jCL7NpLKZjX8HapMtezBHJsFwiWfJeOt4IZ8P0ECX0sGMPRByqTNLBf2dXMwQLzjmRedSIH7RwWg5ZiGBWu12HlNiuKDxn9PPFwzk7MHbyv5wL7x946pao5CvrF%2BqAvCH9d0zdXuJYGhUXnD9Av9ZD5I5P9FOhKJXhSDC2bNXrR8waSmV0myFpLCKBNA4bGBSw2uccisjfMgkX8PfbB%2BkLtbfw5b6t5%2B5XqZk9bsRTJ%2FBplMXkUCJgEfbYv7ysZoyrLdfY9yymY1Zlf8oAa9WMf5ggkz095WTyV64Eaf1gzOs3UuuHGqV2k5mwcPSE0%2F6fpwWViDbcBUT0jOozCKJm3upa4yzRGJkGhXCKbw%2FJg6%2B704v6o3ptmxZrqzr%2BPrBsj95B8Mmf8%2FH8tchXSkaZZcfHFZPWbJB63o%2BNW2UO48jsqzqZi8IPkUzYThhC86T20yhQKagk7Yce47QZyRBaU2Kgbi15q04t6psSr0fuaQgL%2FcDtiWq0RDctO0rBX%2BIPeB4BLRTco9FkLMOCy4MsGOqUBwxuj580%2BzVhWVuUujWc2c9pSfQBStLLK9GKpvs1v70HX4aFrKKEMNPEEQQiBBaeaF5bpTIO7h3vRl4hef%2FcD0rlGHA3gE4012DOKmDBFvV6VjY1CjJf7K%2Fj8J4chR0llJdqe0VjGO2dsARTFZNWPJQdF2kSC%2FBAvVHir0ZuUm6jXGmJAgKhWRuRwT%2FHJVsVMBSxl4YDUpqqBJLZTOw1eRFbMKR1A&X-Amz-Signature=6397a2f6d5fc944ee83faf4f139ae98a0b8cd8bbbab2e49622d8b9e0395c7547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SNNMPDA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqKXA7zhxTmSFyz9%2FS8PKzfhDZcCzhkK3SRJaBfClxAIgWsI02Byu1BpHw%2BswbB2c7CwvjCbnG19NPNY%2B6DxrPtEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV1v1i4%2BivcspVo%2BCrcA1pEnJneoIU9etL8GFj%2BahPQMOkoCUEA7y9chyLpyXrkZd%2BghSb%2BYjGLNUUnBNplENt1MUZvM8iMqTWoljNgbxP5FterreQ7h2b9fVkZHed20jCL7NpLKZjX8HapMtezBHJsFwiWfJeOt4IZ8P0ECX0sGMPRByqTNLBf2dXMwQLzjmRedSIH7RwWg5ZiGBWu12HlNiuKDxn9PPFwzk7MHbyv5wL7x946pao5CvrF%2BqAvCH9d0zdXuJYGhUXnD9Av9ZD5I5P9FOhKJXhSDC2bNXrR8waSmV0myFpLCKBNA4bGBSw2uccisjfMgkX8PfbB%2BkLtbfw5b6t5%2B5XqZk9bsRTJ%2FBplMXkUCJgEfbYv7ysZoyrLdfY9yymY1Zlf8oAa9WMf5ggkz095WTyV64Eaf1gzOs3UuuHGqV2k5mwcPSE0%2F6fpwWViDbcBUT0jOozCKJm3upa4yzRGJkGhXCKbw%2FJg6%2B704v6o3ptmxZrqzr%2BPrBsj95B8Mmf8%2FH8tchXSkaZZcfHFZPWbJB63o%2BNW2UO48jsqzqZi8IPkUzYThhC86T20yhQKagk7Yce47QZyRBaU2Kgbi15q04t6psSr0fuaQgL%2FcDtiWq0RDctO0rBX%2BIPeB4BLRTco9FkLMOCy4MsGOqUBwxuj580%2BzVhWVuUujWc2c9pSfQBStLLK9GKpvs1v70HX4aFrKKEMNPEEQQiBBaeaF5bpTIO7h3vRl4hef%2FcD0rlGHA3gE4012DOKmDBFvV6VjY1CjJf7K%2Fj8J4chR0llJdqe0VjGO2dsARTFZNWPJQdF2kSC%2FBAvVHir0ZuUm6jXGmJAgKhWRuRwT%2FHJVsVMBSxl4YDUpqqBJLZTOw1eRFbMKR1A&X-Amz-Signature=92f40ddbd0ca3e102f1045bdab7c3e7371df4567bd9258028ed1b5f987fdd30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
