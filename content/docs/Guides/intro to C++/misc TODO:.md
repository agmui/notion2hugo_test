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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFPLVZ7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGESZOyUBwUhJFQ1KbItp26NcjDJ2LA078L70sHyNp8QIgI61EGqMCG6CI1F9%2Bnpo%2F%2F7fIypuYkO3jzadaZO287XYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYXWAiOISr2%2BuWGMCrcAy6r0PcwoSofqsQGA3NAUMFuaFfsyQj5wI7mzV2JPhHTacA7NHj8sNYQpdi4gcfdWbEPx%2FED5shiMKtCFVYsvZKHFt0%2BhiJcx9G33riUb5IUUYtQ2x%2BXhjofgxQOA1yz8u7OGN0e8tJEr%2Fmmf4PC0SjsNVgqe1dtFBABnJDNhVLsKK7dNEoPdeOqN0Mv3qU4WOExpfZ7Qhfsqw5rYQ6BjH8IdQxWelc9nfdKKxq93aXhgguTn53kJRd6SMS0diEHU06YFzcjIWQx4Y6HevREwdebnZrfzgUZRqiWsilIZ8IUQBwJ%2BWaA4hjubeX9uemAZrGlBncey33cZsvbVWBja13cxsgqYUPSs1iAzuZzCCLfX%2FBJioQehzJ1se2hkMqJeF0RcEC6xbEf%2Bmu0gn3MQeQdjBdNCPUb2bEiLhceb6waLH977pO55npYJd7InjeKfkzQe1DJ%2B%2BijlD5%2F5TiVt75HT3t%2BxvTQ1Zgjo3BuGqee7w7%2Fr8HO4hahbiXXwTNrFhD73Ok47vAJPHh3REVXRh5MA21RUmilzuj3V3Cg8Pa7iv9C%2F%2F6zvujKeuY0HMI0GCz3sk31ylzJPOpMQIoyaJUaiKcSAt1UIO%2FyxMJb0iKJWD%2BV0yKLaDqPgkkFMOijjcMGOqUB7PQygCt9JsNdk0aDwbHTpzXRl3V%2BhTIUMJQ9NUEs4jLKiFMUPqxdhQ8LQGL8veaWd9cG7cOVdvkqKDLbPUwKfNAP6wXqxmEhJpr4oSDYqp74UD%2BnSHC4yQtM7l3Pr9bjHigxGLeqqOvnW%2FuVzehEJyI5zKN5z87tCd8xXLKTsZvCe%2BOucuBoDOlIhXxwsiq9QxH60kK34KhhYdzDQVLeGmPUnSLP&X-Amz-Signature=c8379b708dcd9a7c864dd59786fa816a6cc2fa241be90ed8b1877149f87c5825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFPLVZ7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGESZOyUBwUhJFQ1KbItp26NcjDJ2LA078L70sHyNp8QIgI61EGqMCG6CI1F9%2Bnpo%2F%2F7fIypuYkO3jzadaZO287XYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYXWAiOISr2%2BuWGMCrcAy6r0PcwoSofqsQGA3NAUMFuaFfsyQj5wI7mzV2JPhHTacA7NHj8sNYQpdi4gcfdWbEPx%2FED5shiMKtCFVYsvZKHFt0%2BhiJcx9G33riUb5IUUYtQ2x%2BXhjofgxQOA1yz8u7OGN0e8tJEr%2Fmmf4PC0SjsNVgqe1dtFBABnJDNhVLsKK7dNEoPdeOqN0Mv3qU4WOExpfZ7Qhfsqw5rYQ6BjH8IdQxWelc9nfdKKxq93aXhgguTn53kJRd6SMS0diEHU06YFzcjIWQx4Y6HevREwdebnZrfzgUZRqiWsilIZ8IUQBwJ%2BWaA4hjubeX9uemAZrGlBncey33cZsvbVWBja13cxsgqYUPSs1iAzuZzCCLfX%2FBJioQehzJ1se2hkMqJeF0RcEC6xbEf%2Bmu0gn3MQeQdjBdNCPUb2bEiLhceb6waLH977pO55npYJd7InjeKfkzQe1DJ%2B%2BijlD5%2F5TiVt75HT3t%2BxvTQ1Zgjo3BuGqee7w7%2Fr8HO4hahbiXXwTNrFhD73Ok47vAJPHh3REVXRh5MA21RUmilzuj3V3Cg8Pa7iv9C%2F%2F6zvujKeuY0HMI0GCz3sk31ylzJPOpMQIoyaJUaiKcSAt1UIO%2FyxMJb0iKJWD%2BV0yKLaDqPgkkFMOijjcMGOqUB7PQygCt9JsNdk0aDwbHTpzXRl3V%2BhTIUMJQ9NUEs4jLKiFMUPqxdhQ8LQGL8veaWd9cG7cOVdvkqKDLbPUwKfNAP6wXqxmEhJpr4oSDYqp74UD%2BnSHC4yQtM7l3Pr9bjHigxGLeqqOvnW%2FuVzehEJyI5zKN5z87tCd8xXLKTsZvCe%2BOucuBoDOlIhXxwsiq9QxH60kK34KhhYdzDQVLeGmPUnSLP&X-Amz-Signature=ec742eaad619c568e0fc978240f01262cde57f4691b0ad69f0732bf5bf53d15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
