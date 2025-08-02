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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADRK5IU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpBJVAHQcM2Lnrwa9hEMSEYYodkXHu%2B6zjY2ZihYDYcQIhAJX%2BV2VZo1IOEmTUeJHgaJMCJxnLAxtkDL2%2BiqUisqDnKv8DCBYQABoMNjM3NDIzMTgzODA1IgzuBcRL5qbUAj%2FR1%2B8q3AO0gRMPK9Bn3KVYM7Vn%2BjZg3WdwaeoJbAaLIPBToPwSzc7VKjL14lGsHGmRsiAI1QOoXHZ655JHYzMXznKMunSIdQ0NsxNy0UTLwiX1BKd1Rzcg7sGXy9gpsNLTLfQmXkBvSqns%2BfQ8bkVr6AW8Wj2ApffTohqdSK4drHg3z2DAupCiaPaPwRmKFA3iRHufwrUyw855DRtyc1A4Fn%2FceubFQ83emctSYmDD%2BTgBAinoTG468RlGDHsf1aLC6P%2BiAdl2tJj0BGCx5wSw0ukdDqVfA7wSV8g%2FNYlI6NS95ywXXXEYt7fr2e%2F6ddyYCd6nJuACTrFsBQ0Y1j%2FG5HsN0S5MGcmhk7226eLfw4pfoEt9aNf4zf62g%2BRpdUlLT4xfpc3y8L6jmmiPy4h8vc%2FF%2BDV4HhM0sUWw4lfDryE47AWOPGBrHQybJiVRQZEm1FqRIRAH89Maosx4FQHemqys0AZHQ0vxw263D1qjtqPgHc7VLYa%2Fe30X2va537WlPvXWaijx%2BMyNTzYj%2BKLraTBHU%2BfopV9pONi0DN6drqtjTUIRzql%2FVWm%2BPKTdZ2nEr09V%2B%2BNfdwR6zSlSMzWQfiD7VXLvSrloFLWERTaSt5nRe3vpHZPQq5csWXpGOegfwzCzjbjEBjqkAQbfnzAZXyT2ixzNECDoeyQyfAhRlQLJuSGVT1mIDuT%2BpDu%2BMrm%2FpqHIa%2ByMz01D%2BX3hNKsl%2BQoM2WSDiqtNnpTmGljpz0nSc%2FODG29ChPY774relVxup27NORVglNTR%2Bz2JoUCiLhzfzzdLfb%2F8%2Fuzxcy4XZPRGhgxQZFgqkCEAOhjgR6MCLM1HnmVJd4cudWX1%2FsArMKRmzj%2F%2FFTNCO%2FvUDE7R&X-Amz-Signature=087472e398127db0926bb766a42b9825dbb30f7a067a6940defb74cb7fda1048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADRK5IU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpBJVAHQcM2Lnrwa9hEMSEYYodkXHu%2B6zjY2ZihYDYcQIhAJX%2BV2VZo1IOEmTUeJHgaJMCJxnLAxtkDL2%2BiqUisqDnKv8DCBYQABoMNjM3NDIzMTgzODA1IgzuBcRL5qbUAj%2FR1%2B8q3AO0gRMPK9Bn3KVYM7Vn%2BjZg3WdwaeoJbAaLIPBToPwSzc7VKjL14lGsHGmRsiAI1QOoXHZ655JHYzMXznKMunSIdQ0NsxNy0UTLwiX1BKd1Rzcg7sGXy9gpsNLTLfQmXkBvSqns%2BfQ8bkVr6AW8Wj2ApffTohqdSK4drHg3z2DAupCiaPaPwRmKFA3iRHufwrUyw855DRtyc1A4Fn%2FceubFQ83emctSYmDD%2BTgBAinoTG468RlGDHsf1aLC6P%2BiAdl2tJj0BGCx5wSw0ukdDqVfA7wSV8g%2FNYlI6NS95ywXXXEYt7fr2e%2F6ddyYCd6nJuACTrFsBQ0Y1j%2FG5HsN0S5MGcmhk7226eLfw4pfoEt9aNf4zf62g%2BRpdUlLT4xfpc3y8L6jmmiPy4h8vc%2FF%2BDV4HhM0sUWw4lfDryE47AWOPGBrHQybJiVRQZEm1FqRIRAH89Maosx4FQHemqys0AZHQ0vxw263D1qjtqPgHc7VLYa%2Fe30X2va537WlPvXWaijx%2BMyNTzYj%2BKLraTBHU%2BfopV9pONi0DN6drqtjTUIRzql%2FVWm%2BPKTdZ2nEr09V%2B%2BNfdwR6zSlSMzWQfiD7VXLvSrloFLWERTaSt5nRe3vpHZPQq5csWXpGOegfwzCzjbjEBjqkAQbfnzAZXyT2ixzNECDoeyQyfAhRlQLJuSGVT1mIDuT%2BpDu%2BMrm%2FpqHIa%2ByMz01D%2BX3hNKsl%2BQoM2WSDiqtNnpTmGljpz0nSc%2FODG29ChPY774relVxup27NORVglNTR%2Bz2JoUCiLhzfzzdLfb%2F8%2Fuzxcy4XZPRGhgxQZFgqkCEAOhjgR6MCLM1HnmVJd4cudWX1%2FsArMKRmzj%2F%2FFTNCO%2FvUDE7R&X-Amz-Signature=8c646c1a444c2e86fe87d145627ae62d5609fcb2720903d04533d9cdca128eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
