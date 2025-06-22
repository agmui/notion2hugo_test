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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6BN5C4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDuCPMGwbK6lq9VFBX11tba0VUez4W2Ica6hyPp8ewAaAiEAhkW1VmsFoSWv6MGIPz9KTXZLoX2yzR0oio%2BZ0Vt73iUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjxlDV068afmrRCMyrcA6eKlsWlzMafV8wcpf5%2BboPjlPlFf772%2BEq7CLbKnUfdra9IamrOSPiT9OlYTs7eBZfgjxXxG8e4JnbXSbf4lSyi5IT9GE%2BhKQwpofIY77BLqCNsPg0euFvMaQ6K5V5ZuAdpnvPKUT%2Fw7Gc8y0jB4XvPRFMYetldQBRndC%2BOY9px4tGWpMGnkjTeMwZ6ZiDNxRO7jjbtWEFW4p%2Fl%2FpwMo9ehhYOII3WsDIA5nuBOt%2BH6j7y81PTMHhoUwVPV7Ig1azkVJmpP7mBYrMFPTTuUP%2FCnKG0OQJf7s%2FYgnLUDFmW89fTthLnToTJ78oIcAqmoQJJHjfis%2FsBCR%2ByIZ2WOOqphXb4dIxll%2FqK%2BAlyeMZbjRtZA%2FvyydWxyMNN1UsQAitfFNSO9vuHRgwL%2BZl7BHzZ561KGqkpSdEn6GoUgqw5UtJMAfc%2FWoZppDxJc74AJ0v3naRQmRt6TxcdrFEloiQuzAxy9alBYVRYeRrIkgG%2FB8PZ3jFbNckvILVVGf5d0YJhtdstjU310pAvOQ67d8FOtBXvGB%2BWTLZ9GIl6SZbZQLnrgh%2FPzkyQRsmz9Al%2FAZNI14wxn4BatR2KpFKM6gxgGQ2UpovGoNg4DlaGlTbpL%2BxAnzTIAzkSG4tWMML2a4MIGOqUBQ9dvRpNTOXqRfQkwQr%2BnBhp%2BtjdQFYHvEk5krjapLE%2FrBDqIxWckC2tMkvOuJNtD%2BMx0jp%2BDnYl0PbJIZHmJBENEg%2FJYA5z1TAphXogn4XGZ03aFLISrBd71VyqJO00H2JAuwT%2FXsNt7iFt1HH0ofGT44fPmhdGWH%2Fq8Cl9XTHBbgJ87Nke5Ib8gBcTu8%2Fah5O%2FS8MJTO1yqbkuBGCcMo8K0B0M3&X-Amz-Signature=75322c877a326e586deb413da5a80907f8194a286cd49e34df08d7f15a718de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6BN5C4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDuCPMGwbK6lq9VFBX11tba0VUez4W2Ica6hyPp8ewAaAiEAhkW1VmsFoSWv6MGIPz9KTXZLoX2yzR0oio%2BZ0Vt73iUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjxlDV068afmrRCMyrcA6eKlsWlzMafV8wcpf5%2BboPjlPlFf772%2BEq7CLbKnUfdra9IamrOSPiT9OlYTs7eBZfgjxXxG8e4JnbXSbf4lSyi5IT9GE%2BhKQwpofIY77BLqCNsPg0euFvMaQ6K5V5ZuAdpnvPKUT%2Fw7Gc8y0jB4XvPRFMYetldQBRndC%2BOY9px4tGWpMGnkjTeMwZ6ZiDNxRO7jjbtWEFW4p%2Fl%2FpwMo9ehhYOII3WsDIA5nuBOt%2BH6j7y81PTMHhoUwVPV7Ig1azkVJmpP7mBYrMFPTTuUP%2FCnKG0OQJf7s%2FYgnLUDFmW89fTthLnToTJ78oIcAqmoQJJHjfis%2FsBCR%2ByIZ2WOOqphXb4dIxll%2FqK%2BAlyeMZbjRtZA%2FvyydWxyMNN1UsQAitfFNSO9vuHRgwL%2BZl7BHzZ561KGqkpSdEn6GoUgqw5UtJMAfc%2FWoZppDxJc74AJ0v3naRQmRt6TxcdrFEloiQuzAxy9alBYVRYeRrIkgG%2FB8PZ3jFbNckvILVVGf5d0YJhtdstjU310pAvOQ67d8FOtBXvGB%2BWTLZ9GIl6SZbZQLnrgh%2FPzkyQRsmz9Al%2FAZNI14wxn4BatR2KpFKM6gxgGQ2UpovGoNg4DlaGlTbpL%2BxAnzTIAzkSG4tWMML2a4MIGOqUBQ9dvRpNTOXqRfQkwQr%2BnBhp%2BtjdQFYHvEk5krjapLE%2FrBDqIxWckC2tMkvOuJNtD%2BMx0jp%2BDnYl0PbJIZHmJBENEg%2FJYA5z1TAphXogn4XGZ03aFLISrBd71VyqJO00H2JAuwT%2FXsNt7iFt1HH0ofGT44fPmhdGWH%2Fq8Cl9XTHBbgJ87Nke5Ib8gBcTu8%2Fah5O%2FS8MJTO1yqbkuBGCcMo8K0B0M3&X-Amz-Signature=dd9f141d87d89b1f35d7cc47355566fad57409aa3a223556bca3d3d77d477658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
