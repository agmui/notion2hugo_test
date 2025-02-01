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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VXDY5XO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtdm81SYIgVv6NfpP7PJEGZKnVfklp7hmhkv1a%2FSOPZAiAUf1wLNEGbr23EBq4AcEriBaLSXT2CTcdWOT1Y3qPJpCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRzeG4U6f%2F%2B2WaAkKtwDGQ93lZQIC5%2Fb%2B6ENYpKixRnLZgWY9OPGv2Gh%2FQ7dzfjIS5As0TqzuiIDk%2FZgq92iHqYeuPovFWot5018OiYIeqVRL3gw%2FYxxp6k6Fq9DghANiZWOvP1yJOkV4qVjxrEzjSKfW5S%2BLPXLHLGJX3C8kVQDPh9wcRbZLp%2BIjB4fR6cSebTGocsJgIjSUO5Lp0CCd3R7Cb7IptkAoZL3g36Pp2xNPYBEwuWF7GL75YigXjbVKlLli5qjnsRexa2KfgZW6VqlnYJgzS0e1F0rfSTXauxUSRs8Wlc%2FEZIy3UcWufLKaH6mvruwck6WjiSgSMhhU6E4SnrUeqQjfhGYWGuG3ZkYsK9uywEOgxa%2F%2BKlVfxSQ8H%2B%2FfBUh7Xx04WTuvKNlvySGINbCuBGeugB7YQipVcLdeK3RsBhdk8n%2Fr%2Ft6nIrREi28eGE0y%2Fh49D4EfRl2tUBCKwXf5nsJlBXPy0MKfAuVdr%2FnteI4oXv%2BxyR0RGF8j5g9RW8RK%2BEWHKMXTdM%2BzI3WG%2F1ZfxmKyg08zXzyhWbIboRzA8mmY2V0apPfUHRmWsZVQ0RTLbRX4%2BKwWBEqoGXslWUYKp3aIuFqOWevAt1wEOi9tVT1oOY5HOZdiiKeXJu8FGqyrYFpFwEw06X3vAY6pgFBablZ8j1iOmHbL6h7AWl9GT2tDBzlGN8krOdbXm%2FgLNDxpKR2nx74COb%2F6%2BR4QgrMKszGwArfoxLoK91AVzTUu4FBEXEEdDYuGwgAcwzgf7zJnMy11C6887DzsfijltIScQcTyR8pm20kFkHbbovWJNDRILGCWiskDGY5BCTSW8KryM9v0dVZ7QgQ5plZvrsM2FxYc7mNaLVesE4EBVxM5a%2BtAoAs&X-Amz-Signature=3e51f214023f9447f3ec632416d3b1ebbe5dc9273aafec02b50586d601e1027c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VXDY5XO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtdm81SYIgVv6NfpP7PJEGZKnVfklp7hmhkv1a%2FSOPZAiAUf1wLNEGbr23EBq4AcEriBaLSXT2CTcdWOT1Y3qPJpCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRzeG4U6f%2F%2B2WaAkKtwDGQ93lZQIC5%2Fb%2B6ENYpKixRnLZgWY9OPGv2Gh%2FQ7dzfjIS5As0TqzuiIDk%2FZgq92iHqYeuPovFWot5018OiYIeqVRL3gw%2FYxxp6k6Fq9DghANiZWOvP1yJOkV4qVjxrEzjSKfW5S%2BLPXLHLGJX3C8kVQDPh9wcRbZLp%2BIjB4fR6cSebTGocsJgIjSUO5Lp0CCd3R7Cb7IptkAoZL3g36Pp2xNPYBEwuWF7GL75YigXjbVKlLli5qjnsRexa2KfgZW6VqlnYJgzS0e1F0rfSTXauxUSRs8Wlc%2FEZIy3UcWufLKaH6mvruwck6WjiSgSMhhU6E4SnrUeqQjfhGYWGuG3ZkYsK9uywEOgxa%2F%2BKlVfxSQ8H%2B%2FfBUh7Xx04WTuvKNlvySGINbCuBGeugB7YQipVcLdeK3RsBhdk8n%2Fr%2Ft6nIrREi28eGE0y%2Fh49D4EfRl2tUBCKwXf5nsJlBXPy0MKfAuVdr%2FnteI4oXv%2BxyR0RGF8j5g9RW8RK%2BEWHKMXTdM%2BzI3WG%2F1ZfxmKyg08zXzyhWbIboRzA8mmY2V0apPfUHRmWsZVQ0RTLbRX4%2BKwWBEqoGXslWUYKp3aIuFqOWevAt1wEOi9tVT1oOY5HOZdiiKeXJu8FGqyrYFpFwEw06X3vAY6pgFBablZ8j1iOmHbL6h7AWl9GT2tDBzlGN8krOdbXm%2FgLNDxpKR2nx74COb%2F6%2BR4QgrMKszGwArfoxLoK91AVzTUu4FBEXEEdDYuGwgAcwzgf7zJnMy11C6887DzsfijltIScQcTyR8pm20kFkHbbovWJNDRILGCWiskDGY5BCTSW8KryM9v0dVZ7QgQ5plZvrsM2FxYc7mNaLVesE4EBVxM5a%2BtAoAs&X-Amz-Signature=24c990b53d5f8949db7acce5d387b797076862a8e9455adaf3c9b603ea9c740a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
