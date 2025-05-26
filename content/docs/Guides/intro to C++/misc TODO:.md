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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVGDBRH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD2YXsUi%2FQdH8oBeKzign2TDCI5k%2FFbFZ2wDFZnnpfDpQIgNYakFNGSQ9uwDj7Q5bIWKu7U4gCnEqrIJTAYm77ybwwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGQ0l8VE8IMdoKaRySrcA96YmBHRHqRqxh9bznZRCNyW5qB0a0XOvhiRVC%2Fe299MDfvxciA7sX4jPOJ78m67maUF65CKGp7MGYYtRlrOSjqBMRfWbgAmufZZshw1f7ILmGSZ26U7VqPQ441ks9xbwAM5mMGIwzx4av47%2FD4%2FTWgskmGmIV%2Biro6emnCVCZk3DjKG16L7Kh2CdZwneDwb3%2FnvuUfCrbrP2%2BqncZiJ3ytaPuAWRN0CKHXRoD2zTXWp%2B9wLR%2Fov4HPvt9%2FUMDoUC3TlY0pQzu%2BH47bd9ftrZOnL08WI9ybPy4LVQnL8%2Btu8gHHygE0M1ZtnHKJGHMP8lKm9KUIZLFG%2FSBB2j5YbO%2BuwynXUBuHUzodpBiRTmSYRwbOAt%2BeLnddeFv%2FRj%2F5UBuOB15Xu0snhf89qB%2FF9DCl%2BPFb3FSWb%2FIPqqWUEZ7Mt7G077xtY33rdE%2FWUh7dhcRomdiB%2BipVGnBJf2DYXBQ1%2BORl0qpKHmvSpY02pXuiOCHEbwmbwbTLsyWxdWshw%2FrWjFBbckiB8NHQVtFnJysqKWTMhcQh4xFfNdmeeUYdah%2FX1XgfFMTR3QZx7%2Bvn0aT1VseIhWeqXqoRajqKPTV%2BASaNrz5IHhZDkDkLvhyLUIpPLE30HX72PGcTMMNKN0MEGOqUBDl%2FccYhO7tfCaudq1NonKrZVCO1t%2F5H6zjLc4Pb9n96C5L%2B1S6bISK85zvZJk0B5vkVLAOpXsYSllhNmT6Q8%2FbdttNk%2Bifa11H2DzgBp2Jcgq%2BL1fzO1SAcqYOKx3P6LM24m9iPoHH4OyNvTgp9BaKIM5wx014TNDAPZsfT4PB%2FR7PhDHQoU%2BJGkZlTxdc%2B%2BIvB17E%2BCN8HipswnssMkiexANkjF&X-Amz-Signature=afc3ed15c58636499d32e97e76a439bb48a3b3e2bfe0f6e4f8077d62fcc04525&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVGDBRH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD2YXsUi%2FQdH8oBeKzign2TDCI5k%2FFbFZ2wDFZnnpfDpQIgNYakFNGSQ9uwDj7Q5bIWKu7U4gCnEqrIJTAYm77ybwwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGQ0l8VE8IMdoKaRySrcA96YmBHRHqRqxh9bznZRCNyW5qB0a0XOvhiRVC%2Fe299MDfvxciA7sX4jPOJ78m67maUF65CKGp7MGYYtRlrOSjqBMRfWbgAmufZZshw1f7ILmGSZ26U7VqPQ441ks9xbwAM5mMGIwzx4av47%2FD4%2FTWgskmGmIV%2Biro6emnCVCZk3DjKG16L7Kh2CdZwneDwb3%2FnvuUfCrbrP2%2BqncZiJ3ytaPuAWRN0CKHXRoD2zTXWp%2B9wLR%2Fov4HPvt9%2FUMDoUC3TlY0pQzu%2BH47bd9ftrZOnL08WI9ybPy4LVQnL8%2Btu8gHHygE0M1ZtnHKJGHMP8lKm9KUIZLFG%2FSBB2j5YbO%2BuwynXUBuHUzodpBiRTmSYRwbOAt%2BeLnddeFv%2FRj%2F5UBuOB15Xu0snhf89qB%2FF9DCl%2BPFb3FSWb%2FIPqqWUEZ7Mt7G077xtY33rdE%2FWUh7dhcRomdiB%2BipVGnBJf2DYXBQ1%2BORl0qpKHmvSpY02pXuiOCHEbwmbwbTLsyWxdWshw%2FrWjFBbckiB8NHQVtFnJysqKWTMhcQh4xFfNdmeeUYdah%2FX1XgfFMTR3QZx7%2Bvn0aT1VseIhWeqXqoRajqKPTV%2BASaNrz5IHhZDkDkLvhyLUIpPLE30HX72PGcTMMNKN0MEGOqUBDl%2FccYhO7tfCaudq1NonKrZVCO1t%2F5H6zjLc4Pb9n96C5L%2B1S6bISK85zvZJk0B5vkVLAOpXsYSllhNmT6Q8%2FbdttNk%2Bifa11H2DzgBp2Jcgq%2BL1fzO1SAcqYOKx3P6LM24m9iPoHH4OyNvTgp9BaKIM5wx014TNDAPZsfT4PB%2FR7PhDHQoU%2BJGkZlTxdc%2B%2BIvB17E%2BCN8HipswnssMkiexANkjF&X-Amz-Signature=df6d327805b6e631c23ea21609c20272a3c7bf6e00b3adf25f0fa4ff43571bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
