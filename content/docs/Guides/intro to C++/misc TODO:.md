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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOYAAN2O%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCKufky5fyd%2FVGGCPHBSC4YS%2FuPAg1HoEfCLUB8fnWGJgIgAUPfzCSvi4If2iBSfH6aSysPVljR%2BjcbJ1v9%2FHescaQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAu9zFfiyNrNPy5BoircAy3lSTTpr4jAvL1ePmCHRPCN2PVQAXRh347d0b9QYjsBonlsj7HC5pipBQHHsJl3pEGojyYsyPH8DGSy6ZNVpZr2JMakBiuAijdZEr1iQRXQjawKvLWwYQnorUlgkiVTa4hdMNZH4FFR9BgW68erR2DqO88bHP1K%2BovPWetr8cgJ%2BHetcEgSOqMhnyU85ghAsEHJB24lw%2BlVBq8W785Tn55CLhIwdB%2FQzvWr0IzjIWYJVfBo06AGtYeHZdjVMYpQoPtPWvPKR3xJhSj5C3KnsQw%2FXEv0sW5qUL8FLOdLIOO%2BDYhWxtjGNCkdac9%2BJKdpnwZ%2BkqfIfaD3Q4WZqnkUBc%2BxHrZP3dXvwcq4QA4kQecH8mRqs8eEiqwRl2G41R96m1wVT%2F%2BPNoSKaJ%2BvfflZ0vIglFi%2FNs%2FQ1yXmmmZvAf4GoybGXSjx3w6egL0rbBRO%2FhLad3MEixJd9BSExL8MJ92nXAtjC%2B4F7Nhg6sRFqX0kFAtVRMS9AwyiOZV06iaYVHftDiFuIWS%2FHGwcOmE%2Br5W9jR7DEUALpK0eBZBQikM1WE7%2F%2FN7Gujg93mbnn3p6iV459ra%2BApAGaD5kt3UfzPeJd20bA%2BceyS25iYw4xWgwAUdupYST5zIRZxTcMP2Ax74GOqUBC74yXI4xdM%2FBfhMAf4bj%2FQ9CnjzToUEku2Hc1zQPNHDjRr9XW5%2FVkJP%2FdWeulzIKNLG%2FAqpb0iiHrCTrJcJfVFzemWay4jYSnqzbDBMesn8SpUELqBj4ngSIrb0DQ74EBCVhDGMRfP45%2BU9bg9OfRYMzbUlHdp%2Ft4j%2FHBBWYyP3aD%2FRoG2wS1lMgFYn%2BaHSoa79YPbFTms8Du5%2F%2FwAlmG8Nw3jph&X-Amz-Signature=a4332073049abca29c7cc6fc86f3d836dfd932f6380eb62dfa7450ad22612422&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOYAAN2O%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCKufky5fyd%2FVGGCPHBSC4YS%2FuPAg1HoEfCLUB8fnWGJgIgAUPfzCSvi4If2iBSfH6aSysPVljR%2BjcbJ1v9%2FHescaQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAu9zFfiyNrNPy5BoircAy3lSTTpr4jAvL1ePmCHRPCN2PVQAXRh347d0b9QYjsBonlsj7HC5pipBQHHsJl3pEGojyYsyPH8DGSy6ZNVpZr2JMakBiuAijdZEr1iQRXQjawKvLWwYQnorUlgkiVTa4hdMNZH4FFR9BgW68erR2DqO88bHP1K%2BovPWetr8cgJ%2BHetcEgSOqMhnyU85ghAsEHJB24lw%2BlVBq8W785Tn55CLhIwdB%2FQzvWr0IzjIWYJVfBo06AGtYeHZdjVMYpQoPtPWvPKR3xJhSj5C3KnsQw%2FXEv0sW5qUL8FLOdLIOO%2BDYhWxtjGNCkdac9%2BJKdpnwZ%2BkqfIfaD3Q4WZqnkUBc%2BxHrZP3dXvwcq4QA4kQecH8mRqs8eEiqwRl2G41R96m1wVT%2F%2BPNoSKaJ%2BvfflZ0vIglFi%2FNs%2FQ1yXmmmZvAf4GoybGXSjx3w6egL0rbBRO%2FhLad3MEixJd9BSExL8MJ92nXAtjC%2B4F7Nhg6sRFqX0kFAtVRMS9AwyiOZV06iaYVHftDiFuIWS%2FHGwcOmE%2Br5W9jR7DEUALpK0eBZBQikM1WE7%2F%2FN7Gujg93mbnn3p6iV459ra%2BApAGaD5kt3UfzPeJd20bA%2BceyS25iYw4xWgwAUdupYST5zIRZxTcMP2Ax74GOqUBC74yXI4xdM%2FBfhMAf4bj%2FQ9CnjzToUEku2Hc1zQPNHDjRr9XW5%2FVkJP%2FdWeulzIKNLG%2FAqpb0iiHrCTrJcJfVFzemWay4jYSnqzbDBMesn8SpUELqBj4ngSIrb0DQ74EBCVhDGMRfP45%2BU9bg9OfRYMzbUlHdp%2Ft4j%2FHBBWYyP3aD%2FRoG2wS1lMgFYn%2BaHSoa79YPbFTms8Du5%2F%2FwAlmG8Nw3jph&X-Amz-Signature=89d506c413f177836b63a1441ba5968494bb176c05142eea09ce14ca9ff9d227&X-Amz-SignedHeaders=host&x-id=GetObject)

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
