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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNRIAN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDIfHAoKi51RgHIdwUSLIUvnrYc1Cxgp%2BNRkslYnY5iEAiAyQEtqHc44cf1cF9Q40enZGhFQpl0RFWEupWAbwf03%2FyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2GNZ1deTAkC%2BmqtKtwDAj8ygSPTsoIglhllTKj8gDND%2FGj0IA7%2FhRi3WXm9yTUSojLngPogVRgEqBtH%2BibiM0xGNSLaBNalTEdI92NUAkttbqxwsECUvcf7JlPcDEZkmup2dN9pHaOYm%2FRM5HWMyQHrJDnYTYsT2QEwyygoaEKYM6w7TsMFHDev2bb%2FqE9VbT9ASWFRoTPMjQ6GOsih%2Fy1lS9sD8fj3wfGo0Q6rzHG1hAUpW1YLEYqM6ALr1gPL5ecZ9qtg8waX46p2ouiDrAqQIaI086BCj7zSCXBzF8QQLJ%2FbNoREJQlmFkln4b4ks837hrPK4NLzgNCM1G23N8vaWjpfmcDVPq4hSZo0Tqj6Y7o4E4rycEsreTI1oSe6pN5Q%2BclCq9sHZazIfJNtes4WgwGSQxjfhBIDkdTbhr%2BQijLxqTMuliIDiLq6GI2VXYl2ouQeKQQWtYIF4DQrz2ZvrYSmOFa2edfR%2FfLVHpoOpjsMQDDWCAeL2RdqYkHnqRszs50AKn2M6EJjbfOvSbnjc8PyPEvT2zn0drooNWPPZw1xJXvuZlJ60qR3XAIkIgC0VJkWcwIrWaAKza32z%2BI87Hh76yiAZUCrHTGb4IArHpIubumwG%2FKaI8iKCyl4ikdYw2J4Vla1ayMwjoyIvgY6pgH8momgQKkXSJBf5Q23RnlBQdzMmdVE9lLi%2F6YCdkjZy3dvg9M6i7JPjfcwsrLPfanKY%2BUwB58XqnLuKc8EYNtbIIOPSznPr4Ls9TSlGhgI1FYPFeRyuezkzAPyCmmnZERySghtybgVZL1ERVZ116eBxQi4ZihZIRpGtfP1etYhYq0tsJKFNSYeplXX9jSXaB%2BaIYiUqXqNnxFas%2BEJWxT7KgSuz94o&X-Amz-Signature=243e65eec4a76d0a9f69281bbea4e7823cb1e6662915df4ad83b30310e5ffa97&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNRIAN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDIfHAoKi51RgHIdwUSLIUvnrYc1Cxgp%2BNRkslYnY5iEAiAyQEtqHc44cf1cF9Q40enZGhFQpl0RFWEupWAbwf03%2FyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2GNZ1deTAkC%2BmqtKtwDAj8ygSPTsoIglhllTKj8gDND%2FGj0IA7%2FhRi3WXm9yTUSojLngPogVRgEqBtH%2BibiM0xGNSLaBNalTEdI92NUAkttbqxwsECUvcf7JlPcDEZkmup2dN9pHaOYm%2FRM5HWMyQHrJDnYTYsT2QEwyygoaEKYM6w7TsMFHDev2bb%2FqE9VbT9ASWFRoTPMjQ6GOsih%2Fy1lS9sD8fj3wfGo0Q6rzHG1hAUpW1YLEYqM6ALr1gPL5ecZ9qtg8waX46p2ouiDrAqQIaI086BCj7zSCXBzF8QQLJ%2FbNoREJQlmFkln4b4ks837hrPK4NLzgNCM1G23N8vaWjpfmcDVPq4hSZo0Tqj6Y7o4E4rycEsreTI1oSe6pN5Q%2BclCq9sHZazIfJNtes4WgwGSQxjfhBIDkdTbhr%2BQijLxqTMuliIDiLq6GI2VXYl2ouQeKQQWtYIF4DQrz2ZvrYSmOFa2edfR%2FfLVHpoOpjsMQDDWCAeL2RdqYkHnqRszs50AKn2M6EJjbfOvSbnjc8PyPEvT2zn0drooNWPPZw1xJXvuZlJ60qR3XAIkIgC0VJkWcwIrWaAKza32z%2BI87Hh76yiAZUCrHTGb4IArHpIubumwG%2FKaI8iKCyl4ikdYw2J4Vla1ayMwjoyIvgY6pgH8momgQKkXSJBf5Q23RnlBQdzMmdVE9lLi%2F6YCdkjZy3dvg9M6i7JPjfcwsrLPfanKY%2BUwB58XqnLuKc8EYNtbIIOPSznPr4Ls9TSlGhgI1FYPFeRyuezkzAPyCmmnZERySghtybgVZL1ERVZ116eBxQi4ZihZIRpGtfP1etYhYq0tsJKFNSYeplXX9jSXaB%2BaIYiUqXqNnxFas%2BEJWxT7KgSuz94o&X-Amz-Signature=ba373c1856e10338a26fc961d79ac54999a986f8dab82419ae22f1fa955f95aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
