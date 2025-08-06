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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MAZXGT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDlkAGTRria6sniBEKdZZevnIsoJkOavgtgF2gZtTW1gwIgEbw831nmQwk428RxGaZoPH5LQcMArGLWkCrjQsDDxOsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOZP1DfUieVV1av8oCrcA7K3M0y5CWbE%2F8qn1s3pfjtsUZZj2Ka6RbnOTkueBxuToI7rRne%2BvSh4tdmCDc3X1rVV%2FCRw6234d1iIeCxYMm6%2FncyKXnb3%2BsRF7QUYqje8PZLw3RZSCaCCVOTIpXKmAQZ2cuusXNU9O4gt%2Bl0zvzRWAcj0AdRrJr%2Bid2Du4Yo1Lf0VEUEDr%2F8VAIyoE2YExJzUKEQHSzvK8LOkyQ%2FoUCgiXUrV1Il1T6Al4LboIDK2VuXntNpFlTgvwJ%2B3taldR%2F%2BRZkd87hiQISI%2B1g0un%2B9UfHFVhu8VIZJ0wW%2ByFLc9er6p3fKaIddbAu9XvLyc8eaUTOsEkvD%2F8%2Fm0hmgvJWKYZsC9i91z13R9%2FMonKb869Jw%2FnampsRTY4l97mIM3jLpZkVBlnG7m9u3AvnxZ60Lk3ln9rtORYYF0wg9NtLiVZx9R0E9s%2F%2ByZUipMuwQ6mX6DuJoYSJ4dxM9fLCbdi5sH3Vqq5iI1uhAfkk2h7yOqrJVXe1QXtK1xM2g33AU3Mu3O6TK8FTETKKFK1NGPudQLT%2BOfWXN%2Fc9n5MEtcDGlRk3Qo0oddhK0t%2BTDGGEvhOsWvsu7pFnzsO%2BiFGBcwrtevtQijypfAR%2BvN0Z229In2wnRhzSuw8yt%2F01bqMMbQzMQGOqUBm8nfk51vDC33ALdN%2BON8ZWu0e6dckDqq1YKaU4RgEABm4mJWva87mA2WQb3j88oz%2BQXXJIYYMpWGQ2QsaJyrWTlqK1hh4NFRDHr4KZ7BnvfX9SfWRqbXQg5v0WLDCSuWprYBV%2FYq9fY7pZMcndC8aBRby8vyMwwzl0%2Bs4vI1UGSnXOAiuKIPWcTo9HDubIiv5o9QLdlOIHXaEyxfxZdNKaWvywHP&X-Amz-Signature=78a67091b71d4e258c9c08f1546f42666b5db5c4ac8d56fea49003477859d121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MAZXGT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDlkAGTRria6sniBEKdZZevnIsoJkOavgtgF2gZtTW1gwIgEbw831nmQwk428RxGaZoPH5LQcMArGLWkCrjQsDDxOsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOZP1DfUieVV1av8oCrcA7K3M0y5CWbE%2F8qn1s3pfjtsUZZj2Ka6RbnOTkueBxuToI7rRne%2BvSh4tdmCDc3X1rVV%2FCRw6234d1iIeCxYMm6%2FncyKXnb3%2BsRF7QUYqje8PZLw3RZSCaCCVOTIpXKmAQZ2cuusXNU9O4gt%2Bl0zvzRWAcj0AdRrJr%2Bid2Du4Yo1Lf0VEUEDr%2F8VAIyoE2YExJzUKEQHSzvK8LOkyQ%2FoUCgiXUrV1Il1T6Al4LboIDK2VuXntNpFlTgvwJ%2B3taldR%2F%2BRZkd87hiQISI%2B1g0un%2B9UfHFVhu8VIZJ0wW%2ByFLc9er6p3fKaIddbAu9XvLyc8eaUTOsEkvD%2F8%2Fm0hmgvJWKYZsC9i91z13R9%2FMonKb869Jw%2FnampsRTY4l97mIM3jLpZkVBlnG7m9u3AvnxZ60Lk3ln9rtORYYF0wg9NtLiVZx9R0E9s%2F%2ByZUipMuwQ6mX6DuJoYSJ4dxM9fLCbdi5sH3Vqq5iI1uhAfkk2h7yOqrJVXe1QXtK1xM2g33AU3Mu3O6TK8FTETKKFK1NGPudQLT%2BOfWXN%2Fc9n5MEtcDGlRk3Qo0oddhK0t%2BTDGGEvhOsWvsu7pFnzsO%2BiFGBcwrtevtQijypfAR%2BvN0Z229In2wnRhzSuw8yt%2F01bqMMbQzMQGOqUBm8nfk51vDC33ALdN%2BON8ZWu0e6dckDqq1YKaU4RgEABm4mJWva87mA2WQb3j88oz%2BQXXJIYYMpWGQ2QsaJyrWTlqK1hh4NFRDHr4KZ7BnvfX9SfWRqbXQg5v0WLDCSuWprYBV%2FYq9fY7pZMcndC8aBRby8vyMwwzl0%2Bs4vI1UGSnXOAiuKIPWcTo9HDubIiv5o9QLdlOIHXaEyxfxZdNKaWvywHP&X-Amz-Signature=e9a01bb4e7ac7a7188824b92e240f981256207625225bdbadbbda10e2df08010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
