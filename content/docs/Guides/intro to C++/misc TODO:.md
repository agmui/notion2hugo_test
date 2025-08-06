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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKCK36Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDY8%2BgrulqnG5lJqzYrEN8HkLuuQssQSyI0dCrMcUcATwIgU7Y1yzWHIIVcE4dOAnAnKFp%2FDC9FN3aFsIcgV5CNnI4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMo%2F2vIqg2HQMWf2tSrcA340ZG5%2BSsd65eSQ%2FcL8YIoNCV5he4XWWsl3FNmn1iXTD8ogx%2F%2Bp59ieRRz25DVoSqJI4yKzDxYOnOnS8J8Gmj6L8PG5Cn0PQAyd3Bd2DQFlAAcAR4iWMvp3KkTaWa5sYIsv6MK9iAfQsJfv73NS0TiQOv6RtkgztYtSSlsf54R%2FCYB7RmZhQvAtMsYsQfomVVtP9iUGXVlpcXbq61IXw8ScEhvTLb7LbGn13vo6sfuW02ZFHjH28bmkjxEHvHa%2B0L1eTHJfVC9%2Bgvwu%2FvkPUd7Ue3ke3YN7QNpu%2F59OPvQOVxqVmK%2F7oqlxWVP0pEshB%2F7tVDZmQggnzVQLPRPYmFpDtUu%2FBYc0IWa5vL8F8ELdeNU861oyjKyTT2%2BB7zPFB7hzyJQchNH2%2FtLwCFMDXyr5Ar%2FCo5eE3Wf0fQifKyTH7rxdBe2%2Bgngl1tzn0AMLS4Hm1YTgD8znY7sUKWYDf1xbfrofzyUgo1RfNqUW8jGZVXcOT0AuwMQAD8Ld7w12wq8sYDrg8WqCE7XLTYO2h04CGa8Ls5ZnruU7WqVw8S3XxluycXNF%2F73706tHevHDvLkZvj%2F3xw2K%2BM5MS9R%2BwWhKM0mqdUQUjSlysPdu%2FWKyOkd8HC4BXgHlCWhyMLeZzMQGOqUB81s0CRGD6SnM%2BYyRrjRWYJhlnmMFOMtUBi8HFLbjjz%2BTOPXucRCMQfoUb%2BqRkIWhkY5fZnrdRgW40Txj7OlsATF40xIUpHKoOraA9HkhP5jivCJwZ7RWCeYhyBI4p9%2BJgC2snoVHX8xtY8eTRn8U73EcJYF3%2F3ymX%2FuL90T4%2BBZyVEYzHfG0oBwye5UbgvzPdNezsU5ihXwH1rdWWKDh%2BguL4wqR&X-Amz-Signature=5f72f5a8f64722ed7728e161fe34fe3885cbb7735a4e08ef89056093169099a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKCK36Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDY8%2BgrulqnG5lJqzYrEN8HkLuuQssQSyI0dCrMcUcATwIgU7Y1yzWHIIVcE4dOAnAnKFp%2FDC9FN3aFsIcgV5CNnI4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMo%2F2vIqg2HQMWf2tSrcA340ZG5%2BSsd65eSQ%2FcL8YIoNCV5he4XWWsl3FNmn1iXTD8ogx%2F%2Bp59ieRRz25DVoSqJI4yKzDxYOnOnS8J8Gmj6L8PG5Cn0PQAyd3Bd2DQFlAAcAR4iWMvp3KkTaWa5sYIsv6MK9iAfQsJfv73NS0TiQOv6RtkgztYtSSlsf54R%2FCYB7RmZhQvAtMsYsQfomVVtP9iUGXVlpcXbq61IXw8ScEhvTLb7LbGn13vo6sfuW02ZFHjH28bmkjxEHvHa%2B0L1eTHJfVC9%2Bgvwu%2FvkPUd7Ue3ke3YN7QNpu%2F59OPvQOVxqVmK%2F7oqlxWVP0pEshB%2F7tVDZmQggnzVQLPRPYmFpDtUu%2FBYc0IWa5vL8F8ELdeNU861oyjKyTT2%2BB7zPFB7hzyJQchNH2%2FtLwCFMDXyr5Ar%2FCo5eE3Wf0fQifKyTH7rxdBe2%2Bgngl1tzn0AMLS4Hm1YTgD8znY7sUKWYDf1xbfrofzyUgo1RfNqUW8jGZVXcOT0AuwMQAD8Ld7w12wq8sYDrg8WqCE7XLTYO2h04CGa8Ls5ZnruU7WqVw8S3XxluycXNF%2F73706tHevHDvLkZvj%2F3xw2K%2BM5MS9R%2BwWhKM0mqdUQUjSlysPdu%2FWKyOkd8HC4BXgHlCWhyMLeZzMQGOqUB81s0CRGD6SnM%2BYyRrjRWYJhlnmMFOMtUBi8HFLbjjz%2BTOPXucRCMQfoUb%2BqRkIWhkY5fZnrdRgW40Txj7OlsATF40xIUpHKoOraA9HkhP5jivCJwZ7RWCeYhyBI4p9%2BJgC2snoVHX8xtY8eTRn8U73EcJYF3%2F3ymX%2FuL90T4%2BBZyVEYzHfG0oBwye5UbgvzPdNezsU5ihXwH1rdWWKDh%2BguL4wqR&X-Amz-Signature=14d38b1ea22c888f78fb231bf10c4d4b9caa9a33878dbc2f90863d7a766e2e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
