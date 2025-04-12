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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22VPMC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCyQfPEQCkIB9JfCdcPGF71AhYo%2F%2FQGjcq03yEkBojMpQIgJt%2Fl5WUYYvPe3iixpimZNH5kjWQJ4ImUuw61aCux9IsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8b5sJ54afMq0IS0SrcA9eSdxCBBFD9wWpyRjT7l17S%2BKOkHfa3NiCVK5QErhlqHaNk8%2F9s9L5LzqwNpI90UaPRVWNEUVGY9AEllzfNy86GwiOfXsEO8UO4Y2Tq5nQDZq%2FNJlR5y2NizzoPtMM6iYHETXsCznGfiw6O%2Bn1kWjMYWnIdSNEbb85FThEqYLYI1mWvu%2FUnbonnbz6lpEmBXU2ZprOI0lKZBg8zeMdnkxp551sibK%2BQqpnKhhq1KP76vldC%2Fa8DxzEuK9LnB2vleDhrq4um6RbTwAbgh7rSZsxd6TCZ%2FwjRGhA7F0M0XoEZqDSSNMIIxWj1fwgiTio%2FUNCpqzcmDCGGiHOmXpuZ%2ByW2C74a239teTR9lsOEjkLz7zuvB4lyO7FFh7eOXoshZ4HEbm47pMw0N%2FK3lc7cukXZfru8Ba6ETSr1eJBZ960kvdT2ZN2jHITG81kGJWxBOlmLqLYlv7lORIHJDGge4SXeoT9XjhEX6dmVNDJ%2Bc10fj35bTNWPFFro4HVpbUDNqmLtS02BC9HYFVDbv4YO36VuXAYX1XZh32b%2Br2pgAkNoa2ZE0gVAngpfCIg%2BAMOCaU4WEAJ%2BTc51eeczspxMPH0o7maHxI1SXHgba%2BSsDU1WCTFluYLTO5qBshM0ML356r8GOqUBtRKPQe%2BhONN7xgNS2wyIgoupAkSVIQjqHG2Zd%2BzS1FPLmH9lt0xyXKYEUNTPLhvKYRcXxes6VuebX7J23cVvVizSI2bffYJ9jg5SKfgK0FeaAWmNk2pTajiWsggIq3sYX0YncuO7YY3D9wjU5iQBSYPYFkg%2B1bKJ%2FL3D1PopUPhAcNbwdutAVW5vLg6jYYULeqZL5QXCDF57Qf%2B0rcI8LIBByTZN&X-Amz-Signature=56bc96f8a157977a64a858b3c3cbf897bee1934e76bd23c41ebaf23e8c4395f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22VPMC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCyQfPEQCkIB9JfCdcPGF71AhYo%2F%2FQGjcq03yEkBojMpQIgJt%2Fl5WUYYvPe3iixpimZNH5kjWQJ4ImUuw61aCux9IsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8b5sJ54afMq0IS0SrcA9eSdxCBBFD9wWpyRjT7l17S%2BKOkHfa3NiCVK5QErhlqHaNk8%2F9s9L5LzqwNpI90UaPRVWNEUVGY9AEllzfNy86GwiOfXsEO8UO4Y2Tq5nQDZq%2FNJlR5y2NizzoPtMM6iYHETXsCznGfiw6O%2Bn1kWjMYWnIdSNEbb85FThEqYLYI1mWvu%2FUnbonnbz6lpEmBXU2ZprOI0lKZBg8zeMdnkxp551sibK%2BQqpnKhhq1KP76vldC%2Fa8DxzEuK9LnB2vleDhrq4um6RbTwAbgh7rSZsxd6TCZ%2FwjRGhA7F0M0XoEZqDSSNMIIxWj1fwgiTio%2FUNCpqzcmDCGGiHOmXpuZ%2ByW2C74a239teTR9lsOEjkLz7zuvB4lyO7FFh7eOXoshZ4HEbm47pMw0N%2FK3lc7cukXZfru8Ba6ETSr1eJBZ960kvdT2ZN2jHITG81kGJWxBOlmLqLYlv7lORIHJDGge4SXeoT9XjhEX6dmVNDJ%2Bc10fj35bTNWPFFro4HVpbUDNqmLtS02BC9HYFVDbv4YO36VuXAYX1XZh32b%2Br2pgAkNoa2ZE0gVAngpfCIg%2BAMOCaU4WEAJ%2BTc51eeczspxMPH0o7maHxI1SXHgba%2BSsDU1WCTFluYLTO5qBshM0ML356r8GOqUBtRKPQe%2BhONN7xgNS2wyIgoupAkSVIQjqHG2Zd%2BzS1FPLmH9lt0xyXKYEUNTPLhvKYRcXxes6VuebX7J23cVvVizSI2bffYJ9jg5SKfgK0FeaAWmNk2pTajiWsggIq3sYX0YncuO7YY3D9wjU5iQBSYPYFkg%2B1bKJ%2FL3D1PopUPhAcNbwdutAVW5vLg6jYYULeqZL5QXCDF57Qf%2B0rcI8LIBByTZN&X-Amz-Signature=fed92bf4417c6a29ce069a51c93ba8a557fd81c153a7e1a0187fab4ba277cb58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
