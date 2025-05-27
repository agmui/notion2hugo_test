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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6LSVIB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ0Ka3i54tSxnpJ7H3GIc%2B3SS3CP1TNXt4WvOfS0EIZgIhAKUr%2FykEBZyMyxmR62URBG5MdUWlQRsTgvs9hlm7IOgSKv8DCGEQABoMNjM3NDIzMTgzODA1IgxvN7ZVUWXVEk9dhLkq3APUfYZeNcFjiwRiaKIXFxFbI4PP94bmVKUtEbdhcV1LL%2BfiKcop3pxkWodGclMmo39fy6LioIg86r%2B%2F6L3KBJq1JLIp8%2FhB6JJ%2FYTb3MKiRDsys%2BA%2Fd2i%2F8iLy6bdFpXE4QzNc1RsYmyBWWZy1PC1WhjWLhdreiOLIzn5XZuniKzPTpThw0NB92wRPAEJ78dGNeaA6HzfkYMtorjvcOWm4LxUu1XGGWxwiPgAXxSpdGD%2FWfV3KBIXhuY%2B%2FpYlPnZLVpZMui6kiKyf4rT0cuzuMfGWe3j6E5PLVGwXQKab5%2Bz%2BZD4BQ354hJ7kJ6sJ0RfYDesHn%2FphW9gkw1SdBCKSqox9AHqAXinafrT8qOy8Rwcbd64kirMa0yPJfkOgkaP0%2BJmgKnYH%2FL%2F8aJ1Ml%2BA1y7K%2Fdu%2FUYNrz5wTtqwOuZsPm%2FWx%2BWyj8s85wDBMb%2Fn75JYJo8qJAl5CNSadl5qH96s3TxEMr954wxdf2u4pxeEoZb5Og%2BJ%2FwSPJPaspYfCIcLCsWp5dG7X0YU3LSiYVfmEfCk0dY5Ejvm7BDek73Jpt7W4DMfXBtva6RJ9saMBw4ouLWufcwaC2HXnuZpZTMZ%2FlBhWR3eO%2B4eqDF5%2Fj1iWEYOxUq6M4jM%2FcJNgbDDZy9fBBjqkAXJecp4luTW%2F7q9iFZH33yXJZ71zpenbyjzYDVPB9o2wTJzfBT2vpnBgjjmx%2FvTZEWJR%2FTwTYskKuR6ykvFVEtv2fEYzJK1nRYtYKvCbTM5pIpuGmTjRKfAhYer7kFaADfX4Z3Y1Lndah4p4IcvixdBVKRtQzUwhzSmrpT3pGhkUDjIElBKU%2Fo2YdyYyeg%2Ba%2FK9jkRMHsGzMn7qcG9SFZn%2F%2BoWTD&X-Amz-Signature=713445482aa17b32dcd40bfe19d55e1cf4bd37c20c1c4dce651ead88ba3fddda&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6LSVIB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ0Ka3i54tSxnpJ7H3GIc%2B3SS3CP1TNXt4WvOfS0EIZgIhAKUr%2FykEBZyMyxmR62URBG5MdUWlQRsTgvs9hlm7IOgSKv8DCGEQABoMNjM3NDIzMTgzODA1IgxvN7ZVUWXVEk9dhLkq3APUfYZeNcFjiwRiaKIXFxFbI4PP94bmVKUtEbdhcV1LL%2BfiKcop3pxkWodGclMmo39fy6LioIg86r%2B%2F6L3KBJq1JLIp8%2FhB6JJ%2FYTb3MKiRDsys%2BA%2Fd2i%2F8iLy6bdFpXE4QzNc1RsYmyBWWZy1PC1WhjWLhdreiOLIzn5XZuniKzPTpThw0NB92wRPAEJ78dGNeaA6HzfkYMtorjvcOWm4LxUu1XGGWxwiPgAXxSpdGD%2FWfV3KBIXhuY%2B%2FpYlPnZLVpZMui6kiKyf4rT0cuzuMfGWe3j6E5PLVGwXQKab5%2Bz%2BZD4BQ354hJ7kJ6sJ0RfYDesHn%2FphW9gkw1SdBCKSqox9AHqAXinafrT8qOy8Rwcbd64kirMa0yPJfkOgkaP0%2BJmgKnYH%2FL%2F8aJ1Ml%2BA1y7K%2Fdu%2FUYNrz5wTtqwOuZsPm%2FWx%2BWyj8s85wDBMb%2Fn75JYJo8qJAl5CNSadl5qH96s3TxEMr954wxdf2u4pxeEoZb5Og%2BJ%2FwSPJPaspYfCIcLCsWp5dG7X0YU3LSiYVfmEfCk0dY5Ejvm7BDek73Jpt7W4DMfXBtva6RJ9saMBw4ouLWufcwaC2HXnuZpZTMZ%2FlBhWR3eO%2B4eqDF5%2Fj1iWEYOxUq6M4jM%2FcJNgbDDZy9fBBjqkAXJecp4luTW%2F7q9iFZH33yXJZ71zpenbyjzYDVPB9o2wTJzfBT2vpnBgjjmx%2FvTZEWJR%2FTwTYskKuR6ykvFVEtv2fEYzJK1nRYtYKvCbTM5pIpuGmTjRKfAhYer7kFaADfX4Z3Y1Lndah4p4IcvixdBVKRtQzUwhzSmrpT3pGhkUDjIElBKU%2Fo2YdyYyeg%2Ba%2FK9jkRMHsGzMn7qcG9SFZn%2F%2BoWTD&X-Amz-Signature=72fcae06b368b9ebda7bbb1905d5604c80e57ccaa597cbdbb3dcc27dc8b90c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
