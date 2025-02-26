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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHGHSSX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHyIu%2FzMfJLPVniVO72TQxbb3vS0HKlcurUNTq%2B%2FA24BAiAXhi5oweCCmJt9ERuXxPw5MJCsEfvk5fRpjX6RpFZWaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FeKfEOQryTDUiJixKtwDSW3l%2FxIx53DLzB17n%2FqNHF1zWh3%2BoshF0228KXaW2you8N2zVQNK2603YLIZVGaOo9LAsNcCOgKU9r6QWyBxuSi04qw9AV09T3wqtGByQhf%2FBRiZW61V4K2qPqpXS8X5u%2B5hx2jDEZQEBNj2TrKmirtHEqT1h2EWCPfkeAMa4GACsNbZpTAr39FEWHW%2BgGwGQ0lGfm%2BJLstYxS9K7npVU9zC8XaWqtQBLjyVsmprU6O5acUfZoVegH5KwonwOj3K4B%2F1qLeMTQ6ludMBWnGOkOtDGpcmO0TcKok565plMfexOc%2BD3wGoPoXuU541%2BCHKtD4Ltp%2BoS%2F5lTH2TbsiECQ3kGZv3PWrhTXmh%2F0ouu9uBUS3E8A2uq%2BxdqX%2F%2BpX3%2BV1BQVSBQPyaRArWFq9VIxVHbwo97ujNpFJEA2JAcRBOUkcQdmP69J4hZs%2Bn7JGj2B5FwGVR5fc%2F8eKUhb%2BQupYhQ3A1o%2FVDB%2FiOhdbpTDqJa1agC9RyPFwEffJHkGHBpxyrUPp4Xtko08h7ME%2BgM%2FNTytKmr%2BYljwiFZwCb9QCYgWH8hho0%2FA5diczkZ4ZouGaWuBcQfRubjf7cn1Nv8BYh1x5gt6n4RL%2FcfRlWNyd5BomReblOum2Zfmaow24f8vQY6pgFcamNh3qzCzfgtWIK36gERZrKwtV8MX%2Bh1vsxy8Iv6WHW3ffW1DbrdV7UBk9Cy1MhwmySbFpHuHHFtqqbEOzd1J2l4BlL%2FL%2BK%2FSo8w2waWaWLTxjZON1jZoqr2uYXawwA0WkPSE3uL8J5VChu4vDbxCIWKR%2BF2ZHCH4EiQ2p%2FqZA%2FKU5vXUgJKKSDZjflA1LwJUuTi%2BqVduyyL5MxDpDRSkZ8a4C1S&X-Amz-Signature=6cee899a1968fdade7b26c1532bfd1f6c52ba3ecdbfebc0a2b4d8e60fb26941d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHGHSSX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHyIu%2FzMfJLPVniVO72TQxbb3vS0HKlcurUNTq%2B%2FA24BAiAXhi5oweCCmJt9ERuXxPw5MJCsEfvk5fRpjX6RpFZWaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FeKfEOQryTDUiJixKtwDSW3l%2FxIx53DLzB17n%2FqNHF1zWh3%2BoshF0228KXaW2you8N2zVQNK2603YLIZVGaOo9LAsNcCOgKU9r6QWyBxuSi04qw9AV09T3wqtGByQhf%2FBRiZW61V4K2qPqpXS8X5u%2B5hx2jDEZQEBNj2TrKmirtHEqT1h2EWCPfkeAMa4GACsNbZpTAr39FEWHW%2BgGwGQ0lGfm%2BJLstYxS9K7npVU9zC8XaWqtQBLjyVsmprU6O5acUfZoVegH5KwonwOj3K4B%2F1qLeMTQ6ludMBWnGOkOtDGpcmO0TcKok565plMfexOc%2BD3wGoPoXuU541%2BCHKtD4Ltp%2BoS%2F5lTH2TbsiECQ3kGZv3PWrhTXmh%2F0ouu9uBUS3E8A2uq%2BxdqX%2F%2BpX3%2BV1BQVSBQPyaRArWFq9VIxVHbwo97ujNpFJEA2JAcRBOUkcQdmP69J4hZs%2Bn7JGj2B5FwGVR5fc%2F8eKUhb%2BQupYhQ3A1o%2FVDB%2FiOhdbpTDqJa1agC9RyPFwEffJHkGHBpxyrUPp4Xtko08h7ME%2BgM%2FNTytKmr%2BYljwiFZwCb9QCYgWH8hho0%2FA5diczkZ4ZouGaWuBcQfRubjf7cn1Nv8BYh1x5gt6n4RL%2FcfRlWNyd5BomReblOum2Zfmaow24f8vQY6pgFcamNh3qzCzfgtWIK36gERZrKwtV8MX%2Bh1vsxy8Iv6WHW3ffW1DbrdV7UBk9Cy1MhwmySbFpHuHHFtqqbEOzd1J2l4BlL%2FL%2BK%2FSo8w2waWaWLTxjZON1jZoqr2uYXawwA0WkPSE3uL8J5VChu4vDbxCIWKR%2BF2ZHCH4EiQ2p%2FqZA%2FKU5vXUgJKKSDZjflA1LwJUuTi%2BqVduyyL5MxDpDRSkZ8a4C1S&X-Amz-Signature=1610bafd829f25d38cbc6f081715b09bada071ba95e5cb8dda6265a7125c1ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
