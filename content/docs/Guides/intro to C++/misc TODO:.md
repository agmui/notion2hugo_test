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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4SV77Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDMi5eh77BR2HsPRVOG77bdn1Q1nTdc4ncbOefM4UlgZgIgGaF1L01o9YHVG1ejl6AO7iBf%2FvzIvCUTnwd9ydSKAY8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHaK98MER8RfdM8EircA7u%2Bx3KOTYz1wvHUe3mHVu12xJTnzsWl7BdHnUMfb4bgEd7DeN4By2Jf5O3TYEDELpZeRPTCmfPVtS2Tsa4p0cF4r66%2BI1kPlsGLT0OrMqtVFan3yjchGi1jZ7%2FZRecNBrheuRozvnUKPiJ397%2BJSrxFE0gfu5n9Iif%2Fy%2FiHPgGzubEBMqdEPeVGH8h%2FSnvvV3IW0B7hdtOOYW%2FAiI4xyN%2FXKHukFXeDJJQIhWxVXP30boLaH2nZR5L7s5GZg%2FYdXvU3t8NHBa%2Bk1tAj2FYMZv6KMuXv6lBxzZHdF%2Fr2w8FY1OfYqE0dSmKGtzQmUXSmLCjuOAZB1wVJx%2Blr6TtHULV%2BWcjO9qVWY4pT6uQ%2B9OBYPkLR8tG6ppzdcCXJ99dQv%2FvZMQQihDKHD7BMN71FesPaiLd8kKmzLCcxmr0EEhh87n1a0E3QpZzsPS7J3uSPY14nG120ESdlRjuU92Bn34i9vKrAj4DPU3fZ0r54t2iIK%2B08xQcGkWTb8tNaw%2FIWKYt8qAjuClt01w5nCoXWA9%2BUg7%2BW3%2FO7Cdrw3yYjUaLUEdNLdmu0N%2B8SB11d42m8JQrqQEFkPb8H%2Bo%2B32%2BqILO%2BILtdQKVKjPgxOJ3qro16j7ewMb2uU6bH5GIGVMN2Xo8QGOqUB8zZk75ibb8PHVBKLSnX46D9kkYNggj1kiKhetfWktKQBoeeZ%2FvOy6BqvEOM7ScwfZkOUNhRL0mNnYvLHuPWwyDOETtBE2oEkjJfw3%2FptQ2kp39jn%2FbAn2X%2B%2FUq7ABTxL0RpfuPvbcY%2FHuUVmpS992gcerx611%2F%2Bk6EBfpHb%2Fa5carkvYH45ztS8HCuL7%2BN%2BDvEEkjaN7yu2rNmg2BRe%2FwC7Mldme&X-Amz-Signature=65f4f6adb3cc30dba25e699270a887dd301658aac4cb9f987259e90f7aa1e32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4SV77Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDMi5eh77BR2HsPRVOG77bdn1Q1nTdc4ncbOefM4UlgZgIgGaF1L01o9YHVG1ejl6AO7iBf%2FvzIvCUTnwd9ydSKAY8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHaK98MER8RfdM8EircA7u%2Bx3KOTYz1wvHUe3mHVu12xJTnzsWl7BdHnUMfb4bgEd7DeN4By2Jf5O3TYEDELpZeRPTCmfPVtS2Tsa4p0cF4r66%2BI1kPlsGLT0OrMqtVFan3yjchGi1jZ7%2FZRecNBrheuRozvnUKPiJ397%2BJSrxFE0gfu5n9Iif%2Fy%2FiHPgGzubEBMqdEPeVGH8h%2FSnvvV3IW0B7hdtOOYW%2FAiI4xyN%2FXKHukFXeDJJQIhWxVXP30boLaH2nZR5L7s5GZg%2FYdXvU3t8NHBa%2Bk1tAj2FYMZv6KMuXv6lBxzZHdF%2Fr2w8FY1OfYqE0dSmKGtzQmUXSmLCjuOAZB1wVJx%2Blr6TtHULV%2BWcjO9qVWY4pT6uQ%2B9OBYPkLR8tG6ppzdcCXJ99dQv%2FvZMQQihDKHD7BMN71FesPaiLd8kKmzLCcxmr0EEhh87n1a0E3QpZzsPS7J3uSPY14nG120ESdlRjuU92Bn34i9vKrAj4DPU3fZ0r54t2iIK%2B08xQcGkWTb8tNaw%2FIWKYt8qAjuClt01w5nCoXWA9%2BUg7%2BW3%2FO7Cdrw3yYjUaLUEdNLdmu0N%2B8SB11d42m8JQrqQEFkPb8H%2Bo%2B32%2BqILO%2BILtdQKVKjPgxOJ3qro16j7ewMb2uU6bH5GIGVMN2Xo8QGOqUB8zZk75ibb8PHVBKLSnX46D9kkYNggj1kiKhetfWktKQBoeeZ%2FvOy6BqvEOM7ScwfZkOUNhRL0mNnYvLHuPWwyDOETtBE2oEkjJfw3%2FptQ2kp39jn%2FbAn2X%2B%2FUq7ABTxL0RpfuPvbcY%2FHuUVmpS992gcerx611%2F%2Bk6EBfpHb%2Fa5carkvYH45ztS8HCuL7%2BN%2BDvEEkjaN7yu2rNmg2BRe%2FwC7Mldme&X-Amz-Signature=613a87a7e90cd208968ef2e49566f5c0e24e35ceb6930ee98c7a5d12677dec04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
