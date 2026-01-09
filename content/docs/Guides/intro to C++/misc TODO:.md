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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SVZQU2%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd0GpjBkbY0TlMTsUVamcHyZLqNHFOFtCMZSaKNaSZsgIgbFFj0NINQ5yyW9QPypR6GOcgixPPh8ElDvJIdBSPXTYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F9J1OwVFYNJcsLASrcAyWzE5nPC8reI0cgEJQO2fFnQHmkWQL3xZzR4IJVv0m9qp3%2BQ1Mp5lJpSrXF5bKhT7FM8HlArK79olfl%2FSktU7KnkvopqJ4WJBSdtcYSVsghbMvJowPLCmIoUP8f%2BIdnFG4xB6RuniGzPyBW5nA5wIR2EDNG0iiIBGNOjT84g%2BxTWpCifV8gD%2FEpHbe5dvIxD6jRPSFlaK4cKVt9A762GaLJaz7lh6LhdhTpm1QXL51x%2Fn5wSBzVUEbNc7R3JAkO17UjcBA6z1tw9a%2Bm83x0VG59dlfBabUXxs3ev6HTiSCVAk1VSZwq8czyhm2YrDe8%2FctRsY%2FPRHbupOhqxHwnry1a1hS3ukDCmsRPE9V1rNcQugUQTH7MicWdJP3BLzRoCxkdmbH9HTd1whVk%2Fwt6XaUYchwDz5UyTzerC%2FE7Uue87Hn%2F25JkVeHU6VMVASFvFlkoB5vlfzvhqid5nC3K40FRWxgjSC9l3f1hi1IzEw9JX%2FJ5qhs1AmBBk5bPpWZQ8dkRCYtlicfPbt0DLmf06GbtjJ724zYt%2FAQZjkeV93JaiUwqkvOFFobnTzQ%2BJapnxh658zePTwudjQUs7dWzEvJRIqDdNRQGALtmBTSCz7BQup97X%2FOfWr1gQxKxMIOkgcsGOqUBgFuo4Qmk7sWqcLJoLK2zU%2B0aAvS16%2B8CFl9P40ZSYI7PpeYk8%2B5arQbo8DInhcbKKJFFQcu9ix4cRIXB3OSbXo6PjCTPj%2FJ28WhauhDlvQVZNfEEE8y6PERP6lPE%2B1okD0d%2BI6tkdogHhCNRM5blcTEBAFnGp03rLTJiinbI8LQiezKOt9O2FLkexLv6Y%2BTzcYhYPCi1Bh8wncy%2BNe5Ze7LhukjF&X-Amz-Signature=b5cb482ff0f371c404be8e8af7180a5caecd4e8f652b86a448464f8022ed7f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SVZQU2%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd0GpjBkbY0TlMTsUVamcHyZLqNHFOFtCMZSaKNaSZsgIgbFFj0NINQ5yyW9QPypR6GOcgixPPh8ElDvJIdBSPXTYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F9J1OwVFYNJcsLASrcAyWzE5nPC8reI0cgEJQO2fFnQHmkWQL3xZzR4IJVv0m9qp3%2BQ1Mp5lJpSrXF5bKhT7FM8HlArK79olfl%2FSktU7KnkvopqJ4WJBSdtcYSVsghbMvJowPLCmIoUP8f%2BIdnFG4xB6RuniGzPyBW5nA5wIR2EDNG0iiIBGNOjT84g%2BxTWpCifV8gD%2FEpHbe5dvIxD6jRPSFlaK4cKVt9A762GaLJaz7lh6LhdhTpm1QXL51x%2Fn5wSBzVUEbNc7R3JAkO17UjcBA6z1tw9a%2Bm83x0VG59dlfBabUXxs3ev6HTiSCVAk1VSZwq8czyhm2YrDe8%2FctRsY%2FPRHbupOhqxHwnry1a1hS3ukDCmsRPE9V1rNcQugUQTH7MicWdJP3BLzRoCxkdmbH9HTd1whVk%2Fwt6XaUYchwDz5UyTzerC%2FE7Uue87Hn%2F25JkVeHU6VMVASFvFlkoB5vlfzvhqid5nC3K40FRWxgjSC9l3f1hi1IzEw9JX%2FJ5qhs1AmBBk5bPpWZQ8dkRCYtlicfPbt0DLmf06GbtjJ724zYt%2FAQZjkeV93JaiUwqkvOFFobnTzQ%2BJapnxh658zePTwudjQUs7dWzEvJRIqDdNRQGALtmBTSCz7BQup97X%2FOfWr1gQxKxMIOkgcsGOqUBgFuo4Qmk7sWqcLJoLK2zU%2B0aAvS16%2B8CFl9P40ZSYI7PpeYk8%2B5arQbo8DInhcbKKJFFQcu9ix4cRIXB3OSbXo6PjCTPj%2FJ28WhauhDlvQVZNfEEE8y6PERP6lPE%2B1okD0d%2BI6tkdogHhCNRM5blcTEBAFnGp03rLTJiinbI8LQiezKOt9O2FLkexLv6Y%2BTzcYhYPCi1Bh8wncy%2BNe5Ze7LhukjF&X-Amz-Signature=a9b3af5c3e4c4f7b1602e19e86ec30d3f1bc0b1bef860514ccbe50848a3c845a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
