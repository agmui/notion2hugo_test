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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPAEFD6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDpYSqKmAKqaY%2FlUUvl5Of%2FVkGc26UP8UDF2fAYnkU1owIhALSmagk%2Bkh%2Fb5WIsn387Y3IKfmzQIpQeEouZKkPSWMu5Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwOj%2Fc7QWOdeUpJfwcq3AMEi4OTm1arAcT%2BdY8SVrcWAXnMTTXqXDPjXBesi%2FnVK2mrcvPi5xnV4Gn%2FqlftwkN1Ed%2BzeIOzvvoJ%2FjxBrlVdOzQxJd5m8W7oioNV3kxUFYSFPePlTB8KeFBcQXufgoUtoIZ3JPL4GB2QHvtu7AwGIDOT7OsOWuw5rfBiwtKIXYaTuOtnuN41oR4tVw3iP0UAoJStNRcLJEPZQ4swTvi91CILF1m1PL%2F3EcEPqOgAWR%2FBF%2BEzg14oR9i8yvh7opUndm14021uJJ3rhYJ%2B5iPIRGg0DLrkILUtNYWsRKBIrtISP%2B0GwZ7eg5Fxz%2F9hkCIUH%2BTdHVXb9z2Q0V6II4Ybv96zUY4IdEHhAQkzXdTi1TAypl1x0UmIdL01q8rQuANoQOK03W43LrtUGz6VvIgqDmr6IXVqiq3sE8jDPRlSXfP6FmTbhfm1GIxUrmG3s9C0qI3C2Q%2Bk7BoPSW5jRvFZe98OUsM%2BTgSy%2FolKjrHPRVepZrgoHzhAgSYYmjuYI9uqyxAgp0R0BhhY8CMB3zw8bdUDpipM5MYYw8vIdP8z8fOd7gUBrAG%2FIYlFh%2BeHbcO4mQ6GExWdqsLPfV2spA35Be%2FzhoAlftrdf95ql44A6wV7qKd8iDa1oa2AijCZieXCBjqkAZ7C8nwsp2elN8Kc%2Bh0PhcyVAhYbda%2F2l4FbKTway%2FHfD7nzhGgT0%2FNmCn4RzwkxPl%2FDpmvnVf0FdXmA1B0Kr1FKGUpKEzVeEJlUh6EB%2BbgBCqJq%2BbiiC9HjpDGAG%2B0WfeUbKp9ryhb%2B67xahWqGfgipwkEDyn4efXr1FfASvTTdv0f3bOi6It3gKF6qIlSFcmQvJoY%2FQpp%2FIw1hr8Ak3OEjAJ4Y&X-Amz-Signature=64193d940f7c6e73889280fbf54665737dd800cfa57a32bdade4a14dea8d8505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPAEFD6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDpYSqKmAKqaY%2FlUUvl5Of%2FVkGc26UP8UDF2fAYnkU1owIhALSmagk%2Bkh%2Fb5WIsn387Y3IKfmzQIpQeEouZKkPSWMu5Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwOj%2Fc7QWOdeUpJfwcq3AMEi4OTm1arAcT%2BdY8SVrcWAXnMTTXqXDPjXBesi%2FnVK2mrcvPi5xnV4Gn%2FqlftwkN1Ed%2BzeIOzvvoJ%2FjxBrlVdOzQxJd5m8W7oioNV3kxUFYSFPePlTB8KeFBcQXufgoUtoIZ3JPL4GB2QHvtu7AwGIDOT7OsOWuw5rfBiwtKIXYaTuOtnuN41oR4tVw3iP0UAoJStNRcLJEPZQ4swTvi91CILF1m1PL%2F3EcEPqOgAWR%2FBF%2BEzg14oR9i8yvh7opUndm14021uJJ3rhYJ%2B5iPIRGg0DLrkILUtNYWsRKBIrtISP%2B0GwZ7eg5Fxz%2F9hkCIUH%2BTdHVXb9z2Q0V6II4Ybv96zUY4IdEHhAQkzXdTi1TAypl1x0UmIdL01q8rQuANoQOK03W43LrtUGz6VvIgqDmr6IXVqiq3sE8jDPRlSXfP6FmTbhfm1GIxUrmG3s9C0qI3C2Q%2Bk7BoPSW5jRvFZe98OUsM%2BTgSy%2FolKjrHPRVepZrgoHzhAgSYYmjuYI9uqyxAgp0R0BhhY8CMB3zw8bdUDpipM5MYYw8vIdP8z8fOd7gUBrAG%2FIYlFh%2BeHbcO4mQ6GExWdqsLPfV2spA35Be%2FzhoAlftrdf95ql44A6wV7qKd8iDa1oa2AijCZieXCBjqkAZ7C8nwsp2elN8Kc%2Bh0PhcyVAhYbda%2F2l4FbKTway%2FHfD7nzhGgT0%2FNmCn4RzwkxPl%2FDpmvnVf0FdXmA1B0Kr1FKGUpKEzVeEJlUh6EB%2BbgBCqJq%2BbiiC9HjpDGAG%2B0WfeUbKp9ryhb%2B67xahWqGfgipwkEDyn4efXr1FfASvTTdv0f3bOi6It3gKF6qIlSFcmQvJoY%2FQpp%2FIw1hr8Ak3OEjAJ4Y&X-Amz-Signature=6a3c43d418e042348c87c96ef6d3eff91e3fa30051a64ef297b9928eea4fb9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
