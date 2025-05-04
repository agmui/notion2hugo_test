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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL346IJG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCD3xYi53gpC5d8kYfzHWZRBJvHsNSKWeSeAdChLZ0L7wIgbaineljgG749kk5SvAKqOb6qMRQ%2ByTJzSiBkEbMhMSAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrCXTzEOGkJD1tbeCrcA%2FsH6Rcw5XcdD580QaB8kmZBTqrcyPw5Hfs1Tuiu%2BXrCoYIj3NN9f6B8XkhGfiS8a1lhy1B751RNCvVErdIe%2FYbZox95sa%2FUd1yKbFFI3DfFqxBsmOkLs1JJ8AiPp0%2FB7ocbuokXxY5f3s%2Bo6%2F4LcH5Xkq%2BeT%2F55HABkMlUTVjt90jlKpPcaU4t5KALBCoxardG5fgESsCpF8Y4du1OIwe%2FxPygh%2Bbl6iE6TOoDHwCRBRSHkmym2HLT6%2B%2FTL%2FI6IjETpeFIgAQNYA0lkkoRak3aEHZR%2F0XJjiTEBHixhYRx7ZRTEfdxt2DuU9tvnyFWZgOkMQ9ZC0IJ0Q%2BFdI7mkkBeLlVOSKqoQj7AZ1Vq%2BVxK3lNZHwbn2xQyphZuxKMF8ViLEMPnwj7CjdmkYUbSgaEaRYiPSDhJfc9mZ1gwtuGtka%2FopsjvJslRJyQMO3T0rPGdnM7P44IlMcs3eKyM%2FUe848%2Bmy83K5WoQUD73LIhjXSMdu8hsojM5yKQb5ZaJ5DjdtxsQausYbGhqMgwUI9cNC5j8WDCVdGD%2B0S9gSnM2C8HNzarmwO7PBDbNeRztNOSDGEzPcbKsW8e3Q9tFZtvVk9eyugyBqHYhII6Wc1Rfe1TBPHYYKjEwxTzA9MMXY2sAGOqUBFnrcMbXbgWSwZJ9uY3bUrNJuRdW3KB4vGFdH93DC61nOJkHE3dUJxiPjEPPc5e4BwqRyYAL9DEm89hpYPsrZshNU44r8LwGFyIUNIAc0agyk3ABVzu6gRo8XOMeSziNYibHhlRSiV0bCPpeN0g7TZkWFbDdOcui71rzIJawpejlEhF4ljMWJJHP1W8bAfcVxkp1qIKNHdMwv3pBMGlcPOZVU5jVl&X-Amz-Signature=b249ccccdb02b809150c57ae8e898e18e2b3875a8a7fff476bbdf50656ffebdd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL346IJG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCD3xYi53gpC5d8kYfzHWZRBJvHsNSKWeSeAdChLZ0L7wIgbaineljgG749kk5SvAKqOb6qMRQ%2ByTJzSiBkEbMhMSAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrCXTzEOGkJD1tbeCrcA%2FsH6Rcw5XcdD580QaB8kmZBTqrcyPw5Hfs1Tuiu%2BXrCoYIj3NN9f6B8XkhGfiS8a1lhy1B751RNCvVErdIe%2FYbZox95sa%2FUd1yKbFFI3DfFqxBsmOkLs1JJ8AiPp0%2FB7ocbuokXxY5f3s%2Bo6%2F4LcH5Xkq%2BeT%2F55HABkMlUTVjt90jlKpPcaU4t5KALBCoxardG5fgESsCpF8Y4du1OIwe%2FxPygh%2Bbl6iE6TOoDHwCRBRSHkmym2HLT6%2B%2FTL%2FI6IjETpeFIgAQNYA0lkkoRak3aEHZR%2F0XJjiTEBHixhYRx7ZRTEfdxt2DuU9tvnyFWZgOkMQ9ZC0IJ0Q%2BFdI7mkkBeLlVOSKqoQj7AZ1Vq%2BVxK3lNZHwbn2xQyphZuxKMF8ViLEMPnwj7CjdmkYUbSgaEaRYiPSDhJfc9mZ1gwtuGtka%2FopsjvJslRJyQMO3T0rPGdnM7P44IlMcs3eKyM%2FUe848%2Bmy83K5WoQUD73LIhjXSMdu8hsojM5yKQb5ZaJ5DjdtxsQausYbGhqMgwUI9cNC5j8WDCVdGD%2B0S9gSnM2C8HNzarmwO7PBDbNeRztNOSDGEzPcbKsW8e3Q9tFZtvVk9eyugyBqHYhII6Wc1Rfe1TBPHYYKjEwxTzA9MMXY2sAGOqUBFnrcMbXbgWSwZJ9uY3bUrNJuRdW3KB4vGFdH93DC61nOJkHE3dUJxiPjEPPc5e4BwqRyYAL9DEm89hpYPsrZshNU44r8LwGFyIUNIAc0agyk3ABVzu6gRo8XOMeSziNYibHhlRSiV0bCPpeN0g7TZkWFbDdOcui71rzIJawpejlEhF4ljMWJJHP1W8bAfcVxkp1qIKNHdMwv3pBMGlcPOZVU5jVl&X-Amz-Signature=9a75889ced8b5829d43549d5710a752656d7b345687a8e284eeb2ec29414b8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
