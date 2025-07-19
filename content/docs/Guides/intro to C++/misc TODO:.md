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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAMF3DS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5m8fVYB%2FlqpwWNpPbs0LIyao2rnJSzuVZn0BLiUBSDAiAuPegXQDdmbWte0%2FdIbmABvhh9UEdu0R2m5lyG42VXeCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4u%2FMTFzNZ66M%2BxCnKtwDI%2Fl9GPiPJ2VwJvQ%2BKjbDQFEIFKHq59foIKs0tSGJb2DEb7LdpcrT0%2Fl%2B1xgF1OaQh4LFVXpl0mu8s6R7cI3Zie9M3JGsD5ZF5KZovFqN8ZZ6CJwFsWAgTtvlgX8vEdl6C%2BPGrfeqF4JQxaWnmJrX%2BjE4YzZnJ7Qnfsiu0wxMkCPcNi6AOTSu7yX98bptFWcSDHCCZWFPfojtMEGMqm743hl3hKW9eXBBzr714LHLoZYsN5ec3RyYaTD2063NmTRC3mbefzE6zDGQfj0yIj64XM%2BrNvpOEWzUSYH0BuxEaIaqH8DdWIKJbXo1EE32XWinBqoPUhr%2BkUlIaTCWAGkNYqiJwZScsk6QGhmEJgpMXs7N3gXKyh%2BG633cNJU2dZilZnGGvOUlXjGdtBTMzGiPmSQOGOw3lubQL2ZcEfH%2BQ9jJdPfqt%2F71RYA0aLdsCK%2FB1VC9xSRJ1neV2ff%2BzYGC7RV1l7dEJgY9pejrdMim25nIzUdAqQubO36mzvcnW0jcVc7HC1sPZZzkXgfbMJVkDHS7ab9BakFpzkV1QLKncQMVUdkl5JDjGG%2FX8Xad4YicUQis%2BNAyf8eOJXwVLBwALtRcM8Se%2B%2FH3AIPrwKJXOlntRjd8rUcFZv%2F%2BKbkw%2FKDswwY6pgFqPMhehEg5IXfG%2B1UwQ%2FIM%2FYEW6xuppWKwfIQW2jnkgUHazMjJkXCQjFZPTF9EXpCpg7jrQaU8lYlV%2F%2FVeCo%2BiieYriE7xnoepJ8V1LbEnQFj5EGAgjwztRbZxkmyqKCpnTrt47FmxEiE4QCiQRBoV2gduhP83nRXGNldOZrXHBpDiQxz8tcwAPnMw%2FMGXy8k0SGptI75Wzfy%2Fz7Oq8utxb1vsHQFa&X-Amz-Signature=4e26198e2cfde0da5ba2303bc61db27e43b7d63c2493a80633a7924673a24c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAMF3DS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5m8fVYB%2FlqpwWNpPbs0LIyao2rnJSzuVZn0BLiUBSDAiAuPegXQDdmbWte0%2FdIbmABvhh9UEdu0R2m5lyG42VXeCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4u%2FMTFzNZ66M%2BxCnKtwDI%2Fl9GPiPJ2VwJvQ%2BKjbDQFEIFKHq59foIKs0tSGJb2DEb7LdpcrT0%2Fl%2B1xgF1OaQh4LFVXpl0mu8s6R7cI3Zie9M3JGsD5ZF5KZovFqN8ZZ6CJwFsWAgTtvlgX8vEdl6C%2BPGrfeqF4JQxaWnmJrX%2BjE4YzZnJ7Qnfsiu0wxMkCPcNi6AOTSu7yX98bptFWcSDHCCZWFPfojtMEGMqm743hl3hKW9eXBBzr714LHLoZYsN5ec3RyYaTD2063NmTRC3mbefzE6zDGQfj0yIj64XM%2BrNvpOEWzUSYH0BuxEaIaqH8DdWIKJbXo1EE32XWinBqoPUhr%2BkUlIaTCWAGkNYqiJwZScsk6QGhmEJgpMXs7N3gXKyh%2BG633cNJU2dZilZnGGvOUlXjGdtBTMzGiPmSQOGOw3lubQL2ZcEfH%2BQ9jJdPfqt%2F71RYA0aLdsCK%2FB1VC9xSRJ1neV2ff%2BzYGC7RV1l7dEJgY9pejrdMim25nIzUdAqQubO36mzvcnW0jcVc7HC1sPZZzkXgfbMJVkDHS7ab9BakFpzkV1QLKncQMVUdkl5JDjGG%2FX8Xad4YicUQis%2BNAyf8eOJXwVLBwALtRcM8Se%2B%2FH3AIPrwKJXOlntRjd8rUcFZv%2F%2BKbkw%2FKDswwY6pgFqPMhehEg5IXfG%2B1UwQ%2FIM%2FYEW6xuppWKwfIQW2jnkgUHazMjJkXCQjFZPTF9EXpCpg7jrQaU8lYlV%2F%2FVeCo%2BiieYriE7xnoepJ8V1LbEnQFj5EGAgjwztRbZxkmyqKCpnTrt47FmxEiE4QCiQRBoV2gduhP83nRXGNldOZrXHBpDiQxz8tcwAPnMw%2FMGXy8k0SGptI75Wzfy%2Fz7Oq8utxb1vsHQFa&X-Amz-Signature=baba3c3d7530fd684969404aa4415f1305e5568f04de7ff7460e6ca8f1443f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
