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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJ7JRM2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA8J%2BFCPoQy8cKJqdYj9TWJXaMD%2FYSmj8jB90oQBJSP8AiEAup4WrrJaNXWHpIARF6uYlQjaYfBCxGYHw0B84rUGXuUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCptLtcjy4WM%2FKr0SrcAx9Sdfv9B68opESbCiSljF9t0Aw8OGaEyRWxDnMWnXSilV2gJUTxZFPkAp9wKuL87jNqs2iq4T985jIN6Ja%2FmiPbAD9GUd8wg0M7ITkrtpyloR1Pe%2Bsx0SUbTimtjWvz74ZDhgx%2BRPwjrW8EiwZwbuOMbmkYdWwJmwffybgVhe1J7%2FQUcF2X21iYsbAWNwj%2B%2Fv3WGIde2U0kqM%2BWoE%2BGKPc0QLQZ%2FW%2B4qTTI61%2BKg9lCs%2Fqo2dxlToBSjCXKCGyTPW%2Bx8gw2tjgeTL8qGLqRvDjPUlSL2quMcVvJapJjXedYaILUGXQdRDlMi56jpOvXT6V9FPcymLGiLgZDP%2B7X5muQuq3SJWhF3RGud4LiTZhinlpfySef19TK5xfYqGp6P67POs711Z2DQ%2FsOkqeXmG80g5HCxrDZYAVAChRHXtu1wvitruTXNwThlbAq%2BEi5pCneXpeWQpISaueh%2FkVQtMV%2B%2FI41Fz5MK4zvpG2nLNpktszATany8smXZ72i51PlmNzAsItAG5TPaqMMpCc9lOTnyChyyAiC87GPWIltQnxSLq5ZQGqmOp%2B9DtJZUTMRwLKC%2BxVmP1%2Ft0CmEcP%2BZLqKWVzUsJrqF5G%2BAhRmVM%2B34Nu6AFV%2FM2NG7gMvCMOL6uL4GOqUBEANeDI5iJp5aFYQs16OySOgu6%2FZZfVAEd8HUSsXidW9cwekjmtCJ7ZYzZvMkK546Rvurk7h%2FWUv5uQrefpCKnFb69XJK5E00IvCXarTgIa2WjHIUrIWAmhY3W6o0zp4qoPAhh5DKEjxtd4XpB3fjmFeq17ugTmT2qkyOLhDEiR8CNPKpuPpUAXeoVWchWo%2FrZONvYtP4qREdvo5SII%2FSHQtisz3J&X-Amz-Signature=b8929a69b065d1a2eb7809ecf89cc04a7fb409577b5c2bf39608fa2a7fdc9a58&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJ7JRM2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA8J%2BFCPoQy8cKJqdYj9TWJXaMD%2FYSmj8jB90oQBJSP8AiEAup4WrrJaNXWHpIARF6uYlQjaYfBCxGYHw0B84rUGXuUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCptLtcjy4WM%2FKr0SrcAx9Sdfv9B68opESbCiSljF9t0Aw8OGaEyRWxDnMWnXSilV2gJUTxZFPkAp9wKuL87jNqs2iq4T985jIN6Ja%2FmiPbAD9GUd8wg0M7ITkrtpyloR1Pe%2Bsx0SUbTimtjWvz74ZDhgx%2BRPwjrW8EiwZwbuOMbmkYdWwJmwffybgVhe1J7%2FQUcF2X21iYsbAWNwj%2B%2Fv3WGIde2U0kqM%2BWoE%2BGKPc0QLQZ%2FW%2B4qTTI61%2BKg9lCs%2Fqo2dxlToBSjCXKCGyTPW%2Bx8gw2tjgeTL8qGLqRvDjPUlSL2quMcVvJapJjXedYaILUGXQdRDlMi56jpOvXT6V9FPcymLGiLgZDP%2B7X5muQuq3SJWhF3RGud4LiTZhinlpfySef19TK5xfYqGp6P67POs711Z2DQ%2FsOkqeXmG80g5HCxrDZYAVAChRHXtu1wvitruTXNwThlbAq%2BEi5pCneXpeWQpISaueh%2FkVQtMV%2B%2FI41Fz5MK4zvpG2nLNpktszATany8smXZ72i51PlmNzAsItAG5TPaqMMpCc9lOTnyChyyAiC87GPWIltQnxSLq5ZQGqmOp%2B9DtJZUTMRwLKC%2BxVmP1%2Ft0CmEcP%2BZLqKWVzUsJrqF5G%2BAhRmVM%2B34Nu6AFV%2FM2NG7gMvCMOL6uL4GOqUBEANeDI5iJp5aFYQs16OySOgu6%2FZZfVAEd8HUSsXidW9cwekjmtCJ7ZYzZvMkK546Rvurk7h%2FWUv5uQrefpCKnFb69XJK5E00IvCXarTgIa2WjHIUrIWAmhY3W6o0zp4qoPAhh5DKEjxtd4XpB3fjmFeq17ugTmT2qkyOLhDEiR8CNPKpuPpUAXeoVWchWo%2FrZONvYtP4qREdvo5SII%2FSHQtisz3J&X-Amz-Signature=d593f68ca7bddfa04979e57caa32744769011967db204becc2c7b1efaf69c7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
