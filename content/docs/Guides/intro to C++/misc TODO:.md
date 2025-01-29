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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLZSHOL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD0RBrRYXojuDJBRXOV47EUlD6a%2FTG%2FZ0E7Gyod%2Fd4pQgIhAMH5t0qosCIGTqgXGfOnete6RUjC2zg3lKC0ibYK2n2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjRN1u8sJgJpNNUXcq3AO5dFj8pFGYHbENr0nsp68H3aplkqBDZFOYeIW1Ya5DG%2FlbXoMrf5jHecM7ynEFjsARFsgFnSKJvWZlnZzDQpRBTHiRrt2OMWxyrjyw51hb1XUdd9WJDTrxh9OH2J9bsb0Y5FcjYtUVNTiB89eszWuVSaH%2FP1fSQnjOClqNKiZ34lMNPSXogKgnXjcOBCj2rM3gSH3a6NM7DShQPUKKuBpveEDRSQ%2F8lnQp0gJEABccg%2FOns0ne%2FzHs0bMPKgvb5W65z3sYX7ulHhhgBjmAL4n%2B2Ik4DMSuXBzvdyB6C0XFLjxbiw5Addxgfgh35up6rUUSLoHFmn64n0IB2conenw9e168VsmSmUg0vDrZ1fZRRD3WjZXiARgzLLfzb6OumCNYKs0dmgP%2FEKnK9oieOm7dnRszMMLAf9SFvomkMzd4r0ORAkXYYstuIEmXjPZPLuuKWmik3fE%2Fz7zfvPgDJpu5syxrO7b20OA3TvtcGNquElLmdE31rQKzIv20yYZTvehGQ63Wo3oPUzlwIHew9Z8TPF%2B%2F6PvBwttGHib9mI2DxbiqjNraN%2Fsh%2BQKbrZkIUSBft4qnBDg3G6cjyqQqYxJOGDK0gFPCsyQ0G91mC1mlG%2F6uwsnIcsACbcqX7DCO6uW8BjqkARelBVyrY14cvpujap4nVnDfV5IR4QbDW%2B%2BXYgAQIT8e3B%2FnvH7sq18KEyBJ%2FOfOitOeZpWNK4QeLHZGpxNZemkiyKRrwI8Xv8ei0l89Wm2GLGzmedh6aaJVwrzX5fxy%2BT0v2BhuiIEoEdvULvC29o4Hmf923M36xyz%2BFK5tOoFz7O5G8GwCvEhHkIGqp6IBZoa1ylbbUVJIMXNOdKpuF%2BNZvmHA&X-Amz-Signature=c221c83a5327bbb74b8a8bcb2e4b867772363b080cb3524292f170bfce7058b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLZSHOL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD0RBrRYXojuDJBRXOV47EUlD6a%2FTG%2FZ0E7Gyod%2Fd4pQgIhAMH5t0qosCIGTqgXGfOnete6RUjC2zg3lKC0ibYK2n2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjRN1u8sJgJpNNUXcq3AO5dFj8pFGYHbENr0nsp68H3aplkqBDZFOYeIW1Ya5DG%2FlbXoMrf5jHecM7ynEFjsARFsgFnSKJvWZlnZzDQpRBTHiRrt2OMWxyrjyw51hb1XUdd9WJDTrxh9OH2J9bsb0Y5FcjYtUVNTiB89eszWuVSaH%2FP1fSQnjOClqNKiZ34lMNPSXogKgnXjcOBCj2rM3gSH3a6NM7DShQPUKKuBpveEDRSQ%2F8lnQp0gJEABccg%2FOns0ne%2FzHs0bMPKgvb5W65z3sYX7ulHhhgBjmAL4n%2B2Ik4DMSuXBzvdyB6C0XFLjxbiw5Addxgfgh35up6rUUSLoHFmn64n0IB2conenw9e168VsmSmUg0vDrZ1fZRRD3WjZXiARgzLLfzb6OumCNYKs0dmgP%2FEKnK9oieOm7dnRszMMLAf9SFvomkMzd4r0ORAkXYYstuIEmXjPZPLuuKWmik3fE%2Fz7zfvPgDJpu5syxrO7b20OA3TvtcGNquElLmdE31rQKzIv20yYZTvehGQ63Wo3oPUzlwIHew9Z8TPF%2B%2F6PvBwttGHib9mI2DxbiqjNraN%2Fsh%2BQKbrZkIUSBft4qnBDg3G6cjyqQqYxJOGDK0gFPCsyQ0G91mC1mlG%2F6uwsnIcsACbcqX7DCO6uW8BjqkARelBVyrY14cvpujap4nVnDfV5IR4QbDW%2B%2BXYgAQIT8e3B%2FnvH7sq18KEyBJ%2FOfOitOeZpWNK4QeLHZGpxNZemkiyKRrwI8Xv8ei0l89Wm2GLGzmedh6aaJVwrzX5fxy%2BT0v2BhuiIEoEdvULvC29o4Hmf923M36xyz%2BFK5tOoFz7O5G8GwCvEhHkIGqp6IBZoa1ylbbUVJIMXNOdKpuF%2BNZvmHA&X-Amz-Signature=ac789b6c68f103034d48d03b058d31b048e024c01d90c06b5e0d2d0f1e372d90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
