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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZE3AM2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBplTlairp03gSzG%2FHPaqyaXkrii1U06cKXLqo9VmrTnAiBNyPMwRIEuzqsAB1uFGeDGH2hQMGuF3S1ttXYSMx4RrSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzz3k0jtxW22MzRWfKtwDmycaxXFQfZAogbQnwhiyPWXtVdhySXTzf1%2BhFCJ0cryH4vjMDU6UFx07wWPzo5MZT9h9yVkiAWJgOqP6sa7t9OA%2F6kdS9Q%2B5UOkuy0nf2q%2BgCPmvdGf32g1ZIVqfRcOvk34qvmcK3Kf8BMYlR0eTmc1mlte0fl9wG589%2Bwncs0mAuNDXjJX0mrJvjxXUG8O%2BHptWNVdZEHkyogC39dvE3WiwLt8zrhE80CGce6flPV%2FRa0Eps%2BAvfsr374ap0dfLzktx%2FoDkXtP2mGjEJ6%2B5dBnr%2Bb4iidsrI%2BUmgd3d6xaRk%2BrSFpYtWaEne8aI5WpPTGyTOI5JxTr0vH%2FG8DlU2TAjT4JqzSS5hbaVfBK%2BTBK%2FljY3VzAz6TxwGwBbMVxk4dX3FpVFykIbVUIsmtZOCJUuPO3sYZ6tRbvByXpT2iLCE9IGI15yL1aWUY%2B4zp6eGDO5IpCzP8FkDqJSXfCBhydbd6n6xgTMLqFWt9BYzVpug9MhNM9RCiq9Ls0vqb76AZHe%2FybLbNtohdqRKK6beuOwI%2BJxodzMlHDwTCRkcLe6%2BoEPpaUB9wt9uUO2bUSLsQP2tJcARZRuHEIQyiBzBtei9H%2BMzVkDlN8I1vhuqn8L91asLA5TGlE1RuEw8pexwgY6pgHqooAsQcxgDiMYFICvx0hoMhOpU3KG7ZLXthDC25IRNMQTReEVdEwi62mDma5n6qPkmM1UZ%2BWMbctHggDiOe14RkkPD1GIbDLQKdCtBq65F0zhOX2D67DvEO6jFy2nFI3WGvixxZ%2Fot64XiyM1%2FRQHB1DeVFw4Xd6eYGpmbd8kk6%2FdhM7qjh9Pmc19g3PfloAX7UnCdtIGKt97a1iDKIJRNM532Fte&X-Amz-Signature=1ff090682beb7fe093984f6a4268691afbb0da513e2e8abc018088da998c0619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZE3AM2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBplTlairp03gSzG%2FHPaqyaXkrii1U06cKXLqo9VmrTnAiBNyPMwRIEuzqsAB1uFGeDGH2hQMGuF3S1ttXYSMx4RrSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzz3k0jtxW22MzRWfKtwDmycaxXFQfZAogbQnwhiyPWXtVdhySXTzf1%2BhFCJ0cryH4vjMDU6UFx07wWPzo5MZT9h9yVkiAWJgOqP6sa7t9OA%2F6kdS9Q%2B5UOkuy0nf2q%2BgCPmvdGf32g1ZIVqfRcOvk34qvmcK3Kf8BMYlR0eTmc1mlte0fl9wG589%2Bwncs0mAuNDXjJX0mrJvjxXUG8O%2BHptWNVdZEHkyogC39dvE3WiwLt8zrhE80CGce6flPV%2FRa0Eps%2BAvfsr374ap0dfLzktx%2FoDkXtP2mGjEJ6%2B5dBnr%2Bb4iidsrI%2BUmgd3d6xaRk%2BrSFpYtWaEne8aI5WpPTGyTOI5JxTr0vH%2FG8DlU2TAjT4JqzSS5hbaVfBK%2BTBK%2FljY3VzAz6TxwGwBbMVxk4dX3FpVFykIbVUIsmtZOCJUuPO3sYZ6tRbvByXpT2iLCE9IGI15yL1aWUY%2B4zp6eGDO5IpCzP8FkDqJSXfCBhydbd6n6xgTMLqFWt9BYzVpug9MhNM9RCiq9Ls0vqb76AZHe%2FybLbNtohdqRKK6beuOwI%2BJxodzMlHDwTCRkcLe6%2BoEPpaUB9wt9uUO2bUSLsQP2tJcARZRuHEIQyiBzBtei9H%2BMzVkDlN8I1vhuqn8L91asLA5TGlE1RuEw8pexwgY6pgHqooAsQcxgDiMYFICvx0hoMhOpU3KG7ZLXthDC25IRNMQTReEVdEwi62mDma5n6qPkmM1UZ%2BWMbctHggDiOe14RkkPD1GIbDLQKdCtBq65F0zhOX2D67DvEO6jFy2nFI3WGvixxZ%2Fot64XiyM1%2FRQHB1DeVFw4Xd6eYGpmbd8kk6%2FdhM7qjh9Pmc19g3PfloAX7UnCdtIGKt97a1iDKIJRNM532Fte&X-Amz-Signature=002ee02aa065c40ba0b14e871f8792e519d63eee1a3848601f85f2fb9ad76219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
