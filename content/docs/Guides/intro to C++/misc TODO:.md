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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YZCTBY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAiCwu9ouTEZjPgol5oYX3tkcNPVFdYfhEyFt%2FZRk5zCAiEAtqiGNnn8mqFOLZ7M8mMCmndyOlVWdfcBei9CZF4tqJMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNMZ%2BCv4V%2Fq9vkinCrcA6mIz6UGqv8fa2iDmZT6BmfCrZQ3r5R%2F1nfQtkSEQBLFOFml%2FF53yas0Fmrrmhu3Yqs1dEv2h6AD%2BEQRutWuSaVSYKUq6hZFagP4oWMuOWbJscBwiD0kOn3pl5vWvuB8xosw2r%2BGNXI8fwq7nULNY4hw%2F6sUiMHY%2F4tB0jQ1%2B%2BCRAB1uYxHZ4up6T1JF%2F4LGne8DMN7AHh8Wzg21xpLd7SQRCddjqGddfkqlj2etcLJZ8a7IDtFrLy78FVltGfzBJZue9%2BeFP7d531hM%2FN6KPUgWq1GzPVZUwmN%2BlGx%2FwJ9vnkl8AtYpHZKvWOmQCRXJ7EczhUpUGsAFaYtw0WtaZcjIZg5Vn2O%2BWFJ%2B2l65bI%2FE6Dwl6fQ8IqS3%2Fl0GlB8ccej02Lr%2FL2h14ZHDQ6hBAm41i3q%2FXHViTw3x0VguiPX%2FO4i%2F6jrMBjOrZu7AHmUJiBk1%2FT11vVs8PTwFV%2FRoP%2FFkAHCzwDSJn7q4PH%2BHFcjckHiRasA1CD2IXYXUGuwKiFvA4K71UWVKY3fUoi2t2uhdAG8Z8N22RGYIbMPTWc470ADfDapsKkuwkXpsdTxDM0mDnkzmV%2FIS15%2FA7HnWQMN0LlnhoxLMz3lXRHU0uzZ6SjdXHdmtfMaEEuzwMMrBjMEGOqUBwA1Z6ZRu53WCPUNRAGREjRYy0eA01VPppSN5NcN1JWfL7CZhwBUkfC%2FC45Ea3mfM2rgjEpjIX5zn%2BgdW0xUrhOhKMWJg25hXoErnYjSh9zG1nFWWK6IC6MQA8TK%2BGa3LHHxh5%2FGeEFPf5rKeUBwNiguzMKrdXlWME6i0wI6I4KCjBoIV59GvUizRuYfD3j%2BKyDdDbZruE8htJly2avSsz4jZpHZK&X-Amz-Signature=20c1966ee71b90dfc5cc734614e22f1e3648323be55e1664183e831192f88069&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YZCTBY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAiCwu9ouTEZjPgol5oYX3tkcNPVFdYfhEyFt%2FZRk5zCAiEAtqiGNnn8mqFOLZ7M8mMCmndyOlVWdfcBei9CZF4tqJMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNMZ%2BCv4V%2Fq9vkinCrcA6mIz6UGqv8fa2iDmZT6BmfCrZQ3r5R%2F1nfQtkSEQBLFOFml%2FF53yas0Fmrrmhu3Yqs1dEv2h6AD%2BEQRutWuSaVSYKUq6hZFagP4oWMuOWbJscBwiD0kOn3pl5vWvuB8xosw2r%2BGNXI8fwq7nULNY4hw%2F6sUiMHY%2F4tB0jQ1%2B%2BCRAB1uYxHZ4up6T1JF%2F4LGne8DMN7AHh8Wzg21xpLd7SQRCddjqGddfkqlj2etcLJZ8a7IDtFrLy78FVltGfzBJZue9%2BeFP7d531hM%2FN6KPUgWq1GzPVZUwmN%2BlGx%2FwJ9vnkl8AtYpHZKvWOmQCRXJ7EczhUpUGsAFaYtw0WtaZcjIZg5Vn2O%2BWFJ%2B2l65bI%2FE6Dwl6fQ8IqS3%2Fl0GlB8ccej02Lr%2FL2h14ZHDQ6hBAm41i3q%2FXHViTw3x0VguiPX%2FO4i%2F6jrMBjOrZu7AHmUJiBk1%2FT11vVs8PTwFV%2FRoP%2FFkAHCzwDSJn7q4PH%2BHFcjckHiRasA1CD2IXYXUGuwKiFvA4K71UWVKY3fUoi2t2uhdAG8Z8N22RGYIbMPTWc470ADfDapsKkuwkXpsdTxDM0mDnkzmV%2FIS15%2FA7HnWQMN0LlnhoxLMz3lXRHU0uzZ6SjdXHdmtfMaEEuzwMMrBjMEGOqUBwA1Z6ZRu53WCPUNRAGREjRYy0eA01VPppSN5NcN1JWfL7CZhwBUkfC%2FC45Ea3mfM2rgjEpjIX5zn%2BgdW0xUrhOhKMWJg25hXoErnYjSh9zG1nFWWK6IC6MQA8TK%2BGa3LHHxh5%2FGeEFPf5rKeUBwNiguzMKrdXlWME6i0wI6I4KCjBoIV59GvUizRuYfD3j%2BKyDdDbZruE8htJly2avSsz4jZpHZK&X-Amz-Signature=36641af288a73e9e9fb5843a53b1ab3434e522a1230ab9d71c9d1d509f31684e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
