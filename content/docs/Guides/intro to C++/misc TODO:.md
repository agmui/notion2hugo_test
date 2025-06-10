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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F7FXJ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtx68AW3Faxo55ZSAssKA3Byf7rQTjoGIsHvHxwduNMAiEAvuWAKY9bavCtd3MSBe%2BCXFt0llmKRkqXTWcqk7gapNwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6%2FxiKnxDoWOcjeyrcA2j1MC%2BWPSEIcr9nPcAfiGinSr%2FtKcHzob3moxXxScbBg53JGmIsJ5eTjwjSjGB5xbAaLQRVc0nsV2V%2BXzVJU5nrLXCf4RXBVUUSqzwKWCr5I%2BPdD9BTA5U5%2BaGCgTLJbwZN8RdG2gNHmPiyRrtPQTJU3Q6Re7F7KEc%2BzYdWKDvijPdrmriWJlRNbC0RyyLtuF8zkGvKnwe1h9d9Qppjxs%2FXZ%2BGpI3NCuPePCE69wRx3Bx8GMbQIe3kOmpmIpXGRc%2B5Gxw6DdqI2Uw5VzFiM2LRr%2F0%2B%2FZAdp3d2tEedTeElxtaopuOSgbCg7Vo9Hrmlx7l0DPcdUPL1x6%2B9TWlRhLtG2MjFNvsCs0%2FGSXGs5xY%2FwZMreJMte4bqyUVOayLkO0CzTCpa89eLLZ1DieMugxZ8POsiWk54hyESfR9w%2FFdAdmICPkhwbCkUoI1NDP7xs5o07D6xMR9IPzKRNktEEt8FXmBqevZHfCMLPBsYTTi7Wd8aAX6hS%2BUbsm3IB1yWhNDTHYkr5dt%2FkWg7DmIC2J0Kh5%2Bk3b%2FI2DVp2bZGdWXNg6kvogkB%2Br0H8UD7TrqBxJExeVgJ3CB5Uoy8YTMqh9po3wWNGGFkMOx8R3asNjYXHumikCd5kIoU7F2pRMOrsoMIGOqUBsrqRrVexuVtpChSqo88SIzMZinvwwbxtFYC%2BdTM2jrJhZU1d2MbXbJqsGrheM3ylmpmNkkj4m%2F%2FSGmnCelM7eyTuXRWVuPdGKOh7%2BxIn6YjV0lx3oe59etk%2BpD6y%2FnlO%2BBWx84iox5ynQhpCEVWbgdaYY7lg%2FTYeCdYUwyA1E3WK2FakTwMUDaYbdSodlK14%2FqGyQo96uajB60QA%2FQSC347eRyzu&X-Amz-Signature=8f4514cf164f168dd3426e7d451c47bcfa81aa0a93b35602f3bb8e2968c432d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F7FXJ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtx68AW3Faxo55ZSAssKA3Byf7rQTjoGIsHvHxwduNMAiEAvuWAKY9bavCtd3MSBe%2BCXFt0llmKRkqXTWcqk7gapNwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6%2FxiKnxDoWOcjeyrcA2j1MC%2BWPSEIcr9nPcAfiGinSr%2FtKcHzob3moxXxScbBg53JGmIsJ5eTjwjSjGB5xbAaLQRVc0nsV2V%2BXzVJU5nrLXCf4RXBVUUSqzwKWCr5I%2BPdD9BTA5U5%2BaGCgTLJbwZN8RdG2gNHmPiyRrtPQTJU3Q6Re7F7KEc%2BzYdWKDvijPdrmriWJlRNbC0RyyLtuF8zkGvKnwe1h9d9Qppjxs%2FXZ%2BGpI3NCuPePCE69wRx3Bx8GMbQIe3kOmpmIpXGRc%2B5Gxw6DdqI2Uw5VzFiM2LRr%2F0%2B%2FZAdp3d2tEedTeElxtaopuOSgbCg7Vo9Hrmlx7l0DPcdUPL1x6%2B9TWlRhLtG2MjFNvsCs0%2FGSXGs5xY%2FwZMreJMte4bqyUVOayLkO0CzTCpa89eLLZ1DieMugxZ8POsiWk54hyESfR9w%2FFdAdmICPkhwbCkUoI1NDP7xs5o07D6xMR9IPzKRNktEEt8FXmBqevZHfCMLPBsYTTi7Wd8aAX6hS%2BUbsm3IB1yWhNDTHYkr5dt%2FkWg7DmIC2J0Kh5%2Bk3b%2FI2DVp2bZGdWXNg6kvogkB%2Br0H8UD7TrqBxJExeVgJ3CB5Uoy8YTMqh9po3wWNGGFkMOx8R3asNjYXHumikCd5kIoU7F2pRMOrsoMIGOqUBsrqRrVexuVtpChSqo88SIzMZinvwwbxtFYC%2BdTM2jrJhZU1d2MbXbJqsGrheM3ylmpmNkkj4m%2F%2FSGmnCelM7eyTuXRWVuPdGKOh7%2BxIn6YjV0lx3oe59etk%2BpD6y%2FnlO%2BBWx84iox5ynQhpCEVWbgdaYY7lg%2FTYeCdYUwyA1E3WK2FakTwMUDaYbdSodlK14%2FqGyQo96uajB60QA%2FQSC347eRyzu&X-Amz-Signature=d47c395afe6795db451aa5edbfc94f138bd44fce2da154c7b444275953c56af0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
