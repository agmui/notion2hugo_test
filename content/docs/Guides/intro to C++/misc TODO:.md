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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NMTEDP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDL4rrgof0bA3XJ9hxgL2lhgGe5tQUK0IZDXE61AlQ4QAIgcuAOvy8S1b7qVu9ChUpKjowvgw7fAmo9cEg46DlP0WoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ6CH8rcMZWFXcBTircA%2FkuE4jofMlxXCGBcqDjn93MX9sEgfVNiGSEU4%2FPLIFnlh63%2BYh4K4QhvMKSj9%2FmywtxAjr19aKTrcsK3%2BKCNCEDmCvX9ZYEDyznMnLB8A9OxGw7xR6vLdIj9mSQZ1eucmXON9qi9Cm2sQjeJ5GpnxAFhtxncpW9hzokyJXy%2F0hOHdMiGQL1w66Kk%2FDud3aBBVf50y7ePpQwrHqhH2wMaz5hFFSNkYROvfR%2BnhDB9b3yNXUzpDM%2FnN8O19tuY3LqJB205keqQDPY4bTQcoP9q%2Bf8l9LSWpt%2BnlSbUcZglOMNv6qSNCnmwJ1DYu75KwhOmxsfG5hbCnT%2BYJEJR4%2FyR7PSpv4FkJ30mBL8HQNEOnrDSM5ha6rsKgTe%2FqU7EF3bhQRq1m1uPoY4%2FemwLy%2Bh3rvjLBiHbufZmzR7rtoPbKeoosyAxEpbdnUZ%2BuZ9yJYTv8zztpbBHTyGKa2SSgmDSykqG%2F1pktU4HmdyFAICS9TVIIYmEo%2FJOxZoMlAoSp6%2BQV8eSPKazaEgqLcUYiIA8MosjwciMErnKaCUMBRwAUdHF%2FwnzC889BwqlSXG61fWVS2Uab5YmXZkgvZhDkB2KvLCULkWKWJv6%2FjQnhLxf7QWf20tB1MoQiWCEROqMOiFhcEGOqUBcDjuvD6a8CSLtQoP%2BOF01Ewwlj2JWtn9DDG7YjrkXUgnp%2FPv0FNvVQ%2FtjxyyP0sq5veputMykHB9ql8JHecISrD6T1i%2FkQVn8QfNpA0efyiKAbKnTTKh1tPzZFN17i3rdZpxIEkIJtELDUIz1eDyR16HT%2BAEYhJeykeJfeWZCG5lsBlUGsy2iHpNM8QQZGfHz%2BDbqt83S%2FzFNqVrhBUQ1nMLd15a&X-Amz-Signature=cddcfd50da5675329134e380e1c72592963ca38aed7d8245ebbe76f98855fb09&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NMTEDP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDL4rrgof0bA3XJ9hxgL2lhgGe5tQUK0IZDXE61AlQ4QAIgcuAOvy8S1b7qVu9ChUpKjowvgw7fAmo9cEg46DlP0WoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ6CH8rcMZWFXcBTircA%2FkuE4jofMlxXCGBcqDjn93MX9sEgfVNiGSEU4%2FPLIFnlh63%2BYh4K4QhvMKSj9%2FmywtxAjr19aKTrcsK3%2BKCNCEDmCvX9ZYEDyznMnLB8A9OxGw7xR6vLdIj9mSQZ1eucmXON9qi9Cm2sQjeJ5GpnxAFhtxncpW9hzokyJXy%2F0hOHdMiGQL1w66Kk%2FDud3aBBVf50y7ePpQwrHqhH2wMaz5hFFSNkYROvfR%2BnhDB9b3yNXUzpDM%2FnN8O19tuY3LqJB205keqQDPY4bTQcoP9q%2Bf8l9LSWpt%2BnlSbUcZglOMNv6qSNCnmwJ1DYu75KwhOmxsfG5hbCnT%2BYJEJR4%2FyR7PSpv4FkJ30mBL8HQNEOnrDSM5ha6rsKgTe%2FqU7EF3bhQRq1m1uPoY4%2FemwLy%2Bh3rvjLBiHbufZmzR7rtoPbKeoosyAxEpbdnUZ%2BuZ9yJYTv8zztpbBHTyGKa2SSgmDSykqG%2F1pktU4HmdyFAICS9TVIIYmEo%2FJOxZoMlAoSp6%2BQV8eSPKazaEgqLcUYiIA8MosjwciMErnKaCUMBRwAUdHF%2FwnzC889BwqlSXG61fWVS2Uab5YmXZkgvZhDkB2KvLCULkWKWJv6%2FjQnhLxf7QWf20tB1MoQiWCEROqMOiFhcEGOqUBcDjuvD6a8CSLtQoP%2BOF01Ewwlj2JWtn9DDG7YjrkXUgnp%2FPv0FNvVQ%2FtjxyyP0sq5veputMykHB9ql8JHecISrD6T1i%2FkQVn8QfNpA0efyiKAbKnTTKh1tPzZFN17i3rdZpxIEkIJtELDUIz1eDyR16HT%2BAEYhJeykeJfeWZCG5lsBlUGsy2iHpNM8QQZGfHz%2BDbqt83S%2FzFNqVrhBUQ1nMLd15a&X-Amz-Signature=08c63eafb237039655224b38ce929ce4b49369315793f10ebe55328287fc57d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
