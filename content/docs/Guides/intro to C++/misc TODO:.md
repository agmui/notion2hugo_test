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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNIQSAM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGQxyEUpdjhzFiqg%2BX%2B%2FFQi4EzjoDkUbNK395Am2Ry5dAiEA0kkfO0TKo3iPrpUtr809FiFpBjgP3UHOq2O7x%2F87HTAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE4rgn1Wxtub0w8PYyrcA8wXzYZygKPTgqVa7ilbrVySgWFQxvrgr3n9T9RUB8%2FVfkbIvhgNmRfyonhslZqDwCPRWGIPMgXb628Acc4ixo5DvyGdT5tIG73pL6X%2BaUL8uDo1gWGmOt7EJb8jgy%2BvZ8c23VYduvDS%2F7YdpCOmq4vRBrOjvRJeKNXKD9FxnFybXQf4xK%2BmPSyXdABdiPAbr1RsolqgdsjZ6ee9v7pTuyvfl00lvtMMxlHwoXk6VqLBNT7yDtke9%2FyUgUkJLfwgJX5v3qahFt2v%2Bln9EbMBbEgxq68ll81fmclZfSj4sdufSq7nQASdH5GF3wtDMdyvdUWPeKAqk8WoSg%2BUHd46Fpk8vwPVgw1UWfGqud2sfMtOM8e%2F9wvMsNR37olxznJSAGALQzofQpoRCd7jQ7sWrMUmbWbXRQ0P%2BmeT18DQ4qlTUzlWCie9%2F1Gjjj8LP5%2BuFY%2FqfrK9QNafwQBjk8n6SFQUpFH2viMuMIRmR2mLDSgTK55YrFd8%2Fr6sdr1tmutKKM7MyjgRqhofuzKQxDGO2PX5d9fUa57C2PRWPRY14ZR810zr9TsbPrsHRb2sGzMXvBlCLiDYZS7VjopfLbmsGoFQqsWNMqkl7mF2%2FljTB%2BTV53W6BxD4YW33qHc6MMeEusIGOqUB7UsjuqaVf2nGFKx4p%2BMmWEf8Wx%2B6vrAkbtFuZBddtZwmL%2BKwEdP18ZFowICb9EJv2XB6p%2FFIQec4pBBuEufCf5QSDksPCEZ%2FxV4bbLllxZq79ITNSlrqCWE97yTk37Grkd7in6021jlZPUP059LQ0uCVlHxQCqwUeKBZrrLemrKfpwty96FbACZQwYvTof9yT66J2t5AkfkcuRS2886DmE4%2FGRo5&X-Amz-Signature=9e80b1c3de9bc402eb97b8c533bfedfd5e8b90dab91d6496589d21d44e272aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNIQSAM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGQxyEUpdjhzFiqg%2BX%2B%2FFQi4EzjoDkUbNK395Am2Ry5dAiEA0kkfO0TKo3iPrpUtr809FiFpBjgP3UHOq2O7x%2F87HTAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE4rgn1Wxtub0w8PYyrcA8wXzYZygKPTgqVa7ilbrVySgWFQxvrgr3n9T9RUB8%2FVfkbIvhgNmRfyonhslZqDwCPRWGIPMgXb628Acc4ixo5DvyGdT5tIG73pL6X%2BaUL8uDo1gWGmOt7EJb8jgy%2BvZ8c23VYduvDS%2F7YdpCOmq4vRBrOjvRJeKNXKD9FxnFybXQf4xK%2BmPSyXdABdiPAbr1RsolqgdsjZ6ee9v7pTuyvfl00lvtMMxlHwoXk6VqLBNT7yDtke9%2FyUgUkJLfwgJX5v3qahFt2v%2Bln9EbMBbEgxq68ll81fmclZfSj4sdufSq7nQASdH5GF3wtDMdyvdUWPeKAqk8WoSg%2BUHd46Fpk8vwPVgw1UWfGqud2sfMtOM8e%2F9wvMsNR37olxznJSAGALQzofQpoRCd7jQ7sWrMUmbWbXRQ0P%2BmeT18DQ4qlTUzlWCie9%2F1Gjjj8LP5%2BuFY%2FqfrK9QNafwQBjk8n6SFQUpFH2viMuMIRmR2mLDSgTK55YrFd8%2Fr6sdr1tmutKKM7MyjgRqhofuzKQxDGO2PX5d9fUa57C2PRWPRY14ZR810zr9TsbPrsHRb2sGzMXvBlCLiDYZS7VjopfLbmsGoFQqsWNMqkl7mF2%2FljTB%2BTV53W6BxD4YW33qHc6MMeEusIGOqUB7UsjuqaVf2nGFKx4p%2BMmWEf8Wx%2B6vrAkbtFuZBddtZwmL%2BKwEdP18ZFowICb9EJv2XB6p%2FFIQec4pBBuEufCf5QSDksPCEZ%2FxV4bbLllxZq79ITNSlrqCWE97yTk37Grkd7in6021jlZPUP059LQ0uCVlHxQCqwUeKBZrrLemrKfpwty96FbACZQwYvTof9yT66J2t5AkfkcuRS2886DmE4%2FGRo5&X-Amz-Signature=16e31765d4d4e822bf2ea57674a469265b97fdf9d504210eb406cef218195b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
