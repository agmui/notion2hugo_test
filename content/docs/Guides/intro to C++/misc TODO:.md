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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYKMB3X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF09BQGm1%2FoLlRcHKFcOcbz6a2qNuuiKVnS3XuE3I3lyAiEAq%2BK5P4JB%2BZmmNh0aD2jiDew6ZF6BuDT0zuz6KgtgQroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLI2MYt7JZKWxdqvircA6TyX2FIvpKZeGDOO3kW6Glu9jfn7NXYnwKNyQnpbKDpd62XE0MxtiGXM9E%2FeVvtegW5jCxfemXui6oFhY0navK6tL1%2BRxYF3JpxnXjLa0CvkpWo4%2B6WVk1ePBY2nC1cBAd%2BHpoztG%2FmtnoJgtizwBysY7nO%2FHe7OBuPa5oQiKRHOb1b%2FM0aBsIfUGIlakhQJxKapK%2FeWMpcu3Nhc9yAXWiATOpfra2ahh42p8d9T0UNinKZ259qzQo3e%2B8Io68RX3cSJGb8hljT0enpwuKrBcyDMbvtvZs0yp9tApfF%2FodqOIW7QZnMV5z6dFEBfhqT9lw69lNAbOP8dNc8nHarEd1%2FyXteZ3KQvovR0mNZ8urEYXAHnPf95ELqi3lAVpPPsgsvrEQYTJsTynuCZ4ZYoE0CXlWzgtXj0dNhBvtCPD4U40P9M%2BHDReOo2T%2FCOizHXc%2Bql0nYJIu8is0K7Nglwym7WASXoSyf603MfSyZscU5mL0P%2Bm6jR58MemYGFmss9axYJw%2BqqRHGi2%2BAJGw8Nf2ZMWYr05rC52NB2JIjMkIrSl%2B1zD7pp5WEPLF6PD%2FL9sO2JTd9e3gvAXdKBL41p%2FQG8zN8nrxsjvR0zZCVGLGk3p2dGYw26Sm8YP1dMKywgr8GOqUBmNrQ1yqd1W2zAxd88UXQWHSYuWjgPDGlZPzDTlS3%2B%2BJfVnf2MaVZr1xzap4rCJOsPMXFhOcXtAYxqai9Y%2BE%2Brh51hwMPwf28ZnovCTzEEm5gPRM6enhHiyLiUV%2BWdHRSnWh87NsNIf4pTV79PX5%2BJZProndDAmlJukXuzz8pI%2BckVc9eDtRwXY%2B5E0ZuOwLQOSj0E1Q48i%2B%2Fn5VeW5Y%2B2KYfElX0&X-Amz-Signature=a8a96e5fa31f9893b57bd1b5ca348b8213052cee2d1decca3a1094e05cce589d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYKMB3X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF09BQGm1%2FoLlRcHKFcOcbz6a2qNuuiKVnS3XuE3I3lyAiEAq%2BK5P4JB%2BZmmNh0aD2jiDew6ZF6BuDT0zuz6KgtgQroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLI2MYt7JZKWxdqvircA6TyX2FIvpKZeGDOO3kW6Glu9jfn7NXYnwKNyQnpbKDpd62XE0MxtiGXM9E%2FeVvtegW5jCxfemXui6oFhY0navK6tL1%2BRxYF3JpxnXjLa0CvkpWo4%2B6WVk1ePBY2nC1cBAd%2BHpoztG%2FmtnoJgtizwBysY7nO%2FHe7OBuPa5oQiKRHOb1b%2FM0aBsIfUGIlakhQJxKapK%2FeWMpcu3Nhc9yAXWiATOpfra2ahh42p8d9T0UNinKZ259qzQo3e%2B8Io68RX3cSJGb8hljT0enpwuKrBcyDMbvtvZs0yp9tApfF%2FodqOIW7QZnMV5z6dFEBfhqT9lw69lNAbOP8dNc8nHarEd1%2FyXteZ3KQvovR0mNZ8urEYXAHnPf95ELqi3lAVpPPsgsvrEQYTJsTynuCZ4ZYoE0CXlWzgtXj0dNhBvtCPD4U40P9M%2BHDReOo2T%2FCOizHXc%2Bql0nYJIu8is0K7Nglwym7WASXoSyf603MfSyZscU5mL0P%2Bm6jR58MemYGFmss9axYJw%2BqqRHGi2%2BAJGw8Nf2ZMWYr05rC52NB2JIjMkIrSl%2B1zD7pp5WEPLF6PD%2FL9sO2JTd9e3gvAXdKBL41p%2FQG8zN8nrxsjvR0zZCVGLGk3p2dGYw26Sm8YP1dMKywgr8GOqUBmNrQ1yqd1W2zAxd88UXQWHSYuWjgPDGlZPzDTlS3%2B%2BJfVnf2MaVZr1xzap4rCJOsPMXFhOcXtAYxqai9Y%2BE%2Brh51hwMPwf28ZnovCTzEEm5gPRM6enhHiyLiUV%2BWdHRSnWh87NsNIf4pTV79PX5%2BJZProndDAmlJukXuzz8pI%2BckVc9eDtRwXY%2B5E0ZuOwLQOSj0E1Q48i%2B%2Fn5VeW5Y%2B2KYfElX0&X-Amz-Signature=227432254b12dbdd021a508c64c4bc400220ec44fbd891be78c77c2979a2a962&X-Amz-SignedHeaders=host&x-id=GetObject)

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
