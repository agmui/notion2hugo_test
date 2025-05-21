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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GS2LG3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDATmys4lxSFZ5ETYvW2H8z6FWkE0%2BBkAkvDhX937tMFAiAPxu4W62DmSiCGm6jCJel49bKoOqFL9jEEnRoHPkQWdiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMByoxTDrSNCusJWgCKtwDOdO5NR4CBmcSaeD2XqTTknIupvEr8J7ZgcUrukffc8TF%2BIRVsvnAwmsbOAOsrKlVenQhg7e%2FNIke1MDXkcFAyBYOQVIXlCxazSjxkJXAy6E6647t37I6O%2FlQR9bcxMqUD%2FhNYJejXwH47ONzlw13wEJazSy2UMWQPNX1Mn6B%2BM%2BVzgYY7RuCP0BY0hFnd1QKg97KahvvtP2ufqQJMVF6bPlvCjNcCar%2BGTINrZg2t8xAbE4Iw5IwdHBvGJjvYyMKJsSD5xdYPDeXEKD007wLPreJcxs1TPrAZVt6zUQ32lVE2dt6mkjIWbF94fdLUNWexxof8Q%2BbpXwP00q2MJF09jRLmvJO44xQSm5l8l88K%2FFU9vWy6vBSxWljnHAbi0T4TzWhDpEVVfl6qz%2BEwbS7ge4PeLkEi1kMG8IqAA6MrkO2Z3KpgIopzfp0EuYNhjY7vD0kNcN9rdKUzUTw1beW0Dbd47LPo%2Fy2od6A9jGVpODKKGJWTp0mTZxiXUG67%2B92Mj6CYKwOgHi%2BOTZSEw1LMMC2Y%2Bu4Q6BYERFcp%2FBvYjoYJeChFOOppGdOHxKnFsUaY%2Bh2ibMmXvHYXRwrAXC7ZNOcK5k2oiPU53bKoMZRQSZ2UVVeivObh9X7aqwwmde4wQY6pgHxoMQ7fnSTlqTJUhdJwYQPMYOHbGNNEuSHVtQOWA%2F3VJBHOfFJ3L753nzbjz%2FNDyJ5vj7fqA54yBBGCXuBd2%2FDpcHRlaF7xd0dORRmT6ztLvtsCzv%2FvdfcegScnpWijCy1rmJXZY08Q%2BKdaMldNWISPgbfX4w3pPRS11INjAfdb17tYHwtusz7Ssc8Cn3%2Be7LOK06XWEVDxezDvELK0m%2FGWbOhclAz&X-Amz-Signature=dacb23ba51ed7283607b075c2d579e29ca65e86546e96fb80f9d95e0d12fdca5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GS2LG3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDATmys4lxSFZ5ETYvW2H8z6FWkE0%2BBkAkvDhX937tMFAiAPxu4W62DmSiCGm6jCJel49bKoOqFL9jEEnRoHPkQWdiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMByoxTDrSNCusJWgCKtwDOdO5NR4CBmcSaeD2XqTTknIupvEr8J7ZgcUrukffc8TF%2BIRVsvnAwmsbOAOsrKlVenQhg7e%2FNIke1MDXkcFAyBYOQVIXlCxazSjxkJXAy6E6647t37I6O%2FlQR9bcxMqUD%2FhNYJejXwH47ONzlw13wEJazSy2UMWQPNX1Mn6B%2BM%2BVzgYY7RuCP0BY0hFnd1QKg97KahvvtP2ufqQJMVF6bPlvCjNcCar%2BGTINrZg2t8xAbE4Iw5IwdHBvGJjvYyMKJsSD5xdYPDeXEKD007wLPreJcxs1TPrAZVt6zUQ32lVE2dt6mkjIWbF94fdLUNWexxof8Q%2BbpXwP00q2MJF09jRLmvJO44xQSm5l8l88K%2FFU9vWy6vBSxWljnHAbi0T4TzWhDpEVVfl6qz%2BEwbS7ge4PeLkEi1kMG8IqAA6MrkO2Z3KpgIopzfp0EuYNhjY7vD0kNcN9rdKUzUTw1beW0Dbd47LPo%2Fy2od6A9jGVpODKKGJWTp0mTZxiXUG67%2B92Mj6CYKwOgHi%2BOTZSEw1LMMC2Y%2Bu4Q6BYERFcp%2FBvYjoYJeChFOOppGdOHxKnFsUaY%2Bh2ibMmXvHYXRwrAXC7ZNOcK5k2oiPU53bKoMZRQSZ2UVVeivObh9X7aqwwmde4wQY6pgHxoMQ7fnSTlqTJUhdJwYQPMYOHbGNNEuSHVtQOWA%2F3VJBHOfFJ3L753nzbjz%2FNDyJ5vj7fqA54yBBGCXuBd2%2FDpcHRlaF7xd0dORRmT6ztLvtsCzv%2FvdfcegScnpWijCy1rmJXZY08Q%2BKdaMldNWISPgbfX4w3pPRS11INjAfdb17tYHwtusz7Ssc8Cn3%2Be7LOK06XWEVDxezDvELK0m%2FGWbOhclAz&X-Amz-Signature=8263b3f89f24d02fbd92afdabff37b0efb44c948ad1d3a94e6ba80c4d1062fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
