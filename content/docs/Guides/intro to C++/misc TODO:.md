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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBSIPK7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb2J7bp1fM0Fhs5Fo50vnwb3tTEQbm8o7Sz4d0c%2F2N8gIhAL3kj4VbVON%2Bte4Ppp0ZX%2BSy8WS4wyX3%2BYRJ1Gs4e8I6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLdY0mPepr%2BSCxOeAq3AOfLC5JN%2BSKMZ1MPxkt%2Bd8MjJ5vWhu%2F7aGEZEQx%2BDlFTH5tBr%2Ba1gDaKHmyf8RJZgaJLsBhvm0%2BFjlhqUK8V%2FFnnQ1qJ%2F9wmKTeW33HksIhmuFXTdSR7ZWgreVoG40YVcUDVkoYbUx%2B6Z7HWL61WCgH98ppkhCtrvKLW8J4DN6VbntXEY6etri%2FfZIVv90DxEMm7mlmAUflk18cRM1CU8lSbrwu1xGOYrqEvsAJqdMBxcGCsd%2B6Tll9YJY4%2F2bBWCRs%2FFuAmEG60kjfS7ezbyrXG347%2BcYEO9DkyItWtkAlaQzNSz42oNLX0rajhIdQAAgRYlDku1INoO4weqj%2BfL%2Fn83%2F4z3bR5cI4xUAKm%2FM9yEc3ZGT1faPXC8Xe%2F%2FgqDk9CgoJ7NuPP0TWCNtUCrtH3brEPo6LH2KLiV%2FzDjsecC%2B93%2BJS958j2tm1NLcp7awttcPkt5BkGzkuYHMMOOX2OqAgqGnJkT6%2BbMLdYca6oPIwtDGCyXL6vTuOOkvdsclWoaJ%2FaSyAmTHcO0%2Bz2ylsr1uoIND7bzBh9jL6nVlXjNt%2FppvB1Jc8RjUnB2yke8S5luwoGBL2KF0xM0kL7dNKLTjAiSMY%2Fg7GbvYH%2BP6BvGq1mxcjleMcLM100gjD%2B8%2FTDBjqkAWZyoQ1%2B6dYdRWp2SsQ3M90HNGr%2FyLXeUzdCojyKq430YA3scaGzceSL6lA5F8MgLbSx1r1o0aCo41%2BxqlFxbhrBbB7uM2rYeXLXDTG4GpPG2T50cdBlgdLSkz43smciiu8txstcM9okhVZN%2BT1XIPMBGqRWvvFsH%2FtCDozxapOdFDlUeRGv3wZxfJgAg6p8d9fzuYPwY1x4Z0DW902JrRIlemTV&X-Amz-Signature=170e23088fc2ae0f04faa88eda9ebf39d996011afdd83d637c39a9e5ba3fecc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBSIPK7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb2J7bp1fM0Fhs5Fo50vnwb3tTEQbm8o7Sz4d0c%2F2N8gIhAL3kj4VbVON%2Bte4Ppp0ZX%2BSy8WS4wyX3%2BYRJ1Gs4e8I6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLdY0mPepr%2BSCxOeAq3AOfLC5JN%2BSKMZ1MPxkt%2Bd8MjJ5vWhu%2F7aGEZEQx%2BDlFTH5tBr%2Ba1gDaKHmyf8RJZgaJLsBhvm0%2BFjlhqUK8V%2FFnnQ1qJ%2F9wmKTeW33HksIhmuFXTdSR7ZWgreVoG40YVcUDVkoYbUx%2B6Z7HWL61WCgH98ppkhCtrvKLW8J4DN6VbntXEY6etri%2FfZIVv90DxEMm7mlmAUflk18cRM1CU8lSbrwu1xGOYrqEvsAJqdMBxcGCsd%2B6Tll9YJY4%2F2bBWCRs%2FFuAmEG60kjfS7ezbyrXG347%2BcYEO9DkyItWtkAlaQzNSz42oNLX0rajhIdQAAgRYlDku1INoO4weqj%2BfL%2Fn83%2F4z3bR5cI4xUAKm%2FM9yEc3ZGT1faPXC8Xe%2F%2FgqDk9CgoJ7NuPP0TWCNtUCrtH3brEPo6LH2KLiV%2FzDjsecC%2B93%2BJS958j2tm1NLcp7awttcPkt5BkGzkuYHMMOOX2OqAgqGnJkT6%2BbMLdYca6oPIwtDGCyXL6vTuOOkvdsclWoaJ%2FaSyAmTHcO0%2Bz2ylsr1uoIND7bzBh9jL6nVlXjNt%2FppvB1Jc8RjUnB2yke8S5luwoGBL2KF0xM0kL7dNKLTjAiSMY%2Fg7GbvYH%2BP6BvGq1mxcjleMcLM100gjD%2B8%2FTDBjqkAWZyoQ1%2B6dYdRWp2SsQ3M90HNGr%2FyLXeUzdCojyKq430YA3scaGzceSL6lA5F8MgLbSx1r1o0aCo41%2BxqlFxbhrBbB7uM2rYeXLXDTG4GpPG2T50cdBlgdLSkz43smciiu8txstcM9okhVZN%2BT1XIPMBGqRWvvFsH%2FtCDozxapOdFDlUeRGv3wZxfJgAg6p8d9fzuYPwY1x4Z0DW902JrRIlemTV&X-Amz-Signature=c75f3eb2edad6d5caa433e3de9f17197770d60d2f16e90511e28ca167108b1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
