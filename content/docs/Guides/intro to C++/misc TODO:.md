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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGQ2O3R%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGzNR8ENyW0RH8PvVg1CMCroOmWc7CjJaBFx8yrlRtxBAiAMCUww2R0eDrxPg7ZU%2F1jp6g6MlNgM4tDPF%2FmwP%2FWc%2FSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMdtQWFXpSWTSZwJKtwD2Nd2MnvlWzSc%2F5rpWwmo9EV47vvIBf7V6Dz0EBBGV4OxoABk4Zwi7xhJQITahyJU%2BZGbFK%2BddK1DWKjRPdepPRW%2FQF4ddYdH0NTKLr%2FPRJJsvcoxSjidrZfSju9tXZyK1%2FpZOOyJQuYbWe5J6mT96PJLZzfFJc4A4frdGWeh9zdTiVC0Zn%2B5VMQxgOpDHr870gmORmqtU6u%2F9OvE6Mvx8WuV%2FqUUh68mOm3MPeR%2BQskQoKHJy0inxQAVodzJ154RfW7gkFXuXHv7Y14K9GfCnXia%2Fcv6ZqPeyT5pzite6cP4j0WPR3BkYpYP0Rhm6xWQFohB8WMkyEDFtzelSQP%2FQoYhV%2FadnEvTq61tNrbTCBWEAhnC2hEhTmWvszHgCZMfW7r6qYWjLkC0knaAnkOqX%2FBHB%2BOcn66WpRSXjQk2wYXTZplbGJeQGIq4EFYie4Lc8pGAJC6ekF9giNXLokK%2B0EiSBqlDX9RSblxg8jSpJvFzTRRR7wPTEE0rmWuiVtaU8OCHh%2B5r%2BqV77zqRKuG0SQarEDse%2Fnjjc7%2Flufvp10G1aNbQxxjxAiG8P9foky4ks20W5k8NDp54IKG%2BLCQWPFpmPe3mgtaZBIWItCqXrruW6MZV5OnZ%2BjJO%2B5MwnvOgwAY6pgGlxIhi88tfUnR8VupjUkSk8vbRopiV1zl3qenRbAUxJUTtO0ueQVM5m6NFfuiI0wxA2Gp4haik4Xt4vCfbUErk%2BEqR5Tlky5KLjIA5MKOfwCLgDWYLB6YA6A523ECE0PDBKTReOmceJjrazQvZdv51XsOPi1Wqb47aYuQ3Zsa06rehdDdLE9ReElyWKzSqZiJGu%2F9Wgk%2FVlJgn8Ffoj5RBQ3esaO1Q&X-Amz-Signature=da7f8d4a9a1ce67193e9f614d0a39aba28becfbd142c6c470c0100b00432fcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGQ2O3R%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGzNR8ENyW0RH8PvVg1CMCroOmWc7CjJaBFx8yrlRtxBAiAMCUww2R0eDrxPg7ZU%2F1jp6g6MlNgM4tDPF%2FmwP%2FWc%2FSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMdtQWFXpSWTSZwJKtwD2Nd2MnvlWzSc%2F5rpWwmo9EV47vvIBf7V6Dz0EBBGV4OxoABk4Zwi7xhJQITahyJU%2BZGbFK%2BddK1DWKjRPdepPRW%2FQF4ddYdH0NTKLr%2FPRJJsvcoxSjidrZfSju9tXZyK1%2FpZOOyJQuYbWe5J6mT96PJLZzfFJc4A4frdGWeh9zdTiVC0Zn%2B5VMQxgOpDHr870gmORmqtU6u%2F9OvE6Mvx8WuV%2FqUUh68mOm3MPeR%2BQskQoKHJy0inxQAVodzJ154RfW7gkFXuXHv7Y14K9GfCnXia%2Fcv6ZqPeyT5pzite6cP4j0WPR3BkYpYP0Rhm6xWQFohB8WMkyEDFtzelSQP%2FQoYhV%2FadnEvTq61tNrbTCBWEAhnC2hEhTmWvszHgCZMfW7r6qYWjLkC0knaAnkOqX%2FBHB%2BOcn66WpRSXjQk2wYXTZplbGJeQGIq4EFYie4Lc8pGAJC6ekF9giNXLokK%2B0EiSBqlDX9RSblxg8jSpJvFzTRRR7wPTEE0rmWuiVtaU8OCHh%2B5r%2BqV77zqRKuG0SQarEDse%2Fnjjc7%2Flufvp10G1aNbQxxjxAiG8P9foky4ks20W5k8NDp54IKG%2BLCQWPFpmPe3mgtaZBIWItCqXrruW6MZV5OnZ%2BjJO%2B5MwnvOgwAY6pgGlxIhi88tfUnR8VupjUkSk8vbRopiV1zl3qenRbAUxJUTtO0ueQVM5m6NFfuiI0wxA2Gp4haik4Xt4vCfbUErk%2BEqR5Tlky5KLjIA5MKOfwCLgDWYLB6YA6A523ECE0PDBKTReOmceJjrazQvZdv51XsOPi1Wqb47aYuQ3Zsa06rehdDdLE9ReElyWKzSqZiJGu%2F9Wgk%2FVlJgn8Ffoj5RBQ3esaO1Q&X-Amz-Signature=479213522807ab45815535cc69a93735baf39c2799e55820ee01aebebc189267&X-Amz-SignedHeaders=host&x-id=GetObject)

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
