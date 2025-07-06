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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MOPYSN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDjOahayMzswWd3zxJp9Sj0Nc%2BODYVAa9qQvs0qjhKa1wIgYd9NGJoctOA3AufRmMyMzIc8yrVKXMnXC2Y5nSnApnkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOzhUX4h8hijK%2FFlGCrcAxYJNEX%2BAlN0cg%2Fg7BaYD9%2BGbLdH7hoKWzav%2BEm6QS2cnrb7Jm5wPNuiXl68kfMixPr9BtRN4rup4oYiASK43FVuOL079ZxLFOKLis2%2BRcYmmwbgqxKwX9M9uPz4XC0eZEDJTgUVy0EvVv7YuQ%2FSoPjLlViX5%2FlUxV4YHIgKPZY0hgS4CAoFqZ3oYHgDbeNnt29LcxIipA6wkXk2wjdz5UX74Mmm0u%2FxnlPorUJETJ697eKkt1AvEx7NFPnzd%2FDwcvFrbtAHGh3OzYGq6IDOspeP9vOTBSM6giF3kZ9LfOANzJqNuSc6I3JD8wpOq3724iuAFN749SlVS1sW9Dweb4R1vIeVA8PSqFfYDgnd1oHRW0EKQqhgY7b36KekKGb%2FNatJbgwJJBsO9Tkm98%2Bu121XED7RgrJgcB1aLlh6pWy8PnvEyTOixRmR2EeW8e%2F7KKCmbVOxB3hju1%2FZ3ZaemsDEurs%2BigvDuhH1cP9hzZfchQbL5ozjNDOJVaFNeGZdldIF0i05K8WwDchdGsRzjl6wnU3g7CyuBzqqUm67NDNG8r9XbQgJfzstoiMipdPX3ThgV9Vwr1jjestpauctVFUbmp2tdKQedeJ%2B7YGIWiaRybZc8wgE5i3E2YTsMKvuqsMGOqUB9%2Fx4eB%2BahJLMjm82CZCMseaBtW74KqRl3S6WASzqijMFn8xmRDHtVXbNvXEk4sCysYmeFkIWfYF1T0%2FroPo3GIpk4Q%2BpKXawkRzzIiSIn19Ds0vHxEX3HzZpPS5Z9ig5nkiIcrbvzX9I1O9rd6fvnwoQlYooMtOFqAFQdbS%2BwsibBgahdfCob5jCLHdqwI9GTVxrnBPuwnWJ1j4dmCN327g0oITs&X-Amz-Signature=1e4fb3805047b89a5b4e316ca57f3df49ba1e5947f5ee66bfbf0da5b342fab0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MOPYSN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDjOahayMzswWd3zxJp9Sj0Nc%2BODYVAa9qQvs0qjhKa1wIgYd9NGJoctOA3AufRmMyMzIc8yrVKXMnXC2Y5nSnApnkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOzhUX4h8hijK%2FFlGCrcAxYJNEX%2BAlN0cg%2Fg7BaYD9%2BGbLdH7hoKWzav%2BEm6QS2cnrb7Jm5wPNuiXl68kfMixPr9BtRN4rup4oYiASK43FVuOL079ZxLFOKLis2%2BRcYmmwbgqxKwX9M9uPz4XC0eZEDJTgUVy0EvVv7YuQ%2FSoPjLlViX5%2FlUxV4YHIgKPZY0hgS4CAoFqZ3oYHgDbeNnt29LcxIipA6wkXk2wjdz5UX74Mmm0u%2FxnlPorUJETJ697eKkt1AvEx7NFPnzd%2FDwcvFrbtAHGh3OzYGq6IDOspeP9vOTBSM6giF3kZ9LfOANzJqNuSc6I3JD8wpOq3724iuAFN749SlVS1sW9Dweb4R1vIeVA8PSqFfYDgnd1oHRW0EKQqhgY7b36KekKGb%2FNatJbgwJJBsO9Tkm98%2Bu121XED7RgrJgcB1aLlh6pWy8PnvEyTOixRmR2EeW8e%2F7KKCmbVOxB3hju1%2FZ3ZaemsDEurs%2BigvDuhH1cP9hzZfchQbL5ozjNDOJVaFNeGZdldIF0i05K8WwDchdGsRzjl6wnU3g7CyuBzqqUm67NDNG8r9XbQgJfzstoiMipdPX3ThgV9Vwr1jjestpauctVFUbmp2tdKQedeJ%2B7YGIWiaRybZc8wgE5i3E2YTsMKvuqsMGOqUB9%2Fx4eB%2BahJLMjm82CZCMseaBtW74KqRl3S6WASzqijMFn8xmRDHtVXbNvXEk4sCysYmeFkIWfYF1T0%2FroPo3GIpk4Q%2BpKXawkRzzIiSIn19Ds0vHxEX3HzZpPS5Z9ig5nkiIcrbvzX9I1O9rd6fvnwoQlYooMtOFqAFQdbS%2BwsibBgahdfCob5jCLHdqwI9GTVxrnBPuwnWJ1j4dmCN327g0oITs&X-Amz-Signature=077bda6ba6f6706b4f7710e8f41e53387a2e5fe4b4127c7a9c014b216dae919c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
