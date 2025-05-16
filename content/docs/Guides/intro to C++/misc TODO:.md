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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRKFIE5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo2FLRShGAdYbXgI86OSBCxFIgVW9v%2FgdxOj0Bv4J64AiEAuEWgodxYblXJ5mMhXcN0fwBIMDDDoKxX4%2BiO7cbb8Qgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHymY96wxJsMOCt3myrcA7e2C9JVxX8WUJyw3dJkWauEYC6C2KWSrvcZNmMmuh%2B1B%2F89xykUW3reOrtXWp9WKb9MsvBz26sYaW%2BNiYee1nNTWJ3T4I6dXjmMzqalcaiiZjODGj%2FcCcYD4wbdtHbt%2BAIwl%2Bv6rK2x2oyXz85IdLu%2BMgqj5gA8LyF10SaLHUu9mNElRYeATfoV9E43FIGy%2FTDhzfFjsnDpOz6UirS4L6L6faPq0iJF4iTsYQilfvaPBsjq4CGSN15xTyOWj%2Be7ZCOnGbWxnBvOsE0HAVRjq%2FKI0KNspsN%2F7dI4TTLnhDFZbYCwsUk7Da3epGCcAOr38iyfL7FA2njX66tP20%2B%2FVtgwVTo2gMCoucKBDxKMkr0KivGgE3cjMad3TX5m6wiI3SlTJlgh69P9VSbc8%2FpPkYMZIKgBWB%2BQAAR7N7d%2FuHIyl3fL%2BA1aw8QxBXJUs7hpCGFS4BcY5A3n2mjdFKZiHv4YQ4pyo79cdlUnukxXdMB%2BdBQcU62NlORxQCK6thI9IedkJnZ%2FJJSicwzkUhkaX9ip1hRc4a4MIc17xfDkxCINQKMW1k6ZBwYZBxWvXQdqSy03ACI1hh2LVIbzSR5Y%2BZmtJiVMc6xpRHRHRo%2B9CBZ9GYhLj%2BqpqpGoJl9%2FMPbDnsEGOqUB5JzeCM2fn9CVIXhXw4ozRSd3NJby%2FCSCzKabepit0qWMiQsHIK6AYmM52vud4Xda6j2cdBrsnaVzoK7TaCLZw6HC2jKY3J6ATF%2FdAIy%2B%2BbBlY7k6%2BtZKyDRRZGouXLezg0hVdyDYMv7H%2FrXHzPIdyuQbPVYSlROFYLITLl%2FEoexKA78OxaGNYZVZMOzH7u%2B69pNnAIYI7n1WcWmmLvMFYguPgX7b&X-Amz-Signature=5e95af772db87518cfcdd04697dee92a927727183448d11d31a4eef026f6ddab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRKFIE5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo2FLRShGAdYbXgI86OSBCxFIgVW9v%2FgdxOj0Bv4J64AiEAuEWgodxYblXJ5mMhXcN0fwBIMDDDoKxX4%2BiO7cbb8Qgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHymY96wxJsMOCt3myrcA7e2C9JVxX8WUJyw3dJkWauEYC6C2KWSrvcZNmMmuh%2B1B%2F89xykUW3reOrtXWp9WKb9MsvBz26sYaW%2BNiYee1nNTWJ3T4I6dXjmMzqalcaiiZjODGj%2FcCcYD4wbdtHbt%2BAIwl%2Bv6rK2x2oyXz85IdLu%2BMgqj5gA8LyF10SaLHUu9mNElRYeATfoV9E43FIGy%2FTDhzfFjsnDpOz6UirS4L6L6faPq0iJF4iTsYQilfvaPBsjq4CGSN15xTyOWj%2Be7ZCOnGbWxnBvOsE0HAVRjq%2FKI0KNspsN%2F7dI4TTLnhDFZbYCwsUk7Da3epGCcAOr38iyfL7FA2njX66tP20%2B%2FVtgwVTo2gMCoucKBDxKMkr0KivGgE3cjMad3TX5m6wiI3SlTJlgh69P9VSbc8%2FpPkYMZIKgBWB%2BQAAR7N7d%2FuHIyl3fL%2BA1aw8QxBXJUs7hpCGFS4BcY5A3n2mjdFKZiHv4YQ4pyo79cdlUnukxXdMB%2BdBQcU62NlORxQCK6thI9IedkJnZ%2FJJSicwzkUhkaX9ip1hRc4a4MIc17xfDkxCINQKMW1k6ZBwYZBxWvXQdqSy03ACI1hh2LVIbzSR5Y%2BZmtJiVMc6xpRHRHRo%2B9CBZ9GYhLj%2BqpqpGoJl9%2FMPbDnsEGOqUB5JzeCM2fn9CVIXhXw4ozRSd3NJby%2FCSCzKabepit0qWMiQsHIK6AYmM52vud4Xda6j2cdBrsnaVzoK7TaCLZw6HC2jKY3J6ATF%2FdAIy%2B%2BbBlY7k6%2BtZKyDRRZGouXLezg0hVdyDYMv7H%2FrXHzPIdyuQbPVYSlROFYLITLl%2FEoexKA78OxaGNYZVZMOzH7u%2B69pNnAIYI7n1WcWmmLvMFYguPgX7b&X-Amz-Signature=f771bd43129c7849e772f5dc3a2a21468333577eec0783ef6c5371d83b7ea20e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
