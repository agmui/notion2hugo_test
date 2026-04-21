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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STMQ6TD2%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCQ5Wf3sJ4e1oIwNLk4L0Wj7xpTuRwjFfvA12CtUutfLAIgclfsajwHJDh9Gm4yRoWOiSjWq66D8ZBHpHDhkJkkj8Eq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDUdstp4a5dyQJtHBircA8liDZgagHEwjoXGnlKdrxx3hoqReqDNzyImw83EJqtBYxNRXK2fZzohDeiZ%2BNq1ye0vC31IqhFlEM%2B0hYWT5mTwmT8i%2FybG%2B5rrF4CDUzbkBmF7ldXgaU9B%2B9bAHMNq9sMHOh2XFSHX3%2FvEVgo933EMbI2mBlHM9sQFkiFM8dYFnq0EFddtnBeOLTvibHFhlXt0PeUMQGkeV%2Br55gL7DSJBhrVVYdPetilKENp9fZYyZbFYxdfqruh4zI9PzsIabo0fFRHU5KwIcpWWZMwKiFLLggbQ8TxylkaFiJJEuNQayKW5q0omue6tYSy8AkkbjQCykTG8n35iummINuTt%2Bp%2Fs8R2AGdXbYsEPcmg%2B7%2BVh8yfaqsm95JL6yw%2Fz%2BjfqrHauT8HJVFKWTXerUyswLTx2IkJrGl2rjNzboTf0hp9xF06mKsv3yDcfII79zdGlFaV4IE9sGtFB75MbVkXpORVo%2FmBFnFvZTwRR26GV%2BIhBAb8pLY1fmC%2B1pEas2vCuGSuMibo0mnXOmpwaZzRiJBeoPK2veWnSKiJ4MTHX%2BckfPDE2ByoB8dM3vndty7I42nHllLognSMZATo71sCK0fzAz%2BJOtm6SueuckcBF67fwJkNOCXo228qRR3SZMPGqm88GOqUBzLQeR0NkJVIM1U2dM6hRUA%2FJQ9OGnkgvI0vZ%2B9v05Dg%2BjVHm5AOuDQhECDLSVPeAMR%2BmsRbDHT8WHmWWNhrgy8j7E3Y6v3LSZvjnuQLzk9d52dO8s2ufMIpCBE7R40wRVexHFOBBH5O%2FPenT3iH9zP87diX6TyjKts%2BgXvrBho6QHxKqeJsxmrrbwoegONRg%2FzRgOl0SVJZ2XV9S4PvxWGhu1Bls&X-Amz-Signature=60c46c4f5d32059d1422bb8af8f0e11ad792a1500120de78372181ad220a542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STMQ6TD2%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCQ5Wf3sJ4e1oIwNLk4L0Wj7xpTuRwjFfvA12CtUutfLAIgclfsajwHJDh9Gm4yRoWOiSjWq66D8ZBHpHDhkJkkj8Eq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDUdstp4a5dyQJtHBircA8liDZgagHEwjoXGnlKdrxx3hoqReqDNzyImw83EJqtBYxNRXK2fZzohDeiZ%2BNq1ye0vC31IqhFlEM%2B0hYWT5mTwmT8i%2FybG%2B5rrF4CDUzbkBmF7ldXgaU9B%2B9bAHMNq9sMHOh2XFSHX3%2FvEVgo933EMbI2mBlHM9sQFkiFM8dYFnq0EFddtnBeOLTvibHFhlXt0PeUMQGkeV%2Br55gL7DSJBhrVVYdPetilKENp9fZYyZbFYxdfqruh4zI9PzsIabo0fFRHU5KwIcpWWZMwKiFLLggbQ8TxylkaFiJJEuNQayKW5q0omue6tYSy8AkkbjQCykTG8n35iummINuTt%2Bp%2Fs8R2AGdXbYsEPcmg%2B7%2BVh8yfaqsm95JL6yw%2Fz%2BjfqrHauT8HJVFKWTXerUyswLTx2IkJrGl2rjNzboTf0hp9xF06mKsv3yDcfII79zdGlFaV4IE9sGtFB75MbVkXpORVo%2FmBFnFvZTwRR26GV%2BIhBAb8pLY1fmC%2B1pEas2vCuGSuMibo0mnXOmpwaZzRiJBeoPK2veWnSKiJ4MTHX%2BckfPDE2ByoB8dM3vndty7I42nHllLognSMZATo71sCK0fzAz%2BJOtm6SueuckcBF67fwJkNOCXo228qRR3SZMPGqm88GOqUBzLQeR0NkJVIM1U2dM6hRUA%2FJQ9OGnkgvI0vZ%2B9v05Dg%2BjVHm5AOuDQhECDLSVPeAMR%2BmsRbDHT8WHmWWNhrgy8j7E3Y6v3LSZvjnuQLzk9d52dO8s2ufMIpCBE7R40wRVexHFOBBH5O%2FPenT3iH9zP87diX6TyjKts%2BgXvrBho6QHxKqeJsxmrrbwoegONRg%2FzRgOl0SVJZ2XV9S4PvxWGhu1Bls&X-Amz-Signature=0144def552732e21ea09eba71cde291cf375111dcb3305a3b2f162792d6ca537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
