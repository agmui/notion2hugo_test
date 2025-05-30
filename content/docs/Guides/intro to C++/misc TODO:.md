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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDW2Q4I%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FeSUPsqG00sb3XX99lyz3gu5biwyfqKzU229fNGrJwgIgCW72bWl%2Fv%2FdWspMNKE0h4GUhvCeO20oaNtyItyVgvjwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIf8Lee8o5icumufFircAw6GskvC4kdUssz%2ByO22E6Va5fti7y%2FjTjsPTPkTET6s3%2BfnLkz9gJqGfIvnp1bCka8OK2vA%2FqEakVHA8GojtqFv2NALO%2FW1IqJPnQtHMApUx%2Fd%2FU1u5m0Rz05R4ZQcOVSiFs8GdqIh%2Bpwkp1kf9pAJZdXmTwwm4MxSogyx6d%2BSGLs14F4uzFgS1LCQGlCBv5MbCFulDyr%2BjM8bokv4z%2F9tHeTeIzy0G2LZc1WrRLSWLMw74smCgxAc1uOQJ72CcD2pEXlnLsTzotK7mVSBG5G9kXn0UlN6iiNZJ0iqh%2F8JIbJjhr7JhrPRjM07ufWvQPtiro%2FqQ%2BzeQ5HnB1Okuju2T5A0DI3xSe6EJJWZ18rjiBSKK5j325QEJ52HlYc7hrWPTDrrFMKolx9mnnwUZ2%2FBT6mLUub2Nid91CftDGEkSWFuSZN47Nhom6l%2B2OBo%2BPc01%2FtFlfTnwWFWAhIgoBI0bulzuXRmMXvnezOlX%2FRMnz4fGrQCzAlBdhwZBF9Vp%2FCxDMFjVvsggZEp6f86ZCSo2CSiCqtjL24IATZgKNvzOO0%2FeJz35qZHJOwNFrVtw%2FYPcdp4vbt8ylikbK84VKe5Rgbk5kftoB9yLdaG8ibvLW5OHai%2FPZojTfxd9MMLP5sEGOqUBahLlPZSM1hAxUfuVTRDfugIqcwSnSjz3VbpCXp2llOWvZihfiTK1n%2FY2SBzvt6x71V73BTGGCdOU7E17Ha3xLtVcd0VUv4IM4wb4%2Fyj8i1cIaHEZbN5MKssQiyqCtLZY%2BLZFOywrJKiz6e1xSODWQ%2BEmgziE4qXTyVH3DZ4hY434UZs%2BHVjn1gkNe6KuepDTykBH7qQZ8RK4Hw1lIEmk7OYIt3nM&X-Amz-Signature=f6c34838aec32417010eac5eadfb804211bffbfda6619e99a1d7e601fb246f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDW2Q4I%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FeSUPsqG00sb3XX99lyz3gu5biwyfqKzU229fNGrJwgIgCW72bWl%2Fv%2FdWspMNKE0h4GUhvCeO20oaNtyItyVgvjwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIf8Lee8o5icumufFircAw6GskvC4kdUssz%2ByO22E6Va5fti7y%2FjTjsPTPkTET6s3%2BfnLkz9gJqGfIvnp1bCka8OK2vA%2FqEakVHA8GojtqFv2NALO%2FW1IqJPnQtHMApUx%2Fd%2FU1u5m0Rz05R4ZQcOVSiFs8GdqIh%2Bpwkp1kf9pAJZdXmTwwm4MxSogyx6d%2BSGLs14F4uzFgS1LCQGlCBv5MbCFulDyr%2BjM8bokv4z%2F9tHeTeIzy0G2LZc1WrRLSWLMw74smCgxAc1uOQJ72CcD2pEXlnLsTzotK7mVSBG5G9kXn0UlN6iiNZJ0iqh%2F8JIbJjhr7JhrPRjM07ufWvQPtiro%2FqQ%2BzeQ5HnB1Okuju2T5A0DI3xSe6EJJWZ18rjiBSKK5j325QEJ52HlYc7hrWPTDrrFMKolx9mnnwUZ2%2FBT6mLUub2Nid91CftDGEkSWFuSZN47Nhom6l%2B2OBo%2BPc01%2FtFlfTnwWFWAhIgoBI0bulzuXRmMXvnezOlX%2FRMnz4fGrQCzAlBdhwZBF9Vp%2FCxDMFjVvsggZEp6f86ZCSo2CSiCqtjL24IATZgKNvzOO0%2FeJz35qZHJOwNFrVtw%2FYPcdp4vbt8ylikbK84VKe5Rgbk5kftoB9yLdaG8ibvLW5OHai%2FPZojTfxd9MMLP5sEGOqUBahLlPZSM1hAxUfuVTRDfugIqcwSnSjz3VbpCXp2llOWvZihfiTK1n%2FY2SBzvt6x71V73BTGGCdOU7E17Ha3xLtVcd0VUv4IM4wb4%2Fyj8i1cIaHEZbN5MKssQiyqCtLZY%2BLZFOywrJKiz6e1xSODWQ%2BEmgziE4qXTyVH3DZ4hY434UZs%2BHVjn1gkNe6KuepDTykBH7qQZ8RK4Hw1lIEmk7OYIt3nM&X-Amz-Signature=6402ed2e8c42695d6d795c2233d31e28ac6db7b5350cd89594619f84c2855bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
