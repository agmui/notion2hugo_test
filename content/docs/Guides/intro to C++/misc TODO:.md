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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHFBBG5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2BYSm%2B4HHRkeCkMo2AKtS1thQ29hOAMrLud9t1cBmNwQIgFKEugYUbH%2FpTFjnFM%2FJ1Cmp8CHbZG2pS6DEdE9m5xCoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMFgv4mLLUGooVQv0ircAzErIi5ZDS%2BExOzyMpYBWLB87IxdUWhDgWEDEDr4QOz3c0DduLjs%2F1lM%2BQDRC1db5epQfGupTWgRyZJbZ1VqBimszD5zUIKZm4eam9dW2WsZYW1nt1Zc4DJXdqLnxuiog8JTFtysaOyMiAsKfCaVPEnECrcWL%2FJ6LyNsuvtsHsEVl3XSZwwVb3BAPMP1ybnQTV03BbCQGjlN7V2m9CImuJy1H7IfR1XBLrXiTm8o3AdnEQOIdtMuLjI7schKEpErWhpue5ZCc9WJlK5ZsXudLOgI85qMGP6sMFUG4q6xmGp720Tii%2BXRsRxNNtJl9qbV%2BuBTVx80FibwA5j7B4cBlmkpTZ5plyKVP6Ko6DiUmPqE9QH9f6t9JBONq9uMwn2FsAvsEiJXlQKFT0p86ZrYKJJmN%2F%2BLTpoTI%2FPUO8xfwbl6vhCeHwx3acwmomFcMH%2Bi7b%2BYjBX9fGfsH62DWR9TEdBK6s9TgPaFwhc40yGBU26rE6T%2B3OQGaZD8D7q71u0uaAXtK7qL%2Ba%2BQHh3Gn12WeepfR1kqqLDuFQK4xH4CWZIvKAfwJxLhSz9on90jtx9zdwNmkh9M2oIlnS%2BTbdvpsIJ9Lj09qwMIzdAbEO%2F%2FQxCpB%2FwinuPPznB%2BcBmFMMfYh8IGOqUBLzAgC6EzTFNGVcqd%2FJYk8uZ1wU1EwRk7RE0Orr5WIcVdDv0YHhTq6RShZ505T5%2BlDVV3CplMPTiFqNtsNEtx6whtAYTF6jjTrnIQ%2BVDY7H6T1gsNPH1F5PebnrVF8NOzSaODZn81ybdpfb4lAyuZ2JoTWnonC1Na44kuB5mCx4of%2FC5MVg8AK0xUQ6rG0f0zF7L0fYhWevUZBrrpC2qLoT7RQ%2Fr0&X-Amz-Signature=d1a570d771a295ca8e0845d2f3ffe2556526b9827760e26d4bfb7869e54ee7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHFBBG5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2BYSm%2B4HHRkeCkMo2AKtS1thQ29hOAMrLud9t1cBmNwQIgFKEugYUbH%2FpTFjnFM%2FJ1Cmp8CHbZG2pS6DEdE9m5xCoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMFgv4mLLUGooVQv0ircAzErIi5ZDS%2BExOzyMpYBWLB87IxdUWhDgWEDEDr4QOz3c0DduLjs%2F1lM%2BQDRC1db5epQfGupTWgRyZJbZ1VqBimszD5zUIKZm4eam9dW2WsZYW1nt1Zc4DJXdqLnxuiog8JTFtysaOyMiAsKfCaVPEnECrcWL%2FJ6LyNsuvtsHsEVl3XSZwwVb3BAPMP1ybnQTV03BbCQGjlN7V2m9CImuJy1H7IfR1XBLrXiTm8o3AdnEQOIdtMuLjI7schKEpErWhpue5ZCc9WJlK5ZsXudLOgI85qMGP6sMFUG4q6xmGp720Tii%2BXRsRxNNtJl9qbV%2BuBTVx80FibwA5j7B4cBlmkpTZ5plyKVP6Ko6DiUmPqE9QH9f6t9JBONq9uMwn2FsAvsEiJXlQKFT0p86ZrYKJJmN%2F%2BLTpoTI%2FPUO8xfwbl6vhCeHwx3acwmomFcMH%2Bi7b%2BYjBX9fGfsH62DWR9TEdBK6s9TgPaFwhc40yGBU26rE6T%2B3OQGaZD8D7q71u0uaAXtK7qL%2Ba%2BQHh3Gn12WeepfR1kqqLDuFQK4xH4CWZIvKAfwJxLhSz9on90jtx9zdwNmkh9M2oIlnS%2BTbdvpsIJ9Lj09qwMIzdAbEO%2F%2FQxCpB%2FwinuPPznB%2BcBmFMMfYh8IGOqUBLzAgC6EzTFNGVcqd%2FJYk8uZ1wU1EwRk7RE0Orr5WIcVdDv0YHhTq6RShZ505T5%2BlDVV3CplMPTiFqNtsNEtx6whtAYTF6jjTrnIQ%2BVDY7H6T1gsNPH1F5PebnrVF8NOzSaODZn81ybdpfb4lAyuZ2JoTWnonC1Na44kuB5mCx4of%2FC5MVg8AK0xUQ6rG0f0zF7L0fYhWevUZBrrpC2qLoT7RQ%2Fr0&X-Amz-Signature=f0badc1aefbb24b444e161af90cd2c1a46ce01a1aa7c014131a58fee92a1edad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
