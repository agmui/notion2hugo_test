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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWL54RK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD263l5Fgns2X0C663SIUoz3Njb5rEMr%2FEFaSvNYjluKwIhALFII0%2FZ0eEHp1P%2F2NcVpa4G1cjH1oNQEnOobokXD7EEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe0ip1F7P8KLulIZwq3AOZ9IHs1089ga0sp5PY5q1a8coptoLCadnRYQh3xSVEprVXymir%2Fn0cTWZusNcvgRWlBWMfgprT0F%2F7e2FOP32BUZa8G%2BMDWqNdo%2BprjAy9U3HN1VSIJPw9mxjgCw6ReL9GvbbSZaEtsjId7FI%2FS5EvVxMAaLUQrzHB3jG1AnLOJB4EZktRAUZBXTk6H7p5yqNpCXwxHDZz%2B3MPC4DvDA%2B1E2tKAia2OagHcp7LMgDwfGYIaSi%2FY%2FCESL5rd65NtDZBMeNz4akQO%2BlwjbSxVBJQQegYFzT6vtNBYuaKu0iOjkvcExwvkq1Vii0jZrH3f7BycK3lrEpWqsItar2Qnq7Bnu5Zz%2B4n805ftkHcnY2EtfKZ5McK4z%2FiCJjMPoaGUP8jAhmyoU9VwJGk0IkTG4hrAsuYwkMoo2C8wst%2FU9xaTqye79T1ZmErSwTPGwZtlytJc1S94DZ2PQGlS9q6m8FOV4vZXXH5EP4KpVKVrfU2n2brSooW5JcHJi708%2BgJh6BRnHsiCgvOj%2F857SqBwpkECSClJYO8a%2BDOGPpDUJrsZTQaez9%2BI%2FNazW8To%2ForOfSD3AMK35BS8DMifMVqNQKSeNsbGegR9fKbXVEb4qMN7%2FPbwdVdrTh0n8sCOzC2%2F9a9BjqkAXzx2ND3FnnUxywTn8OPkVIc8dSAqV2GhY24o1M9XiEo6vo%2FOb5ODygypfG7SIiYEgJhsfqo5unIM2NkKzTkzJ7bTbuKmmhgNDTiTbteFWUH7iT%2F2b141Kx4hi8MqAQ2pjjpuLTyfVAkslOxHE0ayw95GtbMoAv3T%2BHITrvJwbV8ZIlVEIOkHV6i8TrwhgAClo4FGDawlKFYUkIoz%2BYKFkGeuvi9&X-Amz-Signature=9225b7288505176edd83f8e7a175cfb3fb00e1cb585c826437f1ce43c492dce6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWL54RK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD263l5Fgns2X0C663SIUoz3Njb5rEMr%2FEFaSvNYjluKwIhALFII0%2FZ0eEHp1P%2F2NcVpa4G1cjH1oNQEnOobokXD7EEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe0ip1F7P8KLulIZwq3AOZ9IHs1089ga0sp5PY5q1a8coptoLCadnRYQh3xSVEprVXymir%2Fn0cTWZusNcvgRWlBWMfgprT0F%2F7e2FOP32BUZa8G%2BMDWqNdo%2BprjAy9U3HN1VSIJPw9mxjgCw6ReL9GvbbSZaEtsjId7FI%2FS5EvVxMAaLUQrzHB3jG1AnLOJB4EZktRAUZBXTk6H7p5yqNpCXwxHDZz%2B3MPC4DvDA%2B1E2tKAia2OagHcp7LMgDwfGYIaSi%2FY%2FCESL5rd65NtDZBMeNz4akQO%2BlwjbSxVBJQQegYFzT6vtNBYuaKu0iOjkvcExwvkq1Vii0jZrH3f7BycK3lrEpWqsItar2Qnq7Bnu5Zz%2B4n805ftkHcnY2EtfKZ5McK4z%2FiCJjMPoaGUP8jAhmyoU9VwJGk0IkTG4hrAsuYwkMoo2C8wst%2FU9xaTqye79T1ZmErSwTPGwZtlytJc1S94DZ2PQGlS9q6m8FOV4vZXXH5EP4KpVKVrfU2n2brSooW5JcHJi708%2BgJh6BRnHsiCgvOj%2F857SqBwpkECSClJYO8a%2BDOGPpDUJrsZTQaez9%2BI%2FNazW8To%2ForOfSD3AMK35BS8DMifMVqNQKSeNsbGegR9fKbXVEb4qMN7%2FPbwdVdrTh0n8sCOzC2%2F9a9BjqkAXzx2ND3FnnUxywTn8OPkVIc8dSAqV2GhY24o1M9XiEo6vo%2FOb5ODygypfG7SIiYEgJhsfqo5unIM2NkKzTkzJ7bTbuKmmhgNDTiTbteFWUH7iT%2F2b141Kx4hi8MqAQ2pjjpuLTyfVAkslOxHE0ayw95GtbMoAv3T%2BHITrvJwbV8ZIlVEIOkHV6i8TrwhgAClo4FGDawlKFYUkIoz%2BYKFkGeuvi9&X-Amz-Signature=fce39dbbde264e0157d67335466f34c0974a5c9e5a8a8194403168ceff5dded7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
