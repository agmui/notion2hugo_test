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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBSUIO6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1JgzqBRbtmXv33%2BEhAgpuNu0YEkhRpNJm%2F1zzzYgfIAIgWbUPRQsna%2FKn3rX2hIdprajO876CeUOeQcvOFMnNgtUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARyY7cDSrnTBPFsQSrcA%2FcpH8%2FVc39HgNtCr4M7OlA8a4VyvqIVEaMBFgZHE%2BADavtf%2Bt8ybuJ8Zoatnwf9OwTj23tuXL%2B7CN1jAsx7MbIaR3EGQty2SyPTKZYKCjoOB%2BcegQaT%2B5rAtYQ%2Btzs513YT66VZvk6Vcjk7d2NR3b1GhMRc0X5fDjk%2FJo%2FmgCTc5QNyd%2BT3Bn4RPG8wrBnsHm4WCIRyQfMgKzsNwB31ATJVQzTtZJpfohIWRHPenHArEu6Iv7e%2Fv8Wvt2c8L9Y497HkhzupGTWkMsuufARbRFK%2BbTVfEhtj4SibSEZrju%2FdIyA3eVCJZOP42wRvhdwxJ3VFpyE7ZA%2FuF4J%2FJRYd%2BUPfo8vF%2FKHrzipCRQrI6YH%2BJbA10RNE7Koh%2F82n1fhbcmSmz6OeR%2BSk%2B0S8fLNWqX%2FtgduIrMSLsL35RLeoZa9u0pHYgENSdy5bBPVdzQ%2FdQcx9gmUmqUhBdcjPloily10yLReA94RJ3qllTXPxZGKmoWsjZ9x6g6T%2F6BbM2opqUuQGF6ubV5rkVnRoFVf5lpwRR54C7I%2FWYY19hcpfttxQMdh%2Bsr%2FNae6ZVP7avwGZ9IRuFubQ2s9AOeX4BbzeAbVBzNsU4W5a72pNZp6zfk39gHLqC5ir7SCJ9zqCMKuo9ccGOqUBFi3WMjv0aw%2FUipZb5l4CP%2FVntrnjS1JpfOAGXaceivsffqUptuSqzGHXCrA9VGkRhII08O6Vzc1obGA0qWbZwSzM%2BN0WeKC%2FhX5SoOj3kaXSwpm5Tj1ydnPT6ixFzXbCNX10fCmhjg0qG%2F7I2mSMgWslGJYrTaoeJtOT%2BkAHgWhFCcCUeJBpN5pB7Ji28I%2FOdC0w%2Fg76zi3RMzgzhIpZN75sm8RO&X-Amz-Signature=3b480caa3d3b219958040e7bc932dd0f38e4c56bfa17e42dceffae5d2580ff14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBSUIO6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1JgzqBRbtmXv33%2BEhAgpuNu0YEkhRpNJm%2F1zzzYgfIAIgWbUPRQsna%2FKn3rX2hIdprajO876CeUOeQcvOFMnNgtUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARyY7cDSrnTBPFsQSrcA%2FcpH8%2FVc39HgNtCr4M7OlA8a4VyvqIVEaMBFgZHE%2BADavtf%2Bt8ybuJ8Zoatnwf9OwTj23tuXL%2B7CN1jAsx7MbIaR3EGQty2SyPTKZYKCjoOB%2BcegQaT%2B5rAtYQ%2Btzs513YT66VZvk6Vcjk7d2NR3b1GhMRc0X5fDjk%2FJo%2FmgCTc5QNyd%2BT3Bn4RPG8wrBnsHm4WCIRyQfMgKzsNwB31ATJVQzTtZJpfohIWRHPenHArEu6Iv7e%2Fv8Wvt2c8L9Y497HkhzupGTWkMsuufARbRFK%2BbTVfEhtj4SibSEZrju%2FdIyA3eVCJZOP42wRvhdwxJ3VFpyE7ZA%2FuF4J%2FJRYd%2BUPfo8vF%2FKHrzipCRQrI6YH%2BJbA10RNE7Koh%2F82n1fhbcmSmz6OeR%2BSk%2B0S8fLNWqX%2FtgduIrMSLsL35RLeoZa9u0pHYgENSdy5bBPVdzQ%2FdQcx9gmUmqUhBdcjPloily10yLReA94RJ3qllTXPxZGKmoWsjZ9x6g6T%2F6BbM2opqUuQGF6ubV5rkVnRoFVf5lpwRR54C7I%2FWYY19hcpfttxQMdh%2Bsr%2FNae6ZVP7avwGZ9IRuFubQ2s9AOeX4BbzeAbVBzNsU4W5a72pNZp6zfk39gHLqC5ir7SCJ9zqCMKuo9ccGOqUBFi3WMjv0aw%2FUipZb5l4CP%2FVntrnjS1JpfOAGXaceivsffqUptuSqzGHXCrA9VGkRhII08O6Vzc1obGA0qWbZwSzM%2BN0WeKC%2FhX5SoOj3kaXSwpm5Tj1ydnPT6ixFzXbCNX10fCmhjg0qG%2F7I2mSMgWslGJYrTaoeJtOT%2BkAHgWhFCcCUeJBpN5pB7Ji28I%2FOdC0w%2Fg76zi3RMzgzhIpZN75sm8RO&X-Amz-Signature=305f6936986251a345d5d62e15257192d9ffe307fcb9f8b4aefbeda00e3ae699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
