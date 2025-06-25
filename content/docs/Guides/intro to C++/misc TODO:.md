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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RWMLJO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE7YKdUZBi5w4xjsO5Lzq96S5MMn5gKzV92mjZRusT1DAiBEauXU2rhRxfRcvFXCO2OMz6StLT%2F9CUagOeyNr7E1uir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMk7rI3fkjGcPOPnZHKtwDhetl5gvAiHU3kMZ8hQbTmL7KSryTtb7p9bYZFleeswYBAX6Mr5hVabA1BaH0KiPlQPyoMGXzvqf%2F4L2JdqsmLAwt9DkQgYB4nIZR%2B3EMyJ0vdYps2LOx4d29hCLsCU6NYpxFhKAGUiIkywWQ%2FXLULwTZJTYgcwe%2BSin6W8skyoyVr9L8kgcYxWPePI1e3hwWWI014IV8Ha4%2F4iw2HXMq1fgnTV5w86%2FelYXFheMNw8S%2BbIz7hkHp8pWHOFcQIotvqZ5dLhQNOuDAOBN08i7Bmum3YgeUcCPl6xDQPARpgtJMymQHLiZE8i2Y5G%2FNcDKbKXD9OGf%2BS7YSjX6YDsnwzmlFtKU4V%2FqGbHzzmZ8EmOZVPsver0L5erUZF7BJG%2BFlYtDFUGyWz5h3qpaK%2BOQG%2BXpXcy3srb4wB1Of1kX6FOUuglrZzxpQ40vqgEWFgRC8RBvZGZ4wGBPdxwVl2gywDp3k0aN9S6hi6cYYr26iLW3syE4fwtG882v2C7ok%2BetX%2BXjT0gbD%2BRKJIhWpixe%2BWTJcJOL65g9qZkDbYL2DylN%2BShn9dVt7nT0IO9ORDrXZtNgYuFpqYDHoq1Bacl23HdTxR4U8mWf5T4mPHFzDdJDkBmnJJFiWn4xDw6ow6o3xwgY6pgHKsnejgU4PVBQJzK4PiFjMsXIgvu69S5tuNOoH2VFtiHKHn34Kw0Xculax9YkJjuwsu0cvH%2FlCJG8sktuEd1JyupDLQ0yOQoS9glvYUPPsy479psnAWMvdzD5g82NyGu4CzdTJft8ypxKWYYqJBJUr7%2FLmDdQUwhQTMCNiTvP%2FSrAT6KPifG2zrA9dxBU68RujF0pVxgxdUhz2nE7d1xIZthNASi5R&X-Amz-Signature=1de796bebe5d8a4c08ce6c45dc7b67c05eba73fb5844bdfb0534d407aa36991d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RWMLJO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE7YKdUZBi5w4xjsO5Lzq96S5MMn5gKzV92mjZRusT1DAiBEauXU2rhRxfRcvFXCO2OMz6StLT%2F9CUagOeyNr7E1uir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMk7rI3fkjGcPOPnZHKtwDhetl5gvAiHU3kMZ8hQbTmL7KSryTtb7p9bYZFleeswYBAX6Mr5hVabA1BaH0KiPlQPyoMGXzvqf%2F4L2JdqsmLAwt9DkQgYB4nIZR%2B3EMyJ0vdYps2LOx4d29hCLsCU6NYpxFhKAGUiIkywWQ%2FXLULwTZJTYgcwe%2BSin6W8skyoyVr9L8kgcYxWPePI1e3hwWWI014IV8Ha4%2F4iw2HXMq1fgnTV5w86%2FelYXFheMNw8S%2BbIz7hkHp8pWHOFcQIotvqZ5dLhQNOuDAOBN08i7Bmum3YgeUcCPl6xDQPARpgtJMymQHLiZE8i2Y5G%2FNcDKbKXD9OGf%2BS7YSjX6YDsnwzmlFtKU4V%2FqGbHzzmZ8EmOZVPsver0L5erUZF7BJG%2BFlYtDFUGyWz5h3qpaK%2BOQG%2BXpXcy3srb4wB1Of1kX6FOUuglrZzxpQ40vqgEWFgRC8RBvZGZ4wGBPdxwVl2gywDp3k0aN9S6hi6cYYr26iLW3syE4fwtG882v2C7ok%2BetX%2BXjT0gbD%2BRKJIhWpixe%2BWTJcJOL65g9qZkDbYL2DylN%2BShn9dVt7nT0IO9ORDrXZtNgYuFpqYDHoq1Bacl23HdTxR4U8mWf5T4mPHFzDdJDkBmnJJFiWn4xDw6ow6o3xwgY6pgHKsnejgU4PVBQJzK4PiFjMsXIgvu69S5tuNOoH2VFtiHKHn34Kw0Xculax9YkJjuwsu0cvH%2FlCJG8sktuEd1JyupDLQ0yOQoS9glvYUPPsy479psnAWMvdzD5g82NyGu4CzdTJft8ypxKWYYqJBJUr7%2FLmDdQUwhQTMCNiTvP%2FSrAT6KPifG2zrA9dxBU68RujF0pVxgxdUhz2nE7d1xIZthNASi5R&X-Amz-Signature=14faf0b1302b54a708cc5c8e875483a21ca39f815995181b9073813897298506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
