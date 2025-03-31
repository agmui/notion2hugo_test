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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643A6JVY5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEgz%2FKoE5S%2F9giF5mKqBACY8jS7Sdq0VI5Tw4B8yxITZAiBZPHgGRBCD3g7sUxdbvJ48IJDwfLo7C%2FcFSm4fdiYYJiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvY9bJxmKFAMHb9UKtwDop9ABfOozEEQq%2BvsnJgnGma8jpD0RY1fff1F6UwGgF3%2BTnI7CURqpYDya4LaTaYkxp%2FCyuRRTqDrvEkcAYxDLFOkSrx%2F4qLskL0pkPMsfPwC1LZ9omrDsK0xfZijKVPULN0R7OhSDbNIhMA0wmUqSA26YHQb9X2xABiCQmm1mh9%2F%2B6KekMoselHwwx4Ej4ubnr%2FSjQZARg4QNsAK3yD2QHmO%2FUum3FI1kpzIrmzoZT%2Fr%2BZ4t0q07uk2YRnzRXoUlRZz%2B6FiLLVhmy1mbBQcYJFmJboAj8THz0RGIN34KJcLSuYGhC6UhtWmAgjJr2%2FXKU9DXP5naMjwMS7tqGE5sOa9LeZptIDOHEBmc%2BJ3OxZJlK4eOBIDG1dNNT%2BwU9%2B6kw851IlCmn7%2Bg%2F6q%2FUluz7h33WSpZBeERGRn6k0BfT4jOTqTR6pMdLrrqv7EtfzO9O%2BxaodXeM8Zw%2Fr3NwkZLswlam6093%2BC2Bcx70Vzj5Vp2m90mDSgWWE%2Fs3hn2lb%2F4WC9QS0Aj6B7o1bGqcXpIMIc6VyRnn7ph0EbUO6nQU10mZFgvvw5MmrNVGaHufgP%2FZtQg6AZ1tbRbsEb5XjL90TC0A5eOLe4UhDp99XkNYsKOXjaVJrdGbivoYpgw85yrvwY6pgE%2BoEUw2xNub0OJk06oA8IqiA%2BlCDUWbaA1bR6NzZgOtOM7xidWyF%2BxgEi4AHpl9YTWWsE%2F45LxJ%2B61szemLdtqaHT%2BC3mbgwzlbgnkFkv%2FQkeI8zuqXVS5YYRCk5n6TZ4LQ0d0W4qENLfPTRzwFF%2F8z510q1lWKbDGSyW0bVZdEmRCcEGxxgxxl3g8Jb%2B13iOOtYeR5fGghwpKpMS8jdslYQ3dkNMw&X-Amz-Signature=c96723fd1e219e69b07cbc45c5f41b6628bc94fbe7d994e769cc2f1c554212c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643A6JVY5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEgz%2FKoE5S%2F9giF5mKqBACY8jS7Sdq0VI5Tw4B8yxITZAiBZPHgGRBCD3g7sUxdbvJ48IJDwfLo7C%2FcFSm4fdiYYJiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvY9bJxmKFAMHb9UKtwDop9ABfOozEEQq%2BvsnJgnGma8jpD0RY1fff1F6UwGgF3%2BTnI7CURqpYDya4LaTaYkxp%2FCyuRRTqDrvEkcAYxDLFOkSrx%2F4qLskL0pkPMsfPwC1LZ9omrDsK0xfZijKVPULN0R7OhSDbNIhMA0wmUqSA26YHQb9X2xABiCQmm1mh9%2F%2B6KekMoselHwwx4Ej4ubnr%2FSjQZARg4QNsAK3yD2QHmO%2FUum3FI1kpzIrmzoZT%2Fr%2BZ4t0q07uk2YRnzRXoUlRZz%2B6FiLLVhmy1mbBQcYJFmJboAj8THz0RGIN34KJcLSuYGhC6UhtWmAgjJr2%2FXKU9DXP5naMjwMS7tqGE5sOa9LeZptIDOHEBmc%2BJ3OxZJlK4eOBIDG1dNNT%2BwU9%2B6kw851IlCmn7%2Bg%2F6q%2FUluz7h33WSpZBeERGRn6k0BfT4jOTqTR6pMdLrrqv7EtfzO9O%2BxaodXeM8Zw%2Fr3NwkZLswlam6093%2BC2Bcx70Vzj5Vp2m90mDSgWWE%2Fs3hn2lb%2F4WC9QS0Aj6B7o1bGqcXpIMIc6VyRnn7ph0EbUO6nQU10mZFgvvw5MmrNVGaHufgP%2FZtQg6AZ1tbRbsEb5XjL90TC0A5eOLe4UhDp99XkNYsKOXjaVJrdGbivoYpgw85yrvwY6pgE%2BoEUw2xNub0OJk06oA8IqiA%2BlCDUWbaA1bR6NzZgOtOM7xidWyF%2BxgEi4AHpl9YTWWsE%2F45LxJ%2B61szemLdtqaHT%2BC3mbgwzlbgnkFkv%2FQkeI8zuqXVS5YYRCk5n6TZ4LQ0d0W4qENLfPTRzwFF%2F8z510q1lWKbDGSyW0bVZdEmRCcEGxxgxxl3g8Jb%2B13iOOtYeR5fGghwpKpMS8jdslYQ3dkNMw&X-Amz-Signature=0a8181de2b3c6243f3a25f1953bced865681b041d0eda94e90cc651708f0e7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
