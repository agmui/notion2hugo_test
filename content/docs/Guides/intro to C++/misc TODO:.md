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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRXNTRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAGpmAMzAHPY3si0SLSvo9fF5JY%2FFWEDrtzAZRbVToWEAiAtpwXuN9IBZak30ooWJdVww6zT2K28OXMAC%2BGM7pI7nSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVGpdFaDslR6zIzs8KtwDlKehHDMAa2Rc2H9RIVG9l6%2BsxajP1lgOXL56020dQeVxAQgUNB7UtrUp6AERGg1XidOHqT%2B9O8m0me48sj1x%2F1%2BxH4LhbwIgphdqVtor0NCV7U5EjYTV1th7x9BO%2BWnru%2B56gSRBMDUIyOkGSjMoWeH8KzoVbOpt95uwizXZyRJh8zLUFKkkfLh7QZQf%2BvdlU%2FD9JG6eEk7edy8tJ2rF%2B%2FWq7oiODKLbfXpoGyymbRi%2B3Ki1LGfZOa2txHZqDw0OWjD5lxRk6%2FVGWamy9Tl3AHMqCS2yPGMEHwRuCeayWEqIDCYiaBbBWi51oVAlWAHKu2bCO2JwdPiCzF3WyXy%2FR1PjXsOUv9oWriG8rzJ44SWgFl0l5g80dmH1xVl7nu%2B5eFmljo5WaxvkmAz1MIjxuFM9Q5CloP28YNxhg0MhvYH4Yssz3sJ2BT%2BI43AcWv0CGV%2BZBlcpqR26A%2B%2F8gpfN3CPjzpdqgjnJgZVfyFo%2BwWWHQmM0qx3kdq6UoWvX%2FYR6DePRalIVwE340XVLNviZw%2FAHSc%2BDUm3XhmUlONHYw3bV3iGW5aut4GLLwovBvSOwYZjAIIuiy9zSvH3h1aBC4Dbu2jgfBtYuJBpvQtmA8lC1VQYZzbsKIAvEx3Qw3NmIwQY6pgFMeCtaFIyBI%2FDSA1xQKaE50FqUHgi26OQq9%2B2tcrrIVqCYeSUwPk%2BvlUeSj5JfNjoqVPlxKI7pg4VaS0O%2BSApY1PlU3MG00XhouwNh4UBaGBo1II7PeVtZuMU8HSOlnU2EKyZPZ2zg%2FLr36aDfQksnx071Z6ldul2sHbdisjgMvVZg9aMpb8e2RreHQxioWPhNFFgqGTVkShhjYCf%2BuBiW251rYL5e&X-Amz-Signature=49d86ab8a1f669786486bdb87fce97ba46d1c2c8cfe8907f4b23ad80dbd2820e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRXNTRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAGpmAMzAHPY3si0SLSvo9fF5JY%2FFWEDrtzAZRbVToWEAiAtpwXuN9IBZak30ooWJdVww6zT2K28OXMAC%2BGM7pI7nSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVGpdFaDslR6zIzs8KtwDlKehHDMAa2Rc2H9RIVG9l6%2BsxajP1lgOXL56020dQeVxAQgUNB7UtrUp6AERGg1XidOHqT%2B9O8m0me48sj1x%2F1%2BxH4LhbwIgphdqVtor0NCV7U5EjYTV1th7x9BO%2BWnru%2B56gSRBMDUIyOkGSjMoWeH8KzoVbOpt95uwizXZyRJh8zLUFKkkfLh7QZQf%2BvdlU%2FD9JG6eEk7edy8tJ2rF%2B%2FWq7oiODKLbfXpoGyymbRi%2B3Ki1LGfZOa2txHZqDw0OWjD5lxRk6%2FVGWamy9Tl3AHMqCS2yPGMEHwRuCeayWEqIDCYiaBbBWi51oVAlWAHKu2bCO2JwdPiCzF3WyXy%2FR1PjXsOUv9oWriG8rzJ44SWgFl0l5g80dmH1xVl7nu%2B5eFmljo5WaxvkmAz1MIjxuFM9Q5CloP28YNxhg0MhvYH4Yssz3sJ2BT%2BI43AcWv0CGV%2BZBlcpqR26A%2B%2F8gpfN3CPjzpdqgjnJgZVfyFo%2BwWWHQmM0qx3kdq6UoWvX%2FYR6DePRalIVwE340XVLNviZw%2FAHSc%2BDUm3XhmUlONHYw3bV3iGW5aut4GLLwovBvSOwYZjAIIuiy9zSvH3h1aBC4Dbu2jgfBtYuJBpvQtmA8lC1VQYZzbsKIAvEx3Qw3NmIwQY6pgFMeCtaFIyBI%2FDSA1xQKaE50FqUHgi26OQq9%2B2tcrrIVqCYeSUwPk%2BvlUeSj5JfNjoqVPlxKI7pg4VaS0O%2BSApY1PlU3MG00XhouwNh4UBaGBo1II7PeVtZuMU8HSOlnU2EKyZPZ2zg%2FLr36aDfQksnx071Z6ldul2sHbdisjgMvVZg9aMpb8e2RreHQxioWPhNFFgqGTVkShhjYCf%2BuBiW251rYL5e&X-Amz-Signature=5210b0a89bfc3289858d2736bf1f29f171bdceb8a52f40e9019e4047634719b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
