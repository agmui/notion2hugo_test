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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UY5RAGT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIB3oY5IEEXbADeOuObrxeiFj2TS3I%2Bg8zFaYyIRDXuuTAiB5hC2tV9KaEPGjXCPKT7b2LIw%2FTh7mwyPgSkQSgEkYiyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbdovILIl639dvsnKtwDem4Eq6DQNTHtEY7vochK3UN%2FF5ynnILZywJNmGyM53%2BPP1Yx4Vic09EW8kNRAAcS8L2H2yw17KGalMYFQ62oU%2Fu%2F3f9FRPZB8bAUXO%2B7Ajh0higWrH68kiXzIee2YGOejXYq5wlDmA%2FoOdIG%2BjBfvtmVLku5ks4Kowyll34M6K0ABYtz6MLJt%2BVU5W9oX8t3SsdU3lJGYqLDlXviJs23foMt0eCIl5tYpBHiRqO4yDHYhMyEl6ThWDO6gKGhh5aXdFlXp1Z2akV%2BtEus9BYDjNbxtEHSZ%2Fo9%2F1dJqpqoNKo8WO6aDI937g9qIoN5BXfs8xuzcZAjWFu19QCr5WRV147MyEpKkJRiGfBFmwooRYs5XC1OSLb77jE37WULbnpmemL7JnUnMpRe35rfMDIInp%2FjFPcexCiuDqFUkoMEY8vlkO8jCFwOooVicrRCnLZ5BrGDNSDz8l0MVfSvgL5t9jvBLyQ4QnMEGyLuCmF3nbwAuIoht1h31f1k0bTP0lggQHtXVXmtLk0pwFqRdPKqd8qeq3OJ1pL1C3wtU6aTsfI5krOm4vUbpbUPjOv6zKzHqH8IijrgAy7lApRKDlg3LGp1lhYoNf8wZHKt69vvXNwGdLC3tn%2BPyLmszTcwh9WJvgY6pgFmBAQW5NkBXN0n%2BvjIGVnRLbo1r05wNIuFRA%2Fpd38w8G8FdLbBjnJCdz%2BZPENxTI9MtPBxTbc0S%2BMWTfJmXhtoN%2F31k4ePY%2BmbkPxqIds5q%2BxGb1BO5qC4xZjhOlGSV32nsK2e8XeUYtA7qmqguvraG94F5b9aIkkYUlRZ6mhsk0Jhkim4emRkrRbLRi%2FRzMtLTfb6wB7raHf00Gtca3attfXt2knG&X-Amz-Signature=b982f975cc69e2e0b0f542dab25c97075b3478b73c4b3e570ac4325e8581c020&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UY5RAGT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIB3oY5IEEXbADeOuObrxeiFj2TS3I%2Bg8zFaYyIRDXuuTAiB5hC2tV9KaEPGjXCPKT7b2LIw%2FTh7mwyPgSkQSgEkYiyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbdovILIl639dvsnKtwDem4Eq6DQNTHtEY7vochK3UN%2FF5ynnILZywJNmGyM53%2BPP1Yx4Vic09EW8kNRAAcS8L2H2yw17KGalMYFQ62oU%2Fu%2F3f9FRPZB8bAUXO%2B7Ajh0higWrH68kiXzIee2YGOejXYq5wlDmA%2FoOdIG%2BjBfvtmVLku5ks4Kowyll34M6K0ABYtz6MLJt%2BVU5W9oX8t3SsdU3lJGYqLDlXviJs23foMt0eCIl5tYpBHiRqO4yDHYhMyEl6ThWDO6gKGhh5aXdFlXp1Z2akV%2BtEus9BYDjNbxtEHSZ%2Fo9%2F1dJqpqoNKo8WO6aDI937g9qIoN5BXfs8xuzcZAjWFu19QCr5WRV147MyEpKkJRiGfBFmwooRYs5XC1OSLb77jE37WULbnpmemL7JnUnMpRe35rfMDIInp%2FjFPcexCiuDqFUkoMEY8vlkO8jCFwOooVicrRCnLZ5BrGDNSDz8l0MVfSvgL5t9jvBLyQ4QnMEGyLuCmF3nbwAuIoht1h31f1k0bTP0lggQHtXVXmtLk0pwFqRdPKqd8qeq3OJ1pL1C3wtU6aTsfI5krOm4vUbpbUPjOv6zKzHqH8IijrgAy7lApRKDlg3LGp1lhYoNf8wZHKt69vvXNwGdLC3tn%2BPyLmszTcwh9WJvgY6pgFmBAQW5NkBXN0n%2BvjIGVnRLbo1r05wNIuFRA%2Fpd38w8G8FdLbBjnJCdz%2BZPENxTI9MtPBxTbc0S%2BMWTfJmXhtoN%2F31k4ePY%2BmbkPxqIds5q%2BxGb1BO5qC4xZjhOlGSV32nsK2e8XeUYtA7qmqguvraG94F5b9aIkkYUlRZ6mhsk0Jhkim4emRkrRbLRi%2FRzMtLTfb6wB7raHf00Gtca3attfXt2knG&X-Amz-Signature=cd7c9fb8f6b9622a3d47116b53a1f423831377f89da7a1741b3cc58d20a01d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
