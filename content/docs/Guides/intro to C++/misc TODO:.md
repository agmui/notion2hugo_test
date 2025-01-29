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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIYG2KW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFwBzgtFmLjKRp3vCFLfPl%2F%2BJSbXb9c8%2FXy%2FLN175vCJAiEA%2FPxe8caKeEOAxuim1X8DrXL5jQEKrhE1kNLhC7vcRWUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfk1DGjTIOBEGSUAyrcAz23i3%2F20lZqjfhztRaYOMVqCkf22KnqEtYuOEexI1QG6vhnNMCcCc7QLQTcGM3F4njDw%2BwxQnfFUtJzadHKbKAda7BRBB3YXkMmbNsvry9K2Fi8TEwVsjiyPt%2FL%2BIR1vfAtpKTmeuF37tx6tUYHHvpG2xI0RSEZCdXlPJ52J46IIQeKjRh7d81GhaaVIRqX6mNU2XCTvQLZ0AquzXcCXVxt%2BW%2BsC82cmFflIkMPeXr3YPiAJFUTnXF%2FFDZfJWeBbrduhEiY6A2N0FZizd7Cj%2BPPWqTTEVGEFsklce4cddxR4On7nJXoQqdfsqY62oSU%2B83QbKBqoXqGqucjQdn2Lxo%2F2FFHU1lSA6hjQe1jFIW9Yef%2BOTLTAfHUdeLbSvaEyGvtyOyDWzYdDMI9rnoGl8wgxeXNSV%2FqLGICsoTOh5j7yg7ORD0Q38%2FJFD4r5P4%2Btdwa6plUb5xgFZHPyAEgLRA9%2FJ8X0PstiyDndWpiPDikpk%2Bh2ILy6JEr3oKV3kmo4Shrl6vn0O7Sw0w5%2FaZRA39UspamjMCYztMC820fFq8uyc%2BTHVGVMZPwob%2Fn5ql%2FE7QpoKXzw7TepSBkLHhlx7fcOYZ5suPdttefAqjTcyi6ACa63FiB4QPR0dJNMKq85rwGOqUBSVavKR9tdWBd4%2FLDODlqBsNAcRlG64xbmdhuwLVtOxxiNYyGWF5EXIqxfxQPkuKt0SjG4yhcUA8E%2Bp9SpSro6NdeC6Q26MxAFRO2atyHSe5XPpoTCJdS8PqlOF2XbRZeFoHwUOkXE6ILur4T3IOYeqBXoLB69LXjjb%2B7SGrFUshQhCEk%2FPVxc69tetkPW8fTFW8yviX4LE8ctSWIEnxCXvjEFIYv&X-Amz-Signature=55605b40f8dc3df2da1abb0dcc2a75a604ae4682c457b5650f72b95236fca373&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIYG2KW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFwBzgtFmLjKRp3vCFLfPl%2F%2BJSbXb9c8%2FXy%2FLN175vCJAiEA%2FPxe8caKeEOAxuim1X8DrXL5jQEKrhE1kNLhC7vcRWUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfk1DGjTIOBEGSUAyrcAz23i3%2F20lZqjfhztRaYOMVqCkf22KnqEtYuOEexI1QG6vhnNMCcCc7QLQTcGM3F4njDw%2BwxQnfFUtJzadHKbKAda7BRBB3YXkMmbNsvry9K2Fi8TEwVsjiyPt%2FL%2BIR1vfAtpKTmeuF37tx6tUYHHvpG2xI0RSEZCdXlPJ52J46IIQeKjRh7d81GhaaVIRqX6mNU2XCTvQLZ0AquzXcCXVxt%2BW%2BsC82cmFflIkMPeXr3YPiAJFUTnXF%2FFDZfJWeBbrduhEiY6A2N0FZizd7Cj%2BPPWqTTEVGEFsklce4cddxR4On7nJXoQqdfsqY62oSU%2B83QbKBqoXqGqucjQdn2Lxo%2F2FFHU1lSA6hjQe1jFIW9Yef%2BOTLTAfHUdeLbSvaEyGvtyOyDWzYdDMI9rnoGl8wgxeXNSV%2FqLGICsoTOh5j7yg7ORD0Q38%2FJFD4r5P4%2Btdwa6plUb5xgFZHPyAEgLRA9%2FJ8X0PstiyDndWpiPDikpk%2Bh2ILy6JEr3oKV3kmo4Shrl6vn0O7Sw0w5%2FaZRA39UspamjMCYztMC820fFq8uyc%2BTHVGVMZPwob%2Fn5ql%2FE7QpoKXzw7TepSBkLHhlx7fcOYZ5suPdttefAqjTcyi6ACa63FiB4QPR0dJNMKq85rwGOqUBSVavKR9tdWBd4%2FLDODlqBsNAcRlG64xbmdhuwLVtOxxiNYyGWF5EXIqxfxQPkuKt0SjG4yhcUA8E%2Bp9SpSro6NdeC6Q26MxAFRO2atyHSe5XPpoTCJdS8PqlOF2XbRZeFoHwUOkXE6ILur4T3IOYeqBXoLB69LXjjb%2B7SGrFUshQhCEk%2FPVxc69tetkPW8fTFW8yviX4LE8ctSWIEnxCXvjEFIYv&X-Amz-Signature=c73a056c81790d0f05e99d1103cf16d1f382828730d30528dd7d3b2178bb5b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
