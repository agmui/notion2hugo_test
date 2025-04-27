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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SMJBQM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfFONWoTYpblYDM3r5QZEfLK9QLXfTKQCkHWgaIH9%2FAiAfxX8%2FCCir6cl4rve26cf%2BA5R0pJc7MbyprdV%2BSF%2Btyir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUlb2g8TsrFGzjMBfKtwDMgqp3pNM2kvoFlAd5550NBnF2HaaQ6U0U2wI52OrucUvG9zi%2BMwzBesH2nfYA3vGBkQD6qtZ245ePCwWQn%2Fzg1FrA8iuZlMpAaK5eKBPhOYYodheXQb9%2BwJKj3U%2FHkfT%2FqNRYnYzTvPNSCeZgVv%2B4j8NiRlTpoMIqlOlV%2FVt%2BPAl8kK%2BTy6Rul3Que8%2FN%2FGxMRLS2mMVLryTHumj2fj8Y8AMJHIo2PUrE9ai1PU1VyPJEiZL8F868sZ4uUGnYvGxmQorevfrCgDuePAXK1g2Omuj2zI7Xc6XCF2gdAOtWUcierJIpJlWhQKKHaGLkkntEnc3S6fdo8fhMYM5lMZpxp1GOG%2FVm7%2BqXrDAt%2FOOmI82bq%2BRW35aOp%2BYWZ%2B51ZIPj3HlPRSH2Z%2FExWrN8Mp8UvfYMsTEk0HP2VavqypNLdq%2FIgB%2B%2BBjA1Jbb1ybr42D4cC1hIOQIAiAgWDbbAQ6XxXAX7OsLGdN0ZLzlCrupHqBCVeHaOprBi11oeKsdNsmAGXqN9rO5EeAuHVJe%2BbPu3ZHsnN9kBqyhjmGCIVe3GJ6jL%2BbU5SV%2B6dhJM%2FlzRnkSAy6AKwBmFMAXXxaCTq%2FP33A36F9sKZkHIgZ9XWvNa5jMN33CA36iffy8Ao4w0L%2B1wAY6pgHcsNrebp%2F9NjDnU8JwG2Ux8ujkZF3%2FcuWApXm4Ojzi%2B9yQ%2FW%2FeKNH%2BspgQYeoC%2BaP6rIq7PQXxdN3VJP6jLJMdGhO0tOxFaUTRCxii6IVbppGmn0JxYF%2BAdik9pA7Y1rbcw5XAn%2F4fh4THVIwvuo%2Fo0Vvdeb6nn3SVVmglNVZe7DkT37jaNeOO%2B40Z5TnQLYZHmZkuuC6KqKt1iq0k%2F5PbFCoEprvc&X-Amz-Signature=9f06b28f467c55cb0137d3311e4d0ff046df95afdab46fa90fd78d7e2364da13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SMJBQM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfFONWoTYpblYDM3r5QZEfLK9QLXfTKQCkHWgaIH9%2FAiAfxX8%2FCCir6cl4rve26cf%2BA5R0pJc7MbyprdV%2BSF%2Btyir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUlb2g8TsrFGzjMBfKtwDMgqp3pNM2kvoFlAd5550NBnF2HaaQ6U0U2wI52OrucUvG9zi%2BMwzBesH2nfYA3vGBkQD6qtZ245ePCwWQn%2Fzg1FrA8iuZlMpAaK5eKBPhOYYodheXQb9%2BwJKj3U%2FHkfT%2FqNRYnYzTvPNSCeZgVv%2B4j8NiRlTpoMIqlOlV%2FVt%2BPAl8kK%2BTy6Rul3Que8%2FN%2FGxMRLS2mMVLryTHumj2fj8Y8AMJHIo2PUrE9ai1PU1VyPJEiZL8F868sZ4uUGnYvGxmQorevfrCgDuePAXK1g2Omuj2zI7Xc6XCF2gdAOtWUcierJIpJlWhQKKHaGLkkntEnc3S6fdo8fhMYM5lMZpxp1GOG%2FVm7%2BqXrDAt%2FOOmI82bq%2BRW35aOp%2BYWZ%2B51ZIPj3HlPRSH2Z%2FExWrN8Mp8UvfYMsTEk0HP2VavqypNLdq%2FIgB%2B%2BBjA1Jbb1ybr42D4cC1hIOQIAiAgWDbbAQ6XxXAX7OsLGdN0ZLzlCrupHqBCVeHaOprBi11oeKsdNsmAGXqN9rO5EeAuHVJe%2BbPu3ZHsnN9kBqyhjmGCIVe3GJ6jL%2BbU5SV%2B6dhJM%2FlzRnkSAy6AKwBmFMAXXxaCTq%2FP33A36F9sKZkHIgZ9XWvNa5jMN33CA36iffy8Ao4w0L%2B1wAY6pgHcsNrebp%2F9NjDnU8JwG2Ux8ujkZF3%2FcuWApXm4Ojzi%2B9yQ%2FW%2FeKNH%2BspgQYeoC%2BaP6rIq7PQXxdN3VJP6jLJMdGhO0tOxFaUTRCxii6IVbppGmn0JxYF%2BAdik9pA7Y1rbcw5XAn%2F4fh4THVIwvuo%2Fo0Vvdeb6nn3SVVmglNVZe7DkT37jaNeOO%2B40Z5TnQLYZHmZkuuC6KqKt1iq0k%2F5PbFCoEprvc&X-Amz-Signature=5082b162496c15856f065ab956f819715b863fb79d904057812b39077692f400&X-Amz-SignedHeaders=host&x-id=GetObject)

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
