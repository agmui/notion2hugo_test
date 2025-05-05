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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXMKMNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiMqbpXHtoRKozXiJ1nRk3fosexb%2FCTCE%2B0M4STAm%2FcAiAhAexc4EBf3R1EYznR1XPpi0wltWNbtXbNJ2r0wnbppyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMzas0RhNUKSgEcXH%2FKtwD60PqVBkAEv2PomX7oK4IL90XLVgBrtBYlZPLQeVHG6P09QbYzwzYSbMCw9jgOZVXNqMAf%2BsjIhsj%2FIepPG8WuZxLKFzSWf976xNatn%2FPw5OfTwZssNs7XZqs6ejALAa%2FHzzWp%2F1ob3sF85%2F0ExuapOFW%2FFoeFI2%2FpfupxBP1OwHyPLPQIbJ2qbxUsXXbRLihtaT0Hpv9yOWD2DCrf5ULK0f2yf2O2PKrmL9RnmtFm%2FEOxD66OCEFxJpyN39azyA4B7RHi5pDA15cBeycbbOJkDMJUpXyam4k%2BOiv6EBEwgx5iinowHnGrVrXj3swJftIy%2FhylTlYJJBy0efn7d%2B7uJSrpy1Md7RVQ4cS9jtXCfITSFYE7KQ8QuQrok1OQDAepAmiDMyhEM2nuQuBVsrtSHJzA3lopaw1DH8fUGxkbFbHpR3qhNszcCZ%2By7x2Pls3%2BYEEjSXmdjvxyIhxxiy2DlG2FUdYrPAdkuSVbYBK0CBfwYT3Olc8jzqAMf5bPmV%2FcDJ8gMElQuaQGcpEGCMiYDotF2q4dvUF1Lo130CO6OvWCq9pIzqhT2%2BlW6nPO35LiPxdj2G%2Bkz2mpvf4TVZTmB%2FD6GUzVTRAqvVbD2SU6fwC2wVqoO46tSQFbCMwpJfjwAY6pgGyHga2rYq71PWrkBX4LwbYez1A7%2FI7nBsqcTSovjN7poFy62xlZDcQmdY6RCBoK7R30FshVMklTySknDt6ul26J%2FfmdCZFQsL5fkIOwa8ZWPtqL6xauySakEB2NGt5QklBUzJ%2BUjYyiNfd8d4uvjgURN%2B8JKcW7%2BPIc40kJlhWVuQjAyFst%2FSlU42tfljE0IMGb9ZFB9nxrWeK%2FGh5wbEI9vRn2Ojw&X-Amz-Signature=7893c004cd8933fd0dcaf2ef0a0f312239cea7d6c76b05ec0c0ad06e45fa4035&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXMKMNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiMqbpXHtoRKozXiJ1nRk3fosexb%2FCTCE%2B0M4STAm%2FcAiAhAexc4EBf3R1EYznR1XPpi0wltWNbtXbNJ2r0wnbppyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMzas0RhNUKSgEcXH%2FKtwD60PqVBkAEv2PomX7oK4IL90XLVgBrtBYlZPLQeVHG6P09QbYzwzYSbMCw9jgOZVXNqMAf%2BsjIhsj%2FIepPG8WuZxLKFzSWf976xNatn%2FPw5OfTwZssNs7XZqs6ejALAa%2FHzzWp%2F1ob3sF85%2F0ExuapOFW%2FFoeFI2%2FpfupxBP1OwHyPLPQIbJ2qbxUsXXbRLihtaT0Hpv9yOWD2DCrf5ULK0f2yf2O2PKrmL9RnmtFm%2FEOxD66OCEFxJpyN39azyA4B7RHi5pDA15cBeycbbOJkDMJUpXyam4k%2BOiv6EBEwgx5iinowHnGrVrXj3swJftIy%2FhylTlYJJBy0efn7d%2B7uJSrpy1Md7RVQ4cS9jtXCfITSFYE7KQ8QuQrok1OQDAepAmiDMyhEM2nuQuBVsrtSHJzA3lopaw1DH8fUGxkbFbHpR3qhNszcCZ%2By7x2Pls3%2BYEEjSXmdjvxyIhxxiy2DlG2FUdYrPAdkuSVbYBK0CBfwYT3Olc8jzqAMf5bPmV%2FcDJ8gMElQuaQGcpEGCMiYDotF2q4dvUF1Lo130CO6OvWCq9pIzqhT2%2BlW6nPO35LiPxdj2G%2Bkz2mpvf4TVZTmB%2FD6GUzVTRAqvVbD2SU6fwC2wVqoO46tSQFbCMwpJfjwAY6pgGyHga2rYq71PWrkBX4LwbYez1A7%2FI7nBsqcTSovjN7poFy62xlZDcQmdY6RCBoK7R30FshVMklTySknDt6ul26J%2FfmdCZFQsL5fkIOwa8ZWPtqL6xauySakEB2NGt5QklBUzJ%2BUjYyiNfd8d4uvjgURN%2B8JKcW7%2BPIc40kJlhWVuQjAyFst%2FSlU42tfljE0IMGb9ZFB9nxrWeK%2FGh5wbEI9vRn2Ojw&X-Amz-Signature=a4be5b6839823a751b02b165bc87e07a5857239a85eecf90af8b4e150e59ca73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
