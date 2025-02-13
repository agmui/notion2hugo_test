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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN25AOKH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhcZlTrFLpglhyRZqLKVZ2XC0J0mxYNH0BPSsdCQMLfAiBRm9djgD09%2FVvavMGyJdeC%2F4kFanzgabYYPWH05xXnmSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9ml%2FTn2rcYlO6msUKtwDYDHIAChRc28171rNXdxWzEB1X7yrY7f7bxjFvlnBNNbQ1ZpZZg4jwEBuNePysYMgi1993seWjfbaYMR49aDf5cmmEwzvEk7ByssBCgFcsdf8rb43uhR8qYgOTOJGnvbMRG2Hlp4%2BQokKrgSob3XSk7PJX71eyQvV3VagYaXmyibcZKffTtgEQ5FNuKLdARRz8%2BruskZaP4Z8L%2BWIfCNOlmlSOtOzq1nveH5YplIePCwiuQEYBgWFSufHvAe%2FbIeaftgMhyT5sxYGoMymXgD%2Fqgs019pGdWVj9LvOniSliVj0yHGsdIAih2IquVWettowWxL1yMmwepdRLQqqfqLx1YVCLBLUqm40d0vk3NwBUGfk1UBv6tBG3JpbEG%2FU%2B2%2FvkwUxnG6xiICh4n2nrIfBqc6c%2FStvnV1tcOjmuC29ZdLsO2a7GGhphjOhdaU61Kw9KPWUICOhROqIIb2dLLWFXX8Xg7IUeRBBFst7xGaifzQbrQNr6OQc0bGMnWd%2BYCDgj7gZEwXQJhligW77%2FUJh33TcLvnSInjVkaBzz9qYZ2l9dSCKRqosBbcJlaMOjqTsmfrS%2BhFu83TMoj1R5WEm2RffXnbNLXS%2Bno%2BJSTqp2E0Pc4QMrKAeGBIjVU4wwpi1vQY6pgFvbcHn68%2BUHUJsiPLa79x4HtS1OYqlNO0XexCt%2FmD4UFMpeKKH4DdsmKfA8aUNJlY3na%2B4Pab7wbzJlyn0qFwDG5mXumTCsRLHF%2Fs7uSShjy3SaRU%2F4gpZ01%2BNNF3LaJu1sw1d6Aew1PQVg7ofrbG1GOPOdhg%2ButbgO5J0X4B1ZrgVzaT8VGiv7hqwoSWYH6kD7Yq9H9UgtlAzAAMrBtUI4ldLlB%2B1&X-Amz-Signature=c04466b0e95b863f31d4baca0b087738953676bc66840d2beac126c6996485e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN25AOKH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhcZlTrFLpglhyRZqLKVZ2XC0J0mxYNH0BPSsdCQMLfAiBRm9djgD09%2FVvavMGyJdeC%2F4kFanzgabYYPWH05xXnmSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9ml%2FTn2rcYlO6msUKtwDYDHIAChRc28171rNXdxWzEB1X7yrY7f7bxjFvlnBNNbQ1ZpZZg4jwEBuNePysYMgi1993seWjfbaYMR49aDf5cmmEwzvEk7ByssBCgFcsdf8rb43uhR8qYgOTOJGnvbMRG2Hlp4%2BQokKrgSob3XSk7PJX71eyQvV3VagYaXmyibcZKffTtgEQ5FNuKLdARRz8%2BruskZaP4Z8L%2BWIfCNOlmlSOtOzq1nveH5YplIePCwiuQEYBgWFSufHvAe%2FbIeaftgMhyT5sxYGoMymXgD%2Fqgs019pGdWVj9LvOniSliVj0yHGsdIAih2IquVWettowWxL1yMmwepdRLQqqfqLx1YVCLBLUqm40d0vk3NwBUGfk1UBv6tBG3JpbEG%2FU%2B2%2FvkwUxnG6xiICh4n2nrIfBqc6c%2FStvnV1tcOjmuC29ZdLsO2a7GGhphjOhdaU61Kw9KPWUICOhROqIIb2dLLWFXX8Xg7IUeRBBFst7xGaifzQbrQNr6OQc0bGMnWd%2BYCDgj7gZEwXQJhligW77%2FUJh33TcLvnSInjVkaBzz9qYZ2l9dSCKRqosBbcJlaMOjqTsmfrS%2BhFu83TMoj1R5WEm2RffXnbNLXS%2Bno%2BJSTqp2E0Pc4QMrKAeGBIjVU4wwpi1vQY6pgFvbcHn68%2BUHUJsiPLa79x4HtS1OYqlNO0XexCt%2FmD4UFMpeKKH4DdsmKfA8aUNJlY3na%2B4Pab7wbzJlyn0qFwDG5mXumTCsRLHF%2Fs7uSShjy3SaRU%2F4gpZ01%2BNNF3LaJu1sw1d6Aew1PQVg7ofrbG1GOPOdhg%2ButbgO5J0X4B1ZrgVzaT8VGiv7hqwoSWYH6kD7Yq9H9UgtlAzAAMrBtUI4ldLlB%2B1&X-Amz-Signature=d37155e79ef76ee712bfc7f3198e749b87fbc9f06c7703fa4908b86ef58e9578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
