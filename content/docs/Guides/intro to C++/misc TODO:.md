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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONDQVSZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMWR61I5JfiTbf64wBqfKQmRl7L88NnLIWMkVpped2AiAseETAWH59zYRn%2BMNmovFvCsVXEOuQBg3kbGL68F%2B8NyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpFa5TZ3WddAt2wzKtwDW4fB8JrJ63mARWAoeP6cMJXG7p0Habrwv%2BzS8NhEGbBdAkY039rM0bReJ2ADMsuZRWx4A8UKvrs2e0jLB711sZScTSwoKaGXETpiX67TbXtWmd89ffjMXRv3RqhKQ65uiJ0jZy%2BWSUzRC5PiZSWvZ%2BivUFNsWAaIIGdL8ZpL5ObpzlQMjmv7POS9vaS3ZGhud71ThxnUzeGuO578htZDfWa9SYrbnTRWJ1Y0Kyfa9dLuwPhTjT8DcGIlhO9h7JasnP1%2F50yB%2FTXFIGOojM0v7KyStXy5A7%2F6BMhY4gzdrC2I5zHZ16QrBntP5P8QiztPXiNQpUiy3e7IxeLfh%2Fhzd22UL8N7zkbjLu3G4PoWCyyoUS9g5Bqiv0suBd3cEV%2FM3Svs0DZfTLdK1OhMAbjXyBkN5ScMAokDhiQOtl6r5AOj9cZ1Kbes0XPbjLLYXNNNjamu97nAgSMGHQCVk17l4NBSX2syukTKytpP0%2B9BVkwnJ2rcqJMSwg2tmVKjvRI2JiQaYaOzz74ZbPXq2%2FIU%2BGB5g%2BQUuYsRaHF7PE1VBWQTVCNwWG9Wcxn5%2FvdT%2FYCt177PR%2Ff34UNz60GwRjeFCIDrYUAIf865Xi9l6j%2BIThnSnjWgYBAXvO2QIiIw2brqwQY6pgGYXUCj8HGFgJz19GLl5xDOhVwVliwG26717XD%2BVhloUBIVnP%2FMoKsI1zym955elkW6iaBAvUaJ8kF4sPuPE308mA%2FancEugcbUVN1moG%2BTxrKflPySxnk91HG3%2BhMX4yZs7ijCg0YlWcqkSIGSKn2vb52PSJcwuaNiGtug7MUvqULK4rvqCLVNJAVzRFOr4McuO3jS9%2BVyIn9MKgpm66uAtOlyBX2K&X-Amz-Signature=5edf10a421b6abee092004e02d958f58c5e1133a15b2b53655210f4e7195ef3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONDQVSZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMWR61I5JfiTbf64wBqfKQmRl7L88NnLIWMkVpped2AiAseETAWH59zYRn%2BMNmovFvCsVXEOuQBg3kbGL68F%2B8NyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpFa5TZ3WddAt2wzKtwDW4fB8JrJ63mARWAoeP6cMJXG7p0Habrwv%2BzS8NhEGbBdAkY039rM0bReJ2ADMsuZRWx4A8UKvrs2e0jLB711sZScTSwoKaGXETpiX67TbXtWmd89ffjMXRv3RqhKQ65uiJ0jZy%2BWSUzRC5PiZSWvZ%2BivUFNsWAaIIGdL8ZpL5ObpzlQMjmv7POS9vaS3ZGhud71ThxnUzeGuO578htZDfWa9SYrbnTRWJ1Y0Kyfa9dLuwPhTjT8DcGIlhO9h7JasnP1%2F50yB%2FTXFIGOojM0v7KyStXy5A7%2F6BMhY4gzdrC2I5zHZ16QrBntP5P8QiztPXiNQpUiy3e7IxeLfh%2Fhzd22UL8N7zkbjLu3G4PoWCyyoUS9g5Bqiv0suBd3cEV%2FM3Svs0DZfTLdK1OhMAbjXyBkN5ScMAokDhiQOtl6r5AOj9cZ1Kbes0XPbjLLYXNNNjamu97nAgSMGHQCVk17l4NBSX2syukTKytpP0%2B9BVkwnJ2rcqJMSwg2tmVKjvRI2JiQaYaOzz74ZbPXq2%2FIU%2BGB5g%2BQUuYsRaHF7PE1VBWQTVCNwWG9Wcxn5%2FvdT%2FYCt177PR%2Ff34UNz60GwRjeFCIDrYUAIf865Xi9l6j%2BIThnSnjWgYBAXvO2QIiIw2brqwQY6pgGYXUCj8HGFgJz19GLl5xDOhVwVliwG26717XD%2BVhloUBIVnP%2FMoKsI1zym955elkW6iaBAvUaJ8kF4sPuPE308mA%2FancEugcbUVN1moG%2BTxrKflPySxnk91HG3%2BhMX4yZs7ijCg0YlWcqkSIGSKn2vb52PSJcwuaNiGtug7MUvqULK4rvqCLVNJAVzRFOr4McuO3jS9%2BVyIn9MKgpm66uAtOlyBX2K&X-Amz-Signature=0feaf47e9c148bdd8abfa6db58cf1e026a5e01f1e2f64443d9bbb8ce4864652d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
