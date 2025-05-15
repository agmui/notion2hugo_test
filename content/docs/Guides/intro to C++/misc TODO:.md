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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONXNDAD%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDV9rCfCFj8tLVOcrtu5%2F%2BXxDCVyr7tAQ2m4ilJE3H6dAiEAzsVk%2Fx%2Bvzzwm5msnMh28VEByVXGmZbnEXsdvoVVRD6Eq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAD8bMApkVjdrJUvUCrcAzW8MkfcBx9u2vcSplBcHtLHiBrw0ghHZibTUomQQQi4EgGgC%2FFp0w7QKTFGW8WhEQSv%2Fyu8jAp0kNPzLQdgOT88Ia9oI6QAT6dci0Q%2Ft3Vegijhwi%2Fr8C5lsl8sxNPUpfCnsmuacLw3Mf%2B%2FJvChi6TsNJnfC0ozgAJNp7jSGjAFHm0fbEQ%2BPdKt8rFvaVi%2BEvGCfU4lBIFjQegKdh%2F4bc0gN7aI5gtVYMk0sXFP4uSq94twxcvpCFYlD4UQ6PwUCTEpIRcT42u9RQbmXXRNrFVxLPeRSMbr1VJyBq8caHiP6LncBHHAMmvwvlAh3ghg0s%2BYdDHhX9CkacMTYdqDzPTNnAbcU5m1xJ875dWQQQBjQkPyynaI0H6uASeZHsVt3V6Zy5JNUaINC4dgQC8bypCwu3PbuWBQ7KGsJePhroSGrBzPz49PMzOA8xjTFS4HShqFgfSV%2F9LVHFdQ6wnRHIPn9wSG0mIx00vAFQhVPqhBaVchKVF8a8Q%2Bi%2B%2F22eqOrnl%2B2FwPZ5HcdH2uzqZ0CXlaEllycLehX7DxmMevnPvqHp3vYY%2B641CimEFZG%2B%2BqWTFosABEfYETq8Zjf4snythrXJVE%2B2kqihzjj40dK0xcKrewSCMHsGbD8USuMJfslMEGOqUB%2By76YtanFHyuUSQq%2BPSwsDQf60lamzNi8V8Qj5EUWJshBf%2BinteBp0RWlt6csXwtucZpbH9JP2trAh97GLzNS69fg0MDatlwq%2BVpX8LCtX8iP%2FCfBQLvRym6wYCwxMOVgqXqFEEfcMbW%2BLWhBXHmFOR8mVCdiRK5Pw9Kqxvonpijs5Ok5vRouY86kMzDrHkX4ftCnwB%2FZdf3EY%2Bg0hqsowsemS%2F0&X-Amz-Signature=fb6a1f5ba4990fd1428a02f81ae3f5e83a4c35e4eae87456057ae36d44139137&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONXNDAD%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDV9rCfCFj8tLVOcrtu5%2F%2BXxDCVyr7tAQ2m4ilJE3H6dAiEAzsVk%2Fx%2Bvzzwm5msnMh28VEByVXGmZbnEXsdvoVVRD6Eq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAD8bMApkVjdrJUvUCrcAzW8MkfcBx9u2vcSplBcHtLHiBrw0ghHZibTUomQQQi4EgGgC%2FFp0w7QKTFGW8WhEQSv%2Fyu8jAp0kNPzLQdgOT88Ia9oI6QAT6dci0Q%2Ft3Vegijhwi%2Fr8C5lsl8sxNPUpfCnsmuacLw3Mf%2B%2FJvChi6TsNJnfC0ozgAJNp7jSGjAFHm0fbEQ%2BPdKt8rFvaVi%2BEvGCfU4lBIFjQegKdh%2F4bc0gN7aI5gtVYMk0sXFP4uSq94twxcvpCFYlD4UQ6PwUCTEpIRcT42u9RQbmXXRNrFVxLPeRSMbr1VJyBq8caHiP6LncBHHAMmvwvlAh3ghg0s%2BYdDHhX9CkacMTYdqDzPTNnAbcU5m1xJ875dWQQQBjQkPyynaI0H6uASeZHsVt3V6Zy5JNUaINC4dgQC8bypCwu3PbuWBQ7KGsJePhroSGrBzPz49PMzOA8xjTFS4HShqFgfSV%2F9LVHFdQ6wnRHIPn9wSG0mIx00vAFQhVPqhBaVchKVF8a8Q%2Bi%2B%2F22eqOrnl%2B2FwPZ5HcdH2uzqZ0CXlaEllycLehX7DxmMevnPvqHp3vYY%2B641CimEFZG%2B%2BqWTFosABEfYETq8Zjf4snythrXJVE%2B2kqihzjj40dK0xcKrewSCMHsGbD8USuMJfslMEGOqUB%2By76YtanFHyuUSQq%2BPSwsDQf60lamzNi8V8Qj5EUWJshBf%2BinteBp0RWlt6csXwtucZpbH9JP2trAh97GLzNS69fg0MDatlwq%2BVpX8LCtX8iP%2FCfBQLvRym6wYCwxMOVgqXqFEEfcMbW%2BLWhBXHmFOR8mVCdiRK5Pw9Kqxvonpijs5Ok5vRouY86kMzDrHkX4ftCnwB%2FZdf3EY%2Bg0hqsowsemS%2F0&X-Amz-Signature=3e3e1353c58ec65315b231fa3c4126ace21713898efff2a0c092b3f276a21b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
