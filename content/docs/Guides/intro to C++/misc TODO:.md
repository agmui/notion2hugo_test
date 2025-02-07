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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WS2JYEG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCDJbuwpbOs9viIZNrxwngRi07BHwvGAGr34NEcvlZAgQIgCNOwMcI%2FmcEiF688Jdsgm9faf%2BOrWTC6LkRHmNK2yFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLaHq4%2FRLm54fW2zfSrcA2sE5uIwg3KV1ywGmSt4RlCppJXez9JB%2BMuAau7Btnh%2FqHuciBDTtNymibOmG242eZkK1g1j%2Bnduzaz%2FUBUG3vugm%2F4tvPSR7BSnp8kFrhpMYSwUEkNMzb9K9KfjYGCWrVdqxBw1LrqbD6yjaou2Doywkkq2pDdaIlqBM7zFnBHsYEORKbfvlf89Gpfr61rl8B3EpCg08ch3ijDhZW4ycenLsMNcMHZF7WxMFWb5F3PBAiMMNQr%2BYUcvhl03tO7RHUeYierLkhqO9A2wMpL9ochN%2Ff26hOoQ0l6eYyqCgVeUe9y63qEBKIuv3ej6P3PWBGvpwnI0h3aSCBv9GM%2FothwwoaCANH%2BiHxseRQ2M7wLW9YZDe59%2FvchblNbWIuwoxiQ1MIHuI2gR8E5I0Z1AVyfcGRIMRVSwAGNNvErH8RvnBG%2BDe6FHVHwst%2BrgPK1OtbN6R6UpQgB9PDtZtUtkpUmuMk3cvZgYS9SH7orjyEM1BG7peijwDO1xnqNpglsJvpM3VfmJL%2Bd1DOc%2B8VN%2BywRXXWdS39viwOhAHVHEEDyHpRNTvnP9Lbkloaw6dgNTxWx2oxaxxEEuq1d6HRV4pLPu3tnZ%2BLtT8J2ZBsiW%2FEtzaitnGgFMf6W%2F5RDNMKHwl70GOqUBbFoBnF3opdt371osUj0K2J3kIMrv0DaHcn4zws91MNDzpJpUvF%2BcXa3AesBEzwIOjFBIG2WnuKJwUCmndjsXyH4sX5x6iFeI0fciWlVgZWNW6T4L%2FNvl009%2BPOx2NPCcmKi353f6f5QF%2Fy9KPhxJJvhVkhK0TwFiXL56RG%2FKnIUsQ3VVxPqKe4E%2FfDXtf1snuDtxQ17fUQN5HwIgVv94NAdidxgx&X-Amz-Signature=81abf03e67e5fb9e3f59b3b8ddc7980462fb76695fe19e2848a8cd08d4447ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WS2JYEG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCDJbuwpbOs9viIZNrxwngRi07BHwvGAGr34NEcvlZAgQIgCNOwMcI%2FmcEiF688Jdsgm9faf%2BOrWTC6LkRHmNK2yFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLaHq4%2FRLm54fW2zfSrcA2sE5uIwg3KV1ywGmSt4RlCppJXez9JB%2BMuAau7Btnh%2FqHuciBDTtNymibOmG242eZkK1g1j%2Bnduzaz%2FUBUG3vugm%2F4tvPSR7BSnp8kFrhpMYSwUEkNMzb9K9KfjYGCWrVdqxBw1LrqbD6yjaou2Doywkkq2pDdaIlqBM7zFnBHsYEORKbfvlf89Gpfr61rl8B3EpCg08ch3ijDhZW4ycenLsMNcMHZF7WxMFWb5F3PBAiMMNQr%2BYUcvhl03tO7RHUeYierLkhqO9A2wMpL9ochN%2Ff26hOoQ0l6eYyqCgVeUe9y63qEBKIuv3ej6P3PWBGvpwnI0h3aSCBv9GM%2FothwwoaCANH%2BiHxseRQ2M7wLW9YZDe59%2FvchblNbWIuwoxiQ1MIHuI2gR8E5I0Z1AVyfcGRIMRVSwAGNNvErH8RvnBG%2BDe6FHVHwst%2BrgPK1OtbN6R6UpQgB9PDtZtUtkpUmuMk3cvZgYS9SH7orjyEM1BG7peijwDO1xnqNpglsJvpM3VfmJL%2Bd1DOc%2B8VN%2BywRXXWdS39viwOhAHVHEEDyHpRNTvnP9Lbkloaw6dgNTxWx2oxaxxEEuq1d6HRV4pLPu3tnZ%2BLtT8J2ZBsiW%2FEtzaitnGgFMf6W%2F5RDNMKHwl70GOqUBbFoBnF3opdt371osUj0K2J3kIMrv0DaHcn4zws91MNDzpJpUvF%2BcXa3AesBEzwIOjFBIG2WnuKJwUCmndjsXyH4sX5x6iFeI0fciWlVgZWNW6T4L%2FNvl009%2BPOx2NPCcmKi353f6f5QF%2Fy9KPhxJJvhVkhK0TwFiXL56RG%2FKnIUsQ3VVxPqKe4E%2FfDXtf1snuDtxQ17fUQN5HwIgVv94NAdidxgx&X-Amz-Signature=860494444d2b5b33df3609bfcfa90a67bed2d331686027f8eab57ee871334686&X-Amz-SignedHeaders=host&x-id=GetObject)

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
