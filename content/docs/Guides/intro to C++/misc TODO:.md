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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQ4YECO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEQc7M2KhX6dcD9ohr%2BmalpXuaOVItC2UALC2yk1Yt4XAiEAtTPLqPLhW6m8pr7WEGZvOD4QJ5XAaU380IneLBmyoz0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn1rBzNWmNgeBgN8CrcA7Tc5vuZ%2B1rRZk4v87IV1zKnLGo5CKc3ZyhJM7qGZfKx%2Bv6TNuYY1qNdkIDCSlBtQ8vpNEi9tsiKy8uP%2FcnCPAoxQTi8FUvgvVj9dhbDsWgsl9K5d1XJWU0b9%2BMjlPiRyWYFfqhqrRFSsmASAkEgVBIXpdahgGM83qOoXU4Afhuz3OoVnc9GA2UlXneygsS6ZToozPn7id8GfLr62NGbexYhKK%2Bg%2Fweyz%2BygDgm3g9l%2FCCmlXzNxIXdV1b0DYnr9ENnx9lPmQJ3l7Qn5mfZeFnX5eqEK4TFs9TArLYqvQXZrd6TBkE8%2Bg3dGRGVpYdIVGE4aDjuzXaSPCyJ22Z5UTBNUX3qxgchgeH%2FQggWdTF5Kqx9JLoMpvp0mhfGI2zAUB%2Bar5gGt6UnTX7VCnBrAjpHl6Q1M44HN8bLe7WwuVdgDSZXrKc5p%2FUvFuicuQlE6lCq6TdqmZuSPyI8W3cPfpwaZB2hZfHdOoTiSEDTRedh1%2FIKoDjuJ4zHZZPSfDeF11j6XwzEo%2FcGyEBqwVyB%2F65AmF9NOqBHTMUIauueHRwFM6RQnzAbqqlSw0j2OYIbfvxsTP7SUm6Cf79ynWj6RjaSz4v7vu6OQfjSPvBOT8%2B4UXBmgtNoBi%2B5PlpxqMPepur4GOqUB1Pf%2B90CJepqXvwkzfnB7kwu0DGJvvjOp7mnIhURRT8P8w0uGeE6mL8IJmTMYXsgpDsDkxpzL81xswLZiKuaJUAyYkJoquC1%2FHkQbtxfC1mSPlLwj5eRUHorM1K179yOkcU%2B2yMdWYa1I0v290gI1vSVzHsyB1Ai0eogckUZDLgPg6mnxS0vWZcDmqAIxHzH4UTSEVHkGutCAQ3Eq%2BFFv4Q%2FF8JAX&X-Amz-Signature=e41dbc94c3f902ae5280ed3f5bcb675b58803017b8c4193294d981da8e2abd58&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQ4YECO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEQc7M2KhX6dcD9ohr%2BmalpXuaOVItC2UALC2yk1Yt4XAiEAtTPLqPLhW6m8pr7WEGZvOD4QJ5XAaU380IneLBmyoz0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn1rBzNWmNgeBgN8CrcA7Tc5vuZ%2B1rRZk4v87IV1zKnLGo5CKc3ZyhJM7qGZfKx%2Bv6TNuYY1qNdkIDCSlBtQ8vpNEi9tsiKy8uP%2FcnCPAoxQTi8FUvgvVj9dhbDsWgsl9K5d1XJWU0b9%2BMjlPiRyWYFfqhqrRFSsmASAkEgVBIXpdahgGM83qOoXU4Afhuz3OoVnc9GA2UlXneygsS6ZToozPn7id8GfLr62NGbexYhKK%2Bg%2Fweyz%2BygDgm3g9l%2FCCmlXzNxIXdV1b0DYnr9ENnx9lPmQJ3l7Qn5mfZeFnX5eqEK4TFs9TArLYqvQXZrd6TBkE8%2Bg3dGRGVpYdIVGE4aDjuzXaSPCyJ22Z5UTBNUX3qxgchgeH%2FQggWdTF5Kqx9JLoMpvp0mhfGI2zAUB%2Bar5gGt6UnTX7VCnBrAjpHl6Q1M44HN8bLe7WwuVdgDSZXrKc5p%2FUvFuicuQlE6lCq6TdqmZuSPyI8W3cPfpwaZB2hZfHdOoTiSEDTRedh1%2FIKoDjuJ4zHZZPSfDeF11j6XwzEo%2FcGyEBqwVyB%2F65AmF9NOqBHTMUIauueHRwFM6RQnzAbqqlSw0j2OYIbfvxsTP7SUm6Cf79ynWj6RjaSz4v7vu6OQfjSPvBOT8%2B4UXBmgtNoBi%2B5PlpxqMPepur4GOqUB1Pf%2B90CJepqXvwkzfnB7kwu0DGJvvjOp7mnIhURRT8P8w0uGeE6mL8IJmTMYXsgpDsDkxpzL81xswLZiKuaJUAyYkJoquC1%2FHkQbtxfC1mSPlLwj5eRUHorM1K179yOkcU%2B2yMdWYa1I0v290gI1vSVzHsyB1Ai0eogckUZDLgPg6mnxS0vWZcDmqAIxHzH4UTSEVHkGutCAQ3Eq%2BFFv4Q%2FF8JAX&X-Amz-Signature=7271fc4667534f349cf11e0a551ac0ae462910cb22d5e50fcc57c7d9802827c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
