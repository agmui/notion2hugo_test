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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2YPXJKB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IYqr4M1HXqYBkLqVVQcRQUBBM78ep4etfbv2V2OwBQIgHri6%2BF7R5ETI6hUOwt%2BRteY7lrTM%2FokSFSrHKLC5i9UqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPD45z8cDZxTb34XCrcA%2Fo4WMb3ypqr%2FjQbMXS%2B%2BNoj4MMeewLJl5rLmhAIvpVmms1Q7csuoQPhe9W%2Fn%2Fvr6PafI5y%2F8SCDnMe3PwQfKnW1bRhcE7D%2BH7MkIU%2FD8muZEuNDSYN56f0lqQeEXzgEXtBrAGSx5l24gBEag%2FNGUfLq7jE0zQ2g0EF%2F0qsqz%2B2LokCWl8VqGhxCgQ4iWFOoyY5S71cfZ7yZm0e%2B0%2BwxS%2FH8KTNBw5jMHuedeYy%2BXJI41YVLlJk5XfahPN4LeI3VhkTl6XkdxJYlyiBp0eiqd27nnCVB74bCfNpKOvbJ3KpWLLg4XZmnr7fnCf%2FKGUv5G7otBYmAqlzgTD3220lsiweVi7D%2BQVTqobgRP%2BzpjC7UfvPt%2BYKWElqWzVEv%2BAA1%2FUgNY7Mltrz5RqQBeVP621u6UW7E7206oyrtevqYdKdgfHEJzKDomeK0uQM%2BVZkjmSt03dST3gCXEgKcQqNC8LqKB2e4%2FNbrMAtOp%2BxOGIk3IEvSWHPa3US1ZDT67PXfe5mfZw3xJmIH%2BcPwSNJx3HyAp%2BKjxRVvIwyE2FOpEUboL7DKmj3GjiRunxxciyNjiGshi2Gj%2BmOMo%2FXdPke6x%2B1YosnaQPVCNqGNvzy2FZVLoWHCW362Ba9Lko%2BGMIHFtL0GOqUBLXuE%2FIBoh24BCMDeXCr%2FEuEEGlkC7WK2wNltBkdQ5AFVJqC%2F4SUT1RCDEno0uYzHZLuCkMzm%2Fhc7xmCZHM%2BqlkrR7eXxGtxJqQRKSpWn7JPkUayvONCfJJLGrT3ZuKNhXVMqhrs2aNM6g%2Bia%2F9%2FibJeyW2MVXgWVF7kwuIxJ4gvvFRDaTucKwZIUeF3HeiJjZ4r4PwHuOxB9%2B%2B0DeLzy686CdKdE&X-Amz-Signature=82284e3cb8136be3a2a01b93de5776abc610253e90a69b6b414a1c3cd5e6fbf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2YPXJKB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IYqr4M1HXqYBkLqVVQcRQUBBM78ep4etfbv2V2OwBQIgHri6%2BF7R5ETI6hUOwt%2BRteY7lrTM%2FokSFSrHKLC5i9UqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPD45z8cDZxTb34XCrcA%2Fo4WMb3ypqr%2FjQbMXS%2B%2BNoj4MMeewLJl5rLmhAIvpVmms1Q7csuoQPhe9W%2Fn%2Fvr6PafI5y%2F8SCDnMe3PwQfKnW1bRhcE7D%2BH7MkIU%2FD8muZEuNDSYN56f0lqQeEXzgEXtBrAGSx5l24gBEag%2FNGUfLq7jE0zQ2g0EF%2F0qsqz%2B2LokCWl8VqGhxCgQ4iWFOoyY5S71cfZ7yZm0e%2B0%2BwxS%2FH8KTNBw5jMHuedeYy%2BXJI41YVLlJk5XfahPN4LeI3VhkTl6XkdxJYlyiBp0eiqd27nnCVB74bCfNpKOvbJ3KpWLLg4XZmnr7fnCf%2FKGUv5G7otBYmAqlzgTD3220lsiweVi7D%2BQVTqobgRP%2BzpjC7UfvPt%2BYKWElqWzVEv%2BAA1%2FUgNY7Mltrz5RqQBeVP621u6UW7E7206oyrtevqYdKdgfHEJzKDomeK0uQM%2BVZkjmSt03dST3gCXEgKcQqNC8LqKB2e4%2FNbrMAtOp%2BxOGIk3IEvSWHPa3US1ZDT67PXfe5mfZw3xJmIH%2BcPwSNJx3HyAp%2BKjxRVvIwyE2FOpEUboL7DKmj3GjiRunxxciyNjiGshi2Gj%2BmOMo%2FXdPke6x%2B1YosnaQPVCNqGNvzy2FZVLoWHCW362Ba9Lko%2BGMIHFtL0GOqUBLXuE%2FIBoh24BCMDeXCr%2FEuEEGlkC7WK2wNltBkdQ5AFVJqC%2F4SUT1RCDEno0uYzHZLuCkMzm%2Fhc7xmCZHM%2BqlkrR7eXxGtxJqQRKSpWn7JPkUayvONCfJJLGrT3ZuKNhXVMqhrs2aNM6g%2Bia%2F9%2FibJeyW2MVXgWVF7kwuIxJ4gvvFRDaTucKwZIUeF3HeiJjZ4r4PwHuOxB9%2B%2B0DeLzy686CdKdE&X-Amz-Signature=c8628affc926334237608a7ad719ea45a6080cd7e5fee8322459b0d3e9995cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
