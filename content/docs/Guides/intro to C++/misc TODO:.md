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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ6BCPE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHfL5WmO5PA1JmCSkBITCFaue9p6NtDE7B6qglG4QXWfAiEAyPoXJP%2FIBnvB7tjwVqxaPx5KMGApy5LDei87SrBlJyoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCe6Ivkz2Xa1bUjHCrcAxXT76WW5XzNUoY83CSdutPEMskyDWgDUELPunBexjvIVmUvT%2Bdbqe7V701f5rqyXtz8IyJw%2Fpq04UcbG6VF83cbI9d%2BS8pPmnGlUFKIHYx0aKVKiJx1Bv4QGeozOJnpFcNtmH1Nn0DeZWqq7YOD98gfy%2F9F3nKWOWN8cIAvLEzJlld5vk2cn09yOq43GLawi%2FGMxy5izQ%2BFXWljUEnmbMyUZ8HXM%2BxvlNp2GGA9qyKk5cczLvYAJVPtuhoKpVfGRnioiNrZJt0rbbSdCxtnBFIr6V5CmbcTWXkRP0yCQroUq7xL5HUbSgjzUG9MMZd4tGzTAFUAuzony%2B22j1FKLiIYFhH6rx%2BibbkSJKVJMdKzWpQRocEQ8oV2Tt8BCm1fzznaX2w5kXfFzdtXANdVRkJqYkSFJKw4DyCBgT%2Ff21F2DPwmstTLldDs7d%2BOqWgXVLPiQmiNN0td6o%2B1WE0Yw2c2G06O2jp81r7%2FgjO6YCJ8kDi2nh%2F1V0UuVD6rFFKIF316z4HSLsXnqR7rflCDV8sqGyz7nQugf73wm%2BZIAd2XiZyI5B2fhb1A0aV7psX1JFesGwuXFLqFwG8Ykvjp9cD3zJP4g3n0ZxJk3iXrEvYU8SnDmBm29VUHjqqsMLSJnMAGOqUBGXp3jnoW5q8xY2xGbuduUJ71W08AhCl2lAEuvCcgmh1R1eWi048o6Qx5%2F4NkrLH3HD0%2F6Qcj%2Bhhr%2FMzhl5mftJn%2FG5vGUykVkxQlfSAK2ObSYohaVzXey9GC0CrGPwxYdmySbHIkxnbPdSBTPsX2JUhgaIbN81CsvOtW1RNgvQ6A3WS9W%2BjY5DbKKw8DyOKJUrcAw%2BaRF5gqtes5mm2R57A5jKSv&X-Amz-Signature=438db4984903b52d97b2c636365ce39a5ba85ac69c67c80057cc7c0c19ee9346&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ6BCPE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHfL5WmO5PA1JmCSkBITCFaue9p6NtDE7B6qglG4QXWfAiEAyPoXJP%2FIBnvB7tjwVqxaPx5KMGApy5LDei87SrBlJyoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCe6Ivkz2Xa1bUjHCrcAxXT76WW5XzNUoY83CSdutPEMskyDWgDUELPunBexjvIVmUvT%2Bdbqe7V701f5rqyXtz8IyJw%2Fpq04UcbG6VF83cbI9d%2BS8pPmnGlUFKIHYx0aKVKiJx1Bv4QGeozOJnpFcNtmH1Nn0DeZWqq7YOD98gfy%2F9F3nKWOWN8cIAvLEzJlld5vk2cn09yOq43GLawi%2FGMxy5izQ%2BFXWljUEnmbMyUZ8HXM%2BxvlNp2GGA9qyKk5cczLvYAJVPtuhoKpVfGRnioiNrZJt0rbbSdCxtnBFIr6V5CmbcTWXkRP0yCQroUq7xL5HUbSgjzUG9MMZd4tGzTAFUAuzony%2B22j1FKLiIYFhH6rx%2BibbkSJKVJMdKzWpQRocEQ8oV2Tt8BCm1fzznaX2w5kXfFzdtXANdVRkJqYkSFJKw4DyCBgT%2Ff21F2DPwmstTLldDs7d%2BOqWgXVLPiQmiNN0td6o%2B1WE0Yw2c2G06O2jp81r7%2FgjO6YCJ8kDi2nh%2F1V0UuVD6rFFKIF316z4HSLsXnqR7rflCDV8sqGyz7nQugf73wm%2BZIAd2XiZyI5B2fhb1A0aV7psX1JFesGwuXFLqFwG8Ykvjp9cD3zJP4g3n0ZxJk3iXrEvYU8SnDmBm29VUHjqqsMLSJnMAGOqUBGXp3jnoW5q8xY2xGbuduUJ71W08AhCl2lAEuvCcgmh1R1eWi048o6Qx5%2F4NkrLH3HD0%2F6Qcj%2Bhhr%2FMzhl5mftJn%2FG5vGUykVkxQlfSAK2ObSYohaVzXey9GC0CrGPwxYdmySbHIkxnbPdSBTPsX2JUhgaIbN81CsvOtW1RNgvQ6A3WS9W%2BjY5DbKKw8DyOKJUrcAw%2BaRF5gqtes5mm2R57A5jKSv&X-Amz-Signature=8f404c670833b64b6e1612ccc06467030b6669631ced804cc1c05a60875beb58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
