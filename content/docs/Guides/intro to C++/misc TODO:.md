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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQU67FR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAWBjQhg4PitOwK8JQjyRIqycCa%2Bd1WwoRuxWxQKZwNAiBlpRx63g3JHMX7Af6qecepZJwt6rdrd4ueqAv8KdpDAiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf19UpsBromN3J2XuKtwDP4lFvsRkNnoeiFjMuSnL6L5LhBA8s1nD8E3tgNAY%2FpnGOh1IOsujk%2FoLR1Mcb5xINRSq8ReaOyVTuXeNWGuZ3QUZmVilU0zE3Zk%2FD6tPJ%2Fe6IZ5sL%2Fk4uzHqB5YXTIuM3w29N4xxWu2lw0qdM5nD3x6ZxvX9P9EE4CG3rTeUOwYF62vy76kgnoaKaNWP0vovI5j9tNEE7PuAQsZyujY%2FSemSiGG8N4vGnpLad62GCXor9oPkRlBrJmdTyGjUwidFLNfomedXuhl1P5EJmFAvz9RlnpCiItoiQ8X6wUbKMRpF%2B149SviI350Cro7H2Sr4U8ubhWBkg7xJ7wxFgSLgb%2BRKiAEPc0nuYx6qbfKBCxckjSX1vcaOEPSgThyyvl3HnKL2eKqrV%2BHQobV9eVH%2BUuAaZpHciZBsU4eQZ4JjCZ0u0WkcW5kF%2FQmGMeIRsuwZEXbt%2BsCYrO0W5jCsuFzkVQT7aYhqotf5xCzvbY1OOQof9LwKOW28pA7HC%2BUd%2FkvxPy3oR3L8BE3r%2FWc%2BVLo%2F0c6CIMdb537JLZoE%2F%2F9HHU5aUZY8xcJnby%2BNR9ocZ02acObzaiKHBoQmExDWN6ZkZx3A4V%2BAqijD90kwZm6ajBvQ2itOL%2B0lV6SB2p4wgqvvvAY6pgFoEjuTWwgcm7HainmyLSjTgWnQLf2sm4GLiXUYcqHO36MftGR03u1r1qNnj5L2GRAUVwx6pX0zfHMqu%2FAr5S6r5As40ZpxuINlCgsH%2BqZIcbJqF3jEdtSQpmv2skJlIiq5AN83aIrgn%2BKszfHH6UxJEESOGE8uXswN1%2B5Cm%2FXgm0gh12s5Ht5IvweHJlBlvxaQa%2BCo6bifX6lVj84OH%2BjAISqo04N%2F&X-Amz-Signature=1f065270e4da583232fc74c19ba3ae58f1c00f3c8a4c22707f7c6abbf88944c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQU67FR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAWBjQhg4PitOwK8JQjyRIqycCa%2Bd1WwoRuxWxQKZwNAiBlpRx63g3JHMX7Af6qecepZJwt6rdrd4ueqAv8KdpDAiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf19UpsBromN3J2XuKtwDP4lFvsRkNnoeiFjMuSnL6L5LhBA8s1nD8E3tgNAY%2FpnGOh1IOsujk%2FoLR1Mcb5xINRSq8ReaOyVTuXeNWGuZ3QUZmVilU0zE3Zk%2FD6tPJ%2Fe6IZ5sL%2Fk4uzHqB5YXTIuM3w29N4xxWu2lw0qdM5nD3x6ZxvX9P9EE4CG3rTeUOwYF62vy76kgnoaKaNWP0vovI5j9tNEE7PuAQsZyujY%2FSemSiGG8N4vGnpLad62GCXor9oPkRlBrJmdTyGjUwidFLNfomedXuhl1P5EJmFAvz9RlnpCiItoiQ8X6wUbKMRpF%2B149SviI350Cro7H2Sr4U8ubhWBkg7xJ7wxFgSLgb%2BRKiAEPc0nuYx6qbfKBCxckjSX1vcaOEPSgThyyvl3HnKL2eKqrV%2BHQobV9eVH%2BUuAaZpHciZBsU4eQZ4JjCZ0u0WkcW5kF%2FQmGMeIRsuwZEXbt%2BsCYrO0W5jCsuFzkVQT7aYhqotf5xCzvbY1OOQof9LwKOW28pA7HC%2BUd%2FkvxPy3oR3L8BE3r%2FWc%2BVLo%2F0c6CIMdb537JLZoE%2F%2F9HHU5aUZY8xcJnby%2BNR9ocZ02acObzaiKHBoQmExDWN6ZkZx3A4V%2BAqijD90kwZm6ajBvQ2itOL%2B0lV6SB2p4wgqvvvAY6pgFoEjuTWwgcm7HainmyLSjTgWnQLf2sm4GLiXUYcqHO36MftGR03u1r1qNnj5L2GRAUVwx6pX0zfHMqu%2FAr5S6r5As40ZpxuINlCgsH%2BqZIcbJqF3jEdtSQpmv2skJlIiq5AN83aIrgn%2BKszfHH6UxJEESOGE8uXswN1%2B5Cm%2FXgm0gh12s5Ht5IvweHJlBlvxaQa%2BCo6bifX6lVj84OH%2BjAISqo04N%2F&X-Amz-Signature=f89a10045a48d401c7e787f1957374a49aeb7de6b6d3c3b2d9147462c6d509e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
