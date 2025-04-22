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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUG35KH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAP7jT%2BKVTrEPObMQK8QWmrK0zUPd7uomUqa0Pxde8mEAiEAsihd9L4Ijaiv%2FWeaxt4fp3FQnm47oHWehcsUuXxCysMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtNGHF2rybDD7IhyrcA1UpdvguQ8GPZr12NT5PMS3I5V2kNbsX6716nIp95KN%2Fnlj9VYXynA9wj5Zhg%2F9GR0vx9dTQ0zY6J8rMLEoWsLQswsWAPEo01rqyTcOrmalBpWWHoe6RGjHk6LP%2BqyoFkRSTzUE45uKDfTKQSsLLtDrhmOATBcunN7UMx5TpqJulLmSnqzwD%2BP90Y%2Fcpv0p1hI9epPjxtmMQZRCbJk560gMGUSrjNlxAIgnn3E9PC%2FJZoOsdVQvuv%2FIyXmsV%2F0G5iXuq6prazwWShCniOQZi2M9ZDcrtih9F7fEYOalZGAsTFd2LRnmbmdy%2FWoO04%2FBJcpSgiG9evB15WnnB%2BXLVXu2LQBg8XeMaA7SCaJxMZooVZFqLKkCNn%2FlW%2FIBfd58sOHUHR9O8F8n9MR1%2FVyOO%2BSKmLXsmr%2FstsPqOX3io%2F2iznR%2BoYP4sC1ZJeKwWgAnfwisjCKQY3AjeMlK0n3mlY2NPHVSjgRAe2T8nxRhgjL3LZdKu8MUljUbsczQeJrOMNUARJLHE%2BXuhIby0IVzm1zdBB4a3oQV%2BmXBuaeoeNINUkKxELEwuVRwy7QflPrlR2Wwyj%2BoVoWRp1OeqnZ1T0GnhJxf3DCaWnDMATPLtFnG3vmnG29U8DcgL8IdfMNHCncAGOqUBkVuGEhxv5WYlvskaS9biO4NDnJbDepC25K%2FHuX4nxgRIm7PcX%2FtifD1p1cHXzEnwNFomCVjhbsYexsSAhZ4UFqQ%2BmGgNDNA0vcSczMyAeeOtnoAc%2BDZVAZqdZSUEbIAwMr7fTcZ4T6svFLnS%2FPMpYQ5o22oQBkJeIVTIOqDtmIkV6YKPtOUkVYXvsxYxy25p4N6UJiza%2BANyFEeMnWW923d1kj21&X-Amz-Signature=7a80c9e4b7d8b22b1e7f6e41105b4bd1a3afb47a38f4c277b6efd970dcb795de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUG35KH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAP7jT%2BKVTrEPObMQK8QWmrK0zUPd7uomUqa0Pxde8mEAiEAsihd9L4Ijaiv%2FWeaxt4fp3FQnm47oHWehcsUuXxCysMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtNGHF2rybDD7IhyrcA1UpdvguQ8GPZr12NT5PMS3I5V2kNbsX6716nIp95KN%2Fnlj9VYXynA9wj5Zhg%2F9GR0vx9dTQ0zY6J8rMLEoWsLQswsWAPEo01rqyTcOrmalBpWWHoe6RGjHk6LP%2BqyoFkRSTzUE45uKDfTKQSsLLtDrhmOATBcunN7UMx5TpqJulLmSnqzwD%2BP90Y%2Fcpv0p1hI9epPjxtmMQZRCbJk560gMGUSrjNlxAIgnn3E9PC%2FJZoOsdVQvuv%2FIyXmsV%2F0G5iXuq6prazwWShCniOQZi2M9ZDcrtih9F7fEYOalZGAsTFd2LRnmbmdy%2FWoO04%2FBJcpSgiG9evB15WnnB%2BXLVXu2LQBg8XeMaA7SCaJxMZooVZFqLKkCNn%2FlW%2FIBfd58sOHUHR9O8F8n9MR1%2FVyOO%2BSKmLXsmr%2FstsPqOX3io%2F2iznR%2BoYP4sC1ZJeKwWgAnfwisjCKQY3AjeMlK0n3mlY2NPHVSjgRAe2T8nxRhgjL3LZdKu8MUljUbsczQeJrOMNUARJLHE%2BXuhIby0IVzm1zdBB4a3oQV%2BmXBuaeoeNINUkKxELEwuVRwy7QflPrlR2Wwyj%2BoVoWRp1OeqnZ1T0GnhJxf3DCaWnDMATPLtFnG3vmnG29U8DcgL8IdfMNHCncAGOqUBkVuGEhxv5WYlvskaS9biO4NDnJbDepC25K%2FHuX4nxgRIm7PcX%2FtifD1p1cHXzEnwNFomCVjhbsYexsSAhZ4UFqQ%2BmGgNDNA0vcSczMyAeeOtnoAc%2BDZVAZqdZSUEbIAwMr7fTcZ4T6svFLnS%2FPMpYQ5o22oQBkJeIVTIOqDtmIkV6YKPtOUkVYXvsxYxy25p4N6UJiza%2BANyFEeMnWW923d1kj21&X-Amz-Signature=5a676e7231bf6b4715eefe37dfd5257a1948a9ee84d83bbd07a7c2473eae2e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
