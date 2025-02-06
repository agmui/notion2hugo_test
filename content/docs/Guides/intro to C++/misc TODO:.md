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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWXAAA2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCzCP9ZxAkKR6Jc5AfHAt0NdZaDDn12x%2BEOvKb4ad3KZwIhAL3dsEdVQQCk8iRiumkoJmxUxP03VwlMTsl8OsYzowruKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2BIdW%2B%2BI7WpL7ukU0q3APIO7tYz5KuUSAspPW8OlTLE5TOc4JMu8WVuJS0FIP5z%2FCZnukBOJelyzHGAm3BRtFmesvYArUctNAV4Zzcf4%2F1e5jZmhn9c422zc4jlKufm%2F%2FD41TH3zpC78TS%2BcFR3sf7hPXA7YxxlZLmIn7LSiOguTy8i9mA17tMD96AshLOC3DhUas4stTHcvM4l1afMzc5ri3SnWq1Suy%2BWuw%2BzK8AW%2B9RYBzT0axY%2BH8N5p7hSW0v3P9yTDSITQ9jayQFIVeUvW%2FNwbhbeSzLrLYjrThtIKQfW0YyGj8AazptyMFdilCMpf%2Fg6sw%2FKyIBL3I%2FxgnjCz%2BxsVBpZE0p992rig5Yu6963H4S3PCVwmLw%2Bb27hkrF9J6fX9u3mnwxOvNXpYIq4frDLSUWVZxQllkbc084E7GYqRWD6Nyu2i%2Fsm9qqHan6NVEPMcVCUjnDOCgVThzEvXc8KfD5BFBq9IOcQUAVjLPEvAIRywnz5fy5XDLwPYB%2BJiXOtnKImQySMyzxIIv%2FsdvhqVslZ5YfcdY4NTTur4XN2T9CHnETPlB08bhRxoHsSyQdT2jKkKG%2BuUzMbnhcCTQIZPekyaUT5hRI6qNu73BMxOO2XdYvSebC%2FxK3C%2FXfv3%2FR%2FcYlow0TKDCx7ZG9BjqkAVyHvrEKLS2RpzK85B96gnqQ%2FY1O%2B7wSf4QXIceChYTeS6vVfHAe8YZE9%2BR2H5%2BRraqOOyUtv1N%2BVa9EsE4FfUO3EeIjk%2FVnbbRusiCUZAyD2MrwVefwJHaZnyJdTaXgPo%2B2JLkwwvv48TKlk1jN0CMjAJOQnVwUWcWX%2BTKJzZBPVuQ0Ab009Am0qPurFwOxci3kQZHj0FaQrWqDIwfLNmvcrJRo&X-Amz-Signature=a0757f15534ac6a27f0351c2baff549236e612395c67a0676235e351c0412140&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWXAAA2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCzCP9ZxAkKR6Jc5AfHAt0NdZaDDn12x%2BEOvKb4ad3KZwIhAL3dsEdVQQCk8iRiumkoJmxUxP03VwlMTsl8OsYzowruKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2BIdW%2B%2BI7WpL7ukU0q3APIO7tYz5KuUSAspPW8OlTLE5TOc4JMu8WVuJS0FIP5z%2FCZnukBOJelyzHGAm3BRtFmesvYArUctNAV4Zzcf4%2F1e5jZmhn9c422zc4jlKufm%2F%2FD41TH3zpC78TS%2BcFR3sf7hPXA7YxxlZLmIn7LSiOguTy8i9mA17tMD96AshLOC3DhUas4stTHcvM4l1afMzc5ri3SnWq1Suy%2BWuw%2BzK8AW%2B9RYBzT0axY%2BH8N5p7hSW0v3P9yTDSITQ9jayQFIVeUvW%2FNwbhbeSzLrLYjrThtIKQfW0YyGj8AazptyMFdilCMpf%2Fg6sw%2FKyIBL3I%2FxgnjCz%2BxsVBpZE0p992rig5Yu6963H4S3PCVwmLw%2Bb27hkrF9J6fX9u3mnwxOvNXpYIq4frDLSUWVZxQllkbc084E7GYqRWD6Nyu2i%2Fsm9qqHan6NVEPMcVCUjnDOCgVThzEvXc8KfD5BFBq9IOcQUAVjLPEvAIRywnz5fy5XDLwPYB%2BJiXOtnKImQySMyzxIIv%2FsdvhqVslZ5YfcdY4NTTur4XN2T9CHnETPlB08bhRxoHsSyQdT2jKkKG%2BuUzMbnhcCTQIZPekyaUT5hRI6qNu73BMxOO2XdYvSebC%2FxK3C%2FXfv3%2FR%2FcYlow0TKDCx7ZG9BjqkAVyHvrEKLS2RpzK85B96gnqQ%2FY1O%2B7wSf4QXIceChYTeS6vVfHAe8YZE9%2BR2H5%2BRraqOOyUtv1N%2BVa9EsE4FfUO3EeIjk%2FVnbbRusiCUZAyD2MrwVefwJHaZnyJdTaXgPo%2B2JLkwwvv48TKlk1jN0CMjAJOQnVwUWcWX%2BTKJzZBPVuQ0Ab009Am0qPurFwOxci3kQZHj0FaQrWqDIwfLNmvcrJRo&X-Amz-Signature=f9da844587c0756de0ff6f9987ff7233143e4f69ca74243a135ad91c93eba838&X-Amz-SignedHeaders=host&x-id=GetObject)

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
