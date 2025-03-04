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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3USIBPX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5mn%2BRTmu%2FYZjf%2B7DYvvD15pvJAB3OWKBMmJ%2BFPUkgeQIhAMNCTC8i6g1swMpIm7MDJmbhi7ue0PJaQbIq7AsALP2bKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCmll3dCap60OAyIgq3ANHrAXUKfNW%2FUaF0%2BnCnOVW7lcR6PvGQqpFqpOIwS0kA9PRN9H4c0Lv2MA18P0i7oLkvVTIn9ek8r8WsGPc5fIVKKZh%2FR5D66keaQI%2FyEOREgAZVUZ5%2BW4bJerAOx6tB052QoIx7OmBlm%2FyhBOgvrq0bdFWXSPXYamSLa07mX1vUm8Pm%2FePub7ZgyBM8L3BFrpyjdU2s77jyOHGqhIxGspJz1W0oXNLIw01xuGo15uLxEHOOGekO3kRnfVR4wmwLmsWH%2BKeVjlcj6IFNwpaO91Zwh4vu5JP%2FA2l%2BNSW8tPwKFg6CN3Gw3wWeDI7HCAQJo76ko3H0WJMG3DuWAF%2Fmsh%2FAzmmzbDTIYb7pMiEd9L%2B9yyZpVxppaVUmVLHXNKE4CxHPifiP2mKzn43Qx5v2ZmdD1rildHAwdUaeUfgpsc9niu%2BJnOiKwFKTLXyr%2FRRzUxuxlyBIGr7kO%2FHV3KxokTZVeIwwBY0DgXKiba76cNWLKGJSwjJUiS6eePOAguTa1y%2BJ6UUKn1l7CuZrDbE5UB0bIXeqEd3l1x2%2Bh%2B351XgiGp4pn8ZNj9WK9DWWuVmlAHgLOfQ18JQPpYLxFkuu6sfjffBt8wjEXKxDdcH8cOQl5wpybPvg53XAbrACjCF4pq%2BBjqkAfP6I4B1vqDM8zKYhdIXC9ojwdO6UCdc1lNT%2FWoB5N3FuCjJqpTseiVlORDwpfcyaBLOmC6pjVy3fpREaz1IdDWU0Thp1r4nVZkPOItNdP0gBcnd4ITOfaSftGbIdnzFKEj1lv61ooQmHHafucHcElVOGWgdjjP0nf3%2Fh1Vcy0d9zO9oe2oFq4QoK9wDvt43MM918ALyUO8z6xhY0qAPb43QMAoX&X-Amz-Signature=dcd695fc41a9972176f15f3c4fd919ab5e0b1f2faf3f078751a45c021217a905&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3USIBPX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5mn%2BRTmu%2FYZjf%2B7DYvvD15pvJAB3OWKBMmJ%2BFPUkgeQIhAMNCTC8i6g1swMpIm7MDJmbhi7ue0PJaQbIq7AsALP2bKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCmll3dCap60OAyIgq3ANHrAXUKfNW%2FUaF0%2BnCnOVW7lcR6PvGQqpFqpOIwS0kA9PRN9H4c0Lv2MA18P0i7oLkvVTIn9ek8r8WsGPc5fIVKKZh%2FR5D66keaQI%2FyEOREgAZVUZ5%2BW4bJerAOx6tB052QoIx7OmBlm%2FyhBOgvrq0bdFWXSPXYamSLa07mX1vUm8Pm%2FePub7ZgyBM8L3BFrpyjdU2s77jyOHGqhIxGspJz1W0oXNLIw01xuGo15uLxEHOOGekO3kRnfVR4wmwLmsWH%2BKeVjlcj6IFNwpaO91Zwh4vu5JP%2FA2l%2BNSW8tPwKFg6CN3Gw3wWeDI7HCAQJo76ko3H0WJMG3DuWAF%2Fmsh%2FAzmmzbDTIYb7pMiEd9L%2B9yyZpVxppaVUmVLHXNKE4CxHPifiP2mKzn43Qx5v2ZmdD1rildHAwdUaeUfgpsc9niu%2BJnOiKwFKTLXyr%2FRRzUxuxlyBIGr7kO%2FHV3KxokTZVeIwwBY0DgXKiba76cNWLKGJSwjJUiS6eePOAguTa1y%2BJ6UUKn1l7CuZrDbE5UB0bIXeqEd3l1x2%2Bh%2B351XgiGp4pn8ZNj9WK9DWWuVmlAHgLOfQ18JQPpYLxFkuu6sfjffBt8wjEXKxDdcH8cOQl5wpybPvg53XAbrACjCF4pq%2BBjqkAfP6I4B1vqDM8zKYhdIXC9ojwdO6UCdc1lNT%2FWoB5N3FuCjJqpTseiVlORDwpfcyaBLOmC6pjVy3fpREaz1IdDWU0Thp1r4nVZkPOItNdP0gBcnd4ITOfaSftGbIdnzFKEj1lv61ooQmHHafucHcElVOGWgdjjP0nf3%2Fh1Vcy0d9zO9oe2oFq4QoK9wDvt43MM918ALyUO8z6xhY0qAPb43QMAoX&X-Amz-Signature=9180c3d75f2e7adbef20a85d6ce7d4e22effe6e34ab233b42acf496b12d2f7af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
