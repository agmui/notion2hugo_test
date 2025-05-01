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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AC2B3BP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICA8eh5nEyBrOZ5ImVv6z6QdLcz3AUj88XvgTZ9y%2BJ%2BfAiAyWRrHeRmKBh7xtkU6LYe7Y4EsoT%2FXdKk1hiXQ3MidbSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYxC%2BNHGgwASi5MhKtwDko0pP5RJvqVrD3ft6Nx3MBSNytL0ZB8XCDOSz0Xq%2BEePzxG9sAy1hp1UdvfmfjkVCHZo9NGw3RTfqrPii2LRay9vEPKGWmcvzmvhC%2FQkPV0rNvCUjgfSELGxtRl9%2BPCkorWFhx3oe4hbA5jK9ewCnLwYoocVofn8cxbn1cEJb5IPY1EPEXoQ7LunAdTJJ6aDbfYIwFQ%2BTNniPpkqwKZjI7tmhYgRJHg4rFvX0NaSIZErHPIIXScH8NAb9VUY6j9dHlhQKezmoYbX%2F16%2B7gMJuLsYGaJozqatZbxjHHn38F7dJJP%2BrIk1Z2VeYjGoKyJNGGcPaeqmCsvKqmn1KKr%2BkrWqpfIHm2RnvF3ws8X2Nl0nPGnZ6%2BdiJeEuczPTPy9YOS%2Fd0jklYxoJRIu3KSmOG65ozZ6z7BqqcNQU58KGQwxMF%2Bkim3wx6YWhLFgZUeINA5ql4TMCfKeawuG7SPodW3LoDnAgQWSGDfrhwX9u0mh%2FXVpsfTW31S5Wgxo0ht7Wb6SCc2PLhM5B7B2%2FMU23KEnTtgCJoNl4Cq7OOyl42kyxStaJZXNS2fmv4tgkkscBBPqLoId%2BbbtoGNJSTibfJFcs2eoIrsOTu4nsYSyKTd0cu%2B9Wf1VLJ3nfjCEw%2BKDOwAY6pgEdunGr%2FbbdmrpEAON9Utm1SxErWWKlzbZwLhtVm94m51XZF5a7sXXqgPDZ%2FW54XyTY4P%2FVLMTKUGj7%2FPagzaK5hERLl1xqhPqPz66wrp3c0TUykJxDlm%2BcMFdYxDkwt893yNNMs0JDVYrQRX7yvK2KnQLe1JrMq1q6%2FILtOWQip%2FKUkGj5fnaFY4sVQBghTlifmmC%2FeolS6FO1HeDCPR7gCoL66whm&X-Amz-Signature=f772224b5cf73f0fcfa46c58e7f0878fe24443049efc98cd9c128f5e636cf729&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AC2B3BP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICA8eh5nEyBrOZ5ImVv6z6QdLcz3AUj88XvgTZ9y%2BJ%2BfAiAyWRrHeRmKBh7xtkU6LYe7Y4EsoT%2FXdKk1hiXQ3MidbSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYxC%2BNHGgwASi5MhKtwDko0pP5RJvqVrD3ft6Nx3MBSNytL0ZB8XCDOSz0Xq%2BEePzxG9sAy1hp1UdvfmfjkVCHZo9NGw3RTfqrPii2LRay9vEPKGWmcvzmvhC%2FQkPV0rNvCUjgfSELGxtRl9%2BPCkorWFhx3oe4hbA5jK9ewCnLwYoocVofn8cxbn1cEJb5IPY1EPEXoQ7LunAdTJJ6aDbfYIwFQ%2BTNniPpkqwKZjI7tmhYgRJHg4rFvX0NaSIZErHPIIXScH8NAb9VUY6j9dHlhQKezmoYbX%2F16%2B7gMJuLsYGaJozqatZbxjHHn38F7dJJP%2BrIk1Z2VeYjGoKyJNGGcPaeqmCsvKqmn1KKr%2BkrWqpfIHm2RnvF3ws8X2Nl0nPGnZ6%2BdiJeEuczPTPy9YOS%2Fd0jklYxoJRIu3KSmOG65ozZ6z7BqqcNQU58KGQwxMF%2Bkim3wx6YWhLFgZUeINA5ql4TMCfKeawuG7SPodW3LoDnAgQWSGDfrhwX9u0mh%2FXVpsfTW31S5Wgxo0ht7Wb6SCc2PLhM5B7B2%2FMU23KEnTtgCJoNl4Cq7OOyl42kyxStaJZXNS2fmv4tgkkscBBPqLoId%2BbbtoGNJSTibfJFcs2eoIrsOTu4nsYSyKTd0cu%2B9Wf1VLJ3nfjCEw%2BKDOwAY6pgEdunGr%2FbbdmrpEAON9Utm1SxErWWKlzbZwLhtVm94m51XZF5a7sXXqgPDZ%2FW54XyTY4P%2FVLMTKUGj7%2FPagzaK5hERLl1xqhPqPz66wrp3c0TUykJxDlm%2BcMFdYxDkwt893yNNMs0JDVYrQRX7yvK2KnQLe1JrMq1q6%2FILtOWQip%2FKUkGj5fnaFY4sVQBghTlifmmC%2FeolS6FO1HeDCPR7gCoL66whm&X-Amz-Signature=8edb91c87f41c0b8f9bb864162fb53ed0de080761eba156021840dfdd7e753fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
