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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZCP5V5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3HLAHeDbbHas7xMm5PtChIqnHDpr18s%2FghUX51bqwOAIhAIVhUtHnC2jWNvC9w7vlWYn1WvxIbW5jvsR%2BV4%2FDw%2FbNKv8DCC4QABoMNjM3NDIzMTgzODA1IgxUAb4m6m%2FI27cjO3Eq3AM9ysxIsmtQDmiB9G%2BjcXys6jyRaUNoEX1WbJdpY63OH2THIYWcuLRl8oaB0oWIhLWtyUfIIBQdBXxsMqBt92vVucFHOuliPE%2BeQXy%2BPjqnJX7AhBDYzMRefNvrW0%2BwWWyXP61HwcvCgRzgwY0nfLUjm58E7lpMue%2FEMFaHYSVMTeiw11c2Hgm%2F%2BMeoaVOhEooBf%2BxjusXgM%2BLcgG5q%2BZVMIqxEm2ibsYdjxLAA%2B446AKA1ocbnFqsZliOAEFUUysK36WH3s9lNKV96W4pQ24aUrgLzUu2DPpzczFgsLU3OEuxRFa1HomqX6mRlcbL85mQmRkZff4ufSjaiwEX9HXWpNdBzO0eMBUmf1WDI2Jr7fVyMUchjz65Bv%2BA9cRDkESzOyTC5cP%2BNfIlEuq9wSaqbM0BuK3df3%2BGmOKhDrj7XjVLeEznnZLLeWZBDIBP1HMRXw%2BqfzBHsKVm8GJARL8UcXEwTeJYm7a%2FV6eF%2BWt4ZbvN0qijpzlfHFQ8QsTOO5NypEk6JBd2ajAX7BT7AuiiAlHFX%2FhUL8gVEpo8k2yIEUgIfC2aN5aThEqkN%2F8TVQtNAWAkfSy9EL3MRQr%2Fd6%2BxQVNK1WuwpWhC%2Fe0jTva3M9zPTZ7%2F9tMGeivYtvDCc%2Bo%2B%2FBjqkAZKQ%2Bpv19uMxc6QrTsAPUImRkipCOxACd0Sh7DtFe0wkKYA22cRXLzK15vkQWjmqOlSFTjDVSdtx8gj6V5e45gl8xQW5ZLk%2BBRAgQK%2FfUo8NKZYAYf3XNopkoGDloUlllZUprDKPP05KbPklV%2FavcgIWsCjLESR0D37HK%2Fp0rCKi3gp4zDNw1dvsanNa3ikCx87MGKvM6I0IuYmrCDPj%2FQucCahQ&X-Amz-Signature=7326d6a334b5ad44e2a3c531b89cb35ae58aed2b3f6ae7663a0520a89d3b1c76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZCP5V5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3HLAHeDbbHas7xMm5PtChIqnHDpr18s%2FghUX51bqwOAIhAIVhUtHnC2jWNvC9w7vlWYn1WvxIbW5jvsR%2BV4%2FDw%2FbNKv8DCC4QABoMNjM3NDIzMTgzODA1IgxUAb4m6m%2FI27cjO3Eq3AM9ysxIsmtQDmiB9G%2BjcXys6jyRaUNoEX1WbJdpY63OH2THIYWcuLRl8oaB0oWIhLWtyUfIIBQdBXxsMqBt92vVucFHOuliPE%2BeQXy%2BPjqnJX7AhBDYzMRefNvrW0%2BwWWyXP61HwcvCgRzgwY0nfLUjm58E7lpMue%2FEMFaHYSVMTeiw11c2Hgm%2F%2BMeoaVOhEooBf%2BxjusXgM%2BLcgG5q%2BZVMIqxEm2ibsYdjxLAA%2B446AKA1ocbnFqsZliOAEFUUysK36WH3s9lNKV96W4pQ24aUrgLzUu2DPpzczFgsLU3OEuxRFa1HomqX6mRlcbL85mQmRkZff4ufSjaiwEX9HXWpNdBzO0eMBUmf1WDI2Jr7fVyMUchjz65Bv%2BA9cRDkESzOyTC5cP%2BNfIlEuq9wSaqbM0BuK3df3%2BGmOKhDrj7XjVLeEznnZLLeWZBDIBP1HMRXw%2BqfzBHsKVm8GJARL8UcXEwTeJYm7a%2FV6eF%2BWt4ZbvN0qijpzlfHFQ8QsTOO5NypEk6JBd2ajAX7BT7AuiiAlHFX%2FhUL8gVEpo8k2yIEUgIfC2aN5aThEqkN%2F8TVQtNAWAkfSy9EL3MRQr%2Fd6%2BxQVNK1WuwpWhC%2Fe0jTva3M9zPTZ7%2F9tMGeivYtvDCc%2Bo%2B%2FBjqkAZKQ%2Bpv19uMxc6QrTsAPUImRkipCOxACd0Sh7DtFe0wkKYA22cRXLzK15vkQWjmqOlSFTjDVSdtx8gj6V5e45gl8xQW5ZLk%2BBRAgQK%2FfUo8NKZYAYf3XNopkoGDloUlllZUprDKPP05KbPklV%2FavcgIWsCjLESR0D37HK%2Fp0rCKi3gp4zDNw1dvsanNa3ikCx87MGKvM6I0IuYmrCDPj%2FQucCahQ&X-Amz-Signature=73e652980e581cb6ce23fac69f749add1d59cfe687070f3f58f71091b24c8a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
