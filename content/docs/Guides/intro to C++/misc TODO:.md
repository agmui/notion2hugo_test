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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOXSVIG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaNpM6CbkIE4CbOawbrmwQgl0lIqH%2FnY3aIeWhhnmVIgIhAMOUY2UDV5vu4FlwqfK6D5SggYPb10nV7XXJnHrvDuiGKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTLJSbNebVgEnijcIq3ANjYwsV2gEdcoDm3NtQqLErcAUxDDRMqB9fndO6b4MbUUG44czwq5qakHtrVgSWkif%2BK5D6kKeysWM4ouKnO3AT6vSUVEjg1s6QcnnNvrHRPAuuDhyOBEOIAhPKqBIyPlKp17fFb%2BqQehWwR%2FbkPzA9NatUPjCv3pgCpuXgmtlQBlKxU%2B11e%2FURG0%2BBtXgcXo%2Bn5koApn0uFChAY1wDERjgYrZyef2Ie2RdKu04f%2Bzp6aimLtLgOnVff72g%2FOYF%2FX81ktXbQROpAU9%2Bml05qbZne1HSR8Z%2F9oCF5rCK7%2FPNsvRSzV%2ByNXVkELZVdfLlhwGMJdzgbTg7TMPz1IvogDK%2B9DYtNAyjMzg65DQMYK38sw6ioqZ0m%2FWrMaHSypEr5tKGDoNywJ3TBEPcQkfSSESQE3nJeNZjGn3X8X0q3dHfP7%2Fek2Hcz6NCI4Sp3me7EBFVZyTFfLrtstgwpyaO9rbmQtJZiEwq1HyszQXPCRBm3vmqIMBasD5beVfbckfNCmkDwhJNcUjA8U3TZJvJY8Ovw3v2p%2FENZS%2F2E4nbfGRk8WxnnACdl%2FSf14EyDAgmzhy3fdp3iYNs64luVU5gVJTiFbUO51T71bNo5WNi6Vnbsbjq9gFzUCTqDzRQGDCSkKS9BjqkAYD8t524od03L1B0ouImUACgZDYQz88z5Bnhdi%2BtQ7xE4%2BYfHvTlohcJDpTpg%2FLUksdakCUxTyz%2BhuWcKzZgSfiTQAY8tbRWfWWz2%2FF0Ngf0MooW1SwgUXuAK%2Fzme6c32gTBPcYSV1xVqkUziDXCfa2voOl9LfHIhJ7a1BKIio1pAmXiWt57%2BpHu2fQ1Y8rX6GTGO1vVWuefmbit8O%2By0Cn%2BCYx3&X-Amz-Signature=97d195826c8a66d266212377148a89f20a5522e3b419e548a1aa48d84d8a37f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOXSVIG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaNpM6CbkIE4CbOawbrmwQgl0lIqH%2FnY3aIeWhhnmVIgIhAMOUY2UDV5vu4FlwqfK6D5SggYPb10nV7XXJnHrvDuiGKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTLJSbNebVgEnijcIq3ANjYwsV2gEdcoDm3NtQqLErcAUxDDRMqB9fndO6b4MbUUG44czwq5qakHtrVgSWkif%2BK5D6kKeysWM4ouKnO3AT6vSUVEjg1s6QcnnNvrHRPAuuDhyOBEOIAhPKqBIyPlKp17fFb%2BqQehWwR%2FbkPzA9NatUPjCv3pgCpuXgmtlQBlKxU%2B11e%2FURG0%2BBtXgcXo%2Bn5koApn0uFChAY1wDERjgYrZyef2Ie2RdKu04f%2Bzp6aimLtLgOnVff72g%2FOYF%2FX81ktXbQROpAU9%2Bml05qbZne1HSR8Z%2F9oCF5rCK7%2FPNsvRSzV%2ByNXVkELZVdfLlhwGMJdzgbTg7TMPz1IvogDK%2B9DYtNAyjMzg65DQMYK38sw6ioqZ0m%2FWrMaHSypEr5tKGDoNywJ3TBEPcQkfSSESQE3nJeNZjGn3X8X0q3dHfP7%2Fek2Hcz6NCI4Sp3me7EBFVZyTFfLrtstgwpyaO9rbmQtJZiEwq1HyszQXPCRBm3vmqIMBasD5beVfbckfNCmkDwhJNcUjA8U3TZJvJY8Ovw3v2p%2FENZS%2F2E4nbfGRk8WxnnACdl%2FSf14EyDAgmzhy3fdp3iYNs64luVU5gVJTiFbUO51T71bNo5WNi6Vnbsbjq9gFzUCTqDzRQGDCSkKS9BjqkAYD8t524od03L1B0ouImUACgZDYQz88z5Bnhdi%2BtQ7xE4%2BYfHvTlohcJDpTpg%2FLUksdakCUxTyz%2BhuWcKzZgSfiTQAY8tbRWfWWz2%2FF0Ngf0MooW1SwgUXuAK%2Fzme6c32gTBPcYSV1xVqkUziDXCfa2voOl9LfHIhJ7a1BKIio1pAmXiWt57%2BpHu2fQ1Y8rX6GTGO1vVWuefmbit8O%2By0Cn%2BCYx3&X-Amz-Signature=f82a850702e1b481d95f1a6fcd79b7dbb70ec414b5c28fff4c441ec52ad3bd11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
