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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723KKV3D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX5DOhYlaCxSb3W3fWl3NKKmzFi2ud0FqhdlrKEc8rJwIgZsNb33%2BWhaXVIlqzhgGF%2FG%2FHRLD6IFPBPsm57L%2Ft21Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFNXSMX4IkmTL8xh0CrcA4S4v8L6PRFI7%2BbP0QNG9ndvLJZPdbEeqW8EpOIIeAlFde3bmH8dUXCCj%2F3PJImXB2lcW2EpYI1pA1VcIFTaraBhmMIPhDh6ZNVGm6s%2FyAiLBZzl4FP42SVASzbsNI1WBhATSCDIiONsRUpIe093ui9RGODkv2jj0t4A9M5zqGxULGCX%2FSJj7Z9DEpW01CGEXOrY3diq3H3cokFP9SSLVhZwoa0MBPMdczT262IjNuubOKSwApfXA%2Fgn4Z1DjyskmFxFJ4B2rJBcWvenxt7NhmwBpqF8fA1lLRIusX1Mac4j%2BYzKwK%2F%2FBdzhqiihtd3U9kd6axjbDodD5yA6evH%2BlR1ZWwgitEs2nlDXTwN11arDGn1BAGr2LfcXCU3plPaIeqdkFPOBYnaWXBNKyM9eNx5%2FiiY8a4FrQu%2Fztw5OxU%2Fnw43ncv3R%2F%2Fx4epCyMuLZl758s%2F9whyiLHKahGcf%2Fh9P3ULYulp1lb%2BnuluhW19UTxtueQzMz9nLC7elQ67AyP754LudildsYIAuKEqghsBkKq3RDAj3DpMWCs4XqV94FOmdAIJdP%2FRJsgJkBNViFRnCteWpUNXKWWYJAUHnxeZtbR95tOi7KKm%2Fdm5oyEXGJf4HqehYzu4yIVW2zMIeF98QGOqUB0escZbB5xa1Ykdyv3QzC1m9vT%2FIjmhhsQzln7Wz4DRKul9IjzvS7RUepzQy1Jc4tMDwBqd68ogHiCfWTAcmRoVX8xl0TBH4%2Bas6i8eCzizJalO%2FUK0YwCMHJ6zfiKv4b%2BfZYj1XsTl76bSYRAlTTqcdqmgwtee%2Fe2KsMcHPq%2BmZiebBVgUDJbWOck22PsEgFpp7yiWB4WcPdy51Sx9RcgI5c9vM2&X-Amz-Signature=435b6f2b45b99b60d9c265b0606b55cbb1f0f26b71db910c95e474b8636b609e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723KKV3D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX5DOhYlaCxSb3W3fWl3NKKmzFi2ud0FqhdlrKEc8rJwIgZsNb33%2BWhaXVIlqzhgGF%2FG%2FHRLD6IFPBPsm57L%2Ft21Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFNXSMX4IkmTL8xh0CrcA4S4v8L6PRFI7%2BbP0QNG9ndvLJZPdbEeqW8EpOIIeAlFde3bmH8dUXCCj%2F3PJImXB2lcW2EpYI1pA1VcIFTaraBhmMIPhDh6ZNVGm6s%2FyAiLBZzl4FP42SVASzbsNI1WBhATSCDIiONsRUpIe093ui9RGODkv2jj0t4A9M5zqGxULGCX%2FSJj7Z9DEpW01CGEXOrY3diq3H3cokFP9SSLVhZwoa0MBPMdczT262IjNuubOKSwApfXA%2Fgn4Z1DjyskmFxFJ4B2rJBcWvenxt7NhmwBpqF8fA1lLRIusX1Mac4j%2BYzKwK%2F%2FBdzhqiihtd3U9kd6axjbDodD5yA6evH%2BlR1ZWwgitEs2nlDXTwN11arDGn1BAGr2LfcXCU3plPaIeqdkFPOBYnaWXBNKyM9eNx5%2FiiY8a4FrQu%2Fztw5OxU%2Fnw43ncv3R%2F%2Fx4epCyMuLZl758s%2F9whyiLHKahGcf%2Fh9P3ULYulp1lb%2BnuluhW19UTxtueQzMz9nLC7elQ67AyP754LudildsYIAuKEqghsBkKq3RDAj3DpMWCs4XqV94FOmdAIJdP%2FRJsgJkBNViFRnCteWpUNXKWWYJAUHnxeZtbR95tOi7KKm%2Fdm5oyEXGJf4HqehYzu4yIVW2zMIeF98QGOqUB0escZbB5xa1Ykdyv3QzC1m9vT%2FIjmhhsQzln7Wz4DRKul9IjzvS7RUepzQy1Jc4tMDwBqd68ogHiCfWTAcmRoVX8xl0TBH4%2Bas6i8eCzizJalO%2FUK0YwCMHJ6zfiKv4b%2BfZYj1XsTl76bSYRAlTTqcdqmgwtee%2Fe2KsMcHPq%2BmZiebBVgUDJbWOck22PsEgFpp7yiWB4WcPdy51Sx9RcgI5c9vM2&X-Amz-Signature=0a7c9afc053c631f26445ea9942491a0a40bea2aaffc12223fa95dfb02519504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
