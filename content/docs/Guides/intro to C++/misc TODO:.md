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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVW3URV3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh8mkae2WJhwxRH1jyJ1kCGyEO6ht6vf6r3IBAr6S99QIhALbLPdeeDw0fIn42C0HbXQAZRlpVVfl1K5XkBpLjGhxmKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDnQz7yW%2FiMs48DuQq3AOnKYQACpBj%2BtvjT2XAe6gVPnwwHplETSIXTWYrHlIeu38sauxuhHlzPi6Dx6JzaWEc5ld1m5JhyHCMTGxDGUfBjb1E4vf1Rmpzj4RTnYNMCwE9OsFatP7ac4Sz%2B6W13qRUPbPM8ytjI0gbjVgvr5WDHvUsiNgIdrk7ot6%2BZocY8PuTS%2FK0w54CQTgNi63APgkJCiFMdWDKIhuef%2Fm8o8k%2BTYyHFK3AN%2BhK8GuVFasRAwsYuT26rsGl%2FibemiW4MHosGigKlYHxfv%2Bd0rUJERzT7fVfo2kW0xESB%2BYb09T9nkMNBI11Uo7EpDlfMGdZAe0dnCW0hywYXaELhNfOyJ8rfC4eHnkoW7Ykz9WxECqm4yDMPidD%2FsoGzJG%2B4T8WvnMyl2WGVYIr%2B8D6PDmvRy4lGaz87XrECpKmq2mX4EKTfjpNd2JCA05nBV4Ieh5RxgYSFawrbfZtfN%2F%2B%2Fl2kxWtZTaELVfkY9k3OL8HcgHxijUGWwWDVs8a7dXGvhuOwAyuzptb5GfwZ9hZNRq2Ha1d3KdDG1DOYJfDo%2Fc7I5xDoXbqMnJ0GwV8wzqoHtnroOJdIEdF7zBI%2FWfiwbByLEiH0zDXuR9gyqjAvBJifweMHFG58ew0UTiNmNzHttjDjvfjABjqkAW0Jjaexm0iXjAizRiiHcUpivXkyDnFlv3gdkovqtsZ0w34h7zJwYEawK8x2XPIUjhnJKEo6qfmsH7XQbZGrElECvNtTjSuJCaQyYaWomzCYeB7CCYl3VvEal4xQy36rkXAOAmuCrybN2sClWS%2FReONgSKcFsstGbCJvyNQFn31WLLLaKELJaivz0ZVgAm%2FZq%2BD8Bvv3wlMZlXD6NjgMLIDiqzq1&X-Amz-Signature=9a2fa3e682628950b6269c0839b86836e2b32c3f770abd8acd79228b5aaaf838&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVW3URV3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh8mkae2WJhwxRH1jyJ1kCGyEO6ht6vf6r3IBAr6S99QIhALbLPdeeDw0fIn42C0HbXQAZRlpVVfl1K5XkBpLjGhxmKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDnQz7yW%2FiMs48DuQq3AOnKYQACpBj%2BtvjT2XAe6gVPnwwHplETSIXTWYrHlIeu38sauxuhHlzPi6Dx6JzaWEc5ld1m5JhyHCMTGxDGUfBjb1E4vf1Rmpzj4RTnYNMCwE9OsFatP7ac4Sz%2B6W13qRUPbPM8ytjI0gbjVgvr5WDHvUsiNgIdrk7ot6%2BZocY8PuTS%2FK0w54CQTgNi63APgkJCiFMdWDKIhuef%2Fm8o8k%2BTYyHFK3AN%2BhK8GuVFasRAwsYuT26rsGl%2FibemiW4MHosGigKlYHxfv%2Bd0rUJERzT7fVfo2kW0xESB%2BYb09T9nkMNBI11Uo7EpDlfMGdZAe0dnCW0hywYXaELhNfOyJ8rfC4eHnkoW7Ykz9WxECqm4yDMPidD%2FsoGzJG%2B4T8WvnMyl2WGVYIr%2B8D6PDmvRy4lGaz87XrECpKmq2mX4EKTfjpNd2JCA05nBV4Ieh5RxgYSFawrbfZtfN%2F%2B%2Fl2kxWtZTaELVfkY9k3OL8HcgHxijUGWwWDVs8a7dXGvhuOwAyuzptb5GfwZ9hZNRq2Ha1d3KdDG1DOYJfDo%2Fc7I5xDoXbqMnJ0GwV8wzqoHtnroOJdIEdF7zBI%2FWfiwbByLEiH0zDXuR9gyqjAvBJifweMHFG58ew0UTiNmNzHttjDjvfjABjqkAW0Jjaexm0iXjAizRiiHcUpivXkyDnFlv3gdkovqtsZ0w34h7zJwYEawK8x2XPIUjhnJKEo6qfmsH7XQbZGrElECvNtTjSuJCaQyYaWomzCYeB7CCYl3VvEal4xQy36rkXAOAmuCrybN2sClWS%2FReONgSKcFsstGbCJvyNQFn31WLLLaKELJaivz0ZVgAm%2FZq%2BD8Bvv3wlMZlXD6NjgMLIDiqzq1&X-Amz-Signature=f62674cbd3f443c30b3a17674fb2984d7c4ebc8371400a7fd5a96ca4a6e8fccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
