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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRMJZVW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDaECs1glUgtwPGFlcvxRP6pxbtWT54kIjNCWXJ%2F%2F3AIhAMaGGVQchHb6%2Bo%2Bqgs%2B0I1WQTGo4vRCm3RpQYLP9AN7MKv8DCEoQABoMNjM3NDIzMTgzODA1Igw35Yhd0yEwOXxBgk0q3APx6CDOjywSEDxMWrVxma8f18J%2B15dM6x1C7LFudttFa1CermcVU8%2FZeVN6B1QozGMe7QdwFt3HLql0nid5R0lKKJlmIf323UMb%2Bb%2FKLIa%2BGt81ONVg5DEDgCp8ORU0QETA4VZTC6P2zY0Z%2FTJlVTUqxtd1b9S3lktLHVLawXHsXIiL5fDxPmA7NmEy0Tz2WRgNg2ab1saM3LB9GFH1bp236IWWSPeEyrd6OO1XGBPDJRMjwXwCqXfJy4vq48%2BE9CIwUu7o9KVXGNpgSqh8NB%2BPDYq6ngCjyyKWaCU5t%2BP8RrQseWxsQ16tNPSGOkONA%2BF92x%2FbuJ2TsF4NPplqUA0YCNOHugoPRPcwhcnqz01HleDVtuQgx4tVK9mZfTqiGJbatrtoxhGJGfQt0XqI7uxNKRqwWk4kgQf7Rp9rtWUe70mgwG%2FigvzOqTbUWFpdGMst9xJVuZT7UX3mpLzrlaQ0gpvI1ED6tgvqFO9Zz00lX4rEynVkOgljiN5WZN8B7MDJMTmfJocm%2Fmbz5XJhvopnv%2F3p7GQ0%2BAGUxXZCCCW8rZHi9rhtDjUK41E3GNitu8xK%2B0VLVqE0rzjdpxrPoMA2VTghLCICeG4MYmtdLxekeJ1yxowJRVh%2Ba9ycdzCHp%2BG%2BBjqkAQa45qFsMuAE%2Fg5F1Ak22uw8KsvrWfgqR6XkE8QaM6k%2F7YuklW9KAXPeUAh0BeOqfKObjHXuK%2FlcD2Uh7O1kKDOj%2FbehwLCmg%2F18HeDxjHLLGfxdGQ7XcGG%2FroT%2FPdkRpjBur5gLGWRT7dLHD8xLZgOrigziG3iFpxfHhC%2FIiII%2FlKRWswQ0VNm%2FdWKmEvohNP%2FgvC2EhWamPSec0RPzxNaKE8dN&X-Amz-Signature=38576963d2d1cc10c909c988b9b1d757bf25c17a324ab70cf43b2783d20f6ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRMJZVW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDaECs1glUgtwPGFlcvxRP6pxbtWT54kIjNCWXJ%2F%2F3AIhAMaGGVQchHb6%2Bo%2Bqgs%2B0I1WQTGo4vRCm3RpQYLP9AN7MKv8DCEoQABoMNjM3NDIzMTgzODA1Igw35Yhd0yEwOXxBgk0q3APx6CDOjywSEDxMWrVxma8f18J%2B15dM6x1C7LFudttFa1CermcVU8%2FZeVN6B1QozGMe7QdwFt3HLql0nid5R0lKKJlmIf323UMb%2Bb%2FKLIa%2BGt81ONVg5DEDgCp8ORU0QETA4VZTC6P2zY0Z%2FTJlVTUqxtd1b9S3lktLHVLawXHsXIiL5fDxPmA7NmEy0Tz2WRgNg2ab1saM3LB9GFH1bp236IWWSPeEyrd6OO1XGBPDJRMjwXwCqXfJy4vq48%2BE9CIwUu7o9KVXGNpgSqh8NB%2BPDYq6ngCjyyKWaCU5t%2BP8RrQseWxsQ16tNPSGOkONA%2BF92x%2FbuJ2TsF4NPplqUA0YCNOHugoPRPcwhcnqz01HleDVtuQgx4tVK9mZfTqiGJbatrtoxhGJGfQt0XqI7uxNKRqwWk4kgQf7Rp9rtWUe70mgwG%2FigvzOqTbUWFpdGMst9xJVuZT7UX3mpLzrlaQ0gpvI1ED6tgvqFO9Zz00lX4rEynVkOgljiN5WZN8B7MDJMTmfJocm%2Fmbz5XJhvopnv%2F3p7GQ0%2BAGUxXZCCCW8rZHi9rhtDjUK41E3GNitu8xK%2B0VLVqE0rzjdpxrPoMA2VTghLCICeG4MYmtdLxekeJ1yxowJRVh%2Ba9ycdzCHp%2BG%2BBjqkAQa45qFsMuAE%2Fg5F1Ak22uw8KsvrWfgqR6XkE8QaM6k%2F7YuklW9KAXPeUAh0BeOqfKObjHXuK%2FlcD2Uh7O1kKDOj%2FbehwLCmg%2F18HeDxjHLLGfxdGQ7XcGG%2FroT%2FPdkRpjBur5gLGWRT7dLHD8xLZgOrigziG3iFpxfHhC%2FIiII%2FlKRWswQ0VNm%2FdWKmEvohNP%2FgvC2EhWamPSec0RPzxNaKE8dN&X-Amz-Signature=d4b4c3a12983396b479a99a2945c80e8b29c7afa387000354fcc9852a9d91fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
