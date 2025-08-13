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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNNZIB6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHKrpbCAMJXPxzW8E3ODRPTY7zvnI7YGlzFpMNNng%2F8AiBpl69P%2FTU974uRiGMEUm6PQVNsxfDNU4I%2BbJPK8r%2FE9yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM7Acqz8fTyHbvDk%2FqKtwDtcuHENxdwiMk0UWU9Q5HkCaH0YI28qmQW2iV8xmzoQMzEAGZEERrxlTFTUcWkzaMGItZC4HtgFXTS%2FdY3Zq6Xd1GLJOz7YIyqAMhTyqsiyv9eqZslaI1zf%2Fx1qwcJuZRnz%2BRMqrQn21del1DWARCBaTANSGcs2%2BgsBhWIsBIR44Rd1pwWmQP3jhP1m2SxgJ3OvJNCCJXYC5eSaCrpIWf8f02MDkJfYrmHFNMnRtYVwnq6aOcMvwS3cwUWECEo5l%2Fz1JUmiutf9Ta4AJtfGpwagKOrclnDc32weAI0P7ntC1EoalgvwI7CYBRiH6gH6%2BH2HyXcNb8pIv482aWb%2BuVBYQSVEB39hZye3%2BlztQRECal%2BoI86FZxMzxYhMpiAX9rQZanvrpuLbliqEFdg6G5daZrLrqGemBi%2BZ0A7Qjn%2BRf8DOg4j%2BO1yV%2FDDDBhTFwJbGZf0%2BbTe3TeGqpW2Qe%2FA5Tr3z0bcCtXHI%2B4Ne6iJ5YCxRw5MPITDt9BVnzEnl7f47FbOv1mxoU4aKiHrwtJXGS5uvxkM3ZuVOt1op%2BUGPA6m5VTqp8aDfvAcxZFg2k9s4U6fN%2FPIVqMGOShpN0Y%2BdEJKlfM7ZuTlqmtDgs5RSDbIToKad8uJiiufTAwwqDzxAY6pgF1LGS65dUrJj%2FWQd8lkRKB6zI9aNxBnI%2F3%2BMn9xXfXhj4uoVf40UwR1lKRflawPKrriv9lF94VQtkeedUQdJ1Nv3gsaSN8U3zC2Te0%2BNypcFcUhqfQCNv7PyJTBtH05T0yjIN%2BScnpcexwLwkq42hM6220%2But6OeDQ6NcJRoY0Xgbf%2FJgn%2F1W8DeXyS3wk5INfC%2BPWoOe8ZThX0eCTsuemJVP9uE2e&X-Amz-Signature=e99ce78678ee9835263eb459d07a0921bbbd51cefe622dae2c5a2a9fb32572a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNNZIB6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHKrpbCAMJXPxzW8E3ODRPTY7zvnI7YGlzFpMNNng%2F8AiBpl69P%2FTU974uRiGMEUm6PQVNsxfDNU4I%2BbJPK8r%2FE9yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM7Acqz8fTyHbvDk%2FqKtwDtcuHENxdwiMk0UWU9Q5HkCaH0YI28qmQW2iV8xmzoQMzEAGZEERrxlTFTUcWkzaMGItZC4HtgFXTS%2FdY3Zq6Xd1GLJOz7YIyqAMhTyqsiyv9eqZslaI1zf%2Fx1qwcJuZRnz%2BRMqrQn21del1DWARCBaTANSGcs2%2BgsBhWIsBIR44Rd1pwWmQP3jhP1m2SxgJ3OvJNCCJXYC5eSaCrpIWf8f02MDkJfYrmHFNMnRtYVwnq6aOcMvwS3cwUWECEo5l%2Fz1JUmiutf9Ta4AJtfGpwagKOrclnDc32weAI0P7ntC1EoalgvwI7CYBRiH6gH6%2BH2HyXcNb8pIv482aWb%2BuVBYQSVEB39hZye3%2BlztQRECal%2BoI86FZxMzxYhMpiAX9rQZanvrpuLbliqEFdg6G5daZrLrqGemBi%2BZ0A7Qjn%2BRf8DOg4j%2BO1yV%2FDDDBhTFwJbGZf0%2BbTe3TeGqpW2Qe%2FA5Tr3z0bcCtXHI%2B4Ne6iJ5YCxRw5MPITDt9BVnzEnl7f47FbOv1mxoU4aKiHrwtJXGS5uvxkM3ZuVOt1op%2BUGPA6m5VTqp8aDfvAcxZFg2k9s4U6fN%2FPIVqMGOShpN0Y%2BdEJKlfM7ZuTlqmtDgs5RSDbIToKad8uJiiufTAwwqDzxAY6pgF1LGS65dUrJj%2FWQd8lkRKB6zI9aNxBnI%2F3%2BMn9xXfXhj4uoVf40UwR1lKRflawPKrriv9lF94VQtkeedUQdJ1Nv3gsaSN8U3zC2Te0%2BNypcFcUhqfQCNv7PyJTBtH05T0yjIN%2BScnpcexwLwkq42hM6220%2But6OeDQ6NcJRoY0Xgbf%2FJgn%2F1W8DeXyS3wk5INfC%2BPWoOe8ZThX0eCTsuemJVP9uE2e&X-Amz-Signature=14d3b96e036257b5cf98e321cdb849c3e65633487b9646d4769abb865a3ecc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
