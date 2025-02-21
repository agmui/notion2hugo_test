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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHVKEEN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErq0bZeZGUsCJCUhlty7phBenAjws8azfVLRKNyvzPNAiA3XedoQpd%2FOJFRv3wlySZIIfLaQvOUUWlGOH%2FHcIwgsyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgGHQS%2BpNIjQW7EmKtwDtQimj7AExAIUK%2BxOJvUU49HnyD%2B7BNa5VfTQKvfPKfZl0jhOqR1MFNsy4r7vJ7wJY6G0hbEzlvKYI9l3bTUrZc9zvn4zWStIz7MveSszLCxHG6ue%2BWsI3gTSvQS1TI1bRhv8EWNBE1wRJhxqdSwHkRXh1jvdzmC4Jw4%2FWmSLo%2BCPyCUF60A%2FN0I9yd78ybxcD0%2BffsirPsaCgY0Mxd6fa7LYHmOvxK9wQru%2FKZnPhnseBaFra88SKgu19EmrwL4zB6EsF0yVEzIJpgO84MLSbpGMpWLWAhMo0G%2BQOQogx%2Bpiob97A2LmX60xFdxWpFCTL%2Fd9GQty4KeiqcpOvFm%2FhIa7kBvFfIjpCiiVpE4s6RdVByBAcuJUbhQemRGgQEW6YMl38n3s%2B%2Boax1eBmcCfJyI9KMXB3UyPRk9gw%2FVCFqcgyd9k%2FCCkWE%2BnyqhQ14djtofE%2B3QGvp04CvkWBKr3m0EEofoNyRJB6axyRUM3datgkfWC6rkGmLjt%2F8xcgKoZ6IFfh1NeB%2BRle%2Bi23F2zt%2BTfKpSEuXfqAjny2NVGoxs4%2FJ4I73zNuFCrpNeH6DlJG1RzVQedr90TEykJEGaErx%2FNtzIHKM6ZFAAWoTinhkS7nmPGBcFhvB9%2F%2FYEw%2B4PfvQY6pgGrTYujerJXbDdJSy7QLgpAUoNTRmI67puwthUpjUA7e2%2FqkP9KH4rf%2FjAThbi%2Btf3TKKdZmCgy6VuOTiXEko0T%2Fxn%2F7cTQdxYSy7ESXCLR3IVfgA4qPl0GdUueTRqwTz4bW81jKYokxziPoGQk5gb7WxFdi%2FmD3Et9htTQWAdHwHpQN5uqU3kCJfdAzYHi3QefD%2Fi%2FmO%2BssHaA%2BY%2FGD3Z9i0XHuKJ6&X-Amz-Signature=a8d28e2fc4cdcb688d58f65a0d09b86678399e3582efda72948cddf387c2f8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHVKEEN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErq0bZeZGUsCJCUhlty7phBenAjws8azfVLRKNyvzPNAiA3XedoQpd%2FOJFRv3wlySZIIfLaQvOUUWlGOH%2FHcIwgsyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgGHQS%2BpNIjQW7EmKtwDtQimj7AExAIUK%2BxOJvUU49HnyD%2B7BNa5VfTQKvfPKfZl0jhOqR1MFNsy4r7vJ7wJY6G0hbEzlvKYI9l3bTUrZc9zvn4zWStIz7MveSszLCxHG6ue%2BWsI3gTSvQS1TI1bRhv8EWNBE1wRJhxqdSwHkRXh1jvdzmC4Jw4%2FWmSLo%2BCPyCUF60A%2FN0I9yd78ybxcD0%2BffsirPsaCgY0Mxd6fa7LYHmOvxK9wQru%2FKZnPhnseBaFra88SKgu19EmrwL4zB6EsF0yVEzIJpgO84MLSbpGMpWLWAhMo0G%2BQOQogx%2Bpiob97A2LmX60xFdxWpFCTL%2Fd9GQty4KeiqcpOvFm%2FhIa7kBvFfIjpCiiVpE4s6RdVByBAcuJUbhQemRGgQEW6YMl38n3s%2B%2Boax1eBmcCfJyI9KMXB3UyPRk9gw%2FVCFqcgyd9k%2FCCkWE%2BnyqhQ14djtofE%2B3QGvp04CvkWBKr3m0EEofoNyRJB6axyRUM3datgkfWC6rkGmLjt%2F8xcgKoZ6IFfh1NeB%2BRle%2Bi23F2zt%2BTfKpSEuXfqAjny2NVGoxs4%2FJ4I73zNuFCrpNeH6DlJG1RzVQedr90TEykJEGaErx%2FNtzIHKM6ZFAAWoTinhkS7nmPGBcFhvB9%2F%2FYEw%2B4PfvQY6pgGrTYujerJXbDdJSy7QLgpAUoNTRmI67puwthUpjUA7e2%2FqkP9KH4rf%2FjAThbi%2Btf3TKKdZmCgy6VuOTiXEko0T%2Fxn%2F7cTQdxYSy7ESXCLR3IVfgA4qPl0GdUueTRqwTz4bW81jKYokxziPoGQk5gb7WxFdi%2FmD3Et9htTQWAdHwHpQN5uqU3kCJfdAzYHi3QefD%2Fi%2FmO%2BssHaA%2BY%2FGD3Z9i0XHuKJ6&X-Amz-Signature=7c286352737358b719e2b384dc7ae27e2e37e24727b58208c291e6d23c256595&X-Amz-SignedHeaders=host&x-id=GetObject)

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
