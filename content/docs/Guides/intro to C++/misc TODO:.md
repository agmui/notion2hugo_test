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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SHC75Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeEGDPkB0vP1xSeiPNWFXrXoa7uFaTfE1VY%2BMu2NhyAAiBZ7xcZZHkKXSQGvGaGBaHS2mu6Y9zXPhlqXCbE65vgKSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BK5j8OIahaQ0ZVQKtwDggtSTqSQJxrsHg7pkY01HhDkw0gve3zRAYJeB5sOjPumkZ0HdoVNNE5896Q5rCa3wGOt0lorzjOR44tmKD%2F8t3desIn9oSFcxySZ0mDsou2MB5JQtHHNFIW2MdgeX63xWZa23tvg8pxjjlBOrpK7bDSn%2F6RhoUeMgB69rx%2F57CSXNEXoXzwWkcZw1lWp1P75sZVkpf0YrXe6xCLypQMVXbWnM7Lbkybg8H1LDDn59LI3cFgkB0ZBsUaBfGjkzbFGN4uBdOJVcvnGXnJWHkqzfHOVBUgjpZvV9SPvGRUPyN2exwYS5ehWY1hbEIG3VzkxgPMDhC8NORfqrORHeE8Uv572gWhrJ%2FibxAJSNnVHoRCjN51TwMcRVrq%2FjHo0Hn2OQ6NX8W8vFiwiCllaXvTJ76G8AH63EfMzHldTXZuGQKJPpT7rc0QrGR0hUxC8Rdh5wPhEjuem9%2F%2Fj1zV7s%2Bu82rj%2F%2FWDd8hFX3futndNBEKxPFl6cppKFjrQyDS1rldAJzamL%2F4LGwk%2F0uQ5oLEKBOTV%2FQ0Ibg%2FVZbctsjIMU%2Bx092n2DVGjtiiPkeAVqKgvvULUmdOs9s2NMwnpd6tyV4xX%2BSGFIrURu%2FgL1wiCWHT1Akh3hT0pp38wd3RcwoO%2FcwgY6pgF%2FFYsqB6ldExF%2BdpKlxB%2BzZFdI29khkzmXwKhybhLbxwxxvBQB4fGfNTXja73b4aWJMb8yeG%2FomDOlENdR%2BZoluBkEs%2BuI9d6%2B1pRKtGQ5%2BSKVCygiP%2B0KjV3HaKVBBjVOBvXFjKCgyK1CBsuR84ch2K28yz04S7NdRDQj4EyIwFzPjKgoyb8sNLOwA37LySgZ%2B5sfmPGfYyIaWvsYM4vY72teqCnF&X-Amz-Signature=95211cf585b4971b20b03f8c31f930d6fbe39d27344dc0008c77ca423532cc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SHC75Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeEGDPkB0vP1xSeiPNWFXrXoa7uFaTfE1VY%2BMu2NhyAAiBZ7xcZZHkKXSQGvGaGBaHS2mu6Y9zXPhlqXCbE65vgKSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BK5j8OIahaQ0ZVQKtwDggtSTqSQJxrsHg7pkY01HhDkw0gve3zRAYJeB5sOjPumkZ0HdoVNNE5896Q5rCa3wGOt0lorzjOR44tmKD%2F8t3desIn9oSFcxySZ0mDsou2MB5JQtHHNFIW2MdgeX63xWZa23tvg8pxjjlBOrpK7bDSn%2F6RhoUeMgB69rx%2F57CSXNEXoXzwWkcZw1lWp1P75sZVkpf0YrXe6xCLypQMVXbWnM7Lbkybg8H1LDDn59LI3cFgkB0ZBsUaBfGjkzbFGN4uBdOJVcvnGXnJWHkqzfHOVBUgjpZvV9SPvGRUPyN2exwYS5ehWY1hbEIG3VzkxgPMDhC8NORfqrORHeE8Uv572gWhrJ%2FibxAJSNnVHoRCjN51TwMcRVrq%2FjHo0Hn2OQ6NX8W8vFiwiCllaXvTJ76G8AH63EfMzHldTXZuGQKJPpT7rc0QrGR0hUxC8Rdh5wPhEjuem9%2F%2Fj1zV7s%2Bu82rj%2F%2FWDd8hFX3futndNBEKxPFl6cppKFjrQyDS1rldAJzamL%2F4LGwk%2F0uQ5oLEKBOTV%2FQ0Ibg%2FVZbctsjIMU%2Bx092n2DVGjtiiPkeAVqKgvvULUmdOs9s2NMwnpd6tyV4xX%2BSGFIrURu%2FgL1wiCWHT1Akh3hT0pp38wd3RcwoO%2FcwgY6pgF%2FFYsqB6ldExF%2BdpKlxB%2BzZFdI29khkzmXwKhybhLbxwxxvBQB4fGfNTXja73b4aWJMb8yeG%2FomDOlENdR%2BZoluBkEs%2BuI9d6%2B1pRKtGQ5%2BSKVCygiP%2B0KjV3HaKVBBjVOBvXFjKCgyK1CBsuR84ch2K28yz04S7NdRDQj4EyIwFzPjKgoyb8sNLOwA37LySgZ%2B5sfmPGfYyIaWvsYM4vY72teqCnF&X-Amz-Signature=278f6756b5d3f9cfc58c6cbdd968386e3a6756c4a89c05318bcbe1386902bdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
