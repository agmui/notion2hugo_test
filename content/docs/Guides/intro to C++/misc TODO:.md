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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHBUHWB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDYkUkbfiG3%2F8sWIfyxFkvUYZkDWyDFK%2Fy25XK9jotIpQIgc7V6oQgM%2Fnel8rkWYTLKUFT005u5z%2BNDTDm%2FoSaK%2F0sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhiNxM%2BxPM601j82CrcA901TEEvbMNC%2FmQ0L1%2BaNn0tSrv4vWQM43ymoCK283iwvhXxdOIt5mkuP%2BbUamjXAujoco2u96fjSTowIu%2BuKGCOcd6C4ewUU1ko8bVCsybjL2XkBKxwsXlul51oe9j00E89Hi2iugSbI8IQSqqjPQhBHznEZcdd6pI6hDbUoZx6goNrRRJHSnk%2Ba%2B1XsO46kZDeTBZwwAdW3a3eRt9ntrfR%2FYZjd1jaB8GbHy%2FTEjykYsBIQXxjGdU8U0hxfoqwEokD5VmLor68emFW8xTL4F7uLm6jkvDo7J8zNm4zWuwgvxXH6nRdk%2FtK2upGTXotr7nZQ3J7HCUDlBCuTXAX0jvYmdsaqDi9djSv8AIXOeFlFbCNkaMo2h8Go%2BvqXArvqfLnRu%2F%2BBX%2Fvv5u5mafxnFbulKcpEq6m%2BMxcCwxo6IgkzNdKQiML965MfU6B3NgrkJg40bDY7OuwPQJYvUfykR5nR06NzxJWt68fQeDYSq1cTgftkeQPtBiNX04%2Btlw6IgwAK37NyzcomnryCXVleFNDl9sTz9N16PwHhZjSxxKw2quR70pnEqku%2BRUn0ibl2o5MAMrFJVtgx9EVyycC3HYcqFFxd8iWMeHKSTgU9kAUes4E6ebQWA4sqYrMMIDPzMAGOqUBPM47eu6zm29oPmssZafA%2FN4mLabbH9g0fQFsFYskGvb0RaL2usphLPenhjBUR6WezVE14aYH8sWThgK5q1JFVJ3mmGMqENyiLhLk8YG4MJG8zw4HOJ525ZikCL%2FOlaonsEdQVX0w7H0FT7KCFNWFJdxQfuRrTlTn%2F%2FSCkUsR0k%2BQiHfEO187XWwBvG94JKECMmzM2TnNTn07h6ltTgY%2BNDQLiJ3I&X-Amz-Signature=51908a2581562c218334609953448d2d8cf63b000e3876c2d949904998b84304&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHBUHWB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDYkUkbfiG3%2F8sWIfyxFkvUYZkDWyDFK%2Fy25XK9jotIpQIgc7V6oQgM%2Fnel8rkWYTLKUFT005u5z%2BNDTDm%2FoSaK%2F0sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhiNxM%2BxPM601j82CrcA901TEEvbMNC%2FmQ0L1%2BaNn0tSrv4vWQM43ymoCK283iwvhXxdOIt5mkuP%2BbUamjXAujoco2u96fjSTowIu%2BuKGCOcd6C4ewUU1ko8bVCsybjL2XkBKxwsXlul51oe9j00E89Hi2iugSbI8IQSqqjPQhBHznEZcdd6pI6hDbUoZx6goNrRRJHSnk%2Ba%2B1XsO46kZDeTBZwwAdW3a3eRt9ntrfR%2FYZjd1jaB8GbHy%2FTEjykYsBIQXxjGdU8U0hxfoqwEokD5VmLor68emFW8xTL4F7uLm6jkvDo7J8zNm4zWuwgvxXH6nRdk%2FtK2upGTXotr7nZQ3J7HCUDlBCuTXAX0jvYmdsaqDi9djSv8AIXOeFlFbCNkaMo2h8Go%2BvqXArvqfLnRu%2F%2BBX%2Fvv5u5mafxnFbulKcpEq6m%2BMxcCwxo6IgkzNdKQiML965MfU6B3NgrkJg40bDY7OuwPQJYvUfykR5nR06NzxJWt68fQeDYSq1cTgftkeQPtBiNX04%2Btlw6IgwAK37NyzcomnryCXVleFNDl9sTz9N16PwHhZjSxxKw2quR70pnEqku%2BRUn0ibl2o5MAMrFJVtgx9EVyycC3HYcqFFxd8iWMeHKSTgU9kAUes4E6ebQWA4sqYrMMIDPzMAGOqUBPM47eu6zm29oPmssZafA%2FN4mLabbH9g0fQFsFYskGvb0RaL2usphLPenhjBUR6WezVE14aYH8sWThgK5q1JFVJ3mmGMqENyiLhLk8YG4MJG8zw4HOJ525ZikCL%2FOlaonsEdQVX0w7H0FT7KCFNWFJdxQfuRrTlTn%2F%2FSCkUsR0k%2BQiHfEO187XWwBvG94JKECMmzM2TnNTn07h6ltTgY%2BNDQLiJ3I&X-Amz-Signature=e8a368864764291de92b943e1e2eb8f28b89577ea05ba5ec4dc0f715cd315e50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
