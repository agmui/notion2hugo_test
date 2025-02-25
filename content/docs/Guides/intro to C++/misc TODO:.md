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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4HNCHV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGy5ErWX9LJlZRFcC8%2FWnn7SwRNhcLVNwy0JLKsf2erQAiEAn6vnVSOTYsjfrbGVnYNvsvUATRcrnc3kNbWg0Fkl2UUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBaL40zZNh9XeQTLbCrcA%2Boflty74x7GxxrHPb9HQsTy6%2BeJ%2FA6i679RNELeTAAh%2BMYGsWjubo2sSTpALVjc7i0ZfCojX4j5isUQ92Elp84BmpcGo0rftj7roEIL8Eq6WlVwTqcrFYvuJvTFabUnPL1KoXLX9FEEvicp8XoqX8UijgXV2FmeMxfO2wNJkyriyuRKUt%2BxrAXdP3OcaME0bDA88WQ7e4Bk%2BRVSRF7FQRmZLQ02HZJgO7V5mwBF3LZFIqDae1%2B9t3LW69k4ioVrmlUdqZyGp8H7KZqzy7rUIqdvgT4JUU1sgTZqkzdX2%2FtQiVae%2FujKXkTBW0yiyF1N8igEQ0tfe4g15fACeaZl2Vl1IGyTqf6P1rAOHLh79FBL3oDIYCQ0EXPxa04unx6pb1B9LHQrkHgNg1wxEleBP4bldmBEsOOipR%2Bv0ZauM3qHLfYU2nHyG2qVwZkS8yYVc%2BF9nTsYPoqrzIEdHIofK%2FKiWcHDkmAG1ep%2FClJi2gaMydRrn4qlvkxL6ihL2wVvYRTjlMTI%2B4DlC9l93S05ZMrsN9OmwJ3HjiEuEwyGK%2Fxxj5mnylhLvKT32rOcCS%2Fb5%2Fe2HRikoNqt9iD1O%2BTwQLNkaHuH39is2eCCcwfBMmxBO4tRE4bRYJ%2BgHSLzMJaN%2BL0GOqUBLKqXDrjxWl4FEcHmyDH%2FDIVf6D3o1zA7a7M%2BG5WjDWwjksmM7kv2%2FMq2IgQHchcJvLIPglChK14X9yqNSIJBKoN3KIRBDWQIsJRS%2B4hBv8u9onTKft9dmc0GbtI7pImBmFK1CiEk4qiwtrTKG1xtNvPiWzki0g%2B1xZnXwvMWTEguzi4inRFcXDD5k7eifBAbF5sxZbQdq80cF2xzCzyQEqOtMsDQ&X-Amz-Signature=4ab3caa66f9fcda06a1c1a207de2c49909e12750c266379028f801ba59c827ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4HNCHV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGy5ErWX9LJlZRFcC8%2FWnn7SwRNhcLVNwy0JLKsf2erQAiEAn6vnVSOTYsjfrbGVnYNvsvUATRcrnc3kNbWg0Fkl2UUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBaL40zZNh9XeQTLbCrcA%2Boflty74x7GxxrHPb9HQsTy6%2BeJ%2FA6i679RNELeTAAh%2BMYGsWjubo2sSTpALVjc7i0ZfCojX4j5isUQ92Elp84BmpcGo0rftj7roEIL8Eq6WlVwTqcrFYvuJvTFabUnPL1KoXLX9FEEvicp8XoqX8UijgXV2FmeMxfO2wNJkyriyuRKUt%2BxrAXdP3OcaME0bDA88WQ7e4Bk%2BRVSRF7FQRmZLQ02HZJgO7V5mwBF3LZFIqDae1%2B9t3LW69k4ioVrmlUdqZyGp8H7KZqzy7rUIqdvgT4JUU1sgTZqkzdX2%2FtQiVae%2FujKXkTBW0yiyF1N8igEQ0tfe4g15fACeaZl2Vl1IGyTqf6P1rAOHLh79FBL3oDIYCQ0EXPxa04unx6pb1B9LHQrkHgNg1wxEleBP4bldmBEsOOipR%2Bv0ZauM3qHLfYU2nHyG2qVwZkS8yYVc%2BF9nTsYPoqrzIEdHIofK%2FKiWcHDkmAG1ep%2FClJi2gaMydRrn4qlvkxL6ihL2wVvYRTjlMTI%2B4DlC9l93S05ZMrsN9OmwJ3HjiEuEwyGK%2Fxxj5mnylhLvKT32rOcCS%2Fb5%2Fe2HRikoNqt9iD1O%2BTwQLNkaHuH39is2eCCcwfBMmxBO4tRE4bRYJ%2BgHSLzMJaN%2BL0GOqUBLKqXDrjxWl4FEcHmyDH%2FDIVf6D3o1zA7a7M%2BG5WjDWwjksmM7kv2%2FMq2IgQHchcJvLIPglChK14X9yqNSIJBKoN3KIRBDWQIsJRS%2B4hBv8u9onTKft9dmc0GbtI7pImBmFK1CiEk4qiwtrTKG1xtNvPiWzki0g%2B1xZnXwvMWTEguzi4inRFcXDD5k7eifBAbF5sxZbQdq80cF2xzCzyQEqOtMsDQ&X-Amz-Signature=be7734ea638e5a7dd4f9c92a5d1088479a1a977577487c15b1d98053ec53ec67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
