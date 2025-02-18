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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAHSIB3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLMArMxc7LJ75xpw8ZskU7NhOK6CkWXTv37SRtU7%2F3xAiB3pNJcCqqO63IYYgD%2Bh9zWLlLtyL72xsWXn1hsaK0pZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnSEsdvzieyB8hQPGKtwD%2FUjnbnlUlBGZ11nPzZdJBGxBFhwr5esJgcPyiDArjjvI7H13Vt194omg7t10RgUXVrpnO6iODd5D0BpB%2FcZVtCkLUV%2BqpmryCHq8rSyMk%2FEShRt5ryyQkQKDdil%2FeTrWy%2BYWsj5eg9MKTgfLBM1HnKqpY6vJaXw5HU5x7wdyYb3hUpl6JiTIPTLfGzXSDfvEhKgt0Fa7%2BANBAhb4t48%2FnGqBgc6YbhQ1LT0ZiICokcbkscI7pTeiM0ic5htIl%2BefH86CRRsISLHd2Net7TI1NhIxX%2BzGY06fhGRth67Eh6fCmGrOJY3jlCZu9r8r9iqnfVLWtEnvB2G%2FVpZsCjfaBaUsLoeBqzlPE0JUs%2FOOopKONfMCmRIle5PyCiSUA6%2FjAJtAy6A4YEI2EqTuHYCBFeArbiifGPWQRO9Omv9iYiK17et6pbmAfYQ5R1dMLIgOCoWjE0OcZ0NWLjfXXpyRkHF8wzlJtpJzSwk16qMn0y3OZAp9pfF2hDmpIGPVoC6Id%2BGBgxqqXlhJn0g2SgIRBAx1tZjXLdm4UTJ%2B6sGMI%2F3RfQ6f8aW%2BqU%2FNliEw5JRYaQcG%2BV7txapPQJ%2Bva2501%2FZ0M1w8QMADQWl6GW88i5mNQr3mAgGBdKMjuEUwtabPvQY6pgFhXUUILZMymjGReEPecH0dMGu%2FGvLSecSStpyU0RFBEZEWWNEXtL2zEGwe%2B%2FAIxN01zYspQWwhKw6yXg4tprPV6AjOyL5%2BcKdDtSmORsDWsv6sTI96qEV8oaGpCkJoLMwJ8HUPVo1Q%2Bjo%2FWdreq7CbbcMf0EpBAgrGVRlIUoInQHWu1ziZbr1%2FmZcNr9MpbaJzi%2FniP1b3s6EnK3KN3wTJGOr8IEXV&X-Amz-Signature=63b6eac55df8f47cd96c7c4485a6247d63b3e27f22a85b060c651cc044950f33&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAHSIB3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLMArMxc7LJ75xpw8ZskU7NhOK6CkWXTv37SRtU7%2F3xAiB3pNJcCqqO63IYYgD%2Bh9zWLlLtyL72xsWXn1hsaK0pZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnSEsdvzieyB8hQPGKtwD%2FUjnbnlUlBGZ11nPzZdJBGxBFhwr5esJgcPyiDArjjvI7H13Vt194omg7t10RgUXVrpnO6iODd5D0BpB%2FcZVtCkLUV%2BqpmryCHq8rSyMk%2FEShRt5ryyQkQKDdil%2FeTrWy%2BYWsj5eg9MKTgfLBM1HnKqpY6vJaXw5HU5x7wdyYb3hUpl6JiTIPTLfGzXSDfvEhKgt0Fa7%2BANBAhb4t48%2FnGqBgc6YbhQ1LT0ZiICokcbkscI7pTeiM0ic5htIl%2BefH86CRRsISLHd2Net7TI1NhIxX%2BzGY06fhGRth67Eh6fCmGrOJY3jlCZu9r8r9iqnfVLWtEnvB2G%2FVpZsCjfaBaUsLoeBqzlPE0JUs%2FOOopKONfMCmRIle5PyCiSUA6%2FjAJtAy6A4YEI2EqTuHYCBFeArbiifGPWQRO9Omv9iYiK17et6pbmAfYQ5R1dMLIgOCoWjE0OcZ0NWLjfXXpyRkHF8wzlJtpJzSwk16qMn0y3OZAp9pfF2hDmpIGPVoC6Id%2BGBgxqqXlhJn0g2SgIRBAx1tZjXLdm4UTJ%2B6sGMI%2F3RfQ6f8aW%2BqU%2FNliEw5JRYaQcG%2BV7txapPQJ%2Bva2501%2FZ0M1w8QMADQWl6GW88i5mNQr3mAgGBdKMjuEUwtabPvQY6pgFhXUUILZMymjGReEPecH0dMGu%2FGvLSecSStpyU0RFBEZEWWNEXtL2zEGwe%2B%2FAIxN01zYspQWwhKw6yXg4tprPV6AjOyL5%2BcKdDtSmORsDWsv6sTI96qEV8oaGpCkJoLMwJ8HUPVo1Q%2Bjo%2FWdreq7CbbcMf0EpBAgrGVRlIUoInQHWu1ziZbr1%2FmZcNr9MpbaJzi%2FniP1b3s6EnK3KN3wTJGOr8IEXV&X-Amz-Signature=20b09ea18c2226a30f74bc5bee00609e2bb3db2f922c5af928b003b1bb2955f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
