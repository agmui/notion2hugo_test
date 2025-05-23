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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIXGTHG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIC9JbjvzO5a6TMTW6B20yBxjq8ge2OXHqt8W5AUrfQ5tAiEAkb2iVbVaLJEglIYR0sGEDcbbGGlUaUiDqI5QIRiVFLoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8dW%2BT2CxpoGhCzeyrcA%2BjZ0T19GWlIcHbbCBWe4Sx8C0dJfS%2BqwjXzEihytwxPxlIujgcK125cpwsWLg5a9thXlJ3ZDbX6HMX0RkHXBwYhHj2sayktuprE%2FhN4AeTarBRAXwlnTeQQ2%2FX6WDlKpr6prVPniQcWiLg3Bps9h%2BEv6ls3eP2mWcxcWPzJVtzzeaaVA1trCw%2BsegjjHI7NGi6dtKB%2F89OiShwHxRWUUJQIiHVB%2BBI5DUJqnqlARZrAEQqwPHegKK0Y6W1DhK%2BFiYfnIneTOoeAH4VdcjykO%2BHqjCsX9bZTNV%2BC2dVXzLJ38eSlMeF8sa%2BSO7lTHdXh%2Fo0SJLAxQxn9a8uw1fE9XkQOlI4pnWTKV0QWWcV8R74zC9I5%2Bo3FHhuXzp5Rl1cbsGpB12E9AX4fJyHQSFOBRtoPYq7e1Cwzzn%2BIXrRGBWoATuJpxS%2ByR%2BUZxg30dJPDxY1aBYtgnwX4Sj8O%2Bh5cpXaStjhdrat1uVTEpVYQuYsLVFw%2FVpCb%2BSBm8P776%2BFywF5EkXQW1CJp0zm8jpJEVxIhKB3BZm3WjEEo7bo2ACMC%2Bn2BbN%2FrTOjAfEw57watOLe3J%2FYqPZLb4ynSPpSXH55CX5e%2BUsJFe7AhpFQZgQjZ1D3Odtcj5UWycqABMKCNwcEGOqUBYyE0wZvoR9qA8k8glAwtLJPrRCywqtbBlVD9LZw6XQu7dmft59EbVid4sYWqgoaLAYCwF2SwcZxNaGtal6jRxut33PmY15L548M%2BfNi%2FUDzhF976gRVOQPK0DiyGC5S2i73Uwuz9bPOjWUPkGh7zoad1mQRDwPVInqiPHY399v%2FN0%2BE4N9CqR1WwuvQi8D7JD2PuQwVFiZ1fjnrsrb2ngULf%2B3Ry&X-Amz-Signature=779d9b4b10c53d5a03e71b1f21051753f83b7ca35383bb2c4b005375e3ffecc3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIXGTHG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIC9JbjvzO5a6TMTW6B20yBxjq8ge2OXHqt8W5AUrfQ5tAiEAkb2iVbVaLJEglIYR0sGEDcbbGGlUaUiDqI5QIRiVFLoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8dW%2BT2CxpoGhCzeyrcA%2BjZ0T19GWlIcHbbCBWe4Sx8C0dJfS%2BqwjXzEihytwxPxlIujgcK125cpwsWLg5a9thXlJ3ZDbX6HMX0RkHXBwYhHj2sayktuprE%2FhN4AeTarBRAXwlnTeQQ2%2FX6WDlKpr6prVPniQcWiLg3Bps9h%2BEv6ls3eP2mWcxcWPzJVtzzeaaVA1trCw%2BsegjjHI7NGi6dtKB%2F89OiShwHxRWUUJQIiHVB%2BBI5DUJqnqlARZrAEQqwPHegKK0Y6W1DhK%2BFiYfnIneTOoeAH4VdcjykO%2BHqjCsX9bZTNV%2BC2dVXzLJ38eSlMeF8sa%2BSO7lTHdXh%2Fo0SJLAxQxn9a8uw1fE9XkQOlI4pnWTKV0QWWcV8R74zC9I5%2Bo3FHhuXzp5Rl1cbsGpB12E9AX4fJyHQSFOBRtoPYq7e1Cwzzn%2BIXrRGBWoATuJpxS%2ByR%2BUZxg30dJPDxY1aBYtgnwX4Sj8O%2Bh5cpXaStjhdrat1uVTEpVYQuYsLVFw%2FVpCb%2BSBm8P776%2BFywF5EkXQW1CJp0zm8jpJEVxIhKB3BZm3WjEEo7bo2ACMC%2Bn2BbN%2FrTOjAfEw57watOLe3J%2FYqPZLb4ynSPpSXH55CX5e%2BUsJFe7AhpFQZgQjZ1D3Odtcj5UWycqABMKCNwcEGOqUBYyE0wZvoR9qA8k8glAwtLJPrRCywqtbBlVD9LZw6XQu7dmft59EbVid4sYWqgoaLAYCwF2SwcZxNaGtal6jRxut33PmY15L548M%2BfNi%2FUDzhF976gRVOQPK0DiyGC5S2i73Uwuz9bPOjWUPkGh7zoad1mQRDwPVInqiPHY399v%2FN0%2BE4N9CqR1WwuvQi8D7JD2PuQwVFiZ1fjnrsrb2ngULf%2B3Ry&X-Amz-Signature=bc270c0070b8fb87289dc91623811e407cb23e0b5d04e243cd1caeb740a9b438&X-Amz-SignedHeaders=host&x-id=GetObject)

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
