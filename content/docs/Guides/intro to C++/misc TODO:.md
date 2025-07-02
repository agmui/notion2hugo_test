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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXG5WGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwQ8HVMOkwGD74tI6OKVXFAPSl7dWvjnrHdZD66I6cbwIgOKL%2Fxd%2F%2Fpt34WGXe1xL3%2FWjqyvMW8IFP14tZX2ll6dcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlCv9mq7F8JI29otSrcAy2XWeH4yeRdYkQ%2B6qp82PyDecuaGzt%2FuDQsOHR4GyEuqCQNvGxQrF1CbVjUq9jXjnzKmTxYPsMl%2Fcq2PkOL%2FJNFDU%2FOI2PzEqvpridM2DmEAtDW6nk93ZYnycq2dQEjaTteXaSN88vsN%2FQf%2Bb5lmJPiMPGLUJRXPf%2BZF14llPiM4daV9S0iRFvmao6lE0n2AllRVyUjuJjDX9Yl1pCvNJftl1hgnVBOW4AWpVvLsX0GhNDhZnnwTFJTdqv5f6nDyMbqHNs0AoebB9mIijLvdfJetiMwfZcGp0EDHXWaq%2BeeFpbrIb2R5l3GosFUIQYU2AF069HB0uWNLsqMDAy6t6jnNvDL0zyRBXezPBgzCzBL%2BEXoH%2BCSiMvENXqudDUIgpBIprkgPJ%2B5l%2Be6tTgXmqJXMNrndWfK%2BYvcS6E9nWxskaexz50IAZYkvfBQ122ue5OpnTvMMz29h82gAub7gZs3eEVNrL6VceNGtmVNYyNIuS9Kx4gVMHPCJ9H7jxR6CHCr5j1xH06Ysy1N8YBcXad9c3Qd1lldyproUC%2BrcSTPBJ6DDgs%2BviQj74H1UVco0XfURnGOKcCwpkH50zx38l1akyPNrmRglx52x14Ez5QHobs%2FDIDmDlICPZyKMO26lMMGOqUByalZv09wWw1w%2FdRWBAqGU7iBJB7NhaW%2BKClDpyCuuIKl6j4keEveKlgPiA7c1I7CqmdxDHNWedPi5CMUBszvVTtNmqsD5hXUnFTPWrpVmurS6wH9d8uxTVO8Fr56eFf%2FvpoM58eT0YV4X9XgXcb7Ky4rnBlQYslI1qXj2Koelu1Ti2sxnhRVXQuympp8xVV%2F%2F6pGtxYjFGodUWiLLwt3mcyTYxSK&X-Amz-Signature=134a4679e7c7fedf5f072f30e20995301cb3b6d17719115dca80e99d82aef0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXG5WGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwQ8HVMOkwGD74tI6OKVXFAPSl7dWvjnrHdZD66I6cbwIgOKL%2Fxd%2F%2Fpt34WGXe1xL3%2FWjqyvMW8IFP14tZX2ll6dcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlCv9mq7F8JI29otSrcAy2XWeH4yeRdYkQ%2B6qp82PyDecuaGzt%2FuDQsOHR4GyEuqCQNvGxQrF1CbVjUq9jXjnzKmTxYPsMl%2Fcq2PkOL%2FJNFDU%2FOI2PzEqvpridM2DmEAtDW6nk93ZYnycq2dQEjaTteXaSN88vsN%2FQf%2Bb5lmJPiMPGLUJRXPf%2BZF14llPiM4daV9S0iRFvmao6lE0n2AllRVyUjuJjDX9Yl1pCvNJftl1hgnVBOW4AWpVvLsX0GhNDhZnnwTFJTdqv5f6nDyMbqHNs0AoebB9mIijLvdfJetiMwfZcGp0EDHXWaq%2BeeFpbrIb2R5l3GosFUIQYU2AF069HB0uWNLsqMDAy6t6jnNvDL0zyRBXezPBgzCzBL%2BEXoH%2BCSiMvENXqudDUIgpBIprkgPJ%2B5l%2Be6tTgXmqJXMNrndWfK%2BYvcS6E9nWxskaexz50IAZYkvfBQ122ue5OpnTvMMz29h82gAub7gZs3eEVNrL6VceNGtmVNYyNIuS9Kx4gVMHPCJ9H7jxR6CHCr5j1xH06Ysy1N8YBcXad9c3Qd1lldyproUC%2BrcSTPBJ6DDgs%2BviQj74H1UVco0XfURnGOKcCwpkH50zx38l1akyPNrmRglx52x14Ez5QHobs%2FDIDmDlICPZyKMO26lMMGOqUByalZv09wWw1w%2FdRWBAqGU7iBJB7NhaW%2BKClDpyCuuIKl6j4keEveKlgPiA7c1I7CqmdxDHNWedPi5CMUBszvVTtNmqsD5hXUnFTPWrpVmurS6wH9d8uxTVO8Fr56eFf%2FvpoM58eT0YV4X9XgXcb7Ky4rnBlQYslI1qXj2Koelu1Ti2sxnhRVXQuympp8xVV%2F%2F6pGtxYjFGodUWiLLwt3mcyTYxSK&X-Amz-Signature=985a77a4ef740f22b6b04a1490c0fabcaa1146d96bc1917449c7ef56bb5bfda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
