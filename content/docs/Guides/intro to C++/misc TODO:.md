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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNS5WF4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE9tvncpBxxOuHSybwjhR8fWi9MkNakMkvORY0006TOaAiBKhYYGWd%2FPmzrvQjO6Bx7J%2FGj%2F5UlZeIQj%2FUABcdOnTyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMLwqh5v4hFRXs84%2B%2BKtwDLYSfN5rajVJ38FfBAgOo9e4GyI%2BNM5b6Mmvze5wi8MPsexk6pPUELleA%2Fw7he2%2BtsS9x%2BNk8AI%2FZmSplcRJejUq1LwHtipbViRyFbFoXTo40vsNJam8%2FjvV9%2FJU%2F1zyexgKNMYPWmUbZQxnDUHJyk6ISeD5BlHOujwlricuRvt7XzZybJTl8RLg47Gn0ktiCkimCgC2KETDeM5%2FCEX7KLlBUfhvJpCYsJxDRDgu7YWlFWBqSrD1q7y5jyYzI2nB7ifo9ECw2O4UGKXSPCGQJ3fxNOWNnf9x6pk%2FuFFGGY2seRA41LUoRnftlpn0e%2BPstgeAjTsI9N0pIM69Z6CMxra2IGKGq79ypRoKcFCWaRmbyEJadVvdRMa1OEHEuUVVMUy2cPIoDlCv7r4rRmLFG2mKpYue7%2FqOl2DfgndweVG0RmXmeCFJmZGbxhd3BQv329udYNSlusx6Z5M4vTnfdDip9K7cJrq9vZgXSb6F6MDspBqLe2ta7dj6mMlu8ejz0dB7q2pEAMrcYPPWavOifYkxUbfcGfh6U%2BF5zxMtQJUAYzdOgiyYUsOiL6b0FO%2FIaY%2FJOxqWbFX1GXJYxatZXYuhiKOFuvhpc%2BkJadHmWUyGPUk1Qi%2FnK7Gk8iR4w8ofJvQY6pgF4LOJ%2FWKoRe71PgGmyUAlsSmvWUWFIX9qh%2FgC6qNYl6MXB27KhpPuXsQvSi0jN7s5raILgtpjUTQzMXRmrYj9qf%2Bf6lTFnu06QbTwtTdUXyyKtwEbOgd4XLEfx%2FWpVPrYDplD9k350der52jr0pmAUUSCBfN2tqMBEpWBrk6mBOpsEPG9Ya7A%2FMhytt4%2F8e6SOHno9JjD1JG73onjcg6TjT8dWA89N&X-Amz-Signature=04d80212c9b9a29f3027d4de995e1306854afecd49abbb0ab487981660cbc10c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNS5WF4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE9tvncpBxxOuHSybwjhR8fWi9MkNakMkvORY0006TOaAiBKhYYGWd%2FPmzrvQjO6Bx7J%2FGj%2F5UlZeIQj%2FUABcdOnTyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMLwqh5v4hFRXs84%2B%2BKtwDLYSfN5rajVJ38FfBAgOo9e4GyI%2BNM5b6Mmvze5wi8MPsexk6pPUELleA%2Fw7he2%2BtsS9x%2BNk8AI%2FZmSplcRJejUq1LwHtipbViRyFbFoXTo40vsNJam8%2FjvV9%2FJU%2F1zyexgKNMYPWmUbZQxnDUHJyk6ISeD5BlHOujwlricuRvt7XzZybJTl8RLg47Gn0ktiCkimCgC2KETDeM5%2FCEX7KLlBUfhvJpCYsJxDRDgu7YWlFWBqSrD1q7y5jyYzI2nB7ifo9ECw2O4UGKXSPCGQJ3fxNOWNnf9x6pk%2FuFFGGY2seRA41LUoRnftlpn0e%2BPstgeAjTsI9N0pIM69Z6CMxra2IGKGq79ypRoKcFCWaRmbyEJadVvdRMa1OEHEuUVVMUy2cPIoDlCv7r4rRmLFG2mKpYue7%2FqOl2DfgndweVG0RmXmeCFJmZGbxhd3BQv329udYNSlusx6Z5M4vTnfdDip9K7cJrq9vZgXSb6F6MDspBqLe2ta7dj6mMlu8ejz0dB7q2pEAMrcYPPWavOifYkxUbfcGfh6U%2BF5zxMtQJUAYzdOgiyYUsOiL6b0FO%2FIaY%2FJOxqWbFX1GXJYxatZXYuhiKOFuvhpc%2BkJadHmWUyGPUk1Qi%2FnK7Gk8iR4w8ofJvQY6pgF4LOJ%2FWKoRe71PgGmyUAlsSmvWUWFIX9qh%2FgC6qNYl6MXB27KhpPuXsQvSi0jN7s5raILgtpjUTQzMXRmrYj9qf%2Bf6lTFnu06QbTwtTdUXyyKtwEbOgd4XLEfx%2FWpVPrYDplD9k350der52jr0pmAUUSCBfN2tqMBEpWBrk6mBOpsEPG9Ya7A%2FMhytt4%2F8e6SOHno9JjD1JG73onjcg6TjT8dWA89N&X-Amz-Signature=010b0d66bbc6fc98f233e6b87dffbe9ec4cccb7f75ab1da022b898c6d9016522&X-Amz-SignedHeaders=host&x-id=GetObject)

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
