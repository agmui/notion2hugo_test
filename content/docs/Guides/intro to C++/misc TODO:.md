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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZJZULU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCXSGRZL25iq5xn0Shmq%2Bbz1iXJMB6HEFZo4NvCigW5PwIhAIgtCAr%2BYmdU9mjJXc4en9tv0aR1fmongw7CO3awFvGKKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1Yp%2BGV7bCixwALQq3AOnu2QidRixEpVZsT24eFiRMjllzrr4pNooEluM20rA7CKYD7LJOIhnwNTq%2B22VG8j7bI0Uhyi%2BLd%2FlDiUs9UsqgHJm5iR3EUPqc1r5wiLXJcA04O%2FoFWXYyJPlylxj3TwlBmM6en2%2FUC9ZzICzAgcPpHvZRaUvd42sIXMWUff5wo%2BUL3EUTG7xhSv0cjo8XRun5HiyoVYytSZwC%2FUyVSDrzFlKt7EBvRG25%2B3mB7%2B11KHQkffg%2BoZwmqZtG4fZzpSFqB5SyUFieWfVSLABkFqL1U%2Fma0xRvVj6vqqXsMGkG5o2bzCcLtotyUcEIHu5N1P2XZ1iJj%2B5ohDksd0xU5thdpId7yVmuXJEnRPr26syEw1GxgMyL0KoxFMwSva03PCL0o9V0AAUmVVVOEOp5Qn2QAo%2FDtA5xqCiRyJS3HLBF0NiMaduN0kNYs5OHBXTwwWiKbnZaaNXYsFKcfru3HXIeuKedHS5y2114FdIl3uW2fNHGfafJ%2Bbb8%2F%2Bd6ns9spcNwy2I4SJyznuz8%2BjejF4GXVzdfofiPO6oq%2BOYfh6cvquPD%2FEvB3zJwYDNaUuOsa0rPoqq6uH4E6ydlhsYtPSXH9h9zbAngWXaCxhI8aSFcm4IxUnqwHRBVHEhRjDSyLq%2BBjqkAZuAejHWoZmTlOufhl6%2FN2kaLuXMIR2IqO3pdeT1%2BhrcOylr5UGNRU24Wqu%2FL6iwCIKUTGUvD1He%2FE3jUEkV%2FmIv9PYra7%2FHXwymLer3IVoJQSa7Fezhce96gpz2p777wCOC13Gh%2BTGSyRSAy3rVV4oBTcELFVrnogqrjOccDhFnEkU5dhofzqZScUpelcSYIKFtpXZX6BeN07Hal1BMXLp7l1wn&X-Amz-Signature=0cb2326f448b2b8307dc17bc00a269165fcd135bc0cfe265fc2a06b032098474&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZJZULU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCXSGRZL25iq5xn0Shmq%2Bbz1iXJMB6HEFZo4NvCigW5PwIhAIgtCAr%2BYmdU9mjJXc4en9tv0aR1fmongw7CO3awFvGKKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1Yp%2BGV7bCixwALQq3AOnu2QidRixEpVZsT24eFiRMjllzrr4pNooEluM20rA7CKYD7LJOIhnwNTq%2B22VG8j7bI0Uhyi%2BLd%2FlDiUs9UsqgHJm5iR3EUPqc1r5wiLXJcA04O%2FoFWXYyJPlylxj3TwlBmM6en2%2FUC9ZzICzAgcPpHvZRaUvd42sIXMWUff5wo%2BUL3EUTG7xhSv0cjo8XRun5HiyoVYytSZwC%2FUyVSDrzFlKt7EBvRG25%2B3mB7%2B11KHQkffg%2BoZwmqZtG4fZzpSFqB5SyUFieWfVSLABkFqL1U%2Fma0xRvVj6vqqXsMGkG5o2bzCcLtotyUcEIHu5N1P2XZ1iJj%2B5ohDksd0xU5thdpId7yVmuXJEnRPr26syEw1GxgMyL0KoxFMwSva03PCL0o9V0AAUmVVVOEOp5Qn2QAo%2FDtA5xqCiRyJS3HLBF0NiMaduN0kNYs5OHBXTwwWiKbnZaaNXYsFKcfru3HXIeuKedHS5y2114FdIl3uW2fNHGfafJ%2Bbb8%2F%2Bd6ns9spcNwy2I4SJyznuz8%2BjejF4GXVzdfofiPO6oq%2BOYfh6cvquPD%2FEvB3zJwYDNaUuOsa0rPoqq6uH4E6ydlhsYtPSXH9h9zbAngWXaCxhI8aSFcm4IxUnqwHRBVHEhRjDSyLq%2BBjqkAZuAejHWoZmTlOufhl6%2FN2kaLuXMIR2IqO3pdeT1%2BhrcOylr5UGNRU24Wqu%2FL6iwCIKUTGUvD1He%2FE3jUEkV%2FmIv9PYra7%2FHXwymLer3IVoJQSa7Fezhce96gpz2p777wCOC13Gh%2BTGSyRSAy3rVV4oBTcELFVrnogqrjOccDhFnEkU5dhofzqZScUpelcSYIKFtpXZX6BeN07Hal1BMXLp7l1wn&X-Amz-Signature=6667ded482fb754df87acd03ca4ec6599ac7d3ad22b45e103c70151ce19dcce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
