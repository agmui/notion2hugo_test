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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIS2QCW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqGrnC1JU1XbZLZzISe1M3Zkw9waWt5fHD3iFboxq6dgIhAKCYdG8%2F8LgJHhJevLv5%2BbyE4pYV%2BHbq%2FxuXbnvhesJ%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmFtQgQvzs93E0Xr0q3APcNeLuzQgHbCirL6CyJNl0lfRwyGxhxGTEMHqeKnozXPkMBau4HLbahtmEyzEARe1acp0Q3auF58uZIaeny4Lhsy7hvRI%2FlhE6tljdnt4vLXLbd5GviALgzFlWAqo4SuywK7q2Hi2BWFf5hdA43ciEO0l3m79n3JDOh%2FycMJpRoXcXf%2F48vS36mfL%2Bx8ysv0f2%2FHIXaeZvdUMaFSk%2FkQyGqBYhDI0WkHbvvnAM0ctaKd7yaMmOKQCS8aS7267cGWV9GPgW%2FuWf8Dr%2Bb7cJ1c8Ne4my4%2Fm%2BptLI3zXesfM%2Bdwe2diW%2BOTnGBeA82Zlj6XQeBLsEF8qamvCSdcMmkvYJYnSPNgCWg9VuSxBK7L46xBFagp9wkrnaA0tMxSivgzQMTCSWznBwYqAbKaR6xholLnejOmYiwrsB3kVkeHV0aaJXaGJ9uVQqc6VYnaEaI6IIJuPhvykWoEd0KfpOb04I2SLoOQqnhWfiRJHfA81p4ENlPiBCKqzuw5eBoZOPNoI6lXIHELI6G2ptFvngQ45AvTzshiG6FwmXdoP1LGDnDboOgxy30ti3Q%2Fw1VQWu6HheS525vOWUgadkmI6BYGZkKXp%2BHYm%2BeT7%2BAdJuuC7YmnnUdgkAxrs%2FjdMrkDCo5eG9BjqkAYXUTBHnlcciK5yCwUohXsNpauBoCpKdQ76i4YPS0MftywfznQmnLAeuGiwn8ZrF0ov2Nyg8JK20lTWNQpdbhUC3WKheXgcxrigK22zwUsA9RXDD8RSfv7C1hAfq%2BMJmEAUGU3A63VgQZD2IJ5Fl%2B1CkB7hcfSLWTy81ui5v2KdKoW17Ob%2FuBBhI9oaoz02ELlyQ2Do%2BrCd2GZuVEX7opUPBb8oP&X-Amz-Signature=dd1b46a5a1f4a8b6965e2bb0adee166910f2ffda6b746e949cffb5aa79d4f3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIS2QCW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqGrnC1JU1XbZLZzISe1M3Zkw9waWt5fHD3iFboxq6dgIhAKCYdG8%2F8LgJHhJevLv5%2BbyE4pYV%2BHbq%2FxuXbnvhesJ%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmFtQgQvzs93E0Xr0q3APcNeLuzQgHbCirL6CyJNl0lfRwyGxhxGTEMHqeKnozXPkMBau4HLbahtmEyzEARe1acp0Q3auF58uZIaeny4Lhsy7hvRI%2FlhE6tljdnt4vLXLbd5GviALgzFlWAqo4SuywK7q2Hi2BWFf5hdA43ciEO0l3m79n3JDOh%2FycMJpRoXcXf%2F48vS36mfL%2Bx8ysv0f2%2FHIXaeZvdUMaFSk%2FkQyGqBYhDI0WkHbvvnAM0ctaKd7yaMmOKQCS8aS7267cGWV9GPgW%2FuWf8Dr%2Bb7cJ1c8Ne4my4%2Fm%2BptLI3zXesfM%2Bdwe2diW%2BOTnGBeA82Zlj6XQeBLsEF8qamvCSdcMmkvYJYnSPNgCWg9VuSxBK7L46xBFagp9wkrnaA0tMxSivgzQMTCSWznBwYqAbKaR6xholLnejOmYiwrsB3kVkeHV0aaJXaGJ9uVQqc6VYnaEaI6IIJuPhvykWoEd0KfpOb04I2SLoOQqnhWfiRJHfA81p4ENlPiBCKqzuw5eBoZOPNoI6lXIHELI6G2ptFvngQ45AvTzshiG6FwmXdoP1LGDnDboOgxy30ti3Q%2Fw1VQWu6HheS525vOWUgadkmI6BYGZkKXp%2BHYm%2BeT7%2BAdJuuC7YmnnUdgkAxrs%2FjdMrkDCo5eG9BjqkAYXUTBHnlcciK5yCwUohXsNpauBoCpKdQ76i4YPS0MftywfznQmnLAeuGiwn8ZrF0ov2Nyg8JK20lTWNQpdbhUC3WKheXgcxrigK22zwUsA9RXDD8RSfv7C1hAfq%2BMJmEAUGU3A63VgQZD2IJ5Fl%2B1CkB7hcfSLWTy81ui5v2KdKoW17Ob%2FuBBhI9oaoz02ELlyQ2Do%2BrCd2GZuVEX7opUPBb8oP&X-Amz-Signature=08b5be9ce7ad3a5710815b03972ae97837ec117d3555ccb95d67887732bceff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
