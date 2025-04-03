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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMI3YAG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAwq3QZG7y19IQtXBtLoDBzMPdQdCeiOiiLFzVFrvoYeAiBA0c38UDEjU%2B%2BwviAW8ctQaM7dgKlS0H1bW0NEFbsDmCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcpLkeL1NZjVFL5RKtwDsO1igXViuFr7Eys7czrdJ8Jr397GE%2BYh7XMhl6g2z5wi4vbCVvM1f2syCub9g49NlkuaxE7kKTaJ209ktOnjjSh6qLXwtvAeEpteI8SVsyobMi5EDHdFAoyhfQNlmx5xU47DSSaSZOwmg%2BAMeREfHYiWNb6cvBG9fMoG7xpgekvAOxfBgZroryD1ZcqRpKwRVMzSI9a7gpCbGsXfDy0SjBostUHy6C7I3XERV7LrtRhEqIRZ6fzfIhXbbT9vwYv%2BZnLtwLgY%2BL%2B2OTD2kxfbVf7XqGfEc5TlMHkyM7ci1AifEwod1HqyRxJTbhj0E6Tr7nqIPm1wGAjLazf%2BPxebCC1O%2B%2ByVP1a5ff9r9YqbXfjNps5BGO6jU639bKO68RwfpdQpjnFcM8HKz6LBHmoobB9H0ZjT9RGTsak%2BGVLqJn%2BfrxqFXhgA%2BnTumlxAuaXqsZZb9xDX%2B4B1ZB7ya6Z4ZEDMZfDa2eV0GOIHkkBuxaA2350sQUhJWYt2eDO1LZVAtmmhPsGYBch9r8V6QspPg8SZBA2CBH1%2FbIGliRJWKuSia6h1hEKWbY3fZcODIMH2tgxhefBJnaWE%2Bno6Tm%2BrPlDR7qa%2B6EnSrwVpaIVlN1Ou5zNtMuYw2ZhaA%2FAwt8i3vwY6pgHzTp%2F2IS09oCxNow8Wjcac0j1ni%2BooM22mzko2yEl7cKTfPD%2FKCU7Gz1Fxmvg07bzP%2BQvLg63TDMbcT9sRO3XHGU43Eg%2BijM3gn%2BGgRkNC1P0x66yLaEatrFqeVCGV9OYN207Ei5F4WCo5og73n2TT5VVcqe0O3QbMIDIMIyYZDvYeSRAYlADgA6JeAyTedCdRjwjYSqb7gPSuJYXHkv5Fg8ROg1pt&X-Amz-Signature=80585639f689b27130cdcfdce67a8a5542723d403fd67f20c4e745cce171ab36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMI3YAG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAwq3QZG7y19IQtXBtLoDBzMPdQdCeiOiiLFzVFrvoYeAiBA0c38UDEjU%2B%2BwviAW8ctQaM7dgKlS0H1bW0NEFbsDmCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcpLkeL1NZjVFL5RKtwDsO1igXViuFr7Eys7czrdJ8Jr397GE%2BYh7XMhl6g2z5wi4vbCVvM1f2syCub9g49NlkuaxE7kKTaJ209ktOnjjSh6qLXwtvAeEpteI8SVsyobMi5EDHdFAoyhfQNlmx5xU47DSSaSZOwmg%2BAMeREfHYiWNb6cvBG9fMoG7xpgekvAOxfBgZroryD1ZcqRpKwRVMzSI9a7gpCbGsXfDy0SjBostUHy6C7I3XERV7LrtRhEqIRZ6fzfIhXbbT9vwYv%2BZnLtwLgY%2BL%2B2OTD2kxfbVf7XqGfEc5TlMHkyM7ci1AifEwod1HqyRxJTbhj0E6Tr7nqIPm1wGAjLazf%2BPxebCC1O%2B%2ByVP1a5ff9r9YqbXfjNps5BGO6jU639bKO68RwfpdQpjnFcM8HKz6LBHmoobB9H0ZjT9RGTsak%2BGVLqJn%2BfrxqFXhgA%2BnTumlxAuaXqsZZb9xDX%2B4B1ZB7ya6Z4ZEDMZfDa2eV0GOIHkkBuxaA2350sQUhJWYt2eDO1LZVAtmmhPsGYBch9r8V6QspPg8SZBA2CBH1%2FbIGliRJWKuSia6h1hEKWbY3fZcODIMH2tgxhefBJnaWE%2Bno6Tm%2BrPlDR7qa%2B6EnSrwVpaIVlN1Ou5zNtMuYw2ZhaA%2FAwt8i3vwY6pgHzTp%2F2IS09oCxNow8Wjcac0j1ni%2BooM22mzko2yEl7cKTfPD%2FKCU7Gz1Fxmvg07bzP%2BQvLg63TDMbcT9sRO3XHGU43Eg%2BijM3gn%2BGgRkNC1P0x66yLaEatrFqeVCGV9OYN207Ei5F4WCo5og73n2TT5VVcqe0O3QbMIDIMIyYZDvYeSRAYlADgA6JeAyTedCdRjwjYSqb7gPSuJYXHkv5Fg8ROg1pt&X-Amz-Signature=4f9b86f136a5f63328f3e6754a3d398a3176b63969ef92694758098d6ea4196e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
