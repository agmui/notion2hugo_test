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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OWFHFV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCO6afJ5%2BTeh7UO4RQIWxEI5YD6bWgcpHExtLv2%2FIMLMgIhAKRQ5ugmGJ6zE0woHIV9wPaFcBWLrPr4H8%2FEo6jCI8QSKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2F0lOiJtWJqwp2R38q3AMb4QNk7HCvm1Qzf6GBC3972KAYkCSjiNEC6ai1XLOa%2Bc%2B%2F2jANhLcpGXMMOWd2kRcBTqe6NgoVLLMgfiJoqYvQ77lyb3r7%2FP7zEhaQnsx29fZ0asMf8XzpozvnWyOu1KTNka81nv2UlwexVFUzJeG7I%2Be630w%2F4c%2FzvQzNaO%2FNa9Jv7wf7brTzL1X8j8dM4XKF0eemXYDgyo8xpmmqxPU5AQ0wyjSb4aYqCEAA8z3w%2B5DRG8n3K4NKLid0ekPIT0a7qpdeMBhqie07bJtvktIX0Av3BvH5sTigMerTF5%2Bwo1WG6%2BNDIglYDocZ6piEDNtitkGPSMHTcXIcTS%2F0W4LAoNXvO4JNl18GyIHti4g5Z8kjxX64WpYjUCM3qbIA9LRGK40zPWImn1tNmBWspOHutcgur%2BZmI%2F5D4G3N4L9FK8ce8SxXO9lnm%2BDEwfQzQCVeQVLdOf27yA1B4qDpdpp6VnAw2AygOzMIWHseXo4fOESqPmJWeTshG%2FmP9PSWLVPyS3npBTc0y4Wqy7Sx1cO6rVvNM3RlGcmKJqwP%2By%2Fjc0y3FuGOipHCnsODVjWPnP%2F0c4r%2BQh%2Fj96GKP3mTX5vwNpoBO23odRKQD%2FJKSqIsGK3gdfEbdhXhvp17hDDUxJK9BjqkAfkC%2Fttxo%2F8J6%2BSvagC5vUb4E%2FqyS263KT0%2FH6rrXadfToXTyMKdL0yhoilLAzefCjD87toOY9o8eXIx%2Bi%2F3cPmO4uRO0mlVCCVgUrwNsioYGqUygMINvDUa4GiA6A4dOxb%2F5KqeSnYTUd0IbwLF4j5kRgdveY%2FYvau2cOsRuS9U7DpKRnspdBR%2Bua7He%2B9bracPwPqbHyuSSNhBmJbCo3uEpnlb&X-Amz-Signature=441f0e4ca3a27f531ac27f1f18af6bd3ea9f86f5ceb275daf52e928ac1535c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OWFHFV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCO6afJ5%2BTeh7UO4RQIWxEI5YD6bWgcpHExtLv2%2FIMLMgIhAKRQ5ugmGJ6zE0woHIV9wPaFcBWLrPr4H8%2FEo6jCI8QSKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2F0lOiJtWJqwp2R38q3AMb4QNk7HCvm1Qzf6GBC3972KAYkCSjiNEC6ai1XLOa%2Bc%2B%2F2jANhLcpGXMMOWd2kRcBTqe6NgoVLLMgfiJoqYvQ77lyb3r7%2FP7zEhaQnsx29fZ0asMf8XzpozvnWyOu1KTNka81nv2UlwexVFUzJeG7I%2Be630w%2F4c%2FzvQzNaO%2FNa9Jv7wf7brTzL1X8j8dM4XKF0eemXYDgyo8xpmmqxPU5AQ0wyjSb4aYqCEAA8z3w%2B5DRG8n3K4NKLid0ekPIT0a7qpdeMBhqie07bJtvktIX0Av3BvH5sTigMerTF5%2Bwo1WG6%2BNDIglYDocZ6piEDNtitkGPSMHTcXIcTS%2F0W4LAoNXvO4JNl18GyIHti4g5Z8kjxX64WpYjUCM3qbIA9LRGK40zPWImn1tNmBWspOHutcgur%2BZmI%2F5D4G3N4L9FK8ce8SxXO9lnm%2BDEwfQzQCVeQVLdOf27yA1B4qDpdpp6VnAw2AygOzMIWHseXo4fOESqPmJWeTshG%2FmP9PSWLVPyS3npBTc0y4Wqy7Sx1cO6rVvNM3RlGcmKJqwP%2By%2Fjc0y3FuGOipHCnsODVjWPnP%2F0c4r%2BQh%2Fj96GKP3mTX5vwNpoBO23odRKQD%2FJKSqIsGK3gdfEbdhXhvp17hDDUxJK9BjqkAfkC%2Fttxo%2F8J6%2BSvagC5vUb4E%2FqyS263KT0%2FH6rrXadfToXTyMKdL0yhoilLAzefCjD87toOY9o8eXIx%2Bi%2F3cPmO4uRO0mlVCCVgUrwNsioYGqUygMINvDUa4GiA6A4dOxb%2F5KqeSnYTUd0IbwLF4j5kRgdveY%2FYvau2cOsRuS9U7DpKRnspdBR%2Bua7He%2B9bracPwPqbHyuSSNhBmJbCo3uEpnlb&X-Amz-Signature=c6a3772e305dcc98880396fc0dbba26f44827b4cd3b0cc41a03521619df4143f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
