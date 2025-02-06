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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GJAA3H%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDIUjyoe86kEOXXx2mo10eaKIcagvqbTJuTAGGkTy0oagIhALmDLt%2B3sFiyjWE6EbgdPcT%2FF8CYezg021Cn5X50PkwlKv8DCFEQABoMNjM3NDIzMTgzODA1IgwgEF9QHpGp2h2RMPEq3AOywxTgRj2yvm19%2B5pWNpX1qG0YKAL1zyhROjifCgBlZ%2BA4KjeYJmlfr8r0ym9T1fa1Rtim0XWJbe%2B7sF9pBhiTnPRQIMZHNgfFIpQmN80JJO1rTtyPln1jWZskMJuwiW5veqG%2FGBaJxSz3p01YWIUrmeur6nG94IG4GqlBQmjgs%2BR1rt8ZovHCYzcixUbMZwrR8Q33vuPm8bGT5B1zXKPB59p%2BwRDQCp1Qjf2Rj2G%2BmVRlemoPIb%2FFlV1sAHfunYiaDufnh%2FjJMbPCXssheqozdUPmSRT290T%2FizAIjnXZCIm6KHz74bPhMqzlZfoBNwfc2dYLs1tPdro8kGbtuFXw1uLZFVfaM%2Fw9NDa4GReUAo7eA7peX4Y1zyPssW%2B4rpqvgSl6YBQ87LPqEDcYTjfwSujdRZjjxpt9zB5HkXIi31n%2F6ebb%2FDBm79JI6hajFMXs62%2BXwcDgX8sR872OUlE3aGw4unIsMiuTLpm4gszE356D5sRunacjkWfjxYiF5Kjmuz%2BiYli2VtXeQfrsGFRgl8GLJ7OZ2VwF4B7Dmc3hr21TJmP55t53L3LBzTl6CJUjWTvgugch9EUIgVcXddbTSAdniNVqqYzBT6D7yRydAYAg9Czi0vBjMBOkujDa7I%2B9BjqkASnAp4IH6Be%2BequMCa69cHbSxwq6s4EF82xVUCh%2BeUB9fLAJUXwfDHGPlr3PYh1zlonYN9dcBpzs9IKTPrANyC8QB207bBKmDInfDuspjj6xyJVHa%2F0EBxkKVMHPYDV%2Bx6fQllzNpElcFjjWoQl%2BIstYVD8X2gc7iSXbwczVaRLymaVDagg7zbyVYTzZgp81X%2BVmp45dwmYNKd5Ragd5HOFAUJ4N&X-Amz-Signature=33dc0e3d16782712f43e0d77e960e2ce4ee4c614a0b88719a1035a60fa14083c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GJAA3H%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDIUjyoe86kEOXXx2mo10eaKIcagvqbTJuTAGGkTy0oagIhALmDLt%2B3sFiyjWE6EbgdPcT%2FF8CYezg021Cn5X50PkwlKv8DCFEQABoMNjM3NDIzMTgzODA1IgwgEF9QHpGp2h2RMPEq3AOywxTgRj2yvm19%2B5pWNpX1qG0YKAL1zyhROjifCgBlZ%2BA4KjeYJmlfr8r0ym9T1fa1Rtim0XWJbe%2B7sF9pBhiTnPRQIMZHNgfFIpQmN80JJO1rTtyPln1jWZskMJuwiW5veqG%2FGBaJxSz3p01YWIUrmeur6nG94IG4GqlBQmjgs%2BR1rt8ZovHCYzcixUbMZwrR8Q33vuPm8bGT5B1zXKPB59p%2BwRDQCp1Qjf2Rj2G%2BmVRlemoPIb%2FFlV1sAHfunYiaDufnh%2FjJMbPCXssheqozdUPmSRT290T%2FizAIjnXZCIm6KHz74bPhMqzlZfoBNwfc2dYLs1tPdro8kGbtuFXw1uLZFVfaM%2Fw9NDa4GReUAo7eA7peX4Y1zyPssW%2B4rpqvgSl6YBQ87LPqEDcYTjfwSujdRZjjxpt9zB5HkXIi31n%2F6ebb%2FDBm79JI6hajFMXs62%2BXwcDgX8sR872OUlE3aGw4unIsMiuTLpm4gszE356D5sRunacjkWfjxYiF5Kjmuz%2BiYli2VtXeQfrsGFRgl8GLJ7OZ2VwF4B7Dmc3hr21TJmP55t53L3LBzTl6CJUjWTvgugch9EUIgVcXddbTSAdniNVqqYzBT6D7yRydAYAg9Czi0vBjMBOkujDa7I%2B9BjqkASnAp4IH6Be%2BequMCa69cHbSxwq6s4EF82xVUCh%2BeUB9fLAJUXwfDHGPlr3PYh1zlonYN9dcBpzs9IKTPrANyC8QB207bBKmDInfDuspjj6xyJVHa%2F0EBxkKVMHPYDV%2Bx6fQllzNpElcFjjWoQl%2BIstYVD8X2gc7iSXbwczVaRLymaVDagg7zbyVYTzZgp81X%2BVmp45dwmYNKd5Ragd5HOFAUJ4N&X-Amz-Signature=43f5aa801b37b10ae277d62a0b6e89137ff0ef4617edb045d00851dc9087bb70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
