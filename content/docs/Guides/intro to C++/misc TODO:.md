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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTDLV6C%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCckssom72a1Caf4GGPsZdBPWHru4pyhcpu9eruVjGTGAIhALqTCrdCvrW1%2FftQs1cPFcUrO3%2FHUIzleVF9evonUbfBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvxFlI5y8RWXZIN4sq3AOjlZ%2FVOXkyvFxtu3OVPCgXabNcS0SV4ytrJeQfrNifc8PTUZ%2FgAQPIOBW5pMQ0c58Ud5Yl%2BCXRCpT2TdbKKdVMiRukqNGQf2%2FRBVLegxvLbH9p%2BgmbaiL%2BBE7ojZXQdfsZCC4YpymSfulrIzcuTgCszlDR%2BiXYQ3ntEZ7PNgR6nEEEUMGhgWZdhkCTcneQ3ontvpzYbj23pIPEWJaQFRFUXSXr1sPWWjV0LD2rtf9ar8%2BYwEUq9eo0N8a00ENM9L1T7rrEcxPHSsWWUAQcqvf3JWql2ye%2Fohao9k8LDEA1fOf7BMJqPlWSXe0a6jsQvYLP5Wzxto%2BVfFvwKRh%2BUIBQu4fKM%2BaiU%2BFBBs7B9Iu71ruUgCtAXuLYKUX%2BlVbFuda%2BfUdZiC1MtsBfHSh6cx8VWH2oj%2Bvs%2BZaiz%2FEW2Xu7Gu66qTHvKGJvlT%2Fr8a1%2F0YrXGGZCA5TYDLIVkJHLtxeEigCB51mCFIULGoyAoovUDfEppxaUJ6nD9kyZMyKukA2ysIiSkvGFw%2FWNsqM%2B0MYClFwr1MFkoXYxeVNIX5GaO3PyYYBJ9VJcBIczCuawywJ%2FGi5zQUXnVKnAGHWrU%2FJpE47Lm%2FUG6jk68hHB1frapgvToT28QronPhbp8DC06IbBBjqkAcwo3%2BC4LM%2BBFdVoERlURci5q%2FmDiPX8CZoRYGLyP0SrvmEFH1X%2BCLSYtI6uNvD4qj3jZi9hG63p7f6zD3lWHzmaUngN%2Fz3AoseYLPfr6USzz%2BE5hbY%2FUYbCBBxCwEn4tt850drGjVp%2FRZsvij%2Fq0tL5z2w%2FsbMnkYkMtzi9WopC9z3GOUV6Z5bW0MPcwC9yJrE8F3muhrCJL6tEsK7Jv9E3R6Sx&X-Amz-Signature=65382d158e79c0f7e8d8eb80e99c223dcbd7e5e7994b20535d265ae08902b0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTDLV6C%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCckssom72a1Caf4GGPsZdBPWHru4pyhcpu9eruVjGTGAIhALqTCrdCvrW1%2FftQs1cPFcUrO3%2FHUIzleVF9evonUbfBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvxFlI5y8RWXZIN4sq3AOjlZ%2FVOXkyvFxtu3OVPCgXabNcS0SV4ytrJeQfrNifc8PTUZ%2FgAQPIOBW5pMQ0c58Ud5Yl%2BCXRCpT2TdbKKdVMiRukqNGQf2%2FRBVLegxvLbH9p%2BgmbaiL%2BBE7ojZXQdfsZCC4YpymSfulrIzcuTgCszlDR%2BiXYQ3ntEZ7PNgR6nEEEUMGhgWZdhkCTcneQ3ontvpzYbj23pIPEWJaQFRFUXSXr1sPWWjV0LD2rtf9ar8%2BYwEUq9eo0N8a00ENM9L1T7rrEcxPHSsWWUAQcqvf3JWql2ye%2Fohao9k8LDEA1fOf7BMJqPlWSXe0a6jsQvYLP5Wzxto%2BVfFvwKRh%2BUIBQu4fKM%2BaiU%2BFBBs7B9Iu71ruUgCtAXuLYKUX%2BlVbFuda%2BfUdZiC1MtsBfHSh6cx8VWH2oj%2Bvs%2BZaiz%2FEW2Xu7Gu66qTHvKGJvlT%2Fr8a1%2F0YrXGGZCA5TYDLIVkJHLtxeEigCB51mCFIULGoyAoovUDfEppxaUJ6nD9kyZMyKukA2ysIiSkvGFw%2FWNsqM%2B0MYClFwr1MFkoXYxeVNIX5GaO3PyYYBJ9VJcBIczCuawywJ%2FGi5zQUXnVKnAGHWrU%2FJpE47Lm%2FUG6jk68hHB1frapgvToT28QronPhbp8DC06IbBBjqkAcwo3%2BC4LM%2BBFdVoERlURci5q%2FmDiPX8CZoRYGLyP0SrvmEFH1X%2BCLSYtI6uNvD4qj3jZi9hG63p7f6zD3lWHzmaUngN%2Fz3AoseYLPfr6USzz%2BE5hbY%2FUYbCBBxCwEn4tt850drGjVp%2FRZsvij%2Fq0tL5z2w%2FsbMnkYkMtzi9WopC9z3GOUV6Z5bW0MPcwC9yJrE8F3muhrCJL6tEsK7Jv9E3R6Sx&X-Amz-Signature=4830c8f64565d3a55a6705eeb1cfd63632944444bd083a5afd2f16ba6d8e196f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
