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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JEDKZI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTNSTKn8WaK%2F%2FbM%2B0e1xtLmePdEYVA%2BZPzbtqeswFBqgIgL6VHO0%2B46cvQ63za%2BS7VZrbN6yWmZeYLbN7xUcsqPTkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxMjDj7uu6UCfu3CrcA4pIvnGxqd%2F34nXNOPbNQSb7wnztcEmulrL1zEaKGRmOJQpeLCwXS%2Fomt1KwE6fKmmBqBT96D4jNVmdtybHu7ftaTbWAq0eEG9eRmHEmmN5bER1AJ4ikFUJftX1A0CMGVxK5l3veOZsethrJtHNNcjedWPc8yBxnYRFZsusJyHEM26q9hfv4ssg2A7VuuAFs8uffzV%2B2TCXSm4q7YmK%2BCDs%2FpdWXN1z%2BeZ%2F8z3Fpd1r7M34Q4C%2B0MeBwAAQxdXZ7cXGhZ4eor6QPdIwXpAY%2BIURLMGYFh%2FHmwbVgcrMddzG%2B1H4I%2FFVFkvQLOA6ZanQ8yc%2B5eGJoB6nk8mcf1YZAQHznMyV2e6Jb7eVLmM8WCVI7whaVQP8u%2BgTGCgpYFZ6bIutDN1Ex6kzad8EnkqKGFPQDhB1jEogdLHXyBRemQ%2FCFGjd7BLK2OJtesfAxzXKFUvozkiTN8j%2Bj0WTY623CL92gkjnGJQ0pqYNNSjsWvcyw0KUw0auPKr5v0izDMLtZWXD0bMqc7KaVxbUD9lQATWrIhtnPyphN8XubuOAbX6FzQQRvwr0socoZezjIGpyglWeJgvp0d3qg1aoziaEkFCs6dG5SJoRswEEv8yJjjmpx2p8txFq3F52VRzJfMNmtp70GOqUB3Rkaq2q4Y%2FFtgmv4gxElwZxuRlu1kTcJRyLEq64BBy3ycDSAHDgG3McuXZElgBP5yxOpWRjkVXYAQ%2BLZeVxSrdGxAHjJWGneGk8Yze3nms5IGeA7ZCjINvFRIJWln%2FkarD3BbzC8n9A%2BgA2ebexSc3P1Cojd9WY7RqUPMMvvt1AgK7mcWPhJluf1WTdHxk%2Fmo3OmN6Scv2AMv7tNxJJg95SV5fav&X-Amz-Signature=e568f7f8a9385557e20c5ab25eef457da83c05c119a14898ebe92f5df8dbb9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JEDKZI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTNSTKn8WaK%2F%2FbM%2B0e1xtLmePdEYVA%2BZPzbtqeswFBqgIgL6VHO0%2B46cvQ63za%2BS7VZrbN6yWmZeYLbN7xUcsqPTkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxMjDj7uu6UCfu3CrcA4pIvnGxqd%2F34nXNOPbNQSb7wnztcEmulrL1zEaKGRmOJQpeLCwXS%2Fomt1KwE6fKmmBqBT96D4jNVmdtybHu7ftaTbWAq0eEG9eRmHEmmN5bER1AJ4ikFUJftX1A0CMGVxK5l3veOZsethrJtHNNcjedWPc8yBxnYRFZsusJyHEM26q9hfv4ssg2A7VuuAFs8uffzV%2B2TCXSm4q7YmK%2BCDs%2FpdWXN1z%2BeZ%2F8z3Fpd1r7M34Q4C%2B0MeBwAAQxdXZ7cXGhZ4eor6QPdIwXpAY%2BIURLMGYFh%2FHmwbVgcrMddzG%2B1H4I%2FFVFkvQLOA6ZanQ8yc%2B5eGJoB6nk8mcf1YZAQHznMyV2e6Jb7eVLmM8WCVI7whaVQP8u%2BgTGCgpYFZ6bIutDN1Ex6kzad8EnkqKGFPQDhB1jEogdLHXyBRemQ%2FCFGjd7BLK2OJtesfAxzXKFUvozkiTN8j%2Bj0WTY623CL92gkjnGJQ0pqYNNSjsWvcyw0KUw0auPKr5v0izDMLtZWXD0bMqc7KaVxbUD9lQATWrIhtnPyphN8XubuOAbX6FzQQRvwr0socoZezjIGpyglWeJgvp0d3qg1aoziaEkFCs6dG5SJoRswEEv8yJjjmpx2p8txFq3F52VRzJfMNmtp70GOqUB3Rkaq2q4Y%2FFtgmv4gxElwZxuRlu1kTcJRyLEq64BBy3ycDSAHDgG3McuXZElgBP5yxOpWRjkVXYAQ%2BLZeVxSrdGxAHjJWGneGk8Yze3nms5IGeA7ZCjINvFRIJWln%2FkarD3BbzC8n9A%2BgA2ebexSc3P1Cojd9WY7RqUPMMvvt1AgK7mcWPhJluf1WTdHxk%2Fmo3OmN6Scv2AMv7tNxJJg95SV5fav&X-Amz-Signature=7cc060933e81627f4ded8b8b875745d3ff6845e55304a6809445b089d19dbbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
