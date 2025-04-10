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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5S6ZYEH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCdP1rX%2BKpJKpSedmGaSkbPXjQ8Q1e54y8HNiaBhDG7IAIgHvthDQN7R9aiVVbxqKwI%2FRDpoJU3GRi6gdXZH7%2BPDHEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiYegEsYSaS2l3%2BqCrcAy30S%2BtLsprlAHiWkzieH3oKrF%2BBwSAM%2Fcu7jesu4XZslksi0cZ5CjLuPS%2B2szMgCaZemJ3CfdGZkmGyM8GlX4i3Eo3jMUNJ1eB7xSzyXHOt593OtO2zRs8x2Dqfg80CCcOnyoOpuP1jorPjIBf0TvYobjtHUM3wg2lCyrdnJPzQ4JjwUsW4NkntTXH%2BT2%2BQcuJD5Jzlk6xUelDde7cUTl5UiMQK6AZN0b3gRb43Ee4QQPkDBEEt%2FRxQRDj2BwXGYmatJ0bsIqvHo%2BqNvQ%2BZqWJjsjZkTF47%2F8i2fLms6zSJD%2FzY%2FKkymxv%2BZxaNacKOhRBak4Pm880o9TqfuVyTikJNN85VpW52NbEB0PpaMUsZ566h55vROYB5U8D5IHzQ3s%2BaJF7mii6z7Cp%2BeLBDOMsNgNs48JzaZyNpDmp7qR6WZwW56vsYNjJjELjabha0siXRlYt8LrncnzCRtlqEtE3%2Fj%2FMCrcJlmdQrYE5cpBHKmVlMgE2WsAVH4Xg4TIWmP0zclEIEA26r3lNdGi%2BKo9ukhe3hgsnDSPAkzp3L2mt9W2cgq8ap62tvfBKo7xgQA%2B6LKYtOKa%2FqojbBbYnnUrp%2Bt0ToGXd8dIXbT%2B8rbvWd8YCTNaydcXr2WjnFMMux4L8GOqUB%2FZVWfbpNFhq9rqTAWEa3fGkWCa0Xa%2Byu%2BtvJzDiAHqD%2BAN8qRoaDERTCrVwtDvPegPC4p1XMVCxF2CGg8FTPSibaLowAjEtL6okbVssN2IrRFEvnRAeSc9ieQnSSYMTGjjKWnv9zd41wQjuqT4RYwrorUZyvdPK9eKfMkWI8ZiL4cbcW%2Buiw2sb2ApdnGfNNFBwlBvaum40LhLy%2FZw%2B7sGHdH%2BzD&X-Amz-Signature=9376073fe1963f28e1af24c12ef11b39be89d0ec737d4985efa27e123e74f2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5S6ZYEH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCdP1rX%2BKpJKpSedmGaSkbPXjQ8Q1e54y8HNiaBhDG7IAIgHvthDQN7R9aiVVbxqKwI%2FRDpoJU3GRi6gdXZH7%2BPDHEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiYegEsYSaS2l3%2BqCrcAy30S%2BtLsprlAHiWkzieH3oKrF%2BBwSAM%2Fcu7jesu4XZslksi0cZ5CjLuPS%2B2szMgCaZemJ3CfdGZkmGyM8GlX4i3Eo3jMUNJ1eB7xSzyXHOt593OtO2zRs8x2Dqfg80CCcOnyoOpuP1jorPjIBf0TvYobjtHUM3wg2lCyrdnJPzQ4JjwUsW4NkntTXH%2BT2%2BQcuJD5Jzlk6xUelDde7cUTl5UiMQK6AZN0b3gRb43Ee4QQPkDBEEt%2FRxQRDj2BwXGYmatJ0bsIqvHo%2BqNvQ%2BZqWJjsjZkTF47%2F8i2fLms6zSJD%2FzY%2FKkymxv%2BZxaNacKOhRBak4Pm880o9TqfuVyTikJNN85VpW52NbEB0PpaMUsZ566h55vROYB5U8D5IHzQ3s%2BaJF7mii6z7Cp%2BeLBDOMsNgNs48JzaZyNpDmp7qR6WZwW56vsYNjJjELjabha0siXRlYt8LrncnzCRtlqEtE3%2Fj%2FMCrcJlmdQrYE5cpBHKmVlMgE2WsAVH4Xg4TIWmP0zclEIEA26r3lNdGi%2BKo9ukhe3hgsnDSPAkzp3L2mt9W2cgq8ap62tvfBKo7xgQA%2B6LKYtOKa%2FqojbBbYnnUrp%2Bt0ToGXd8dIXbT%2B8rbvWd8YCTNaydcXr2WjnFMMux4L8GOqUB%2FZVWfbpNFhq9rqTAWEa3fGkWCa0Xa%2Byu%2BtvJzDiAHqD%2BAN8qRoaDERTCrVwtDvPegPC4p1XMVCxF2CGg8FTPSibaLowAjEtL6okbVssN2IrRFEvnRAeSc9ieQnSSYMTGjjKWnv9zd41wQjuqT4RYwrorUZyvdPK9eKfMkWI8ZiL4cbcW%2Buiw2sb2ApdnGfNNFBwlBvaum40LhLy%2FZw%2B7sGHdH%2BzD&X-Amz-Signature=a618d30406b26f920c7142a633b5a213ae0aa98f0cfe22cee7d054c7276a4276&X-Amz-SignedHeaders=host&x-id=GetObject)

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
