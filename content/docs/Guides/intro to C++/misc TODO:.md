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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEFT7S5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtQUN5R4RUdowDRxt2ZYUiGMBev1Tc0LPSz1mdNRF2OQIhANh62gRu49auTBiHXTYAXFtLJ3b8JBdBuK%2F%2BQ3uCf%2FYeKv8DCFMQABoMNjM3NDIzMTgzODA1IgwOTeKksnmY1E0Fn%2BMq3AOfYBZPpmtqkO9kKG9S6WFjFi6bHO4wYGZMhsOvEyfqT%2FILxblHNLoDFtUtWwXbDrj4lX%2BE7zwoHn5jdvIJg0RZBl9jeayQ2IeZzvI7srmls%2FAuOGUq9Nd34rRK8Gi0DdEJbXWG7eO2cRajggGdyPZZzusFL%2BruLP%2Fj9vttw7qaF03QPT6UO4SKzDjp7PTczlqWzcu5%2BrI0bJBjOs4q70huRMidetkRSSnqcQ1WHc31w41P4ks2dk8XRy%2FdKg2NNt0iu8misYDVRBXdt0uJ49NrmD3V30k76TO7a1tkNJLSjaXK6T0ddjCgRyb609qrbwjJckJCZb91G2sRFVm2U2ZNF4zkvdvT%2Bo4S2XGNWYkwxklutJ4mLO3se0ruEZ2Jy8S48JpK2ZpdAR1L8%2F%2B5x2IqpyZZGOfN0Z6Woz2s9bN9tq06U9IM1p0NaQ5RZGxjZSMW%2F58qocSBIn6wGPThRA5rd7qHaDMv59%2FiV1%2Fnbb2sL%2FUfeBFAtUr1%2BWmQevNO2%2BtD5b79EBf5CnuPQQgoGo1Jy%2FU3spIzPtSMjTUsDrnAHd%2FTEDyhXTnyoDL2pO%2BPZzvz2uDebaXoc0mROrrKK3qnAB7d27FSX2xRBUg9qmVDZl5uqQKMlBrkvS5bDDCYx4HABjqkAUnEaVqsn%2FPp02CW2Jcx3n8Y6FSPR6NGjZK%2Fag%2B%2F6B%2FGNtOBnMQ6xuB7kbuJoR%2FUo3EWgpszDFx11iIcrNkoOdN7yBbuYP0dNztyzk7X1JYqGkGLocl%2FQqUhhf1t6zIkZTaivi7dmupY4cABs3oyTqEVVP9GXX9YJ5ziPtX5iLLeIwUy1l0tA3V4nLrmDnoFrM%2BqgXbPM44DRQhUNvLJhi9TTVSU&X-Amz-Signature=bd178ea1972a3572b57a42748b0cc82f50819f6c838804851e5d9599fe038727&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEFT7S5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtQUN5R4RUdowDRxt2ZYUiGMBev1Tc0LPSz1mdNRF2OQIhANh62gRu49auTBiHXTYAXFtLJ3b8JBdBuK%2F%2BQ3uCf%2FYeKv8DCFMQABoMNjM3NDIzMTgzODA1IgwOTeKksnmY1E0Fn%2BMq3AOfYBZPpmtqkO9kKG9S6WFjFi6bHO4wYGZMhsOvEyfqT%2FILxblHNLoDFtUtWwXbDrj4lX%2BE7zwoHn5jdvIJg0RZBl9jeayQ2IeZzvI7srmls%2FAuOGUq9Nd34rRK8Gi0DdEJbXWG7eO2cRajggGdyPZZzusFL%2BruLP%2Fj9vttw7qaF03QPT6UO4SKzDjp7PTczlqWzcu5%2BrI0bJBjOs4q70huRMidetkRSSnqcQ1WHc31w41P4ks2dk8XRy%2FdKg2NNt0iu8misYDVRBXdt0uJ49NrmD3V30k76TO7a1tkNJLSjaXK6T0ddjCgRyb609qrbwjJckJCZb91G2sRFVm2U2ZNF4zkvdvT%2Bo4S2XGNWYkwxklutJ4mLO3se0ruEZ2Jy8S48JpK2ZpdAR1L8%2F%2B5x2IqpyZZGOfN0Z6Woz2s9bN9tq06U9IM1p0NaQ5RZGxjZSMW%2F58qocSBIn6wGPThRA5rd7qHaDMv59%2FiV1%2Fnbb2sL%2FUfeBFAtUr1%2BWmQevNO2%2BtD5b79EBf5CnuPQQgoGo1Jy%2FU3spIzPtSMjTUsDrnAHd%2FTEDyhXTnyoDL2pO%2BPZzvz2uDebaXoc0mROrrKK3qnAB7d27FSX2xRBUg9qmVDZl5uqQKMlBrkvS5bDDCYx4HABjqkAUnEaVqsn%2FPp02CW2Jcx3n8Y6FSPR6NGjZK%2Fag%2B%2F6B%2FGNtOBnMQ6xuB7kbuJoR%2FUo3EWgpszDFx11iIcrNkoOdN7yBbuYP0dNztyzk7X1JYqGkGLocl%2FQqUhhf1t6zIkZTaivi7dmupY4cABs3oyTqEVVP9GXX9YJ5ziPtX5iLLeIwUy1l0tA3V4nLrmDnoFrM%2BqgXbPM44DRQhUNvLJhi9TTVSU&X-Amz-Signature=2973c413d634c24fc4eaf6ec08baeea32264a9d8a6a947573975715627c2fd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
