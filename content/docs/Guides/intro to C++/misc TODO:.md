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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7F2L4I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDq2ydHKQTtLww%2BUwl3g4dfPp0KyaaBvQBdR5lA9B2HwAiEAiKGd859yicDblKnCtey0f8VVGmRmzl5JEFKDQYsIbFEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRIyMA3%2BySAhllxACrcA4ae5J0WkvCUgJu8PzvQwBjRIUaV%2BVq%2FN2qGEjwi9X%2BYAiUdyIyjrWLpQAk6aQvPBWxGanscjRJK3Yg6yTRZ4fb6XOf6AcJpkT1P6TwwsZj65gA5EkGDOvdu%2BbyzidVDZVArJvw%2FROnctrAkst84HQ8Nax%2FTcEjkk5GqBY%2FHj%2FQYLrdM5egg2Mgnnjn3Bdci7O5SvnuuWzqVQrCeOGzxjZcvPs8yJzwy4GLfIbbvnjCTIiUbrWe34NUNPJT4s9cq44RcIdSFaLi7GS8mfaGMjGQ5KcuGn%2FvzXXJAWkJuORe%2F2Ko%2F3QvAEDpUjZxnW3DxYqp1u4Nj8%2BoxwxRUCgNtqoQj%2F2xjpgA2fp5l9zgrKGLgRjamY9HXZxzWd%2FJknbRap5YiWAl1ICK5sC%2Fat1uoRq97Xu8s74ddbS8ehFTlxCLuFPJcZDetIqzOkkWmrVg4hiFVr5emzLtEcgO44z%2BS84W2otOkofvHkEqf9wD4aEKmA3AAjU20CGGHpqRJnBU9S3RSJzm%2Fj91ThHq1WYrbnJrB5ZpgmndnKnsIjnVBWF%2FnkvElFqUvNcQBlzwP%2F07CQj02robTs189EBCWSZAI74JUzEQ7MhTVZvyhJ6hybNqkXUHnaLUEPtOFm%2B9FMI3yib4GOqUBRRV8B8Ep1wy9giyd3xoAqjtwrrenqVAA5sAaTkQUE7iXkbFTRoSBe4Sn0ddW8TPAjrJveKzU3Ms1GKnoZHE8RgOg%2B%2B19iX3aj3AYyQCffR4yGVb9DY9W9NQuKvLQhOGKO9C6itk%2BB3T8tMkYz8R3quCYKkryX94NndqYGGI%2BUEYQKZJX9g%2BVOGJbY0co%2B1YR%2FHO%2FW0aW1A1Tt9odZXTIp%2FlKQwnc&X-Amz-Signature=3d19dbfa72cb2585aa0195058c65e45e85d56aa0aca4d5c18ed890f139dbd3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7F2L4I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDq2ydHKQTtLww%2BUwl3g4dfPp0KyaaBvQBdR5lA9B2HwAiEAiKGd859yicDblKnCtey0f8VVGmRmzl5JEFKDQYsIbFEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRIyMA3%2BySAhllxACrcA4ae5J0WkvCUgJu8PzvQwBjRIUaV%2BVq%2FN2qGEjwi9X%2BYAiUdyIyjrWLpQAk6aQvPBWxGanscjRJK3Yg6yTRZ4fb6XOf6AcJpkT1P6TwwsZj65gA5EkGDOvdu%2BbyzidVDZVArJvw%2FROnctrAkst84HQ8Nax%2FTcEjkk5GqBY%2FHj%2FQYLrdM5egg2Mgnnjn3Bdci7O5SvnuuWzqVQrCeOGzxjZcvPs8yJzwy4GLfIbbvnjCTIiUbrWe34NUNPJT4s9cq44RcIdSFaLi7GS8mfaGMjGQ5KcuGn%2FvzXXJAWkJuORe%2F2Ko%2F3QvAEDpUjZxnW3DxYqp1u4Nj8%2BoxwxRUCgNtqoQj%2F2xjpgA2fp5l9zgrKGLgRjamY9HXZxzWd%2FJknbRap5YiWAl1ICK5sC%2Fat1uoRq97Xu8s74ddbS8ehFTlxCLuFPJcZDetIqzOkkWmrVg4hiFVr5emzLtEcgO44z%2BS84W2otOkofvHkEqf9wD4aEKmA3AAjU20CGGHpqRJnBU9S3RSJzm%2Fj91ThHq1WYrbnJrB5ZpgmndnKnsIjnVBWF%2FnkvElFqUvNcQBlzwP%2F07CQj02robTs189EBCWSZAI74JUzEQ7MhTVZvyhJ6hybNqkXUHnaLUEPtOFm%2B9FMI3yib4GOqUBRRV8B8Ep1wy9giyd3xoAqjtwrrenqVAA5sAaTkQUE7iXkbFTRoSBe4Sn0ddW8TPAjrJveKzU3Ms1GKnoZHE8RgOg%2B%2B19iX3aj3AYyQCffR4yGVb9DY9W9NQuKvLQhOGKO9C6itk%2BB3T8tMkYz8R3quCYKkryX94NndqYGGI%2BUEYQKZJX9g%2BVOGJbY0co%2B1YR%2FHO%2FW0aW1A1Tt9odZXTIp%2FlKQwnc&X-Amz-Signature=6641b89ad3b64b93e0eedd9a75c696bb7bcc4b1620db75ec83d1964c4b33e8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
