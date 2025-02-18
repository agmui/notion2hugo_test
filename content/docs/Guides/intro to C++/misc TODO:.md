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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBXIJBD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEmHj7lx7TB%2B96PQT3HxdhEcij9oWAMCemlW3iG329cIAiEAptrvd7zdzTKqKEQ0%2F7CyYTVoARzSELt2nPuZ%2F0jwhCAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPKifXk%2FE1NBriPQircA4obld4CTAnuifrZ1Uw2yV%2FVPEJAjhUipc3WbGdin8WMObX2kbYr9G1XSlb0TKIluD3k1yQ%2BuWc6Qlk4fe3oXmuubaM3olzr%2B%2FaH7y4DUnQeE1hcU%2FhdtoilcUAcHsh5HED7wg0Kq1flAGVIu0OPVjbmHryCBlzUvyX6uGB1YHs8xHgM5W0Wt%2Fxle4D8wQS6NivHoS7BvnXR7OQqrU8y27KI%2FFHABglWVKyYUHZ3awd%2FcaJHl4p7BIYwkg3wrq3oVCTwDUtvSBTmPn5Ry4T6pKC5G9VvP0cQRhFBj5gFsnbRDLzzSQjzhdMFtpdGnOdP7MUBvIchD0qQLkwpz13k85MTFqzrbKgdPY%2BI4Cr0XTrKqGivcE%2BB2J7sl0FON%2B3npTd0F5ZWiHMKsxVa6DwVSkSdUrklz6%2FbkfpQ8X6Nx6BgYl4E7HgwnX%2B9NHuLhiQ%2FiD3W0RNwwqWPmpmdH6SGbcmJZ0ZRDh58PmRKqIhLZoHPjxH%2BNJxYq6Hw20Xzr6UoCOJ6yg3316jTuIm68iY%2FNDwH0snRtJrZ5x6qrJpD1SY4suu7O1hR6M3%2B8J%2Fwyz1sTib8CwNKqKZyS7kcfp0fJJH%2BKw16QHFCdJMKeih8MjyCTKOUspmmvYtUmUcpMJii0b0GOqUBsdZnYc2bNf8pwZJLWmDV75rZLtgTpjTv%2FWoFlgHiTZngFNwKmYXxBAfORoMZCQO2KsjijAbu%2FG%2FSjLDb9Hi2QUCkgEaAPmluXH0NfxLpbA0vbvO0NGzsuSTL%2BqYPC41A1WctVEJT%2BAZG83U3MatUw9UFFF%2BSuEtqMbIHFQVLEhTCUX6RzRcgqVPIin2KuZVpSLYB8%2FSNH0xUeUF5MUdkNYrfsDZH&X-Amz-Signature=e7bdb917125df94bbc8a92ab0eb3189e284297d1f1c59140c12292908f6fc814&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBXIJBD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEmHj7lx7TB%2B96PQT3HxdhEcij9oWAMCemlW3iG329cIAiEAptrvd7zdzTKqKEQ0%2F7CyYTVoARzSELt2nPuZ%2F0jwhCAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPKifXk%2FE1NBriPQircA4obld4CTAnuifrZ1Uw2yV%2FVPEJAjhUipc3WbGdin8WMObX2kbYr9G1XSlb0TKIluD3k1yQ%2BuWc6Qlk4fe3oXmuubaM3olzr%2B%2FaH7y4DUnQeE1hcU%2FhdtoilcUAcHsh5HED7wg0Kq1flAGVIu0OPVjbmHryCBlzUvyX6uGB1YHs8xHgM5W0Wt%2Fxle4D8wQS6NivHoS7BvnXR7OQqrU8y27KI%2FFHABglWVKyYUHZ3awd%2FcaJHl4p7BIYwkg3wrq3oVCTwDUtvSBTmPn5Ry4T6pKC5G9VvP0cQRhFBj5gFsnbRDLzzSQjzhdMFtpdGnOdP7MUBvIchD0qQLkwpz13k85MTFqzrbKgdPY%2BI4Cr0XTrKqGivcE%2BB2J7sl0FON%2B3npTd0F5ZWiHMKsxVa6DwVSkSdUrklz6%2FbkfpQ8X6Nx6BgYl4E7HgwnX%2B9NHuLhiQ%2FiD3W0RNwwqWPmpmdH6SGbcmJZ0ZRDh58PmRKqIhLZoHPjxH%2BNJxYq6Hw20Xzr6UoCOJ6yg3316jTuIm68iY%2FNDwH0snRtJrZ5x6qrJpD1SY4suu7O1hR6M3%2B8J%2Fwyz1sTib8CwNKqKZyS7kcfp0fJJH%2BKw16QHFCdJMKeih8MjyCTKOUspmmvYtUmUcpMJii0b0GOqUBsdZnYc2bNf8pwZJLWmDV75rZLtgTpjTv%2FWoFlgHiTZngFNwKmYXxBAfORoMZCQO2KsjijAbu%2FG%2FSjLDb9Hi2QUCkgEaAPmluXH0NfxLpbA0vbvO0NGzsuSTL%2BqYPC41A1WctVEJT%2BAZG83U3MatUw9UFFF%2BSuEtqMbIHFQVLEhTCUX6RzRcgqVPIin2KuZVpSLYB8%2FSNH0xUeUF5MUdkNYrfsDZH&X-Amz-Signature=c65fb328b657e34f4170324e336b651a77fba85037283f9222c9958ce1d7f633&X-Amz-SignedHeaders=host&x-id=GetObject)

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
