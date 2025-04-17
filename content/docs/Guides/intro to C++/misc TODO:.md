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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSUZ4AN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9YjUMMr67PRWI5dDJK7EBuibcRfBHVwLQ0GxH%2BU5KAIhAPEbBdC%2FKFCvoXgEleCRa06sJM18vs9pe2EfNhpwZ6i8Kv8DCGAQABoMNjM3NDIzMTgzODA1IgxRe8d8wyOptSXFo%2FIq3AOA1bovwhdP6GFGc9vNbkgLWTwOhiJCgxpeCTcnMswfLkeyelsZlv3uogk4r%2B1doT3iL7UsHvgX%2B5o79o%2FSFTdllQa5dy%2BLuOjbV5emUVg4aIsI%2B7b8UJp0%2FQsXgN3yP5OaPU2tqjs9ZOTH03rMsSWIUsV70WuFOcjQxRC4JErrKUJdSNYY3fLT5cNV6qU0q8Yv%2FA5svSkNNrKuHWgHz%2B%2FFs0qF4lBvZdLUUUXC8tHNUfLz7t8yppUVLrudDFjVh9xVnfuwL%2Fwfl22YpqdcjMXk2SdR1z3%2FJDmxNErfwvEsBrTR49pW854SvwGZlXMg3aZ9l2fduXipuZnkjb0Ig4Lj8jSRs0cXREEv2bWpMTYgRz6itPS%2BBfMxUaDv7741wuVW47IUZVHVPSIQyRdoNFjF11FmzLD4uAJpV9xrznBUCa5KDatoPEUV6eziuOXYRnz1890NGRfoLp7DWJ25FynOIZwt3P65gTWXCg6BwF%2Bdl3VBa3S5fm7FwLXTIbvpbQT9dXwiTuURDukGTQG1RhSW9vRLzMb5lU%2BUV6%2BU0zjbzWh%2F2mHeQSb9uBecTc6BSVC3HQlwuuy2m9kovlQzBBdRn3dqPk8WQJon%2BNKNkt0LFeBKoV5itCz5PGdyqzD2sITABjqkAYrC%2BQbjG5cfs61BeB%2BEBTnn8ghp78ltqVA8MXxI3QU%2BugJN3BFYG7O%2Be8He0PhpfgOLRygrCJ%2FO0PSAz40mdaeA2AcxzUUlK6haATngkUmxad1FSHnLbg3VziBP%2FN07nwMOiPkSst2hs71JEhqDC3haeHMNwohqVQJjcUjlYzknl8btfyd15ThgbRvDk%2BcgCw9AVYj7ARTEfzUF8Tb9RP1YRXak&X-Amz-Signature=63a5f7a919ef156fc44144a5462c3a8d60bccd5380397d614faade346009d044&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSUZ4AN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9YjUMMr67PRWI5dDJK7EBuibcRfBHVwLQ0GxH%2BU5KAIhAPEbBdC%2FKFCvoXgEleCRa06sJM18vs9pe2EfNhpwZ6i8Kv8DCGAQABoMNjM3NDIzMTgzODA1IgxRe8d8wyOptSXFo%2FIq3AOA1bovwhdP6GFGc9vNbkgLWTwOhiJCgxpeCTcnMswfLkeyelsZlv3uogk4r%2B1doT3iL7UsHvgX%2B5o79o%2FSFTdllQa5dy%2BLuOjbV5emUVg4aIsI%2B7b8UJp0%2FQsXgN3yP5OaPU2tqjs9ZOTH03rMsSWIUsV70WuFOcjQxRC4JErrKUJdSNYY3fLT5cNV6qU0q8Yv%2FA5svSkNNrKuHWgHz%2B%2FFs0qF4lBvZdLUUUXC8tHNUfLz7t8yppUVLrudDFjVh9xVnfuwL%2Fwfl22YpqdcjMXk2SdR1z3%2FJDmxNErfwvEsBrTR49pW854SvwGZlXMg3aZ9l2fduXipuZnkjb0Ig4Lj8jSRs0cXREEv2bWpMTYgRz6itPS%2BBfMxUaDv7741wuVW47IUZVHVPSIQyRdoNFjF11FmzLD4uAJpV9xrznBUCa5KDatoPEUV6eziuOXYRnz1890NGRfoLp7DWJ25FynOIZwt3P65gTWXCg6BwF%2Bdl3VBa3S5fm7FwLXTIbvpbQT9dXwiTuURDukGTQG1RhSW9vRLzMb5lU%2BUV6%2BU0zjbzWh%2F2mHeQSb9uBecTc6BSVC3HQlwuuy2m9kovlQzBBdRn3dqPk8WQJon%2BNKNkt0LFeBKoV5itCz5PGdyqzD2sITABjqkAYrC%2BQbjG5cfs61BeB%2BEBTnn8ghp78ltqVA8MXxI3QU%2BugJN3BFYG7O%2Be8He0PhpfgOLRygrCJ%2FO0PSAz40mdaeA2AcxzUUlK6haATngkUmxad1FSHnLbg3VziBP%2FN07nwMOiPkSst2hs71JEhqDC3haeHMNwohqVQJjcUjlYzknl8btfyd15ThgbRvDk%2BcgCw9AVYj7ARTEfzUF8Tb9RP1YRXak&X-Amz-Signature=cfbf46fbe988d8eeba307589dd07f244b013a775fe8973cda9197c4446d9de69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
