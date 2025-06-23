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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H42E4Y3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDwHsYfq3fbKbqLc5FRspE0uzvkmLBS5%2FZr8%2BcXRuRR8QIhALY6kGWPKIp5p2fWvr5R6YKOFWGaXb87W7ygS4UfJnPJKv8DCBsQABoMNjM3NDIzMTgzODA1IgyDrQHx8ZY4Vg5%2BB6Yq3APHxYGgTU9ABmqk2p276XhJH52mYxe%2FYCX0cVG9aAoNvW19WCcFjxDdWWdgUxrM1%2FE3kcwY%2B97y7eiOD8sMQQvkdb031BbfiCFbH39RMK4NQaxZMM7ob3jV%2FElJdwRboBB48dJO6D6V8rW50Vp6H0GhmePIbZITXd2kKQHRLQkjzoxBpia33htE%2FkHOfZu0TkV%2BBzi3ZzGkSSTUlql4BJmTrfHrBkEXeY%2FUZXsAeOiKoTue2m15J2vD66mPsoWAuEyckhrPRyYp3miD%2Bh35LvPOxRZty2g%2FZTO2O%2B7VMqAmYKWKKkjDPMkVUiE4m%2BYoBiVskCMPTI5Y99KgrTRCLueWhp%2FvobvcNkVbOUb0i74hmUefd0i9VVWTEepPVZKPPbUaxxsUrmzs44%2FWWOcEcyiSY6BfwwrObK4jdzGRAgHZ93Fur%2Bx2oGyCLPFMt8%2BD8UyMr1TjzbXSTzAik4Sk8avq1%2BSzHnRIUjScnKiwMG7A%2B3wE1avsKVuXMMQopJeJbR8BY2grxWAHL10siOHyhWgH81O41GRmPFtHvuliSD1O74Pk4RYLa03%2BefSHGOf0VJ2hiSZ%2B7VE4MSmJYVg%2Fq20BWyefqw5EiGNreoW4l6lE59GiSWVb89pJPLFL1DDbqubCBjqkAb0AShQJDjSDR%2Fi04txKmc%2FOQzwxHsLp2YEkU15Anj%2Bc80VcWLlBltD7aEtqpa3HaubMOo7U8yW%2BQdykBI7yHh7ICwbq37Ow4eJtEkfJTsyjRCSdKWMDyFsMFltEc5Ih0b8MXo6R3EF8CIItn%2BU%2BykNp9xG8ovsMytPsrVDXZxFa62%2F4jr7vHcRxcuTYwnAwDKk3h%2ByCs8QrXeAnjLL5ipFEDIUF&X-Amz-Signature=cde72f4315322c78fd066ae122cafc3ac67b0e09ab4efece4910fbe9300adfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H42E4Y3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDwHsYfq3fbKbqLc5FRspE0uzvkmLBS5%2FZr8%2BcXRuRR8QIhALY6kGWPKIp5p2fWvr5R6YKOFWGaXb87W7ygS4UfJnPJKv8DCBsQABoMNjM3NDIzMTgzODA1IgyDrQHx8ZY4Vg5%2BB6Yq3APHxYGgTU9ABmqk2p276XhJH52mYxe%2FYCX0cVG9aAoNvW19WCcFjxDdWWdgUxrM1%2FE3kcwY%2B97y7eiOD8sMQQvkdb031BbfiCFbH39RMK4NQaxZMM7ob3jV%2FElJdwRboBB48dJO6D6V8rW50Vp6H0GhmePIbZITXd2kKQHRLQkjzoxBpia33htE%2FkHOfZu0TkV%2BBzi3ZzGkSSTUlql4BJmTrfHrBkEXeY%2FUZXsAeOiKoTue2m15J2vD66mPsoWAuEyckhrPRyYp3miD%2Bh35LvPOxRZty2g%2FZTO2O%2B7VMqAmYKWKKkjDPMkVUiE4m%2BYoBiVskCMPTI5Y99KgrTRCLueWhp%2FvobvcNkVbOUb0i74hmUefd0i9VVWTEepPVZKPPbUaxxsUrmzs44%2FWWOcEcyiSY6BfwwrObK4jdzGRAgHZ93Fur%2Bx2oGyCLPFMt8%2BD8UyMr1TjzbXSTzAik4Sk8avq1%2BSzHnRIUjScnKiwMG7A%2B3wE1avsKVuXMMQopJeJbR8BY2grxWAHL10siOHyhWgH81O41GRmPFtHvuliSD1O74Pk4RYLa03%2BefSHGOf0VJ2hiSZ%2B7VE4MSmJYVg%2Fq20BWyefqw5EiGNreoW4l6lE59GiSWVb89pJPLFL1DDbqubCBjqkAb0AShQJDjSDR%2Fi04txKmc%2FOQzwxHsLp2YEkU15Anj%2Bc80VcWLlBltD7aEtqpa3HaubMOo7U8yW%2BQdykBI7yHh7ICwbq37Ow4eJtEkfJTsyjRCSdKWMDyFsMFltEc5Ih0b8MXo6R3EF8CIItn%2BU%2BykNp9xG8ovsMytPsrVDXZxFa62%2F4jr7vHcRxcuTYwnAwDKk3h%2ByCs8QrXeAnjLL5ipFEDIUF&X-Amz-Signature=8a894d0bb33ba98901a8ac4c0f7ae67908f1b7444e09b339f3b6f9505240eb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
