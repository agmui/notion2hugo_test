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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOLOYSF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFVxnGbp%2B4hxKhvFnLktBUReqazVPuzNdhtHeGPDFEnKAiBHlX05TkvKY6x45SbS5jfMGPFsZgibp9NyTcYA42ZQ2Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM%2BGSPwNkWFrVirchAKtwDKsy5x0afqVdEOlI7Qe8xcBnvI%2ByNlX5mtWJutwRvuTmeUImZ4iyMQQzvYmZcIwsUVPHmm%2FU0mhIDr0KfGzIVA4oiv%2BSU%2BoDuVrKsoBlx7fDdi3Sh5afI1SM%2BocBqUjiV6JeG%2FmcOBHhQOgPf2y0acCw9ol%2B%2F4O0lKihBPga9XPUL%2B2JPtPtLW9PhYYiYlOXPdWu6CIBNToO%2FKpGlg93g0Qc3laWgrHcq8OEDZXK5JqRd1%2BlFIIMHy9%2BWuVmajyO5ef5dCTd5MzDLXfawGKT6l0GwbQVk1tFDPdbSmlzmm7UKfB8EumtbUXakw1JoDZfAZWWnCo79i20uIa8FV0Voded6KCaeumdkXTTB1SoZuvVtpaNgN1qVioFoasC86iFOjL7uypaZf9WTr1qkoyh%2FYvDf1dqd5dtHtlOE94P%2BzjlYJEytZpdk3RxwVvh2lPlnt0iQS5PH7EUeIjVkJ%2FAPLtu8jLTf9EeW3d7yCLvC9TR4indIB0AEokC0G4swkEzLtxhPY1mk2ZEohpKJQHPBivrFq%2Bb49wFBBCzBOxNXdqNKttmKFSduUvEtDh2R2D14qByPTZOVJ8yDV2SynAOkY%2FctcG%2B5BZdwIrh2MOwMwLmDGr45thJ7TjdqIMAw9d%2FBwgY6pgFTYFGcjtpCJms0%2BM8SUDwsRR89jEGmNmeiJjwcVEjP6fTqsyWSC6p1FFznzrGac2yyocuPLrYi%2Bqu%2FQ4k0FpXQxHc2fr%2BGOAa9Qvvq0CLvwwhJN2EfFjx75UPiCCgfrUqw3MKFKnqqdlLkv7jpfXuuTlvh5v8b3%2BG1o%2F65xbMEWUjQtzPoXFchG9nt%2B2KMz4NS76q3oLhtGZ0ASbt8noe%2Fjuk3wCqj&X-Amz-Signature=9ff7a7024b38d4b3a5dfb905d2cb30219b47f7526d704d3a79b98171fc3799ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOLOYSF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFVxnGbp%2B4hxKhvFnLktBUReqazVPuzNdhtHeGPDFEnKAiBHlX05TkvKY6x45SbS5jfMGPFsZgibp9NyTcYA42ZQ2Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM%2BGSPwNkWFrVirchAKtwDKsy5x0afqVdEOlI7Qe8xcBnvI%2ByNlX5mtWJutwRvuTmeUImZ4iyMQQzvYmZcIwsUVPHmm%2FU0mhIDr0KfGzIVA4oiv%2BSU%2BoDuVrKsoBlx7fDdi3Sh5afI1SM%2BocBqUjiV6JeG%2FmcOBHhQOgPf2y0acCw9ol%2B%2F4O0lKihBPga9XPUL%2B2JPtPtLW9PhYYiYlOXPdWu6CIBNToO%2FKpGlg93g0Qc3laWgrHcq8OEDZXK5JqRd1%2BlFIIMHy9%2BWuVmajyO5ef5dCTd5MzDLXfawGKT6l0GwbQVk1tFDPdbSmlzmm7UKfB8EumtbUXakw1JoDZfAZWWnCo79i20uIa8FV0Voded6KCaeumdkXTTB1SoZuvVtpaNgN1qVioFoasC86iFOjL7uypaZf9WTr1qkoyh%2FYvDf1dqd5dtHtlOE94P%2BzjlYJEytZpdk3RxwVvh2lPlnt0iQS5PH7EUeIjVkJ%2FAPLtu8jLTf9EeW3d7yCLvC9TR4indIB0AEokC0G4swkEzLtxhPY1mk2ZEohpKJQHPBivrFq%2Bb49wFBBCzBOxNXdqNKttmKFSduUvEtDh2R2D14qByPTZOVJ8yDV2SynAOkY%2FctcG%2B5BZdwIrh2MOwMwLmDGr45thJ7TjdqIMAw9d%2FBwgY6pgFTYFGcjtpCJms0%2BM8SUDwsRR89jEGmNmeiJjwcVEjP6fTqsyWSC6p1FFznzrGac2yyocuPLrYi%2Bqu%2FQ4k0FpXQxHc2fr%2BGOAa9Qvvq0CLvwwhJN2EfFjx75UPiCCgfrUqw3MKFKnqqdlLkv7jpfXuuTlvh5v8b3%2BG1o%2F65xbMEWUjQtzPoXFchG9nt%2B2KMz4NS76q3oLhtGZ0ASbt8noe%2Fjuk3wCqj&X-Amz-Signature=e299456de5c8c01be25d69cf27e0b36c4452d086610c68c88397d3de1552f1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
