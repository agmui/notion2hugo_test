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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RTUA4B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIE5UIbEuYMsHUF6T1o3EfZm7hDTAyscyZ039j50dcXvtAiEAtcTFD53WVIIJ167EsOnpHBlfX6QK6NZSVfBhiNJou0oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQKu3cKIavZrmdK2SrcAyHDaC4KLSKD3Z9%2BPhpflOY2rFJG8L35jijEwLDWFn%2BYTLIxwqmDt7h%2BHncX%2BbtJHfqBVW9Uvx4yFWMXsuh7%2FfdtTZuC6ToYEmhfvtn9q9XK7qcARCGvQoILMXQFNzI9s5H3GF4ioev3h4TRZj8sJms93UjzNWyYf%2B7M%2BmgZjpQWw%2Bmlrdqsw7UcC3PlCrIihBVW1A59B%2FeSZF7gJsamRffqv%2FqHNgS47RDPi2jtrUGO6UKD5IX6kOY9032G5PURr4gjtB5CfH877HwqJndtGwEDrEnGvcB982866TMD%2BbivgLwwnP%2BUtH2Mpk5TeiofOOARVCXRiiuQ3XSvKqVq0DtMlSHJxI82zKacMjcdeg8wlRRKBpczzIy2J%2FC9X6l8bWWtCK1g026ilpLCP2OkBlo%2B2PY5rKc%2FAlx3IxyFGShWD4Khsn2jNptCS483QW0lsqOG%2FnjVhjDDHYHDeSh3WM7yxef8NCmXP3ZBuJJOH1sKA4jCamqXYP2838zyNf70M8lOl0Z%2ByN85hovTEQKAx0qt98GNQ5GoyA34UN3F0uF9VXf4cd2HDpHDHpGN66dND76sAvHFgk1qmu2%2FvHI8ffYrsPUiDbNbRuaIEvuCxZE3vFt22XPoUWQH8p7hMLuSvMEGOqUB7lUJ8qGfZu2doJzLjYo%2BWoThUREUwSaa3EdL7YTL%2B81G%2BzhcaNVL3lSyLmBAzhKl6obeyEL3l0%2BUAer5ZljDEJY9fVtaXRCzPnJNyMuHIl6PnxD6VB1Uogci%2F6%2B3BREddmnGiEmDWCNJKkEzBVoq0ZkpREitkoImX%2FghRuXOOMmvLIR28K8mNwG0B9HLB2rw0A8KTckk%2Bw6gpzMb1CW2eehxn%2Fi2&X-Amz-Signature=993f9044eb112c1c251f5d26c646b36560232d9024d41241f583ccba969b40f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RTUA4B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIE5UIbEuYMsHUF6T1o3EfZm7hDTAyscyZ039j50dcXvtAiEAtcTFD53WVIIJ167EsOnpHBlfX6QK6NZSVfBhiNJou0oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQKu3cKIavZrmdK2SrcAyHDaC4KLSKD3Z9%2BPhpflOY2rFJG8L35jijEwLDWFn%2BYTLIxwqmDt7h%2BHncX%2BbtJHfqBVW9Uvx4yFWMXsuh7%2FfdtTZuC6ToYEmhfvtn9q9XK7qcARCGvQoILMXQFNzI9s5H3GF4ioev3h4TRZj8sJms93UjzNWyYf%2B7M%2BmgZjpQWw%2Bmlrdqsw7UcC3PlCrIihBVW1A59B%2FeSZF7gJsamRffqv%2FqHNgS47RDPi2jtrUGO6UKD5IX6kOY9032G5PURr4gjtB5CfH877HwqJndtGwEDrEnGvcB982866TMD%2BbivgLwwnP%2BUtH2Mpk5TeiofOOARVCXRiiuQ3XSvKqVq0DtMlSHJxI82zKacMjcdeg8wlRRKBpczzIy2J%2FC9X6l8bWWtCK1g026ilpLCP2OkBlo%2B2PY5rKc%2FAlx3IxyFGShWD4Khsn2jNptCS483QW0lsqOG%2FnjVhjDDHYHDeSh3WM7yxef8NCmXP3ZBuJJOH1sKA4jCamqXYP2838zyNf70M8lOl0Z%2ByN85hovTEQKAx0qt98GNQ5GoyA34UN3F0uF9VXf4cd2HDpHDHpGN66dND76sAvHFgk1qmu2%2FvHI8ffYrsPUiDbNbRuaIEvuCxZE3vFt22XPoUWQH8p7hMLuSvMEGOqUB7lUJ8qGfZu2doJzLjYo%2BWoThUREUwSaa3EdL7YTL%2B81G%2BzhcaNVL3lSyLmBAzhKl6obeyEL3l0%2BUAer5ZljDEJY9fVtaXRCzPnJNyMuHIl6PnxD6VB1Uogci%2F6%2B3BREddmnGiEmDWCNJKkEzBVoq0ZkpREitkoImX%2FghRuXOOMmvLIR28K8mNwG0B9HLB2rw0A8KTckk%2Bw6gpzMb1CW2eehxn%2Fi2&X-Amz-Signature=94a645713b8ed271081a62de8af9f1d225fb65d79ee3e9340c877393a5adacb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
