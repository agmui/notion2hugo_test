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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAO6RM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2EO8zo5kViCdVjgp%2F9WQtbeU2YwZw1DO29LBK6hnRwIhAIlhuoR6qMMZEDwztGh0NPbdcQ1hThI1gUUSUvp8925sKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVIXQcnhBJIolix4q3AMNe2olquSvFQ1sMi3AzwMLvnVBhpUIjczmXO8xcghb3a0tTyaTiL%2Fxd4l6Da3xn40an5BAY0JOlnbbJiphzJBJeiyR780UVgZ5igJaLbyZkowm%2BQzSSAyPuf8Nf4nRtA5mWGABdsbn1MC6BkojuZri%2BjS6127RvV1QVIYUIyKi2vrf1eu0mPEAnYPt5p%2B7ZcbmA39JKgCFqTX%2BbcvXKPvBJocOIDvoOh%2BiO%2BdIbuhhhI0DDpRZfV0mZnjhYGcBPMBvNI5DPHdw9of%2FmhZWLvyS6XqfB%2BOH3q%2BLTrbtGqnILureRiZX3jiqg12UwSjS8RBKolOUS%2F3BMOkrmt6fL80ByOxTu4UMuCabJZZmbHV5j9m74%2BvRFTHiCYmo1k4qcU3eHvoM058yHeijukW74hxFn4Znj3V4VynweE8LWLfDsZdniPqf5AMjcstKWnJNniHyaU%2BpWMa5YuDXFoHariCLBxhs1DgbB6twjUwN16WJT%2BRw87ZhdlAshLTrXs9EmTYGBXtf4WGw9Rkke8MKKE8oyZubO4JFZ05PwStUsyAOG%2BEfaONiqp3QTbSdA9T%2BQ0crzLZGYoIQyMQigQ2Sdb%2FB4%2FRtusdz8wkHIBNHm7xiAupnVdTMDN5aIg%2FrZTCKuKXEBjqkAdFTcoZkMxQDgqyW1Tf8tOOZWLA3VeXuSHQBYti7L3D%2Bi8Y59lgXlnfDT7DToKXR8O2bA5OMGBxmEHT5j%2BjiEtvZHxugh%2BOPQN3t8gEUFualCgsNtpc2CzJK5fWx0tlnDqcUsSC8RBFHyvGxt3uT9iUD1yVqp99dEnIn9bjocME%2FIqEkpv3xUf6O%2FZfN6qNrmOUc6wDnDK8YQLDPuYW11gKkWnHT&X-Amz-Signature=177a3cd9f114ee1c5035bcab4639763a3ce23cd0ddad68a36a4a3b1eb1425430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAO6RM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2EO8zo5kViCdVjgp%2F9WQtbeU2YwZw1DO29LBK6hnRwIhAIlhuoR6qMMZEDwztGh0NPbdcQ1hThI1gUUSUvp8925sKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVIXQcnhBJIolix4q3AMNe2olquSvFQ1sMi3AzwMLvnVBhpUIjczmXO8xcghb3a0tTyaTiL%2Fxd4l6Da3xn40an5BAY0JOlnbbJiphzJBJeiyR780UVgZ5igJaLbyZkowm%2BQzSSAyPuf8Nf4nRtA5mWGABdsbn1MC6BkojuZri%2BjS6127RvV1QVIYUIyKi2vrf1eu0mPEAnYPt5p%2B7ZcbmA39JKgCFqTX%2BbcvXKPvBJocOIDvoOh%2BiO%2BdIbuhhhI0DDpRZfV0mZnjhYGcBPMBvNI5DPHdw9of%2FmhZWLvyS6XqfB%2BOH3q%2BLTrbtGqnILureRiZX3jiqg12UwSjS8RBKolOUS%2F3BMOkrmt6fL80ByOxTu4UMuCabJZZmbHV5j9m74%2BvRFTHiCYmo1k4qcU3eHvoM058yHeijukW74hxFn4Znj3V4VynweE8LWLfDsZdniPqf5AMjcstKWnJNniHyaU%2BpWMa5YuDXFoHariCLBxhs1DgbB6twjUwN16WJT%2BRw87ZhdlAshLTrXs9EmTYGBXtf4WGw9Rkke8MKKE8oyZubO4JFZ05PwStUsyAOG%2BEfaONiqp3QTbSdA9T%2BQ0crzLZGYoIQyMQigQ2Sdb%2FB4%2FRtusdz8wkHIBNHm7xiAupnVdTMDN5aIg%2FrZTCKuKXEBjqkAdFTcoZkMxQDgqyW1Tf8tOOZWLA3VeXuSHQBYti7L3D%2Bi8Y59lgXlnfDT7DToKXR8O2bA5OMGBxmEHT5j%2BjiEtvZHxugh%2BOPQN3t8gEUFualCgsNtpc2CzJK5fWx0tlnDqcUsSC8RBFHyvGxt3uT9iUD1yVqp99dEnIn9bjocME%2FIqEkpv3xUf6O%2FZfN6qNrmOUc6wDnDK8YQLDPuYW11gKkWnHT&X-Amz-Signature=5e5e6774e6e22544e19dd6fde0e18440f03dce90142ebe6538b6d1afed8c2baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
