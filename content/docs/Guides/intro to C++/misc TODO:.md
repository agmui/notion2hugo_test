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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIHO5OY%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3wt%2B75rZDyaRDHtcfWoxmkZ4ZAsh8tAhRdZX1%2BsLOAiBbbctVXEG%2BZHjohibhjxa%2FO8tQojoCDH5jLfut2N519Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMA%2BOsqelxEDT%2BXx7dKtwD4pRNzue54%2FP7MYVmPtsqbmJ8%2BxaEyY5j%2Fy4ZpkuqYDehfrBKiH2B2YatlclbdcVgqShVHg4ZJC1ShNRtLC%2F26wlpqlYcPIM%2FeDRUhgvCN1VMwuU06%2BFmglTZhGDtItZ0RoMkYkyVAAy4w4U2xZIpEeg7tJ1bw8c7mqw2nuNhjZ2OOqDjhVKnwoJGXD27vNyYeiAAfsc8PZUhEODpNoF8BxVGyvHcfkmZZ1XqOlYuhBwttvTP%2FouIIjG%2Bg8N%2BUHzZoCTpl7jubTbKqCEvcO1p5X1UUCY0vWy7OfnH8GhIPcYRpoRKJBT9SUXE5ZpoRAbJPcPsQjUe41jdR1SMFlr6c%2B1yfq4BgPwy2kt1g035WKcfHiy7ysC9hsRb%2B0HcoaNbjfjyr9XGuGKtxzU6y4ACri%2FnsXUOHsmy5GuCrCg2UGuaHuQkCnt5VYYDzvL2ta%2B3i5w8QUlcf3O7GPmnmebteUOXrArceR0cHfYz8yHXujjmoZIviJWD2KPgEJhR6ibTFo5zqcj4CDFzbcBlM%2B0JnhwEhBGThTr4572vPb24AJCD12UdngWH5no0adUZXbWkHbCvb1i5xzv9oyenYktgp7VFVpoMCGAa86DzPHp1hq67h%2BvUAyu7GhEmbVow0t2pyAY6pgGztsyP1FsKbyjguW5JU5mfhdE%2FoTbF5dkNZg8cNdVfgUq%2FhN7Q1HAwdbi16oAiElFqsr7a9vflO70566lIDz2wuzbDaWYjg1O0UEGr77IiBzKsV9fbikJFsrZ1LaxW49WwXuL17CXc7aLbwDyBdzyQUHXCA%2FuLRB%2FbGULf9Dv4YWslfseVwuakETPW%2FseYm6vTtmor6njCOpYZRk5Kn%2FEAPpVoALcV&X-Amz-Signature=5a3bbd8af874219e8dc53e8564318c2aa9c12679ee7d9fb25954b3670859d8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIHO5OY%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3wt%2B75rZDyaRDHtcfWoxmkZ4ZAsh8tAhRdZX1%2BsLOAiBbbctVXEG%2BZHjohibhjxa%2FO8tQojoCDH5jLfut2N519Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMA%2BOsqelxEDT%2BXx7dKtwD4pRNzue54%2FP7MYVmPtsqbmJ8%2BxaEyY5j%2Fy4ZpkuqYDehfrBKiH2B2YatlclbdcVgqShVHg4ZJC1ShNRtLC%2F26wlpqlYcPIM%2FeDRUhgvCN1VMwuU06%2BFmglTZhGDtItZ0RoMkYkyVAAy4w4U2xZIpEeg7tJ1bw8c7mqw2nuNhjZ2OOqDjhVKnwoJGXD27vNyYeiAAfsc8PZUhEODpNoF8BxVGyvHcfkmZZ1XqOlYuhBwttvTP%2FouIIjG%2Bg8N%2BUHzZoCTpl7jubTbKqCEvcO1p5X1UUCY0vWy7OfnH8GhIPcYRpoRKJBT9SUXE5ZpoRAbJPcPsQjUe41jdR1SMFlr6c%2B1yfq4BgPwy2kt1g035WKcfHiy7ysC9hsRb%2B0HcoaNbjfjyr9XGuGKtxzU6y4ACri%2FnsXUOHsmy5GuCrCg2UGuaHuQkCnt5VYYDzvL2ta%2B3i5w8QUlcf3O7GPmnmebteUOXrArceR0cHfYz8yHXujjmoZIviJWD2KPgEJhR6ibTFo5zqcj4CDFzbcBlM%2B0JnhwEhBGThTr4572vPb24AJCD12UdngWH5no0adUZXbWkHbCvb1i5xzv9oyenYktgp7VFVpoMCGAa86DzPHp1hq67h%2BvUAyu7GhEmbVow0t2pyAY6pgGztsyP1FsKbyjguW5JU5mfhdE%2FoTbF5dkNZg8cNdVfgUq%2FhN7Q1HAwdbi16oAiElFqsr7a9vflO70566lIDz2wuzbDaWYjg1O0UEGr77IiBzKsV9fbikJFsrZ1LaxW49WwXuL17CXc7aLbwDyBdzyQUHXCA%2FuLRB%2FbGULf9Dv4YWslfseVwuakETPW%2FseYm6vTtmor6njCOpYZRk5Kn%2FEAPpVoALcV&X-Amz-Signature=36d3b7f46fec4f0d49d548849e98b945499124215b90984b20bd881b2953cd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
