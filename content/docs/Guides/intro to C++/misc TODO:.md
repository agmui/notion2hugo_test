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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66CM7FT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK4q%2FzY54VxbHtpZOJrNurEGS62%2FmuhwFxP%2BPMJKQIvAiEA8Ard8O4mU5RKbiKeGsTI3pFxlFuYR%2FshUfa%2FOASLtHkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYCfd52udS8cKg9FSrcA9h%2FAxBjoLmGsec5R%2FKbg9n9KmI9D%2Fn%2Bdfben5kIR6%2ByJ7JMqb6XPYfiHEvNOggQMi1wgcj5lb%2B%2F8akJXuXpDZGYzTrah7M0QBv93qjZe73hCjX1HdSTCwvD2rvNtAHdRBeDj3SSeGsS3mchv9MZpzXfesXHPJjkGuL7uKR0Jt%2BHqGVlWQ1OWvroI4xzb3Oy5MtDUCHEOpjYbiDF165RCpPy617rjd3c7r1P93Rgwv9dWpEGPR%2BlKfmxHLPWcl26E%2FmQE0bsnqDRQ3C1fA%2BsuhpuQokIJNC%2BmaJAcNl%2Fi52XpJm3MgM1UmSmfJ6gqgWKTMQgxDP4oOpNisGsrHt5rj3Pstbxms67s%2FhbC8kOwqhsdPp09SpVIB09ZvtWPvZxN8UNGKWj4HN8BcDOM6KAgwGg8nHAihpbkYlgYKjd5P9uTD%2BuwL8gDUKHBpY3UehpAG5cjLO5R6BcttDIbbkqQA80mXxkPy1yqo%2BktzOkpP%2FJaRTbMalQe8Dl2yOJmaYIcVwzMD1%2F39lF79BGBXeKLjpvWaVXqCA9zI%2Flcwg8%2BCdUZw4mHAfVBo%2BtzoTKstjWWuPvbTzVjm61qFR%2F3KaokR2PKykg0wMaMmIIcwCgxKSO8tXicki2RHVkr9JKMP%2Bj1cIGOqUBS026AbO2Msu0ca0u12MS3evnO3c0%2FCYxoPJZHem08xkYpsQlEnoJKGuJlW%2FAmrUHqPGbkMKwtpOn3Bvig1xGGxt0sOZJqa%2FbOjoGbl8%2Fhutzf6WqX7ikXwgGJDBeXvkJLZjrF9ofe6MwTmSb4resx4QSe%2BmvBDvNaC8bV3osOBgrUNB3tCotO07023sfLZyrW7WWfvkpOR4GIDowYBSJCJTfls%2F%2F&X-Amz-Signature=abdab9f131cb8d44f667f5cb45b67039438350550d25716a910cb7961760c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66CM7FT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK4q%2FzY54VxbHtpZOJrNurEGS62%2FmuhwFxP%2BPMJKQIvAiEA8Ard8O4mU5RKbiKeGsTI3pFxlFuYR%2FshUfa%2FOASLtHkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYCfd52udS8cKg9FSrcA9h%2FAxBjoLmGsec5R%2FKbg9n9KmI9D%2Fn%2Bdfben5kIR6%2ByJ7JMqb6XPYfiHEvNOggQMi1wgcj5lb%2B%2F8akJXuXpDZGYzTrah7M0QBv93qjZe73hCjX1HdSTCwvD2rvNtAHdRBeDj3SSeGsS3mchv9MZpzXfesXHPJjkGuL7uKR0Jt%2BHqGVlWQ1OWvroI4xzb3Oy5MtDUCHEOpjYbiDF165RCpPy617rjd3c7r1P93Rgwv9dWpEGPR%2BlKfmxHLPWcl26E%2FmQE0bsnqDRQ3C1fA%2BsuhpuQokIJNC%2BmaJAcNl%2Fi52XpJm3MgM1UmSmfJ6gqgWKTMQgxDP4oOpNisGsrHt5rj3Pstbxms67s%2FhbC8kOwqhsdPp09SpVIB09ZvtWPvZxN8UNGKWj4HN8BcDOM6KAgwGg8nHAihpbkYlgYKjd5P9uTD%2BuwL8gDUKHBpY3UehpAG5cjLO5R6BcttDIbbkqQA80mXxkPy1yqo%2BktzOkpP%2FJaRTbMalQe8Dl2yOJmaYIcVwzMD1%2F39lF79BGBXeKLjpvWaVXqCA9zI%2Flcwg8%2BCdUZw4mHAfVBo%2BtzoTKstjWWuPvbTzVjm61qFR%2F3KaokR2PKykg0wMaMmIIcwCgxKSO8tXicki2RHVkr9JKMP%2Bj1cIGOqUBS026AbO2Msu0ca0u12MS3evnO3c0%2FCYxoPJZHem08xkYpsQlEnoJKGuJlW%2FAmrUHqPGbkMKwtpOn3Bvig1xGGxt0sOZJqa%2FbOjoGbl8%2Fhutzf6WqX7ikXwgGJDBeXvkJLZjrF9ofe6MwTmSb4resx4QSe%2BmvBDvNaC8bV3osOBgrUNB3tCotO07023sfLZyrW7WWfvkpOR4GIDowYBSJCJTfls%2F%2F&X-Amz-Signature=b9ac27f50832347dedb8a7b0732cac10ccb104c07979f4b9a9c237a465119afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
