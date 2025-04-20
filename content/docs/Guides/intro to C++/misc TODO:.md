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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVTI35%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDc%2FJsXuT%2FK9cMhB8YUxMBQy6htTfpb2K%2FAKaUP8wYXhAiEA5UdRSJUQ%2FGwujw1V62QDiQ%2F5sxDE6%2FkHBc53MbqkHlYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErkGrTgsHJbtMQYoyrcA5PR5L45DYweNdqVcNeV3GkUytAjzp6gTM6j2QVqSV2RLA%2BMiO0dD7dPkV1fwXcJPCQXyJ1jOYVM4%2Br9hX%2BP0XGJx81UoJI5Gk29qt2jgmtZjNEqGpq82CVJEvqoFXxwytPFEPfi8PqPcFgETB%2FVvvwREqhCmvD9vkZ6ZpSiamBICsa%2B0tH%2FEAOMH68CxaxHjIUSwb%2F8O1qm3QDUdeZ9dk%2BcUV7PbT2%2BCJUMrjT2oY5nTFPn4xG%2Bo1%2BygCV7CN2sitGoXZGrbrm16K6OVLGN%2BzPZg6aL7OmVTzxWj9ao5TsQC8f5DbpJi33ymaQBamG01DPxt6%2FJscEP%2FcojQxBFIzXzJhwzatHLR5opKFtwKBEGFhliBx0sUfD0h0Zgy0M01kzbK%2FXGWY7%2But29eH9i50t%2B2NpldLst%2BkZF77LUb6xrcrB67f%2F6TPvy5MV5iqlKKrrRZ8B1RA%2BsS%2FaXGXKmwInWY3A5CbAxVQ1U%2F9oOMX48%2FMVpBzyj7V7zbhMPBvpzTV6bDdH%2FeO493N2XqYID3Caxv72t1bZTbOtPvq7ztHkM9rT8fQqni8Jo07uFfA56sJkQMrWRFzS8FXgyOaIG%2BHN69n6Wsjs7j9rZwlRaR4DM5UwWDu%2F0Mz0V1rX1MNfblcAGOqUBwy%2Bqc9mpgczb1mbHrqbjrWCp4jNiYIDtyVwbeh24DtLvYFhP6hRF9e7hGE6Iau1BYvFim9%2FNtNk%2FpcKA1xUgcqi855u5ipf1bZi9WKUPUXxNgQmVjSkeSrKSJZtLJ%2BIEORJW%2F5oF%2FxtciDImtL4WQxS7WEVQwnpf5rfcE1YpThP5vg1U3bqxsDK%2BPZrWje%2BFafdVismgjGYb8Hf8RsiYyvQ23NMF&X-Amz-Signature=76def8168f7364675565d3b9aaed6bbfc6045bd69994e23563a12d198c610f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVTI35%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDc%2FJsXuT%2FK9cMhB8YUxMBQy6htTfpb2K%2FAKaUP8wYXhAiEA5UdRSJUQ%2FGwujw1V62QDiQ%2F5sxDE6%2FkHBc53MbqkHlYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErkGrTgsHJbtMQYoyrcA5PR5L45DYweNdqVcNeV3GkUytAjzp6gTM6j2QVqSV2RLA%2BMiO0dD7dPkV1fwXcJPCQXyJ1jOYVM4%2Br9hX%2BP0XGJx81UoJI5Gk29qt2jgmtZjNEqGpq82CVJEvqoFXxwytPFEPfi8PqPcFgETB%2FVvvwREqhCmvD9vkZ6ZpSiamBICsa%2B0tH%2FEAOMH68CxaxHjIUSwb%2F8O1qm3QDUdeZ9dk%2BcUV7PbT2%2BCJUMrjT2oY5nTFPn4xG%2Bo1%2BygCV7CN2sitGoXZGrbrm16K6OVLGN%2BzPZg6aL7OmVTzxWj9ao5TsQC8f5DbpJi33ymaQBamG01DPxt6%2FJscEP%2FcojQxBFIzXzJhwzatHLR5opKFtwKBEGFhliBx0sUfD0h0Zgy0M01kzbK%2FXGWY7%2But29eH9i50t%2B2NpldLst%2BkZF77LUb6xrcrB67f%2F6TPvy5MV5iqlKKrrRZ8B1RA%2BsS%2FaXGXKmwInWY3A5CbAxVQ1U%2F9oOMX48%2FMVpBzyj7V7zbhMPBvpzTV6bDdH%2FeO493N2XqYID3Caxv72t1bZTbOtPvq7ztHkM9rT8fQqni8Jo07uFfA56sJkQMrWRFzS8FXgyOaIG%2BHN69n6Wsjs7j9rZwlRaR4DM5UwWDu%2F0Mz0V1rX1MNfblcAGOqUBwy%2Bqc9mpgczb1mbHrqbjrWCp4jNiYIDtyVwbeh24DtLvYFhP6hRF9e7hGE6Iau1BYvFim9%2FNtNk%2FpcKA1xUgcqi855u5ipf1bZi9WKUPUXxNgQmVjSkeSrKSJZtLJ%2BIEORJW%2F5oF%2FxtciDImtL4WQxS7WEVQwnpf5rfcE1YpThP5vg1U3bqxsDK%2BPZrWje%2BFafdVismgjGYb8Hf8RsiYyvQ23NMF&X-Amz-Signature=254722ed9a4756fb0564e281dc60d4fa19a235d818d6258c47e83815133b8d87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
