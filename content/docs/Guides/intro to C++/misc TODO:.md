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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRW4KLA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFoHBlg0k3tUKVCq17R7%2B%2B24FLstsHlT4%2FSNClomD4WgIhAOAEfg3py2F%2FcHCKCD5w9AgnPydPMBCmdnAcDvgshR9EKv8DCEUQABoMNjM3NDIzMTgzODA1IgzORh%2FMH59HCZgfhRUq3AOwHeSwOs%2FjTSRYMcgQhdYQbm3Ly%2FN5u2S1zkpR20ZU9Dkp3%2B64X2o5igS7vDMsHen83nTeiFjDN%2Fid6EDCmWSlz0%2F%2FIjMBWycZH4A%2FryBm%2BqQeYG4W2bthvM8KnICryIJLaZafgV66QBC%2BA%2FGuLdO7Hh%2FgHn8%2Baczq30%2FvsShcjJ4Gx8fyXEBSaTiSlO42%2FNOuWNW1dveMMe9a6OR1H5mQPqPqMQ8rPo4JPCsSmQ51p6D8Pgmt2915IEezC0DyOeTRYKtTZnF3tW4x%2Bpj4NIEQCXknKhKj084QwC835I6jN2mFlrlW%2BK7JjkK72GPuxH4253wZMwTWfbKzW1OKsFvIXOFpwjAbhMogH%2FCaaxtzjbdX%2Bd63tJDWBwH56v5FRdgPdZSYGb6HYii8%2FlPnjM0OeBDmtPd9hZGSUlq9pBAPzhgOvb25ReLxYmenkAYiS7B6LG39GV3EKQyH1X6xts47Rr6C4dAzVyO4FPOtyLHUyokawyk6TE%2F%2BEKzPtErKxzEq3Rr76xU%2BQEpjzda7TablOp3GZegf%2BavhRfvDrsl%2FxBKo7qkrqjTrg%2FjZjGSgLLPgQ7W9ILYSXzfKl7dxFkFk0ticL6iVvKjcvei1aMrEoh8v7h%2BMZDOIhFy5djC%2FwpzBBjqkAW%2F95OkzQ8xdE3fkb4pA2LZvkC1Yb2a1sJveRo4PLRetOLQZF5ClWvPS0TsX2hW3%2F8mU1lVx5KXjqqMSKfyH7jhAkhsxlZID%2F3Kfy8FFtBz%2FRqMju29k4U4acxsL5QXP9srXyuKoDlEFXfkvTyTj7uGcIH0XOHL%2Bb8AX874aKSDh%2FEQ67CWobHqn05NulO2FqUOnXpqVY8AWP%2FmqBlDOax3SxACO&X-Amz-Signature=8b48c28cb6e01236985090502e444ff9c59bef4b9e830efa3a1ed8c95d73e604&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRW4KLA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFoHBlg0k3tUKVCq17R7%2B%2B24FLstsHlT4%2FSNClomD4WgIhAOAEfg3py2F%2FcHCKCD5w9AgnPydPMBCmdnAcDvgshR9EKv8DCEUQABoMNjM3NDIzMTgzODA1IgzORh%2FMH59HCZgfhRUq3AOwHeSwOs%2FjTSRYMcgQhdYQbm3Ly%2FN5u2S1zkpR20ZU9Dkp3%2B64X2o5igS7vDMsHen83nTeiFjDN%2Fid6EDCmWSlz0%2F%2FIjMBWycZH4A%2FryBm%2BqQeYG4W2bthvM8KnICryIJLaZafgV66QBC%2BA%2FGuLdO7Hh%2FgHn8%2Baczq30%2FvsShcjJ4Gx8fyXEBSaTiSlO42%2FNOuWNW1dveMMe9a6OR1H5mQPqPqMQ8rPo4JPCsSmQ51p6D8Pgmt2915IEezC0DyOeTRYKtTZnF3tW4x%2Bpj4NIEQCXknKhKj084QwC835I6jN2mFlrlW%2BK7JjkK72GPuxH4253wZMwTWfbKzW1OKsFvIXOFpwjAbhMogH%2FCaaxtzjbdX%2Bd63tJDWBwH56v5FRdgPdZSYGb6HYii8%2FlPnjM0OeBDmtPd9hZGSUlq9pBAPzhgOvb25ReLxYmenkAYiS7B6LG39GV3EKQyH1X6xts47Rr6C4dAzVyO4FPOtyLHUyokawyk6TE%2F%2BEKzPtErKxzEq3Rr76xU%2BQEpjzda7TablOp3GZegf%2BavhRfvDrsl%2FxBKo7qkrqjTrg%2FjZjGSgLLPgQ7W9ILYSXzfKl7dxFkFk0ticL6iVvKjcvei1aMrEoh8v7h%2BMZDOIhFy5djC%2FwpzBBjqkAW%2F95OkzQ8xdE3fkb4pA2LZvkC1Yb2a1sJveRo4PLRetOLQZF5ClWvPS0TsX2hW3%2F8mU1lVx5KXjqqMSKfyH7jhAkhsxlZID%2F3Kfy8FFtBz%2FRqMju29k4U4acxsL5QXP9srXyuKoDlEFXfkvTyTj7uGcIH0XOHL%2Bb8AX874aKSDh%2FEQ67CWobHqn05NulO2FqUOnXpqVY8AWP%2FmqBlDOax3SxACO&X-Amz-Signature=e2684fa9b4b208127d4078ce56f2c8388da4bff721f846c010de58482b501246&X-Amz-SignedHeaders=host&x-id=GetObject)

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
