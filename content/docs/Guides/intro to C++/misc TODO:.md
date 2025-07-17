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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3QY6WP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD7rK9gHMzH4%2Fmqw2T1zVGkB%2Bip7p%2FdPyDj2QRLrxG5TAIgDHMFra2Q1lmyCqhhSO81EcjkwAXe8IEx6Mw0L9Ah19oq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKhUZC6J7MMyb9BtPCrcAza%2FaPYjHFC%2Bff%2BtCDHy9wnrdpbIuZLEO0RLGV%2BVJe122JsRYQMuKyr7XXMouGuJXd4GbtclxML5k3XyBM%2FqBy4SvD2CeGfreUKyBf9RRLwPEot8Mip4xayEBHL%2FaDVq6QAZCstLw9NjihXZmyeN61w2rNkQhXmZ8jaYGhkIpHSm72f2GRcQ5AnudWVhVfRflqFJPt9EklJo6G2%2FFylyUTPdFioioILRim5OV5UMAS6SN%2FCVHAkO3eOlrCCFiylViB6IN5gT9DxCNN1JbQv6u0YM6LqKL3FDX6WI1O4HnFMMjwiC%2BN%2BB1PvkB6aBYvJOGh8rlwtmH52ta0V0DXW3rb%2FcMTqOd0xt2bhkhlDrHnE2uCEvV4uIAM%2FZPEAOBDTu6EdWTmjKz4pytwT3EZrSbguqXY3fsD%2B17azcUWTcL4TrNbSyzm0IZfP9C1F18QI1KcWopFufOeUFFPR7wwtfwygTb2%2Bu2%2FCLhE4CgqNm1TjetEQUKra0cJjXiKK0j%2FyVaPUbhsGewqkhafqSqX11gjeA%2BO4fMEEoL3ESiM8riI3cSSrynA1EQST5OoX%2FomevzLLdlIZDgf3mO7JjqBYSnZry4IQHala0t1FeYT1yj%2B75Q3wp1TOosPFN84YIMK354MMGOqUBXV4TaDk7M9QDJP%2FMmLSw4BvZNB9VxvWSGHVM033EUXwesouF5YUGYbrkGbawHH2ndl%2BJrW0SeR4uto7pLWnbfRLE9Mm1FfDDVeovY8GjR%2Fnoqi8xwyXTAjKEI5mppfeqpnC8LfeZCnLTbyL%2BE%2Fvg9y0ibYpVC4TYLAT6pW8QCh0JuJXH5mFBa6z3vRt0p6xpe1hVkq3mvDicFZpSDYS%2BmmYztsmS&X-Amz-Signature=cd47a8b2d252859117e3390adfeb4a76189223d60221937095dbf3f5b2cae8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3QY6WP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD7rK9gHMzH4%2Fmqw2T1zVGkB%2Bip7p%2FdPyDj2QRLrxG5TAIgDHMFra2Q1lmyCqhhSO81EcjkwAXe8IEx6Mw0L9Ah19oq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKhUZC6J7MMyb9BtPCrcAza%2FaPYjHFC%2Bff%2BtCDHy9wnrdpbIuZLEO0RLGV%2BVJe122JsRYQMuKyr7XXMouGuJXd4GbtclxML5k3XyBM%2FqBy4SvD2CeGfreUKyBf9RRLwPEot8Mip4xayEBHL%2FaDVq6QAZCstLw9NjihXZmyeN61w2rNkQhXmZ8jaYGhkIpHSm72f2GRcQ5AnudWVhVfRflqFJPt9EklJo6G2%2FFylyUTPdFioioILRim5OV5UMAS6SN%2FCVHAkO3eOlrCCFiylViB6IN5gT9DxCNN1JbQv6u0YM6LqKL3FDX6WI1O4HnFMMjwiC%2BN%2BB1PvkB6aBYvJOGh8rlwtmH52ta0V0DXW3rb%2FcMTqOd0xt2bhkhlDrHnE2uCEvV4uIAM%2FZPEAOBDTu6EdWTmjKz4pytwT3EZrSbguqXY3fsD%2B17azcUWTcL4TrNbSyzm0IZfP9C1F18QI1KcWopFufOeUFFPR7wwtfwygTb2%2Bu2%2FCLhE4CgqNm1TjetEQUKra0cJjXiKK0j%2FyVaPUbhsGewqkhafqSqX11gjeA%2BO4fMEEoL3ESiM8riI3cSSrynA1EQST5OoX%2FomevzLLdlIZDgf3mO7JjqBYSnZry4IQHala0t1FeYT1yj%2B75Q3wp1TOosPFN84YIMK354MMGOqUBXV4TaDk7M9QDJP%2FMmLSw4BvZNB9VxvWSGHVM033EUXwesouF5YUGYbrkGbawHH2ndl%2BJrW0SeR4uto7pLWnbfRLE9Mm1FfDDVeovY8GjR%2Fnoqi8xwyXTAjKEI5mppfeqpnC8LfeZCnLTbyL%2BE%2Fvg9y0ibYpVC4TYLAT6pW8QCh0JuJXH5mFBa6z3vRt0p6xpe1hVkq3mvDicFZpSDYS%2BmmYztsmS&X-Amz-Signature=b74616f66d9744bed0de4417d8f162360e47c52852b587984b106e524efe8dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
