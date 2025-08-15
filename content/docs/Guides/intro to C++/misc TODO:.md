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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIVC44R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCXDDFdoOBQv8s4ikOVz%2BvvP1HzFTMM3YA8D1aj7HPpNQIgdObAmtpmH4xB9OVrhzhzvcRHQYN%2F1vQ%2BEeqX%2FOP838sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCgX5dE0WgjteAg8oCrcA5pm2pJCOtfZySKookdaTFpdML2TF2SH7ngXuD8h6Ss9hfrp3iES0TxgFq2Vi%2F1KR7T3AeNLcDjpJW5ntHWaSB2d3xCQX61A4xns7M7%2FsdyP4VVhMlAptvBR5wPnsdyZPtpMCKaQf6YM3A4S9yTgyGS%2FxPCdOMAi7IFYWjOM6ptNCazA2%2BE5QVrd0FX1nO2KvPluehcid0xYK4Xsl1xPVNa8DNfFMpm4aQrJfCGxKYlg2OWeZGoRnoiNQzJjpXMDHs5h7sAhDsLmWX0kAYxFSLsB4ryuOs0J6JyxLmmzGSU5wvINBbyRpj6zy4YpDZruAQTDyGmH3jbbBFtKNY8odTbVJuYBs5RPayKm7pADbYnGjQEaKJ0JX4rk%2BSQtJGQkHkI3kYE6arl1jegydThnzWi%2F23P99rTDXrbjbtleAi%2F01sI%2F1deVl55aTKej0ZpVIDWCiW88yOS5rAl4bIwJRAnUKdABbqRj2xb4mWGg0gKc%2BvRr5r60AeTUViBRIfA%2B0DDcYEJlp26tLeU2u30cfauuXy%2Fm163gJvdGnPVRRrDPjP1AgtdD1xfuolZZV9%2Fs%2BcfV7HuFwew%2BjfnFK872%2B6SG4r93hq5pBVrkD70popVOPPlrOMBjWbZgQhvkMJnu%2B8QGOqUBJnjEWrha7wMrOn4w1rJ8rB69qlBnOhH7zh18j8UaqynHYI3zCcmgCxxjsa2WELjtox%2BeHhJEg%2F6Bfhz7GUZWXLXN1mqEc5jtUJEjBxd5a7hnW9MqngG6tAp8Z9Y57GUM9Fuhk60Z%2FIOLm19JFdVzO%2F%2F4D%2Bpx9sMUNMprI76kvh5yJRX9DAFyvuvMkBiGBWYvkVIoFCcRInctXkDJguArrCGOMqql&X-Amz-Signature=900bfb9165452e1478ffd11adec688b472aafae4af12df35132f5507c529ff0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIVC44R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCXDDFdoOBQv8s4ikOVz%2BvvP1HzFTMM3YA8D1aj7HPpNQIgdObAmtpmH4xB9OVrhzhzvcRHQYN%2F1vQ%2BEeqX%2FOP838sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCgX5dE0WgjteAg8oCrcA5pm2pJCOtfZySKookdaTFpdML2TF2SH7ngXuD8h6Ss9hfrp3iES0TxgFq2Vi%2F1KR7T3AeNLcDjpJW5ntHWaSB2d3xCQX61A4xns7M7%2FsdyP4VVhMlAptvBR5wPnsdyZPtpMCKaQf6YM3A4S9yTgyGS%2FxPCdOMAi7IFYWjOM6ptNCazA2%2BE5QVrd0FX1nO2KvPluehcid0xYK4Xsl1xPVNa8DNfFMpm4aQrJfCGxKYlg2OWeZGoRnoiNQzJjpXMDHs5h7sAhDsLmWX0kAYxFSLsB4ryuOs0J6JyxLmmzGSU5wvINBbyRpj6zy4YpDZruAQTDyGmH3jbbBFtKNY8odTbVJuYBs5RPayKm7pADbYnGjQEaKJ0JX4rk%2BSQtJGQkHkI3kYE6arl1jegydThnzWi%2F23P99rTDXrbjbtleAi%2F01sI%2F1deVl55aTKej0ZpVIDWCiW88yOS5rAl4bIwJRAnUKdABbqRj2xb4mWGg0gKc%2BvRr5r60AeTUViBRIfA%2B0DDcYEJlp26tLeU2u30cfauuXy%2Fm163gJvdGnPVRRrDPjP1AgtdD1xfuolZZV9%2Fs%2BcfV7HuFwew%2BjfnFK872%2B6SG4r93hq5pBVrkD70popVOPPlrOMBjWbZgQhvkMJnu%2B8QGOqUBJnjEWrha7wMrOn4w1rJ8rB69qlBnOhH7zh18j8UaqynHYI3zCcmgCxxjsa2WELjtox%2BeHhJEg%2F6Bfhz7GUZWXLXN1mqEc5jtUJEjBxd5a7hnW9MqngG6tAp8Z9Y57GUM9Fuhk60Z%2FIOLm19JFdVzO%2F%2F4D%2Bpx9sMUNMprI76kvh5yJRX9DAFyvuvMkBiGBWYvkVIoFCcRInctXkDJguArrCGOMqql&X-Amz-Signature=c9ff9d0f81248a8b67c7ec9c37e8b69c1e8c026783742eec7836accd09da0bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
