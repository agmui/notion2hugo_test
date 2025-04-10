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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXKBBB4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCxcG8gz3DbMHu0UEAdOYvvbZZPu76Me4mjRlqEPtDCYgIhAOwhj3U0t1wSD0SWczqW5BaPzydoikmG3%2Fm0H6YI%2FMxMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz46ntBImb6sNienuUq3AM7J9Ke%2BJ%2BdTokmmBXEzlhWoQFZ30mjUSJWs%2FIl9ho%2FA6IiSAC1IQ1qqUfyGdNgvMwWvA%2F3Kdgmkr2RiWa4nVLzYkHSizhH8wKnYwlOw37wfvyXJFzo9vxVZ%2B1JX1Dkbd7xDb31mkqwi8OgxlbFAIz0ZIeRdW6E%2BuGOpf%2FniPqQb%2FgBUUvaniNX2dU%2FBnNAeMf2ixFOaO9MtfVQdiEjMxrROz705QhK3%2BCS9EBkCHdbHMQgaitg7Zp0CHCsFhCxhMF2CixHMiIRMi3phsjqF7H3HfFCqbulFrAjr3D6PeL2jLRHIMnNMM%2FFpDWjPmBWmzEzacBM2hUG%2BMzx2JnKExIwsY%2BrVojYVKJU0RA3%2BIH4RuEmIg%2FSmLMuT7wPAEoQs%2BkPWL6%2BCRPrcD6DWlC%2FCEr876u8YayAWJQEhy4uZLA91XAKQ9QFdRFjeuamDIfRFohLX5yHDecmkp5SQzEUOY2q4llvVsfVIcE8Tl3YN1zyzR5eFMnlWRGSQzTx7%2B40xiIQG6OAdcwOoy9XCNEs6dOXraSktTK7hwhK8oBV3OygwPR9TzekdrKrd3vINPQblziQboVCmN0J0Lxj2C4iXt8EEG8b8v8D8cmHr0Em%2Flg7T4gCmkRLWWa%2FDv8OojDwpN6%2FBjqkAZ9WQUbyAI0t39IPkDf721UVSQ%2FhSpoj%2B0b6i%2BJDeLYGgjrfp0X9wflRs6Av1K2Rs8gjIELg2FPxHAJ%2Fz89ec0LaQNq6mmTEHXB408aCN5RNzn1T0XGSfwh9OqvBt49Lm34FeYq808eBpI%2FzjLLEdOe5N3%2F9%2FSENFWJyMDVKkMNljMv8KpYOLvBUIiKhkurWdLvI%2BnGOMAH5Jec7dP%2FgTLUaterF&X-Amz-Signature=48604c03e3d00dc26bb5ba679f8b1f04c1b5654cc0d7415242cf39489889b4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXKBBB4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCxcG8gz3DbMHu0UEAdOYvvbZZPu76Me4mjRlqEPtDCYgIhAOwhj3U0t1wSD0SWczqW5BaPzydoikmG3%2Fm0H6YI%2FMxMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz46ntBImb6sNienuUq3AM7J9Ke%2BJ%2BdTokmmBXEzlhWoQFZ30mjUSJWs%2FIl9ho%2FA6IiSAC1IQ1qqUfyGdNgvMwWvA%2F3Kdgmkr2RiWa4nVLzYkHSizhH8wKnYwlOw37wfvyXJFzo9vxVZ%2B1JX1Dkbd7xDb31mkqwi8OgxlbFAIz0ZIeRdW6E%2BuGOpf%2FniPqQb%2FgBUUvaniNX2dU%2FBnNAeMf2ixFOaO9MtfVQdiEjMxrROz705QhK3%2BCS9EBkCHdbHMQgaitg7Zp0CHCsFhCxhMF2CixHMiIRMi3phsjqF7H3HfFCqbulFrAjr3D6PeL2jLRHIMnNMM%2FFpDWjPmBWmzEzacBM2hUG%2BMzx2JnKExIwsY%2BrVojYVKJU0RA3%2BIH4RuEmIg%2FSmLMuT7wPAEoQs%2BkPWL6%2BCRPrcD6DWlC%2FCEr876u8YayAWJQEhy4uZLA91XAKQ9QFdRFjeuamDIfRFohLX5yHDecmkp5SQzEUOY2q4llvVsfVIcE8Tl3YN1zyzR5eFMnlWRGSQzTx7%2B40xiIQG6OAdcwOoy9XCNEs6dOXraSktTK7hwhK8oBV3OygwPR9TzekdrKrd3vINPQblziQboVCmN0J0Lxj2C4iXt8EEG8b8v8D8cmHr0Em%2Flg7T4gCmkRLWWa%2FDv8OojDwpN6%2FBjqkAZ9WQUbyAI0t39IPkDf721UVSQ%2FhSpoj%2B0b6i%2BJDeLYGgjrfp0X9wflRs6Av1K2Rs8gjIELg2FPxHAJ%2Fz89ec0LaQNq6mmTEHXB408aCN5RNzn1T0XGSfwh9OqvBt49Lm34FeYq808eBpI%2FzjLLEdOe5N3%2F9%2FSENFWJyMDVKkMNljMv8KpYOLvBUIiKhkurWdLvI%2BnGOMAH5Jec7dP%2FgTLUaterF&X-Amz-Signature=112aedaeab542e9928a1105bd7f347ed53a7ce6391be0addfbb4bd954afbb1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
