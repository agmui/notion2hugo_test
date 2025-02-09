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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRRNO5A%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOtJCCxFnnmMQ%2BKqr07lXi9uexblPpdmUfYWoUEqd5mgIhANoUXCayNLnryTkkkjsGT7i%2FIGuYAwUnpNEkMTteozh8KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx64oO54Q6aZPlLgL0q3AOlgDupnxrvuV4%2F0auuTQ6KUJeT3R7COJ347kBKofVMrD3GOwVNNllcrVFbEgpGuZdlK6k5qZ7hfMLTBu6GHc1pcKnUIkmKbLPueBb2uxFVFfTVYJ36P3cDlwMBprW0Z86Ya8zkk8bpdDGI9hAbzcpAwB3wo2sxRsTSn3s%2Fioo8lLbJyZNliJ%2FHITmx%2Bj8CjaCh2Sgen5QB%2F7Inzp5U74idzZi9oO61sHeqmykQQguO%2FH%2ForMb%2F75RtmMTgAKeKctpSJdDcWf9pIMWmUxpupXhTrLYWdTtl1OBnPvGi0KBJFueyLE9N91%2BWZ5fW0pd%2B5uJ9mm7cfGN5503ie0mvfdGo9yONyJHoJDwLO85i5Qh%2B6KHyz4dCBfv3RBjKYuMCrvkA4hnro784hpgP0t16koz8IE4Q2lw2o%2BXC9zC2KV8n0F65DhNZipzX5tBpPViTzwuayzPCkiL80M53sdBHFdIyV45W3qGDCWPxHiZFkb4GY9KnNbEQDOWRqSB1uvS%2BSndUd%2F%2F%2BL4F8MuchCfgQkwtlV28oWYamTNT9B4yCXV96WIkf3fH3vKjkZZouz55tshCUYC4abCfSVGhFBbzB9MpPLt0qB3EySXPcqLaGWslwumqpm71jh76TTruc5TDF5KG9BjqkAf9vntwZtVPhzSRX8t7%2BLJoac1%2FZFj4w1c1BwvNk5AYdYqJK5xqtN%2F2Y8RFtpnppL5TTnYZP5TKxwmWTBfnVtpLAU%2B2p7prKrxl26Rjqw8aV7741JP8e8KG75o9HZkqBBzOP0y8CtT7KA9PQS%2Fq8MUwYDCIdWu2eGTlNTq41ZIeOVNUZyeAHEmU84FjQgxXlEpATWRnKz%2FupS9IrIb1nv%2FV%2F98w9&X-Amz-Signature=10065c86518ed8052012db206c20f46574a66a59ea52d7238c03aa18b2a76d58&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRRNO5A%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOtJCCxFnnmMQ%2BKqr07lXi9uexblPpdmUfYWoUEqd5mgIhANoUXCayNLnryTkkkjsGT7i%2FIGuYAwUnpNEkMTteozh8KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx64oO54Q6aZPlLgL0q3AOlgDupnxrvuV4%2F0auuTQ6KUJeT3R7COJ347kBKofVMrD3GOwVNNllcrVFbEgpGuZdlK6k5qZ7hfMLTBu6GHc1pcKnUIkmKbLPueBb2uxFVFfTVYJ36P3cDlwMBprW0Z86Ya8zkk8bpdDGI9hAbzcpAwB3wo2sxRsTSn3s%2Fioo8lLbJyZNliJ%2FHITmx%2Bj8CjaCh2Sgen5QB%2F7Inzp5U74idzZi9oO61sHeqmykQQguO%2FH%2ForMb%2F75RtmMTgAKeKctpSJdDcWf9pIMWmUxpupXhTrLYWdTtl1OBnPvGi0KBJFueyLE9N91%2BWZ5fW0pd%2B5uJ9mm7cfGN5503ie0mvfdGo9yONyJHoJDwLO85i5Qh%2B6KHyz4dCBfv3RBjKYuMCrvkA4hnro784hpgP0t16koz8IE4Q2lw2o%2BXC9zC2KV8n0F65DhNZipzX5tBpPViTzwuayzPCkiL80M53sdBHFdIyV45W3qGDCWPxHiZFkb4GY9KnNbEQDOWRqSB1uvS%2BSndUd%2F%2F%2BL4F8MuchCfgQkwtlV28oWYamTNT9B4yCXV96WIkf3fH3vKjkZZouz55tshCUYC4abCfSVGhFBbzB9MpPLt0qB3EySXPcqLaGWslwumqpm71jh76TTruc5TDF5KG9BjqkAf9vntwZtVPhzSRX8t7%2BLJoac1%2FZFj4w1c1BwvNk5AYdYqJK5xqtN%2F2Y8RFtpnppL5TTnYZP5TKxwmWTBfnVtpLAU%2B2p7prKrxl26Rjqw8aV7741JP8e8KG75o9HZkqBBzOP0y8CtT7KA9PQS%2Fq8MUwYDCIdWu2eGTlNTq41ZIeOVNUZyeAHEmU84FjQgxXlEpATWRnKz%2FupS9IrIb1nv%2FV%2F98w9&X-Amz-Signature=046f0c99d9a519c95b3afa25b3222deece75e1f092e2d8515fa0bb0defda355b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
