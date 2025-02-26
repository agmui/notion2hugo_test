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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466543FUQMP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID8bsxSx6%2FrRxgaM%2FNTqT%2FXWiLNRA8wqMUiavHUSbCWuAiBDs2JAGzVG4FXD4Iscv7Bi46UCDLov4zNdWlvK%2FFToIyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaXYzKpsBO4ZrtJ3NKtwDhatagXcFvDwabEzqAyiosqXOZFpjUBXGAvvOTRN6pDLKU9590Qi%2BPbdJxwVVFgkXno6tcBdTXLnv1gyOezhepnaNdRirbqd%2B%2BKSiXANCA41VnikRCsfFle5ezkpE0MvAjC1%2FeELehjI9WufDWgiXm72QbLcOI4qWnNA3FdRw%2BbIR4HN3ChStQwGUib5aT5oWRPW4GYK%2BEPl8V9Fo40vjPdayvceuDISVV7xKvooqicP6%2FW%2BUrDsSJOWAoR9iktaozRPw3tZUBWCGDtEFUcgItUnvNv5qbqSyLfC3ngqjs4I3dodpV95maIVp%2BXRHUIZuN2DxIJgqMwSzgGyRCsiRdRBkbMe5wmGs5LSIPLFIxwgU2uTLimN6PUmAs0km%2FM1iLcdDGBZAr8EVf%2BjJfojSo04WZFgfXaxZ8dptLKwp47dveiID%2F3kIlTuf0537Wpg24%2FNaFJbVxG8abtVTdU3PWjsYl6t1xAZ7%2FZvWYizudO4jtYe6q9ZAjg6LXTA3lu82NBe7RlloqHBXltRUZRXLcAvbGQenPSH1mByHOOsGSmql8rcLGQ%2FYfgskcXyeyO4oVpX3GbBDOjDFcnFoyJoGIraW0uUDNaWJfPPQUO4d6eRajbQJWw323GufdjUwzLuDvgY6pgHDUNI%2BEvzzFnEm%2Bq1QzOkb09jGqxEqX31%2FZdyl2Ju9QKvOw%2FvoKC2CRRNYZXnZATOEfnXu3iPvpgpubFyJonUv7YHtGoVetsDh9gpi5tq8n7xGpRlz%2B6Vvk589xAmjMudebXcPWvd%2FfJi%2FzgN9NpbLAb2N1LTjTW3rQvCLJD5Oo5KbcOJuT%2BYI7Lf3Lc39WrfDplRrj9FB2%2FiNmCO3a8ptGjwX69tR&X-Amz-Signature=6c37bd1109334fa74087cea09e45c97566dce4fdb5b926845ec7ff097f8c9160&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466543FUQMP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID8bsxSx6%2FrRxgaM%2FNTqT%2FXWiLNRA8wqMUiavHUSbCWuAiBDs2JAGzVG4FXD4Iscv7Bi46UCDLov4zNdWlvK%2FFToIyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaXYzKpsBO4ZrtJ3NKtwDhatagXcFvDwabEzqAyiosqXOZFpjUBXGAvvOTRN6pDLKU9590Qi%2BPbdJxwVVFgkXno6tcBdTXLnv1gyOezhepnaNdRirbqd%2B%2BKSiXANCA41VnikRCsfFle5ezkpE0MvAjC1%2FeELehjI9WufDWgiXm72QbLcOI4qWnNA3FdRw%2BbIR4HN3ChStQwGUib5aT5oWRPW4GYK%2BEPl8V9Fo40vjPdayvceuDISVV7xKvooqicP6%2FW%2BUrDsSJOWAoR9iktaozRPw3tZUBWCGDtEFUcgItUnvNv5qbqSyLfC3ngqjs4I3dodpV95maIVp%2BXRHUIZuN2DxIJgqMwSzgGyRCsiRdRBkbMe5wmGs5LSIPLFIxwgU2uTLimN6PUmAs0km%2FM1iLcdDGBZAr8EVf%2BjJfojSo04WZFgfXaxZ8dptLKwp47dveiID%2F3kIlTuf0537Wpg24%2FNaFJbVxG8abtVTdU3PWjsYl6t1xAZ7%2FZvWYizudO4jtYe6q9ZAjg6LXTA3lu82NBe7RlloqHBXltRUZRXLcAvbGQenPSH1mByHOOsGSmql8rcLGQ%2FYfgskcXyeyO4oVpX3GbBDOjDFcnFoyJoGIraW0uUDNaWJfPPQUO4d6eRajbQJWw323GufdjUwzLuDvgY6pgHDUNI%2BEvzzFnEm%2Bq1QzOkb09jGqxEqX31%2FZdyl2Ju9QKvOw%2FvoKC2CRRNYZXnZATOEfnXu3iPvpgpubFyJonUv7YHtGoVetsDh9gpi5tq8n7xGpRlz%2B6Vvk589xAmjMudebXcPWvd%2FfJi%2FzgN9NpbLAb2N1LTjTW3rQvCLJD5Oo5KbcOJuT%2BYI7Lf3Lc39WrfDplRrj9FB2%2FiNmCO3a8ptGjwX69tR&X-Amz-Signature=412d8de14850c67a33379972e95c221aca7855a54932141f475f7535e0b56d15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
