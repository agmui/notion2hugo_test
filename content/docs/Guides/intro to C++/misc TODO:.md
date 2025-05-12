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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W77IBVS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHCdBbIu%2BRbj7a%2F3xUwSWqIpVAz9db%2BQq%2BZdEbasjLVAAiEAiS9WzyaF0SNdekRlca7gE%2FvAm0siAwqn4w1PRh1KowIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTMxi96MceP37kYmSrcA5zbK3T9ZzLaIvESG5i%2BXKSAzFad283HPPeNnowtHJbbCVSnR9SxeGwR5Z5qG%2BHCWxZkiFOQDTd3P0swdMwIQgsK4lQtSXDByJhEEmHV2CWrX33IskPrwuBmiagzV0oHcEExNvsfv037d7JTZm7BsMFG%2FMM1AiJdB7kShteJI89gERLy%2FYP0DUU8Yn2ewueVnn%2FayX%2Fu0meA4mSZ6mfnLHr8Ua2Wty%2FESBhqmqYuGrdobjkgr%2FkRnXqRGuc3nlHgUARJZWyBAJlfLTiki%2F%2BhiG0KiacMxNnGFbvo%2Bt2ibB0ebTWKe8Qhmlx9I%2BAbHI6y9gJPAt4TetSPVB7DzSTafLULQyAkVecqKLC8Y%2FwnE6MOX8hiYouOwADynfY3FxQGbUxgOQm8GHN6wdGtfz7OMCJ1IUARqvMkXJ1AIuUvxTNpF5G7boCbLCaPAfizYYhJhXJ7eml5Q2V%2F59%2FKAmzzb8YotoCF%2Fgrsl2GRHNA79e0O%2FKl4a%2BN%2Fm%2FttTNkTfF4NCmTs%2BanOBW5mvvl2K7o%2F0fY3ixWfzwCkXFiM8l%2Bb1c%2B%2F7wxBiI8bTD2MOk1s2u93HLeJA2okZldyUr3iArpdGUAQq1ZX%2FJzVLBxvzXYHlKMyIOHQeLraN5bUL0cEMOO9iMEGOqUBUHEvs%2BEKufxlJSOCKcalTmCPtPBx24L8PDXnuzClQO%2BlXDRD%2BqMGnA1SVNoQ8Ms%2Fs%2BJfsFwXbDX1%2FFEDDQNVB9snleK%2Bt%2FTlLRSLZN3pkngJEAJNe8BoEYN5AqV9R8NE5A77pSFhB5ya7day%2FkbSzkxepqeC7tlaBvHxvSBO8FJ8C2Lug3F5GYKyvZSqtnyO6B94m%2FzJnXDOhU6ilKrKgdUG%2Fnn7&X-Amz-Signature=dd81115537118b8e829c6c58659b54bddb1565fc466987d329cdd63ef0423f69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W77IBVS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHCdBbIu%2BRbj7a%2F3xUwSWqIpVAz9db%2BQq%2BZdEbasjLVAAiEAiS9WzyaF0SNdekRlca7gE%2FvAm0siAwqn4w1PRh1KowIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTMxi96MceP37kYmSrcA5zbK3T9ZzLaIvESG5i%2BXKSAzFad283HPPeNnowtHJbbCVSnR9SxeGwR5Z5qG%2BHCWxZkiFOQDTd3P0swdMwIQgsK4lQtSXDByJhEEmHV2CWrX33IskPrwuBmiagzV0oHcEExNvsfv037d7JTZm7BsMFG%2FMM1AiJdB7kShteJI89gERLy%2FYP0DUU8Yn2ewueVnn%2FayX%2Fu0meA4mSZ6mfnLHr8Ua2Wty%2FESBhqmqYuGrdobjkgr%2FkRnXqRGuc3nlHgUARJZWyBAJlfLTiki%2F%2BhiG0KiacMxNnGFbvo%2Bt2ibB0ebTWKe8Qhmlx9I%2BAbHI6y9gJPAt4TetSPVB7DzSTafLULQyAkVecqKLC8Y%2FwnE6MOX8hiYouOwADynfY3FxQGbUxgOQm8GHN6wdGtfz7OMCJ1IUARqvMkXJ1AIuUvxTNpF5G7boCbLCaPAfizYYhJhXJ7eml5Q2V%2F59%2FKAmzzb8YotoCF%2Fgrsl2GRHNA79e0O%2FKl4a%2BN%2Fm%2FttTNkTfF4NCmTs%2BanOBW5mvvl2K7o%2F0fY3ixWfzwCkXFiM8l%2Bb1c%2B%2F7wxBiI8bTD2MOk1s2u93HLeJA2okZldyUr3iArpdGUAQq1ZX%2FJzVLBxvzXYHlKMyIOHQeLraN5bUL0cEMOO9iMEGOqUBUHEvs%2BEKufxlJSOCKcalTmCPtPBx24L8PDXnuzClQO%2BlXDRD%2BqMGnA1SVNoQ8Ms%2Fs%2BJfsFwXbDX1%2FFEDDQNVB9snleK%2Bt%2FTlLRSLZN3pkngJEAJNe8BoEYN5AqV9R8NE5A77pSFhB5ya7day%2FkbSzkxepqeC7tlaBvHxvSBO8FJ8C2Lug3F5GYKyvZSqtnyO6B94m%2FzJnXDOhU6ilKrKgdUG%2Fnn7&X-Amz-Signature=99578d9935bf40ac4b57ead3d4616a8601b05812f84ca7a5a30d5c013818aee7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
