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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVMZ4G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDgHDcNnIJtN%2BHMFGMYZy29K0ki%2FMw7tShjV1eahXju2QIgB4jcY9bBjWbWQvNTXiCo2blDpNEI4ESggaXJFqMcSfoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLCryOCZnxzFrN148yrcA5mzNikPLftviJKz%2FD7gdZ2LsaocSemzahUGUYLIZaTaIJa65Kmcm6B0AVcyi2uDnGmy1B%2BULwixrI0G%2FoGtRyhPD4vaCbzkhme%2FSBYLLiMIybE%2BtibyBVxuAr%2F5EZF%2BNN6qMiUHXisQ%2BiQjjaEYtpypQAlJf6YYhzjauqn3DIQ4%2BtWr3E9jMCmTeFjRyKIusJupkAs1MU3gGXUOFKnWm9mvOp8PBKaRV%2By5sQMB7Y3912EUgsviRi2J1c73phJCQASt6VV79C5QutsyhQOdUyyjRTz6VgkhTapMZeGp8ueoQy%2BXvUUTLdyuL1LmHg1VwVufWYPKs3mtvWUtF2ET0cywaPWY8xQPtnuxcFB6Bv4C8weIVC29qK5yiotI94wSUrBKcVMNT4ENETthl4oR5Lum03qKq4T82f35w59BUAK2ISTaIC04IqAkG%2Bo%2Fi8dd3Xjz4qPmUr9H7Ui8lUn6IaBSI5a6Tkwi2blEN2zqduJFa4cinH2a3W52%2Ber0U%2FCnmrbqWfQ1%2BO7hIdSPKBKibULtH4R2G9HxrlRItbvEnlBHZhKMfx%2Baotoonuz%2FEhJLI%2FJ1%2BN%2BbqRw%2BWeLvA5xHNl4QUiJxA3SblIHYrX%2F3N%2BBMn33mYS36xxVM4M2rMIDJ4cMGOqUBsMgJurrbQJSDt0%2BEhcfgFy9qXOygG1yA5M9g%2Fjn6uOhjcmR9P8PO1FZMPYEdhz7cXiEuYdwg%2Bo4j0INA1EQmPgZzQdyNs0AavmsHoPknwcszGcANFdTkyMIdqr73JgyLYC3e3eXlKNePaYU5rTRjJ2NPatv8Q3wuswfYPAKKougoMHEyR%2BKmNPwASrA0c6Kvwf1J6O6eOpybFM3UwrWrrIogKrDn&X-Amz-Signature=8a69120803040ca4e45eb2a76a520208e22e8414cd29ee302a9c9644846688f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVMZ4G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDgHDcNnIJtN%2BHMFGMYZy29K0ki%2FMw7tShjV1eahXju2QIgB4jcY9bBjWbWQvNTXiCo2blDpNEI4ESggaXJFqMcSfoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLCryOCZnxzFrN148yrcA5mzNikPLftviJKz%2FD7gdZ2LsaocSemzahUGUYLIZaTaIJa65Kmcm6B0AVcyi2uDnGmy1B%2BULwixrI0G%2FoGtRyhPD4vaCbzkhme%2FSBYLLiMIybE%2BtibyBVxuAr%2F5EZF%2BNN6qMiUHXisQ%2BiQjjaEYtpypQAlJf6YYhzjauqn3DIQ4%2BtWr3E9jMCmTeFjRyKIusJupkAs1MU3gGXUOFKnWm9mvOp8PBKaRV%2By5sQMB7Y3912EUgsviRi2J1c73phJCQASt6VV79C5QutsyhQOdUyyjRTz6VgkhTapMZeGp8ueoQy%2BXvUUTLdyuL1LmHg1VwVufWYPKs3mtvWUtF2ET0cywaPWY8xQPtnuxcFB6Bv4C8weIVC29qK5yiotI94wSUrBKcVMNT4ENETthl4oR5Lum03qKq4T82f35w59BUAK2ISTaIC04IqAkG%2Bo%2Fi8dd3Xjz4qPmUr9H7Ui8lUn6IaBSI5a6Tkwi2blEN2zqduJFa4cinH2a3W52%2Ber0U%2FCnmrbqWfQ1%2BO7hIdSPKBKibULtH4R2G9HxrlRItbvEnlBHZhKMfx%2Baotoonuz%2FEhJLI%2FJ1%2BN%2BbqRw%2BWeLvA5xHNl4QUiJxA3SblIHYrX%2F3N%2BBMn33mYS36xxVM4M2rMIDJ4cMGOqUBsMgJurrbQJSDt0%2BEhcfgFy9qXOygG1yA5M9g%2Fjn6uOhjcmR9P8PO1FZMPYEdhz7cXiEuYdwg%2Bo4j0INA1EQmPgZzQdyNs0AavmsHoPknwcszGcANFdTkyMIdqr73JgyLYC3e3eXlKNePaYU5rTRjJ2NPatv8Q3wuswfYPAKKougoMHEyR%2BKmNPwASrA0c6Kvwf1J6O6eOpybFM3UwrWrrIogKrDn&X-Amz-Signature=37a984df9bcfdd1506e2bbdcac65dbbdff82553dc3bd4c29f8dc3d1e133d3e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
