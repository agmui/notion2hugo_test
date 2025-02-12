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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWSL2C%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjcbddNKk92Eoofvll4z1KN0Wf7HSgoUSpX9iggNL50AIgJk8ri1zwJBPo1Ctw7K3Q9hiQI9y2ks7MbktzTHHkB3UqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjFMJWd7KtDbL3u0yrcA0vbGXQYyjFLWOQXc3wmh68ff%2B0n4u%2BSkxtDJayYibxHk6hzyGLFYV44Audl6eDje3WmJUwSEKbGqDQSOGbiAqLWIVjEWDkxWvWruH1e4A1i3HkbxqgLVyXcNu3may6nk0oTn6S6cY8tG5wL7Y3DIL5Moep1ngOskwWkvWTH0YJWCsXvytTaofqF7csZkTZ5duHYLiyGNvBYjBO88zPMMlwPgXHCjFvnZmTgQBvwPVDbcyngk1sjJWY%2Bvmso8wB9J51m%2BDdVbZOifHi0m%2FXTWV%2BF0WHEDHqv5CgXG%2FZmGoCodiBnVcqOo8W51qrfU6QYRH8WJNwh7zXnYCIuLWpv6WStJNYcVIdIBy8uWFGxXPcPdWwtniKQmC3fTR6CXzBsP88IRPuI4JKQCT5DVc0%2FXCLcIPJLDc%2FA3YuG6SOccOT64sQVOj3D3R0Ly4XCN2t7r2N1NMu%2BRzs%2F%2BlOO%2FhBjGBCJ2w2yKd8W3Nn7DSyBA%2Fx0D%2BJEbb03x54w%2FkV4x%2BR07apiIhchLrbKLL8aLDPKSij7NFRmUx3GvVXX0zQfmg52hMno03Q%2BhxnidbrBNdE8UUy4fM4gYJi39RboMN2n1m5OVseVjd6mZw9%2BZWUQkdFo%2B62LWWSz8kqLLN%2BZMLaCsb0GOqUBaZeLT%2F9iTQ2jqkJr5jBE%2FtSDwrHdf6lLxHiZlt9oOTL0kL4z8k3YyjUpYAuuk2rZCrddFv8vvTHa9Ov%2Fts6kSxbVB%2BDnX7QI7cVeUBx1ewtsCJXilBZRvdYIkQpNpIMoXkAWwQh3N2mndN24522VcTVSH80byLW6hUxjKumbeBfgxM9RFiRrNS7U2h76vR1EpqXE17wniDqoHIKrJRe61xEGamwP&X-Amz-Signature=e72fd9c6fc1bebe6c023537cd97cd142fa04ad50c6827b62d302116009c69cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWSL2C%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjcbddNKk92Eoofvll4z1KN0Wf7HSgoUSpX9iggNL50AIgJk8ri1zwJBPo1Ctw7K3Q9hiQI9y2ks7MbktzTHHkB3UqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjFMJWd7KtDbL3u0yrcA0vbGXQYyjFLWOQXc3wmh68ff%2B0n4u%2BSkxtDJayYibxHk6hzyGLFYV44Audl6eDje3WmJUwSEKbGqDQSOGbiAqLWIVjEWDkxWvWruH1e4A1i3HkbxqgLVyXcNu3may6nk0oTn6S6cY8tG5wL7Y3DIL5Moep1ngOskwWkvWTH0YJWCsXvytTaofqF7csZkTZ5duHYLiyGNvBYjBO88zPMMlwPgXHCjFvnZmTgQBvwPVDbcyngk1sjJWY%2Bvmso8wB9J51m%2BDdVbZOifHi0m%2FXTWV%2BF0WHEDHqv5CgXG%2FZmGoCodiBnVcqOo8W51qrfU6QYRH8WJNwh7zXnYCIuLWpv6WStJNYcVIdIBy8uWFGxXPcPdWwtniKQmC3fTR6CXzBsP88IRPuI4JKQCT5DVc0%2FXCLcIPJLDc%2FA3YuG6SOccOT64sQVOj3D3R0Ly4XCN2t7r2N1NMu%2BRzs%2F%2BlOO%2FhBjGBCJ2w2yKd8W3Nn7DSyBA%2Fx0D%2BJEbb03x54w%2FkV4x%2BR07apiIhchLrbKLL8aLDPKSij7NFRmUx3GvVXX0zQfmg52hMno03Q%2BhxnidbrBNdE8UUy4fM4gYJi39RboMN2n1m5OVseVjd6mZw9%2BZWUQkdFo%2B62LWWSz8kqLLN%2BZMLaCsb0GOqUBaZeLT%2F9iTQ2jqkJr5jBE%2FtSDwrHdf6lLxHiZlt9oOTL0kL4z8k3YyjUpYAuuk2rZCrddFv8vvTHa9Ov%2Fts6kSxbVB%2BDnX7QI7cVeUBx1ewtsCJXilBZRvdYIkQpNpIMoXkAWwQh3N2mndN24522VcTVSH80byLW6hUxjKumbeBfgxM9RFiRrNS7U2h76vR1EpqXE17wniDqoHIKrJRe61xEGamwP&X-Amz-Signature=b210abcc471d10e5ca9057d76f8e375351cba8d3de7874e1cd45e022c79649d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
