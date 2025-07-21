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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ON3K3U%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl9OZOj9oalqt8QWZ5xotwgx8q8ULwJa8Xv%2FYwNm1SSAiEAiEzGMQI7Y0xCqpinzih0M5uVmjMf0ImHNmza%2BicENegqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJlcQeo5lzkTWjJeCrcAzJKJeuMX%2BJZ22hetjyZkIuOlVAsXKrta5lqS63XX4KDDbHzFtw%2BVw5nHIN6CyolZV%2FB%2F7ECW80Xlxvc2EeVP9TcgmmFPEmGkP1dcSpX71lWQs2vHRnkZJvS3QpxG6%2FCv2HiM9r8bMfNywJmbZ8zamZknIY7nI6cJr7eQyittLEe8hscjdalw3T9QLIl0rHtztZ81GK6vdmFtBQQxaVzG6CWTuoHAO9SfPeQcvhEQrc9p7vl9a4A5XcvJ6B3VQSrkzqyyrMcmpAuA6PSmjjaK7ZWw10aJIaC1W2S8aKwG22wv19lIZfsiUVJEj4Yi9PSsLM%2FqTy4BbfPiJDmhcThjUFOgF3%2FrFFd%2F6LhjYnyONW3Z5%2BuY%2FOmyFjloQn%2BrVc1%2FGePzXjhSL3HsOpHMOp1nAVh%2Fy0eE93rGhes1h5JclgDtVMF6SGuRQDGlrwRxD8G3D8J4rRh4CNTiTfe3iMBvXmffJbJqXdN7XNyDDsIXNb9eXrGsp2B%2Fg%2BmOeMiTVOu%2B%2B5itdS2DjRhaNjCYLclU0%2FMRmHdItVzulKJToGGPw1g7RuQShQmFy81etZ6QFYBdDMt1p%2BFaWK627ANKzBbd9ZUe5qT%2FOWJRmU23nIZjbZ8CJweP%2Br9M8gSUmGEMKSO%2BMMGOqUBP7%2FLl8u%2BcaofO7Rk%2B7zLJxY%2Ff3FLjOOTbdevcyGTbrVi%2BpIHxgZ8CMX5HKLVbFo77WV8nQKDY6bBn0kgNkUEEb0H54MJkuRZuJl2ZskowCp6pAZlcKtfiKndMl9xpp8%2BBL%2BIJweH2E9FQZtIC9vOIqg%2FB2h1A%2BQapJKUTRoND6Cam9pFluCG13WbQ53azi7JJtGclEgn%2Fne%2FfabJPoGjHAqdn55j&X-Amz-Signature=44bc6c28b899c0cd5f3ab4b17dea3642a14be0201c80d1af9a9243908e5b340c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ON3K3U%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl9OZOj9oalqt8QWZ5xotwgx8q8ULwJa8Xv%2FYwNm1SSAiEAiEzGMQI7Y0xCqpinzih0M5uVmjMf0ImHNmza%2BicENegqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJlcQeo5lzkTWjJeCrcAzJKJeuMX%2BJZ22hetjyZkIuOlVAsXKrta5lqS63XX4KDDbHzFtw%2BVw5nHIN6CyolZV%2FB%2F7ECW80Xlxvc2EeVP9TcgmmFPEmGkP1dcSpX71lWQs2vHRnkZJvS3QpxG6%2FCv2HiM9r8bMfNywJmbZ8zamZknIY7nI6cJr7eQyittLEe8hscjdalw3T9QLIl0rHtztZ81GK6vdmFtBQQxaVzG6CWTuoHAO9SfPeQcvhEQrc9p7vl9a4A5XcvJ6B3VQSrkzqyyrMcmpAuA6PSmjjaK7ZWw10aJIaC1W2S8aKwG22wv19lIZfsiUVJEj4Yi9PSsLM%2FqTy4BbfPiJDmhcThjUFOgF3%2FrFFd%2F6LhjYnyONW3Z5%2BuY%2FOmyFjloQn%2BrVc1%2FGePzXjhSL3HsOpHMOp1nAVh%2Fy0eE93rGhes1h5JclgDtVMF6SGuRQDGlrwRxD8G3D8J4rRh4CNTiTfe3iMBvXmffJbJqXdN7XNyDDsIXNb9eXrGsp2B%2Fg%2BmOeMiTVOu%2B%2B5itdS2DjRhaNjCYLclU0%2FMRmHdItVzulKJToGGPw1g7RuQShQmFy81etZ6QFYBdDMt1p%2BFaWK627ANKzBbd9ZUe5qT%2FOWJRmU23nIZjbZ8CJweP%2Br9M8gSUmGEMKSO%2BMMGOqUBP7%2FLl8u%2BcaofO7Rk%2B7zLJxY%2Ff3FLjOOTbdevcyGTbrVi%2BpIHxgZ8CMX5HKLVbFo77WV8nQKDY6bBn0kgNkUEEb0H54MJkuRZuJl2ZskowCp6pAZlcKtfiKndMl9xpp8%2BBL%2BIJweH2E9FQZtIC9vOIqg%2FB2h1A%2BQapJKUTRoND6Cam9pFluCG13WbQ53azi7JJtGclEgn%2Fne%2FfabJPoGjHAqdn55j&X-Amz-Signature=7216c70537c2b4654b257133f332970e3cb1d99c706c96f4027511fd10291fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
