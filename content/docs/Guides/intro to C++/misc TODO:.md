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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKG4LRK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUXmduhlQApRX%2FA%2BzyXgvEo7C5vUQuKjZBw4HzwihsygIgKbfpMSowaAwF6Z4vxL7GYtAqnEKBHYaGbq6fHQGnrX8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO5k1svPKMFZil3DircA%2Br7HbJXJIl%2FkZ%2FahaCtv%2BY%2F8Hzv9fxOJbzEzqYSTZEowy7NyUJx4fH07hWaKCfsLMFj%2BJ56dz1SqhFNElrn09VkA1sTRa2r0nn93zqp%2FiDIdZn87SquDo2d1ro7Yv3Cl6ONOv9lUT%2FFV5s%2FMt9N5iirrWswD8AzPOwIALm8Gg%2Fn9P1jeMJovLv8%2B1N6u0tR7esk67fLebWDyAQaepBPf73FPadBgRkoou3XtHvTnBdrKvzSFiNVHmfxSVUGpvFKkYd9UqwzkUzwD7lAswlNK6MLE5NCKjGd51q%2BO8bfd2sMEs9CboF5pYBWVZg9HCFwbtNswBvfn6dsGc5YE6%2FEwKf3Fm5ryW%2B2CxFGTDggmwEfo2g4KNVId%2Bsw6TyFpJ%2B92tjiqHOO6rBEFj0VH3TLu7Wt5G3J5HpBTVYIFnQR8z%2Fsl8%2BhePqWiMQUCUhy5gnFEMgVU5mgg6nBFcyBeBWnOWNGSAkNCr%2FZPUrY5GYzGD8rFoFu6Xjlb513vqQFtlLjnLF3%2FIEuU3RPl%2BMzms4QTpOSz5nnQiPvaxCNUa%2B0l2EryUAFFdbua0Kg9YH5osM07gNNNmYR4K4W59tbcXQ39UwSW2VMMLsaUgCgY3X0HqWupjbxuZuvKUMcfvsYMPXVhMMGOqUBjti4A6IXbdE4zNoxIrfm727OhFU6gdM6xGSiwTcJIxtiP7kUmT3wB9%2FkT%2FD1SMUiYe3lpDZHUCbcI%2BvkZpIj0JB5%2FpYTuiD%2FqUwBG4tm1xCwopbhwGO1X1TpUHuafy6HDhWOnkrf%2FmQmHyQMFLTzWcm2kDUftE3Kd5dS285lA2e26nMJB%2ByffFxNXOV7TaVl0iJzmwwq1etPCnzdwQAORgyxhaE3&X-Amz-Signature=4db84a9d83ddd735a2fa10747b572c9239e4850e8e7b28fdc95ba0a55d9c2e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKG4LRK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUXmduhlQApRX%2FA%2BzyXgvEo7C5vUQuKjZBw4HzwihsygIgKbfpMSowaAwF6Z4vxL7GYtAqnEKBHYaGbq6fHQGnrX8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO5k1svPKMFZil3DircA%2Br7HbJXJIl%2FkZ%2FahaCtv%2BY%2F8Hzv9fxOJbzEzqYSTZEowy7NyUJx4fH07hWaKCfsLMFj%2BJ56dz1SqhFNElrn09VkA1sTRa2r0nn93zqp%2FiDIdZn87SquDo2d1ro7Yv3Cl6ONOv9lUT%2FFV5s%2FMt9N5iirrWswD8AzPOwIALm8Gg%2Fn9P1jeMJovLv8%2B1N6u0tR7esk67fLebWDyAQaepBPf73FPadBgRkoou3XtHvTnBdrKvzSFiNVHmfxSVUGpvFKkYd9UqwzkUzwD7lAswlNK6MLE5NCKjGd51q%2BO8bfd2sMEs9CboF5pYBWVZg9HCFwbtNswBvfn6dsGc5YE6%2FEwKf3Fm5ryW%2B2CxFGTDggmwEfo2g4KNVId%2Bsw6TyFpJ%2B92tjiqHOO6rBEFj0VH3TLu7Wt5G3J5HpBTVYIFnQR8z%2Fsl8%2BhePqWiMQUCUhy5gnFEMgVU5mgg6nBFcyBeBWnOWNGSAkNCr%2FZPUrY5GYzGD8rFoFu6Xjlb513vqQFtlLjnLF3%2FIEuU3RPl%2BMzms4QTpOSz5nnQiPvaxCNUa%2B0l2EryUAFFdbua0Kg9YH5osM07gNNNmYR4K4W59tbcXQ39UwSW2VMMLsaUgCgY3X0HqWupjbxuZuvKUMcfvsYMPXVhMMGOqUBjti4A6IXbdE4zNoxIrfm727OhFU6gdM6xGSiwTcJIxtiP7kUmT3wB9%2FkT%2FD1SMUiYe3lpDZHUCbcI%2BvkZpIj0JB5%2FpYTuiD%2FqUwBG4tm1xCwopbhwGO1X1TpUHuafy6HDhWOnkrf%2FmQmHyQMFLTzWcm2kDUftE3Kd5dS285lA2e26nMJB%2ByffFxNXOV7TaVl0iJzmwwq1etPCnzdwQAORgyxhaE3&X-Amz-Signature=084fc891f152dc99e6f65f086c9dd916e1995def8533f669b7d35768bd1e7032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
