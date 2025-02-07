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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWHNR7A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCV2sVVG6wiDmjpiTU%2FyNJ%2FLHcjnZojuDYSrtnQbORP0AIgHfIbdWYkgqkBBx1WrL0YHzYGHUyTfB%2FwtF5BbdeIJxgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPSNR2BtcdGcCZnsGyrcA3wteTCVDP9yHPpm4R0r1w71H3Qm1Ko8UFYbVfG7V3PV3ZUwD4%2FYrWbaIvO8VKzEGi6pgEcpZvluti%2B%2BPSqMQ8zE6mvc9Ut2UzvNsRgzJIU8XhQzePbDY%2F50H4vrLDuz19EhgNuiP4zh1MoA2dYQ6FUA7e3LoQJk22Bz5WgP9mrtlp4m9Bdb1fuOjClpW5A7gwmhkubxYXj7fQ%2Fk7JNb8wK0DWcCPaF9tNVlS3RrP80bfqOpIJKh63yeOJfJCY3VaqRmgeKtfwTsBgkdwBOLMMLtsx%2Bfzu64Qb%2BG73Oop93oqeWbwE4px7MTMOayLaPfrwx1KLypmZH3QowhCGNbYPoIWzsSqIHDw5myeek0eJm2OsKiSnB6juGsIv%2FU5XEnDjX6hMyH7Fzl%2BZmTHG8UyWRBQf3gMYPAZSXVyXyCmEym7Eo6ndvqSwB6Z4xV8xoTUhzMR112f6QG6Jn6oGiljFzqQaWeTdYeTHeTW0Koprdeqru3ndCv2a9S68s2bLRnh0UqfIqc%2BTPHVrMLRMUtE%2BwG4FHtnbs1xriypKbpxeGWx9fFmlgy0byCJGgq6VMok0vB8UZv7N1dhKpH3O4ArZBxE0x45i9N2Sb8k4zxo%2F0sY9G5vr2pD%2B9UPyBaMOKamb0GOqUBYdoa%2BUAk9o%2BatZHuz25mS52he0H0dJHW5sqrbPyWbnGJQS75RflhOmIwBr141zxxQeUtPVyxAYxltdKEERF3xMUdLMXJC9pmb5BEMcwnB9gQ8%2B1hsS1WYblXZ2AN7aqSNHm5uqzVZbazHTo0y3jgJ0dSl41ycW7K%2FnGoYEReXf4UEiUEOZTVnP7s7t0w89bxLYE7rH0ywZ9sdiqrR37CXH%2BWbkHl&X-Amz-Signature=5db6a17745fdf4bfb6edeec720aff58e8566a9b3c8ebb7b07a8ca6f9b85b1675&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWHNR7A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCV2sVVG6wiDmjpiTU%2FyNJ%2FLHcjnZojuDYSrtnQbORP0AIgHfIbdWYkgqkBBx1WrL0YHzYGHUyTfB%2FwtF5BbdeIJxgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPSNR2BtcdGcCZnsGyrcA3wteTCVDP9yHPpm4R0r1w71H3Qm1Ko8UFYbVfG7V3PV3ZUwD4%2FYrWbaIvO8VKzEGi6pgEcpZvluti%2B%2BPSqMQ8zE6mvc9Ut2UzvNsRgzJIU8XhQzePbDY%2F50H4vrLDuz19EhgNuiP4zh1MoA2dYQ6FUA7e3LoQJk22Bz5WgP9mrtlp4m9Bdb1fuOjClpW5A7gwmhkubxYXj7fQ%2Fk7JNb8wK0DWcCPaF9tNVlS3RrP80bfqOpIJKh63yeOJfJCY3VaqRmgeKtfwTsBgkdwBOLMMLtsx%2Bfzu64Qb%2BG73Oop93oqeWbwE4px7MTMOayLaPfrwx1KLypmZH3QowhCGNbYPoIWzsSqIHDw5myeek0eJm2OsKiSnB6juGsIv%2FU5XEnDjX6hMyH7Fzl%2BZmTHG8UyWRBQf3gMYPAZSXVyXyCmEym7Eo6ndvqSwB6Z4xV8xoTUhzMR112f6QG6Jn6oGiljFzqQaWeTdYeTHeTW0Koprdeqru3ndCv2a9S68s2bLRnh0UqfIqc%2BTPHVrMLRMUtE%2BwG4FHtnbs1xriypKbpxeGWx9fFmlgy0byCJGgq6VMok0vB8UZv7N1dhKpH3O4ArZBxE0x45i9N2Sb8k4zxo%2F0sY9G5vr2pD%2B9UPyBaMOKamb0GOqUBYdoa%2BUAk9o%2BatZHuz25mS52he0H0dJHW5sqrbPyWbnGJQS75RflhOmIwBr141zxxQeUtPVyxAYxltdKEERF3xMUdLMXJC9pmb5BEMcwnB9gQ8%2B1hsS1WYblXZ2AN7aqSNHm5uqzVZbazHTo0y3jgJ0dSl41ycW7K%2FnGoYEReXf4UEiUEOZTVnP7s7t0w89bxLYE7rH0ywZ9sdiqrR37CXH%2BWbkHl&X-Amz-Signature=ffa47718011c492c256ecc4b4d0be88dbc2128a595470d57ce1efdc76686b0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
